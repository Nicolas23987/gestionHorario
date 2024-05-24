const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
const Alumno = require('./alumnos.js')
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
},
{
    timestamps: false,
    tableName: 'asignatura_alumnos'
}
);
// Alumno.belongsToMany(Asignatura, { through: Alumno_Asignatura, foreignKey: 'alumnoId' });
// Asignatura.belongsToMany(Alumno, { through: Alumno_Asignatura, foreignKey: 'asignaturaId' });

// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura} )


module.exports = Alumno_Asignatura;