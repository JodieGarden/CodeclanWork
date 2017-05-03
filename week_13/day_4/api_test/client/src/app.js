var makeRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send();
};

var makePostRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  var params = "name=Tesco&loation=Some Location&staff[]=John&staff[]=Ally";
  xhr.send(params);
};

var app = function(){
  var payload = "";
  makePostRequest('api/shops/all', function(){
    console.log(this.responseText);
  })
  


  // makeRequest('/api/shops/all', function(){
  //    var responseDiv = document.getElementById("response");

  //    var data = this.responseText;

  //    responseDiv.innerHTML = data;
  // });
};

window.onload = app;