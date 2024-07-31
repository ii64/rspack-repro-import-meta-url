"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_lighthouse_lighthouse_checks_js"],{

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

/***/ "./src/third_party/csp_evaluator/package/dist/lighthouse/lighthouse_checks.js":
/*!************************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/lighthouse/lighthouse_checks.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.evaluateForSyntaxErrors = exports.evaluateForWarnings = exports.evaluateForFailure = void 0;
const parser_checks_1 = __webpack_require__(/*! ../checks/parser_checks */ "./src/third_party/csp_evaluator/package/dist/checks/parser_checks.js");
const security_checks_1 = __webpack_require__(/*! ../checks/security_checks */ "./src/third_party/csp_evaluator/package/dist/checks/security_checks.js");
const strictcsp_checks_1 = __webpack_require__(/*! ../checks/strictcsp_checks */ "./src/third_party/csp_evaluator/package/dist/checks/strictcsp_checks.js");
const csp_1 = __webpack_require__(/*! ../csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
function arrayContains(arr, elem) {
    return arr.some(e => e.equals(elem));
}
function setIntersection(sets) {
    const intersection = [];
    if (sets.length === 0) {
        return intersection;
    }
    const firstSet = sets[0];
    for (const elem of firstSet) {
        if (sets.every(set => arrayContains(set, elem))) {
            intersection.push(elem);
        }
    }
    return intersection;
}
function setUnion(sets) {
    const union = [];
    for (const set of sets) {
        for (const elem of set) {
            if (!arrayContains(union, elem)) {
                union.push(elem);
            }
        }
    }
    return union;
}
function atLeastOnePasses(parsedCsps, checker) {
    const findings = [];
    for (const parsedCsp of parsedCsps) {
        findings.push(checker(parsedCsp));
    }
    return setIntersection(findings);
}
function atLeastOneFails(parsedCsps, checker) {
    const findings = [];
    for (const parsedCsp of parsedCsps) {
        findings.push(checker(parsedCsp));
    }
    return setUnion(findings);
}
function evaluateForFailure(parsedCsps) {
    const targetsXssFindings = [
        ...atLeastOnePasses(parsedCsps, security_checks_1.checkMissingScriptSrcDirective),
        ...atLeastOnePasses(parsedCsps, security_checks_1.checkMissingObjectSrcDirective),
        ...security_checks_1.checkMultipleMissingBaseUriDirective(parsedCsps),
    ];
    const effectiveCsps = parsedCsps.map(csp => csp.getEffectiveCsp(csp_1.Version.CSP3));
    const effectiveCspsWithScript = effectiveCsps.filter(csp => {
        const directiveName = csp.getEffectiveDirective(csp_1.Directive.SCRIPT_SRC);
        return csp.directives[directiveName];
    });
    const robust = [
        ...atLeastOnePasses(effectiveCspsWithScript, strictcsp_checks_1.checkStrictDynamic),
        ...atLeastOnePasses(effectiveCspsWithScript, security_checks_1.checkScriptUnsafeInline),
        ...atLeastOnePasses(effectiveCsps, security_checks_1.checkWildcards),
        ...atLeastOnePasses(effectiveCsps, security_checks_1.checkPlainUrlSchemes),
    ];
    return [...targetsXssFindings, ...robust];
}
exports.evaluateForFailure = evaluateForFailure;
function evaluateForWarnings(parsedCsps) {
    return [
        ...atLeastOneFails(parsedCsps, strictcsp_checks_1.checkUnsafeInlineFallback),
        ...atLeastOneFails(parsedCsps, strictcsp_checks_1.checkAllowlistFallback)
    ];
}
exports.evaluateForWarnings = evaluateForWarnings;
function evaluateForSyntaxErrors(parsedCsps) {
    const allFindings = [];
    for (const csp of parsedCsps) {
        const findings = [
            ...security_checks_1.checkNonceLength(csp), ...parser_checks_1.checkUnknownDirective(csp),
            ...security_checks_1.checkDeprecatedDirective(csp), ...parser_checks_1.checkMissingSemicolon(csp),
            ...parser_checks_1.checkInvalidKeyword(csp)
        ];
        allFindings.push(findings);
    }
    return allFindings;
}
exports.evaluateForSyntaxErrors = evaluateForSyntaxErrors;
//# sourceMappingURL=lighthouse_checks.js.map

/***/ })

}]);