"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_FrameDetailsView_ts"],{

/***/ "./src/panels/application/components/FrameDetailsView.ts":
/*!***************************************************************!*\
  !*** ./src/panels/application/components/FrameDetailsView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameDetailsReportView: () => (/* binding */ FrameDetailsReportView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../third_party/csp_evaluator/csp_evaluator.js */ "./src/third_party/csp_evaluator/csp_evaluator.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./src/ui/components/expandable_list/expandable_list.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './frameDetailsReportView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./src/panels/application/components/OriginTrialTreeView.ts");
/* harmony import */ var _PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./PermissionsPolicySection.js */ "./src/panels/application/components/PermissionsPolicySection.ts");
/* harmony import */ var _StackTrace_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StackTrace.js */ "./src/panels/application/components/StackTrace.ts");
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
var _FrameDetailsReportView_instances, _FrameDetailsReportView_shadow, _FrameDetailsReportView_frame, _FrameDetailsReportView_target, _FrameDetailsReportView_protocolMonitorExperimentEnabled, _FrameDetailsReportView_permissionsPolicies, _FrameDetailsReportView_permissionsPolicySectionData, _FrameDetailsReportView_originTrialTreeView, _FrameDetailsReportView_linkifier, _FrameDetailsReportView_adScriptId, _FrameDetailsReportView_renderOriginTrial, _FrameDetailsReportView_renderDocumentSection, _FrameDetailsReportView_maybeRenderSourcesLinkForURL, _FrameDetailsReportView_maybeRenderNetworkLinkForURL, _FrameDetailsReportView_uiSourceCodeForFrame, _FrameDetailsReportView_maybeRenderUnreachableURL, _FrameDetailsReportView_renderNetworkLinkForUnreachableURL, _FrameDetailsReportView_maybeRenderOrigin, _FrameDetailsReportView_renderOwnerElement, _FrameDetailsReportView_maybeRenderCreationStacktrace, _FrameDetailsReportView_getAdFrameTypeStrings, _FrameDetailsReportView_getAdFrameExplanationString, _FrameDetailsReportView_maybeRenderAdStatus, _FrameDetailsReportView_renderIsolationSection, _FrameDetailsReportView_maybeRenderSecureContextExplanation, _FrameDetailsReportView_getSecureContextExplanation, _FrameDetailsReportView_maybeRenderCoopCoepCSPStatus, _FrameDetailsReportView_maybeRenderCrossOriginStatus, _FrameDetailsReportView_renderEffectiveDirectives, _FrameDetailsReportView_renderSingleCSP, _FrameDetailsReportView_renderCSPSection, _FrameDetailsReportView_renderApiAvailabilitySection, _FrameDetailsReportView_renderSharedArrayBufferAvailability, _FrameDetailsReportView_renderMeasureMemoryAvailability, _FrameDetailsReportView_renderAdditionalInfoSection;






















