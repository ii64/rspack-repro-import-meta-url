"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ProfilesPanel_js"],{

/***/ "./panels/profiler/ProfilesPanel.js":
/*!******************************************!*\
  !*** ./panels/profiler/ProfilesPanel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ProfileGroup: () => (/* binding */ ProfileGroup),
/* harmony export */   ProfileGroupSidebarTreeElement: () => (/* binding */ ProfileGroupSidebarTreeElement),
/* harmony export */   ProfileTypeSidebarSection: () => (/* binding */ ProfileTypeSidebarSection),
/* harmony export */   ProfilesPanel: () => (/* binding */ ProfilesPanel),
/* harmony export */   ProfilesSidebarTreeElement: () => (/* binding */ ProfilesSidebarTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _heapProfiler_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heapProfiler.css.js */ "./panels/profiler/heapProfiler.css.js");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */ var _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileLauncherView.js */ "./panels/profiler/ProfileLauncherView.js");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */ var _profilesPanel_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profilesPanel.css.js */ "./panels/profiler/profilesPanel.css.js");
/* harmony import */ var _profilesSidebarTree_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profilesSidebarTree.css.js */ "./panels/profiler/profilesSidebarTree.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */





// eslint-disable-next-line rulesdir/es_modules_import









const UIStrings = {
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {'.js', '.json'} PH1
     */
    cantLoadFileSupportedFile: 'Can’t load file. Supported file extensions: \'\'{PH1}\'\'.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     */
    cantLoadProfileWhileAnother: 'Can’t load profile while another profile is being recorded.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {cannot open file} PH1
     */
    profileLoadingFailedS: 'Profile loading failed: {PH1}.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {2} PH1
     */
    runD: 'Run {PH1}',
    /**
     *@description Text in Profiles Panel of a profiler tool
     */
    profiles: 'Profiles',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/ProfilesPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ProfilesPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Panel.PanelWithSidebar {
    profileTypes;
    profilesItemTreeElement;
    sidebarTree;
    profileViews;
    toolbarElement;
    toggleRecordAction;
    toggleRecordButton;
    #saveToFileAction;
    profileViewToolbar;
    profileGroups;
    launcherView;
    visibleView;
    profileToView;
    typeIdToSidebarSection;
    fileSelectorElement;
    selectedProfileType;
    constructor(name, profileTypes, recordingActionId) {
        super(name);
        this.profileTypes = profileTypes;
        const mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        this.splitWidget().setMainWidget(mainContainer);
        this.profilesItemTreeElement = new ProfilesSidebarTreeElement(this);
        this.sidebarTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        this.sidebarTree.element.classList.add('profiles-sidebar-tree-box');
        this.panelSidebarElement().appendChild(this.sidebarTree.element);
        this.sidebarTree.appendChild(this.profilesItemTreeElement);
        this.sidebarTree.element.addEventListener('keydown', this.onKeyDown.bind(this), false);
        this.profileViews = document.createElement('div');
        this.profileViews.id = 'profile-views';
        this.profileViews.classList.add('vbox');
        mainContainer.element.appendChild(this.profileViews);
        this.toolbarElement = document.createElement('div');
        this.toolbarElement.classList.add('profiles-toolbar');
        mainContainer.element.insertBefore(this.toolbarElement, mainContainer.element.firstChild);
        this.panelSidebarElement().classList.add('profiles-tree-sidebar');
        const toolbarContainerLeft = document.createElement('div');
        toolbarContainerLeft.classList.add('profiles-toolbar');
        toolbarContainerLeft.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar('profiles-sidebar')}`);
        this.panelSidebarElement().insertBefore(toolbarContainerLeft, this.panelSidebarElement().firstChild);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', toolbarContainerLeft);
        toolbar.makeWrappable(true);
        this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction(recordingActionId);
        this.toggleRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.toggleRecordAction);
        toolbar.appendToolbarItem(this.toggleRecordButton);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('profiler.clear-all'));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('profiler.load-from-file'));
        this.#saveToFileAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('profiler.save-to-file');
        this.#saveToFileAction.setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.#saveToFileAction));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('components.collect-garbage'));
        this.profileViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', this.toolbarElement);
        this.profileViewToolbar.makeWrappable(true);
        this.profileViewToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar('profile-view')}`);
        this.profileGroups = {};
        this.launcherView = new _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_10__.ProfileLauncherView(this);
        this.launcherView.addEventListener("ProfileTypeSelected" /* ProfileLauncherEvents.ProfileTypeSelected */, this.onProfileTypeSelected, this);
        this.profileToView = [];
        this.typeIdToSidebarSection = {};
        const types = this.profileTypes;
        for (let i = 0; i < types.length; i++) {
            this.registerProfileType(types[i]);
        }
        this.launcherView.restoreSelectedProfileType();
        this.profilesItemTreeElement.select();
        this.showLauncherView();
        this.createFileSelectorElement();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */, this.onSuspendStateChanged, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel, this.updateProfileTypeSpecificUI, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel, this.updateProfileTypeSpecificUI, this);
    }
    onKeyDown(ev) {
        const event = ev;
        let handled = false;
        if (event.key === 'ArrowDown' && !event.altKey) {
            handled = this.sidebarTree.selectNext();
        }
        else if (event.key === 'ArrowUp' && !event.altKey) {
            handled = this.sidebarTree.selectPrevious();
        }
        if (handled) {
            event.consume(true);
        }
    }
    searchableView() {
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const visibleView = this.visibleView;
        return visibleView && visibleView.searchableView ? visibleView.searchableView() : null;
    }
    createFileSelectorElement() {
        if (this.fileSelectorElement) {
            this.element.removeChild(this.fileSelectorElement);
        }
        this.fileSelectorElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createFileSelectorElement(this.loadFromFile.bind(this));
        this.element.appendChild(this.fileSelectorElement);
    }
    findProfileTypeByExtension(fileName) {
        return this.profileTypes.find(type => Boolean(type.fileExtension()) && fileName.endsWith(type.fileExtension() || '')) ||
            null;
    }
    async loadFromFile(file) {
        this.createFileSelectorElement();
        const profileType = this.findProfileTypeByExtension(file.name);
        if (!profileType) {
            const extensions = new Set(this.profileTypes.map(type => type.fileExtension()).filter(ext => ext));
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.cantLoadFileSupportedFile, { PH1: Array.from(extensions).join('\', \'') }));
            return;
        }
        if (Boolean(profileType.profileBeingRecorded())) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.cantLoadProfileWhileAnother));
            return;
        }
        const error = await profileType.loadFromFile(file);
        if (error && 'message' in error) {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.MessageDialog.show(i18nString(UIStrings.profileLoadingFailedS, { PH1: error.message }), undefined, 'profile-loading-failed');
        }
    }
    toggleRecord() {
        if (!this.toggleRecordAction.enabled()) {
            return true;
        }
        const toggleButton = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DOMUtilities.deepActiveElement(this.element.ownerDocument);
        const type = this.selectedProfileType;
        if (!type) {
            return true;
        }
        const isProfiling = type.buttonClicked();
        this.updateToggleRecordAction(isProfiling);
        if (isProfiling) {
            this.launcherView.profileStarted();
            if (type.hasTemporaryView()) {
                this.showProfile(type.profileBeingRecorded());
            }
        }
        else {
            this.launcherView.profileFinished();
        }
        if (toggleButton) {
            toggleButton.focus();
        }
        return true;
    }
    onSuspendStateChanged() {
        this.updateToggleRecordAction(this.toggleRecordAction.toggled());
    }
    updateToggleRecordAction(toggled) {
        const hasSelectedTarget = Boolean(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel) ||
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel));
        const enable = toggled || (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended() && hasSelectedTarget);
        this.toggleRecordAction.setEnabled(enable);
        this.toggleRecordAction.setToggled(toggled);
        if (enable) {
            this.toggleRecordButton.setTitle(this.selectedProfileType ? this.selectedProfileType.buttonTooltip : '');
        }
        else {
            this.toggleRecordButton.setTitle(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.anotherProfilerActiveLabel());
        }
        if (this.selectedProfileType) {
            this.launcherView.updateProfileType(this.selectedProfileType, enable);
        }
    }
    profileBeingRecordedRemoved() {
        this.updateToggleRecordAction(false);
        this.launcherView.profileFinished();
    }
    onProfileTypeSelected(event) {
        this.selectedProfileType = event.data;
        this.updateProfileTypeSpecificUI();
    }
    updateProfileTypeSpecificUI() {
        this.updateToggleRecordAction(this.toggleRecordAction.toggled());
    }
    reset() {
        this.profileTypes.forEach(type => type.reset());
        delete this.visibleView;
        this.profileGroups = {};
        this.updateToggleRecordAction(false);
        this.launcherView.profileFinished();
        this.sidebarTree.element.classList.remove('some-expandable');
        this.launcherView.detach();
        this.profileViews.removeChildren();
        this.profileViewToolbar.removeToolbarItems();
        this.profilesItemTreeElement.select();
        this.showLauncherView();
    }
    showLauncherView() {
        this.closeVisibleView();
        this.profileViewToolbar.removeToolbarItems();
        this.launcherView.show(this.profileViews);
        this.visibleView = this.launcherView;
        this.toolbarElement.classList.add('hidden');
        this.#saveToFileAction.setEnabled(false);
    }
    registerProfileType(profileType) {
        this.launcherView.addProfileType(profileType);
        const profileTypeSection = new ProfileTypeSidebarSection(this, profileType);
        this.typeIdToSidebarSection[profileType.id] = profileTypeSection;
        this.sidebarTree.appendChild(profileTypeSection);
        function onAddProfileHeader(event) {
            this.addProfileHeader(event.data);
        }
        function onRemoveProfileHeader(event) {
            this.removeProfileHeader(event.data);
        }
        function profileComplete(event) {
            this.showProfile(event.data);
        }
        profileType.addEventListener("view-updated" /* ProfileTypeEvents.ViewUpdated */, this.updateProfileTypeSpecificUI, this);
        profileType.addEventListener("add-profile-header" /* ProfileTypeEvents.AddProfileHeader */, onAddProfileHeader, this);
        profileType.addEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */, onRemoveProfileHeader, this);
        profileType.addEventListener("profile-complete" /* ProfileTypeEvents.ProfileComplete */, profileComplete, this);
        const profiles = profileType.getProfiles();
        for (let i = 0; i < profiles.length; i++) {
            this.addProfileHeader(profiles[i]);
        }
    }
    showLoadFromFileDialog() {
        this.fileSelectorElement.click();
    }
    addProfileHeader(profile) {
        const profileType = profile.profileType();
        const typeId = profileType.id;
        this.typeIdToSidebarSection[typeId].addProfileHeader(profile);
        if (!this.visibleView || this.visibleView === this.launcherView) {
            this.showProfile(profile);
        }
    }
    removeProfileHeader(profile) {
        if (profile.profileType().profileBeingRecorded() === profile) {
            this.profileBeingRecordedRemoved();
        }
        const i = this.indexOfViewForProfile(profile);
        if (i !== -1) {
            this.profileToView.splice(i, 1);
        }
        const typeId = profile.profileType().id;
        const sectionIsEmpty = this.typeIdToSidebarSection[typeId].removeProfileHeader(profile);
        // No other item will be selected if there aren't any other profiles, so
        // make sure that view gets cleared when the last profile is removed.
        if (sectionIsEmpty) {
            this.profilesItemTreeElement.select();
            this.showLauncherView();
        }
    }
    showProfile(profile) {
        if (!profile ||
            (profile.profileType().profileBeingRecorded() === profile) && !profile.profileType().hasTemporaryView()) {
            return null;
        }
        const view = this.viewForProfile(profile);
        if (view === this.visibleView) {
            return view;
        }
        this.closeVisibleView();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader, profile);
        this.#saveToFileAction.setEnabled(profile.canSaveToFile());
        view.show(this.profileViews);
        this.toolbarElement.classList.remove('hidden');
        this.visibleView = view;
        const profileTypeSection = this.typeIdToSidebarSection[profile.profileType().id];
        const sidebarElement = profileTypeSection.sidebarElementForProfile(profile);
        if (sidebarElement) {
            sidebarElement.revealAndSelect();
        }
        this.profileViewToolbar.removeToolbarItems();
        void view.toolbarItems().then(items => {
            items.map(item => this.profileViewToolbar.appendToolbarItem(item));
        });
        return view;
    }
    showObject(_snapshotObjectId, _perspectiveName) {
    }
    async linkifyObject(_nodeIndex) {
        return null;
    }
    viewForProfile(profile) {
        const index = this.indexOfViewForProfile(profile);
        if (index !== -1) {
            return this.profileToView[index].view;
        }
        const view = profile.createView(this);
        view.element.classList.add('profile-view');
        this.profileToView.push({ profile: profile, view: view });
        return view;
    }
    indexOfViewForProfile(profile) {
        return this.profileToView.findIndex(item => item.profile === profile);
    }
    closeVisibleView() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader, null);
        this.#saveToFileAction.setEnabled(false);
        if (this.visibleView) {
            this.visibleView.detach();
        }
        delete this.visibleView;
    }
    focus() {
        this.sidebarTree.focus();
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ProfilesPanel, this);
        this.registerCSSFiles([_ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _profilesPanel_css_js__WEBPACK_IMPORTED_MODULE_12__["default"], _heapProfiler_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
        this.sidebarTree.registerCSSFiles([_profilesSidebarTree_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]]);
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ProfilesPanel, null);
        super.willHide();
    }
}
class ProfileTypeSidebarSection extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    dataDisplayDelegate;
    profileTreeElements;
    profileGroups;
    constructor(dataDisplayDelegate, profileType) {
        super(profileType.treeItemTitle, true);
        this.selectable = false;
        this.dataDisplayDelegate = dataDisplayDelegate;
        this.profileTreeElements = [];
        this.profileGroups = {};
        this.expand();
        this.hidden = true;
        this.setCollapsible(false);
    }
    addProfileHeader(profile) {
        this.hidden = false;
        const profileType = profile.profileType();
        let sidebarParent = this;
        const profileTreeElement = profile.createSidebarTreeElement(this.dataDisplayDelegate);
        this.profileTreeElements.push(profileTreeElement);
        if (!profile.fromFile() && profileType.profileBeingRecorded() !== profile) {
            const profileTitle = profile.title;
            let group = this.profileGroups[profileTitle];
            if (!group) {
                group = new ProfileGroup();
                this.profileGroups[profileTitle] = group;
            }
            group.profileSidebarTreeElements.push(profileTreeElement);
            const groupSize = group.profileSidebarTreeElements.length;
            if (groupSize === 2) {
                // Make a group UI.TreeOutline.TreeElement now that there are 2 profiles.
                group.sidebarTreeElement = new ProfileGroupSidebarTreeElement(this.dataDisplayDelegate, profile.title);
                const firstProfileTreeElement = group.profileSidebarTreeElements[0];
                // Insert at the same index for the first profile of the group.
                const index = this.children().indexOf(firstProfileTreeElement);
                this.insertChild(group.sidebarTreeElement, index);
                // Move the first profile to the group.
                const selected = firstProfileTreeElement.selected;
                this.removeChild(firstProfileTreeElement);
                group.sidebarTreeElement.appendChild(firstProfileTreeElement);
                if (selected) {
                    firstProfileTreeElement.revealAndSelect();
                }
                firstProfileTreeElement.setSmall(true);
                firstProfileTreeElement.setMainTitle(i18nString(UIStrings.runD, { PH1: 1 }));
                if (this.treeOutline) {
                    this.treeOutline.element.classList.add('some-expandable');
                }
            }
            if (groupSize >= 2) {
                sidebarParent = group.sidebarTreeElement;
                profileTreeElement.setSmall(true);
                profileTreeElement.setMainTitle(i18nString(UIStrings.runD, { PH1: groupSize }));
            }
        }
        if (sidebarParent) {
            sidebarParent.appendChild(profileTreeElement);
        }
    }
    removeProfileHeader(profile) {
        const index = this.sidebarElementIndex(profile);
        if (index === -1) {
            return false;
        }
        const profileTreeElement = this.profileTreeElements[index];
        this.profileTreeElements.splice(index, 1);
        let sidebarParent = this;
        const group = this.profileGroups[profile.title];
        if (group) {
            const groupElements = group.profileSidebarTreeElements;
            groupElements.splice(groupElements.indexOf(profileTreeElement), 1);
            if (groupElements.length === 1) {
                // Move the last profile out of its group and remove the group.
                const pos = sidebarParent.children().indexOf(group.sidebarTreeElement);
                if (group.sidebarTreeElement) {
                    group.sidebarTreeElement.removeChild(groupElements[0]);
                }
                this.insertChild(groupElements[0], pos);
                groupElements[0].setSmall(false);
                groupElements[0].setMainTitle(profile.title);
                if (group.sidebarTreeElement) {
                    this.removeChild(group.sidebarTreeElement);
                }
            }
            if (groupElements.length !== 0) {
                sidebarParent = group.sidebarTreeElement;
            }
        }
        if (sidebarParent) {
            sidebarParent.removeChild(profileTreeElement);
        }
        profileTreeElement.dispose();
        if (this.childCount()) {
            return false;
        }
        this.hidden = true;
        return true;
    }
    sidebarElementForProfile(profile) {
        const index = this.sidebarElementIndex(profile);
        return index === -1 ? null : this.profileTreeElements[index];
    }
    sidebarElementIndex(profile) {
        const elements = this.profileTreeElements;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].profile === profile) {
                return i;
            }
        }
        return -1;
    }
    onattach() {
        this.listItemElement.classList.add('profiles-tree-section');
    }
}
class ProfileGroup {
    profileSidebarTreeElements;
    sidebarTreeElement;
    constructor() {
        this.profileSidebarTreeElements = [];
        this.sidebarTreeElement = null;
    }
}
class ProfileGroupSidebarTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    dataDisplayDelegate;
    profileTitle;
    toggleOnClick;
    constructor(dataDisplayDelegate, title) {
        super('', true);
        this.selectable = false;
        this.dataDisplayDelegate = dataDisplayDelegate;
        this.profileTitle = title;
        this.expand();
        this.toggleOnClick = true;
    }
    onselect() {
        const hasChildren = this.childCount() > 0;
        if (hasChildren) {
            const lastChild = this.lastChild();
            if (lastChild instanceof _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ProfileSidebarTreeElement) {
                this.dataDisplayDelegate.showProfile(lastChild.profile);
            }
        }
        return hasChildren;
    }
    onattach() {
        this.listItemElement.classList.add('profile-group-sidebar-tree-item');
        this.listItemElement.createChild('div', 'icon');
        this.listItemElement.createChild('div', 'titles no-subtitle')
            .createChild('span', 'title-container')
            .createChild('span', 'title')
            .textContent = this.profileTitle;
    }
}
class ProfilesSidebarTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    panel;
    constructor(panel) {
        super('', false);
        this.selectable = true;
        this.panel = panel;
    }
    onselect() {
        this.panel.showLauncherView();
        return true;
    }
    onattach() {
        this.listItemElement.classList.add('profile-launcher-view-tree-item');
        this.listItemElement.createChild('div', 'titles no-subtitle')
            .createChild('span', 'title-container')
            .createChild('span', 'title')
            .textContent = i18nString(UIStrings.profiles);
        this.setLeadingIcons([_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('document')]);
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'profiler.clear-all': {
                const profilesPanel = context.flavor(ProfilesPanel);
                if (profilesPanel !== null) {
                    profilesPanel.reset();
                    return true;
                }
                return false;
            }
            case 'profiler.load-from-file': {
                const profilesPanel = context.flavor(ProfilesPanel);
                if (profilesPanel !== null) {
                    profilesPanel.showLoadFromFileDialog();
                    return true;
                }
                return false;
            }
            case 'profiler.save-to-file': {
                const profile = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader);
                if (profile !== null) {
                    profile.saveToFile();
                    return true;
                }
                return false;
            }
            case 'profiler.delete-profile': {
                const profile = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader);
                if (profile !== null) {
                    profile.profileType().removeProfile(profile);
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
//# sourceMappingURL=ProfilesPanel.js.map

/***/ }),

