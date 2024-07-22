const { Rol } = require('../relaciones/relaciones.js');

// Obtener todos los roles
const getRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.status(200).json({
            status: true,
            message: 'Roles obtenidos con éxito',
            data: roles,
        });
    } catch (error) {
        console.error('Error al obtener roles:', error);
        res.status(500).json({
            status: false,
            message: 'Error al obtener roles',
        });
    }
};

// Crear un nuevo rol
const createRole = async (req, res) => {
    const { rol } = req.body;
    try {
        if (!rol) {
            return res.status(400).json({
                status: false,
                message: 'Rol es requerido',
            });
        }
        
        const newRole = await Rol.create({ rol });
        res.status(201).json({
            status: true,
            message: 'Rol creado con éxito',
            data: newRole,
        });
    } catch (error) {
        console.error('Error al crear rol:', error);
        res.status(500).json({
            status: false,
            message: 'Error al crear rol',
        });
    }
};

module.exports = {
    getRoles,
    createRole
};
