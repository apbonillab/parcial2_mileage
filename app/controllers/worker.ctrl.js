'use strict'
var express = require('express')
var router = express.Router();
var randomService = require('../services/random.srv.js');
var http = require('http');

  
router.post('/test', (req,res) => {

  let data={
    'path_project': "/Users/adrianabonilla/Documents/andes/pruebas/semana8/Android_worker"
  }
  randomService.generatetest(data, function(apps){
      res.statusCode = 200;
      res.send({ status: "OK" });
  },function(err){
      res.statusCode = 404;
      res.send(err);
      
})


return res;
})

module.exports = router;