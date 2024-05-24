const Alumno = require('../models/alumnos.js');

const get_Alumno = async(req, res) => {
    try{
        const alumnos = await Alumno.findAll();
        res.status(200).json({
            success: true,
            menssange: 'usuario creado con exito',
            data: alumnos
        });
    }catch(error){
        res.status(404).json({
            success: false,
            error: error.menssange
        })
        console.log(error)
    }
}

const delete_Alumnno = async(req, res)=>{
    try{
        const { id } = req.params
        const delete_alumno = await Alumno.destroy({
            where: { 
                id_alumno: id,
            }
        });
    res.status(201).json({
        success: true, 
        menssange: 'Alumno eliminado con exito'
    })
    }catch(error){
        res.status(404).json({
            success: false,
            error: error.menssange
        })
    }
}

const update_Alumno = async(req, res) => {
    try{
        const { id_alumno } = req.params
        const {nombre, correo} = req.body
        const put = await Alumno.findOne(id_alumno)

        put.nombre = nombre
        put.correo = correo
        put.save()
        
        res.status(202).json({
            success: true,
            menssange: "Usuario registrado con exito"
        })
    }catch(error){
        res.status(404).json({
            success: false,
            error: error.menssange
        })
    }
}

const create_Alumno = async(req, res) => {
    console.log(req.body)
    try{
        const { nombre, correo} = req.body;
        const newAlumno = await Alumno.create({
            nombre,
            correo
        })
        res.status(201).json({
            success: true,
            message: 'usuario reguistrado con exito',
            data: newAlumno
        })
    }catch(error){
        res.status(404).json({
            success: false,
            error: error.menssange
        });
    }
}

module.exports = {
    get_Alumno,delete_Alumnno,update_Alumno,create_Alumno
}