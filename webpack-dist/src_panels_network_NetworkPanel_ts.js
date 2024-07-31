"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_NetworkPanel_ts"],{

/***/ "./src/panels/network/NetworkPanel.ts":
/*!********************************************!*\
  !*** ./src/panels/network/NetworkPanel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   FilmStripRecorder: () => (/* binding */ FilmStripRecorder),
/* harmony export */   NetworkLogWithFilterRevealer: () => (/* binding */ NetworkLogWithFilterRevealer),
/* harmony export */   NetworkPanel: () => (/* binding */ NetworkPanel),
/* harmony export */   RequestIdRevealer: () => (/* binding */ RequestIdRevealer),
/* harmony export */   RequestLocationRevealer: () => (/* binding */ RequestLocationRevealer),
/* harmony export */   RequestRevealer: () => (/* binding */ RequestRevealer),
/* harmony export */   SearchNetworkView: () => (/* binding */ SearchNetworkView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./src/panels/mobile_throttling/mobile_throttling.ts");
/* harmony import */ var _search_search_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../search/search.js */ "./src/panels/search/search.ts");
/* harmony import */ var _timeline_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../timeline/utils/utils.js */ "./src/panels/timeline/utils/utils.ts");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./src/panels/network/NetworkDataGridNode.ts");
/* harmony import */ var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NetworkItemView.js */ "./src/panels/network/NetworkItemView.ts");
/* harmony import */ var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NetworkLogView.js */ "./src/panels/network/NetworkLogView.ts");
/* harmony import */ var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NetworkOverview.js */ "./src/panels/network/NetworkOverview.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './networkPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./src/panels/network/NetworkSearchScope.ts");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./src/panels/network/NetworkTimeCalculator.ts");
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
var _FilmStripRecorder_traceEngine, _FilmStripRecorder_collectedTraceEvents;
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */






















