const faker = require('faker');
const mysql = require('mysql2');

// Configura la conexión a tu base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Reemplaza con tu usuario de MySQL
  password: '',  // Reemplaza con tu contraseña de MySQL
  database: 'getiondocentesuleam'  // Nombre de tu base de datos
});

// Conecta a la base de datos
connection.connect(function(err) {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }

  console.log('Conectado como ID ' + connection.threadId);

  // Llena las tablas con datos falsos
  populateTables();
});

// Función para llenar las tablas con datos falsos
function populateTables() {
  populateAdministradoresTable();
  populateAlumnosTable();
  populateDocentesTable();
  populateAsignaturasTable();
  populateHorariosTable();
}

// Genera datos falsos y los inserta en la tabla 'administradores'
function populateAdministradoresTable() {
  let administradores = [];

  for (let i = 1; i <= 5; i++) {
    administradores.push([
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      faker.internet.password(),
      faker.image.avatar(),
      faker.random.number({ min: 1, max: 3 })  // Rol de administrador (asume que tienes 3 roles)
    ]);
  }

  let sql = 'INSERT INTO administradores (nombres, apellidos, correo, contraseña, img, rol_admin) VALUES ?';
  connection.query(sql, [administradores], function(err, result) {
    if (err) throw err;
    console.log('Tabla administradores llenada con éxito');
  });
}

// Genera datos falsos y los inserta en la tabla 'alumnos'
function populateAlumnosTable() {
  let alumnos = [];

  for (let i = 1; i <= 10; i++) {
    alumnos.push([
      faker.name.firstName(),
      faker.internet.email(),
      faker.random.uuid(),  // Cédula de identidad simulada como UUID
      faker.image.avatar(),
      faker.random.number({ min: 1, max: 3 })  // Rol de alumno (asume que tienes 3 roles)
    ]);
  }

  let sql = 'INSERT INTO alumnos (nombre, correo, cedula, img, rol_alumno) VALUES ?';
  connection.query(sql, [alumnos], function(err, result) {
    if (err) throw err;
    console.log('Tabla alumnos llenada con éxito');
  });
}

// Genera datos falsos y los inserta en la tabla 'docentes'
function populateDocentesTable() {
  let docentes = [];

  for (let i = 1; i <= 5; i++) {
    docentes.push([
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      faker.phone.phoneNumber(),
      faker.random.number({ min: 25, max: 65 }),  // Edad entre 25 y 65 años
      faker.address.streetAddress(),
      faker.random.uuid(),  // Cédula de identidad simulada como UUID
      faker.image.avatar(),
      faker.random.number({ min: 1, max: 3 })  // Rol de docente (asume que tienes 3 roles)
    ]);
  }

  let sql = 'INSERT INTO docentes (nombre, apellido, correo, telefono, edad, oficina, cedula, img, rol_docente) VALUES ?';
  connection.query(sql, [docentes], function(err, result) {
    if (err) throw err;
    console.log('Tabla docentes llenada con éxito');
  });
}

// Genera datos falsos y los inserta en la tabla 'asignaturas'
function populateAsignaturasTable() {
  let asignaturas = [];

  for (let i = 1; i <= 8; i++) {
    asignaturas.push([
      faker.lorem.words(),  // Nombre de la asignatura
      faker.random.number({ min: 1, max: 10 }),  // Semestre (asume que son 10 semestres)
      faker.random.number({ min: 1, max: 5 }),  // Paralelo (asume que hay 5 paralelos)
      faker.random.number({ min: 1, max: 5 })   // ID de docente asociado (asume que tienes 5 docentes)
    ]);
  }

  let sql = 'INSERT INTO asignaturas (nombre, semestre, paralelo, idDocente) VALUES ?';
  connection.query(sql, [asignaturas], function(err, result) {
    if (err) throw err;
    console.log('Tabla asignaturas llenada con éxito');
  });
}

// Genera datos falsos y los inserta en la tabla 'horarios'
function populateHorariosTable() {
  let horarios = [];

  for (let i = 1; i <= 5; i++) {
    let dia = faker.random.number({ min: 1, max: 5 });  // Genera un día aleatorio entre 1 y 5
    let horaInicio = faker.random.number({ min: 8, max: 18 });  // Genera una hora de inicio aleatoria
    let horaSalida = horaInicio + faker.random.number({ min: 1, max: 4 });  // Calcula la hora de salida sumando horas aleatorias
    let aula = `Aula ${faker.random.number({ min: 100, max: 200 })}`;  // Genera un nombre de aula aleatorio
    let docenteId = faker.random.number({ min: 1, max: 5 });  // ID de docente asociado (asume que tienes 5 docentes)

    horarios.push([
      dia,
      horaInicio,
      horaSalida,
      aula,
      docenteId
    ]);
  }

  let sql = 'INSERT INTO horarios (dia, hora_inicio, hora_salida, aula, docenteIdDocente) VALUES ?';
  connection.query(sql, [horarios], function(err, result) {
    if (err) throw err;
    console.log('Tabla horarios llenada con éxito');
  });
}

// Cierra la conexión a la base de datos después de que todas las consultas terminen
process.on('exit', function() {
  connection.end();
  console.log('Conexión cerrada');
});
