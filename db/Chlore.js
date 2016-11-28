// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var ChloreSchema = new Schema({
    bac: {
        //true if bac a été versé avant la mesure
        flag: {
            type: Boolean
        },
        remplissage: {
            type: Number,
            min: 0,
            max: 100
        }
    },
    time_of_mesure: {
        type: Date
    },
    mesure: {
        type: Number
    }
});
var Chlore = mongoose.model('Chlore', ChloreSchema);
var App = function() {
    var self = this;
    //add a data
    this.add = function(data, callback) {
        chlore = new Chlore({
            bac: data.bac,
            mesure: data.mesure,
            time_of_mesure: Date.now(),
        });
        chlore.save(function(err) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, chlore);
            }
        });
    };
    //find all historique
    /*this.findall = function(callback) {
        Chlore.find({}, function(err, historique) {
            if (err) {
                return callback(err.msg, null);
            }
            callback(null, historique);
        });
    };*/
    this.findall = function(callback) {
        Chlore.find().sort({
            time_of_mesure: -1
        }).limit(30).exec(function(err, historique) {
            if (err) {
                return callback(err.msg, null);
            }
            function custom_sort(a, b) {
                return new Date(a.time_of_mesure).getTime() - new Date(b.time_of_mesure).getTime();
            }
            historique.sort(custom_sort);
            callback(null, historique);
        });
    };
    //find the last data
    this.findlast = function(callback) {
        Chlore.find().sort({
            time_of_mesure: -1
        }).limit(1).exec(function(err, chlore) {
            if (err) {
                callback(err.msg, null);
            } else if (chlore == null) {
                callback("No chlore found", null)
            } else {
                callback(null, chlore[0]);
            }
        });
    }
    this._Model = Chlore;
    this._Schema = ChloreSchema;
}
module.exports = new App();
