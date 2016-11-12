var express = require('express');
var router = express.Router();
var Order = require('../db/Order.js');
//add a new order
router.post('/', function(req, res, next) {
    var data = {
        ordername: req.body.ordername,
        bac:req.body.bac
    };
    Order.add(data, function(err, order) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: err.msg
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful added new order named' + order.ordername
        });
    });
});

//get last order
router.get('/', function(req, res, next) {
    Order.findlast(function(err,order) {
      if(err)
      {
        return res.status(500).json({
            success: false,
            msg: err
        });
      }
        res.status(200).json(order);
    });
});

//get all orders
router.get('/historique', function(req, res, next) {
    Order.findall(function(err,historique) {
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
module.exports = router;
