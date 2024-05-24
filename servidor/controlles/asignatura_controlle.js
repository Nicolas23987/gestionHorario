const Asignatura = require('../models/asignaturas');
const Alumno = require('../models/alumnos')


// const getAsignatura = await Asignatura.findAll({
//     include:{ 
//         model: Alumno
//     }});

const get_Asignatura = async(req, res) => {
    try{
        const getAsignatura = await Asignatura.findAll();
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

const update_Asignatura = async(req, res) => {
    const {id_asignatura} = req.param
    const {nombre, semestre, paralelo} = req.body
    try{
        const put = await Alumno.findOne(id_asignatura)

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

const delete_Asignatura = async(req, res) => {
    const {id_asignatura} = req.params
    try{

        const deleteAsignatura = await Asignatura.destroy({
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

const create_Asignatura = async(req, res) => {
    const { nombre, semestre, paralelo } = req.body
    try{
        const newAsignatura = await Asignatura.create({
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

module.exports = {
    get_Asignatura,
    update_Asignatura,
    delete_Asignatura,
    create_Asignatura
}