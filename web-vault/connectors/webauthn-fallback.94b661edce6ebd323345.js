/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../libs/common/src/platform/services/translation.service.ts":
/*!**********************************************************************!*\
  !*** ../../libs/common/src/platform/services/translation.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationService: () => (/* binding */ TranslationService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TranslationService {
    constructor(systemLanguage, localesDirectory, getLocalesJson) {
        this.systemLanguage = systemLanguage;
        this.localesDirectory = localesDirectory;
        this.getLocalesJson = getLocalesJson;
        // First locale is the default (English)
        this.supportedTranslationLocales = ["en"];
        this.defaultLocale = "en";
        this.localeNames = new Map([
            ["af", "Afrikaans"],
            ["ar", "العربية الفصحى"],
            ["az", "Azərbaycanca"],
            ["be", "Беларуская"],
            ["bg", "български"],
            ["bn", "বাংলা"],
            ["bs", "bosanski jezik"],
            ["ca", "català"],
            ["cs", "čeština"],
            ["cy", "Cymraeg, y Gymraeg"],
            ["da", "dansk"],
            ["de", "Deutsch"],
            ["el", "Ελληνικά"],
            ["en", "English"],
            ["en-GB", "English (British)"],
            ["en-IN", "English (India)"],
            ["eo", "Esperanto"],
            ["es", "español"],
            ["et", "eesti"],
            ["eu", "euskara"],
            ["fa", "فارسی"],
            ["fi", "suomi"],
            ["fil", "Wikang Filipino"],
            ["fr", "français"],
            ["gl", "galego"],
            ["he", "עברית"],
            ["hi", "हिन्दी"],
            ["hr", "hrvatski"],
            ["hu", "magyar"],
            ["id", "Bahasa Indonesia"],
            ["it", "italiano"],
            ["ja", "日本語"],
            ["ka", "ქართული"],
            ["km", "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ"],
            ["kn", "ಕನ್ನಡ"],
            ["ko", "한국어"],
            ["lt", "lietuvių kalba"],
            ["lv", "Latvietis"],
            ["me", "црногорски"],
            ["ml", "മലയാളം"],
            ["mr", "मराठी"],
            ["my", "ဗမာစကား"],
            ["nb", "norsk (bokmål)"],
            ["ne", "नेपाली"],
            ["nl", "Nederlands"],
            ["nn", "Norsk Nynorsk"],
            ["or", "ଓଡ଼ିଆ"],
            ["pl", "polski"],
            ["pt-BR", "português do Brasil"],
            ["pt-PT", "português"],
            ["ro", "română"],
            ["ru", "русский"],
            ["si", "සිංහල"],
            ["sk", "slovenčina"],
            ["sl", "Slovenski jezik, Slovenščina"],
            ["sr", "Српски"],
            ["sv", "svenska"],
            ["ta", "தமிழ்"],
            ["te", "తెలుగు"],
            ["th", "ไทย"],
            ["tr", "Türkçe"],
            ["uk", "українська"],
            ["vi", "Tiếng Việt"],
            ["zh-CN", "中文（中国大陆）"],
            ["zh-TW", "中文（台灣）"],
        ]);
        this.defaultMessages = {};
        this.localeMessages = {};
        this.systemLanguage = systemLanguage.replace("_", "-");
    }
    init(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.inited) {
                throw new Error("i18n already initialized.");
            }
            if (this.supportedTranslationLocales == null || this.supportedTranslationLocales.length === 0) {
                throw new Error("supportedTranslationLocales not set.");
            }
            this.inited = true;
            this.translationLocale = locale != null ? locale : this.systemLanguage;
            try {
                this.collator = new Intl.Collator(this.translationLocale, {
                    numeric: true,
                    sensitivity: "base",
                });
            }
            catch (_a) {
                this.collator = null;
            }
            if (this.supportedTranslationLocales.indexOf(this.translationLocale) === -1) {
                this.translationLocale = this.translationLocale.slice(0, 2);
                if (this.supportedTranslationLocales.indexOf(this.translationLocale) === -1) {
                    this.translationLocale = this.defaultLocale;
                }
            }
            if (this.localesDirectory != null) {
                yield this.loadMessages(this.translationLocale, this.localeMessages);
                if (this.translationLocale !== this.defaultLocale) {
                    yield this.loadMessages(this.defaultLocale, this.defaultMessages);
                }
            }
        });
    }
    t(id, p1, p2, p3) {
        return this.translate(id, p1, p2, p3);
    }
    translate(id, p1, p2, p3) {
        let result;
        // eslint-disable-next-line
        if (this.localeMessages.hasOwnProperty(id) && this.localeMessages[id]) {
            result = this.localeMessages[id];
            // eslint-disable-next-line
        }
        else if (this.defaultMessages.hasOwnProperty(id) && this.defaultMessages[id]) {
            result = this.defaultMessages[id];
        }
        else {
            result = "";
        }
        if (result !== "") {
            if (p1 != null) {
                result = result.split("__$1__").join(p1.toString());
            }
            if (p2 != null) {
                result = result.split("__$2__").join(p2.toString());
            }
            if (p3 != null) {
                result = result.split("__$3__").join(p3.toString());
            }
        }
        return result;
    }
    loadMessages(locale, messagesObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedLocale = locale.replace("-", "_");
            const locales = yield this.getLocalesJson(formattedLocale);
            for (const prop in locales) {
                // eslint-disable-next-line
                if (!locales.hasOwnProperty(prop)) {
                    continue;
                }
                messagesObj[prop] = locales[prop].message;
                if (locales[prop].placeholders) {
                    for (const placeProp in locales[prop].placeholders) {
                        if (!locales[prop].placeholders.hasOwnProperty(placeProp) || // eslint-disable-line
                            !locales[prop].placeholders[placeProp].content) {
                            continue;
                        }
                        const replaceToken = "\\$" + placeProp.toUpperCase() + "\\$";
                        let replaceContent = locales[prop].placeholders[placeProp].content;
                        if (replaceContent === "$1" || replaceContent === "$2" || replaceContent === "$3") {
                            replaceContent = "__$" + replaceContent + "__";
                        }
                        messagesObj[prop] = messagesObj[prop].replace(new RegExp(replaceToken, "g"), replaceContent);
                    }
                }
            }
        });
    }
}


