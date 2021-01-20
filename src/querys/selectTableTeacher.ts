import connection from "../data/connection";
import { userTeacher } from "../types/userTeacher";

//pegegar todos os docentes na tabela de docentes (banco de dados)
export default async function selectTableTeacher(): Promise<userTeacher> {

 const result = await connection.raw(`
    SELECT * FROM LS_Teacher 
    `);
    return result[0]
}