"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_parser_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/parser.js":
/*!**************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/parser.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TEST_ONLY = exports.CspParser = void 0;
const csp = __importStar(__webpack_require__(/*! ./csp */ "./src/third_party/csp_evaluator/package/dist/csp.js"));
class CspParser {
    constructor(unparsedCsp) {
        this.csp = new csp.Csp();
        this.parse(unparsedCsp);
    }
    parse(unparsedCsp) {
        this.csp = new csp.Csp();
        const directiveTokens = unparsedCsp.split(';');
        for (let i = 0; i < directiveTokens.length; i++) {
            const directiveToken = directiveTokens[i].trim();
            const directiveParts = directiveToken.match(/\S+/g);
            if (Array.isArray(directiveParts)) {
                const directiveName = directiveParts[0].toLowerCase();
                if (directiveName in this.csp.directives) {
                    continue;
                }
                if (!csp.isDirective(directiveName)) {
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
exports.CspParser = CspParser;
function normalizeDirectiveValue(directiveValue) {
    directiveValue = directiveValue.trim();
    const directiveValueLower = directiveValue.toLowerCase();
    if (csp.isKeyword(directiveValueLower) || csp.isUrlScheme(directiveValue)) {
        return directiveValueLower;
    }
    return directiveValue;
}
exports.TEST_ONLY = { normalizeDirectiveValue };
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./src/third_party/csp_evaluator/package/dist/parser_test.js":
/*!*******************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/parser_test.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const parser_1 = __webpack_require__(/*! ./parser */ "./src/third_party/csp_evaluator/package/dist/parser.js");
describe('Test parser', () => {
    it('CspParser', () => {
        const validCsp = 'default-src \'none\';' +
            'script-src \'nonce-unsafefoobar\' \'unsafe-eval\'   \'unsafe-inline\' \n' +
            'https://example.com/foo.js foo.bar;      ' +
            'object-src \'none\';' +
            'img-src \'self\' https: data: blob:;' +
            'style-src \'self\' \'unsafe-inline\' \'sha256-1DCfk1NYWuHMfoobarfoobar=\';' +
            'font-src *;' +
            'child-src *.example.com:9090;' +
            'upgrade-insecure-requests;\n' +
            'report-uri /csp/test';
        const parser = new (parser_1.CspParser)(validCsp);
        const parsedCsp = parser.csp;
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = [
            'default-src', 'script-src', 'object-src', 'img-src', 'style-src',
            'font-src', 'child-src', 'upgrade-insecure-requests', 'report-uri'
        ];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
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
        const parser = new (parser_1.CspParser)(validCsp);
        const parsedCsp = parser.csp;
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = ['default-src', 'object-src'];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['default-src']));
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['object-src']));
    });
    it('CspParserMixedCaseKeywords', () => {
        const validCsp = 'DEFAULT-src \'NONE\';' +
            'img-src \'sElf\' HTTPS: Example.com/CaseSensitive;';
        const parser = new (parser_1.CspParser)(validCsp);
        const parsedCsp = parser.csp;
        const directives = Object.keys(parsedCsp.directives);
        const expectedDirectives = ['default-src', 'img-src'];
        expect(expectedDirectives)
            .toEqual(jasmine.arrayWithExactContents(directives));
        expect(['\'none\''])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['default-src']));
        expect(['\'self\'', 'https:', 'Example.com/CaseSensitive'])
            .toEqual(jasmine.arrayWithExactContents(parsedCsp.directives['img-src']));
    });
    it('NormalizeDirectiveValue', () => {
        expect(parser_1.TEST_ONLY.normalizeDirectiveValue('\'nOnE\'')).toBe('\'none\'');
        expect(parser_1.TEST_ONLY.normalizeDirectiveValue('\'nonce-aBcD\''))
            .toBe('\'nonce-aBcD\'');
        expect(parser_1.TEST_ONLY.normalizeDirectiveValue('\'hash-XyZ==\''))
            .toBe('\'hash-XyZ==\'');
        expect(parser_1.TEST_ONLY.normalizeDirectiveValue('HTTPS:')).toBe('https:');
        expect(parser_1.TEST_ONLY.normalizeDirectiveValue('example.com/TEST'))
            .toBe('example.com/TEST');
    });
});
//# sourceMappingURL=parser_test.js.map

/***/ })

}]);