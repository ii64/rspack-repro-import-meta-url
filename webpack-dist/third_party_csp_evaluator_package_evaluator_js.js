"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_csp_evaluator_package_evaluator_js"],{

/***/ "./third_party/csp_evaluator/package/checks/parser_checks.js":
/*!*******************************************************************!*\
  !*** ./third_party/csp_evaluator/package/checks/parser_checks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInvalidKeyword: () => (/* binding */ checkInvalidKeyword),
/* harmony export */   checkMissingSemicolon: () => (/* binding */ checkMissingSemicolon),
/* harmony export */   checkUnknownDirective: () => (/* binding */ checkUnknownDirective)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csp.js */ "./third_party/csp_evaluator/package/csp.js");
/* harmony import */ var _finding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finding.js */ "./third_party/csp_evaluator/package/finding.js");
/**
 * @fileoverview Collection of CSP parser checks which can be used to find
 * common syntax mistakes like missing semicolons, invalid directives or
 * invalid keywords.
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



/**
 * Checks if the csp contains invalid directives.
 *
 * Example policy where this check would trigger:
 *  foobar-src foo.bar
 *
 * @param parsedCsp A parsed csp.
 */
function checkUnknownDirective(parsedCsp) {
    const findings = [];
    for (const directive of Object.keys(parsedCsp.directives)) {
        if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directive)) {
            // Directive is known.
            continue;
        }
        if (directive.endsWith(':')) {
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'CSP directives don\'t end with a colon.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
        }
        else {
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'Directive "' + directive + '" is not a known CSP directive.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
        }
    }
    return findings;
}
/**
 * Checks if semicolons are missing in the csp.
 *
 * Example policy where this check would trigger (missing semicolon before
 * start of object-src):
 *  script-src foo.bar object-src 'none'
 *
 * @param parsedCsp A parsed csp.
 */
function checkMissingSemicolon(parsedCsp) {
    const findings = [];
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            // If we find a known directive inside a directive value, it is very
            // likely that a semicolon was forgoten.
            if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(value)) {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.MISSING_SEMICOLON, 'Did you forget the semicolon? ' +
                    '"' + value + '" seems to be a directive, not a value.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
            }
        }
    }
    return findings;
}
/**
 * Checks if csp contains invalid keywords.
 *
 * Example policy where this check would trigger:
 *  script-src 'notAkeyword'
 *
 * @param parsedCsp A parsed csp.
 */
function checkInvalidKeyword(parsedCsp) {
    const findings = [];
    const keywordsNoTicks = Object.values(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword).map((k) => k.replace(/'/g, ''));
    for (const [directive, directiveValues] of Object.entries(parsedCsp.directives)) {
        if (directiveValues === undefined) {
            continue;
        }
        for (const value of directiveValues) {
            // Check if single ticks have been forgotten.
            if (keywordsNoTicks.some((k) => k === value) ||
                value.startsWith('nonce-') ||
                value.match(/^(sha256|sha384|sha512)-/)) {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, 'Did you forget to surround "' + value + '" with single-ticks?', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
                continue;
            }
            // Continue, if the value doesn't start with single tick.
            // All CSP keywords start with a single tick.
            if (!value.startsWith('\'')) {
                continue;
            }
            if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR) {
                // Continue, if it's an allowed Trusted Types sink.
                if (value === _csp_js__WEBPACK_IMPORTED_MODULE_0__.TrustedTypesSink.SCRIPT) {
                    continue;
                }
            }
            else if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.TRUSTED_TYPES) {
                // Continue, if it's an allowed Trusted Types keyword.
                if (value === '\'allow-duplicates\'' || value === '\'none\'') {
                    continue;
                }
            }
            else {
                // Continue, if it's a valid keyword.
                if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isHash(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isNonce(value)) {
                    continue;
                }
            }
            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, value + ' seems to be an invalid CSP keyword.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
        }
    }
    return findings;
}
//# sourceMappingURL=parser_checks.js.map

/***/ }),

/***/ "./third_party/csp_evaluator/package/checks/strictcsp_checks.js":
/*!**********************************************************************!*\
  !*** ./third_party/csp_evaluator/package/checks/strictcsp_checks.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAllowlistFallback: () => (/* binding */ checkAllowlistFallback),
