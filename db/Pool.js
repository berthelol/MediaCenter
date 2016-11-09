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
        pool = new Pool(data);
        pool.save(function(err) {
            if(err) return error(err, callback);
            callback(null, pool);
        });

    };
  	
    this.find = function(callback)
    {
      Pool.findOne({}, function(err, pool) {
          if(err) return error(err, callback);
          if(pool == null) return error('No pool Found', callback);

          callback(null, pool);
      });
    }
  	this._Model = Pool;
  	this._Schema = PoolSchema;
  }
  module.exports = new App();
