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
    correo: {
        type: DataTypes.STRING
    },
},
{
    timestamps: false,
    tableName: 'docentes'
}
);



module.exports = Docente
