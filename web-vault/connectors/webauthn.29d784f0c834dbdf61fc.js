/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/connectors/common-webauthn.ts":
/*!*******************************************!*\
  !*** ./src/connectors/common-webauthn.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDataString: () => (/* binding */ buildDataString),
/* harmony export */   parseWebauthnJson: () => (/* binding */ parseWebauthnJson)
/* harmony export */ });
function buildDataString(assertedCredential) {
    const response = assertedCredential.response;
    const authData = new Uint8Array(response.authenticatorData);
    const clientDataJSON = new Uint8Array(response.clientDataJSON);
    const rawId = new Uint8Array(assertedCredential.rawId);
    const sig = new Uint8Array(response.signature);
    const data = {
        id: assertedCredential.id,
        rawId: coerceToBase64Url(rawId),
        type: assertedCredential.type,
        extensions: assertedCredential.getClientExtensionResults(),
        response: {
            authenticatorData: coerceToBase64Url(authData),
            clientDataJson: coerceToBase64Url(clientDataJSON),
            signature: coerceToBase64Url(sig),
        },
    };
    return JSON.stringify(data);
}
function parseWebauthnJson(jsonString) {
    const json = JSON.parse(jsonString);
    const challenge = json.challenge.replace(/-/g, "+").replace(/_/g, "/");
    json.challenge = Uint8Array.from(atob(challenge), (c) => c.charCodeAt(0));
    json.allowCredentials.forEach((listItem) => {
        // eslint-disable-next-line
        const fixedId = listItem.id.replace(/\_/g, "/").replace(/\-/g, "+");
        listItem.id = Uint8Array.from(atob(fixedId), (c) => c.charCodeAt(0));
    });
    return json;
}
// From https://github.com/abergs/fido2-net-lib/blob/b487a1d47373ea18cd752b4988f7262035b7b54e/Demo/wwwroot/js/helpers.js#L34
// License: https://github.com/abergs/fido2-net-lib/blob/master/LICENSE.txt
function coerceToBase64Url(thing) {
    // Array or ArrayBuffer to Uint8Array
    if (Array.isArray(thing)) {
        thing = Uint8Array.from(thing);
    }
    if (thing instanceof ArrayBuffer) {
        thing = new Uint8Array(thing);
    }
    // Uint8Array to base64
    if (thing instanceof Uint8Array) {
        let str = "";
        const len = thing.byteLength;
        for (let i = 0; i < len; i++) {
            str += String.fromCharCode(thing[i]);
        }
        thing = window.btoa(str);
    }
    if (typeof thing !== "string") {
        throw new Error("could not coerce to string");
    }
    // base64 to base64url
    // NOTE: "=" at the end of challenge is optional, strip it off here
    thing = thing.replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/g, "");
    return thing;
}


/***/ }),

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
/*!************************************!*\
  !*** ./src/connectors/webauthn.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/connectors/common.ts");
/* harmony import */ var _common_webauthn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-webauthn */ "./src/connectors/common-webauthn.ts");
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


