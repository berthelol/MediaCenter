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

UserSchema.path('firstname').validate(function(v) {
    return v.length > 5;
}, 'Error first name is under 5');

var User = mongoose.model('User', UserSchema);

var App = function() {

    var self = this;
    //create a user
    this.add = function(data, callback) {
        self.find(function(_err, user) {
            //User already exist then we modify it
            if (user) {
                User.findByIdAndUpdate(data.id, {
                    $set: {
                        firstname: data.firstname,
                        lastname: data.lastname
                    }
                }, {
                    new: true
                }, function(err, modifieduser) {
                    if (err) return handleError(err);
                    console.log(modifieduser);
                    callback(null, modifieduser);
                });
            } else {
                newuser = new User(data);
                newuser.save(function(err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, newuser);
                    }
                });
            }
        });
    };
    //find user
    this.find = function(callback) {
        User.findOne({}, function(err, user) {
            if (err) {
                callback(err, null);
            } else if (user == null) {
                callback("No user found", null)
            } else {
                callback(null, user);
            }
        });
    };
    this._Model = User;
    this._Schema = UserSchema;
}

module.exports = new App();
