const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