/***/ "./panels/profiler/heapProfiler.css.js":
/*!*********************************************!*\
  !*** ./panels/profiler/heapProfiler.css.js ***!
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
 * Copyright (C) 2009 Google Inc. All rights reserved.
 * Copyright (C) 2010 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.heap-snapshot-view {
  overflow: hidden;
}

.heap-snapshot-view .data-grid {
  border: none;
  flex: auto;
}

.heap-snapshot-view .data-grid tr:empty {
  height: 16px;
  visibility: hidden;
}

.heap-snapshot-view .data-grid span.percent-column {
  width: 35px !important; /* stylelint-disable-line declaration-no-important */
}

.heap-snapshot-view .object-value-object,
.object-value-node {
  display: inline;
  position: static;
}

.heap-snapshot-view .object-value-string {
  white-space: nowrap;
}

.heap-snapshot-view td.object-column .objects-count {
  margin-left: 10px;
  font-size: 11px;
  color: var(--sys-color-token-subtle);
}

.heap-snapshot-view tr:not(.selected) .object-value-id {
  color: var(--sys-color-token-subtle);
}

.profile-view .heap-tracking-overview {
  flex: 0 0 80px;
  height: 80px;
}

.heap-snapshot-view .retaining-paths-view {
  overflow: hidden;
}

