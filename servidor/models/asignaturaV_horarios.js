const sequelize = require('../database/database.js')
const DataTypes = require('sequelize')
// const Asignaturas = require('./asignaturas.js')
// const Horario = require('./horario.js')


const AsignaturaVirtuales_Horario =  sequelize.define('asignaturaV_h',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

},
{
    timestamps: false,
    tableName: 'asignaturaV_h'
}
);
//
// Asignaturas.belongsToMany(Horario, {through: Asignatura_Horario});
// Horario.belongsTo(Asignaturas, {through: Asignatura_Horario});



module.exports = AsignaturaVirtuales_Horario;