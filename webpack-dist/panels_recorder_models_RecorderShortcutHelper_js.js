"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecorderShortcutHelper_js"],{

/***/ "./panels/recorder/models/RecorderShortcutHelper.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/models/RecorderShortcutHelper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderShortcutHelper: () => (/* binding */ RecorderShortcutHelper)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RecorderShortcutHelper {
    #abortController;
    #timeoutId = null;
    #timeout;
    constructor(timeout = 200) {
        this.#timeout = timeout;
        this.#abortController = new AbortController();
    }
    #cleanInternals() {
        this.#abortController.abort();
        if (this.#timeoutId) {
            clearTimeout(this.#timeoutId);
        }
        this.#abortController = new AbortController();
    }
    #handleCallback(callback) {
        this.#cleanInternals();
        void callback();
    }
    handleShortcut(callback) {
        this.#cleanInternals();
        document.addEventListener('keyup', event => {
            if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                this.#handleCallback(callback);
            }
        }, { signal: this.#abortController.signal });
        this.#timeoutId = setTimeout(() => this.#handleCallback(callback), this.#timeout);
    }
}
//# sourceMappingURL=RecorderShortcutHelper.js.map

/***/ })

}]);