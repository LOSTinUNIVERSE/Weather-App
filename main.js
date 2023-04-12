/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
console.log('hi');
const domElements = (() => {
    const inputLocation = document.getElementById('inputLocation')
    const submitBtn = document.getElementById('submitBtn')
    const location = document.getElementById('location')
    const text = document.getElementById('text')
    const icon = document.getElementById('icon')
    const humidity = document.getElementById('humidity')
    const feelsLike = document.getElementById('feelsLike')
    const wind = document.getElementById('wind')
    return {
        inputLocation, submitBtn,
        location, text, icon, humidity, feelsLike, wind
    }
})()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domElements);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");


const dataFromApi = (() => {
    let convertedData = ''
    const neededInfo = {}
    function populatePage() {
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].location.textContent = `${neededInfo.location.country}, ${neededInfo.location.name}`
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].text.textContent = `${neededInfo.condition.text}`
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].feelsLike.textContent = `feels like: ${neededInfo.feelsLike} C`
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].wind.textContent = `wind speed: ${neededInfo.wind}`
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].humidity.textContent = `humidity : ${neededInfo.humidity}%`
        _domElements__WEBPACK_IMPORTED_MODULE_0__["default"].icon.src = neededInfo.condition.icon
    }

    const getNeededInfo = (data) => {
        console.log(data);
        const currentOfData = data.current
        const locationOfData = data.location
        neededInfo.condition = {}
        neededInfo.cloud = currentOfData.cloud
        neededInfo.condition.text = currentOfData.condition.text
        neededInfo.condition.icon = currentOfData.condition.icon
        neededInfo.feelsLike = currentOfData.feelslike_c
        neededInfo.wind = currentOfData.wind_kph
        neededInfo.location = {}
        neededInfo.location.country = locationOfData.country
        neededInfo.location.name = locationOfData.name
        neededInfo.humidity = currentOfData.humidity
        console.log(neededInfo);
        populatePage()
        // return neededInfo
    }

    async function getData(location) {
        try {
            const data = await fetch(`https:api.weatherapi.com/v1/current.json?key=fde9d000471240ee9d472224231104&q=${location}`, { mode: 'cors' })
            convertedData = await data.json()
            getNeededInfo(await convertedData)
        } catch { console.log('error'); }
    }
    return { getData, getNeededInfo, neededInfo }

})()
function triggerGetData(event) {
    dataFromApi.getData(_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].inputLocation.value)
    document.getElementById('icon').style.display = 'block'
    event.preventDefault()
}
_domElements__WEBPACK_IMPORTED_MODULE_0__["default"].submitBtn.addEventListener('click', triggerGetData, false)

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domElements.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWU7Ozs7Ozs7Ozs7OztBQ2Z3Qjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFnQyxNQUFNLDRCQUE0QixJQUFJLHlCQUF5QjtBQUN2RyxRQUFRLHFFQUE0QixNQUFNLDBCQUEwQjtBQUNwRSxRQUFRLDBFQUFpQyxrQkFBa0Isc0JBQXNCO0FBQ2pGLFFBQVEscUVBQTRCLGtCQUFrQixnQkFBZ0I7QUFDdEUsUUFBUSx5RUFBZ0MsaUJBQWlCLG9CQUFvQjtBQUM3RSxRQUFRLDZEQUFvQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNIQUFzSCxTQUFTLEtBQUssY0FBYztBQUNsSjtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0EsYUFBYTs7QUFFYixDQUFDO0FBQ0Q7QUFDQSx3QkFBd0Isd0VBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLCtFQUFzQzs7Ozs7O1VDaER0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hpJyk7XG5jb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvY2F0aW9uJylcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnRuJylcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JylcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKVxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5JylcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNMaWtlJylcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKVxuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0TG9jYXRpb24sIHN1Ym1pdEJ0bixcbiAgICAgICAgbG9jYXRpb24sIHRleHQsIGljb24sIGh1bWlkaXR5LCBmZWVsc0xpa2UsIHdpbmRcbiAgICB9XG59KSgpXG5leHBvcnQgZGVmYXVsdCBkb21FbGVtZW50cyIsImltcG9ydCBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJ1xuXG5jb25zdCBkYXRhRnJvbUFwaSA9ICgoKSA9PiB7XG4gICAgbGV0IGNvbnZlcnRlZERhdGEgPSAnJ1xuICAgIGNvbnN0IG5lZWRlZEluZm8gPSB7fVxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlUGFnZSgpIHtcbiAgICAgICAgZG9tRWxlbWVudHMubG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtuZWVkZWRJbmZvLmxvY2F0aW9uLmNvdW50cnl9LCAke25lZWRlZEluZm8ubG9jYXRpb24ubmFtZX1gXG4gICAgICAgIGRvbUVsZW1lbnRzLnRleHQudGV4dENvbnRlbnQgPSBgJHtuZWVkZWRJbmZvLmNvbmRpdGlvbi50ZXh0fWBcbiAgICAgICAgZG9tRWxlbWVudHMuZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYGZlZWxzIGxpa2U6ICR7bmVlZGVkSW5mby5mZWVsc0xpa2V9IENgXG4gICAgICAgIGRvbUVsZW1lbnRzLndpbmQudGV4dENvbnRlbnQgPSBgd2luZCBzcGVlZDogJHtuZWVkZWRJbmZvLndpbmR9YFxuICAgICAgICBkb21FbGVtZW50cy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGBodW1pZGl0eSA6ICR7bmVlZGVkSW5mby5odW1pZGl0eX0lYFxuICAgICAgICBkb21FbGVtZW50cy5pY29uLnNyYyA9IG5lZWRlZEluZm8uY29uZGl0aW9uLmljb25cbiAgICB9XG5cbiAgICBjb25zdCBnZXROZWVkZWRJbmZvID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPZkRhdGEgPSBkYXRhLmN1cnJlbnRcbiAgICAgICAgY29uc3QgbG9jYXRpb25PZkRhdGEgPSBkYXRhLmxvY2F0aW9uXG4gICAgICAgIG5lZWRlZEluZm8uY29uZGl0aW9uID0ge31cbiAgICAgICAgbmVlZGVkSW5mby5jbG91ZCA9IGN1cnJlbnRPZkRhdGEuY2xvdWRcbiAgICAgICAgbmVlZGVkSW5mby5jb25kaXRpb24udGV4dCA9IGN1cnJlbnRPZkRhdGEuY29uZGl0aW9uLnRleHRcbiAgICAgICAgbmVlZGVkSW5mby5jb25kaXRpb24uaWNvbiA9IGN1cnJlbnRPZkRhdGEuY29uZGl0aW9uLmljb25cbiAgICAgICAgbmVlZGVkSW5mby5mZWVsc0xpa2UgPSBjdXJyZW50T2ZEYXRhLmZlZWxzbGlrZV9jXG4gICAgICAgIG5lZWRlZEluZm8ud2luZCA9IGN1cnJlbnRPZkRhdGEud2luZF9rcGhcbiAgICAgICAgbmVlZGVkSW5mby5sb2NhdGlvbiA9IHt9XG4gICAgICAgIG5lZWRlZEluZm8ubG9jYXRpb24uY291bnRyeSA9IGxvY2F0aW9uT2ZEYXRhLmNvdW50cnlcbiAgICAgICAgbmVlZGVkSW5mby5sb2NhdGlvbi5uYW1lID0gbG9jYXRpb25PZkRhdGEubmFtZVxuICAgICAgICBuZWVkZWRJbmZvLmh1bWlkaXR5ID0gY3VycmVudE9mRGF0YS5odW1pZGl0eVxuICAgICAgICBjb25zb2xlLmxvZyhuZWVkZWRJbmZvKTtcbiAgICAgICAgcG9wdWxhdGVQYWdlKClcbiAgICAgICAgLy8gcmV0dXJuIG5lZWRlZEluZm9cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOmFwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWZkZTlkMDAwNDcxMjQwZWU5ZDQ3MjIyNDIzMTEwNCZxPSR7bG9jYXRpb259YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxuICAgICAgICAgICAgZ2V0TmVlZGVkSW5mbyhhd2FpdCBjb252ZXJ0ZWREYXRhKVxuICAgICAgICB9IGNhdGNoIHsgY29uc29sZS5sb2coJ2Vycm9yJyk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0RGF0YSwgZ2V0TmVlZGVkSW5mbywgbmVlZGVkSW5mbyB9XG5cbn0pKClcbmZ1bmN0aW9uIHRyaWdnZXJHZXREYXRhKGV2ZW50KSB7XG4gICAgZGF0YUZyb21BcGkuZ2V0RGF0YShkb21FbGVtZW50cy5pbnB1dExvY2F0aW9uLnZhbHVlKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG59XG5kb21FbGVtZW50cy5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cmlnZ2VyR2V0RGF0YSwgZmFsc2UpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb21FbGVtZW50cy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==