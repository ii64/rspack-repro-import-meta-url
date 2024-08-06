"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_CSSStyleSheetHeader_test_js"],{

/***/ "./core/sdk/CSSStyleSheetHeader.test.js":
/*!**********************************************!*\
  !*** ./core/sdk/CSSStyleSheetHeader.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('CSSStyleSheetHeader', () => {
    describe('createPageResourceLoadInitiator', () => {
        const frameId = 'Frame#123';
        const styleSheetId = 'StyleSheet#123';
        const sourceURL = 'http://localhost/style.css';
        it('yields the correct frame ID', () => {
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
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
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
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
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
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
            const target = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target);
            const cssModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel);
            cssModel.target.returns(target);
            const cssStyleSheetHeader = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleSheetHeader.CSSStyleSheetHeader(cssModel, {
                styleSheetId,
                frameId,
                sourceURL,
                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
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
//# sourceMappingURL=CSSStyleSheetHeader.test.js.map

/***/ })

}]);