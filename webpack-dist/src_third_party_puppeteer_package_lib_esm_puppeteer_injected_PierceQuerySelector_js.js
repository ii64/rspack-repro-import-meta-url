"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js":
/*!*********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pierceQuerySelector: () => (/* binding */ pierceQuerySelector),
/* harmony export */   pierceQuerySelectorAll: () => (/* binding */ pierceQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const pierceQuerySelector = (root, selector) => {
    let found = null;
    const search = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        } while (!found && iter.nextNode());
    };
    if (root instanceof Document) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */
const pierceQuerySelectorAll = (element, selector) => {
    const result = [];
    const collect = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        } while (iter.nextNode());
    };
    if (element instanceof Document) {
        element = element.documentElement;
    }
    collect(element);
    return result;
};
//# sourceMappingURL=PierceQuerySelector.js.map

/***/ })

}]);