"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_IdentityFormatter_js"],{

/***/ "./entrypoints/formatter_worker/IdentityFormatter.js":
/*!***********************************************************!*\
  !*** ./entrypoints/formatter_worker/IdentityFormatter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityFormatter: () => (/* binding */ IdentityFormatter)
/* harmony export */ });
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class IdentityFormatter {
    builder;
    constructor(builder) {
        this.builder = builder;
    }
    format(text, lineEndings, fromOffset, toOffset) {
        const content = text.substring(fromOffset, toOffset);
        this.builder.addToken(content, fromOffset);
    }
}
//# sourceMappingURL=IdentityFormatter.js.map

/***/ })

}]);