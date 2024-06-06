const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');




const Especialidad = sequelize.define('especialidad',{
    id_especialidad:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,

    },
    nivel:{
        type: DataTypes.STRING,
    },
    institucion:{
        type: DataTypes.STRING
    },
    fechaObtencion: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'especialidad'
}
);



module.exports = Especialidad;