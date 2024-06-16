const sequelize = require('../database/database.js');
const DataTypes = require('sequelize')

const Admin = sequelize.define('administradores', {

    id_Administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres:{
        type: DataTypes.STRING,
    },
    apellidos:{
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    }
},
{
    timestamps: false
}
);

module.exports = Admin;