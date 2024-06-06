const { timeStamp } = require('console')
const sequelize = require('../database/database.js')
const DataTypes = require('sequelize')


const Rol = sequelize.define('roles',{

    id:{
       type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol:{
        type: DataTypes.STRING,
    }
},
{
    timeStamp: false,
    tableName: 'rol'

});



module.exports = Rol;