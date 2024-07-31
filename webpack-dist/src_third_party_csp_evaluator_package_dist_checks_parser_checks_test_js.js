"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_checks_parser_checks_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/checks/parser_checks.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/checks/parser_checks.js ***!
  \****************************************************************************/
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
exports.checkInvalidKeyword = exports.checkMissingSemicolon = exports.checkUnknownDirective = void 0;
const csp = __importStar(__webpack_require__(/*! ../csp */ "./src/third_party/csp_evaluator/package/dist/csp.js"));
const csp_1 = __webpack_require__(/*! ../csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
const finding_1 = __webpack_require__(/*! ../finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
function checkUnknownDirective(parsedCsp) {
    const findings = [];
    for (const directive of Object.keys(parsedCsp.directives)) {
        if (csp.isDirective(directive)) {
            continue;
        }
        if (directive.endsWith(':')) {
            findings.push(new finding_1.Finding(finding_1.Type.UNKNOWN_DIRECTIVE, 'CSP directives don\'t end with a colon.', finding_1.Severity.SYNTAX, directive));
        }
        else {
            findings.push(new finding_1.Finding(finding_1.Type.UNKNOWN_DIRECTIVE, 'Directive "' + directive + '" is not a known CSP directive.', finding_1.Severity.SYNTAX, directive));
        }
    }
    return findings;
}
exports.checkUnknownDirective = checkUnknownDirective;
function checkMissingSemicolon(parsedCsp) {
    const findings = [];
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            if (csp.isDirective(value)) {
                findings.push(new finding_1.Finding(finding_1.Type.MISSING_SEMICOLON, 'Did you forget the semicolon? ' +
                    '"' + value + '" seems to be a directive, not a value.', finding_1.Severity.SYNTAX, directive, value));
            }
        }
    }
    return findings;
}
exports.checkMissingSemicolon = checkMissingSemicolon;
function checkInvalidKeyword(parsedCsp) {
    const findings = [];
    const keywordsNoTicks = Object.values(csp_1.Keyword).map((k) => k.replace(/'/g, ''));
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            if (keywordsNoTicks.some((k) => k === value) ||
                value.startsWith('nonce-') ||
                value.match(/^(sha256|sha384|sha512)-/)) {
                findings.push(new finding_1.Finding(finding_1.Type.INVALID_KEYWORD, 'Did you forget to surround "' + value + '" with single-ticks?', finding_1.Severity.SYNTAX, directive, value));
                continue;
            }
            if (!value.startsWith('\'')) {
                continue;
            }
            if (directive === csp.Directive.REQUIRE_TRUSTED_TYPES_FOR) {
                if (value === csp.TrustedTypesSink.SCRIPT) {
                    continue;
                }
            }
            else if (directive === csp.Directive.TRUSTED_TYPES) {
                if (value === '\'allow-duplicates\'' || value === '\'none\'') {
                    continue;
                }
            }
            else {
                if (csp.isKeyword(value) || csp.isHash(value) || csp.isNonce(value)) {
                    continue;
                }
            }
            findings.push(new finding_1.Finding(finding_1.Type.INVALID_KEYWORD, value + ' seems to be an invalid CSP keyword.', finding_1.Severity.SYNTAX, directive, value));
        }
    }
    return findings;
}
exports.checkInvalidKeyword = checkInvalidKeyword;
//# sourceMappingURL=parser_checks.js.map

/***/ }),

/***/ "./src/third_party/csp_evaluator/package/dist/checks/parser_checks_test.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/checks/parser_checks_test.js ***!
  \*********************************************************************************/
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
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const finding_1 = __webpack_require__(/*! ../finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
const parser_1 = __webpack_require__(/*! ../parser */ "./src/third_party/csp_evaluator/package/dist/parser.js");
const parserChecks = __importStar(__webpack_require__(/*! ./parser_checks */ "./src/third_party/csp_evaluator/package/dist/checks/parser_checks.js"));
function checkCsp(test, checkFunction) {
    const parsedCsp = (new parser_1.CspParser(test)).csp;
    return checkFunction(parsedCsp);
}
describe('Test parser checks', () => {
    it('CheckUnknownDirective', () => {
        const test = 'foobar-src http:';
        const violations = checkCsp(test, parserChecks.checkUnknownDirective);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.SYNTAX);
        expect(violations[0].directive).toBe('foobar-src');
    });
    it('CheckMissingSemicolon', () => {
        const test = 'default-src foo.bar script-src \'none\'';
        const violations = checkCsp(test, parserChecks.checkMissingSemicolon);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.SYNTAX);
        expect(violations[0].value).toBe('script-src');
    });
    it('CheckInvalidKeywordForgottenSingleTicks', () => {
        const test = 'script-src strict-dynamic nonce-test sha256-asdf';
        const violations = checkCsp(test, parserChecks.checkInvalidKeyword);
        expect(violations.length).toBe(3);
        expect(violations.every((v) => v.severity === finding_1.Severity.SYNTAX)).toBeTrue();
        expect(violations.every((v) => v.description.includes('single-ticks')))
            .toBeTrue();
    });
    it('CheckInvalidKeywordUnknownKeyword', () => {
        const test = 'script-src \'foo-bar\'';
        const violations = checkCsp(test, parserChecks.checkInvalidKeyword);
        expect(violations.length).toBe(1);
        expect(violations[0].severity).toBe(finding_1.Severity.SYNTAX);
        expect(violations[0].value).toBe('\'foo-bar\'');
    });
    it('CheckInvalidKeywordAllowsRequireTrustedTypesForScript', () => {
        const test = 'require-trusted-types-for \'script\'';
        const violations = checkCsp(test, parserChecks.checkInvalidKeyword);
        expect(violations.length).toBe(0);
    });
    it('CheckInvalidKeywordAllowsTrustedTypesAllowDuplicateKeyword', () => {
        const test = 'trusted-types \'allow-duplicates\' policy1';
        const violations = checkCsp(test, parserChecks.checkInvalidKeyword);
        expect(violations.length).toBe(0);
    });
});
//# sourceMappingURL=parser_checks_test.js.map

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