/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log('hi');\nconst domElements = (() => {\n    const inputLocation = document.getElementById('inputLocation')\n    const submitBtn = document.getElementById('submitBtn')\n    const location = document.getElementById('location')\n    const text = document.getElementById('text')\n    const icon = document.getElementById('icon')\n    const humidity = document.getElementById('humidity')\n    const feelsLike = document.getElementById('feelsLike')\n    const wind = document.getElementById('wind')\n    return {\n        inputLocation, submitBtn,\n        location, text, icon, humidity, feelsLike, wind\n    }\n})()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);\n\n//# sourceURL=webpack://template/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\n\nconst dataFromApi = (() => {\n    let convertedData = ''\n    const neededInfo = {}\n    function populatePage() {\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.textContent = `${neededInfo.location.country}, ${neededInfo.location.name}`\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].text.textContent = `${neededInfo.condition.text}`\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].feelsLike.textContent = `feels like: ${neededInfo.feelsLike} C`\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wind.textContent = `wind speed: ${neededInfo.wind}`\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].humidity.textContent = `humidity : ${neededInfo.humidity}%`\n        _domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].icon.src = neededInfo.condition.icon\n    }\n\n    const getNeededInfo = (data) => {\n        console.log(data);\n        const currentOfData = data.current\n        const locationOfData = data.location\n        neededInfo.condition = {}\n        neededInfo.cloud = currentOfData.cloud\n        neededInfo.condition.text = currentOfData.condition.text\n        neededInfo.condition.icon = currentOfData.condition.icon\n        neededInfo.feelsLike = currentOfData.feelslike_c\n        neededInfo.wind = currentOfData.wind_kph\n        neededInfo.location = {}\n        neededInfo.location.country = locationOfData.country\n        neededInfo.location.name = locationOfData.name\n        neededInfo.humidity = currentOfData.humidity\n        console.log(neededInfo);\n        populatePage()\n        // return neededInfo\n    }\n\n    async function getData(location) {\n        try {\n            const data = await fetch(`https:api.weatherapi.com/v1/current.json?key=fde9d000471240ee9d472224231104&q=${location}`, { mode: 'cors' })\n            convertedData = await data.json()\n            getNeededInfo(await convertedData)\n        } catch { console.log('error'); }\n    }\n    return { getData, getNeededInfo, neededInfo }\n\n})()\nfunction triggerGetData(event) {\n    dataFromApi.getData(_domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputLocation.value)\n    document.getElementById('icon').style.display = 'block'\n    event.preventDefault()\n}\n_domElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submitBtn.addEventListener('click', triggerGetData, false)\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domElements.js");
/******/ 	
/******/ })()
;