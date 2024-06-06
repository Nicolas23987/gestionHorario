const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');




const Especialidad_Asignatura = sequelize.define('especialidad_asignatura', {
    id:{ 
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    }
});



module.exports = Especialidad_Asignatura;