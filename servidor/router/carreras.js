const express = require('express');
const { getCarreras, createCarrera } = require('../controlles/carreras.js');

const carreraRouter = express.Router();

// Obtener todas las carreras
carreraRouter.get('/get/carreras', getCarreras);

// Crear una nueva carrera
carreraRouter.post('/create/carrera', createCarrera);

module.exports = carreraRouter;