.heap-snapshot-view .heap-snapshot-view-resizer {
  background-color: var(--sys-color-surface1);
  display: flex;
  flex: 0 0 21px;
}

.heap-snapshot-view td.object-column > div > span {
  margin-right: 6px;
}

.heap-snapshot-view .heap-snapshot-view-resizer .title {
  flex: 0 1 auto;
  overflow: hidden;
  white-space: nowrap;
}

.heap-snapshot-view .heap-snapshot-view-resizer .verticalResizerIcon {
  background-image: var(--image-file-toolbarResizerVertical);
  background-repeat: no-repeat;
  background-position: center;
  flex: 0 0 28px;
  margin-left: auto;
}

.heap-snapshot-view .heap-snapshot-view-resizer .title > span {
  display: inline-block;
  padding-top: 3px;
  vertical-align: middle;
  margin-left: 4px;
  margin-right: 8px;
}

.heap-snapshot-view .heap-snapshot-view-resizer * {
  pointer-events: none;
}

.heap-snapshot-view tr:not(.selected) td.object-column span.highlight {
  background-color: inherit;
}

.heap-snapshot-view td.object-column span.heap-object-source-link {
  float: right;
}

.heap-snapshot-view td.object-column span.heap-object-source-link:empty {
  animation: fadeInOut 2s infinite;
}

