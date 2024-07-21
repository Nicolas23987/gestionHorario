const { AsignaturaVirtuales, Especialidad, Docente } = require('../../relaciones/relaciones.js');
const { Op } = require('sequelize');

class AsignaturaVirtualesController {
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
                message: "Asignatura obtenida"
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
            console.log(error);
        }
    }

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

            res.status(202).json({
                success: true,
                message: 'Asignatura actualizada con éxito'
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }

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

            res.status(202).json({
                success: true,
                message: "Asignatura eliminada con éxito"
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }

    static async create_AsignaturaV(req, res) {
        const { nombre, semestre, paralelo } = req.body;
        try {
            await AsignaturaVirtuales.create({
                nombre,
                semestre,
                paralelo
            });
            res.status(202).json({
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
    }

    static async getAsigVirtSinDocente(req, res) {
        console.log(req.cookies['my_token']);
        try {
            const asignaturas = await AsignaturaVirtuales.findAll({
                where: {
                    idDocente: {
                        [Op.is]: null
                    }
                }
            });
            console.log(asignaturas);
            res.status(202).json({
                success: true,
                data: asignaturas
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = AsignaturaVirtualesController;


// module.exports = {
//     get_AsignaturaV,
//     update_AsignaturaV,
//     delete_AsignaturaV,
//     create_AsignaturaV,
//     getAsigVirtSinDocente,
//     get_AsignaturaById
// }