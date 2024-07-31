"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfileSidebarTreeElement_ts"],{

/***/ "./src/panels/profiler/ProfileHeader.ts":
/*!**********************************************!*\
  !*** ./src/panels/profiler/ProfileHeader.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   ProfileEvents: () => (/* binding */ ProfileEvents),
/* harmony export */   ProfileHeader: () => (/* binding */ ProfileHeader),
/* harmony export */   ProfileType: () => (/* binding */ ProfileType),
/* harmony export */   StatusUpdate: () => (/* binding */ StatusUpdate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ProfileHeader extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(profileType, title) {
        super();
        Object.defineProperty(this, "profileTypeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fromFileInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tempFile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.profileTypeInternal = profileType;
        this.title = title;
        this.uid = profileType.incrementProfileUid();
        this.fromFileInternal = false;
        this.tempFile = null;
    }
    setTitle(title) {
        this.title = title;
        this.dispatchEventToListeners(Events.ProfileTitleChanged, this);
    }
    profileType() {
        return this.profileTypeInternal;
    }
    updateStatus(subtitle, wait) {
        this.dispatchEventToListeners(Events.UpdateStatus, new StatusUpdate(subtitle, wait));
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
    constructor(subtitle, wait) {
        Object.defineProperty(this, "subtitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wait", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.subtitle = subtitle;
        this.wait = wait;
    }
}
var Events;
(function (Events) {
    Events["UpdateStatus"] = "UpdateStatus";
    Events["ProfileTitleChanged"] = "ProfileTitleChanged";
})(Events || (Events = {}));
class ProfileType extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(id, name) {
        super();
        Object.defineProperty(this, "idInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nameInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profiles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileBeingRecordedInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nextProfileUidInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        this.dispatchEventToListeners(ProfileEvents.AddProfileHeader, profile);
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
        this.dispatchEventToListeners(ProfileEvents.RemoveProfileHeader, profile);
        profile.dispose();
        if (this.profileBeingRecordedInternal === profile) {
            this.profileBeingRecordedRemoved();
            this.setProfileBeingRecorded(null);
        }
    }
}
var ProfileEvents;
(function (ProfileEvents) {
    ProfileEvents["AddProfileHeader"] = "add-profile-header";
    ProfileEvents["ProfileComplete"] = "profile-complete";
    ProfileEvents["RemoveProfileHeader"] = "remove-profile-header";
    ProfileEvents["ViewUpdated"] = "view-updated";
})(ProfileEvents || (ProfileEvents = {}));


/***/ }),

/***/ "./src/panels/profiler/ProfileSidebarTreeElement.ts":
/*!**********************************************************!*\
  !*** ./src/panels/profiler/ProfileSidebarTreeElement.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileSidebarTreeElement: () => (/* binding */ ProfileSidebarTreeElement)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileHeader.js */ "./src/panels/profiler/ProfileHeader.ts");
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
    constructor(dataDisplayDelegate, profile, className) {
        super('', false);
        Object.defineProperty(this, "iconElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titlesElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "menuElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titleContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "titleElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subtitleElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "className", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "small", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataDisplayDelegate", {
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
        Object.defineProperty(this, "saveLinkElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON,
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
        profile.addEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_4__.Events.UpdateStatus, this.updateStatus, this);
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
        this.profile.removeEventListener(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_4__.Events.UpdateStatus, this.updateStatus, this);
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


/***/ })

}]);