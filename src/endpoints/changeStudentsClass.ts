import { Request, Response } from 'express';
import updateStudentsClass from '../data/updateStudentsClass';

export const changeStudentsClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const { studentId, missionId } = req.params;
        
        const newClassStudent = await updateStudentsClass(studentId, missionId)

        res
            .status(200)
            .send({message: "Alteração realizada com sucesso!"})
    } catch (error) {
        res
            .status(errorCode)
            .send(error.sqlMessage || error.message);
    }
}