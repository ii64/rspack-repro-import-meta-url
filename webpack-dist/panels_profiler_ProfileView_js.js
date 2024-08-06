"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ProfileView_js"],{

/***/ "./panels/profiler/ProfileHeader.js":
/*!******************************************!*\
  !*** ./panels/profiler/ProfileHeader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileHeader: () => (/* binding */ ProfileHeader),
/* harmony export */   ProfileType: () => (/* binding */ ProfileType),
/* harmony export */   StatusUpdate: () => (/* binding */ StatusUpdate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ProfileHeader extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    profileTypeInternal;
    title;
    uid;
    fromFileInternal;
    tempFile;
    constructor(profileType, title) {
        super();
        this.profileTypeInternal = profileType;
        this.title = title;
        this.uid = profileType.incrementProfileUid();
        this.fromFileInternal = false;
        this.tempFile = null;
    }
    setTitle(title) {
        this.title = title;
        this.dispatchEventToListeners("ProfileTitleChanged" /* Events.ProfileTitleChanged */, this);
    }
    profileType() {
        return this.profileTypeInternal;
    }
    updateStatus(subtitle, wait) {
        this.dispatchEventToListeners("UpdateStatus" /* Events.UpdateStatus */, new StatusUpdate(subtitle, wait));
    }
    /**
     * Must be implemented by subclasses.
     */
    createSidebarTreeElement(_dataDisplayDelegate) {
        throw new Error('Not implemented.');
    }
    createView(_dataDisplayDelegate) {
        throw new Error('Not implemented.');
    }
    removeTempFile() {
        if (this.tempFile) {
            this.tempFile.remove();
        }
    }
    dispose() {
    }
    canSaveToFile() {
        return false;
    }
    saveToFile() {
        throw new Error('Not implemented.');
    }
    loadFromFile(_file) {
        throw new Error('Not implemented.');
    }
    fromFile() {
        return this.fromFileInternal;
    }
    setFromFile() {
        this.fromFileInternal = true;
    }
    setProfile(_profile) {
    }
}
class StatusUpdate {
    subtitle;
    wait;
    constructor(subtitle, wait) {
        this.subtitle = subtitle;
        this.wait = wait;
    }
}
class ProfileType extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    idInternal;
    nameInternal;
    profiles;
    profileBeingRecordedInternal;
    nextProfileUidInternal;
    constructor(id, name) {
        super();
        this.idInternal = id;
        this.nameInternal = name;
        this.profiles = [];
        this.profileBeingRecordedInternal = null;
        this.nextProfileUidInternal = 1;
        if (!window.opener) {
            window.addEventListener('pagehide', this.clearTempStorage.bind(this), false);
        }
    }
    typeName() {
        return '';
    }
    nextProfileUid() {
        return this.nextProfileUidInternal;
    }
    incrementProfileUid() {
        return this.nextProfileUidInternal++;
    }
    hasTemporaryView() {
        return false;
    }
    fileExtension() {
        return null;
    }
    get buttonTooltip() {
        return '';
    }
    get id() {
        return this.idInternal;
    }
    get treeItemTitle() {
        return this.nameInternal;
    }
    get name() {
        return this.nameInternal;
    }
    buttonClicked() {
        return false;
    }
    get description() {
        return '';
    }
    isInstantProfile() {
        return false;
    }
    isEnabled() {
        return true;
    }
    getProfiles() {
        function isFinished(profile) {
            return this.profileBeingRecordedInternal !== profile;
        }
        return this.profiles.filter(isFinished.bind(this));
    }
    customContent() {
        return null;
    }
    setCustomContentEnabled(_enable) {
    }
    getProfile(uid) {
        for (let i = 0; i < this.profiles.length; ++i) {
            if (this.profiles[i].uid === uid) {
                return this.profiles[i];
            }
        }
        return null;
    }
    loadFromFile(file) {
        let name = file.name;
        const fileExtension = this.fileExtension();
        if (fileExtension && name.endsWith(fileExtension)) {
            name = name.substr(0, name.length - fileExtension.length);
        }
        const profile = this.createProfileLoadedFromFile(name);
        profile.setFromFile();
        this.setProfileBeingRecorded(profile);
        this.addProfile(profile);
        return profile.loadFromFile(file);
    }
    createProfileLoadedFromFile(_title) {
        throw new Error('Not implemented');
    }
    addProfile(profile) {
        this.profiles.push(profile);
        this.dispatchEventToListeners("add-profile-header" /* ProfileEvents.AddProfileHeader */, profile);
    }
    removeProfile(profile) {
        const index = this.profiles.indexOf(profile);
        if (index === -1) {
            return;
        }
        this.profiles.splice(index, 1);
        this.disposeProfile(profile);
    }
    clearTempStorage() {
        for (let i = 0; i < this.profiles.length; ++i) {
            this.profiles[i].removeTempFile();
        }
    }
    profileBeingRecorded() {
        return this.profileBeingRecordedInternal;
    }
    setProfileBeingRecorded(profile) {
        this.profileBeingRecordedInternal = profile;
    }
    profileBeingRecordedRemoved() {
    }
    reset() {
        for (const profile of this.profiles.slice()) {
            this.disposeProfile(profile);
        }
        this.profiles = [];
        this.nextProfileUidInternal = 1;
    }
    disposeProfile(profile) {
        this.dispatchEventToListeners("remove-profile-header" /* ProfileEvents.RemoveProfileHeader */, profile);
        profile.dispose();
        if (this.profileBeingRecordedInternal === profile) {
            this.profileBeingRecordedRemoved();
            this.setProfileBeingRecorded(null);
        }
    }
}
//# sourceMappingURL=ProfileHeader.js.map

