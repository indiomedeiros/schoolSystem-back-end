import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { createNewMission } from './endpoints/createNewMission';
import { createStudent } from './endpoints/createStudent';
import { getStudentAgeById } from './endpoints/getStudentAgeById';

const app: Express = express();
app.use(express.json());
app.use(cors());


// Endpoints!

app.post('/student', createStudent);

app.get('/student/:id', getStudentAgeById);

app.post('/mission', createNewMission)




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