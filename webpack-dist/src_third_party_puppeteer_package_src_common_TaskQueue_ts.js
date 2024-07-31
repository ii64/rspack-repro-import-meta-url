"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_TaskQueue_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/TaskQueue.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/TaskQueue.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskQueue: () => (/* binding */ TaskQueue)
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
var _TaskQueue_chain;
/**
 * @internal
 */
class TaskQueue {
    constructor() {
        _TaskQueue_chain.set(this, void 0);
        __classPrivateFieldSet(this, _TaskQueue_chain, Promise.resolve(), "f");
    }
    postTask(task) {
        const result = __classPrivateFieldGet(this, _TaskQueue_chain, "f").then(task);
        __classPrivateFieldSet(this, _TaskQueue_chain, result.then(() => {
            return undefined;
        }, () => {
            return undefined;
        }), "f");
        return result;
    }
}
_TaskQueue_chain = new WeakMap();


/***/ })

}]);