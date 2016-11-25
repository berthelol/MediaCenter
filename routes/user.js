var express = require('express');
var router = express.Router();
var User = require('../db/user.js');
var Pool = require('../db/Pool.js');
//route to create a user
router.post('/', function(req, res, next) {
  var data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      id:req.body.id
  };
     User.add(data, function(err,user) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: err
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful created new user named '+user.firstname
        });
    });
});

//route to list the user info
router.get('/', function(req, res, next) {

    User.find(function(err,user) {
      if (err) {
          return res.status(401).json({
              success: false,
              msg: err
          });
      } else {
            res.status(200).json(user);
      }
    });
});
//route to create a pool
router.post('/pool', function(req, res, next) {
    var data = {
        size: req.body.size,
        type: req.body.type,
        heated: req.body.heated
    };
    var pool = Pool.add(data, function(err,pool) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: 'Pool already exists.'
            });
        }else {
          res.status(200).json({
              success: true,
              msg: 'Successful created new pool.'
          });
        }
    });
});
//route to list the user info
router.get('/pool', function(req, res, next) {
    Pool.find(function(err, pool) {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: err
            });
        } else {
            res.status(200).json(pool);
        }
    });
});
module.exports = router;
