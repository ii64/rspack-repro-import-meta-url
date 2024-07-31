"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_ComputedStyleTrace_ts"],{

/***/ "./src/panels/elements/components/ComputedStyleTrace.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/components/ComputedStyleTrace.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleTrace: () => (/* binding */ ComputedStyleTrace)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleTrace.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _ComputedStyleTrace_instances, _ComputedStyleTrace_shadow, _ComputedStyleTrace_selector, _ComputedStyleTrace_active, _ComputedStyleTrace_onNavigateToSource, _ComputedStyleTrace_ruleOriginNode, _ComputedStyleTrace_render;



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ComputedStyleTrace extends HTMLElement {
    constructor() {
        super(...arguments);
        _ComputedStyleTrace_instances.add(this);
        _ComputedStyleTrace_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ComputedStyleTrace_selector.set(this, '');
        _ComputedStyleTrace_active.set(this, false);
        _ComputedStyleTrace_onNavigateToSource.set(this, () => { });
        _ComputedStyleTrace_ruleOriginNode.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleTrace.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.injectCoreStyles(__classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f"));
    }
    set data(data) {
        __classPrivateFieldSet(this, _ComputedStyleTrace_selector, data.selector, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_active, data.active, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_onNavigateToSource, data.onNavigateToSource, "f");
        __classPrivateFieldSet(this, _ComputedStyleTrace_ruleOriginNode, data.ruleOriginNode, "f");
        __classPrivateFieldGet(this, _ComputedStyleTrace_instances, "m", _ComputedStyleTrace_render).call(this);
    }
}
_ComputedStyleTrace_shadow = new WeakMap(), _ComputedStyleTrace_selector = new WeakMap(), _ComputedStyleTrace_active = new WeakMap(), _ComputedStyleTrace_onNavigateToSource = new WeakMap(), _ComputedStyleTrace_ruleOriginNode = new WeakMap(), _ComputedStyleTrace_instances = new WeakSet(), _ComputedStyleTrace_render = function _ComputedStyleTrace_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="computed-style-trace ${__classPrivateFieldGet(this, _ComputedStyleTrace_active, "f") ? 'active' : 'inactive'}">
        <span class="goto" @click=${__classPrivateFieldGet(this, _ComputedStyleTrace_onNavigateToSource, "f")}></span>
        <slot name="trace-value" @click=${__classPrivateFieldGet(this, _ComputedStyleTrace_onNavigateToSource, "f")}></slot>
        <span class="trace-selector">${__classPrivateFieldGet(this, _ComputedStyleTrace_selector, "f")}</span>
        <span class="trace-link">${__classPrivateFieldGet(this, _ComputedStyleTrace_ruleOriginNode, "f")}</span>
      </div>
    `, __classPrivateFieldGet(this, _ComputedStyleTrace_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ComputedStyleTrace, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-computed-style-trace`
});
customElements.define('devtools-computed-style-trace', ComputedStyleTrace);


/***/ })

}]);