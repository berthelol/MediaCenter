var express = require('express');
var router = express.Router();
var Order = require('../db/Order.js');
var OrderSchema =require('mongoose').model('Order').schema;
//add a new order
router.post('/', function(req, res, next) {
  if(OrderSchema.path('bac.which_bac').enumValues.indexOf(req.body.bac.which_bac) == -1)
  {
    //not the right enum
    return res.status(500).json({
        success: false,
        msg: "No bac knowed: "+req.body.bac.which_bac
    });
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

//delete last order
router.delete('/', function(req, res, next) {
  var id_order_delete = req.body.orderid;
    Order.delete(id_order_delete,function(err) {
      if(err)
      {
        return res.status(500).json({
            success: false,
            msg: err
        });
      }else {
        res.status(200).send("Order deleted!");
      }
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
