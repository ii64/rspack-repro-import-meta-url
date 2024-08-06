"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_components_components_js"],{

/***/ "./panels/issues/components/ElementsPanelLink.js":
/*!*******************************************************!*\
  !*** ./panels/issues/components/ElementsPanelLink.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsPanelLink: () => (/* binding */ ElementsPanelLink)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _elementsPanelLink_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsPanelLink.css.js */ "./panels/issues/components/elementsPanelLink.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ElementsPanelLink extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-elements-panel-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #onElementRevealIconClick = () => { };
    #onElementRevealIconMouseEnter = () => { };
    #onElementRevealIconMouseLeave = () => { };
    set data(data) {
        this.#onElementRevealIconClick = data.onElementRevealIconClick;
        this.#onElementRevealIconMouseEnter = data.onElementRevealIconMouseEnter;
        this.#onElementRevealIconMouseLeave = data.onElementRevealIconMouseLeave;
        this.#update();
    }
    #update() {
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_elementsPanelLink_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    #render() {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <span
        class="element-reveal-icon"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.link('elements-panel').track({ click: true })}
        @click=${this.#onElementRevealIconClick}
        @mouseenter=${this.#onElementRevealIconMouseEnter}
        @mouseleave=${this.#onElementRevealIconMouseLeave}></span>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-elements-panel-link', ElementsPanelLink);
//# sourceMappingURL=ElementsPanelLink.js.map

/***/ }),

/***/ "./panels/issues/components/HideIssuesMenu.js":
/*!****************************************************!*\
  !*** ./panels/issues/components/HideIssuesMenu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HideIssuesMenu: () => (/* binding */ HideIssuesMenu)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _hideIssuesMenu_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hideIssuesMenu.css.js */ "./panels/issues/components/hideIssuesMenu.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Title for the tooltip of the (3 dots) Hide Issues menu icon.
     */
    tooltipTitle: 'Hide issues',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/components/HideIssuesMenu.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class HideIssuesMenu extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-hide-issues-menu`;
    #shadow = this.attachShadow({ mode: 'open' });
    #menuItemLabel = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
    #menuItemAction = () => { };
    set data(data) {
        this.#menuItemLabel = data.menuItemLabel;
        this.#menuItemAction = data.menuItemAction;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_hideIssuesMenu_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
    }
    onMenuOpen(event) {
        event.stopPropagation();
        const buttonElement = this.#shadow.querySelector('button');
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event, {
            x: buttonElement?.getBoundingClientRect().left,
            y: buttonElement?.getBoundingClientRect().bottom,
        });
        contextMenu.headerSection().appendItem(this.#menuItemLabel, () => this.#menuItemAction(), { jslogContext: 'toggle-similar-issues' });
        void contextMenu.show();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
      <button class="hide-issues-menu-btn" @click=${this.onMenuOpen.bind(this)} title=${i18nString(UIStrings.tooltipTitle)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name="dots-vertical" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown('hide-issues').track({ click: true })}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
      </button>
    `, this.#shadow, { host: this });
    }
}
customElements.define('devtools-hide-issues-menu', HideIssuesMenu);
//# sourceMappingURL=HideIssuesMenu.js.map

/***/ }),

/***/ "./panels/issues/components/components.js":
/*!************************************************!*\
  !*** ./panels/issues/components/components.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsPanelLink: () => (/* reexport module object */ _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HideIssuesMenu: () => (/* reexport module object */ _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _ElementsPanelLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementsPanelLink.js */ "./panels/issues/components/ElementsPanelLink.js");
/* harmony import */ var _HideIssuesMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HideIssuesMenu.js */ "./panels/issues/components/HideIssuesMenu.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/issues/components/elementsPanelLink.css.js":
/*!***********************************************************!*\
  !*** ./panels/issues/components/elementsPanelLink.css.js ***!
  \***********************************************************/
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

.element-reveal-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  mask-image: var(--image-file-select-element);
  background-color: var(--icon-default);
}

/*# sourceURL=./elementsPanelLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/issues/components/hideIssuesMenu.css.js":
/*!********************************************************!*\
  !*** ./panels/issues/components/hideIssuesMenu.css.js ***!
  \********************************************************/
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

.hide-issues-menu-btn {
  position: relative;
  display: flex;
  background-color: transparent;
  flex: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 -2px 0 4px;
  overflow: hidden;
  border-radius: 0;
  border: none;

  &:hover > devtools-icon {
    color: var(--icon-default-hover);
  }
}

/*# sourceURL=./hideIssuesMenu.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);