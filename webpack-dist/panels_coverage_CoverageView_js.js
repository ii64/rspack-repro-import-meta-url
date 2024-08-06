"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_coverage_CoverageView_js"],{

/***/ "./panels/coverage/CoverageDecorationManager.js":
/*!******************************************************!*\
  !*** ./panels/coverage/CoverageDecorationManager.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* binding */ CoverageDecorationManager),
/* harmony export */   decoratorType: () => (/* binding */ decoratorType)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const decoratorType = 'coverage';
class CoverageDecorationManager {
    coverageModel;
    textByProvider;
    uiSourceCodeByContentProvider;
    #workspace;
    #debuggerBinding;
    #cssBinding;
    constructor(coverageModel, workspace, debuggerBinding, cssBinding) {
        this.coverageModel = coverageModel;
        this.#workspace = workspace;
        this.#debuggerBinding = debuggerBinding;
        this.#cssBinding = cssBinding;
        this.textByProvider = new Map();
        this.uiSourceCodeByContentProvider = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.Multimap();
        for (const uiSourceCode of this.#workspace.uiSourceCodes()) {
            uiSourceCode.setDecorationData(decoratorType, this);
        }
        this.#workspace.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
    }
    reset() {
        for (const uiSourceCode of this.#workspace.uiSourceCodes()) {
            uiSourceCode.setDecorationData(decoratorType, undefined);
        }
    }
    dispose() {
        this.reset();
        this.#workspace.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
    }
    update(updatedEntries) {
        for (const entry of updatedEntries) {
            for (const uiSourceCode of this.uiSourceCodeByContentProvider.get(entry.getContentProvider())) {
                uiSourceCode.setDecorationData(decoratorType, this);
            }
        }
    }
    /**
     * Returns the coverage per line of the provided uiSourceCode. The resulting array has the same length
     * as the provided `lines` array.
     *
     * @param uiSourceCode The UISourceCode for which to get the coverage info.
     * @param lineMappings The caller might have applied formatting to the UISourceCode. Each entry
     *                     in this array represents one line and the range specifies where it's found in
     *                     the original content.
     */
    async usageByLine(uiSourceCode, lineMappings) {
        const result = [];
        await this.updateTexts(uiSourceCode, lineMappings);
        for (const { startLine, startColumn, endLine, endColumn } of lineMappings) {
            const startLocationsPromise = this.rawLocationsForSourceLocation(uiSourceCode, startLine, startColumn);
            const endLocationsPromise = this.rawLocationsForSourceLocation(uiSourceCode, endLine, endColumn);
            const [startLocations, endLocations] = await Promise.all([startLocationsPromise, endLocationsPromise]);
            let used = undefined;
            for (let startIndex = 0, endIndex = 0; startIndex < startLocations.length; ++startIndex) {
                const start = startLocations[startIndex];
                while (endIndex < endLocations.length &&
                    CoverageDecorationManager.compareLocations(start, endLocations[endIndex]) >= 0) {
                    ++endIndex;
                }
                if (endIndex >= endLocations.length || endLocations[endIndex].id !== start.id) {
                    continue;
                }
                const end = endLocations[endIndex++];
                const text = this.textByProvider.get(end.contentProvider);
                if (!text) {
                    continue;
                }
                const textValue = text.value();
                let startOffset = Math.min(text.offsetFromPosition(start.line, start.column), textValue.length - 1);
                let endOffset = Math.min(text.offsetFromPosition(end.line, end.column), textValue.length - 1);
                while (startOffset <= endOffset && /\s/.test(textValue[startOffset])) {
                    ++startOffset;
                }
                while (startOffset <= endOffset && /\s/.test(textValue[endOffset])) {
                    --endOffset;
                }
                if (startOffset <= endOffset) {
                    used = this.coverageModel.usageForRange(end.contentProvider, startOffset, endOffset);
                }
                if (used) {
                    break;
                }
            }
            result.push(used);
        }
        return result;
    }
    async updateTexts(uiSourceCode, lineMappings) {
        const promises = [];
        for (const range of lineMappings) {
            for (const entry of await this.rawLocationsForSourceLocation(uiSourceCode, range.startLine, 0)) {
                if (this.textByProvider.has(entry.contentProvider)) {
                    continue;
                }
                this.textByProvider.set(entry.contentProvider, null);
                this.uiSourceCodeByContentProvider.set(entry.contentProvider, uiSourceCode);
                promises.push(this.updateTextForProvider(entry.contentProvider));
            }
        }
        await Promise.all(promises);
    }
    async updateTextForProvider(contentProvider) {
        const content = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData.textOr(await contentProvider.requestContentData(), '');
        this.textByProvider.set(contentProvider, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.Text.Text(content));
    }
    async rawLocationsForSourceLocation(uiSourceCode, line, column) {
        const result = [];
        const contentType = uiSourceCode.contentType();
        if (contentType.hasScripts()) {
            let locations = await this.#debuggerBinding.uiLocationToRawLocations(uiSourceCode, line, column);
            locations = locations.filter(location => Boolean(location.script()));
            for (const location of locations) {
                const script = location.script();
                if (!script) {
                    continue;
                }
                if (script.isInlineScript() && contentType.isDocument()) {
                    location.lineNumber -= script.lineOffset;
                    if (!location.lineNumber) {
                        location.columnNumber -= script.columnOffset;
                    }
                }
                result.push({
                    id: `js:${location.scriptId}`,
                    contentProvider: script,
                    line: location.lineNumber,
                    column: location.columnNumber,
                });
            }
        }
        if (contentType.isStyleSheet() || contentType.isDocument()) {
            const rawStyleLocations = this.#cssBinding.uiLocationToRawLocations(new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, line, column));
            for (const location of rawStyleLocations) {
                const header = location.header();
                if (!header) {
                    continue;
                }
                if (header.isInline && contentType.isDocument()) {
                    location.lineNumber -= header.startLine;
                    if (!location.lineNumber) {
                        location.columnNumber -= header.startColumn;
                    }
                }
                result.push({
                    id: `css:${location.styleSheetId}`,
                    contentProvider: header,
                    line: location.lineNumber,
                    column: location.columnNumber,
                });
            }
        }
        return result.sort(CoverageDecorationManager.compareLocations);
    }
    static compareLocations(a, b) {
        return a.id.localeCompare(b.id) || a.line - b.line || a.column - b.column;
    }
    onUISourceCodeAdded(event) {
        const uiSourceCode = event.data;
        uiSourceCode.setDecorationData(decoratorType, this);
    }
}
//# sourceMappingURL=CoverageDecorationManager.js.map

