var express = require('express');
var router = express.Router();
var User = require('../db/user.js');

router.get('/create', function(req, res, next) {
    var data = {
        name: {
            firstname: "Loic",
            lastname: "Berthelot"
        },
        pool: {
            size: 35,
            type: "ground",
            heated: false
        },
        initialize: true
    };
    var user = User.add(data, function(user) {
        res.status(200).json(user);
    });
});

router.get('/', function(req, res, next) {

    User.find(function(user) {
        res.status(200).json(user);
    });
});

module.exports = router;
