import { Request, Response } from "express";
import checkTeacher from "../util/checkTeacher";
import { userTeacher } from "../types/userTeacher";
import { v4 as uuidv4 } from "uuid";
import insertTeacher from "../querys/insertTeacher";
import formatDate from "../util/formatDate";

export default async function createTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birth_date } = req.body;

    //validaçãodo do docente
    checkTeacher(name, "'name'", res.statusCode);
    checkTeacher(email, "'email'", res.statusCode);
    checkTeacher(birth_date, "'birth_date'", res.statusCode);

    //atribuição ao padrão de usuário (proferssor/professora)
    const userTeacher: userTeacher = {
      id: uuidv4(),
      name: name,
      email: email,
      //formatDate - função de formatação da data
      birth_date: formatDate(birth_date),
    };

    //adicionando usuário no banco de dados
    await insertTeacher(userTeacher);

    res.status(200).send(userTeacher);
  } catch (error) {
    res.send(error.message || error.msqlMessage);
  }
}
