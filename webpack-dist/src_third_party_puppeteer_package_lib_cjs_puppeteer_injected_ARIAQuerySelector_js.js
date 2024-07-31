"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_injected_ARIAQuerySelector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/ARIAQuerySelector.js":
/*!*******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/injected/ARIAQuerySelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ariaQuerySelectorAll = exports.ariaQuerySelector = void 0;
const ariaQuerySelector = (root, selector) => {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    return globalThis.__ariaQuerySelector(root, selector);
};
exports.ariaQuerySelector = ariaQuerySelector;
const ariaQuerySelectorAll = async function* (root, selector) {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    yield* await globalThis.__ariaQuerySelectorAll(root, selector);
};
exports.ariaQuerySelectorAll = ariaQuerySelectorAll;
//# sourceMappingURL=ARIAQuerySelector.js.map

/***/ })

}]);