"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_TextSelector_js"], {
"./panels/recorder/injected/selectors/TextSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeTextSelector: function() { return computeTextSelector; }
});
/* harmony import */var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var MINIMUM_TEXT_LENGTH = 12;
var MAXIMUM_TEXT_LENGTH = 64;
var collect = function(iter) {
    var max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
    var results = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = iter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (max <= 0) {
                break;
            }
            results.push(value);
            --max;
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
    return results;
};
/**
 * Computes the text selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed text selector.
 *
 * @internal
 */ var computeTextSelector = function(node) {
    var content = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(node).full.trim();
    if (!content) {
        return;
    }
    // If it's short, just return it.
    if (content.length <= MINIMUM_TEXT_LENGTH) {
        var elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            return;
        }
        return [
            content
        ];
    }
    // If it's too long, it's probably irrelevant.
    if (content.length > MAXIMUM_TEXT_LENGTH) {
        return;
    }
    // We do a binary search for the optimal length of a substring starting at 0.
    var left = MINIMUM_TEXT_LENGTH;
    var right = content.length;
    while(left <= right){
        var center = left + (right - left >> 2);
        var elements1 = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content.slice(0, center)), 2);
        if (elements1.length !== 1 || elements1[0] !== node) {
            left = center + 1;
        } else {
            right = center - 1;
        }
    }
    // Never matched.
    if (right === content.length) {
        return;
    }
    // We attempt to round the word in the event we are in the middle of a word.
    var length = right + 1;
    var remainder = content.slice(length, length + MAXIMUM_TEXT_LENGTH);
    return [
        content.slice(0, length + remainder.search(/ |$/))
    ];
}; //# sourceMappingURL=TextSelector.js.map


}),

}]);