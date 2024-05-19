const Alumno = require('../models/alumnos.js');

const get_Alumno = async(req, res) => {
    try{
        const alumnos = await(Alumno.findAll());
        res.status(200).json({
            success: true,
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


}

const update_Alumno = async(req, res) => {



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