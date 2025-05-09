const express = require('express')
const {getAdmin,create_Admin,update_Admin} = require('../controlles/admin_controlle.js');




const administrador_router = express.Router()

administrador_router.get('/get/administrador', getAdmin);
administrador_router.post('/create/administrador', create_Admin);
// administrador_router.delete('/delete/:id/administrador', delete_Admin);
administrador_router.put('/update/admin/:id/administrador', update_Admin);


module.exports = administrador_router;