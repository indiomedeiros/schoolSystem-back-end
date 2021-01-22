import connection from "./connection";
import { Mission } from "../types/mission";

export default async function insertNewMission(
  mission: Mission
): Promise<void> {
  await connection.raw(`
        INSERT INTO LS_Mission (id, name, start_date, end_date, module, period)
        VALUES (
            '${mission.id}', 
            '${mission.name}', 
            '${mission.start_date}', 
            '${mission.end_date}', 
            '${mission.module}', 
            '${mission.period}'
        );
    `);
}
