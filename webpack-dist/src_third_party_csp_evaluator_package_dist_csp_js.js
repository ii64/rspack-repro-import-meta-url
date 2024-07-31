"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_csp_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/csp.js":
/*!***********************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/csp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CspError = exports.isHash = exports.HASH_PATTERN = exports.STRICT_HASH_PATTERN = exports.isNonce = exports.NONCE_PATTERN = exports.STRICT_NONCE_PATTERN = exports.isUrlScheme = exports.isKeyword = exports.isDirective = exports.Version = exports.FETCH_DIRECTIVES = exports.Directive = exports.TrustedTypesSink = exports.Keyword = exports.Csp = void 0;
const finding_1 = __webpack_require__(/*! ./finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
class Csp {
    constructor() {
        this.directives = {};
    }
    clone() {
        const clone = new Csp();
        for (const [directive, directiveValues] of Object.entries(this.directives)) {
            if (directiveValues) {
                clone.directives[directive] = [...directiveValues];
            }
        }
        return clone;
    }
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
                if (values.includes(Keyword.UNSAFE_INLINE)) {
                    arrayRemove(effectiveCspValues, Keyword.UNSAFE_INLINE);
                    findings.push(new finding_1.Finding(finding_1.Type.IGNORED, 'unsafe-inline is ignored if a nonce or a hash is present. ' +
                        '(CSP2 and above)', finding_1.Severity.NONE, directive, Keyword.UNSAFE_INLINE));
                }
            }
            else {
                for (const value of values) {
                    if (value.startsWith('\'nonce-') || value.startsWith('\'sha')) {
                        arrayRemove(effectiveCspValues, value);
                    }
                }
            }
        }
        if (effectiveCspValues && this.policyHasStrictDynamic()) {
            if (cspVersion >= Version.CSP3) {
                for (const value of values) {
                    if (!value.startsWith('\'') || value === Keyword.SELF ||
                        value === Keyword.UNSAFE_INLINE) {
                        arrayRemove(effectiveCspValues, value);
                        findings.push(new finding_1.Finding(finding_1.Type.IGNORED, 'Because of strict-dynamic this entry is ignored in CSP3 and above', finding_1.Severity.NONE, directive, value));
                    }
                }
            }
            else {
                arrayRemove(effectiveCspValues, Keyword.STRICT_DYNAMIC);
            }
        }
        if (cspVersion < Version.CSP3) {
            delete effectiveCsp.directives[Directive.REPORT_TO];
            delete effectiveCsp.directives[Directive.WORKER_SRC];
            delete effectiveCsp.directives[Directive.MANIFEST_SRC];
            delete effectiveCsp.directives[Directive.TRUSTED_TYPES];
            delete effectiveCsp.directives[Directive.REQUIRE_TRUSTED_TYPES_FOR];
        }
        return effectiveCsp;
    }
    getEffectiveDirective(directive) {
        if (!(directive in this.directives) &&
            exports.FETCH_DIRECTIVES.includes(directive)) {
            return Directive.DEFAULT_SRC;
        }
        return directive;
    }
    getEffectiveDirectives(directives) {
        const effectiveDirectives = new Set(directives.map((val) => this.getEffectiveDirective(val)));
        return [...effectiveDirectives];
    }
    policyHasScriptNonces() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.some((val) => isNonce(val));
    }
    policyHasScriptHashes() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.some((val) => isHash(val));
    }
    policyHasStrictDynamic() {
        const directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
        const values = this.directives[directiveName] || [];
        return values.includes(Keyword.STRICT_DYNAMIC);
    }
}
exports.Csp = Csp;
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
})(Keyword = exports.Keyword || (exports.Keyword = {}));
var TrustedTypesSink;
(function (TrustedTypesSink) {
    TrustedTypesSink["SCRIPT"] = "'script'";
})(TrustedTypesSink = exports.TrustedTypesSink || (exports.TrustedTypesSink = {}));
var Directive;
(function (Directive) {
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
    Directive["BASE_URI"] = "base-uri";
    Directive["PLUGIN_TYPES"] = "plugin-types";
    Directive["SANDBOX"] = "sandbox";
    Directive["DISOWN_OPENER"] = "disown-opener";
    Directive["FORM_ACTION"] = "form-action";
    Directive["FRAME_ANCESTORS"] = "frame-ancestors";
    Directive["NAVIGATE_TO"] = "navigate-to";
    Directive["REPORT_TO"] = "report-to";
    Directive["REPORT_URI"] = "report-uri";
    Directive["BLOCK_ALL_MIXED_CONTENT"] = "block-all-mixed-content";
    Directive["UPGRADE_INSECURE_REQUESTS"] = "upgrade-insecure-requests";
    Directive["REFLECTED_XSS"] = "reflected-xss";
    Directive["REFERRER"] = "referrer";
    Directive["REQUIRE_SRI_FOR"] = "require-sri-for";
    Directive["TRUSTED_TYPES"] = "trusted-types";
    Directive["REQUIRE_TRUSTED_TYPES_FOR"] = "require-trusted-types-for";
    Directive["WEBRTC"] = "webrtc";
})(Directive = exports.Directive || (exports.Directive = {}));
exports.FETCH_DIRECTIVES = [
    Directive.CHILD_SRC, Directive.CONNECT_SRC, Directive.DEFAULT_SRC,
    Directive.FONT_SRC, Directive.FRAME_SRC, Directive.IMG_SRC,
    Directive.MANIFEST_SRC, Directive.MEDIA_SRC, Directive.OBJECT_SRC,
    Directive.SCRIPT_SRC, Directive.SCRIPT_SRC_ATTR, Directive.SCRIPT_SRC_ELEM,
    Directive.STYLE_SRC, Directive.STYLE_SRC_ATTR, Directive.STYLE_SRC_ELEM,
    Directive.WORKER_SRC
];
var Version;
(function (Version) {
    Version[Version["CSP1"] = 1] = "CSP1";
    Version[Version["CSP2"] = 2] = "CSP2";
    Version[Version["CSP3"] = 3] = "CSP3";
})(Version = exports.Version || (exports.Version = {}));
function isDirective(directive) {
    return Object.values(Directive).includes(directive);
}
exports.isDirective = isDirective;
function isKeyword(keyword) {
    return Object.values(Keyword).includes(keyword);
}
exports.isKeyword = isKeyword;
function isUrlScheme(urlScheme) {
    const pattern = new RegExp('^[a-zA-Z][+a-zA-Z0-9.-]*:$');
    return pattern.test(urlScheme);
}
exports.isUrlScheme = isUrlScheme;
exports.STRICT_NONCE_PATTERN = new RegExp('^\'nonce-[a-zA-Z0-9+/_-]+[=]{0,2}\'$');
exports.NONCE_PATTERN = new RegExp('^\'nonce-(.+)\'$');
function isNonce(nonce, strictCheck) {
    const pattern = strictCheck ? exports.STRICT_NONCE_PATTERN : exports.NONCE_PATTERN;
    return pattern.test(nonce);
}
exports.isNonce = isNonce;
exports.STRICT_HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-[a-zA-Z0-9+/]+[=]{0,2}\'$');
exports.HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-(.+)\'$');
function isHash(hash, strictCheck) {
    const pattern = strictCheck ? exports.STRICT_HASH_PATTERN : exports.HASH_PATTERN;
    return pattern.test(hash);
}
exports.isHash = isHash;
class CspError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.CspError = CspError;
function arrayRemove(arr, item) {
    if (arr.includes(item)) {
        const idx = arr.findIndex(elem => item === elem);
        arr.splice(idx, 1);
    }
}
//# sourceMappingURL=csp.js.map

/***/ }),

