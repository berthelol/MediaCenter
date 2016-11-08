var express = require('express');
var router = express.Router();
var path = require('path');
// import the global schema, this can be done in any file that needs the model
var toto = require('../db/data.js');
var User = require('../db/user.js');

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
router.get('/chlore/bac', function(req, res, next) {
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
  var data = {
    name:{
      firstname: "Loic",
      lastname:"Berthelot"
    },
    pool:{
      size:{35},
      type:{"ground"},
      heated:{false}
    },
    initialize:{true}
};
var user = User.add(data
  ,function(user)
{
    res.status(200).json(user);
});

router.get('/json', function(req, res, next) {
   res.sendFile(path.normalize(__dirname + '/test.json'));
});

//test
router.get('/test', function(req, res, next) {
  var test = toto.add("bill",67,function(_test){
    res.status(200).json(_test);
  })

});

router.get('/test2', function(req, res, next) {
  var test = toto.add("bill",67,function(_test){
    res.send("here is: "+ _test.name);
  })

});

router.get('/test/:toto', function(req, res, next) {
  //get from url which user we want
    var condition = {
        "data": req.params.toto,
    };
  res.send('Tu a ecrit: '+condition.data);
});

module.exports = router;
