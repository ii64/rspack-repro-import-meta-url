"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_components_BackForwardCacheView_ts"],{

/***/ "./src/panels/application/components/BackForwardCacheView.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/application/components/BackForwardCacheView.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackForwardCacheView: () => (/* binding */ BackForwardCacheView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./src/ui/components/chrome_link/chrome_link.ts");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./src/ui/components/expandable_list/expandable_list.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./src/ui/components/report_view/report_view.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BackForwardCacheStrings.js */ "./src/panels/application/components/BackForwardCacheStrings.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './backForwardCacheView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _BackForwardCacheView_instances, _BackForwardCacheView_shadow, _BackForwardCacheView_screenStatus, _BackForwardCacheView_nextNodeId, _BackForwardCacheView_historyIndex, _BackForwardCacheView_getMainResourceTreeModel, _BackForwardCacheView_getMainFrame, _BackForwardCacheView_renderBackForwardCacheTestResult, _BackForwardCacheView_onNavigatedAway, _BackForwardCacheView_waitAndGoBackInHistory, _BackForwardCacheView_navigateAwayAndBack, _BackForwardCacheView_renderMainFrameInformation, _BackForwardCacheView_maybeRenderFrameTree, _BackForwardCacheView_buildFrameTreeDataRecursive, _BackForwardCacheView_renderBackForwardCacheStatus, _BackForwardCacheView_buildReasonToFramesMap, _BackForwardCacheView_maybeRenderExplanations, _BackForwardCacheView_renderExplanations, _BackForwardCacheView_maybeRenderReasonContext, _BackForwardCacheView_renderFramesPerReason, _BackForwardCacheView_maybeRenderDeepLinkToUnload, _BackForwardCacheView_maybeRenderJavaScriptDetails, _BackForwardCacheView_renderReason;

















