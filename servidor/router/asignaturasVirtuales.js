const express = require('express');
const {
    get_AsignaturaV,
    update_AsignaturaV,
    delete_AsignaturaV,
    create_AsignaturaV
} = require('../controlles/asignaturas-virtuales/asignatura_virtuales')




const asignaturas_virtuales = express.Router()


asignaturas_virtuales.get('/get/asignaturas/virtuales', get_AsignaturaV);



module.exports = asignaturas_virtuales;


