"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_evaluator_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/evaluator_test.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/evaluator_test.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './evaluator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
 * @fileoverview Tests for CSP Evaluator.
 * @author lwe@google.com (Lukas Weichselbaum)
 */




describe('Test evaluator', () => {
    it('CspEvaluator', () => {
        const fakeCsp = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        const evaluator = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './evaluator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(fakeCsp);
        expect(evaluator.csp).toBe(fakeCsp);
    });
    it('Evaluate', () => {
        const fakeCsp = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))();
        const fakeFinding = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).UNKNOWN_DIRECTIVE, 'Fake description', Object(function webpackMissingModule() { var e = new Error("Cannot find module './finding'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MEDIUM, 'fake-directive', 'fake-directive-value');
        const fakeVerifier = (parsedCsp) => {
            return [fakeFinding];
        };
        const evaluator = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './evaluator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(fakeCsp);
        const findings = evaluator.evaluate([fakeVerifier, fakeVerifier], [fakeVerifier]);
        const expectedFindings = [fakeFinding, fakeFinding, fakeFinding];
        expect(findings).toEqual(expectedFindings);
    });
});


/***/ })

}]);