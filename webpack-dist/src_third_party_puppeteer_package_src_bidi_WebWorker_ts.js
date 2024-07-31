"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_WebWorker_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/WebWorker.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/WebWorker.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebWorker: () => (/* binding */ WebWorker)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/**
 * @license
 * Copyright 2018 Google Inc.
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
var _WebWorker_url;




/**
 * This class represents a
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API | WebWorker}.
 *
 * @remarks
 * The events `workercreated` and `workerdestroyed` are emitted on the page
 * object to signal the worker lifecycle.
 *
 * @example
 *
 * ```ts
 * page.on('workercreated', worker =>
 *   console.log('Worker created: ' + worker.url())
 * );
 * page.on('workerdestroyed', worker =>
 *   console.log('Worker destroyed: ' + worker.url())
 * );
 *
 * console.log('Current workers:');
 * for (const worker of page.workers()) {
 *   console.log('  ' + worker.url());
 * }
 * ```
 *
 * @public
 */
class WebWorker extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    /**
     * @internal
     */
    constructor(url) {
        super();
        /**
         * @internal
         */
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_2__.TimeoutSettings()
        });
        _WebWorker_url.set(this, void 0);
        __classPrivateFieldSet(this, _WebWorker_url, url, "f");
    }
    /**
     * The URL of this web worker.
     */
    url() {
        return __classPrivateFieldGet(this, _WebWorker_url, "f");
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * As a rule of thumb, if the return value of the given function is more
     * complicated than a JSON object (e.g. most classes), then
     * {@link WebWorker.evaluate | evaluate} will _likely_ return some truncated
     * value (or `{}`). This is because we are not returning the actual return
     * value, but a deserialized version as a result of transferring the return
     * value through a protocol to Puppeteer.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns The result of `func`.
     */
    async evaluate(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluate.name, func);
        return await this.mainRealm().evaluate(func, ...args);
    }
    /**
     * Evaluates a given function in the {@link WebWorker | worker}.
     *
     * @remarks If the given function returns a promise,
     * {@link WebWorker.evaluate | evaluate} will wait for the promise to resolve.
     *
     * In general, you should use
     * {@link WebWorker.evaluateHandle | evaluateHandle} if
     * {@link WebWorker.evaluate | evaluate} cannot serialize the return value
     * properly or you need a mutable {@link JSHandle | handle} to the return
     * object.
     *
     * @param func - Function to be evaluated.
     * @param args - Arguments to pass into `func`.
     * @returns A {@link JSHandle | handle} to the return value of `func`.
     */
    async evaluateHandle(func, ...args) {
        func = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, func);
        return await this.mainRealm().evaluateHandle(func, ...args);
    }
    async close() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.UnsupportedOperation('WebWorker.close() is not supported');
    }
}
_WebWorker_url = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/WebWorker.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/WebWorker.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiWebWorker: () => (/* binding */ BidiWebWorker)
/* harmony export */ });
/* harmony import */ var _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/src/api/WebWorker.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/Realm.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Realm_js__WEBPACK_IMPORTED_MODULE_2__);
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
var _BidiWebWorker_frame, _BidiWebWorker_realm;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class BidiWebWorker extends _api_WebWorker_js__WEBPACK_IMPORTED_MODULE_0__.WebWorker {
    static from(frame, realm) {
        const worker = new BidiWebWorker(frame, realm);
        return worker;
    }
    constructor(frame, realm) {
        super(realm.origin);
        _BidiWebWorker_frame.set(this, void 0);
        _BidiWebWorker_realm.set(this, void 0);
        __classPrivateFieldSet(this, _BidiWebWorker_frame, frame, "f");
        __classPrivateFieldSet(this, _BidiWebWorker_realm, _Realm_js__WEBPACK_IMPORTED_MODULE_2__.BidiWorkerRealm.from(realm, this), "f");
    }
    get frame() {
        return __classPrivateFieldGet(this, _BidiWebWorker_frame, "f");
    }
    mainRealm() {
        return __classPrivateFieldGet(this, _BidiWebWorker_realm, "f");
    }
    get client() {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
    }
}
_BidiWebWorker_frame = new WeakMap(), _BidiWebWorker_realm = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutSettings: () => (/* binding */ TimeoutSettings)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
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
var _TimeoutSettings_defaultTimeout, _TimeoutSettings_defaultNavigationTimeout;
const DEFAULT_TIMEOUT = 30000;
/**
 * @internal
 */
class TimeoutSettings {
    constructor() {
        _TimeoutSettings_defaultTimeout.set(this, void 0);
        _TimeoutSettings_defaultNavigationTimeout.set(this, void 0);
        __classPrivateFieldSet(this, _TimeoutSettings_defaultTimeout, null, "f");
        __classPrivateFieldSet(this, _TimeoutSettings_defaultNavigationTimeout, null, "f");
    }
    setDefaultTimeout(timeout) {
        __classPrivateFieldSet(this, _TimeoutSettings_defaultTimeout, timeout, "f");
    }
    setDefaultNavigationTimeout(timeout) {
        __classPrivateFieldSet(this, _TimeoutSettings_defaultNavigationTimeout, timeout, "f");
    }
    navigationTimeout() {
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultNavigationTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultNavigationTimeout, "f");
        }
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f");
        }
        return DEFAULT_TIMEOUT;
    }
    timeout() {
        if (__classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f") !== null) {
            return __classPrivateFieldGet(this, _TimeoutSettings_defaultTimeout, "f");
        }
        return DEFAULT_TIMEOUT;
    }
}
_TimeoutSettings_defaultTimeout = new WeakMap(), _TimeoutSettings_defaultNavigationTimeout = new WeakMap();


/***/ })

}]);