.heap-snapshot-view td.object-column span.heap-object-source-link:empty::before {
  content: "\\b7\\b7";
  font-weight: bold;
}

@keyframes fadeInOut {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(0.5turn);
  }

  100% {
    transform: rotate(1turn);
  }
}

.heap-object-tag {
  height: 14px;
  width: 14px;
}

.heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,
.heap-snapshot-view tr:not(.selected) td.object-column span.grayed {
  color: var(--sys-color-token-subtle);
}

.heap-snapshot-view tr:not(.selected) .cycled-ancestor-node,
.heap-snapshot-view tr:not(.selected) .unreachable-ancestor-node {
  opacity: 60%;
}

#heap-recording-view .profile-view {
  top: 80px;
}

.heap-overview-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}

#heap-recording-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
}

.heap-recording-overview-canvas {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
}

.heap-snapshot-statistics-view {
  overflow: auto;
}

.heap-snapshot-stats-pie-chart {
  margin: 12px 30px;
  flex-shrink: 0;
}

.heap-allocation-stack .stack-frame {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 2px;
}

.heap-allocation-stack .stack-frame:focus {
  background-color: var(--sys-color-tonal-container);
  color: var(--sys-color-on-tonal-container);
}

.heap-allocation-stack .stack-frame:hover:not(:focus) {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.heap-allocation-stack .stack-frame .devtools-link {
  color: var(--sys-color-primary);
}

.no-heap-allocation-stack {
  padding: 5px;
}

@media (forced-colors: active) {
  .cycled-ancestor-node {
    opacity: 100%;
  }

  .heap-snapshot-view td.object-column .objects-count,
  .heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,
  .heap-snapshot-view tr:not(.selected) .object-value-id {
    color: ButtonText;
  }
}

/*# sourceURL=heapProfiler.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/profiler/profilesPanel.css.js":
/*!**********************************************!*\
  !*** ./panels/profiler/profilesPanel.css.js ***!
  \**********************************************/
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
 * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>
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
/* Profiler Style */

#profile-views {
  flex: auto;
  position: relative;
}

