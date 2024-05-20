const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
// const Alumno = require('./alumnos.js')
const Alumno_Asignatura = require('./alumno_asignatura.js');



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
    timestamps: false
}
);

// Alumno.belongsToMany(Asignaturas, { through: Alumno_Asignatura});
// Asignaturas.belongsToMany(Alumno, { through: Alumno_Asignatura});

// Asignaturas.belongsTo(Alumno, { foreignKey: 'id_alumno' });
// Alumno.hasMany(Asignaturas, { foreignKey: 'id_alimno' });

module.exports = Asignaturas;