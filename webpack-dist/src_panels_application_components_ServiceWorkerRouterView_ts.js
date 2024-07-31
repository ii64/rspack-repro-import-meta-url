"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_ServiceWorkerRouterView_ts"],{

/***/ "./src/panels/application/components/ServiceWorkerRouterView.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/application/components/ServiceWorkerRouterView.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceWorkerRouterView: () => (/* binding */ ServiceWorkerRouterView)
/* harmony export */ });
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './serviceWorkerRouterView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
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
var _ServiceWorkerRouterView_instances, _ServiceWorkerRouterView_shadow, _ServiceWorkerRouterView_rules, _ServiceWorkerRouterView_render, _ServiceWorkerRouterView_renderRouterRule;



const { html, render } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class ServiceWorkerRouterView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _ServiceWorkerRouterView_instances.add(this);
        _ServiceWorkerRouterView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ServiceWorkerRouterView_rules.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ServiceWorkerRouterView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './serviceWorkerRouterView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    update(rules) {
        __classPrivateFieldSet(this, _ServiceWorkerRouterView_rules, rules, "f");
        if (__classPrivateFieldGet(this, _ServiceWorkerRouterView_rules, "f").length > 0) {
            __classPrivateFieldGet(this, _ServiceWorkerRouterView_instances, "m", _ServiceWorkerRouterView_render).call(this);
        }
    }
}
_ServiceWorkerRouterView_shadow = new WeakMap(), _ServiceWorkerRouterView_rules = new WeakMap(), _ServiceWorkerRouterView_instances = new WeakSet(), _ServiceWorkerRouterView_render = function _ServiceWorkerRouterView_render() {
    // clang-format off
    render(html `
      <ul class="router-rules">
        ${__classPrivateFieldGet(this, _ServiceWorkerRouterView_rules, "f").map(__classPrivateFieldGet(this, _ServiceWorkerRouterView_instances, "m", _ServiceWorkerRouterView_renderRouterRule))}
      </ul>
    `, __classPrivateFieldGet(this, _ServiceWorkerRouterView_shadow, "f"), { host: this });
    // clang-format on
}, _ServiceWorkerRouterView_renderRouterRule = function _ServiceWorkerRouterView_renderRouterRule(rule) {
    return html `
      <li class="router-rule">
        <div class="rule-id">Rule ${rule.id}</div>
        <ul class="item">
          <li class="condition">
            <div class="rule-type">Condition</div>
            <div class="rule-value">${rule.condition}</div>
          </li>
          <li class="source">
            <div class="rule-type">Source</div>
            <div class="rule-value">${rule.source}</div>
          </li>
        </ul>
      </li>
    `;
};
Object.defineProperty(ServiceWorkerRouterView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-service-worker-router-view`
});
customElements.define('devtools-service-worker-router-view', ServiceWorkerRouterView);


/***/ })

}]);