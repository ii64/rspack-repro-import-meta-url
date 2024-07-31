(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_enable-easter-egg_js"],{

/***/ "./src/panels/timeline/enable-easter-egg.js":
/*!**************************************************!*\
  !*** ./src/panels/timeline/enable-easter-egg.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const {writeIfChanged} = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../scripts/build/ninja/write-if-changed.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const [, , targetGenDir] = process.argv;

let value = 'false';

if (process.argv.includes('--should-enable')) {
  value = 'true';
}

writeIfChanged(path.join(targetGenDir, 'EasterEgg.js'), `export const SHOULD_SHOW_EASTER_EGG = ${value};`);


/***/ })

}]);