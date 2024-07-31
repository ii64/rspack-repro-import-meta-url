"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecorderShortcutHelper_ts"],{

/***/ "./src/panels/recorder/models/RecorderShortcutHelper.ts":
/*!**************************************************************!*\
  !*** ./src/panels/recorder/models/RecorderShortcutHelper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderShortcutHelper: () => (/* binding */ RecorderShortcutHelper)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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
var _RecorderShortcutHelper_instances, _RecorderShortcutHelper_abortController, _RecorderShortcutHelper_timeoutId, _RecorderShortcutHelper_timeout, _RecorderShortcutHelper_cleanInternals, _RecorderShortcutHelper_handleCallback;

class RecorderShortcutHelper {
    constructor(timeout = 200) {
        _RecorderShortcutHelper_instances.add(this);
        _RecorderShortcutHelper_abortController.set(this, void 0);
        _RecorderShortcutHelper_timeoutId.set(this, null);
        _RecorderShortcutHelper_timeout.set(this, void 0);
        __classPrivateFieldSet(this, _RecorderShortcutHelper_timeout, timeout, "f");
        __classPrivateFieldSet(this, _RecorderShortcutHelper_abortController, new AbortController(), "f");
    }
    handleShortcut(callback) {
        __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_cleanInternals).call(this);
        document.addEventListener('keyup', event => {
            if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_handleCallback).call(this, callback);
            }
        }, { signal: __classPrivateFieldGet(this, _RecorderShortcutHelper_abortController, "f").signal });
        __classPrivateFieldSet(this, _RecorderShortcutHelper_timeoutId, setTimeout(() => __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_handleCallback).call(this, callback), __classPrivateFieldGet(this, _RecorderShortcutHelper_timeout, "f")), "f");
    }
}
_RecorderShortcutHelper_abortController = new WeakMap(), _RecorderShortcutHelper_timeoutId = new WeakMap(), _RecorderShortcutHelper_timeout = new WeakMap(), _RecorderShortcutHelper_instances = new WeakSet(), _RecorderShortcutHelper_cleanInternals = function _RecorderShortcutHelper_cleanInternals() {
    __classPrivateFieldGet(this, _RecorderShortcutHelper_abortController, "f").abort();
    if (__classPrivateFieldGet(this, _RecorderShortcutHelper_timeoutId, "f")) {
        clearTimeout(__classPrivateFieldGet(this, _RecorderShortcutHelper_timeoutId, "f"));
    }
    __classPrivateFieldSet(this, _RecorderShortcutHelper_abortController, new AbortController(), "f");
}, _RecorderShortcutHelper_handleCallback = function _RecorderShortcutHelper_handleCallback(callback) {
    __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_cleanInternals).call(this);
    void callback();
};


/***/ })

}]);