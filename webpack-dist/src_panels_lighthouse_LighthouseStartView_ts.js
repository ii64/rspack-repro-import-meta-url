"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthouseStartView_ts"],{

/***/ "./src/panels/lighthouse/LighthouseStartView.ts":
/*!******************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseStartView.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartView: () => (/* binding */ StartView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseController.js */ "./src/panels/lighthouse/LighthouseController.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseStartView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RadioSetting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioSetting.js */ "./src/panels/lighthouse/RadioSetting.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Text displayed as the title of a panel that can be used to audit a web page with Lighthouse.
     */
    generateLighthouseReport: 'Generate a Lighthouse report',
    /**
     * @description Text that refers to the Lighthouse mode
     */
    mode: 'Mode',
    /**
     * @description Title in the Lighthouse Start View for list of categories to run during audit
     */
    categories: 'Categories',
    /**
     * @description Label for a button to start analyzing a page navigation with Lighthouse
     */
    analyzeNavigation: 'Analyze page load',
    /**
     * @description Label for a button to start analyzing the current page state with Lighthouse
     */
    analyzeSnapshot: 'Analyze page state',
    /**
     * @description Label for a button that starts a Lighthouse mode that analyzes user interactions over a period of time.
     */
    startTimespan: 'Start timespan',
    /**
     * @description Text that is usually a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     * @description Text that refers to device such as a phone
     */
    device: 'Device',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/lighthouse/LighthouseStartView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class StartView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.Widget {
    constructor(controller, panel) {
        super();
        Object.defineProperty(this, "controller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "settingsToolbarInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startButton", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "helpText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "warningText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkboxes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "changeFormMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.controller = controller;
        this.panel = panel;
        this.settingsToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('');
        this.render();
    }
    populateRuntimeSettingAsRadio(settingName, label, parentElement) {
        const runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(item => item.setting.name === settingName);
        if (!runtimeSetting || !runtimeSetting.options) {
            throw new Error(`${settingName} is not a setting with options`);
        }
        const labelEl = document.createElement('div');
        labelEl.classList.add('lighthouse-form-section-label');
        labelEl.textContent = label;
        if (runtimeSetting.learnMore) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
            labelEl.append(link);
        }
        parentElement.appendChild(labelEl);
        const control = new _RadioSetting_js__WEBPACK_IMPORTED_MODULE_5__.RadioSetting(runtimeSetting.options, runtimeSetting.setting, runtimeSetting.description());
        parentElement.appendChild(control.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(control.element, label);
    }
    populateRuntimeSettingAsToolbarCheckbox(settingName, toolbar) {
        const runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(item => item.setting.name === settingName);
        if (!runtimeSetting || !runtimeSetting.title) {
            throw new Error(`${settingName} is not a setting with a title`);
        }
        runtimeSetting.setting.setTitle(runtimeSetting.title());
        const control = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingCheckbox(runtimeSetting.setting, runtimeSetting.description());
        toolbar.appendToolbarItem(control);
        if (runtimeSetting.learnMore) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
            link.style.margin = '5px';
            control.element.appendChild(link);
        }
    }
    populateRuntimeSettingAsToolbarDropdown(settingName, toolbar) {
        const runtimeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(item => item.setting.name === settingName);
        if (!runtimeSetting || !runtimeSetting.title) {
            throw new Error(`${settingName} is not a setting with a title`);
        }
        const options = runtimeSetting.options?.map(option => ({ label: option.label(), value: option.value })) || [];
        runtimeSetting.setting.setTitle(runtimeSetting.title());
        const control = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingComboBox(options, runtimeSetting.setting, runtimeSetting.title());
        control.setTitle(runtimeSetting.description());
        toolbar.appendToolbarItem(control);
        if (runtimeSetting.learnMore) {
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.XLink.XLink.create(runtimeSetting.learnMore, i18nString(UIStrings.learnMore), 'lighthouse-learn-more', undefined, 'learn-more');
            link.style.margin = '5px';
            control.element.appendChild(link);
        }
    }
    populateFormControls(fragment, mode) {
        // Populate the device type
        const deviceTypeFormElements = fragment.$('device-type-form-elements');
        this.populateRuntimeSettingAsRadio('lighthouse.device-type', i18nString(UIStrings.device), deviceTypeFormElements);
        // Populate the categories
        const categoryFormElements = fragment.$('categories-form-elements');
        this.checkboxes = [];
        for (const preset of _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.Presets) {
            preset.setting.setTitle(preset.title());
            const checkbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSettingCheckbox(preset.setting, preset.description());
            const row = categoryFormElements.createChild('div', 'vbox lighthouse-launcher-row');
            row.appendChild(checkbox.element);
            checkbox.element.setAttribute('data-lh-category', preset.configID);
            this.checkboxes.push({ preset, checkbox });
            if (mode && !preset.supportedModes.includes(mode)) {
                checkbox.setEnabled(false);
                checkbox.setIndeterminate(true);
            }
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsGroup(categoryFormElements);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(categoryFormElements, i18nString(UIStrings.categories));
    }
    render() {
        this.populateRuntimeSettingAsToolbarCheckbox('lighthouse.clear-storage', this.settingsToolbarInternal);
        this.populateRuntimeSettingAsToolbarCheckbox('lighthouse.enable-sampling', this.settingsToolbarInternal);
        this.populateRuntimeSettingAsToolbarDropdown('lighthouse.throttling', this.settingsToolbarInternal);
        const { mode } = this.controller.getFlags();
        this.populateStartButton(mode);
        const fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
<form class="lighthouse-start-view">
  <header class="hbox">
    <div class="lighthouse-logo"></div>
    <div class="lighthouse-title">${i18nString(UIStrings.generateLighthouseReport)}</div>
    <div class="lighthouse-start-button-container" $="start-button-container">${this.startButton}</div>
  </header>
  <div $="help-text" class="lighthouse-help-text hidden"></div>
  <div class="lighthouse-options hbox">
    <div class="lighthouse-form-section">
      <div class="lighthouse-form-elements" $="mode-form-elements"></div>
    </div>
    <div class="lighthouse-form-section">
      <div class="lighthouse-form-elements" $="device-type-form-elements"></div>
    </div>
    <div class="lighthouse-form-categories">
      <div class="lighthouse-form-section">
        <div class="lighthouse-form-section-label">${i18nString(UIStrings.categories)}</div>
        <div class="lighthouse-form-elements" $="categories-form-elements"></div>
      </div>
    </div>
  </div>
  <div $="warning-text" class="lighthouse-warning-text hidden"></div>
</form>
    `;
        this.helpText = fragment.$('help-text');
        this.warningText = fragment.$('warning-text');
        const modeFormElements = fragment.$('mode-form-elements');
        this.populateRuntimeSettingAsRadio('lighthouse.mode', i18nString(UIStrings.mode), modeFormElements);
        this.populateFormControls(fragment, mode);
        this.contentElement.textContent = '';
        this.contentElement.append(fragment.element());
        this.refresh();
    }
    populateStartButton(mode) {
        let buttonLabel;
        let callback;
        if (mode === 'timespan') {
            buttonLabel = i18nString(UIStrings.startTimespan);
            callback = () => {
                void this.panel.handleTimespanStart();
            };
        }
        else if (mode === 'snapshot') {
            buttonLabel = i18nString(UIStrings.analyzeSnapshot);
            callback = () => {
                void this.panel.handleCompleteRun();
            };
        }
        else {
            buttonLabel = i18nString(UIStrings.analyzeNavigation);
            callback = () => {
                void this.panel.handleCompleteRun();
            };
        }
        const startButtonContainer = this.contentElement.querySelector('.lighthouse-start-button-container');
        if (startButtonContainer) {
            startButtonContainer.textContent = '';
            this.startButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(buttonLabel, callback, { variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY, jslogContext: 'lighthouse.start' });
            startButtonContainer.append(this.startButton);
        }
    }
    refresh() {
        const { mode } = this.controller.getFlags();
        this.populateStartButton(mode);
        for (const { checkbox, preset } of this.checkboxes) {
            if (preset.supportedModes.includes(mode)) {
                checkbox.setEnabled(true);
                checkbox.setIndeterminate(false);
            }
            else {
                checkbox.setEnabled(false);
                checkbox.setIndeterminate(true);
            }
        }
        // Ensure the correct layout is used after refresh.
        this.onResize();
    }
    onResize() {
        const useNarrowLayout = this.contentElement.offsetWidth < 500;
        const useWideLayout = this.contentElement.offsetWidth > 800;
        const headerEl = this.contentElement.querySelector('.lighthouse-start-view header');
        const optionsEl = this.contentElement.querySelector('.lighthouse-options');
        if (headerEl) {
            headerEl.classList.toggle('hbox', !useNarrowLayout);
            headerEl.classList.toggle('vbox', useNarrowLayout);
        }
        if (optionsEl) {
            optionsEl.classList.toggle('wide', useWideLayout);
            optionsEl.classList.toggle('narrow', useNarrowLayout);
        }
    }
    focusStartButton() {
        this.startButton.focus();
    }
    setStartButtonEnabled(isEnabled) {
        if (this.helpText) {
            this.helpText.classList.toggle('hidden', isEnabled);
        }
        if (this.startButton) {
            this.startButton.disabled = !isEnabled;
        }
    }
    setUnauditableExplanation(text) {
        if (this.helpText) {
            this.helpText.textContent = text;
        }
    }
    setWarningText(text) {
        if (this.warningText) {
            this.warningText.textContent = text;
            this.warningText.classList.toggle('hidden', !text);
        }
    }
    wasShown() {
        super.wasShown();
        this.controller.recomputePageAuditability();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './lighthouseStartView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    settingsToolbar() {
        return this.settingsToolbarInternal;
    }
}


/***/ }),

/***/ "./src/panels/lighthouse/RadioSetting.ts":
/*!***********************************************!*\
  !*** ./src/panels/lighthouse/RadioSetting.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioSetting: () => (/* binding */ RadioSetting)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RadioSetting {
    constructor(options, setting, description) {
        Object.defineProperty(this, "setting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "radioElements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoreChangeEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.setting = setting;
        this.options = options;
        this.element = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.setDescription(this.element, description);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.markAsRadioGroup(this.element);
        this.radioElements = [];
        for (const option of this.options) {
            const fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Fragment.Fragment.build `
  <label $="label" class="lighthouse-radio">
  <input $="input" type="radio" value=${option.value} name=${setting.name}>
  <span $="span" class="lighthouse-radio-text">${option.label()}</span>
  </label>
  `;
            this.element.appendChild(fragment.element());
            const tooltip = option.tooltip?.() || description;
            if (description) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('input'), tooltip);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('span'), tooltip);
            }
            const radioElement = fragment.$('input');
            radioElement.addEventListener('change', this.valueChanged.bind(this));
            this.radioElements.push(radioElement);
        }
        this.ignoreChangeEvents = false;
        this.selectedIndex = -1;
        setting.addChangeListener(this.settingChanged, this);
        this.settingChanged();
    }
    updateUI() {
        this.ignoreChangeEvents = true;
        this.radioElements[this.selectedIndex].checked = true;
        this.ignoreChangeEvents = false;
    }
    settingChanged() {
        const value = this.setting.get();
        this.selectedIndex = this.options.findIndex(option => option.value === value);
        this.updateUI();
    }
    valueChanged(_event) {
        if (this.ignoreChangeEvents) {
            return;
        }
        const selectedRadio = this.radioElements.find(radio => radio.checked);
        if (!selectedRadio) {
            return;
        }
        this.setting.set(selectedRadio.value);
    }
}


/***/ })

}]);