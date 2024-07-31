"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_expandable_list_expandable_list_ts"],{

/***/ "./src/ui/components/expandable_list/ExpandableList.ts":
/*!*************************************************************!*\
  !*** ./src/ui/components/expandable_list/ExpandableList.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* binding */ ExpandableList)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './expandableList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _ExpandableList_instances, _ExpandableList_shadow, _ExpandableList_expanded, _ExpandableList_rows, _ExpandableList_title, _ExpandableList_onArrowClick, _ExpandableList_render;



class ExpandableList extends HTMLElement {
    constructor() {
        super(...arguments);
        _ExpandableList_instances.add(this);
        _ExpandableList_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ExpandableList_expanded.set(this, false);
        _ExpandableList_rows.set(this, []);
        _ExpandableList_title.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _ExpandableList_rows, data.rows, "f");
        __classPrivateFieldSet(this, _ExpandableList_title, data.title, "f");
        __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ExpandableList_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './expandableList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_ExpandableList_shadow = new WeakMap(), _ExpandableList_expanded = new WeakMap(), _ExpandableList_rows = new WeakMap(), _ExpandableList_title = new WeakMap(), _ExpandableList_instances = new WeakSet(), _ExpandableList_onArrowClick = function _ExpandableList_onArrowClick() {
    __classPrivateFieldSet(this, _ExpandableList_expanded, !__classPrivateFieldGet(this, _ExpandableList_expanded, "f"), "f");
    __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_render).call(this);
}, _ExpandableList_render = function _ExpandableList_render() {
    if (__classPrivateFieldGet(this, _ExpandableList_rows, "f").length < 1) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="expandable-list-container">
        <div>
          ${__classPrivateFieldGet(this, _ExpandableList_rows, "f").length > 1 ?
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
              <button title='${__classPrivateFieldGet(this, _ExpandableList_title, "f")}' aria-label='${__classPrivateFieldGet(this, _ExpandableList_title, "f")}' aria-expanded=${__classPrivateFieldGet(this, _ExpandableList_expanded, "f") ? 'true' : 'false'} @click=${() => __classPrivateFieldGet(this, _ExpandableList_instances, "m", _ExpandableList_onArrowClick).call(this)} class="arrow-icon-button">
                <span class="arrow-icon ${__classPrivateFieldGet(this, _ExpandableList_expanded, "f") ? 'expanded' : ''}"
                jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.expand().track({ click: true })}></span>
              </button>
            `
        : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        </div>
        <div class="expandable-list-items">
          ${__classPrivateFieldGet(this, _ExpandableList_rows, "f").filter((_, index) => (__classPrivateFieldGet(this, _ExpandableList_expanded, "f") || index === 0)).map(row => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
            ${row}
          `)}
        </div>
      </div>
    `, __classPrivateFieldGet(this, _ExpandableList_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ExpandableList, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-expandable-list`
});
customElements.define('devtools-expandable-list', ExpandableList);


/***/ }),

/***/ "./src/ui/components/expandable_list/expandable_list.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/expandable_list/expandable_list.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./src/ui/components/expandable_list/ExpandableList.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);