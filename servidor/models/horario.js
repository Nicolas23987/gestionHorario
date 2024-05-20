const sequelize = require('../database/database.js');
const DataTypes = require('sequelize');

const Horario = sequelize.define('horario',{

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

module.exports = Horario;