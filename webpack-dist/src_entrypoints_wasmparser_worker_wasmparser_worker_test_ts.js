"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_wasmparser_worker_wasmparser_worker_test_ts"],{

/***/ "./src/entrypoints/wasmparser_worker/wasmparser_worker.test.ts":
/*!*********************************************************************!*\
  !*** ./src/entrypoints/wasmparser_worker/wasmparser_worker.test.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('WasmParserWorker', () => {
    it('module can be imported', async () => {
        await Promise.all(/*! import() */[__webpack_require__.e("src_third_party_wasmparser_package_dist_esm_WasmParser_js"), __webpack_require__.e("src_third_party_wasmparser_package_dist_esm_WasmDis_js"), __webpack_require__.e("src_entrypoints_wasmparser_worker_wasmparser_worker_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wasmparser_worker.js */ "./src/entrypoints/wasmparser_worker/wasmparser_worker.ts"));
    });
});


/***/ })

}]);