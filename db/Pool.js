// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Define a schema
var PoolSchema = new Schema({
    size: {
        type: Number
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
              //modify the existing pool
              Pool.findByIdAndUpdate(data.id, {
                  $set: {
                      size: data.size,
                      heated: data.heated
                  }
              }, {
                  new: true
              }, function(err, modifiedpool) {
                  if (err) return handleError(err);                  
                  callback(null, modifiedpool);
              });
            } else {
                newpool = new Pool(data);
                newpool.save(function(err) {
                    if (err) return error(err, callback);
                    callback(null, newpool);
                });
            }
        });
    };
    //find user
    this.find = function(callback) {
        Pool.findOne({}, function(err, pool) {
            if (err) {
                callback(err, null);
            } else if (pool == null) {
                callback("No pool found", null)
            } else {
                callback(null, pool);
            }
        });
    };
    this._Model = Pool;
    this._Schema = PoolSchema;
}
module.exports = new App();
