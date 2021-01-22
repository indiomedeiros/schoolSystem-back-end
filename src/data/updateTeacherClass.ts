import { teacherClassType } from "../types/userTeacher";
import connection from "./connection";

export default async function updateTeacherClass(
  teacherClass: teacherClassType
): Promise<any> {
  //Adiciona a turma no docente através do id
  const result = await connection.raw(` 
    UPDATE LS_Teacher
    SET mission_id = '${teacherClass.mission_id}'
    WHERE id = '${teacherClass.id}';

   `);

  return result[0];
}