const UIStrings = {
    /**
     *@description Section header in the Frame Details view
     */
    additionalInformation: 'Additional Information',
    /**
     *@description Explanation for why the additional information section is being shown
     */
    thisAdditionalDebugging: 'This additional (debugging) information is shown because the \'Protocol Monitor\' experiment is enabled.',
    /**
     *@description Label for subtitle of frame details view
     */
    frameId: 'Frame ID',
    /**
     *@description Name of a network resource type
     */
    document: 'Document',
    /**
     *@description A web URL (for a lot of languages this does not need to be translated, please translate only where necessary)
     */
    url: 'URL',
    /**
    /**
     *@description Title for a link to the Sources panel
     */
    clickToRevealInSourcesPanel: 'Click to reveal in Sources panel',
    /**
     *@description Title for a link to the Network panel
     */
    clickToRevealInNetworkPanel: 'Click to reveal in Network panel',
    /**
     *@description Title for unreachable URL field
     */
    unreachableUrl: 'Unreachable URL',
    /**
     *@description Title for a link that applies a filter to the network panel
     */
    clickToRevealInNetworkPanelMight: 'Click to reveal in Network panel (might require page reload)',
    /**
     *@description The origin of a URL (https://web.dev/same-site-same-origin/#origin)
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */
    origin: 'Origin',
    /**
    /**
     *@description Related node label in Timeline UIUtils of the Performance panel
     */
    ownerElement: 'Owner Element',
    /**
     *@description Title for a link to the Elements panel
     */
    clickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description Title for ad frame type field
     */
    adStatus: 'Ad Status',
    /**
     *@description Description for ad frame type
     */
    rootDescription: 'This frame has been identified as the root frame of an ad',
    /**
     *@description Value for ad frame type
     */
    root: 'root',
    /**
     *@description Description for ad frame type
     */
    childDescription: 'This frame has been identified as a child frame of an ad',
    /**
     *@description Value for ad frame type
     */
    child: 'child',
    /**
     *@description Section header in the Frame Details view
     */
    securityIsolation: 'Security & Isolation',
    /**
     *@description Section header in the Frame Details view
     */
    contentSecurityPolicy: 'Content Security Policy (CSP)',
    /**
     *@description Row title for in the Frame Details view
     */
    secureContext: 'Secure Context',
    /**
     *@description Text in Timeline indicating that input has happened recently
     */
    yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */
    no: 'No',
    /**
     *@description Label for whether a frame is cross-origin isolated
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */
    crossoriginIsolated: 'Cross-Origin Isolated',
    /**
     *@description Explanatory text in the Frame Details view
     */
    localhostIsAlwaysASecureContext: '`Localhost` is always a secure context',
    /**
     *@description Explanatory text in the Frame Details view
     */
    aFrameAncestorIsAnInsecure: 'A frame ancestor is an insecure context',
    /**
     *@description Explanatory text in the Frame Details view
     */
    theFramesSchemeIsInsecure: 'The frame\'s scheme is insecure',
    /**
     *@description This label specifies the server endpoints to which the server is reporting errors
     *and warnings through the Report-to API. Following this label will be the URL of the server.
     */
    reportingTo: 'reporting to',
    /**
     *@description Section header in the Frame Details view
     */
    apiAvailability: 'API availability',
    /**
     *@description Explanation of why cross-origin isolation is important
     *(https://web.dev/why-coop-coep/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary)
     */
    availabilityOfCertainApisDepends: 'Availability of certain APIs depends on the document being cross-origin isolated.',
    /**
     *@description Description of the SharedArrayBuffer status
     */
    availableTransferable: 'available, transferable',
    /**
     *@description Description of the SharedArrayBuffer status
     */
    availableNotTransferable: 'available, not transferable',
    /**
     *@description Explanation for the SharedArrayBuffer availability status
     */
    unavailable: 'unavailable',
    /**
     *@description Tooltip for the SharedArrayBuffer availability status
     */
    sharedarraybufferConstructorIs: '`SharedArrayBuffer` constructor is available and `SABs` can be transferred via `postMessage`',
    /**
     *@description Tooltip for the SharedArrayBuffer availability status
     */
    sharedarraybufferConstructorIsAvailable: '`SharedArrayBuffer` constructor is available but `SABs` cannot be transferred via `postMessage`',
    /**
     *@description Explanation why SharedArrayBuffer will not be available in the future
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary)
     */
    willRequireCrossoriginIsolated: '⚠️ will require cross-origin isolated context in the future',
    /**
     *@description Explanation why SharedArrayBuffer is not available
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary).
     */
    requiresCrossoriginIsolated: 'requires cross-origin isolated context',
    /**
     *@description Explanation for the SharedArrayBuffer availability status in case the transfer of a SAB requires the
     * permission policy `cross-origin-isolated` to be enabled (e.g. because the message refers to the situation in an iframe).
     */
    transferRequiresCrossoriginIsolatedPermission: '`SharedArrayBuffer` transfer requires enabling the permission policy:',
    /**
     *@description Explanation for the Measure Memory availability status
     */
    available: 'available',
    /**
     *@description Tooltip for the Measure Memory availability status
     */
    thePerformanceAPI: 'The `performance.measureUserAgentSpecificMemory()` API is available',
    /**
     *@description Tooltip for the Measure Memory availability status
     */
    thePerformancemeasureuseragentspecificmemory: 'The `performance.measureUserAgentSpecificMemory()` API is not available',
    /**
     *@description Entry in the API availability section of the frame details view
     */
    measureMemory: 'Measure Memory',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Label for a stack trace. If a frame is created programmatically (i.e. via JavaScript), there is a
     * stack trace for the line of code which caused the creation of the iframe. This is the stack trace we are showing here.
     */
    creationStackTrace: 'Frame Creation `Stack Trace`',
    /**
     *@description Tooltip for 'Frame Creation Stack Trace' explaining that the stack
     *trace shows where in the code the frame has been created programmatically
     */
    creationStackTraceExplanation: 'This frame was created programmatically. The `stack trace` shows where this happened.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */
    parentIsAdExplanation: 'This frame is considered an ad frame because its parent frame is an ad frame.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */
    matchedBlockingRuleExplanation: 'This frame is considered an ad frame because its current (or previous) main document is an ad resource.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */
    createdByAdScriptExplanation: 'There was an ad script in the `(async) stack` when this frame was created. Examining the creation `stack trace` of this frame might provide more insight.',
    /**
     *@description Label for a link to an ad script, which created the current iframe.
     */
    creatorAdScript: 'Creator Ad Script',
    /**
     *@description Text describing the absence of a value.
     */
    none: 'None',
    /**
     *@description Explanation of what origin trials are
     *(https://developer.chrome.com/docs/web-platform/origin-trials/)
     *(please don't translate 'origin trials').
     */
    originTrialsExplanation: 'Origin trials give you access to a new or experimental feature.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/FrameDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_13__.RenderCoordinator.RenderCoordinator.instance();
class FrameDetailsReportView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_12__.LegacyWrapper.WrappableComponent {
    constructor(frame) {
        super();
        _FrameDetailsReportView_instances.add(this);
        _FrameDetailsReportView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _FrameDetailsReportView_frame.set(this, void 0);
        _FrameDetailsReportView_target.set(this, void 0);
        _FrameDetailsReportView_protocolMonitorExperimentEnabled.set(this, false);
        _FrameDetailsReportView_permissionsPolicies.set(this, null);
        _FrameDetailsReportView_permissionsPolicySectionData.set(this, { policies: [], showDetails: false });
        _FrameDetailsReportView_originTrialTreeView.set(this, new _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_19__.OriginTrialTreeView());
        _FrameDetailsReportView_linkifier.set(this, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_15__.Linkifier.Linkifier());
        _FrameDetailsReportView_adScriptId.set(this, null);
        __classPrivateFieldSet(this, _FrameDetailsReportView_frame, frame, "f");
        void this.render();
    }
    connectedCallback() {
        this.parentElement?.classList.add('overflow-auto');
        __classPrivateFieldSet(this, _FrameDetailsReportView_protocolMonitorExperimentEnabled, _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('protocol-monitor'), "f");
        __classPrivateFieldGet(this, _FrameDetailsReportView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './frameDetailsReportView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    async render() {
        __classPrivateFieldSet(this, _FrameDetailsReportView_adScriptId, (await __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")?.parentFrame()?.getAdScriptId(__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")?.id)) || null, "f");
        const debuggerModel = __classPrivateFieldGet(this, _FrameDetailsReportView_adScriptId, "f")?.debuggerId ?
            await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel.modelForDebuggerId(__classPrivateFieldGet(this, _FrameDetailsReportView_adScriptId, "f")?.debuggerId) :
            null;
        __classPrivateFieldSet(this, _FrameDetailsReportView_target, debuggerModel?.target(), "f");
        if (!__classPrivateFieldGet(this, _FrameDetailsReportView_permissionsPolicies, "f") && __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
            __classPrivateFieldSet(this, _FrameDetailsReportView_permissionsPolicies, __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").getPermissionsPolicyState(), "f");
        }
        await coordinator.write('FrameDetailsView render', () => {
            if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
                return;
            }
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.Report.litTagName} .data=${{ reportTitle: __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").displayName() }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.pane('frames')}>
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderDocumentSection).call(this)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderIsolationSection).call(this)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderApiAvailabilitySection).call(this)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderOriginTrial).call(this)}
          ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.Directives.until(__classPrivateFieldGet(this, _FrameDetailsReportView_permissionsPolicies, "f")?.then(policies => {
                __classPrivateFieldGet(this, _FrameDetailsReportView_permissionsPolicySectionData, "f").policies = policies || [];
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
              <${_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__.PermissionsPolicySection.litTagName}
                .data=${__classPrivateFieldGet(this, _FrameDetailsReportView_permissionsPolicySectionData, "f")}
              >
              </${_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__.PermissionsPolicySection.litTagName}>
            `;
            }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_protocolMonitorExperimentEnabled, "f") ? __classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderAdditionalInfoSection).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.Report.litTagName}>
      `, __classPrivateFieldGet(this, _FrameDetailsReportView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
}
_FrameDetailsReportView_shadow = new WeakMap(), _FrameDetailsReportView_frame = new WeakMap(), _FrameDetailsReportView_target = new WeakMap(), _FrameDetailsReportView_protocolMonitorExperimentEnabled = new WeakMap(), _FrameDetailsReportView_permissionsPolicies = new WeakMap(), _FrameDetailsReportView_permissionsPolicySectionData = new WeakMap(), _FrameDetailsReportView_originTrialTreeView = new WeakMap(), _FrameDetailsReportView_linkifier = new WeakMap(), _FrameDetailsReportView_adScriptId = new WeakMap(), _FrameDetailsReportView_instances = new WeakSet(), _FrameDetailsReportView_renderOriginTrial = function _FrameDetailsReportView_renderOriginTrial() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    __classPrivateFieldGet(this, _FrameDetailsReportView_originTrialTreeView, "f").classList.add('span-cols');
    void __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").getOriginTrials().then(trials => {
        __classPrivateFieldGet(this, _FrameDetailsReportView_originTrialTreeView, "f").data = { trials };
    });
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Origin trials')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
    <div class="span-cols">
        ${i18nString(UIStrings.originTrialsExplanation)}
        <x-link href="https://developer.chrome.com/docs/web-platform/origin-trials/" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.link('learn-more.origin-trials').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
    </div>
    ${__classPrivateFieldGet(this, _FrameDetailsReportView_originTrialTreeView, "f")}
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
    `;
    // clang-format on
}, _FrameDetailsReportView_renderDocumentSection = function _FrameDetailsReportView_renderDocumentSection() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.document)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.url)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        <div class="inline-items">
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderSourcesLinkForURL).call(this)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderNetworkLinkForURL).call(this)}
          <div class="text-ellipsis" title=${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").url}>${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").url}</div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderUnreachableURL).call(this)}
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderOrigin).call(this)}
      ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.Directives.until(__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderOwnerElement).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing)}
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderCreationStacktrace).call(this)}
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderAdStatus).call(this)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
    `;
}, _FrameDetailsReportView_maybeRenderSourcesLinkForURL = function _FrameDetailsReportView_maybeRenderSourcesLinkForURL() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f") || __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").unreachableUrl()) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    const sourceCode = __classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_uiSourceCodeForFrame).call(this, __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f"));
    return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__.renderIconLink)('breakpoint-circle', i18nString(UIStrings.clickToRevealInSourcesPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode), 'reveal-in-sources');
}, _FrameDetailsReportView_maybeRenderNetworkLinkForURL = function _FrameDetailsReportView_maybeRenderNetworkLinkForURL() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const resource = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").resourceForURL(__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").url);
        if (resource && resource.request) {
            const request = resource.request;
            return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanel), () => {
                const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__.UIRequestLocation.UIRequestLocation.tab(request, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__.UIRequestLocation.UIRequestTabs.HeadersComponent);
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
            }, 'reveal-in-network');
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_uiSourceCodeForFrame = function _FrameDetailsReportView_uiSourceCodeForFrame(frame) {
    for (const project of _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().projects()) {
        const projectTarget = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.getTargetForProject(project);
        if (projectTarget && projectTarget === frame.resourceTreeModel().target()) {
            const uiSourceCode = project.uiSourceCodeForURL(frame.url);
            if (uiSourceCode) {
                return uiSourceCode;
            }
        }
    }
    return null;
}, _FrameDetailsReportView_maybeRenderUnreachableURL = function _FrameDetailsReportView_maybeRenderUnreachableURL() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f") || !__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").unreachableUrl()) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.unreachableUrl)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        <div class="inline-items">
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderNetworkLinkForUnreachableURL).call(this)}
          <div class="text-ellipsis" title=${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").unreachableUrl()}>${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").unreachableUrl()}</div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
    `;
}, _FrameDetailsReportView_renderNetworkLinkForUnreachableURL = function _FrameDetailsReportView_renderNetworkLinkForUnreachableURL() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const unreachableUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").unreachableUrl());
        if (unreachableUrl) {
            return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_20__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanelMight), () => {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__.UIFilter.UIRequestFilter.filters([
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__.UIFilter.FilterType.Domain,
                        filterValue: unreachableUrl.domain(),
                    },
                    {
                        filterType: null,
                        filterValue: unreachableUrl.path,
                    },
                ]));
            }, 'unreachable-url.reveal-in-network');
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_maybeRenderOrigin = function _FrameDetailsReportView_maybeRenderOrigin() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f") && __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").securityOrigin && __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").securityOrigin !== '://') {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.origin)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
          <div class="text-ellipsis" title=${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").securityOrigin}>${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").securityOrigin}</div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      `;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_renderOwnerElement = async function _FrameDetailsReportView_renderOwnerElement() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const linkTargetDOMNode = await __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").getOwnerDOMNodeOrDocument();
        if (linkTargetDOMNode) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.ownerElement)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName} class="without-min-width">
            <div class="inline-items">
              <button class="link text-link" role="link" tabindex=0 title=${i18nString(UIStrings.clickToRevealInElementsPanel)}
                @mouseenter=${() => __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")?.highlight()}
                @mouseleave=${() => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight()}
                @click=${() => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode)}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.action('reveal-in-elements').track({ click: true })}
              >
                &lt;${linkTargetDOMNode.nodeName().toLocaleLowerCase()}&gt;
              </button>
            </div>
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        `;
            // clang-format on
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_maybeRenderCreationStacktrace = function _FrameDetailsReportView_maybeRenderCreationStacktrace() {
    const creationStackTraceData = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")?.getCreationStackTraceData();
    if (creationStackTraceData && creationStackTraceData.creationStackTrace) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName} title=${i18nString(UIStrings.creationStackTraceExplanation)}>${i18nString(UIStrings.creationStackTrace)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.section('frame-creation-stack-trace')}
        >
          <${_StackTrace_js__WEBPACK_IMPORTED_MODULE_21__.StackTrace.litTagName} .data=${{
            frame: __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f"),
            buildStackTraceRows: _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_15__.JSPresentationUtils.buildStackTraceRows,
        }}>
          </${_StackTrace_js__WEBPACK_IMPORTED_MODULE_21__.StackTrace.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      `;
        // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_getAdFrameTypeStrings = function _FrameDetailsReportView_getAdFrameTypeStrings(type) {
    switch (type) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameType.Child:
            return { value: i18nString(UIStrings.child), description: i18nString(UIStrings.childDescription) };
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameType.Root:
            return { value: i18nString(UIStrings.root), description: i18nString(UIStrings.rootDescription) };
    }
}, _FrameDetailsReportView_getAdFrameExplanationString = function _FrameDetailsReportView_getAdFrameExplanationString(explanation) {
    switch (explanation) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameExplanation.CreatedByAdScript:
            return i18nString(UIStrings.createdByAdScriptExplanation);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameExplanation.MatchedBlockingRule:
            return i18nString(UIStrings.matchedBlockingRuleExplanation);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameExplanation.ParentIsAd:
            return i18nString(UIStrings.parentIsAdExplanation);
    }
}, _FrameDetailsReportView_maybeRenderAdStatus = function _FrameDetailsReportView_maybeRenderAdStatus() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    const adFrameType = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").adFrameType();
    if (adFrameType === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.AdFrameType.None) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    const typeStrings = __classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_getAdFrameTypeStrings).call(this, adFrameType);
    const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<div title=${typeStrings.description}>${typeStrings.value}</div>`];
    for (const explanation of __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").adFrameStatus()?.explanations || []) {
        rows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<div>${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_getAdFrameExplanationString).call(this, explanation)}</div>`);
    }
    const adScriptLinkElement = __classPrivateFieldGet(this, _FrameDetailsReportView_target, "f") ? __classPrivateFieldGet(this, _FrameDetailsReportView_linkifier, "f").linkifyScriptLocation(__classPrivateFieldGet(this, _FrameDetailsReportView_target, "f"), __classPrivateFieldGet(this, _FrameDetailsReportView_adScriptId, "f")?.scriptId || null, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString, undefined, undefined) :
        null;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.adStatus)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.section('ad-status')}>
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableList.ExpandableList.litTagName} .data=${{ rows, title: i18nString(UIStrings.adStatus) }}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableList.ExpandableList.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_target, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.creatorAdScript)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName} class="ad-script-link">${adScriptLinkElement?.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.link('ad-script').track({ click: true })}`)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing}
    `;
    // clang-format on
}, _FrameDetailsReportView_renderIsolationSection = function _FrameDetailsReportView_renderIsolationSection() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.securityIsolation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.secureContext)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        ${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").isSecureContext() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no)}\xA0${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderSecureContextExplanation).call(this)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.crossoriginIsolated)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        ${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").isCrossOriginIsolated() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.Directives.until(__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderCoopCoepCSPStatus).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
    `;
}, _FrameDetailsReportView_maybeRenderSecureContextExplanation = function _FrameDetailsReportView_maybeRenderSecureContextExplanation() {
    const explanation = __classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_getSecureContextExplanation).call(this);
    if (explanation) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-comment">${explanation}</span>`;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_getSecureContextExplanation = function _FrameDetailsReportView_getSecureContextExplanation() {
    switch (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")?.getSecureContextType()) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.SecureContextType.Secure:
            return null;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.SecureContextType.SecureLocalhost:
            return i18nString(UIStrings.localhostIsAlwaysASecureContext);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.SecureContextType.InsecureAncestor:
            return i18nString(UIStrings.aFrameAncestorIsAnInsecure);
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.SecureContextType.InsecureScheme:
            return i18nString(UIStrings.theFramesSchemeIsInsecure);
    }
    return null;
}, _FrameDetailsReportView_maybeRenderCoopCoepCSPStatus = async function _FrameDetailsReportView_maybeRenderCoopCoepCSPStatus() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const model = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager);
        const info = model && await model.getSecurityIsolationStatus(__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").id);
        if (info) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderCrossOriginStatus).call(this, info.coep, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Embedder Policy (COEP)'), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.CrossOriginEmbedderPolicyValue.None)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_maybeRenderCrossOriginStatus).call(this, info.coop, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Opener Policy (COOP)'), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.CrossOriginOpenerPolicyValue.UnsafeNone)}
          ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderCSPSection).call(this, info.csp)}
        `;
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_maybeRenderCrossOriginStatus = function _FrameDetailsReportView_maybeRenderCrossOriginStatus(info, policyName, noneValue) {
    if (!info) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    const isEnabled = info.value !== noneValue;
    const isReportOnly = (!isEnabled && info.reportOnlyValue !== noneValue);
    const endpoint = isEnabled ? info.reportingEndpoint : info.reportOnlyReportingEndpoint;
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${policyName}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        ${isEnabled ? info.value : info.reportOnlyValue}
        ${isReportOnly ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-comment">report-only</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing}
        ${endpoint ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-name">${i18nString(UIStrings.reportingTo)}</span>${endpoint}` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
    `;
}, _FrameDetailsReportView_renderEffectiveDirectives = function _FrameDetailsReportView_renderEffectiveDirectives(directives) {
    const parsedDirectives = new _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_9__.CspParser.CspParser(directives).csp.directives;
    const result = [];
    for (const directive in parsedDirectives) {
        result.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<div><span class="bold">${directive}</span>${': ' + parsedDirectives[directive]?.join(', ')}</div>`);
    }
    return result;
}, _FrameDetailsReportView_renderSingleCSP = function _FrameDetailsReportView_renderSingleCSP(cspInfo) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${cspInfo.isEnforced ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy') :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy-Report-Only')}<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_10__.Button.Button.litTagName}
          .iconName=${'help'}
          class='help-button'
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_10__.Button.Variant.ICON}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_10__.Button.Size.SMALL}
          @click=${() => { window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only'; }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.link('learn-more.csp-report-only').track({ click: true })}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_10__.Button.Button.litTagName}>`}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        ${cspInfo.source === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.ContentSecurityPolicySource.HTTP ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('HTTP header') : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Meta tag')}
        ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderEffectiveDirectives).call(this, cspInfo.effectiveDirectives)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
    `;
    // clang-format on
}, _FrameDetailsReportView_renderCSPSection = function _FrameDetailsReportView_renderCSPSection(cspInfos) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
        ${i18nString(UIStrings.contentSecurityPolicy)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
      ${(cspInfos && cspInfos.length) ? cspInfos.map(cspInfo => __classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderSingleCSP).call(this, cspInfo)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
          ${i18nString(UIStrings.none)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      `}
    `;
    // clang-format on
}, _FrameDetailsReportView_renderApiAvailabilitySection = function _FrameDetailsReportView_renderApiAvailabilitySection() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.apiAvailability)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
      <div class="span-cols">
        ${i18nString(UIStrings.availabilityOfCertainApisDepends)}
        <x-link href="https://web.dev/why-coop-coep/" class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.link('learn-more.coop-coep').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
      </div>
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderSharedArrayBufferAvailability).call(this)}
      ${__classPrivateFieldGet(this, _FrameDetailsReportView_instances, "m", _FrameDetailsReportView_renderMeasureMemoryAvailability).call(this)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
    `;
}, _FrameDetailsReportView_renderSharedArrayBufferAvailability = function _FrameDetailsReportView_renderSharedArrayBufferAvailability() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const features = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").getGatedAPIFeatures();
        if (features) {
            const sabAvailable = features.includes(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.GatedAPIFeatures.SharedArrayBuffers);
            const sabTransferAvailable = sabAvailable && features.includes(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.GatedAPIFeatures.SharedArrayBuffersTransferAllowed);
            const availabilityText = sabTransferAvailable ?
                i18nString(UIStrings.availableTransferable) :
                (sabAvailable ? i18nString(UIStrings.availableNotTransferable) : i18nString(UIStrings.unavailable));
            const tooltipText = sabTransferAvailable ?
                i18nString(UIStrings.sharedarraybufferConstructorIs) :
                (sabAvailable ? i18nString(UIStrings.sharedarraybufferConstructorIsAvailable) : '');
            function renderHint(frame) {
                switch (frame.getCrossOriginIsolatedContextType()) {
                    case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.CrossOriginIsolatedContextType.Isolated:
                        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
                    case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.CrossOriginIsolatedContextType.NotIsolated:
                        if (sabAvailable) {
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-comment">${i18nString(UIStrings.willRequireCrossoriginIsolated)}</span>`;
                        }
                        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-comment">${i18nString(UIStrings.requiresCrossoriginIsolated)}</span>`;
                    case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Page.CrossOriginIsolatedContextType.NotIsolatedFeatureDisabled:
                        if (!sabTransferAvailable) {
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `<span class="inline-comment">${i18nString(UIStrings
                                .transferRequiresCrossoriginIsolatedPermission)} <code>cross-origin-isolated</code></span>`;
                        }
                        break;
                }
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
            }
            // SharedArrayBuffer is an API name, so we don't translate it.
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>SharedArrayBuffers</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName} title=${tooltipText}>
            ${availabilityText}\xA0${renderHint(__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f"))}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        `;
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_renderMeasureMemoryAvailability = function _FrameDetailsReportView_renderMeasureMemoryAvailability() {
    if (__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        const measureMemoryAvailable = __classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").isCrossOriginIsolated();
        const availabilityText = measureMemoryAvailable ? i18nString(UIStrings.available) : i18nString(UIStrings.unavailable);
        const tooltipText = measureMemoryAvailable ? i18nString(UIStrings.thePerformanceAPI) :
            i18nString(UIStrings.thePerformancemeasureuseragentspecificmemory);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.measureMemory)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
          <span title=${tooltipText}>${availabilityText}</span>\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_17__.link('learn-more.monitor-memory-usage').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      `;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
}, _FrameDetailsReportView_renderAdditionalInfoSection = function _FrameDetailsReportView_renderAdditionalInfoSection() {
    if (!__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}
        title=${i18nString(UIStrings.thisAdditionalDebugging)}
      >${i18nString(UIStrings.additionalInformation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.frameId)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
        <div class="text-ellipsis" title=${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").id}>${__classPrivateFieldGet(this, _FrameDetailsReportView_frame, "f").id}</div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportValue.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_14__.ReportView.ReportSectionDivider.litTagName}>
    `;
};
Object.defineProperty(FrameDetailsReportView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_16__.literal `devtools-resources-frame-details-view`
});
customElements.define('devtools-resources-frame-details-view', FrameDetailsReportView);


/***/ }),

