const DataTypes = require('sequelize');
const sequelize = require('../database/database.js');




const Facultad = sequelize.define('facultad', {
    id_facultad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    director:{
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false,
    tableName: 'facultad'
}
)

module.exports = Facultad;