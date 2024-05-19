const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');



const Alumno_Asignatura = sequelize.define('asignatura_alumnos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inscripcion: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    timestamps: false
}
);

module.exports = Alumno_Asignatura;