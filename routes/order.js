var express = require('express');
var router = express.Router();
var Order = require('../db/Order.js');
//add a new order
router.post('/', function(req, res, next) {
  if(Order.schema.path('bac.which_bac').enumValues.indexOf(req.body.bac.which_bac) > -1)
  {
    console.log("no enum corresponded");
  }
    var data = {
        ordername: req.body.ordername,
        bac:{
          which_bac:req.body.bac.which_bac,
          mesure:req.body.bac.mesure
        }
    };
    Order.add(data, function(err, order) {
        if (err) {
            return res.status(500).json({
                success: false,
                msg: "Error:"+err.msg
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Successful added new order'
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
