"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_ElementsTreeExpandButton_ts"],{

/***/ "./src/panels/elements/components/ElementsTreeExpandButton.ts":
/*!********************************************************************!*\
  !*** ./src/panels/elements/components/ElementsTreeExpandButton.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTreeExpandButton: () => (/* binding */ ElementsTreeExpandButton)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeExpandButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _ElementsTreeExpandButton_instances, _ElementsTreeExpandButton_shadow, _ElementsTreeExpandButton_clickHandler, _ElementsTreeExpandButton_update, _ElementsTreeExpandButton_render;





const UIStrings = {
    /**
     *@description Aria label for a button expanding collapsed subtree
     */
    expand: 'Expand',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/ElementsTreeExpandButton.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ElementsTreeExpandButton extends HTMLElement {
    constructor() {
        super(...arguments);
        _ElementsTreeExpandButton_instances.add(this);
        _ElementsTreeExpandButton_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ElementsTreeExpandButton_clickHandler.set(this, () => { });
    }
    set data(data) {
        __classPrivateFieldSet(this, _ElementsTreeExpandButton_clickHandler, data.clickHandler, "f");
        __classPrivateFieldGet(this, _ElementsTreeExpandButton_instances, "m", _ElementsTreeExpandButton_update).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ElementsTreeExpandButton_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './elementsTreeExpandButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_ElementsTreeExpandButton_shadow = new WeakMap(), _ElementsTreeExpandButton_clickHandler = new WeakMap(), _ElementsTreeExpandButton_instances = new WeakSet(), _ElementsTreeExpandButton_update = function _ElementsTreeExpandButton_update() {
    __classPrivateFieldGet(this, _ElementsTreeExpandButton_instances, "m", _ElementsTreeExpandButton_render).call(this);
}, _ElementsTreeExpandButton_render = function _ElementsTreeExpandButton_render() {
    // clang-format off
    // This button's innerText will be tested by e2e test and blink layout tests.
    // It can't have any other characters like '\n' or space, otherwise it will break tests.
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<button
        class="expand-button"
        tabindex="-1"
        aria-label=${i18nString(UIStrings.expand)}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('expand').track({ click: true })}
        @click=${__classPrivateFieldGet(this, _ElementsTreeExpandButton_clickHandler, "f")}><${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name="dots-horizontal"></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}></button>`, __classPrivateFieldGet(this, _ElementsTreeExpandButton_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ElementsTreeExpandButton, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-elements-tree-expand-button`
});
customElements.define('devtools-elements-tree-expand-button', ElementsTreeExpandButton);


/***/ })

}]);