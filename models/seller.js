const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellerSch = new Schema({
    name : {
        type: String
    },
    email : {
        type : String
    },
    cars : [{
        type : Schema.Types.ObjectId,
        ref : 'cars_m'
    }]
});
module.exports = mongoose.model('seller_m',sellerSch,'seller_collection');
