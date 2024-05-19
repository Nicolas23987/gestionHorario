const express = require('express');
const asignatura_router = require('./router/asignatura_router.js');
const alumno_router = require('./router/alumno_router.js')
const app = express();

app.use(express.json());
app.use("/api/asignatura",asignatura_router);
app.use("/api/alumno",alumno_router)

app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      res.status(400).send({ error: 'Invalid JSON' });
    } else {
      res.status(500).send({ error: 'Something went wrong' });
    }
  });

module.exports = app;