const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');
const asignatura_router = require('../router/asignatura_router');




const Asig_carrera = sequelize.define('asig_carreras', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true ,
        autoIncrement: true,
    },
    
},
{
    timestamps: false,
    tableName: 'asig_carrera'
});



module.exports = Asig_carrera;