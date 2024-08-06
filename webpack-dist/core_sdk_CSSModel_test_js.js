"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_CSSModel_test_js"],{

/***/ "./core/sdk/CSSModel.test.js":
/*!***********************************!*\
  !*** ./core/sdk/CSSModel.test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('CSSModel', () => {
    it('gets the FontFace of a source URL', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel(target);
        const src = 'mock.com';
        const fontFace = { fontFamily: 'Roboto', src, fontDisplay: 'swap' };
        cssModel.fontsUpdated(fontFace);
        const fontFaceForSource = cssModel.fontFaceForSource(src);
        assert.strictEqual(fontFaceForSource?.getFontFamily(), fontFace.fontFamily);
        assert.strictEqual(fontFaceForSource?.getSrc(), fontFace.src);
        assert.strictEqual(fontFaceForSource?.getFontDisplay(), fontFace.fontDisplay);
    });
    it('reports stylesheets that fail to load as constructed stylesheets', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel(target);
        const header = {
            styleSheetId: 'stylesheet',
            frameId: 'frame',
            sourceURL: 'http://stylesheet.test/404.css',
            origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
            title: 'failed sheet',
            disabled: false,
            isInline: false,
            isMutable: false,
            isConstructed: false,
            loadingFailed: true,
            startLine: 0,
            startColumn: 0,
            length: 0,
            endLine: 0,
            endColumn: 0,
        };
        const addedPromise = cssModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded);
        cssModel.styleSheetAdded(header);
        const cssModelHeader = await addedPromise;
        assert.deepEqual(cssModelHeader.sourceURL, '');
        assert.deepEqual(cssModelHeader.isConstructed, true);
    });
    describe('on primary page change', () => {
        let target;
        let cssModel;
        const header = {
            styleSheetId: 'stylesheet',
            frameId: 'frame',
            sourceURL: 'http://example.com/styles.css',
            origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */,
            title: 'title',
            disabled: false,
            isInline: false,
            isMutable: false,
            isConstructed: false,
            loadingFailed: false,
            startLine: 0,
            startColumn: 0,
            length: 0,
            endLine: 0,
            endColumn: 0,
        };
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            cssModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel);
        });
        it('resets on navigation', () => {
            assert.exists(cssModel);
            cssModel.styleSheetAdded(header);
            let styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
            styleSheetIds =
                cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, []);
        });
        it('does not reset on prerender activation', () => {
            assert.exists(cssModel);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target);
            cssModel.styleSheetAdded(header);
            let styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.activate)(target);
            styleSheetIds =
                cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
        });
    });
});
//# sourceMappingURL=CSSModel.test.js.map

/***/ })

}]);