"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_components_BackForwardCacheView_js"],{

/***/ "./panels/application/components/BackForwardCacheView.js":
/*!***************************************************************!*\
  !*** ./panels/application/components/BackForwardCacheView.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackForwardCacheView: () => (/* binding */ BackForwardCacheView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */ var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackForwardCacheStrings.js */ "./panels/application/components/BackForwardCacheStrings.js");
/* harmony import */ var _backForwardCacheView_css_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backForwardCacheView.css.js */ "./panels/application/components/backForwardCacheView.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
















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
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
class BackForwardCacheView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.literal `devtools-resources-back-forward-cache-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #screenStatus = "Result" /* ScreenStatusType.Result */;
    #nextNodeId = 0;
    #historyIndex = 0;
    constructor() {
        super();
        this.#getMainResourceTreeModel()?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, this.render, this);
        this.#getMainResourceTreeModel()?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, this.render, this);
    }
    #getMainResourceTreeModel() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
        return mainTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel) || null;
    }
    #getMainFrame() {
        return this.#getMainResourceTreeModel()?.mainFrame || null;
    }
    connectedCallback() {
        this.parentElement?.classList.add('overflow-auto');
        this.#shadow.adoptedStyleSheets = [_backForwardCacheView_css_js__WEBPACK_IMPORTED_MODULE_15__["default"]];
    }
    async render() {
        await coordinator.write('BackForwardCacheView render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName} .data=${{ reportTitle: i18nString(UIStrings.backForwardCacheTitle) }} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('back-forward-cache')}>

          ${this.#renderMainFrameInformation()}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName}>
      `, this.#shadow, { host: this });
            // clang-format on
        });
    }
    #renderBackForwardCacheTestResult() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, this.#renderBackForwardCacheTestResult, this);
        this.#screenStatus = "Result" /* ScreenStatusType.Result */;
        void this.render();
    }
    async #onNavigatedAway() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, this.#onNavigatedAway, this);
        await this.#waitAndGoBackInHistory(50);
    }
    async #waitAndGoBackInHistory(delay) {
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
        if (historyResults.currentIndex === this.#historyIndex) {
            window.setTimeout(this.#waitAndGoBackInHistory.bind(this, delay * 2), delay);
        }
        else {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, this.#renderBackForwardCacheTestResult, this);
            resourceTreeModel.navigateToHistoryEntry(historyResults.entries[historyResults.currentIndex - 1]);
        }
    }
    async #navigateAwayAndBack() {
        // Checking BFCache Compatibility
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
        const resourceTreeModel = mainTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        const historyResults = await resourceTreeModel?.navigationHistory();
        if (!resourceTreeModel || !historyResults) {
            return;
        }
        this.#historyIndex = historyResults.currentIndex;
        this.#screenStatus = "Running" /* ScreenStatusType.Running */;
        void this.render();
        // This event listener is removed inside of onNavigatedAway().
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, this.#onNavigatedAway, this);
        // We can know whether the current page can use BFCache
        // as the browser navigates to another unrelated page and goes back to the current page.
        // We chose "chrome://terms" because it must be cross-site.
        // Ideally, We want to have our own testing page like "chrome: //bfcache-test".
        void resourceTreeModel.navigate('chrome://terms');
    }
    #renderMainFrameInformation() {
        const frame = this.#getMainFrame();
        if (!frame) {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
          ${i18nString(UIStrings.mainFrame)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName}>
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
          ${i18nString(UIStrings.unavailable)}
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName}>
      `;
            // clang-format on
        }
        const isTestRunning = (this.#screenStatus === "Running" /* ScreenStatusType.Running */);
        // Prevent running BFCache test on the DevTools window itself via DevTools on DevTools
        const isTestingForbidden = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(frame.url, 'devtools:');
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      ${this.#renderBackForwardCacheStatus(frame.backForwardCacheDetails.restoredFromCache)}
      <div class="report-line">
        <div class="report-key">
          ${i18nString(UIStrings.url)}
        </div>
        <div class="report-value" title=${frame.url}>
          ${frame.url}
        </div>
      </div>
      ${this.#maybeRenderFrameTree(frame.backForwardCacheDetails.explanationsTree)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}
          aria-label=${i18nString(UIStrings.runTest)}
          .disabled=${isTestRunning || isTestingForbidden}
          .spinner=${isTestRunning}
          .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
          @click=${this.#navigateAwayAndBack}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('back-forward-cache.run-test').track({ click: true })}>
          ${isTestRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
            ${i18nString(UIStrings.runningTest)}` : `
            ${i18nString(UIStrings.runTest)}
          `}
        </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionDivider.litTagName}>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionDivider.litTagName}>
      ${this.#maybeRenderExplanations(frame.backForwardCacheDetails.explanations, frame.backForwardCacheDetails.explanationsTree)}
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
        <x-link href="https://web.dev/bfcache/" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('learn-more.eligibility').track({ click: true })}>
          ${i18nString(UIStrings.learnMore)}
        </x-link>
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #maybeRenderFrameTree(explanationTree) {
        if (!explanationTree || (explanationTree.explanations.length === 0 && explanationTree.children.length === 0)) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
        }
        function treeNodeRenderer(node) {
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <div class="text-ellipsis">
          ${node.treeNodeData.iconName ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="inline-icon" style="margin-bottom: -3px;" .data=${{
                iconName: node.treeNodeData.iconName,
                color: 'var(--icon-default)',
                width: '20px',
                height: '20px',
            }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
          ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing}
          ${node.treeNodeData.text}
        </div>
      `;
            // clang-format on
        }
        const frameTreeData = this.#buildFrameTreeDataRecursive(explanationTree, { blankCount: 1 });
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
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      <div class="report-line"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.section('frames')}>
        <div class="report-key">
          ${i18nString(UIStrings.framesTitle)}
        </div>
        <div class="report-value">
          <${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutline.litTagName} .data=${{
            tree: [root],
            defaultRenderer: treeNodeRenderer,
            compact: true,
        }}>
          </${_ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutline.litTagName}>
        </div>
      </div>
    `;
        // clang-format on
    }
    // Builds a subtree of the frame tree, conaining only frames with BFCache issues and their ancestors.
    // Returns the root node, the number of frames in the subtree, and the number of issues in the subtree.
    #buildFrameTreeDataRecursive(explanationTree, nextBlankURLCount) {
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
            const child = { treeNodeData: { text: explanation.reason }, id: String(this.#nextNodeId++) };
            issueCount += 1;
            children.push(child);
        }
        for (const child of explanationTree.children) {
            const frameTreeData = this.#buildFrameTreeDataRecursive(child, nextBlankURLCount);
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
            id: String(this.#nextNodeId++),
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
    }
    #renderBackForwardCacheStatus(status) {
        switch (status) {
            case true:
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
            <div class="status">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="inline-icon" .data=${{
                    iconName: 'check-circle',
                    color: 'var(--icon-checkmark-green)',
                    width: '20px',
                    height: '20px',
                }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
            </div>
            ${i18nString(UIStrings.restoredFromBFCache)}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
        `;
            // clang-format on
            case false:
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
          <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
            <div class="status">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="inline-icon" .data=${{
                    iconName: 'clear',
                    color: 'var(--icon-default)',
                    width: '20px',
                    height: '20px',
                }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
            </div>
            ${i18nString(UIStrings.normalNavigation)}
          </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
        `;
            // clang-format on
        }
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
    <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
      ${i18nString(UIStrings.unknown)}
    </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
    `;
        // clang-format on
    }
    #buildReasonToFramesMap(explanationTree, nextBlankURLCount, outputMap) {
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
            this.#buildReasonToFramesMap(child, nextBlankURLCount, outputMap);
        });
    }
    #maybeRenderExplanations(explanations, explanationTree) {
        if (explanations.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
        }
        const pageSupportNeeded = explanations.filter(explanation => explanation.type === "PageSupportNeeded" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.PageSupportNeeded */);
        const supportPending = explanations.filter(explanation => explanation.type === "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */);
        const circumstantial = explanations.filter(explanation => explanation.type === "Circumstantial" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.Circumstantial */);
        const reasonToFramesMap = new Map();
        if (explanationTree) {
            this.#buildReasonToFramesMap(explanationTree, { blankCount: 1 }, reasonToFramesMap);
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      ${this.#renderExplanations(i18nString(UIStrings.pageSupportNeeded), i18nString(UIStrings.pageSupportNeededExplanation), pageSupportNeeded, reasonToFramesMap)}
      ${this.#renderExplanations(i18nString(UIStrings.supportPending), i18nString(UIStrings.supportPendingExplanation), supportPending, reasonToFramesMap)}
      ${this.#renderExplanations(i18nString(UIStrings.circumstantial), i18nString(UIStrings.circumstantialExplanation), circumstantial, reasonToFramesMap)}
    `;
        // clang-format on
    }
    #renderExplanations(category, explainerText, explanations, reasonToFramesMap) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      ${explanations.length > 0 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName}>
          ${category}
          <div class="help-outline-icon">
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="inline-icon" .data=${{
            iconName: 'help',
            color: 'var(--icon-default)',
            width: '16px',
            height: '16px',
        }} title=${explainerText}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
          </div>
        </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName}>
        ${explanations.map(explanation => this.#renderReason(explanation, reasonToFramesMap.get(explanation.reason)))}
      ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing}
    `;
        // clang-format on
    }
    #maybeRenderReasonContext(explanation) {
        if (explanation.reason ===
            "EmbedderExtensionSentMessageToCachedFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.EmbedderExtensionSentMessageToCachedFrame */ &&
            explanation.context) {
            const link = 'chrome://extensions/?id=' + explanation.context;
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `${i18nString(UIStrings.blockingExtensionId)}
      <${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__.ChromeLink.ChromeLink.litTagName} .href=${link}>${explanation.context}</${_ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__.ChromeLink.ChromeLink.litTagName}>`;
            // clang-format on
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    #renderFramesPerReason(frames) {
        if (frames === undefined || frames.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
        }
        const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `<div>${i18nString(UIStrings.framesPerIssue, { n: frames.length })}</div>`];
        rows.push(...frames.map(url => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `<div class="text-ellipsis" title=${url}
    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.treeItem()}>${url}</div>`));
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      <div class="details-list"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.tree('frames-per-issue')}>
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName} .data=${{
            rows,
            title: i18nString(UIStrings.framesPerIssue, { n: frames.length }),
        }}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.treeItem()}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName}>
      </div>
    `;
    }
    #maybeRenderDeepLinkToUnload(explanation) {
        if (explanation.reason === "UnloadHandlerExistsInMainFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInMainFrame */ ||
            explanation.reason === "UnloadHandlerExistsInSubFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInSubFrame */) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('learn-more.never-use-unload').track({
                click: true,
            })}>
          ${i18nString(UIStrings.neverUseUnload)}
        </x-link>`;
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    #maybeRenderJavaScriptDetails(details) {
        if (details === undefined || details.length === 0) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
        }
        const maxLengthForDisplayedURLs = 50;
        const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier(maxLengthForDisplayedURLs);
        const rows = [_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `<div>${i18nString(UIStrings.filesPerIssue, { n: details.length })}</div>`];
        rows.push(...details.map(detail => _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `${linkifier.linkifyScriptLocation(null, null, detail.url, detail.lineNumber, {
            columnNumber: detail.columnNumber,
            showColumnNumber: true,
            inlineFrameIndex: 0,
        })}`));
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      <div class="details-list">
        <${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName} .data=${{ rows }}></${_ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName}>
      </div>
    `;
    }
    #renderReason(explanation, frames) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
      <${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
        ${(explanation.reason in _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__.NotRestoredReasonDescription) ?
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `
            <div class="circled-exclamation-icon">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName} class="inline-icon" .data=${{
                iconName: 'warning',
                color: 'var(--icon-warning)',
                width: '16px',
                height: '16px',
            }}>
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
            </div>
            <div>
              ${_BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__.NotRestoredReasonDescription[explanation.reason].name()}
              ${this.#maybeRenderDeepLinkToUnload(explanation)}
              ${this.#maybeRenderReasonContext(explanation)}
           </div>` :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing}
      </${_ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName}>
      <div class="gray-text">
        ${explanation.reason}
      </div>
      ${this.#maybeRenderJavaScriptDetails(explanation.details)}
      ${this.#renderFramesPerReason(frames)}
    `;
        // clang-format on
    }
}
customElements.define('devtools-resources-back-forward-cache-view', BackForwardCacheView);
//# sourceMappingURL=BackForwardCacheView.js.map

/***/ }),

/***/ "./panels/application/components/backForwardCacheView.css.js":
/*!*******************************************************************!*\
  !*** ./panels/application/components/backForwardCacheView.css.js ***!
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.inline-icon {
  vertical-align: sub;
}

.gray-text {
  color: var(--sys-color-token-subtle);
  margin: 0 0 5px 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
  overflow-wrap: break-word;
  overflow: hidden;
}

.details-list {
  margin-left: 56px;
  grid-column-start: span 2;
}

.help-outline-icon {
  margin: 0 2px;
}

.circled-exclamation-icon {
  margin-right: 10px;
  flex-shrink: 0;
}

.status {
  margin-right: 11px;
  flex-shrink: 0;
}

.report-line {
  grid-column-start: span 2;
  display: flex;
  align-items: center;
  margin: 0 30px;
  line-height: 26px;
}

.report-key {
  color: var(--sys-color-token-subtle);
  min-width: auto;
  overflow-wrap: break-word;
  align-self: start;
}

.report-value {
  padding: 0 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link,
.devtools-link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

.tree-outline li .selection {
  margin-left: -5px;
}

@media (forced-colors: active) {
  .link,
  .devtools-link {
    color: linktext;
    text-decoration-color: linktext;
  }
}

/*# sourceURL=backForwardCacheView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/chrome_link/ChromeLink.js":
/*!*************************************************!*\
  !*** ./ui/components/chrome_link/ChromeLink.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* binding */ ChromeLink)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chromeLink.css.js */ "./ui/components/chrome_link/chromeLink.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








// Use this component to render links to 'chrome://...'-URLs
// (for which regular <x-link>s do not work).
class ChromeLink extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-chrome-link`;
    #shadow = this.attachShadow({ mode: 'open' });
    #boundRender = this.#render.bind(this);
    #href = '';
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_chromeLink_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    set href(href) {
        if (!_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(href, 'chrome:')) {
            throw new Error('ChromeLink href needs to start with \'chrome://\'');
        }
        this.#href = href;
        void _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#boundRender);
    }
    // Navigating to a chrome:// link via a normal anchor doesn't work, so we "navigate"
    // there using CDP.
    #handleClick(event) {
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
        if (rootTarget === null) {
            return;
        }
        const url = this.#href;
        void rootTarget.targetAgent().invoke_createTarget({ url }).then(result => {
            if (result.getError()) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
            }
        });
        event.consume(true);
    }
    #render() {
        const urlForContext = new URL(this.#href);
        urlForContext.search = '';
        const jslogContext = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(urlForContext.toString());
        // clang-format off
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(
        /* x-link doesn't work with custom click/keydown handlers */
        /* eslint-disable rulesdir/ban_a_tags_in_lit_html */
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <a href=${this.#href} class="link" target="_blank"
          jslog=${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link().track({ click: true }).context(jslogContext)}
          @click=${this.#handleClick}><slot></slot></a>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-chrome-link', ChromeLink);
//# sourceMappingURL=ChromeLink.js.map

/***/ }),

/***/ "./ui/components/chrome_link/chromeLink.css.js":
/*!*****************************************************!*\
  !*** ./ui/components/chrome_link/chromeLink.css.js ***!
  \*****************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.link {
  color: var(--sys-color-primary);
  text-decoration: underline;
  cursor: pointer;
  outline-offset: 2px;
}

/*# sourceURL=chromeLink.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/chrome_link/chrome_link.js":
/*!**************************************************!*\
  !*** ./ui/components/chrome_link/chrome_link.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLink: () => (/* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=chrome_link.js.map

/***/ })

}]);