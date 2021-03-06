// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var OrderSchema = new Schema({
    ordername: {
        type: String,
        required: [true, 'Why no ordername?']
    },
    value: {
        type: Number
    },
    time_of_order: Date
});
var Order = mongoose.model('Order', OrderSchema);
var App = function() {

    var self = this;
    //add a data
    this.add = function(data, callback) {
        order = new Order({
            ordername: data.ordername,
            mesure: data.mesure,
            time_of_order: Date.now(),
        });
        order.save(function(err) {
            if (err) {
                callback(err.msg, null);
            } else {
                callback(null, order);
            }
        });
    };
    //find all historique
    this.findall = function(callback) {
        Order.find({}, function(err, historique) {
            var OrderMap = {};
            historique.forEach(function(order) {
                OrderMap[order._id] = order;
            });
            if (err) {
                return callback(err.msg, null);
            }
            callback(null, historique);
        });
    };
    //find the last data
    this.findlast = function(callback) {
        Order.find().sort({
            time_of_order: -1
        }).limit(1).exec(function(err, order) {
            if (err) {
                callback(err.msg, null);
            } else if (order == null) {
                callback("No order found", null)
            } else {
                callback(null, order[0]);
            }
        });
    };
    //delete the order by id
    this.delete = function(id_to_remove, callback) {
        Order.find({
            _id: id_to_remove
        }).remove(function(err, count) {
            console.log(count);
            if (err) {
                callback(err.msg);
            } else if (count == 0) {
                callback("No order found with id: " + id_to_remove);
            } else {
                callback(null);
            }
        });
    };
    this._Model = Order;
    this._Schema = OrderSchema;
}
module.exports = new App();
