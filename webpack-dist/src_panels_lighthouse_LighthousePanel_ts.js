"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthousePanel_ts"],{

/***/ "./src/panels/lighthouse/LighthousePanel.ts":
/*!**************************************************!*\
  !*** ./src/panels/lighthouse/LighthousePanel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthousePanel: () => (/* binding */ LighthousePanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LighthouseController.js */ "./src/panels/lighthouse/LighthouseController.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthousePanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LighthouseProtocolService.js */ "./src/panels/lighthouse/LighthouseProtocolService.ts");
/* harmony import */ var _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LighthouseReportRenderer.js */ "./src/panels/lighthouse/LighthouseReportRenderer.ts");
/* harmony import */ var _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LighthouseReportSelector.js */ "./src/panels/lighthouse/LighthouseReportSelector.ts");
/* harmony import */ var _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LighthouseStartView.js */ "./src/panels/lighthouse/LighthouseStartView.ts");
/* harmony import */ var _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LighthouseStatusView.js */ "./src/panels/lighthouse/LighthouseStatusView.ts");
/* harmony import */ var _LighthouseTimespanView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LighthouseTimespanView.js */ "./src/panels/lighthouse/LighthouseTimespanView.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const UIStrings = {
    /**
     *@description Text that appears when user drag and drop something (for example, a file) in Lighthouse Panel
     */
    dropLighthouseJsonHere: 'Drop `Lighthouse` JSON here',
    /**
     *@description Tooltip text that appears when hovering over the largeicon add button in the Lighthouse Panel
     */
    performAnAudit: 'Perform an audit…',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear all',
    /**
     *@description Tooltip text that appears when hovering over the largeicon settings gear in show settings pane setting in start view of the audits panel
     */
    lighthouseSettings: '`Lighthouse` settings',
    /**
     *@description Status header in the Lighthouse panel
     */
    printing: 'Printing',
    /**
     *@description Status text in the Lighthouse panel
     */
    thePrintPopupWindowIsOpenPlease: 'The print popup window is open. Please close it to continue.',
    /**
     *@description Text in Lighthouse Panel
     */
    cancelling: 'Cancelling',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthousePanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let lighthousePanelInstace;
class LighthousePanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Panel.Panel {
    constructor(controller) {
        super('lighthouse');
        Object.defineProperty(this, "controller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "statusView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timespanView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "warningText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "unauditableExplanation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cachedRenderedReports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dropTarget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "auditResultsElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "newButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportSelector", {
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
        Object.defineProperty(this, "rightToolbar", {
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
        this.controller = controller;
        this.startView = new _LighthouseStartView_js__WEBPACK_IMPORTED_MODULE_9__.StartView(this.controller, this);
        this.timespanView = new _LighthouseTimespanView_js__WEBPACK_IMPORTED_MODULE_11__.TimespanView(this);
        this.statusView = new _LighthouseStatusView_js__WEBPACK_IMPORTED_MODULE_10__.StatusView(this);
        this.warningText = null;
        this.unauditableExplanation = null;
        this.cachedRenderedReports = new Map();
        this.dropTarget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.DropTarget.DropTarget(this.contentElement, [_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.DropTarget.Type.File], i18nString(UIStrings.dropLighthouseJsonHere), this.handleDrop.bind(this));
        this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.PageAuditabilityChanged, this.refreshStartAuditUI.bind(this));
        this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.PageWarningsChanged, this.refreshWarningsUI.bind(this));
        this.controller.addEventListener(_LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events.AuditProgressChanged, this.refreshStatusUI.bind(this));
        this.renderToolbar();
        this.auditResultsElement = this.contentElement.createChild('div', 'lighthouse-results-container');
        this.renderStartView();
        this.controller.recomputePageAuditability();
    }
    static instance(opts) {
        if (!lighthousePanelInstace || opts?.forceNew) {
            const protocolService = opts?.protocolService ?? new _LighthouseProtocolService_js__WEBPACK_IMPORTED_MODULE_6__.ProtocolService();
            const controller = opts?.controller ?? new _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.LighthouseController(protocolService);
            lighthousePanelInstace = new LighthousePanel(controller);
        }
        return lighthousePanelInstace;
    }
    static getEvents() {
        return _LighthouseController_js__WEBPACK_IMPORTED_MODULE_4__.Events;
    }
    async handleTimespanStart() {
        try {
            this.timespanView.show(this.contentElement);
            await this.controller.startLighthouse();
            this.timespanView.ready();
        }
        catch (err) {
            this.handleError(err);
        }
    }
    async handleTimespanEnd() {
        try {
            this.timespanView.hide();
            this.renderStatusView();
            const { lhr, artifacts } = await this.controller.collectLighthouseResults();
            this.buildReportUI(lhr, artifacts);
        }
        catch (err) {
            this.handleError(err);
        }
    }
    async handleCompleteRun() {
        try {
            await this.controller.startLighthouse();
            this.renderStatusView();
            const { lhr, artifacts } = await this.controller.collectLighthouseResults();
            this.buildReportUI(lhr, artifacts);
        }
        catch (err) {
            this.handleError(err);
        }
    }
    async handleRunCancel() {
        this.statusView.updateStatus(i18nString(UIStrings.cancelling));
        this.timespanView.hide();
        await this.controller.cancelLighthouse();
        this.renderStartView();
    }
    handleError(err) {
        if (err instanceof Error) {
            this.statusView.renderBugReport(err);
        }
    }
    refreshWarningsUI(evt) {
        // PageWarningsChanged fires multiple times during an audit, which we want to ignore.
        if (this.controller.getCurrentRun()) {
            return;
        }
        this.warningText = evt.data.warning;
        this.startView.setWarningText(evt.data.warning);
    }
    refreshStartAuditUI(evt) {
        // PageAuditabilityChanged fires multiple times during an audit, which we want to ignore.
        if (this.controller.getCurrentRun()) {
            return;
        }
        this.startView.refresh();
        this.unauditableExplanation = evt.data.helpText;
        this.startView.setUnauditableExplanation(evt.data.helpText);
        this.startView.setStartButtonEnabled(!evt.data.helpText);
    }
    refreshStatusUI(evt) {
        this.statusView.updateStatus(evt.data.message);
    }
    refreshToolbarUI() {
        this.clearButton.setEnabled(this.reportSelector.hasItems());
    }
    clearAll() {
        this.reportSelector.clearAll();
        this.renderStartView();
        this.refreshToolbarUI();
    }
    renderToolbar() {
        const lighthouseToolbarContainer = this.element.createChild('div', 'lighthouse-toolbar-container');
        lighthouseToolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()}`);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', lighthouseToolbarContainer);
        this.newButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.performAnAudit), 'plus');
        toolbar.appendToolbarItem(this.newButton);
        this.newButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton.Events.Click, this.renderStartView.bind(this));
        toolbar.appendSeparator();
        this.reportSelector = new _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__.ReportSelector(() => this.renderStartView());
        toolbar.appendToolbarItem(this.reportSelector.comboBox());
        this.clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
        toolbar.appendToolbarItem(this.clearButton);
        this.clearButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton.Events.Click, this.clearAll.bind(this));
        this.settingsPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.HBox();
        this.settingsPane.show(this.contentElement);
        this.settingsPane.element.classList.add('lighthouse-settings-pane');
        this.settingsPane.element.appendChild(this.startView.settingsToolbar().element);
        this.showSettingsPaneSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse-show-settings-toolbar', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingStorageType.Synced);
        this.rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', lighthouseToolbarContainer);
        this.rightToolbar.appendSeparator();
        this.rightToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingToggle(this.showSettingsPaneSetting, 'gear', i18nString(UIStrings.lighthouseSettings), 'gear-filled'));
        this.showSettingsPaneSetting.addChangeListener(this.updateSettingsPaneVisibility.bind(this));
        this.updateSettingsPaneVisibility();
        this.refreshToolbarUI();
    }
    updateSettingsPaneVisibility() {
        this.settingsPane.element.classList.toggle('hidden', !this.showSettingsPaneSetting.get());
    }
    toggleSettingsDisplay(show) {
        this.rightToolbar.element.classList.toggle('hidden', !show);
        this.settingsPane.element.classList.toggle('hidden', !show);
        this.updateSettingsPaneVisibility();
    }
    renderStartView() {
        this.auditResultsElement.removeChildren();
        this.statusView.hide();
        this.reportSelector.selectNewReport();
        this.contentElement.classList.toggle('in-progress', false);
        this.startView.show(this.contentElement);
        this.toggleSettingsDisplay(true);
        this.startView.setUnauditableExplanation(this.unauditableExplanation);
        this.startView.setStartButtonEnabled(!this.unauditableExplanation);
        if (!this.unauditableExplanation) {
            this.startView.focusStartButton();
        }
        this.startView.setWarningText(this.warningText);
        this.newButton.setEnabled(false);
        this.refreshToolbarUI();
        this.setDefaultFocusedChild(this.startView);
    }
    renderStatusView() {
        const inspectedURL = this.controller.getCurrentRun()?.inspectedURL;
        this.contentElement.classList.toggle('in-progress', true);
        this.statusView.setInspectedURL(inspectedURL);
        this.statusView.show(this.contentElement);
    }
    beforePrint() {
        this.statusView.show(this.contentElement);
        this.statusView.toggleCancelButton(false);
        this.statusView.renderText(i18nString(UIStrings.printing), i18nString(UIStrings.thePrintPopupWindowIsOpenPlease));
    }
    afterPrint() {
        this.statusView.hide();
        this.statusView.toggleCancelButton(true);
    }
    renderReport(lighthouseResult, artifacts) {
        this.toggleSettingsDisplay(false);
        this.contentElement.classList.toggle('in-progress', false);
        this.startView.hideWidget();
        this.statusView.hide();
        this.auditResultsElement.removeChildren();
        this.newButton.setEnabled(true);
        this.refreshToolbarUI();
        const cachedRenderedReport = this.cachedRenderedReports.get(lighthouseResult);
        if (cachedRenderedReport) {
            this.auditResultsElement.appendChild(cachedRenderedReport);
            return;
        }
        const reportContainer = _LighthouseReportRenderer_js__WEBPACK_IMPORTED_MODULE_7__.LighthouseReportRenderer.renderLighthouseReport(lighthouseResult, artifacts, {
            beforePrint: this.beforePrint.bind(this),
            afterPrint: this.afterPrint.bind(this),
        });
        this.cachedRenderedReports.set(lighthouseResult, reportContainer);
    }
    buildReportUI(lighthouseResult, artifacts) {
        if (lighthouseResult === null) {
            return;
        }
        const optionElement = new _LighthouseReportSelector_js__WEBPACK_IMPORTED_MODULE_8__.Item(lighthouseResult, () => this.renderReport(lighthouseResult, artifacts), this.renderStartView.bind(this));
        this.reportSelector.prepend(optionElement);
        this.refreshToolbarUI();
        this.renderReport(lighthouseResult);
        this.newButton.element.focus();
    }
    handleDrop(dataTransfer) {
        const items = dataTransfer.items;
        if (!items.length) {
            return;
        }
        const item = items[0];
        if (item.kind === 'file') {
            const file = items[0].getAsFile();
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = () => this.loadedFromFile(reader.result);
            reader.readAsText(file);
        }
    }
    loadedFromFile(report) {
        const data = JSON.parse(report);
        if (!data['lighthouseVersion']) {
            return;
        }
        this.buildReportUI(data);
    }
    elementsToRestoreScrollPositionsFor() {
        const els = super.elementsToRestoreScrollPositionsFor();
        const lhContainerEl = this.auditResultsElement.querySelector('.lh-container');
        if (lhContainerEl) {
            els.push(lhContainerEl);
        }
        return els;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthousePanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ }),

/***/ "./src/panels/lighthouse/LighthouseReportRenderer.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseReportRenderer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthouseReportRenderer: () => (/* binding */ LighthouseReportRenderer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/lighthouse/report/report.js */ "./src/third_party/lighthouse/report/report.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const MaxLengthForLinks = 40;
class LighthouseReportRenderer {
    static renderLighthouseReport(lhr, artifacts, opts) {
        let onViewTrace = undefined;
        if (artifacts) {
            onViewTrace = async () => {
                const defaultPassTrace = artifacts.traces.defaultPass;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseViewTrace);
                await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().showPanel('timeline');
                _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__.TimelinePanel.TimelinePanel.instance().loadFromEvents(defaultPassTrace.traceEvents);
            };
        }
        async function onSaveFileOverride(blob) {
            const domain = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(lhr.finalUrl || lhr.finalDisplayedUrl).domain();
            const sanitizedDomain = domain.replace(/[^a-z0-9.-]+/gi, '_');
            const timestamp = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DateUtilities.toISO8601Compact(new Date(lhr.fetchTime));
            const ext = blob.type.match('json') ? '.json' : '.html';
            const basename = `${sanitizedDomain}-${timestamp}${ext}`;
            const text = await blob.text();
            await _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().save(basename, text, true /* forceSaveAs */, false /* isBase64 */);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().close(basename);
        }
        async function onPrintOverride(rootEl) {
            const clonedReport = rootEl.cloneNode(true);
            const printWindow = window.open('', '_blank', 'channelmode=1,status=1,resizable=1');
            if (!printWindow) {
                return;
            }
            printWindow.document.body.replaceWith(clonedReport);
            // Linkified nodes are shadow elements, which aren't exposed via `cloneNode`.
            await LighthouseReportRenderer.linkifyNodeDetails(clonedReport);
            opts?.beforePrint?.();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
            opts?.afterPrint?.();
        }
        function getStandaloneReportHTML() {
            // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
            return Lighthouse.ReportGenerator.ReportGenerator.generateReportHtml(lhr);
        }
        const reportEl = _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__.renderReport(lhr, {
            // Disable dark mode so we can manually adjust it.
            disableDarkMode: true,
            onViewTrace,
            onSaveFileOverride,
            onPrintOverride,
            getStandaloneReportHTML,
        });
        reportEl.classList.add('lh-devtools');
        const updateDarkModeIfNecessary = () => {
            reportEl.classList.toggle('lh-dark', _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeSupport.instance().themeName() === 'dark');
        };
        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeChangeEvent.eventName, updateDarkModeIfNecessary);
        updateDarkModeIfNecessary();
        // @ts-ignore Expose LHR on DOM for e2e tests
        reportEl._lighthouseResultForTesting = lhr;
        // @ts-ignore Expose Artifacts on DOM for e2e tests
        reportEl._lighthouseArtifactsForTesting = artifacts;
        // Linkifying requires the target be loaded. Do not block the report
        // from rendering, as this is just an embellishment and the main target
        // could take awhile to load.
        void LighthouseReportRenderer.waitForMainTargetLoad().then(() => {
            void LighthouseReportRenderer.linkifyNodeDetails(reportEl);
            void LighthouseReportRenderer.linkifySourceLocationDetails(reportEl);
        });
        return reportEl;
    }
    static async waitForMainTargetLoad() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        await resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load);
    }
    static async linkifyNodeDetails(el) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const domModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
        if (!domModel) {
            return;
        }
        for (const origElement of el.getElementsByClassName('lh-node')) {
            const origHTMLElement = origElement;
            const detailsItem = origHTMLElement.dataset;
            if (!detailsItem.path) {
                continue;
            }
            const nodeId = await domModel.pushNodeByPathToFrontend(detailsItem.path);
            if (!nodeId) {
                continue;
            }
            const node = domModel.nodeForId(nodeId);
            if (!node) {
                continue;
            }
            const element = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, { tooltip: detailsItem.snippet, preventKeyboardFocus: undefined });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
            const screenshotElement = origHTMLElement.querySelector('.lh-element-screenshot');
            origHTMLElement.textContent = '';
            if (screenshotElement) {
                origHTMLElement.append(screenshotElement);
            }
            origHTMLElement.appendChild(element);
        }
    }
    static async linkifySourceLocationDetails(el) {
        for (const origElement of el.getElementsByClassName('lh-source-location')) {
            const origHTMLElement = origElement;
            const detailsItem = origHTMLElement.dataset;
            if (!detailsItem.sourceUrl || !detailsItem.sourceLine || !detailsItem.sourceColumn) {
                continue;
            }
            const url = detailsItem.sourceUrl;
            const line = Number(detailsItem.sourceLine);
            const column = Number(detailsItem.sourceColumn);
            const element = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier.linkifyURL(url, {
                lineNumber: line,
                columnNumber: column,
                showColumnNumber: false,
                inlineFrameIndex: 0,
                maxLength: MaxLengthForLinks,
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
            origHTMLElement.textContent = '';
            origHTMLElement.appendChild(element);
        }
    }
}


/***/ }),

/***/ "./src/panels/lighthouse/LighthouseReportSelector.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseReportSelector.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   ReportSelector: () => (/* binding */ ReportSelector)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Title of combo box in audits report selector
     */
    reports: 'Reports',
    /**
     *@description New report item label in Lighthouse Report Selector
     */
    newReport: '(new report)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthouseReportSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ReportSelector {
    constructor(renderNewLighthouseView) {
        Object.defineProperty(this, "renderNewLighthouseView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "newLighthouseItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "comboBoxInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "itemByOptionElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.renderNewLighthouseView = renderNewLighthouseView;
        this.newLighthouseItem = document.createElement('option');
        this.comboBoxInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarComboBox(this.handleChange.bind(this), i18nString(UIStrings.reports), 'lighthouse-report');
        this.comboBoxInternal.setMaxWidth(180);
        this.comboBoxInternal.setMinWidth(140);
        this.itemByOptionElement = new Map();
        this.setEmptyState();
    }
    setEmptyState() {
        this.comboBoxInternal.selectElement().removeChildren();
        this.comboBoxInternal.setEnabled(false);
        this.newLighthouseItem = document.createElement('option');
        this.newLighthouseItem.label = i18nString(UIStrings.newReport);
        this.comboBoxInternal.selectElement().appendChild(this.newLighthouseItem);
        this.comboBoxInternal.select(this.newLighthouseItem);
    }
    handleChange(_event) {
        const item = this.selectedItem();
        if (item) {
            item.select();
        }
        else {
            this.renderNewLighthouseView();
        }
    }
    selectedItem() {
        const option = this.comboBoxInternal.selectedOption();
        return this.itemByOptionElement.get(option);
    }
    hasCurrentSelection() {
        return Boolean(this.selectedItem());
    }
    hasItems() {
        return this.itemByOptionElement.size > 0;
    }
    comboBox() {
        return this.comboBoxInternal;
    }
    prepend(item) {
        const optionEl = item.optionElement();
        const selectEl = this.comboBoxInternal.selectElement();
        this.itemByOptionElement.set(optionEl, item);
        selectEl.insertBefore(optionEl, selectEl.firstElementChild);
        this.comboBoxInternal.setEnabled(true);
        this.comboBoxInternal.select(optionEl);
        item.select();
    }
    clearAll() {
        for (const elem of this.comboBoxInternal.options()) {
            if (elem === this.newLighthouseItem) {
                continue;
            }
            this.itemByOptionElement.get(elem)?.delete();
            this.itemByOptionElement.delete(elem);
        }
        this.setEmptyState();
    }
    selectNewReport() {
        this.comboBoxInternal.select(this.newLighthouseItem);
    }
}
class Item {
    constructor(lighthouseResult, renderReport, showLandingCallback) {
        Object.defineProperty(this, "lighthouseResult", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderReport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showLandingCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lighthouseResult = lighthouseResult;
        this.renderReport = renderReport;
        this.showLandingCallback = showLandingCallback;
        // In Lighthouse 10.0, `finalUrl` is not provided on snapshot or timespan reports.
        // `finalDisplayedUrl` is the new preferred URL to use for cosmetic identification.
        // TODO: Remove the `finalUrl` backport once Lighthouse 10.0 is rolled into DevTools.
        const finalDisplayedUrl = lighthouseResult.finalDisplayedUrl || lighthouseResult.finalUrl || '';
        const url = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(finalDisplayedUrl);
        const timestamp = lighthouseResult.fetchTime;
        this.element = document.createElement('option');
        this.element.label = `${new Date(timestamp).toLocaleTimeString()} - ${url.domain()}`;
    }
    select() {
        this.renderReport();
    }
    optionElement() {
        return this.element;
    }
    delete() {
        if (this.element) {
            this.element.remove();
        }
        this.showLandingCallback();
    }
}


/***/ }),

/***/ "./src/panels/lighthouse/LighthouseTimespanView.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseTimespanView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimespanView: () => (/* binding */ TimespanView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     * @description Header indicating that a Lighthouse timespan is starting. "Timespan" is a Lighthouse mode that analyzes user interactions over a period of time.
     */
    timespanStarting: 'Timespan starting…',
    /**
     * @description Header indicating that a Lighthouse timespan has started. "Timespan" is a Lighthouse mode that analyzes user interactions over a period of time. "interact with the page" is a call to action for the user to interact with the web page.
     */
    timespanStarted: 'Timespan started, interact with the page',
    /**
     * @description Label for a button that ends a Lighthouse timespan. "timespan" is a Lighthouse mode that analyzes user interactions over a period of time.
     */
    endTimespan: 'End timespan',
    /**
     * @description Label for a button that cancels a Lighthouse timespan.
     */
    cancel: 'Cancel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/lighthouse/LighthouseTimespanView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class TimespanView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.Dialog {
    constructor(panel) {
        super();
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "statusHeader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.panel = panel;
        this.statusHeader = null;
        this.endButton = null;
        this.setDimmed(true);
        this.setCloseOnEscape(false);
        this.setOutsideClickCallback(event => event.consume(true));
        this.render();
    }
    show(dialogRenderElement) {
        this.reset();
        super.show(dialogRenderElement);
    }
    reset() {
        if (this.statusHeader && this.endButton) {
            this.statusHeader.textContent = i18nString(UIStrings.timespanStarting);
            this.endButton.disabled = true;
        }
    }
    ready() {
        if (this.statusHeader && this.endButton) {
            this.statusHeader.textContent = i18nString(UIStrings.timespanStarted);
            this.endButton.disabled = false;
            this.endButton.focus();
        }
    }
    render() {
        const dialogRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createShadowRootWithCoreStyles(this.contentElement, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseDialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        this.endButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.endTimespan), this.endTimespan.bind(this), { variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY, jslogContext: 'lighthouse.end-time-span' });
        const cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), this.cancel.bind(this), {
            jslogContext: 'lighthouse.cancel',
        });
        const fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
  <div class="lighthouse-view vbox">
  <h2 $="status-header"></h2>
  <div class="lighthouse-action-buttons hbox">
  ${cancelButton}
  ${this.endButton}
  </div>
  </div>
  `;
        this.statusHeader = fragment.$('status-header');
        dialogRoot.appendChild(fragment.element());
        this.setSizeBehavior(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.GlassPane.SizeBehavior.SetExactWidthMaxHeight);
        this.setMaxContentSize(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Size(500, 400));
        this.reset();
    }
    async endTimespan() {
        await this.panel.handleTimespanEnd();
    }
    async cancel() {
        await this.panel.handleRunCancel();
    }
}


/***/ }),

/***/ "./src/third_party/lighthouse/report/report.ts":
/*!*****************************************************!*\
  !*** ./src/third_party/lighthouse/report/report.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.DOM),
/* harmony export */   ReportRenderer: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportRenderer),
/* harmony export */   ReportUIFeatures: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportUIFeatures),
/* harmony export */   format: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.format),
/* harmony export */   renderReport: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.renderReport),
/* harmony export */   swapLocale: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.swapLocale)
/* harmony export */ });
/* harmony import */ var _bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle.js */ "./src/third_party/lighthouse/report/bundle.js");



/***/ })

}]);