"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_injected_CSSSelector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CSSSelector.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/CSSSelector.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cssQuerySelectorAll = exports.cssQuerySelector = void 0;
const cssQuerySelector = (root, selector) => {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
exports.cssQuerySelector = cssQuerySelector;
const cssQuerySelectorAll = function (root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
};
exports.cssQuerySelectorAll = cssQuerySelectorAll;
//# sourceMappingURL=CSSSelector.js.map

/***/ })

}]);