import connection from './connection';

export const selectStudentsWithSameHobby = async (hobby: string) : Promise<any> => {
   const result: any = await connection.raw(`
        SELECT 
            LS_Student.id, 
            LS_Student.name, 
            LS_Hobby.name as hobby
        FROM LS_Student
        LEFT JOIN LS_Student_Hobby 
        ON LS_Student_Hobby.student_id = LS_Student.id
        LEFT JOIN LS_Hobby 
        ON LS_Hobby.id = LS_Student_Hobby.hobby_id
        WHERE LS_Hobby.name = '${hobby}';
   `)

   return result[0];
};