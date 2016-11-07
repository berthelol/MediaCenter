var express = require('express');
var router = express.Router();
var path = require('path');
// import the global schema, this can be done in any file that needs the model
require('/../db/data.js')();
// grab the person model object
var Data = mongoose.model('Data');


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

  mongoose.connect('mongodb://localhost/persons', function(err) {
    if (err) {
      throw err;
    }

    Data.create({
      name: 'bill',
      age: 25,
    }, function(err, bill) {
      if (err) {
        throw err;
      }
      console.log('People added to db: %s', bill.toString());
      res.send('Crée: '+bill.toString());
      Data.find({}, function(err, people) {
        if (err) {
          throw err;
        }

        people.forEach(function(person) {
          console.log('People in the db: %s', person.toString());
        });

        // make sure to clean things up after we're done
        setTimeout(function() {
          cleanup();
        }, 2000);
      });
    });
  });


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