/* harmony export */   checkRequiresTrustedTypesForScripts: () => (/* binding */ checkRequiresTrustedTypesForScripts),
/* harmony export */   checkStrictDynamic: () => (/* binding */ checkStrictDynamic),
/* harmony export */   checkStrictDynamicNotStandalone: () => (/* binding */ checkStrictDynamicNotStandalone),
/* harmony export */   checkUnsafeInlineFallback: () => (/* binding */ checkUnsafeInlineFallback)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csp.js */ "./third_party/csp_evaluator/package/csp.js");
/* harmony import */ var _finding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finding.js */ "./third_party/csp_evaluator/package/finding.js");
/**
 * @fileoverview Collection of "strict" CSP and backward compatibility checks.
 * A "strict" CSP is based on nonces or hashes and drops the allowlist.
 * These checks ensure that 'strict-dynamic' and a CSP nonce/hash are present.
 * Due to 'strict-dynamic' any allowlist will get dropped in CSP3.
 * The backward compatibility checks ensure that the strict nonce/hash based CSP
 * will be a no-op in older browsers by checking for presence of 'unsafe-inline'
 * (will be dropped in newer browsers if a nonce or hash is present) and for
 * prsensence of http: and https: url schemes (will be droped in the presence of
 * 'strict-dynamic' in newer browsers).
 *
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



/**
 * Checks if 'strict-dynamic' is present.
 *
 * Example policy where this check would trigger:
 *  script-src foo.bar
 *
 * @param parsedCsp A parsed csp.
 */
function checkStrictDynamic(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    const schemeOrHostPresent = values.some((v) => !v.startsWith('\''));
    // Check if strict-dynamic is present in case a host/scheme allowlist is used.
    if (schemeOrHostPresent && !values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC)) {
        return [new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.STRICT_DYNAMIC, 'Host allowlists can frequently be bypassed. Consider using ' +
                '\'strict-dynamic\' in combination with CSP nonces or hashes.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
/**
 * Checks if 'strict-dynamic' is only used together with a nonce or a hash.
 *
 * Example policy where this check would trigger:
 *  script-src 'strict-dynamic'
 *
 * @param parsedCsp A parsed csp.
 */
function checkStrictDynamicNotStandalone(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC) &&
        (!parsedCsp.policyHasScriptNonces() &&
            !parsedCsp.policyHasScriptHashes())) {
        return [new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.STRICT_DYNAMIC_NOT_STANDALONE, '\'strict-dynamic\' without a CSP nonce/hash will block all scripts.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.INFO, directiveName)];
    }
    return [];
}
/**
 * Checks if the policy has 'unsafe-inline' when a nonce or hash are present.
 * This will ensure backward compatibility to browser that don't support
 * CSP nonces or hasehs.
 *
 * Example policy where this check would trigger:
 *  script-src 'nonce-test'
 *
 * @param parsedCsp A parsed csp.
 */
function checkUnsafeInlineFallback(parsedCsp) {
    if (!parsedCsp.policyHasScriptNonces() &&
        !parsedCsp.policyHasScriptHashes()) {
        return [];
    }
    const directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.UNSAFE_INLINE)) {
        return [new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNSAFE_INLINE_FALLBACK, 'Consider adding \'unsafe-inline\' (ignored by browsers supporting ' +
                'nonces/hashes) to be backward compatible with older browsers.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
/**
 * Checks if the policy has an allowlist fallback (* or http: and https:) when
 * 'strict-dynamic' is present.
 * This will ensure backward compatibility to browser that don't support
 * 'strict-dynamic'.
 *
 * Example policy where this check would trigger:
 *  script-src 'nonce-test' 'strict-dynamic'
 *
 * @param parsedCsp A parsed csp.
 */
function checkAllowlistFallback(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC)) {
        return [];
    }
    // Check if there's already an allowlist (url scheme or url)
    if (!values.some((v) => ['http:', 'https:', '*'].includes(v) || v.includes('.'))) {
        return [new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.ALLOWLIST_FALLBACK, 'Consider adding https: and http: url schemes (ignored by browsers ' +
                'supporting \'strict-dynamic\') to be backward compatible with older ' +
                'browsers.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)];
    }
    return [];
}
/**
 * Checks if the policy requires Trusted Types for scripts.
 *
 * I.e. the policy should have the following dirctive:
 *  require-trusted-types-for 'script'
 *
 * @param parsedCsp A parsed csp.
 */
function checkRequiresTrustedTypesForScripts(parsedCsp) {
    const directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR);
    const values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.TrustedTypesSink.SCRIPT)) {
        return [new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS, 'Consider requiring Trusted Types for scripts to lock down DOM XSS ' +
                'injection sinks. You can do this by adding ' +
                '"require-trusted-types-for \'script\'" to your policy.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.INFO, _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR)];
    }
    return [];
}
//# sourceMappingURL=strictcsp_checks.js.map

