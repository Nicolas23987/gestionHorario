const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
const Alumno = require('./alumnos.js')
const Alumno_Asignatura = require('./alumno_asignatura.js');
// const { Sequelize, DataTypes, Model } = require('sequelize');


const Horario = require('../models/horario.js')
const Asignatura_Horario = require('../models/asignatura_horarios.js')
const Docente = require('./docentes.js')

const Asignatura = sequelize.define('asignaturas',{

    id_materia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    semestre:{
        type: DataTypes.STRING
    },
    paralelo: {
        type: DataTypes.INTEGER
    },    
}, 
{
    // sequelize,
    // modelName:'Asignatura',
    timestamps: false,
    // tableName:'asignaturas'
}
);

///////

// //muchos a muchos asignatura/alumno

// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura, foreignKey: 'alumnoIdAlumno'});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura, foreignKey: 'asignaturaIdMateria' });

// //muchos a muchos asignatura/horario
// Asignaturas.belongsToMany(Horario, {through: Asignatura_Horario});
// Horario.belongsToMany(Asignaturas, {through: Asignatura_Horario});

// // muchos a uno asignatura/docente
// Docente.hasMany(Asignaturas, {
//     foreignKey:'idDocente',
//     as: 'asignaturas'
// });

// Asignaturas.belongsTo(Docente, {
//     foreignKey:'idDocente',
//     as: 'docentes'
// });

module.exports = Asignatura;