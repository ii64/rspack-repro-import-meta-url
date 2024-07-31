"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_CSSLength_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/CSSLength.ts":
/*!*************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSLength.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLength: () => (/* binding */ CSSLength),
/* harmony export */   DraggingFinishedEvent: () => (/* binding */ DraggingFinishedEvent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssLength.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSLengthUtils.js */ "./src/ui/legacy/components/inline_editor/CSSLengthUtils.ts");
/* harmony import */ var _InlineEditorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineEditorUtils.js */ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CSSLength_valueMousedownTime;





const { render, html, Directives: { classMap } } = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class DraggingFinishedEvent extends Event {
    constructor() {
        super(DraggingFinishedEvent.eventName, {});
    }
}
Object.defineProperty(DraggingFinishedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'draggingfinished'
});
const DefaultLength = {
    value: 0,
    unit: _CSSLengthUtils_js__WEBPACK_IMPORTED_MODULE_3__.LengthUnit.PIXEL,
};
class CSSLength extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "onDraggingValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.dragValue.bind(this)
        });
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: DefaultLength
        });
        Object.defineProperty(this, "overloaded", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isEditingSlot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "isDraggingValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "currentMouseClientX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        _CSSLength_valueMousedownTime.set(this, 0);
    }
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
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssLength.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    dragValue(event) {
        event.preventDefault();
        event.stopPropagation();
        if (Date.now() - __classPrivateFieldGet(this, _CSSLength_valueMousedownTime, "f") <= 300) {
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
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.swatchActivated(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.SwatchType.Length);
        this.render();
    }
    onValueMousedown(event) {
        if (event.button !== 0) {
            return;
        }
        __classPrivateFieldSet(this, _CSSLength_valueMousedownTime, Date.now(), "f");
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
_CSSLength_valueMousedownTime = new WeakMap();
Object.defineProperty(CSSLength, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-css-length`
});
customElements.define('devtools-css-length', CSSLength);


/***/ }),

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


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts":
/*!*********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/InlineEditorUtils.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueChangedEvent: () => (/* binding */ ValueChangedEvent)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ValueChangedEvent extends Event {
    constructor(value) {
        super(ValueChangedEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { value };
    }
}
Object.defineProperty(ValueChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'valuechanged'
});


/***/ })

}]);