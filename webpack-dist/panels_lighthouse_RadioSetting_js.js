"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_lighthouse_RadioSetting_js"],{

/***/ "./panels/lighthouse/RadioSetting.js":
/*!*******************************************!*\
  !*** ./panels/lighthouse/RadioSetting.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioSetting: () => (/* binding */ RadioSetting)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RadioSetting {
    setting;
    options;
    element;
    radioElements;
    ignoreChangeEvents;
    selectedIndex;
    constructor(options, setting, description) {
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
//# sourceMappingURL=RadioSetting.js.map

/***/ })

}]);