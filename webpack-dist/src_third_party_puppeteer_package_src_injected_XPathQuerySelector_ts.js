"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_injected_XPathQuerySelector_ts"],{

/***/ "./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xpathQuerySelectorAll: () => (/* binding */ xpathQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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


/***/ })

}]);