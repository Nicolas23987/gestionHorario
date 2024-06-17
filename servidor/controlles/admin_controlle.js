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

const auth_admin = async(req, res) => {
    const {correo, contraseña} = req.body;
    try{
        const admin = await Admin.findOne({
            where: {correo : correo}
        })
        
        if(admin !== null && await bcrypt.compare(contraseña , admin.contraseña )){
            const token = jwt.sign({
                exp: Math.floor(Date.now() /1000) + 60 * 60 * 24 * 7,
                email: admin.correo,
                usernem: admin.nombre
            },'secret');

            const serialized = serialize('my_token', token,{
                httpOnly:true ,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path: '/'            
            })
            res.setHeader("set-cookie", serialized);

            const data = {
                nombres: admin.nombres,
                apellidos: admin.apellidos,
                correo: admin.correo,
                img: admin.img,
                rol: admin.rol_admin,
            };

            return res.status(202).json({
                status: true,
                data: data,
                menssage: 'Admin obtenido con exito'
            });

        }else{
            res.status(401).json({
                status: false
            })
        }

    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
        console.log(error)
    }

}

module.exports = {
    create_Admin, getAdmin, update_Admin, auth_admin
};