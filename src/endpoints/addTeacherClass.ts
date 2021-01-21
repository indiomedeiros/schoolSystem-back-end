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

    //pega os dados da turma e do docente no banco de dados
    //esses dados são para serem validados
    const result = await selectTeacherClass(teacherClass);
    console.log(result[1]);

    //compara o id da requisição com o
    //id do docente existente no bando de dados
    const resultSearcherTeacherId = result[0].findIndex((idFilter: any) => {
      return idFilter.id === id;
    });

    //validação do id do docente
    if (resultSearcherTeacherId === -1) {
      res.statusCode = 404;
      throw new Error("Docente não foi encontrado. Verifique o id");
    }

    //compara o id da requisição com o 
    //id da turma existente no banco de dados
    const resultSearcherClassId = result[1].findIndex((idFilter: any) => {
      return idFilter.id === mission_id;
    });

    //validação do id da turma
    if (resultSearcherClassId === -1) {
      res.statusCode = 404;
      throw new Error("A Turma não foi encontrada. Verifique o mission_id");
    }
    //adiciona a turma nos dados do docente
    await updateTeacherClass(teacherClass);

    res.status(200).send("professor adicionado na turma!");
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
