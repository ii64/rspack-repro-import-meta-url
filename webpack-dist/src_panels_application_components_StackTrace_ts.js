"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_StackTrace_ts"],{

/***/ "./src/panels/application/components/StackTrace.ts":
/*!*********************************************************!*\
  !*** ./src/panels/application/components/StackTrace.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackTrace: () => (/* binding */ StackTrace),
/* harmony export */   StackTraceLinkButton: () => (/* binding */ StackTraceLinkButton),
/* harmony export */   StackTraceRow: () => (/* binding */ StackTraceRow)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./src/ui/components/expandable_list/expandable_list.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stackTraceLinkButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stackTraceRow.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _StackTraceRow_instances, _StackTraceRow_shadow, _StackTraceRow_stackTraceRowItem, _StackTraceRow_render, _StackTraceLinkButton_instances, _StackTraceLinkButton_shadow, _StackTraceLinkButton_onShowAllClick, _StackTraceLinkButton_hiddenCallFramesCount, _StackTraceLinkButton_expandedView, _StackTraceLinkButton_render, _StackTrace_instances, _StackTrace_shadow, _StackTrace_linkifier, _StackTrace_stackTraceRows, _StackTrace_showHidden, _StackTrace_onStackTraceRowsUpdated, _StackTrace_onToggleShowAllClick, _StackTrace_render;







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
    constructor() {
        super(...arguments);
        _StackTraceRow_instances.add(this);
        _StackTraceRow_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StackTraceRow_stackTraceRowItem.set(this, null);
    }
    set data(data) {
        __classPrivateFieldSet(this, _StackTraceRow_stackTraceRowItem, data.stackTraceRowItem, "f");
        __classPrivateFieldGet(this, _StackTraceRow_instances, "m", _StackTraceRow_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _StackTraceRow_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stackTraceRow.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_StackTraceRow_shadow = new WeakMap(), _StackTraceRow_stackTraceRowItem = new WeakMap(), _StackTraceRow_instances = new WeakSet(), _StackTraceRow_render = function _StackTraceRow_render() {
    if (!__classPrivateFieldGet(this, _StackTraceRow_stackTraceRowItem, "f")) {
        return;
    }
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="stack-trace-row">
              <div class="stack-trace-function-name text-ellipsis" title=${__classPrivateFieldGet(this, _StackTraceRow_stackTraceRowItem, "f").functionName}>
                ${__classPrivateFieldGet(this, _StackTraceRow_stackTraceRowItem, "f").functionName}
              </div>
              <div class="stack-trace-source-location">
                ${__classPrivateFieldGet(this, _StackTraceRow_stackTraceRowItem, "f").link ?
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<div class="text-ellipsis">\xA0@\xA0${__classPrivateFieldGet(this, _StackTraceRow_stackTraceRowItem, "f").link}</div>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
              </div>
            </div>
    `, __classPrivateFieldGet(this, _StackTraceRow_shadow, "f"), { host: this });
};
Object.defineProperty(StackTraceRow, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-stack-trace-row`
});
class StackTraceLinkButton extends HTMLElement {
    constructor() {
        super(...arguments);
        _StackTraceLinkButton_instances.add(this);
        _StackTraceLinkButton_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StackTraceLinkButton_onShowAllClick.set(this, () => { });
        _StackTraceLinkButton_hiddenCallFramesCount.set(this, null);
        _StackTraceLinkButton_expandedView.set(this, false);
    }
    set data(data) {
        __classPrivateFieldSet(this, _StackTraceLinkButton_onShowAllClick, data.onShowAllClick, "f");
        __classPrivateFieldSet(this, _StackTraceLinkButton_hiddenCallFramesCount, data.hiddenCallFramesCount, "f");
        __classPrivateFieldSet(this, _StackTraceLinkButton_expandedView, data.expandedView, "f");
        __classPrivateFieldGet(this, _StackTraceLinkButton_instances, "m", _StackTraceLinkButton_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _StackTraceLinkButton_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stackTraceLinkButton.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_StackTraceLinkButton_shadow = new WeakMap(), _StackTraceLinkButton_onShowAllClick = new WeakMap(), _StackTraceLinkButton_hiddenCallFramesCount = new WeakMap(), _StackTraceLinkButton_expandedView = new WeakMap(), _StackTraceLinkButton_instances = new WeakSet(), _StackTraceLinkButton_render = function _StackTraceLinkButton_render() {
    if (!__classPrivateFieldGet(this, _StackTraceLinkButton_hiddenCallFramesCount, "f")) {
        return;
    }
    const linkText = __classPrivateFieldGet(this, _StackTraceLinkButton_expandedView, "f") ? i18nString(UIStrings.showLess) :
        i18nString(UIStrings.showSMoreFrames, { n: __classPrivateFieldGet(this, _StackTraceLinkButton_hiddenCallFramesCount, "f") });
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
      <div class="stack-trace-row">
          <button class="link" @click=${() => __classPrivateFieldGet(this, _StackTraceLinkButton_onShowAllClick, "f").call(this)}>
            ${linkText}
          </button>
        </div>
    `, __classPrivateFieldGet(this, _StackTraceLinkButton_shadow, "f"), { host: this });
};
Object.defineProperty(StackTraceLinkButton, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-stack-trace-link-button`
});
class StackTrace extends HTMLElement {
    constructor() {
        super(...arguments);
        _StackTrace_instances.add(this);
        _StackTrace_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StackTrace_linkifier.set(this, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier());
        _StackTrace_stackTraceRows.set(this, []);
        _StackTrace_showHidden.set(this, false);
    }
    set data(data) {
        const frame = data.frame;
        const { creationStackTrace, creationStackTraceTarget } = frame.getCreationStackTraceData();
        if (creationStackTrace) {
            __classPrivateFieldSet(this, _StackTrace_stackTraceRows, data.buildStackTraceRows(creationStackTrace, creationStackTraceTarget, __classPrivateFieldGet(this, _StackTrace_linkifier, "f"), true, __classPrivateFieldGet(this, _StackTrace_instances, "m", _StackTrace_onStackTraceRowsUpdated).bind(this)), "f");
        }
        __classPrivateFieldGet(this, _StackTrace_instances, "m", _StackTrace_render).call(this);
    }
    createRowTemplates() {
        const expandableRows = [];
        let hiddenCallFramesCount = 0;
        for (const item of __classPrivateFieldGet(this, _StackTrace_stackTraceRows, "f")) {
            if (__classPrivateFieldGet(this, _StackTrace_showHidden, "f") || !item.ignoreListHide) {
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
      <${StackTraceLinkButton.litTagName} data-stack-trace-row .data=${{ onShowAllClick: __classPrivateFieldGet(this, _StackTrace_instances, "m", _StackTrace_onToggleShowAllClick).bind(this), hiddenCallFramesCount, expandedView: __classPrivateFieldGet(this, _StackTrace_showHidden, "f") }}></${StackTraceLinkButton.litTagName}>
      `);
            // clang-format on
        }
        return expandableRows;
    }
}
_StackTrace_shadow = new WeakMap(), _StackTrace_linkifier = new WeakMap(), _StackTrace_stackTraceRows = new WeakMap(), _StackTrace_showHidden = new WeakMap(), _StackTrace_instances = new WeakSet(), _StackTrace_onStackTraceRowsUpdated = function _StackTrace_onStackTraceRowsUpdated(stackTraceRows) {
    __classPrivateFieldSet(this, _StackTrace_stackTraceRows, stackTraceRows, "f");
    __classPrivateFieldGet(this, _StackTrace_instances, "m", _StackTrace_render).call(this);
}, _StackTrace_onToggleShowAllClick = function _StackTrace_onToggleShowAllClick() {
    __classPrivateFieldSet(this, _StackTrace_showHidden, !__classPrivateFieldGet(this, _StackTrace_showHidden, "f"), "f");
    __classPrivateFieldGet(this, _StackTrace_instances, "m", _StackTrace_render).call(this);
}, _StackTrace_render = function _StackTrace_render() {
    if (!__classPrivateFieldGet(this, _StackTrace_stackTraceRows, "f").length) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
          <span>${i18nString(UIStrings.cannotRenderStackTrace)}</span>
        `, __classPrivateFieldGet(this, _StackTrace_shadow, "f"), { host: this });
        return;
    }
    const expandableRows = this.createRowTemplates();
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName} .data=${{
        rows: expandableRows, title: i18nString(UIStrings.creationStackTrace),
    }}>
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.tree()}>
        </${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName}>
      `, __classPrivateFieldGet(this, _StackTrace_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(StackTrace, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-resources-stack-trace`
});
customElements.define('devtools-stack-trace-row', StackTraceRow);
customElements.define('devtools-stack-trace-link-button', StackTraceLinkButton);
customElements.define('devtools-resources-stack-trace', StackTrace);


/***/ }),

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