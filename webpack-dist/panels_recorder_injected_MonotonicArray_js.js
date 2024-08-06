"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_MonotonicArray_js"],{

/***/ "./panels/recorder/injected/MonotonicArray.js":
/*!****************************************************!*\
  !*** ./panels/recorder/injected/MonotonicArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonotonicArray: () => (/* binding */ MonotonicArray)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MonotonicArray {
    #values = new WeakMap();
    #nextId = 1;
    getOrInsert = (node) => {
        const value = this.#values.get(node);
        if (value !== undefined) {
            return value;
        }
        this.#values.set(node, this.#nextId);
        this.#nextId++;
        return this.#nextId - 1;
    };
}
//# sourceMappingURL=MonotonicArray.js.map

/***/ })

}]);