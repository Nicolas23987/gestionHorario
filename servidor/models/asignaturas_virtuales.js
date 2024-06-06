const sequelize = require('../database/database.js')
const { DataTypes } = require('sequelize');
const Docente = require('./docentes.js')



const AsignaturaVirtuales = sequelize.define('asignaturas_virtuales', {

    id_materia:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING
    },
    paralelo:{
        type: DataTypes.STRING
    },
    semestre:{
        type: DataTypes.STRING
    },


},
{
    timestamps: false,
    tableName: 'asignatura_virtuales'
}
);
//////////////

// Docente.hasMany(AsignaturaVirtuales,{
//     foreignKey: 'idDocente',
//     as: 'asignaturas_virtuales'
// });
// AsignaturaVirtuales.belongsTo(Docente, {
//     foreignKey:'idDocente',
//     as: 'docentes'
// })


module.exports = AsignaturaVirtuales;