/***/ "./src/third_party/csp_evaluator/csp_evaluator.ts":
/*!********************************************************!*\
  !*** ./src/third_party/csp_evaluator/csp_evaluator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspEvaluator: () => (/* reexport module object */ _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CspParser: () => (/* reexport module object */ _package_parser_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/evaluator.js */ "./src/third_party/csp_evaluator/package/evaluator.ts");
/* harmony import */ var _package_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/parser.js */ "./src/third_party/csp_evaluator/package/parser.ts");






/***/ }),

/***/ "./src/third_party/csp_evaluator/package/parser.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/parser.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspParser: () => (/* binding */ CspParser),
/* harmony export */   TEST_ONLY: () => (/* binding */ TEST_ONLY)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp.js */ "./src/third_party/csp_evaluator/package/csp.ts");
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author lwe@google.com (Lukas Weichselbaum)
 */

/**
 * A class to hold a parser for CSP in string format.
 * @unrestricted
 */
class CspParser {
    /**
     * @param unparsedCsp A Content Security Policy as string.
     */
    constructor(unparsedCsp) {
        Object.defineProperty(this, "csp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Parsed CSP
         */
        this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        this.parse(unparsedCsp);
    }
    /**
     * Parses a CSP from a string.
     * @param unparsedCsp CSP as string.
     */
    parse(unparsedCsp) {
        // Reset the internal state:
        this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        // Split CSP into directive tokens.
        const directiveTokens = unparsedCsp.split(';');
        for (let i = 0; i < directiveTokens.length; i++) {
            const directiveToken = directiveTokens[i].trim();
            // Split directive tokens into directive name and directive values.
            const directiveParts = directiveToken.match(/\S+/g);
            if (Array.isArray(directiveParts)) {
                const directiveName = directiveParts[0].toLowerCase();
                // If the set of directives already contains a directive whose name is a
                // case insensitive match for directive name, ignore this instance of
                // the directive and continue to the next token.
                if (directiveName in this.csp.directives) {
                    continue;
                }
                if (!_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directiveName)) {
                }
                const directiveValues = [];
                for (let directiveValue, j = 1; (directiveValue = directiveParts[j]); j++) {
                    directiveValue = normalizeDirectiveValue(directiveValue);
                    if (!directiveValues.includes(directiveValue)) {
                        directiveValues.push(directiveValue);
                    }
                }
                this.csp.directives[directiveName] = directiveValues;
            }
        }
        return this.csp;
    }
}
/**
 * Remove whitespaces and turn to lower case if CSP keyword or protocol
 * handler.
 * @param directiveValue directive value.
 * @return normalized directive value.
 */
function normalizeDirectiveValue(directiveValue) {
    directiveValue = directiveValue.trim();
    const directiveValueLower = directiveValue.toLowerCase();
    if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(directiveValueLower) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isUrlScheme(directiveValue)) {
        return directiveValueLower;
    }
    return directiveValue;
}
const TEST_ONLY = { normalizeDirectiveValue };


/***/ })

}]);