// const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('getiondocentesuleam', "root", '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    
});

module.exports = sequelize;
























// class Asignatura extends Model {}
// Asignatura.init({
//     id_Materia: {
//         type:DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true
//     },
//     nombre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     // semestre:{
//     //     type: DataTypes.NUMBER,
//     //     allowNull: false,
//     // },
//     // paralelo:{
//     //     type: DataTypes.STRING,
//     //     allowNull: false,
//     // },

// },
//     {
//         sequelize,
//         modelName: "asignatura"
//     }
// )
// module.exports = Asignatura;
// class Docente extends Model{}
// Docente.init({
//     id_docente:{
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primarykey: true,
//     },
//     correo: {
//         type: DataTypes.STRING,
//         AllowNull: false
//     },

// })



// class Alumno extends Model{}


// async function testConnection() {

//     try{
//         sequelize.authenticate()
//         console.log('all god');
//     }catch(err){
//         console.error(err)
//     }

// }


// testConnection();