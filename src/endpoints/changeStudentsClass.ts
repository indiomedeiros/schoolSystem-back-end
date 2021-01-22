import { Request, Response } from 'express';
import { updateStudentsClass } from '../data/updateStudentsClass';
import { checkId}  from '../data/checkId'

export const changeStudentsClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const { studentId } = req.params;
        const { missionId } = req.body;

        const missionResult = await checkId(missionId, "LS_Mission")
        if(!missionResult) {
            errorCode = 404
            throw new Error('Turma não existe. Por favor, informe um Id de turma válido.')
        }

        const studentResult = await checkId(studentId, "LS_Student")
        if(!studentResult) {
            errorCode = 404
            throw new Error('Estudante não encontrade. Informe um Id de estudante válido.')
        }
        
        await updateStudentsClass(studentId, missionId)

        res
            .status(200)
            .send({message: "Alteração realizada com sucesso!"})
    } catch (error) {
        res
            .status(errorCode)
            .send(error.sqlMessage || error.message);
    }
}