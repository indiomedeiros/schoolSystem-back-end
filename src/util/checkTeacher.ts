import { Response } from "express";

//validação do body do createTeacher

export default function checkTeacher(
  req: string,
  props: string,
  res: Response
) {
  let Message = `(verifique o body) ausência da propriedade `;
  
  if (!req || req === undefined) {
    res.statusCode= 422;
    throw new Error(Message + props);
  }
}
