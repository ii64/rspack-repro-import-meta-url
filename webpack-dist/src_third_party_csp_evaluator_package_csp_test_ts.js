"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_csp_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/csp_test.ts":
/*!***********************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/csp_test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @fileoverview Tests for CSP Defintions.
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



describe('Test Csp', () => {
    it('ConvertToString', () => {
        const testCsp = 'default-src \'none\'; ' +
            'script-src \'nonce-unsafefoobar\' \'unsafe-eval\' \'unsafe-inline\' ' +
            'https://example.com/foo.js foo.bar; ' +
            'img-src \'self\' https: data: blob:; ';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.convertToString()).toBe(testCsp);
    });
    it('GetEffectiveCspVersion1', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CSP1);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEFAULT_SRC]).toEqual([
            '\'unsafe-inline\'', '\'self\''
        ]);
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).REPORT_TO)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).WORKER_SRC)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MANIFEST_SRC)).toBeFalse();
    });
    it('GetEffectiveCspVersion2', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CSP2);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEFAULT_SRC]).toEqual([
            '\'nonce-123\'', '\'sha256-foobar\'', '\'self\''
        ]);
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).REPORT_TO)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).WORKER_SRC)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MANIFEST_SRC)).toBeFalse();
    });
    it('GetEffectiveCspVersion3', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CSP3);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEFAULT_SRC]).toEqual([
            '\'strict-dynamic\'', '\'nonce-123\'', '\'sha256-foobar\''
        ]);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).REPORT_TO]).toEqual(['foo.bar']);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).WORKER_SRC]).toEqual(['*']);
        expect(effectiveCsp.directives[Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).MANIFEST_SRC]).toEqual(['*']);
    });
    it('GetEffectiveDirective', () => {
        const testCsp = 'default-src https:; script-src foo.bar';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        const script = parsed.getEffectiveDirective(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        expect(script).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        const style = parsed.getEffectiveDirective(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STYLE_SRC);
        expect(style).toBe(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEFAULT_SRC);
    });
    it('GetEffectiveDirectives', () => {
        const testCsp = 'default-src https:; script-src foo.bar';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        const directives = parsed.getEffectiveDirectives([Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC, Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STYLE_SRC]);
        expect(directives).toEqual([Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC, Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEFAULT_SRC]);
    });
    it('PolicyHasScriptNoncesScriptSrcWithNonce', () => {
        const testCsp = 'default-src https:; script-src \'nonce-test123\'';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasScriptNonces()).toBeTrue();
    });
    it('PolicyHasScriptNoncesNoNonce', () => {
        const testCsp = 'default-src https: \'nonce-ignored\'; script-src nonce-invalid';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasScriptNonces()).toBeFalse();
    });
    it('PolicyHasScriptHashesScriptSrcWithHash', () => {
        const testCsp = 'default-src https:; script-src \'sha256-asdfASDF\'';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasScriptHashes()).toBeTrue();
    });
    it('PolicyHasScriptHashesNoHash', () => {
        const testCsp = 'default-src https: \'nonce-ignored\'; script-src sha256-invalid';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasScriptHashes()).toBeFalse();
    });
    it('PolicyHasStrictDynamicScriptSrcWithStrictDynamic', () => {
        const testCsp = 'default-src https:; script-src \'strict-dynamic\'';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeTrue();
    });
    it('PolicyHasStrictDynamicDefaultSrcWithStrictDynamic', () => {
        const testCsp = 'default-src https \'strict-dynamic\'';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeTrue();
    });
    it('PolicyHasStrictDynamicNoStrictDynamic', () => {
        const testCsp = 'default-src \'strict-dynamic\'; script-src foo.bar';
        const parsed = (new Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeFalse();
    });
    it('IsDirective', () => {
        const directives = Object.keys(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).map((name) => Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[name]);
        expect(directives.every(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('invalid-src')).toBeFalse();
    });
    it('IsKeyword', () => {
        const keywords = Object.keys(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).map((name) => (Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[name]));
        expect(keywords.every(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('invalid')).toBeFalse();
    });
    it('IsUrlScheme', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('http:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('data:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('blob:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('b+l.o-b:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('filesystem:')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('invalid')).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('ht_tp:')).toBeFalse();
    });
    it('IsNonce', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'nonce-asdfASDF=\'')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asdfASDF=\'')).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'asdfASDF=\'')).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('example.com')).toBeFalse();
    });
    it('IsStrictNonce', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'nonce-asdfASDF=\'', true)).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'nonce-as+df/A0234SDF==\'', true)).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'nonce-as_dfASDF=\'', true)).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'nonce-asdfASDF===\'', true)).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asdfASDF=\'', true)).toBeFalse();
    });
    it('IsHash', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asdfASDF=\'')).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha777-asdfASDF=\'')).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'asdfASDF=\'')).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('example.com')).toBeFalse();
    });
    it('IsStrictHash', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asdfASDF=\'', true)).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-as+d/f/ASD0+4F==\'', true)).toBeTrue();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asdfASDF===\'', true)).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha256-asd_fASDF=\'', true)).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'sha777-asdfASDF=\'', true)).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('\'asdfASDF=\'', true)).toBeFalse();
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('example.com', true)).toBeFalse();
    });
});


/***/ })

}]);