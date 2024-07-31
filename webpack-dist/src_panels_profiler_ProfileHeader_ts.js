"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfileHeader_ts"],{

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


/***/ })

}]);