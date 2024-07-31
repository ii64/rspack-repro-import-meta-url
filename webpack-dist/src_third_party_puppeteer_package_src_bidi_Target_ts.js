"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Target_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Target.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Target.ts ***!
  \*************************************************************/
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/Target.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Target.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiBrowserTarget: () => (/* binding */ BidiBrowserTarget),
/* harmony export */   BidiFrameTarget: () => (/* binding */ BidiFrameTarget),
/* harmony export */   BidiPageTarget: () => (/* binding */ BidiPageTarget),
/* harmony export */   BidiWorkerTarget: () => (/* binding */ BidiWorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/src/api/Target.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/src/bidi/Page.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BidiBrowserTarget_browser, _BidiPageTarget_page, _BidiFrameTarget_frame, _BidiFrameTarget_page, _BidiWorkerTarget_worker;



/**
 * @internal
 */
class BidiBrowserTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(browser) {
        super();
        _BidiBrowserTarget_browser.set(this, void 0);
        __classPrivateFieldSet(this, _BidiBrowserTarget_browser, browser, "f");
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
        return __classPrivateFieldGet(this, _BidiBrowserTarget_browser, "f");
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiBrowserTarget_browser, "f").defaultBrowserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiBrowserTarget_browser = new WeakMap();
/**
 * @internal
 */
class BidiPageTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(page) {
        super();
        _BidiPageTarget_page.set(this, void 0);
        __classPrivateFieldSet(this, _BidiPageTarget_page, page, "f");
    }
    async page() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f");
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiPageTarget_page, "f").mainFrame().browsingContext);
    }
    url() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").url();
    }
    createCDPSession() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiPageTarget_page, "f").browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiPageTarget_page = new WeakMap();
/**
 * @internal
 */
class BidiFrameTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(frame) {
        super();
        _BidiFrameTarget_frame.set(this, void 0);
        _BidiFrameTarget_page.set(this, void 0);
        __classPrivateFieldSet(this, _BidiFrameTarget_frame, frame, "f");
    }
    async page() {
        if (__classPrivateFieldGet(this, _BidiFrameTarget_page, "f") === undefined) {
            __classPrivateFieldSet(this, _BidiFrameTarget_page, _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").browsingContext), "f");
        }
        return __classPrivateFieldGet(this, _BidiFrameTarget_page, "f");
    }
    async asPage() {
        return _Page_js__WEBPACK_IMPORTED_MODULE_2__.BidiPage.from(this.browserContext(), __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").browsingContext);
    }
    url() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").url();
    }
    createCDPSession() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").createCDPSession();
    }
    type() {
        return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _BidiFrameTarget_frame, "f").page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiFrameTarget_frame = new WeakMap(), _BidiFrameTarget_page = new WeakMap();
/**
 * @internal
 */
class BidiWorkerTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    constructor(worker) {
        super();
        _BidiWorkerTarget_worker.set(this, void 0);
        __classPrivateFieldSet(this, _BidiWorkerTarget_worker, worker, "f");
    }
    async page() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    async asPage() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
    url() {
        return __classPrivateFieldGet(this, _BidiWorkerTarget_worker, "f").url();
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
        return __classPrivateFieldGet(this, _BidiWorkerTarget_worker, "f").frame.page().browserContext();
    }
    opener() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiWorkerTarget_worker = new WeakMap();


/***/ })

}]);