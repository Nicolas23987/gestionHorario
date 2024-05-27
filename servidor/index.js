const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = require('./App');
const  sequelize   = require('./database/database.js');
const Admin = require('./models/administradores.js')
const Asignatura = require('./models/asignaturas.js');

async function main(){
    
    // await sequelize.sync({ force: true });

    try {
        const PORT = process.env.PORT || 3000;        
        await sequelize.sync(
            // {force:true}
        )
        // app.listen(400)
        app.listen(PORT, () => {
         console.log(`Servidor corriendo en el puerto ${PORT}`);  
        });      
    }catch(error) {
        console.log('error',error);
    }
}

main()

// async function main(){
//     try {
//     const PORT = process.env.PORT || 3000;        
//         await sequelize.authenticate();
//         app.listen(PORT, () => {
//          console.log(`Servidor corriendo en el puerto ${PORT}`);  
//         });      
//     }catch(error) {
//         console.log('error',error)
//     }

// };

// app.use(express.json());

// app.get('/asignaturas', async (req, res) => {
//   try {
//     const asignaturas = await Asignatura.findAll();
//     res.json(asignaturas);
//     console.log(asignaturas)
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'getiondocentesuleam',
//     port: 3306
// });

// app.get('/administradores', (req, res) => {
//     db.query('SELECT * FROM administradores', (err, result) => {
//         if (err) {
//             console.error('Error al realizar la consulta:', err);
//             res.status(500).json({ error: 'Error al consultar la base de datos' });
//         } else {
//             res.json(result);
//             console.log('Consulta exitosa');
//         }
//     });
// });

// app.get('/')

// app.get('/asignaturas', (req, res) => {
//     db.query('SELECT a.*, d.* FROM asignaturas  a LEFT JOIN docentes d ON a.id_docente = d.id_docente', (err, result) => {
//         if (err) {
//             console.error('Error al realizar la consulta:', err);
//             res.status(500).json({ error: 'Error al consultar la base de datos' });
//         } else {
//             res.json(result);
//             console.log('Consulta exitosa');
//         }
//     });
// });

// app.use('/api/v1')