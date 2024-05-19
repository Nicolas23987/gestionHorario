const express = require('express');
// const Asignatura = require("../database/database.js")
const {getAdmin,create_Admin,delete_Admin,update_Admin} = require('../controlles/admin_controlle.js');
const {get_Alumno,delete_Alumnno,update_Alumno,create_Alumno} = require('../controlles/alumn_controlle.js');
const {get_Asignatura, update_Asignatura,delete_Asignatura, create_Asignatura} = require('../controlles/asignatura_controlle.js');
const {get_Docente,update_Docente,delete_Docente,create_Docente} = require('../controlles/docente_controlle.js');
const {get_Horario,update_Horario,delete_Horario,create_Horario} = require('../controlles/horario_controlle.js');

const router = express.Router();

//////////Router Administradores/////////////////////
router.get('/get', getAdmin);
router.post('/create', create_Admin);
router.delete('/delete/:id', delete_Admin);
router.put('/update/:id', update_Admin);
////////////Router Asignaturas/////////////////////
router.get('/get/asignatura',get_Asignatura);
router.post('/create/asignatura',create_Asignatura);
router.delete('/delete/asignatura',delete_Asignatura);
router.put('/update/asignatura',update_Asignatura);
////////////Router Docente//////////////////
router.get('/get/asignatura',get_Docente);
router.post('/create/asignatura',create_Docente);
router.delete('/delete/asignatura',delete_Docente);
router.put('/update/asignatura',update_Docente);
///////////Router Horario////////////////////
router.get('/get/asignatura',get_Horario);
router.post('/create/asignatura',create_Horario);
router.delete('/delete/asignatura',delete_Horario);
router.put('/update/asignatura',update_Horario);
///////////Router Alumno//////////////////
router.get('/get/alumno',get_Alumno);
router.post('/create/alumno',create_Alumno);
router.delete('/delete/alumno',delete_Alumnno);
router.put('/update/alumno',update_Alumno);

///Lo exporta como router
module.exports = router; 