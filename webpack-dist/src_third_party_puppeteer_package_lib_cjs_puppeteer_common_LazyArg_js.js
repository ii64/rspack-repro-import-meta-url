"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_LazyArg_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LazyArg = void 0;
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
exports.LazyArg = LazyArg;
//# sourceMappingURL=LazyArg.js.map

/***/ })

}]);