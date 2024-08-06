"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSLengthUtils_js"], {
"./ui/legacy/components/inline_editor/CSSLengthUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSLengthRegex: function() { return CSSLengthRegex; },
  LENGTH_UNITS: function() { return LENGTH_UNITS; },
  parseText: function() { return parseText; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LENGTH_UNITS = [
    "px" /* LengthUnit.PIXEL */ ,
    "cm" /* LengthUnit.CENTIMETER */ ,
    "mm" /* LengthUnit.MILLIMETER */ ,
    "Q" /* LengthUnit.QUARTERMILLIMETER */ ,
    "in" /* LengthUnit.INCH */ ,
    "pc" /* LengthUnit.PICA */ ,
    "pt" /* LengthUnit.POINT */ ,
    "cap" /* LengthUnit.CAP */ ,
    "ch" /* LengthUnit.CH */ ,
    "em" /* LengthUnit.EM */ ,
    "ex" /* LengthUnit.EX */ ,
    "ic" /* LengthUnit.IC */ ,
    "lh" /* LengthUnit.LH */ ,
    "rcap" /* LengthUnit.RCAP */ ,
    "rch" /* LengthUnit.RCH */ ,
    "rem" /* LengthUnit.REM */ ,
    "rex" /* LengthUnit.REX */ ,
    "ric" /* LengthUnit.RIC */ ,
    "rlh" /* LengthUnit.RLH */ ,
    "vb" /* LengthUnit.VB */ ,
    "vh" /* LengthUnit.VH */ ,
    "vi" /* LengthUnit.VI */ ,
    "vw" /* LengthUnit.VW */ ,
    "vmin" /* LengthUnit.VMIN */ ,
    "vmax" /* LengthUnit.VMAX */ 
];
var CSSLengthRegex = new RegExp("(?<value>[+-]?\\d*\\.?\\d+)(?<unit>".concat(LENGTH_UNITS.join('|'), ")"));
var parseText = function(text) {
    var result = text.match(CSSLengthRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit
    };
}; //# sourceMappingURL=CSSLengthUtils.js.map


}),

}]);