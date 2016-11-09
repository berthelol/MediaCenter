// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
mongoose.connect('localhost', 'poolcleaner');
// define schema
var UserSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    }
});
var User = mongoose.model('User', UserSchema);

var App = function() {

    var self = this;
    //create a user
    this.add = function(data, callback) {
        var user = new User(data);
        user.save(function(err) {
            if(err) return error(err, callback);
            callback(null, user);
        });

    };
    //find user
    this.find = function(callback) {
        User.findOne({}, function(err, user) {
            callback(user);
        });
    };
    this._Model = User;
    this._Schema = UserSchema;
}

module.exports = new App();
