const { send } = require('process');
const  Admin  = require('../models/administradores')

const getAdmin = async(req, res) => {
    try {
      const admins = await Admin.findAll();
      res.status(200).json({
        success: true,
        data: admins
      });
    //   console.log(admins)
    //  res.json(admins)
    } catch (error) {
      console.error('Error al obtener administradores:', error);
      res.status(500).json({
        success: false,
        message: 'Error al obtener administradores',
        error: error.message
      });
    }
}

const create_Admin = async(req, res)=>{
    console.log(req.body);
    try{
        const {nombre, correo, password} = req.body
        const newAdmin = await Admin.create({
            nombre:nombre,
            correo: correo,
            contraseña: password
        });

        res.status(201).json({
            success: true,
            menssage: 'Administrador registrado exitosamente',
            data: newAdmin
        })
        // res.json(newAdmin);        
        // res.send('creando admin')  
        // console.log(newAdmin)
    }catch (error){
         console.error('Error al crear usuario:', error);

        if (error.name === 'SequelizeValidationError') {
            // Manejo específico para errores de validación de Sequelize
            const validationErrors = error.errors.map(err => err.message);
            res.status(400).json({
                success: false,
                message: 'Error de validación al crear usuario',
                errors: validationErrors
            });
        } else {
            // Manejo general para otros tipos de errores
            res.status(500).json({
                success: false,
                message: 'Error al crear usuario',
                error: error.message
            });
    }}
}

const delete_Admin = async(req, res) =>{
    try{
        const {id} = req.params
        const delet = await Admin.destroy({
         where: {
            id_Administrador: id,
        }});
        res.status(200).json({
            success: true,
            menssage: 'administrador elimiinado con exito',
            data: delet
        })
    
    }catch(error){
        res.status(404).json({
            success: false,
            menssage: 'No se pudo eliminar',
        })
    }

    // console.log(req.params.id)
    // res.send('delete admins')

    // send.status(204).json({
    //     success: true,
    //     data: delet
    // })
}

const update_Admin = async(req, res)=>{
    const { id } = req.params;
    const {nombre, correo, contraseña} = req.body;

    const put = await Admin.findByPk(id)

    put.nombre = nombre 
    put.correo = correo 
    put.contraseña = contraseña
    await put.save() 
    // console.log(put) 
    res.send('updating')
 
}

module.exports = {
    create_Admin, getAdmin, delete_Admin, update_Admin
};