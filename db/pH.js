// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var pHSchema = new Schema({
    bac: {
        bacmoins: {
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
        bacplus: {
            flag: {
                type: Boolean
            },
            remplissage: {
                type: Number,
                min: 0,
                max: 100
            }
        },
    },
    time_of_mesure: {
        type: Date
    },
    mesure: {
        type: Number
    }
});
pHSchema.path('mesure').validate(function (v) {
  console.log(v);
  if(v>=0)
  {
    return true;
  } else {
    return false;
  }
//  return ((v>=0)&&(v<=14));
}, 'Error pH not between 0 and 14');

var pH = mongoose.model('pH', pHSchema);
var App = function() {

    var self = this;
    //add a data
    this.add = function(datafrompost, callback) {
        ph = new pH({mesure: datafrompost.mesure,time_of_mesure:Date.now()});
        ph.save(function(err) {
            if (err) {
                return callback(err.msg, null);
            }else {
                callback(null, ph);
            }
        });
    };
    //find all historique
    this.findall = function(callback) {
        pH.find({}, function(err, historique) {
            var pHMap = {};
            historique.forEach(function(ph) {
                pHMap[ph._id] = ph;
            });
            if (err) {
                return callback(err.msg, null);
            }
            callback(null, pHMap);

        });
    };
    //find the last data
    this.findlast = function(callback) {
        pH.find().sort({time_of_mesure: -1}).limit(1).exec(function(err, ph) {
            if (err) {
                callback(err.msg, null);
            } else if (ph == null) {
                callback("No ph found", null)
            } else {
                callback(null, ph);
            }
        });
    }
    this._Model = pH;
    this._Schema = pHSchema;
}

module.exports = new App();
