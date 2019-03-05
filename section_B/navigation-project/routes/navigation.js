const path = require('path');

const express = require('express');

const rootDir = require('../util/myPath');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'))
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
});

module.exports = router;
