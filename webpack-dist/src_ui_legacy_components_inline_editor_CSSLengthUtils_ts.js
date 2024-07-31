"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSLengthUtils_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLengthRegex: () => (/* binding */ CSSLengthRegex),
/* harmony export */   LENGTH_UNITS: () => (/* binding */ LENGTH_UNITS),
/* harmony export */   LengthUnit: () => (/* binding */ LengthUnit),
/* harmony export */   parseText: () => (/* binding */ parseText)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LengthUnit;
(function (LengthUnit) {
    // absolute units
    LengthUnit["PIXEL"] = "px";
    LengthUnit["CENTIMETER"] = "cm";
    LengthUnit["MILLIMETER"] = "mm";
    LengthUnit["QUARTERMILLIMETER"] = "Q";
    LengthUnit["INCH"] = "in";
    LengthUnit["PICA"] = "pc";
    LengthUnit["POINT"] = "pt";
    // relative units
    LengthUnit["CAP"] = "cap";
    LengthUnit["CH"] = "ch";
    LengthUnit["EM"] = "em";
    LengthUnit["EX"] = "ex";
    LengthUnit["IC"] = "ic";
    LengthUnit["LH"] = "lh";
    LengthUnit["RCAP"] = "rcap";
    LengthUnit["RCH"] = "rch";
    LengthUnit["REM"] = "rem";
    LengthUnit["REX"] = "rex";
    LengthUnit["RIC"] = "ric";
    LengthUnit["RLH"] = "rlh";
    LengthUnit["VB"] = "vb";
    LengthUnit["VH"] = "vh";
    LengthUnit["VI"] = "vi";
    LengthUnit["VW"] = "vw";
    LengthUnit["VMIN"] = "vmin";
    LengthUnit["VMAX"] = "vmax";
})(LengthUnit || (LengthUnit = {}));
const LENGTH_UNITS = [
    LengthUnit.PIXEL, LengthUnit.CENTIMETER, LengthUnit.MILLIMETER, LengthUnit.QUARTERMILLIMETER,
    LengthUnit.INCH, LengthUnit.PICA, LengthUnit.POINT, LengthUnit.CAP,
    LengthUnit.CH, LengthUnit.EM, LengthUnit.EX, LengthUnit.IC,
    LengthUnit.LH, LengthUnit.RCAP, LengthUnit.RCH, LengthUnit.REM,
    LengthUnit.REX, LengthUnit.RIC, LengthUnit.RLH, LengthUnit.VB,
    LengthUnit.VH, LengthUnit.VI, LengthUnit.VW, LengthUnit.VMIN,
    LengthUnit.VMAX,
];
const CSSLengthRegex = new RegExp(`(?<value>[+-]?\\d*\\.?\\d+)(?<unit>${LENGTH_UNITS.join('|')})`);
const parseText = (text) => {
    const result = text.match(CSSLengthRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit,
    };
};


/***/ })

}]);