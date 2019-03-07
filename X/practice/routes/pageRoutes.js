const express = require('express');

const router = express.Router();

router.get('/fun', (req, res, next) => {
  res.send('<h1>Fun! is not always funny :(</h1>')
});

router.get('/', (req, res, next) => {
  res.send('<h1>! Bang dededeng :)</h1>')
});

module.exports = router;
