"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_PreloadingView_js"],{

/***/ "./panels/application/preloading/PreloadingView.js":
/*!*********************************************************!*\
  !*** ./panels/application/preloading/PreloadingView.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloadingAttemptView: () => (/* binding */ PreloadingAttemptView),
/* harmony export */   PreloadingRuleSetView: () => (/* binding */ PreloadingRuleSetView),
/* harmony export */   PreloadingSummaryView: () => (/* binding */ PreloadingSummaryView),
/* harmony export */   PreloadingWarningsView: () => (/* binding */ PreloadingWarningsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/split_view/split_view.js */ "./ui/components/split_view/split_view.js");
/* harmony import */ var _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/emptyWidget.css.js */ "./ui/legacy/emptyWidget.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/preloading/components/components.js");
/* harmony import */ var _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preloadingView.css.js */ "./panels/application/preloading/preloadingView.css.js");
/* harmony import */ var _preloadingViewDropDown_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preloadingViewDropDown.css.js */ "./panels/application/preloading/preloadingViewDropDown.css.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_components_js__WEBPACK_IMPORTED_MODULE_9__]);
_components_components_js__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






// eslint-disable-next-line rulesdir/es_modules_import







const UIStrings = {
    /**
     *@description DropDown title for filtering preloading attempts by rule set
     */
    filterFilterByRuleSet: 'Filter by rule set',
    /**
     *@description DropDown text for filtering preloading attempts by rule set: No filter
     */
    filterAllPreloads: 'All speculative loads',
    /**
     *@description Text in grid: Rule set is valid
     */
    validityValid: 'Valid',
    /**
     *@description Text in grid: Rule set must be a valid JSON object
     */
    validityInvalid: 'Invalid',
    /**
     *@description Text in grid: Rule set contains invalid rules and they are ignored
     */
    validitySomeRulesInvalid: 'Some rules invalid',
    /**
     *@description Text in grid and details: Preloading attempt is not yet triggered.
     */
    statusNotTriggered: 'Not triggered',
    /**
     *@description Text in grid and details: Preloading attempt is eligible but pending.
     */
    statusPending: 'Pending',
    /**
     *@description Text in grid and details: Preloading is running.
     */
    statusRunning: 'Running',
    /**
     *@description Text in grid and details: Preloading finished and the result is ready for the next navigation.
     */
    statusReady: 'Ready',
    /**
     *@description Text in grid and details: Ready, then used.
     */
    statusSuccess: 'Success',
    /**
     *@description Text in grid and details: Preloading failed.
     */
    statusFailure: 'Failure',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/PreloadingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
// Used for selector, indicating no filter is specified.
const AllRuleSetRootId = Symbol('AllRuleSetRootId');
class PreloadingUIUtils {
    static status(status) {
        // See content/public/browser/preloading.h PreloadingAttemptOutcome.
        switch (status) {
            case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */:
                return i18nString(UIStrings.statusNotTriggered);
            case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */:
                return i18nString(UIStrings.statusPending);
            case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */:
                return i18nString(UIStrings.statusRunning);
            case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */:
                return i18nString(UIStrings.statusReady);
            case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */:
                return i18nString(UIStrings.statusSuccess);
            case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */:
                return i18nString(UIStrings.statusFailure);
            // NotSupported is used to handle unreachable case. For example,
            // there is no code path for
            // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
            // which is mapped to NotSupported. So, we regard it as an
            // internal error.
            case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */:
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
        }
    }
    static preloadsStatusSummary(countsByStatus) {
        const LIST = [
            "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */,
            "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */,
            "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */,
            "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */,
            "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */,
            "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */,
        ];
        return LIST.filter(status => (countsByStatus?.get(status) || 0) > 0)
            .map(status => (countsByStatus?.get(status) || 0) + ' ' + this.status(status))
            .join(', ')
            .toLocaleLowerCase();
    }
    // Summary of error of rule set shown in grid.
    static validity({ errorType }) {
        switch (errorType) {
            case undefined:
                return i18nString(UIStrings.validityValid);
            case "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */:
                return i18nString(UIStrings.validityInvalid);
            case "InvalidRulesSkipped" /* Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped */:
                return i18nString(UIStrings.validitySomeRulesInvalid);
        }
    }
    // Where a rule set came from, shown in grid.
    static location(ruleSet) {
        if (ruleSet.backendNodeId !== undefined) {
            return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('<script>');
        }
        if (ruleSet.url !== undefined) {
            return ruleSet.url;
        }
        throw Error('unreachable');
    }
    static processLocalId(id) {
        // RuleSetId is form of '<processId>.<processLocalId>'
        const index = id.indexOf('.');
        return index === -1 ? id : id.slice(index + 1);
    }
    // TODO(https://crbug.com/1410709): Move
    // front_end/panels/application/preloading/components/PreloadingString.ts
    // to
    // front_end/panels/application/preloading/helper/PreloadingString.ts
    // and use PreloadingString.ruleSetLocationShort.
    static ruleSetLocationShort(ruleSet, pageURL) {
        const url = ruleSet.url === undefined ? pageURL : ruleSet.url;
        return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(url);
    }
}
function pageURL() {
    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.inspectedURL() ||
        '';
}
class PreloadingRuleSetView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    model;
    focusedRuleSetId = null;
    focusedPreloadingAttemptId = null;
    warningsContainer;
    warningsView = new PreloadingWarningsView();
    hsplit;
    ruleSetGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RuleSetGrid.RuleSetGrid();
    ruleSetDetails = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RuleSetDetailsView.RuleSetDetailsView();
    constructor(model) {
        super(/* isWebComponent */ true, /* delegatesFocus */ false);
        this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */, this.render, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */, this.warningsView.onWarningsUpdated, this.warningsView, { scoped: true });
        // this (VBox)
        //   +- warningsContainer
        //        +- PreloadingWarningsView
        //   +- hsplit
        //        +- leftContainer
        //             +- RuleSetGrid
        //        +- rightContainer
        //             +- RuleSetDetailsView
        //
        // - If an row of RuleSetGrid selected, RuleSetDetailsView shows details of it.
        // - If not, RuleSetDetailsView hides.
        this.warningsContainer = document.createElement('div');
        this.warningsContainer.classList.add('flex-none');
        this.contentElement.insertBefore(this.warningsContainer, this.contentElement.firstChild);
        this.warningsView.show(this.warningsContainer);
        this.ruleSetGrid.addEventListener('cellfocused', this.onRuleSetsGridCellFocused.bind(this));
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName} .horizontal=${true} style="--min-sidebar-size: 0px">
          <div slot="main" class="overflow-auto" style="height: 100%">
            ${this.ruleSetGrid}
          </div>
          <div slot="sidebar" class="overflow-auto" style="height: 100%"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('rule-set-details')}>
            ${this.ruleSetDetails}
          </div>
        </${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName}>`, this.contentElement, { host: this });
        this.hsplit = this.contentElement.querySelector('devtools-split-view');
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.warningsView.wasShown();
        this.render();
    }
    onScopeChange() {
        const model = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        this.render();
    }
    revealRuleSet(revealInfo) {
        this.focusedRuleSetId = revealInfo.ruleSetId;
        this.render();
    }
    updateRuleSetDetails() {
        const id = this.focusedRuleSetId;
        const ruleSet = id === null ? null : this.model.getRuleSetById(id);
        this.ruleSetDetails.data = ruleSet;
        if (ruleSet === null) {
            this.hsplit.style.setProperty('--current-main-area-size', '100%');
        }
        else {
            this.hsplit.style.setProperty('--current-main-area-size', '60%');
        }
    }
    render() {
        // Update rule sets grid
        const countsByRuleSetId = this.model.getPreloadCountsByRuleSetId();
        const ruleSetRows = this.model.getAllRuleSets().map(({ id, value }) => {
            const countsByStatus = countsByRuleSetId.get(id) || new Map();
            return {
                ruleSet: value,
                preloadsStatusSummary: PreloadingUIUtils.preloadsStatusSummary(countsByStatus),
            };
        });
        this.ruleSetGrid.update({ rows: ruleSetRows, pageURL: pageURL() });
        this.updateRuleSetDetails();
    }
    onRuleSetsGridCellFocused(event) {
        const focusedEvent = event;
        this.focusedRuleSetId =
            focusedEvent.data.row.cells.find(cell => cell.columnId === 'id')?.value;
        this.render();
    }
    getInfobarContainerForTest() {
        return this.warningsView.contentElement;
    }
    getRuleSetGridForTest() {
        return this.ruleSetGrid;
    }
    getRuleSetDetailsForTest() {
        return this.ruleSetDetails;
    }
}
class PreloadingAttemptView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    model;
    focusedPreloadingAttemptId = null;
    warningsContainer;
    warningsView = new PreloadingWarningsView();
    preloadingGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingGrid.PreloadingGrid();
    preloadingDetails = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingDetailsReportView.PreloadingDetailsReportView();
    ruleSetSelector;
    constructor(model) {
        super(/* isWebComponent */ true, /* delegatesFocus */ false);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('preloading-speculations')}`);
        this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */, this.render, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */, this.warningsView.onWarningsUpdated, this.warningsView, { scoped: true });
        // this (VBox)
        //   +- warningsContainer
        //        +- PreloadingWarningsView
        //   +- VBox
        //        +- toolbar (filtering)
        //        +- hsplit
        //             +- leftContainer
        //                  +- PreloadingGrid
        //             +- rightContainer
        //                  +- PreloadingDetailsReportView
        //
        // - If an row of PreloadingGrid selected, PreloadingDetailsReportView shows details of it.
        // - If not, PreloadingDetailsReportView shows some messages.
        this.warningsContainer = document.createElement('div');
        this.warningsContainer.classList.add('flex-none');
        this.contentElement.insertBefore(this.warningsContainer, this.contentElement.firstChild);
        this.warningsView.show(this.warningsContainer);
        const vbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('preloading-toolbar', vbox.contentElement);
        toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()}`);
        this.ruleSetSelector = new PreloadingRuleSetSelector(() => this.render());
        toolbar.appendToolbarItem(this.ruleSetSelector.item());
        this.preloadingGrid.addEventListener('cellfocused', this.onPreloadingGridCellFocused.bind(this));
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
        <${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName} .horizontal=${true} style="--min-sidebar-size: 0px">
          <div slot="main" class="overflow-auto" style="height: 100%">
            ${this.preloadingGrid}
          </div>
          <div slot="sidebar" class="overflow-auto" style="height: 100%">
            ${this.preloadingDetails}
          </div>
        </${_ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_4__.SplitView.SplitView.litTagName}>`, vbox.contentElement, { host: this });
        vbox.show(this.contentElement);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.warningsView.wasShown();
        this.render();
    }
    onScopeChange() {
        const model = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        this.render();
    }
    setFilter(filter) {
        let id = filter.ruleSetId;
        if (id !== null && this.model.getRuleSetById(id) === undefined) {
            id = null;
        }
        this.ruleSetSelector.select(id);
    }
    updatePreloadingDetails() {
        const id = this.focusedPreloadingAttemptId;
        const preloadingAttempt = id === null ? null : this.model.getPreloadingAttemptById(id);
        if (preloadingAttempt === null) {
            this.preloadingDetails.data = null;
        }
        else {
            const ruleSets = preloadingAttempt.ruleSetIds.map(id => this.model.getRuleSetById(id)).filter(x => x !== null);
            this.preloadingDetails.data = {
                preloadingAttempt,
                ruleSets,
                pageURL: pageURL(),
            };
        }
    }
    render() {
        // Update preloaidng grid
        const filteringRuleSetId = this.ruleSetSelector.getSelected();
        const rows = this.model.getPreloadingAttempts(filteringRuleSetId).map(({ id, value }) => {
            const attempt = value;
            const ruleSets = attempt.ruleSetIds.flatMap(id => {
                const ruleSet = this.model.getRuleSetById(id);
                return ruleSet === null ? [] : [ruleSet];
            });
            return {
                id,
                attempt,
                ruleSets,
            };
        });
        this.preloadingGrid.update({ rows, pageURL: pageURL() });
        this.updatePreloadingDetails();
    }
    onPreloadingGridCellFocused(event) {
        const focusedEvent = event;
        this.focusedPreloadingAttemptId = focusedEvent.data.row.cells.find(cell => cell.columnId === 'id')?.value;
        this.render();
    }
    getRuleSetSelectorToolbarItemForTest() {
        return this.ruleSetSelector.item();
    }
    getPreloadingGridForTest() {
        return this.preloadingGrid;
    }
    getPreloadingDetailsForTest() {
        return this.preloadingDetails;
    }
    selectRuleSetOnFilterForTest(id) {
        this.ruleSetSelector.select(id);
    }
}
class PreloadingSummaryView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    model;
    warningsContainer;
    warningsView = new PreloadingWarningsView();
    usedPreloading = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.UsedPreloadingView.UsedPreloadingView();
    constructor(model) {
        super(/* isWebComponent */ true, /* delegatesFocus */ false);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('speculative-loads')}`);
        this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */, this.render, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */, this.warningsView.onWarningsUpdated, this.warningsView, { scoped: true });
        this.warningsContainer = document.createElement('div');
        this.warningsContainer.classList.add('flex-none');
        this.contentElement.insertBefore(this.warningsContainer, this.contentElement.firstChild);
        this.warningsView.show(this.warningsContainer);
        const usedPreloadingContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        usedPreloadingContainer.contentElement.appendChild(this.usedPreloading);
        usedPreloadingContainer.show(this.contentElement);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _preloadingView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.warningsView.wasShown();
        this.render();
    }
    onScopeChange() {
        const model = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        this.render();
    }
    render() {
        this.usedPreloading.data = {
            pageURL: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.inspectedURL() ||
                '',
            previousAttempts: this.model.getPreloadingAttemptsOfPreviousPage().map(({ value }) => value),
            currentAttempts: this.model.getPreloadingAttempts(null).map(({ value }) => value),
        };
    }
    getUsedPreloadingForTest() {
        return this.usedPreloading;
    }
}
class PreloadingRuleSetSelector {
    model;
    onSelectionChanged = () => { };
    toolbarItem;
    listModel;
    dropDown;
    constructor(onSelectionChanged) {
        const model = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addScopeChangeListener(this.onScopeChange.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel, "ModelUpdated" /* SDK.PreloadingModel.Events.ModelUpdated */, this.onModelUpdated, this, { scoped: true });
        this.listModel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ListModel.ListModel();
        this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SoftDropDown.SoftDropDown(this.listModel, this);
        this.dropDown.setRowHeight(36);
        this.dropDown.setPlaceholderText(i18nString(UIStrings.filterAllPreloads));
        this.toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarItem(this.dropDown.element);
        this.toolbarItem.setTitle(i18nString(UIStrings.filterFilterByRuleSet));
        this.toolbarItem.element.classList.add('toolbar-has-dropdown');
        this.toolbarItem.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('filter-by-rule-set').track({ click: true })}`);
        // Initializes `listModel` and `dropDown` using data of the model.
        this.onModelUpdated();
        // Prevents emitting onSelectionChanged on the first call of `this.onModelUpdated()` for initialization.
        this.onSelectionChanged = onSelectionChanged;
    }
    onScopeChange() {
        const model = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().scopeTarget()?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PreloadingModel.PreloadingModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(model);
        this.model = model;
        this.onModelUpdated();
    }
    onModelUpdated() {
        const ids = this.model.getAllRuleSets().map(({ id }) => id);
        const items = [AllRuleSetRootId, ...ids];
        const selected = this.dropDown.getSelectedItem();
        this.listModel.replaceAll(items);
        if (selected === null) {
            this.dropDown.selectItem(AllRuleSetRootId);
        }
        else {
            this.dropDown.selectItem(selected);
        }
        this.updateWidth(items);
    }
    // Updates the width for the DropDown element.
    updateWidth(items) {
        // Width set by `UI.SoftDropDown`.
        const DEFAULT_WIDTH = 315;
        const urlLengths = items.map(x => this.titleFor(x).length);
        const maxLength = Math.max(...urlLengths);
        const width = Math.min(maxLength * 6 + 16, DEFAULT_WIDTH);
        this.dropDown.setWidth(width);
    }
    // AllRuleSetRootId is used within the selector to indicate the root item. When interacting with PreloadingModel,
    // it should be translated to null.
    translateItemIdToRuleSetId(id) {
        if (id === AllRuleSetRootId) {
            return null;
        }
        return id;
    }
    getSelected() {
        const selectItem = this.dropDown.getSelectedItem();
        if (selectItem === null) {
            return null;
        }
        return this.translateItemIdToRuleSetId(selectItem);
    }
    select(id) {
        this.dropDown.selectItem(id);
    }
    // Method for UI.Toolbar.Provider
    item() {
        return this.toolbarItem;
    }
    // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
    titleFor(id) {
        const convertedId = this.translateItemIdToRuleSetId(id);
        if (convertedId === null) {
            return i18nString(UIStrings.filterAllPreloads);
        }
        const ruleSet = this.model.getRuleSetById(convertedId);
        if (ruleSet === null) {
            return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
        }
        return PreloadingUIUtils.ruleSetLocationShort(ruleSet, pageURL());
    }
    subtitleFor(id) {
        const convertedId = this.translateItemIdToRuleSetId(id);
        const countsByStatus = this.model.getPreloadCountsByRuleSetId().get(convertedId) ||
            new Map();
        return PreloadingUIUtils.preloadsStatusSummary(countsByStatus);
    }
    // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
    createElementForItem(id) {
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [_preloadingViewDropDown_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(id), 100));
        const subTitle = shadowRoot.createChild('div', 'subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(subTitle, this.subtitleFor(id));
        return element;
    }
    // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
    isItemSelectable(_id) {
        return true;
    }
    // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
    itemSelected(_id) {
        this.onSelectionChanged();
    }
    // Method for UI.SoftDropDown.Delegate<Protocol.Preload.RuleSetId|typeof AllRuleSetRootId>
    highlightedItemChanged(_from, _to, _fromElement, _toElement) {
    }
}
class PreloadingWarningsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    infobar = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingDisabledInfobar.PreloadingDisabledInfobar();
    constructor() {
        super(/* isWebComponent */ false, /* delegatesFocus */ false);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.contentElement.append(this.infobar);
    }
    onWarningsUpdated(args) {
        this.infobar.data = args.data;
    }
}
//# sourceMappingURL=PreloadingView.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/preloading/preloadingView.css.js":
/*!*************************************************************!*\
  !*** ./panels/application/preloading/preloadingView.css.js ***!
  \*************************************************************/
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

