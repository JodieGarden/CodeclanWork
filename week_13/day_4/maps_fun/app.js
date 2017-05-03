var makeRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send();
}


var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};


MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
  }
};

var GeoCoder = function(address, MapWrapper){
  this.address = address;
  this.MapWrapper = MapWrapper;
};

GeoCoder.prototype = {
  geoCode: function(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.address;
    var geoCoderThis = this;
    makeRequest(url, function(){
     var addressInfo = JSON.parse(this.responseText);
     var resultsObj = JSON.parse(this.responseText);
     var coords = resultsObj.results[0].geometry.location;
     geoCoderThis.MapWrapper.googleMap.setCenter(coords);
    });
  }
}

var handleBtnClick = function(mainMap){
  var input = document.querySelector("#address");
  var address = input.value;

  var gc = new GeoCoder(address, mainMap);
  gc.geoCode();
};

  var app = function(){

  var container = document.getElementById("map");
  var center = {
    lat: 55.857092,
    lng: -4.244469
  };
  var zoom = 10;

  var mainMap = new MapWrapper(container, center, zoom);

  var button = document.querySelector("button");
  button.onclick = function(){
    handleBtnClick(mainMap);
  }

};

window.onload = app;