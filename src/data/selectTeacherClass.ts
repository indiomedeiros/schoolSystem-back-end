import { teacherClassType } from "../types/userTeacher";
import connection from "./connection";

export default async function selectTeacherClass(
  teacherClass: teacherClassType
): Promise<any> {
  //pega os ids da tuma e docentes para 
  //serem validados no addTeacherClass
  const result = await connection.raw(` 
    SELECT id FROM LS_Teacher;
    SELECT id FROM LS_Mission;

   `);

  return result[0];
}
