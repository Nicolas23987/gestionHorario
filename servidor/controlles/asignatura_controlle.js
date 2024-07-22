const Asig_carrera = require('../models/asignatura_carrera.js');
const Especialidad_Asignatura = require('../models/especialidad_asignatura.js');
const { Carrera, Asignatura, Alumno, Especialidad } = require('../relaciones/relaciones.js');
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
const get_AsignaturaById = async (req, res) => {
    const { id } = req.params; // Obtén el id de los parámetros de la solicitud
    console.log(id)
    try {
        const asignatura = await Asignatura.findOne({
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
const get_AsignaturaAlumnos = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const getAsignatura = await Asignatura.findAll({
            where: {
                id_materia: id
            },

            include: [{
                model: Alumno,
                as: 'alumnos',
                include: {
                    model: Carrera,
                    as: 'carreras',
                },
                
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
const update_AsignaturaDocente = async (req, res) => {
    const { id_asignatura, id_docente } = req.params; // Asegúrate de extraer ambos parámetros correctamente
    console.log('Updating Asignatura:', id_asignatura, 'with Docente:', id_docente);

    try {
        // Buscar la asignatura por ID
        const asignatura = await Asignatura.findByPk(id_asignatura);

        if (!asignatura) {
            return res.status(404).json({
                success: false,
                message: 'Asignatura no encontrada'
            });
        }

        // Actualizar el docente de la asignatura
        asignatura.idDocente = id_docente;

        // Guardar los cambios en la base de datos
        await asignatura.save();

        res.status(200).json({
            success: true,
            message: 'Asignatura actualizada con éxito'
        });
    } catch (error) {
        console.error('Error:', error); // Para depuración
        res.status(500).json({
            success: false,
            message: error.message // Asegúrate de usar 'message' aquí
        });
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
    const { nombre, semestre, paralelo, idEspecialidad, idCarrera, tipo } = req.body;
    console.log(nombre, semestre, paralelo, idEspecialidad, idCarrera, tipo)
    try {
        // Crear la asignatura
        const nuevaAsignatura = await Asignatura.create({
            nombre,
            semestre,
            paralelo
        });

        // Crear la relación en Especialidad_asignatura
        await Especialidad_Asignatura.create({
            IDespecialida: idEspecialidad,
            asignatura: nuevaAsignatura.id_materia // Asegúrate de que `id_materia` es la clave primaria correcta
        });

        // Crear la relación en asig_carrera solo si el tipo es 'normal'
        // if (tipo === 'normal' && idCarrera) {
            await Asig_carrera.create({
                IDasignatura: nuevaAsignatura.id_materia,
                IDcarrera: idCarrera
            });
        // }

        res.status(202).json({
            success: true,
            message: "Nueva asignatura creada con éxito"
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const { Op } = require('sequelize');
const getAsigSinDocente = async (req, res) => {
    try {
        const Asignaturas = await Asignatura.findAll({
            // include:{
            //     model: Alumno
            // },
            where: {
                idDocente: {
                    [Op.is]: null
                }
            }
        })
        console.log(Asignaturas)
        res.status(202).json({
            status: true,
            data: Asignaturas
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_Asignatura,
    getAsigSinDocente,
    update_Asignatura,
    delete_Asignatura,
    create_Asignatura,
    get_AsignaturaAlumnos,
    update_AsignaturaDocente,
    get_AsignaturaById


}