const UIStrings = {
    /**
     *@description Text to close something
     */
    close: 'Close',
    /**
     *@description Title of a search bar or tool
     */
    search: 'Search',
    /**
     *@description Tooltip text that appears on the setting to preserve log when hovering over the item
     */
    doNotClearLogOnPageReload: 'Do not clear log on page reload / navigation',
    /**
     *@description Text to preserve the log after refreshing
     */
    preserveLog: 'Preserve log',
    /**
     *@description Text to disable cache while DevTools is open
     */
    disableCacheWhileDevtoolsIsOpen: 'Disable cache (while DevTools is open)',
    /**
     *@description Text in Network Config View of the Network panel
     */
    disableCache: 'Disable cache',
    /**
     *@description Tooltip text that appears when hovering over the largeicon settings gear in show settings pane setting in network panel of the network panel
     */
    networkSettings: 'Network settings',
    /**
     *@description Tooltip for expanding network request row setting
     */
    showMoreInformationInRequestRows: 'Show more information in request rows',
    /**
     *@description Text in Network Panel of the Network panel
     */
    useLargeRequestRows: 'Big request rows',
    /**
     *@description Tooltip text for network request overview setting
     */
    showOverviewOfNetworkRequests: 'Show overview of network requests',
    /**
     *@description Text in Network Panel of the Network panel
     */
    showOverview: 'Overview',
    /**
     *@description Tooltip for group by frame network setting
     */
    groupRequestsByTopLevelRequest: 'Group requests by top level request frame',
    /**
     *@description Text in Network Panel of the Network panel
     */
    groupByFrame: 'Group by frame',
    /**
     *@description Tooltip for capture screenshot network setting
     */
    captureScreenshotsWhenLoadingA: 'Capture screenshots when loading a page',
    /**
     *@description Text to take screenshots
     */
    captureScreenshots: 'Screenshots',
    /**
     * @description Tooltip text that appears when hovering over the largeicon load button in the
     * Network Panel. This action prompts the user to select a HAR file to upload to DevTools.
     */
    importHarFile: 'Import `HAR` file...',
    /**
     * @description Tooltip text that appears when hovering over the largeicon download button in the
     * Network Panel. HAR is a file format (HTTP Archive) and should not be translated. This action
     * triggers the download of a HAR file.
     */
    exportHar: 'Export `HAR`...',
    /**
     *@description Text for throttling the network
     */
    throttling: 'Throttling',
    /**
     *@description Text in Network Panel of the Network panel
     *@example {Ctrl + R} PH1
     */
    hitSToReloadAndCaptureFilmstrip: 'Hit {PH1} to reload and capture filmstrip.',
    /**
     *@description A context menu item in the Network Panel of the Network panel
     */
    revealInNetworkPanel: 'Reveal in Network panel',
    /**
     *@description Text in Network Panel of the Network panel
     */
    recordingFrames: 'Recording frames...',
    /**
     *@description Text in Network Panel of the Network panel
     */
    fetchingFrames: 'Fetching frames...',
    /**
     * @description Text of a button in the Network panel's toolbar that open Network Conditions panel in the drawer.
     */
    moreNetworkConditions: 'More network conditions…',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/NetworkPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let networkPanelInstance;
class NetworkPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Panel.Panel {
    constructor(displayScreenshotDelay) {
        super('network');
        Object.defineProperty(this, "networkLogShowOverviewSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkLogLargeRowsSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkRecordFilmStripSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleRecordAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingStopTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkItemView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filmStripView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filmStripRecorder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentRequest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "panelToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rightToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "settingsPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showSettingsPaneSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filmStripPlaceholderElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkOverview", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewPlaceholderElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "calculator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "splitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarLocation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "progressBarContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "networkLogView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fileSelectorElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "detailsWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "closeButtonElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "preserveLogSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "recordLogSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "throttlingSelect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "displayScreenshotDelay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.displayScreenshotDelay = displayScreenshotDelay;
        this.networkLogShowOverviewSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-show-overview', true);
        this.networkLogLargeRowsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-large-rows', false);
        this.networkRecordFilmStripSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-record-film-strip-setting', false);
        this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.toggle-recording');
        this.networkItemView = null;
        this.filmStripView = null;
        this.filmStripRecorder = null;
        this.currentRequest = null;
        const panel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox();
        const networkToolbarContainer = panel.contentElement.createChild('div', 'network-toolbar-container');
        this.panelToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', networkToolbarContainer);
        this.panelToolbar.makeWrappable(true);
        this.panelToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toolbar('network-main')}`);
        this.rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', networkToolbarContainer);
        this.filterBar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.FilterBar.FilterBar('network-panel', true);
        this.filterBar.show(panel.contentElement);
        this.filterBar.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.FilterBar.FilterBarEvents.Changed, this.handleFilterChanged.bind(this));
        this.settingsPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.HBox();
        this.settingsPane.element.classList.add('network-settings-pane');
        this.settingsPane.show(panel.contentElement);
        this.showSettingsPaneSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-settings-toolbar', false);
        this.showSettingsPaneSetting.addChangeListener(this.updateSettingsPaneVisibility.bind(this));
        this.updateSettingsPaneVisibility();
        this.filmStripPlaceholderElement = panel.contentElement.createChild('div', 'network-film-strip-placeholder');
        // Create top overview component.
        this.overviewPane = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.TimelineOverviewPane.TimelineOverviewPane('network');
        this.overviewPane.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.TimelineOverviewPane.Events.OverviewPaneWindowChanged, this.onWindowChanged.bind(this));
        this.overviewPane.element.id = 'network-overview-panel';
        this.networkOverview = new _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_18__.NetworkOverview();
        this.overviewPane.setOverviewControls([this.networkOverview]);
        this.overviewPlaceholderElement = panel.contentElement.createChild('div');
        this.calculator = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_21__.NetworkTransferTimeCalculator();
        this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.SplitWidget(true, false, 'network-panel-split-view-state');
        this.splitWidget.hideMain();
        this.splitWidget.show(panel.contentElement);
        panel.setDefaultFocusedChild(this.filterBar);
        const initialSidebarWidth = 225;
        const splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.SplitWidget(true, false, 'network-panel-sidebar-state', initialSidebarWidth);
        splitWidget.hideSidebar();
        splitWidget.enableShowModeSaving();
        splitWidget.show(this.element);
        this.sidebarLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().createTabbedLocation(async () => {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network');
            splitWidget.showBoth();
        }, 'network-sidebar', true);
        const tabbedPane = this.sidebarLocation.tabbedPane();
        tabbedPane.setMinimumSize(100, 25);
        tabbedPane.element.classList.add('network-tabbed-pane');
        tabbedPane.element.addEventListener('keydown', event => {
            if (event.key !== _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.ESCAPE_KEY) {
                return;
            }
            splitWidget.hideSidebar();
            event.consume();
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.logKeyDown(event.currentTarget, event, 'hide-sidebar');
        });
        const closeSidebar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.close), 'cross');
        closeSidebar.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, () => splitWidget.hideSidebar());
        closeSidebar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.close().track({ click: true })}`);
        tabbedPane.rightToolbar().appendToolbarItem(closeSidebar);
        splitWidget.setSidebarWidget(tabbedPane);
        splitWidget.setMainWidget(panel);
        splitWidget.setDefaultFocusedChild(panel);
        this.setDefaultFocusedChild(splitWidget);
        this.progressBarContainer = document.createElement('div');
        this.networkLogView =
            new _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_17__.NetworkLogView(this.filterBar, this.progressBarContainer, this.networkLogLargeRowsSetting);
        this.splitWidget.setSidebarWidget(this.networkLogView);
        this.fileSelectorElement =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.createFileSelectorElement(this.networkLogView.onLoadFromFile.bind(this.networkLogView));
        panel.element.appendChild(this.fileSelectorElement);
        this.detailsWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox();
        this.detailsWidget.element.classList.add('network-details-view');
        this.splitWidget.setMainWidget(this.detailsWidget);
        this.closeButtonElement = document.createElement('div', { is: 'dt-close-button' });
        this.closeButtonElement.addEventListener('click', async () => {
            const action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.hide-request-details');
            await action.execute();
        }, false);
        this.closeButtonElement.style.margin = '0 5px';
        this.networkLogShowOverviewSetting.addChangeListener(this.toggleShowOverview, this);
        this.networkLogLargeRowsSetting.addChangeListener(this.toggleLargerRequests, this);
        this.networkRecordFilmStripSetting.addChangeListener(this.toggleRecordFilmStrip, this);
        this.preserveLogSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log');
        this.recordLogSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.record-log');
        this.recordLogSetting.addChangeListener(({ data }) => this.toggleRecord(data));
        this.throttlingSelect = this.createThrottlingConditionsSelect();
        this.setupToolbarButtons(splitWidget);
        this.toggleRecord(this.recordLogSetting.get());
        this.toggleShowOverview();
        this.toggleLargerRequests();
        this.toggleRecordFilmStrip();
        this.updateUI();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.WillReloadPage, this.willReloadPage, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.Load, this.load, this, { scoped: true });
        this.networkLogView.addEventListener(_NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_15__.Events.RequestSelected, this.onRequestSelected, this);
        this.networkLogView.addEventListener(_NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_15__.Events.RequestActivated, this.onRequestActivated, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestAdded, this.onUpdateRequest, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.RequestUpdated, this.onUpdateRequest, this);
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.Events.Reset, this.onNetworkLogReset, this);
    }
    static instance(opts) {
        if (!networkPanelInstance || opts?.forceNew) {
            networkPanelInstance = new NetworkPanel(opts?.displayScreenshotDelay ?? 1000);
        }
        return networkPanelInstance;
    }
    static revealAndFilter(filters) {
        const panel = NetworkPanel.instance();
        let filterString = '';
        for (const filter of filters) {
            if (filter.filterType) {
                filterString += `${filter.filterType}:${filter.filterValue} `;
            }
            else {
                filterString += `${filter.filterValue} `;
            }
        }
        panel.networkLogView.setTextFilterValue(filterString);
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network');
    }
    static async selectAndShowRequest(request, tab, options) {
        const panel = NetworkPanel.instance();
        await panel.selectAndActivateRequest(request, tab, options);
    }
    throttlingSelectForTest() {
        return this.throttlingSelect;
    }
    onWindowChanged(event) {
        const startTime = Math.max(this.calculator.minimumBoundary(), event.data.startTime / 1000);
        const endTime = Math.min(this.calculator.maximumBoundary(), event.data.endTime / 1000);
        if (startTime === this.calculator.minimumBoundary() && endTime === this.calculator.maximumBoundary()) {
            // Reset the filters for NetworkLogView when the window is reset
            // to its boundaries. This clears the filters and allows the users
            // to see the incoming requests after they have updated the curtains
            // to be in the edges. (ex: by double clicking on the overview grid)
            this.networkLogView.setWindow(0, 0);
        }
        else {
            this.networkLogView.setWindow(startTime, endTime);
        }
    }
    async searchToggleClick() {
        const action = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ActionRegistry.ActionRegistry.instance().getAction('network.search');
        await action.execute();
    }
    setupToolbarButtons(splitWidget) {
        const searchToggle = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarToggle(i18nString(UIStrings.search), 'search', undefined, 'search');
        function updateSidebarToggle() {
            const isSidebarShowing = splitWidget.showMode() !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.ShowMode.OnlyMain;
            searchToggle.setToggled(isSidebarShowing);
            if (!isSidebarShowing) {
                searchToggle.element.focus();
            }
        }
        this.panelToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction));
        this.panelToolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar.createActionButtonForId('network.clear'));
        this.panelToolbar.appendSeparator();
        this.panelToolbar.appendToolbarItem(this.filterBar.filterButton());
        updateSidebarToggle();
        splitWidget.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.Events.ShowModeChanged, updateSidebarToggle);
        searchToggle.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, () => {
            void this.searchToggleClick();
        });
        this.panelToolbar.appendToolbarItem(searchToggle);
        this.panelToolbar.appendSeparator();
        this.panelToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.preserveLogSetting, i18nString(UIStrings.doNotClearLogOnPageReload), i18nString(UIStrings.preserveLog)));
        this.panelToolbar.appendSeparator();
        const disableCacheCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('cache-disabled'), i18nString(UIStrings.disableCacheWhileDevtoolsIsOpen), i18nString(UIStrings.disableCache));
        this.panelToolbar.appendToolbarItem(disableCacheCheckbox);
        this.panelToolbar.appendToolbarItem(this.throttlingSelect);
        const networkConditionsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.moreNetworkConditions), 'network-settings', undefined, 'network-conditions');
        networkConditionsButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, () => {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network.config');
        }, this);
        this.panelToolbar.appendToolbarItem(networkConditionsButton);
        this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarItem(this.progressBarContainer));
        this.rightToolbar.appendSeparator();
        this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingToggle(this.showSettingsPaneSetting, 'gear', i18nString(UIStrings.networkSettings), 'gear-filled', 'network-settings'));
        const settingsToolbarLeft = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.settingsPane.element);
        settingsToolbarLeft.makeVertical();
        settingsToolbarLeft.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkLogLargeRowsSetting, i18nString(UIStrings.showMoreInformationInRequestRows), i18nString(UIStrings.useLargeRequestRows)));
        settingsToolbarLeft.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkLogShowOverviewSetting, i18nString(UIStrings.showOverviewOfNetworkRequests), i18nString(UIStrings.showOverview)));
        const settingsToolbarRight = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.Toolbar('', this.settingsPane.element);
        settingsToolbarRight.makeVertical();
        settingsToolbarRight.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.group-by-frame'), i18nString(UIStrings.groupRequestsByTopLevelRequest), i18nString(UIStrings.groupByFrame)));
        settingsToolbarRight.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarSettingCheckbox(this.networkRecordFilmStripSetting, i18nString(UIStrings.captureScreenshotsWhenLoadingA), i18nString(UIStrings.captureScreenshots)));
        this.panelToolbar.appendSeparator();
        const importHarButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.importHarFile), 'import', undefined, 'import-har');
        importHarButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, () => this.fileSelectorElement.click(), this);
        this.panelToolbar.appendToolbarItem(importHarButton);
        const exportHarButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton(i18nString(UIStrings.exportHar), 'download', undefined, 'export-har');
        exportHarButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarButton.Events.Click, _event => {
            void this.networkLogView.exportAll();
        }, this);
        this.panelToolbar.appendToolbarItem(exportHarButton);
    }
    updateSettingsPaneVisibility() {
        this.settingsPane.element.classList.toggle('hidden', !this.showSettingsPaneSetting.get());
    }
    createThrottlingConditionsSelect() {
        const toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarComboBox(null, i18nString(UIStrings.throttling));
        toolbarItem.setMaxWidth(160);
        _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_12__.ThrottlingManager.throttlingManager().decorateSelectWithNetworkThrottling(toolbarItem.selectElement());
        return toolbarItem;
    }
    toggleRecord(toggled) {
        this.toggleRecordAction.setToggled(toggled);
        if (this.recordLogSetting.get() !== toggled) {
            this.recordLogSetting.set(toggled);
        }
        this.networkLogView.setRecording(toggled);
        if (!toggled && this.filmStripRecorder) {
            this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this));
        }
    }
    filmStripAvailable(filmStrip) {
        if (this.filmStripView) {
            this.filmStripView.setModel(filmStrip);
        }
        const timestamps = filmStrip.frames.map(frame => {
            // The network view works in seconds.
            return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Helpers.Timing.microSecondsToSeconds(frame.screenshotEvent.ts);
        });
        this.networkLogView.addFilmStripFrames(timestamps);
    }
    onNetworkLogReset(event) {
        const { clearIfPreserved } = event.data;
        if (!this.preserveLogSetting.get() || clearIfPreserved) {
            this.calculator.reset();
            this.overviewPane.reset();
        }
        if (this.filmStripView) {
            this.resetFilmStripView();
        }
    }
    willReloadPage() {
        if (this.pendingStopTimer) {
            clearTimeout(this.pendingStopTimer);
            delete this.pendingStopTimer;
        }
        if (this.isShowing() && this.filmStripRecorder) {
            this.filmStripRecorder.startRecording();
        }
    }
    load() {
        if (this.filmStripRecorder && this.filmStripRecorder.isRecording()) {
            if (this.pendingStopTimer) {
                window.clearTimeout(this.pendingStopTimer);
            }
            this.pendingStopTimer = window.setTimeout(this.stopFilmStripRecording.bind(this), this.displayScreenshotDelay);
        }
    }
    stopFilmStripRecording() {
        if (this.filmStripRecorder) {
            this.filmStripRecorder.stopRecording(this.filmStripAvailable.bind(this));
        }
        delete this.pendingStopTimer;
    }
    toggleLargerRequests() {
        this.updateUI();
    }
    toggleShowOverview() {
        const toggled = this.networkLogShowOverviewSetting.get();
        if (toggled) {
            this.overviewPane.show(this.overviewPlaceholderElement);
        }
        else {
            this.overviewPane.detach();
        }
        this.doResize();
    }
    toggleRecordFilmStrip() {
        const toggled = this.networkRecordFilmStripSetting.get();
        if (toggled && !this.filmStripRecorder) {
            this.filmStripView = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.FilmStripView.FilmStripView();
            this.filmStripView.element.classList.add('network-film-strip');
            this.filmStripView.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('film-strip')}`);
            this.filmStripRecorder = new FilmStripRecorder(this.networkLogView.timeCalculator(), this.filmStripView);
            this.filmStripView.show(this.filmStripPlaceholderElement);
            this.filmStripView.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.FilmStripView.Events.FrameSelected, this.onFilmFrameSelected, this);
            this.filmStripView.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.FilmStripView.Events.FrameEnter, this.onFilmFrameEnter, this);
            this.filmStripView.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_9__.FilmStripView.Events.FrameExit, this.onFilmFrameExit, this);
            this.resetFilmStripView();
        }
        if (!toggled && this.filmStripRecorder) {
            if (this.filmStripView) {
                this.filmStripView.detach();
            }
            this.filmStripView = null;
            this.filmStripRecorder = null;
        }
    }
    resetFilmStripView() {
        const reloadShortcut = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('inspector-main.reload')[0];
        if (this.filmStripView) {
            this.filmStripView.reset();
            if (reloadShortcut) {
                this.filmStripView.setStatusText(i18nString(UIStrings.hitSToReloadAndCaptureFilmstrip, { PH1: reloadShortcut.title() }));
            }
        }
    }
    elementsToRestoreScrollPositionsFor() {
        return this.networkLogView.elementsToRestoreScrollPositionsFor();
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(NetworkPanel, this);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './networkPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        // Record the network tool load time after the panel has loaded.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelLoaded('network', 'DevTools.Launch.Network');
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(NetworkPanel, null);
    }
    revealAndHighlightRequest(request) {
        this.hideRequestPanel();
        if (request) {
            this.networkLogView.revealAndHighlightRequest(request);
        }
    }
    revealAndHighlightRequestWithId(request) {
        this.hideRequestPanel();
        if (request) {
            this.networkLogView.revealAndHighlightRequestWithId(request);
        }
    }
    async selectAndActivateRequest(request, shownTab, options) {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network');
        this.networkLogView.selectRequest(request, options);
        this.showRequestPanel(shownTab);
        this.networkLogView.revealAndHighlightRequest(request);
        return this.networkItemView;
    }
    handleFilterChanged() {
        this.hideRequestPanel();
    }
    onRowSizeChanged() {
        this.updateUI();
    }
    onRequestSelected(event) {
        const request = event.data;
        this.currentRequest = request;
        this.networkOverview.setHighlightedRequest(request);
        this.updateNetworkItemView();
    }
    onRequestActivated(event) {
        const { showPanel, tab, takeFocus } = event.data;
        if (showPanel) {
            this.showRequestPanel(tab, takeFocus);
        }
        else {
            this.hideRequestPanel();
        }
    }
    showRequestPanel(shownTab, takeFocus) {
        if (this.splitWidget.showMode() === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.ShowMode.Both && !shownTab && !takeFocus) {
            // If panel is already shown, and we are not forcing a specific tab, return.
            return;
        }
        this.clearNetworkItemView();
        if (this.currentRequest) {
            const networkItemView = this.createNetworkItemView(shownTab);
            if (networkItemView && takeFocus) {
                networkItemView.focus();
            }
        }
        this.updateUI();
    }
    hideRequestPanel() {
        this.clearNetworkItemView();
        this.splitWidget.hideMain();
        this.updateUI();
    }
    updateNetworkItemView() {
        if (this.splitWidget.showMode() === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.SplitWidget.ShowMode.Both) {
            this.clearNetworkItemView();
            this.createNetworkItemView();
            this.updateUI();
        }
    }
    clearNetworkItemView() {
        if (this.networkItemView) {
            this.networkItemView.detach();
            this.networkItemView = null;
        }
    }
    createNetworkItemView(initialTab) {
        if (!this.currentRequest) {
            return;
        }
        this.networkItemView = new _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_16__.NetworkItemView(this.currentRequest, this.networkLogView.timeCalculator(), initialTab);
        this.networkItemView.leftToolbar().appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Toolbar.ToolbarItem(this.closeButtonElement));
        this.networkItemView.show(this.detailsWidget.element);
        this.splitWidget.showBoth();
        return this.networkItemView;
    }
    updateUI() {
        if (this.detailsWidget) {
            this.detailsWidget.element.classList.toggle('network-details-view-tall-header', this.networkLogLargeRowsSetting.get());
        }
        if (this.networkLogView) {
            this.networkLogView.switchViewMode(!this.splitWidget.isResizable());
        }
    }
    appendApplicableItems(event, contextMenu, target) {
        const appendRevealItem = (request) => {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInNetworkPanel), () => _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance()
                .showView('network')
                .then(this.networkLogView.resetFilter.bind(this.networkLogView))
                .then(this.revealAndHighlightRequest.bind(this, request)), { jslogContext: 'reveal-in-network' });
        };
        if (event.target.isSelfOrDescendant(this.element)) {
            return;
        }
        if (target instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Resource.Resource) {
            if (target.request) {
                appendRevealItem(target.request);
            }
            return;
        }
        if (target instanceof _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.UISourceCode) {
            const resource = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceUtils.resourceForURL(target.url());
            if (resource && resource.request) {
                appendRevealItem(resource.request);
            }
            return;
        }
        if (target instanceof _timeline_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.NetworkRequest.TimelineNetworkRequest) {
            if (target.request) {
                appendRevealItem(target.request);
            }
            return;
        }
        if (this.networkItemView && this.networkItemView.isShowing() && this.networkItemView.request() === target) {
            return;
        }
        appendRevealItem(target);
    }
    onFilmFrameSelected(event) {
        const timestamp = event.data;
        this.overviewPane.setWindowTimes(0, timestamp);
    }
    onFilmFrameEnter(event) {
        const timestamp = event.data;
        this.networkOverview.selectFilmStripFrame(timestamp);
        this.networkLogView.selectFilmStripFrame(timestamp / 1000);
    }
    onFilmFrameExit() {
        this.networkOverview.clearFilmStripFrame();
        this.networkLogView.clearFilmStripFrame();
    }
    onUpdateRequest(event) {
        const { request } = event.data;
        this.calculator.updateBoundaries(request);
        // FIXME: Unify all time units across the frontend!
        this.overviewPane.setBounds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.MilliSeconds(this.calculator.minimumBoundary() * 1000), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.MilliSeconds(this.calculator.maximumBoundary() * 1000));
        this.networkOverview.updateRequest(request);
    }
    resolveLocation(locationName) {
        if (locationName === 'network-sidebar') {
            return this.sidebarLocation;
        }
        return null;
    }
}
class RequestRevealer {
    reveal(request) {
        const panel = NetworkPanel.instance();
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network').then(panel.revealAndHighlightRequest.bind(panel, request));
    }
}
class RequestIdRevealer {
    reveal(requestId) {
        const panel = NetworkPanel.instance();
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network').then(panel.revealAndHighlightRequestWithId.bind(panel, requestId));
    }
}
class NetworkLogWithFilterRevealer {
    reveal(request) {
        if ('filters' in request) {
            return NetworkPanel.revealAndFilter(request.filters);
        }
        return NetworkPanel.revealAndFilter(request.filter ? [{ filterType: null, filterValue: request.filter }] : []);
    }
}
class FilmStripRecorder {
    constructor(timeCalculator, filmStripView) {
        Object.defineProperty(this, "tracingManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resourceTreeModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timeCalculator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filmStripView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Used to fetch screenshots of the page load and show them in the panel.
        _FilmStripRecorder_traceEngine.set(this, void 0);
        _FilmStripRecorder_collectedTraceEvents.set(this, []);
        __classPrivateFieldSet(this, _FilmStripRecorder_traceEngine, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.TraceModel.Model.createWithSubsetOfHandlers({
            Screenshots: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Handlers.ModelHandlers.Screenshots,
        }), "f");
        this.tracingManager = null;
        this.resourceTreeModel = null;
        this.timeCalculator = timeCalculator;
        this.filmStripView = filmStripView;
        this.callback = null;
    }
    traceEventsCollected(events) {
        __classPrivateFieldGet(this, _FilmStripRecorder_collectedTraceEvents, "f").push(...events);
    }
    async tracingComplete() {
        if (!this.tracingManager) {
            return;
        }
        this.tracingManager = null;
        await __classPrivateFieldGet(this, _FilmStripRecorder_traceEngine, "f").parse(__classPrivateFieldGet(this, _FilmStripRecorder_collectedTraceEvents, "f"));
        const data = __classPrivateFieldGet(this, _FilmStripRecorder_traceEngine, "f").traceParsedData(__classPrivateFieldGet(this, _FilmStripRecorder_traceEngine, "f").size() - 1);
        if (!data) {
            return;
        }
        const zeroTimeInSeconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Types.Timing.Seconds(this.timeCalculator.minimumBoundary());
        const filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Extras.FilmStrip.fromTraceData(data, _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.Helpers.Timing.secondsToMicroseconds(zeroTimeInSeconds));
        if (this.callback) {
            this.callback(filmStrip);
        }
        this.callback = null;
        // Now we have created the film strip and stored the data, we need to reset
        // the trace processor so that it is ready to record again if the user
        // refreshes the page.
        __classPrivateFieldGet(this, _FilmStripRecorder_traceEngine, "f").resetProcessor();
        if (this.resourceTreeModel) {
            this.resourceTreeModel.resumeReload();
        }
        this.resourceTreeModel = null;
    }
    tracingBufferUsage() {
    }
    eventsRetrievalProgress(_progress) {
    }
    startRecording() {
        __classPrivateFieldSet(this, _FilmStripRecorder_collectedTraceEvents, [], "f");
        this.filmStripView.reset();
        this.filmStripView.setStatusText(i18nString(UIStrings.recordingFrames));
        const tracingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget()?.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_7__.TracingManager.TracingManager);
        if (this.tracingManager || !tracingManager) {
            return;
        }
        this.tracingManager = tracingManager;
        this.resourceTreeModel = this.tracingManager.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
        void this.tracingManager.start(this, '-*,disabled-by-default-devtools.screenshot', '');
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FilmStripStartedRecording);
    }
    isRecording() {
        return Boolean(this.tracingManager);
    }
    stopRecording(callback) {
        if (!this.tracingManager) {
            return;
        }
        this.tracingManager.stop();
        if (this.resourceTreeModel) {
            this.resourceTreeModel.suspendReload();
        }
        this.callback = callback;
        this.filmStripView.setStatusText(i18nString(UIStrings.fetchingFrames));
    }
}
_FilmStripRecorder_traceEngine = new WeakMap(), _FilmStripRecorder_collectedTraceEvents = new WeakMap();
class ActionDelegate {
    handleAction(context, actionId) {
        const panel = context.flavor(NetworkPanel);
        if (panel === null) {
            return false;
        }
        switch (actionId) {
            case 'network.toggle-recording': {
                panel.toggleRecord(!panel.recordLogSetting.get());
                return true;
            }
            case 'network.hide-request-details': {
                if (!panel.networkItemView) {
                    return false;
                }
                panel.hideRequestPanel();
                panel.networkLogView.resetFocus();
                return true;
            }
            case 'network.search': {
                const selection = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InspectorView.InspectorView.instance().element.window().getSelection();
                if (!selection) {
                    return false;
                }
                let queryCandidate = '';
                if (selection.rangeCount) {
                    queryCandidate = selection.toString().replace(/\r?\n.*/, '');
                }
                void SearchNetworkView.openSearch(queryCandidate);
                return true;
            }
            case 'network.clear': {
                _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().reset(true);
                return true;
            }
        }
        return false;
    }
}
class RequestLocationRevealer {
    async reveal(location) {
        const view = await NetworkPanel.instance().selectAndActivateRequest(location.request, location.tab, location.filterOptions);
        if (!view) {
            return;
        }
        if (location.searchMatch) {
            const { lineNumber, columnNumber, matchLength } = location.searchMatch;
            const revealPosition = {
                from: { lineNumber, columnNumber },
                to: { lineNumber, columnNumber: columnNumber + matchLength },
            };
            await view.revealResponseBody(revealPosition);
        }
        if (location.header) {
            view.revealHeader(location.header.section, location.header.header?.name);
        }
    }
}
let searchNetworkViewInstance;
class SearchNetworkView extends _search_search_js__WEBPACK_IMPORTED_MODULE_13__.SearchView.SearchView {
    constructor() {
        super('network', new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 200));
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!searchNetworkViewInstance || forceNew) {
            searchNetworkViewInstance = new SearchNetworkView();
        }
        return searchNetworkViewInstance;
    }
    static async openSearch(query, searchImmediately) {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ViewManager.ViewManager.instance().showView('network.search-network-tab');
        const searchView = SearchNetworkView.instance();
        searchView.toggle(query, Boolean(searchImmediately));
        return searchView;
    }
    createScope() {
        return new _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_20__.NetworkSearchScope(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance());
    }
}


/***/ }),

/***/ "./src/panels/network/NetworkSearchScope.ts":
/*!**************************************************!*\
  !*** ./src/panels/network/NetworkSearchScope.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkSearchResult: () => (/* binding */ NetworkSearchResult),
/* harmony export */   NetworkSearchScope: () => (/* binding */ NetworkSearchScope)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
var _a, _NetworkSearchScope_networkLog, _NetworkSearchScope_responseBodyMatches;




const UIStrings = {
    /**
     *@description Text for web URLs
     */
    url: 'URL',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/NetworkSearchScope.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NetworkSearchScope {
    constructor(networkLog) {
        _NetworkSearchScope_networkLog.set(this, void 0);
        __classPrivateFieldSet(this, _NetworkSearchScope_networkLog, networkLog, "f");
    }
    performIndexing(progress) {
        queueMicrotask(() => {
            progress.done();
        });
    }
    async performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
        const promises = [];
        const requests = __classPrivateFieldGet(this, _NetworkSearchScope_networkLog, "f").requests().filter(request => searchConfig.filePathMatchesFileQuery(request.url()));
        progress.setTotalWork(requests.length);
        for (const request of requests) {
            const promise = this.searchRequest(searchConfig, request, progress);
            promises.push(promise);
        }
        const resultsWithNull = await Promise.all(promises);
        const results = resultsWithNull.filter(result => result !== null);
        if (progress.isCanceled()) {
            searchFinishedCallback(false);
            return;
        }
        for (const result of results.sort((r1, r2) => r1.label().localeCompare(r2.label()))) {
            if (result.matchesCount() > 0) {
                searchResultCallback(result);
            }
        }
        progress.done();
        searchFinishedCallback(true);
    }
    async searchRequest(searchConfig, request, progress) {
        const bodyMatches = await __classPrivateFieldGet(_a, _a, "m", _NetworkSearchScope_responseBodyMatches).call(_a, searchConfig, request);
        if (progress.isCanceled()) {
            return null;
        }
        const locations = [];
        if (stringMatchesQuery(request.url())) {
            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.urlMatch(request));
        }
        for (const header of request.requestHeaders()) {
            if (headerMatchesQuery(header)) {
                locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.requestHeaderMatch(request, header));
            }
        }
        for (const header of request.responseHeaders) {
            if (headerMatchesQuery(header)) {
                locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(request, header));
            }
        }
        for (const match of bodyMatches) {
            locations.push(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIRequestLocation.UIRequestLocation.bodyMatch(request, match));
        }
        progress.incrementWorked();
        return new NetworkSearchResult(request, locations);
        function headerMatchesQuery(header) {
            return stringMatchesQuery(`${header.name}: ${header.value}`);
        }
        function stringMatchesQuery(string) {
            const flags = searchConfig.ignoreCase() ? 'i' : '';
            const regExps = searchConfig.queries().map(query => new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(query), flags));
            let pos = 0;
            for (const regExp of regExps) {
                const match = string.substr(pos).match(regExp);
                if (!match || match.index === undefined) {
                    return false;
                }
                pos += match.index + match[0].length;
            }
            return true;
        }
    }
    stopSearch() {
    }
}
_a = NetworkSearchScope, _NetworkSearchScope_networkLog = new WeakMap(), _NetworkSearchScope_responseBodyMatches = async function _NetworkSearchScope_responseBodyMatches(searchConfig, request) {
    if (!request.contentType().isTextType()) {
        return [];
    }
    let matches = [];
    for (const query of searchConfig.queries()) {
        const tmpMatches = await request.searchInContent(query, !searchConfig.ignoreCase(), searchConfig.isRegex());
        if (tmpMatches.length === 0) {
            // Mirror file search that all individual queries must produce matches.
            return [];
        }
        matches =
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.mergeOrdered(matches, tmpMatches, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.ContentProvider.SearchMatch.comparator);
    }
    return matches;
};
class NetworkSearchResult {
    constructor(request, locations) {
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "locations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.request = request;
        this.locations = locations;
    }
    matchesCount() {
        return this.locations.length;
    }
    label() {
        return this.request.displayName;
    }
    description() {
        const parsedUrl = this.request.parsedURL;
        if (!parsedUrl) {
            return this.request.url();
        }
        return parsedUrl.urlWithoutScheme();
    }
    matchLineContent(index) {
        const location = this.locations[index];
        if (location.isUrlMatch) {
            return this.request.url();
        }
        const header = location?.header?.header;
        if (header) {
            return header.value;
        }
        return location.searchMatch.lineContent;
    }
    matchRevealable(index) {
        return this.locations[index];
    }
    matchLabel(index) {
        const location = this.locations[index];
        if (location.isUrlMatch) {
            return i18nString(UIStrings.url);
        }
        const header = location?.header?.header;
        if (header) {
            return `${header.name}:`;
        }
        return (location.searchMatch.lineNumber + 1).toString();
    }
    matchColumn(index) {
        const location = this.locations[index];
        return location.searchMatch?.columnNumber;
    }
    matchLength(index) {
        const location = this.locations[index];
        return location.searchMatch?.matchLength;
    }
}


/***/ })

}]);