"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_ConsoleMessage_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleMessage: () => (/* binding */ ConsoleMessage)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var _ConsoleMessage_type, _ConsoleMessage_text, _ConsoleMessage_args, _ConsoleMessage_stackTraceLocations;
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
class ConsoleMessage {
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations) {
        _ConsoleMessage_type.set(this, void 0);
        _ConsoleMessage_text.set(this, void 0);
        _ConsoleMessage_args.set(this, void 0);
        _ConsoleMessage_stackTraceLocations.set(this, void 0);
        __classPrivateFieldSet(this, _ConsoleMessage_type, type, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_text, text, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_args, args, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_stackTraceLocations, stackTraceLocations, "f");
    }
    /**
     * The type of the console message.
     */
    type() {
        return __classPrivateFieldGet(this, _ConsoleMessage_type, "f");
    }
    /**
     * The text of the console message.
     */
    text() {
        return __classPrivateFieldGet(this, _ConsoleMessage_text, "f");
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
        return __classPrivateFieldGet(this, _ConsoleMessage_args, "f");
    }
    /**
     * The location of the console message.
     */
    location() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f")[0] ?? {};
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f");
    }
}
_ConsoleMessage_type = new WeakMap(), _ConsoleMessage_text = new WeakMap(), _ConsoleMessage_args = new WeakMap(), _ConsoleMessage_stackTraceLocations = new WeakMap();


/***/ })

}]);