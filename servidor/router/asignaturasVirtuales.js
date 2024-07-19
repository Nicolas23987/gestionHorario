const express = require('express');
const {
    get_AsignaturaV,
    update_AsignaturaV,
    delete_AsignaturaV,
    create_AsignaturaV,
    getAsigVirtSinDocente,
    get_AsignaturaById
} = require('../controlles/asignaturas-virtuales/asignatura_virtuales');
const asignatura_router = require('./asignatura_router');




const asignaturas_virtuales = express.Router()


asignaturas_virtuales.get('/get/asignaturas/virtuales', get_AsignaturaV);
asignaturas_virtuales.get('/get/asignaturas/virtuales/:id', get_AsignaturaById);
asignaturas_virtuales.get('/get/asignatura/virtuales/sin/docente',getAsigVirtSinDocente);



module.exports = asignaturas_virtuales;


