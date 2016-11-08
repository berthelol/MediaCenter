// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  // define schema
  var DataSchema = new Schema({
    name: String,
    age: Number,
  });
  var Data = mongoose.model('Data', DataSchema);

  var App = function() {

  	var self = this;

  	// Recipient must be : { group: _id } or { device: _id }
  	this.add = function(_name, _age, callback) {
  		order = new Data({name:_name,age:_age});
  	  callback(order);
  	};
  	this._Model = Data;
  	this._Schema = DataSchema;
  }

  module.exports = new App();
