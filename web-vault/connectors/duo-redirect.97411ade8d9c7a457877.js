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
/*!****************************************!*\
  !*** ./src/connectors/duo-redirect.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirectToDuoFrameless: () => (/* binding */ redirectToDuoFrameless)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/connectors/common.ts");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation.service */ "./src/connectors/translation.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const mobileDesktopCallback = "bitwarden://duo-callback";
let localeService = null;
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    const redirectUrl = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("duoFramelessUrl");
    if (redirectUrl) {
        redirectToDuoFrameless(redirectUrl);
        return;
    }
    const client = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("client");
    const code = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("code");
    const state = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getQsParam)("state");
    if (!client) {
        throw new Error("client is null");
    }
    if (!code) {
        throw new Error("code is null");
    }
    if (!state) {
        throw new Error("state is null");
    }
    localeService = new _translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService(navigator.language, "locales");
    yield localeService.init();
    if (client === "web") {
        const channel = new BroadcastChannel("duoResult");
        channel.postMessage({ code: code, state: state });
        channel.close();
        displayHandoffMessage(client);
    }
    else if (client === "browser") {
        window.postMessage({ command: "duoResult", code, state }, window.location.origin);
        displayHandoffMessage(client);
    }
    else if (client === "mobile" || client === "desktop") {
        if (client === "desktop") {
            displayHandoffMessage(client);
        }
        document.location.replace(mobileDesktopCallback +
            "?code=" +
            encodeURIComponent(code) +
            "&state=" +
            encodeURIComponent(state));
    }
}));
/**
 * validate the Duo AuthUrl and redirect to it.
 * @param redirectUrl the duo auth url
 */
function redirectToDuoFrameless(redirectUrl) {
    // Validation for Duo redirect URL to prevent open redirect or XSS vulnerabilities
    // Only used for Duo 2FA redirects in the extension
    /**
     * This regex checks for the following:
     * The hostname must start with a subdomain that begins with "api-" followed by a
     * string that can contain letters or numbers of indeterminate length
     * Followed by either "duosecurity.com" or "duofederal.com"
     * This ensures that the redirect does not contain any malicious content
     * and is a valid Duo URL.
     * */
    const duoRedirectUrlRegex = /^api-[a-zA-Z0-9]+\.(duosecurity|duofederal)\.com$/;
    const validateUrl = new URL(redirectUrl);
    // Check that no embedded credentials are present
    if (validateUrl.username || validateUrl.password) {
        throw new Error("Invalid redirect URL: embedded credentials not allowed");
    }
    // Check that the protocol is HTTPS
    if (validateUrl.protocol !== "https:") {
        throw new Error("Invalid redirect URL: invalid protocol");
    }
    // Check that the port is not specified
    if (validateUrl.port && validateUrl.port !== "443") {
        throw new Error("Invalid redirect URL: port not allowed");
    }
    if (validateUrl.pathname !== "/oauth/v1/authorize") {
        throw new Error("Invalid redirect URL: invalid pathname");
    }
    // Check if the redirect hostname matches the regex
    // Only check the hostname part of the URL to avoid over-zealous Regex expressions from matching
    // and causing an Open Redirect vulnerability. Always use hostname instead of host, because host includes port if specified.
    if (!duoRedirectUrlRegex.test(validateUrl.hostname)) {
        throw new Error("Invalid redirect URL");
    }
    window.location.href = redirectUrl;
}
/**
 * Note: browsers won't let javascript close a tab (button or otherwise) that wasn't opened by javascript,
 * so browser, desktop, and mobile are not able to take advantage of the countdown timer or close button.
 */
function displayHandoffMessage(client) {
    var _a;
    const content = document.getElementById("content");
    if (!content) {
        throw new Error("content element not found");
    }
    content.className = "tw-text-center";
    content.innerHTML = "";
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    if (!localeService) {
        throw new Error("localeService is not initialized");
    }
    h1.textContent = localeService.t("youSuccessfullyLoggedIn");
    p.textContent =
        client == "web"
            ? localeService.t("thisWindowWillCloseIn5Seconds")
            : localeService.t("youMayCloseThisWindow");
    h1.className = "tw-font-semibold";
    p.className = "tw-mb-4";
    content.appendChild(h1);
    content.appendChild(p);
    // Web client will have a close button as well as an auto close timer
    if (client == "web") {
        const button = document.createElement("button");
        button.textContent = localeService.t("close");
        button.className =
            "tw-bg-primary-600 hover:tw-bg-primary-700 tw-text-contrast tw-px-4 tw-py-2 tw-rounded-md tw-transition tw-border-transparent tw-text-center focus:tw-outline-none";
        button.addEventListener("click", () => {
            window.close();
        });
        content.appendChild(button);
        if (p.textContent === null) {
            throw new Error("count down container is null");
        }
        const counterString = ((_a = p.textContent.match(/\d+/)) === null || _a === void 0 ? void 0 : _a[0]) || null;
        if (!counterString) {
            throw new Error("count down time cannot be null");
        }
        let num = Number(counterString);
        const interval = setInterval(() => {
            if (num > 1) {
                if (p.textContent === null) {
                    throw new Error("count down container is null");
                }
                p.textContent = p.textContent.replace(String(num), String(num - 1));
                num--;
            }
            else {
                clearInterval(interval);
                window.close();
            }
        }, 1000);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=duo-redirect.97411ade8d9c7a457877.js.map