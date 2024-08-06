"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_expandable_list_basic_js"],{

/***/ "./ui/components/docs/expandable_list/basic.js":
/*!*****************************************************!*\
  !*** ./ui/components/docs/expandable_list/basic.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const component = new _expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableList.ExpandableList();
const rows = [];
rows.push(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
  <div>This is row 1. Click on the triangle icon to expand.</div>
`);
for (let rowNumber = 2; rowNumber < 11; rowNumber++) {
    rows.push(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
    <div>This is row ${rowNumber}.</div>
  `);
}
component.data = {
    rows,
};
document.getElementById('container')?.appendChild(component);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./ui/components/expandable_list/ExpandableList.js":
/*!*********************************************************!*\
  !*** ./ui/components/expandable_list/ExpandableList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* binding */ ExpandableList)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _expandableList_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandableList.css.js */ "./ui/components/expandable_list/expandableList.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ExpandableList extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-expandable-list`;
    #shadow = this.attachShadow({ mode: 'open' });
    #expanded = false;
    #rows = [];
    #title;
    set data(data) {
        this.#rows = data.rows;
        this.#title = data.title;
        this.#render();
    }
    #onArrowClick() {
        this.#expanded = !this.#expanded;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_expandableList_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    #render() {
        if (this.#rows.length < 1) {
            return;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="expandable-list-container">
        <div>
          ${this.#rows.length > 1 ?
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
              <button title='${this.#title}' aria-label='${this.#title}' aria-expanded=${this.#expanded ? 'true' : 'false'} @click=${() => this.#onArrowClick()} class="arrow-icon-button">
                <span class="arrow-icon ${this.#expanded ? 'expanded' : ''}"
                jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.expand().track({ click: true })}></span>
              </button>
            `
            : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        </div>
        <div class="expandable-list-items">
          ${this.#rows.filter((_, index) => (this.#expanded || index === 0)).map(row => _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
            ${row}
          `)}
        </div>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-expandable-list', ExpandableList);
//# sourceMappingURL=ExpandableList.js.map

/***/ }),

/***/ "./ui/components/expandable_list/expandableList.css.js":
/*!*************************************************************!*\
  !*** ./ui/components/expandable_list/expandableList.css.js ***!
  \*************************************************************/
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
  overflow: hidden;
}

div {
  line-height: 1.7em;
}

.arrow-icon-button {
  cursor: pointer;
  padding: 1px 0;
  border: none;
  background: none;
  margin-right: 2px;
}

.arrow-icon {
  display: inline-block;
  mask-image: var(--image-file-triangle-right);
  background-color: var(--icon-default);
  margin-top: 2px;
  height: 14px;
  width: 14px;
  transition: transform 200ms;
}

.arrow-icon.expanded {
  transform: rotate(90deg);
}

.expandable-list-container {
  display: flex;
  margin-top: 4px;
}

.expandable-list-items {
  overflow: hidden;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*# sourceURL=expandableList.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/expandable_list/expandable_list.js":
/*!**********************************************************!*\
  !*** ./ui/components/expandable_list/expandable_list.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandableList: () => (/* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./ui/components/expandable_list/ExpandableList.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=expandable_list.js.map

/***/ })

}]);