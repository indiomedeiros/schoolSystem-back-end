import { Request, Response } from 'express';
import insertNewClass from '../data/insertNewClass';
import { v4 as uuidv4 } from 'uuid';

export const createNewClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        const { name, start_date, end_date, module, period } = req.body

        if (!name || !start_date || !end_date || !module || !period) {
            errorCode = 422
            throw new Error('Por favor, preencha todos os campos para inserir uma nova turma.')
        }

        const id = uuidv4();

        await insertNewClass(mission)

        res
            .status(200)
            .send({
                message: "Turma criada com sucesso!",
                mission: {
                    id: id,
                    name: name,
                    start_date: start_date,
                    end_date: end_date,
                    module: module,
                    period: period
                }
            })

    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.sqlMessage || error.message})
    }
}