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
/*!*******************************!*\
  !*** ./src/lectortmo/main.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const documentLib_1 = __webpack_require__(/*! ../common/documentLib */ "./src/common/documentLib.ts");
(function () {
    let ctrlhold = false;
    document.addEventListener('keyup', e => {
        if (e.key == 'Control')
            ctrlhold = false;
    });
    document.addEventListener('keydown', e => {
        var _a, _b, _c, _d, _e, _f;
        const islast = ((_a = (0, documentLib_1.querySelector)('#viewer-pages-select option:last-child')) === null || _a === void 0 ? void 0 : _a.value) == ((_b = (0, documentLib_1.querySelector)('#viewer-pages-select')) === null || _b === void 0 ? void 0 : _b.value);
        const isfirst = ((_c = (0, documentLib_1.querySelector)('#viewer-pages-select option:first-child')) === null || _c === void 0 ? void 0 : _c.value) == ((_d = (0, documentLib_1.querySelector)('#viewer-pages-select')) === null || _d === void 0 ? void 0 : _d.value);
        if (e.key == 'Control')
            ctrlhold = true;
        if (e.key == 'ArrowRight' && (islast || ctrlhold))
            (_e = (0, documentLib_1.querySelector)('.chapter-arrow.chapter-next a')) === null || _e === void 0 ? void 0 : _e.click();
        if (e.key == 'ArrowLeft' && (isfirst || ctrlhold))
            (_f = (0, documentLib_1.querySelector)('.chapter-arrow.chapter-prev a')) === null || _f === void 0 ? void 0 : _f.click();
    });
})();

})();

/******/ })()
;