"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_core_core_ts-src_third_party_puppeteer_package_src-839a87"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/core/Connection.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/Connection.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/bidi/core/core.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/core/core.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser),
/* harmony export */   BrowsingContext: () => (/* reexport safe */ _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowsingContext),
/* harmony export */   DedicatedWorkerRealm: () => (/* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.DedicatedWorkerRealm),
/* harmony export */   Navigation: () => (/* reexport safe */ _Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation),
/* harmony export */   Realm: () => (/* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.Realm),
/* harmony export */   Request: () => (/* reexport safe */ _Request_js__WEBPACK_IMPORTED_MODULE_5__.Request),
/* harmony export */   Session: () => (/* reexport safe */ _Session_js__WEBPACK_IMPORTED_MODULE_6__.Session),
/* harmony export */   SharedWorkerRealm: () => (/* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.SharedWorkerRealm),
/* harmony export */   UserContext: () => (/* reexport safe */ _UserContext_js__WEBPACK_IMPORTED_MODULE_7__.UserContext),
/* harmony export */   UserPrompt: () => (/* reexport safe */ _UserPrompt_js__WEBPACK_IMPORTED_MODULE_8__.UserPrompt),
/* harmony export */   WindowRealm: () => (/* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.WindowRealm)
/* harmony export */ });
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/bidi/core/Browser.ts");
/* harmony import */ var _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowsingContext.js */ "./src/third_party/puppeteer/package/src/bidi/core/BrowsingContext.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/bidi/core/Connection.ts");
/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.js */ "./src/third_party/puppeteer/package/src/bidi/core/Navigation.ts");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/src/bidi/core/Realm.ts");
/* harmony import */ var _Request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Request.js */ "./src/third_party/puppeteer/package/src/bidi/core/Request.ts");
/* harmony import */ var _Session_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Session.js */ "./src/third_party/puppeteer/package/src/bidi/core/Session.ts");
/* harmony import */ var _UserContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserContext.js */ "./src/third_party/puppeteer/package/src/bidi/core/UserContext.ts");
/* harmony import */ var _UserPrompt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserPrompt.js */ "./src/third_party/puppeteer/package/src/bidi/core/UserPrompt.ts");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */











/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Errors.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Errors.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolError: () => (/* binding */ ProtocolError),
/* harmony export */   PuppeteerError: () => (/* binding */ PuppeteerError),
/* harmony export */   TargetCloseError: () => (/* binding */ TargetCloseError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   UnsupportedOperation: () => (/* binding */ UnsupportedOperation)
/* harmony export */ });
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
var _ProtocolError_code, _ProtocolError_originalMessage;
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
class TimeoutError extends PuppeteerError {
}
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    constructor() {
        super(...arguments);
        _ProtocolError_code.set(this, void 0);
        _ProtocolError_originalMessage.set(this, '');
    }
    set code(code) {
        __classPrivateFieldSet(this, _ProtocolError_code, code, "f");
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return __classPrivateFieldGet(this, _ProtocolError_code, "f");
    }
    set originalMessage(originalMessage) {
        __classPrivateFieldSet(this, _ProtocolError_originalMessage, originalMessage, "f");
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return __classPrivateFieldGet(this, _ProtocolError_originalMessage, "f");
    }
}
_ProtocolError_code = new WeakMap(), _ProtocolError_originalMessage = new WeakMap();
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/assert.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/assert.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};


/***/ })

}]);