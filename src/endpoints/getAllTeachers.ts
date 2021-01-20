import { Request, Response } from "express";
import selectTableTeacher from "../querys/selectTableTeacher";

//DESAFIO: pegar todos os docentes
export default async function getAllTeachers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    //função para pegar todos docentes no banco de dados
    const result = await selectTableTeacher();

    res.status(200).send(result);
  } catch (error) {
    res.send(error.message || error.sqlMessage);
  }
}
