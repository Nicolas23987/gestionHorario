const Alumno = require('../models/alumnos');




const create_Alumno = async(req, res) => {

    console.log(req.body)
    try{

        const { nombre, correo} = req.body;
        const newAlumno = await Alumno.create({
            
        })

    }catch(error){


    }




}