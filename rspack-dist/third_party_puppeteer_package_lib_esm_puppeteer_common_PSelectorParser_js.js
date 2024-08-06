"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_PSelectorParser_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parsePSelectors: function() { return parsePSelectors; }
});
/* harmony import */var _third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/parsel-js/parsel-js.js */ "./third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 
_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS.nesting = /&/g;
_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS.combinator = /\s*(>>>>?|[\s>+~])\s*/g;
var ESCAPE_REGEXP = /\\[\s\S]/g;
var unquote = function(text) {
    if (text.length <= 1) {
        return text;
    }
    if ((text[0] === '"' || text[0] === "'") && text.endsWith(text[0])) {
        text = text.slice(1, -1);
    }
    return text.replace(ESCAPE_REGEXP, function(match) {
        return match[1];
    });
};
/**
 * @internal
 */ function parsePSelectors(selector) {
    var isPureCSS = true;
    var hasAria = false;
    var hasPseudoClasses = false;
    var tokens = (0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.tokenize)(selector);
    if (tokens.length === 0) {
        return [
            [],
            isPureCSS,
            hasPseudoClasses,
            false
        ];
    }
    var compoundSelector = [];
    var complexSelector = [
        compoundSelector
    ];
    var selectors = [
        complexSelector
    ];
    var storage = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var token = _step.value;
            switch(token.type){
                case 'combinator':
                    switch(token.content){
                        case ">>>" /* PCombinator.Descendent */ :
                            isPureCSS = false;
                            if (storage.length) {
                                compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                                storage.splice(0);
                            }
                            compoundSelector = [];
                            complexSelector.push(">>>" /* PCombinator.Descendent */ );
                            complexSelector.push(compoundSelector);
                            continue;
                        case ">>>>" /* PCombinator.Child */ :
                            isPureCSS = false;
                            if (storage.length) {
                                compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                                storage.splice(0);
                            }
                            compoundSelector = [];
                            complexSelector.push(">>>>" /* PCombinator.Child */ );
                            complexSelector.push(compoundSelector);
                            continue;
                    }
                    break;
                case 'pseudo-element':
                    if (!token.name.startsWith('-p-')) {
                        break;
                    }
                    isPureCSS = false;
                    if (storage.length) {
                        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                        storage.splice(0);
                    }
                    var name = token.name.slice(3);
                    if (name === 'aria') {
                        hasAria = true;
                    }
                    var _token_argument;
                    compoundSelector.push({
                        name: name,
                        value: unquote((_token_argument = token.argument) !== null && _token_argument !== void 0 ? _token_argument : '')
                    });
                    continue;
                case 'pseudo-class':
                    hasPseudoClasses = true;
                    break;
                case 'comma':
                    if (storage.length) {
                        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                        storage.splice(0);
                    }
                    compoundSelector = [];
                    complexSelector = [
                        compoundSelector
                    ];
                    selectors.push(complexSelector);
                    continue;
            }
            storage.push(token);
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
    if (storage.length) {
        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
    }
    return [
        selectors,
        isPureCSS,
        hasPseudoClasses,
        hasAria
    ];
} //# sourceMappingURL=PSelectorParser.js.map


}),

}]);