const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');



const Carrera = sequelize.define('carreras', {
    id:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion:{
        type: DataTypes.STRING,
    }
},
{
    timestamps: false,
    tableName:'carreras'
}
);


module.exports = Carrera;
