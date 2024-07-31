"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_expandable_list_expandable_list_ts-src_ui_components_report_view_report_vie-18ab97"],{

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




/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/tree_outline/tree_outline.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/tree_outline/tree_outline.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeOutline: () => (/* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   TreeOutlineUtils: () => (/* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./src/ui/components/tree_outline/TreeOutline.ts");
/* harmony import */ var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./src/ui/components/tree_outline/TreeOutlineUtils.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);