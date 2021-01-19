import connection from './connection';
import { Student } from '../types/Student';

export const insertStudent = async (student: Student) : Promise<void> => {

    const hobbyValues = student.hobbies.map((hobby) => {
        return `('${hobby.id}', '${hobby.name}')`
    });

    const studentHobbyValues = student.hobbies.map((hobby) => {
        return `('${student.id}', '${hobby.id}')`
    });

    await connection.raw(`
        INSERT INTO LS_Student 
            (id, name, email, birth_date, mission_id)
        VALUES
            (
                '${student.id}',
                '${student.name}',
                '${student.email}',
                '${student.birthDate}',
                '${student.missionId}'
            );

        INSERT INTO LS_Hobby 
            (id, name)
        VALUES ${hobbyValues};    

        INSERT INTO LS_Student_Hobby 
            (student_id, hobby_id)
        VALUES ${studentHobbyValues};
    `);    
};