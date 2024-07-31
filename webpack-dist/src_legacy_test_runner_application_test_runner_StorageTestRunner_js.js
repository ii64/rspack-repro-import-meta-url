"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_application_test_runner_StorageTestRunner_js"],{

/***/ "./src/legacy_test_runner/application_test_runner/StorageTestRunner.js":
/*!*****************************************************************************!*\
  !*** ./src/legacy_test_runner/application_test_runner/StorageTestRunner.js ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStorageView: () => (/* binding */ isStorageView)
/* harmony export */ });
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const isStorageView = function(view) {
  return view instanceof _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__.StorageView.StorageView;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);