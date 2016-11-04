var express = require('express');
var router = express.Router();

//pH
router.get('/pH/bacmoins', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/pH/bacplus', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/pH/data', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//Chlore
router.get('/chlore/bacmoins', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/chlore/data', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//Temperature
router.get('/temp/data', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//historique
router.get('/historique/pH', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/historique/chlore', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/historique/temp', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//Parametres
router.get('/parametres', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/bigot', function(req, res, next) {
  res.send('salut salope');
});

module.exports = router;
