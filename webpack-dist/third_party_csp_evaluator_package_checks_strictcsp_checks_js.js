"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_csp_evaluator_package_checks_strictcsp_checks_js"],{

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

/***/ })

}]);