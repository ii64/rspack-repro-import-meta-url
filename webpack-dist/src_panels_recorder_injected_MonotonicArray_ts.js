"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_MonotonicArray_ts"],{

/***/ "./src/panels/recorder/injected/MonotonicArray.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/injected/MonotonicArray.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonotonicArray: () => (/* binding */ MonotonicArray)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MonotonicArray_values, _MonotonicArray_nextId;
class MonotonicArray {
    constructor() {
        _MonotonicArray_values.set(this, new WeakMap());
        _MonotonicArray_nextId.set(this, 1);
        Object.defineProperty(this, "getOrInsert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                var _a;
                const value = __classPrivateFieldGet(this, _MonotonicArray_values, "f").get(node);
                if (value !== undefined) {
                    return value;
                }
                __classPrivateFieldGet(this, _MonotonicArray_values, "f").set(node, __classPrivateFieldGet(this, _MonotonicArray_nextId, "f"));
                __classPrivateFieldSet(this, _MonotonicArray_nextId, (_a = __classPrivateFieldGet(this, _MonotonicArray_nextId, "f"), _a++, _a), "f");
                return __classPrivateFieldGet(this, _MonotonicArray_nextId, "f") - 1;
            }
        });
    }
}
_MonotonicArray_values = new WeakMap(), _MonotonicArray_nextId = new WeakMap();


/***/ })

}]);