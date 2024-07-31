"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_components_RequestTrustTokensView_ts"],{

/***/ "./src/panels/network/components/RequestTrustTokensView.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/network/components/RequestTrustTokensView.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestTrustTokensView: () => (/* binding */ RequestTrustTokensView),
/* harmony export */   statusConsideredSuccess: () => (/* binding */ statusConsideredSuccess)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestTrustTokensView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _RequestTrustTokensView_instances, _RequestTrustTokensView_shadow, _RequestTrustTokensView_request, _RequestTrustTokensView_renderParameterSection, _RequestTrustTokensView_renderRefreshPolicy, _RequestTrustTokensView_renderIssuers, _RequestTrustTokensView_renderIssuerAndTopLevelOriginFromResult, _RequestTrustTokensView_renderResultSection, _RequestTrustTokensView_renderIssuedTokenCount;









const UIStrings = {
    /**
     *@description Section heading in the Trust Token tab
     */
    parameters: 'Parameters',
    /**
     *@description Text that refers to some types
     */
    type: 'Type',
    /**
     *@description Label for a Trust Token parameter
     */
    refreshPolicy: 'Refresh policy',
    /**
     *@description Label for a list if origins in the Trust Token tab
     */
    issuers: 'Issuers',
    /**
     *@description Label for a report field in the Network panel
     */
    topLevelOrigin: 'Top level origin',
    /**
     *@description Text for the issuer of an item
     */
    issuer: 'Issuer',
    /**
     *@description Heading of a report section in the Network panel
     */
    result: 'Result',
    /**
     *@description Text for the status of something
     */
    status: 'Status',
    /**
     *@description Label for a field in the Network panel
     */
    numberOfIssuedTokens: 'Number of issued tokens',
    /**
     * @description Text for the success status in the Network panel. Refers to the outcome of a network
     * request which will either be 'Success' or 'Failure'.
     */
    success: 'Success',
    /**
     *@description Text in the network panel for an error status
     */
    failure: 'Failure',
    /**
     *@description Detailed text for a success status in the Network panel
     */
    theOperationsResultWasServedFrom: 'The operations result was served from cache.',
    /**
     *@description Detailed text for a success status in the Network panel
     */
    theOperationWasFulfilledLocally: 'The operation was fulfilled locally, no request was sent.',
    /**
     *@description Text for an error status in the Network panel
     */
    theKeysForThisPSTIssuerAreUnavailable: 'The keys for this PST issuer are unavailable. The issuer may need to be registered via the Chrome registration process.',
    /**
     *@description Text for an error status in the Network panel
     */
    aClientprovidedArgumentWas: 'A client-provided argument was malformed or otherwise invalid.',
    /**
     *@description Text for an error status in the Network panel
     */
    eitherNoInputsForThisOperation: 'Either no inputs for this operation are available or the output exceeds the operations quota.',
    /**
     *@description Text for an error status in the Network panel
     */
    theServersResponseWasMalformedOr: 'The servers response was malformed or otherwise invalid.',
    /**
     *@description Text for an error status in the Network panel
     */
    theOperationFailedForAnUnknown: 'The operation failed for an unknown reason.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/components/RequestTrustTokensView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestTrustTokensView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.LegacyWrapper.WrappableComponent {
    constructor(request) {
        super();
        _RequestTrustTokensView_instances.add(this);
        _RequestTrustTokensView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RequestTrustTokensView_request.set(this, void 0);
        __classPrivateFieldSet(this, _RequestTrustTokensView_request, request, "f");
    }
    wasShown() {
        __classPrivateFieldGet(this, _RequestTrustTokensView_request, "f").addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.Events.TrustTokenResultAdded, this.render, this);
        void this.render();
    }
    willHide() {
        __classPrivateFieldGet(this, _RequestTrustTokensView_request, "f").removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.Events.TrustTokenResultAdded, this.render, this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RequestTrustTokensView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './RequestTrustTokensView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    async render() {
        if (!__classPrivateFieldGet(this, _RequestTrustTokensView_request, "f")) {
            throw new Error('Trying to render a Trust Token report without providing data');
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report.litTagName}>
        ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderParameterSection).call(this)}
        ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderResultSection).call(this)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.Report.litTagName}>
    `, __classPrivateFieldGet(this, _RequestTrustTokensView_shadow, "f"), { host: this });
        // clang-format on
    }
}
_RequestTrustTokensView_shadow = new WeakMap(), _RequestTrustTokensView_request = new WeakMap(), _RequestTrustTokensView_instances = new WeakSet(), _RequestTrustTokensView_renderParameterSection = function _RequestTrustTokensView_renderParameterSection() {
    const trustTokenParams = __classPrivateFieldGet(this, _RequestTrustTokensView_request, "f").trustTokenParams();
    if (!trustTokenParams) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader.litTagName} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('trust-tokens').track({
        resize: true,
    })}>${i18nString(UIStrings.parameters)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader.litTagName}>
      ${renderRowWithCodeValue(i18nString(UIStrings.type), trustTokenParams.operation.toString())}
      ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderRefreshPolicy).call(this, trustTokenParams)}
      ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderIssuers).call(this, trustTokenParams)}
      ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderIssuerAndTopLevelOriginFromResult).call(this)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionDivider.litTagName}>
    `;
}, _RequestTrustTokensView_renderRefreshPolicy = function _RequestTrustTokensView_renderRefreshPolicy(params) {
    if (params.operation !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationType.Redemption) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return renderRowWithCodeValue(i18nString(UIStrings.refreshPolicy), params.refreshPolicy.toString());
}, _RequestTrustTokensView_renderIssuers = function _RequestTrustTokensView_renderIssuers(params) {
    if (!params.issuers || params.issuers.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.issuers)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
        <ul class="issuers-list">
          ${params.issuers.map(issuer => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<li>${issuer}</li>`)}
        </ul>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
    `;
}, _RequestTrustTokensView_renderIssuerAndTopLevelOriginFromResult = function _RequestTrustTokensView_renderIssuerAndTopLevelOriginFromResult() {
    const trustTokenResult = __classPrivateFieldGet(this, _RequestTrustTokensView_request, "f").trustTokenOperationDoneEvent();
    if (!trustTokenResult) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
      ${renderSimpleRowIfValuePresent(i18nString(UIStrings.topLevelOrigin), trustTokenResult.topLevelOrigin)}
      ${renderSimpleRowIfValuePresent(i18nString(UIStrings.issuer), trustTokenResult.issuerOrigin)}`;
}, _RequestTrustTokensView_renderResultSection = function _RequestTrustTokensView_renderResultSection() {
    const trustTokenResult = __classPrivateFieldGet(this, _RequestTrustTokensView_request, "f").trustTokenOperationDoneEvent();
    if (!trustTokenResult) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.result)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.status)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
        <span>
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} class="status-icon"
            .data=${getIconForStatusCode(trustTokenResult.status)}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
          <strong>${getSimplifiedStatusTextForStatusCode(trustTokenResult.status)}</strong>
          ${getDetailedTextForStatusCode(trustTokenResult.status)}
        </span>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
      ${__classPrivateFieldGet(this, _RequestTrustTokensView_instances, "m", _RequestTrustTokensView_renderIssuedTokenCount).call(this, trustTokenResult)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionDivider.litTagName}>
      `;
}, _RequestTrustTokensView_renderIssuedTokenCount = function _RequestTrustTokensView_renderIssuedTokenCount(result) {
    if (result.type !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationType.Issuance) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return renderSimpleRowIfValuePresent(i18nString(UIStrings.numberOfIssuedTokens), result.issuedTokenCount);
};
Object.defineProperty(RequestTrustTokensView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-trust-token-report`
});
const SUCCESS_ICON_DATA = {
    color: 'var(--icon-checkmark-green)',
    iconName: 'check-circle',
    width: '16px',
    height: '16px',
};
const FAILURE_ICON_DATA = {
    color: 'var(--icon-error)',
    iconName: 'cross-circle-filled',
    width: '16px',
    height: '16px',
};
function statusConsideredSuccess(status) {
    return status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.Ok ||
        status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.AlreadyExists ||
        status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.FulfilledLocally;
}
function getIconForStatusCode(status) {
    return statusConsideredSuccess(status) ? SUCCESS_ICON_DATA : FAILURE_ICON_DATA;
}
function getSimplifiedStatusTextForStatusCode(status) {
    return statusConsideredSuccess(status) ? i18nString(UIStrings.success) : i18nString(UIStrings.failure);
}
function getDetailedTextForStatusCode(status) {
    switch (status) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.Ok:
            return null;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.AlreadyExists:
            return i18nString(UIStrings.theOperationsResultWasServedFrom);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.FulfilledLocally:
            return i18nString(UIStrings.theOperationWasFulfilledLocally);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.InvalidArgument:
            return i18nString(UIStrings.aClientprovidedArgumentWas);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.ResourceExhausted:
            return i18nString(UIStrings.eitherNoInputsForThisOperation);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.BadResponse:
            return i18nString(UIStrings.theServersResponseWasMalformedOr);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.MissingIssuerKeys:
            return i18nString(UIStrings.theKeysForThisPSTIssuerAreUnavailable);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.FailedPrecondition:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.ResourceLimited:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.InternalError:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.Unauthorized:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Network.TrustTokenOperationDoneEventStatus.UnknownError:
            return i18nString(UIStrings.theOperationFailedForAnUnknown);
    }
}
function renderSimpleRowIfValuePresent(key, value) {
    if (value === undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>${key}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>${value}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
  `;
}
function renderRowWithCodeValue(key, value) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>${key}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportKey.litTagName}>
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName} class="code">${value}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportValue.litTagName}>
  `;
}
customElements.define('devtools-trust-token-report', RequestTrustTokensView);


/***/ })

}]);