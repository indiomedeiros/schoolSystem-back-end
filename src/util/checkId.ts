import connection from '../data/connection';

export async function checkMissionId(id: string): Promise<any> {
    const result = await connection
        .select ('*')
        .from ('LS_Mission')
        .where ({id})

    return result[0]
}

export async function checkStudentId(id: string): Promise<any> {
    const result = await connection
        .select ('*')
        .from ('LS_Student')
        .where ({id})
    
    return result[0]
}