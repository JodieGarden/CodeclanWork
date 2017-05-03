/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var QuoteView = __webpack_require__(1);
	
	var app = function(){
	  var url = 'http://localhost:3000/quotes'
	  makeRequest(url, requestComplete);
	}
	
	var makeRequest = function(url, callback){
	  var request =  new XMLHttpRequest();
	  request.open('GET', url);
	  request.onload = callback;
	  request.send();
	}
	
	var requestComplete = function(){
	  var quoteString = this.responseText;
	  var quotes = JSON.parse(quoteString);
	  var quoteView = new QuoteView(quotes);
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var QuoteView = function(quotes){
	  this.render(quotes);
	}
	
	QuoteView.prototype = {
	  render: function(quotes){
	    
	    console.log(quotes);
	    quotes.forEach( function(quote){
	      var li = document.createElement('li');
	      var text = document.createElement('p');
	      var ul = document.getElementById('quotes');
	      text.innerText = quote.name + ": " + '"' + quote.quote + '"';
	      li.appendChild(text);
	      ul.appendChild(li);
	    })
	  }
	}
	
	 module.exports = QuoteView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map