/***/ }),

/***/ "./panels/profiler/ProfileSidebarTreeElement.js":
/*!******************************************************!*\
  !*** ./panels/profiler/ProfileSidebarTreeElement.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileSidebarTreeElement: () => (/* binding */ ProfileSidebarTreeElement)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Tooltip for the 3-dots menu in the Memory panel profiles list.
     */
    profileOptions: 'Profile options',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/profiler/ProfileSidebarTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ProfileSidebarTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement {
    iconElement;
    titlesElement;
    menuElement;
    titleContainer;
    titleElement;
    subtitleElement;
    className;
    small;
    dataDisplayDelegate;
    profile;
    saveLinkElement;
    editing;
    constructor(dataDisplayDelegate, profile, className) {
        super('', false);
        this.iconElement = document.createElement('div');
        this.iconElement.classList.add('icon');
        this.titlesElement = document.createElement('div');
        this.titlesElement.classList.add('titles');
        this.titlesElement.classList.add('no-subtitle');
        this.titlesElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('title').track({ dblclick: true, change: true })}`);
        this.titleContainer = this.titlesElement.createChild('span', 'title-container');
        this.titleElement = this.titleContainer.createChild('span', 'title');
        this.subtitleElement = this.titlesElement.createChild('span', 'subtitle');
        this.menuElement = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
        this.menuElement.data = {
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            iconName: 'dots-vertical',
            title: i18nString(UIStrings.profileOptions),
        };
        this.menuElement.tabIndex = -1;
        this.menuElement.addEventListener('click', this.handleContextMenuEvent.bind(this));
        this.menuElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.dropDown('profile-options').track({ click: true })}`);
        this.titleElement.textContent = profile.title;
        this.className = className;
        this.small = false;
        this.dataDisplayDelegate = dataDisplayDelegate;
        this.profile = profile;
        profile.addEventListener("UpdateStatus" /* ProfileHeaderEvents.UpdateStatus */, this.updateStatus, this);
    }
    updateStatus(event) {
        const statusUpdate = event.data;
        if (statusUpdate.subtitle !== null) {
            this.subtitleElement.textContent = statusUpdate.subtitle.length > 0 ? `(${statusUpdate.subtitle})` : '';
            this.titlesElement.classList.toggle('no-subtitle', !statusUpdate.subtitle);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.listItemElement, `${this.profile.title}, ${statusUpdate.subtitle}`);
        }
        if (typeof statusUpdate.wait === 'boolean' && this.listItemElement) {
            this.iconElement.classList.toggle('spinner', statusUpdate.wait);
            this.listItemElement.classList.toggle('wait', statusUpdate.wait);
        }
    }
    ondblclick(event) {
        if (!this.editing) {
            this.startEditing(event.target);
        }
        return false;
    }
    startEditing(eventTarget) {
        const container = eventTarget.enclosingNodeOrSelfWithClass('title');
        if (!container) {
            return;
        }
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(this.editingCommitted.bind(this), this.editingCancelled.bind(this));
        this.editing = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(container, config);
    }
    editingCommitted(container, newTitle) {
        delete this.editing;
        this.profile.setTitle(newTitle);
    }
    editingCancelled() {
        delete this.editing;
    }
    dispose() {
        this.profile.removeEventListener("UpdateStatus" /* ProfileHeaderEvents.UpdateStatus */, this.updateStatus, this);
    }
    onselect() {
        this.dataDisplayDelegate.showProfile(this.profile);
        return true;
    }
    ondelete() {
        this.profile.profileType().removeProfile(this.profile);
        return true;
    }
    onattach() {
        if (this.className) {
            this.listItemElement.classList.add(this.className);
        }
        if (this.small) {
            this.listItemElement.classList.add('small');
        }
        this.listItemElement.append(this.iconElement, this.titlesElement, this.menuElement);
        this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setDescription(this.listItemElement, this.profile.profileType().name);
    }
    handleContextMenuEvent(event) {
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
        contextMenu.appendItemsAtLocation('profilerMenu');
        void contextMenu.show();
    }
    setSmall(small) {
        this.small = small;
        if (this.listItemElement) {
            this.listItemElement.classList.toggle('small', this.small);
        }
    }
    setMainTitle(title) {
        this.titleElement.textContent = title;
    }
}
//# sourceMappingURL=ProfileSidebarTreeElement.js.map

