const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSch = new Schema({
    model :{
        type : String
    },
    year :{
        type :String
    },
    seller : {
        type : Schema.Types.ObjectId,
        ref : 'seller_m'
    }
});
module.exports = mongoose.model('cars_m',carSch,'cars_collection');