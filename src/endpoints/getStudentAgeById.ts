import { Request, Response } from 'express';
import { checkId } from '../data/checkId';
import { getAge } from '../util/dateFormat';

export const getStudentAgeById = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { id } = req.params;
        const student = await checkId(id, "LS_Student");
        
        if ( !student ) {
            errorCode = 404;
            throw new Error("Estudante não encontrado");
        };

        res.status(200).send({
            message: "Success",
            studentAge: getAge(student.birth_date)
        });

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    };
};