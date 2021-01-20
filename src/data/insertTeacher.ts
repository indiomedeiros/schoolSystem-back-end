import connection from "./connection";
import { userTeacher } from "../types/userTeacher";

//Inserir dados na tabela de professores
export default async function insertTeacher(
  userTeacher: userTeacher
): Promise<void> {
  //cria um array de valores para adicionar ao banco (LS_Specialty)
  const specialtiesValues = userTeacher.specialties.map((specialty) => {
    return `(
      '${specialty.id}', '${specialty.name}'
    )`;
  });
  //cria um array de valores para a LS_Teacher_Specialty
  const teacherSpecialtyValues = userTeacher.specialties.map((specialty) => {
    return `(
      '${userTeacher.id}', '${specialty.id}'
    )`;
  });

  await connection.raw(`
    INSERT INTO LS_Teacher (id, name, email, birth_date)
    VALUES ('${userTeacher.id}', '${userTeacher.name}', '${userTeacher.email}', '${userTeacher.birth_date}');
    
    INSERT INTO LS_Specialty (id, name)
    VALUES ${specialtiesValues};
  
    INSERT INTO LS_Teacher_Specialty (teacher_id, specialty_id)
    VALUES ${teacherSpecialtyValues};

    `);
}