/***/ }),

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


/***/ }),

/***/ "./src/connectors/translation.service.ts":
/*!***********************************************!*\
  !*** ./src/connectors/translation.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationService: () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_services_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/services/translation.service */ "../../libs/common/src/platform/services/translation.service.ts");
/* harmony import */ var _translation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translation-constants */ "./src/translation-constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class TranslationService extends _bitwarden_common_platform_services_translation_service__WEBPACK_IMPORTED_MODULE_0__.TranslationService {
    constructor(systemLanguage, localesDirectory) {
        super(systemLanguage || "en-US", localesDirectory, (formattedLocale) => __awaiter(this, void 0, void 0, function* () {
            const filePath = this.localesDirectory +
                "/" +
                formattedLocale +
                "/messages.json?cache=" +
                "qque1r";
            const localesResult = yield fetch(filePath);
            const locales = yield localesResult.json();
            return locales;
        }));
        this.supportedTranslationLocales = _translation_constants__WEBPACK_IMPORTED_MODULE_1__.SupportedTranslationLocales;
    }
    get translationLocale() {
        return this._translationLocale;
    }
    set translationLocale(locale) {
        this._translationLocale = locale;
    }
}


/***/ }),

/***/ "./src/translation-constants.ts":
/*!**************************************!*\
  !*** ./src/translation-constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportedTranslationLocales: () => (/* binding */ SupportedTranslationLocales)
