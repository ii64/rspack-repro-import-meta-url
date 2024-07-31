"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_EditableSpan_ts"],{

/***/ "./src/panels/network/components/EditableSpan.ts":
/*!*******************************************************!*\
  !*** ./src/panels/network/components/EditableSpan.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditableSpan: () => (/* binding */ EditableSpan)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './EditableSpan.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _EditableSpan_instances, _EditableSpan_shadow, _EditableSpan_boundRender, _EditableSpan_value, _EditableSpan_onKeyDown, _EditableSpan_onInput, _EditableSpan_selectAllText, _EditableSpan_render;




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class EditableSpan extends HTMLElement {
    constructor() {
        super(...arguments);
        _EditableSpan_instances.add(this);
        _EditableSpan_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _EditableSpan_boundRender.set(this, __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_render).bind(this));
        _EditableSpan_value.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './EditableSpan.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('focusin', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_selectAllText).bind(this));
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('keydown', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_onKeyDown).bind(this));
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('input', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_onInput).bind(this));
    }
    set data(data) {
        __classPrivateFieldSet(this, _EditableSpan_value, data.value, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _EditableSpan_boundRender, "f"));
    }
    get value() {
        return __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('span')?.innerText || '';
    }
    set value(value) {
        __classPrivateFieldSet(this, _EditableSpan_value, value, "f");
        const span = __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('span');
        if (span) {
            span.innerText = value;
        }
    }
    focus() {
        requestAnimationFrame(() => {
            const span = __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('.editable');
            span?.focus();
        });
    }
}
_EditableSpan_shadow = new WeakMap(), _EditableSpan_boundRender = new WeakMap(), _EditableSpan_value = new WeakMap(), _EditableSpan_instances = new WeakSet(), _EditableSpan_onKeyDown = function _EditableSpan_onKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        event.target?.blur();
    }
}, _EditableSpan_onInput = function _EditableSpan_onInput(event) {
    __classPrivateFieldSet(this, _EditableSpan_value, event.target.innerText, "f");
}, _EditableSpan_selectAllText = function _EditableSpan_selectAllText(event) {
    const target = event.target;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection?.removeAllRanges();
    selection?.addRange(range);
}, _EditableSpan_render = function _EditableSpan_render() {
    if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('HeaderSectionRow render was not scheduled');
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `<span
        contenteditable="plaintext-only"
        class="editable"
        tabindex="0"
        .innerText=${__classPrivateFieldGet(this, _EditableSpan_value, "f")}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.value('header-editor').track({ change: true, keydown: 'Enter|Escape' })}
    </span>`, __classPrivateFieldGet(this, _EditableSpan_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(EditableSpan, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-editable-span`
});
customElements.define('devtools-editable-span', EditableSpan);


/***/ })

}]);