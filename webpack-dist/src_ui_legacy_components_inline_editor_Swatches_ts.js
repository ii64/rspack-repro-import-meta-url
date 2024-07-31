"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_Swatches_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/Swatches.ts":
/*!************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/Swatches.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierSwatch: () => (/* binding */ BezierSwatch),
/* harmony export */   CSSShadowSwatch: () => (/* binding */ CSSShadowSwatch)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './bezierSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssShadowSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSShadowSwatch_shadow, _CSSShadowSwatch_icon, _CSSShadowSwatch_model;






class BezierSwatch extends HTMLSpanElement {
    constructor() {
        super();
        Object.defineProperty(this, "iconElementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "textElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const root = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(this, {
            cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './bezierSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
            delegatesFocus: undefined,
        });
        this.iconElementInternal = _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('bezier-curve-filled', 'bezier-swatch-icon');
        this.iconElementInternal.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.showStyleEditor('bezier')}`);
        root.appendChild(this.iconElementInternal);
        this.textElement = this.createChild('span');
        root.createChild('slot');
    }
    static create() {
        let constructor = BezierSwatch.constructorInternal;
        if (!constructor) {
            constructor = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.registerCustomElement('span', 'bezier-swatch', BezierSwatch);
            BezierSwatch.constructorInternal = constructor;
        }
        return constructor();
    }
    bezierText() {
        return this.textElement.textContent || '';
    }
    setBezierText(text) {
        this.textElement.textContent = text;
    }
    hideText(hide) {
        this.textElement.hidden = hide;
    }
    iconElement() {
        return this.iconElementInternal;
    }
}
Object.defineProperty(BezierSwatch, "constructorInternal", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});
class CSSShadowSwatch extends HTMLElement {
    constructor(model) {
        super();
        _CSSShadowSwatch_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CSSShadowSwatch_icon.set(this, void 0);
        _CSSShadowSwatch_model.set(this, void 0);
        __classPrivateFieldSet(this, _CSSShadowSwatch_model, model, "f");
        __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssShadowSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ];
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} name="shadow" class="shadow-swatch-icon"></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}><slot></slot>`, __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f"), { host: this });
        __classPrivateFieldSet(this, _CSSShadowSwatch_icon, __classPrivateFieldGet(this, _CSSShadowSwatch_shadow, "f").querySelector(_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName.value), "f");
    }
    model() {
        return __classPrivateFieldGet(this, _CSSShadowSwatch_model, "f");
    }
    iconElement() {
        return __classPrivateFieldGet(this, _CSSShadowSwatch_icon, "f");
    }
}
_CSSShadowSwatch_shadow = new WeakMap(), _CSSShadowSwatch_icon = new WeakMap(), _CSSShadowSwatch_model = new WeakMap();
Object.defineProperty(CSSShadowSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `css-shadow-swatch`
});
customElements.define('css-shadow-swatch', CSSShadowSwatch);


/***/ })

}]);