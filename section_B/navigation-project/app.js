const express = require('express');

const app = express();

const navRoutes = require('./routes/navigation');

app.use(navRoutes);

app.listen(3000);
