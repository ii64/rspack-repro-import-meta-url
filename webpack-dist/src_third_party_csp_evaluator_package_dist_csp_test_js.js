"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_csp_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/csp_test.js":
/*!****************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/csp_test.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const csp_1 = __webpack_require__(/*! ./csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
const parser_1 = __webpack_require__(/*! ./parser */ "./src/third_party/csp_evaluator/package/dist/parser.js");
describe('Test Csp', () => {
    it('ConvertToString', () => {
        const testCsp = 'default-src \'none\'; ' +
            'script-src \'nonce-unsafefoobar\' \'unsafe-eval\' \'unsafe-inline\' ' +
            'https://example.com/foo.js foo.bar; ' +
            'img-src \'self\' https: data: blob:; ';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.convertToString()).toBe(testCsp);
    });
    it('GetEffectiveCspVersion1', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(csp_1.Version.CSP1);
        expect(effectiveCsp.directives[csp_1.Directive.DEFAULT_SRC]).toEqual([
            '\'unsafe-inline\'', '\'self\''
        ]);
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.REPORT_TO)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.WORKER_SRC)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.MANIFEST_SRC)).toBeFalse();
    });
    it('GetEffectiveCspVersion2', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(csp_1.Version.CSP2);
        expect(effectiveCsp.directives[csp_1.Directive.DEFAULT_SRC]).toEqual([
            '\'nonce-123\'', '\'sha256-foobar\'', '\'self\''
        ]);
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.REPORT_TO)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.WORKER_SRC)).toBeFalse();
        expect(effectiveCsp.hasOwnProperty(csp_1.Directive.MANIFEST_SRC)).toBeFalse();
    });
    it('GetEffectiveCspVersion3', () => {
        const testCsp = 'default-src \'unsafe-inline\' \'strict-dynamic\' \'nonce-123\' ' +
            '\'sha256-foobar\' \'self\'; report-to foo.bar; worker-src *; manifest-src *';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        const effectiveCsp = parsed.getEffectiveCsp(csp_1.Version.CSP3);
        expect(effectiveCsp.directives[csp_1.Directive.DEFAULT_SRC]).toEqual([
            '\'strict-dynamic\'', '\'nonce-123\'', '\'sha256-foobar\''
        ]);
        expect(effectiveCsp.directives[csp_1.Directive.REPORT_TO]).toEqual(['foo.bar']);
        expect(effectiveCsp.directives[csp_1.Directive.WORKER_SRC]).toEqual(['*']);
        expect(effectiveCsp.directives[csp_1.Directive.MANIFEST_SRC]).toEqual(['*']);
    });
    it('GetEffectiveDirective', () => {
        const testCsp = 'default-src https:; script-src foo.bar';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        const script = parsed.getEffectiveDirective(csp_1.Directive.SCRIPT_SRC);
        expect(script).toBe(csp_1.Directive.SCRIPT_SRC);
        const style = parsed.getEffectiveDirective(csp_1.Directive.STYLE_SRC);
        expect(style).toBe(csp_1.Directive.DEFAULT_SRC);
    });
    it('GetEffectiveDirectives', () => {
        const testCsp = 'default-src https:; script-src foo.bar';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        const directives = parsed.getEffectiveDirectives([csp_1.Directive.SCRIPT_SRC, csp_1.Directive.STYLE_SRC]);
        expect(directives).toEqual([csp_1.Directive.SCRIPT_SRC, csp_1.Directive.DEFAULT_SRC]);
    });
    it('PolicyHasScriptNoncesScriptSrcWithNonce', () => {
        const testCsp = 'default-src https:; script-src \'nonce-test123\'';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasScriptNonces()).toBeTrue();
    });
    it('PolicyHasScriptNoncesNoNonce', () => {
        const testCsp = 'default-src https: \'nonce-ignored\'; script-src nonce-invalid';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasScriptNonces()).toBeFalse();
    });
    it('PolicyHasScriptHashesScriptSrcWithHash', () => {
        const testCsp = 'default-src https:; script-src \'sha256-asdfASDF\'';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasScriptHashes()).toBeTrue();
    });
    it('PolicyHasScriptHashesNoHash', () => {
        const testCsp = 'default-src https: \'nonce-ignored\'; script-src sha256-invalid';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasScriptHashes()).toBeFalse();
    });
    it('PolicyHasStrictDynamicScriptSrcWithStrictDynamic', () => {
        const testCsp = 'default-src https:; script-src \'strict-dynamic\'';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeTrue();
    });
    it('PolicyHasStrictDynamicDefaultSrcWithStrictDynamic', () => {
        const testCsp = 'default-src https \'strict-dynamic\'';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeTrue();
    });
    it('PolicyHasStrictDynamicNoStrictDynamic', () => {
        const testCsp = 'default-src \'strict-dynamic\'; script-src foo.bar';
        const parsed = (new parser_1.CspParser(testCsp)).csp;
        expect(parsed.policyHasStrictDynamic()).toBeFalse();
    });
    it('IsDirective', () => {
        const directives = Object.keys(csp_1.Directive).map((name) => csp_1.Directive[name]);
        expect(directives.every(csp_1.isDirective)).toBeTrue();
        expect(csp_1.isDirective('invalid-src')).toBeFalse();
    });
    it('IsKeyword', () => {
        const keywords = Object.keys(csp_1.Keyword).map((name) => (csp_1.Keyword[name]));
        expect(keywords.every(csp_1.isKeyword)).toBeTrue();
        expect(csp_1.isKeyword('invalid')).toBeFalse();
    });
    it('IsUrlScheme', () => {
        expect(csp_1.isUrlScheme('http:')).toBeTrue();
        expect(csp_1.isUrlScheme('https:')).toBeTrue();
        expect(csp_1.isUrlScheme('data:')).toBeTrue();
        expect(csp_1.isUrlScheme('blob:')).toBeTrue();
        expect(csp_1.isUrlScheme('b+l.o-b:')).toBeTrue();
        expect(csp_1.isUrlScheme('filesystem:')).toBeTrue();
        expect(csp_1.isUrlScheme('invalid')).toBeFalse();
        expect(csp_1.isUrlScheme('ht_tp:')).toBeFalse();
    });
    it('IsNonce', () => {
        expect(csp_1.isNonce('\'nonce-asdfASDF=\'')).toBeTrue();
        expect(csp_1.isNonce('\'sha256-asdfASDF=\'')).toBeFalse();
        expect(csp_1.isNonce('\'asdfASDF=\'')).toBeFalse();
        expect(csp_1.isNonce('example.com')).toBeFalse();
    });
    it('IsStrictNonce', () => {
        expect(csp_1.isNonce('\'nonce-asdfASDF=\'', true)).toBeTrue();
        expect(csp_1.isNonce('\'nonce-as+df/A0234SDF==\'', true)).toBeTrue();
        expect(csp_1.isNonce('\'nonce-as_dfASDF=\'', true)).toBeTrue();
        expect(csp_1.isNonce('\'nonce-asdfASDF===\'', true)).toBeFalse();
        expect(csp_1.isNonce('\'sha256-asdfASDF=\'', true)).toBeFalse();
    });
    it('IsHash', () => {
        expect(csp_1.isHash('\'sha256-asdfASDF=\'')).toBeTrue();
        expect(csp_1.isHash('\'sha777-asdfASDF=\'')).toBeFalse();
        expect(csp_1.isHash('\'asdfASDF=\'')).toBeFalse();
        expect(csp_1.isHash('example.com')).toBeFalse();
    });
    it('IsStrictHash', () => {
        expect(csp_1.isHash('\'sha256-asdfASDF=\'', true)).toBeTrue();
        expect(csp_1.isHash('\'sha256-as+d/f/ASD0+4F==\'', true)).toBeTrue();
        expect(csp_1.isHash('\'sha256-asdfASDF===\'', true)).toBeFalse();
        expect(csp_1.isHash('\'sha256-asd_fASDF=\'', true)).toBeFalse();
        expect(csp_1.isHash('\'sha777-asdfASDF=\'', true)).toBeFalse();
        expect(csp_1.isHash('\'asdfASDF=\'', true)).toBeFalse();
        expect(csp_1.isHash('example.com', true)).toBeFalse();
    });
});
//# sourceMappingURL=csp_test.js.map

/***/ }),

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

/***/ })

}]);