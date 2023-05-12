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


/***/ }),

/***/ "./src/common/env.ts":
/*!***************************!*\
  !*** ./src/common/env.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REMOTE_SCRIPTS = exports.LOCAL_SCRIPTS = void 0;
exports.LOCAL_SCRIPTS = 'http://127.0.0.1:8118/';
exports.REMOTE_SCRIPTS = 'https://raw.githubusercontent.com/Oskar-g/sath_extension/main/dist/src/';


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
/*!*********************!*\
  !*** ./src/base.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const documentLib_1 = __webpack_require__(/*! ./common/documentLib */ "./src/common/documentLib.ts");
const env_1 = __webpack_require__(/*! ./common/env */ "./src/common/env.ts");
(function () {
    'use strict';
    /*
     * -----------------------------------------------
     * extension CONFIG
     * -----------------------------------------------
     */
    const DEBUG = false;
    const e = '';
    const DOMAIN_CONF = {
        'orteil.dashnet.org/cookieclicker/*': {
            'script': 'cookieclicker.js',
        },
        'cw/*': {
            'script': 'cw.js',
        },
        'forocoches.com/*': {
            'script': 'forocoches.js',
        },
        'idealista.com/*': {
            'script': 'idealista.js',
            'style': 'idealista.css',
        },
        'lectortmo.com/*': {
            'script': 'lectortmo.js',
        },
        'video\\d+.woopeedoopcmwhrs.xyz/*': {
            'script': 'woopeedoopcmwhrs.js',
        },
    };
    /*
    * -----------------------------------------------
    * extension LOGIC
    * -----------------------------------------------
    */
    const getResourcesConfig = function () {
        const BASE_PATH = DEBUG ? env_1.LOCAL_SCRIPTS : env_1.REMOTE_SCRIPTS;
        const conf = Object.keys(DOMAIN_CONF)
            .filter(domain => new RegExp(`http(s)?://(www.)?${domain}`).test(window.location.href))
            .map(domain => DOMAIN_CONF[domain])
            .map(conf => ({
            "script": conf.script ? `${BASE_PATH}${conf.script}` : null,
            "style": conf.style ? `${BASE_PATH}${conf.style}` : null
        }))[0] || null;
        return conf;
    };
    const loadLocal = function (conf) {
        var _a, _b;
        if (conf === null || conf === void 0 ? void 0 : conf.script) {
            const scriptBlock = document.createElement('script');
            scriptBlock.setAttribute("type", "text/javascript");
            scriptBlock.setAttribute("src", conf === null || conf === void 0 ? void 0 : conf.script);
            (_a = (0, documentLib_1.querySelector)("head")) === null || _a === void 0 ? void 0 : _a.appendChild(scriptBlock);
        }
        if (conf === null || conf === void 0 ? void 0 : conf.style) {
            const cssBlock = document.createElement('link');
            cssBlock.setAttribute("type", "text/css");
            cssBlock.setAttribute("rel", "stylesheet");
            cssBlock.setAttribute("href", conf === null || conf === void 0 ? void 0 : conf.style);
            (_b = (0, documentLib_1.querySelector)("head")) === null || _b === void 0 ? void 0 : _b.appendChild(cssBlock);
        }
    };
    const loadRemote = function (conf) {
        if (conf === null || conf === void 0 ? void 0 : conf.script) {
            fetch(conf === null || conf === void 0 ? void 0 : conf.script)
                .then(e => e.text())
                .then(e => {
                var _a;
                const scriptBlock = document.createElement('script');
                scriptBlock.setAttribute("type", "text/javascript");
                scriptBlock.innerHTML = e;
                (_a = (0, documentLib_1.querySelector)("head")) === null || _a === void 0 ? void 0 : _a.appendChild(scriptBlock);
            });
        }
        if (conf === null || conf === void 0 ? void 0 : conf.style) {
            fetch(conf === null || conf === void 0 ? void 0 : conf.style)
                .then(e => e.text())
                .then(e => {
                var _a;
                const style = document.createElement('style');
                style.innerHTML = e;
                (_a = (0, documentLib_1.querySelector)("head")) === null || _a === void 0 ? void 0 : _a.appendChild(style);
            });
        }
    };
    const action = DEBUG ? loadLocal : loadRemote;
    action(getResourcesConfig());
    console.log(action);
    console.log(getResourcesConfig());
})();

})();

/******/ })()
;