var Record =  function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
}

Record.prototype = {
  printRecordDetails: function(){
  return (" " + this.artist + " new album " + this.title + " is priced at £" + this.price);  
  }
}

record1 =("Lordi", "Hard rock hallelujah", 9.99);

console.log(record1.printRecordDetails);

module.exports = Record