// const Asignatura_Horario = require('../models/asignatura_horarios.js');
const {Asignatura_Horario} = require('../relaciones/relaciones.js');
const Alumno = require('../models/alumnos.js');
// const Horario = require('../models/horario.js');
const {Horario} = require('../relaciones/relaciones.js');




const getHorarioAsignatura = async(req, res) => {
    const id_materia = req.params.id
    console.log(id_materia)
    try{
        const asignaturaAlumnos = await Asignatura_Horario.findAll({
            where: {
                asignaturaIdMateria: id_materia,
                // id_docente: id_materia
            },
            include:[
                {
                    model: Horario,
                    as: 'horarios'
                }
            ]
        });
        // console.log(asignaturaAlumnos.alumnoIdAlumno)
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
    getHorarioAsignatura
};