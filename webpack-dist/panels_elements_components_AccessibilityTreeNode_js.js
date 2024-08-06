"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_AccessibilityTreeNode_js"],{

/***/ "./panels/elements/components/AccessibilityTreeNode.js":
/*!*************************************************************!*\
  !*** ./panels/elements/components/AccessibilityTreeNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeNode: () => (/* binding */ AccessibilityTreeNode)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _accessibilityTreeNode_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessibilityTreeNode.css.js */ "./panels/elements/components/accessibilityTreeNode.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Ignored node element text content in Accessibility Tree View of the Elements panel
     */
    ignored: 'Ignored',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AccessibilityTreeNode.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
// TODO(jobay) move this to Platform.StringUtilities if still needed.
// This function is a variant of setTextContentTruncatedIfNeeded found in DOMExtension.
function truncateTextIfNeeded(text) {
    const maxTextContentLength = 10000;
    if (text.length > maxTextContentLength) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimMiddle(text, maxTextContentLength);
    }
    return text;
}
function isPrintable(valueType) {
    switch (valueType) {
        case "boolean" /* Protocol.Accessibility.AXValueType.Boolean */:
        case "booleanOrUndefined" /* Protocol.Accessibility.AXValueType.BooleanOrUndefined */:
        case "string" /* Protocol.Accessibility.AXValueType.String */:
        case "number" /* Protocol.Accessibility.AXValueType.Number */:
            return true;
        default:
            return false;
    }
}
class AccessibilityTreeNode extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-accessibility-tree-node`;
    #shadow = this.attachShadow({ mode: 'open' });
    #ignored = true;
    #name = '';
    #role = '';
    #properties = [];
    #id = '';
    set data(data) {
        this.#ignored = data.ignored;
        this.#name = data.name;
        this.#role = data.role;
        this.#properties = data.properties;
        this.#id = data.id;
        void this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_accessibilityTreeNode_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    async #render() {
        const role = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span class='role-value'>${truncateTextIfNeeded(this.#role)}</span>`;
        const name = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `"<span class='attribute-value'>${this.#name}</span>"`;
        const properties = this.#properties.map(({ name, value }) => isPrintable(value.type) ?
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html ` <span class='attribute-name'>${name}</span>:&nbsp;<span class='attribute-value'>${value.value}</span>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing);
        const content = this.#ignored ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<span>${i18nString(UIStrings.ignored)}</span>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${role}&nbsp;${name}${properties}`;
        await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance().write(`Accessibility node ${this.#id} render`, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div class='container'>${content}</div>`, this.#shadow, { host: this });
            // clang-format on
        });
    }
}
customElements.define('devtools-accessibility-tree-node', AccessibilityTreeNode);
//# sourceMappingURL=AccessibilityTreeNode.js.map

/***/ }),

/***/ "./panels/elements/components/accessibilityTreeNode.css.js":
/*!*****************************************************************!*\
  !*** ./panels/elements/components/accessibilityTreeNode.css.js ***!
  \*****************************************************************/
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

.container {
  width: 100%;
  display: inline-block;
}

.container:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

span {
  color: var(--sys-color-token-meta);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
}

.role-value {
  color: var(--sys-color-token-tag);
}

.attribute-name {
  color: var(--sys-color-token-attribute);
}

.attribute-value {
  color: var(--sys-color-token-attribute-value);
}

/*# sourceURL=accessibilityTreeNode.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);