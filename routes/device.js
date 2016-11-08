var express = require('express');
var router = express.Router();
var path = require('path');
// import the global schema, this can be done in any file that needs the model
var toto = require('../db/data.js');


//var foo = require('views/json.json');
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

router.get('/pH/historique', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//Chlore
router.get('/chlore/bacmoins', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/chlore/data', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/chlore/historique', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});
//Temperature
router.get('/temp/data', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

router.get('/temp/historique', function(req, res, next) {
  res.render('index', { title: 'Bigot Fuck you' });
});

//Parametres
router.get('/parametres', function(req, res, next) {

  var test = new toto({name:"bill",age:45});
  res.send("new created data :"+ test.name);

});

//test
router.get('/bigot/:toto', function(req, res, next) {
  //get from url which user we want
    var condition = {
        "data": req.params.toto,
    };
  res.send('Tu a ecrit: '+condition.data);
});
router.get('/json', function(req, res, next) {
   res.sendFile(path.normalize(__dirname + '/test.json'));
});

module.exports = router;
