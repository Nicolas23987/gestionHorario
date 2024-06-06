const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');


const Especialidad_Docente = sequelize.define('especialidad_docente', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},
{
    tableName: 'especialidad_docente'
}
);

module.exports = Especialidad_Docente;