.profile-view .data-grid table.data {
  background: var(--sys-color-cdt-base-container);
}

.profile-view .data-grid tr:not(.selected) .highlight {
  background-color: var(--sys-color-tonal-container);
}

.profile-view .data-grid tr:hover td:not(.bottom-filler-td) {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.profile-view .data-grid td.numeric-column {
  text-align: right;
}

.profile-view .data-grid div.profile-multiple-values {
  float: right;
}

.profile-view .data-grid span.percent-column {
  color: var(--sys-color-token-subtle);
  width: 9ex;
  display: inline-block;
}

.profile-view .data-grid tr.selected span {
  color: inherit;
}

.profiles-toolbar {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  flex-shrink: 0;
}

.profiles-tree-sidebar {
  flex: auto;
  overflow: hidden;
}

.profiles-sidebar-tree-box {
  overflow-y: auto;
}

.profile-view {
  display: flex;
  overflow: hidden;
}

.profile-view .data-grid {
  border: none;
  flex: auto;
}

.profile-view .data-grid th.self-column,
.profile-view .data-grid th.total-column {
  text-align: center;
}

.profile-node-file {
  float: right;
  color: var(--sys-color-token-subtle);
}

.profile-warn-marker {
  vertical-align: -1px;
  margin-right: 2px;
}

.cpu-profile-flame-chart-overview-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
}

