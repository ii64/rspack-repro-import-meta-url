"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_report_view_report_view_js-_cb651"],{

/***/ "./ui/components/report_view/ReportView.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/ReportView.js ***!
  \*************************************************/
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
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _report_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.css.js */ "./ui/components/report_view/report.css.js");
/* harmony import */ var _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportKey.css.js */ "./ui/components/report_view/reportKey.css.js");
/* harmony import */ var _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportSection.css.js */ "./ui/components/report_view/reportSection.css.js");
/* harmony import */ var _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportSectionDivider.css.js */ "./ui/components/report_view/reportSectionDivider.css.js");
/* harmony import */ var _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportSectionHeader.css.js */ "./ui/components/report_view/reportSectionHeader.css.js");
/* harmony import */ var _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportValue.css.js */ "./ui/components/report_view/reportValue.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class Report extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`;
    #shadow = this.attachShadow({ mode: 'open' });
    #reportTitle = '';
    set data({ reportTitle }) {
        this.#reportTitle = reportTitle;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_report_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${this.#reportTitle ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${this.#reportTitle}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSection extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionHeader extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportSectionDivider extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportKey extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
class ReportValue extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`;
    #shadow = this.attachShadow({ mode: 'open' });
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);
//# sourceMappingURL=ReportView.js.map

/***/ }),

/***/ "./ui/components/report_view/report.css.js":
/*!*************************************************!*\
  !*** ./ui/components/report_view/report.css.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: block;
}

.content {
  background-color: var(--sys-color-cdt-base-container);
  display: grid;
  grid-template-columns: min-content 1fr;
  user-select: text;
}

.report-title {
  padding: 12px 24px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid var(--sys-color-divider);
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  grid-column-start: span 2;
}

/*# sourceURL=report.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportKey.css.js":
/*!****************************************************!*\
  !*** ./ui/components/report_view/reportKey.css.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
}

.key {
  color: var(--sys-color-on-surface-subtle);
  padding: 0 6px;
  text-align: right;
  white-space: pre;
  user-select: none;
}

/*# sourceURL=reportKey.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSection.css.js":
/*!********************************************************!*\
  !*** ./ui/components/report_view/reportSection.css.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
  min-width: min-content;
}

.section {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

/*# sourceURL=reportSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionDivider.css.js":
/*!***************************************************************!*\
  !*** ./ui/components/report_view/reportSectionDivider.css.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-divider {
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=reportSectionDivider.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportSectionHeader.css.js":
/*!**************************************************************!*\
  !*** ./ui/components/report_view/reportSectionHeader.css.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  grid-column-start: span 2;
}

.section-header {
  padding: 12px;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  user-select: none;
}

/*# sourceURL=reportSectionHeader.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/reportValue.css.js":
/*!******************************************************!*\
  !*** ./ui/components/report_view/reportValue.css.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  line-height: 28px;
  margin: 0 0 8px;
  min-width: 150px;
}

.value {
  color: var(--sys-color-on-surface);
  margin-inline-start: 0;
  padding: 0 6px;
  overflow-wrap: break-word;
}

/*# sourceURL=reportValue.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/report_view/report_view.js":
/*!**************************************************!*\
  !*** ./ui/components/report_view/report_view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=report_view.js.map

/***/ })

}]);