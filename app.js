'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
var mysql = require('mysql');
const app = express();
const config = require('./config.json');
var randomController = require('./app/controllers/worker.ctrl.js');



const port = 8002;

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/test', [randomController]);

app.use( function (req, res, next) {
    next();
});

app.listen(port, () => {
  console.log('Worker random listening on ' + port);
});
