var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    name: 'David Pollak',
    position: 'Software Develper'
  });
});

module.exports = router;
