export const insertMission = `INSERT INTO LS_Mission (id, name, start_date, end_date, module, period) VALUES 
(
    '1',
    'Dumont',
    '2020-09-19',
    '2021-04-21',
    '4',
    'full time'
),
(
    '2',
    'Melo',
    '2020-06-06',
    '2021-03-30',
    '5',
    'full time'
)`

export const insertTeacher = `INSERT INTO LS_Teacher (id, name, email, birth_date, mission_id) VALUES 
(
    '1',
    'Indio',
    'indio@gmail.com',
    '1988-07-11',
    '1'
),
(
    '2',
    'Marina',
    'marina@gmail.com',
    '1988-03-30',
    '2'
)`

export const insertSpecialty = `INSERT LS_Specialty (id, name)
VALUES ("1", "React"),
    ("2", "Redux"),
    ("3", "CSS"),
    ("4", "Testes"),
    ("5", "Typescript"),
    ("6", "POO"),
    ("7", "Backend")
`

export const insertTeacherSpecialty = `INSERT LS_Teacher_Specialty (teacher_id, specialty_id)
VALUES 
    ("1", "1"),
    ("2", "2"),
    ("1", "5"),
    ("2", "6")
`

export const insertStudent = `INSERT LS_Student (id, name, email, birth_date)
VALUES 
    ("1", "lais", "lais@limao.com", "1955-11-01"),
    ("2", "Darvas", "darvas@pedro.com", "1960-07-15")
`       

export const insertHobbies = `INSERT LS_Hobby (id, name)
VALUES 
    ("1", "dancar"),
    ("2", "ler"),
    ("3", "programar"),
    ("4", "cantar"),
    ("5", "pedalar")
`

export const insertStudentHobby = `INSERT LS_Student_Hobby (student_id, hobby_id)
VALUES 
    ("1", "1"),
    ("2", "2"),
    ("1", "5"),
    ("2", "3"),
    ("2", "4")
`