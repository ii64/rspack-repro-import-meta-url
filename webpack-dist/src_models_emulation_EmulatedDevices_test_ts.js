"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_emulation_EmulatedDevices_test_ts"],{

/***/ "./src/models/emulation/EmulatedDevices.test.ts":
/*!******************************************************!*\
  !*** ./src/models/emulation/EmulatedDevices.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emulation/emulation.js */ "./src/models/emulation/emulation.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const BASE_URL = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../front_end/emulated_devices/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b).toString();
describe('EmulatedDevices can compute CSS image URLs', () => {
    it('as regular string', () => {
        const regularString = 'no url here';
        assert.strictEqual(regularString, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL(regularString));
    });
    it('with empty @url', () => {
        assert.strictEqual(BASE_URL, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL('@url()'));
    });
    it('with single file', () => {
        assert.strictEqual(`${BASE_URL}file.js`, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL('@url(file.js)'));
    });
    it('with surrounding text', () => {
        assert.strictEqual(`before ${BASE_URL}long/path/to/the/file.png after`, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL('before @url(long/path/to/the/file.png) after'));
    });
    it('with multiple URLs', () => {
        assert.strictEqual(`${BASE_URL}first.png ${BASE_URL}second.gif`, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL('@url(first.png) @url(second.gif)'));
    });
    it('with multiple URLs with text around', () => {
        assert.strictEqual(`a lot of ${BASE_URL}stuff in a ${BASE_URL}singleline and more url() @@url (not/a/resource.gif)`, _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.computeRelativeImageURL('a lot of @url(stuff) in a @url(single)line and more url() @@url (not/a/resource.gif)'));
    });
});


/***/ })

}]);