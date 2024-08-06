"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSAngleSwatch_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSAngleSwatch.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSAngleSwatch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngleSwatch: () => (/* binding */ CSSAngleSwatch)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssAngleSwatch_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssAngleSwatch.css.js */ "./ui/legacy/components/inline_editor/cssAngleSwatch.css.js");
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap;
const swatchWidth = 11;
class CSSAngleSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-css-angle-swatch`;
    shadow = this.attachShadow({ mode: 'open' });
    angle = {
        value: 0,
        unit: "rad" /* AngleUnit.Rad */,
    };
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [_cssAngleSwatch_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
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
customElements.define('devtools-css-angle-swatch', CSSAngleSwatch);
//# sourceMappingURL=CSSAngleSwatch.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/CSSAngleUtils.js":
/*!*************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSAngleUtils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const CSSAngleRegex = /(?<value>[+-]?\d*\.?\d+)(?<unit>deg|grad|rad|turn)/;
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
        case "grad" /* AngleUnit.Grad */:
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToGradians(rad);
            break;
        case "deg" /* AngleUnit.Deg */:
            value = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.radiansToDegrees(rad);
            break;
        case "turn" /* AngleUnit.Turn */:
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
        case "deg" /* AngleUnit.Deg */:
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.degreesToRadians(angle.value);
        case "grad" /* AngleUnit.Grad */:
            return _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.gradiansToRadians(angle.value);
        case "turn" /* AngleUnit.Turn */:
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
        case "deg" /* AngleUnit.Deg */:
        case "grad" /* AngleUnit.Grad */:
            // Round to nearest whole unit.
            roundedValue = Math.round(angle.value);
            break;
        case "rad" /* AngleUnit.Rad */:
            // Allow up to 4 decimals.
            roundedValue = Math.round(angle.value * 10000) / 10000;
            break;
        case "turn" /* AngleUnit.Turn */:
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
        case "deg" /* AngleUnit.Deg */:
            return "grad" /* AngleUnit.Grad */;
        case "grad" /* AngleUnit.Grad */:
            return "rad" /* AngleUnit.Rad */;
        case "rad" /* AngleUnit.Rad */:
            return "turn" /* AngleUnit.Turn */;
        default:
            return "deg" /* AngleUnit.Deg */;
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
//# sourceMappingURL=CSSAngleUtils.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssAngleSwatch.css.js":
/*!******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssAngleSwatch.css.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.swatch {
  position: relative;
  display: inline-block;
  margin-bottom: -2px;
  width: 1em;
  height: 1em;
  border: 1px solid var(--sys-color-neutral-outline);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--sys-color-neutral-container);
}

.mini-hand {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55%;
  width: 2px;
  background-color: var(--sys-color-tonal-container);
  border-radius: 5px;
}

/*# sourceURL=cssAngleSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);