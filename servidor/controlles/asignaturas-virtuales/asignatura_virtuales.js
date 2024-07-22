const { AsignaturaVirtuales, Especialidad, Docente, Alumno_Asignatura, Alumno, Alumno_AsignaturaVirtuales } = require('../../relaciones/relaciones.js');
const { Op } = require('sequelize');

class AsignaturaVirtualesController {
    // Obtener todas las asignaturas virtuales
    static async get_AsignaturaV(req, res) {
        try {
            const getAsignatura = await AsignaturaVirtuales.findAll({
                include: [{
                    model: Docente,
                    as: 'docentes'
                }]
            });
            res.status(202).json({
                success: true,
                data: getAsignatura,
                message: "Asignaturas obtenidas con éxito"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
            console.error(error);
        }
    }

    // Obtener una asignatura virtual por ID
    static async get_AsignaturaById(req, res) {
        const { id } = req.params;
        try {
            const asignatura = await AsignaturaVirtuales.findOne({
                where: { id_materia: id },
                include: [{ model: Especialidad }]
            });

            if (!asignatura) {
                return res.status(404).json({
                    success: false,
                    message: "Asignatura no encontrada"
                });
            }

            res.status(200).json({
                success: true,
                data: asignatura,
                message: "Asignatura obtenida con éxito"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
            console.error(error);
        }
    }

    // Crear una nueva asignatura virtual
    static async create_AsignaturaV(req, res) {
        const { nombre, semestre, paralelo, idEspecialidad } = req.body;
        try {
            await AsignaturaVirtuales.create({
                nombre,
                semestre,
                paralelo,
                idEspecialidad // Agregado idEspecialidad
            });
            res.status(201).json({
                success: true,
                message: "Nueva asignatura creada con éxito"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // Actualizar una asignatura virtual existente
    static async update_AsignaturaV(req, res) {
        const { id_asignatura } = req.params; // Nota el uso de req.params
        const { nombre, semestre, paralelo } = req.body;
        try {
            const asignatura = await AsignaturaVirtuales.findOne({ where: { id_asignatura } });

            if (!asignatura) {
                return res.status(404).json({
                    success: false,
                    message: 'Asignatura no encontrada'
                });
            }

            asignatura.nombre = nombre;
            asignatura.semestre = semestre;
            asignatura.paralelo = paralelo;

            await asignatura.save();

            res.status(200).json({
                success: true,
                message: 'Asignatura actualizada con éxito'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // Eliminar una asignatura virtual existente
    static async delete_AsignaturaV(req, res) {
        const { id_asignatura } = req.params;
        try {
            const result = await AsignaturaVirtuales.destroy({
                where: { id_asignatura }
            });

            if (result === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'Asignatura no encontrada'
                });
            }

            res.status(200).json({
                success: true,
                message: "Asignatura eliminada con éxito"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // Obtener asignaturas virtuales sin docente
    static async getAsigVirtSinDocente(req, res) {
        try {
            const asignaturas = await AsignaturaVirtuales.findAll({
                where: {
                    idDocente: {
                        [Op.is]: null
                    }
                }
            });

            // Obtener la cantidad de alumnos para cada asignatura
            const asignaturasConEstudiantes = await Promise.all(
                asignaturas.map(async (asignatura) => {
                    const cantidadAlumnos = await contarAlumnosPorAsignatura(asignatura.id_materia);
                    return {
                        ...asignatura.get({ plain: true }), // Obtener los datos de la asignatura en un formato plano
                        cantidadAlumnos
                    };
                })
            );

            res.status(200).json({
                success: true,
                data: asignaturasConEstudiantes
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
            console.error(error);
        }
    }
}

// Contar la cantidad de alumnos por asignatura
const contarAlumnosPorAsignatura = async (asignaturaId) => {
    try {
        const cantidadAlumnos = await Alumno_AsignaturaVirtuales.count({
            where: { IDasignatura_virtual: asignaturaId }
        });
        return cantidadAlumnos;
    } catch (error) {
        console.error('Error al contar alumnos:', error);
        return 0;
    }
};

module.exports = AsignaturaVirtualesController;
