// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Define a schema
var PoolSchema = new Schema({
    size: {
        type: Number
    },
    type: {
        type: String
    },
    heated: {
        type: Boolean
    }
});
var Pool = mongoose.model('Pool', PoolSchema);

var App = function() {

    var self = this;
    this.add = function(data, callback) {
        self.find(function(_err, pool) {
            //Pool already exist
            if (pool) {
                callback("Pool already exist", null);
            } else {
                newpool = new Pool(data);
                newpool.save(function(err) {
                    if (err) return error(err, callback);
                    callback(null, newpool);
                });
            }
        });
    };

    this.find = function(callback) {
        Pool.findOne({}, function(err, pool) {
            if (err) callback(err, null);
            if (pool == null) callback('No pool found',null);
            callback(null, pool);
        });
    }
    this._Model = Pool;
    this._Schema = PoolSchema;
}
module.exports = new App();
