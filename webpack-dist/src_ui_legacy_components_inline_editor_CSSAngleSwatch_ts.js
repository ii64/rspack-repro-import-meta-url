"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSAngleSwatch_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSAngleSwatch.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngleSwatch.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngleSwatch: () => (/* binding */ CSSAngleSwatch)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
const swatchWidth = 11;
class CSSAngleSwatch extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "angle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                value: 0,
                unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__.AngleUnit.Rad,
            }
        });
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        this.angle = data.angle;
        this.render();
    }
    render() {
        const { translateX, translateY } = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__.get2DTranslationsForAngle)(this.angle, swatchWidth / 4);
        const miniHandStyle = {
            transform: `translate(${translateX}px, ${translateY}px) rotate(${this.angle.value}${this.angle.unit})`,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="swatch">
        <span class="mini-hand" style=${styleMap(miniHandStyle)}></span>
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
}
Object.defineProperty(CSSAngleSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-css-angle-swatch`
});
customElements.define('devtools-css-angle-swatch', CSSAngleSwatch);


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts":
/*!*****************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleUnit: () => (/* binding */ AngleUnit),
/* harmony export */   CSSAngleRegex: () => (/* binding */ CSSAngleRegex),
/* harmony export */   convertAngleUnit: () => (/* binding */ convertAngleUnit),
/* harmony export */   get2DTranslationsForAngle: () => (/* binding */ get2DTranslationsForAngle),
/* harmony export */   getAngleFromRadians: () => (/* binding */ getAngleFromRadians),
/* harmony export */   getNewAngleFromEvent: () => (/* binding */ getNewAngleFromEvent),
/* harmony export */   getNextUnit: () => (/* binding */ getNextUnit),
/* harmony export */   getRadiansFromAngle: () => (/* binding */ getRadiansFromAngle),
/* harmony export */   parseText: () => (/* binding */ parseText),
/* harmony export */   roundAngleByUnit: () => (/* binding */ roundAngleByUnit)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const CSSAngleRegex = /(?<value>[+-]?\d*\.?\d+)(?<unit>deg|grad|rad|turn)/;
var AngleUnit;
(function (AngleUnit) {
    AngleUnit["Deg"] = "deg";
    AngleUnit["Grad"] = "grad";
    AngleUnit["Rad"] = "rad";
    AngleUnit["Turn"] = "turn";
})(AngleUnit || (AngleUnit = {}));
const parseText = (text) => {
    const result = text.match(CSSAngleRegex);
    if (!result || !result.groups) {
        return null;
    }
    return {
        value: Number(result.groups.value),
        unit: result.groups.unit,
    };
};
const getAngleFromRadians = (rad, targetUnit) => {
    let value = rad;
    switch (targetUnit) {
        case AngleUnit.Grad:
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToGradians(rad);
            break;
        case AngleUnit.Deg:
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToDegrees(rad);
            break;
        case AngleUnit.Turn:
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToTurns(rad);
            break;
    }
    return {
        value,
        unit: targetUnit,
    };
};
const getRadiansFromAngle = (angle) => {
    switch (angle.unit) {
        case AngleUnit.Deg:
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.degreesToRadians(angle.value);
        case AngleUnit.Grad:
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.gradiansToRadians(angle.value);
        case AngleUnit.Turn:
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.turnsToRadians(angle.value);
    }
    return angle.value;
};
const get2DTranslationsForAngle = (angle, radius) => {
    const radian = getRadiansFromAngle(angle);
    return {
        translateX: Math.sin(radian) * radius,
        translateY: -Math.cos(radian) * radius,
    };
};
const roundAngleByUnit = (angle) => {
    let roundedValue = angle.value;
    switch (angle.unit) {
        case AngleUnit.Deg:
        case AngleUnit.Grad:
            // Round to nearest whole unit.
            roundedValue = Math.round(angle.value);
            break;
        case AngleUnit.Rad:
            // Allow up to 4 decimals.
            roundedValue = Math.round(angle.value * 10000) / 10000;
            break;
        case AngleUnit.Turn:
            // Allow up to 2 decimals.
            roundedValue = Math.round(angle.value * 100) / 100;
            break;
        default:
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNever(angle.unit, `Unknown angle unit: ${angle.unit}`);
    }
    return {
        value: roundedValue,
        unit: angle.unit,
    };
};
const getNextUnit = (currentUnit) => {
    switch (currentUnit) {
        case AngleUnit.Deg:
            return AngleUnit.Grad;
        case AngleUnit.Grad:
            return AngleUnit.Rad;
        case AngleUnit.Rad:
            return AngleUnit.Turn;
        default:
            return AngleUnit.Deg;
    }
};
const convertAngleUnit = (angle, newUnit) => {
    if (angle.unit === newUnit) {
        return angle;
    }
    const radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian, newUnit);
};
const getNewAngleFromEvent = (angle, event) => {
    const direction = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.getValueModificationDirection(event);
    if (direction === null) {
        return;
    }
    let diff = direction === 'Up' ? Math.PI / 180 : -Math.PI / 180;
    if (event.shiftKey) {
        diff *= 10;
    }
    const radian = getRadiansFromAngle(angle);
    return getAngleFromRadians(radian + diff, angle.unit);
};


/***/ })

}]);