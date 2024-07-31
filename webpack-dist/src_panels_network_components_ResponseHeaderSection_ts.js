"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_ResponseHeaderSection_ts"],{

/***/ "./src/panels/network/components/ResponseHeaderSection.ts":
/*!****************************************************************!*\
  !*** ./src/panels/network/components/ResponseHeaderSection.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EarlyHintsHeaderSection: () => (/* binding */ EarlyHintsHeaderSection),
/* harmony export */   RESPONSE_HEADER_SECTION_DATA_KEY: () => (/* binding */ RESPONSE_HEADER_SECTION_DATA_KEY),
/* harmony export */   ResponseHeaderSection: () => (/* binding */ ResponseHeaderSection)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./src/panels/network/components/HeaderSectionRow.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './ResponseHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _EarlyHintsHeaderSection_instances, _EarlyHintsHeaderSection_request, _EarlyHintsHeaderSection_render, _ResponseHeaderSection_instances, _ResponseHeaderSection_request, _ResponseHeaderSection_headerEditors, _ResponseHeaderSection_uiSourceCode, _ResponseHeaderSection_overrides, _ResponseHeaderSection_isEditingAllowed, _ResponseHeaderSection_resetEditorState, _ResponseHeaderSection_loadOverridesFileInfo, _ResponseHeaderSection_markOverrides, _ResponseHeaderSection_onHeaderEdited, _ResponseHeaderSection_fileNameFromUrl, _ResponseHeaderSection_commitOverrides, _ResponseHeaderSection_removeEntryFromOverrides, _ResponseHeaderSection_onHeaderRemoved, _ResponseHeaderSection_updateOverrides, _ResponseHeaderSection_onAddHeaderClick, _ResponseHeaderSection_render, _ResponseHeaderSection_onEnableHeaderEditingClick;















