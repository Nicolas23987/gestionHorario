const { send } = require('process');
const  Admin  = require('../models/administradores')
const jwt = require('jsonwebtoken');
const {serialize} = require('cookie');
const path = require('path');
const bcrypt = require('bcryptjs');
const { TransformStreamDefaultController } = require('stream/web');

const getAdmin = async(req, res) => {
    try {
      const admins = await Admin.findAll();
      res.status(200).json({
        success: true,
        data: admins
      });
    } catch (error) {
      console.error('Error al obtener administradores:', error);
      res.status(500).json({
        success: false,
        message: 'Error al obtener administradores',
        error: error.message
      });
    }
}

const create_Admin = async(req, res)=>{
    console.log(req.body);
    try{
        const {nombre, correo, password} = req.body
        const newAdmin = await Admin.create({
            nombre:nombre,
            correo: correo,
            contraseña: password
        });

        res.status(201).json({
            success: true,
            menssage: 'Administrador registrado exitosamente',
            data: newAdmin
        })
    }catch (error){
         console.error('Error al crear usuario:', error);

        if (error.name === 'SequelizeValidationError') {
            // Manejo específico para errores de validación de Sequelize
            const validationErrors = error.errors.map(err => err.message);
            res.status(400).json({
                success: false,
                message: 'Error de validación al crear usuario',
                errors: validationErrors
            });
        } else {
            // Manejo general para otros tipos de errores
            res.status(500).json({
                success: false,
                message: 'Error al crear usuario',
                error: error.message
            });
    }}
}


const update_Admin = async(req, res)=>{
    try{
        // console.log(req.params,req.body);
        const { idAdministrador } = req.params
        const {nombre, correo, password} = req.body
        const put = await Admin.findOne(idAdministrador)

        // console.log(nombre, correo, password, put)
        put.nombre = nombre
        put.correo = correo
        put.contraseña = password

        await put.save();

        console.log(put)
        res.status(202).json({
            success: true,
            menssange: "Usuario registrado con exito"
        })
    }catch(error){
        res.status(404).json({
            success: false,
            error: ''
        })
        console.log(error)
    }
}



async function hashPassword(password) {
    try {
        // Genera un salt (valor aleatorio) con 10 rondas de trabajo
        const salt = await bcrypt.genSalt(10);
        // Hashea la contraseña usando el salt
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashedPassword);
        return hashedPassword;
    } catch (error) {
        console.error('Error al hashear la contraseña:', error);
    }
}


module.exports = {
    create_Admin, getAdmin, update_Admin 
};