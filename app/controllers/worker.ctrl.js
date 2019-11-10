'use strict'
var express = require('express')
var router = express.Router();
var randomService = require('../services/random.srv.js');
var http = require('http');
var cron = require('node-cron');
var sqs = require('../../worker-sqs/sqs.js')




const execute = () => {
    sqs.getSqs(function(apps){
        console.log("Ejecucion RANDOM test finalizo");
    });
  }
  
var task = cron.schedule('* * * * *', execute, {scheduled:true});
router.get('/start', (req,res) => {
    execute();
    task.start();
    res.send('Cron iniciado')
    
  })


  
router.get('/stop', (req,res) => {
    task.stop()
    res.send('Worker detenido')
  })


module.exports = router;