const { send } = require('process');
const  Admin  = require('../models/administradores')
const jwt = require('jsonwebtoken');
const {serialize} = require('cookie');
const path = require('path');
const bcrypt = require('bcryptjs');







const auth_admin = async (req, res) => {
    const {correo, contraseña} = req.body;


    console.log(req.cookie)
    try {
        const admin = await Admin.findOne({
            where: { correo: correo }
        });
        
        if (admin !== null && await bcrypt.compare(contraseña, admin.contraseña)) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
                email: admin.correo,
                username: admin.nombre,
                img: admin.img
            }, 'secret');

            const serialized = serialize('my_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path: '/'
            });

            const data = {
                nombres: admin.nombres,
                apellidos: admin.apellidos,
                correo: admin.correo,
                img: admin.img,
                rol: admin.rol_admin,
            };

            // Utilizar cookie-parser para establecer la cookie
            res.cookie('my_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 7
            });

            return res.status(202).json({
                status: true,
                data: data,
                message: 'Admin obtenido con éxito'
            });

        } else {
            res.status(401).json({
                status: false,
                message: 'Credenciales incorrectas'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error interno del servidor'
        });
    }
};



module.exports = {
    auth_admin
}