// var wisePerson = {
//   wisdom: function(){
//     console.log('Commit often');
//   }
//   }

// var myPerson = Object.create(wisePerson);
// myPerson.walk = function(){
//   console.log("left right left right!");
// }
//   myPerson.walk();
//   myPerson.wisdom();

var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
  }


Fish.prototype = {
  swim: function(){
    console.log(this.name +" splash");
  },
  eat: function(plankton){
    console.log(this.belly.push(plankton));
  },
  belly: []
};

var myFish = new Fish("Ignacious","Rainbow");
myFish.eat();



// var uglyFish = new Fish("Codeclan", "pink");
// uglyFish.swim();
// uglyFish.eat();
// // console.log(myFish.__proto__);