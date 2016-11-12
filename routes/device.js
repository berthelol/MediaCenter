var express = require('express');
var router = express.Router();
//var path = require('path');
// import the global schema, this can be done in any file that needs the model
var pH = require('../db/pH.js');
var pHSchema =require('mongoose').model('pH').schema;
var Chlore = require('../db/Chlore.js');
var Temp = require('../db/Temperature.js');

/******************************************************************************
***********************************pH******************************************
*******************************************************************************/
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
//add a new pH mesure
router.post('/pH', function(req, res, next) {
    var data = {
        mesure: req.body.mesure,
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
//get last pH mesure
router.get('/pH', function(req, res, next) {
    pH.findlast(function(err,ph) {
      if(err)
      {
        return res.status(500).json({
            success: false,
            msg: err
        });
      }
        res.status(200).json(ph);
    });
});

//get all phH mesures
router.get('/pH/historique', function(req, res, next) {
    pH.findall(function(err,historique) {
      if(err)
      {
        return res.status(500).json({
            success: false,
            msg: err
        });
      }
        res.status(200).json(historique);
    });
});
/*******************************************************************************
************************************Chlore**************************************
*******************************************************************************/
//return etat des bacs
router.get('/chlore/bac', function(req, res, next) {
    res.render('index', {
        title: 'Bigot Fuck you'
    });
});
//add a new chlore mesure
router.post('/chlore', function(req, res, next) {
  var data = {
      mesure: req.body.mesure,
      bac:
      {
        flag:req.body.bac.flag,
        remplissage:req.body.bac.remplissage
      }
  };

  Chlore.add(data, function(err, chlore) {
      if (err) {
          return res.status(500).json({
              success: false,
              msg: err.msg
          });
      }
      res.status(200).json({
          success: true,
          msg: 'Successful added Chlore mesure'
      });
  });
});
//find last chlore mesure
router.get('/chlore', function(req, res, next) {
  Chlore.findlast(function(err,chlore) {
    if(err)
    {
      return res.status(500).json({
          success: false,
          msg: err
      });
    }
      res.status(200).json(chlore);
  });
});
//get all chlore mesures
router.get('/chlore/historique', function(req, res, next) {
  Chlore.findall(function(err,historique) {
    if(err)
    {
      return res.status(500).json({
          success: false,
          msg: err
      });
    }
      res.status(200).json(historique);
  });
});
/*******************************************************************************
*********************************Temperature************************************
*******************************************************************************/
//add a temperature mesure
router.post('/temp/data', function(req, res, next) {
  var data = {
      mesure: req.body.mesure
  };
  Temp.add(data, function(err, temp) {
      if (err) {
          return res.status(500).json({
              success: false,
              msg: err.msg
          });
      }
      res.status(200).json({
          success: true,
          msg: 'Successful added Temperature mesure'
      });
  });
});
//get the last temperature mesure
router.get('/temp/data', function(req, res, next) {
  Temp.findlast(function(err,temp) {
    if(err)
    {
      return res.status(500).json({
          success: false,
          msg: err
      });
    }
      res.status(200).json(temp);
  });
});
//get all the temperature mesures
router.get('/temp/historique', function(req, res, next) {
  Temp.findall(function(err,historique) {
    if(err)
    {
      return res.status(500).json({
          success: false,
          msg: err
      });
    }
      res.status(200).json(historique);
  });
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
