/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: appendAbout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendAbout\", function() { return appendAbout; });\n\n\nfunction appendAbout(parent){\n  \n  parent.appendChild(hoursAndLocation());\n  parent.appendChild(orderOptions());\n  parent.appendChild(testimonials());\n}\n\nfunction hoursAndLocation() {\n  let container = document.createElement('section');\n  container.className = \"hours-loc\"\n  \n  let descripContainer = document.createElement('div');\n  descripContainer.className = \"main-descrip\";\n  let descriptText = document.createElement('p');\n  descriptText.appendChild(document.createTextNode(\"Lorem ipsum dolor sit amet, quo vidit dignissim cu, movet rationibus pro in, ut movet repudiandae definitionem sea. In vix illud dicit option, ei alii decore integre pro, est ea affert vituperatoribus. Et per stet viderer vocibus, mea id tale scaevola. Vim choro soleat intellegat ad, vel eu graecis vivendo verterem. Ius delicata efficiendi no.\"));\n  descriptText.appendChild(document.createTextNode(\" Lorem ipsum dolor sit amet, quo vidit dignissim cu, movet rationibus pro in, ut movet repudiandae definitionem sea. In vix illud dicit option, ei alii decore integre pro, est ea affert vituperatoribus. Et per stet viderer vocibus, mea id tale scaevola. Vim choro soleat intellegat ad, vel eu graecis vivendo verterem. Ius delicata efficiendi no.\"));\n\n  descripContainer.appendChild(descriptText);\n  container.appendChild(descripContainer);\n  \n  let hoursContainer = document.createElement(\"div\");\n  let hoursText = document.createElement('h4');\n  hoursText.appendChild(document.createTextNode(\"Everyday: Noon - 12 am\"));\n  hoursContainer.appendChild(hoursText);\n  container.appendChild(hoursContainer);\n\n  let addressContainer = document.createElement('div');\n  let addressText = document.createElement('h4');\n  addressText.appendChild(document.createTextNode(\"345 Notreal Blvd, West FakeField, CS 45678\"));\n  addressContainer.appendChild(addressText);\n  container.appendChild(addressContainer);\n\n\n\n  return container;\n}\n\nfunction orderOptions() {\n  let container = document.createElement('section');\n  container.className = \"order-options\"\n  let dine = document.createElement('h3');\n  dine.appendChild(document.createTextNode(\"-Dine In-\"));\n  container.appendChild(dine);\n\n  let delivery = document.createElement('h3');\n  delivery.appendChild(document.createTextNode(\"-Delivery-\"));\n  container.appendChild(delivery);\n\n  let carryOut = document.createElement('h3');\n  carryOut.appendChild(document.createTextNode(\"-Carry Out-\"));\n  container.appendChild(carryOut);\n\n  return container;\n}\n\nfunction testimonials() {\n  let container = document.createElement('section');\n  container.id = \"testimonials\";\n\n  let firstTest = document.createElement('div');\n  firstTest.className = \"test-section\";\n\n  let firstTestImg = document.createElement('div');\n  firstTestImg.className = \"test-img\";\n  firstTestImg.id = \"chick-img\";\n  firstTest.appendChild(firstTestImg);\n\n  let firstTestPara = document.createElement('p');\n  firstTestPara.appendChild(document.createTextNode(\"\\\"Cluck cluck, worth every buck\\\"\"));\n  firstTest.appendChild(firstTestPara);\n\n  let firstTestSmall = document.createElement('small');\n  firstTestSmall.appendChild(document.createTextNode(\"-Mr. Chicken\"));\n  firstTest.appendChild(firstTestSmall);\n\n  container.appendChild(firstTest);\n\n  let secondTest = document.createElement('div');\n  secondTest.className = \"test-section\";\n\n  let secondTestImg = document.createElement('div');\n  secondTestImg.className = \"test-img\";\n  secondTestImg.id = \"cow-img\";\n  secondTest.appendChild(secondTestImg);\n\n  let secondTestPara = document.createElement('p');\n  secondTestPara.appendChild(document.createTextNode(\"\\\"I scream for MOOre ice cream\\\"\"));\n  secondTest.appendChild(secondTestPara);\n\n  let secondTestSmall = document.createElement('small');\n  secondTestSmall.appendChild(document.createTextNode(\"-Dr. Cow\"));\n  secondTest.appendChild(secondTestSmall);\n\n  container.appendChild(secondTest);\n\n  let thirdTest = document.createElement('div');\n  thirdTest.className = \"test-section\";\n\n  let thirdTestImg = document.createElement('div');\n  thirdTestImg.className = \"test-img\";\n  thirdTestImg.id = \"pig-img\";\n  thirdTest.appendChild(thirdTestImg);\n\n  let thirdTestPara = document.createElement('p');\n  thirdTestPara.appendChild(document.createTextNode(\"\\\"These burgers make me want to oink\\\"\"));\n  thirdTest.appendChild(thirdTestPara);\n\n  let thirdTestSmall = document.createElement('small');\n  thirdTestSmall.appendChild(document.createTextNode(\"-Ms. Pig\"));\n  thirdTest.appendChild(thirdTestSmall);\n\n  container.appendChild(thirdTest);\n\n  return container;\n}\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/base-frame.js":
/*!***************************!*\
  !*** ./src/base-frame.js ***!
  \***************************/
/*! exports provided: appendFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendFrame\", function() { return appendFrame; });\n\nfunction appendFrame(content) {\n  content.appendChild(heroLeft());\n  content.appendChild(heroMain());\n  content.appendChild(heroRight());\n  content.appendChild(heroCaption());\n  content.appendChild(mainContent());\n  content.appendChild(footerContent());\n}\n\nfunction heroLeft() {\n  let heroLeft = document.createElement('div');\n  heroLeft.className = \"hero-left\";\n  return heroLeft;\n}\n\nfunction heroMain() {\n  let heroMain = document.createElement('div');\n  heroMain.className = \"hero-main\";\n\n  let title = document.createElement('h1');\n  title.appendChild(document.createTextNode(\"Fine Dining Restaurant\"));\n\n  heroMain.appendChild(title);\n  return heroMain;\n}\n\nfunction heroRight() {\n  let heroRight = document.createElement('div');\n  heroRight.className = \"hero-right\";\n  return heroRight;\n}\n\nfunction heroCaption() {\n  let heroCaption = document.createElement('div');\n  heroCaption.className = \"hero-caption\";\n\n  let captionText = document.createElement('h2');\n  captionText.appendChild(document.createTextNode(\"- With a name like Restaurant, it has to be good -\"));\n\n  heroCaption.appendChild(captionText);\n  return heroCaption;\n}\n\nfunction mainContent() {\n  let mainContent = document.createElement('div');\n  mainContent.className = \"main-content\";\n  return mainContent;\n}\n\nfunction footerContent() {\n  let footerContent = document.createElement('footer');\n  \n  let footText = document.createElement('h5')\n  footText.appendChild(document.createTextNode(\"-  The finest food you will never eat  -  Created by Eric Szywala @github/ricala\"));\n  \n  footerContent.appendChild(footText);\n  return footerContent;\n}\n\n\n\n//# sourceURL=webpack:///./src/base-frame.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-frame */ \"./src/base-frame.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\nconst content = document.getElementById('content');\n\nObject(_base_frame__WEBPACK_IMPORTED_MODULE_0__[\"appendFrame\"])(content);\nconst mainContent = document.querySelector('.main-content');\nObject(_about__WEBPACK_IMPORTED_MODULE_1__[\"appendAbout\"])(mainContent);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });