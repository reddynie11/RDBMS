const express = require('express');
const router = express.Router();

//import models
const Seller = require('../models/seller');

//seller endpoints or routes
router.get('/', (req,res)=>{
    Seller.find({},(err,data)=>{
        if (err){throw err;}
        else(res.send(data));
    })
});
router.post('/', (req,res)=>{
    const seller = new Seller();
    seller.name = req.body.formname;
    seller.email = req.body.formemail;
    seller.save((err)=>{
        if (err){throw err}
        else{ res.json({'status':'data saved'})}
    });
});


module.exports = router;