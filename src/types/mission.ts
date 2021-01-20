export enum MissionModules {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    UNDEFINED = "undefined"
}

export enum MissionPeriod {
    FULLTIME = "full_time",
    NIGHT = "night"
}

export type Mission = {
    id: string,
    name: string,
    start_date: string,
    end_date: string,
    module: MissionModules,
    period: MissionPeriod
}