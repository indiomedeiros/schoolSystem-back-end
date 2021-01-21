import { Request, Response } from 'express';
import { selectStudentsByMission } from '../data/selectStudentsByMission';
import { Student } from '../types/Student';
import { dateFormat } from '../util/dateFormat';

export const getStudentsByMission = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { id } = req.params;
        const students = await selectStudentsByMission(id);

        if ( students.length === 0 ) {
            errorCode = 400;
            throw new Error("Turma não encontrada");
        }

        if ( !students[0]?.id) {
            errorCode = 404;
            throw new Error("Essa turma ainda não possui estudantes");
        };

        const studentsModel : Student[] = students.map((student: Student) => {
            return (
                {
                    id: student.id,
                    name: student.name,
                    email: student.email,
                    birthDate: dateFormat(student.birthDate)
                }
            );
        });

        res.status(200).send({
            message: "Success",
            missionName: students[0].missionName,
            students: studentsModel
        });

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};