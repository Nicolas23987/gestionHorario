const express = require('express');
const AsignaturaVirtuales = require('../controlles/asignaturasVirtuales_controlle.js')




const asignaturas_virtuales = express.Router()


asignaturas_virtuales.get('/get/asignaturas/virtuales', AsignaturaVirtuales);



module.exports = asignaturas_virtuales;


