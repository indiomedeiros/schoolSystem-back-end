import { Request, Response } from "express";
import checkTeacher from "../util/checkTeacher";
import { teacherClassType } from "../types/userTeacher";
import updateTeacherClass from "../data/selectTeacherClass";
import selectTeacherClass from "../data/selectTeacherClass";

export default async function addTeacherClass(req: Request, res: Response) {
  try {
    const { mission_id } = req.body;
    const { id } = req.params;

    //validação dos id's
    checkTeacher(id, "'id'", res);
    checkTeacher(mission_id, "'mission_id'", res);

    const teacherClass: teacherClassType = {
      id: id,
      mission_id: mission_id,
    };

    //pega os dados no banco de dados
    const result = await selectTeacherClass(teacherClass);
    console.log(result[1]);

    //compara o id da requisição com o id do docente no banco de dados
    const resultSearcherTeacherId = result[0].findIndex((idFilter: any) => {
      return idFilter.id === id;
    });

    //validação do docente
    if (resultSearcherTeacherId === -1) {
      res.statusCode = 404;
      throw new Error("Docente não foi encontrado. Verifique o id");
    }

    //compara o id da requisição com o id da turma no banco de dados
    const resultSearcherClassId = result[1].findIndex((idFilter: any) => {
      return idFilter.id === mission_id;
    });

    //validação da turma
    if (resultSearcherClassId === -1) {
      res.statusCode = 404;
      throw new Error("A Turma não foi encontrada. Verifique o mission_id");
    }
    //atualiza a turma que o docente será responsável
    await updateTeacherClass(teacherClass);

    res.status(200).send("professor adicionado na turma!");
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
