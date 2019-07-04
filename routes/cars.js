const express = require('express');
const router = express.Router();

//import model
const Seller = require('../models/seller');
const Cars = require('../models/cars');

//cars endpoint or routes
router.post('/:id', (req,res)=>{
    const car = new Cars();
    const sellerid = req.params.id; // destructuring
    car.model = req.body.formmodel;
    car.year = req.body.formyear;
    Seller.findById(sellerid, (err, data)=>{
        car.seller.push(data);
        car.save((err)=>{
            if (err){throw err;}
            else{res.json({'Status': 'Car deails saved'})}
        });
    });
    
});

//router.get('/', (req,res)=>{
//    res.json('cars page');
//});

module.exports = router;