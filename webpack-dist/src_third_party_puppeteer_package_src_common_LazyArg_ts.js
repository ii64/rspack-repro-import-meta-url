"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_LazyArg_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/LazyArg.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/LazyArg.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyArg: () => (/* binding */ LazyArg)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
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
var _LazyArg_get;
/**
 * @internal
 */
class LazyArg {
    constructor(get) {
        _LazyArg_get.set(this, void 0);
        __classPrivateFieldSet(this, _LazyArg_get, get, "f");
    }
    async get(context) {
        return await __classPrivateFieldGet(this, _LazyArg_get, "f").call(this, context);
    }
}
_LazyArg_get = new WeakMap();
Object.defineProperty(LazyArg, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    }
});


/***/ })

}]);