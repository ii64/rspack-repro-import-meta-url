"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_settings_emulation_DevicesSettingsTab_js"],{

/***/ "./panels/settings/emulation/DevicesSettingsTab.js":
/*!*********************************************************!*\
  !*** ./panels/settings/emulation/DevicesSettingsTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevicesSettingsTab: () => (/* binding */ DevicesSettingsTab)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/settings/emulation/components/components.js");
/* harmony import */ var _devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devicesSettingsTab.css.js */ "./panels/settings/emulation/devicesSettingsTab.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title for a section of the UI that shows all of the devices the user can emulate, in the Device Toolbar.
     */
    emulatedDevices: 'Emulated Devices',
    /**
     *@description Button to add a custom device (e.g. phone, tablet) the Device Toolbar.
     */
    addCustomDevice: 'Add custom device...',
    /**
     *@description Label/title for UI to add a new custom device type. Device means mobile/tablet etc.
     */
    device: 'Device',
    /**
     *@description Placeholder for text input for the name of a custom device.
     */
    deviceName: 'Device Name',
    /**
     *@description Placeholder text for text input for the width of a custom device in pixels.
     */
    width: 'Width',
    /**
     *@description Placeholder text for text input for the height of a custom device in pixels.
     */
    height: 'Height',
    /**
     *@description Placeholder text for text input for the height/width ratio of a custom device in pixels.
     */
    devicePixelRatio: 'Device pixel ratio',
    /**
     *@description Label in the Devices settings pane for the user agent string input of a custom device
     */
    userAgentString: 'User agent string',
    /**
     *@description Tooltip text for a drop-down in the Devices settings pane, for the 'user agent type' input of a custom device.
     * 'Type' refers to different options e.g. mobile or desktop.
     */
    userAgentType: 'User agent type',
    /**
     *@description Error message in the Devices settings pane that declares the maximum length of the device name input
     *@example {50} PH1
     */
    deviceNameMustBeLessThanS: 'Device name must be less than {PH1} characters.',
    /**
     *@description Error message in the Devices settings pane that declares that the device name input must not be empty
     */
    deviceNameCannotBeEmpty: 'Device name cannot be empty.',
    /**
     *@description Success message for screen readers when device is added.
     *@example {TestDevice} PH1
     */
    deviceAddedOrUpdated: 'Device {PH1} successfully added/updated.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/settings/emulation/DevicesSettingsTab.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class DevicesSettingsTab extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    containerElement;
    addCustomButton;
    ariaSuccessMessageElement;
    list;
    muteUpdate;
    emulatedDevicesList;
    editor;
    constructor() {
        super();
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('devices')}`);
        this.element.classList.add('settings-tab-container');
        this.element.classList.add('devices-settings-tab');
        const header = this.element.createChild('header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(header.createChild('h1'), i18nString(UIStrings.emulatedDevices));
        this.containerElement = this.element.createChild('div', 'settings-container-wrapper')
            .createChild('div', 'settings-tab settings-content settings-container');
        const buttonsRow = this.containerElement.createChild('div', 'devices-button-row');
        this.addCustomButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.addCustomDevice), this.addCustomDevice.bind(this), { jslogContext: 'add-custom-device' });
        this.addCustomButton.id = 'custom-device-add-button';
        buttonsRow.appendChild(this.addCustomButton);
        this.ariaSuccessMessageElement = this.containerElement.createChild('div', 'device-success-message');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsPoliteLiveRegion(this.ariaSuccessMessageElement, false);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.ListWidget(this, false /* delegatesFocus */);
        this.list.element.classList.add('devices-list');
        this.list.show(this.containerElement);
        this.muteUpdate = false;
        this.emulatedDevicesList = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevicesList.instance();
        this.emulatedDevicesList.addEventListener("CustomDevicesUpdated" /* EmulationModel.EmulatedDevices.Events.CustomDevicesUpdated */, this.devicesUpdated, this);
        this.emulatedDevicesList.addEventListener("StandardDevicesUpdated" /* EmulationModel.EmulatedDevices.Events.StandardDevicesUpdated */, this.devicesUpdated, this);
        this.setDefaultFocusedElement(this.addCustomButton);
    }
    wasShown() {
        super.wasShown();
        this.devicesUpdated();
        this.registerCSSFiles([_devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
        this.list.registerCSSFiles([_devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
    devicesUpdated() {
        if (this.muteUpdate) {
            return;
        }
        this.list.clear();
        let devices = this.emulatedDevicesList.custom().slice();
        for (let i = 0; i < devices.length; ++i) {
            this.list.appendItem(devices[i], true);
        }
        this.list.appendSeparator();
        devices = this.emulatedDevicesList.standard().slice();
        devices.sort(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevice.deviceComparator);
        for (let i = 0; i < devices.length; ++i) {
            this.list.appendItem(devices[i], false);
        }
    }
    muteAndSaveDeviceList(custom) {
        this.muteUpdate = true;
        if (custom) {
            this.emulatedDevicesList.saveCustomDevices();
        }
        else {
            this.emulatedDevicesList.saveStandardDevices();
        }
        this.muteUpdate = false;
    }
    addCustomDevice() {
        const device = new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevice();
        device.deviceScaleFactor = 0;
        device.horizontal.width = 700;
        device.horizontal.height = 400;
        device.vertical.width = 400;
        device.vertical.height = 700;
        this.list.addNewItem(this.emulatedDevicesList.custom().length, device);
    }
    toNumericInputValue(value) {
        return value ? String(value) : '';
    }
    renderItem(device, editable) {
        const label = document.createElement('label');
        label.classList.add('devices-list-item');
        const checkbox = label.createChild('input', 'devices-list-checkbox');
        checkbox.type = 'checkbox';
        checkbox.checked = device.show();
        checkbox.addEventListener('click', onItemClicked.bind(this), false);
        checkbox.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toggle().track({ click: true })}`);
        const span = document.createElement('span');
        span.classList.add('device-name');
        span.appendChild(document.createTextNode(device.title));
        label.appendChild(span);
        return label;
        function onItemClicked(event) {
            const show = checkbox.checked;
            device.setShow(show);
            this.muteAndSaveDeviceList(editable);
            event.consume();
        }
    }
    removeItemRequested(item) {
        this.emulatedDevicesList.removeCustomDevice(item);
    }
    commitEdit(device, editor, isNew) {
        device.title = editor.control('title').value.trim();
        device.vertical.width = editor.control('width').value ? parseInt(editor.control('width').value, 10) : 0;
        device.vertical.height = editor.control('height').value ? parseInt(editor.control('height').value, 10) : 0;
        device.horizontal.width = device.vertical.height;
        device.horizontal.height = device.vertical.width;
        device.deviceScaleFactor = editor.control('scale').value ? parseFloat(editor.control('scale').value) : 0;
        device.userAgent = editor.control('user-agent').value;
        device.modes = [];
        device.modes.push({
            title: '',
            orientation: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.Vertical,
            insets: new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.Insets(0, 0, 0, 0),
            image: null,
        });
        device.modes.push({
            title: '',
            orientation: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.Horizontal,
            insets: new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.Insets(0, 0, 0, 0),
            image: null,
        });
        device.capabilities = [];
        const uaType = editor.control('ua-type').value;
        if (uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */ ||
            uaType === "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */) {
            device.capabilities.push("mobile" /* EmulationModel.EmulatedDevices.Capability.Mobile */);
        }
        if (uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */ ||
            uaType === "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */) {
            device.capabilities.push("touch" /* EmulationModel.EmulatedDevices.Capability.Touch */);
        }
        const userAgentControlValue = editor.control('ua-metadata')
            .value.metaData;
        if (userAgentControlValue) {
            device.userAgentMetadata = {
                ...userAgentControlValue,
                mobile: (uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */ ||
                    uaType === "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */),
            };
        }
        if (isNew) {
            this.emulatedDevicesList.addCustomDevice(device);
        }
        else {
            this.emulatedDevicesList.saveCustomDevices();
        }
        this.addCustomButton.scrollIntoViewIfNeeded();
        this.addCustomButton.focus();
        this.ariaSuccessMessageElement.setAttribute('aria-label', i18nString(UIStrings.deviceAddedOrUpdated, { PH1: device.title }));
    }
    beginEdit(device) {
        const editor = this.createEditor();
        editor.control('title').value = device.title;
        editor.control('width').value = this.toNumericInputValue(device.vertical.width);
        editor.control('height').value = this.toNumericInputValue(device.vertical.height);
        editor.control('scale').value = this.toNumericInputValue(device.deviceScaleFactor);
        editor.control('user-agent').value = device.userAgent;
        let uaType;
        if (device.mobile()) {
            uaType =
                device.touch() ? "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */ : "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */;
        }
        else {
            uaType =
                device.touch() ? "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */ : "Desktop" /* EmulationModel.DeviceModeModel.UA.Desktop */;
        }
        editor.control('ua-type').value = uaType;
        editor.control('ua-metadata')
            .value = { metaData: device.userAgentMetadata || undefined };
        return editor;
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor();
        this.editor = editor;
        const content = editor.contentElement();
        const deviceFields = content.createChild('div', 'devices-edit-fields');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(deviceFields.createChild('b'), i18nString(UIStrings.device));
        const deviceNameField = editor.createInput('title', 'text', i18nString(UIStrings.deviceName), titleValidator);
        deviceFields.createChild('div', 'hbox').appendChild(deviceNameField);
        deviceNameField.id = 'custom-device-name-field';
        const screen = deviceFields.createChild('div', 'hbox');
        screen.appendChild(editor.createInput('width', 'text', i18nString(UIStrings.width), widthValidator));
        screen.appendChild(editor.createInput('height', 'text', i18nString(UIStrings.height), heightValidator));
        const dpr = editor.createInput('scale', 'text', i18nString(UIStrings.devicePixelRatio), scaleValidator);
        dpr.classList.add('device-edit-fixed');
        screen.appendChild(dpr);
        const uaStringFields = content.createChild('div', 'devices-edit-fields');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(uaStringFields.createChild('b'), i18nString(UIStrings.userAgentString));
        const ua = uaStringFields.createChild('div', 'hbox');
        ua.appendChild(editor.createInput('user-agent', 'text', i18nString(UIStrings.userAgentString), () => {
            return { valid: true, errorMessage: undefined };
        }));
        const uaTypeOptions = [
            "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */,
            "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */,
            "Desktop" /* EmulationModel.DeviceModeModel.UA.Desktop */,
            "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */,
        ];
        const uaType = editor.createSelect('ua-type', uaTypeOptions, () => {
            return { valid: true, errorMessage: undefined };
        }, i18nString(UIStrings.userAgentType));
        uaType.classList.add('device-edit-fixed');
        ua.appendChild(uaType);
        const uaMetadata = editor.createCustomControl('ua-metadata', _components_components_js__WEBPACK_IMPORTED_MODULE_4__.UserAgentClientHintsForm.UserAgentClientHintsForm, userAgentMetadataValidator);
        uaMetadata.value = {};
        uaMetadata.addEventListener('clienthintschange', () => editor.requestValidation(), false);
        content.appendChild(uaMetadata);
        return editor;
        function userAgentMetadataValidator() {
            return uaMetadata.validate();
        }
        function titleValidator(item, index, input) {
            let valid = false;
            let errorMessage;
            const value = input.value.trim();
            if (value.length >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.MaxDeviceNameLength) {
                errorMessage =
                    i18nString(UIStrings.deviceNameMustBeLessThanS, { PH1: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.MaxDeviceNameLength });
            }
            else if (value.length === 0) {
                errorMessage = i18nString(UIStrings.deviceNameCannotBeEmpty);
            }
            else {
                valid = true;
            }
            return { valid, errorMessage };
        }
        function widthValidator(item, index, input) {
            return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.widthValidator(input.value);
        }
        function heightValidator(item, index, input) {
            return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.heightValidator(input.value);
        }
        function scaleValidator(item, index, input) {
            return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.scaleValidator(input.value);
        }
    }
}
//# sourceMappingURL=DevicesSettingsTab.js.map

