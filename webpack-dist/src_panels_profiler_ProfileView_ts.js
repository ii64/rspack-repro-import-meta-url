"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfileView_ts"],{

/***/ "./src/panels/profiler/ProfileView.ts":
/*!********************************************!*\
  !*** ./src/panels/profiler/ProfileView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileView: () => (/* binding */ ProfileView),
/* harmony export */   ViewTypes: () => (/* binding */ ViewTypes),
/* harmony export */   WritableProfileHeader: () => (/* binding */ WritableProfileHeader),
/* harmony export */   maxLinkLength: () => (/* binding */ maxLinkLength)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BottomUpProfileDataGrid.js */ "./src/panels/profiler/BottomUpProfileDataGrid.ts");
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./src/panels/profiler/ProfileDataGrid.ts");
/* harmony import */ var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./src/panels/profiler/ProfileFlameChartDataProvider.ts");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileHeader.js */ "./src/panels/profiler/ProfileHeader.ts");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./src/panels/profiler/ProfileSidebarTreeElement.ts");
/* harmony import */ var _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopDownProfileDataGrid.js */ "./src/panels/profiler/TopDownProfileDataGrid.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
var _WritableProfileHeader_profileReceivedPromise, _WritableProfileHeader_profileReceivedFulfill;















const UIStrings = {
    /**
     *@description Text in Profile View of a profiler tool
     */
    profile: 'Profile',
    /**
     *@description Placeholder text in the search box of the JavaScript profiler tool. Users can search
     *the results by the cost in milliseconds, the name of the function, or the file name.
     */
    findByCostMsNameOrFile: 'Find by cost (>50ms), name or file',
    /**
     *@description Text for a programming function
     */
    function: 'Function',
    /**
     *@description Title of the Profiler tool
     */
    profiler: 'Profiler',
    /**
     *@description Aria-label for profiles view combobox in memory tool
     */
    profileViewMode: 'Profile view mode',
    /**
     *@description Tooltip text that appears when hovering over the largeicon visibility button in the Profile View of a profiler tool
     */
    focusSelectedFunction: 'Focus selected function',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Profile View of a profiler tool
     */
    excludeSelectedFunction: 'Exclude selected function',
    /**
     *@description Tooltip text that appears when hovering over the largeicon refresh button in the Profile View of a profiler tool
     */
    restoreAllFunctions: 'Restore all functions',
    /**
     *@description Text in Profile View of a profiler tool
     */
    chart: 'Chart',
    /**
     *@description Text in Profile View of a profiler tool
     */
    heavyBottomUp: 'Heavy (Bottom Up)',
    /**
     *@description Text for selecting different profile views in the JS profiler tool. This option is a tree view.
     */
    treeTopDown: 'Tree (Top Down)',
    /**
     * @description Name of a profile
     * @example {2} PH1
     */
    profileD: 'Profile {PH1}',
    /**
     *@description Text in Profile View of a profiler tool
     *@example {4 MB} PH1
     */
    loadingD: 'Loading… {PH1}%',
    /**
     *@description Text in Profile View of a profiler tool
     *@example {example.file} PH1
     *@example {cannot open file} PH2
     */
    fileSReadErrorS: 'File \'\'{PH1}\'\' read error: {PH2}',
    /**
     *@description Text when something is loading
     */
    loading: 'Loading…',
    /**
     *@description Text in Profile View of a profiler tool
     */
    failedToReadFile: 'Failed to read file',
    /**
     *@description Text in Profile View of a profiler tool
     */
    parsing: 'Parsing…',
    /**
     * @description Status indicator in the JS Profiler to show that a file has been successfully loaded
     * from file, as opposed to a profile that has been captured locally.
     */
    loaded: 'Loaded',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/profiler/ProfileView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class ProfileView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.View.SimpleView {
    constructor() {
        super(i18nString(UIStrings.profile));
        Object.defineProperty(this, "profileInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchableViewInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "viewSelectComboBox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "focusButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resetButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifierInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeFormatter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "viewType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "adjustedTotal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileHeader", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bottomUpProfileDataGridTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "topDownProfileDataGridTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentSearchResultIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "flameChart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visibleView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchableElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileDataGridTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileInternal = null;
        this.searchableViewInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.SearchableView.SearchableView(this, null);
        this.searchableViewInternal.setPlaceholder(i18nString(UIStrings.findByCostMsNameOrFile));
        this.searchableViewInternal.show(this.element);
        const columns = [];
        columns.push({
            id: 'self',
            title: this.columnHeader('self'),
            width: '120px',
            fixedWidth: true,
            sortable: true,
            sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Order.Descending,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
        });
        columns.push({
            id: 'total',
            title: this.columnHeader('total'),
            width: '120px',
            fixedWidth: true,
            sortable: true,
            sort: undefined,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            disclosure: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
        });
        columns.push({
            id: 'function',
            title: i18nString(UIStrings.function),
            disclosure: true,
            sortable: true,
            sort: undefined,
            titleDOMFragment: undefined,
            align: undefined,
            editable: undefined,
            nonSelectable: undefined,
            longText: undefined,
            weight: undefined,
            allowInSortByEvenWhenHidden: undefined,
            dataType: undefined,
            defaultWeight: undefined,
            width: undefined,
            fixedWidth: undefined,
        });
        this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.profiler),
            columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        });
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Events.SortingChanged, this.sortProfile, this);
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Events.SelectedNode, this.nodeSelected.bind(this, true));
        this.dataGrid.addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGrid.Events.DeselectedNode, this.nodeSelected.bind(this, false));
        this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
        this.viewSelectComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarComboBox(this.changeView.bind(this), i18nString(UIStrings.profileViewMode), undefined, 'profile-view.selected-view');
        this.focusButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.focusSelectedFunction), 'eye', undefined, 'profile-view.focus-selected-function');
        this.focusButton.setEnabled(false);
        this.focusButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton.Events.Click, this.focusClicked, this);
        this.excludeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.excludeSelectedFunction), 'cross', undefined, 'profile-view.exclude-selected-function');
        this.excludeButton.setEnabled(false);
        this.excludeButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton.Events.Click, this.excludeClicked, this);
        this.resetButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.restoreAllFunctions), 'refresh', undefined, 'profile-view.restore-all-functions');
        this.resetButton.setEnabled(false);
        this.resetButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton.Events.Click, this.resetClicked, this);
        this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier(maxLinkLength);
    }
    static buildPopoverTable(entryInfo) {
        const table = document.createElement('table');
        for (const entry of entryInfo) {
            const row = table.createChild('tr');
            row.createChild('td').textContent = entry.title;
            row.createChild('td').textContent = entry.value;
        }
        return table;
    }
    setProfile(profile) {
        this.profileInternal = profile;
        this.bottomUpProfileDataGridTree = null;
        this.topDownProfileDataGridTree = null;
        this.changeView();
        this.refresh();
    }
    profile() {
        return this.profileInternal;
    }
    initialize(nodeFormatter) {
        this.nodeFormatter = nodeFormatter;
        this.viewType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('profile-view', ViewTypes.Heavy);
        const viewTypes = [ViewTypes.Flame, ViewTypes.Heavy, ViewTypes.Tree];
        const optionNames = new Map([
            [ViewTypes.Flame, i18nString(UIStrings.chart)],
            [ViewTypes.Heavy, i18nString(UIStrings.heavyBottomUp)],
            [ViewTypes.Tree, i18nString(UIStrings.treeTopDown)],
        ]);
        const options = new Map(viewTypes.map(type => [type, this.viewSelectComboBox.createOption(optionNames.get(type), type)]));
        const optionName = this.viewType.get() || viewTypes[0];
        const option = options.get(optionName) || options.get(viewTypes[0]);
        this.viewSelectComboBox.select(option);
        this.changeView();
        if (this.flameChart) {
            this.flameChart.update();
        }
    }
    focus() {
        if (this.flameChart) {
            this.flameChart.focus();
        }
        else {
            super.focus();
        }
    }
    columnHeader(_columnId) {
        throw 'Not implemented';
    }
    selectRange(timeLeft, timeRight) {
        if (!this.flameChart) {
            return;
        }
        this.flameChart.selectRange(timeLeft, timeRight);
    }
    async toolbarItems() {
        return [this.viewSelectComboBox, this.focusButton, this.excludeButton, this.resetButton];
    }
    getBottomUpProfileDataGridTree() {
        if (!this.bottomUpProfileDataGridTree) {
            this.bottomUpProfileDataGridTree = new _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_9__.BottomUpProfileDataGridTree(this.nodeFormatter, this.searchableViewInternal, this.profileInternal.root, this.adjustedTotal);
        }
        return this.bottomUpProfileDataGridTree;
    }
    getTopDownProfileDataGridTree() {
        if (!this.topDownProfileDataGridTree) {
            this.topDownProfileDataGridTree = new _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_14__.TopDownProfileDataGridTree(this.nodeFormatter, this.searchableViewInternal, this.profileInternal.root, this.adjustedTotal);
        }
        return this.topDownProfileDataGridTree;
    }
    populateContextMenu(contextMenu, gridNode) {
        const node = gridNode;
        if (node.linkElement) {
            contextMenu.appendApplicableItems(node.linkElement);
        }
    }
    willHide() {
        this.currentSearchResultIndex = -1;
    }
    refresh() {
        if (!this.profileDataGridTree) {
            return;
        }
        const selectedProfileNode = this.dataGrid.selectedNode ? this.dataGrid.selectedNode.profileNode : null;
        this.dataGrid.rootNode().removeChildren();
        const children = this.profileDataGridTree.children;
        const count = children.length;
        for (let index = 0; index < count; ++index) {
            this.dataGrid.rootNode().appendChild(children[index]);
        }
        if (selectedProfileNode) {
            // TODO(crbug.com/1011811): Cleanup the added `selected` property to this SDK class.
            // @ts-ignore
            selectedProfileNode.selected = true;
        }
    }
    refreshVisibleData() {
        let child = this.dataGrid.rootNode().children[0];
        while (child) {
            child.refresh();
            child = child.traverseNextNode(false, null, true);
        }
    }
    searchableView() {
        return this.searchableViewInternal;
    }
    supportsCaseSensitiveSearch() {
        return true;
    }
    supportsRegexSearch() {
        return false;
    }
    onSearchCanceled() {
        if (this.searchableElement) {
            this.searchableElement.onSearchCanceled();
        }
    }
    performSearch(searchConfig, shouldJump, jumpBackwards) {
        if (this.searchableElement) {
            this.searchableElement.performSearch(searchConfig, shouldJump, jumpBackwards);
        }
    }
    jumpToNextSearchResult() {
        if (this.searchableElement) {
            this.searchableElement.jumpToNextSearchResult();
        }
    }
    jumpToPreviousSearchResult() {
        if (this.searchableElement) {
            this.searchableElement.jumpToPreviousSearchResult();
        }
    }
    linkifier() {
        return this.linkifierInternal;
    }
    createFlameChartDataProvider() {
        throw 'Not implemented';
    }
    ensureFlameChartCreated() {
        if (this.flameChart) {
            return;
        }
        this.dataProvider = this.createFlameChartDataProvider();
        this.flameChart = new _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_11__.ProfileFlameChart(this.searchableViewInternal, this.dataProvider);
        this.flameChart.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__.FlameChart.Events.EntryInvoked, event => {
            void this.onEntryInvoked(event);
        });
    }
    async onEntryInvoked(event) {
        if (!this.dataProvider) {
            return;
        }
        const entryIndex = event.data;
        const node = this.dataProvider.entryNodes[entryIndex];
        const debuggerModel = this.profileHeader.debuggerModel;
        if (!node || !node.scriptId || !debuggerModel) {
            return;
        }
        const script = debuggerModel.scriptForId(node.scriptId);
        if (!script) {
            return;
        }
        const location = debuggerModel.createRawLocation(script, node.lineNumber, node.columnNumber);
        const uiLocation = await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location);
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
    }
    changeView() {
        if (!this.profileInternal) {
            return;
        }
        this.searchableViewInternal.closeSearch();
        if (this.visibleView) {
            this.visibleView.detach();
        }
        this.viewType.set(this.viewSelectComboBox.selectedOption().value);
        switch (this.viewType.get()) {
            case ViewTypes.Flame:
                this.ensureFlameChartCreated();
                this.visibleView = this.flameChart;
                this.searchableElement = this.flameChart;
                break;
            case ViewTypes.Tree:
                this.profileDataGridTree = this.getTopDownProfileDataGridTree();
                this.sortProfile();
                this.visibleView = this.dataGrid.asWidget();
                this.searchableElement = this.profileDataGridTree;
                break;
            case ViewTypes.Heavy:
                this.profileDataGridTree = this.getBottomUpProfileDataGridTree();
                this.sortProfile();
                this.visibleView = this.dataGrid.asWidget();
                this.searchableElement = this.profileDataGridTree;
                break;
        }
        const isFlame = this.viewType.get() === ViewTypes.Flame;
        this.focusButton.setVisible(!isFlame);
        this.excludeButton.setVisible(!isFlame);
        this.resetButton.setVisible(!isFlame);
        if (this.visibleView) {
            this.visibleView.show(this.searchableViewInternal.element);
        }
    }
    nodeSelected(selected) {
        this.focusButton.setEnabled(selected);
        this.excludeButton.setEnabled(selected);
    }
    focusClicked() {
        if (!this.dataGrid.selectedNode) {
            return;
        }
        this.resetButton.setEnabled(true);
        this.resetButton.element.focus();
        if (this.profileDataGridTree) {
            this.profileDataGridTree.focus(this.dataGrid.selectedNode);
        }
        this.refresh();
        this.refreshVisibleData();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CpuProfileNodeFocused);
    }
    excludeClicked() {
        const selectedNode = this.dataGrid.selectedNode;
        if (!selectedNode) {
            return;
        }
        this.resetButton.setEnabled(true);
        this.resetButton.element.focus();
        selectedNode.deselect();
        if (this.profileDataGridTree) {
            this.profileDataGridTree.exclude(selectedNode);
        }
        this.refresh();
        this.refreshVisibleData();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.CpuProfileNodeExcluded);
    }
    resetClicked() {
        this.viewSelectComboBox.selectElement().focus();
        this.resetButton.setEnabled(false);
        if (this.profileDataGridTree) {
            this.profileDataGridTree.restore();
        }
        this.linkifierInternal.reset();
        this.refresh();
        this.refreshVisibleData();
    }
    sortProfile() {
        if (!this.profileDataGridTree) {
            return;
        }
        const sortAscending = this.dataGrid.isSortOrderAscending();
        const sortColumnId = this.dataGrid.sortColumnId();
        const sortProperty = sortColumnId === 'function' ? 'functionName' : sortColumnId || '';
        this.profileDataGridTree.sort(_ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_10__.ProfileDataGridTree.propertyComparator(sortProperty, sortAscending), false);
        this.refresh();
    }
}
const maxLinkLength = 30;
var ViewTypes;
(function (ViewTypes) {
    ViewTypes["Flame"] = "Flame";
    ViewTypes["Tree"] = "Tree";
    ViewTypes["Heavy"] = "Heavy";
})(ViewTypes || (ViewTypes = {}));
class WritableProfileHeader extends _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__.ProfileHeader {
    constructor(debuggerModel, type, title) {
        super(type, title || i18nString(UIStrings.profileD, { PH1: type.nextProfileUid() }));
        Object.defineProperty(this, "debuggerModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fileName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "jsonifiedProfile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "protocolProfileInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _WritableProfileHeader_profileReceivedPromise.set(this, void 0);
        _WritableProfileHeader_profileReceivedFulfill.set(this, () => { });
        this.debuggerModel = debuggerModel;
        __classPrivateFieldSet(this, _WritableProfileHeader_profileReceivedPromise, new Promise(resolve => {
            __classPrivateFieldSet(this, _WritableProfileHeader_profileReceivedFulfill, resolve, "f");
        }), "f");
    }
    onChunkTransferred(_reader) {
        if (this.jsonifiedProfile) {
            // TODO(l10n): Is the '%' at the end of this string correct? 4MB% looks wrong
            this.updateStatus(i18nString(UIStrings.loadingD, { PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.jsonifiedProfile.length) }));
        }
    }
    onError(reader) {
        const error = reader.error();
        if (error) {
            this.updateStatus(i18nString(UIStrings.fileSReadErrorS, { PH1: reader.fileName(), PH2: error.message }));
        }
    }
    async write(text) {
        this.jsonifiedProfile += text;
    }
    async close() {
    }
    dispose() {
        this.removeTempFile();
    }
    createSidebarTreeElement(panel) {
        return new _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_13__.ProfileSidebarTreeElement(panel, this, 'profile-sidebar-tree-item');
    }
    canSaveToFile() {
        return !this.fromFile();
    }
    async saveToFile() {
        await __classPrivateFieldGet(this, _WritableProfileHeader_profileReceivedPromise, "f");
        const fileOutputStream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.FileOutputStream();
        if (!this.fileName) {
            const now = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(new Date());
            const fileExtension = this.profileType().fileExtension();
            this.fileName = `${this.profileType().typeName()}-${now}${fileExtension}`;
        }
        const accepted = await fileOutputStream.open(this.fileName);
        if (!accepted || !this.tempFile) {
            return;
        }
        const data = await this.tempFile.read();
        if (data) {
            await fileOutputStream.write(data);
        }
        void fileOutputStream.close();
    }
    async loadFromFile(file) {
        this.updateStatus(i18nString(UIStrings.loading), true);
        const fileReader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.ChunkedFileReader(file, 10000000, this.onChunkTransferred.bind(this));
        this.jsonifiedProfile = '';
        const success = await fileReader.read(this);
        if (!success) {
            this.onError(fileReader);
            return new Error(i18nString(UIStrings.failedToReadFile));
        }
        this.updateStatus(i18nString(UIStrings.parsing), true);
        let error = null;
        try {
            this.profile = JSON.parse(this.jsonifiedProfile);
            this.setProfile(this.profile);
            this.updateStatus(i18nString(UIStrings.loaded), false);
        }
        catch (e) {
            error = e;
            this.profileType().removeProfile(this);
        }
        this.jsonifiedProfile = null;
        if (this.profileType().profileBeingRecorded() === this) {
            this.profileType().setProfileBeingRecorded(null);
        }
        return error;
    }
    setProtocolProfile(profile) {
        this.setProfile(profile);
        this.protocolProfileInternal = profile;
        this.tempFile = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.TempFile.TempFile();
        this.tempFile.write([JSON.stringify(profile)]);
        __classPrivateFieldGet(this, _WritableProfileHeader_profileReceivedFulfill, "f").call(this);
    }
}
_WritableProfileHeader_profileReceivedPromise = new WeakMap(), _WritableProfileHeader_profileReceivedFulfill = new WeakMap();


