const {Asignatura_Horario} = require('../relaciones/relaciones.js');
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