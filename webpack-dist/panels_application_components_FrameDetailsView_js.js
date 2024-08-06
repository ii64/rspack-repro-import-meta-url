"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_FrameDetailsView_js"],{

/***/ "./panels/application/components/FrameDetailsView.js":
/*!***********************************************************!*\
  !*** ./panels/application/components/FrameDetailsView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameDetailsReportView: () => (/* binding */ FrameDetailsReportView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../third_party/csp_evaluator/csp_evaluator.js */ "./third_party/csp_evaluator/csp_evaluator.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _frameDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./frameDetailsReportView.css.js */ "./panels/application/components/frameDetailsReportView.css.js");
/* harmony import */ var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */ var _PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PermissionsPolicySection.js */ "./panels/application/components/PermissionsPolicySection.js");
/* harmony import */ var _StackTrace_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





















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
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__.RenderCoordinator.RenderCoordinator.instance();
class FrameDetailsReportView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.literal `devtools-resources-frame-details-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #frame;
    #target;
    #protocolMonitorExperimentEnabled = false;
    #permissionsPolicies = null;
    #permissionsPolicySectionData = { policies: [], showDetails: false };
    #originTrialTreeView = new _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_18__.OriginTrialTreeView();
    #linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.Linkifier.Linkifier();
    #adScriptId = null;
    constructor(frame) {
        super();
        this.#frame = frame;
        void this.render();
    }
    connectedCallback() {
        this.parentElement?.classList.add('overflow-auto');
        this.#protocolMonitorExperimentEnabled = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('protocol-monitor');
        this.#shadow.adoptedStyleSheets = [_frameDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_17__["default"]];
    }
    async render() {
        this.#adScriptId = (await this.#frame?.parentFrame()?.getAdScriptId(this.#frame?.id)) || null;
        const debuggerModel = this.#adScriptId?.debuggerId ?
            await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel.modelForDebuggerId(this.#adScriptId?.debuggerId) :
            null;
        this.#target = debuggerModel?.target();
        if (!this.#permissionsPolicies && this.#frame) {
            this.#permissionsPolicies = this.#frame.getPermissionsPolicyState();
        }
        await coordinator.write('FrameDetailsView render', () => {
            if (!this.#frame) {
                return;
            }
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.Report.litTagName} .data=${{ reportTitle: this.#frame.displayName() }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.pane('frames')}>
          ${this.#renderDocumentSection()}
          ${this.#renderIsolationSection()}
          ${this.#renderApiAvailabilitySection()}
          ${this.#renderOriginTrial()}
          ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until(this.#permissionsPolicies?.then(policies => {
                this.#permissionsPolicySectionData.policies = policies || [];
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
              <${_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.PermissionsPolicySection.litTagName}
                .data=${this.#permissionsPolicySectionData}
              >
              </${_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.PermissionsPolicySection.litTagName}>
            `;
            }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing)}
          ${this.#protocolMonitorExperimentEnabled ? this.#renderAdditionalInfoSection() : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.Report.litTagName}>
      `, this.#shadow, { host: this });
            // clang-format on
        });
    }
    #renderOriginTrial() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        this.#originTrialTreeView.classList.add('span-cols');
        void this.#frame.getOriginTrials().then(trials => {
            this.#originTrialTreeView.data = { trials };
        });
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Origin trials')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
    <div class="span-cols">
        ${i18nString(UIStrings.originTrialsExplanation)}
        <x-link href="https://developer.chrome.com/docs/web-platform/origin-trials/" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.origin-trials').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
    </div>
    ${this.#originTrialTreeView}
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
    `;
        // clang-format on
    }
    #renderDocumentSection() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.document)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.url)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        <div class="inline-items">
          ${this.#maybeRenderSourcesLinkForURL()}
          ${this.#maybeRenderNetworkLinkForURL()}
          <div class="text-ellipsis" title=${this.#frame.url}>${this.#frame.url}</div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      ${this.#maybeRenderUnreachableURL()}
      ${this.#maybeRenderOrigin()}
      ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until(this.#renderOwnerElement(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing)}
      ${this.#maybeRenderCreationStacktrace()}
      ${this.#maybeRenderAdStatus()}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
    `;
    }
    #maybeRenderSourcesLinkForURL() {
        if (!this.#frame || this.#frame.unreachableUrl()) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        const sourceCode = this.#uiSourceCodeForFrame(this.#frame);
        return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('breakpoint-circle', i18nString(UIStrings.clickToRevealInSourcesPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode), 'reveal-in-sources');
    }
    #maybeRenderNetworkLinkForURL() {
        if (this.#frame) {
            const resource = this.#frame.resourceForURL(this.#frame.url);
            if (resource && resource.request) {
                const request = resource.request;
                return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanel), () => {
                    const requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIRequestLocation.tab(request, "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */);
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
                }, 'reveal-in-network');
            }
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #uiSourceCodeForFrame(frame) {
        for (const project of _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().projects()) {
            const projectTarget = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.getTargetForProject(project);
            if (projectTarget && projectTarget === frame.resourceTreeModel().target()) {
                const uiSourceCode = project.uiSourceCodeForURL(frame.url);
                if (uiSourceCode) {
                    return uiSourceCode;
                }
            }
        }
        return null;
    }
    #maybeRenderUnreachableURL() {
        if (!this.#frame || !this.#frame.unreachableUrl()) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.unreachableUrl)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        <div class="inline-items">
          ${this.#renderNetworkLinkForUnreachableURL()}
          <div class="text-ellipsis" title=${this.#frame.unreachableUrl()}>${this.#frame.unreachableUrl()}</div>
        </div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
    `;
    }
    #renderNetworkLinkForUnreachableURL() {
        if (this.#frame) {
            const unreachableUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(this.#frame.unreachableUrl());
            if (unreachableUrl) {
                return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanelMight), () => {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.UIRequestFilter.filters([
                        {
                            filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.FilterType.Domain,
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
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #maybeRenderOrigin() {
        if (this.#frame && this.#frame.securityOrigin && this.#frame.securityOrigin !== '://') {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.origin)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
          <div class="text-ellipsis" title=${this.#frame.securityOrigin}>${this.#frame.securityOrigin}</div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      `;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    async #renderOwnerElement() {
        if (this.#frame) {
            const linkTargetDOMNode = await this.#frame.getOwnerDOMNodeOrDocument();
            if (linkTargetDOMNode) {
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.ownerElement)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName} class="without-min-width">
            <div class="inline-items">
              <button class="link text-link" role="link" tabindex=0 title=${i18nString(UIStrings.clickToRevealInElementsPanel)}
                @mouseenter=${() => this.#frame?.highlight()}
                @mouseleave=${() => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight()}
                @click=${() => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode)}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.action('reveal-in-elements').track({ click: true })}
              >
                &lt;${linkTargetDOMNode.nodeName().toLocaleLowerCase()}&gt;
              </button>
            </div>
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        `;
                // clang-format on
            }
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #maybeRenderCreationStacktrace() {
        const creationStackTraceData = this.#frame?.getCreationStackTraceData();
        if (creationStackTraceData && creationStackTraceData.creationStackTrace) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName} title=${i18nString(UIStrings.creationStackTraceExplanation)}>${i18nString(UIStrings.creationStackTrace)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('frame-creation-stack-trace')}
        >
          <${_StackTrace_js__WEBPACK_IMPORTED_MODULE_20__.StackTrace.litTagName} .data=${{
                frame: this.#frame,
                buildStackTraceRows: _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.JSPresentationUtils.buildStackTraceRows,
            }}>
          </${_StackTrace_js__WEBPACK_IMPORTED_MODULE_20__.StackTrace.litTagName}>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      `;
            // clang-format on
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #getAdFrameTypeStrings(type) {
        switch (type) {
            case "child" /* Protocol.Page.AdFrameType.Child */:
                return { value: i18nString(UIStrings.child), description: i18nString(UIStrings.childDescription) };
            case "root" /* Protocol.Page.AdFrameType.Root */:
                return { value: i18nString(UIStrings.root), description: i18nString(UIStrings.rootDescription) };
        }
    }
    #getAdFrameExplanationString(explanation) {
        switch (explanation) {
            case "CreatedByAdScript" /* Protocol.Page.AdFrameExplanation.CreatedByAdScript */:
                return i18nString(UIStrings.createdByAdScriptExplanation);
            case "MatchedBlockingRule" /* Protocol.Page.AdFrameExplanation.MatchedBlockingRule */:
                return i18nString(UIStrings.matchedBlockingRuleExplanation);
            case "ParentIsAd" /* Protocol.Page.AdFrameExplanation.ParentIsAd */:
                return i18nString(UIStrings.parentIsAdExplanation);
        }
    }
    #maybeRenderAdStatus() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        const adFrameType = this.#frame.adFrameType();
        if (adFrameType === "none" /* Protocol.Page.AdFrameType.None */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        const typeStrings = this.#getAdFrameTypeStrings(adFrameType);
        const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<div title=${typeStrings.description}>${typeStrings.value}</div>`];
        for (const explanation of this.#frame.adFrameStatus()?.explanations || []) {
            rows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<div>${this.#getAdFrameExplanationString(explanation)}</div>`);
        }
        const adScriptLinkElement = this.#target ? this.#linkifier.linkifyScriptLocation(this.#target, this.#adScriptId?.scriptId || null, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString, undefined, undefined) :
            null;
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.adStatus)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('ad-status')}>
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__.ExpandableList.ExpandableList.litTagName} .data=${{ rows, title: i18nString(UIStrings.adStatus) }}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__.ExpandableList.ExpandableList.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      ${this.#target ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.creatorAdScript)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName} class="ad-script-link">${adScriptLinkElement?.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('ad-script').track({ click: true })}`)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
    `;
        // clang-format on
    }
    #renderIsolationSection() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.securityIsolation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.secureContext)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        ${this.#frame.isSecureContext() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no)}\xA0${this.#maybeRenderSecureContextExplanation()}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.crossoriginIsolated)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        ${this.#frame.isCrossOriginIsolated() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      ${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until(this.#maybeRenderCoopCoepCSPStatus(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
    `;
    }
    #maybeRenderSecureContextExplanation() {
        const explanation = this.#getSecureContextExplanation();
        if (explanation) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-comment">${explanation}</span>`;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #getSecureContextExplanation() {
        switch (this.#frame?.getSecureContextType()) {
            case "Secure" /* Protocol.Page.SecureContextType.Secure */:
                return null;
            case "SecureLocalhost" /* Protocol.Page.SecureContextType.SecureLocalhost */:
                return i18nString(UIStrings.localhostIsAlwaysASecureContext);
            case "InsecureAncestor" /* Protocol.Page.SecureContextType.InsecureAncestor */:
                return i18nString(UIStrings.aFrameAncestorIsAnInsecure);
            case "InsecureScheme" /* Protocol.Page.SecureContextType.InsecureScheme */:
                return i18nString(UIStrings.theFramesSchemeIsInsecure);
        }
        return null;
    }
    async #maybeRenderCoopCoepCSPStatus() {
        if (this.#frame) {
            const model = this.#frame.resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager);
            const info = model && await model.getSecurityIsolationStatus(this.#frame.id);
            if (info) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
          ${this.#maybeRenderCrossOriginStatus(info.coep, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Embedder Policy (COEP)'), "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */)}
          ${this.#maybeRenderCrossOriginStatus(info.coop, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Opener Policy (COOP)'), "UnsafeNone" /* Protocol.Network.CrossOriginOpenerPolicyValue.UnsafeNone */)}
          ${this.#renderCSPSection(info.csp)}
        `;
            }
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #maybeRenderCrossOriginStatus(info, policyName, noneValue) {
        if (!info) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        const isEnabled = info.value !== noneValue;
        const isReportOnly = (!isEnabled && info.reportOnlyValue !== noneValue);
        const endpoint = isEnabled ? info.reportingEndpoint : info.reportOnlyReportingEndpoint;
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${policyName}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        ${isEnabled ? info.value : info.reportOnlyValue}
        ${isReportOnly ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-comment">report-only</span>` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
        ${endpoint ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-name">${i18nString(UIStrings.reportingTo)}</span>${endpoint}` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
    `;
    }
    #renderEffectiveDirectives(directives) {
        const parsedDirectives = new _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_8__.CspParser.CspParser(directives).csp.directives;
        const result = [];
        for (const directive in parsedDirectives) {
            result.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<div><span class="bold">${directive}</span>${': ' + parsedDirectives[directive]?.join(', ')}</div>`);
        }
        return result;
    }
    #renderSingleCSP(cspInfo) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${cspInfo.isEnforced ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy') :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy-Report-Only')}<${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}
          .iconName=${'help'}
          class='help-button'
          .variant=${"icon" /* Buttons.Button.Variant.ICON */}
          .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
          @click=${() => { window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only'; }}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.csp-report-only').track({ click: true })}
          ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName}>`}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        ${cspInfo.source === "HTTP" /* Protocol.Network.ContentSecurityPolicySource.HTTP */ ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('HTTP header') : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Meta tag')}
        ${this.#renderEffectiveDirectives(cspInfo.effectiveDirectives)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
    `;
        // clang-format on
    }
    #renderCSPSection(cspInfos) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
        ${i18nString(UIStrings.contentSecurityPolicy)}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
      ${(cspInfos && cspInfos.length) ? cspInfos.map(cspInfo => this.#renderSingleCSP(cspInfo)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy')}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
          ${i18nString(UIStrings.none)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      `}
    `;
        // clang-format on
    }
    #renderApiAvailabilitySection() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>${i18nString(UIStrings.apiAvailability)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
      <div class="span-cols">
        ${i18nString(UIStrings.availabilityOfCertainApisDepends)}
        <x-link href="https://web.dev/why-coop-coep/" class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.coop-coep').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
      </div>
      ${this.#renderSharedArrayBufferAvailability()}
      ${this.#renderMeasureMemoryAvailability()}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
    `;
    }
    #renderSharedArrayBufferAvailability() {
        if (this.#frame) {
            const features = this.#frame.getGatedAPIFeatures();
            if (features) {
                const sabAvailable = features.includes("SharedArrayBuffers" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffers */);
                const sabTransferAvailable = sabAvailable && features.includes("SharedArrayBuffersTransferAllowed" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffersTransferAllowed */);
                const availabilityText = sabTransferAvailable ?
                    i18nString(UIStrings.availableTransferable) :
                    (sabAvailable ? i18nString(UIStrings.availableNotTransferable) : i18nString(UIStrings.unavailable));
                const tooltipText = sabTransferAvailable ?
                    i18nString(UIStrings.sharedarraybufferConstructorIs) :
                    (sabAvailable ? i18nString(UIStrings.sharedarraybufferConstructorIsAvailable) : '');
                function renderHint(frame) {
                    switch (frame.getCrossOriginIsolatedContextType()) {
                        case "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */:
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
                        case "NotIsolated" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolated */:
                            if (sabAvailable) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-comment">${i18nString(UIStrings.willRequireCrossoriginIsolated)}</span>`;
                            }
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-comment">${i18nString(UIStrings.requiresCrossoriginIsolated)}</span>`;
                        case "NotIsolatedFeatureDisabled" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolatedFeatureDisabled */:
                            if (!sabTransferAvailable) {
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `<span class="inline-comment">${i18nString(UIStrings
                                    .transferRequiresCrossoriginIsolatedPermission)} <code>cross-origin-isolated</code></span>`;
                            }
                            break;
                    }
                    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
                }
                // SharedArrayBuffer is an API name, so we don't translate it.
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>SharedArrayBuffers</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName} title=${tooltipText}>
            ${availabilityText}\xA0${renderHint(this.#frame)}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        `;
            }
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #renderMeasureMemoryAvailability() {
        if (this.#frame) {
            const measureMemoryAvailable = this.#frame.isCrossOriginIsolated();
            const availabilityText = measureMemoryAvailable ? i18nString(UIStrings.available) : i18nString(UIStrings.unavailable);
            const tooltipText = measureMemoryAvailable ? i18nString(UIStrings.thePerformanceAPI) :
                i18nString(UIStrings.thePerformancemeasureuseragentspecificmemory);
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.measureMemory)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
          <span title=${tooltipText}>${availabilityText}</span>\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.monitor-memory-usage').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      `;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    #renderAdditionalInfoSection() {
        if (!this.#frame) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}
        title=${i18nString(UIStrings.thisAdditionalDebugging)}
      >${i18nString(UIStrings.additionalInformation)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>${i18nString(UIStrings.frameId)}</${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
        <div class="text-ellipsis" title=${this.#frame.id}>${this.#frame.id}</div>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}></${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName}>
    `;
    }
}
customElements.define('devtools-resources-frame-details-view', FrameDetailsReportView);
//# sourceMappingURL=FrameDetailsView.js.map

/***/ }),

/***/ "./panels/application/components/frameDetailsReportView.css.js":
/*!*********************************************************************!*\
  !*** ./panels/application/components/frameDetailsReportView.css.js ***!
  \*********************************************************************/
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

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

button ~ .text-ellipsis {
  padding-left: 2px;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
  padding: 0;
}

button.link {
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  height: 16px;
}

button.link:has(devtools-icon) {
  margin-top: 5px;
}

devtools-button.help-button {
  top: 4px;
  position: relative;
}

button.text-link {
  padding-left: 2px;
  height: 26px;
}

.inline-button {
  padding-left: 1ex;
}

.inline-comment {
  padding-left: 1ex;
  white-space: pre-line;
}

.inline-comment::before {
  content: "(";
}

.inline-comment::after {
  content: ")";
}

.inline-name {
  color: var(--sys-color-token-subtle);
  padding-right: 4px;
  user-select: none;
  white-space: pre-line;
}

.inline-items {
  display: flex;
}

.span-cols {
  grid-column-start: span 2;
  margin: 0 0 8px 30px;
  line-height: 28px;
}

.without-min-width {
  min-width: auto;
}

.bold {
  font-weight: bold;
}

.link:not(button):has(devtools-icon) {
  vertical-align: baseline;
  margin-inline-start: 3px;
}

.inline-icon {
  margin-bottom: -5px;
  width: 18px;
  height: 18px;
  vertical-align: baseline;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=frameDetailsReportView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./third_party/csp_evaluator/csp_evaluator.js":
/*!****************************************************!*\
  !*** ./third_party/csp_evaluator/csp_evaluator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspEvaluator: () => (/* reexport module object */ _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CspParser: () => (/* reexport module object */ _package_parser_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/evaluator.js */ "./third_party/csp_evaluator/package/evaluator.js");
/* harmony import */ var _package_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/parser.js */ "./third_party/csp_evaluator/package/parser.js");




//# sourceMappingURL=csp_evaluator.js.map

/***/ }),

/***/ "./third_party/csp_evaluator/package/parser.js":
/*!*****************************************************!*\
  !*** ./third_party/csp_evaluator/package/parser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CspParser: () => (/* binding */ CspParser),
/* harmony export */   TEST_ONLY: () => (/* binding */ TEST_ONLY)
/* harmony export */ });
/* harmony import */ var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp.js */ "./third_party/csp_evaluator/package/csp.js");
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
    csp;
    /**
     * @param unparsedCsp A Content Security Policy as string.
     */
    constructor(unparsedCsp) {
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
//# sourceMappingURL=parser.js.map

/***/ })

}]);