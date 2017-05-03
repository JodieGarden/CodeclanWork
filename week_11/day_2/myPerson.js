// var myPerson = {
//   name: "Jodie",
//   age: 21,
//   weapon: "unicorn samurai sword",
//   eat: function(){
//     console.log("OM NOM NOM cakes");
//   },
//   talk: function(){
//     console.log("I will fight you with my " + this.weapon);
//   }

// }

// myPerson.talk();

// var myDog = Object.create(null);

// myDog.smell = "terrible";
// myDog.talk = function(){
//   console.log("I am a dog and i smell " + this.smell);
// }

// console.log("myDog", myDog);
// myDog.talk();

// var guineaPig = Object.create(null);

// var killerGuineaPig = Object.create(guineaPig);

var myBear = {
  name: "Yogi",
  type: "Black bear",
  belly: [],
  munch: function(jam){
      this.belly.push(jam);
    }
  } 



myBear.munch();