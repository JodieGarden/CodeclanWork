var MapWrapper = function(container,center, zoom){

  this.googleMap = new google.maps.Map(container,{
    center: center,
    zoom: 10
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map:this.googleMap,
      animation: google.maps.Animation.BOUNCE

    });
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
     console.log("Latitude: ",event.latLng.lat());
     console.log("Longitude: ", event.latLng.lng());
     this.addMarker({lat:event.latLng.lat(), lng:event.latLng.lng()})
   }.bind(this));
  }
};



var app = function(){
  var container = document.getElementById("main-map");
  var center = {lat:22.396428, lng: 114.109497};
  var zoom = 10;
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
};

window.onload = app;