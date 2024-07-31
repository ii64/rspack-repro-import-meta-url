"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_injected_CustomQuerySelector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js":
/*!*********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customQuerySelectors: () => (/* binding */ customQuerySelectors)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
class CustomQuerySelectorRegistry {
    #selectors = new Map();
    register(name, handler) {
        if (!handler.queryOne && handler.queryAll) {
            const querySelectorAll = handler.queryAll;
            handler.queryOne = (node, selector) => {
                for (const result of querySelectorAll(node, selector)) {
                    return result;
                }
                return null;
            };
        }
        else if (handler.queryOne && !handler.queryAll) {
            const querySelector = handler.queryOne;
            handler.queryAll = (node, selector) => {
                const result = querySelector(node, selector);
                return result ? [result] : [];
            };
        }
        else if (!handler.queryOne || !handler.queryAll) {
            throw new Error('At least one query method must be defined.');
        }
        this.#selectors.set(name, {
            querySelector: handler.queryOne,
            querySelectorAll: handler.queryAll,
        });
    }
    unregister(name) {
        this.#selectors.delete(name);
    }
    get(name) {
        return this.#selectors.get(name);
    }
    clear() {
        this.#selectors.clear();
    }
}
const customQuerySelectors = new CustomQuerySelectorRegistry();
//# sourceMappingURL=CustomQuerySelector.js.map

/***/ })

}]);