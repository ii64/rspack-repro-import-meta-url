"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_csp_evaluator_package_checks_parser_checks_js"],{

/***/ "./third_party/csp_evaluator/package/checks/parser_checks.js":
/*!*******************************************************************!*\
  !*** ./third_party/csp_evaluator/package/checks/parser_checks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInvalidKeyword: () => (/* binding */ checkInvalidKeyword),
/* harmony export */   checkMissingSemicolon: () => (/* binding */ checkMissingSemicolon),
/* harmony export */   checkUnknownDirective: () => (/* binding */ checkUnknownDirective)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csp.js */ "./third_party/csp_evaluator/package/csp.js");
/* harmony import */ var _finding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finding.js */ "./third_party/csp_evaluator/package/finding.js");
/**
 * @fileoverview Collection of CSP parser checks which can be used to find
 * common syntax mistakes like missing semicolons, invalid directives or
 * invalid keywords.
 * @author lwe@google.com (Lukas Weichselbaum)
 *
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
 */



/**
 * Checks if the csp contains invalid directives.
 *
 * Example policy where this check would trigger:
 *  foobar-src foo.bar
 *
 * @param parsedCsp A parsed csp.
 */
function checkUnknownDirective(parsedCsp) {
    const findings = [];
    for (const directive of Object.keys(parsedCsp.directives)) {
        if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directive)) {
            // Directive is known.
            continue;
        }
        if (directive.endsWith(':')) {
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'CSP directives don\'t end with a colon.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
        }
        else {
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'Directive "' + directive + '" is not a known CSP directive.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
        }
    }
    return findings;
}
/**
 * Checks if semicolons are missing in the csp.
 *
 * Example policy where this check would trigger (missing semicolon before
 * start of object-src):
 *  script-src foo.bar object-src 'none'
 *
 * @param parsedCsp A parsed csp.
 */
function checkMissingSemicolon(parsedCsp) {
    const findings = [];
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            // If we find a known directive inside a directive value, it is very
            // likely that a semicolon was forgoten.
            if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(value)) {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.MISSING_SEMICOLON, 'Did you forget the semicolon? ' +
                    '"' + value + '" seems to be a directive, not a value.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
            }
        }
    }
    return findings;
}
/**
 * Checks if csp contains invalid keywords.
 *
 * Example policy where this check would trigger:
 *  script-src 'notAkeyword'
 *
 * @param parsedCsp A parsed csp.
 */
function checkInvalidKeyword(parsedCsp) {
    const findings = [];
    const keywordsNoTicks = Object.values(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword).map((k) => k.replace(/'/g, ''));
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            // Check if single ticks have been forgotten.
            if (keywordsNoTicks.some((k) => k === value) ||
                value.startsWith('nonce-') ||
                value.match(/^(sha256|sha384|sha512)-/)) {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, 'Did you forget to surround "' + value + '" with single-ticks?', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
                continue;
            }
            // Continue, if the value doesn't start with single tick.
            // All CSP keywords start with a single tick.
            if (!value.startsWith('\'')) {
                continue;
            }
            if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR) {
                // Continue, if it's an allowed Trusted Types sink.
                if (value === _csp_js__WEBPACK_IMPORTED_MODULE_0__.TrustedTypesSink.SCRIPT) {
                    continue;
                }
            }
            else if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.TRUSTED_TYPES) {
                // Continue, if it's an allowed Trusted Types keyword.
                if (value === '\'allow-duplicates\'' || value === '\'none\'') {
                    continue;
                }
            }
            else {
                // Continue, if it's a valid keyword.
                if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isHash(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isNonce(value)) {
                    continue;
                }
            }
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, value + ' seems to be an invalid CSP keyword.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
        }
    }
    return findings;
}
//# sourceMappingURL=parser_checks.js.map

/***/ })

}]);