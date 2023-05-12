/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/documentLib.ts":
/*!***********************************!*\
  !*** ./src/common/documentLib.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.querySelectorAll = exports.querySelector = void 0;
const querySelector = (key) => {
    return document.querySelector(key);
};
exports.querySelector = querySelector;
const querySelectorAll = (key) => {
    return document.querySelectorAll(key);
};
exports.querySelectorAll = querySelectorAll;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./src/woopeedoopcmwhrs/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const documentLib_1 = __webpack_require__(/*! ../common/documentLib */ "./src/common/documentLib.ts");
(function () {
    function init() {
        var _a, _b;
        const video = document.querySelector('video');
        if (video) {
            const a = document.createElement('a');
            a.setAttribute('download', '');
            a.href = window.location.href;
            (_a = (0, documentLib_1.querySelector)('body')) === null || _a === void 0 ? void 0 : _a.appendChild(a);
            a.click();
            (_b = (0, documentLib_1.querySelector)('body')) === null || _b === void 0 ? void 0 : _b.removeChild(a);
            video.pause();
        }
    }
    init();
})();

})();

/******/ })()
;