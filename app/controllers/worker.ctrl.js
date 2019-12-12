'use strict'
var express = require('express')
var router = express.Router();
var randomService = require('../services/random.srv.js');
var http = require('http');

  
router.post('/calabash', (req,res) => {
  let data={
    'mutante':req.body.mutante,
    'path_project': req.body.path_project
  }
  randomService.generatetest(data, function(apps){
      res.statusCode = 200;
      res.send({ status: "OK" });
  },function(err){
      res.statusCode = 404;
      res.send(err);
      
})
return res;
});

  
router.post('/random', (req,res) => {
  let data={
    'mutante':req.body.mutante,
    'path_project': req.body.path_project
  }
  randomService.generateRandom(data, function(apps){
      res.statusCode = 200;
      res.send({ status: "OK" });
  },function(err){
      res.statusCode = 404;
      res.send(err);
      
})

return res;
});

router.post('/vrt', (req,res) => {
  let data={
    'imagebefore': req.body.before,
    'imageafter': req.body.after,
    'path_project': req.body.path_project
  }
  randomService.generatevrt(data, function(apps){
      res.statusCode = 200;
      res.send({ status: "OK" });
  },function(err){
      res.statusCode = 404;
      res.send(err);
      
})

return res;
});

module.exports = router;