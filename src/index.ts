import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { createNewMission } from './endpoints/createNewMission';
import { createStudent } from './endpoints/createStudent';
import { getStudentAgeById } from './endpoints/getStudentAgeById';
import { getStudentsByMission } from './endpoints/getStudentsByMission';
import createTeacher from './endpoints/createTeacher';

const app: Express = express();
app.use(express.json());
app.use(cors());


// Endpoints!
app.get('/student/:id', getStudentAgeById);
app.get('/student/mission/:id', getStudentsByMission);
app.post('/student', createStudent);
app.post('/mission', createNewMission);
app.post('/teacher', createTeacher);



const server = app.listen(
    process.env.PORT || 3003,
    () => {
        if(server){
            const address = server.address() as AddressInfo
            console.log(`Server is running in http://localhost: ${address.port}`)
        } else {
            console.log("Failure upon starting server.")
        }
    }
)