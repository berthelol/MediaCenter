var express = require('express');
var router = express.Router();
var User = require('../db/user.js');
var Pool = require('../db/Pool.js');
//route to create a user
router.get('/create', function(req, res, next) {
    var data = {
        firstname: "Loic",
        lastname: "Berthelot"
    };
    var user = User.add(data, function(user,err) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: 'User already exists.'
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful created new user named '+user.firstname
        });
    });
});

//route to list the user info
router.get('/info', function(req, res, next) {

    User.find(function(user) {
        res.status(200).json(user);
    });
});
//route to create a pool
router.get('/pool/create', function(req, res, next) {
    var data = {
        size: 25,
        type: "creusée",
        heated: true
    };
    var pool = Pool.add(data, function(err,pool) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: 'Pool already exists.'
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful created new pool.'
        });
    });
});
//route to list the user info
router.get('/pool/info', function(req, res, next) {
    Pool.find(function(err, pool) {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: err.message
            });
        } else {
            res.status(200).json(pool);
        }
    });
});
module.exports = router;
