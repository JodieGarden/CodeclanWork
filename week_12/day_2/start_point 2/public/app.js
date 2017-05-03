var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  //for each item in the state, invoke addItem
}

var addItem = function(list, item){
var newItem = document.createElement('li');
newItem.innerText = item;
list.appendChild(newItem);
}

var handleClick = function(){
  var input = document.querySelector('#new-item');
  // console.log(input.value);
  var list = document.querySelector('#todo-list');
  addItem(list, input.value);
  input.value = "" ;
  // save(newItem);
  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
}

var save = function(item){
  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
