"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_csp_evaluator_package_csp_js"],{

/***/ "./third_party/csp_evaluator/package/csp.js":
/*!**************************************************!*\
  !*** ./third_party/csp_evaluator/package/csp.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Csp: () => (/* binding */ Csp),
/* harmony export */   CspError: () => (/* binding */ CspError),
/* harmony export */   Directive: () => (/* binding */ Directive),
/* harmony export */   FETCH_DIRECTIVES: () => (/* binding */ FETCH_DIRECTIVES),
/* harmony export */   HASH_PATTERN: () => (/* binding */ HASH_PATTERN),
/* harmony export */   Keyword: () => (/* binding */ Keyword),
/* harmony export */   NONCE_PATTERN: () => (/* binding */ NONCE_PATTERN),
/* harmony export */   STRICT_HASH_PATTERN: () => (/* binding */ STRICT_HASH_PATTERN),
/* harmony export */   STRICT_NONCE_PATTERN: () => (/* binding */ STRICT_NONCE_PATTERN),
/* harmony export */   TrustedTypesSink: () => (/* binding */ TrustedTypesSink),
/* harmony export */   Version: () => (/* binding */ Version),
/* harmony export */   isDirective: () => (/* binding */ isDirective),
/* harmony export */   isHash: () => (/* binding */ isHash),
/* harmony export */   isKeyword: () => (/* binding */ isKeyword),
/* harmony export */   isNonce: () => (/* binding */ isNonce),
/* harmony export */   isUrlScheme: () => (/* binding */ isUrlScheme)
/* harmony export */ });
/* harmony import */ var _finding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finding.js */ "./third_party/csp_evaluator/package/finding.js");
/**
 * @fileoverview CSP definitions and helper functions.
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
 * Content Security Policy object.
 * List of valid CSP directives:
 *  - http://www.w3.org/TR/CSP2/#directives
 *  - https://www.w3.org/TR/upgrade-insecure-requests/
 */
