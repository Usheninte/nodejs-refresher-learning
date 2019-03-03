const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('Users are Family');
  next();
});

app.use('/', (req, res, next) => {
  console.log('Welcome Home!');
  res.send('<h1>Home is where the code is!</h1>');
});

app.listen(3000);
