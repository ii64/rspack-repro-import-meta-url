"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfilesPanel_ts"],{

/***/ "./src/panels/profiler/ProfilesPanel.ts":
/*!**********************************************!*\
  !*** ./src/panels/profiler/ProfilesPanel.ts ***!
  \**********************************************/
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
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './heapProfiler.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfileHeader.js */ "./src/panels/profiler/ProfileHeader.ts");
/* harmony import */ var _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfileLauncherView.js */ "./src/panels/profiler/ProfileLauncherView.ts");
/* harmony import */ var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./src/panels/profiler/ProfileSidebarTreeElement.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './profilesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './profilesSidebarTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
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
var _ProfilesPanel_saveToFileAction;
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
    constructor(name, profileTypes, recordingActionId) {
        super(name);
        Object.defineProperty(this, "profileTypes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profilesItemTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileViews", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarElement", {
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
        Object.defineProperty(this, "toggleRecordButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ProfilesPanel_saveToFileAction.set(this, void 0);
        Object.defineProperty(this, "profileViewToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileGroups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "launcherView", {
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
        Object.defineProperty(this, "profileToView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "typeIdToSidebarSection", {
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
        Object.defineProperty(this, "selectedProfileType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        __classPrivateFieldSet(this, _ProfilesPanel_saveToFileAction, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('profiler.save-to-file'), "f");
        __classPrivateFieldGet(this, _ProfilesPanel_saveToFileAction, "f").setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(__classPrivateFieldGet(this, _ProfilesPanel_saveToFileAction, "f")));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('components.collect-garbage'));
        this.profileViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', this.toolbarElement);
        this.profileViewToolbar.makeWrappable(true);
        this.profileViewToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar('profile-view')}`);
        this.profileGroups = {};
        this.launcherView = new _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_9__.ProfileLauncherView(this);
        this.launcherView.addEventListener(_ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_9__.Events.ProfileTypeSelected, this.onProfileTypeSelected, this);
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
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Events.SuspendStateChanged, this.onSuspendStateChanged, this);
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
        __classPrivateFieldGet(this, _ProfilesPanel_saveToFileAction, "f").setEnabled(false);
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
        profileType.addEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileEvents.ViewUpdated, this.updateProfileTypeSpecificUI, this);
        profileType.addEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileEvents.AddProfileHeader, onAddProfileHeader, this);
        profileType.addEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileEvents.RemoveProfileHeader, onRemoveProfileHeader, this);
        profileType.addEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileEvents.ProfileComplete, profileComplete, this);
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileHeader, profile);
        __classPrivateFieldGet(this, _ProfilesPanel_saveToFileAction, "f").setEnabled(profile.canSaveToFile());
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileHeader, null);
        __classPrivateFieldGet(this, _ProfilesPanel_saveToFileAction, "f").setEnabled(false);
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
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './profilesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './heapProfiler.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.sidebarTree.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './profilesSidebarTree.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ProfilesPanel, null);
        super.willHide();
    }
}
_ProfilesPanel_saveToFileAction = new WeakMap();
class ProfileTypeSidebarSection extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    constructor(dataDisplayDelegate, profileType) {
        super(profileType.treeItemTitle, true);
        Object.defineProperty(this, "dataDisplayDelegate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileGroups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    constructor() {
        Object.defineProperty(this, "profileSidebarTreeElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebarTreeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileSidebarTreeElements = [];
        this.sidebarTreeElement = null;
    }
}
class ProfileGroupSidebarTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement {
    constructor(dataDisplayDelegate, title) {
        super('', true);
        Object.defineProperty(this, "dataDisplayDelegate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
            if (lastChild instanceof _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_10__.ProfileSidebarTreeElement) {
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
    constructor(panel) {
        super('', false);
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
                const profile = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileHeader);
                if (profile !== null) {
                    profile.saveToFile();
                    return true;
                }
                return false;
            }
            case 'profiler.delete-profile': {
                const profile = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_8__.ProfileHeader);
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


/***/ })

}]);