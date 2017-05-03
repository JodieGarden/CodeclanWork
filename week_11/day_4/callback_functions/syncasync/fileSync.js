var fs = require("fs");

var buffer = fs.readFileSync("./us-states.txt");
var bufferString  = buffer.toString();

// console.log(bufferString);

var lineCount = bufferString.split("\n").length;

console.log("There are " + lineCount + " lines in the file.");
console.log("You've finished reading the file!");