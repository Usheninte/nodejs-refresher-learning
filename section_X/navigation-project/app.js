const path = require('path');

const express = require('express');

const app = express();

const navRoutes = require('./routes/navigation');

app.use(express.static(path.join(__dirname, 'public')));

app.use(navRoutes);

app.listen(3000);
