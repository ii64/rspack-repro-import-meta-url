"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_checks_strictcsp_checks_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/checks/strictcsp_checks_test.ts":
/*!*******************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/checks/strictcsp_checks_test.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
 * @fileoverview Tests for strict CSP checks.
 * @author lwe@google.com (Lukas Weichselbaum)
 */



/**
 * Helper function for running a check on a CSP string.
 *
 * @param test CSP string.
 * @param checkFunction check.
 */
function checkCsp(test, checkFunction) {
    const parsedCsp = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(test)).csp;
    return checkFunction(parsedCsp);
}
describe('Test strictcsp checks', () => {
    /** Tests for csp.strictcspChecks.checkStrictDynamic */
    it('CheckStrictDynamic', () => {
        const test = 'script-src foo.bar';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STRICT_CSP);
    });
    /** Tests for csp.strictcspChecks.checkStrictDynamicNotStandalone */
    it('CheckStrictDynamicNotStandalone', () => {
        const test = 'script-src \'strict-dynamic\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations[0].severity).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).INFO);
    });
    it('CheckStrictDynamicNotStandaloneDoesntFireIfNoncePresent', () => {
        const test = 'script-src \'strict-dynamic\' \'nonce-foobar\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(0);
    });
    /** Tests for csp.strictcspChecks.checkUnsafeInlineFallback */
    it('CheckUnsafeInlineFallback', () => {
        const test = 'script-src \'nonce-test\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STRICT_CSP);
    });
    it('CheckUnsafeInlineFallbackDoesntFireIfFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'unsafe-inline\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(0);
    });
    /** Tests for csp.strictcspChecks.checkAllowlistFallback */
    it('checkAllowlistFallback', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STRICT_CSP);
    });
    it('checkAllowlistFallbackDoesntFireIfSchemeFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\' https:';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(0);
    });
    it('checkAllowlistFallbackDoesntFireIfURLFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\' foo.bar';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(0);
    });
    it('checkAllowlistFallbackDoesntFireInAbsenceOfStrictDynamic', () => {
        const test = 'script-src \'nonce-test\'';
        const violations = checkCsp(test, Object(function webpackMissingModule() { var e = new Error("Cannot find module './strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        expect(violations.length).toBe(0);
    });
});


/***/ })

}]);