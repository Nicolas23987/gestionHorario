const { Asignatura, Alumno } = require('../relaciones/relaciones.js');
const { Docente } = require('../relaciones/relaciones.js');


const get_Asignatura = async (req, res) => {
    try {
        const getAsignatura = await Asignatura.findAll({
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

    } catch (error) {
        res.status(404).json({
            succes: false,
            menssage: error.menssage
        })
        console.log(error)
    }
}

const update_Asignatura = async (req, res) => {
    const { id_asignatura } = req.param
    const { nombre, semestre, paralelo } = req.body
    try {
        const put = await Alumno.findOne(id_asignatura)

        put.nombre = nombre
        put.semestre = semestre
        put.paral9elo = paralelo

        put.save()

        res.status(202).json({
            succes: true,
            menssage: 'Asignatura actualizada con exito'
        })
    } catch (error) {
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }
}

const delete_Asignatura = async (req, res) => {
    const { id_asignatura } = req.params
    try {

        const deleteAsignatura = await Asignatura.destroy({
            where: id_asignatura
        })
        res.status(202).json({
            status: false,
            menssage: "Asignatura eliminada con exito"
        })

    } catch (error) {
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }

}

const create_Asignatura = async (req, res) => {
    const { nombre, semestre, paralelo } = req.body
    try {
        const newAsignatura = await Asignatura.create({
            nombre,
            semestre,
            paralelo
        })
        res.status(202).json({
            succes: true,
            menssage: "Nueva asignatura creada con exito"
        })
    } catch (error) {
        res.status.json({
            succes: false,
            error: error.menssage
        })
    }
}


const { Op } = require('sequelize');
const getAsigSinDocente = async(req, res) =>{
    try{
        const Asignaturas = await Asignatura.findAll({
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
    get_Asignatura,
    getAsigSinDocente,
    update_Asignatura,
    delete_Asignatura,
    create_Asignatura,

}