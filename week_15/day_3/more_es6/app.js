// var showMood= function(name = "John", mood = "sleepy"){
//   // var name = name || "John";
//   // var mood = mood || "sleepy";
//   console.log(name, "is", mood);
// }

// // showMood("Jodie");
// showMood();

// var arr = [1, 2, 3, 4];
// var first = arr[0];
// var second = arr[1];

// var [first, second] = [1,2,3,4];

// var[first, ,third, fourth] =[1,2,3,4];
// var second;
// console.log(first, second, third, fourth);

// const myObj = {first: "John", last:"McC"};
// const{first: f, last: l} = myObj;

// console.log(f, l)

// const person = {first: "John", last: "McC"};

//  var logPerson = ({first, last}) => {
//    console.log(first, last);
//  }

// var logPerson = (person) => {
//   var first = person.first;
//   var last = person.last;

//   console.log(first, last);
// }

// logPerson(person);

// import fs from 'fs'; dont use this syntax as node doesn't get ES6

const fs = require('fs'); //need this syntax with node

// const readFile =(fileName, callback) => {
//   fs.readFile(fileName, (err, data) => {
//     if(err) return err;

//     callback(data.toString());
//   });
// }


// readFile("1.txt", (data) => {
//   let result = data;
//   readFile("2.txt", (data) => {
//     result += data;
//     readFile("3.txt", (data) => {
//       result += data;
//       readFile("4.txt", (data) => {
//         result += data;
//         console.log(result);
//       })
//     });
//   })
// });


// const readFile =(fileName, result) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if(err) return reject(err);

//       resolve(result + data.toString());
//     });
//   }); 
// }

// readFile("1.txt", "")
// .then((result) => readFile("2.txt", result))
// .then((result) => readFile("3.txt", result))
// .then((result) => readFile("4.txt", result))
// .then((result) => readFile("5.txt", result))
// .then((result) => console.log(result))
// .catch((err) => console.log("Error:", err.message));

import React from 'react';


var PersonComponent =({name, bio, age}) => {
  return (
    <h1>{name}</h1>
    <p>{bio}</p>
    <p>{name} is <age> years old</p>
    );
};

