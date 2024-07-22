const express = require('express');
const {
    getRoles, createRole
} = require('../controlles/roles.js');

const rolesRouter = express.Router();

// Obtener todos los roles
rolesRouter.get('/get/roles', getRoles);

// Crear un nuevo rol
rolesRouter.post('/create/role', createRole);

module.exports = rolesRouter;