// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
  // define schema
  var DataSchema = new Schema({
    name: String,
    age: Number,
  });
  mongoose.model('Data', DataSchema);
};