/***/ }),

/***/ "./panels/coverage/CoverageView.js":
/*!*****************************************!*\
  !*** ./panels/coverage/CoverageView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   CoverageView: () => (/* binding */ CoverageView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */ var _coverageView_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coverageView.css.js */ "./panels/coverage/coverageView.css.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













const UIStrings = {
    /**
     *@description Tooltip in Coverage List View of the Coverage tab for selecting JavaScript coverage mode
     */
    chooseCoverageGranularityPer: 'Choose coverage granularity: Per function has low overhead, per block has significant overhead.',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    perFunction: 'Per function',
    /**
     *@description Text in Coverage List View of the Coverage tab
     */
    perBlock: 'Per block',
    /**
     *@description Text in Coverage View of the Coverage tab
     */
    filterByUrl: 'Filter by URL',
    /**
     *@description Label for the type filter in the Converage Panel
     */
    filterCoverageByType: 'Filter coverage by type',
    /**
     *@description Text for everything
     */
    all: 'All',
    /**
     *@description Text that appears on a button for the css resource type filter.
     */
    css: 'CSS',
    /**
     *@description Text in Timeline Tree View of the Performance panel
     */
    javascript: 'JavaScript',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Coverage View of the Coverage tab
     */
    includeExtensionContentScripts: 'Include extension content scripts',
    /**
     *@description Title for a type of source files
     */
    contentScripts: 'Content scripts',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {record button icon} PH1
     */
    clickTheReloadButtonSToReloadAnd: 'Click the reload button {PH1} to reload and start capturing coverage.',
    /**
     *@description Message in Coverage View of the Coverage tab
     *@example {record button icon} PH1
     */
    clickTheRecordButtonSToStart: 'Click the record button {PH1} to start capturing coverage.',
    /**
     *@description Message in the Coverage View explaining that DevTools could not capture coverage.
     */
    bfcacheNoCapture: 'Could not capture coverage info because the page was served from the back/forward cache.',
    /**
     *@description  Message in the Coverage View explaining that DevTools could not capture coverage.
     */
    activationNoCapture: 'Could not capture coverage info because the page was prerendered in the background.',
    /**
     *@description  Message in the Coverage View prompting the user to reload the page.
     *@example {reload button icon} PH1
     */
    reloadPrompt: 'Click the reload button {PH1} to reload and get coverage.',
    /**
     *@description Footer message in Coverage View of the Coverage tab
     *@example {300k used, 600k unused} PH1
     *@example {500k used, 800k unused} PH2
     */
    filteredSTotalS: 'Filtered: {PH1}  Total: {PH2}',
    /**
     *@description Footer message in Coverage View of the Coverage tab
     *@example {1.5 MB} PH1
     *@example {2.1 MB} PH2
     *@example {71%} PH3
     *@example {29%} PH4
     */
    sOfSSUsedSoFarSUnused: '{PH1} of {PH2} ({PH3}%) used so far, {PH4} unused.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/coverage/CoverageView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let coverageViewInstance;
class CoverageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    model;
    decorationManager;
    coverageTypeComboBox;
    coverageTypeComboBoxSetting;
    toggleRecordAction;
    toggleRecordButton;
    inlineReloadButton;
    startWithReloadButton;
    clearAction;
    exportAction;
    textFilterRegExp;
    filterInput;
    typeFilterValue;
    filterByTypeComboBox;
    showContentScriptsSetting;
    contentScriptsCheckbox;
    coverageResultsElement;
    landingPage;
    bfcacheReloadPromptPage;
    activationReloadPromptPage;
    listView;
    statusToolbarElement;
    statusMessageElement;
    constructor() {
        super(true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.panel('coverage').track({ resize: true })}`);
        this.model = null;
        this.decorationManager = null;
        const toolbarContainer = this.contentElement.createChild('div', 'coverage-toolbar-container');
        toolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()}`);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('coverage-toolbar', toolbarContainer);
        toolbar.makeWrappable(true);
        this.coverageTypeComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarComboBox(this.onCoverageTypeComboBoxSelectionChanged.bind(this), i18nString(UIStrings.chooseCoverageGranularityPer), undefined, 'coverage-type');
        const coverageTypes = [
            {
                label: i18nString(UIStrings.perFunction),
                value: 2 /* CoverageType.JavaScript */ | 4 /* CoverageType.JavaScriptPerFunction */,
            },
            {
                label: i18nString(UIStrings.perBlock),
                value: 2 /* CoverageType.JavaScript */,
            },
        ];
        for (const type of coverageTypes) {
            this.coverageTypeComboBox.addOption(this.coverageTypeComboBox.createOption(type.label, `${type.value}`));
        }
        this.coverageTypeComboBoxSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('coverage-view-coverage-type', 0);
        this.coverageTypeComboBox.setSelectedIndex(this.coverageTypeComboBoxSetting.get());
        this.coverageTypeComboBox.setEnabled(true);
        toolbar.appendToolbarItem(this.coverageTypeComboBox);
        this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.toggle-recording');
        this.toggleRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction);
        toolbar.appendToolbarItem(this.toggleRecordButton);
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
        const mainTargetSupportsRecordOnReload = mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
        this.inlineReloadButton = null;
        if (mainTargetSupportsRecordOnReload) {
            this.startWithReloadButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('coverage.start-with-reload');
            toolbar.appendToolbarItem(this.startWithReloadButton);
            this.toggleRecordButton.setEnabled(false);
            this.toggleRecordButton.setVisible(false);
        }
        this.clearAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.clear');
        this.clearAction.setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(this.clearAction));
        toolbar.appendSeparator();
        this.exportAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('coverage.export');
        this.exportAction.setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(this.exportAction));
        this.textFilterRegExp = null;
        toolbar.appendSeparator();
        this.filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByUrl), 0.4, 1);
        this.filterInput.setEnabled(false);
        this.filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.onFilterChanged, this);
        toolbar.appendToolbarItem(this.filterInput);
        toolbar.appendSeparator();
        this.typeFilterValue = null;
        this.filterByTypeComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarComboBox(this.onFilterByTypeChanged.bind(this), i18nString(UIStrings.filterCoverageByType), undefined, 'coverage-by-type');
        const options = [
            {
                label: i18nString(UIStrings.all),
                value: '',
            },
            {
                label: i18nString(UIStrings.css),
                value: 1 /* CoverageType.CSS */,
            },
            {
                label: i18nString(UIStrings.javascript),
                value: 2 /* CoverageType.JavaScript */ | 4 /* CoverageType.JavaScriptPerFunction */,
            },
        ];
        for (const option of options) {
            this.filterByTypeComboBox.addOption(this.filterByTypeComboBox.createOption(option.label, `${option.value}`));
        }
        this.filterByTypeComboBox.setSelectedIndex(0);
        this.filterByTypeComboBox.setEnabled(false);
        toolbar.appendToolbarItem(this.filterByTypeComboBox);
        toolbar.appendSeparator();
        this.showContentScriptsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-content-scripts', false);
        this.showContentScriptsSetting.addChangeListener(this.onFilterChanged, this);
        this.contentScriptsCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSettingCheckbox(this.showContentScriptsSetting, i18nString(UIStrings.includeExtensionContentScripts), i18nString(UIStrings.contentScripts));
        this.contentScriptsCheckbox.setEnabled(false);
        toolbar.appendToolbarItem(this.contentScriptsCheckbox);
        this.coverageResultsElement = this.contentElement.createChild('div', 'coverage-results');
        this.landingPage = this.buildLandingPage();
        this.bfcacheReloadPromptPage = this.buildReloadPromptPage(i18nString(UIStrings.bfcacheNoCapture), 'bfcache-page');
        this.activationReloadPromptPage =
            this.buildReloadPromptPage(i18nString(UIStrings.activationNoCapture), 'prerender-page');
        this.listView = new _CoverageListView_js__WEBPACK_IMPORTED_MODULE_10__.CoverageListView(this.isVisible.bind(this, false));
        this.statusToolbarElement = this.contentElement.createChild('div', 'coverage-toolbar-summary');
        this.statusMessageElement = this.statusToolbarElement.createChild('div', 'coverage-message');
        this.landingPage.show(this.coverageResultsElement);
    }
    static instance() {
        if (!coverageViewInstance) {
            coverageViewInstance = new CoverageView();
        }
        return coverageViewInstance;
    }
    static removeInstance() {
        coverageViewInstance = undefined;
    }
    buildLandingPage() {
        const widget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
        let message;
        if (this.startWithReloadButton) {
            this.inlineReloadButton =
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('coverage.start-with-reload'));
            message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheReloadButtonSToReloadAnd, { PH1: this.inlineReloadButton });
        }
        else {
            const recordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction));
            message = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheRecordButtonSToStart, { PH1: recordButton });
        }
        message.classList.add('message');
        widget.contentElement.appendChild(message);
        widget.element.classList.add('landing-page');
        return widget;
    }
    buildReloadPromptPage(message, className) {
        const widget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox();
        const reasonDiv = document.createElement('div');
        reasonDiv.classList.add('message');
        reasonDiv.textContent = message;
        widget.contentElement.appendChild(reasonDiv);
        this.inlineReloadButton =
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createInlineButton(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('inspector-main.reload'));
        const messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.reloadPrompt, { PH1: this.inlineReloadButton });
        messageElement.classList.add('message');
        widget.contentElement.appendChild(messageElement);
        widget.element.classList.add(className);
        return widget;
    }
    clear() {
        if (this.model) {
            this.model.reset();
        }
        this.reset();
    }
    reset() {
        if (this.decorationManager) {
            this.decorationManager.dispose();
            this.decorationManager = null;
        }
        this.listView.reset();
        this.listView.detach();
        this.landingPage.show(this.coverageResultsElement);
        this.statusMessageElement.textContent = '';
        this.filterInput.setEnabled(false);
        this.filterByTypeComboBox.setEnabled(false);
        this.contentScriptsCheckbox.setEnabled(false);
        this.exportAction.setEnabled(false);
    }
    toggleRecording() {
        const enable = !this.toggleRecordAction.toggled();
        if (enable) {
            void this.startRecording({ reload: false, jsCoveragePerBlock: this.isBlockCoverageSelected() });
        }
        else {
            void this.stopRecording();
        }
    }
    isBlockCoverageSelected() {
        const option = this.coverageTypeComboBox.selectedOption();
        const coverageType = Number(option ? option.value : Number.NaN);
        // Check that Coverage.CoverageType.JavaScriptPerFunction is not present.
        return coverageType === 2 /* CoverageType.JavaScript */;
    }
    selectCoverageType(jsCoveragePerBlock) {
        const selectedIndex = jsCoveragePerBlock ? 1 : 0;
        this.coverageTypeComboBox.setSelectedIndex(selectedIndex);
    }
    onCoverageTypeComboBoxSelectionChanged() {
        this.coverageTypeComboBoxSetting.set(this.coverageTypeComboBox.selectedIndex());
    }
    async ensureRecordingStarted() {
        const enabled = this.toggleRecordAction.toggled();
        if (enabled) {
            await this.stopRecording();
        }
        await this.startRecording({ reload: false, jsCoveragePerBlock: false });
    }
    async startRecording(options) {
        let hadFocus, reloadButtonFocused;
        if ((this.startWithReloadButton && this.startWithReloadButton.element.hasFocus()) ||
            (this.inlineReloadButton && this.inlineReloadButton.hasFocus())) {
            reloadButtonFocused = true;
        }
        else if (this.hasFocus()) {
            hadFocus = true;
        }
        this.reset();
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const { reload, jsCoveragePerBlock } = { reload: false, jsCoveragePerBlock: false, ...options };
        if (!this.model || reload) {
            this.model = mainTarget.model(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.CoverageModel);
        }
        if (!this.model) {
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageStarted);
        if (jsCoveragePerBlock) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageStartedPerBlock);
        }
        const success = await this.model.start(Boolean(jsCoveragePerBlock));
        if (!success) {
            return;
        }
        this.selectCoverageType(Boolean(jsCoveragePerBlock));
        this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, this.onCoverageDataReceived, this);
        this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.SourceMapResolved, this.updateListView, this);
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.PrimaryPageChanged, this.onPrimaryPageChanged, this);
        this.decorationManager = new _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager(this.model, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance());
        this.toggleRecordAction.setToggled(true);
        this.clearAction.setEnabled(false);
        if (this.startWithReloadButton) {
            this.startWithReloadButton.setEnabled(false);
            this.startWithReloadButton.setVisible(false);
            this.toggleRecordButton.setEnabled(true);
            this.toggleRecordButton.setVisible(true);
            if (reloadButtonFocused) {
                this.toggleRecordButton.focus();
            }
        }
        this.coverageTypeComboBox.setEnabled(false);
        this.filterInput.setEnabled(true);
        this.filterByTypeComboBox.setEnabled(true);
        this.contentScriptsCheckbox.setEnabled(true);
        if (this.landingPage.isShowing()) {
            this.landingPage.detach();
        }
        this.listView.show(this.coverageResultsElement);
        if (hadFocus && !reloadButtonFocused) {
            this.listView.focus();
        }
        if (reload && resourceTreeModel) {
            resourceTreeModel.reloadPage();
        }
        else {
            void this.model.startPolling();
        }
    }
    onCoverageDataReceived(event) {
        const data = event.data;
        this.updateViews(data);
    }
    updateListView() {
        this.listView.update(this.model && this.model.entries() || []);
    }
    async stopRecording() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.PrimaryPageChanged, this.onPrimaryPageChanged, this);
        if (this.hasFocus()) {
            this.listView.focus();
        }
        // Stopping the model triggers one last poll to get the final data.
        if (this.model) {
            await this.model.stop();
            this.model.removeEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, this.onCoverageDataReceived, this);
        }
        this.toggleRecordAction.setToggled(false);
        this.coverageTypeComboBox.setEnabled(true);
        if (this.startWithReloadButton) {
            this.startWithReloadButton.setEnabled(true);
            this.startWithReloadButton.setVisible(true);
            this.toggleRecordButton.setEnabled(false);
            this.toggleRecordButton.setVisible(false);
        }
        this.clearAction.setEnabled(true);
    }
    processBacklog() {
        this.model && void this.model.processJSBacklog();
    }
    async onPrimaryPageChanged(event) {
        const frame = event.data.frame;
        const coverageModel = frame.resourceTreeModel().target().model(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.CoverageModel);
        if (!coverageModel) {
            return;
        }
        // If the primary page target has changed (due to MPArch activation), switch to new CoverageModel.
        if (this.model !== coverageModel) {
            if (this.model) {
                await this.model.stop();
                this.model.removeEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, this.onCoverageDataReceived, this);
            }
            this.model = coverageModel;
            const success = await this.model.start(this.isBlockCoverageSelected());
            if (!success) {
                return;
            }
            this.model.addEventListener(_CoverageModel_js__WEBPACK_IMPORTED_MODULE_11__.Events.CoverageUpdated, this.onCoverageDataReceived, this);
            this.decorationManager = new _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager(this.model, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance(), _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance());
        }
        if (this.bfcacheReloadPromptPage.isShowing()) {
            this.bfcacheReloadPromptPage.detach();
            this.listView.show(this.coverageResultsElement);
        }
        if (this.activationReloadPromptPage.isShowing()) {
            this.activationReloadPromptPage.detach();
            this.listView.show(this.coverageResultsElement);
        }
        if (frame.backForwardCacheDetails.restoredFromCache) {
            this.listView.detach();
            this.bfcacheReloadPromptPage.show(this.coverageResultsElement);
        }
        if (event.data.type === "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */) {
            this.listView.detach();
            this.activationReloadPromptPage.show(this.coverageResultsElement);
        }
        this.model.reset();
        this.decorationManager && this.decorationManager.reset();
        this.listView.reset();
        void this.model.startPolling();
    }
    updateViews(updatedEntries) {
        this.updateStats();
        this.listView.update(this.model && this.model.entries() || []);
        this.exportAction.setEnabled(this.model !== null && this.model.entries().length > 0);
        this.decorationManager && this.decorationManager.update(updatedEntries);
    }
    updateStats() {
        const all = { total: 0, unused: 0 };
        const filtered = { total: 0, unused: 0 };
        const filterApplied = this.textFilterRegExp !== null;
        if (this.model) {
            for (const info of this.model.entries()) {
                all.total += info.size();
                all.unused += info.unusedSize();
                if (this.isVisible(false, info)) {
                    if (this.textFilterRegExp?.test(info.url())) {
                        filtered.total += info.size();
                        filtered.unused += info.unusedSize();
                    }
                    else {
                        // If it doesn't match the filter, calculate the stats from visible children if there are any
                        for (const childInfo of info.sourcesURLCoverageInfo.values()) {
                            if (this.isVisible(false, childInfo)) {
                                filtered.total += childInfo.size();
                                filtered.unused += childInfo.unusedSize();
                            }
                        }
                    }
                }
            }
        }
        this.statusMessageElement.textContent = filterApplied ?
            i18nString(UIStrings.filteredSTotalS, { PH1: formatStat(filtered), PH2: formatStat(all) }) :
            formatStat(all);
        function formatStat({ total, unused }) {
            const used = total - unused;
            const percentUsed = total ? Math.round(100 * used / total) : 0;
            return i18nString(UIStrings.sOfSSUsedSoFarSUnused, {
                PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(used),
                PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(total),
                PH3: percentUsed,
                PH4: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(unused),
            });
        }
    }
    onFilterChanged() {
        if (!this.listView) {
            return;
        }
        const text = this.filterInput.value();
        this.textFilterRegExp = text ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.createPlainTextSearchRegex(text, 'i') : null;
        this.listView.updateFilterAndHighlight(this.textFilterRegExp);
        this.updateStats();
    }
    onFilterByTypeChanged() {
        if (!this.listView) {
            return;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CoverageReportFiltered);
        const option = this.filterByTypeComboBox.selectedOption();
        const type = option && option.value;
        this.typeFilterValue = parseInt(type || '', 10) || null;
        this.listView.updateFilterAndHighlight(this.textFilterRegExp);
        this.updateStats();
    }
    isVisible(ignoreTextFilter, coverageInfo) {
        const url = coverageInfo.url();
        if (url.startsWith(CoverageView.EXTENSION_BINDINGS_URL_PREFIX)) {
            return false;
        }
        if (coverageInfo.isContentScript() && !this.showContentScriptsSetting.get()) {
            return false;
        }
        if (this.typeFilterValue && !(coverageInfo.type() & this.typeFilterValue)) {
            return false;
        }
        // If it's a parent, check if any children are visible
        if (coverageInfo.sourcesURLCoverageInfo.size > 0) {
            for (const sourceURLCoverageInfo of coverageInfo.sourcesURLCoverageInfo.values()) {
                if (this.isVisible(ignoreTextFilter, sourceURLCoverageInfo)) {
                    return true;
                }
            }
        }
        return ignoreTextFilter || !this.textFilterRegExp || this.textFilterRegExp.test(url);
    }
    async exportReport() {
        const fos = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.FileUtils.FileOutputStream();
        const fileName = `Coverage-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date())}.json`;
        const accepted = await fos.open(fileName);
        if (!accepted) {
            return;
        }
        this.model && await this.model.exportReport(fos);
    }
    selectCoverageItemByUrl(url) {
        this.listView.selectByUrl(url);
    }
    static EXTENSION_BINDINGS_URL_PREFIX = 'extensions::';
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(CoverageView, this);
        super.wasShown();
        this.registerCSSFiles([_coverageView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]]);
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(CoverageView, null);
    }
}
class ActionDelegate {
    handleAction(_context, actionId) {
        const coverageViewId = 'coverage';
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance()
            .showView(coverageViewId, /** userGesture= */ false, /** omitFocus= */ true)
            .then(() => {
            const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().view(coverageViewId);
            return view && view.widget();
        })
            .then(widget => this.innerHandleAction(widget, actionId));
        return true;
    }
    innerHandleAction(coverageView, actionId) {
        switch (actionId) {
            case 'coverage.toggle-recording':
                coverageView.toggleRecording();
                break;
            case 'coverage.start-with-reload':
                void coverageView.startRecording({ reload: true, jsCoveragePerBlock: coverageView.isBlockCoverageSelected() });
                break;
            case 'coverage.clear':
                coverageView.clear();
                break;
            case 'coverage.export':
                void coverageView.exportReport();
                break;
            default:
                console.assert(false, `Unknown action: ${actionId}`);
        }
    }
}
//# sourceMappingURL=CoverageView.js.map

/***/ }),

/***/ "./panels/coverage/coverageView.css.js":
/*!*********************************************!*\
  !*** ./panels/coverage/coverageView.css.js ***!
  \*********************************************/
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
 * Copyright (c) 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.coverage-toolbar-container {
  display: flex;
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.coverage-toolbar {
  display: inline-block;
  width: 100%;
}

.coverage-toolbar-summary {
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  padding-left: 5px;
  flex: 0 0 19px;
  display: flex;
  padding-right: 5px;
}

.coverage-toolbar-summary .coverage-message {
  padding-top: 2px;
  padding-left: 1ex;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.coverage-results {
  overflow-y: auto;
  display: flex;
  flex: auto;
}

.landing-page,
.bfcache-page,
.prerender-page {
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.landing-page .message,
.bfcache-page .message,
.prerender-page .message {
  white-space: pre-line;
  text-align: center;
}

/*# sourceURL=coverageView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);