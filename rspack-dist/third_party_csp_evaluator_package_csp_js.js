"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_package_csp_js"], {
"./third_party/csp_evaluator/package/csp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Csp: function() { return Csp; },
  CspError: function() { return CspError; },
  Directive: function() { return Directive; },
  FETCH_DIRECTIVES: function() { return FETCH_DIRECTIVES; },
  HASH_PATTERN: function() { return HASH_PATTERN; },
  Keyword: function() { return Keyword; },
  NONCE_PATTERN: function() { return NONCE_PATTERN; },
  STRICT_HASH_PATTERN: function() { return STRICT_HASH_PATTERN; },
  STRICT_NONCE_PATTERN: function() { return STRICT_NONCE_PATTERN; },
  TrustedTypesSink: function() { return TrustedTypesSink; },
  Version: function() { return Version; },
  isDirective: function() { return isDirective; },
  isHash: function() { return isHash; },
  isKeyword: function() { return isKeyword; },
  isNonce: function() { return isNonce; },
  isUrlScheme: function() { return isUrlScheme; }
});
/* harmony import */var _finding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finding.js */ "./third_party/csp_evaluator/package/finding.js");
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
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}

/**
 * Content Security Policy object.
 * List of valid CSP directives:
 *  - http://www.w3.org/TR/CSP2/#directives
 *  - https://www.w3.org/TR/upgrade-insecure-requests/
 */ var Csp = /*#__PURE__*/ function() {
    "use strict";
    function Csp() {
        _class_call_check(this, Csp);
        _define_property(this, "directives", {});
    }
    _create_class(Csp, [
        {
            /**
     * Clones a CSP object.
     * @return clone of parsedCsp.
     */ key: "clone",
            value: function clone() {
                var clone = new Csp();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(this.directives)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), directive = _step_value[0], directiveValues = _step_value[1];
                        if (directiveValues) {
                            clone.directives[directive] = _to_consumable_array(directiveValues);
                        }
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
                return clone;
            }
        },
        {
            /**
     * Converts this CSP back into a string.
     * @return CSP string.
     */ key: "convertToString",
            value: function convertToString() {
                var cspString = '';
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.entries(this.directives)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), directive = _step_value[0], directiveValues = _step_value[1];
                        cspString += directive;
                        if (directiveValues !== undefined) {
                            for(var value = void 0, i = 0; value = directiveValues[i]; i++){
                                cspString += ' ';
                                cspString += value;
                            }
                        }
                        cspString += '; ';
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
                return cspString;
            }
        },
        {
            /**
     * Returns CSP as it would be seen by a UA supporting a specific CSP version.
     * @param cspVersion CSP.
     * @param optFindings findings about ignored directive values will be added
     *     to this array, if passed. (e.g. CSP2 ignores 'unsafe-inline' in
     *     presence of a nonce or a hash)
     * @return The effective CSP.
     */ key: "getEffectiveCsp",
            value: function getEffectiveCsp(cspVersion, optFindings) {
                var findings = optFindings || [];
                var effectiveCsp = this.clone();
                var directive = effectiveCsp.getEffectiveDirective(Directive.SCRIPT_SRC);
                var values = this.directives[directive] || [];
                var effectiveCspValues = effectiveCsp.directives[directive];
                if (effectiveCspValues && (effectiveCsp.policyHasScriptNonces() || effectiveCsp.policyHasScriptHashes())) {
                    if (cspVersion >= Version.CSP2) {
                        // Ignore 'unsafe-inline' in CSP >= v2, if a nonce or a hash is present.
                        if (values.includes(Keyword.UNSAFE_INLINE)) {
                            arrayRemove(effectiveCspValues, Keyword.UNSAFE_INLINE);
                            findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_0__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_0__.Type.IGNORED, 'unsafe-inline is ignored if a nonce or a hash is present. ' + '(CSP2 and above)', _finding_js__WEBPACK_IMPORTED_MODULE_0__.Severity.NONE, directive, Keyword.UNSAFE_INLINE));
                        }
                    } else {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            // remove nonces and hashes (not supported in CSP < v2).
                            for(var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var value = _step.value;
                                if (value.startsWith('\'nonce-') || value.startsWith('\'sha')) {
                                    arrayRemove(effectiveCspValues, value);
                                }
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
                }
                if (effectiveCspValues && this.policyHasStrictDynamic()) {
                    // Ignore allowlist in CSP >= v3 in presence of 'strict-dynamic'.
                    if (cspVersion >= Version.CSP3) {
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var value1 = _step1.value;
                                // Because of 'strict-dynamic' all host-source and scheme-source
                                // expressions, as well as the "'unsafe-inline'" and "'self'
                                // keyword-sources will be ignored.
                                // https://w3c.github.io/webappsec-csp/#strict-dynamic-usage
                                if (!value1.startsWith('\'') || value1 === Keyword.SELF || value1 === Keyword.UNSAFE_INLINE) {
                                    arrayRemove(effectiveCspValues, value1);
                                    findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_0__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_0__.Type.IGNORED, 'Because of strict-dynamic this entry is ignored in CSP3 and above', _finding_js__WEBPACK_IMPORTED_MODULE_0__.Severity.NONE, directive, value1));
                                }
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
                    } else {
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
        },
        {
            /**
     * Returns default-src if directive is a fetch directive and is not present in
     * this CSP. Otherwise the provided directive is returned.
     * @param directive CSP.
     * @return The effective directive.
     */ key: "getEffectiveDirective",
            value: function getEffectiveDirective(directive) {
                // Only fetch directives default to default-src.
                if (!(directive in this.directives) && FETCH_DIRECTIVES.includes(directive)) {
                    return Directive.DEFAULT_SRC;
                }
                return directive;
            }
        },
        {
            /**
     * Returns the passed directives if present in this CSP or default-src
     * otherwise.
     * @param directives CSP.
     * @return The effective directives.
     */ key: "getEffectiveDirectives",
            value: function getEffectiveDirectives(directives) {
                var _this = this;
                var effectiveDirectives = new Set(directives.map(function(val) {
                    return _this.getEffectiveDirective(val);
                }));
                return _to_consumable_array(effectiveDirectives);
            }
        },
        {
            /**
     * Checks if this CSP is using nonces for scripts.
     * @return true, if this CSP is using script nonces.
     */ key: "policyHasScriptNonces",
            value: function policyHasScriptNonces() {
                var directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
                var values = this.directives[directiveName] || [];
                return values.some(function(val) {
                    return isNonce(val);
                });
            }
        },
        {
            /**
     * Checks if this CSP is using hashes for scripts.
     * @return true, if this CSP is using script hashes.
     */ key: "policyHasScriptHashes",
            value: function policyHasScriptHashes() {
                var directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
                var values = this.directives[directiveName] || [];
                return values.some(function(val) {
                    return isHash(val);
                });
            }
        },
        {
            /**
     * Checks if this CSP is using strict-dynamic.
     * @return true, if this CSP is using CSP nonces.
     */ key: "policyHasStrictDynamic",
            value: function policyHasStrictDynamic() {
                var directiveName = this.getEffectiveDirective(Directive.SCRIPT_SRC);
                var values = this.directives[directiveName] || [];
                return values.includes(Keyword.STRICT_DYNAMIC);
            }
        }
    ]);
    return Csp;
}();
/**
 * CSP directive source keywords.
 */ var Keyword;
