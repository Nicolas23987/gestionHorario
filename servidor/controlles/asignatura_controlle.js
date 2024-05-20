const Asignatura = require('../models/asignaturas');




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
    }
}

const update_Asignatura = async(req, res) => {

}

const delete_Asignatura = async(req, res) => {

}

const create_Asignatura = async(req, res) => {



}

module.exports = {
    get_Asignatura,
    update_Asignatura,
    delete_Asignatura,
    create_Asignatura
}