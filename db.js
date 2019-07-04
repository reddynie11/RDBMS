const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/relations', {useNewUrlParser: true}, (err)=>{
    if (err){throw err}
    else{console.log('Connection to DB estabilshed')};
});

