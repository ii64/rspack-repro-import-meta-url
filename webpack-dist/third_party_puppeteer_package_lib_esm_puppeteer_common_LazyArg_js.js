"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_LazyArg_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js":
/*!***************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/LazyArg.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyArg: () => (/* binding */ LazyArg)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class LazyArg {
    static create = (get) => {
        // We don't want to introduce LazyArg to the type system, otherwise we would
        // have to make it public.
        return new LazyArg(get);
    };
    #get;
    constructor(get) {
        this.#get = get;
    }
    async get(context) {
        return await this.#get(context);
    }
}
//# sourceMappingURL=LazyArg.js.map

/***/ })

}]);