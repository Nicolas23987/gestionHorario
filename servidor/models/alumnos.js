const sequelize = required('sequelize');
const DataTypes = require('sequelize');


const Alumno = sequelize.define('alumnos', {
    
    id_alumno:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    
});
    


module.exports = Alumno;