/***/ }),

/***/ "./src/panels/profiler/TopDownProfileDataGrid.ts":
/*!*******************************************************!*\
  !*** ./src/panels/profiler/TopDownProfileDataGrid.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopDownProfileDataGridNode: () => (/* binding */ TopDownProfileDataGridNode),
/* harmony export */   TopDownProfileDataGridTree: () => (/* binding */ TopDownProfileDataGridTree)
/* harmony export */ });
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./src/panels/profiler/ProfileDataGrid.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class TopDownProfileDataGridNode extends _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode {
    constructor(profileNode, owningTree) {
        const hasChildren = Boolean(profileNode.children && profileNode.children.length);
        super(profileNode, owningTree, hasChildren);
        Object.defineProperty(this, "remainingChildren", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.remainingChildren = profileNode.children;
    }
    static sharedPopulate(container) {
        const children = container.remainingChildren;
        const childrenLength = children.length;
        for (let i = 0; i < childrenLength; ++i) {
            container.appendChild(new TopDownProfileDataGridNode(children[i], container.tree));
        }
        container.remainingChildren = [];
    }
    static excludeRecursively(container, aCallUID) {
        if (container.remainingChildren.length > 0) {
            container.populate();
        }
        container.save();
        const children = container.children;
        let index = container.children.length;
        while (index--) {
            TopDownProfileDataGridNode.excludeRecursively(children[index], aCallUID);
        }
        const child = container.childrenByCallUID.get(aCallUID);
        if (child) {
            _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.merge(container, child, true);
        }
    }
    populateChildren() {
        TopDownProfileDataGridNode.sharedPopulate(this);
    }
}
class TopDownProfileDataGridTree extends _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridTree {
    constructor(formatter, searchableView, rootProfileNode, total) {
        super(formatter, searchableView, total);
        Object.defineProperty(this, "remainingChildren", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.remainingChildren = rootProfileNode.children;
        _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode.populate(this);
    }
    focus(profileDataGridNode) {
        if (!profileDataGridNode) {
            return;
        }
        this.save();
        profileDataGridNode.savePosition();
        this.children = [profileDataGridNode];
        this.total = profileDataGridNode.total;
    }
    exclude(profileDataGridNode) {
        if (!profileDataGridNode) {
            return;
        }
        this.save();
        TopDownProfileDataGridNode.excludeRecursively(this, profileDataGridNode.callUID);
        if (this.lastComparator) {
            this.sort(this.lastComparator, true);
        }
    }
    restore() {
        if (!this.savedChildren) {
            return;
        }
        this.children[0].restorePosition();
        super.restore();
    }
    populateChildren() {
        TopDownProfileDataGridNode.sharedPopulate(this);
    }
}


/***/ })

}]);