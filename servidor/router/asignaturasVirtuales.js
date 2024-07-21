const express = require('express');
const {
    get_AsignaturaV,
    update_AsignaturaV,
    delete_AsignaturaV,
    create_AsignaturaV,
    getAsigVirtSinDocente,
    get_AsignaturaById
} = require('../controlles/asignaturas-virtuales/asignatura_virtuales');
const AsignaturaVirtualesController = require('../controlles/asignaturas-virtuales/asignatura_virtuales');
const asignatura_router = require('./asignatura_router');




const asignaturas_virtuales = express.Router()


asignaturas_virtuales.get('/get/asignaturas/virtuales', AsignaturaVirtualesController.get_AsignaturaV);
asignaturas_virtuales.get('/get/asignaturas/virtuales/:id', AsignaturaVirtualesController.get_AsignaturaById);
asignaturas_virtuales.get('/get/asignatura/virtuales/sin/docente', AsignaturaVirtualesController.getAsigVirtSinDocente);



module.exports = asignaturas_virtuales;


