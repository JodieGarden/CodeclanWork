var express = require('express');
var catRouter = express.Router();

var cats = ["Bengal", "Siamese", "Ragdoll", "Top Cat", "ThunderCat"];

catRouter.get('/cats/:id', function(req, res){
  res.json({data: cats[req.params.id]})
});

catRouter.get('/', function(req, res){
  res.json(cats);
});

catRouter.put('/:id', function(req, res){
  cats[req.params.id] = request.body.cat;
  res.json({data: cats});
});

catRouter.delete('/:id', function(req, res){
  cats.splice(req.params.id, 1);
  res.json({data: cats});
});


module.exports = catRouter;