const UIStrings = {
    /**
     * @description Title text in back/forward cache view of the Application panel
     */
    mainFrame: 'Main Frame',
    /**
     * @description Title text in back/forward cache view of the Application panel
     */
    backForwardCacheTitle: 'Back/forward cache',
    /**
     * @description Status text for the status of the main frame
     */
    unavailable: 'unavailable',
    /**
     * @description Entry name text in the back/forward cache view of the Application panel
     */
    url: 'URL:',
    /**
     * @description Status text for the status of the back/forward cache status
     */
    unknown: 'Unknown Status',
    /**
     * @description Status text for the status of the back/forward cache status indicating that
     * the back/forward cache was not used and a normal navigation occured instead.
     */
    normalNavigation: 'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
    /**
     * @description Status text for the status of the back/forward cache status indicating that
     * the back/forward cache was used to restore the page instead of reloading it.
     */
    restoredFromBFCache: 'Successfully served from back/forward cache.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are actionable i.e. they can be cleaned up to make the
     * page eligible for back/forward cache.
     */
    pageSupportNeeded: 'Actionable',
    /**
     * @description Explanation for actionable items which prevent the page from being eligible
     * for back/forward cache.
     */
    pageSupportNeededExplanation: 'These reasons are actionable i.e. they can be cleaned up to make the page eligible for back/forward cache.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are circumstantial / not actionable i.e. they cannot be
     * cleaned up by developers to make the page eligible for back/forward cache.
     */
    circumstantial: 'Not Actionable',
    /**
     * @description Explanation for circumstantial/non-actionable items which prevent the page from being eligible
     * for back/forward cache.
     */
    circumstantialExplanation: 'These reasons are not actionable i.e. caching was prevented by something outside of the direct control of the page.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are pending support by chrome i.e. in a future version
     * of chrome they will not prevent back/forward cache usage anymore.
     */
    supportPending: 'Pending Support',
    /**
     * @description Label for the button to test whether BFCache is available for the page
     */
    runTest: 'Test back/forward cache',
    /**
     * @description Label for the disabled button while the test is running
     */
    runningTest: 'Running test',
    /**
     * @description Link Text about explanation of back/forward cache
     */
    learnMore: 'Learn more: back/forward cache eligibility',
    /**
     * @description Link Text about unload handler
     */
    neverUseUnload: 'Learn more: Never use unload handler',
    /**
     * @description Explanation for 'pending support' items which prevent the page from being eligible
     * for back/forward cache.
     */
    supportPendingExplanation: 'Chrome support for these reasons is pending i.e. they will not prevent the page from being eligible for back/forward cache in a future version of Chrome.',
    /**
     * @description Text that precedes displaying a link to the extension which blocked the page from being eligible for back/forward cache.
     */
    blockingExtensionId: 'Extension id: ',
    /**
     * @description Label for the 'Frames' section of the back/forward cache view, which shows a frame tree of the
     * page with reasons why the frames can't be cached.
     */
    framesTitle: 'Frames',
    /**
     * @description Top level summary of the total number of issues found in a single frame.
     */
    issuesInSingleFrame: '{n, plural, =1 {# issue found in 1 frame.} other {# issues found in 1 frame.}}',
    /**
     * @description Top level summary of the total number of issues found and the number of frames they were found in.
     * 'm' is never less than 2.
     * @example {3} m
     */
    issuesInMultipleFrames: '{n, plural, =1 {# issue found in {m} frames.} other {# issues found in {m} frames.}}',
    /**
     * @description Shows the number of frames with a particular issue.
     */
    framesPerIssue: '{n, plural, =1 {# frame} other {# frames}}',
    /**
     *@description Title for a frame in the frame tree that doesn't have a URL. Placeholder indicates which number frame with a blank URL it is.
     *@example {3} PH1
     */
    blankURLTitle: 'Blank URL [{PH1}]',
    /**
     * @description Shows the number of files with a particular issue.
     */
    filesPerIssue: '{n, plural, =1 {# file} other {# files}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/BackForwardCacheView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ScreenStatusType;
(function (ScreenStatusType) {
    ScreenStatusType["Running"] = "Running";
    ScreenStatusType["Result"] = "Result";
})(ScreenStatusType || (ScreenStatusType = {}));
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__.RenderCoordinator.RenderCoordinator.instance();
class BackForwardCacheView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.WrappableComponent {
    constructor() {
        super();
        _BackForwardCacheView_instances.add(this);
        _BackForwardCacheView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _BackForwardCacheView_screenStatus.set(this, ScreenStatusType.Result);
        _BackForwardCacheView_nextNodeId.set(this, 0);
        _BackForwardCacheView_historyIndex.set(this, 0);
        __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_getMainResourceTreeModel).call(this)?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, this.render, this);
        __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_getMainResourceTreeModel).call(this)?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, this.render, this);
    }
    connectedCallback() {
        this.parentElement?.classList.add('overflow-auto');
        __classPrivateFieldGet(this, _BackForwardCacheView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './backForwardCacheView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    async render() {
        await coordinator.write('BackForwardCacheView render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.Report.litTagName} .data=${{ reportTitle: i18nString(UIStrings.backForwardCacheTitle) }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.pane('back-forward-cache')}>

          ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderMainFrameInformation).call(this)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.Report.litTagName}>
      `, __classPrivateFieldGet(this, _BackForwardCacheView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
}
_BackForwardCacheView_shadow = new WeakMap(), _BackForwardCacheView_screenStatus = new WeakMap(), _BackForwardCacheView_nextNodeId = new WeakMap(), _BackForwardCacheView_historyIndex = new WeakMap(), _BackForwardCacheView_instances = new WeakSet(), _BackForwardCacheView_getMainResourceTreeModel = function _BackForwardCacheView_getMainResourceTreeModel() {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
    return mainTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel) || null;
}, _BackForwardCacheView_getMainFrame = function _BackForwardCacheView_getMainFrame() {
    return __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_getMainResourceTreeModel).call(this)?.mainFrame || null;
}, _BackForwardCacheView_renderBackForwardCacheTestResult = function _BackForwardCacheView_renderBackForwardCacheTestResult() {
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderBackForwardCacheTestResult), this);
    __classPrivateFieldSet(this, _BackForwardCacheView_screenStatus, ScreenStatusType.Result, "f");
    void this.render();
}, _BackForwardCacheView_onNavigatedAway = async function _BackForwardCacheView_onNavigatedAway() {
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_onNavigatedAway), this);
    await __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_waitAndGoBackInHistory).call(this, 50);
}, _BackForwardCacheView_waitAndGoBackInHistory = async function _BackForwardCacheView_waitAndGoBackInHistory(delay) {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
    const resourceTreeModel = mainTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
    const historyResults = await resourceTreeModel?.navigationHistory();
    if (!resourceTreeModel || !historyResults) {
        return;
    }
    // The navigation history can be delayed. If this is the case we wait and
    // check again later. Otherwise it would be possible to press the 'Test
    // BFCache' button again too soon, leading to the browser stepping back in
    // history without returning to the correct page.
    if (historyResults.currentIndex === __classPrivateFieldGet(this, _BackForwardCacheView_historyIndex, "f")) {
        window.setTimeout(__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_waitAndGoBackInHistory).bind(this, delay * 2), delay);
    }
    else {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderBackForwardCacheTestResult), this);
        resourceTreeModel.navigateToHistoryEntry(historyResults.entries[historyResults.currentIndex - 1]);
    }
}, _BackForwardCacheView_navigateAwayAndBack = async function _BackForwardCacheView_navigateAwayAndBack() {
    // Checking BFCache Compatibility
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
    const resourceTreeModel = mainTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
    const historyResults = await resourceTreeModel?.navigationHistory();
    if (!resourceTreeModel || !historyResults) {
        return;
    }
    __classPrivateFieldSet(this, _BackForwardCacheView_historyIndex, historyResults.currentIndex, "f");
    __classPrivateFieldSet(this, _BackForwardCacheView_screenStatus, ScreenStatusType.Running, "f");
    void this.render();
    // This event listener is removed inside of onNavigatedAway().
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_onNavigatedAway), this);
    // We can know whether the current page can use BFCache
    // as the browser navigates to another unrelated page and goes back to the current page.
    // We chose "chrome://terms" because it must be cross-site.
    // Ideally, We want to have our own testing page like "chrome: //bfcache-test".
    void resourceTreeModel.navigate('chrome://terms');
}, _BackForwardCacheView_renderMainFrameInformation = function _BackForwardCacheView_renderMainFrameInformation() {
    const frame = __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_getMainFrame).call(this);
    if (!frame) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportKey.litTagName}>
          ${i18nString(UIStrings.mainFrame)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportValue.litTagName}>
          ${i18nString(UIStrings.unavailable)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportValue.litTagName}>
      `;
        // clang-format on
    }
    const isTestRunning = (__classPrivateFieldGet(this, _BackForwardCacheView_screenStatus, "f") === ScreenStatusType.Running);
    // Prevent running BFCache test on the DevTools window itself via DevTools on DevTools
    const isTestingForbidden = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(frame.url, 'devtools:');
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderBackForwardCacheStatus).call(this, frame.backForwardCacheDetails.restoredFromCache)}
      <div class="report-line">
        <div class="report-key">
          ${i18nString(UIStrings.url)}
        </div>
        <div class="report-value" title=${frame.url}>
          ${frame.url}
        </div>
      </div>
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_maybeRenderFrameTree).call(this, frame.backForwardCacheDetails.explanationsTree)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.runTest)}
          .disabled=${isTestRunning || isTestingForbidden}
          .spinner=${isTestRunning}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.PRIMARY}
          @click=${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_navigateAwayAndBack)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('back-forward-cache.run-test').track({ click: true })}>
          ${isTestRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            ${i18nString(UIStrings.runningTest)}` : `
            ${i18nString(UIStrings.runTest)}
          `}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSectionDivider.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSectionDivider.litTagName}>
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_maybeRenderExplanations).call(this, frame.backForwardCacheDetails.explanations, frame.backForwardCacheDetails.explanationsTree)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
        <x-link href="https://web.dev/bfcache/" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('learn-more.eligibility').track({ click: true })}>
          ${i18nString(UIStrings.learnMore)}
        </x-link>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
    `;
    // clang-format on
}, _BackForwardCacheView_maybeRenderFrameTree = function _BackForwardCacheView_maybeRenderFrameTree(explanationTree) {
    if (!explanationTree || (explanationTree.explanations.length === 0 && explanationTree.children.length === 0)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
    }
    function treeNodeRenderer(node) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <div class="text-ellipsis">
          ${node.treeNodeData.iconName ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" style="margin-bottom: -3px;" .data=${{
            iconName: node.treeNodeData.iconName,
            color: 'var(--icon-default)',
            width: '20px',
            height: '20px',
        }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
          ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing}
          ${node.treeNodeData.text}
        </div>
      `;
        // clang-format on
    }
    const frameTreeData = __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_buildFrameTreeDataRecursive).call(this, explanationTree, { blankCount: 1 });
    // Override the icon for the outermost frame.
    frameTreeData.node.treeNodeData.iconName = 'frame';
    let title = '';
    // The translation pipeline does not support nested plurals. We avoid this
    // here by pulling out the logic for one of the plurals into code instead.
    if (frameTreeData.frameCount === 1) {
        title = i18nString(UIStrings.issuesInSingleFrame, { n: frameTreeData.issueCount });
    }
    else {
        title = i18nString(UIStrings.issuesInMultipleFrames, { n: frameTreeData.issueCount, m: frameTreeData.frameCount });
    }
    const root = {
        treeNodeData: {
            text: title,
        },
        id: 'root',
        children: () => Promise.resolve([frameTreeData.node]),
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="report-line"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.section('frames')}>
        <div class="report-key">
          ${i18nString(UIStrings.framesTitle)}
        </div>
        <div class="report-value">
          <${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeOutline.litTagName} .data=${{
        tree: [root],
        defaultRenderer: treeNodeRenderer,
        compact: true,
    }}>
          </${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeOutline.litTagName}>
        </div>
      </div>
    `;
    // clang-format on
}, _BackForwardCacheView_buildFrameTreeDataRecursive = function _BackForwardCacheView_buildFrameTreeDataRecursive(explanationTree, nextBlankURLCount) {
    var _a, _b, _c, _d;
    let frameCount = 1;
    let issueCount = 0;
    const children = [];
    let nodeUrlText = '';
    if (explanationTree.url.length) {
        nodeUrlText = explanationTree.url;
    }
    else {
        nodeUrlText = i18nString(UIStrings.blankURLTitle, { PH1: nextBlankURLCount.blankCount });
        nextBlankURLCount.blankCount += 1;
    }
    for (const explanation of explanationTree.explanations) {
        const child = { treeNodeData: { text: explanation.reason }, id: String((__classPrivateFieldSet(this, _BackForwardCacheView_nextNodeId, (_b = __classPrivateFieldGet(this, _BackForwardCacheView_nextNodeId, "f"), _a = _b++, _b), "f"), _a)) };
        issueCount += 1;
        children.push(child);
    }
    for (const child of explanationTree.children) {
        const frameTreeData = __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_buildFrameTreeDataRecursive).call(this, child, nextBlankURLCount);
        if (frameTreeData.issueCount > 0) {
            children.push(frameTreeData.node);
            issueCount += frameTreeData.issueCount;
            frameCount += frameTreeData.frameCount;
        }
    }
    let node = {
        treeNodeData: {
            text: `(${issueCount}) ${nodeUrlText}`,
        },
        id: String((__classPrivateFieldSet(this, _BackForwardCacheView_nextNodeId, (_d = __classPrivateFieldGet(this, _BackForwardCacheView_nextNodeId, "f"), _c = _d++, _d), "f"), _c)),
    };
    if (children.length) {
        node = {
            ...node,
            children: () => Promise.resolve(children),
        };
        node.treeNodeData.iconName = 'iframe';
    }
    else if (!explanationTree.url.length) {
        // If the current node increased the blank count, but it has no children and
        // is therefore not shown, decrement the blank count again.
        nextBlankURLCount.blankCount -= 1;
    }
    return { node, frameCount, issueCount };
}, _BackForwardCacheView_renderBackForwardCacheStatus = function _BackForwardCacheView_renderBackForwardCacheStatus(status) {
    switch (status) {
        case true:
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
            <div class="status">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
                iconName: 'check-circle',
                color: 'var(--icon-checkmark-green)',
                width: '20px',
                height: '20px',
            }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
            </div>
            ${i18nString(UIStrings.restoredFromBFCache)}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
        `;
        // clang-format on
        case false:
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
            <div class="status">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
                iconName: 'clear',
                color: 'var(--icon-default)',
                width: '20px',
                height: '20px',
            }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
            </div>
            ${i18nString(UIStrings.normalNavigation)}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
        `;
        // clang-format on
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
      ${i18nString(UIStrings.unknown)}
    </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
    `;
    // clang-format on
}, _BackForwardCacheView_buildReasonToFramesMap = function _BackForwardCacheView_buildReasonToFramesMap(explanationTree, nextBlankURLCount, outputMap) {
    let url = explanationTree.url;
    if (url.length === 0) {
        url = i18nString(UIStrings.blankURLTitle, { PH1: nextBlankURLCount.blankCount });
        nextBlankURLCount.blankCount += 1;
    }
    explanationTree.explanations.forEach(explanation => {
        let frames = outputMap.get(explanation.reason);
        if (frames === undefined) {
            frames = [url];
            outputMap.set(explanation.reason, frames);
        }
        else {
            frames.push(url);
        }
    });
    explanationTree.children.map(child => {
        __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_buildReasonToFramesMap).call(this, child, nextBlankURLCount, outputMap);
    });
}, _BackForwardCacheView_maybeRenderExplanations = function _BackForwardCacheView_maybeRenderExplanations(explanations, explanationTree) {
    if (explanations.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
    }
    const pageSupportNeeded = explanations.filter(explanation => explanation.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReasonType.PageSupportNeeded);
    const supportPending = explanations.filter(explanation => explanation.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReasonType.SupportPending);
    const circumstantial = explanations.filter(explanation => explanation.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReasonType.Circumstantial);
    const reasonToFramesMap = new Map();
    if (explanationTree) {
        __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_buildReasonToFramesMap).call(this, explanationTree, { blankCount: 1 }, reasonToFramesMap);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderExplanations).call(this, i18nString(UIStrings.pageSupportNeeded), i18nString(UIStrings.pageSupportNeededExplanation), pageSupportNeeded, reasonToFramesMap)}
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderExplanations).call(this, i18nString(UIStrings.supportPending), i18nString(UIStrings.supportPendingExplanation), supportPending, reasonToFramesMap)}
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderExplanations).call(this, i18nString(UIStrings.circumstantial), i18nString(UIStrings.circumstantialExplanation), circumstantial, reasonToFramesMap)}
    `;
    // clang-format on
}, _BackForwardCacheView_renderExplanations = function _BackForwardCacheView_renderExplanations(category, explainerText, explanations, reasonToFramesMap) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      ${explanations.length > 0 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSectionHeader.litTagName}>
          ${category}
          <div class="help-outline-icon">
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
        iconName: 'help',
        color: 'var(--icon-default)',
        width: '16px',
        height: '16px',
    }} title=${explainerText}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
          </div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSectionHeader.litTagName}>
        ${explanations.map(explanation => __classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderReason).call(this, explanation, reasonToFramesMap.get(explanation.reason)))}
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing}
    `;
    // clang-format on
}, _BackForwardCacheView_maybeRenderReasonContext = function _BackForwardCacheView_maybeRenderReasonContext(explanation) {
    if (explanation.reason ===
        _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReason.EmbedderExtensionSentMessageToCachedFrame &&
        explanation.context) {
        const link = 'chrome://extensions/?id=' + explanation.context;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `${i18nString(UIStrings.blockingExtensionId)}
      <${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName} .href=${link}>${explanation.context}</${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName}>`;
        // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
}, _BackForwardCacheView_renderFramesPerReason = function _BackForwardCacheView_renderFramesPerReason(frames) {
    if (frames === undefined || frames.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
    }
    const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${i18nString(UIStrings.framesPerIssue, { n: frames.length })}</div>`];
    rows.push(...frames.map(url => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div class="text-ellipsis" title=${url}
    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.treeItem()}>${url}</div>`));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="details-list"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.tree('frames-per-issue')}>
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList.litTagName} .data=${{
        rows,
        title: i18nString(UIStrings.framesPerIssue, { n: frames.length }),
    }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.treeItem()}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList.litTagName}>
      </div>
    `;
}, _BackForwardCacheView_maybeRenderDeepLinkToUnload = function _BackForwardCacheView_maybeRenderDeepLinkToUnload(explanation) {
    if (explanation.reason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInMainFrame ||
        explanation.reason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInSubFrame) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('learn-more.never-use-unload').track({
            click: true,
        })}>
          ${i18nString(UIStrings.neverUseUnload)}
        </x-link>`;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
}, _BackForwardCacheView_maybeRenderJavaScriptDetails = function _BackForwardCacheView_maybeRenderJavaScriptDetails(details) {
    if (details === undefined || details.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing;
    }
    const maxLengthForDisplayedURLs = 50;
    const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier(maxLengthForDisplayedURLs);
    const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `<div>${i18nString(UIStrings.filesPerIssue, { n: details.length })}</div>`];
    rows.push(...details.map(detail => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `${linkifier.linkifyScriptLocation(null, null, detail.url, detail.lineNumber, {
        columnNumber: detail.columnNumber,
        showColumnNumber: true,
        inlineFrameIndex: 0,
    })}`));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <div class="details-list">
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList.litTagName} .data=${{ rows }}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList.litTagName}>
      </div>
    `;
}, _BackForwardCacheView_renderReason = function _BackForwardCacheView_renderReason(explanation, frames) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
        ${(explanation.reason in _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_15__.NotRestoredReasonDescription) ?
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html `
            <div class="circled-exclamation-icon">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName} class="inline-icon" .data=${{
            iconName: 'warning',
            color: 'var(--icon-warning)',
            width: '16px',
            height: '16px',
        }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon.litTagName}>
            </div>
            <div>
              ${_BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_15__.NotRestoredReasonDescription[explanation.reason].name()}
              ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_maybeRenderDeepLinkToUnload).call(this, explanation)}
              ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_maybeRenderReasonContext).call(this, explanation)}
           </div>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.nothing}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportSection.litTagName}>
      <div class="gray-text">
        ${explanation.reason}
      </div>
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_maybeRenderJavaScriptDetails).call(this, explanation.details)}
      ${__classPrivateFieldGet(this, _BackForwardCacheView_instances, "m", _BackForwardCacheView_renderFramesPerReason).call(this, frames)}
    `;
    // clang-format on
};
Object.defineProperty(BackForwardCacheView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.literal `devtools-resources-back-forward-cache-view`
});
customElements.define('devtools-resources-back-forward-cache-view', BackForwardCacheView);


