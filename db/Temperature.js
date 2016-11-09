// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  // define schema
  var TempSchema = new Schema({
      time_of_mesure: {type:Date,default:Date.now()},
      mesure: Number
  });
  var Temp = mongoose.model('Temp', TempSchema);



  var App = function() {

  	var self = this;
  	this.add = function(data, callback) {
  		temp = new Temp(data);
  	  callback(temp);
  	};
  	this._Model = Temp;
  	this._Schema = TempSchema;
  }

  module.exports = new App();