class Csp {
    directives = {};
    /**
     * Clones a CSP object.
     * @return clone of parsedCsp.
     */
    clone() {
        const clone = new Csp();
        for (const [directive, directiveValues] of Object.entries(this.directives)) {
            if (directiveValues) {
                clone.directives[directive] = [...directiveValues];
            }
        }
        return clone;
    }
    /**
     * Converts this CSP back into a string.
     * @return CSP string.
     */
    convertToString() {
        let cspString = '';
        for (const [directive, directiveValues] of Object.entries(this.directives)) {
            cspString += directive;
            if (directiveValues !== undefined) {
                for (let value, i = 0; (value = directiveValues[i]); i++) {
                    cspString += ' ';
                    cspString += value;
                }
            }
            cspString += '; ';
        }
        return cspString;
    }
    /**
     * Returns CSP as it would be seen by a UA supporting a specific CSP version.
     * @param cspVersion CSP.
     * @param optFindings findings about ignored directive values will be added
     *     to this array, if passed. (e.g. CSP2 ignores 'unsafe-inline' in
     *     presence of a nonce or a hash)
     * @return The effective CSP.
     */
    getEffectiveCsp(cspVersion, optFindings) {
        const findings = optFindings || [];
        const effectiveCsp = this.clone();
        const directive = effectiveCsp.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directive] || [];
        const effectiveCspValues = effectiveCsp.directives[directive];
        if (effectiveCspValues &&
            (effectiveCsp.policyHasScriptNonces() ||
                effectiveCsp.policyHasScriptHashes())) {
            if (cspVersion >= Version.CSP2) {
                // Ignore 'unsafe-inline' in CSP >= v2, if a nonce or a hash is present.
                if (values.includes(Keyword.UNSAFE_INLINE)) {
                    arrayRemove(effectiveCspValues, Keyword.UNSAFE_INLINE);
                    findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_0__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_0__.Type.IGNORED, 'unsafe-inline is ignored if a nonce or a hash is present. ' +
                        '(CSP2 and above)', _finding_js__WEBPACK_IMPORTED_MODULE_0__.Severity.NONE, directive, Keyword.UNSAFE_INLINE));
                }
            }
            else {
                // remove nonces and hashes (not supported in CSP < v2).
                for (const value of values) {
                    if (value.startsWith('\'nonce-') || value.startsWith('\'sha')) {
                        arrayRemove(effectiveCspValues, value);
                    }
                }
            }
        }
        if (effectiveCspValues && this.policyHasStrictDynamic()) {
            // Ignore allowlist in CSP >= v3 in presence of 'strict-dynamic'.
            if (cspVersion >= Version.CSP3) {
                for (const value of values) {
                    // Because of 'strict-dynamic' all host-source and scheme-source
                    // expressions, as well as the "'unsafe-inline'" and "'self'
                    // keyword-sources will be ignored.
                    // https://w3c.github.io/webappsec-csp/#strict-dynamic-usage
                    if (!value.startsWith('\'') || value === Keyword.SELF ||
                        value === Keyword.UNSAFE_INLINE) {
                        arrayRemove(effectiveCspValues, value);
                        findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_0__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_0__.Type.IGNORED, 'Because of strict-dynamic this entry is ignored in CSP3 and above', _finding_js__WEBPACK_IMPORTED_MODULE_0__.Severity.NONE, directive, value));
                    }
                }
            }
            else {
                // strict-dynamic not supported.
                arrayRemove(effectiveCspValues, Keyword.STRICT_DYNAMIC);
            }
        }
        if (cspVersion < Version.CSP3) {
            // Remove CSP3 directives from pre-CSP3 policies.
            // https://w3c.github.io/webappsec-csp/#changes-from-level-2
            delete effectiveCsp.directives[Directive.REPORT_TO];
            delete effectiveCsp.directives[Directive.WORKER_SRC];
            delete effectiveCsp.directives[Directive.MANIFEST_SRC];
            delete effectiveCsp.directives[Directive.TRUSTED_TYPES];
            delete effectiveCsp.directives[Directive.REQUIRE_TRUSTED_TYPES_FOR];
        }
        return effectiveCsp;
    }
    /**
     * Returns default-src if directive is a fetch directive and is not present in
     * this CSP. Otherwise the provided directive is returned.
     * @param directive CSP.
     * @return The effective directive.
     */
    getEffectiveDirective(directive) {
        // Only fetch directives default to default-src.
        if (!(directive in this.directives) &&
            FETCH_DIRECTIVES.includes(directive)) {
            return Directive.DEFAULT_SRC;
        }
        return directive;
    }
    /**
     * Returns the passed directives if present in this CSP or default-src
     * otherwise.
     * @param directives CSP.
     * @return The effective directives.
     */
    getEffectiveDirectives(directives) {
        const effectiveDirectives = new Set(directives.map((val) => this.getEffectiveDirective(val)));
        return [...effectiveDirectives];
    }
    /**
     * Checks if this CSP is using nonces for scripts.
     * @return true, if this CSP is using script nonces.
     */
    policyHasScriptNonces() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.some((val) => isNonce(val));
    }
    /**
     * Checks if this CSP is using hashes for scripts.
     * @return true, if this CSP is using script hashes.
     */
    policyHasScriptHashes() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.some((val) => isHash(val));
    }
    /**
     * Checks if this CSP is using strict-dynamic.
     * @return true, if this CSP is using CSP nonces.
     */
    policyHasStrictDynamic() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.includes(Keyword.STRICT_DYNAMIC);
    }
}
/**
 * CSP directive source keywords.
 */
var Keyword;
(function (Keyword) {
    Keyword["SELF"] = "'self'";
    Keyword["NONE"] = "'none'";
    Keyword["UNSAFE_INLINE"] = "'unsafe-inline'";
    Keyword["UNSAFE_EVAL"] = "'unsafe-eval'";
    Keyword["WASM_EVAL"] = "'wasm-eval'";
    Keyword["WASM_UNSAFE_EVAL"] = "'wasm-unsafe-eval'";
    Keyword["STRICT_DYNAMIC"] = "'strict-dynamic'";
    Keyword["UNSAFE_HASHED_ATTRIBUTES"] = "'unsafe-hashed-attributes'";
    Keyword["UNSAFE_HASHES"] = "'unsafe-hashes'";
    Keyword["REPORT_SAMPLE"] = "'report-sample'";
    Keyword["BLOCK"] = "'block'";
    Keyword["ALLOW"] = "'allow'";
})(Keyword || (Keyword = {}));
/**
 * CSP directive source keywords.
 */
