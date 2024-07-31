"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_TimelineSection_ts"],{

/***/ "./src/panels/recorder/components/TimelineSection.ts":
/*!***********************************************************!*\
  !*** ./src/panels/recorder/components/TimelineSection.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineSection: () => (/* binding */ TimelineSection)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './timelineSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _TimelineSection_instances, _TimelineSection_isEndOfGroup, _TimelineSection_isStartOfGroup, _TimelineSection_isFirstSection, _TimelineSection_isLastSection, _TimelineSection_isSelected, _TimelineSection_render;


class TimelineSection extends HTMLElement {
    constructor() {
        super();
        _TimelineSection_instances.add(this);
        _TimelineSection_isEndOfGroup.set(this, false);
        _TimelineSection_isStartOfGroup.set(this, false);
        _TimelineSection_isFirstSection.set(this, false);
        _TimelineSection_isLastSection.set(this, false);
        _TimelineSection_isSelected.set(this, false);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './timelineSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _TimelineSection_isFirstSection, data.isFirstSection, "f");
        __classPrivateFieldSet(this, _TimelineSection_isLastSection, data.isLastSection, "f");
        __classPrivateFieldSet(this, _TimelineSection_isEndOfGroup, data.isEndOfGroup, "f");
        __classPrivateFieldSet(this, _TimelineSection_isStartOfGroup, data.isStartOfGroup, "f");
        __classPrivateFieldSet(this, _TimelineSection_isSelected, data.isSelected, "f");
        __classPrivateFieldGet(this, _TimelineSection_instances, "m", _TimelineSection_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _TimelineSection_instances, "m", _TimelineSection_render).call(this);
    }
}
_TimelineSection_isEndOfGroup = new WeakMap(), _TimelineSection_isStartOfGroup = new WeakMap(), _TimelineSection_isFirstSection = new WeakMap(), _TimelineSection_isLastSection = new WeakMap(), _TimelineSection_isSelected = new WeakMap(), _TimelineSection_instances = new WeakSet(), _TimelineSection_render = function _TimelineSection_render() {
    const classes = {
        'timeline-section': true,
        'is-end-of-group': __classPrivateFieldGet(this, _TimelineSection_isEndOfGroup, "f"),
        'is-start-of-group': __classPrivateFieldGet(this, _TimelineSection_isStartOfGroup, "f"),
        'is-first-section': __classPrivateFieldGet(this, _TimelineSection_isFirstSection, "f"),
        'is-last-section': __classPrivateFieldGet(this, _TimelineSection_isLastSection, "f"),
        'is-selected': __classPrivateFieldGet(this, _TimelineSection_isSelected, "f"),
    };
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classes)}>
        <div class="overlay"></div>
        <div class="icon"><slot name="icon"></slot></div>
        <svg width="24" height="100%" class="bar">
          <rect class="line" x="7" y="0" width="2" height="100%" />
        </svg>
        <slot></slot>
      </div>
    `, this.shadowRoot, { host: this });
    // clang-format on
};
Object.defineProperty(TimelineSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-timeline-section`
});
customElements.define('devtools-timeline-section', TimelineSection);


/***/ })

}]);