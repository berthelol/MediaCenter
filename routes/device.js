var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bigot', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

module.exports = router;
