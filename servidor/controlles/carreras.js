const { Carrera } = require('../relaciones/relaciones'); // Asegúrate de ajustar la ruta al modelo de Carrera

// Obtener todas las carreras
const getCarreras = async (req, res) => {
    try {
        const carreras = await Carrera.findAll();
        res.status(200).json({
            status: true,
            message: 'Carreras obtenidas con éxito',
            data: carreras,
        });
    } catch (error) {
        console.error('Error al obtener las carreras:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener las carreras',
        });
    }
};

// Crear una nueva carrera
const createCarrera = async (req, res) => {
    const { nombre } = req.body; // Ajusta los campos según la estructura de tu modelo

    try {
        if (!nombre) {
            return res.status(400).json({
                status: false,
                message: 'Nombre de la carrera es requerido',
            });
        }

        const newCarrera = await Carrera.create({ nombre });
        res.status(201).json({
            status: true,
            message: 'Carrera creada con éxito',
            data: newCarrera,
        });
    } catch (error) {
        console.error('Error al crear la carrera:', error);
        res.status(500).json({
            status: false,
            message: 'Error al crear la carrera',
        });
    }
};

module.exports = {
    getCarreras,
    createCarrera,
};
