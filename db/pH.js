// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  // define schema
  var pHSchema = new Schema({
    bac:{
      bacmoins:
      {
        flag:{type:Boolean},
        remplissage:{type:Number,min:0,max:100}
      },
      bacplus:
      {
        flag:{type:Boolean},
        remplissage:{type:Number,min:0,max:100}
      },
    },
    data:{
      time_of_mesure:{type:Date,default: Date.now()}
      mesure:{type:Number,min:0,max:14}
    }
  });
  var pH = mongoose.model('pH', pHSchema);



  var App = function() {

  	var self = this;
  	this.add = function(data, callback) {
  		pH = new pH(data);
  	  callback(pH);
  	};
  	this._Model = pH;
  	this._Schema = pHSchema;
  }

  module.exports = new App();
