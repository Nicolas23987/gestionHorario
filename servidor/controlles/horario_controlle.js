// const Horario = require('../models/horario');
const {Horario} = require('../relaciones/relaciones.js');
const {Asignatura_Horario} = require('../relaciones/relaciones.js');

const get_Horarios = async(req, res) => {
    try{
        const getHorario = await Horario.findAll()  
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
    try{
        const { id_horario } = req.paramas
        const { dia, hora_inicio, hora_salida } = req.body

        const put = Horario.put(id_horario);
        
        put.dia = dia
        put.hora_inicio = hora_inicio
        put.hora_salida = hora_salida

        put.save();
        res.status(202).json({
            status: true,
            mensage: "horario actualizado con exito"
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.mensage
        })
    }
}

const delete_Horario = async(req, res) => {
    try{
        const { id_horario } = req.paramas
        const deleteHorario = await Horario.destroy({
            where: id_horario
        })
        res.status(202).json({
            status: true,
            mensage: "Horario eliminado con exito"
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.mensage
        })
    }
}

const create_Horario = async(req, res) => {
    try{
        const {dia, hora_inicio, hora_salida} = req.body
        const newHorario = await Horario.create({
            dia,
            hora_inicio,
            hora_salida
        })
        res.status(202).json({
            status: true,
            mensage: "Horario creado con exito"

        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.mensage
        })
    }
}


const get_Horario = async(req, res) => {
            console.log(req.params, res.body)

    try{
        const id = req.params;
        const horario = await Asignatura_Horario.findAll({
            where: asignaturaIdMateria= id ,
            // include: [
            //     {
            //       model: [Horario],
            //       required: true, // INNER JOIN
            //     },                                
            // ]           
            // // include: Horario0-
        },
        );
    
        res.status(202).json({
            status: true,
            mensage: 'Horario obtenido con exito',
            data: horario
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.mensage
        })
        console.log(error)
    }
}
// const get_Horario = async(req, res) => {
//             console.log(req.params, res.body)

//     try{
//         const id_horario = req.params;
//         const horario = await Horario.findByPk(id_horario.id, );
//         res.status(202).json({
//             status: true,
//             mensage: 'Horario obtenido con exito',
//             data: horario
//         })
//     }catch(error){
//         res.status(404).json({
//             status: false,
//             error: error.mensage
//         })
//     }
// }

module.exports = {
    get_Horarios,
    update_Horario,
    delete_Horario,
    create_Horario,
    get_Horario
}
