"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_parser_test_ts"],{

/***/ "./src/third_party/csp_evaluator/package/parser_test.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/parser_test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @fileoverview Tests for CSP Parser.
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


describe('Test parser', () => {
    it('CspParser', () => {
        const validCsp = // Test policy with different features from CSP2.
         'default-src \'none\';' +
            'script-src \'nonce-unsafefoobar\' \'unsafe-eval\'   \'unsafe-inline\' \n' +
            'https://example.com/foo.js foo.bar;      ' +
            'object-src \'none\';' +
            'img-src \'self\' https: data: blob:;' +
            'style-src \'self\' \'unsafe-inline\' \'sha256-1DCfk1NYWuHMfoobarfoobar=\';' +
            'font-src *;' +
            'child-src *.example.com:9090;' +
            'upgrade-insecure-requests;\n' +
            'report-uri /csp/test';
        const parser = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(validCsp);
        const parsedCsp = parser.csp;
        // check directives
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = [
            'default-src', 'script-src', 'object-src', 'img-src', 'style-src',
            'font-src', 'child-src', 'upgrade-insecure-requests', 'report-uri'
        ];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
        // check directive values
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['default-src']));
        expect([
            '\'nonce-unsafefoobar\'', '\'unsafe-eval\'', '\'unsafe-inline\'',
            'https://example.com/foo.js', 'foo.bar'
        ])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['script-src']));
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['object-src']));
        expect(['\'self\'', 'https:', 'data:', 'blob:'])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['img-src']));
        expect([
            '\'self\'', '\'unsafe-inline\'', '\'sha256-1DCfk1NYWuHMfoobarfoobar=\''
        ])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['style-src']));
        expect(['*']).toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['font-src']));
        expect(['*.example.com:9090'])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['child-src']));
        expect([]).toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['upgrade-insecure-requests']));
        expect(['/csp/test'])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['report-uri']));
    });
    it('CspParserDuplicateDirectives', () => {
        const validCsp = 'default-src \'none\';' +
            'default-src foo.bar;' +
            'object-src \'none\';' +
            'OBJECT-src foo.bar;';
        const parser = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(validCsp);
        const parsedCsp = parser.csp;
        // check directives
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = ['default-src', 'object-src'];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
        // check directive values
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['default-src']));
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['object-src']));
    });
    it('CspParserMixedCaseKeywords', () => {
        const validCsp = 'DEFAULT-src \'NONE\';' + // Keywords should be
            // case insensetive.
            'img-src \'sElf\' HTTPS: Example.com/CaseSensitive;';
        const parser = new (Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(validCsp);
        const parsedCsp = parser.csp;
        // check directives
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = ['default-src', 'img-src'];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
        // check directive values
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['default-src']));
        expect(['\'self\'', 'https:', 'Example.com/CaseSensitive'])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['img-src']));
    });
    it('NormalizeDirectiveValue', () => {
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).normalizeDirectiveValue('\'nOnE\'')).toBe('\'none\'');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).normalizeDirectiveValue('\'nonce-aBcD\''))
            .toBe('\'nonce-aBcD\'');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).normalizeDirectiveValue('\'hash-XyZ==\''))
            .toBe('\'hash-XyZ==\'');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).normalizeDirectiveValue('HTTPS:')).toBe('https:');
        expect(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parser'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).normalizeDirectiveValue('example.com/TEST'))
            .toBe('example.com/TEST');
    });
});


/***/ })

}]);