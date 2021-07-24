/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/goodbye.js":
/*!*****************************!*\
  !*** ./src/apis/goodbye.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\nconst handler = async (event, context) => {\n  debugger;\n  console.log(event);\n  console.log(context);\n  const data = JSON.parse(event.body);\n  return {\n    statusCode: 201,\n    body: JSON.stringify({\n      'information': 'Goodbye ' + data.name + '!'\n    })\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlanMtc2xzLTIwMjEtZXhhbXBsZS8uL3NyYy9hcGlzL2dvb2RieWUuanM/MGIyYSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwiZXZlbnQiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic3RhdHVzQ29kZSIsInN0cmluZ2lmeSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUcsT0FBT0MsS0FBUCxFQUFjQyxPQUFkLEtBQTBCO0FBRTdDO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsUUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sS0FBSyxDQUFDTyxJQUFqQixDQUFiO0FBQ0EsU0FBTztBQUFFQyxjQUFVLEVBQUUsR0FBZDtBQUFtQkQsUUFBSSxFQUFFRixJQUFJLENBQUNJLFNBQUwsQ0FBZTtBQUFFLHFCQUFlLGFBQWFMLElBQUksQ0FBQ00sSUFBbEIsR0FBeUI7QUFBMUMsS0FBZjtBQUF6QixHQUFQO0FBQ0gsQ0FUTSIsImZpbGUiOiIuL3NyYy9hcGlzL2dvb2RieWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudCwgY29udGV4dCkgPT4ge1xuXG4gICAgZGVidWdnZXJcbiAgICBcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KVxuXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSlcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlOiAyMDEsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgJ2luZm9ybWF0aW9uJzogJ0dvb2RieWUgJyArIGRhdGEubmFtZSArICchJyB9KSB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apis/goodbye.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/apis/goodbye.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;