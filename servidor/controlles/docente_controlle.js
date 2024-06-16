const {Docente} = require('../relaciones/relaciones.js');
const {Asignatura} = require('../relaciones/relaciones.js');


const get_Docente = async(req, res) => {
    try{
        // console.log(req.params, res.body)
        const  id_docente  = req.params;

        const docente = await Docente.findByPk(id_docente.id)
        console.log(docente)
        res.status(202).json({
            success: true,
            menssage: 'Usuario obtenido con exito',
            data: docente
        })

    }catch(error){
        res.status(404).json({
            succes: false,
            error: error.menssage
        })
        console.log(error)
    }
}

const get_Docentes = async(req, res) => {
        try{
            const docentes = await Docente.findAll({include: Horario})
            console.log(docentes)
            res.status(200).json({
                status: true,
                data: docentes
            })
        }catch(error){
            res.status(404).json({
                status: false,
                error: error.menssage
            })
        }

}

const get_Docente_MateriaId = async(req,res) =>{
    try{
        const id_materia = req.params;       
        console.log(id_materia)
        const materia = await Asignatura.findByPk(
            id_materia.id
        )
        console.log(materia.idDocente)
        const docente = await Docente.findByPk(materia.idDocente);

        res.status(202).json({
            status:true,
            menssage: 'Datos obtenidos con exito',
            data: docente
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
        console.log(error)
    }
}

const update_Docente = async(req, res) => {
    const {nombre, correo } = req.body
    const { id_docente } = req.params
    try{
        const put = Docente.findOne(id_docente)

        put.nombre = nombre
        put.correo = correo

        put.save()

        res.status(202).json({
            status: true,
            message: "Docente actualizado con exito"
        })

    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }
}

const delete_Docente = async(req, res) => {
    try{
      const { id_docente } = req.params
      const deleteDocente = Docente.destroy({
        where: id_docente
      })
      res.status(404).json({
        status: true, 
        menssage: "Docente eliminado con exito"
      })
    }catch(error){  
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }
}
const create_Docente = async(req, res) => {
    try{
        const { nombre, correo } = req.body
        const newDocente = Docente.create({
            nombre,
            correo
        })
        res.status(404).json({
            status: true,
            menssage: 'Docente creado con exito'
        })
    }catch(error){
        res.status(404).json({
            status: false,
            error: error.menssage
        })
    }
}

module.exports = {
    get_Docentes,
    get_Docente,
    update_Docente,
    delete_Docente,
    create_Docente,
    get_Docente_MateriaId
}