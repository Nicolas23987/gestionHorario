const express = require('express');

const {get_AsignaturaById, get_Asignatura, update_Asignatura,delete_Asignatura, create_Asignatura, getAsigSinDocente, get_AsignaturaAlumnos, update_AsignaturaDocente} = require('../controlles/asignatura_controlle.js');
// const {  } = require('../controlles/asignaturas-virtuales/asignatura_virtuales.js');
// const {Alumno_Asignatura} = require('../controlles/alumnos_asignatura.js')


const asignatura_router = express.Router();
asignatura_router.get('/get/asignatura',get_Asignatura);
asignatura_router.get('/get/asignatura/:id',get_AsignaturaById);
asignatura_router.get('/get/asignatura/alumnos/:id',get_AsignaturaAlumnos);
asignatura_router.get('/get/asignatura/sin/docente',getAsigSinDocente);
asignatura_router.post('/create/asignatura',create_Asignatura);
asignatura_router.delete('/delete/asignatura',delete_Asignatura);
asignatura_router.put('/update/asignatura',update_Asignatura);
asignatura_router.put('/update/asignatura/:id_docente/:id_asignatura',update_AsignaturaDocente);

// asignatura_router.get('/get/asignatura',Alumno_Asignatura);

module.exports = asignatura_router;