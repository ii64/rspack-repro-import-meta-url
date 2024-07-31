"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_injected_XPathQuerySelector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/XPathQuerySelector.js":
/*!********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/XPathQuerySelector.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.xpathQuerySelectorAll = void 0;
/**
 * @internal
 */
const xpathQuerySelectorAll = function* (root, selector, maxResults = -1) {
    const doc = root.ownerDocument || document;
    const iterator = doc.evaluate(selector, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const items = [];
    let item;
    // Read all results upfront to avoid
    // https://stackoverflow.com/questions/48235278/xpath-error-the-document-has-mutated-since-the-result-was-returned.
    while ((item = iterator.iterateNext())) {
        items.push(item);
        if (maxResults && items.length === maxResults) {
            break;
        }
    }
    for (let i = 0; i < items.length; i++) {
        item = items[i];
        yield item;
        delete items[i];
    }
};
exports.xpathQuerySelectorAll = xpathQuerySelectorAll;
//# sourceMappingURL=XPathQuerySelector.js.map

/***/ })

}]);