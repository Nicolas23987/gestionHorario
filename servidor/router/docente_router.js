const express = require('express');
const {get_Docente,update_Docente,delete_Docente,create_Docente} = require('../controlles/docente_controlle.js');



const docente_router = express.Router()

docente_router.get('/get/docente',get_Docente);
docente_router.post('/create/docente',create_Docente);
docente_router.delete('/delete/docente',delete_Docente);
docente_router.put('/update/docente',update_Docente);


module.exports = docente_router;