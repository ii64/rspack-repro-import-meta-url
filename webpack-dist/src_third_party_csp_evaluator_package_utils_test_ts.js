"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_utils_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/utils_test.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/utils_test.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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


const TEST_BYPASSES = [
    'https://googletagmanager.com/gtm/js', 'https://www.google.com/jsapi',
    'https://ajax.googleapis.com/ajax/services/feed/load'
];
describe('Test Utils', () => {
    it('GetSchemeFreeUrl', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://*')).toBe('*');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//*')).toBe('*');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('*')).toBe('*');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('test//*')).toBe('test//*');
    });
    it('MatchWildcardUrlsMatchWildcardFreeHost', () => {
        const wildcardFreeHost = '//www.google.com';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardFreeHost, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatch', () => {
        const wildcardFreeHost = '//www.foo.bar';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardFreeHost, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchWildcardHost', () => {
        const wildcardHost = '//*.google.com';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardHost, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatchWildcardHost', () => {
        const wildcardHost = '//*.www.google.com';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardHost, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchWildcardHostWithPath', () => {
        const wildcardHostWithPath = '//*.google.com/jsapi';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardHostWithPath, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatchWildcardHostWithPath', () => {
        const wildcardHostWithPath = '//*.google.com/wrongPath';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(wildcardHostWithPath, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchHostWithPathWildcard', () => {
        const hostWithPath = '//ajax.googleapis.com/ajax/';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hostWithPath, TEST_BYPASSES);
        expect(match.hostname).toBe('ajax.googleapis.com');
    });
    it('MatchWildcardUrlsNoMatchHostWithoutPathWildcard', () => {
        const hostWithPath = '//ajax.googleapis.com/ajax';
        const match = Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hostWithPath, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('GetHostname', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://www.google.com')).toBe('www.google.com');
    });
    it('GetHostnamePort', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://www.google.com:8080')).toBe('www.google.com');
    });
    it('GetHostnameWildcardPort', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://www.google.com:*')).toBe('www.google.com');
    });
    it('GetHostnameNoProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('www.google.com')).toBe('www.google.com');
    });
    it('GetHostnameDoubleSlashProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//www.google.com')).toBe('www.google.com');
    });
    it('GetHostnameWildcard', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//*.google.com')).toBe('*.google.com');
    });
    it('GetHostnameWithPath', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//*.google.com/any/path')).toBe('*.google.com');
    });
    it('GetHostnameJustWildcard', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('*')).toBe('*');
    });
    it('GetHostnameWildcardWithProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://*')).toBe('*');
    });
    it('GetHostnameNonsense', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('unsafe-inline')).toBe('unsafe-inline');
    });
    it('GetHostnameIPv4', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('[::1]')).toBe('[::1]');
    });
    it('GetHostnameIPv4WithFullProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('https://1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6WithFullProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('http://[::1]')).toBe('[::1]');
    });
    it('GetHostnameIPv4WithPartialProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6WithPartialProtocol', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('//[::1]')).toBe('[::1]');
    });
});


/***/ })

}]);