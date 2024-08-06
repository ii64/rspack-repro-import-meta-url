"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_FontEditorUtils_js"],{

/***/ "./panels/css_overview/CSSOverviewController.js":
/*!******************************************************!*\
  !*** ./panels/css_overview/CSSOverviewController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewController: () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class OverviewController extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    currentUrl;
    constructor() {
        super();
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */, this.#checkUrlAndResetIfChanged, this);
    }
    #checkUrlAndResetIfChanged() {
        if (this.currentUrl === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()) {
            return;
        }
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        this.dispatchEventToListeners("Reset" /* Events.Reset */);
    }
}
//# sourceMappingURL=CSSOverviewController.js.map

/***/ }),

/***/ "./panels/css_overview/css_overview.js":
/*!*********************************************!*\
  !*** ./panels/css_overview/css_overview.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewCompletedView: () => (/* reexport module object */ _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CSSOverviewController: () => (/* reexport module object */ _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CSSOverviewModel: () => (/* reexport module object */ _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   CSSOverviewPanel: () => (/* reexport module object */ _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   CSSOverviewProcessingView: () => (/* reexport module object */ _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CSSOverviewSidebarPanel: () => (/* reexport module object */ _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   CSSOverviewUnusedDeclarations: () => (/* reexport module object */ _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./panels/css_overview/CSSOverviewController.js");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./panels/css_overview/CSSOverviewUnusedDeclarations.js");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./panels/css_overview/CSSOverviewModel.js");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./panels/css_overview/CSSOverviewProcessingView.js");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./panels/css_overview/CSSOverviewCompletedView.js");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./panels/css_overview/CSSOverviewSidebarPanel.js");
/* harmony import */ var _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewPanel.js */ "./panels/css_overview/CSSOverviewPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















//# sourceMappingURL=css_overview.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/FontEditorUtils.js":
/*!***************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/FontEditorUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontFamilyRegex: () => (/* binding */ FontFamilyRegex),
/* harmony export */   FontPropertiesRegex: () => (/* binding */ FontPropertiesRegex),
/* harmony export */   FontSizeStaticParams: () => (/* binding */ FontSizeStaticParams),
/* harmony export */   FontWeightStaticParams: () => (/* binding */ FontWeightStaticParams),
/* harmony export */   GenericFonts: () => (/* binding */ GenericFonts),
/* harmony export */   GlobalValues: () => (/* binding */ GlobalValues),
/* harmony export */   LetterSpacingStaticParams: () => (/* binding */ LetterSpacingStaticParams),
/* harmony export */   LineHeightStaticParams: () => (/* binding */ LineHeightStaticParams),
/* harmony export */   SystemFonts: () => (/* binding */ SystemFonts),
/* harmony export */   generateComputedFontArray: () => (/* binding */ generateComputedFontArray),
/* harmony export */   getRoundingPrecision: () => (/* binding */ getRoundingPrecision)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/css_overview/css_overview.js */ "./panels/css_overview/css_overview.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// The following regexes are used within in the StylesSidebarPropertyRenderer class
// and will parse both invalid and valid values. They both match full strings.
// [^- ][a-zA-Z-]+ matches property key values (e.g. smaller, x-large, initial)
// -?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+) matches numeric property values (e.g. -.23, 3.3, 55)
// [a-zA-Z%]{0,4} matches the units of numeric property values (e.g. px, vmin, or blank units)
const FontPropertiesRegex = /^[^- ][a-zA-Z-]+$|^-?\+?(?:[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+)[a-zA-Z%]{0,4}$/;
// "[\w \,-]+",? ? matches double quoted values and the trailing comma/space (e.g. "Tahoma", )
// ('[\w \,-]+',? ?) matches single quoted values and the trailing comma/space (e.g. 'Segoe UI', )
// ([\w \,-]+,? ?) matches non quoted values and the trailing comma/space (e.g. Helvetica)
// (?: ...)+ will match 1 or more of the groups above such that it would match a value with fallbacks (e.g. "Tahoma", 'Segoe UI', Helvetica)
const FontFamilyRegex = /^"[\w \,-]+"$|^'[\w \,-]+'$|^[\w \-]+$/;
// The following regexes are used within the Font Editor and will only parse valid property values.
// Example Input/Outputs:
// font-size: "20px" -> (20)(px)
// line-height: "0.5em" -> (0.5)(em)
// font-weight: "300" -> (300);
// letter-spacing: -.625rem -> (-.625)(rem)
const fontSizeRegex = /(^[\+\d\.]+)([a-zA-Z%]+)/;
const lineHeightRegex = /(^[\+\d\.]+)([a-zA-Z%]*)/;
const fontWeightRegex = /(^[\+\d\.]+)/;
const letterSpacingRegex = /([\+-0-9\.]+)([a-zA-Z%]+)/;
const fontSizeUnits = new Set(['px', 'em', 'rem', '%', 'vh', 'vw']);
const lineHeightUnits = new Set(['', 'px', 'em', '%']);
const letterSpacingUnits = new Set(['em', 'rem', 'px']);
const fontSizeKeyValuesArray = [
    '',
    'xx-small',
    'x-small',
    'smaller',
    'small',
    'medium',
    'large',
    'larger',
    'x-large',
    'xx-large',
];
const lineHeightKeyValuesArray = ['', 'normal'];
const fontWeightKeyValuesArray = ['', 'lighter', 'normal', 'bold', 'bolder'];
const letterSpacingKeyValuesArray = ['', 'normal'];
const GlobalValues = ['inherit', 'initial', 'unset'];
fontSizeKeyValuesArray.push(...GlobalValues);
lineHeightKeyValuesArray.push(...GlobalValues);
fontWeightKeyValuesArray.push(...GlobalValues);
letterSpacingKeyValuesArray.push(...GlobalValues);
const fontSizeKeyValues = new Set(fontSizeKeyValuesArray);
const lineHeightKeyValues = new Set(lineHeightKeyValuesArray);
const fontWeightKeyValues = new Set(fontWeightKeyValuesArray);
const letterSpacingKeyValues = new Set(letterSpacingKeyValuesArray);
const fontSizeRangeMap = new Map([
    // Common Units
    ['px', { min: 0, max: 72, step: 1 }],
    ['em', { min: 0, max: 4.5, step: .1 }],
    ['rem', { min: 0, max: 4.5, step: .1 }],
    ['%', { min: 0, max: 450, step: 1 }],
    ['vh', { min: 0, max: 10, step: .1 }],
    ['vw', { min: 0, max: 10, step: .1 }],
    // Extra Units
    ['vmin', { min: 0, max: 10, step: .1 }],
    ['vmax', { min: 0, max: 10, step: .1 }],
    ['cm', { min: 0, max: 2, step: .1 }],
    ['mm', { min: 0, max: 20, step: .1 }],
    ['in', { min: 0, max: 1, step: .01 }],
    ['pt', { min: 0, max: 54, step: 1 }],
    ['pc', { min: 0, max: 4.5, step: .1 }],
]);
const lineHeightRangeMap = new Map([
    // Common Units
    ['', { min: 0, max: 2, step: .1 }],
    ['em', { min: 0, max: 2, step: .1 }],
    ['%', { min: 0, max: 200, step: 1 }],
    ['px', { min: 0, max: 32, step: 1 }],
    // Extra Units
    ['rem', { min: 0, max: 2, step: .1 }],
    ['vh', { min: 0, max: 4.5, step: .1 }],
    ['vw', { min: 0, max: 4.5, step: .1 }],
    ['vmin', { min: 0, max: 4.5, step: .1 }],
    ['vmax', { min: 0, max: 4.5, step: .1 }],
    ['cm', { min: 0, max: 1, step: .1 }],
    ['mm', { min: 0, max: 8.5, step: .1 }],
    ['in', { min: 0, max: .5, step: .1 }],
    ['pt', { min: 0, max: 24, step: 1 }],
    ['pc', { min: 0, max: 2, step: .1 }],
]);
const fontWeightRangeMap = new Map([
    ['', { min: 100, max: 700, step: 100 }],
]);
const letterSpacingRangeMap = new Map([
    // Common Units
    ['px', { min: -10, max: 10, step: .01 }],
    ['em', { min: -0.625, max: 0.625, step: .001 }],
    ['rem', { min: -0.625, max: 0.625, step: .001 }],
    // Extra Units
    ['%', { min: -62.5, max: 62.5, step: .1 }],
    ['vh', { min: -1.5, max: 1.5, step: .01 }],
    ['vw', { min: -1.5, max: 1.5, step: .01 }],
    ['vmin', { min: -1.5, max: 1.5, step: .01 }],
    ['vmax', { min: -1.5, max: 1.5, step: .01 }],
    ['cm', { min: -0.25, max: .025, step: .001 }],
    ['mm', { min: -2.5, max: 2.5, step: .01 }],
    ['in', { min: -0.1, max: 0.1, step: .001 }],
    ['pt', { min: -7.5, max: 7.5, step: .01 }],
    ['pc', { min: -0.625, max: 0.625, step: .001 }],
]);
const FontSizeStaticParams = {
    regex: fontSizeRegex,
    units: fontSizeUnits,
    keyValues: fontSizeKeyValues,
    rangeMap: fontSizeRangeMap,
    defaultUnit: 'px',
};
const LineHeightStaticParams = {
    regex: lineHeightRegex,
    units: lineHeightUnits,
    keyValues: lineHeightKeyValues,
    rangeMap: lineHeightRangeMap,
    defaultUnit: '',
};
const FontWeightStaticParams = {
    regex: fontWeightRegex,
    units: null,
    keyValues: fontWeightKeyValues,
    rangeMap: fontWeightRangeMap,
    defaultUnit: null,
};
const LetterSpacingStaticParams = {
    regex: letterSpacingRegex,
    units: letterSpacingUnits,
    keyValues: letterSpacingKeyValues,
    rangeMap: letterSpacingRangeMap,
    defaultUnit: 'em',
};
const SystemFonts = [
    'Arial',
    'Bookman',
    'Candara',
    'Comic Sans MS',
    'Courier New',
    'Garamond',
    'Georgia',
    'Helvetica',
    'Impact',
    'Palatino',
    'Roboto',
    'Times New Roman',
    'Verdana',
];
const GenericFonts = [
    'serif',
    'sans-serif',
    'monspace',
    'cursive',
    'fantasy',
    'system-ui',
    'ui-serif',
    'ui-sans-serif',
    'ui-monospace',
    'ui-rounded',
    'emoji',
    'math',
    'fangsong',
];
async function generateComputedFontArray() {
    const modelArray = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel);
    if (modelArray) {
        const cssOverviewModel = modelArray[0];
        if (cssOverviewModel) {
            const { fontInfo } = await cssOverviewModel.getNodeStyleStats();
            const computedFontArray = Array.from(fontInfo.keys());
            return computedFontArray;
        }
    }
    return [];
}
function getRoundingPrecision(step) {
    switch (step) {
        case 1:
            return 0;
        case .1:
            return 1;
        case .01:
            return 2;
        case .001:
            return 3;
        default:
            return 0;
    }
}
//# sourceMappingURL=FontEditorUtils.js.map

/***/ })

}]);