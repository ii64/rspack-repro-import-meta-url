"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSLength_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSLength.js":
/*!*********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLength.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLength: () => (/* binding */ CSSLength),
/* harmony export */   DraggingFinishedEvent: () => (/* binding */ DraggingFinishedEvent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssLength.css.js */ "./ui/legacy/components/inline_editor/cssLength.css.js");
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./ui/legacy/components/inline_editor/CSSLengthUtils.js");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./ui/legacy/components/inline_editor/InlineEditorUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const { render, html, Directives: { classMap } } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class DraggingFinishedEvent extends Event {
    static eventName = 'draggingfinished';
    constructor() {
        super(DraggingFinishedEvent.eventName, {});
    }
}
const DefaultLength = {
    value: 0,
    unit: "px" /* LengthUnit.PIXEL */,
};
class CSSLength extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-length`;
    shadow = this.attachShadow({ mode: 'open' });
    onDraggingValue = this.dragValue.bind(this);
    length = DefaultLength;
    overloaded = false;
    isEditingSlot = false;
    isDraggingValue = false;
    currentMouseClientX = 0;
    #valueMousedownTime = 0;
    set data(data) {
        const parsedResult = (0,_CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__.parseText)(data.lengthText);
        if (!parsedResult) {
            return;
        }
        this.length = parsedResult;
        this.overloaded = data.overloaded;
        this.render();
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [_cssLength_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    dragValue(event) {
        event.preventDefault();
        event.stopPropagation();
        if (Date.now() - this.#valueMousedownTime <= 300) {
            // Delay drag callback by 300ms to prioritize click over drag.
            return;
        }
        this.isDraggingValue = true;
        let displacement = event.clientX - this.currentMouseClientX;
        this.currentMouseClientX = event.clientX;
        if (event.shiftKey) {
            displacement *= 10;
        }
        if (event.altKey) {
            displacement *= 0.1;
        }
        this.length.value = this.length.value + displacement;
        this.dispatchEvent(new _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__.ValueChangedEvent(`${this.length.value}${this.length.unit}`));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.swatchActivated(8 /* Host.UserMetrics.SwatchType.Length */);
        this.render();
    }
    onValueMousedown(event) {
        if (event.button !== 0) {
            return;
        }
        this.#valueMousedownTime = Date.now();
        this.currentMouseClientX = event.clientX;
        const targetDocument = event.target instanceof Node && event.target.ownerDocument;
        if (targetDocument) {
            targetDocument.addEventListener('mousemove', this.onDraggingValue, { capture: true });
            targetDocument.addEventListener('mouseup', (event) => {
                targetDocument.removeEventListener('mousemove', this.onDraggingValue, { capture: true });
                if (!this.isDraggingValue) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                this.isDraggingValue = false;
                this.dispatchEvent(new DraggingFinishedEvent());
            }, { once: true, capture: true });
        }
    }
    onValueMouseup() {
        if (!this.isDraggingValue) {
            this.isEditingSlot = true;
            this.render();
        }
    }
    render() {
        const classes = {
            'css-length': true,
            'overloaded': this.overloaded,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class=${classMap(classes)}>
        ${this.renderContent()}
      </div>
    `, this.shadow, {
            host: this,
        });
        // clang-format on
    }
    renderContent() {
        if (this.isEditingSlot) {
            return html `<slot></slot>`;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
        <span class="value"
          @mousedown=${this.onValueMousedown}
          @mouseup=${this.onValueMouseup}
        >${this.length.value}</span>${this.length.unit}
      `;
        // clang-format on
    }
}
customElements.define('devtools-css-length', CSSLength);
//# sourceMappingURL=CSSLength.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/CSSLengthUtils.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLengthUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLengthRegex: () => (/* binding */ CSSLengthRegex),
/* harmony export */   LENGTH_UNITS: () => (/* binding */ LENGTH_UNITS),
/* harmony export */   parseText: () => (/* binding */ parseText)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LENGTH_UNITS = [
    "px" /* LengthUnit.PIXEL */, "cm" /* LengthUnit.CENTIMETER */, "mm" /* LengthUnit.MILLIMETER */, "Q" /* LengthUnit.QUARTERMILLIMETER */,
    "in" /* LengthUnit.INCH */, "pc" /* LengthUnit.PICA */, "pt" /* LengthUnit.POINT */, "cap" /* LengthUnit.CAP */,
    "ch" /* LengthUnit.CH */, "em" /* LengthUnit.EM */, "ex" /* LengthUnit.EX */, "ic" /* LengthUnit.IC */,
    "lh" /* LengthUnit.LH */, "rcap" /* LengthUnit.RCAP */, "rch" /* LengthUnit.RCH */, "rem" /* LengthUnit.REM */,
    "rex" /* LengthUnit.REX */, "ric" /* LengthUnit.RIC */, "rlh" /* LengthUnit.RLH */, "vb" /* LengthUnit.VB */,
    "vh" /* LengthUnit.VH */, "vi" /* LengthUnit.VI */, "vw" /* LengthUnit.VW */, "vmin" /* LengthUnit.VMIN */,
    "vmax" /* LengthUnit.VMAX */,
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
//# sourceMappingURL=CSSLengthUtils.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/InlineEditorUtils.js":
/*!*****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/InlineEditorUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueChangedEvent: () => (/* binding */ ValueChangedEvent)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ValueChangedEvent extends Event {
    static eventName = 'valuechanged';
    data;
    constructor(value) {
        super(ValueChangedEvent.eventName, {});
        this.data = { value };
    }
}
//# sourceMappingURL=InlineEditorUtils.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssLength.css.js":
/*!*************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssLength.css.js ***!
  \*************************************************************/
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

.css-length {
  display: inline-block;
  position: relative;
  outline: none;
}

.css-length.overloaded {
  text-decoration: line-through;
}

.value {
  cursor: ew-resize;
}

.icon {
  position: absolute;
  display: inline-block;
  mask-image: var(--image-file-chevron-down);
  mask-repeat: no-repeat;
  background-color: var(--icon-default);
  transform: scale(0.7);
  margin-left: -7px;
  margin-top: -3px;
  content: "";
  height: 2em;
  width: 2em;
}

:host(:not(:last-child)) {
  margin-right: 0.1em;
}

/*# sourceURL=cssLength.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);