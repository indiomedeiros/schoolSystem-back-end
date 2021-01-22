import { Response } from "express";

export default function checkAddTeacherClass(
  resultselectTeacherClass: any,
  id: string,
  index: number,
  res: Response,
  propsMessage: string
): void {

  //compara o id da requisição com o
  //id do docente/turma existente no bando de dados
  const resultSearcherTeacherId = resultselectTeacherClass[index].findIndex(
    (idFilter: any) => {
      return idFilter.id === id;
    }
  );

  if (resultSearcherTeacherId === -1) {
    res.statusCode = 404;
    throw new Error(`este id não existe no banco de dados. Verifique o "${propsMessage}"`);
  }
}
