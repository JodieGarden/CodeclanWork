// var app = function(){
//   var url = 'http://pokeapi.co/api/v2';
//   makeRequest(url, requestComplete);
// }

// var makeRequest = function(url, callback){
//   //create a new XMLHttpRequest object
//   var request = new XMLHttpRequest();
//   //set the type of request we want with the url we want to call
//   request.open("GET", url);
//   //set the callback we want it to use when it has completed the call
//   request.onload = callback;
//   //send the request!
//   request.send();
// }

// var requestComplete = function(){
//   if(this.status !== 200) return;
//   var jsonString = this.responseText;
//   var pokemon = JSON.parse(jsonString); 
//   populateList(pokemon);
// }

// var populateList = function(pokemon){
//   var ul = document.getElementById('pokemon-list');

//   pokemon.forEach(function(pokemon) {
//     var li = document.createElement('li');
//     li.innerText = pokemon.name;
//     ul.appendChild(li);
//   })
// }
// window.onload = app


// var app = function(){
//   var url = 'http://pokeapi.co/api/v2/pokemon/1';
//   makeRequest(url, requestComplete);
// }

// var makeRequest = function(url, callback){{}
//   var request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.onload = callback;
//   request.send();
// }

// var requestComplete = function(){
//   if(this.status !== 200) return;
//   var jsonString = this.responseText;
//   var pokemon = JSON.parse(jsonString);
//   populateDropDown(pokemon);
// }

// var populateDropDown = function(pokemon){
//   var dropDown = document.getElementById('pokemon-dropdown');
//   for(var i = 0, len = pokemon.length; i < len; i++){
//     var option = document.createElement('option');
//     option.innerText = pokemon.name;
//     // dropDown.appendChild(option);
//   };

// }

// var populateInfo = function(pokemon) {
//   var url = "http://pokeapi.co/api/v2'" + this.value;
//   makeRequest(url, makeInfo);
// }

// var makeInfo = function() {
//   if (this.status !== 200) return;
//   var jsonString = this.responseText;
//   var poke = JSON.parse(jsonString);
//   buildInfo(poke);
// }

// var buildInfo = function(poke) {
//   var ul = document.querySelector('#pokemon-info');
//   var li = document.createElement('li');
//   li.innerText = "Name: " + poke.name;
//   ul.appendChild(li);
// }

// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// }


// var requestComplete = function(){
//   console.log("request complete");
//   if(this.status !== 200){
//     return;
//   }
//   var jsonString = this.responseText;
//   var JSONobject = JSON.parse(jsonString);
//   console.log(JSONobject);
//   populateList(JSONobject);
// };

// var populateList = function(object){
//   var pokemon = object.name 
//   console.log(pokemon);

//   var pokemonListDiv = document.querySelector('#pokemon');
//   var list = document.createElement('li');
//   pokemonListDiv.appendChild('li');

//   pokemon.forEach(function(pokemon){
//     var li = document.createElement('li');
//     li.appendChild('li');
//   })
// }


// var app = function(){
//   var query = document.querySelector('#pokemon-query');
//   console.log(query);
//   query.onkeydown = function(event){
//     console.log(event.which);
//     if(event.which==13){
//       var url = 'http://pokeapi.co/api/v2/' + query.value;
//       makeRequest(url, requestComplete);
//     }
//   }
// }



// window.onload = app


var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var getUrl = function(query){
  var url = "http://pokeapi.co/api/v2/";
  url += query;
  return url;

};

var processResults = function(){
  var responseString = this.responseText;
  var pokemon = JSON.parse(responseString).pokemon.value;
  console.log(pokemon);
  var Object = pokemon.map(function(item){
    var pokemonName = item.name;
    var pokemonType = pokemon.type;

    return new Album(pokemonName, pokemonType);
    console.log(pokemonName, pokemonType);
  }); 

  populateList(Objects);
};

var populateList = function(pokemon){
  var pokemonDiv = document.getElementById('Pokemon-query');
  pokemonDiv.innerText = "";

  pokemon.forEach(function(myPokemon){
    var pokemonDivs = myPokemon.getHtml();
    pokemonDivs.appendChild(pokemonDiv);
  });
};

var handleBtnClick = function(){
  var value = document.querySelector("#Pokemon-query").value;
  
  if(!value) return alert("Search PLEASE");

  var url = getUrl(value);
  makeRequest(url, processResults);
};

var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleBtnClick;
}

window.onload = app;