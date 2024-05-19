const express = require('express');
const {get_Alumno,delete_Alumnno,update_Alumno,create_Alumno} = require('../controlles/alumn_controlle.js');

const alumno_router = express.Router();

alumno_router.get('/get',get_Alumno);
alumno_router.post('/create',create_Alumno);
alumno_router.delete('/delete/:id',delete_Alumnno);
alumno_router.put('/update/:id',update_Alumno);


module.exports = alumno_router;

