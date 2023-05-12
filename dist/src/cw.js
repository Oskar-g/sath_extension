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
/*!************************!*\
  !*** ./src/cw/main.ts ***!
  \************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const documentLib_1 = __webpack_require__(/*! ../common/documentLib */ "./src/common/documentLib.ts");
// Carga videos a partir de url's .webm
(function () {
    function init() {
        var _a;
        setInterval(() => {
            Array.from(document.querySelectorAll('.item.private'))
                .forEach(e => e.style.display = 'none');
        }, 500);
        document.addEventListener('keydown', (e) => {
            var _a, _b;
            if (!['ArrowLeft', 'ArrowRight'].includes(e.key))
                return;
            const pages = Array.from(document.querySelectorAll('.pagination-holder .page,.page-current') || []);
            const currentPage = pages.findIndex(e => e.className == 'page-current');
            const keys = {
                'ArrowLeft': () => Math.max(currentPage - 1, 0),
                'ArrowRight': () => Math.min(currentPage + 1, pages.length),
            };
            const cosa = keys[e.key];
            const index = cosa();
            (_b = (_a = pages[index]) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.click();
        });
        const video = (_a = document.querySelector('video')) === null || _a === void 0 ? void 0 : _a.src;
        if (video) {
            fetch(video)
                .then(e => {
                var _a;
                const btn = document.createElement('button');
                btn.innerHTML = `<a style="color:black" href="${e.url}" download='eeee.mp4'>DOWNLOAD</a>`;
                (_a = (0, documentLib_1.querySelector)('.block-video')) === null || _a === void 0 ? void 0 : _a.prepend(btn);
            });
        }
    }
    init();
})();

})();

/******/ })()
;