/***/ }),

/***/ "./panels/profiler/ProfileView.js":
/*!****************************************!*\
  !*** ./panels/profiler/ProfileView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileView: () => (/* binding */ ProfileView),
/* harmony export */   WritableProfileHeader: () => (/* binding */ WritableProfileHeader),
/* harmony export */   maxLinkLength: () => (/* binding */ maxLinkLength)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BottomUpProfileDataGrid.js */ "./panels/profiler/BottomUpProfileDataGrid.js");
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
/* harmony import */ var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./panels/profiler/ProfileFlameChartDataProvider.js");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */ var _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TopDownProfileDataGrid.js */ "./panels/profiler/TopDownProfileDataGrid.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















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
    profileInternal;
    searchableViewInternal;
    dataGrid;
    viewSelectComboBox;
    focusButton;
    excludeButton;
    resetButton;
    linkifierInternal;
    nodeFormatter;
    viewType;
    adjustedTotal;
    profileHeader;
    bottomUpProfileDataGridTree;
    topDownProfileDataGridTree;
    currentSearchResultIndex;
    dataProvider;
    flameChart;
    visibleView;
    searchableElement;
    profileDataGridTree;
    constructor() {
        super(i18nString(UIStrings.profile));
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
        this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.sortProfile, this);
        this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */, this.nodeSelected.bind(this, true));
        this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */, this.nodeSelected.bind(this, false));
        this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
        this.viewSelectComboBox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarComboBox(this.changeView.bind(this), i18nString(UIStrings.profileViewMode), undefined, 'profile-view.selected-view');
        this.focusButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.focusSelectedFunction), 'eye', undefined, 'profile-view.focus-selected-function');
        this.focusButton.setEnabled(false);
        this.focusButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.focusClicked, this);
        this.excludeButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.excludeSelectedFunction), 'cross', undefined, 'profile-view.exclude-selected-function');
        this.excludeButton.setEnabled(false);
        this.excludeButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.excludeClicked, this);
        this.resetButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.restoreAllFunctions), 'refresh', undefined, 'profile-view.restore-all-functions');
        this.resetButton.setEnabled(false);
        this.resetButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.resetClicked, this);
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
        this.viewType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('profile-view', "Heavy" /* ViewTypes.Heavy */);
        const viewTypes = ["Flame" /* ViewTypes.Flame */, "Heavy" /* ViewTypes.Heavy */, "Tree" /* ViewTypes.Tree */];
        const optionNames = new Map([
            ["Flame" /* ViewTypes.Flame */, i18nString(UIStrings.chart)],
            ["Heavy" /* ViewTypes.Heavy */, i18nString(UIStrings.heavyBottomUp)],
            ["Tree" /* ViewTypes.Tree */, i18nString(UIStrings.treeTopDown)],
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
        this.flameChart.addEventListener("EntryInvoked" /* PerfUI.FlameChart.Events.EntryInvoked */, event => {
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
            case "Flame" /* ViewTypes.Flame */:
                this.ensureFlameChartCreated();
                this.visibleView = this.flameChart;
                this.searchableElement = this.flameChart;
                break;
            case "Tree" /* ViewTypes.Tree */:
                this.profileDataGridTree = this.getTopDownProfileDataGridTree();
                this.sortProfile();
                this.visibleView = this.dataGrid.asWidget();
                this.searchableElement = this.profileDataGridTree;
                break;
            case "Heavy" /* ViewTypes.Heavy */:
                this.profileDataGridTree = this.getBottomUpProfileDataGridTree();
                this.sortProfile();
                this.visibleView = this.dataGrid.asWidget();
                this.searchableElement = this.profileDataGridTree;
                break;
        }
        const isFlame = this.viewType.get() === "Flame" /* ViewTypes.Flame */;
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
class WritableProfileHeader extends _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_12__.ProfileHeader {
    debuggerModel;
    fileName;
    jsonifiedProfile;
    profile;
    protocolProfileInternal;
    #profileReceivedPromise;
    #profileReceivedFulfill = () => { };
    constructor(debuggerModel, type, title) {
        super(type, title || i18nString(UIStrings.profileD, { PH1: type.nextProfileUid() }));
        this.debuggerModel = debuggerModel;
        this.#profileReceivedPromise = new Promise(resolve => {
            this.#profileReceivedFulfill = resolve;
        });
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
        await this.#profileReceivedPromise;
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
        this.#profileReceivedFulfill();
    }
}
//# sourceMappingURL=ProfileView.js.map

/***/ }),

/***/ "./panels/profiler/TopDownProfileDataGrid.js":
/*!***************************************************!*\
  !*** ./panels/profiler/TopDownProfileDataGrid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopDownProfileDataGridNode: () => (/* binding */ TopDownProfileDataGridNode),
/* harmony export */   TopDownProfileDataGridTree: () => (/* binding */ TopDownProfileDataGridTree)
/* harmony export */ });
/* harmony import */ var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class TopDownProfileDataGridNode extends _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__.ProfileDataGridNode {
    remainingChildren;
    constructor(profileNode, owningTree) {
        const hasChildren = Boolean(profileNode.children && profileNode.children.length);
        super(profileNode, owningTree, hasChildren);
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
    remainingChildren;
    constructor(formatter, searchableView, rootProfileNode, total) {
        super(formatter, searchableView, total);
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
//# sourceMappingURL=TopDownProfileDataGrid.js.map

/***/ })

}]);