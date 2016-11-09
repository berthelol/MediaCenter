//pH
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
        }
        mesure: {
            type: Number,
            min: 0,
            max: 14
        }
    }
});
//Chlore
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
//Temperature
var TempSchema = new Schema({
    time_of_mesure: {type:Date,default:Date.now()},
    mesure: Number
});
//User
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

//Piscine
var PoolSchema = new Schema({
        size: {
            type: Number
        },
        type: {
            type: String
        },
        heated: {
            type: Boolean
        }
});
