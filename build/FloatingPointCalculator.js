(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FloatingPointCalculator", [], factory);
	else if(typeof exports === 'object')
		exports["FloatingPointCalculator"] = factory();
	else
		root["FloatingPointCalculator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * FloatingPointCalculator - https://github.com/yhb241/floating-point-calculator
 * A JavaScript library for floating-point calculation.
 * By Harbor Young
 * Email: yhb241@gmail.com
 */

// FloatingPointCalculator
var FloatingPointCalculator = {
  add: function add() {
    if (arguments.length < 1) {
      return;
    }
    var decimal = 0;
    var result = Array.from(arguments).reduce(function (acc, val) {
      var dotIndex = val.toString().indexOf('.');

      if (dotIndex > -1 && val.toString().substr(dotIndex + 1).length > decimal) {
        decimal = val.toString().substr(dotIndex + 1).length;
      }
      return parseFloat(acc) + parseFloat(val);
    });

    return parseFloat(result.toFixed(decimal));
  },
  sub: function sub() {
    if (arguments.length < 1) {
      return;
    }
    var params = Array.from(arguments).map(function (val, idx) {
      return idx > 0 ? -val : val;
    });

    return this.add.apply(this, _toConsumableArray(params));
  },
  mult: function mult() {
    if (arguments.length < 1) {
      return;
    }
    var decimal = 0;
    var result = Array.from(arguments).reduce(function (acc, val) {
      var dotIndex = val.toString().indexOf('.');

      if (dotIndex > -1) {
        decimal += val.toString().substr(dotIndex + 1).length;
      }
      return parseFloat(acc) * parseFloat(val);
    });

    return parseFloat(result.toFixed(decimal));
  },
  div: function div() {
    if (arguments.length < 1) {
      return;
    }

    return Array.from(arguments).reduce(function (acc, val) {
      return parseFloat(acc) / parseFloat(val);
    });
  }
};

exports.default = FloatingPointCalculator;

/***/ })
/******/ ]);
});