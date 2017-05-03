var MongoClient = require('mongodb').MongoClient;

var QuoteQuery = function(){
  this.url = 'mongodb://localhost:27017/star_wars';
};

QuoteQuery.prototype = {
  all: function(db, callback){

      db.collection('quotes').find().toArray(function(err, results){
        if(err) return console.log(err);
        callback(results);
      });
    }

  }



module.exports = QuoteQuery;