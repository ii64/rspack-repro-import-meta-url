"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_puppeteer-core_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/puppeteer-core.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/puppeteer-core.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.launch = exports.executablePath = exports.defaultArgs = exports.connect = void 0;
__exportStar(__webpack_require__(/*! ./index.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/index.js"), exports);
const PuppeteerNode_js_1 = __webpack_require__(/*! ./node/PuppeteerNode.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/PuppeteerNode.js");
/**
 * @public
 */
const puppeteer = new PuppeteerNode_js_1.PuppeteerNode({
    isPuppeteerCore: true,
});
/**
 * @public
 */
exports.connect = puppeteer.connect, 
/**
 * @public
 */
exports.defaultArgs = puppeteer.defaultArgs, 
/**
 * @public
 */
exports.executablePath = puppeteer.executablePath, 
/**
 * @public
 */
exports.launch = puppeteer.launch;
exports["default"] = puppeteer;
//# sourceMappingURL=puppeteer-core.js.map

/***/ })

}]);