// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  // define schema
  var ChloreSchema = new Schema({
      bac: {
          flag: {
              type: Boolean
          },
          remplissage: {
              type: Number,
              min: 0,
              max: 100
          }
      },
      data: {
          time_of_mesure: {
              type: Date,
              default: Date.now()
          }
          mesure: {
              type: Number
          }
      }
  });
  var Chlore = mongoose.model('Chlore', ChloreSchema);



  var App = function() {

  	var self = this;
  	this.add = function(data, callback) {
  		chlore = new Chlore(data);
  	  callback(chlore);
  	};
  	this._Model = Chlore;
  	this._Schema = ChloreSchema;
  }

  module.exports = new App();
