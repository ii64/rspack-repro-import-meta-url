"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ProfileLauncherView_js"],{

/***/ "./panels/profiler/ProfileLauncherView.js":
/*!************************************************!*\
  !*** ./panels/profiler/ProfileLauncherView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileLauncherView: () => (/* binding */ ProfileLauncherView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IsolateSelector.js */ "./panels/profiler/IsolateSelector.js");
/* harmony import */ var _profileLauncherView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileLauncherView.css.js */ "./panels/profiler/profileLauncherView.css.js");
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
    panel;
    contentElementInternal;
    selectedProfileTypeSetting;
    profileTypeHeaderElement;
    profileTypeSelectorForm;
    controlButton;
    loadButton;
    recordButtonEnabled;
    typeIdToOptionElementAndProfileType;
    isProfiling;
    isInstantProfile;
    isEnabled;
    constructor(profilesPanel) {
        super();
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
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
        });
        this.loadButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
        this.loadButton
            .data = { iconName: 'import', variant: "outlined" /* Buttons.Button.Variant.OUTLINED */, jslogContext: 'profiler.load-from-file' };
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
        this.dispatchEventToListeners("ProfileTypeSelected" /* Events.ProfileTypeSelected */, type);
    }
    controlButtonClicked() {
        this.panel.toggleRecord();
    }
    profileTypeChanged(profileType) {
        const typeId = this.selectedProfileTypeSetting.get();
        const type = this.typeIdToOptionElementAndProfileType.get(typeId).profileType;
        type.setCustomContentEnabled(false);
        profileType.setCustomContentEnabled(true);
        this.dispatchEventToListeners("ProfileTypeSelected" /* Events.ProfileTypeSelected */, profileType);
        this.isInstantProfile = profileType.isInstantProfile();
        this.isEnabled = profileType.isEnabled();
        this.updateControls();
        this.selectedProfileTypeSetting.set(profileType.id);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_profileLauncherView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
//# sourceMappingURL=ProfileLauncherView.js.map

/***/ }),

/***/ "./panels/profiler/profileLauncherView.css.js":
/*!****************************************************!*\
  !*** ./panels/profiler/profileLauncherView.css.js ***!
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
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.profile-launcher-view {
  overflow: auto;
}

.profile-launcher-view-content {
  margin: 10px 16px;
  flex: auto 1 0;
}

.profile-launcher-view-content h1 {
  font-size: 15px;
  font-weight: normal;
  margin: 6px 0 10px;
}

.profile-launcher-view-content [is="dt-radio"] {
  font-size: 13px;
}

.profile-launcher-view-content p {
  color: var(--sys-color-token-subtle);
  margin-top: 1px;
  margin-left: 22px;
}

.profile-launcher-view-content p [is="dt-checkbox"] {
  display: flex;
}

.profile-launcher-view-content button.text-button.running,
.profile-launcher-view-content button.text-button.running:focus {
  color: var(--sys-color-error);
}

.profile-launcher-view-content > div {
  flex: auto 0 0;
}

.profile-launcher-view-content > .profile-isolate-selector-block {
  flex: auto 1 0;
  overflow: hidden;
}

.profile-isolate-selector-block button {
  min-width: 110px;
}

.profile-launcher-target-list {
  margin-bottom: 6px;
  border: 1px solid var(--sys-color-divider);
  flex: 150px 1 0;
}

.profile-launcher-target-list-container {
  overflow: auto;
}

.profile-memory-usage-item {
  min-width: 100%;
  width: max-content;
  padding: 4px;
  line-height: 16px;
}

.profile-isolate-selector-block > .profile-memory-usage-item {
  margin-left: 1px;
  margin-bottom: 4px;
  font-weight: bolder;
}

.profile-memory-usage-item.selected {
  background-color: var(--sys-color-neutral-container);
}

.profile-memory-usage-item:focus {
  background-color: var(--sys-color-tonal-container);
}

.profile-launcher-target-list .profile-memory-usage-item:hover:not(.selected) {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.javascript-vm-instances-list {
  width: max-content;
  min-width: 100%;
}

.javascript-vm-instances-list:focus .profile-memory-usage-item.selected {
  background-color: var(--sys-color-tonal-container);
}

.profile-memory-usage-item > div {
  flex-shrink: 0;
  margin-right: 12px;
}

.profile-memory-usage-item-size {
  width: 60px;
  text-align: right;
}

.profile-memory-usage-item-trend {
  min-width: 5em;
  color: var(--sys-color-tertiary);
}

.profile-memory-usage-item-trend.increasing {
  color: var(--sys-color-error);
}

.profile-launcher-buttons {
  flex-wrap: wrap;
  column-gap: 8px;
}

@media (forced-colors: active) {
  .profile-memory-usage-item {
    forced-color-adjust: none;
    border-left-color: transparent;
  }

  .profile-memory-usage-item-trend,
  .profile-memory-usage-item-trend.increasing,
  .profile-launcher-view-content button.running,
  body.inactive .profile-launcher-view-content button.running:not(.toolbar-item) {
    color: ButtonText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) {
    background-color: Highlight;
    color: HighlightText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend,
  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend.increasing {
    color: ButtonFace;
  }

  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend,
  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend.increasing {
    background-color: Highlight;
    color: HighlightText;
  }

  .javascript-vm-instances-list .profile-memory-usage-item.selected {
    background-color: ButtonText;
    border-color: Highlight;
    color: ButtonFace;
  }

  .javascript-vm-instances-list:focus .profile-memory-usage-item.selected,
  .javascript-vm-instances-list:focus-visible .profile-memory-usage-item.selected {
    background-color: Highlight;
    border-color: ButtonText;
    color: HighlightText;
  }
}

/*# sourceURL=profileLauncherView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);