/***/ }),

/***/ "./panels/settings/emulation/components/components.js":
/*!************************************************************!*\
  !*** ./panels/settings/emulation/components/components.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAgentClientHintsForm: () => (/* reexport module object */ _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAgentClientHintsForm.js */ "./panels/settings/emulation/components/UserAgentClientHintsForm.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/settings/emulation/devicesSettingsTab.css.js":
/*!*************************************************************!*\
  !*** ./panels/settings/emulation/devicesSettingsTab.css.js ***!
  \*************************************************************/
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
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.devices-settings-tab .settings-container-wrapper {
  padding-top: 5px;
}

.devices-settings-tab .settings-tab.settings-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 0;
}

.devices-settings-tab .devices-button-row {
  flex: none;
  display: flex;

  devtools-button {
    margin: 4px 0 0 5px;
  }
}

.devices-settings-tab .devices-list {
  width: min(350px, 100%);
  margin-top: 10px;
}

.devices-list-item {
  padding: 3px 5px;
  height: 30px;
  display: flex;
  align-items: center;
  flex: auto 1 1;
  overflow: hidden;
  color: var(--sys-color-on-surface);
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.devices-list-checkbox {
  height: 12px;
  width: 12px;
  margin: 2px 5px 2px 2px;
  flex: none;
  pointer-events: none;
}

.devices-list-checkbox:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.device-name {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.devices-edit-fields {
  flex: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 4px;
  margin-bottom: 5px;
}

.devices-edit-fields b {
  margin-top: 8px;
  margin-bottom: 0;
}

.devices-edit-client-hints-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
}
/* Don't want the bottom margin in the specific case of the folding one;
 * it messes with alignment with the arrow (which is a ::before) and  it's
 * spaced reasonably without it anyway
 */
li .devices-edit-client-hints-heading {
  margin-bottom: 0;
}

.devices-edit-client-hints-heading b {
  margin-inline-end: 2px;
}

.devices-edit-client-hints-heading .help-icon {
  margin-left: 2px;
  margin-right: 2px;
  vertical-align: middle;
}

.devices-edit-client-hints-heading a:focus {
  box-shadow: var(--sys-color-state-focus-ring);
}

.devices-edit-fields input {
  flex: auto;
  margin: 8px 5px 0;
}

li.devices-edit-client-hints-field {
  /* Cancel out padding from treeview's .tree-outline ol */
  left: -12px;
}

.devices-edit-client-hints-field input {
  flex: auto;
  margin: 8px 5px 0;
}

.devices-edit-fields .device-edit-fixed {
  flex: 0 0 140px;
}

.devices-edit-fields select {
  margin: 8px 5px 0;
}

/*# sourceURL=devicesSettingsTab.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);