#cpu-profile-flame-chart-overview-container {
  border-bottom: 1px solid var(--sys-color-divider);
  overflow: hidden;
}

.cpu-profile-flame-chart-overview-canvas {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  bottom: 0;
}

#cpu-profile-flame-chart-overview-grid .resources-dividers-label-bar {
  pointer-events: auto;
}

.cpu-profile-flame-chart-overview-pane {
  flex: 0 0 80px !important; /* stylelint-disable-line declaration-no-important */
}

.profile-text-view {
  padding: 10px;
  overflow: auto;
  margin: 0;
  user-select: text;
  cursor: text;
}

.empty-landing-page {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 16px;
  color: var(--sys-color-token-subtle);
  padding: 50px;
}

button {
  cursor: pointer;
}

@media (forced-colors: active) {
  .profile-view .data-grid tr:hover td:not(.bottom-filler-td) {
    background: Highlight;
  }

  .profile-view .data-grid table.data {
    background: transparent;
  }
}

/*# sourceURL=profilesPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/profiler/profilesSidebarTree.css.js":
/*!****************************************************!*\
  !*** ./panels/profiler/profilesSidebarTree.css.js ***!
  \****************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
:host {
  padding: var(--sys-size-3) 0;
}

.tree-outline-disclosure {
  width: 100%;
}

/* Icon-related changes */
li .icon {
  width: 20px;
  height: 20px;
  margin-right: var(--sys-size-6);
  flex: none;
}

