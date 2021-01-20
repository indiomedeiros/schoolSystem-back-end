//validação do body do createTeacher

export default function checkTeacher(
  req: string,
  props: string,
  resStatusCode: number
) {
  let Message = `(verifique o body) ausência da propriedade `;
  if (!req || req === undefined) {
    resStatusCode = 404;
    throw new Error(Message + props);
  }
}
