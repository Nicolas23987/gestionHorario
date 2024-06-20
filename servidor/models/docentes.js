const sequelize = require('../database/database.js');
const DataTypes = require('sequelize')

const Docente = sequelize.define('docentes',{
    
    id_docente:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.STRING
    },
    oficina: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING
    },
    img: {
        type:DataTypes.STRING
    }
},
{
    timestamps: false,
    tableName: 'docentes'
}
);



module.exports = Docente