/* harmony export */ });
// Please leave 'en' where it is, as it's our fallback language in case no translation can be found
const SupportedTranslationLocales = [
    "en",
    "af",
    "ar",
    "az",
    "be",
    "bg",
    "bn",
    "bs",
    "ca",
    "cs",
    "cy",
    "da",
    "de",
    "el",
    "en-GB",
    "en-IN",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "fi",
    "fil",
    "fr",
    "gl",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "ka",
    "km",
    "kn",
    "ko",
    "lv",
    "ml",
    "mr",
    "my",
    "nb",
    "ne",
    "nl",
    "nn",
    "or",
    "pl",
    "pt-PT",
    "pt-BR",
    "ro",
    "ru",
    "si",
    "sk",
    "sl",
    "sr",
    "sv",
    "ta",
    "te",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-TW",
];


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
/*!*********************************************!*\
  !*** ./src/connectors/webauthn-fallback.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/connectors/common.ts");
/* harmony import */ var _common_webauthn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-webauthn */ "./src/connectors/common-webauthn.ts");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.service */ "./src/connectors/translation.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore



let parsed = false;
let webauthnJson;
let parentUrl = null;
let sentSuccess = false;
let locale = null;
let localeService = null;
function parseParameters() {
    var _a;
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
    }
    locale = (_a = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("locale")) !== null && _a !== void 0 ? _a : "en";
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
    webauthnJson = dataObj.data;
}
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    parseParameters();
    try {
        localeService = new _translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService(locale, "locales");
    }
    catch (_a) {
        error("Failed to load the provided locale " + locale);
        localeService = new _translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService("en", "locales");
    }
    yield localeService.init();
    document.getElementById("remember-label").innerText = localeService.t("dontAskAgainOnThisDeviceFor30Days");
    const button = document.getElementById("webauthn-button");
    button.innerText = localeService.t("readSecurityKey");
    button.onclick = start;
    const titleForSmallerScreens = document.getElementById("title-smaller-screens");
    const titleForLargerScreens = document.getElementById("title-larger-screens");
    titleForSmallerScreens.innerText = localeService.t("verifyYourIdentity");
    titleForLargerScreens.innerText = localeService.t("verifyYourIdentity");
    const subtitle = document.getElementById("subtitle");
    subtitle.innerText = localeService.t("followTheStepsBelowToFinishLoggingInWithSecurityKey");
}));
function start() {
    if (sentSuccess) {
        return;
    }
    if (!("credentials" in navigator)) {
        error(localeService.t("webAuthnNotSupported"));
        return;
    }
    parseParameters();
    if (!webauthnJson) {
        error("No data.");
        return;
    }
    let json;
    try {
        json = (0,_common_webauthn__WEBPACK_IMPORTED_MODULE_1__.parseWebauthnJson)(webauthnJson);
        // FIXME: Remove when updating file. Eslint update
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (e) {
        error("Cannot parse data.");
        return;
    }
    // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    initWebAuthn(json);
}
function initWebAuthn(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const assertedCredential = (yield navigator.credentials.get({
                publicKey: obj,
            }));
            if (sentSuccess) {
                return;
            }
            const dataString = (0,_common_webauthn__WEBPACK_IMPORTED_MODULE_1__.buildDataString)(assertedCredential);
            const remember = document.getElementById("remember").checked;
            window.postMessage({ command: "webAuthnResult", data: dataString, remember: remember }, "*");
            sentSuccess = true;
            success(localeService.t("webAuthnSuccess"));
        }
        catch (err) {
            error(err);
        }
    });
}
function error(message) {
    const el = document.getElementById("msg");
    resetMsgBox(el);
    el.textContent = message;
    el.classList.add("alert");
    el.classList.add("alert-danger");
    el.classList.remove("tw-hidden");
}
function success(message) {
    document.getElementById("webauthn-button").disabled = true;
    document.getElementById("remember").disabled = true;
    const el = document.getElementById("msg");
    resetMsgBox(el);
    el.textContent = message;
    el.classList.add("alert");
    el.classList.add("alert-success");
    el.classList.remove("tw-hidden");
}
function resetMsgBox(el) {
    el.classList.remove("alert");
    el.classList.remove("alert-danger");
    el.classList.remove("alert-success");
    el.classList.add("tw-hidden");
}

})();

/******/ })()
;
//# sourceMappingURL=webauthn-fallback.94b661edce6ebd323345.js.map