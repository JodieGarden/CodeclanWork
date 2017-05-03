var callBack = function(number){
  console.log(number + " minutes");
}



var functionCaller = function(myCallback, number){
  return myCallback(number);
}

functionCaller(callBack, 4);

var increment = function(number){
  console.log(number + 1);
}



functionCaller(increment, 5);

var square = function(number){
  console.log(number * number);
}


functionCaller(square, 12);