/* Heap profiles and CPU profiles */
.heap-snapshot-sidebar-tree-item .icon,
.profile-sidebar-tree-item .icon {
  mask-image: var(--image-file-heap-snapshot);
  background: var(--icon-default);
}

.profile-group-sidebar-tree-item .icon {
  mask-image: var(--image-file-heap-snapshots);
  background: var(--icon-default);
}

li.small .icon {
  width: 16px;
  height: 16px;
}

li.wait .icon {
  content: none;
}

/* Tree outline overrides */

.heap-snapshot-sidebar-tree-item.wait .icon {
  mask-image: unset;
  background-color: inherit;
}

.heap-snapshot-sidebar-tree-item.small .icon {
  mask-image: var(--image-file-heap-snapshots);
  background: var(--icon-default);
}

.profile-sidebar-tree-item.small .icon {
  mask-image: var(--image-file-heap-snapshots);
  background: var(--icon-default);
}

.tree-outline li:not(.parent)::before {
  content: none;
}

ol.tree-outline {
  flex: auto;
  padding: 0;
}

.tree-outline li {
  height: var(--sys-size-12);
  padding-left: var(--sys-size-7);
  margin-right: var(--sys-size-5);
  color: var(--sys-color-on-surface);

  & .leading-icons {
    margin-right: var(--sys-size-6);
    flex: none;
  }

  & .selection {
    border-radius: 0 100px 100px 0;
  }
}

