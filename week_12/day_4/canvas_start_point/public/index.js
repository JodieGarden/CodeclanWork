var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext('2d');
  
  // var img = document.createElement('img');
  // img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";

  // var draw = function(){
  //   context.drawImage(img, 200, 200, 90, 90);
  context.fillStyle = 'steelblue'
  context.fillRect(10, 10, 50, 50);

     // context.beginPath();
     // context.moveTo(100, 100);
     // context.lineTo(100, 200);
     // context.stroke();

     // context.beginPath();
     // context.moveTo(200,200);
     // context.lineTo(200, 300);
     // context.lineTo(100, 300);
     // context.closePath();
     // context.stroke();

     context.beginPath();
     context.arc(425, 110, 50, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(300, 110, 50, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(362.5, 200, 65, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(380, 180, 10, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(340, 180, 10, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(340, 180, 5, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(380, 180, 5, 0, Math.PI*2, true);
     context.stroke();

     context.beginPath();
     context.arc(300, 110, 40, 0, Math.PI*1, true);
     context.stroke();

     context.beginPath();
     context.arc(425, 110, 40, 0, Math.PI*1, true);
     context.stroke();

     var drawCircle = function(x, y){
       context.beginPath();
       context.arc(x, y, 50, 0, Math.PI*2, true);
       context.stroke();
     }
     //  var drawCircle = function(x, y){
     //   context.beginPath();
     //   context.arc(x, y, 50, 0, Math.PI*2, true);
     //   context.stroke();
     // }

     context.beginPath();
     context.arc(362.5, 200, 50, 0, Math.PI*1, false);
     context.stroke();

     var colorPicker = document.querySelector('#input-color');
     colorPicker.onchange = function(){ 
      var newColor = this.value;
      context.strokeStyle = newColor;


   }
 };


  window.onload = app;



  // img.onload = draw;



 

 // canvas.onclick = function(event){
 //  drawCircle(event.x, event.y);

 // }
