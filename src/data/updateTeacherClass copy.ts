import { teacherClassType } from "../types/userTeacher";
import checkTeacher from "../util/checkTeacher";
import connection from "./connection";

export default async function updateTeacherClass(
  teacherClass: teacherClassType
): Promise<any> {
  //colocar um return resulta para fazer conferencia de dados
  const result = await connection.raw(` 
    UPDATE LS_Teacher
    SET mission_id = '${teacherClass.mission_id}'
    WHERE id = '${teacherClass.id}';

   `);

  return result[0];
}
