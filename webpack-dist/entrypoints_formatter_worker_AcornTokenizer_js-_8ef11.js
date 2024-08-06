"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_formatter_worker_AcornTokenizer_js-_8ef11"],{

/***/ "./entrypoints/formatter_worker/AcornTokenizer.js":
/*!********************************************************!*\
  !*** ./entrypoints/formatter_worker/AcornTokenizer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcornTokenizer: () => (/* binding */ AcornTokenizer),
/* harmony export */   ECMA_VERSION: () => (/* binding */ ECMA_VERSION)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/acorn/acorn.js */ "./third_party/acorn/acorn.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * The tokenizer in Acorn does not allow you to peek into the next token.
 * We use the peekToken method to determine when to stop formatting a
 * particular block of code.
 *
 * To remedy the situation, we implement the peeking of tokens ourselves.
 * To do so, whenever we call `nextToken`, we already retrieve the token
 * after it (in `bufferedToken`), so that `_peekToken` can check if there
 * is more work to do.
 *
 * There are 2 catches:
 *
 * 1. in the constructor we need to start the initialize the buffered token,
 *    such that `peekToken` on the first call is able to retrieve it. However,
 * 2. comments and tokens can arrive intermixed from the tokenizer. This usually
 *    happens when comments are the first comments of a file. In the scenario that
 *    the first comment in a file is a line comment attached to a token, we first
 *    receive the token and after that we receive the comment. However, when tokenizing
 *    we should reverse the order and return the comment, before the token.
 *
 * All that is to say that the `bufferedToken` is only used for *true* tokens.
 * We mimic comments to be tokens to fix the reordering issue, but we store these
 * separately to keep track of them. Any call to `nextTokenInternal` will figure
 * out whether the next token should be the preceding comment or not.
 */
class AcornTokenizer {
    #textCursor;
    #tokenLineStartInternal;
    #tokenLineEndInternal;
    #tokens;
    #idx = 0;
    constructor(content, tokens) {
        this.#tokens = tokens;
        const contentLineEndings = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.findLineEndingIndexes(content);
        this.#textCursor = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextCursor.TextCursor(contentLineEndings);
        this.#tokenLineStartInternal = 0;
        this.#tokenLineEndInternal = 0;
    }
    static punctuator(token, values) {
        return token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.num && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.regexp &&
            token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.string && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && !token.type.keyword &&
            (!values || (token.type.label.length === 1 && values.indexOf(token.type.label) !== -1));
    }
    static keyword(token, keyword) {
        return Boolean(token.type.keyword) && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_true'] &&
            token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_false'] && token.type !== _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes['_null'] &&
            (!keyword || token.type.keyword === keyword);
    }
    static identifier(token, identifier) {
        return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.name && (!identifier || token.value === identifier);
    }
    static arrowIdentifier(token, identifier) {
        return token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.arrow && (!identifier || token.type.label === identifier);
    }
    static lineComment(token) {
        return token.type === 'Line';
    }
    static blockComment(token) {
        return token.type === 'Block';
    }
    nextToken() {
        const token = this.#tokens[this.#idx++];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        this.#textCursor.advance(token.start);
        this.#tokenLineStartInternal = this.#textCursor.lineNumber();
        this.#textCursor.advance(token.end);
        this.#tokenLineEndInternal = this.#textCursor.lineNumber();
        return token;
    }
    peekToken() {
        const token = this.#tokens[this.#idx];
        if (!token || token.type === _third_party_acorn_acorn_js__WEBPACK_IMPORTED_MODULE_2__.tokTypes.eof) {
            return null;
        }
        return token;
    }
    tokenLineStart() {
        return this.#tokenLineStartInternal;
    }
    tokenLineEnd() {
        return this.#tokenLineEndInternal;
    }
}
const ECMA_VERSION = 2022;
//# sourceMappingURL=AcornTokenizer.js.map

/***/ }),

/***/ "./third_party/acorn/acorn.js":
/*!************************************!*\
  !*** ./third_party/acorn/acorn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Node),
/* harmony export */   Parser: () => (/* binding */ Parser),
/* harmony export */   SourceLocation: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.SourceLocation),
/* harmony export */   Token: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Token),
/* harmony export */   defaultOptions: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.defaultOptions),
/* harmony export */   getLineInfo: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.getLineInfo),
/* harmony export */   isNewLine: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.isNewLine),
/* harmony export */   lineBreak: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreak),
/* harmony export */   lineBreakG: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.lineBreakG),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   tokContexts: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokContexts),
/* harmony export */   tokTypes: () => (/* reexport safe */ _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.tokTypes),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer)
/* harmony export */ });
/* harmony import */ var _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/acorn.mjs */ "./third_party/acorn/package/dist/acorn.mjs");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const Parser = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser;
const tokenizer = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.tokenizer.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
const parse = _package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser.parse.bind(_package_dist_acorn_mjs__WEBPACK_IMPORTED_MODULE_0__.Parser);
//# sourceMappingURL=acorn.js.map

/***/ })

}]);