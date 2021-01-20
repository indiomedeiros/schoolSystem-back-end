import { Request, Response } from 'express';
import insertNewMission from '../data/insertNewMission';
import { v4 as uuidv4 } from 'uuid';
import { Mission } from '../types/mission'
import { dateToDBFormat } from '../util/dateFormat';

export const createNewMission = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try {
        let { name, start_date, end_date, module, period } = req.body

        if (!name || !start_date || !end_date || !module || !period) {
            errorCode = 422
            throw new Error('Por favor, preencha todos os campos para inserir uma nova turma.')
        }

        if (period === "night"){
            name = name as string + "-na-night"
        }

        const mission: Mission = {
            id: uuidv4(),
            name: name,
            start_date: dateToDBFormat(start_date),
            end_date: dateToDBFormat(end_date),
            module: module,
            period: period
        }

        await insertNewMission(mission)

        res
            .status(200)
            .send({
                message: "Turma criada com sucesso!", 
                mission: mission
            })

    } catch (error) {
        res
            .status(errorCode)
            .send({message: error.sqlMessage || error.message})
    }
}