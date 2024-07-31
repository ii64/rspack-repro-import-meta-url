"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfileLauncherView_ts"],{

/***/ "./src/panels/profiler/ProfileLauncherView.ts":
/*!****************************************************!*\
  !*** ./src/panels/profiler/ProfileLauncherView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   ProfileLauncherView: () => (/* binding */ ProfileLauncherView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IsolateSelector.js */ "./src/panels/profiler/IsolateSelector.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './profileLauncherView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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






const UIStrings = {
    /**
     *@description Text in Profile Launcher View of a profiler tool
     */
    selectJavascriptVmInstance: 'Select JavaScript VM instance',
    /**
     *@description Text to load something
     */
    load: 'Load profile',
    /**
     *@description Control button text content in Profile Launcher View of a profiler tool
     */
    takeSnapshot: 'Take snapshot',
    /**
     *@description Text of an item that stops the running task
     */
    stop: 'Stop',
    /**
     *@description Control button text content in Profile Launcher View of a profiler tool
     */
    start: 'Start',
    /**
     *@description Profile type header element text content in Profile Launcher View of a profiler tool
     */
    selectProfilingType: 'Select profiling type',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/ProfileLauncherView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ProfileLauncherView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox) {
    constructor(profilesPanel) {
        super();
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contentElementInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedProfileTypeSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileTypeHeaderElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileTypeSelectorForm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "controlButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "loadButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "recordButtonEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "typeIdToOptionElementAndProfileType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isProfiling", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isInstantProfile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.panel = profilesPanel;
        this.element.classList.add('profile-launcher-view');
        this.contentElementInternal =
            this.element.createChild('div', 'profile-launcher-view-content vbox');
        const profileTypeSelectorElement = this.contentElementInternal.createChild('div', 'vbox');
        this.selectedProfileTypeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('selected-profile-type', 'CPU');
        this.profileTypeHeaderElement = profileTypeSelectorElement.createChild('h1');
        this.profileTypeSelectorForm = profileTypeSelectorElement.createChild('form');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsRadioGroup(this.profileTypeSelectorForm);
        const isolateSelectorElement = this.contentElementInternal.createChild('div', 'vbox profile-isolate-selector-block');
        isolateSelectorElement.createChild('h1').textContent = i18nString(UIStrings.selectJavascriptVmInstance);
        const isolateSelector = new _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_4__.IsolateSelector();
        const isolateSelectorElementChild = isolateSelectorElement.createChild('div', 'vbox profile-launcher-target-list');
        isolateSelectorElementChild.classList.add('profile-launcher-target-list-container');
        isolateSelector.show(isolateSelectorElementChild);
        isolateSelectorElement.appendChild(isolateSelector.totalMemoryElement());
        const buttonsDiv = this.contentElementInternal.createChild('div', 'hbox profile-launcher-buttons');
        this.controlButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton('', this.controlButtonClicked.bind(this), {
            jslogContext: 'profiler.heap-toggle-recording',
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY,
        });
        this.loadButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
        this.loadButton
            .data = { iconName: 'import', variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.OUTLINED, jslogContext: 'profiler.load-from-file' };
        this.loadButton.textContent = i18nString(UIStrings.load);
        this.loadButton.addEventListener('click', this.loadButtonClicked.bind(this));
        buttonsDiv.appendChild(this.loadButton);
        buttonsDiv.appendChild(this.controlButton);
        this.recordButtonEnabled = true;
        this.typeIdToOptionElementAndProfileType = new Map();
    }
    loadButtonClicked() {
        const loadFromFileAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('profiler.load-from-file');
        void loadFromFileAction.execute();
    }
    updateControls() {
        if (this.isEnabled && this.recordButtonEnabled) {
            this.controlButton.removeAttribute('disabled');
        }
        else {
            this.controlButton.setAttribute('disabled', '');
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(this.controlButton, this.recordButtonEnabled ? '' : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.anotherProfilerActiveLabel());
        if (this.isInstantProfile) {
            this.controlButton.classList.remove('running');
            this.controlButton.textContent = i18nString(UIStrings.takeSnapshot);
        }
        else if (this.isProfiling) {
            this.controlButton.classList.add('running');
            this.controlButton.textContent = i18nString(UIStrings.stop);
        }
        else {
            this.controlButton.classList.remove('running');
            this.controlButton.textContent = i18nString(UIStrings.start);
        }
        for (const { optionElement } of this.typeIdToOptionElementAndProfileType.values()) {
            optionElement.disabled = Boolean(this.isProfiling);
        }
    }
    profileStarted() {
        this.isProfiling = true;
        this.updateControls();
    }
    profileFinished() {
        this.isProfiling = false;
        this.updateControls();
    }
    updateProfileType(profileType, recordButtonEnabled) {
        this.isInstantProfile = profileType.isInstantProfile();
        this.recordButtonEnabled = recordButtonEnabled;
        this.isEnabled = profileType.isEnabled();
        this.updateControls();
    }
    addProfileType(profileType) {
        const labelElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createRadioLabel('profile-type', profileType.name, undefined, 'profiler.profile-type');
        this.profileTypeSelectorForm.appendChild(labelElement);
        const optionElement = labelElement.radioElement;
        this.typeIdToOptionElementAndProfileType.set(profileType.id, { optionElement, profileType });
        optionElement.addEventListener('change', this.profileTypeChanged.bind(this, profileType), false);
        const descriptionElement = this.profileTypeSelectorForm.createChild('p');
        descriptionElement.textContent = profileType.description;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(optionElement, profileType.description);
        const customContent = profileType.customContent();
        if (customContent) {
            customContent.setAttribute('role', 'group');
            customContent.setAttribute('aria-labelledby', `${optionElement.id}`);
            this.profileTypeSelectorForm.createChild('p').appendChild(customContent);
            profileType.setCustomContentEnabled(false);
        }
        const headerText = this.typeIdToOptionElementAndProfileType.size > 1 ? i18nString(UIStrings.selectProfilingType) :
            profileType.name;
        this.profileTypeHeaderElement.textContent = headerText;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(this.profileTypeSelectorForm, headerText);
    }
    restoreSelectedProfileType() {
        let typeId = this.selectedProfileTypeSetting.get();
        if (!this.typeIdToOptionElementAndProfileType.has(typeId)) {
            typeId = this.typeIdToOptionElementAndProfileType.keys().next().value;
            this.selectedProfileTypeSetting.set(typeId);
        }
        const optionElementAndProfileType = this.typeIdToOptionElementAndProfileType.get(typeId);
        optionElementAndProfileType.optionElement.checked = true;
        const type = optionElementAndProfileType.profileType;
        for (const [id, { profileType }] of this.typeIdToOptionElementAndProfileType) {
            const enabled = (id === typeId);
            profileType.setCustomContentEnabled(enabled);
        }
        this.dispatchEventToListeners(Events.ProfileTypeSelected, type);
    }
    controlButtonClicked() {
        this.panel.toggleRecord();
    }
    profileTypeChanged(profileType) {
        const typeId = this.selectedProfileTypeSetting.get();
        const type = this.typeIdToOptionElementAndProfileType.get(typeId).profileType;
        type.setCustomContentEnabled(false);
        profileType.setCustomContentEnabled(true);
        this.dispatchEventToListeners(Events.ProfileTypeSelected, profileType);
        this.isInstantProfile = profileType.isInstantProfile();
        this.isEnabled = profileType.isEnabled();
        this.updateControls();
        this.selectedProfileTypeSetting.set(profileType.id);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './profileLauncherView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
var Events;
(function (Events) {
    Events["ProfileTypeSelected"] = "ProfileTypeSelected";
})(Events || (Events = {}));


/***/ })

}]);