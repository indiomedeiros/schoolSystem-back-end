import { specialtyEnum } from "../types/userTeacher";


export default function checkSpecialty(specialty: string):void  {
   
   if(specialty === specialtyEnum.REACT || 
      specialty === specialtyEnum.REDUX|| 
      specialty === specialtyEnum.CSS || 
      specialty === specialtyEnum.TESTES || 
      specialty === specialtyEnum.TSC || 
      specialty === specialtyEnum.POO || 
      specialty === specialtyEnum.BACKEND 
      ){
   }else{
    throw new Error(`A especialidade '${specialty}' não existe. especialidades só podem ser: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend` )
   }
   
}