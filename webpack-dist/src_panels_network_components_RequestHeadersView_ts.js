"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_RequestHeadersView_ts"],{

/***/ "./src/panels/network/components/RequestHeaderSection.ts":
/*!***************************************************************!*\
  !*** ./src/panels/network/components/RequestHeaderSection.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHeaderSection: () => (/* binding */ RequestHeaderSection)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./src/panels/network/components/HeaderSectionRow.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _RequestHeaderSection_instances, _RequestHeaderSection_shadow, _RequestHeaderSection_request, _RequestHeaderSection_headers, _RequestHeaderSection_render, _RequestHeaderSection_maybeRenderProvisionalHeadersWarning;








const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const UIStrings = {
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Message to explain lack of raw headers for a particular network request
     */
    provisionalHeadersAreShownDisableCache: 'Provisional headers are shown. Disable cache to see full headers.',
    /**
     *@description Tooltip to explain lack of raw headers for a particular network request
     */
    onlyProvisionalHeadersAre: 'Only provisional headers are available because this request was not sent over the network and instead was served from a local cache, which doesn’t store the original request headers. Disable cache to see full request headers.',
    /**
     *@description Message to explain lack of raw headers for a particular network request
     */
    provisionalHeadersAreShown: 'Provisional headers are shown.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/components/RequestHeaderSection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestHeaderSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _RequestHeaderSection_instances.add(this);
        _RequestHeaderSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RequestHeaderSection_request.set(this, void 0);
        _RequestHeaderSection_headers.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RequestHeaderSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeaderSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _RequestHeaderSection_request, data.request, "f");
        __classPrivateFieldSet(this, _RequestHeaderSection_headers, __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").requestHeaders().map(header => ({
            name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString(header.name),
            value: header.value,
            valueEditable: _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.EditingAllowedStatus.Forbidden,
        })), "f");
        __classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").sort((a, b) => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.compare(a.name, b.name));
        if (data.toReveal?.section === _forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Request) {
            __classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").filter(header => header.name === data.toReveal?.header?.toLowerCase()).forEach(header => {
                header.highlight = true;
            });
        }
        __classPrivateFieldGet(this, _RequestHeaderSection_instances, "m", _RequestHeaderSection_render).call(this);
    }
}
_RequestHeaderSection_shadow = new WeakMap(), _RequestHeaderSection_request = new WeakMap(), _RequestHeaderSection_headers = new WeakMap(), _RequestHeaderSection_instances = new WeakSet(), _RequestHeaderSection_render = function _RequestHeaderSection_render() {
    if (!__classPrivateFieldGet(this, _RequestHeaderSection_request, "f")) {
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${__classPrivateFieldGet(this, _RequestHeaderSection_instances, "m", _RequestHeaderSection_maybeRenderProvisionalHeadersWarning).call(this)}
      ${__classPrivateFieldGet(this, _RequestHeaderSection_headers, "f").map(header => html `
        <${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.HeaderSectionRow.litTagName}
          .data=${{ header: header }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item('request-header')}
        ></${_HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_6__.HeaderSectionRow.litTagName}>
      `)}
    `, __classPrivateFieldGet(this, _RequestHeaderSection_shadow, "f"), { host: this });
    // clang-format on
}, _RequestHeaderSection_maybeRenderProvisionalHeadersWarning = function _RequestHeaderSection_maybeRenderProvisionalHeadersWarning() {
    if (!__classPrivateFieldGet(this, _RequestHeaderSection_request, "f") || __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").requestHeadersText() !== undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    let cautionText;
    let cautionTitle = '';
    if (__classPrivateFieldGet(this, _RequestHeaderSection_request, "f").cachedInMemory() || __classPrivateFieldGet(this, _RequestHeaderSection_request, "f").cached()) {
        cautionText = i18nString(UIStrings.provisionalHeadersAreShownDisableCache);
        cautionTitle = i18nString(UIStrings.onlyProvisionalHeadersAre);
    }
    else {
        cautionText = i18nString(UIStrings.provisionalHeadersAreShown);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class="call-to-action">
        <div class="call-to-action-body">
          <div class="explanation" title=${cautionTitle}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} class="inline-icon" .data=${{
        iconName: 'warning-filled',
        color: 'var(--icon-warning)',
        width: '16px',
        height: '16px',
    }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
            ${cautionText} <x-link href="https://developer.chrome.com/docs/devtools/network/reference/#provisional-headers" class="link">${i18nString(UIStrings.learnMore)}</x-link>
          </div>
        </div>
      </div>
    `;
    // clang-format on
};
Object.defineProperty(RequestHeaderSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-request-header-section`
});
customElements.define('devtools-request-header-section', RequestHeaderSection);


/***/ }),

/***/ "./src/panels/network/components/RequestHeadersView.ts":
/*!*************************************************************!*\
  !*** ./src/panels/network/components/RequestHeadersView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   RequestHeadersView: () => (/* binding */ RequestHeadersView),
/* harmony export */   ToggleRawHeadersEvent: () => (/* binding */ ToggleRawHeadersEvent)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _sources_sources_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./src/panels/network/components/RequestHeaderSection.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./src/panels/network/components/ResponseHeaderSection.ts");
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
var _RequestHeadersView_instances, _RequestHeadersView_request, _RequestHeadersView_shadow, _RequestHeadersView_showResponseHeadersText, _RequestHeadersView_showRequestHeadersText, _RequestHeadersView_showResponseHeadersTextFull, _RequestHeadersView_showRequestHeadersTextFull, _RequestHeadersView_toReveal, _RequestHeadersView_workspace, _RequestHeadersView_resetAndRefreshHeadersView, _RequestHeadersView_refreshHeadersView, _RequestHeadersView_uiSourceCodeAddedOrRemoved, _RequestHeadersView_renderEarlyHintsHeaders, _RequestHeadersView_renderResponseHeaders, _RequestHeadersView_renderHeaderOverridesLink, _RequestHeadersView_getHeaderOverridesFileUrl, _RequestHeadersView_renderRequestHeaders, _RequestHeadersView_renderRawHeaders, _RequestHeadersView_renderGeneralSection, _RequestHeadersView_renderGeneralRow, _Category_instances, _Category_shadow, _Category_expandedSetting, _Category_title, _Category_headerCount, _Category_checked, _Category_additionalContent, _Category_forceOpen, _Category_loggingContext, _Category_onCheckboxToggle, _Category_render, _Category_onSummaryKeyDown, _Category_onToggle;





















const RAW_HEADER_CUTOFF = 3000;
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__;
const UIStrings = {
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromDiskCache: '(from disk cache)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromMemoryCache: '(from memory cache)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromEarlyHints: '(from early hints)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromPrefetchCache: '(from prefetch cache)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromServiceWorker: '(from `service worker`)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromSignedexchange: '(from signed-exchange)',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    fromWebBundle: '(from Web Bundle)',
    /**
     *@description Section header for a list of the main aspects of a http request
     */
    general: 'General',
    /**
     *@description Label for a checkbox to switch between raw and parsed headers
     */
    raw: 'Raw',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    referrerPolicy: 'Referrer Policy',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */
    remoteAddress: 'Remote Address',
    /**
     *@description Text in Request Headers View of the Network panel
     */
    requestHeaders: 'Request Headers',
    /**
     *@description The HTTP method of a request
     */
    requestMethod: 'Request Method',
    /**
     *@description The URL of a request
     */
    requestUrl: 'Request URL',
    /**
     *@description A context menu item in the Network Log View Columns of the Network panel
     */
    responseHeaders: 'Response Headers',
    /**
     *@description A context menu item in the Network Log View Columns of the Network panel
     */
    earlyHintsHeaders: 'Early Hints Headers',
    /**
     *@description Title text for a link to the Sources panel to the file containing the header override definitions
     */
    revealHeaderOverrides: 'Reveal header override definitions',
    /**
     *@description Text to show more content
     */
    showMore: 'Show more',
    /**
     *@description HTTP response code
     */
    statusCode: 'Status Code',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/components/RequestHeadersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__.RenderCoordinator.RenderCoordinator.instance();
class RequestHeadersView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_12__.LegacyWrapper.WrappableComponent {
    constructor(request) {
        super();
        _RequestHeadersView_instances.add(this);
        _RequestHeadersView_request.set(this, void 0);
        _RequestHeadersView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RequestHeadersView_showResponseHeadersText.set(this, false);
        _RequestHeadersView_showRequestHeadersText.set(this, false);
        _RequestHeadersView_showResponseHeadersTextFull.set(this, false);
        _RequestHeadersView_showRequestHeadersTextFull.set(this, false);
        _RequestHeadersView_toReveal.set(this, undefined);
        _RequestHeadersView_workspace.set(this, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance());
        __classPrivateFieldSet(this, _RequestHeadersView_request, request, "f");
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.pane('headers').track({ resize: true })}`);
    }
    wasShown() {
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.RemoteAddressChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.FinishedLoading, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.RequestHeadersChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.ResponseHeadersChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_resetAndRefreshHeadersView), this);
        __classPrivateFieldSet(this, _RequestHeadersView_toReveal, undefined, "f");
        __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView).call(this);
    }
    willHide() {
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.RemoteAddressChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.FinishedLoading, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.RequestHeadersChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_refreshHeadersView), this);
        __classPrivateFieldGet(this, _RequestHeadersView_request, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.ResponseHeadersChanged, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_resetAndRefreshHeadersView), this);
    }
    revealHeader(section, header) {
        __classPrivateFieldSet(this, _RequestHeadersView_toReveal, { section, header }, "f");
        void this.render();
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RequestHeadersView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeAdded, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_uiSourceCodeAddedOrRemoved), this);
        __classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeRemoved, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_uiSourceCodeAddedOrRemoved), this);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('persistence-network-overrides-enabled')
            .addChangeListener(this.render, this);
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeAdded, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_uiSourceCodeAddedOrRemoved), this);
        __classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeRemoved, __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_uiSourceCodeAddedOrRemoved), this);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance()
            .moduleSetting('persistence-network-overrides-enabled')
            .removeChangeListener(this.render, this);
    }
    async render() {
        if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f")) {
            return;
        }
        return coordinator.write(() => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            render(html `
        ${__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralSection).call(this)}
        ${__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderEarlyHintsHeaders).call(this)}
        ${__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderResponseHeaders).call(this)}
        ${__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderRequestHeaders).call(this)}
      `, __classPrivateFieldGet(this, _RequestHeadersView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
}
_RequestHeadersView_request = new WeakMap(), _RequestHeadersView_shadow = new WeakMap(), _RequestHeadersView_showResponseHeadersText = new WeakMap(), _RequestHeadersView_showRequestHeadersText = new WeakMap(), _RequestHeadersView_showResponseHeadersTextFull = new WeakMap(), _RequestHeadersView_showRequestHeadersTextFull = new WeakMap(), _RequestHeadersView_toReveal = new WeakMap(), _RequestHeadersView_workspace = new WeakMap(), _RequestHeadersView_instances = new WeakSet(), _RequestHeadersView_resetAndRefreshHeadersView = function _RequestHeadersView_resetAndRefreshHeadersView() {
    __classPrivateFieldGet(this, _RequestHeadersView_request, "f").deleteAssociatedData(_ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__.RESPONSE_HEADER_SECTION_DATA_KEY);
    void this.render();
}, _RequestHeadersView_refreshHeadersView = function _RequestHeadersView_refreshHeadersView() {
    void this.render();
}, _RequestHeadersView_uiSourceCodeAddedOrRemoved = function _RequestHeadersView_uiSourceCodeAddedOrRemoved(event) {
    if (__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_getHeaderOverridesFileUrl).call(this) === event.data.url()) {
        void this.render();
    }
}, _RequestHeadersView_renderEarlyHintsHeaders = function _RequestHeadersView_renderEarlyHintsHeaders() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f") || !__classPrivateFieldGet(this, _RequestHeadersView_request, "f").earlyHintsHeaders || __classPrivateFieldGet(this, _RequestHeadersView_request, "f").earlyHintsHeaders.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    const toggleShowRaw = () => {
        __classPrivateFieldSet(this, _RequestHeadersView_showResponseHeadersText, !__classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersText, "f"), "f");
        void this.render();
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <${Category.litTagName}
        @togglerawevent=${toggleShowRaw}
        .data=${{
        name: 'early-hints-headers',
        title: i18nString(UIStrings.earlyHintsHeaders),
        headerCount: __classPrivateFieldGet(this, _RequestHeadersView_request, "f").earlyHintsHeaders.length,
        checked: undefined,
        additionalContent: undefined,
        forceOpen: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.EarlyHints,
        loggingContext: 'early-hints-headers',
    }}
        aria-label=${i18nString(UIStrings.earlyHintsHeaders)}
      >
        ${__classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersText, "f") ?
        __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderRawHeaders).call(this, __classPrivateFieldGet(this, _RequestHeadersView_request, "f").responseHeadersText, true) : html `
          <${_ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__.EarlyHintsHeaderSection.litTagName} .data=${{
        request: __classPrivateFieldGet(this, _RequestHeadersView_request, "f"),
        toReveal: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f"),
    }}></${_ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__.EarlyHintsHeaderSection.litTagName}>
        `}
      </${Category.litTagName}>
    `;
    // clang-format on
}, _RequestHeadersView_renderResponseHeaders = function _RequestHeadersView_renderResponseHeaders() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    const toggleShowRaw = () => {
        __classPrivateFieldSet(this, _RequestHeadersView_showResponseHeadersText, !__classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersText, "f"), "f");
        void this.render();
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <${Category.litTagName}
        @togglerawevent=${toggleShowRaw}
        .data=${{
        name: 'response-headers',
        title: i18nString(UIStrings.responseHeaders),
        headerCount: __classPrivateFieldGet(this, _RequestHeadersView_request, "f").sortedResponseHeaders.length,
        checked: __classPrivateFieldGet(this, _RequestHeadersView_request, "f").responseHeadersText ? __classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersText, "f") : undefined,
        additionalContent: __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderHeaderOverridesLink).call(this),
        forceOpen: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.Response,
        loggingContext: 'response-headers',
    }}
        aria-label=${i18nString(UIStrings.responseHeaders)}
      >
        ${__classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersText, "f") ?
        __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderRawHeaders).call(this, __classPrivateFieldGet(this, _RequestHeadersView_request, "f").responseHeadersText, true) : html `
          <${_ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__.ResponseHeaderSection.litTagName} .data=${{
        request: __classPrivateFieldGet(this, _RequestHeadersView_request, "f"),
        toReveal: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f"),
    }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('response-headers')}></${_ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_20__.ResponseHeaderSection.litTagName}>
        `}
      </${Category.litTagName}>
    `;
    // clang-format on
}, _RequestHeadersView_renderHeaderOverridesLink = function _RequestHeadersView_renderHeaderOverridesLink() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").uiSourceCodeForURL(__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_getHeaderOverridesFileUrl).call(this))) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    const overridesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled');
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    const fileIcon = html `
      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__.Icon.Icon.litTagName} class=${overridesSetting.get() ? 'inline-icon dot purple' : 'inline-icon'} .data=${{
        iconName: 'document',
        width: '16px',
        height: '16px',
    }}>
      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__.Icon.Icon.litTagName}>`;
    // clang-format on
    const revealHeadersFile = (event) => {
        event.preventDefault();
        const uiSourceCode = __classPrivateFieldGet(this, _RequestHeadersView_workspace, "f").uiSourceCodeForURL(__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_getHeaderOverridesFileUrl).call(this));
        if (uiSourceCode) {
            _sources_sources_js__WEBPACK_IMPORTED_MODULE_17__.SourcesPanel.SourcesPanel.instance().showUISourceCode(uiSourceCode);
            void _sources_sources_js__WEBPACK_IMPORTED_MODULE_17__.SourcesPanel.SourcesPanel.instance().revealInNavigator(uiSourceCode);
        }
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <x-link
          href="https://goo.gle/devtools-override"
          class="link devtools-link"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('devtools-override').track({ click: true })}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__.Icon.Icon.litTagName} class="inline-icon" .data=${{
        iconName: 'help',
        width: '16px',
        height: '16px',
    }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_10__.Icon.Icon.litTagName}
      ></x-link>
      <x-link
          @click=${revealHeadersFile}
          class="link devtools-link"
          title=${UIStrings.revealHeaderOverrides}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('reveal-header-overrides').track({ click: true })}
      >
        ${fileIcon}${_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.HEADERS_FILENAME}
      </x-link>
    `;
    // clang-format on
}, _RequestHeadersView_getHeaderOverridesFileUrl = function _RequestHeadersView_getHeaderOverridesFileUrl() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f")) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyUrlString;
    }
    const fileUrl = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.NetworkPersistenceManager.instance().fileUrlFromNetworkUrl(__classPrivateFieldGet(this, _RequestHeadersView_request, "f").url(), /* ignoreInactive */ true);
    return fileUrl.substring(0, fileUrl.lastIndexOf('/')) + '/' +
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_5__.NetworkPersistenceManager.HEADERS_FILENAME;
}, _RequestHeadersView_renderRequestHeaders = function _RequestHeadersView_renderRequestHeaders() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    const requestHeadersText = __classPrivateFieldGet(this, _RequestHeadersView_request, "f").requestHeadersText();
    const toggleShowRaw = () => {
        __classPrivateFieldSet(this, _RequestHeadersView_showRequestHeadersText, !__classPrivateFieldGet(this, _RequestHeadersView_showRequestHeadersText, "f"), "f");
        void this.render();
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <${Category.litTagName}
        @togglerawevent=${toggleShowRaw}
        .data=${{
        name: 'request-headers',
        title: i18nString(UIStrings.requestHeaders),
        headerCount: __classPrivateFieldGet(this, _RequestHeadersView_request, "f").requestHeaders().length,
        checked: requestHeadersText ? __classPrivateFieldGet(this, _RequestHeadersView_showRequestHeadersText, "f") : undefined,
        forceOpen: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.Request,
        loggingContext: 'request-headers',
    }}
        aria-label=${i18nString(UIStrings.requestHeaders)}
      >
        ${(__classPrivateFieldGet(this, _RequestHeadersView_showRequestHeadersText, "f") && requestHeadersText) ?
        __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderRawHeaders).call(this, requestHeadersText, false) : html `
          <${_RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_18__.RequestHeaderSection.litTagName} .data=${{
        request: __classPrivateFieldGet(this, _RequestHeadersView_request, "f"),
        toReveal: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f"),
    }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('request-headers')}></${_RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_18__.RequestHeaderSection.litTagName}>
        `}
      </${Category.litTagName}>
    `;
    // clang-format on
}, _RequestHeadersView_renderRawHeaders = function _RequestHeadersView_renderRawHeaders(rawHeadersText, forResponseHeaders) {
    const trimmed = rawHeadersText.trim();
    const showFull = forResponseHeaders ? __classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersTextFull, "f") : __classPrivateFieldGet(this, _RequestHeadersView_showRequestHeadersTextFull, "f");
    const isShortened = !showFull && trimmed.length > RAW_HEADER_CUTOFF;
    const showMore = () => {
        if (forResponseHeaders) {
            __classPrivateFieldSet(this, _RequestHeadersView_showResponseHeadersTextFull, true, "f");
        }
        else {
            __classPrivateFieldSet(this, _RequestHeadersView_showRequestHeadersTextFull, true, "f");
        }
        void this.render();
    };
    const onContextMenuOpen = (event) => {
        const showFull = forResponseHeaders ? __classPrivateFieldGet(this, _RequestHeadersView_showResponseHeadersTextFull, "f") : __classPrivateFieldGet(this, _RequestHeadersView_showRequestHeadersTextFull, "f");
        if (!showFull) {
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_14__.ContextMenu.ContextMenu(event);
            const section = contextMenu.newSection();
            section.appendItem(i18nString(UIStrings.showMore), showMore, { jslogContext: 'show-more' });
            void contextMenu.show();
        }
    };
    const addContextMenuListener = (el) => {
        if (isShortened) {
            el.addEventListener('contextmenu', onContextMenuOpen);
        }
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class="row raw-headers-row" on-render=${_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_9__.Directives.nodeRenderedCallback(addContextMenuListener)}>
        <div class="raw-headers">${isShortened ? trimmed.substring(0, RAW_HEADER_CUTOFF) : trimmed}</div>
        ${isShortened ? html `
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_8__.Button.Button.litTagName}
            .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_8__.Button.Size.SMALL}
            .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_8__.Button.Variant.OUTLINED}
            @click=${showMore}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.action('raw-headers-show-more').track({ click: true })}
          >${i18nString(UIStrings.showMore)}</${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_8__.Button.Button.litTagName}>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
      </div>
    `;
    // clang-format on
}, _RequestHeadersView_renderGeneralSection = function _RequestHeadersView_renderGeneralSection() {
    if (!__classPrivateFieldGet(this, _RequestHeadersView_request, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    const statusClasses = ['status'];
    if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode < 300 || __classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode === 304) {
        statusClasses.push('green-circle');
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode < 400) {
        statusClasses.push('yellow-circle');
    }
    else {
        statusClasses.push('red-circle');
    }
    let comment = '';
    if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").cachedInMemory()) {
        comment = i18nString(UIStrings.fromMemoryCache);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").fromEarlyHints()) {
        comment = i18nString(UIStrings.fromEarlyHints);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").fetchedViaServiceWorker) {
        comment = i18nString(UIStrings.fromServiceWorker);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").redirectSourceSignedExchangeInfoHasNoErrors()) {
        comment = i18nString(UIStrings.fromSignedexchange);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").webBundleInnerRequestInfo()) {
        comment = i18nString(UIStrings.fromWebBundle);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").fromPrefetchCache()) {
        comment = i18nString(UIStrings.fromPrefetchCache);
    }
    else if (__classPrivateFieldGet(this, _RequestHeadersView_request, "f").cached()) {
        comment = i18nString(UIStrings.fromDiskCache);
    }
    if (comment) {
        statusClasses.push('status-with-comment');
    }
    const statusText = [__classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode, __classPrivateFieldGet(this, _RequestHeadersView_request, "f").getInferredStatusText(), comment].join(' ');
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <${Category.litTagName}
        .data=${{
        name: 'general',
        title: i18nString(UIStrings.general),
        forceOpen: __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.General,
        loggingContext: 'general',
    }}
        aria-label=${i18nString(UIStrings.general)}
      >
      <div jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('general')}>
        ${__classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralRow).call(this, i18nString(UIStrings.requestUrl), __classPrivateFieldGet(this, _RequestHeadersView_request, "f").url())}
        ${__classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode ? __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralRow).call(this, i18nString(UIStrings.requestMethod), __classPrivateFieldGet(this, _RequestHeadersView_request, "f").requestMethod) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
        ${__classPrivateFieldGet(this, _RequestHeadersView_request, "f").statusCode ? __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralRow).call(this, i18nString(UIStrings.statusCode), statusText, statusClasses) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
        ${__classPrivateFieldGet(this, _RequestHeadersView_request, "f").remoteAddress() ? __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralRow).call(this, i18nString(UIStrings.remoteAddress), __classPrivateFieldGet(this, _RequestHeadersView_request, "f").remoteAddress()) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
        ${__classPrivateFieldGet(this, _RequestHeadersView_request, "f").referrerPolicy() ? __classPrivateFieldGet(this, _RequestHeadersView_instances, "m", _RequestHeadersView_renderGeneralRow).call(this, i18nString(UIStrings.referrerPolicy), String(__classPrivateFieldGet(this, _RequestHeadersView_request, "f").referrerPolicy())) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
      </div>
      </${Category.litTagName}>
    `;
    // clang-format on
}, _RequestHeadersView_renderGeneralRow = function _RequestHeadersView_renderGeneralRow(name, value, classNames) {
    const isHighlighted = __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.section === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIHeaderSection.General &&
        name.toLowerCase() === __classPrivateFieldGet(this, _RequestHeadersView_toReveal, "f")?.header?.toLowerCase();
    return html `
      <div class="row ${isHighlighted ? 'header-highlight' : ''}">
        <div class="header-name">${name}:</div>
        <div
          class="header-value ${classNames?.join(' ')}"
          @copy=${() => _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelCopyValue)}
        >${value}</div>
      </div>
    `;
};
Object.defineProperty(RequestHeadersView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.literal `devtools-request-headers`
});
class ToggleRawHeadersEvent extends Event {
    constructor() {
        super(ToggleRawHeadersEvent.eventName, {});
    }
}
Object.defineProperty(ToggleRawHeadersEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'togglerawevent'
});
class Category extends HTMLElement {
    constructor() {
        super(...arguments);
        _Category_instances.add(this);
        _Category_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Category_expandedSetting.set(this, void 0);
        _Category_title.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString);
        _Category_headerCount.set(this, undefined);
        _Category_checked.set(this, undefined);
        _Category_additionalContent.set(this, undefined);
        _Category_forceOpen.set(this, undefined);
        _Category_loggingContext.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Category_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestHeadersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_11__.checkboxStyles];
    }
    set data(data) {
        __classPrivateFieldSet(this, _Category_title, data.title, "f");
        __classPrivateFieldSet(this, _Category_expandedSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('request-info-' + data.name + '-category-expanded', true), "f");
        __classPrivateFieldSet(this, _Category_headerCount, data.headerCount, "f");
        __classPrivateFieldSet(this, _Category_checked, data.checked, "f");
        __classPrivateFieldSet(this, _Category_additionalContent, data.additionalContent, "f");
        __classPrivateFieldSet(this, _Category_forceOpen, data.forceOpen, "f");
        __classPrivateFieldSet(this, _Category_loggingContext, data.loggingContext, "f");
        __classPrivateFieldGet(this, _Category_instances, "m", _Category_render).call(this);
    }
}
_Category_shadow = new WeakMap(), _Category_expandedSetting = new WeakMap(), _Category_title = new WeakMap(), _Category_headerCount = new WeakMap(), _Category_checked = new WeakMap(), _Category_additionalContent = new WeakMap(), _Category_forceOpen = new WeakMap(), _Category_loggingContext = new WeakMap(), _Category_instances = new WeakSet(), _Category_onCheckboxToggle = function _Category_onCheckboxToggle() {
    this.dispatchEvent(new ToggleRawHeadersEvent());
}, _Category_render = function _Category_render() {
    const isOpen = (__classPrivateFieldGet(this, _Category_expandedSetting, "f") ? __classPrivateFieldGet(this, _Category_expandedSetting, "f").get() : true) || __classPrivateFieldGet(this, _Category_forceOpen, "f");
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <details ?open=${isOpen} @toggle=${__classPrivateFieldGet(this, _Category_instances, "m", _Category_onToggle)}>
        <summary
          class="header"
          @keydown=${__classPrivateFieldGet(this, _Category_instances, "m", _Category_onSummaryKeyDown)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.sectionHeader().track({ click: true }).context(__classPrivateFieldGet(this, _Category_loggingContext, "f"))}
        >
          <div class="header-grid-container">
            <div>
              ${__classPrivateFieldGet(this, _Category_title, "f")}${__classPrivateFieldGet(this, _Category_headerCount, "f") !== undefined ?
        html `<span class="header-count"> (${__classPrivateFieldGet(this, _Category_headerCount, "f")})</span>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
            </div>
            <div class="hide-when-closed">
              ${__classPrivateFieldGet(this, _Category_checked, "f") !== undefined ? html `
                <label><input
                    type="checkbox"
                    .checked=${__classPrivateFieldGet(this, _Category_checked, "f")}
                    @change=${__classPrivateFieldGet(this, _Category_instances, "m", _Category_onCheckboxToggle)}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.toggle('raw-headers').track({ change: true })}
                />${i18nString(UIStrings.raw)}</label>
              ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
            </div>
            <div class="hide-when-closed">${__classPrivateFieldGet(this, _Category_additionalContent, "f")}</div>
        </summary>
        <slot></slot>
      </details>
    `, __classPrivateFieldGet(this, _Category_shadow, "f"), { host: this });
    // clang-format on
}, _Category_onSummaryKeyDown = function _Category_onSummaryKeyDown(event) {
    if (!event.target) {
        return;
    }
    const summaryElement = event.target;
    const detailsElement = summaryElement.parentElement;
    if (!detailsElement) {
        throw new Error('<details> element is not found for a <summary> element');
    }
    switch (event.key) {
        case 'ArrowLeft':
            detailsElement.open = false;
            break;
        case 'ArrowRight':
            detailsElement.open = true;
            break;
    }
}, _Category_onToggle = function _Category_onToggle(event) {
    __classPrivateFieldGet(this, _Category_expandedSetting, "f")?.set(event.target.open);
};
Object.defineProperty(Category, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.literal `devtools-request-headers-category`
});
customElements.define('devtools-request-headers', RequestHeadersView);
customElements.define('devtools-request-headers-category', Category);


/***/ })

}]);