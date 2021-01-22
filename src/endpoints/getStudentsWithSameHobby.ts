import { Request, Response } from 'express';
import { selectStudentsWithSameHobby } from '../data/selectStudentsWithSameHobby';
import { Student } from '../types/Student';
import { dateFormat } from '../util/dateFormat';

export const getStudentsWithSameHobby = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const q = req.query.q as string;
        const students = await selectStudentsWithSameHobby(q);

        if ( !q ) {
            errorCode = 404;
            throw new Error("Nenhum parametro de busca foi passado");
        }

        if ( students.length === 0 ) {
            errorCode = 404;
            throw new Error("Nenhum estudante com esse hobby");
        }

        const studentsModel : Student[] = students.map((student: Student) => {
            return (
                {
                    id: student.id,
                    name: student.name,
                }
            );
        });

        res.status(200).send({
            message: "Success",
            hobby: students[0].hobby,
            students: studentsModel
        });

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};