(function(Keyword) {
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
 */ var TrustedTypesSink;
(function(TrustedTypesSink) {
    TrustedTypesSink["SCRIPT"] = "'script'";
})(TrustedTypesSink || (TrustedTypesSink = {}));
/**
 * CSP v3 directives.
 * List of valid CSP directives:
 *  - http://www.w3.org/TR/CSP2/#directives
 *  - https://www.w3.org/TR/upgrade-insecure-requests/
 *
 */ var Directive;
(function(Directive) {
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
 */ var FETCH_DIRECTIVES = [
    Directive.CHILD_SRC,
    Directive.CONNECT_SRC,
    Directive.DEFAULT_SRC,
    Directive.FONT_SRC,
    Directive.FRAME_SRC,
    Directive.IMG_SRC,
    Directive.MANIFEST_SRC,
    Directive.MEDIA_SRC,
    Directive.OBJECT_SRC,
    Directive.SCRIPT_SRC,
    Directive.SCRIPT_SRC_ATTR,
    Directive.SCRIPT_SRC_ELEM,
    Directive.STYLE_SRC,
    Directive.STYLE_SRC_ATTR,
    Directive.STYLE_SRC_ELEM,
    Directive.WORKER_SRC
];
/**
 * CSP version.
 */ var Version;
(function(Version) {
    Version[Version["CSP1"] = 1] = "CSP1";
    Version[Version["CSP2"] = 2] = "CSP2";
    Version[Version["CSP3"] = 3] = "CSP3";
})(Version || (Version = {}));
/**
 * Checks if a string is a valid CSP directive.
 * @param directive value to check.
 * @return True if directive is a valid CSP directive.
 */ function isDirective(directive) {
    return Object.values(Directive).includes(directive);
}
/**
 * Checks if a string is a valid CSP keyword.
 * @param keyword value to check.
 * @return True if keyword is a valid CSP keyword.
 */ function isKeyword(keyword) {
    return Object.values(Keyword).includes(keyword);
}
/**
 * Checks if a string is a valid URL scheme.
 * Scheme part + ":"
 * For scheme part see https://tools.ietf.org/html/rfc3986#section-3.1
 * @param urlScheme value to check.
 * @return True if urlScheme has a valid scheme.
 */ function isUrlScheme(urlScheme) {
    var pattern = new RegExp('^[a-zA-Z][+a-zA-Z0-9.-]*:$');
    return pattern.test(urlScheme);
}
/**
 * A regex pattern to check nonce prefix and Base64 formatting of a nonce value.
 */ var STRICT_NONCE_PATTERN = new RegExp('^\'nonce-[a-zA-Z0-9+/_-]+[=]{0,2}\'$');
/** A regex pattern for checking if nonce prefix. */ var NONCE_PATTERN = new RegExp('^\'nonce-(.+)\'$');
/**
 * Checks if a string is a valid CSP nonce.
 * See http://www.w3.org/TR/CSP2/#nonce_value
 * @param nonce value to check.
 * @param strictCheck Check if the nonce uses the base64 charset.
 * @return True if nonce is has a valid CSP nonce.
 */ function isNonce(nonce, strictCheck) {
    var pattern = strictCheck ? STRICT_NONCE_PATTERN : NONCE_PATTERN;
    return pattern.test(nonce);
}
/**
 * A regex pattern to check hash prefix and Base64 formatting of a hash value.
 */ var STRICT_HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-[a-zA-Z0-9+/]+[=]{0,2}\'$');
/** A regex pattern to check hash prefix. */ var HASH_PATTERN = new RegExp('^\'(sha256|sha384|sha512)-(.+)\'$');
/**
 * Checks if a string is a valid CSP hash.
 * See http://www.w3.org/TR/CSP2/#hash_value
 * @param hash value to check.
 * @param strictCheck Check if the hash uses the base64 charset.
 * @return True if hash is has a valid CSP hash.
 */ function isHash(hash, strictCheck) {
    var pattern = strictCheck ? STRICT_HASH_PATTERN : HASH_PATTERN;
    return pattern.test(hash);
}
/**
 * Class to represent all generic CSP errors.
 */ var CspError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(CspError, Error1);
    var _super = _create_super(CspError);
    function CspError(message) {
        _class_call_check(this, CspError);
        return _super.call(this, message);
    }
    return CspError;
}(_wrap_native_super(Error));
/**
 * Mutate the given array to remove the first instance of the given item
 */ function arrayRemove(arr, item) {
    if (arr.includes(item)) {
        var idx = arr.findIndex(function(elem) {
            return item === elem;
        });
        arr.splice(idx, 1);
    }
} //# sourceMappingURL=csp.js.map


}),
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