"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_StringOutputStream_test_ts"],{

/***/ "./src/core/common/StringOutputStream.test.ts":
/*!****************************************************!*\
  !*** ./src/core/common/StringOutputStream.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const StringOutputStream = _common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream;
describe('StringOutputStream', () => {
    it('can be instantiated without issues', () => {
        const stream = new StringOutputStream();
        assert.strictEqual(stream.data(), '', 'data is not empty');
    });
    it('can be closed without issues', async () => {
        const stream = new StringOutputStream();
        await stream.close();
        assert.strictEqual(stream.data(), '', 'data is not empty');
    });
    it('can be written to without issues', async () => {
        const stream = new StringOutputStream();
        await stream.write('Hello');
        await stream.write(' ');
        await stream.write('world!');
        await stream.close();
        assert.strictEqual(stream.data(), 'Hello world!', 'data does not match what was written');
    });
});


/***/ })

}]);