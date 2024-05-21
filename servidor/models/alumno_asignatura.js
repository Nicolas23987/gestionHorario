const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
// const Alumno = require('./alumnos.js')
const Asignatura = require('./asignaturas.js')

const Alumno_Asignatura = sequelize.define('asignatura_alumnos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inscripcion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // Clave foránea de Alumno
    alumnoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alumnos', // Nombre de la tabla en plural
        key: 'id_alumno'
      }
    },
    // Clave foránea de Asignaturas
    asignaturaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asignaturas', // Nombre de la tabla en plural
        key: 'id_asignatura'
      }
    },
  
},
{
    timestamps: false
}
);

module.exports = Alumno_Asignatura;