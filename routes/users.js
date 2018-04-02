var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET /cool */
router.get('/cool', function(req, res) {
  res.render('index', { title: 'Your so cool' });
});

module.exports = router;
