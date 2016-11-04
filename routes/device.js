var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bigot', function(req, res, next) {
  res.respond("Fuck you");
});

module.exports = router;
