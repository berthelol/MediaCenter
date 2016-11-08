// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  // define schema
  var UserSchema = new Schema({
    name:{
      firstname: {type:String},
      lastname:{type:String}
    },
    pool:{
      size:{type:Number},
      type:{type:String},
      heated:{type:Boolean}
    },
    initialize:{type:Boolean}
  });
  var User = mongoose.model('User', UserSchema);

  var App = function() {

  	var self = this;
  	this.add = function(data, callback) {
  		user = new User(data);
  	  callback(user);
  	};
  	this._Model = User;
  	this._Schema = UserSchema;
  }

  module.exports = new App();
