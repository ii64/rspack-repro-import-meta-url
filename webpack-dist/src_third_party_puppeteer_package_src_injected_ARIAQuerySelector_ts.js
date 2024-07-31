"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_injected_ARIAQuerySelector_ts"],{

/***/ "./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts ***!
  \*****************************************************************************/
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


/***/ })

}]);