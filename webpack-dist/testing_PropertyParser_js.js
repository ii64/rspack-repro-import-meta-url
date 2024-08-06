"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_PropertyParser_js"],{

/***/ "./testing/PropertyParser.js":
/*!***********************************!*\
  !*** ./testing/PropertyParser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Printer: () => (/* binding */ Printer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class Printer extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker {
    #printedText = [];
    #indent = 0;
    enter({ node }) {
        const text = this.ast.text(node);
        this.#printedText.push(`${'|'.repeat(this.#indent)} ${node.name}${text !== node.name ? `: ${text}` : ''}`);
        this.#indent++;
        return true;
    }
    leave() {
        this.#indent--;
    }
    get() {
        return this.#printedText.join('\n');
    }
    static log(ast) {
        /* eslint-disable-next-line no-console */
        console.log(Printer.walk(ast).get());
    }
    static rule(rule) {
        const ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree('', rule, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.css.cssLanguage.parser.parse(rule).topNode);
        return Printer.walk(ast).get();
    }
}
//# sourceMappingURL=PropertyParser.js.map

/***/ })

}]);