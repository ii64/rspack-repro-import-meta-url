"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_AnchorFunctionLinkSwatch_ts"],{

/***/ "./src/panels/elements/components/AnchorFunctionLinkSwatch.ts":
/*!********************************************************************!*\
  !*** ./src/panels/elements/components/AnchorFunctionLinkSwatch.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionLinkSwatch: () => (/* binding */ AnchorFunctionLinkSwatch)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './anchorFunctionLinkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _AnchorFunctionLinkSwatch_instances, _AnchorFunctionLinkSwatch_shadow, _AnchorFunctionLinkSwatch_data, _AnchorFunctionLinkSwatch_handleIconClick, _AnchorFunctionLinkSwatch_renderIdentifierLink, _AnchorFunctionLinkSwatch_renderIconLink;
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title in the styles tab for the icon button for jumping to the anchor node.
     */
    jumpToAnchorNode: 'Jump to anchor node',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AnchorFunctionLinkSwatch.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
// clang-format on
class AnchorFunctionLinkSwatch extends HTMLElement {
    constructor(data) {
        super();
        _AnchorFunctionLinkSwatch_instances.add(this);
        _AnchorFunctionLinkSwatch_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AnchorFunctionLinkSwatch_data.set(this, void 0);
        __classPrivateFieldSet(this, _AnchorFunctionLinkSwatch_data, data, "f");
    }
    dataForTest() {
        return __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f");
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './anchorFunctionLinkSwatch.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        this.render();
    }
    set data(data) {
        __classPrivateFieldSet(this, _AnchorFunctionLinkSwatch_data, data, "f");
        this.render();
    }
    render() {
        if (!__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier && !__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").anchorNode) {
            return;
        }
        if (__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier) {
            // clang-format off
            render(html `${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_renderIdentifierLink).call(this)}${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").needsSpace ? ' ' : ''}`, __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f"), { host: this });
            // clang-format on
        }
        else {
            // clang-format off
            render(html `${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_renderIconLink).call(this)}${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").needsSpace ? ' ' : ''}`, __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_shadow, "f"), { host: this });
            // clang-format on
        }
    }
}
_AnchorFunctionLinkSwatch_shadow = new WeakMap(), _AnchorFunctionLinkSwatch_data = new WeakMap(), _AnchorFunctionLinkSwatch_instances = new WeakSet(), _AnchorFunctionLinkSwatch_handleIconClick = function _AnchorFunctionLinkSwatch_handleIconClick(ev) {
    ev.stopPropagation();
    __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onLinkActivate();
}, _AnchorFunctionLinkSwatch_renderIdentifierLink = function _AnchorFunctionLinkSwatch_renderIdentifierLink() {
    // clang-format off
    return html `<${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}
      @mouseenter=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseEnter}
      @mouseleave=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseLeave}
      .data=${{
        text: __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").identifier,
        isDefined: Boolean(__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").anchorNode),
        jslogContext: 'anchor-link',
        onLinkActivate: __classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onLinkActivate,
    }}></${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.LinkSwatch.LinkSwatch.litTagName}>`;
    // clang-format on
}, _AnchorFunctionLinkSwatch_renderIconLink = function _AnchorFunctionLinkSwatch_renderIconLink() {
    // clang-format off
    return html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
      role='button'
      title=${i18nString(UIStrings.jumpToAnchorNode)}
      class='icon-link'
      name='open-externally'
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('jump-to-anchor-node').track({ click: true })}
      @mouseenter=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseEnter}
      @mouseleave=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_data, "f").onMouseLeave}
      @mousedown=${(ev) => ev.stopPropagation()}
      @click=${__classPrivateFieldGet(this, _AnchorFunctionLinkSwatch_instances, "m", _AnchorFunctionLinkSwatch_handleIconClick)}
    ></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>`;
    // clang-format on
};
Object.defineProperty(AnchorFunctionLinkSwatch, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-anchor-function-link-swatch`
});
customElements.define('devtools-anchor-function-link-swatch', AnchorFunctionLinkSwatch);


/***/ })

}]);