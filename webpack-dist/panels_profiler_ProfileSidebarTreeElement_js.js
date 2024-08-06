"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ProfileSidebarTreeElement_js"],{

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

/***/ })

}]);