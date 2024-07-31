"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_formatter_worker_IdentityFormatter_ts"],{

/***/ "./src/entrypoints/formatter_worker/IdentityFormatter.ts":
/*!***************************************************************!*\
  !*** ./src/entrypoints/formatter_worker/IdentityFormatter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityFormatter: () => (/* binding */ IdentityFormatter)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class IdentityFormatter {
    constructor(builder) {
        Object.defineProperty(this, "builder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: builder
        });
    }
    format(text, lineEndings, fromOffset, toOffset) {
        const content = text.substring(fromOffset, toOffset);
        this.builder.addToken(content, fromOffset);
    }
}


/***/ })

}]);