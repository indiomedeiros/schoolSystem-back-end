export type Student = {
    id: string, 
    name: string,
    email: string,
    birthDate: string,
    hobbies: Hobbie[],
    missionId: string
};

export type Hobbie = {
    id: string,
    name: string
};