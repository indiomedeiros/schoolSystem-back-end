import connection from './connection';


export async function updateStudentsClass(studentId: string, missionId: string): Promise<void> {
    await connection.raw(`
        UPDATE LS_Student
        SET mission_id = '${missionId}'
        WHERE id = '${studentId}';
    `)
}