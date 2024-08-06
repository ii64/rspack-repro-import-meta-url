"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_package_checks_parser_checks_js"], {
"./third_party/csp_evaluator/package/checks/parser_checks.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  checkInvalidKeyword: function() { return checkInvalidKeyword; },
  checkMissingSemicolon: function() { return checkMissingSemicolon; },
  checkUnknownDirective: function() { return checkUnknownDirective; }
});
/* harmony import */var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../csp.js */ "./third_party/csp_evaluator/package/csp.js");
/* harmony import */var _finding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../finding.js */ "./third_party/csp_evaluator/package/finding.js");
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
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/**
 * Checks if the csp contains invalid directives.
 *
 * Example policy where this check would trigger:
 *  foobar-src foo.bar
 *
 * @param parsedCsp A parsed csp.
 */ function checkUnknownDirective(parsedCsp) {
    var findings = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(parsedCsp.directives)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var directive = _step.value;
            if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directive)) {
                continue;
            }
            if (directive.endsWith(':')) {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'CSP directives don\'t end with a colon.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
            } else {
                findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.UNKNOWN_DIRECTIVE, 'Directive "' + directive + '" is not a known CSP directive.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive));
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
 */ function checkMissingSemicolon(parsedCsp) {
    var findings = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(parsedCsp.directives)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), directive = _step_value[0], directiveValues = _step_value[1];
            if (directiveValues === undefined) {
                continue;
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = directiveValues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var value = _step1.value;
                    // If we find a known directive inside a directive value, it is very
                    // likely that a semicolon was forgoten.
                    if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(value)) {
                        findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.MISSING_SEMICOLON, 'Did you forget the semicolon? ' + '"' + value + '" seems to be a directive, not a value.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
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
    return findings;
}
/**
 * Checks if csp contains invalid keywords.
 *
 * Example policy where this check would trigger:
 *  script-src 'notAkeyword'
 *
 * @param parsedCsp A parsed csp.
 */ function checkInvalidKeyword(parsedCsp) {
    var findings = [];
    var keywordsNoTicks = Object.values(_csp_js__WEBPACK_IMPORTED_MODULE_0__.Keyword).map(function(k) {
        return k.replace(/'/g, '');
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _sliced_to_array(_step.value, 2), directive = _step_value[0], directiveValues = _step_value[1];
            if (directiveValues === undefined) {
                return "continue";
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var value = _step1.value;
                    // Check if single ticks have been forgotten.
                    if (keywordsNoTicks.some(function(k) {
                        return k === value;
                    }) || value.startsWith('nonce-') || value.match(/^(sha256|sha384|sha512)-/)) {
                        findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, 'Did you forget to surround "' + value + '" with single-ticks?', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
                        return "continue";
                    }
                    // Continue, if the value doesn't start with single tick.
                    // All CSP keywords start with a single tick.
                    if (!value.startsWith('\'')) {
                        return "continue";
                    }
                    if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.REQUIRE_TRUSTED_TYPES_FOR) {
                        // Continue, if it's an allowed Trusted Types sink.
                        if (value === _csp_js__WEBPACK_IMPORTED_MODULE_0__.TrustedTypesSink.SCRIPT) {
                            return "continue";
                        }
                    } else if (directive === _csp_js__WEBPACK_IMPORTED_MODULE_0__.Directive.TRUSTED_TYPES) {
                        // Continue, if it's an allowed Trusted Types keyword.
                        if (value === '\'allow-duplicates\'' || value === '\'none\'') {
                            return "continue";
                        }
                    } else {
                        // Continue, if it's a valid keyword.
                        if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isHash(value) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isNonce(value)) {
                            return "continue";
                        }
                    }
                    findings.push(new _finding_js__WEBPACK_IMPORTED_MODULE_1__.Finding(_finding_js__WEBPACK_IMPORTED_MODULE_1__.Type.INVALID_KEYWORD, value + ' seems to be an invalid CSP keyword.', _finding_js__WEBPACK_IMPORTED_MODULE_1__.Severity.SYNTAX, directive, value));
                };
                for(var _iterator = directiveValues[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        };
        for(var _iterator = Object.entries(parsedCsp.directives)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    return findings;
} //# sourceMappingURL=parser_checks.js.map


}),

}]);