"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_csp_evaluator_ts"],{

/***/ "./src/third_party/csp_evaluator/csp_evaluator.ts":
/*!********************************************************!*\
  !*** ./src/third_party/csp_evaluator/csp_evaluator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspEvaluator: () => (/* reexport module object */ _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CspParser: () => (/* reexport module object */ _package_parser_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/evaluator.js */ "./src/third_party/csp_evaluator/package/evaluator.ts");
/* harmony import */ var _package_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/parser.js */ "./src/third_party/csp_evaluator/package/parser.ts");






/***/ }),

/***/ "./src/third_party/csp_evaluator/package/parser.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/parser.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspParser: () => (/* binding */ CspParser),
/* harmony export */   TEST_ONLY: () => (/* binding */ TEST_ONLY)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp.js */ "./src/third_party/csp_evaluator/package/csp.ts");
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author lwe@google.com (Lukas Weichselbaum)
 */

/**
 * A class to hold a parser for CSP in string format.
 * @unrestricted
 */
class CspParser {
    /**
     * @param unparsedCsp A Content Security Policy as string.
     */
    constructor(unparsedCsp) {
        Object.defineProperty(this, "csp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Parsed CSP
         */
        this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        this.parse(unparsedCsp);
    }
    /**
     * Parses a CSP from a string.
     * @param unparsedCsp CSP as string.
     */
    parse(unparsedCsp) {
        // Reset the internal state:
        this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        // Split CSP into directive tokens.
        const directiveTokens = unparsedCsp.split(';');
        for (let i = 0; i < directiveTokens.length; i++) {
            const directiveToken = directiveTokens[i].trim();
            // Split directive tokens into directive name and directive values.
            const directiveParts = directiveToken.match(/\S+/g);
            if (Array.isArray(directiveParts)) {
                const directiveName = directiveParts[0].toLowerCase();
                // If the set of directives already contains a directive whose name is a
                // case insensitive match for directive name, ignore this instance of
                // the directive and continue to the next token.
                if (directiveName in this.csp.directives) {
                    continue;
                }
                if (!_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directiveName)) {
                }
                const directiveValues = [];
                for (let directiveValue, j = 1; (directiveValue = directiveParts[j]); j++) {
                    directiveValue = normalizeDirectiveValue(directiveValue);
                    if (!directiveValues.includes(directiveValue)) {
                        directiveValues.push(directiveValue);
                    }
                }
                this.csp.directives[directiveName] = directiveValues;
            }
        }
        return this.csp;
    }
}
/**
 * Remove whitespaces and turn to lower case if CSP keyword or protocol
 * handler.
 * @param directiveValue directive value.
 * @return normalized directive value.
 */
function normalizeDirectiveValue(directiveValue) {
    directiveValue = directiveValue.trim();
    const directiveValueLower = directiveValue.toLowerCase();
    if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(directiveValueLower) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isUrlScheme(directiveValue)) {
        return directiveValueLower;
    }
    return directiveValue;
}
const TEST_ONLY = { normalizeDirectiveValue };


/***/ })

}]);