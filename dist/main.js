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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWU7Ozs7OztVQ2ZmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBZ0MsTUFBTSw0QkFBNEIsSUFBSSx5QkFBeUI7QUFDdkcsUUFBUSxxRUFBNEIsTUFBTSwwQkFBMEI7QUFDcEUsUUFBUSwwRUFBaUMsa0JBQWtCLHNCQUFzQjtBQUNqRixRQUFRLHFFQUE0QixrQkFBa0IsZ0JBQWdCO0FBQ3RFLFFBQVEseUVBQWdDLGlCQUFpQixvQkFBb0I7QUFDN0UsUUFBUSw2REFBb0I7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzSEFBc0gsU0FBUyxLQUFLLGNBQWM7QUFDbEo7QUFDQTtBQUNBLFVBQVUsUUFBUTtBQUNsQjtBQUNBLGFBQWE7O0FBRWIsQ0FBQztBQUNEO0FBQ0Esd0JBQXdCLHdFQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSwrRUFBc0MsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoaScpO1xuY29uc3QgZG9tRWxlbWVudHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0TG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMb2NhdGlvbicpXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEJ0bicpXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKVxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uJylcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzTGlrZScpXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJylcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dExvY2F0aW9uLCBzdWJtaXRCdG4sXG4gICAgICAgIGxvY2F0aW9uLCB0ZXh0LCBpY29uLCBodW1pZGl0eSwgZmVlbHNMaWtlLCB3aW5kXG4gICAgfVxufSkoKVxuZXhwb3J0IGRlZmF1bHQgZG9tRWxlbWVudHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkb21FbGVtZW50cyBmcm9tICcuL2RvbUVsZW1lbnRzJ1xuXG5jb25zdCBkYXRhRnJvbUFwaSA9ICgoKSA9PiB7XG4gICAgbGV0IGNvbnZlcnRlZERhdGEgPSAnJ1xuICAgIGNvbnN0IG5lZWRlZEluZm8gPSB7fVxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlUGFnZSgpIHtcbiAgICAgICAgZG9tRWxlbWVudHMubG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtuZWVkZWRJbmZvLmxvY2F0aW9uLmNvdW50cnl9LCAke25lZWRlZEluZm8ubG9jYXRpb24ubmFtZX1gXG4gICAgICAgIGRvbUVsZW1lbnRzLnRleHQudGV4dENvbnRlbnQgPSBgJHtuZWVkZWRJbmZvLmNvbmRpdGlvbi50ZXh0fWBcbiAgICAgICAgZG9tRWxlbWVudHMuZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYGZlZWxzIGxpa2U6ICR7bmVlZGVkSW5mby5mZWVsc0xpa2V9IENgXG4gICAgICAgIGRvbUVsZW1lbnRzLndpbmQudGV4dENvbnRlbnQgPSBgd2luZCBzcGVlZDogJHtuZWVkZWRJbmZvLndpbmR9YFxuICAgICAgICBkb21FbGVtZW50cy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGBodW1pZGl0eSA6ICR7bmVlZGVkSW5mby5odW1pZGl0eX0lYFxuICAgICAgICBkb21FbGVtZW50cy5pY29uLnNyYyA9IG5lZWRlZEluZm8uY29uZGl0aW9uLmljb25cbiAgICB9XG5cbiAgICBjb25zdCBnZXROZWVkZWRJbmZvID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPZkRhdGEgPSBkYXRhLmN1cnJlbnRcbiAgICAgICAgY29uc3QgbG9jYXRpb25PZkRhdGEgPSBkYXRhLmxvY2F0aW9uXG4gICAgICAgIG5lZWRlZEluZm8uY29uZGl0aW9uID0ge31cbiAgICAgICAgbmVlZGVkSW5mby5jbG91ZCA9IGN1cnJlbnRPZkRhdGEuY2xvdWRcbiAgICAgICAgbmVlZGVkSW5mby5jb25kaXRpb24udGV4dCA9IGN1cnJlbnRPZkRhdGEuY29uZGl0aW9uLnRleHRcbiAgICAgICAgbmVlZGVkSW5mby5jb25kaXRpb24uaWNvbiA9IGN1cnJlbnRPZkRhdGEuY29uZGl0aW9uLmljb25cbiAgICAgICAgbmVlZGVkSW5mby5mZWVsc0xpa2UgPSBjdXJyZW50T2ZEYXRhLmZlZWxzbGlrZV9jXG4gICAgICAgIG5lZWRlZEluZm8ud2luZCA9IGN1cnJlbnRPZkRhdGEud2luZF9rcGhcbiAgICAgICAgbmVlZGVkSW5mby5sb2NhdGlvbiA9IHt9XG4gICAgICAgIG5lZWRlZEluZm8ubG9jYXRpb24uY291bnRyeSA9IGxvY2F0aW9uT2ZEYXRhLmNvdW50cnlcbiAgICAgICAgbmVlZGVkSW5mby5sb2NhdGlvbi5uYW1lID0gbG9jYXRpb25PZkRhdGEubmFtZVxuICAgICAgICBuZWVkZWRJbmZvLmh1bWlkaXR5ID0gY3VycmVudE9mRGF0YS5odW1pZGl0eVxuICAgICAgICBjb25zb2xlLmxvZyhuZWVkZWRJbmZvKTtcbiAgICAgICAgcG9wdWxhdGVQYWdlKClcbiAgICAgICAgLy8gcmV0dXJuIG5lZWRlZEluZm9cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOmFwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWZkZTlkMDAwNDcxMjQwZWU5ZDQ3MjIyNDIzMTEwNCZxPSR7bG9jYXRpb259YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxuICAgICAgICAgICAgZ2V0TmVlZGVkSW5mbyhhd2FpdCBjb252ZXJ0ZWREYXRhKVxuICAgICAgICB9IGNhdGNoIHsgY29uc29sZS5sb2coJ2Vycm9yJyk7IH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0RGF0YSwgZ2V0TmVlZGVkSW5mbywgbmVlZGVkSW5mbyB9XG5cbn0pKClcbmZ1bmN0aW9uIHRyaWdnZXJHZXREYXRhKGV2ZW50KSB7XG4gICAgZGF0YUZyb21BcGkuZ2V0RGF0YShkb21FbGVtZW50cy5pbnB1dExvY2F0aW9uLnZhbHVlKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG59XG5kb21FbGVtZW50cy5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cmlnZ2VyR2V0RGF0YSwgZmFsc2UpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9