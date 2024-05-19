CREATE DATABASE getionHorario;

CREATE TABLE Administradores (
    id_Administrador INT PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(100),
    contraseña VARCHAR(50)
);

CREATE TABLE Asignaturas (
    id_Materia INT PRIMARY KEY,
    nombre VARCHAR(100),
    requisitos VARCHAR(200),
    semestre INT,
    paralelo CHAR(1),
    id_docente INT,
    FOREIGN KEY (id_docente) REFERENCES Docentes(id_docente)
);

CREATE TABLE Horario (
    id_horario INT PRIMARY KEY,
    id_Materia INT,
    dias VARCHAR(50),
    hora_inicio TIME,
    hora_salida TIME,
    FOREIGN KEY (id_Materia) REFERENCES Asignaturas(id_Materia)
);

CREATE TABLE Docentes (
    id_docente INT PRIMARY KEY,
    especialidad VARCHAR(100),
    correo VARCHAR(100)
);

CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(100),
    id_Materia INT,
    FOREIGN KEY (id_Materia) REFERENCES Asignaturas(id_Materia)
);
