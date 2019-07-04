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


module.exports = router;