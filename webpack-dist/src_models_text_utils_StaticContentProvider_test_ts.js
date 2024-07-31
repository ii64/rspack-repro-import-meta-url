"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_text_utils_StaticContentProvider_test_ts"],{

/***/ "./src/models/text_utils/StaticContentProvider.test.ts":
/*!*************************************************************!*\
  !*** ./src/models/text_utils/StaticContentProvider.test.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_utils.js */ "./src/models/text_utils/text_utils.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('StaticContentProvider', () => {
    const jsonResource = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType('application/json');
    const testUrl = 'www.testurl.com';
    it('can be created from a string source', () => {
        const provider = _text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StaticContentProvider.StaticContentProvider.fromString(testUrl, jsonResource, '{ "hello": "world" }');
        assert.instanceOf(provider, _text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StaticContentProvider.StaticContentProvider);
    });
    it('lazily fetches its contents when requestContent is called', async () => {
        const jsonContent = '{ "hello": "world" }';
        const provider = _text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StaticContentProvider.StaticContentProvider.fromString(testUrl, jsonResource, jsonContent);
        const contents = await provider.requestContentData();
        assert.instanceOf(contents, _text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData);
        assert.strictEqual(contents.text, jsonContent);
        assert.isFalse(contents.createdFromBase64);
    });
});


/***/ })

}]);