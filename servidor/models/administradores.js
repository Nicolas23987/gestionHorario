const sequelize = require('../database/database');
const DataTypes = require('sequelize')

const Admin = sequelize.define('administradores', {

    id_Administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false
}
);


module.exports = Admin;