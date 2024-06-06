const express = require('express');
const {get_Alumno,delete_Alumnno,update_Alumno,create_Alumno} = require('../controlles/alumnos_controlle.js');
const { getAlumnoAsignatura } = require('../controlles/alumnos_asignatura.js')


const alumno_router = express.Router();

alumno_router.get('/get/alumno',get_Alumno);
alumno_router.post('/create/alumno',create_Alumno);
alumno_router.delete('/delete/:id/alumno',delete_Alumnno);
alumno_router.put('/update/:id/alumno',update_Alumno);
alumno_router.get('/get/alumno/asignatura/:id', getAlumnoAsignatura)


module.exports = alumno_router;

