// function print(){
//   console.log('Inside the callback function');
// };


// setTimeout(print, 2000);

// var logRed = function(){
//   console.log("It's red!");
// }

// var logNotRed = function(){
//   console.log("It's NIT red!")
// }

// var redChecker = function(colour, logRed, logNotRed){
//   if(colour === "red"){
//     logRed();
//   } else {
//     logNotRed();
//   }
// }

// redChecker("red", logRed, logNotRed);

function publish(item, author, callback){
  console.log(item);
  var date = new Date();
  callback(author, date);
}


function messages(author, date){  
  var sendTime = date.toLocaleTimeString();
  console.log("Sent from " + author + " at " + sendTime)
}

function articleDetails(author, date){
  var pubDate = date .toDateString();
  console.log("Written by " + author);
  console.log("Published on " + pubDate);
}

publish("My Article", "Ruth", articleDetails);