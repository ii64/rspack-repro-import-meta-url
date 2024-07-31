"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PlatformFontsWidget_test_ts"],{

/***/ "./src/panels/elements/PlatformFontsWidget.test.ts":
/*!*********************************************************!*\
  !*** ./src/panels/elements/PlatformFontsWidget.test.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__.describeWithMockConnection)('PlatformFontsWidget', () => {
    it('correctly displays font stats', async () => {
        const sharedModel = {};
        sharedModel.addEventListener = sinon.stub();
        const cssModel = {};
        cssModel.getPlatformFonts = async () => ([
            {
                familyName: 'Arial',
                postScriptName: 'ArialMT',
                isCustomFont: false,
                glyphCount: 5,
            },
            {
                familyName: 'Merriweather Black',
                postScriptName: 'Merriweather-Black',
                isCustomFont: false,
                glyphCount: 18,
            },
        ]);
        const node = {
            id: 1,
        };
        sharedModel.cssModel = () => cssModel;
        sharedModel.node = () => node;
        const platformFontsWidget = new _elements_js__WEBPACK_IMPORTED_MODULE_1__.PlatformFontsWidget.PlatformFontsWidget(sharedModel);
        await platformFontsWidget.doUpdate();
        const fontStatsItems = platformFontsWidget.contentElement.querySelectorAll('.font-stats-item');
        const firstFontContent = fontStatsItems[0].textContent;
        const secontFontContent = fontStatsItems[1].textContent;
        assert.include(firstFontContent, 'Family name: Merriweather Black');
        assert.include(firstFontContent, 'PostScript name: Merriweather-Black');
        assert.include(firstFontContent, 'Font origin: Local file(18 glyphs)');
        assert.include(secontFontContent, 'Family name: Arial');
        assert.include(secontFontContent, 'PostScript name: ArialMT');
        assert.include(secontFontContent, 'Font origin: Local file(5 glyphs)');
    });
});


/***/ })

}]);