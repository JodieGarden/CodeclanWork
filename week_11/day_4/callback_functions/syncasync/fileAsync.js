var fs = require("fs");

fs.readFile("./us-states.txt", "utf-8", function(err, data){
  if(err){
    console.log("UHOH SPAGHETTI O's " + err);
  }else{
    var bufferString = data.toString();

    var lineCount = bufferString.split("\n").length;

    console.log("There are " + lineCount + " lines in the file");
    console.log("You've finished reading the file!");
  }
});

console.log("THe next line in the program");