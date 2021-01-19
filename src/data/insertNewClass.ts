import connection from './connection';


export default async function insertNewClass(mission: Mission): Promise<void> {
    await connection.raw(`
        INSERT INTO LS_Mission (id, name, start_date, end_date, module, period)
        VALUES (
            '%${id}%', 
            '%${name}%', 
            '%${start_date}%', 
            '%${end_date}%', 
            '%${module}%', 
            '%${period}%'
        )
    `)
}