var TrustedTypesSink;
(function (TrustedTypesSink) {
    TrustedTypesSink["SCRIPT"] = "'script'";
})(TrustedTypesSink || (TrustedTypesSink = {}));
/**
 * CSP v3 directives.
 * List of valid CSP directives:
 *  - http://www.w3.org/TR/CSP2/#directives
 *  - https://www.w3.org/TR/upgrade-insecure-requests/
 *
 */
var Directive;
(function (Directive) {
    // Fetch directives
    Directive["CHILD_SRC"] = "child-src";
    Directive["CONNECT_SRC"] = "connect-src";
    Directive["DEFAULT_SRC"] = "default-src";
    Directive["FONT_SRC"] = "font-src";
    Directive["FRAME_SRC"] = "frame-src";
    Directive["IMG_SRC"] = "img-src";
    Directive["MEDIA_SRC"] = "media-src";
    Directive["OBJECT_SRC"] = "object-src";
    Directive["SCRIPT_SRC"] = "script-src";
    Directive["SCRIPT_SRC_ATTR"] = "script-src-attr";
    Directive["SCRIPT_SRC_ELEM"] = "script-src-elem";
    Directive["STYLE_SRC"] = "style-src";
    Directive["STYLE_SRC_ATTR"] = "style-src-attr";
    Directive["STYLE_SRC_ELEM"] = "style-src-elem";
    Directive["PREFETCH_SRC"] = "prefetch-src";
    Directive["MANIFEST_SRC"] = "manifest-src";
    Directive["WORKER_SRC"] = "worker-src";
    // Document directives
    Directive["BASE_URI"] = "base-uri";
    Directive["PLUGIN_TYPES"] = "plugin-types";
    Directive["SANDBOX"] = "sandbox";
    Directive["DISOWN_OPENER"] = "disown-opener";
    // Navigation directives
    Directive["FORM_ACTION"] = "form-action";
    Directive["FRAME_ANCESTORS"] = "frame-ancestors";
    Directive["NAVIGATE_TO"] = "navigate-to";
    // Reporting directives
    Directive["REPORT_TO"] = "report-to";
    Directive["REPORT_URI"] = "report-uri";
    // Other directives
    Directive["BLOCK_ALL_MIXED_CONTENT"] = "block-all-mixed-content";
    Directive["UPGRADE_INSECURE_REQUESTS"] = "upgrade-insecure-requests";
    Directive["REFLECTED_XSS"] = "reflected-xss";
    Directive["REFERRER"] = "referrer";
    Directive["REQUIRE_SRI_FOR"] = "require-sri-for";
    Directive["TRUSTED_TYPES"] = "trusted-types";
    // https://github.com/WICG/trusted-types
    Directive["REQUIRE_TRUSTED_TYPES_FOR"] = "require-trusted-types-for";
    Directive["WEBRTC"] = "webrtc";
})(Directive || (Directive = {}));
/**
 * CSP v3 fetch directives.
 * Fetch directives control the locations from which resources may be loaded.
 * https://w3c.github.io/webappsec-csp/#directives-fetch
 *
 */
const FETCH_DIRECTIVES = [
    Directive.CHILD_SRC, Directive.CONNECT_SRC, Directive.DEFAULT_SRC,
    Directive.FONT_SRC, Directive.FRAME_SRC, Directive.IMG_SRC,
    Directive.MANIFEST_SRC, Directive.MEDIA_SRC, Directive.OBJECT_SRC,
    Directive.SCRIPT_SRC, Directive.SCRIPT_SRC_ATTR, Directive.SCRIPT_SRC_ELEM,
    Directive.STYLE_SRC, Directive.STYLE_SRC_ATTR, Directive.STYLE_SRC_ELEM,
    Directive.WORKER_SRC
];
/**
 * CSP version.
 */
var Version;
(function (Version) {
    Version[Version["CSP1"] = 1] = "CSP1";
    Version[Version["CSP2"] = 2] = "CSP2";
    Version[Version["CSP3"] = 3] = "CSP3";
})(Version || (Version = {}));
/**
 * Checks if a string is a valid CSP directive.
 * @param directive value to check.
 * @return True if directive is a valid CSP directive.
 */
