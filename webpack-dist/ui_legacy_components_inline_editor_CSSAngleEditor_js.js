"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSAngleEditor_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSAngleEditor.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSAngleEditor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngleEditor: () => (/* binding */ CSSAngleEditor)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssAngleEditor_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cssAngleEditor.css.js */ "./ui/legacy/components/inline_editor/cssAngleEditor.css.js");
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./ui/legacy/components/inline_editor/CSSAngleUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.styleMap;
const CLOCK_DIAL_LENGTH = 6;
class CSSAngleEditor extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-angle-editor`;
    shadow = this.attachShadow({ mode: 'open' });
    angle = {
        value: 0,
        unit: "rad" /* AngleUnit.Rad */,
    };
    onAngleUpdate;
    background = '';
    clockRadius = 77 / 2; // By default the clock is 77 * 77.
    dialTemplates;
    mousemoveThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(16.67 /* 60fps */);
    mousemoveListener = this.onMousemove.bind(this);
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [_cssAngleEditor_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.style.setProperty('--clock-dial-length', `${CLOCK_DIAL_LENGTH}px`);
    }
    set data(data) {
        this.angle = data.angle;
        this.onAngleUpdate = data.onAngleUpdate;
        this.background = data.background;
        this.render();
    }
    updateAngleFromMousePosition(mouseX, mouseY, shouldSnapToMultipleOf15Degrees) {
        const clock = this.shadow.querySelector('.clock');
        if (!clock || !this.onAngleUpdate) {
            return;
        }
        const { top, right, bottom, left } = clock.getBoundingClientRect();
        this.clockRadius = (right - left) / 2;
        const clockCenterX = (left + right) / 2;
        const clockCenterY = (bottom + top) / 2;
        const radian = -Math.atan2(mouseX - clockCenterX, mouseY - clockCenterY) + Math.PI;
        if (shouldSnapToMultipleOf15Degrees) {
            const multipleInRadian = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getRadiansFromAngle)({
                value: 15,
                unit: "deg" /* AngleUnit.Deg */,
            });
            const closestMultipleOf15Degrees = Math.round(radian / multipleInRadian) * multipleInRadian;
            this.onAngleUpdate((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getAngleFromRadians)(closestMultipleOf15Degrees, this.angle.unit));
        }
        else {
            this.onAngleUpdate((0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getAngleFromRadians)(radian, this.angle.unit));
        }
    }
    onEditorMousedown(event) {
        event.stopPropagation();
        this.updateAngleFromMousePosition(event.pageX, event.pageY, event.shiftKey);
        const targetDocument = event.target instanceof Node && event.target.ownerDocument;
        const editor = this.shadow.querySelector('.editor');
        if (targetDocument && editor) {
            targetDocument.addEventListener('mousemove', this.mousemoveListener, { capture: true });
            editor.classList.add('interacting');
            targetDocument.addEventListener('mouseup', () => {
                targetDocument.removeEventListener('mousemove', this.mousemoveListener, { capture: true });
                editor.classList.remove('interacting');
            }, { once: true });
        }
    }
    onMousemove(event) {
        const isPressed = event.buttons === 1;
        if (!isPressed) {
            return;
        }
        event.preventDefault();
        void this.mousemoveThrottler.schedule(() => {
            this.updateAngleFromMousePosition(event.pageX, event.pageY, event.shiftKey);
            return Promise.resolve();
        });
    }
    onEditorWheel(event) {
        if (!this.onAngleUpdate) {
            return;
        }
        const newAngle = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getNewAngleFromEvent)(this.angle, event);
        if (newAngle) {
            this.onAngleUpdate(newAngle);
        }
        event.preventDefault();
    }
    render() {
        const clockStyles = {
            background: this.background,
        };
        const { translateX, translateY } = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.get2DTranslationsForAngle)(this.angle, this.clockRadius / 2);
        const handStyles = {
            transform: `translate(${translateX}px, ${translateY}px) rotate(${this.angle.value}${this.angle.unit})`,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="editor" jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.dialog('cssAngleEditor').track({ click: true, drag: true, resize: true, keydown: 'Enter|Escape' })}>
        <span class="pointer"></span>
        <div
          class="clock"
          style=${styleMap(clockStyles)}
          @mousedown=${this.onEditorMousedown}
          @wheel=${this.onEditorWheel}>
          ${this.renderDials()}
          <div class="hand" style=${styleMap(handStyles)}></div>
          <span class="center"></span>
        </div>
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
    renderDials() {
        if (!this.dialTemplates) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            this.dialTemplates = [0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
                const radius = this.clockRadius - CLOCK_DIAL_LENGTH - 3 /* clock border */;
                const { translateX, translateY } = (0,_CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.get2DTranslationsForAngle)({
                    value: deg,
                    unit: "deg" /* AngleUnit.Deg */,
                }, radius);
                const dialStyles = {
                    transform: `translate(${translateX}px, ${translateY}px) rotate(${deg}deg)`,
                };
                return html `<span class="dial" style=${styleMap(dialStyles)}></span>`;
            });
            // clang-format on
        }
        return this.dialTemplates;
    }
}
customElements.define('devtools-css-angle-editor', CSSAngleEditor);
//# sourceMappingURL=CSSAngleEditor.js.map

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

/***/ "./ui/legacy/components/inline_editor/cssAngleEditor.css.js":
/*!******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssAngleEditor.css.js ***!
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

.editor.interacting::before {
  content: "";
  position: fixed;
  inset: 0;
}

.clock,
.pointer,
.center,
.hand,
.dial {
  position: absolute;
}

.clock {
  top: 6px;
  width: 6em;
  height: 6em;
  background-color: var(--sys-color-cdt-base-container);
  border: 0.5em solid var(--sys-color-neutral-outline);
  border-radius: 9em;
  box-shadow: var(--drop-shadow), inset 0 0 15px var(--box-shadow-outline-color);
  transform: translateX(-3em);
}

.center,
.hand {
  box-shadow: 0 0 2px var(--box-shadow-outline-color);
}

.pointer {
  margin: auto;
  top: 0;
  left: -0.4em;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0.9em 0.9em;
  border-color: transparent transparent var(--sys-color-neutral-outline) transparent;
}

.center,
.hand,
.dial {
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.center {
  width: 0.7em;
  height: 0.7em;
  border-radius: 10px;
}

.dial {
  width: 2px;
  height: var(--clock-dial-length);
  background-color: var(--override-dial-color);
  border-radius: 1px;
}

.hand {
  height: 50%;
  width: 0.3em;
  background: var(--sys-color-tonal-container);
}

.hand::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: -0.6em;
  left: -0.35em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px var(--box-shadow-outline-color);
}

.hand::before,
.center {
  background-color: var(--sys-color-tonal-container);
}

:host-context(.theme-with-dark-background) .hand::before {
  box-shadow: 0 0 5px hsl(0deg 0% 0% / 80%);
}

:host-context(.theme-with-dark-background) .center,
:host-context(.theme-with-dark-background) .hand {
  box-shadow: 0 0 2px hsl(0deg 0% 0% / 60%);
}

:host-context(.theme-with-dark-background) .clock {
  background-color: hsl(225deg 5% 27%);
}

/*# sourceURL=cssAngleEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);