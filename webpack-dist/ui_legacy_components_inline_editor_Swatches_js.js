"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_Swatches_js"],{

/***/ "./ui/legacy/components/inline_editor/Swatches.js":
/*!********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/Swatches.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierSwatch: () => (/* binding */ BezierSwatch),
/* harmony export */   CSSShadowSwatch: () => (/* binding */ CSSShadowSwatch)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bezierSwatch.css.js */ "./ui/legacy/components/inline_editor/bezierSwatch.css.js");
/* harmony import */ var _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssShadowSwatch.css.js */ "./ui/legacy/components/inline_editor/cssShadowSwatch.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class BezierSwatch extends HTMLSpanElement {
    iconElementInternal;
    textElement;
    constructor() {
        super();
        const root = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(this, {
            cssFile: [_bezierSwatch_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]],
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
    static constructorInternal = null;
}
class CSSShadowSwatch extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `css-shadow-swatch`;
    #shadow = this.attachShadow({ mode: 'open' });
    #icon;
    #model;
    constructor(model) {
        super();
        this.#model = model;
        this.#shadow.adoptedStyleSheets = [
            _cssShadowSwatch_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        ];
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `<${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} name="shadow" class="shadow-swatch-icon"></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}><slot></slot>`, this.#shadow, { host: this });
        this.#icon = this.#shadow.querySelector(_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName.value);
    }
    model() {
        return this.#model;
    }
    iconElement() {
        return this.#icon;
    }
}
customElements.define('css-shadow-swatch', CSSShadowSwatch);
//# sourceMappingURL=Swatches.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/bezierSwatch.css.js":
/*!****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/bezierSwatch.css.js ***!
  \****************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.bezier-swatch-icon {
  position: relative;
  transform: scale(0.7);
  margin: -5px -2px -3px -4px;
  user-select: none;
  color: var(--icon-css);
  cursor: default;
}

devtools-icon.bezier-swatch-icon:hover {
  color: var(--icon-css-hover);
}

/*# sourceURL=bezierSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/legacy/components/inline_editor/cssShadowSwatch.css.js":
/*!*******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/cssShadowSwatch.css.js ***!
  \*******************************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  white-space: nowrap;
}

devtools-icon.shadow-swatch-icon {
  color: var(--icon-css);
  transform: scale(0.7);
  position: relative;
  margin: -5px -2px -5px -4px;
  user-select: none;
  vertical-align: baseline;
  cursor: pointer;

  &:hover {
    color: var(--icon-css-hover);
  }
}

/*# sourceURL=cssShadowSwatch.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);