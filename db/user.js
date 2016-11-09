// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;

// define schema
var UserSchema = new Schema({
    name: {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        }
    },
    pool: {
        size: {
            type: Number
        },
        type: {
            type: String
        },
        heated: {
            type: Boolean
        }
    },
    initialize: {
        type: Boolean
    }
});
var User = mongoose.model('User', UserSchema);

var App = function() {

    var self = this;
    //create a user
    this.add = function(data, callback) {
        var user = new User(data);
        user.save(function(err) {
            if (err) return handleError(err);

        });
        callback(user);
    };
    //find (all) user
    this.find = function(callback) {
        User.find({}, function(err, users) {
            var userMap = {};

            users.forEach(function(user) {
                userMap[user._id] = user;
            });

            callback(userMap);
        });
    };
    this._Model = User;
    this._Schema = UserSchema;
}

module.exports = new App();
