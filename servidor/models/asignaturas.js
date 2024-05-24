const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
const Alumno = require('./alumnos.js')
const Alumno_Asignatura = require('./alumno_asignatura.js');

const Horario = require('../models/horario.js')
const Asignatura_Horario = require('../models/asignatura_horarios.js')

const Asignaturas = sequelize.define('asignaturas',{

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
    timestamps: false,
    tableName:'asignaturas'
}
);

Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura });


Asignaturas.belongsToMany(Horario, {through: Asignatura_Horario});
Horario.belongsToMany(Asignaturas, {through: Asignatura_Horario});


module.exports = Asignaturas;