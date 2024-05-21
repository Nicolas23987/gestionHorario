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
    }
},
{
    timestamps: false
}
);
 
// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura} )

module.exports = Alumno;