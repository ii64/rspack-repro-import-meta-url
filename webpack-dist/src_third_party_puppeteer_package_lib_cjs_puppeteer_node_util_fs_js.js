"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_node_util_fs_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/util/fs.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/util/fs.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rmSync = exports.rm = void 0;
const fs_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const rmOptions = {
    force: true,
    recursive: true,
    maxRetries: 5,
};
/**
 * @internal
 */
async function rm(path) {
    await fs_1.default.promises.rm(path, rmOptions);
}
exports.rm = rm;
/**
 * @internal
 */
function rmSync(path) {
    fs_1.default.rmSync(path, rmOptions);
}
exports.rmSync = rmSync;
//# sourceMappingURL=fs.js.map

/***/ })

}]);