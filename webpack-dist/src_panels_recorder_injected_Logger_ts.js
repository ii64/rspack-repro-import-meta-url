"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_Logger_ts"],{

/***/ "./src/panels/recorder/injected/Logger.ts":
/*!************************************************!*\
  !*** ./src/panels/recorder/injected/Logger.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _Logger_log, _Logger_time, _Logger_timeEnd;
const noop = () => void 0;
class Logger {
    constructor(level) {
        _Logger_log.set(this, void 0);
        _Logger_time.set(this, void 0);
        _Logger_timeEnd.set(this, void 0);
        switch (level) {
            case 'silent':
                __classPrivateFieldSet(this, _Logger_log, noop, "f");
                __classPrivateFieldSet(this, _Logger_time, noop, "f");
                __classPrivateFieldSet(this, _Logger_timeEnd, noop, "f");
                break;
            default:
                // eslint-disable-next-line no-console
                __classPrivateFieldSet(this, _Logger_log, console.log, "f");
                __classPrivateFieldSet(this, _Logger_time, console.time, "f");
                __classPrivateFieldSet(this, _Logger_timeEnd, console.timeEnd, "f");
                break;
        }
    }
    log(...args) {
        __classPrivateFieldGet(this, _Logger_log, "f").call(this, ...args);
    }
    timed(label, action) {
        __classPrivateFieldGet(this, _Logger_time, "f").call(this, label);
        const value = action();
        __classPrivateFieldGet(this, _Logger_timeEnd, "f").call(this, label);
        return value;
    }
}
_Logger_log = new WeakMap(), _Logger_time = new WeakMap(), _Logger_timeEnd = new WeakMap();


/***/ })

}]);