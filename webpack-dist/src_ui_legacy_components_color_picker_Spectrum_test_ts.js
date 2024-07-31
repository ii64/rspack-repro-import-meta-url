"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_color_picker_Spectrum_test_ts"],{

/***/ "./src/ui/legacy/components/color_picker/Spectrum.test.ts":
/*!****************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/Spectrum.test.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _color_picker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const displayP3Color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('color(display-p3 1 1 1)');
const rgbColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('rgb(255 0 0)');
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('ColorPicker aka Spectrum', () => {
    beforeEach(async () => {
        const forceNew = true;
        const actionRegistry = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.ActionRegistry.ActionRegistry.instance({ forceNew });
        _legacy_js__WEBPACK_IMPORTED_MODULE_4__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew, actionRegistry });
    });
    describe('sRGB overlay', () => {
        it('should show sRGB overlay when the format supports display-p3 colors', () => {
            const spectrum = new _color_picker_js__WEBPACK_IMPORTED_MODULE_5__.Spectrum.Spectrum();
            spectrum.setColor(displayP3Color);
            assert.isNotNull(spectrum.contentElement.querySelector('devtools-spectrum-srgb-overlay'));
        });
        it('should not show sRGB overlay when the format doesn\'t support display-p3 colors', () => {
            const spectrum = new _color_picker_js__WEBPACK_IMPORTED_MODULE_5__.Spectrum.Spectrum();
            spectrum.setColor(rgbColor);
            assert.isNull(spectrum.contentElement.querySelector('devtools-spectrum-srgb-overlay'));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('PaletteGenerator', () => {
    it('does not interpret selectors as colors', async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const [model] = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(model);
        const stylesheet = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleSheetHeader.CSSStyleSheetHeader);
        sinon.stub(model, 'allStyleSheets').returns([stylesheet]);
        const content = `
    #f00: {
      --#fff: unset;
    }
    body: {color: #0f0;}
    #00f: {}
    `;
        stylesheet.requestContent.resolves({ content, isEncoded: false });
        const palette = await new Promise(r => new _color_picker_js__WEBPACK_IMPORTED_MODULE_5__.Spectrum.PaletteGenerator(r));
        assert.deepStrictEqual(palette.colors, ['#0f0']);
    });
});


/***/ }),

/***/ "./src/ui/legacy/components/color_picker/color_picker.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/color_picker.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorFormatSpec: () => (/* reexport module object */ _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ContrastDetails: () => (/* reexport module object */ _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ContrastInfo: () => (/* reexport module object */ _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ContrastOverlay: () => (/* reexport module object */ _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   FormatPickerContextMenu: () => (/* reexport module object */ _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   Spectrum: () => (/* reexport module object */ _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./src/ui/legacy/components/color_picker/ColorFormatSpec.ts");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./src/ui/legacy/components/color_picker/ContrastDetails.ts");
/* harmony import */ var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./src/ui/legacy/components/color_picker/ContrastInfo.ts");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./src/ui/legacy/components/color_picker/ContrastOverlay.ts");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./src/ui/legacy/components/color_picker/FormatPickerContextMenu.ts");
/* harmony import */ var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./src/ui/legacy/components/color_picker/Spectrum.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);