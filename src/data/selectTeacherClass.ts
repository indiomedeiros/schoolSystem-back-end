import { teacherClassType } from "../types/userTeacher";
import connection from "./connection";

export default async function selectTeacherClass(
  teacherClass: teacherClassType
): Promise<any> {
  //colocar um return resulta para fazer conferencia de dados
  const result = await connection.raw(` 
    SELECT id FROM LS_Teacher;
    SELECT id FROM LS_Mission;

   `);

  return result[0];
}
