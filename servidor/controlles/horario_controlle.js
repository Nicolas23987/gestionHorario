const Horario = require('../models/horario');

const get_Horario = async(req, res) => {
    try{
        const getHorario = Horario.findAll()  
        res.status(202).json({
            success: true,
            data: getHorario
        })      
    }catch(error){
        res.status(404).json({
            success: false,
            error: error.mensage
        })
    }
}

const update_Horario = async(req, res) => {

}

const delete_Horario = async(req, res) => {

}

const create_Horario = async(req, res) => {



}

module.exports = {
    get_Horario,
    update_Horario,
    delete_Horario,
    create_Horario
}
