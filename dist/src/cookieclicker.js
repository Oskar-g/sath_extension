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
/*!***********************************!*\
  !*** ./src/cookieclicker/main.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const documentLib_1 = __webpack_require__(/*! ../common/documentLib */ "./src/common/documentLib.ts");
(function () {
    'use strict';
    window.letCliking = false;
    window.letBuildings = false;
    window.clickWrinklers = false;
    window.cliking = setInterval(() => {
        var _a, _b, _c;
        if (window.letCliking) {
            window.Game.ClickCookie();
            window.Game.shimmers
                //                .filter(shimmer => shimmer.wrath == 0)
                .forEach((shimmer) => shimmer.pop());
        }
        if (window.clickWrinklers) {
            (_a = (0, documentLib_1.querySelector)('#PopAllNormalWrinklerButton')) === null || _a === void 0 ? void 0 : _a.click();
        }
        let upgradeExist = (0, documentLib_1.querySelector)('#upgrades .CMBackBlue');
        let techupgradeExist = (0, documentLib_1.querySelector)('#techUpgrades .CMBackBlue');
        let nextBuilding = (0, documentLib_1.querySelector)('#products .product [style^="color: rgb(0, 255, 0);"]');
        if (window.letBuildings) {
            let stores = (0, documentLib_1.querySelector)('#storeBulk1[style^="color: rgb(0, 255, 0);"]:not(.selected)') || (0, documentLib_1.querySelector)('#storeBulk10[style^="color: rgb(0, 255, 0);"]:not(.selected)') || (0, documentLib_1.querySelector)('#storeBulk100[style^="color: rgb(0, 255, 0);"]:not(.selected)');
            if (!!stores) {
                stores.click();
            }
            if (!!techupgradeExist) {
                (_b = techupgradeExist.parentElement) === null || _b === void 0 ? void 0 : _b.click();
            }
            else if (!!upgradeExist) {
                (_c = upgradeExist.parentElement) === null || _c === void 0 ? void 0 : _c.click();
            }
            else if (!!nextBuilding) {
                nextBuilding.click();
            }
        }
    }, 1);
    document.addEventListener('keydown', e => {
        if (['KeyX', 'KeyZ'].includes(e.code)) {
            window.letCliking = true;
        }
        if (['KeyC'].includes(e.code)) {
            let amount = window.Game.cookies * 0.1;
            window.Game.Earn(amount);
            window.Game.handmadeCookies += amount;
            window.Game.ClickCookie();
            window.Game.Achievements['Cheated cookies taste awful'].won = 0;
        }
        if (['KeyB'].includes(e.code)) {
            window.letBuildings = !window.letBuildings;
        }
        if (['KeyV'].includes(e.code)) {
            window.Game.cookies = 0;
            window.Game.Achievements['Cheated cookies taste awful'].won = 0;
        }
        if (['KeyW'].includes(e.code)) {
            window.clickWrinklers = !window.clickWrinklers;
        }
    });
    document.addEventListener('keyup', e => {
        if (e.code == 'KeyX') {
            window.letCliking = false;
        }
    });
})();

})();

/******/ })()
;