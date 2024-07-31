"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_IsolatedWorlds_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorlds.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/IsolatedWorlds.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAIN_WORLD: () => (/* binding */ MAIN_WORLD),
/* harmony export */   PUPPETEER_WORLD: () => (/* binding */ PUPPETEER_WORLD)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique key for {@link IsolatedWorldChart} to denote the default world.
 * Execution contexts are automatically created in the default world.
 *
 * @internal
 */
const MAIN_WORLD = Symbol('mainWorld');
/**
 * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
 * This world contains all puppeteer-internal bindings/code.
 *
 * @internal
 */
const PUPPETEER_WORLD = Symbol('puppeteerWorld');


/***/ })

}]);