function isDirective(directive) {
    return Object.values(Directive).includes(directive);
}
/**
 * Checks if a string is a valid CSP keyword.
 * @param keyword value to check.
 * @return True if keyword is a valid CSP keyword.
 */
function isKeyword(keyword) {
    return Object.values(Keyword).includes(keyword);
}
/**
 * Checks if a string is a valid URL scheme.
 * Scheme part + ":"
 * For scheme part see https://tools.ietf.org/html/rfc3986#section-3.1
 * @param urlScheme value to check.
 * @return True if urlScheme has a valid scheme.
 */
function isUrlScheme(urlScheme) {
    const pattern = new RegExp('^[a-zA-Z][+a-zA-Z0-9.-]*:$');
    return pattern.test(urlScheme);
}
/**
 * A regex pattern to check nonce prefix and Base64 formatting of a nonce value.
 */
const STRICT_NONCE_PATTERN = new RegExp('^\'nonce-[a-zA-Z0-9+/_-]+[=]{0,2}\'$');
/** A regex pattern for checking if nonce prefix. */
const NONCE_PATTERN = new RegExp('^\'nonce-(.+)\'$');
/**
 * Checks if a string is a valid CSP nonce.
 * See http://www.w3.org/TR/CSP2/#nonce_value
 * @param nonce value to check.
 * @param strictCheck Check if the nonce uses the base64 charset.
 * @return True if nonce is has a valid CSP nonce.
 */
function isNonce(nonce, strictCheck) {
    const pattern = strictCheck ? STRICT_NONCE_PATTERN : NONCE_PATTERN;
    return pattern.test(nonce);
}
/**
 * A regex pattern to check hash prefix and Base64 formatting of a hash value.
 */
const STRICT_HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-[a-zA-Z0-9+/]+[=]{0,2}\'$');
/** A regex pattern to check hash prefix. */
const HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-(.+)\'$');
/**
 * Checks if a string is a valid CSP hash.
 * See http://www.w3.org/TR/CSP2/#hash_value
 * @param hash value to check.
 * @param strictCheck Check if the hash uses the base64 charset.
 * @return True if hash is has a valid CSP hash.
 */
function isHash(hash, strictCheck) {
    const pattern = strictCheck ? STRICT_HASH_PATTERN : HASH_PATTERN;
    return pattern.test(hash);
}
/**
 * Class to represent all generic CSP errors.
 */
class CspError extends Error {
    /**
     * @param message An optional error message.
     */
    constructor(message) {
        super(message);
    }
}
/**
 * Mutate the given array to remove the first instance of the given item
 */
function arrayRemove(arr, item) {
    if (arr.includes(item)) {
        const idx = arr.findIndex(elem => item === elem);
        arr.splice(idx, 1);
    }
}
//# sourceMappingURL=csp.js.map

/***/ }),

/***/ "./third_party/csp_evaluator/package/finding.js":
/*!******************************************************!*\
  !*** ./third_party/csp_evaluator/package/finding.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Finding: () => (/* binding */ Finding),
/* harmony export */   Severity: () => (/* binding */ Severity),
/* harmony export */   Type: () => (/* binding */ Type)
/* harmony export */ });
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
/**
 * A CSP Finding is returned by a CSP check and can either reference a directive
 * value or a directive. If a directive value is referenced opt_index must be
 * provided.
 * @unrestricted
 */
class Finding {
    type;
    description;
    severity;
    directive;
    value;
    /**
     * @param type Type of the finding.
     * @param description Description of the finding.
     * @param severity Severity of the finding.
     * @param directive The CSP directive in which the finding occurred.
     * @param value The directive value, if exists.
     */
    constructor(type, description, severity, directive, value) {
        this.type = type;
        this.description = description;
        this.severity = severity;
        this.directive = directive;
        this.value = value;
    }
    /**
     * Returns the highest severity of a list of findings.
     * @param findings List of findings.
     * @return highest severity of a list of findings.
     */
    static getHighestSeverity(findings) {
        if (findings.length === 0) {
            return Severity.NONE;
        }
        const severities = findings.map((finding) => finding.severity);
        const min = (prev, cur) => prev < cur ? prev : cur;
        return severities.reduce(min, Severity.NONE);
    }
    equals(obj) {
        if (!(obj instanceof Finding)) {
            return false;
        }
        return obj.type === this.type && obj.description === this.description &&
            obj.severity === this.severity && obj.directive === this.directive &&
            obj.value === this.value;
    }
}
/**
 * Finding severities.
 */
