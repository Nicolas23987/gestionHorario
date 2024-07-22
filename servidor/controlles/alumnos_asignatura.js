const {Alumno_Asignatura, Asignatura} = require('../relaciones/relaciones.js');
const {Alumno} = require('../relaciones/relaciones.js');



const getAlumnoAsignatura = async(req, res) => {
    const id_materia = req.params.id
    console.log(id_materia)
    try{
        const asignaturaAlumnos = await Alumno_Asignatura.findAll({
            where: {
                IDMateria: id_materia,
            },
            include:{
                model: Asignatura
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

// const update_alum_asig = async(res,req){
//     const 
// }


module.exports = {
    getAlumnoAsignatura,
}