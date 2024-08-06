"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_package_finding_js"], {
"./third_party/csp_evaluator/package/finding.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Finding: function() { return Finding; },
  Severity: function() { return Severity; },
  Type: function() { return Type; }
});
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
 */ /**
 * A CSP Finding is returned by a CSP check and can either reference a directive
 * value or a directive. If a directive value is referenced opt_index must be
 * provided.
 * @unrestricted
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var Finding = /*#__PURE__*/ function() {
    "use strict";
    function Finding(type, description, severity, directive, value) {
        _class_call_check(this, Finding);
        _define_property(this, "type", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "severity", void 0);
        _define_property(this, "directive", void 0);
        _define_property(this, "value", void 0);
        this.type = type;
        this.description = description;
        this.severity = severity;
        this.directive = directive;
        this.value = value;
    }
    _create_class(Finding, [
        {
            key: "equals",
            value: function equals(obj) {
                if (!_instanceof(obj, Finding)) {
                    return false;
                }
                return obj.type === this.type && obj.description === this.description && obj.severity === this.severity && obj.directive === this.directive && obj.value === this.value;
            }
        }
    ], [
        {
            key: "getHighestSeverity",
            value: /**
     * Returns the highest severity of a list of findings.
     * @param findings List of findings.
     * @return highest severity of a list of findings.
     */ function getHighestSeverity(findings) {
                if (findings.length === 0) {
                    return Severity.NONE;
                }
                var severities = findings.map(function(finding) {
                    return finding.severity;
                });
                var min = function(prev, cur) {
                    return prev < cur ? prev : cur;
                };
                return severities.reduce(min, Severity.NONE);
            }
        }
    ]);
    return Finding;
}();
/**
 * Finding severities.
 */ var Severity;
(function(Severity) {
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
 */ var Type;
(function(Type) {
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
})(Type || (Type = {})); //# sourceMappingURL=finding.js.map


}),

}]);