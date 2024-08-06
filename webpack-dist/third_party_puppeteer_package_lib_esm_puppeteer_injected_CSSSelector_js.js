"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_CSSSelector_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssQuerySelector: () => (/* binding */ cssQuerySelector),
/* harmony export */   cssQuerySelectorAll: () => (/* binding */ cssQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const cssQuerySelector = (root, selector) => {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
const cssQuerySelectorAll = function (root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
};
//# sourceMappingURL=CSSSelector.js.map

/***/ })

}]);