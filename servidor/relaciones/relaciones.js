const Alumno_Asignatura = require('../models/alumno_asignatura');
const Alumno_AsignaturaVirtuales = require('../models/alumno_asignaturaVirtuales.js');
const Alumno = require('../models/alumnos');
const Asignatura_Horario = require('../models/asignatura_horarios.js');
const AsignaturaVirtuales_Horario = require('../models/asignaturaV_horarios.js');
const Asignatura = require('../models/asignaturas');
const AsignaturaVirtuales = require('../models/asignaturasVirtuales');
const Docente = require('../models/docentes');
const Horario = require('../models/horario');
const Admin = require('../models/administradores.js')
// const asignaturasVirtuales = require('../models/asignaturasVirtuales.js')



//muchos a muchos asignatura/alumno

Alumno.belongsToMany(Asignatura, { through: Alumno_Asignatura, foreignKey: 'alumnoIdAlumno'});
Asignatura.belongsToMany(Alumno, { through: Alumno_Asignatura, foreignKey: 'asignaturaIdMateria' });



//muchos a muchos asignatura/horario
Asignatura.belongsToMany(Horario, {through: Asignatura_Horario});
Horario.belongsToMany(Asignatura, {through: Asignatura_Horario});


//mucho a muchos asignatura virtuales/ alumno
Alumno.belongsToMany(AsignaturaVirtuales, { through: Alumno_AsignaturaVirtuales, foreignKey: 'alumnoIdAlumno'});
AsignaturaVirtuales.belongsToMany(Alumno, { through: Alumno_AsignaturaVirtuales, foreignKey: 'asignaturaVirtualId' });

AsignaturaVirtuales.belongsToMany(Horario, {through: AsignaturaVirtuales_Horario, foreignKey:'asignaturaV_A'});
Horario.belongsToMany(AsignaturaVirtuales, {through: AsignaturaVirtuales_Horario, foreignKey:'IdHorario'});

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
