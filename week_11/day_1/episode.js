var name = 'John';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

var suspectOne = 'John';
var suspectTwo = 'Ally';
var suspectThree = 'Alan';
var suspectFour = 'Steve';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

var murderer = 'Steve';

var outerFunction = function() {
  var murderer = 'Alan';

  var innerFunction = function() {
    murderer = 'Ally';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

