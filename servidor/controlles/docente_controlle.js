const Docente = require('../models/docentes');



const get_Docente = async(req, res) => {
        try{
            const docentes = await Docente.findAll()
            console.log(docentes)
            res.status(200).json({
                status: true,
                // menssage: "datos obtenidos",
                data: docentes
            })
        }catch(error){
            res.status(404).json({
                status: false,
                error: error.menssage
            })
        }

}

const update_Docente = async(req, res) => {

}

const delete_Docente = async(req, res) => {


}
const create_Docente = async(req, res) => {



}

module.exports = {
    get_Docente,
    update_Docente,
    delete_Docente,
    create_Docente
}