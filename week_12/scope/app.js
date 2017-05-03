// var name = 'Jodie'; //Global scope


// //Scope A:Global scope out here 
// var myFunction = function(){
// //Scope B: local scope in here 
// var name = 'Jod';
// // return name; //Local!!

// var myOtherFunction = function(){
// //Scope C:
// console.log(name);
// };
// myOtherFunction();
// };

// console.log(myFunction());

// var myFunction = function(){
//   console.log(this);  
// }

myFunction();

var myObject = {}

myObject.myMethod = function(){
  console.log(this);
};


