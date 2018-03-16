(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["domthang"] = factory();
	else
		root["domthang"] = factory();
})(window, function() {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/builtIn/createBuiltIn.js":
/*!*******************************************!*\
  !*** ./src/core/builtIn/createBuiltIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createBuiltIn = void 0;\n\nvar domthang = _interopRequireWildcard(__webpack_require__(/*! ../../index.js */ \"./src/index.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nvar builtIns = {\n  timmy: function timmy(props, children) {\n    console.log({\n      props: props\n    });\n    return domthang.create(\"img\", {\n      src: props.src,\n      alt: \"timmy rocks\"\n    });\n  }\n};\n\nvar createBuiltIn = function createBuiltIn(tag, props, children) {\n  return tag in builtIns && builtIns[tag](props, children);\n};\n\nexports.createBuiltIn = createBuiltIn;\n\n//# sourceURL=webpack://domthang/./src/core/builtIn/createBuiltIn.js?");

/***/ }),

/***/ "./src/core/component/createComponent.js":
/*!***********************************************!*\
  !*** ./src/core/component/createComponent.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createComponent = void 0;\n\nvar _appendChildren = __webpack_require__(/*! ../../utilities/dom/appendChildren */ \"./src/utilities/dom/appendChildren.js\");\n\nvar _applyAttributes = __webpack_require__(/*! ../../utilities/dom/applyAttributes */ \"./src/utilities/dom/applyAttributes.js\");\n\nvar _createChildElements = __webpack_require__(/*! ../element/createChildElements */ \"./src/core/element/createChildElements.js\");\n\nvar _isFunction = __webpack_require__(/*! ../../utilities/isFunction */ \"./src/utilities/isFunction.js\");\n\n// const handlerName = (propName) => {\n//   return propName.toLowerCase().substring(2);\n// }\n// const componentWithProps = (component, props) => {\n//   const element = applyProps(component(props), props);\n//   return element;\n// };\nvar createComponent = function createComponent(component, props, children) {\n  return (0, _isFunction.isFunction)(component) && (0, _appendChildren.appendChildren)((0, _applyAttributes.applyAttributes)(component(props), props), (0, _createChildElements.createChildElements)(children));\n};\n\nexports.createComponent = createComponent;\n\n//# sourceURL=webpack://domthang/./src/core/component/createComponent.js?");

/***/ }),

/***/ "./src/core/create.js":
/*!****************************!*\
  !*** ./src/core/create.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.create = void 0;\n\nvar _createComponent = __webpack_require__(/*! ./component/createComponent */ \"./src/core/component/createComponent.js\");\n\nvar _createElement = __webpack_require__(/*! ./element/createElement */ \"./src/core/element/createElement.js\");\n\nvar _createBuiltIn = __webpack_require__(/*! ./builtIn/createBuiltIn */ \"./src/core/builtIn/createBuiltIn.js\");\n\nvar _isString = __webpack_require__(/*! ../utilities/isString */ \"./src/utilities/isString.js\");\n\nvar _isFunction = __webpack_require__(/*! ../utilities/isFunction */ \"./src/utilities/isFunction.js\");\n\nvar _firstTruthy = __webpack_require__(/*! ../utilities/firstTruthy */ \"./src/utilities/firstTruthy.js\");\n\n// Determine if it should create a regular DOM element\n// or if the element is actually a component.\nvar create = function create(tag, props) {\n  props = props || {};\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  return (0, _firstTruthy.firstTruthy)([(0, _createBuiltIn.createBuiltIn)(tag, props, children), (0, _createElement.createElement)(tag, props, children), (0, _createComponent.createComponent)(tag, props, children), tag]);\n};\n\nexports.create = create;\n\n//# sourceURL=webpack://domthang/./src/core/create.js?");

/***/ }),

