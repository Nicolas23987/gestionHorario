const { Docente, Especialidad } = require('../relaciones/relaciones.js'); // Ajusta la importación según tu estructura de modelos

// Obtener todos los docentes
const get_Docentes = async (req, res) => {
    try {
        const docentes = await Docente.findAll();
        res.status(200).json({
            status: true,
            message: 'Docentes obtenidos con éxito',
            data: docentes,
        });
    } catch (error) {
        console.error('Error al obtener docentes:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener docentes',
        });
    }
};

// Obtener docente por ID
const get_Docente = async (req, res) => {
    const { id } = req.params;
    try {
        const docente = await Docente.findByPk(id);
        if (docente) {
            res.status(200).json({
                status: true,
                message: 'Docente obtenido con éxito',
                data: docente,
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'Docente no encontrado',
            });
        }
    } catch (error) {
        console.error('Error al obtener el docente:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener el docente',
        });
    }
};

// Obtener docente por Materia ID
const get_Docente_MateriaId = async (req, res) => {
    const { id } = req.params;
    try {
        const docente = await Docente.findOne({
            where: { materiaId: id }
        });
        if (docente) {
            res.status(200).json({
                status: true,
                message: 'Docente obtenido con éxito',
                data: docente,
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'Docente no encontrado',
            });
        }
    } catch (error) {
        console.error('Error al obtener el docente por materia ID:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener el docente por materia ID',
        });
    }
};

// Crear un nuevo docente
const create_Docente = async (req, res) => {
    const { nombre, especialidadId } = req.body;
    try {
        const newDocente = await Docente.create({ nombre, especialidadId });
        res.status(201).json({
            status: true,
            message: 'Docente creado con éxito',
            data: newDocente,
        });
    } catch (error) {
        console.error('Error al crear el docente:', error);
        res.status(500).json({
            status: false,
            message: 'Error al crear el docente',
        });
    }
};

// Actualizar un docente
const update_Docente = async (req, res) => {
    const { id } = req.body;
    const { nombre, especialidadId } = req.body;
    try {
        const [updated] = await Docente.update(
            { nombre, especialidadId },
            { where: { id } }
        );
        if (updated) {
            const updatedDocente = await Docente.findByPk(id);
            res.status(200).json({
                status: true,
                message: 'Docente actualizado con éxito',
                data: updatedDocente,
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'Docente no encontrado',
            });
        }
    } catch (error) {
        console.error('Error al actualizar el docente:', error);
        res.status(500).json({
            status: false,
            message: 'Error al actualizar el docente',
        });
    }
};

// Eliminar un docente
const delete_Docente = async (req, res) => {
    const { id } = req.body;
    try {
        const deleted = await Docente.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({
                status: true,
                message: 'Docente eliminado con éxito',
            });
        } else {
            res.status(404).json({
                status: false,
                message: 'Docente no encontrado',
            });
        }
    } catch (error) {
        console.error('Error al eliminar el docente:', error);
        res.status(500).json({
            status: false,
            message: 'Error al eliminar el docente',
        });
    }
};

// Obtener docentes por especialidad
const get_DocentesPorEspecialidad = async (req, res) => {
    const { especialidad } = req.query;
    try {
        if (!especialidad) {
            return res.status(400).json({
                status: false,
                message: 'Especialidad es requerida',
            });
        }

        const docentes = await Docente.findAll({
            where: { especialidadId: especialidad }
        });

        res.status(200).json({
            status: true,
            message: 'Docentes obtenidos con éxito',
            data: docentes,
        });
    } catch (error) {
        console.error('Error al obtener docentes por especialidad:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener docentes por especialidad',
        });
    }
};

module.exports = {
    get_Docentes,
    get_Docente,
    update_Docente,
    delete_Docente,
    create_Docente,
    get_Docente_MateriaId,
    get_DocentesPorEspecialidad
};
