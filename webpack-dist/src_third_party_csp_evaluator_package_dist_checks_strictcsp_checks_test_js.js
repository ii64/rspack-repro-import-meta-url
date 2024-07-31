"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_checks_strictcsp_checks_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks.js ***!
  \*******************************************************************************/
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
exports.checkRequiresTrustedTypesForScripts = exports.checkAllowlistFallback = exports.checkUnsafeInlineFallback = exports.checkStrictDynamicNotStandalone = exports.checkStrictDynamic = void 0;
const csp = __importStar(__webpack_require__(/*! ../csp */ "./src/third_party/csp_evaluator/package/dist/csp.js"));
const csp_1 = __webpack_require__(/*! ../csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
const finding_1 = __webpack_require__(/*! ../finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
function checkStrictDynamic(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(csp.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    const schemeOrHostPresent = values.some((v) => !v.startsWith('\''));
    if (schemeOrHostPresent && !values.includes(csp_1.Keyword.STRICT_DYNAMIC)) {
        return [new finding_1.Finding(finding_1.Type.STRICT_DYNAMIC, 'Host allowlists can frequently be bypassed. Consider using ' +
                '\'strict-dynamic\' in combination with CSP nonces or hashes.', finding_1.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
exports.checkStrictDynamic = checkStrictDynamic;
function checkStrictDynamicNotStandalone(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(csp.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (values.includes(csp_1.Keyword.STRICT_DYNAMIC) &&
        (!parsedCsp.policyHasScriptNonces() &&
            !parsedCsp.policyHasScriptHashes())) {
        return [new finding_1.Finding(finding_1.Type.STRICT_DYNAMIC_NOT_STANDALONE, '\'strict-dynamic\' without a CSP nonce/hash will block all scripts.', finding_1.Severity.INFO, directiveName)];
    }
    return [];
}
exports.checkStrictDynamicNotStandalone = checkStrictDynamicNotStandalone;
function checkUnsafeInlineFallback(parsedCsp) {
    if (!parsedCsp.policyHasScriptNonces() &&
        !parsedCsp.policyHasScriptHashes()) {
        return [];
    }
    const directiveName = parsedCsp.getEffectiveDirective(csp.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(csp_1.Keyword.UNSAFE_INLINE)) {
        return [new finding_1.Finding(finding_1.Type.UNSAFE_INLINE_FALLBACK, 'Consider adding \'unsafe-inline\' (ignored by browsers supporting ' +
                'nonces/hashes) to be backward compatible with older browsers.', finding_1.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
exports.checkUnsafeInlineFallback = checkUnsafeInlineFallback;
function checkAllowlistFallback(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(csp.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(csp_1.Keyword.STRICT_DYNAMIC)) {
        return [];
    }
    if (!values.some((v) => ['http:', 'https:', '*'].includes(v) || v.includes('.'))) {
        return [new finding_1.Finding(finding_1.Type.ALLOWLIST_FALLBACK, 'Consider adding https: and http: url schemes (ignored by browsers ' +
                'supporting \'strict-dynamic\') to be backward compatible with older ' +
                'browsers.', finding_1.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
exports.checkAllowlistFallback = checkAllowlistFallback;
function checkRequiresTrustedTypesForScripts(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(csp.Directive.REQUIRE_TRUSTED_TYPES_FOR);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(csp.TrustedTypesSink.SCRIPT)) {
        return [new finding_1.Finding(finding_1.Type.REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS, 'Consider requiring Trusted Types for scripts to lock down DOM XSS ' +
                'injection sinks. You can do this by adding ' +
                '"require-trusted-types-for \'script\'" to your policy.', finding_1.Severity.INFO, csp.Directive.REQUIRE_TRUSTED_TYPES_FOR)];
    }
    return [];
}
exports.checkRequiresTrustedTypesForScripts = checkRequiresTrustedTypesForScripts;
//# sourceMappingURL=strictcsp_checks.js.map

/***/ }),

/***/ "./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks_test.js":
/*!************************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks_test.js ***!
  \************************************************************************************/
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
const finding_1 = __webpack_require__(/*! ../finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
const parser_1 = __webpack_require__(/*! ../parser */ "./src/third_party/csp_evaluator/package/dist/parser.js");
const strictcspChecks = __importStar(__webpack_require__(/*! ./strictcsp_checks */ "./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks.js"));
function checkCsp(test, checkFunction) {
    const parsedCsp = (new parser_1.CspParser(test)).csp;
    return checkFunction(parsedCsp);
}
describe('Test strictcsp checks', () => {
    it('CheckStrictDynamic', () => {
        const test = 'script-src foo.bar';
        const violations = checkCsp(test, strictcspChecks.checkStrictDynamic);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.STRICT_CSP);
    });
    it('CheckStrictDynamicNotStandalone', () => {
        const test = 'script-src \'strict-dynamic\'';
        const violations = checkCsp(test, strictcspChecks.checkStrictDynamicNotStandalone);
        expect(violations[0].severity).toBe(finding_1.Severity.INFO);
    });
    it('CheckStrictDynamicNotStandaloneDoesntFireIfNoncePresent', () => {
        const test = 'script-src \'strict-dynamic\' \'nonce-foobar\'';
        const violations = checkCsp(test, strictcspChecks.checkStrictDynamicNotStandalone);
        expect(violations.length).toBe(0);
    });
    it('CheckUnsafeInlineFallback', () => {
        const test = 'script-src \'nonce-test\'';
        const violations = checkCsp(test, strictcspChecks.checkUnsafeInlineFallback);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.STRICT_CSP);
    });
    it('CheckUnsafeInlineFallbackDoesntFireIfFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'unsafe-inline\'';
        const violations = checkCsp(test, strictcspChecks.checkUnsafeInlineFallback);
        expect(violations.length).toBe(0);
    });
    it('checkAllowlistFallback', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\'';
        const violations = checkCsp(test, strictcspChecks.checkAllowlistFallback);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.STRICT_CSP);
    });
    it('checkAllowlistFallbackDoesntFireIfSchemeFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\' https:';
        const violations = checkCsp(test, strictcspChecks.checkAllowlistFallback);
        expect(violations.length).toBe(0);
    });
    it('checkAllowlistFallbackDoesntFireIfURLFallbackPresent', () => {
        const test = 'script-src \'nonce-test\' \'strict-dynamic\' foo.bar';
        const violations = checkCsp(test, strictcspChecks.checkAllowlistFallback);
        expect(violations.length).toBe(0);
    });
    it('checkAllowlistFallbackDoesntFireInAbsenceOfStrictDynamic', () => {
        const test = 'script-src \'nonce-test\'';
        const violations = checkCsp(test, strictcspChecks.checkAllowlistFallback);
        expect(violations.length).toBe(0);
    });
});
//# sourceMappingURL=strictcsp_checks_test.js.map

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