var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/jeece', function(req, res, next) {
    res.render('layout', { title: 'Velib' });
});
module.exports = router;
