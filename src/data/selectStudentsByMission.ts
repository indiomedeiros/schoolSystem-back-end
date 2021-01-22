import connection from "./connection";

export const selectStudentsByMission = async (
  missionId: string
): Promise<any> => {
  const result: any = await connection.raw(`
        SELECT 
            LS_Mission.name as missionName, 
            LS_Student.id, 
            LS_Student.name,
            email,
            birth_date as birthDate
        FROM LS_Mission
        LEFT JOIN LS_Student
        ON LS_Mission.id = LS_Student.mission_id
        WHERE LS_Mission.id = '${missionId}';
   `);

  return result[0];
};
