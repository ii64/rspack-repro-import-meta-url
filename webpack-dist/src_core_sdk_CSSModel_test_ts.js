"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_CSSModel_test_ts"],{

/***/ "./src/core/sdk/CSSModel.test.ts":
/*!***************************************!*\
  !*** ./src/core/sdk/CSSModel.test.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CSSModel', () => {
    it('gets the FontFace of a source URL', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel(target);
        const src = 'mock.com';
        const fontFace = { fontFamily: 'Roboto', src, fontDisplay: 'swap' };
        cssModel.fontsUpdated(fontFace);
        const fontFaceForSource = cssModel.fontFaceForSource(src);
        assert.strictEqual(fontFaceForSource?.getFontFamily(), fontFace.fontFamily);
        assert.strictEqual(fontFaceForSource?.getSrc(), fontFace.src);
        assert.strictEqual(fontFaceForSource?.getFontDisplay(), fontFace.fontDisplay);
    });
    it('reports stylesheets that fail to load as constructed stylesheets', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel(target);
        const header = {
            styleSheetId: 'stylesheet',
            frameId: 'frame',
            sourceURL: 'http://stylesheet.test/404.css',
            origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
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
        const addedPromise = cssModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.Events.StyleSheetAdded);
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
            origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.CSS.StyleSheetOrigin.Regular,
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
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            cssModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel);
        });
        it('resets on navigation', () => {
            assert.exists(cssModel);
            cssModel.styleSheetAdded(header);
            let styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
            styleSheetIds =
                cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, []);
        });
        it('does not reset on prerender activation', () => {
            assert.exists(cssModel);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target);
            cssModel.styleSheetAdded(header);
            let styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.activate)(target);
            styleSheetIds =
                cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, ['stylesheet']);
        });
    });
});


/***/ })

}]);