/***/ "./src/third_party/csp_evaluator/package/dist/finding.js":
/*!***************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/finding.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = exports.Severity = exports.Finding = void 0;
class Finding {
    constructor(type, description, severity, directive, value) {
        this.type = type;
        this.description = description;
        this.severity = severity;
        this.directive = directive;
        this.value = value;
    }
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
exports.Finding = Finding;
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
})(Severity = exports.Severity || (exports.Severity = {}));
var Type;
(function (Type) {
    Type[Type["MISSING_SEMICOLON"] = 100] = "MISSING_SEMICOLON";
    Type[Type["UNKNOWN_DIRECTIVE"] = 101] = "UNKNOWN_DIRECTIVE";
    Type[Type["INVALID_KEYWORD"] = 102] = "INVALID_KEYWORD";
    Type[Type["NONCE_CHARSET"] = 106] = "NONCE_CHARSET";
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
    Type[Type["STRICT_DYNAMIC"] = 400] = "STRICT_DYNAMIC";
    Type[Type["STRICT_DYNAMIC_NOT_STANDALONE"] = 401] = "STRICT_DYNAMIC_NOT_STANDALONE";
    Type[Type["NONCE_HASH"] = 402] = "NONCE_HASH";
    Type[Type["UNSAFE_INLINE_FALLBACK"] = 403] = "UNSAFE_INLINE_FALLBACK";
    Type[Type["ALLOWLIST_FALLBACK"] = 404] = "ALLOWLIST_FALLBACK";
    Type[Type["IGNORED"] = 405] = "IGNORED";
    Type[Type["REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS"] = 500] = "REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS";
    Type[Type["REPORTING_DESTINATION_MISSING"] = 600] = "REPORTING_DESTINATION_MISSING";
    Type[Type["REPORT_TO_ONLY"] = 601] = "REPORT_TO_ONLY";
})(Type = exports.Type || (exports.Type = {}));
//# sourceMappingURL=finding.js.map

/***/ })

}]);