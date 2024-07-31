"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_PropertyParser_ts"],{

/***/ "./src/testing/PropertyParser.ts":
/*!***************************************!*\
  !*** ./src/testing/PropertyParser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Printer: () => (/* binding */ Printer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
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
var _Printer_printedText, _Printer_indent;
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class Printer extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker {
    constructor() {
        super(...arguments);
        _Printer_printedText.set(this, []);
        _Printer_indent.set(this, 0);
    }
    enter({ node }) {
        var _a;
        const text = this.ast.text(node);
        __classPrivateFieldGet(this, _Printer_printedText, "f").push(`${'|'.repeat(__classPrivateFieldGet(this, _Printer_indent, "f"))} ${node.name}${text !== node.name ? `: ${text}` : ''}`);
        __classPrivateFieldSet(this, _Printer_indent, (_a = __classPrivateFieldGet(this, _Printer_indent, "f"), _a++, _a), "f");
        return true;
    }
    leave() {
        var _a;
        __classPrivateFieldSet(this, _Printer_indent, (_a = __classPrivateFieldGet(this, _Printer_indent, "f"), _a--, _a), "f");
    }
    get() {
        return __classPrivateFieldGet(this, _Printer_printedText, "f").join('\n');
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
_Printer_printedText = new WeakMap(), _Printer_indent = new WeakMap();


/***/ })

}]);