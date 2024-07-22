const express = require('express');
const AsignaturaVirtualesController = require('../controlles/asignaturas-virtuales/asignatura_virtuales');

const asignaturas_virtuales = express.Router();

// Obtener todas las asignaturas virtuales
asignaturas_virtuales.get('/get/asignaturas/virtuales', AsignaturaVirtualesController.get_AsignaturaV);

// Obtener una asignatura virtual por ID
asignaturas_virtuales.get('/get/asignaturas/virtuales/:id', AsignaturaVirtualesController.get_AsignaturaById);

// Obtener asignaturas virtuales sin docente
asignaturas_virtuales.get('/get/asignaturas/virtuales/sin/docente', AsignaturaVirtualesController.getAsigVirtSinDocente);

// Crear una nueva asignatura virtual
asignaturas_virtuales.post('/create/asignatura/virtual', AsignaturaVirtualesController.create_AsignaturaV);

// Actualizar una asignatura virtual existente
asignaturas_virtuales.put('/update/asignatura/virtual/:id_asignatura', AsignaturaVirtualesController.update_AsignaturaV);

// Eliminar una asignatura virtual existente
asignaturas_virtuales.delete('/delete/asignatura/virtual/:id_asignatura', AsignaturaVirtualesController.delete_AsignaturaV);

module.exports = asignaturas_virtuales;

