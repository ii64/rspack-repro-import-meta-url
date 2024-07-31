"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_Selector_ts"],{

/***/ "./src/panels/recorder/injected/selectors/Selector.ts":
/*!************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/Selector.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPart: () => (/* binding */ SelectorPart)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SelectorPart {
    constructor(value, optimized) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "optimized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
        this.optimized = optimized || false;
    }
    toString() {
        return this.value;
    }
}


/***/ })

}]);