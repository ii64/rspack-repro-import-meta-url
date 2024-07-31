"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_ComputedStyleProperty_ts"],{

/***/ "./src/panels/elements/components/ComputedStyleProperty.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/elements/components/ComputedStyleProperty.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyleProperty: () => (/* binding */ ComputedStyleProperty),
/* harmony export */   NavigateToSourceEvent: () => (/* binding */ NavigateToSourceEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleProperty.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _ComputedStyleProperty_instances, _ComputedStyleProperty_shadow, _ComputedStyleProperty_inherited, _ComputedStyleProperty_traceable, _ComputedStyleProperty_onNavigateToSourceClick, _ComputedStyleProperty_render;



const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NavigateToSourceEvent extends Event {
    constructor() {
        super(NavigateToSourceEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(NavigateToSourceEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'onnavigatetosource'
});
class ComputedStyleProperty extends HTMLElement {
    constructor() {
        super(...arguments);
        _ComputedStyleProperty_instances.add(this);
        _ComputedStyleProperty_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ComputedStyleProperty_inherited.set(this, false);
        _ComputedStyleProperty_traceable.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ComputedStyleProperty_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './computedStyleProperty.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
    set inherited(inherited) {
        if (inherited === __classPrivateFieldGet(this, _ComputedStyleProperty_inherited, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ComputedStyleProperty_inherited, inherited, "f");
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
    set traceable(traceable) {
        if (traceable === __classPrivateFieldGet(this, _ComputedStyleProperty_traceable, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ComputedStyleProperty_traceable, traceable, "f");
        __classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_render).call(this);
    }
}
_ComputedStyleProperty_shadow = new WeakMap(), _ComputedStyleProperty_inherited = new WeakMap(), _ComputedStyleProperty_traceable = new WeakMap(), _ComputedStyleProperty_instances = new WeakSet(), _ComputedStyleProperty_onNavigateToSourceClick = function _ComputedStyleProperty_onNavigateToSourceClick() {
    this.dispatchEvent(new NavigateToSourceEvent());
}, _ComputedStyleProperty_render = function _ComputedStyleProperty_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="computed-style-property ${__classPrivateFieldGet(this, _ComputedStyleProperty_inherited, "f") ? 'inherited' : ''}">
        <div class="property-name">
          <slot name="name"></slot>
        </div>
        <span class="hidden" aria-hidden="false">: </span>
        ${__classPrivateFieldGet(this, _ComputedStyleProperty_traceable, "f") ?
        html `<span class="goto" @click=${__classPrivateFieldGet(this, _ComputedStyleProperty_instances, "m", _ComputedStyleProperty_onNavigateToSourceClick)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('elements.jump-to-style').track({ click: true })}></span>` :
        null}
        <div class="property-value">
          <slot name="value"></slot>
        </div>
        <span class="hidden" aria-hidden="false">;</span>
      </div>
    `, __classPrivateFieldGet(this, _ComputedStyleProperty_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(ComputedStyleProperty, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-computed-style-property`
});
customElements.define('devtools-computed-style-property', ComputedStyleProperty);


/***/ })

}]);