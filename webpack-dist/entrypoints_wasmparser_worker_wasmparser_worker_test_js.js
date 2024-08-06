"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_wasmparser_worker_wasmparser_worker_test_js"],{

/***/ "./entrypoints/wasmparser_worker/wasmparser_worker.test.js":
/*!*****************************************************************!*\
  !*** ./entrypoints/wasmparser_worker/wasmparser_worker.test.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('WasmParserWorker', () => {
    it('module can be imported', async () => {
        await Promise.all(/*! import() */[__webpack_require__.e("third_party_wasmparser_package_dist_esm_WasmParser_js"), __webpack_require__.e("third_party_wasmparser_package_dist_esm_WasmDis_js"), __webpack_require__.e("entrypoints_wasmparser_worker_wasmparser_worker_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wasmparser_worker.js */ "./entrypoints/wasmparser_worker/wasmparser_worker.js"));
    });
});
//# sourceMappingURL=wasmparser_worker.test.js.map

/***/ })

}]);