var Severity;
(function (Severity) {
    Severity[Severity["HIGH"] = 10] = "HIGH";
    Severity[Severity["SYNTAX"] = 20] = "SYNTAX";
    Severity[Severity["MEDIUM"] = 30] = "MEDIUM";
    Severity[Severity["HIGH_MAYBE"] = 40] = "HIGH_MAYBE";
    Severity[Severity["STRICT_CSP"] = 45] = "STRICT_CSP";
    Severity[Severity["MEDIUM_MAYBE"] = 50] = "MEDIUM_MAYBE";
    Severity[Severity["INFO"] = 60] = "INFO";
    Severity[Severity["NONE"] = 100] = "NONE";
})(Severity || (Severity = {}));
/**
 * Finding types for evluator checks.
 */
var Type;
(function (Type) {
    // Parser checks
    Type[Type["MISSING_SEMICOLON"] = 100] = "MISSING_SEMICOLON";
    Type[Type["UNKNOWN_DIRECTIVE"] = 101] = "UNKNOWN_DIRECTIVE";
    Type[Type["INVALID_KEYWORD"] = 102] = "INVALID_KEYWORD";
    Type[Type["NONCE_CHARSET"] = 106] = "NONCE_CHARSET";
    // Security cheks
    Type[Type["MISSING_DIRECTIVES"] = 300] = "MISSING_DIRECTIVES";
    Type[Type["SCRIPT_UNSAFE_INLINE"] = 301] = "SCRIPT_UNSAFE_INLINE";
    Type[Type["SCRIPT_UNSAFE_EVAL"] = 302] = "SCRIPT_UNSAFE_EVAL";
    Type[Type["PLAIN_URL_SCHEMES"] = 303] = "PLAIN_URL_SCHEMES";
    Type[Type["PLAIN_WILDCARD"] = 304] = "PLAIN_WILDCARD";
    Type[Type["SCRIPT_ALLOWLIST_BYPASS"] = 305] = "SCRIPT_ALLOWLIST_BYPASS";
    Type[Type["OBJECT_ALLOWLIST_BYPASS"] = 306] = "OBJECT_ALLOWLIST_BYPASS";
    Type[Type["NONCE_LENGTH"] = 307] = "NONCE_LENGTH";
    Type[Type["IP_SOURCE"] = 308] = "IP_SOURCE";
    Type[Type["DEPRECATED_DIRECTIVE"] = 309] = "DEPRECATED_DIRECTIVE";
    Type[Type["SRC_HTTP"] = 310] = "SRC_HTTP";
    // Strict dynamic and backward compatibility checks
    Type[Type["STRICT_DYNAMIC"] = 400] = "STRICT_DYNAMIC";
    Type[Type["STRICT_DYNAMIC_NOT_STANDALONE"] = 401] = "STRICT_DYNAMIC_NOT_STANDALONE";
    Type[Type["NONCE_HASH"] = 402] = "NONCE_HASH";
    Type[Type["UNSAFE_INLINE_FALLBACK"] = 403] = "UNSAFE_INLINE_FALLBACK";
    Type[Type["ALLOWLIST_FALLBACK"] = 404] = "ALLOWLIST_FALLBACK";
    Type[Type["IGNORED"] = 405] = "IGNORED";
    // Trusted Types checks
    Type[Type["REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS"] = 500] = "REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS";
    // Lighthouse checks
    Type[Type["REPORTING_DESTINATION_MISSING"] = 600] = "REPORTING_DESTINATION_MISSING";
    Type[Type["REPORT_TO_ONLY"] = 601] = "REPORT_TO_ONLY";
})(Type || (Type = {}));
//# sourceMappingURL=finding.js.map

/***/ })

}]);