const mobileCallbackUri = "bitwarden://webauthn-callback";
let parsed = false;
let webauthnJson;
let headerText = null;
let btnText = null;
let btnAwaitingInteractionText = null;
let btnReturnText = null;
let parentUrl = null;
let parentOrigin = null;
let mobileResponse = false;
let stopWebAuthn = false;
let sentSuccess = false;
let obj = null;
// For accessibility, we do not actually disable the button as it would
// become unfocusable by a screenreader. We just make it look disabled.
const disabledBtnClasses = [
    "tw-bg-secondary-300",
    "tw-border-secondary-300",
    "!tw-text-muted",
    "!tw-cursor-not-allowed",
    "hover:tw-bg-secondary-300",
    "hover:tw-border-secondary-300",
    "hover:!tw-text-muted",
    "hover:tw-no-underline",
];
const enabledBtnClasses = [
    "tw-bg-primary-600",
    "tw-border-primary-600",
    "!tw-text-contrast",
    "hover:tw-bg-primary-700",
    "hover:tw-border-primary-700",
    "hover:!tw-text-contrast",
    "hover:tw-no-underline",
];
document.addEventListener("DOMContentLoaded", () => {
    init();
});
function setDefaultWebAuthnButtonState() {
    if (!btnText) {
        return;
    }
    const button = document.getElementById("webauthn-button");
    button.onclick = executeWebAuthn;
    button.innerText = decodeURI(btnText);
    // reset back to default button state
    button.classList.remove(...disabledBtnClasses);
    button.classList.add(...enabledBtnClasses);
}
function setAwaitingInteractionWebAuthnButtonState() {
    if (!btnAwaitingInteractionText) {
        return;
    }
    const button = document.getElementById("webauthn-button");
    button.innerText = decodeURI(btnAwaitingInteractionText);
    button.onclick = null;
    button.classList.remove(...enabledBtnClasses);
    button.classList.add(...disabledBtnClasses);
}
function init() {
    start();
    onMessage();
    info("ready");
}
function parseParameters() {
    if (parsed) {
        return;
    }
    parentUrl = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("parent");
    if (!parentUrl) {
        error("No parent.");
        return;
    }
    else {
        parentUrl = decodeURIComponent(parentUrl);
        parentOrigin = new URL(parentUrl).origin;
    }
    const version = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("v");
    if (version === "1") {
        parseParametersV1();
    }
    else {
        parseParametersV2();
    }
    parsed = true;
}
function parseParametersV1() {
    const data = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("data");
    if (!data) {
        error("No data.");
        return;
    }
    webauthnJson = (0,_common__WEBPACK_IMPORTED_MODULE_0__.b64Decode)(data);
    headerText = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("headerText");
    btnText = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("btnText");
    btnAwaitingInteractionText = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("btnAwaitingInteractionText");
    btnReturnText = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("btnReturnText");
}
function parseParametersV2() {
    let dataObj = null;
    try {
        dataObj = JSON.parse((0,_common__WEBPACK_IMPORTED_MODULE_0__.b64Decode)((0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("data")));
        // FIXME: Remove when updating file. Eslint update
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        error("Cannot parse data.");
        return;
    }
    mobileResponse = dataObj.callbackUri != null || dataObj.mobile === true;
    webauthnJson = dataObj.data;
    headerText = dataObj.headerText;
    btnText = dataObj.btnText;
    btnReturnText = dataObj.btnReturnText;
}
function start() {
    sentSuccess = false;
    if (!("credentials" in navigator)) {
        error("WebAuthn is not supported in this browser.");
        return;
    }
    parseParameters();
    if (headerText) {
        const header = document.getElementById("webauthn-header");
        header.innerText = decodeURI(headerText);
    }
    setDefaultWebAuthnButtonState();
    if (!webauthnJson) {
        error("No data.");
        return;
    }
    try {
        obj = (0,_common_webauthn__WEBPACK_IMPORTED_MODULE_1__.parseWebauthnJson)(webauthnJson);
        // FIXME: Remove when updating file. Eslint update
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        error("Cannot parse webauthn data.");
        return;
    }
    stopWebAuthn = false;
    if (mobileResponse ||
        (navigator.userAgent.indexOf(" Safari/") !== -1 && navigator.userAgent.indexOf("Chrome") === -1)) {
        // Safari and mobile chrome blocks non-user initiated WebAuthn requests.
    }
    else {
        executeWebAuthn();
    }
}
function executeWebAuthn() {
    if (stopWebAuthn) {
        // reset back to default button state
        setDefaultWebAuthnButtonState();
        return;
    }
    setAwaitingInteractionWebAuthnButtonState();
    navigator.credentials.get({ publicKey: obj }).then(success).catch(error);
}
function onMessage() {
    window.addEventListener("message", (event) => {
        if (!event.origin || event.origin === "" || event.origin !== parentOrigin) {
            return;
        }
        if (event.data === "stop") {
            setDefaultWebAuthnButtonState();
            stopWebAuthn = true;
        }
        else if (event.data === "start" && stopWebAuthn) {
            start();
        }
    }, false);
}
function error(message) {
    if (mobileResponse) {
        document.location.replace(mobileCallbackUri + "?error=" + encodeURIComponent(message));
        returnButton(mobileCallbackUri + "?error=" + encodeURIComponent(message));
    }
    else {
        parent.postMessage("error|" + message, parentUrl);
        setDefaultWebAuthnButtonState();
    }
}
function success(assertedCredential) {
    if (sentSuccess) {
        return;
    }
    const dataString = (0,_common_webauthn__WEBPACK_IMPORTED_MODULE_1__.buildDataString)(assertedCredential);
    if (mobileResponse) {
        document.location.replace(mobileCallbackUri + "?data=" + encodeURIComponent(dataString));
        returnButton(mobileCallbackUri + "?data=" + encodeURIComponent(dataString));
    }
    else {
        parent.postMessage("success|" + dataString, parentUrl);
        sentSuccess = true;
    }
}
function info(message) {
    if (mobileResponse) {
        return;
    }
    parent.postMessage("info|" + message, parentUrl);
}
function returnButton(uri) {
    // provides 'return' button in case scripted navigation is blocked
    const button = document.getElementById("webauthn-button");
    button.innerText = decodeURI(btnReturnText);
    button.onclick = () => {
        document.location.replace(uri);
    };
}

})();

/******/ })()
;
//# sourceMappingURL=webauthn.29d784f0c834dbdf61fc.js.map