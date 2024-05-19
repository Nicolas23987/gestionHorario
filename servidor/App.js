const express = require('express');
const router = require('./router/admin-router.js');

const app = express();

app.use(express.json());
app.use("/api/v1",router);

app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      res.status(400).send({ error: 'Invalid JSON' });
    } else {
      res.status(500).send({ error: 'Something went wrong' });
    }
  });

module.exports = app;