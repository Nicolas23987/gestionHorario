const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
const Asignaturas = require('./asignaturas.js')
const Alumno_Asignatura = require("./alumno_asignatura.js")

const Alumno = sequelize.define('alumnos', {
    
    id_alumno:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    } ,
    correo:{
        type: DataTypes.STRING
    },
    cedula:{
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    modelName:"Alumno",
    timestamps: false,
    tableName:'alumnos'
}
);

module.exports = Alumno;