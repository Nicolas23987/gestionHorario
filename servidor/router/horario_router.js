
const express = require('express');

const {get_Horario,update_Horario,delete_Horario,create_Horario} = require('../controlles/horario_controlle.js');

const horario_router = express.Router();

horario_router.get('/get/horario',get_Horario);
horario_router.post('/create/horario',create_Horario);
horario_router.delete('/delete/horario',delete_Horario);
horario_router.put('/update/horario',update_Horario);


module.exports = horario_router;