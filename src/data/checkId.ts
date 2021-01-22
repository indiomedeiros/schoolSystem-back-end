import connection from './connection';

export async function checkId(id: string, table: string ): Promise<any> {
    const result = await connection
        .select ('*')
        .from (`${table}`)
        .where ({id})

    return result[0]
}
