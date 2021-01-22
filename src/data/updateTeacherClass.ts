import connection from "./connection";

export default async function updateTeacherClass(
  id: string, missionId:string
): Promise<any> {
  //Adiciona a turma no docente através do id
  const result = await connection.raw(` 
    UPDATE LS_Teacher
    SET mission_id = '${missionId}'
    WHERE id = '${id}';

   `);

  return result[0];
}
