var app = function(){
  var url = 'https://restcountries.eu/rest/v2';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){{}
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateDropDown(countries);
}

var populateDropDown = function(countries){
  var dropDown = document.getElementById('countries-dropdown');
  countries.forEach(function(country) {
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = country.alpha3Code;
    dropDown.appendChild(option);
  });

  dropDown.onchange = populateInfo;
}

var populateInfo = function(country) {
  var url = "https://restcountries.eu/rest/v2/alpha/" + this.value;
  makeRequest(url, makeInfo);
}

var makeInfo = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  var country = JSON.parse(jsonString);
  buildInfo(country);
}

var buildInfo = function(country) {
  var ul = document.querySelector('#country-info');
  var li = document.createElement('li');
  li.innerText = "Name: " + country.name;
  ul.appendChild(li);
  var li2 = document.createElement('li');
  li2.innerText ="Population: " + country.population;
  ul.appendChild(li2);
  var li3 = document.createElement('li');
  li3.innerText = "Demonym: " + country.demonym;
  ul.appendChild(li3);
}


window.onload = app;