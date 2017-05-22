module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	var config_1 = __webpack_require__(1);
	var request = __webpack_require__(2);
	module.exports = function (context, callback) {
	    var command = context.body;
	    var question = {
	        content: command.content,
	        timestamp: Date.now()
	    };
	    var spellCheckRequest = {
	        method: 'POST',
	        headers: { 'user-agent': 'codeeurope-webtask' },
	        form: { key: 'angwarsaw123456789', data: question.content },
	        url: "http://service.afterthedeadline.com/checkDocument"
	    };
	    request(spellCheckRequest, function (error, response, body) {
	        if (body.indexOf("error") >= 0) {
	            callback("The question is not correctly spelled");
	        } else {
	            var addQuestionRequest = {
	                method: 'POST',
	                url: config_1.config.firebase.databaseURL + "/questions.json",
	                json: question
	            };
	            request(addQuestionRequest, function () {
	                return callback(null, "Finished");
	            });
	        }
	    });
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.config = {
	    firebase: {
	        apiKey: "AIzaSyCKSLNG49HhYMxuDZOARjyC-_wOzy6kUmE",
	        authDomain: "codeeuropeqa.firebaseapp.com",
	        databaseURL: "https://codeeuropeqa.firebaseio.com/",
	        storageBucket: ""
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ }
/******/ ]);