// const Alumno_Asignatura = require('../models/alumno_asignatura.js');
const {Alumno_Asignatura} = require('../../relaciones/relaciones.js');
const {Alumno} = require('../../relaciones/relaciones.js');
// const Docente = require('../models/docentes.js')



const getAlumnoAsignaturaV = async(req, res) => {
    const id_materia = req.params.id
    console.log(id_materia)
    try{
        const asignaturaAlumnos = await Alumno_Asignatura.findAll({
            where: {
                asignaturaIdMateria: id_materia,
                // id_docente: id_materia
            },
            // include:[
            //     {
            //         model: Alumno,
            //         as: 'alumno'
            //     }
            // ]
        });
        console.log(asignaturaAlumnos.alumnoIdAlumno)
        // const alumnos = await Alumno.findByPk(asignatura.alumnoIdAlumno)

        res.status(202).json({
            status: true,
            menssange: 'Datos obtenidos con exito',
            data: asignaturaAlumnos,

        })
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getAlumnoAsignaturaV,

}