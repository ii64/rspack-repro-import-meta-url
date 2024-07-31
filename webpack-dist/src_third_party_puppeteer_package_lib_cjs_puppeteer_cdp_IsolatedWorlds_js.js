"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_IsolatedWorlds_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorlds.js":
/*!***********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorlds.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PUPPETEER_WORLD = exports.MAIN_WORLD = void 0;
/**
 * A unique key for {@link IsolatedWorldChart} to denote the default world.
 * Execution contexts are automatically created in the default world.
 *
 * @internal
 */
exports.MAIN_WORLD = Symbol('mainWorld');
/**
 * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
 * This world contains all puppeteer-internal bindings/code.
 *
 * @internal
 */
exports.PUPPETEER_WORLD = Symbol('puppeteerWorld');
//# sourceMappingURL=IsolatedWorlds.js.map

/***/ })

}]);