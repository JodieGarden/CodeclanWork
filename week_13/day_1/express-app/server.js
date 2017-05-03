var express = require('express');
var app = express();
var path = require('path');

var data = {name: 'Saturn', size:90876};

// app.get('/', function(req, res){

//   res.json({data: 'Yo!!!!'});

// });

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', function(req, res){
  res.json(data);
})

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('App running on port ' + this.address().port);
});