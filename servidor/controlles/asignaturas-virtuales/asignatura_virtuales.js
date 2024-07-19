// const Asignatura = require('../models/asignaturas');
// const Especialidad = require('../../models/especialidad.js');
const {AsignaturaVirtuales, Especialidad} = require('../../relaciones/relaciones.js');
// const Alumno = require('../models/alumnos');
// const Docente = require('../models/docentes');


// const getAsignatura = await Asignatura.findAll({
//     include:{ 
//         model: Alumno
//     }});

const get_AsignaturaV = async(req, res) => {
    try{
        const getAsignatura = await AsignaturaVirtuales.findAll({
            include: [{
                model: Docente,
                as: 'docentes'
            }]
        });
        res.status(202).json({
            succes: true,
            data: getAsignatura,
            menssage: "Asignatura obtenidad"
        });

    }catch(error){
        res.status(404).json({
            succes: false,
            menssage: error.menssage
        })
        console.log(error)
    }
}

const update_AsignaturaV = async(req, res) => {
    const {id_asignatura} = req.param
    const {nombre, semestre, paralelo} = req.body
    try{
        const put = await AsignaturaVirtuales.findOne(id_asignatura)

        put.nombre = nombre
        put.semestre = semestre
        put.paral9elo = paralelo

        put.save()

        res.status(202).json({
            succes: true,
            menssage: 'Asignatura actualizada con exito'
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }
}

const delete_AsignaturaV = async(req, res) => {
    const {id_asignatura} = req.params
    try{

        const deleteAsignatura = await AsignaturaVirtuales.destroy({
            where: id_asignatura
        })
        res.status(202).json({
            status: false,
            menssage: "Asignatura eliminada con exito"
        })

    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }

}

const create_AsignaturaV = async(req, res) => {
    const { nombre, semestre, paralelo } = req.body
    try{
        const newAsignatura = await AsignaturaVirtuales.create({
            nombre,
            semestre,
            paralelo
        })
        res.status(202).json({
            succes: true,
            menssage: "Nueva asignatura creada con exito"
        })
    }catch(error){ 
        res.status.json({
            succes: false,
            error: error.menssage
        })
    }
}

const get_AsignaturaById = async (req, res) => {
    const { id } = req.params; // Obtén el id de los parámetros de la solicitud

    try {
        const asignatura = await AsignaturaVirtuales.findOne({
            where: { id_materia: id },
            include: [{
                model: Especialidad,
            }]
        });

        if (!asignatura) {
            return res.status(404).json({
                success: false,
                message: "Asignatura no encontrada"
            });
        }

        res.status(202).json({
            success: true,
            data: asignatura,
            message: "Asignatura obtenida"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
        console.error(error);
    }
};

const { Op } = require('sequelize');
const getAsigVirtSinDocente = async(req, res) =>{
    try{
        const Asignaturas = await AsignaturaVirtuales.findAll({
            // include:{
            //     model: Alumno
            // },
            where: {
                idDocente:{
                    [Op.is]: null
                }}
        })
        console.log(Asignaturas)
        res.status(202).json({
            status: true,
            data: Asignaturas
        })

    }catch(error){
        console.log(error)
    }
}

module.exports = {
    get_AsignaturaV,
    update_AsignaturaV,
    delete_AsignaturaV,
    create_AsignaturaV,
    getAsigVirtSinDocente,
    get_AsignaturaById
}