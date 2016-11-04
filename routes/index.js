var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/toto', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});


module.exports = router;
