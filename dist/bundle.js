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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendFrame\", function() { return appendFrame; });\n\nfunction appendFrame(content) {\n  content.appendChild(heroLeft());\n  content.appendChild(heroMain());\n  content.appendChild(heroRight());\n  content.appendChild(heroCaption());\n  content.appendChild(mainTabs());\n  content.appendChild(mainContent());\n  content.appendChild(footerContent());\n}\n\nfunction heroLeft() {\n  let heroLeft = document.createElement('div');\n  heroLeft.className = \"hero-left\";\n  return heroLeft;\n}\n\nfunction heroMain() {\n  let heroMain = document.createElement('div');\n  heroMain.className = \"hero-main\";\n\n  let title = document.createElement('h1');\n  title.appendChild(document.createTextNode(\"Fine Dining Restaurant\"));\n\n  heroMain.appendChild(title);\n  return heroMain;\n}\n\nfunction heroRight() {\n  let heroRight = document.createElement('div');\n  heroRight.className = \"hero-right\";\n  return heroRight;\n}\n\nfunction heroCaption() {\n  let heroCaption = document.createElement('div');\n  heroCaption.className = \"hero-caption\";\n\n  let captionText = document.createElement('h2');\n  captionText.appendChild(document.createTextNode(\"- With a name like Restaurant, it has to be good -\"));\n\n  heroCaption.appendChild(captionText);\n  return heroCaption;\n}\n\nfunction mainTabs() {\n  let tabDiv = document.createElement('div');\n  tabDiv.className = \"tabs\"\n\n  let aboutTab = document.createElement('button');\n  aboutTab.className = \"tabLinks\";\n  aboutTab.id = \"aboutTab\";\n  aboutTab.onclick = \"\"\n  aboutTab.appendChild(document.createTextNode(\"About\"));\n  tabDiv.appendChild(aboutTab);\n\n  let menuTab = document.createElement('button');\n  menuTab.className = \"tabLinks\";\n  menuTab.id = \"menuTab\";\n  menuTab.appendChild(document.createTextNode(\"Menu\"));\n  tabDiv.appendChild(menuTab);\n\n  let contactTab = document.createElement('button');\n  contactTab.className = \"tabLinks\";\n  contactTab.id = \"contactTab\";\n  contactTab.appendChild(document.createTextNode(\"Contact\"));\n  tabDiv.appendChild(contactTab);\n\n  return tabDiv;\n}\n\nfunction mainContent() {\n  let mainContent = document.createElement('div');\n  mainContent.className = \"main-content\";\n  return mainContent;\n}\n\nfunction footerContent() {\n  let footerContent = document.createElement('footer');\n  \n  let footText = document.createElement('h5')\n  footText.appendChild(document.createTextNode(\"-  The finest food you will never eat  -  Created by Eric Szywala @github/ricala\"));\n  \n  footerContent.appendChild(footText);\n  return footerContent;\n}\n\n\n\n//# sourceURL=webpack:///./src/base-frame.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-frame */ \"./src/base-frame.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.getElementById('content');\nObject(_base_frame__WEBPACK_IMPORTED_MODULE_0__[\"appendFrame\"])(content);\n\nconst mainContent = document.querySelector('.main-content');\nObject(_about__WEBPACK_IMPORTED_MODULE_1__[\"appendAbout\"])(mainContent)\n\nconst aboutBtn = document.querySelector('#aboutTab');\nconst menuBtn = document.querySelector('#menuTab');\nconst contactBtn = document.querySelector('#contactTab');\n\nconst switchTabs = (() => {\n  aboutBtn.addEventListener('click',function(){manageChildren('about'), switchButtons('about')}, false);\n  menuBtn.addEventListener('click',function(){manageChildren('menu'), switchButtons('menu')}, false);\n  contactBtn.addEventListener('click',function(){switchButtons('contact')}, false);\n\n  switchButtons(\"about\");\n\n  function manageChildren(child) {\n    removeChildren();\n    addChild(child);\n  }\n\n  function removeChildren() {\n    while(mainContent.firstChild) {\n        mainContent.removeChild(mainContent.firstChild);\n       }\n  }\n\n  function addChild(child) {\n    if(child == \"about\") { \n      Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"appendAbout\"])(mainContent); }\n    else if(child == \"menu\") {\n      Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"appendMenu\"])(mainContent);\n    }\n    else {}\n  }\n\n  function switchButtons(btn) {\n    if (btn == \"about\") {\n      aboutBtn.style.backgroundColor= \"rgb(238, 211, 188)\";\n      menuBtn.style.backgroundColor= \"rgb(202, 164, 134)\"\n      contactBtn.style.backgroundColor= \"rgb(202, 164, 134)\"\n\n    } else if (btn == \"menu\") {\n      menuBtn.style.backgroundColor = \"rgb(238, 211, 188)\";\n      aboutBtn.style.backgroundColor= \"rgb(202, 164, 134)\";\n      contactBtn.style.backgroundColor= \"rgb(202, 164, 134)\"\n\n    } else {\n      contactBtn.style.backgroundColor= \"rgb(238, 211, 188)\"\n      aboutBtn.style.backgroundColor= \"rgb(202, 164, 134)\";\n      menuBtn.style.backgroundColor= \"rgb(202, 164, 134)\"\n    }\n  }\n})();\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: appendMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendMenu\", function() { return appendMenu; });\n\n\nfunction appendMenu(parent) {\n\n  parent.appendChild(setMenu())\n}\n\nfunction setMenu(){\n  let container = document.createElement('div');\n\n  container.appendChild(menuItem(\"burger\"));\n  container.appendChild(menuItem(\"ribs\"));\n  container.appendChild(menuItem(\"steak\"));\n  container.appendChild(menuItem(\"fish\"));\n  container.appendChild(menuItem(\"ice-cream\"));\n  container.appendChild(menuItem(\"pie\"));\n\n  return container;\n}\n\nfunction menuItem(menuItem) {\n  \n  let item = document.createElement('div');\n  item.className = \"menu-items\";\n\n  let itemImg = document.createElement('div');\n  itemImg.className = \"menu-imgs\";\n  itemImg.id = `menu-${menuItem}`;\n\n  item.appendChild(itemImg);\n\n  let details = document.createElement('div');\n  details.className = \"menu-details\";\n\n  let detailsHead = document.createElement('h3');\n  detailsHead.appendChild(document.createTextNode(menuHeader(menuItem)));\n  details.appendChild(detailsHead);\n\n  let detailsIngred = document.createElement('p');\n  detailsIngred.appendChild(document.createTextNode(menuIngredients(menuItem)));\n  details.appendChild(detailsIngred);\n\n  let detailsPrice = document.createElement('h4');\n  detailsPrice.appendChild(document.createTextNode(menuPrice(menuItem)));\n  details.appendChild(detailsPrice);\n\n  item.appendChild(details);\n  return item;\n\n  function menuHeader(item) {\n    let title = \"\";\n  \n    switch(item){\n      case \"burger\":\n        title = \"Big Burger\"\n        break;\n      case \"ribs\":\n        title = \"Lamb Ribs\"\n        break;\n      case \"steak\":\n        title = \"New York Strip\"\n        break;\n      case \"fish\":\n        title = \"Swordfish\"\n        break;\n      case \"ice-cream\":\n        title = \"Raspberry Delight\"\n        break;\n      case \"pie\":\n        title = \"Lemon Pie\"\n        break;\n    }\n  \n    return title;\n  }\n  \n  function menuIngredients(item) {\n    let details = \"\";\n  \n    switch(item){\n      case \"burger\":\n        details = \"Brioche Bun | 1/2 Patty | Lettuce | Tomato | Onion Crisps | Bacon | House Fries\";\n        break;\n      case \"ribs\":\n        details = \"Half Slab | Honey BBQ | House Fries | Tomato | Green Onions\";\n        break;\n      case \"steak\":\n        details = \"House BBQ Seasonings | Asparagus | Carrots | Onions\";\n        break;\n      case \"fish\":\n        details = \"House Red Wine Sauce | Zucchini | Red Peppers | Onions | Spinach\";\n        break;\n      case \"ice-cream\":\n        details = \"Raspberry Ice Cream | Raspberries | Blueberries | Caramel | Granola\";\n        break;\n      case \"pie\":\n        details = \"Lemon Filling | Granola Crust | Whipped Cream | Powdered Sugar Cane\";\n        break;\n    }\n  \n    return details;\n  }\n  \n  function menuPrice(item) {\n    let price = \"\";\n  \n    switch(item){\n      case \"burger\":\n        price= \"$15\";\n        break;\n      case \"ribs\":\n        price= \"$20\";\n        break;\n      case \"steak\":\n        price= \"$25\";\n        break;\n      case \"fish\":\n        price= \"$20\";\n        break;\n      case \"ice-cream\":\n        price= \"$10\";\n        break;\n      case \"pie\":\n        price= \"$10\";\n        break;\n    }\n  \n    return price;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });