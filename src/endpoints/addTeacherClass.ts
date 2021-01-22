import { Request, Response } from "express";
import { checkId } from "../data/checkId";
import updateTeacherClass from "../data/updateTeacherClass";

export default async function addTeacherClass(req: Request, res: Response) {
  let errorCode: number = 400
  try {
    const { missionId } = req.body;
    const { teacherId} = req.params;

    //validação dos id's
    if(!missionId){
      errorCode = 422
      throw new Error("Preencha o id da turma")
    }

    if(!teacherId){
      errorCode = 422
      throw new Error("Parâmetro 'teacherId' está faltando ")
    }
    //pega os dados da turma e do docente no banco de dados
    //esses dados são para serem validados
    const teacherResult = await checkId(teacherId, "LS_Teacher");
    if(!teacherResult) {
      errorCode = 404
      throw new Error('Docente não encontrade. Informe um Id de docente válido.')
    }

    const missionResult = await checkId(missionId, "LS_Mission");
    if(!missionResult) {
      errorCode = 404
      throw new Error('Turma não encontrada. Informe um Id de turma válido.')
    }
    // a função compara o id da requisição com o
    //id do docente/tumar existente no bando de dados
    
    //adiciona a turma nos dados do docente
    await updateTeacherClass(teacherId, missionId);

    res.status(200).send(`'${teacherResult.name}' agora vai dar aula na turma '${missionResult.name}'!`);
  } catch (error) {
    res.status(errorCode).send(error.sqlMessage || error.message);
  }
}
