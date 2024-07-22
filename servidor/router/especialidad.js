const express = require('express');
const { getEspecialidades, createEspecialidad } = require('../controlles/especialida.js');

const especialidadesRouter = express.Router();

// Obtener todas las especialidades
especialidadesRouter.get('/get/especialidades', getEspecialidades);

// Crear una nueva especialidad
especialidadesRouter.post('/create/especialidad', createEspecialidad);

module.exports = especialidadesRouter;
