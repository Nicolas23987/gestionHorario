const { Especialidad } = require('../relaciones/relaciones.js');

// Obtener todas las especialidades
const getEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidad.findAll();
        res.status(200).json({
            status: true,
            message: 'Especialidades obtenidas con éxito',
            data: especialidades,
        });
    } catch (error) {
        console.error('Error al obtener especialidades:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener especialidades',
        });
    }
};
const createEspecialidad = async (req, res) => {
    const { nombre, nivel, institucion, fechaObtencion, documento, estado } = req.body;

    try {
        if (!nombre) {
            return res.status(400).json({
                status: false,
                message: 'Nombre es requerido',
            });
        }
        
        const newEspecialidad = await Especialidad.create({
            nombre,
            nivel,
            institucion,
            fechaObtencion,
            documento,
            estado
        });

        res.status(201).json({
            status: true,
            message: 'Especialidad creada con éxito',
            data: newEspecialidad,
        });
    } catch (error) {
        console.error('Error al crear especialidad:', error);
        res.status(500).json({
            status: false,
            message: 'Error al crear especialidad',
        });
    }
};
module.exports = {
    getEspecialidades,
    createEspecialidad
};
