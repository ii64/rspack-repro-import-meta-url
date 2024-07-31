"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_two_states_counter_TwoStatesCounter_ts"],{

/***/ "./src/ui/components/two_states_counter/TwoStatesCounter.ts":
/*!******************************************************************!*\
  !*** ./src/ui/components/two_states_counter/TwoStatesCounter.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoStatesCounter: () => (/* binding */ TwoStatesCounter)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './twoStatesCounter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
var _TwoStatesCounter_instances, _TwoStatesCounter_boundRender, _TwoStatesCounter_shadow, _TwoStatesCounter_numActive, _TwoStatesCounter_numInactive, _TwoStatesCounter_width, _TwoStatesCounter_height, _TwoStatesCounter_activeTitle, _TwoStatesCounter_inactiveTitle, _TwoStatesCounter_render, _TwoStatesCounter_renderPart;



const isString = (value) => value !== undefined;
class TwoStatesCounter extends HTMLElement {
    constructor() {
        super(...arguments);
        _TwoStatesCounter_instances.add(this);
        _TwoStatesCounter_boundRender.set(this, __classPrivateFieldGet(this, _TwoStatesCounter_instances, "m", _TwoStatesCounter_render).bind(this));
        _TwoStatesCounter_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _TwoStatesCounter_numActive.set(this, 0);
        _TwoStatesCounter_numInactive.set(this, 0);
        _TwoStatesCounter_width.set(this, '14px');
        _TwoStatesCounter_height.set(this, '14px');
        _TwoStatesCounter_activeTitle.set(this, void 0);
        _TwoStatesCounter_inactiveTitle.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _TwoStatesCounter_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './twoStatesCounter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _TwoStatesCounter_boundRender, "f"));
    }
    set data(data) {
        if (data.active < 0 || data.inactive < 0) {
            throw new Error('Values need to be greater or equal to zero.');
        }
        __classPrivateFieldSet(this, _TwoStatesCounter_numActive, data.active, "f");
        __classPrivateFieldSet(this, _TwoStatesCounter_numInactive, data.inactive, "f");
        __classPrivateFieldSet(this, _TwoStatesCounter_width, isString(data.width) ? data.width : __classPrivateFieldGet(this, _TwoStatesCounter_width, "f"), "f");
        __classPrivateFieldSet(this, _TwoStatesCounter_height, isString(data.height) ? data.height : __classPrivateFieldGet(this, _TwoStatesCounter_height, "f"), "f");
        __classPrivateFieldSet(this, _TwoStatesCounter_activeTitle, data.activeTitle, "f");
        __classPrivateFieldSet(this, _TwoStatesCounter_inactiveTitle, data.inactiveTitle, "f");
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _TwoStatesCounter_boundRender, "f"));
    }
}
_TwoStatesCounter_boundRender = new WeakMap(), _TwoStatesCounter_shadow = new WeakMap(), _TwoStatesCounter_numActive = new WeakMap(), _TwoStatesCounter_numInactive = new WeakMap(), _TwoStatesCounter_width = new WeakMap(), _TwoStatesCounter_height = new WeakMap(), _TwoStatesCounter_activeTitle = new WeakMap(), _TwoStatesCounter_inactiveTitle = new WeakMap(), _TwoStatesCounter_instances = new WeakSet(), _TwoStatesCounter_render = function _TwoStatesCounter_render() {
    if (__classPrivateFieldGet(this, _TwoStatesCounter_numActive, "f") === 0 && __classPrivateFieldGet(this, _TwoStatesCounter_numInactive, "f") === 0) {
        return;
    }
    const showBothNumbers = __classPrivateFieldGet(this, _TwoStatesCounter_numActive, "f") > 0 && __classPrivateFieldGet(this, _TwoStatesCounter_numInactive, "f") > 0;
    const commonClasses = {
        part: true,
        split: showBothNumbers,
    };
    const activeClassMap = {
        ...commonClasses,
        active: true,
    };
    const inactiveClassMap = {
        ...commonClasses,
        inactive: true,
    };
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
    <div class='counter'>
      ${__classPrivateFieldGet(this, _TwoStatesCounter_instances, "m", _TwoStatesCounter_renderPart).call(this, __classPrivateFieldGet(this, _TwoStatesCounter_numActive, "f"), activeClassMap, __classPrivateFieldGet(this, _TwoStatesCounter_activeTitle, "f"))}
      ${__classPrivateFieldGet(this, _TwoStatesCounter_instances, "m", _TwoStatesCounter_renderPart).call(this, __classPrivateFieldGet(this, _TwoStatesCounter_numInactive, "f"), inactiveClassMap, __classPrivateFieldGet(this, _TwoStatesCounter_inactiveTitle, "f"))}
    </div>
    `, __classPrivateFieldGet(this, _TwoStatesCounter_shadow, "f"), { host: this });
    // clang-format on
}, _TwoStatesCounter_renderPart = function _TwoStatesCounter_renderPart(count, classInfo, title) {
    const styles = {
        width: __classPrivateFieldGet(this, _TwoStatesCounter_width, "f"),
        height: __classPrivateFieldGet(this, _TwoStatesCounter_height, "f"),
    };
    // clang-format off
    return count > 0 ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
       <span class=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classInfo)} style=${_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles)} title=${title}>
          ${count}
       </span>
      ` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    // clang-format on
};
Object.defineProperty(TwoStatesCounter, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-two-states-counter`
});
customElements.define('devtools-two-states-counter', TwoStatesCounter);


/***/ })

}]);