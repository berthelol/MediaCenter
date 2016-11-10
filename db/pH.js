// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define schema
var pHSchema = new Schema({
    bac: {
        bacmoins: {
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
    data: {
        time_of_mesure: {
            type: Date,
            default: Date.now()
        },
        mesure: {
            type: Number,
            min: 0,
            max: 14
        }
    }
});
var pH = mongoose.model('pH', pHSchema);



var App = function() {

    var self = this;
    //add a data
    this.add = function(datafrompost, callback) {
        ph = new pH({
            data :{
                mesure : datafrompost.mesure
            }
        });
        ph.save(function(err) {
            if (err) {
                return callback(err.msg, null);
            }
            callback(null, ph);
        });
    };
    //find all historique
    this.findall = function(callback) {
        pH.find({}, function(err, historique) {
            var pHMap = {};
            historique.forEach(function(ph) {
                pHMap[ph._id] = ph;
            });
            if(err)
            {
                return callback(err.msg,null);
            }
              callback(null,pHMap);

        });
    };
    //find the last data
    this.findlast = function(callback) {
  /*    pH.findOne({}, function(err, ph) {
          if (err) {
              callback(err.msg, null);
          } else if (ph == null) {
              callback("No ph found", null)
          } else {
              callback(null, ph);
          }
      });*/
      pH.find({data:{time_of_mesure:{$lt: 16085}}}).sort({day: -1}).limit(1).exec(function(err, ph){
        if (err) {
            callback(err.msg, null);
        } else if (ph == null) {
            callback("No ph found", null)
        } else {
            callback(null, ph);
        }
      });

    };
    this._Model = pH;
    this._Schema = pHSchema;
}

module.exports = new App();
