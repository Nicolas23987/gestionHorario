const express = require('express');
const asignatura_router = require('./router/asignatura_router.js');
const alumno_router = require('./router/alumno_router.js')
const horario_router = require('./router/horario_router.js'); 
const administrador_router = require('./router/administrador_router.js');
const docente_router = require('./router/docente_router.js')
const asignaturas_virtuales = require('./router/asignaturasVirtuales.js');
const rolesRouter = require('./router/roles.js');
const especialidadesRouter = require('./router/especialidad.js');
const {auth_admin} = require('./controlles/auth_user.js')
const cors = require('cors');
const authMiddleware = require('./auth_token/auth_token.js');

const { TIMEOUT } = require('dns');
const cookieParser = require('cookie-parser');
const carreraRouter = require('./router/carreras.js');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza con el dominio de tu frontend
  credentials: true, // Esto permite el envío de cookies en las solicitudes CORS
  exposedHeaders: ['auth-cookie']
};



const app = express();
app.use(cookieParser())

app.use(cors(corsOptions))
app.use(express.json());


const auth_user = express.Router()
auth_user.post('/auth/admin', auth_admin);
app.use('/api', auth_user)

app.use(authMiddleware);
app.use("/api",asignatura_router);
app.use("/api",alumno_router)
app.use("/api", horario_router)
app.use('/api', administrador_router)
app.use("/api", docente_router)
app.use("/api", asignaturas_virtuales);
app.use("/api", rolesRouter);
app.use("/api", especialidadesRouter);
app.use("/api", carreraRouter);



app.use((err, req, res, next) => {
    // setTimeout(()=>{
    //   res.send('cargando...')
    // },50000)
    if (err.type === 'entity.parse.failed') { 
      res.status(400).send({ error: 'Invalid JSON' });
    } else {
      res.status(500).send({ error: 'Something went wrong' });
    }
  });

module.exports = app;