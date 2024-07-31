"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_panel_introduction_steps_PanelIntroductionSteps_ts"],{

/***/ "./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts":
/*!******************************************************************************!*\
  !*** ./src/ui/components/panel_introduction_steps/PanelIntroductionSteps.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelIntroductionSteps: () => (/* binding */ PanelIntroductionSteps)
/* harmony export */ });
/* harmony import */ var _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PanelIntroductionSteps_instances, _PanelIntroductionSteps_shadow, _PanelIntroductionSteps_boundRender, _PanelIntroductionSteps_render;



class PanelIntroductionSteps extends HTMLElement {
    constructor() {
        super(...arguments);
        _PanelIntroductionSteps_instances.add(this);
        _PanelIntroductionSteps_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _PanelIntroductionSteps_boundRender.set(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_instances, "m", _PanelIntroductionSteps_render).bind(this));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './panelIntroductionSteps.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _PanelIntroductionSteps_boundRender, "f"));
    }
}
_PanelIntroductionSteps_shadow = new WeakMap(), _PanelIntroductionSteps_boundRender = new WeakMap(), _PanelIntroductionSteps_instances = new WeakSet(), _PanelIntroductionSteps_render = function _PanelIntroductionSteps_render() {
    if (!_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('FeedbackButton render was not scheduled');
    }
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <h1><slot name="title">slot: title</slot></h1>

      <ol class="intro-steps">
        <li><slot name="step-1">slot: step-1</slot></li>
        <li><slot name="step-2">slot: step-2</slot></li>
        <li><slot name="step-3">slot: step-3</slot></li>
      </ol>
    `, __classPrivateFieldGet(this, _PanelIntroductionSteps_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(PanelIntroductionSteps, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-panel-introduction-steps`
});
customElements.define('devtools-panel-introduction-steps', PanelIntroductionSteps);


/***/ })

}]);