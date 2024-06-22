const sequelize = require('../database/database.js')
const DataTypes = require('sequelize')
const Asignaturas = require('./asignaturas.js')
const Horario = require('./horario.js')


const Asignatura_Horario =  sequelize.define('asignatura_horarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

},
{
    timestamps: false,
    // tableName: 'asignatura_horarios'
}
);
//
// Asignaturas.belongsToMany(Horario, {through: Asignatura_Horario});
// Horario.belongsTo(Asignaturas, {through: Asignatura_Horario});



module.exports = Asignatura_Horario;