const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('views'))
const index = require('./routes/index');
app.use('/', index);



app.listen(port);
