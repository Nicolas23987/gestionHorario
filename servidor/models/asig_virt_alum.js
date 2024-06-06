const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
// const Alumno = require('./alumnos.js')
// const Asignaturas = require('./asignaturas.js')
// const Horario = require('./horario.js')
// const Asignatura_Horario = require('./asignatura_horarios.js')

const Alumno_AsignaturaVirtuales = sequelize.define('asig_virt_alum', {
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
    tableName: 'asig_virt_alum'
}
);
// Alumno.belongsToMany(Asignatura, { through: Alumno_Asignatura, foreignKey: 'alumnoId' });
// Asignatura.belongsToMany(Alumno, { through: Alumno_Asignatura, foreignKey: 'asignaturaId' });

// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura} )

//muchos a muchos asignatura/alumno

// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura });

// //muchos a muchos asignatura/horario
// Asignaturas.belongsToMany(Horario, {through: Asignatura_Horario});
// Horario.belongsToMany(Asignaturas, {through: Asignatura_Horario});

module.exports = Alumno_AsignaturaVirtuales;