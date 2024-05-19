const express = require('express');
const Asignatura = require("../database/database.js")
const {getAdmin,create_Admin,delete_Admin,update_Admin} = require('../controlles/admin_controlle.js');

const router = express.Router();
router.get('/admin', getAdmin);
router.post('/create', create_Admin);
router.delete('/delete/admin/:id', delete_Admin)
router.put('/update/admin/:id', update_Admin)

module.exports = router; 