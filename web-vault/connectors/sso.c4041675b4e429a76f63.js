/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/connectors/common.ts":
/*!**********************************!*\
  !*** ./src/connectors/common.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b64Decode: () => (/* binding */ b64Decode),
/* harmony export */   getQsParam: () => (/* binding */ getQsParam)
/* harmony export */ });
function getQsParam(name) {
    const url = window.location.href;
    // eslint-disable-next-line
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function b64Decode(str, spaceAsPlus = false) {
    if (spaceAsPlus) {
        str = str.replace(/ /g, "+");
    }
    return decodeURIComponent(Array.prototype.map
        .call(atob(str), (c) => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(""));
}


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/connectors/sso.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initiateBrowserSso: () => (/* binding */ initiateBrowserSso),
/* harmony export */   initiateWebAppSso: () => (/* binding */ initiateWebAppSso)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/connectors/common.ts");
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore

window.addEventListener("load", () => {
    const code = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("code");
    const state = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("state");
    const lastpass = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("lp");
    if (lastpass === "1") {
        initiateBrowserSso(code, state, true);
    }
    else if (state != null && state.includes(":clientId=browser")) {
        initiateBrowserSso(code, state, false);
    }
    else {
        initiateWebAppSso(code, state);
    }
});
function initiateWebAppSso(code, state) {
    const baseUrl = window.location.href.replace(/\/sso-connector.html.*$/, "");
    // If we've initiated SSO from somewhere other than the SSO component on the web app, the SSO component will add
    // a _returnUri to the state variable. Here we're extracting that URI and sending the user there instead of to the SSO component.
    const returnUri = extractFromRegex(state, "(?<=_returnUri=')(.*)(?=')");
    if (returnUri) {
        window.location.href = baseUrl + `/#${returnUri}`;
    }
    else {
        window.location.href = baseUrl + "/#/sso?code=" + code + "&state=" + state;
    }
}
function initiateBrowserSso(code, state, lastpass) {
    window.postMessage({ command: "authResult", code, state, lastpass }, window.location.origin);
    const handOffMessage = ("; " + document.cookie)
        .split("; ssoHandOffMessage=")
        .pop()
        .split(";")
        .shift();
    document.cookie = "ssoHandOffMessage=;SameSite=strict;max-age=0";
    const content = document.getElementById("content");
    content.innerHTML = "";
    const p = document.createElement("p");
    p.innerText = handOffMessage;
    content.appendChild(p);
}
function extractFromRegex(s, regexString) {
    const regex = new RegExp(regexString);
    const results = regex.exec(s);
    if (!results) {
        return null;
    }
    return results[0];
}

})();

/******/ })()
;
//# sourceMappingURL=sso.c4041675b4e429a76f63.js.map