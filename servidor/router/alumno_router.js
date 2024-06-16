const express = require('express');
const {get_Alumno,delete_Alumnno,update_Alumno,create_Alumno} = require('../controlles/alumnos_controlle.js');
const { getAlumnoAsignatura } = require('../controlles/alumnos_asignatura.js')
// const { get_alum_asig_virt, get_alum_asig_virt_id } = require('../controlles/asignaturas-virtuales/asig_vir_alum.js');


const alumno_router = express.Router();

alumno_router.get('/get/alumno',get_Alumno);
alumno_router.post('/create/alumno',create_Alumno);
alumno_router.delete('/delete/:id/alumno',delete_Alumnno);
alumno_router.put('/update/:id/alumno',update_Alumno);
alumno_router.get('/get/alumno/asignatura/:id', getAlumnoAsignatura)





// alumno_router.get('/get/alumnos/materias/virtuales/', get_alum_asig_virt);
// alumno_router.get('/get/alumnos/materias/virtuales/:id', get_alum_asig_virt_id);





module.exports = alumno_router;

