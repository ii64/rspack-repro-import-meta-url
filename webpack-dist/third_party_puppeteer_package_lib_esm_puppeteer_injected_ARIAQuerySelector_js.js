"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_ARIAQuerySelector_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js":
/*!***************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaQuerySelector: () => (/* binding */ ariaQuerySelector),
/* harmony export */   ariaQuerySelectorAll: () => (/* binding */ ariaQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const ariaQuerySelector = (root, selector) => {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    return globalThis.__ariaQuerySelector(root, selector);
};
const ariaQuerySelectorAll = async function* (root, selector) {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    yield* await globalThis.__ariaQuerySelectorAll(root, selector);
};
//# sourceMappingURL=ARIAQuerySelector.js.map

/***/ })

}]);