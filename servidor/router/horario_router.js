
const express = require('express');

const {get_Horarios,update_Horario,delete_Horario,create_Horario, get_Horario} = require('../controlles/horario_controlle.js');
const {getHorarioAsignatura} = require('../controlles/horario_asignatura.js');
const horario_router = express.Router();

horario_router.get('/get/horario',get_Horarios);
horario_router.get('/get/horario/materia/:id', get_Horario)
horario_router.post('/create/horario',create_Horario);
horario_router.delete('/delete/horario',delete_Horario);
horario_router.put('/update/horario',update_Horario);


horario_router.get('/get/horario/asignatura/:id', getHorarioAsignatura)


module.exports = horario_router;