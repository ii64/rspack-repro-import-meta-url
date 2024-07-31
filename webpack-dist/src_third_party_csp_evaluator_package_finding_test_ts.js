"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_finding_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/finding_test.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/finding_test.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @fileoverview Tests for CSP Finding.
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



describe('Test finding', () => {
    it('Finding', () => {
        const type = Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MISSING_SEMICOLON;
        const description = 'description';
        const severity = Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).HIGH;
        const directive = Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC;
        const value = Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).NONE;
        const finding = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(type, description, severity, directive, value);
        expect(finding.type).toBe(type);
        expect(finding.description).toBe(description);
        expect(finding.severity).toBe(severity);
        expect(finding.directive).toBe(directive);
        expect(finding.value).toBe(value);
    });
    it('GetHighestSeverity', () => {
        const finding1 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MISSING_SEMICOLON, 'description', Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).HIGH, Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        const finding2 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MISSING_SEMICOLON, 'description', Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MEDIUM, Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        const finding3 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MISSING_SEMICOLON, 'description', Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).INFO, Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getHighestSeverity([
            finding1, finding3, finding2, finding1
        ])).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).HIGH);
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getHighestSeverity([
            finding3, finding2
        ])).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MEDIUM);
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getHighestSeverity([
            finding3, finding3
        ])).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).INFO);
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getHighestSeverity([])).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).NONE);
    });
});


/***/ })

}]);