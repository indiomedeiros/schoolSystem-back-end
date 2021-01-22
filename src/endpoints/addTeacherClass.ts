import { Request, Response } from "express";
import checkTeacher from "../util/checkTeacher";
import { teacherClassType } from "../types/userTeacher";
import updateTeacherClass from "../data/selectTeacherClass";
import selectTeacherClass from "../data/selectTeacherClass";
import checkAddTeacherClass from "../util/checkAddTeacherClass";

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

    // a função compara o id da requisição com o
    //id do docente/tumar existente no bando de dados
    checkAddTeacherClass(result, id, 0, res, "id");
    checkAddTeacherClass(result, mission_id, 1, res, "mission_id");

    //adiciona a turma nos dados do docente
    await updateTeacherClass(teacherClass);

    res.status(200).send("professor adicionado na turma!");
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
