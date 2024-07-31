"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_persistence_PlatformFileSystem_test_ts"],{

/***/ "./src/models/persistence/PlatformFileSystem.test.ts":
/*!***********************************************************!*\
  !*** ./src/models/persistence/PlatformFileSystem.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../persistence/persistence.js */ "./src/models/persistence/persistence.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('PlatformFileSystem', () => {
    it('can be instantiated successfully', () => {
        const platformFileSystem = new _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.PlatformFileSystem.PlatformFileSystem('Test Path', 'Test Type');
        assert.strictEqual(platformFileSystem.path(), 'Test Path', 'path was not set or retrieved correctly');
        assert.strictEqual(platformFileSystem.type(), 'Test Type', 'Type was not set or retrieved correctly');
    });
    // TODO continue writing tests here or use another describe block
});


/***/ })

}]);