/***/ "./src/core/element/createChildElements.js":
/*!*************************************************!*\
  !*** ./src/core/element/createChildElements.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createChildElements = void 0;\n\nvar _isString = __webpack_require__(/*! ../../utilities/isString */ \"./src/utilities/isString.js\");\n\n// Generate a new array of child nodes with\n// string children being converted to text nodes.\nvar createChildElements = function createChildElements(children) {\n  children = children || [];\n  return children.map(function (child) {\n    return (0, _isString.isString)(child) ? document.createTextNode(child) : child;\n  });\n};\n\nexports.createChildElements = createChildElements;\n\n//# sourceURL=webpack://domthang/./src/core/element/createChildElements.js?");

/***/ }),

/***/ "./src/core/element/createElement.js":
/*!*******************************************!*\
  !*** ./src/core/element/createElement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createElement = void 0;\n\nvar _appendChildren = __webpack_require__(/*! ../../utilities/dom/appendChildren */ \"./src/utilities/dom/appendChildren.js\");\n\nvar _applyAttributes = __webpack_require__(/*! ../../utilities/dom/applyAttributes */ \"./src/utilities/dom/applyAttributes.js\");\n\nvar _createChildElements = __webpack_require__(/*! ./createChildElements */ \"./src/core/element/createChildElements.js\");\n\nvar _isHandler = __webpack_require__(/*! ../../utilities/isHandler */ \"./src/utilities/isHandler.js\");\n\nvar _isString = __webpack_require__(/*! ../../utilities/isString */ \"./src/utilities/isString.js\");\n\nvar elementWithProps = function elementWithProps(tag, props) {\n  var element = document.createElement(tag);\n  return element;\n}; // Created element and recurses on children.\n\n\nvar createElement = function createElement(tag, props, children) {\n  return (0, _isString.isString)(tag) && (0, _appendChildren.appendChildren)((0, _applyAttributes.applyAttributes)(document.createElement(tag), props), (0, _createChildElements.createChildElements)(children));\n};\n\nexports.createElement = createElement;\n\n//# sourceURL=webpack://domthang/./src/core/element/createElement.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.render = exports.create = void 0;\n\nvar _create = __webpack_require__(/*! ./create */ \"./src/core/create.js\");\n\nexports.create = _create.create;\n\nvar _render = __webpack_require__(/*! ./render */ \"./src/core/render.js\");\n\nexports.render = _render.render;\n\n//# sourceURL=webpack://domthang/./src/core/index.js?");

/***/ }),

/***/ "./src/core/render.js":
/*!****************************!*\
  !*** ./src/core/render.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.render = void 0;\n\nvar _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ \"./src/utilities/dom/removeChildren.js\");\n\n// Remove all original children of the render target\n// and mount the app in their place.\nvar render = function render(element, node) {\n  (0, _removeChildren.removeChildren)(node) && node.appendChild(element);\n};\n\nexports.render = render;\n\n//# sourceURL=webpack://domthang/./src/core/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _core = __webpack_require__(/*! ./core */ \"./src/core/index.js\");\n\nexports.create = _core.create;\nexports.render = _core.render;\n\n//# sourceURL=webpack://domthang/./src/index.js?");

/***/ }),

/***/ "./src/utilities/dom/appendChildren.js":
/*!*********************************************!*\
  !*** ./src/utilities/dom/appendChildren.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.appendChildren = void 0;\n\nvar appendChildren = function appendChildren(element, children) {\n  if (children === void 0) {\n    children = [];\n  }\n\n  children.forEach(function (child) {\n    child && element.appendChild(child);\n  });\n  return element;\n};\n\nexports.appendChildren = appendChildren;\n\n//# sourceURL=webpack://domthang/./src/utilities/dom/appendChildren.js?");

/***/ }),

/***/ "./src/utilities/dom/applyAttributes.js":
/*!**********************************************!*\
  !*** ./src/utilities/dom/applyAttributes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.applyAttributes = void 0;\n\nvar _isHandler = __webpack_require__(/*! ../isHandler */ \"./src/utilities/isHandler.js\");\n\nvar _entriesOf = __webpack_require__(/*! ../entriesOf */ \"./src/utilities/entriesOf.js\");\n\nvar _handlerName = __webpack_require__(/*! ./handlerName */ \"./src/utilities/dom/handlerName.js\");\n\nvar applyAttributes = function applyAttributes(element, props) {\n  (0, _entriesOf.entriesOf)(props).forEach(function (prop) {\n    (0, _isHandler.isHandler)(prop[0]) ? element.setAttribute((0, _handlerName.handlerName)(prop[0]), prop[1]) : element.setAttribute(prop[0], prop[1]);\n  });\n  return element;\n};\n\nexports.applyAttributes = applyAttributes;\n\n//# sourceURL=webpack://domthang/./src/utilities/dom/applyAttributes.js?");

