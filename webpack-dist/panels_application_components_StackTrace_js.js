"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_StackTrace_js"],{

/***/ "./panels/application/components/StackTrace.js":
/*!*****************************************************!*\
  !*** ./panels/application/components/StackTrace.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackTrace: () => (/* binding */ StackTrace),
/* harmony export */   StackTraceLinkButton: () => (/* binding */ StackTraceLinkButton),
/* harmony export */   StackTraceRow: () => (/* binding */ StackTraceRow)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _stackTraceLinkButton_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stackTraceLinkButton.css.js */ "./panels/application/components/stackTraceLinkButton.css.js");
/* harmony import */ var _stackTraceRow_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stackTraceRow.css.js */ "./panels/application/components/stackTraceRow.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Error message stating that something went wrong when tring to render stack trace
     */
    cannotRenderStackTrace: 'Cannot render stack trace',
    /**
     *@description A link to show more frames in the stack trace if more are available. Never 0.
     */
    showSMoreFrames: '{n, plural, =1 {Show # more frame} other {Show # more frames}}',
    /**
     *@description A link to rehide frames that are by default hidden.
     */
    showLess: 'Show less',
    /**
     *@description Label for a stack trace. If a frame is created programmatically (i.e. via JavaScript), there is a
     * stack trace for the line of code which caused the creation of the iframe. This is the stack trace we are showing here.
     */
    creationStackTrace: 'Frame Creation `Stack Trace`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/StackTrace.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class StackTraceRow extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-stack-trace-row`;
    #shadow = this.attachShadow({ mode: 'open' });
    #stackTraceRowItem = null;
    set data(data) {
        this.#stackTraceRowItem = data.stackTraceRowItem;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_stackTraceRow_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
    }
    #render() {
        if (!this.#stackTraceRowItem) {
            return;
        }
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="stack-trace-row">
              <div class="stack-trace-function-name text-ellipsis" title=${this.#stackTraceRowItem.functionName}>
                ${this.#stackTraceRowItem.functionName}
              </div>
              <div class="stack-trace-source-location">
                ${this.#stackTraceRowItem.link ?
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div class="text-ellipsis">\xA0@\xA0${this.#stackTraceRowItem.link}</div>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
              </div>
            </div>
    `, this.#shadow, { host: this });
    }
}
class StackTraceLinkButton extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-stack-trace-link-button`;
    #shadow = this.attachShadow({ mode: 'open' });
    #onShowAllClick = () => { };
    #hiddenCallFramesCount = null;
    #expandedView = false;
    set data(data) {
        this.#onShowAllClick = data.onShowAllClick;
        this.#hiddenCallFramesCount = data.hiddenCallFramesCount;
        this.#expandedView = data.expandedView;
        this.#render();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_stackTraceLinkButton_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    #render() {
        if (!this.#hiddenCallFramesCount) {
            return;
        }
        const linkText = this.#expandedView ? i18nString(UIStrings.showLess) :
            i18nString(UIStrings.showSMoreFrames, { n: this.#hiddenCallFramesCount });
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="stack-trace-row">
          <button class="link" @click=${() => this.#onShowAllClick()}>
            ${linkText}
          </button>
        </div>
    `, this.#shadow, { host: this });
    }
}
class StackTrace extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-resources-stack-trace`;
    #shadow = this.attachShadow({ mode: 'open' });
    #linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier();
    #stackTraceRows = [];
    #showHidden = false;
    set data(data) {
        const frame = data.frame;
        const { creationStackTrace, creationStackTraceTarget } = frame.getCreationStackTraceData();
        if (creationStackTrace) {
            this.#stackTraceRows = data.buildStackTraceRows(creationStackTrace, creationStackTraceTarget, this.#linkifier, true, this.#onStackTraceRowsUpdated.bind(this));
        }
        this.#render();
    }
    #onStackTraceRowsUpdated(stackTraceRows) {
        this.#stackTraceRows = stackTraceRows;
        this.#render();
    }
    #onToggleShowAllClick() {
        this.#showHidden = !this.#showHidden;
        this.#render();
    }
    createRowTemplates() {
        const expandableRows = [];
        let hiddenCallFramesCount = 0;
        for (const item of this.#stackTraceRows) {
            if (this.#showHidden || !item.ignoreListHide) {
                if ('functionName' in item) {
                    expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
          <${StackTraceRow.litTagName} data-stack-trace-row .data=${{
                        stackTraceRowItem: item,
                    }}></${StackTraceRow.litTagName}>`);
                }
                if ('asyncDescription' in item) {
                    expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div>${item.asyncDescription}</div>
          `);
                }
            }
            if ('functionName' in item && item.ignoreListHide) {
                hiddenCallFramesCount++;
            }
        }
        if (hiddenCallFramesCount) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <${StackTraceLinkButton.litTagName} data-stack-trace-row .data=${{ onShowAllClick: this.#onToggleShowAllClick.bind(this), hiddenCallFramesCount, expandedView: this.#showHidden }}></${StackTraceLinkButton.litTagName}>
      `);
            // clang-format on
        }
        return expandableRows;
    }
    #render() {
        if (!this.#stackTraceRows.length) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
          <span>${i18nString(UIStrings.cannotRenderStackTrace)}</span>
        `, this.#shadow, { host: this });
            return;
        }
        const expandableRows = this.createRowTemplates();
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName} .data=${{
            rows: expandableRows, title: i18nString(UIStrings.creationStackTrace),
        }}>
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.tree()}>
        </${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName}>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-stack-trace-row', StackTraceRow);
customElements.define('devtools-stack-trace-link-button', StackTraceLinkButton);
customElements.define('devtools-resources-stack-trace', StackTrace);
//# sourceMappingURL=StackTrace.js.map

/***/ }),

/***/ "./panels/application/components/stackTraceLinkButton.css.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/stackTraceLinkButton.css.js ***!
  \*******************************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

button.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

/*# sourceURL=stackTraceLinkButton.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/components/stackTraceRow.css.js":
/*!************************************************************!*\
  !*** ./panels/application/components/stackTraceRow.css.js ***!
  \************************************************************/
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
 * Copyright (c) 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.stack-trace-row {
  display: flex;
}

.stack-trace-function-name {
  width: 100px;
}

.stack-trace-source-location {
  display: flex;
  overflow: hidden;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stack-trace-source-location .text-ellipsis {
  padding-right: 2px;
}

.ignore-list-link {
  opacity: 60%;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  border: none;
  background: none;
}

/*# sourceURL=stackTraceRow.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


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