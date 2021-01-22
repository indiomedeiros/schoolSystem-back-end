
//typo para professores
export type userTeacher = {
    id: string,
	name: string,
	email: string,
    birth_date: string,
    specialties: specialty[]
} 
//tipo para especialidade 
export type specialty = {
    id: string,
    name: specialtyEnum
}

//para validação da especialidade
export enum specialtyEnum {
    REACT = "React",
    REDUX = "Redux",
    CSS = "CSS",
    TESTES = "Teste",
    TSC = "Typescript",
    POO = "Programação Orientada a Objetos",
    BACKEND = "Backend"
} 

//tipo para adicionar professores na turma
export type teacherClassType = {
    id: string,
    mission_id: string
}

