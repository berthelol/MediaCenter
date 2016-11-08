// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  // define schema
  var DataSchema = new Schema({
    name: String,
    age: Number
  });
  mongoose.model('Data', DataSchema);
