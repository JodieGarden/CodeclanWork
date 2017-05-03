var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
}

var buttonCounter = 0;

var handleButtonClick = function(){
  var pTag = document.querySelector('#button-result');
  buttonCounter += 1;
  pTag.innerText = "Woah dude, totally been clicked " + buttonCounter + " , man."
}

var handleKeyPress = function(){
  var pTag = document.querySelector('#text-result');
  pTag.innerText = this.value;
}

var handleSelectChanged = function(){
  var pTag = document.querySelector('#select-result')
  pTag.innerText = this.value + ", excellent!!";
}

window.onload = app;
