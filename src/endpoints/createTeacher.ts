import { Request, Response } from "express";
import checkTeacher from "../util/checkTeacher";
import { specialty, userTeacher } from "../types/userTeacher";
import { v4 as uuidv4 } from "uuid";
import insertTeacher from "../data/insertTeacher";
import formatDate from "../util/formatDate";
import checkSpecialty from "../util/checkSpecialty";

export default async function createTeacher(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const { name, email, birth_date, specialties } = req.body;

    //validaçãodo do docente
    checkTeacher(name, "'name'", res);
    checkTeacher(email, "'email'", res);
    checkTeacher(birth_date, "'birth_date'", res);

    //validação da especialidade
    if (!specialties || specialties.lenght === 0) {
      res.statusCode = 422;
      throw new Error("informe uma ou mais especialidades");
    }
    for (let item of specialties) {
      checkSpecialty(item);
    }

    //modelando o array de string para especialidades
    const arraySpecialtys: specialty[] = specialties.map(
      (specialty: specialty) => {
        return { id: uuidv4(), name: specialty };
      }
    );

    //atribuição ao padrão de usuário (proferssor/professora)
    const userTeacher: userTeacher = {
      id: uuidv4(),
      name: name,
      email: email,
      //formatDate - função de formatação da data
      birth_date: formatDate(birth_date),
      specialties: arraySpecialtys
    };

    //adicionando usuário no banco de dados
    await insertTeacher(userTeacher);

    res.status(200).send(userTeacher);
  } catch (error) {
    res.send(error.sqlMessage || error.message );
  }
}