/***/ }),

/***/ "./src/ui/components/chrome_link/ChromeLink.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/chrome_link/ChromeLink.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _ChromeLink_instances, _ChromeLink_shadow, _ChromeLink_boundRender, _ChromeLink_href, _ChromeLink_handleClick, _ChromeLink_render;








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    constructor() {
        super(...arguments);
        _ChromeLink_instances.add(this);
        _ChromeLink_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ChromeLink_boundRender.set(this, __classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_render).bind(this));
        _ChromeLink_href.set(this, '');
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ChromeLink_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './chromeLink.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        __classPrivateFieldSet(this, _ChromeLink_href, href, "f");
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ChromeLink_boundRender, "f"));
    }
}
_ChromeLink_shadow = new WeakMap(), _ChromeLink_boundRender = new WeakMap(), _ChromeLink_href = new WeakMap(), _ChromeLink_instances = new WeakSet(), _ChromeLink_handleClick = function _ChromeLink_handleClick(event) {
    const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
    if (rootTarget === null) {
        return;
    }
    const url = __classPrivateFieldGet(this, _ChromeLink_href, "f");
    void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
        if (result.getError()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
        }
    });
    event.consume(true);
}, _ChromeLink_render = function _ChromeLink_render() {
    const urlForContext = new URL(__classPrivateFieldGet(this, _ChromeLink_href, "f"));
    urlForContext.search = '';
    const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
    /* x-link doesn't work with custom click/keydown handlers */
    /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${__classPrivateFieldGet(this, _ChromeLink_href, "f")} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${__classPrivateFieldGet(this, _ChromeLink_instances, "m", _ChromeLink_handleClick)}><slot></slot></a>
      `, __classPrivateFieldGet(this, _ChromeLink_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ChromeLink, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`
});
customElements.define('devtools-chrome-link', ChromeLink);


/***/ }),

/***/ "./src/ui/components/chrome_link/chrome_link.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/chrome_link/chrome_link.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./src/ui/components/chrome_link/ChromeLink.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);