/***/ }),

/***/ "./third_party/csp_evaluator/package/evaluator.js":
/*!********************************************************!*\
  !*** ./third_party/csp_evaluator/package/evaluator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspEvaluator: () => (/* binding */ CspEvaluator),
/* harmony export */   DEFAULT_CHECKS: () => (/* binding */ DEFAULT_CHECKS),
/* harmony export */   STRICTCSP_CHECKS: () => (/* binding */ STRICTCSP_CHECKS)
/* harmony export */ });
/* harmony import */ var _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks/parser_checks.js */ "./third_party/csp_evaluator/package/checks/parser_checks.js");
/* harmony import */ var _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks/security_checks.js */ "./third_party/csp_evaluator/package/checks/security_checks.js");
/* harmony import */ var _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checks/strictcsp_checks.js */ "./third_party/csp_evaluator/package/checks/strictcsp_checks.js");
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csp.js */ "./third_party/csp_evaluator/package/csp.js");
/**
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




/**
 * A class to hold a CSP Evaluator.
 * Evaluates a parsed CSP and reports security findings.
 * @unrestricted
 */
class CspEvaluator {
    version;
    csp;
    /**
     * List of findings reported by checks.
     *
     */
    findings = [];
    /**
     * @param parsedCsp A parsed Content Security Policy.
     * @param cspVersion CSP version to apply checks for.
     */
    constructor(parsedCsp, cspVersion) {
        /**
         * CSP version.
         */
        this.version = cspVersion || _csp_js__WEBPACK_IMPORTED_MODULE_3__.Version.CSP3;
        /**
         * Parsed CSP.
         */
        this.csp = parsedCsp;
    }
    /**
     * Evaluates a parsed CSP against a set of checks
     * @param parsedCspChecks list of checks to run on the parsed CSP (i.e.
     *     checks like backward compatibility checks, which are independent of the
     *     actual CSP version).
     * @param effectiveCspChecks list of checks to run on the effective CSP.
     * @return List of Findings.
     * @export
     */
    evaluate(parsedCspChecks, effectiveCspChecks) {
        this.findings = [];
        const checks = effectiveCspChecks || DEFAULT_CHECKS;
        // We're applying checks on the policy as it would be seen by a browser
        // supporting a specific version of CSP.
        // For example a browser supporting only CSP1 will ignore nonces and
        // therefore 'unsafe-inline' would not get ignored if a policy has nonces.
        const effectiveCsp = this.csp.getEffectiveCsp(this.version, this.findings);
        // Checks independent of CSP version.
        if (parsedCspChecks) {
            for (const check of parsedCspChecks) {
                this.findings = this.findings.concat(check(this.csp));
            }
        }
        // Checks depenent on CSP version.
        for (const check of checks) {
            this.findings = this.findings.concat(check(effectiveCsp));
        }
        return this.findings;
    }
}
/**
 * Set of default checks to run.
 */
const DEFAULT_CHECKS = [
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptUnsafeInline, _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptUnsafeEval,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkPlainUrlSchemes, _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkWildcards,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkMissingDirectives,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptAllowlistBypass,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkFlashObjectAllowlistBypass, _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkIpSource,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkNonceLength, _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkSrcHttp,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkDeprecatedDirective, _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkUnknownDirective,
    _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkMissingSemicolon, _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkInvalidKeyword
];
/**
 * Strict CSP and backward compatibility checks.
 */
const STRICTCSP_CHECKS = [
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkStrictDynamic,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkStrictDynamicNotStandalone,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkUnsafeInlineFallback,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkAllowlistFallback,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkRequiresTrustedTypesForScripts
];
//# sourceMappingURL=evaluator.js.map

/***/ })

}]);