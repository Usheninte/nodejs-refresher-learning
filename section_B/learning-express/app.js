const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Parsing MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));

// Route Handling MIDDLEWARE
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 ERROR HANDLING
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found :(</h1>');
});

app.listen(3000);
