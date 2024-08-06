"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_csp_evaluator_d_ts"], {
"./third_party/csp_evaluator/csp_evaluator.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CspEvaluator: function() { return /* reexport module object */ _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__; },
  CspParser: function() { return /* reexport module object */ _package_parser_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/evaluator.js */ "./third_party/csp_evaluator/package/evaluator.js");
/* harmony import */var _package_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/parser.js */ "./third_party/csp_evaluator/package/parser.js");






}),
"./third_party/csp_evaluator/package/parser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CspParser: function() { return CspParser; },
  TEST_ONLY: function() { return TEST_ONLY; }
});
/* harmony import */var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp.js */ "./third_party/csp_evaluator/package/csp.js");
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
 * A class to hold a parser for CSP in string format.
 * @unrestricted
 */ var CspParser = /*#__PURE__*/ function() {
    "use strict";
    function CspParser(unparsedCsp) {
        _class_call_check(this, CspParser);
        _define_property(this, "csp", void 0);
        /**
         * Parsed CSP
         */ this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        this.parse(unparsedCsp);
    }
    _create_class(CspParser, [
        {
            /**
     * Parses a CSP from a string.
     * @param unparsedCsp CSP as string.
     */ key: "parse",
            value: function parse(unparsedCsp) {
                // Reset the internal state:
                this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
                // Split CSP into directive tokens.
                var directiveTokens = unparsedCsp.split(';');
                for(var i = 0; i < directiveTokens.length; i++){
                    var directiveToken = directiveTokens[i].trim();
                    // Split directive tokens into directive name and directive values.
                    var directiveParts = directiveToken.match(/\S+/g);
                    if (Array.isArray(directiveParts)) {
                        var directiveName = directiveParts[0].toLowerCase();
                        // If the set of directives already contains a directive whose name is a
                        // case insensitive match for directive name, ignore this instance of
                        // the directive and continue to the next token.
                        if (directiveName in this.csp.directives) {
                            continue;
                        }
                        if (!_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directiveName)) {}
                        var directiveValues = [];
                        for(var directiveValue = void 0, j = 1; directiveValue = directiveParts[j]; j++){
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
    ]);
    return CspParser;
}();
/**
 * Remove whitespaces and turn to lower case if CSP keyword or protocol
 * handler.
 * @param directiveValue directive value.
 * @return normalized directive value.
 */ function normalizeDirectiveValue(directiveValue) {
    directiveValue = directiveValue.trim();
    var directiveValueLower = directiveValue.toLowerCase();
    if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(directiveValueLower) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isUrlScheme(directiveValue)) {
        return directiveValueLower;
    }
    return directiveValue;
}
var TEST_ONLY = {
    normalizeDirectiveValue: normalizeDirectiveValue
}; //# sourceMappingURL=parser.js.map


}),

}]);