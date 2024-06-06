const express = require('express')
const {getAdmin,create_Admin,delete_Admin,update_Admin, auth_admin} = require('../controlles/admin_controlle.js');




const administrador_router = express.Router()

administrador_router.get('/get/administrador', getAdmin);
administrador_router.post('/create/administrador', create_Admin);
administrador_router.delete('/delete/:id/administrador', delete_Admin);
administrador_router.put('/update/admin/:id/administrador', update_Admin);
administrador_router.post('/auth/admin', auth_admin);


module.exports = administrador_router;