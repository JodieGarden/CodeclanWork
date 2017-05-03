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

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {config = {
	  entry: __dirname + "/src/app.js",
	  output: {
	    filename: "bundle.js",
	    path: __dirname + "/build"
	  },
	  devtool: 'source-map'
	}
	
	module.exports = config;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map