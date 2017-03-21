var cowboy = function(firstName, surname){
  return "Howdy, I am" + firstName + surname;
}

console.log(cowboy(" Jodie", " Garden"))

var multiply = function(a , b){
  return a * b;
}

console.log(multiply(12,12));

var arr = function(array1){
  return array1[0];
}

console.log(arr(['cat', 'dog']))


// ["eggs", "cheese"];
// console.log(arr.shift());




function names1(arr){
  for(var name of arr){
    console.log(name);
  }
}

names1(["Jodie", "Jeff"]);


