const express = require('express');
const router = express.Router();

const seller = require('./seller');
const cars = require('./cars');

router.use('/seller', seller );
router.use('/cars', cars );

module.exports = router;