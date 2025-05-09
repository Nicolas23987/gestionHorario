const express = require('express');
const { 
    get_Docentes,
    get_Docente,
    update_Docente,
    delete_Docente,
    create_Docente,
    get_Docente_MateriaId,
    get_DocentesPorEspecialidad // Nueva ruta para obtener docentes por especialidad
} = require('../controlles/docente_controlle.js');

const docente_router = express.Router();

docente_router.get('/get/docentes', get_Docentes);
docente_router.get('/get/docente/:id', get_Docente);
docente_router.get('/get/docente/materia/:id', get_Docente_MateriaId);
docente_router.get('/get/docentes/por-especialidad', get_DocentesPorEspecialidad); // Ruta correcta
docente_router.post('/create/docente', create_Docente);
docente_router.delete('/delete/docente', delete_Docente);
docente_router.put('/update/docente', update_Docente);

module.exports = docente_router;
