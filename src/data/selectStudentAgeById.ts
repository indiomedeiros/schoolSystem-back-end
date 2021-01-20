import connection from './connection';

export const selectStudentAgeById = async (id: string) : Promise<any> => {
   const result: any = await connection
      .select("*")
      .from("LS_Student")
      .where({ id })

   return result[0];
};