.tree-outline .profile-launcher-view-tree-item,
.tree-outline li.profiles-tree-section + .children > li {
  border-radius: 0 100px 100px 0;
  position: relative;

  &.selected {
    background-color: var(--app-color-navigation-drawer-background-selected);
    color: var(--app-color-navigation-drawer-label-selected);

    & devtools-icon {
      color: var(--app-color-navigation-drawer-label-selected);
    }

    & > .icon:not(.spinner) {
      background-color: var(--app-color-navigation-drawer-label-selected);
    }
  }

  &:active::before {
    background-color: var(--sys-color-state-ripple-neutral-on-subtle);
    mask-image: none;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--sys-color-state-focus-ring);
  }
}

.tree-outline li.profiles-tree-section {
  margin-top: var(--sys-size-6);
  line-height: var(--sys-size-8);

  &:hover:not(:has(span[is="dt-checkbox"])) .selection {
    background-color: transparent;
  }
}

.tree-outline li.profiles-tree-section::before {
  display: none;
}

.tree-outline ol {
  overflow: hidden;
  padding: 0;
}

/* Generic items styling */

li.wait .spinner::before {
  --dimension: 20px;

  margin: 0;
}

li.wait.small .spinner::before {
  --dimension: 14px;
  --clip-size: 9px;
  --override-spinner-size: 2px;

  margin: 1px;
}

li.wait.selected .spinner::before {
  --override-spinner-color: var(--ref-palette-neutral100);
}

@keyframes spinner-animation {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

li.small {
  height: 20px;
}

li .titles {
  display: inline-flex;
  padding-right: var(--sys-size-5);
}

li .titles > .title-container {
  z-index: 1;
  text-overflow: ellipsis;
  overflow: hidden;
}

li.small .titles {
  top: 2px;
  line-height: normal;
}

li:not(.small) .title::after {
  content: "\\A";
  white-space: pre;
}

li .subtitle {
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: var(--sys-size-3);
}

li.small .subtitle {
  display: none;
}

li devtools-button {
  min-width: var(--sys-size-12);
  visibility: hidden;
}

li.selected:hover devtools-button {
  visibility: visible;
  margin-left: auto;
}

@media (forced-colors: active) {
  .tree-outline li,
  .tree-outline li.profiles-tree-section,
  .tree-outline li:hover .tree-element-title {
    forced-color-adjust: none;
    color: ButtonText;
    text-shadow: unset;
  }

  .tree-outline .profile-launcher-view-tree-item,
  .tree-outline li.profiles-tree-section + .children > li {
    &.selected {
      background-color: Highlight;
      color: HighlightText;

      & devtools-icon {
        color: HighlightText;
      }

      & > .icon:not(.spinner) {
        background-color: HighlightText;
      }
    }
  }
}

/*# sourceURL=profilesSidebarTree.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);