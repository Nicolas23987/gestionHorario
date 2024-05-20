const express = require('express');
const asignatura_router = require('./router/asignatura_router.js');
const alumno_router = require('./router/alumno_router.js')
const horario_router = require('./router/horario_router.js'); 
const administrador_router = require('./router/administrador_router.js');
const docente_router = require('./router/docente_router.js')
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api",asignatura_router);
app.use("/api",alumno_router)
app.use("/api", horario_router)
app.use('/api', administrador_router)
app.use("/api", docente_router)


app.use((err, req, res, next) => {

    if (err.type === 'entity.parse.failed') { 
      res.status(400).send({ error: 'Invalid JSON' });
    } else {
      res.status(500).send({ error: 'Something went wrong' });
    }
  });

module.exports = app;