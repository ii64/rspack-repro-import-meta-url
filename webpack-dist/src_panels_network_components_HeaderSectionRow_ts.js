"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_HeaderSectionRow_ts"],{

/***/ "./src/panels/network/components/EditableSpan.ts":
/*!*******************************************************!*\
  !*** ./src/panels/network/components/EditableSpan.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditableSpan: () => (/* binding */ EditableSpan)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './EditableSpan.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _EditableSpan_instances, _EditableSpan_shadow, _EditableSpan_boundRender, _EditableSpan_value, _EditableSpan_onKeyDown, _EditableSpan_onInput, _EditableSpan_selectAllText, _EditableSpan_render;




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__;
class EditableSpan extends HTMLElement {
    constructor() {
        super(...arguments);
        _EditableSpan_instances.add(this);
        _EditableSpan_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _EditableSpan_boundRender.set(this, __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_render).bind(this));
        _EditableSpan_value.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './EditableSpan.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('focusin', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_selectAllText).bind(this));
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('keydown', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_onKeyDown).bind(this));
        __classPrivateFieldGet(this, _EditableSpan_shadow, "f").addEventListener('input', __classPrivateFieldGet(this, _EditableSpan_instances, "m", _EditableSpan_onInput).bind(this));
    }
    set data(data) {
        __classPrivateFieldSet(this, _EditableSpan_value, data.value, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _EditableSpan_boundRender, "f"));
    }
    get value() {
        return __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('span')?.innerText || '';
    }
    set value(value) {
        __classPrivateFieldSet(this, _EditableSpan_value, value, "f");
        const span = __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('span');
        if (span) {
            span.innerText = value;
        }
    }
    focus() {
        requestAnimationFrame(() => {
            const span = __classPrivateFieldGet(this, _EditableSpan_shadow, "f").querySelector('.editable');
            span?.focus();
        });
    }
}
_EditableSpan_shadow = new WeakMap(), _EditableSpan_boundRender = new WeakMap(), _EditableSpan_value = new WeakMap(), _EditableSpan_instances = new WeakSet(), _EditableSpan_onKeyDown = function _EditableSpan_onKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        event.target?.blur();
    }
}, _EditableSpan_onInput = function _EditableSpan_onInput(event) {
    __classPrivateFieldSet(this, _EditableSpan_value, event.target.innerText, "f");
}, _EditableSpan_selectAllText = function _EditableSpan_selectAllText(event) {
    const target = event.target;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(target);
    selection?.removeAllRanges();
    selection?.addRange(range);
}, _EditableSpan_render = function _EditableSpan_render() {
    if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('HeaderSectionRow render was not scheduled');
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `<span
        contenteditable="plaintext-only"
        class="editable"
        tabindex="0"
        .innerText=${__classPrivateFieldGet(this, _EditableSpan_value, "f")}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.value('header-editor').track({ change: true, keydown: 'Enter|Escape' })}
    </span>`, __classPrivateFieldGet(this, _EditableSpan_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(EditableSpan, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-editable-span`
});
customElements.define('devtools-editable-span', EditableSpan);


/***/ }),

/***/ "./src/panels/network/components/HeaderSectionRow.ts":
/*!***********************************************************!*\
  !*** ./src/panels/network/components/HeaderSectionRow.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditingAllowedStatus: () => (/* binding */ EditingAllowedStatus),
/* harmony export */   EnableHeaderEditingEvent: () => (/* binding */ EnableHeaderEditingEvent),
/* harmony export */   HeaderEditedEvent: () => (/* binding */ HeaderEditedEvent),
/* harmony export */   HeaderRemovedEvent: () => (/* binding */ HeaderRemovedEvent),
/* harmony export */   HeaderSectionRow: () => (/* binding */ HeaderSectionRow),
/* harmony export */   compareHeaders: () => (/* binding */ compareHeaders),
/* harmony export */   isValidHeaderName: () => (/* binding */ isValidHeaderName)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_chromium_client_variations_client_variations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/chromium/client-variations/client-variations.js */ "./src/third_party/chromium/client-variations/client-variations.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditableSpan.js */ "./src/panels/network/components/EditableSpan.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './HeaderSectionRow.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _HeaderSectionRow_instances, _HeaderSectionRow_shadow, _HeaderSectionRow_header, _HeaderSectionRow_boundRender, _HeaderSectionRow_isHeaderValueEdited, _HeaderSectionRow_isValidHeaderName, _HeaderSectionRow_render, _HeaderSectionRow_renderHeaderValue, _HeaderSectionRow_renderXClientDataHeader, _HeaderSectionRow_maybeRenderHeaderValueSuffix, _HeaderSectionRow_maybeRenderBlockedDetails, _HeaderSectionRow_maybeRenderBlockedDetailsLink, _HeaderSectionRow_onHeaderValueFocusOut, _HeaderSectionRow_onHeaderNameFocusOut, _HeaderSectionRow_onRemoveOverrideClick, _HeaderSectionRow_onKeyDown, _HeaderSectionRow_onHeaderNameEdit, _HeaderSectionRow_onHeaderValueEdit, _HeaderSectionRow_onHeaderNamePaste;












const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__;
const UIStrings = {
    /**
     *@description Comment used in decoded X-Client-Data HTTP header output in Headers View of the Network panel
     */
    activeClientExperimentVariation: 'Active `client experiment variation IDs`.',
    /**
     *@description Comment used in decoded X-Client-Data HTTP header output in Headers View of the Network panel
     */
    activeClientExperimentVariationIds: 'Active `client experiment variation IDs` that trigger server-side behavior.',
    /**
     *@description Text in Headers View of the Network panel for X-Client-Data HTTP headers
     */
    decoded: 'Decoded:',
    /**
     *@description The title of a button to enable overriding a HTTP header.
     */
    editHeader: 'Override header',
    /**
     *@description Description of which letters the name of an HTTP header may contain (a-z, A-Z, 0-9, '-', or '_').
     */
    headerNamesOnlyLetters: 'Header names should contain only letters, digits, hyphens or underscores',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Text for a link to the issues panel
     */
    learnMoreInTheIssuesTab: 'Learn more in the issues tab',
    /**
     *@description Hover text prompting the user to reload the whole page or refresh the particular request, so that the changes they made take effect.
     */
    reloadPrompt: 'Refresh the page/request for these changes to take effect',
    /**
     *@description The title of a button which removes a HTTP header override.
     */
    removeOverride: 'Remove this header override',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/components/HeaderSectionRow.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const trashIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/bin.svg */ "./src/Images/bin.svg?27ff"), __webpack_require__.b).toString();
const editIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/edit.svg */ "./src/Images/edit.svg?a46b"), __webpack_require__.b).toString();
const isValidHeaderName = (headerName) => {
    return /^[a-z0-9_\-]+$/i.test(headerName);
};
const compareHeaders = (first, second) => {
    // Replaces all whitespace characters with regular spaces.
    // When working with contenteditables, their content can contain (non-obvious)
    // non-breaking spaces (NBSPs). It would be tricky to get rid of NBSPs during
    // editing and saving, so we just handle them after reading them in.
    // Tab characters are invalid in headers (and DevTools shows a warning for
    // them), the replacement here ensures that headers containing tabs are not
    // incorrectly marked as being overridden.
    return first?.replaceAll(/\s/g, ' ') === second?.replaceAll(/\s/g, ' ');
};
class HeaderEditedEvent extends Event {
    constructor(headerName, headerValue) {
        super(HeaderEditedEvent.eventName, {});
        Object.defineProperty(this, "headerName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headerValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.headerName = headerName;
        this.headerValue = headerValue;
    }
}
Object.defineProperty(HeaderEditedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'headeredited'
});
class HeaderRemovedEvent extends Event {
    constructor(headerName, headerValue) {
        super(HeaderRemovedEvent.eventName, {});
        Object.defineProperty(this, "headerName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headerValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.headerName = headerName;
        this.headerValue = headerValue;
    }
}
Object.defineProperty(HeaderRemovedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'headerremoved'
});
class EnableHeaderEditingEvent extends Event {
    constructor() {
        super(EnableHeaderEditingEvent.eventName, {});
    }
}
Object.defineProperty(EnableHeaderEditingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'enableheaderediting'
});
class HeaderSectionRow extends HTMLElement {
    constructor() {
        super(...arguments);
        _HeaderSectionRow_instances.add(this);
        _HeaderSectionRow_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _HeaderSectionRow_header.set(this, null);
        _HeaderSectionRow_boundRender.set(this, __classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_render).bind(this));
        _HeaderSectionRow_isHeaderValueEdited.set(this, false);
        _HeaderSectionRow_isValidHeaderName.set(this, true);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './HeaderSectionRow.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _HeaderSectionRow_header, data.header, "f");
        __classPrivateFieldSet(this, _HeaderSectionRow_isHeaderValueEdited, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalValue !== undefined && __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value !== __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalValue, "f");
        __classPrivateFieldSet(this, _HeaderSectionRow_isValidHeaderName, isValidHeaderName(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name), "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeaderSectionRow_boundRender, "f"));
    }
    focus() {
        requestAnimationFrame(() => {
            const editableName = __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f").querySelector('.header-name devtools-editable-span');
            editableName?.focus();
        });
    }
}
_HeaderSectionRow_shadow = new WeakMap(), _HeaderSectionRow_header = new WeakMap(), _HeaderSectionRow_boundRender = new WeakMap(), _HeaderSectionRow_isHeaderValueEdited = new WeakMap(), _HeaderSectionRow_isValidHeaderName = new WeakMap(), _HeaderSectionRow_instances = new WeakSet(), _HeaderSectionRow_render = function _HeaderSectionRow_render() {
    if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('HeaderSectionRow render was not scheduled');
    }
    if (!__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        return;
    }
    const rowClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.classMap({
        row: true,
        'header-highlight': Boolean(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").highlight),
        'header-overridden': Boolean(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isOverride) || __classPrivateFieldGet(this, _HeaderSectionRow_isHeaderValueEdited, "f"),
        'header-editable': __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").valueEditable === EditingAllowedStatus.Enabled,
        'header-deleted': Boolean(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isDeleted),
    });
    const headerNameClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.classMap({
        'header-name': true,
        'pseudo-header': __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name.startsWith(':'),
    });
    const headerValueClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.classMap({
        'header-value': true,
        'header-warning': Boolean(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").headerValueIncorrect),
        'flex-columns': __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name === 'x-client-data' && !__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isResponseHeader,
    });
    // The header name is only editable when the header value is editable as well.
    // This ensures the header name's editability reacts correctly to enabling or
    // disabling local overrides.
    const isHeaderNameEditable = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").nameEditable && __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").valueEditable === EditingAllowedStatus.Enabled;
    // Case 1: Headers which were just now added via the 'Add header button'.
    //         'nameEditable' is true only for such headers.
    // Case 2: Headers for which the user clicked the 'remove' button.
    // Case 3: Headers for which there is a mismatch between original header
    //         value and current header value.
    const showReloadInfoIcon = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").nameEditable || __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isDeleted || __classPrivateFieldGet(this, _HeaderSectionRow_isHeaderValueEdited, "f");
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class=${rowClasses}>
        <div class=${headerNameClasses}>
          ${__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").headerNotSet ?
        html `<div class="header-badge header-badge-text">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('not-set')}</div> ` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
          ${isHeaderNameEditable && !__classPrivateFieldGet(this, _HeaderSectionRow_isValidHeaderName, "f") ?
        html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon disallowed-characters" title=${UIStrings.headerNamesOnlyLetters} .data=${{
            iconName: 'cross-circle-filled',
            width: '16px',
            height: '16px',
            color: 'var(--icon-error)',
        }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
          ${isHeaderNameEditable && !__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isDeleted ?
        html `<${_EditableSpan_js__WEBPACK_IMPORTED_MODULE_10__.EditableSpan.litTagName}
              @focusout=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderNameFocusOut)}
              @keydown=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onKeyDown)}
              @input=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderNameEdit)}
              @paste=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderNamePaste)}
              .data=${{ value: __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name }}
            ></${_EditableSpan_js__WEBPACK_IMPORTED_MODULE_10__.EditableSpan.litTagName}>` :
        __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name}:
        </div>
        <div
          class=${headerValueClasses}
          @copy=${() => _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.NetworkPanelCopyValue)}
        >
          ${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_renderHeaderValue).call(this)}
        </div>
        ${showReloadInfoIcon ?
        html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="row-flex-icon flex-right" title=${UIStrings.reloadPrompt} .data=${{
            iconName: 'info',
            width: '16px',
            height: '16px',
            color: 'var(--icon-default)',
        }}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
      </div>
      ${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_maybeRenderBlockedDetails).call(this, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").blockedDetails)}
    `, __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f"), { host: this });
    // clang-format on
    if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").highlight) {
        this.scrollIntoView({ behavior: 'auto' });
    }
}, _HeaderSectionRow_renderHeaderValue = function _HeaderSectionRow_renderHeaderValue() {
    if (!__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name === 'x-client-data' && !__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isResponseHeader) {
        return __classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_renderXClientDataHeader).call(this, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f"));
    }
    if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isDeleted || __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").valueEditable !== EditingAllowedStatus.Enabled) {
        const showEditHeaderButton = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isResponseHeader && !__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").isDeleted &&
            __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").valueEditable !== EditingAllowedStatus.Forbidden;
        // clang-format off
        return html `
      ${__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value || ''}
      ${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_maybeRenderHeaderValueSuffix).call(this, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f"))}
      ${showEditHeaderButton ? html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
          title=${i18nString(UIStrings.editHeader)}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL}
          .iconUrl=${editIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON}
          @click=${() => {
            this.dispatchEvent(new EnableHeaderEditingEvent());
        }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('enable-header-overrides').track({ click: true })}
          class="enable-editing inline-button"
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing}
    `;
    }
    return html `
      <${_EditableSpan_js__WEBPACK_IMPORTED_MODULE_10__.EditableSpan.litTagName}
        @focusout=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderValueFocusOut)}
        @input=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderValueEdit)}
        @paste=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderValueEdit)}
        @keydown=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onKeyDown)}
        .data=${{ value: __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value || '' }}
      ></${_EditableSpan_js__WEBPACK_IMPORTED_MODULE_10__.EditableSpan.litTagName}>
      ${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_maybeRenderHeaderValueSuffix).call(this, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f"))}
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}
        title=${i18nString(UIStrings.removeOverride)}
        .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Size.SMALL}
        .iconUrl=${trashIconUrl}
        .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Variant.ICON}
        class="remove-header inline-button"
        @click=${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onRemoveOverrideClick)}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('remove-header-override').track({ click: true })}
      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName}>
    `;
    // clang-format on
}, _HeaderSectionRow_renderXClientDataHeader = function _HeaderSectionRow_renderXClientDataHeader(header) {
    const data = _third_party_chromium_client_variations_client_variations_js__WEBPACK_IMPORTED_MODULE_4__.parseClientVariations(header.value || '');
    const output = _third_party_chromium_client_variations_client_variations_js__WEBPACK_IMPORTED_MODULE_4__.formatClientVariations(data, i18nString(UIStrings.activeClientExperimentVariation), i18nString(UIStrings.activeClientExperimentVariationIds));
    // clang-format off
    return html `
      <div>${header.value || ''}</div>
      <div>${i18nString(UIStrings.decoded)}</div>
      <code>${output}</code>
    `;
    // clang-format on
}, _HeaderSectionRow_maybeRenderHeaderValueSuffix = function _HeaderSectionRow_maybeRenderHeaderValueSuffix(header) {
    if (header.name === 'set-cookie' && header.setCookieBlockedReasons) {
        const titleText = header.setCookieBlockedReasons.map(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.setCookieBlockedReasonToUiString).join('\n');
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="row-flex-icon" title=${titleText} .data=${{
            iconName: 'warning-filled',
            color: 'var(--icon-warning)',
            width: '16px',
            height: '16px',
        }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
      `;
        // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
}, _HeaderSectionRow_maybeRenderBlockedDetails = function _HeaderSectionRow_maybeRenderBlockedDetails(blockedDetails) {
    if (!blockedDetails) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation">${blockedDetails.explanation()}</div>
          ${blockedDetails.examples.map(example => html `
            <div class="example">
              <code>${example.codeSnippet}</code>
              ${example.comment ? html `
                <span class="comment">${example.comment()}</span>
              ` : ''}
            </div>
          `)}
          ${__classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_maybeRenderBlockedDetailsLink).call(this, blockedDetails)}
        </div>
      </div>
    `;
    // clang-format on
}, _HeaderSectionRow_maybeRenderBlockedDetailsLink = function _HeaderSectionRow_maybeRenderBlockedDetailsLink(blockedDetails) {
    if (blockedDetails?.reveal) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
        <div class="devtools-link" @click=${blockedDetails.reveal}>
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
            iconName: 'issue-exclamation-filled',
            color: 'var(--icon-warning)',
            width: '16px',
            height: '16px',
        }}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}
          >${i18nString(UIStrings.learnMoreInTheIssuesTab)}
        </div>
      `;
        // clang-format on
    }
    if (blockedDetails?.link) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
        <x-link href=${blockedDetails.link.url} class="link">
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
            iconName: 'open-externally',
            color: 'var(--icon-link)',
            width: '20px',
            height: '20px',
        }}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}
          >${i18nString(UIStrings.learnMore)}
        </x-link>
      `;
        // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
}, _HeaderSectionRow_onHeaderValueFocusOut = function _HeaderSectionRow_onHeaderValueFocusOut(event) {
    const target = event.target;
    if (!__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        return;
    }
    const headerValue = target.value.trim();
    if (!compareHeaders(headerValue, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value?.trim())) {
        __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value = headerValue;
        this.dispatchEvent(new HeaderEditedEvent(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name, headerValue));
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeaderSectionRow_boundRender, "f"));
    }
    // Clear selection (needed when pressing 'enter' in editable span).
    const selection = window.getSelection();
    selection?.removeAllRanges();
    // Reset pasted header name
    __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalName = '';
}, _HeaderSectionRow_onHeaderNameFocusOut = function _HeaderSectionRow_onHeaderNameFocusOut(event) {
    const target = event.target;
    if (!__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        return;
    }
    const headerName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toLowerCaseString(target.value.trim());
    // If the header name has been edited to '', reset it to its previous value.
    if (headerName === '') {
        target.value = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name;
    }
    else if (!compareHeaders(headerName, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name.trim())) {
        __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name = headerName;
        this.dispatchEvent(new HeaderEditedEvent(headerName, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value || ''));
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeaderSectionRow_boundRender, "f"));
    }
    // Clear selection (needed when pressing 'enter' in editable span).
    const selection = window.getSelection();
    selection?.removeAllRanges();
}, _HeaderSectionRow_onRemoveOverrideClick = function _HeaderSectionRow_onRemoveOverrideClick() {
    if (!__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        return;
    }
    const headerValueElement = __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f").querySelector('.header-value devtools-editable-span');
    if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalValue) {
        headerValueElement.value = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.originalValue;
    }
    this.dispatchEvent(new HeaderRemovedEvent(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name, __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").value || ''));
}, _HeaderSectionRow_onKeyDown = function _HeaderSectionRow_onKeyDown(event) {
    const keyboardEvent = event;
    const target = event.target;
    if (keyboardEvent.key === 'Escape') {
        event.consume();
        if (target.matches('.header-name devtools-editable-span')) {
            target.value = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.name || '';
            __classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderNameEdit).call(this, event);
        }
        else if (target.matches('.header-value devtools-editable-span')) {
            target.value = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.value || '';
            __classPrivateFieldGet(this, _HeaderSectionRow_instances, "m", _HeaderSectionRow_onHeaderValueEdit).call(this, event);
            if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.originalName) {
                const headerNameElement = __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f").querySelector('.header-name devtools-editable-span');
                headerNameElement.value = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalName;
                __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalName = '';
                headerNameElement.dispatchEvent(new Event('input'));
                headerNameElement.focus();
                return;
            }
        }
        target.blur();
    }
}, _HeaderSectionRow_onHeaderNameEdit = function _HeaderSectionRow_onHeaderNameEdit(event) {
    const editable = event.target;
    const isValidName = isValidHeaderName(editable.value);
    if (__classPrivateFieldGet(this, _HeaderSectionRow_isValidHeaderName, "f") !== isValidName) {
        __classPrivateFieldSet(this, _HeaderSectionRow_isValidHeaderName, isValidName, "f");
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeaderSectionRow_boundRender, "f"));
    }
}, _HeaderSectionRow_onHeaderValueEdit = function _HeaderSectionRow_onHeaderValueEdit(event) {
    const editable = event.target;
    const isEdited = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.originalValue !== undefined && !compareHeaders(__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")?.originalValue || '', editable.value);
    if (__classPrivateFieldGet(this, _HeaderSectionRow_isHeaderValueEdited, "f") !== isEdited) {
        __classPrivateFieldSet(this, _HeaderSectionRow_isHeaderValueEdited, isEdited, "f");
        if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
            __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").highlight = false;
        }
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _HeaderSectionRow_boundRender, "f"));
    }
}, _HeaderSectionRow_onHeaderNamePaste = function _HeaderSectionRow_onHeaderNamePaste(event) {
    if (!event.clipboardData) {
        return;
    }
    const nameEl = event.target;
    const clipboardText = event.clipboardData.getData('text/plain') || '';
    const separatorPosition = clipboardText.indexOf(':');
    if (separatorPosition < 1) {
        // Not processing further either case 'abc' or ':abc'
        nameEl.value = clipboardText;
        event.preventDefault();
        nameEl.dispatchEvent(new Event('input', { bubbles: true }));
        return;
    }
    if (__classPrivateFieldGet(this, _HeaderSectionRow_header, "f")) {
        __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").originalName = __classPrivateFieldGet(this, _HeaderSectionRow_header, "f").name;
    }
    const headerValue = clipboardText.substring(separatorPosition + 1, clipboardText.length).trim();
    const headerName = clipboardText.substring(0, separatorPosition);
    nameEl.value = headerName;
    nameEl.dispatchEvent(new Event('input'));
    const valueEL = __classPrivateFieldGet(this, _HeaderSectionRow_shadow, "f").querySelector('.header-value devtools-editable-span');
    if (valueEL) {
        valueEL.focus();
        valueEL.value = headerValue;
        valueEL.dispatchEvent(new Event('input'));
    }
    event.preventDefault();
};
Object.defineProperty(HeaderSectionRow, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-header-section-row`
});
customElements.define('devtools-header-section-row', HeaderSectionRow);
var EditingAllowedStatus;
(function (EditingAllowedStatus) {
    EditingAllowedStatus[EditingAllowedStatus["Disabled"] = 0] = "Disabled";
    EditingAllowedStatus[EditingAllowedStatus["Enabled"] = 1] = "Enabled";
    EditingAllowedStatus[EditingAllowedStatus["Forbidden"] = 2] = "Forbidden";
})(EditingAllowedStatus || (EditingAllowedStatus = {}));


/***/ }),

/***/ "./src/third_party/chromium/client-variations/client-variations.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/chromium/client-variations/client-variations.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatClientVariations: () => (/* reexport safe */ _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__.formatClientVariations),
/* harmony export */   parseClientVariations: () => (/* reexport safe */ _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__.parseClientVariations)
/* harmony export */ });
/* harmony import */ var _ClientVariations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientVariations.js */ "./src/third_party/chromium/client-variations/ClientVariations.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);