import { Request, Response } from 'express';
import updateStudentsClass from '../data/updateStudentsClass';

export const addStudentToClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const { studentId, missionId } = req.params;
        
        const newClassStudent = await updateStudentsClass(studentId, missionId)

        res
            .status(200)
            .send({message: "Estudante adicionado à mission com sucesso"})
    } catch (error) {
        res
            .status(errorCode)
            .send(error.sqlMessage || error.message);
    }
}