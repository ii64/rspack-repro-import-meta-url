"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSAngleEditor_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSAngleEditor.ts":
/*!******************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSAngleEditor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSAngleEditor: () => (/* binding */ CSSAngleEditor)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSAngleUtils.js */ "./src/ui/legacy/components/inline_editor/CSSAngleUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const { render, html } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
const styleMap = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.Directives.styleMap;
const CLOCK_DIAL_LENGTH = 6;
class CSSAngleEditor extends HTMLElement {
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
                unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.AngleUnit.Rad,
            }
        });
        Object.defineProperty(this, "onAngleUpdate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "clockRadius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 77 / 2
        }); // By default the clock is 77 * 77.
        Object.defineProperty(this, "dialTemplates", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mousemoveThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(16.67 /* 60fps */)
        });
        Object.defineProperty(this, "mousemoveListener", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.onMousemove.bind(this)
        });
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssAngleEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
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
                unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.AngleUnit.Deg,
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
                    unit: _CSSAngleUtils_js__WEBPACK_IMPORTED_MODULE_4__.AngleUnit.Deg,
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
Object.defineProperty(CSSAngleEditor, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-angle-editor`
});
customElements.define('devtools-css-angle-editor', CSSAngleEditor);


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