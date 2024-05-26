const sequelize = require('../database/database')
const AsignaturaVirtuales = require('../models/asignaturasVirtuales.js')


const  getAsignaturasVirtuales = async(req,res) =>{
    try{
       const asignaturas = await AsignaturaVirtuales.findAll()
       res.status(202).json({
        status: true,
        mensage: 'asignaturas virtuales obtenidas con exito',
        data: asignaturas
       })

    }catch(error){
        res.status(404).json({
            status: false,
            error: error.mensage
        });
        console.log(error)
    }
} 

module.exports = getAsignaturasVirtuales

