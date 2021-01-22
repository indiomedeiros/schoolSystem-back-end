import connection from '../data/connection';
import { 
    insertMission, 
    insertTeacher, 
    insertSpecialty, 
    insertTeacherSpecialty,
    insertStudent,
    insertHobbies,
    insertStudentHobby
} from './data';

const populateTables = async (): Promise<void> => {
    try {
        await connection.raw(`
            ${insertMission};
            ${insertTeacher};
            ${insertSpecialty};
            ${insertTeacherSpecialty};
            ${insertStudent};
            ${insertHobbies};
            ${insertStudentHobby};
        `);

        console.log('All the tables were populated successfuly');
        connection.destroy();        
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

populateTables();