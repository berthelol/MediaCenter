var express = require('express');
var router = express.Router();
//var path = require('path');
// import the global schema, this can be done in any file that needs the model
var pH = require('../db/pH.js');


//pH
router.get('/pH/bacmoins', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

router.post('/pH/bacmoins', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

router.get('/pH/bacplus', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});
//get last data
router.get('/pH/data', function(req, res, next) {
    pH.findlast(function(ph)
  {
    res.status(200).json(historique);
  });    
});
//add a new data
router.post('/pH/data', function(req, res, next) {
    var data = {
        mesure: req.body.mesure
    };
    pH.add(data, function(err, ph) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: err.msg
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful added pH mesure'
        });
    });
});

router.get('/pH/historique', function(req, res, next) {
    pH.findall(function(historique) {
        res.status(200).json(historique);
    });
});
//Chlore
router.get('/chlore/bac', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

router.get('/chlore/data', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

router.get('/chlore/historique', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});
//Temperature
router.get('/temp/data', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

router.get('/temp/historique', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});

//Parametres
router.get('/parametres', function(req, res, next) {

});
//test
router.get('/test/:toto', function(req, res, next) {
    //get from url which user we want
    var condition = {
        "data": req.params.toto,
    };
    res.send('Tu a ecrit: ' + condition.data);
});

module.exports = router;
