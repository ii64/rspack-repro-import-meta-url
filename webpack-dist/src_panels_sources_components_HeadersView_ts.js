"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_components_HeadersView_ts"],{

/***/ "./src/panels/sources/components/HeadersView.ts":
/*!******************************************************!*\
  !*** ./src/panels/sources/components/HeadersView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadersView: () => (/* binding */ HeadersView),
/* harmony export */   HeadersViewComponent: () => (/* binding */ HeadersViewComponent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './HeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _HeadersView_instances, _HeadersView_headersViewComponent, _HeadersView_uiSourceCode, _HeadersView_setInitialData, _HeadersView_setComponentData, _HeadersView_onWorkingCopyChanged, _HeadersView_onWorkingCopyCommitted, _HeadersViewComponent_instances, _HeadersViewComponent_shadow, _HeadersViewComponent_boundRender, _HeadersViewComponent_headerOverrides, _HeadersViewComponent_uiSourceCode, _HeadersViewComponent_parsingError, _HeadersViewComponent_focusElement, _HeadersViewComponent_textOnFocusIn, _HeadersViewComponent_onKeyDown, _HeadersViewComponent_focusNext, _HeadersViewComponent_selectAllText, _HeadersViewComponent_onFocusIn, _HeadersViewComponent_onFocusOut, _HeadersViewComponent_onContextMenu, _HeadersViewComponent_generateNextHeaderName, _HeadersViewComponent_onClick, _HeadersViewComponent_isDeletable, _HeadersViewComponent_removeHeader, _HeadersViewComponent_onInput, _HeadersViewComponent_onChange, _HeadersViewComponent_onHeadersChanged, _HeadersViewComponent_onPaste, _HeadersViewComponent_render, _HeadersViewComponent_renderApplyToRow, _HeadersViewComponent_renderHeaderRow, _HeadersViewComponent_renderEditable;










const UIStrings = {
    /**
     *@description The title of a button that adds a field to input a header in the editor form.
     */
    addHeader: 'Add a header',
    /**
     *@description The title of a button that removes a field to input a header in the editor form.
     */
    removeHeader: 'Remove this header',
    /**
     *@description The title of a button that removes a section for defining header overrides in the editor form.
     */
    removeBlock: 'Remove this \'`ApplyTo`\'-section',
    /**
     *@description Error message for files which cannot not be parsed.
     *@example {.headers} PH1
     */
    errorWhenParsing: 'Error when parsing \'\'{PH1}\'\'.',
    /**
     *@description Explainer for files which cannot be parsed.
     *@example {.headers} PH1
     */
    parsingErrorExplainer: 'This is most likely due to a syntax error in \'\'{PH1}\'\'. Try opening this file in an external editor to fix the error or delete the file and re-create the override.',
    /**
     *@description Button text for a button which adds an additional header override rule.
     */
    addOverrideRule: 'Add override rule',
    /**
     *@description Text which is a hyperlink to more documentation
     */
    learnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/components/HeadersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const plusIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/plus.svg */ "./src/Images/plus.svg?1e51"), __webpack_require__.b).toString();
const trashIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/bin.svg */ "./src/Images/bin.svg?27ff"), __webpack_require__.b).toString();
const DEFAULT_HEADER_VALUE = 'header value';
const getDefaultHeaderName = (i) => `header-name-${i}`;
class HeadersView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.View.SimpleView {
    constructor(uiSourceCode) {
        super(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('HeadersView'));
        _HeadersView_instances.add(this);
        _HeadersView_headersViewComponent.set(this, new HeadersViewComponent());
        _HeadersView_uiSourceCode.set(this, void 0);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('headers-view')}`);
        __classPrivateFieldSet(this, _HeadersView_uiSourceCode, uiSourceCode, "f");
        __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyChanged, __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_onWorkingCopyChanged), this);
        __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyCommitted, __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_onWorkingCopyCommitted), this);
        this.element.appendChild(__classPrivateFieldGet(this, _HeadersView_headersViewComponent, "f"));
        void __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_setInitialData).call(this);
    }
    getComponent() {
        return __classPrivateFieldGet(this, _HeadersView_headersViewComponent, "f");
    }
    dispose() {
        __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyChanged, __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_onWorkingCopyChanged), this);
        __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.UISourceCode.Events.WorkingCopyCommitted, __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_onWorkingCopyCommitted), this);
    }
}
_HeadersView_headersViewComponent = new WeakMap(), _HeadersView_uiSourceCode = new WeakMap(), _HeadersView_instances = new WeakSet(), _HeadersView_setInitialData = async function _HeadersView_setInitialData() {
    const content = await __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").requestContent();
    __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_setComponentData).call(this, content.content || '');
}, _HeadersView_setComponentData = function _HeadersView_setComponentData(content) {
    let parsingError = false;
    let headerOverrides = [];
    content = content || '[]';
    try {
        headerOverrides = JSON.parse(content);
        if (!headerOverrides.every(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.NetworkPersistenceManager.isHeaderOverride)) {
            throw 'Type mismatch after parsing';
        }
    }
    catch (e) {
        console.error('Failed to parse', __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").url(), 'for locally overriding headers.');
        parsingError = true;
    }
    __classPrivateFieldGet(this, _HeadersView_headersViewComponent, "f").data = {
        headerOverrides,
        uiSourceCode: __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f"),
        parsingError,
    };
}, _HeadersView_onWorkingCopyChanged = function _HeadersView_onWorkingCopyChanged() {
    __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_setComponentData).call(this, __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").workingCopy());
}, _HeadersView_onWorkingCopyCommitted = function _HeadersView_onWorkingCopyCommitted() {
    __classPrivateFieldGet(this, _HeadersView_instances, "m", _HeadersView_setComponentData).call(this, __classPrivateFieldGet(this, _HeadersView_uiSourceCode, "f").workingCopy());
};
class HeadersViewComponent extends HTMLElement {
    constructor() {
        super();
        _HeadersViewComponent_instances.add(this);
        _HeadersViewComponent_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _HeadersViewComponent_boundRender.set(this, __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_render).bind(this));
        _HeadersViewComponent_headerOverrides.set(this, []);
        _HeadersViewComponent_uiSourceCode.set(this, null);
        _HeadersViewComponent_parsingError.set(this, false);
        _HeadersViewComponent_focusElement.set(this, null);
        _HeadersViewComponent_textOnFocusIn.set(this, '');
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('focusin', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onFocusIn).bind(this));
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('focusout', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onFocusOut).bind(this));
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('click', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onClick).bind(this));
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('input', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onInput).bind(this));
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('keydown', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onKeyDown).bind(this));
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").addEventListener('paste', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onPaste).bind(this));
        this.addEventListener('contextmenu', __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onContextMenu).bind(this));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './HeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _HeadersViewComponent_headerOverrides, data.headerOverrides, "f");
        __classPrivateFieldSet(this, _HeadersViewComponent_uiSourceCode, data.uiSourceCode, "f");
        __classPrivateFieldSet(this, _HeadersViewComponent_parsingError, data.parsingError, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeadersViewComponent_boundRender, "f"));
    }
}
_HeadersViewComponent_shadow = new WeakMap(), _HeadersViewComponent_boundRender = new WeakMap(), _HeadersViewComponent_headerOverrides = new WeakMap(), _HeadersViewComponent_uiSourceCode = new WeakMap(), _HeadersViewComponent_parsingError = new WeakMap(), _HeadersViewComponent_focusElement = new WeakMap(), _HeadersViewComponent_textOnFocusIn = new WeakMap(), _HeadersViewComponent_instances = new WeakSet(), _HeadersViewComponent_onKeyDown = function _HeadersViewComponent_onKeyDown(event) {
    const target = event.target;
    if (!target.matches('.editable')) {
        return;
    }
    const keyboardEvent = event;
    if (target.matches('.header-name') && target.innerText === '' &&
        (keyboardEvent.key === 'Enter' || keyboardEvent.key === 'Tab')) {
        // onFocusOut will remove the header -> blur instead of focusing on next editable
        event.preventDefault();
        target.blur();
    }
    else if (keyboardEvent.key === 'Enter') {
        event.preventDefault();
        target.blur();
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_focusNext).call(this, target);
    }
    else if (keyboardEvent.key === 'Escape') {
        event.consume();
        target.innerText = __classPrivateFieldGet(this, _HeadersViewComponent_textOnFocusIn, "f");
        target.blur();
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onChange).call(this, target);
    }
}, _HeadersViewComponent_focusNext = function _HeadersViewComponent_focusNext(target) {
    const elements = Array.from(__classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").querySelectorAll('.editable'));
    const idx = elements.indexOf(target);
    if (idx !== -1 && idx + 1 < elements.length) {
        elements[idx + 1].focus();
    }
}, _HeadersViewComponent_selectAllText = function _HeadersViewComponent_selectAllText(target) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection?.removeAllRanges();
    selection?.addRange(range);
}, _HeadersViewComponent_onFocusIn = function _HeadersViewComponent_onFocusIn(event) {
    const target = event.target;
    if (target.matches('.editable')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_selectAllText).call(this, target);
        __classPrivateFieldSet(this, _HeadersViewComponent_textOnFocusIn, target.innerText, "f");
    }
}, _HeadersViewComponent_onFocusOut = function _HeadersViewComponent_onFocusOut(event) {
    const target = event.target;
    if (target.innerText === '') {
        const rowElement = target.closest('.row');
        const blockIndex = Number(rowElement.dataset.blockIndex);
        const headerIndex = Number(rowElement.dataset.headerIndex);
        if (target.matches('.apply-to')) {
            target.innerText = '*';
            __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].applyTo = '*';
            __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
        }
        else if (target.matches('.header-name')) {
            __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_removeHeader).call(this, blockIndex, headerIndex);
        }
    }
    // clear selection
    const selection = window.getSelection();
    selection?.removeAllRanges();
    __classPrivateFieldGet(this, _HeadersViewComponent_uiSourceCode, "f")?.commitWorkingCopy();
}, _HeadersViewComponent_onContextMenu = function _HeadersViewComponent_onContextMenu(event) {
    if (!__classPrivateFieldGet(this, _HeadersViewComponent_uiSourceCode, "f")) {
        return;
    }
    const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ContextMenu.ContextMenu(event);
    contextMenu.appendApplicableItems(__classPrivateFieldGet(this, _HeadersViewComponent_uiSourceCode, "f"));
    void contextMenu.show();
}, _HeadersViewComponent_generateNextHeaderName = function _HeadersViewComponent_generateNextHeaderName(headers) {
    const takenNames = new Set(headers.map(header => header.name));
    let idx = 1;
    while (takenNames.has(getDefaultHeaderName(idx))) {
        idx++;
    }
    return getDefaultHeaderName(idx);
}, _HeadersViewComponent_onClick = function _HeadersViewComponent_onClick(event) {
    const target = event.target;
    const rowElement = target.closest('.row');
    const blockIndex = Number(rowElement?.dataset.blockIndex || 0);
    const headerIndex = Number(rowElement?.dataset.headerIndex || 0);
    if (target.matches('.add-header')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers.splice(headerIndex + 1, 0, { name: __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_generateNextHeaderName).call(this, __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers), value: DEFAULT_HEADER_VALUE });
        __classPrivateFieldSet(this, _HeadersViewComponent_focusElement, { blockIndex, headerIndex: headerIndex + 1 }, "f");
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
    else if (target.matches('.remove-header')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_removeHeader).call(this, blockIndex, headerIndex);
    }
    else if (target.matches('.add-block')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f").push({ applyTo: '*', headers: [{ name: getDefaultHeaderName(1), value: DEFAULT_HEADER_VALUE }] });
        __classPrivateFieldSet(this, _HeadersViewComponent_focusElement, { blockIndex: __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f").length - 1 }, "f");
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
    else if (target.matches('.remove-block')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f").splice(blockIndex, 1);
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
}, _HeadersViewComponent_isDeletable = function _HeadersViewComponent_isDeletable(blockIndex, headerIndex) {
    const isOnlyDefaultHeader = headerIndex === 0 && __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers.length === 1 &&
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers[headerIndex].name === getDefaultHeaderName(1) &&
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers[headerIndex].value === DEFAULT_HEADER_VALUE;
    return !isOnlyDefaultHeader;
}, _HeadersViewComponent_removeHeader = function _HeadersViewComponent_removeHeader(blockIndex, headerIndex) {
    __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers.splice(headerIndex, 1);
    if (__classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers.length === 0) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers.push({ name: __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_generateNextHeaderName).call(this, __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers), value: DEFAULT_HEADER_VALUE });
    }
    __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
}, _HeadersViewComponent_onInput = function _HeadersViewComponent_onInput(event) {
    __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onChange).call(this, event.target);
}, _HeadersViewComponent_onChange = function _HeadersViewComponent_onChange(target) {
    const rowElement = target.closest('.row');
    const blockIndex = Number(rowElement.dataset.blockIndex);
    const headerIndex = Number(rowElement.dataset.headerIndex);
    if (target.matches('.header-name')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers[headerIndex].name = target.innerText;
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
    if (target.matches('.header-value')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].headers[headerIndex].value = target.innerText;
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
    if (target.matches('.apply-to')) {
        __classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f")[blockIndex].applyTo = target.innerText;
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onHeadersChanged).call(this);
    }
}, _HeadersViewComponent_onHeadersChanged = function _HeadersViewComponent_onHeadersChanged() {
    __classPrivateFieldGet(this, _HeadersViewComponent_uiSourceCode, "f")?.setWorkingCopy(JSON.stringify(__classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f"), null, 2));
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited);
}, _HeadersViewComponent_onPaste = function _HeadersViewComponent_onPaste(event) {
    const clipboardEvent = event;
    event.preventDefault();
    if (clipboardEvent.clipboardData) {
        const text = clipboardEvent.clipboardData.getData('text/plain');
        const range = __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").getSelection()?.getRangeAt(0);
        if (!range) {
            return;
        }
        range.deleteContents();
        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        __classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_onChange).call(this, event.target);
    }
}, _HeadersViewComponent_render = function _HeadersViewComponent_render() {
    if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('HeadersView render was not scheduled');
    }
    if (__classPrivateFieldGet(this, _HeadersViewComponent_parsingError, "f")) {
        const fileName = __classPrivateFieldGet(this, _HeadersViewComponent_uiSourceCode, "f")?.name() || '.headers';
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <div class="center-wrapper">
          <div class="centered">
            <div class="error-header">${i18nString(UIStrings.errorWhenParsing, { PH1: fileName })}</div>
            <div class="error-body">${i18nString(UIStrings.parsingErrorExplainer, { PH1: fileName })}</div>
          </div>
        </div>
      `, __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f"), { host: this });
        // clang-format on
        return;
    }
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      ${__classPrivateFieldGet(this, _HeadersViewComponent_headerOverrides, "f").map((headerOverride, blockIndex) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
          ${__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_renderApplyToRow).call(this, headerOverride.applyTo, blockIndex)}
          ${headerOverride.headers.map((header, headerIndex) => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
              ${__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_renderHeaderRow).call(this, header, blockIndex, headerIndex)}
            `)}
        `)}
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.OUTLINED}
          .jslogContext=${'headers-view.add-override-rule'}
          class="add-block">
        ${i18nString(UIStrings.addOverrideRule)}
      </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      <div class="learn-more-row">
        <x-link
            href="https://goo.gle/devtools-override"
            class="link"
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.link('learn-more').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
      </div>
    `, __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f"), { host: this });
    // clang-format on
    if (__classPrivateFieldGet(this, _HeadersViewComponent_focusElement, "f")) {
        let focusElement = null;
        if (__classPrivateFieldGet(this, _HeadersViewComponent_focusElement, "f").headerIndex) {
            focusElement = __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").querySelector(`[data-block-index="${__classPrivateFieldGet(this, _HeadersViewComponent_focusElement, "f").blockIndex}"][data-header-index="${__classPrivateFieldGet(this, _HeadersViewComponent_focusElement, "f").headerIndex}"] .header-name`);
        }
        else {
            focusElement = __classPrivateFieldGet(this, _HeadersViewComponent_shadow, "f").querySelector(`[data-block-index="${__classPrivateFieldGet(this, _HeadersViewComponent_focusElement, "f").blockIndex}"] .apply-to`);
        }
        if (focusElement) {
            focusElement.focus();
        }
        __classPrivateFieldSet(this, _HeadersViewComponent_focusElement, null, "f");
    }
}, _HeadersViewComponent_renderApplyToRow = function _HeadersViewComponent_renderApplyToRow(pattern, blockIndex) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="row" data-block-index=${blockIndex}
           jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.treeItem(pattern === '*' ? pattern : undefined)}>
        <div>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Apply to')}</div>
        <div class="separator">:</div>
        ${__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_renderEditable).call(this, pattern, 'apply-to')}
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
        title=${i18nString(UIStrings.removeBlock)}
        .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL}
        .iconUrl=${trashIconUrl}
        .iconWidth=${'14px'}
        .iconHeight=${'14px'}
        .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON}
        .jslogContext=${'headers-view.remove-apply-to-section'}
        class="remove-block inline-button"
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      </div>
    `;
    // clang-format on
}, _HeadersViewComponent_renderHeaderRow = function _HeadersViewComponent_renderHeaderRow(header, blockIndex, headerIndex) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="row padded" data-block-index=${blockIndex} data-header-index=${headerIndex}
           jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.treeItem(header.name).parent('headers-editor-row-parent')}>
        ${__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_renderEditable).call(this, header.name, 'header-name red', true)}
        <div class="separator">:</div>
        ${__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_renderEditable).call(this, header.value, 'header-value')}
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          title=${i18nString(UIStrings.addHeader)}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL}
          .iconUrl=${plusIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON}
          .jslogContext=${'headers-view.add-header'}
          class="add-header inline-button"
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          title=${i18nString(UIStrings.removeHeader)}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL}
          .iconUrl=${trashIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON}
          ?hidden=${!__classPrivateFieldGet(this, _HeadersViewComponent_instances, "m", _HeadersViewComponent_isDeletable).call(this, blockIndex, headerIndex)}
          .jslogContext=${'headers-view.remove-header'}
          class="remove-header inline-button"
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      </div>
    `;
    // clang-format on
}, _HeadersViewComponent_renderEditable = function _HeadersViewComponent_renderEditable(value, className, isKey) {
    // This uses LitHtml's `live`-directive, so that when checking whether to
    // update during re-render, `value` is compared against the actual live DOM
    // value of the contenteditable element and not the potentially outdated
    // value from the previous render.
    // clang-format off
    const jslog = isKey ? _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.key() : _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.value();
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `<span jslog=${jslog.track({ change: true, keydown: 'Enter|Escape|Tab', click: true })}
                              contenteditable="true"
                              class="editable ${className}"
                              tabindex="0"
                              .innerText=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.live(value)}></span>`;
    // clang-format on
};
Object.defineProperty(HeadersViewComponent, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-sources-headers-view`
});
_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.registerParentProvider('headers-editor-row-parent', (e) => {
    while (e.previousElementSibling?.classList?.contains('padded')) {
        e = e.previousElementSibling;
    }
    return e.previousElementSibling || undefined;
});
customElements.define('devtools-sources-headers-view', HeadersViewComponent);


/***/ })

}]);