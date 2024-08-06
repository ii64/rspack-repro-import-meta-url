"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_package_evaluator_js"], {
"./third_party/csp_evaluator/package/checks/strictcsp_checks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  checkAllowlistFallback: function() { return checkAllowlistFallback; },
  checkRequiresTrustedTypesForScripts: function() { return checkRequiresTrustedTypesForScripts; },
  checkStrictDynamic: function() { return checkStrictDynamic; },
  checkStrictDynamicNotStandalone: function() { return checkStrictDynamicNotStandalone; },
  checkUnsafeInlineFallback: function() { return checkUnsafeInlineFallback; }
});
/* harmony import */var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csp.js */ "./third_party/csp_evaluator/package/csp.js");
/* harmony import */var _finding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finding.js */ "./third_party/csp_evaluator/package/finding.js");
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
 */ function checkStrictDynamic(parsedCsp) {
    var directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    var values = parsedCsp.directives[directiveName] || [];
    var schemeOrHostPresent = values.some(function(v) {
        return !v.startsWith('\'');
    });
    // Check if strict-dynamic is present in case a host/scheme allowlist is used.
    if (schemeOrHostPresent && !values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC)) {
        return [
            new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.STRICT_DYNAMIC, 'Host allowlists can frequently be bypassed. Consider using ' + '\'strict-dynamic\' in combination with CSP nonces or hashes.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)
        ];
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
 */ function checkStrictDynamicNotStandalone(parsedCsp) {
    var directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    var values = parsedCsp.directives[directiveName] || [];
    if (values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC) && !parsedCsp.policyHasScriptNonces() && !parsedCsp.policyHasScriptHashes()) {
        return [
            new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.STRICT_DYNAMIC_NOT_STANDALONE, '\'strict-dynamic\' without a CSP nonce/hash will block all scripts.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.INFO, directiveName)
        ];
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
 */ function checkUnsafeInlineFallback(parsedCsp) {
    if (!parsedCsp.policyHasScriptNonces() && !parsedCsp.policyHasScriptHashes()) {
        return [];
    }
    var directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    var values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.UNSAFE_INLINE)) {
        return [
            new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNSAFE_INLINE_FALLBACK, 'Consider adding \'unsafe-inline\' (ignored by browsers supporting ' + 'nonces/hashes) to be backward compatible with older browsers.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)
        ];
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
 */ function checkAllowlistFallback(parsedCsp) {
    var directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.SCRIPT_SRC);
    var values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword.STRICT_DYNAMIC)) {
        return [];
    }
    // Check if there's already an allowlist (url scheme or url)
    if (!values.some(function(v) {
        return [
            'http:',
            'https:',
            '*'
        ].includes(v) || v.includes('.');
    })) {
        return [
            new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.ALLOWLIST_FALLBACK, 'Consider adding https: and http: url schemes (ignored by browsers ' + 'supporting \'strict-dynamic\') to be backward compatible with older ' + 'browsers.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.STRICT_CSP, directiveName)
        ];
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
 */ function checkRequiresTrustedTypesForScripts(parsedCsp) {
    var directiveName = parsedCsp.getEffectiveDirective(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR);
    var values = parsedCsp.directives[directiveName] || [];
    if (!values.includes(_csp_js__WEBPACK_IMPORTED_MODULE_0__.TrustedTypesSink.SCRIPT)) {
        return [
            new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS, 'Consider requiring Trusted Types for scripts to lock down DOM XSS ' + 'injection sinks. You can do this by adding ' + '"require-trusted-types-for \'script\'" to your policy.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.INFO, _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR)
        ];
    }
    return [];
} //# sourceMappingURL=strictcsp_checks.js.map


}),
"./third_party/csp_evaluator/package/evaluator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CspEvaluator: function() { return CspEvaluator; },
  DEFAULT_CHECKS: function() { return DEFAULT_CHECKS; },
  STRICTCSP_CHECKS: function() { return STRICTCSP_CHECKS; }
});
/* harmony import */var _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checks/parser_checks.js */ "./third_party/csp_evaluator/package/checks/parser_checks.js");
/* harmony import */var _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks/security_checks.js */ "./third_party/csp_evaluator/package/checks/security_checks.js");
/* harmony import */var _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checks/strictcsp_checks.js */ "./third_party/csp_evaluator/package/checks/strictcsp_checks.js");
/* harmony import */var _csp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csp.js */ "./third_party/csp_evaluator/package/csp.js");
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
 */ function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}




/**
 * A class to hold a CSP Evaluator.
 * Evaluates a parsed CSP and reports security findings.
 * @unrestricted
 */ var CspEvaluator = /*#__PURE__*/ function() {
    "use strict";
    function CspEvaluator(parsedCsp, cspVersion) {
        _class_call_check(this, CspEvaluator);
        _define_property(this, "version", void 0);
        _define_property(this, "csp", void 0);
        /**
     * List of findings reported by checks.
     *
     */ _define_property(this, "findings", []);
        /**
         * CSP version.
         */ this.version = cspVersion || _csp_js__WEBPACK_IMPORTED_MODULE_3__.Version.CSP3;
        /**
         * Parsed CSP.
         */ this.csp = parsedCsp;
    }
    _create_class(CspEvaluator, [
        {
            /**
     * Evaluates a parsed CSP against a set of checks
     * @param parsedCspChecks list of checks to run on the parsed CSP (i.e.
     *     checks like backward compatibility checks, which are independent of the
     *     actual CSP version).
     * @param effectiveCspChecks list of checks to run on the effective CSP.
     * @return List of Findings.
     * @export
     */ key: "evaluate",
            value: function evaluate(parsedCspChecks, effectiveCspChecks) {
                this.findings = [];
                var checks = effectiveCspChecks || DEFAULT_CHECKS;
                // We're applying checks on the policy as it would be seen by a browser
                // supporting a specific version of CSP.
                // For example a browser supporting only CSP1 will ignore nonces and
                // therefore 'unsafe-inline' would not get ignored if a policy has nonces.
                var effectiveCsp = this.csp.getEffectiveCsp(this.version, this.findings);
                // Checks independent of CSP version.
                if (parsedCspChecks) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = parsedCspChecks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var check = _step.value;
                            this.findings = this.findings.concat(check(this.csp));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    // Checks depenent on CSP version.
                    for(var _iterator1 = checks[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var check1 = _step1.value;
                        this.findings = this.findings.concat(check1(effectiveCsp));
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                return this.findings;
            }
        }
    ]);
    return CspEvaluator;
}();
/**
 * Set of default checks to run.
 */ var DEFAULT_CHECKS = [
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptUnsafeInline,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptUnsafeEval,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkPlainUrlSchemes,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkWildcards,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkMissingDirectives,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkScriptAllowlistBypass,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkFlashObjectAllowlistBypass,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkIpSource,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkNonceLength,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkSrcHttp,
    _checks_security_checks_js__WEBPACK_IMPORTED_MODULE_1__.checkDeprecatedDirective,
    _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkUnknownDirective,
    _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkMissingSemicolon,
    _checks_parser_checks_js__WEBPACK_IMPORTED_MODULE_0__.checkInvalidKeyword
];
/**
 * Strict CSP and backward compatibility checks.
 */ var STRICTCSP_CHECKS = [
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkStrictDynamic,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkStrictDynamicNotStandalone,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkUnsafeInlineFallback,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkAllowlistFallback,
    _checks_strictcsp_checks_js__WEBPACK_IMPORTED_MODULE_2__.checkRequiresTrustedTypesForScripts
]; //# sourceMappingURL=evaluator.js.map


}),

}]);