import connection from '../data/connection';

const createTables = async (): Promise<void> => {
    try {
        await connection.raw(`
            CREATE TABLE LS_Mission (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(40) NOT NULL UNIQUE,
                start_date DATE NOT NULL,
                end_date DATE NOT NULL,
                module ENUM ("1","2","3","4", "5","6","7", "undefined") DEFAULT "undefined",
                period  ENUM ("night", "full time")  NOT NULL
            );
            
            CREATE TABLE LS_Student (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                mission_id VARCHAR(255),
                FOREIGN KEY (mission_id) REFERENCES LS_Mission(id)
            );
            
            CREATE TABLE LS_Teacher (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                birth_date DATE NOT NULL,
                mission_id VARCHAR(255),
                FOREIGN KEY (mission_id) REFERENCES LS_Mission(id)
            );
            
            CREATE TABLE LS_Hobby (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL
            );
            
            CREATE TABLE LS_Specialty(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(50) NOT NULL
            );
            
            CREATE TABLE LS_Student_Hobby(
                student_id VARCHAR(255) NOT NULL,
                hobby_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (student_id) REFERENCES LS_Student(id),
                FOREIGN KEY (hobby_id) REFERENCES LS_Hobby(id)
            );
            
            CREATE TABLE LS_Teacher_Specialty(
                teacher_id VARCHAR(255) NOT NULL,
                specialty_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (teacher_id) REFERENCES LS_Teacher(id),
                FOREIGN KEY (specialty_id) REFERENCES LS_Specialty(id)
            );
        `);

        console.log('Tables created successfully, run "npm run populate" to populate the Tables with dummy values');   
        connection.destroy();   
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    };
};

createTables();