const express = require('express');

const pageRoutes = require('./routes/pageRoutes');

const app = express();

app.use(pageRoutes);

app.listen(3001);
