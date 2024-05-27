const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');
const Docente = require('./docentes.js');

const Horario = sequelize.define('horarios',{

    id_horario:{
        type: DataTypes.INTEGER,  
        primaryKey: true,
        autoIncrement: true
    },
    dia: {
        type: DataTypes.INTEGER,
    },
    hora_inicio: {
        type: DataTypes.INTEGER
    },
    hora_salida: {
        type: DataTypes.INTEGER
    },
},
{
    timestamps: false
}
);

///////////////////////////

// Horario.belongsTo(Docente);
// Docente.hasMany(Horario);


module.exports = Horario;