/***/ }),

/***/ "./src/utilities/dom/handlerName.js":
/*!******************************************!*\
  !*** ./src/utilities/dom/handlerName.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.handlerName = void 0;\n\nvar handlerName = function handlerName(propName) {\n  return propName.toLowerCase().substring(2);\n};\n\nexports.handlerName = handlerName;\n\n//# sourceURL=webpack://domthang/./src/utilities/dom/handlerName.js?");

/***/ }),

/***/ "./src/utilities/dom/removeChildren.js":
/*!*********************************************!*\
  !*** ./src/utilities/dom/removeChildren.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.removeChildren = void 0;\n\nvar _removeNode = __webpack_require__(/*! ./removeNode */ \"./src/utilities/dom/removeNode.js\");\n\n// Remove all children from a node.\nvar removeChildren = function removeChildren(node) {\n  Array.from(node.childNodes).forEach(_removeNode.removeNode);\n  return node;\n};\n\nexports.removeChildren = removeChildren;\n\n//# sourceURL=webpack://domthang/./src/utilities/dom/removeChildren.js?");

/***/ }),

/***/ "./src/utilities/dom/removeNode.js":
/*!*****************************************!*\
  !*** ./src/utilities/dom/removeNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.removeNode = void 0;\n\n// Tell a node to kill itself.\nvar removeNode = function removeNode(node) {\n  node.remove();\n};\n\nexports.removeNode = removeNode;\n\n//# sourceURL=webpack://domthang/./src/utilities/dom/removeNode.js?");

/***/ }),

/***/ "./src/utilities/entriesOf.js":
/*!************************************!*\
  !*** ./src/utilities/entriesOf.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.entriesOf = void 0;\n\nvar entriesOf = function entriesOf(target) {\n  return Object.entries(target); // return targets.map(target => {\n  // \treturn Object.entries(target);\n  // })\n};\n\nexports.entriesOf = entriesOf;\n\n//# sourceURL=webpack://domthang/./src/utilities/entriesOf.js?");

/***/ }),

/***/ "./src/utilities/firstTruthy.js":
/*!**************************************!*\
  !*** ./src/utilities/firstTruthy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.firstTruthy = void 0;\n\nvar firstTruthy = function firstTruthy(values) {\n  if (values === void 0) {\n    values = [];\n  }\n\n  return values.find(function (value) {\n    return !!value;\n  });\n};\n\nexports.firstTruthy = firstTruthy;\n\n//# sourceURL=webpack://domthang/./src/utilities/firstTruthy.js?");

/***/ }),

/***/ "./src/utilities/isFunction.js":
/*!*************************************!*\
  !*** ./src/utilities/isFunction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.isFunction = void 0;\n\nvar isFunction = function isFunction(target) {\n  return typeof target === \"function\";\n};\n\nexports.isFunction = isFunction;\n\n//# sourceURL=webpack://domthang/./src/utilities/isFunction.js?");

/***/ }),

/***/ "./src/utilities/isHandler.js":
/*!************************************!*\
  !*** ./src/utilities/isHandler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.isHandler = void 0;\n\nvar isHandler = function isHandler(propName) {\n  return propName.startsWith(\"on\");\n};\n\nexports.isHandler = isHandler;\n\n//# sourceURL=webpack://domthang/./src/utilities/isHandler.js?");

/***/ }),

/***/ "./src/utilities/isString.js":
/*!***********************************!*\
  !*** ./src/utilities/isString.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.isString = void 0;\n\nvar isString = function isString(target) {\n  return typeof target === \"string\";\n};\n\nexports.isString = isString;\n\n//# sourceURL=webpack://domthang/./src/utilities/isString.js?");

/***/ })

/******/ });
});