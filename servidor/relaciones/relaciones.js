const Alumno_Asignatura = require('../models/alumno_asignatura');
const Alumno_AsignaturaVirtuales = require('../models/asig_virt_alum.js');
const Alumno = require('../models/alumnos');
const Asignatura_Horario = require('../models/asignatura_horarios.js');
const AsignaturaVirtuales_Horario = require('../models/asig_virt-hor.js');
const Asignatura = require('../models/asignaturas');
const AsignaturaVirtuales = require('../models/asignaturas_virtuales.js');
const Docente = require('../models/docentes');
const Rol = require('../models/roles.js');
const Horario = require('../models/horario');
const Admin = require('../models/administradores.js');////
const Facultad = require('../models/facultad.js');/////
const Carrera = require('../models/carrera.js');/////
const Asig_carrera = require('../models/asignatura_carrera.js');
const Especialidad = require('../models/especialidad.js')
const Especialidad_Docente = require('../models/especialidad_docente.js');
const Especialidad_Asignatura = require('../models/especialidad_asignatura.js');



Especialidad.belongsToMany(Asignatura, { through: Especialidad_Asignatura, foreignKey: 'IDespecialida'});
Asignatura.belongsToMany(Especialidad, { through: Especialidad_Asignatura, foreignKey: 'asignatura'})

Especialidad.belongsToMany(Docente, {through: Especialidad_Docente, foreignKey: 'IDespecialidad'});
Docente.belongsToMany(Especialidad, {through: Especialidad_Docente, foreignKey:'IDdocente'});

// Especialidad.belongsToMany(Asignatura, { through: })

Asignatura.belongsToMany(Carrera, {through: Asig_carrera, foreignKey: 'IDasignatura'});
Carrera.belongsToMany(Asignatura, {through: Asig_carrera, foreignKey: 'IDcarrera'}) 

Facultad.hasMany(Carrera, {
    foreignKey: 'idfacultad',
    as: 'carreras'
});
Carrera.belongsTo(Facultad, {
    foreignKey: 'idfacultad',
    as: 'facultad'
});
// const asignaturasVirtuales = require('../models/asignaturasVirtuales.js')

//muchos a muchos asignatura/alumno
Rol.hasMany(Docente, {
    foreignKey: 'rol_docente',
    as: 'docentes'
});
Docente.belongsTo(Rol, {
    foreignKey: 'rol_docente',
    as: 'roles'
});

Admin.belongsTo(Rol, {
    foreignKey: "rol_admin",
    as: 'rol'
});

Rol.hasMany(Admin, {
    foreignKey: 'rol_admin',
    as: 'roles'
})

Alumno.belongsTo(Rol,{
    foreignKey: 'rol_alumno',
    as: 'roles'
})
Rol.hasMany(Alumno, {
    foreignKey:'rol_alumno',
    as: 'alumnos'
});


Alumno.belongsToMany(Asignatura, { through: Alumno_Asignatura, foreignKey: 'IDalumno'});
Asignatura.belongsToMany(Alumno, { through: Alumno_Asignatura, foreignKey: 'IDMateria' });



//muchos a muchos asignatura/horario
Asignatura.belongsToMany(Horario, {through: Asignatura_Horario, foreignKey: 'asignaturaIdMateria' });
Horario.belongsToMany(Asignatura, {through: Asignatura_Horario, foreignKey: 'horarioIdMateria' });


//mucho a muchos asignatura virtuales/ alumno
Alumno.belongsToMany(AsignaturaVirtuales, { through: Alumno_AsignaturaVirtuales, foreignKey: 'IDalumno'});
AsignaturaVirtuales.belongsToMany(Alumno, { through: Alumno_AsignaturaVirtuales, foreignKey: 'IDasignatura_virtual' });

AsignaturaVirtuales.belongsToMany(Horario, {through: AsignaturaVirtuales_Horario, foreignKey:'IDasig_virt'});
Horario.belongsToMany(AsignaturaVirtuales, {through: AsignaturaVirtuales_Horario, foreignKey:'IDHorario'});

// muchos a uno asignatura/docente
Docente.hasMany(Asignatura, {
    foreignKey:'idDocente',
    as: 'asignaturas'
});

Asignatura.belongsTo(Docente, {
    foreignKey:'idDocente',
    as: 'docentes'
});



Docente.hasMany(AsignaturaVirtuales,{
    foreignKey: 'idDocente',
    as: 'asignaturas_virtuales'
});


AsignaturaVirtuales.belongsTo(Docente, {
    foreignKey:'idDocente',
    as: 'docentes'
});




Horario.belongsTo(Docente);
Docente.hasMany(Horario);




module.exports = {
    Admin,
    Alumno,
    Asignatura,
    Horario,
    Alumno_Asignatura,
    Asignatura_Horario,
    Docente,

    AsignaturaVirtuales,
    AsignaturaVirtuales_Horario,
    Alumno_AsignaturaVirtuales
  };