.preloading-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
}

/*# sourceURL=preloading/preloadingView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/application/preloading/preloadingViewDropDown.css.js":
/*!*********************************************************************!*\
  !*** ./panels/application/preloading/preloadingViewDropDown.css.js ***!
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
 * Copyright 2024 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
}

.title {
  padding-left: 8px;
}

.subtitle {
  padding-left: 8px;
}

/*# sourceURL=preloading/preloadingViewDropDown.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/split_view/SplitView.js":
/*!***********************************************!*\
  !*** ./ui/components/split_view/SplitView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* binding */ SplitView)
/* harmony export */ });
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// clean-css does not compile this file correctly. So as a workaround adding styles inline.
const styles = `
  :host {
    --current-main-area-size: 50%;
    --resizer-size: 3px;
    --min-main-area-size: 200px;
    --min-sidebar-size: 150px;
    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));

    height: 100%;
    width: 100%;
    display: block;
    overflow: auto;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    container: sidebar / size; /* stylelint-disable-line property-no-unknown */
  }

  .container {
    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));
    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: relative;
    gap: var(--resizer-size);

    min-width: var(--min-container-size);
  }

  #resizer {
    background-color: var(--sys-color-surface1);
    position: absolute;
    user-select: none;

    /* horizontal */
    width: var(--resizer-size);
    cursor: col-resize;
    left: var(--resizer-position);
    bottom: 0;
    top: 0;
  }

  slot {
    overflow: auto;
    display: block;
  }

  slot[name="main"] {

    /* horizontal */
    width: var(--resizer-position);
    min-width: var(--min-main-area-size);
  }

  slot[name="sidebar"] {
    flex: 1 0 0;

    min-width: var(--min-sidebar-size);
  }

  .horizontal .container {
    flex-direction: column;
    min-height: var(--min-container-size);
    min-width: auto;
  }

  .horizontal #resizer {
    width: auto;
    height: var(--resizer-size);
    cursor: row-resize;
    top: var(--resizer-position);
    left: 0;
    right: 0;
  }

  .horizontal slot[name="main"] {
    width: auto;
    min-width: auto;
    height: var(--resizer-position);
    min-height: var(--min-main-area-size);
  }

  .horizontal slot[name="sidebar"] {
    min-width: auto;
    min-height: var(--min-sidebar-size);
  }
`;
const splitViewStyles = new CSSStyleSheet();
splitViewStyles.replaceSync(styles);
class SplitView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-split-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #mousePos = [0, 0];
    #mainAxisIdx = 0;
    #mainDimensions = [0, 0];
    #observer;
    #horizontal = false;
    connectedCallback() {
        this.style.setProperty('--current-main-area-size', '60%');
        this.#shadow.adoptedStyleSheets = [splitViewStyles];
        this.#observer = new ResizeObserver(entries => this.#onResize(entries[0].contentRect));
        this.#observer.observe(this);
        this.#render();
    }
    get horizontal() {
        return this.#horizontal;
    }
    set horizontal(horizontal) {
        this.#horizontal = horizontal;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #onResize = (rect) => {
        const prevMainAxisIdx = this.#mainAxisIdx;
        if (rect.width <= 600 && rect.height >= 600 || this.#horizontal) {
            this.#mainAxisIdx = 1;
        }
        else {
            this.#mainAxisIdx = 0;
        }
        if (this.#mainAxisIdx !== prevMainAxisIdx) {
            void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, this.#render);
        }
    };
    #onMouseDown = (event) => {
        const main = this.#shadow.querySelector('slot[name=main]');
        if (!main) {
            throw new Error('Main slot not found');
        }
        const rect = main.getBoundingClientRect();
        this.#mainDimensions = [rect.width, rect.height];
        this.#mousePos = [event.clientX, event.clientY];
        window.addEventListener('mousemove', this.#onMouseMove, true);
        window.addEventListener('mouseup', this.#onMouseUp, true);
    };
    #onMouseUp = () => {
        window.removeEventListener('mousemove', this.#onMouseMove, true);
        window.removeEventListener('mouseup', this.#onMouseUp, true);
    };
    #onMouseMove = (event) => {
        const mousePos = [event.clientX, event.clientY];
        const delta = mousePos[this.#mainAxisIdx] - this.#mousePos[this.#mainAxisIdx];
        const rect = this.getBoundingClientRect();
        const containerDimensions = [rect.width, rect.height];
        const length = ((this.#mainDimensions[this.#mainAxisIdx] + delta) * 100) / containerDimensions[this.#mainAxisIdx];
        this.style.setProperty('--current-main-area-size', length + '%');
    };
    #render = () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
        <div class="wrapper ${this.#mainAxisIdx === 1 ? 'horizontal' : ''}">
          <div class="container">
            <slot name="main"></slot>
            <div id="resizer" @mousedown=${this.#onMouseDown}></div>
            <slot name="sidebar"></slot>
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-split-view', SplitView);
//# sourceMappingURL=SplitView.js.map

/***/ }),

/***/ "./ui/components/split_view/split_view.js":
/*!************************************************!*\
  !*** ./ui/components/split_view/split_view.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitView: () => (/* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./ui/components/split_view/SplitView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=split_view.js.map

/***/ }),

/***/ "./ui/legacy/emptyWidget.css.js":
/*!**************************************!*\
  !*** ./ui/legacy/emptyWidget.css.js ***!
  \**************************************/
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
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.empty-bold-text {
  display: block;
  font-size: 1.5em;
  margin: 0.83em 0;
  font-weight: bold;
}

.empty-view {
  color: var(--sys-color-token-subtle);
  padding: 30px;
  text-align: center;
  min-width: 70px;
}

.empty-view-scroller {
  justify-content: center;
  overflow: auto;
}

.empty-view p {
  white-space: initial;
  line-height: 18px;
  max-width: 300px;
  flex-shrink: 0;
}

/*# sourceURL=emptyWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);