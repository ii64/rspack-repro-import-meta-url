"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Target_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Target: () => (/* binding */ Target),
/* harmony export */   TargetType: () => (/* binding */ TargetType)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
var TargetType;
(function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
class Target {
    /**
     * @internal
     */
    constructor() { }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
        return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
        return null;
    }
}
//# sourceMappingURL=Target.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Target.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserTarget: () => (/* binding */ BidiBrowserTarget),
/* harmony export */   BidiFrameTarget: () => (/* binding */ BidiFrameTarget),
/* harmony export */   BidiPageTarget: () => (/* binding */ BidiPageTarget),
/* harmony export */   BidiWorkerTarget: () => (/* binding */ BidiWorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class BidiBrowserTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #browser;
    constructor(browser) {
        super();
        this.#browser = browser;
    }
    asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return '';
    }
    createCDPSession() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BROWSER;
    }
    browser() {
        return this.#browser;
    }
    browserContext() {
        return this.#browser.defaultBrowserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiPageTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async page() {
        return this.#page;
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#page.mainFrame().browsingContext);
    }
    url() {
        return this.#page.url();
    }
    createCDPSession() {
        return this.#page.createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#page.browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiFrameTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #frame;
    #page;
    constructor(frame) {
        super();
        this.#frame = frame;
    }
    async page() {
        if (this.#page === undefined) {
            this.#page = _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#frame.browsingContext);
        }
        return this.#page;
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), this.#frame.browsingContext);
    }
    url() {
        return this.#frame.url();
    }
    createCDPSession() {
        return this.#frame.createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
/**
 * @internal
 */
class BidiWorkerTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #worker;
    constructor(worker) {
        super();
        this.#worker = worker;
    }
    async page() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    async asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return this.#worker.url();
    }
    createCDPSession() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.OTHER;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#worker.frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
//# sourceMappingURL=Target.js.map

/***/ })

}]);