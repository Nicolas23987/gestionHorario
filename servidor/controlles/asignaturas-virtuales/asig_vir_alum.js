// const Alumno_Asignatura = require('../models/alumno_asignatura.js');
const { Alum_asig_virt } = require('../../relaciones/relaciones.js');
const {Alumno} = require('../../relaciones/relaciones.js');
const { Asigna } = require('../../relaciones.relaciones.js')
// const Docente = require('../models/docentes.js')



const get_alum_asig_virt = async(req, res) => {
    // const id_materia = req.params.id
    // console.log(id_materia)
    try{
        const asignaturaAlumnos = await Alum_asig_virt.findAll();
        console.log(asignaturaAlumnos.alumnoIdAlumno)

        res.status(202).json({
            status: true,
            menssange: 'Datos obtenidos con exito',
            data: asignaturaAlumnos,

        })
    }catch(error){
        console.log(error)
    }
}
const get_alum_asig_virt_id = async(req, res) => {
    const id_materia = req.params.id
    console.log(id_materia)
    try{
        const asignaturaAlumnos = await Alum_asig_virt.findAll({
            where: {
                asignaturaIdMateria: id_materia,
            },
            include: {
                model:Alumno
            }
        });
        console.log(asignaturaAlumnos.alumnoIdAlumno)

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
    get_alum_asig_virt_id,
    get_alum_asig_virt,

}