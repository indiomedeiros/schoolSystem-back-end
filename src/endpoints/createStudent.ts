import { Request, Response } from 'express';
import { insertStudent } from '../data/insertStudent';
import { Hobbie, Student } from '../types/Student';
import { v4 as uuidv4 } from 'uuid';
import { dateToDBFormat } from '../util/dateFormat';
import { handleDuplicateEntry } from '../util/sqlErrorHandling';

export const createStudent = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, email, birthDate, missionId, hobbies } = req.body;

        if ( !name || !email || !birthDate ) {
            errorCode = 406;
            throw new Error("Todos os campos são obrigatórios. Por favor, preencha corretamente.")
        };

        if ( !hobbies || hobbies.length === 0) {
            errorCode = 406;
            throw new Error("Informe seus hobbies");
        };

        const modelHobbies: Hobbie[] = hobbies.map((hobbie: Hobbie) => {
            return { id: uuidv4(), name: hobbie }
        });

        const student: Student = {
            id: uuidv4(),
            name: name, 
            email: email,
            birthDate: dateToDBFormat(birthDate),
            hobbies: modelHobbies
        }

        await insertStudent(student);

        res.status(200).send({
            message: "Success",
            student: student
        });
    } catch (error) {
        const sqlMessage = handleDuplicateEntry(error.sqlMessage, 'E-mail');
        res.status(errorCode).send(sqlMessage || error.message);
    };
};