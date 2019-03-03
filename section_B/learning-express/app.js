const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('This always runs!');
  next(); // this allows the request to continue to the next middleware
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><input type="text name="title"><button type="submit">Add Product</button></form>');
});

app.use('/', (req, res, next) => {
  console.log('Yet another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
