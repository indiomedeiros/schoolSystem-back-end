import connection from "../data/connection";
import { userTeacher } from "../types/userTeacher";

//Inserir dados na tabela de professores
export default async function insertTeacher(
  userTeacher: userTeacher
): Promise<void> {
  console.log(userTeacher.birth_date);

  await connection.raw(`
    INSERT INTO LS_Teacher (id, name, email, birth_date)
    VALUES ('${userTeacher.id}', '${userTeacher.name}', '${userTeacher.email}', '${userTeacher.birth_date}');
    `);
}
