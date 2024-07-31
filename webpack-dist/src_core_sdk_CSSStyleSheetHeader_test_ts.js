"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_CSSStyleSheetHeader_test_ts"],{

/***/ "./src/core/sdk/CSSStyleSheetHeader.test.ts":
/*!**************************************************!*\
  !*** ./src/core/sdk/CSSStyleSheetHeader.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('CSSStyleSheetHeader', () => {
    describe('createPageResourceLoadInitiator', () => {
        const frameId = 'Frame#123';
        const styleSheetId = 'StyleSheet#123';
        const sourceURL = 'http://localhost/style.css';
        it('yields the correct frame ID', () => {
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
                title: 'style.css',
                disabled: false,
                isInline: false,
                isMutable: false,
                isConstructed: false,
                startLine: 0,
                startColumn: 0,
                length: 10,
                endLine: 1,
                endColumn: 8,
            });
            assert.strictEqual(cssStyleSheetHeader.createPageResourceLoadInitiator().frameId, 'Frame#123');
        });
        it('yields the correct initiator URL', () => {
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
                title: 'style.css',
                disabled: false,
                isInline: false,
                isMutable: false,
                isConstructed: false,
                startLine: 0,
                startColumn: 0,
                length: 10,
                endLine: 1,
                endColumn: 8,
            });
            assert.strictEqual(cssStyleSheetHeader.createPageResourceLoadInitiator().initiatorUrl, sourceURL);
        });
        it('yields an empty initiator URL when //# sourceMappingURL is present', () => {
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
                title: 'style.css',
                disabled: false,
                hasSourceURL: true,
                isInline: false,
                isMutable: false,
                isConstructed: false,
                startLine: 0,
                startColumn: 0,
                length: 10,
                endLine: 1,
                endColumn: 8,
            });
            assert.isEmpty(cssStyleSheetHeader.createPageResourceLoadInitiator().initiatorUrl);
        });
        it('yields the correct target', () => {
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
                title: 'style.css',
                disabled: false,
                isInline: false,
                isMutable: false,
                isConstructed: false,
                startLine: 0,
                startColumn: 0,
                length: 10,
                endLine: 1,
                endColumn: 8,
            });
            assert.strictEqual(cssStyleSheetHeader.createPageResourceLoadInitiator().target, target);
        });
    });
});


/***/ })

}]);