const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__;
const UIStrings = {
    /**
     *@description Label for a button which allows adding an HTTP header.
     */
    addHeader: 'Add header',
    /**
     *@description Explanation text for which cross-origin policy to set.
     */
    chooseThisOptionIfTheResourceAnd: 'Choose this option if the resource and the document are served from the same site.',
    /**
     *@description Explanation text for which cross-origin policy to set.
     */
    onlyChooseThisOptionIfAn: 'Only choose this option if an arbitrary website including this resource does not impose a security risk.',
    /**
     *@description Message in the Headers View of the Network panel when a cross-origin opener policy blocked loading a sandbox iframe.
     */
    thisDocumentWasBlockedFrom: 'The document was blocked from loading in a popup opened by a sandboxed iframe because this document specified a cross-origin opener policy.',
    /**
     *@description Message in the Headers View of the Network panel when a cross-origin embedder policy header needs to be set.
     */
    toEmbedThisFrameInYourDocument: 'To embed this frame in your document, the response needs to enable the cross-origin embedder policy by specifying the following response header:',
    /**
     *@description Message in the Headers View of the Network panel when a cross-origin resource policy header needs to be set.
     */
    toUseThisResourceFromADifferent: 'To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:',
    /**
     *@description Message in the Headers View of the Network panel when the cross-origin resource policy header is too strict.
     */
    toUseThisResourceFromADifferentOrigin: 'To use this resource from a different origin, the server may relax the cross-origin resource policy response header:',
    /**
     *@description Message in the Headers View of the Network panel when the cross-origin resource policy header is too strict.
     */
    toUseThisResourceFromADifferentSite: 'To use this resource from a different site, the server may relax the cross-origin resource policy response header:',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/components/ResponseHeaderSection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
const plusIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/plus.svg */ "./src/Images/plus.svg?1e51"), __webpack_require__.b).toString();
const RESPONSE_HEADER_SECTION_DATA_KEY = 'ResponseHeaderSection';
class ResponseHeaderSectionBase extends HTMLElement {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.attachShadow({ mode: 'open' })
        });
        Object.defineProperty(this, "headerDetails", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    connectedCallback() {
        this.shadow.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './ResponseHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    setHeaders(headers) {
        headers.sort(function (a, b) {
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.compare(a.name.toLowerCase(), b.name.toLowerCase());
        });
        this.headerDetails = headers.map(header => ({
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString(header.name),
            value: header.value.replace(/\s/g, ' '),
        }));
    }
    highlightHeaders(data) {
        if (data.toReveal?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.Response) {
            this.headerDetails.filter(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, data.toReveal?.header?.toLowerCase()))
                .forEach(header => {
                header.highlight = true;
            });
        }
    }
}
class EarlyHintsHeaderSection extends ResponseHeaderSectionBase {
    constructor() {
        super(...arguments);
        _EarlyHintsHeaderSection_instances.add(this);
        _EarlyHintsHeaderSection_request.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _EarlyHintsHeaderSection_request, data.request, "f");
        this.setHeaders(__classPrivateFieldGet(this, _EarlyHintsHeaderSection_request, "f").earlyHintsHeaders);
        this.highlightHeaders(data);
        __classPrivateFieldGet(this, _EarlyHintsHeaderSection_instances, "m", _EarlyHintsHeaderSection_render).call(this);
    }
}
_EarlyHintsHeaderSection_request = new WeakMap(), _EarlyHintsHeaderSection_instances = new WeakSet(), _EarlyHintsHeaderSection_render = function _EarlyHintsHeaderSection_render() {
    if (!__classPrivateFieldGet(this, _EarlyHintsHeaderSection_request, "f")) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${this.headerDetails.map(header => html `
        <${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.HeaderSectionRow.litTagName} .data=${{
        header: header,
    }}></${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.HeaderSectionRow.litTagName}>
      `)}
    `, this.shadow, { host: this });
    // clang-format on
};
Object.defineProperty(EarlyHintsHeaderSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal `devtools-early-hints-header-section`
});
customElements.define('devtools-early-hints-header-section', EarlyHintsHeaderSection);
class ResponseHeaderSection extends ResponseHeaderSectionBase {
    constructor() {
        super(...arguments);
        _ResponseHeaderSection_instances.add(this);
        _ResponseHeaderSection_request.set(this, void 0);
        _ResponseHeaderSection_headerEditors.set(this, []);
        _ResponseHeaderSection_uiSourceCode.set(this, null);
        _ResponseHeaderSection_overrides.set(this, []);
        _ResponseHeaderSection_isEditingAllowed.set(this, _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Disabled);
    }
    set data(data) {
        __classPrivateFieldSet(this, _ResponseHeaderSection_request, data.request, "f");
        __classPrivateFieldSet(this, _ResponseHeaderSection_isEditingAllowed, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url()) ?
            _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Forbidden :
            _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Disabled, "f");
        // If the request has been locally overridden, its 'sortedResponseHeaders'
        // contains no 'set-cookie' headers, because they have been filtered out by
        // the Chromium backend. DevTools therefore uses previously stored values.
        const headers = __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").sortedResponseHeaders.concat(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").setCookieHeaders);
        this.setHeaders(headers);
        const headersWithIssues = [];
        if (__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").wasBlocked()) {
            const headerWithIssues = BlockedReasonDetails.get(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").blockedReason());
            if (headerWithIssues) {
                if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.hasIssueOfCategory(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f"), _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.Issue.IssueCategory.CrossOriginEmbedderPolicy)) {
                    const followLink = () => {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelOpenedFrom(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.IssueOpener.LearnMoreLinkCOEP);
                        if (__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
                            void _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.reveal(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f"), _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.Issue.IssueCategory.CrossOriginEmbedderPolicy);
                        }
                    };
                    if (headerWithIssues.blockedDetails) {
                        headerWithIssues.blockedDetails.reveal = followLink;
                    }
                }
                headersWithIssues.push(headerWithIssues);
            }
        }
        function mergeHeadersWithIssues(headers, headersWithIssues) {
            let i = 0, j = 0;
            const result = [];
            while (i < headers.length && j < headersWithIssues.length) {
                if (headers[i].name < headersWithIssues[j].name) {
                    result.push({ ...headers[i++], headerNotSet: false });
                }
                else if (headers[i].name > headersWithIssues[j].name) {
                    result.push({ ...headersWithIssues[j++], headerNotSet: true });
                }
                else {
                    result.push({ ...headersWithIssues[j++], ...headers[i++], headerNotSet: false });
                }
            }
            while (i < headers.length) {
                result.push({ ...headers[i++], headerNotSet: false });
            }
            while (j < headersWithIssues.length) {
                result.push({ ...headersWithIssues[j++], headerNotSet: true });
            }
            return result;
        }
        this.headerDetails = mergeHeadersWithIssues(this.headerDetails, headersWithIssues);
        const blockedResponseCookies = __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").blockedResponseCookies();
        const blockedCookieLineToReasons = new Map(blockedResponseCookies?.map(c => [c.cookieLine.replace(/\s/g, ' '), c.blockedReasons]));
        for (const header of this.headerDetails) {
            if (header.name === 'set-cookie' && header.value) {
                const matchingBlockedReasons = blockedCookieLineToReasons.get(header.value);
                if (matchingBlockedReasons) {
                    header.setCookieBlockedReasons = matchingBlockedReasons;
                }
            }
        }
        this.highlightHeaders(data);
        const dataAssociatedWithRequest = __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").getAssociatedData(RESPONSE_HEADER_SECTION_DATA_KEY);
        if (dataAssociatedWithRequest) {
            __classPrivateFieldSet(this, _ResponseHeaderSection_headerEditors, dataAssociatedWithRequest, "f");
        }
        else {
            __classPrivateFieldSet(this, _ResponseHeaderSection_headerEditors, this.headerDetails.map(header => ({
                name: header.name,
                value: header.value,
                originalValue: header.value,
                valueEditable: __classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f"),
            })), "f");
            __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_markOverrides).call(this);
        }
        void __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_loadOverridesFileInfo).call(this);
        __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").setAssociatedData(RESPONSE_HEADER_SECTION_DATA_KEY, __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f"));
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_render).call(this);
    }
}
_ResponseHeaderSection_request = new WeakMap(), _ResponseHeaderSection_headerEditors = new WeakMap(), _ResponseHeaderSection_uiSourceCode = new WeakMap(), _ResponseHeaderSection_overrides = new WeakMap(), _ResponseHeaderSection_isEditingAllowed = new WeakMap(), _ResponseHeaderSection_instances = new WeakSet(), _ResponseHeaderSection_resetEditorState = function _ResponseHeaderSection_resetEditorState() {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ResponseHeaderSection_isEditingAllowed, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url()) ?
        _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Forbidden :
        _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Disabled, "f");
    __classPrivateFieldSet(this, _ResponseHeaderSection_headerEditors, this.headerDetails.map(header => ({
        name: header.name,
        value: header.value,
        originalValue: header.value,
        valueEditable: __classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f"),
    })), "f");
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_markOverrides).call(this);
    __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").setAssociatedData(RESPONSE_HEADER_SECTION_DATA_KEY, __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f"));
}, _ResponseHeaderSection_loadOverridesFileInfo = async function _ResponseHeaderSection_loadOverridesFileInfo() {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ResponseHeaderSection_uiSourceCode, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().getHeadersUISourceCodeFromUrl(__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url()), "f");
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_uiSourceCode, "f")) {
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_resetEditorState).call(this);
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_render).call(this);
        return;
    }
    try {
        const deferredContent = await __classPrivateFieldGet(this, _ResponseHeaderSection_uiSourceCode, "f").requestContent();
        __classPrivateFieldSet(this, _ResponseHeaderSection_overrides, JSON.parse(deferredContent.content || '[]'), "f");
        if (!__classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").every(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.isHeaderOverride)) {
            throw 'Type mismatch after parsing';
        }
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').get() &&
            __classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f") === _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Disabled) {
            __classPrivateFieldSet(this, _ResponseHeaderSection_isEditingAllowed, _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Enabled, "f");
        }
        for (const header of __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")) {
            header.valueEditable = __classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f");
        }
    }
    catch (error) {
        console.error('Failed to parse', __classPrivateFieldGet(this, _ResponseHeaderSection_uiSourceCode, "f")?.url() || 'source code file', 'for locally overriding headers.');
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_resetEditorState).call(this);
    }
    finally {
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_render).call(this);
    }
}, _ResponseHeaderSection_markOverrides = function _ResponseHeaderSection_markOverrides() {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f") || __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").originalResponseHeaders.length === 0) {
        return;
    }
    const originalHeaders = __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").originalResponseHeaders.map(header => ({
        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString(header.name),
        value: header.value.replace(/\s/g, ' '),
    }));
    originalHeaders.sort(function (a, b) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.compare(a.name, b.name);
    });
    // Loop over actual headers and original headers simultaneously and mark each actual header as
    // overridden if there is no identical original header.
    // If there are multiple headers with the same name, concatenate their values first before
    // comparing them.
    let indexActual = 0;
    let indexOriginal = 0;
    while (indexActual < this.headerDetails.length) {
        const currentName = this.headerDetails[indexActual].name;
        let actualValue = this.headerDetails[indexActual].value || '';
        const headerNotSet = this.headerDetails[indexActual].headerNotSet;
        while (indexActual < this.headerDetails.length - 1 && this.headerDetails[indexActual + 1].name === currentName) {
            indexActual++;
            actualValue += `, ${this.headerDetails[indexActual].value}`;
        }
        while (indexOriginal < originalHeaders.length && originalHeaders[indexOriginal].name < currentName) {
            indexOriginal++;
        }
        if (indexOriginal < originalHeaders.length && originalHeaders[indexOriginal].name === currentName) {
            let originalValue = originalHeaders[indexOriginal].value;
            while (indexOriginal < originalHeaders.length - 1 && originalHeaders[indexOriginal + 1].name === currentName) {
                indexOriginal++;
                originalValue += `, ${originalHeaders[indexOriginal].value}`;
            }
            indexOriginal++;
            if (currentName !== 'set-cookie' && !headerNotSet && !(0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(actualValue, originalValue)) {
                __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").filter(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, currentName)).forEach(header => {
                    header.isOverride = true;
                });
            }
        }
        else if (currentName !== 'set-cookie' && !headerNotSet) {
            __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").filter(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, currentName)).forEach(header => {
                header.isOverride = true;
            });
        }
        indexActual++;
    }
    // Special case for 'set-cookie' headers: compare each header individually
    // and don't treat all 'set-cookie' headers as a single unit.
    __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").filter(header => header.name === 'set-cookie').forEach(header => {
        if (__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")?.originalResponseHeaders.find(originalHeader => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString(originalHeader.name) === 'set-cookie' &&
            (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(originalHeader.value, header.value)) === undefined) {
            header.isOverride = true;
        }
    });
}, _ResponseHeaderSection_onHeaderEdited = function _ResponseHeaderSection_onHeaderEdited(event) {
    const target = event.target;
    if (target.dataset.index === undefined) {
        return;
    }
    const index = Number(target.dataset.index);
    if ((0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.isValidHeaderName)(event.headerName)) {
        __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_updateOverrides).call(this, event.headerName, event.headerValue, index);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderEdited);
    }
}, _ResponseHeaderSection_fileNameFromUrl = function _ResponseHeaderSection_fileNameFromUrl(url) {
    const rawPath = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().rawPathFromUrl(url, true);
    const lastIndexOfSlash = rawPath.lastIndexOf('/');
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.substring(rawPath, lastIndexOfSlash + 1);
}, _ResponseHeaderSection_commitOverrides = function _ResponseHeaderSection_commitOverrides() {
    __classPrivateFieldGet(this, _ResponseHeaderSection_uiSourceCode, "f")?.setWorkingCopy(JSON.stringify(__classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f"), null, 2));
    __classPrivateFieldGet(this, _ResponseHeaderSection_uiSourceCode, "f")?.commitWorkingCopy();
}, _ResponseHeaderSection_removeEntryFromOverrides = function _ResponseHeaderSection_removeEntryFromOverrides(rawFileName, headerName, headerValue) {
    for (let blockIndex = __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").length - 1; blockIndex >= 0; blockIndex--) {
        const block = __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f")[blockIndex];
        if (block.applyTo !== rawFileName) {
            continue;
        }
        const foundIndex = block.headers.findIndex(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, headerName) && (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.value, headerValue));
        if (foundIndex < 0) {
            continue;
        }
        block.headers.splice(foundIndex, 1);
        if (block.headers.length === 0) {
            __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").splice(blockIndex, 1);
        }
        return;
    }
}, _ResponseHeaderSection_onHeaderRemoved = function _ResponseHeaderSection_onHeaderRemoved(event) {
    const target = event.target;
    if (target.dataset.index === undefined || !__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    const index = Number(target.dataset.index);
    const rawFileName = __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_fileNameFromUrl).call(this, __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url());
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_removeEntryFromOverrides).call(this, rawFileName, event.headerName, event.headerValue);
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_commitOverrides).call(this);
    __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].isDeleted = true;
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_render).call(this);
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderRemoved);
}, _ResponseHeaderSection_updateOverrides = function _ResponseHeaderSection_updateOverrides(headerName, headerValue, index) {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    // If 'originalResponseHeaders' are not populated (because there was no
    // request interception), fill them with a copy of 'sortedResponseHeaders'.
    // This ensures we have access to the original values when undoing edits.
    if (__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").originalResponseHeaders.length === 0) {
        __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").originalResponseHeaders =
            __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").sortedResponseHeaders.map(headerEntry => ({ ...headerEntry }));
    }
    const previousName = __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].name;
    const previousValue = __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].value;
    __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].name = headerName;
    __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].value = headerValue;
    let headersToUpdate = [];
    if (headerName === 'set-cookie') {
        // Special case for 'set-cookie' headers: each such header is treated
        // separately without looking at other 'set-cookie' headers.
        headersToUpdate.push({ name: headerName, value: headerValue, valueEditable: __classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f") });
    }
    else {
        // If multiple headers have the same name 'foo', we treat them as a unit.
        // If there are overrides for 'foo', all original 'foo' headers are removed
        // and replaced with the override(s) for 'foo'.
        headersToUpdate = __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").filter(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, headerName) &&
            (!(0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.value, header.originalValue) || header.isOverride));
    }
    const rawFileName = __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_fileNameFromUrl).call(this, __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url());
    // If the last override-block matches 'rawFileName', use this last block.
    // Otherwise just append a new block at the end. We are not using earlier
    // blocks, because they could be overruled by later blocks, which contain
    // wildcards in the filenames they apply to.
    let block = null;
    const [lastOverride] = __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").slice(-1);
    if (lastOverride?.applyTo === rawFileName) {
        block = lastOverride;
    }
    else {
        block = {
            applyTo: rawFileName,
            headers: [],
        };
        __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").push(block);
    }
    if (headerName === 'set-cookie') {
        // Special case for 'set-cookie' headers: only remove the one specific
        // header which is currently being modified, keep all other headers
        // (including other 'set-cookie' headers).
        const foundIndex = block.headers.findIndex(header => (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, previousName) && (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.value, previousValue));
        if (foundIndex >= 0) {
            block.headers.splice(foundIndex, 1);
        }
    }
    else {
        // Keep header overrides for all headers with a different name.
        block.headers = block.headers.filter(header => !(0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(header.name, headerName));
    }
    // If a header name has been edited (only possible when adding headers),
    // remove the previous override entry.
    if (!(0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(__classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].name, previousName)) {
        for (let i = 0; i < block.headers.length; ++i) {
            if ((0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(block.headers[i].name, previousName) &&
                (0,_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.compareHeaders)(block.headers[i].value, previousValue)) {
                block.headers.splice(i, 1);
                break;
            }
        }
    }
    // Append freshly edited header overrides.
    for (const header of headersToUpdate) {
        block.headers.push({ name: header.name, value: header.value || '' });
    }
    if (block.headers.length === 0) {
        __classPrivateFieldGet(this, _ResponseHeaderSection_overrides, "f").pop();
    }
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_commitOverrides).call(this);
}, _ResponseHeaderSection_onAddHeaderClick = function _ResponseHeaderSection_onAddHeaderClick() {
    __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").push({
        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('header-name')),
        value: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('header value'),
        isOverride: true,
        nameEditable: true,
        valueEditable: _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Enabled,
    });
    const index = __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").length - 1;
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_updateOverrides).call(this, __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].name, __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f")[index].value || '', index);
    __classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_render).call(this);
    const rows = this.shadow.querySelectorAll('devtools-header-section-row');
    const [lastRow] = Array.from(rows).slice(-1);
    lastRow?.focus();
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderAdded);
}, _ResponseHeaderSection_render = function _ResponseHeaderSection_render() {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    const headerDescriptors = __classPrivateFieldGet(this, _ResponseHeaderSection_headerEditors, "f").map((headerEditor, index) => ({ ...this.headerDetails[index], ...headerEditor, isResponseHeader: true }));
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${headerDescriptors.map((header, index) => html `
        <${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.HeaderSectionRow.litTagName}
            .data=${{ header }}
            @headeredited=${__classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_onHeaderEdited)}
            @headerremoved=${__classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_onHeaderRemoved)}
            @enableheaderediting=${__classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_onEnableHeaderEditingClick)}
            data-index=${index}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item('response-header')}
        ></${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.HeaderSectionRow.litTagName}>
      `)}
      ${__classPrivateFieldGet(this, _ResponseHeaderSection_isEditingAllowed, "f") === _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_13__.EditingAllowedStatus.Enabled ? html `
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
          class="add-header-button"
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Variant.OUTLINED}
          .iconUrl=${plusIconUrl}
          @click=${__classPrivateFieldGet(this, _ResponseHeaderSection_instances, "m", _ResponseHeaderSection_onAddHeaderClick)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.action('add-header').track({ click: true })}>
          ${i18nString(UIStrings.addHeader)}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.nothing}
    `, this.shadow, { host: this });
    // clang-format on
}, _ResponseHeaderSection_onEnableHeaderEditingClick = async function _ResponseHeaderSection_onEnableHeaderEditingClick() {
    if (!__classPrivateFieldGet(this, _ResponseHeaderSection_request, "f")) {
        return;
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideEnableEditingClicked);
    const requestUrl = __classPrivateFieldGet(this, _ResponseHeaderSection_request, "f").url();
    const networkPersistanceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance();
    if (networkPersistanceManager.project()) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
        await networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(requestUrl);
    }
    else { // If folder for local overrides has not been provided yet
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InspectorView.InspectorView.instance().displaySelectOverrideFolderInfobar(async () => {
            await _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_8__.SourcesNavigator.OverridesNavigatorView.instance().setupNewWorkspace();
            await networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(requestUrl);
        });
    }
};
Object.defineProperty(ResponseHeaderSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal `devtools-response-header-section`
});
customElements.define('devtools-response-header-section', ResponseHeaderSection);
const BlockedReasonDetails = new Map([
    [
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.BlockedReason.CoepFrameResourceNeedsCoepHeader,
        {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString('cross-origin-embedder-policy'),
            value: null,
            blockedDetails: {
                explanation: i18nLazyString(UIStrings.toEmbedThisFrameInYourDocument),
                examples: [{ codeSnippet: 'Cross-Origin-Embedder-Policy: require-corp', comment: undefined }],
                link: { url: 'https://web.dev/coop-coep/' },
            },
        },
    ],
    [
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.BlockedReason.CorpNotSameOriginAfterDefaultedToSameOriginByCoep,
        {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString('cross-origin-resource-policy'),
            value: null,
            blockedDetails: {
                explanation: i18nLazyString(UIStrings.toUseThisResourceFromADifferent),
                examples: [
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: same-site',
                        comment: i18nLazyString(UIStrings.chooseThisOptionIfTheResourceAnd),
                    },
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: cross-origin',
                        comment: i18nLazyString(UIStrings.onlyChooseThisOptionIfAn),
                    },
                ],
                link: { url: 'https://web.dev/coop-coep/' },
            },
        },
    ],
    [
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.BlockedReason.CoopSandboxedIframeCannotNavigateToCoopPage,
        {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString('cross-origin-opener-policy'),
            value: null,
            headerValueIncorrect: false,
            blockedDetails: {
                explanation: i18nLazyString(UIStrings.thisDocumentWasBlockedFrom),
                examples: [],
                link: { url: 'https://web.dev/coop-coep/' },
            },
        },
    ],
    [
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.BlockedReason.CorpNotSameSite,
        {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString('cross-origin-resource-policy'),
            value: null,
            headerValueIncorrect: true,
            blockedDetails: {
                explanation: i18nLazyString(UIStrings.toUseThisResourceFromADifferentSite),
                examples: [
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: cross-origin',
                        comment: i18nLazyString(UIStrings.onlyChooseThisOptionIfAn),
                    },
                ],
                link: null,
            },
        },
    ],
    [
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Network.BlockedReason.CorpNotSameOrigin,
        {
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toLowerCaseString('cross-origin-resource-policy'),
            value: null,
            headerValueIncorrect: true,
            blockedDetails: {
                explanation: i18nLazyString(UIStrings.toUseThisResourceFromADifferentOrigin),
                examples: [
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: same-site',
                        comment: i18nLazyString(UIStrings.chooseThisOptionIfTheResourceAnd),
                    },
                    {
                        codeSnippet: 'Cross-Origin-Resource-Policy: cross-origin',
                        comment: i18nLazyString(UIStrings.onlyChooseThisOptionIfAn),
                    },
                ],
                link: null,
            },
        },
    ],
]);


/***/ })

}]);