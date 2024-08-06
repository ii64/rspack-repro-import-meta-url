"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSAngleUtils_js"], {
"./ui/legacy/components/inline_editor/CSSAngleUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSAngleRegex: function() { return CSSAngleRegex; },
  convertAngleUnit: function() { return convertAngleUnit; },
  get2DTranslationsForAngle: function() { return get2DTranslationsForAngle; },
  getAngleFromRadians: function() { return getAngleFromRadians; },
  getNewAngleFromEvent: function() { return getNewAngleFromEvent; },
  getNextUnit: function() { return getNextUnit; },
  getRadiansFromAngle: function() { return getRadiansFromAngle; },
  parseText: function() { return parseText; },
  roundAngleByUnit: function() { return roundAngleByUnit; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var CSSAngleRegex = RegExp("(?<value>[+-]?\\d*\\.?\\d+)(?<unit>deg|grad|rad|turn)");
var parseText = function(text) {
    var result = text.match(CSSAngleRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit
    };
};
var getAngleFromRadians = function(rad, targetUnit) {
    var value = rad;
    switch(targetUnit){
        case "grad" /* AngleUnit.Grad */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToGradians(rad);
            break;
        case "deg" /* AngleUnit.Deg */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToDegrees(rad);
            break;
        case "turn" /* AngleUnit.Turn */ :
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToTurns(rad);
            break;
    }
    return {
        value: value,
        unit: targetUnit
    };
};
var getRadiansFromAngle = function(angle) {
    switch(angle.unit){
        case "deg" /* AngleUnit.Deg */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.degreesToRadians(angle.value);
        case "grad" /* AngleUnit.Grad */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.gradiansToRadians(angle.value);
        case "turn" /* AngleUnit.Turn */ :
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.turnsToRadians(angle.value);
    }
    return angle.value;
};
var get2DTranslationsForAngle = function(angle, radius) {
    var radian = getRadiansFromAngle(angle);
    return {
        translateX: Math.sin(radian) * radius,
        translateY: -Math.cos(radian) * radius
    };
};
var roundAngleByUnit = function(angle) {
    var roundedValue = angle.value;
    switch(angle.unit){
        case "deg" /* AngleUnit.Deg */ :
        case "grad" /* AngleUnit.Grad */ :
            // Round to nearest whole unit.
            roundedValue = Math.round(angle.value);
            break;
        case "rad" /* AngleUnit.Rad */ :
            // Allow up to 4 decimals.
            roundedValue = Math.round(angle.value * 10000) / 10000;
            break;
        case "turn" /* AngleUnit.Turn */ :
            // Allow up to 2 decimals.
            roundedValue = Math.round(angle.value * 100) / 100;
            break;
        default:
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNever(angle.unit, "Unknown angle unit: ".concat(angle.unit));
    }
    return {
        value: roundedValue,
        unit: angle.unit
    };
};
var getNextUnit = function(currentUnit) {
    switch(currentUnit){
        case "deg" /* AngleUnit.Deg */ :
            return "grad" /* AngleUnit.Grad */ ;
        case "grad" /* AngleUnit.Grad */ :
            return "rad" /* AngleUnit.Rad */ ;
        case "rad" /* AngleUnit.Rad */ :
            return "turn" /* AngleUnit.Turn */ ;
        default:
            return "deg" /* AngleUnit.Deg */ ;
    }
};
var convertAngleUnit = function(angle, newUnit) {
    if (angle.unit === newUnit) {
        return angle;
    }
    var radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian, newUnit);
};
var getNewAngleFromEvent = function(angle, event) {
    var direction = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.getValueModificationDirection(event);
    if (direction === null) {
        return;
    }
    var diff = direction === 'Up' ? Math.PI / 180 : -Math.PI / 180;
    if (event.shiftKey) {
        diff *= 10;
    }
    var radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian + diff, angle.unit);
}; //# sourceMappingURL=CSSAngleUtils.js.map


}),

}]);