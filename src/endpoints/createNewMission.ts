import { Request, Response } from "express";
import insertNewMission from "../data/insertNewMission";
import { v4 as uuidv4 } from "uuid";
import { Mission } from "../types/mission";
import { dateToDBFormat } from "../util/dateFormat";
import { handleDuplicateEntry } from "../util/sqlErrorHandling";

export const createNewMission = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 400;
  try {
    const { name, start_date, end_date, module, period } = req.body;
    let editedName = name;

    if (!name || !start_date || !end_date || !period) {
      errorCode = 422;
      throw new Error(
        "Por favor, preencha todos os campos para inserir uma nova turma."
      );
    }

    if (period === "night") {
      editedName = (name as string) + "-na-night";
    }

    const mission: Mission = {
      id: uuidv4(),
      name: editedName,
      start_date: dateToDBFormat(start_date),
      end_date: dateToDBFormat(end_date),
      module: module,
      period: period,
    };

    await insertNewMission(mission);

    res.status(200).send({
      message: `Missão ${name} criada com sucesso!`,
      mission: mission,
    });
  } catch (error) {
    const sqlMessage = handleDuplicateEntry(error.sqlMessage, "Nome da turma");
    res.status(errorCode).send(sqlMessage || error.message);
  }
};
