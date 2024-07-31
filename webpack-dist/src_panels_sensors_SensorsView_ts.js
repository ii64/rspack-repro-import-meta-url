"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sensors_SensorsView_ts"],{

/***/ "./src/panels/sensors/SensorsView.ts":
/*!*******************************************!*\
  !*** ./src/panels/sensors/SensorsView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceOrientationModificationSource: () => (/* binding */ DeviceOrientationModificationSource),
/* harmony export */   NonPresetOptions: () => (/* binding */ NonPresetOptions),
/* harmony export */   SensorsView: () => (/* binding */ SensorsView),
/* harmony export */   ShiftDragOrientationSpeed: () => (/* binding */ ShiftDragOrientationSpeed),
/* harmony export */   ShowActionDelegate: () => (/* binding */ ShowActionDelegate)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sensors.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
var _SensorsView_instances, _SensorsView_locationSetting, _SensorsView_location, _SensorsView_locationOverrideEnabled, _SensorsView_locationSelectChanged;







const UIStrings = {
    /**
     *@description Title for a group of cities
     */
    location: 'Location',
    /**
     *@description An option that appears in a drop-down to prevent the GPS location of the user from being overridden.
     */
    noOverride: 'No override',
    /**
     *@description Title of a section that contains overrides for the user's GPS location.
     */
    overrides: 'Overrides',
    /**
     *@description Text of button in Sensors View, takes the user to the custom location setting screen
     *where they can enter/edit custom locations.
     */
    manage: 'Manage',
    /**
     *@description Aria-label for location manage button in Sensors View
     */
    manageTheListOfLocations: 'Manage the list of locations',
    /**
     *@description Option in a drop-down input for selecting the GPS location of the user. As an
     *alternative to selecting a location from the list, the user can select this option and they are
     *prompted to enter the details for a new custom location.
     */
    other: 'Other…',
    /**
     *@description Title of a section in a drop-down input that contains error locations, e.g. to select
     *a location override that says 'the location is not available'. A noun.
     */
    error: 'Error',
    /**
     *@description A type of override where the geographic location of the user is not available.
     */
    locationUnavailable: 'Location unavailable',
    /**
     *@description Tooltip text telling the user how to change the value of a latitude/longitude input
     *text box. several shortcuts are provided for convenience. The placeholder can be different
     *keyboard keys, depending on the user's settings.
     *@example {Ctrl} PH1
     */
    adjustWithMousewheelOrUpdownKeys: 'Adjust with mousewheel or up/down keys. {PH1}: ±10, Shift: ±1, Alt: ±0.01',
    /**
     *@description Label for latitude of a GPS location.
     */
    latitude: 'Latitude',
    /**
     *@description Label for Longitude of a GPS location.
     */
    longitude: 'Longitude',
    /**
     *@description Label for the ID of a timezone for a particular location.
     */
    timezoneId: 'Timezone ID',
    /**
     *@description Label for the locale relevant to a custom location.
     */
    locale: 'Locale',
    /**
     *@description Label the orientation of a user's device e.g. tilt in 3D-space.
     */
    orientation: 'Orientation',
    /**
     *@description Option that when chosen, turns off device orientation override.
     */
    off: 'Off',
    /**
     *@description Option that when chosen, allows the user to enter a custom orientation for the device e.g. tilt in 3D-space.
     */
    customOrientation: 'Custom orientation',
    /**
     *@description Warning to the user they should enable the device orientation override, in order to
     *enable this input which allows them to interactively select orientation by dragging a 3D phone
     *model.
     */
    enableOrientationToRotate: 'Enable orientation to rotate',
    /**
     *@description Text telling the user how to use an input which allows them to interactively select
     *orientation by dragging a 3D phone model.
     */
    shiftdragHorizontallyToRotate: 'Shift+drag horizontally to rotate around the y-axis',
    /**
     *@description Message in the Sensors tool that is alerted (for screen readers) when the device orientation setting is changed
     *@example {180} PH1
     *@example {-90} PH2
     *@example {0} PH3
     */
    deviceOrientationSetToAlphaSBeta: 'Device orientation set to alpha: {PH1}, beta: {PH2}, gamma: {PH3}',
    /**
     *@description Text of orientation reset button in Sensors View of the Device Toolbar
     */
    reset: 'Reset',
    /**
     *@description Aria-label for orientation reset button in Sensors View. Command.
     */
    resetDeviceOrientation: 'Reset device orientation',
    /**
     *@description Description of the Touch select in Sensors tab
     */
    forcesTouchInsteadOfClick: 'Forces touch instead of click',
    /**
     *@description Description of the Emulate Idle State select in Sensors tab
     */
    forcesSelectedIdleStateEmulation: 'Forces selected idle state emulation',
    /**
     *@description Title for a group of configuration options in a drop-down input.
     */
    presets: 'Presets',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */
    portrait: 'Portrait',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */
    portraitUpsideDown: 'Portrait upside down',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */
    landscapeLeft: 'Landscape left',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */
    landscapeRight: 'Landscape right',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space. Noun indicating
     *the display of the device is pointing up.
     */
    displayUp: 'Display up',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space. Noun indicating
     *the display of the device is pointing down.
     */
    displayDown: 'Display down',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */
    alpha: '\u03B1 (alpha)',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */
    beta: '\u03B2 (beta)',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */
    gamma: '\u03B3 (gamma)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sensors/SensorsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class SensorsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    constructor() {
        super(true);
        _SensorsView_instances.add(this);
        _SensorsView_locationSetting.set(this, void 0);
        _SensorsView_location.set(this, void 0);
        _SensorsView_locationOverrideEnabled.set(this, void 0);
        Object.defineProperty(this, "fieldsetElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timezoneError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "locationSelectElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "latitudeInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "longitudeInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timezoneInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localeInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "latitudeSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "longitudeSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timezoneSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localeSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localeError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "customLocationsGroup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceOrientationSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceOrientation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceOrientationOverrideEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceOrientationFieldset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stageElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "orientationSelectElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "alphaElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "betaElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gammaElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "alphaSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "betaSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gammaSetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "orientationLayer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boxElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boxMatrix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mouseDownVector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalBoxMatrix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('sensors').track({ resize: true })}`);
        this.contentElement.classList.add('sensors-view');
        __classPrivateFieldSet(this, _SensorsView_locationSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.location-override', ''), "f");
        __classPrivateFieldSet(this, _SensorsView_location, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseSetting(__classPrivateFieldGet(this, _SensorsView_locationSetting, "f").get()), "f");
        __classPrivateFieldSet(this, _SensorsView_locationOverrideEnabled, false, "f");
        this.createLocationSection(__classPrivateFieldGet(this, _SensorsView_location, "f"));
        this.createPanelSeparator();
        this.deviceOrientationSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.device-orientation-override', '');
        this.deviceOrientation = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.parseSetting(this.deviceOrientationSetting.get());
        this.deviceOrientationOverrideEnabled = false;
        this.createDeviceOrientationSection();
        this.createPanelSeparator();
        this.appendTouchControl();
        this.createPanelSeparator();
        this.appendIdleEmulator();
        this.createPanelSeparator();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './sensors.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    createPanelSeparator() {
        this.contentElement.createChild('div').classList.add('panel-section-separator');
    }
    createLocationSection(location) {
        const geogroup = this.contentElement.createChild('section', 'sensors-group');
        geogroup.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('location')}`);
        const geogroupTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.location), 'sensors-group-title');
        geogroup.appendChild(geogroupTitle);
        const fields = geogroup.createChild('div', 'geo-fields');
        let selectedIndex = 0;
        const noOverrideOption = { title: i18nString(UIStrings.noOverride), location: NonPresetOptions.NoOverride };
        this.locationSelectElement = fields.createChild('select', 'chrome-select');
        this.locationSelectElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown().track({ change: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.bindLabelToControl(geogroupTitle, this.locationSelectElement);
        // No override
        this.locationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(noOverrideOption.title, noOverrideOption.location, 'no-override'));
        this.customLocationsGroup = this.locationSelectElement.createChild('optgroup');
        this.customLocationsGroup.label = i18nString(UIStrings.overrides);
        const customLocations = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.locations');
        const manageButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextButton(i18nString(UIStrings.manage), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(customLocations), { className: 'manage-locations', jslogContext: 'sensors.manage-locations' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(manageButton, i18nString(UIStrings.manageTheListOfLocations));
        fields.appendChild(manageButton);
        const fillCustomSettings = () => {
            if (!this.customLocationsGroup) {
                return;
            }
            this.customLocationsGroup.removeChildren();
            for (const [i, customLocation] of customLocations.get().entries()) {
                this.customLocationsGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customLocation.title, JSON.stringify(customLocation), 'custom'));
                if (location.latitude === customLocation.lat && location.longitude === customLocation.long) {
                    // If the location coming from settings matches the custom location, use its index to select the option
                    selectedIndex = i + 1;
                }
            }
        };
        customLocations.addChangeListener(fillCustomSettings);
        fillCustomSettings();
        // Other location
        const customLocationOption = { title: i18nString(UIStrings.other), location: NonPresetOptions.Custom };
        this.locationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customLocationOption.title, customLocationOption.location, 'other'));
        // Error location.
        const group = this.locationSelectElement.createChild('optgroup');
        group.label = i18nString(UIStrings.error);
        group.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(i18nString(UIStrings.locationUnavailable), NonPresetOptions.Unavailable, 'unavailable'));
        this.locationSelectElement.selectedIndex = selectedIndex;
        this.locationSelectElement.addEventListener('change', __classPrivateFieldGet(this, _SensorsView_instances, "m", _SensorsView_locationSelectChanged).bind(this));
        this.fieldsetElement = fields.createChild('fieldset');
        this.fieldsetElement.disabled = !__classPrivateFieldGet(this, _SensorsView_locationOverrideEnabled, "f");
        this.fieldsetElement.id = 'location-override-section';
        const latitudeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
        const longitudeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
        const timezoneGroup = this.fieldsetElement.createChild('div', 'latlong-group');
        const localeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
        const cmdOrCtrl = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? '\u2318' : 'Ctrl';
        const modifierKeyMessage = i18nString(UIStrings.adjustWithMousewheelOrUpdownKeys, { PH1: cmdOrCtrl });
        this.latitudeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'latitude');
        latitudeGroup.appendChild(this.latitudeInput);
        this.latitudeInput.setAttribute('step', 'any');
        this.latitudeInput.value = '0';
        this.latitudeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.latitudeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.latitudeValidator, true, 0.1);
        this.latitudeSetter(String(location.latitude));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.latitudeInput, modifierKeyMessage);
        latitudeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.latitude), 'latlong-title', this.latitudeInput));
        this.longitudeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'longitude');
        longitudeGroup.appendChild(this.longitudeInput);
        this.longitudeInput.setAttribute('step', 'any');
        this.longitudeInput.value = '0';
        this.longitudeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.longitudeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.longitudeValidator, true, 0.1);
        this.longitudeSetter(String(location.longitude));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.longitudeInput, modifierKeyMessage);
        longitudeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.longitude), 'latlong-title', this.longitudeInput));
        this.timezoneInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'text', 'timezone');
        timezoneGroup.appendChild(this.timezoneInput);
        this.timezoneInput.value = 'Europe/Berlin';
        this.timezoneSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.timezoneInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.timezoneIdValidator, false);
        this.timezoneSetter(location.timezoneId);
        timezoneGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.timezoneId), 'timezone-title', this.timezoneInput));
        this.timezoneError = timezoneGroup.createChild('div', 'timezone-error');
        this.localeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'text', 'locale');
        localeGroup.appendChild(this.localeInput);
        this.localeInput.value = 'en-US';
        this.localeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.localeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.localeValidator, false);
        this.localeSetter(location.locale);
        localeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.locale), 'locale-title', this.localeInput));
        this.localeError = localeGroup.createChild('div', 'locale-error');
    }
    applyLocationUserInput() {
        const location = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseUserInput(this.latitudeInput.value.trim(), this.longitudeInput.value.trim(), this.timezoneInput.value.trim(), this.localeInput.value.trim());
        if (!location) {
            return;
        }
        this.timezoneError.textContent = '';
        this.setSelectElementLabel(this.locationSelectElement, NonPresetOptions.Custom);
        __classPrivateFieldSet(this, _SensorsView_location, location, "f");
        this.applyLocation();
    }
    applyLocation() {
        if (__classPrivateFieldGet(this, _SensorsView_locationOverrideEnabled, "f")) {
            __classPrivateFieldGet(this, _SensorsView_locationSetting, "f").set(__classPrivateFieldGet(this, _SensorsView_location, "f").toSetting());
        }
        else {
            __classPrivateFieldGet(this, _SensorsView_locationSetting, "f").set('');
        }
        for (const emulationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)) {
            emulationModel.emulateLocation(__classPrivateFieldGet(this, _SensorsView_locationOverrideEnabled, "f") ? __classPrivateFieldGet(this, _SensorsView_location, "f") : null).catch(err => {
                switch (err.type) {
                    case 'emulation-set-timezone': {
                        this.timezoneError.textContent = err.message;
                        break;
                    }
                    case 'emulation-set-locale': {
                        this.localeError.textContent = err.message;
                        break;
                    }
                }
            });
        }
    }
    clearFieldsetElementInputs() {
        this.latitudeSetter('0');
        this.longitudeSetter('0');
        this.timezoneSetter('');
        this.localeSetter('');
    }
    createDeviceOrientationSection() {
        const orientationGroup = this.contentElement.createChild('section', 'sensors-group');
        orientationGroup.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('device-orientation')}`);
        const orientationTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.orientation), 'sensors-group-title');
        orientationGroup.appendChild(orientationTitle);
        const orientationContent = orientationGroup.createChild('div', 'orientation-content');
        const fields = orientationContent.createChild('div', 'orientation-fields');
        const orientationOffOption = {
            title: i18nString(UIStrings.off),
            orientation: NonPresetOptions.NoOverride,
            jslogContext: 'off',
        };
        const customOrientationOption = {
            title: i18nString(UIStrings.customOrientation),
            orientation: NonPresetOptions.Custom,
        };
        const orientationGroups = [{
                title: i18nString(UIStrings.presets),
                value: [
                    { title: i18nString(UIStrings.portrait), orientation: '[0, 90, 0]', jslogContext: 'portrait' },
                    {
                        title: i18nString(UIStrings.portraitUpsideDown),
                        orientation: '[180, -90, 0]',
                        jslogContext: 'portrait-upside-down',
                    },
                    { title: i18nString(UIStrings.landscapeLeft), orientation: '[90, 0, -90]', jslogContext: 'landscape-left' },
                    { title: i18nString(UIStrings.landscapeRight), orientation: '[90, -180, -90]', jslogContext: 'landscape-right' },
                    { title: i18nString(UIStrings.displayUp), orientation: '[0, 0, 0]', jslogContext: 'display-up' },
                    { title: i18nString(UIStrings.displayDown), orientation: '[0, -180, 0]', jslogContext: 'displayUp-down' },
                ],
            }];
        this.orientationSelectElement = this.contentElement.createChild('select', 'chrome-select');
        this.orientationSelectElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown().track({ change: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.bindLabelToControl(orientationTitle, this.orientationSelectElement);
        this.orientationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(orientationOffOption.title, orientationOffOption.orientation, orientationOffOption.jslogContext));
        this.orientationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customOrientationOption.title, customOrientationOption.orientation, 'custom'));
        for (let i = 0; i < orientationGroups.length; ++i) {
            const groupElement = this.orientationSelectElement.createChild('optgroup');
            groupElement.label = orientationGroups[i].title;
            const group = orientationGroups[i].value;
            for (let j = 0; j < group.length; ++j) {
                groupElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(group[j].title, group[j].orientation, group[j].jslogContext));
            }
        }
        this.orientationSelectElement.selectedIndex = 0;
        fields.appendChild(this.orientationSelectElement);
        this.orientationSelectElement.addEventListener('change', this.orientationSelectChanged.bind(this));
        this.deviceOrientationFieldset = this.createDeviceOrientationOverrideElement(this.deviceOrientation);
        this.stageElement = orientationContent.createChild('div', 'orientation-stage');
        this.stageElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.preview().track({ drag: true })}`);
        this.orientationLayer = this.stageElement.createChild('div', 'orientation-layer');
        this.boxElement = this.orientationLayer.createChild('section', 'orientation-box orientation-element');
        this.boxElement.createChild('section', 'orientation-front orientation-element');
        this.boxElement.createChild('section', 'orientation-top orientation-element');
        this.boxElement.createChild('section', 'orientation-back orientation-element');
        this.boxElement.createChild('section', 'orientation-left orientation-element');
        this.boxElement.createChild('section', 'orientation-right orientation-element');
        this.boxElement.createChild('section', 'orientation-bottom orientation-element');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.installDragHandle(this.stageElement, this.onBoxDragStart.bind(this), event => {
            this.onBoxDrag(event);
        }, null, '-webkit-grabbing', '-webkit-grab');
        fields.appendChild(this.deviceOrientationFieldset);
        this.enableOrientationFields(true);
        this.setBoxOrientation(this.deviceOrientation, false);
    }
    enableOrientationFields(disable) {
        if (disable) {
            this.deviceOrientationFieldset.disabled = true;
            this.stageElement.classList.add('disabled');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.stageElement, i18nString(UIStrings.enableOrientationToRotate));
        }
        else {
            this.deviceOrientationFieldset.disabled = false;
            this.stageElement.classList.remove('disabled');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.stageElement, i18nString(UIStrings.shiftdragHorizontallyToRotate));
        }
    }
    orientationSelectChanged() {
        const value = this.orientationSelectElement.options[this.orientationSelectElement.selectedIndex].value;
        this.enableOrientationFields(false);
        if (value === NonPresetOptions.NoOverride) {
            this.deviceOrientationOverrideEnabled = false;
            this.enableOrientationFields(true);
            this.applyDeviceOrientation();
        }
        else if (value === NonPresetOptions.Custom) {
            this.deviceOrientationOverrideEnabled = true;
            this.resetDeviceOrientation();
            this.alphaElement.focus();
        }
        else {
            const parsedValue = JSON.parse(value);
            this.deviceOrientationOverrideEnabled = true;
            this.deviceOrientation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(parsedValue[0], parsedValue[1], parsedValue[2]);
            this.setDeviceOrientation(this.deviceOrientation, DeviceOrientationModificationSource.SelectPreset);
        }
    }
    applyDeviceOrientation() {
        if (this.deviceOrientationOverrideEnabled) {
            this.deviceOrientationSetting.set(this.deviceOrientation.toSetting());
        }
        for (const emulationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)) {
            void emulationModel.emulateDeviceOrientation(this.deviceOrientationOverrideEnabled ? this.deviceOrientation : null);
        }
    }
    setSelectElementLabel(selectElement, labelValue) {
        const optionValues = Array.prototype.map.call(selectElement.options, x => x.value);
        selectElement.selectedIndex = optionValues.indexOf(labelValue);
    }
    applyDeviceOrientationUserInput() {
        this.setDeviceOrientation(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.parseUserInput(this.alphaElement.value.trim(), this.betaElement.value.trim(), this.gammaElement.value.trim()), DeviceOrientationModificationSource.UserInput);
        this.setSelectElementLabel(this.orientationSelectElement, NonPresetOptions.Custom);
    }
    resetDeviceOrientation() {
        this.setDeviceOrientation(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(0, 90, 0), DeviceOrientationModificationSource.ResetButton);
        this.setSelectElementLabel(this.orientationSelectElement, '[0, 90, 0]');
    }
    setDeviceOrientation(deviceOrientation, modificationSource) {
        if (!deviceOrientation) {
            return;
        }
        function roundAngle(angle) {
            return Math.round(angle * 10000) / 10000;
        }
        if (modificationSource !== DeviceOrientationModificationSource.UserInput) {
            // Even though the angles in |deviceOrientation| will not be rounded
            // here, their precision will be rounded by CSS when we change
            // |this.orientationLayer.style| in setBoxOrientation().
            this.alphaSetter(String(roundAngle(deviceOrientation.alpha)));
            this.betaSetter(String(roundAngle(deviceOrientation.beta)));
            this.gammaSetter(String(roundAngle(deviceOrientation.gamma)));
        }
        const animate = modificationSource !== DeviceOrientationModificationSource.UserDrag;
        this.setBoxOrientation(deviceOrientation, animate);
        this.deviceOrientation = deviceOrientation;
        this.applyDeviceOrientation();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(i18nString(UIStrings.deviceOrientationSetToAlphaSBeta, { PH1: deviceOrientation.alpha, PH2: deviceOrientation.beta, PH3: deviceOrientation.gamma }));
    }
    createAxisInput(parentElement, input, label, validator) {
        const div = parentElement.createChild('div', 'orientation-axis-input-container');
        div.appendChild(input);
        div.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(label, /* className */ '', input));
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(input, this.applyDeviceOrientationUserInput.bind(this), validator, true);
    }
    createDeviceOrientationOverrideElement(deviceOrientation) {
        const fieldsetElement = document.createElement('fieldset');
        fieldsetElement.classList.add('device-orientation-override-section');
        const cellElement = fieldsetElement.createChild('td', 'orientation-inputs-cell');
        this.alphaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'alpha');
        this.alphaElement.setAttribute('step', 'any');
        this.alphaSetter = this.createAxisInput(cellElement, this.alphaElement, i18nString(UIStrings.alpha), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.alphaAngleValidator);
        this.alphaSetter(String(deviceOrientation.alpha));
        this.betaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'beta');
        this.betaElement.setAttribute('step', 'any');
        this.betaSetter = this.createAxisInput(cellElement, this.betaElement, i18nString(UIStrings.beta), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.betaAngleValidator);
        this.betaSetter(String(deviceOrientation.beta));
        this.gammaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'gamma');
        this.gammaElement.setAttribute('step', 'any');
        this.gammaSetter = this.createAxisInput(cellElement, this.gammaElement, i18nString(UIStrings.gamma), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.gammaAngleValidator);
        this.gammaSetter(String(deviceOrientation.gamma));
        const resetButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextButton(i18nString(UIStrings.reset), this.resetDeviceOrientation.bind(this), { className: 'orientation-reset-button', jslogContext: 'sensors.reset-device-orientiation' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(resetButton, i18nString(UIStrings.resetDeviceOrientation));
        resetButton.setAttribute('type', 'reset');
        cellElement.appendChild(resetButton);
        return fieldsetElement;
    }
    setBoxOrientation(deviceOrientation, animate) {
        if (animate) {
            this.stageElement.classList.add('is-animating');
        }
        else {
            this.stageElement.classList.remove('is-animating');
        }
        // It is important to explain the multiple conversions happening here. A
        // few notes on coordinate spaces first:
        // 1. The CSS coordinate space is left-handed. X and Y are parallel to the
        //    screen, and Z is perpendicular to the screen. X is positive to the
        //    right, Y is positive downwards and Z increases towards the viewer.
        //    See https://drafts.csswg.org/css-transforms-2/#transform-rendering
        //    for more information.
        // 2. The Device Orientation coordinate space is right-handed. X and Y are
        //    parallel to the screen, and Z is perpenticular to the screen. X is
        //    positive to the right, Y is positive upwards and Z increases towards
        //    the viewer. See
        //    https://w3c.github.io/deviceorientation/#deviceorientation for more
        //    information.
        // 3. Additionally, the phone model we display is rotated +90 degrees in
        //    the X axis in the CSS coordinate space (i.e. when all angles are 0 we
        //    cannot see its screen in DevTools).
        //
        // |this.boxMatrix| is set in the Device Orientation coordinate space
        // because it represents the phone model we show users and also because the
        // calculations in UI.Geometry.EulerAngles assume this coordinate space (so
        // we apply the rotations in the Z-X'-Y'' order).
        // The CSS transforms, on the other hand, are done in the CSS coordinate
        // space, so we need to convert 2) to 1) while keeping 3) in mind. We can
        // cover 3) by swapping the Y and Z axes, and 2) by inverting the X axis.
        const { alpha, beta, gamma } = deviceOrientation;
        this.boxMatrix = new DOMMatrixReadOnly().rotate(0, 0, alpha).rotate(beta, 0, 0).rotate(0, gamma, 0);
        this.orientationLayer.style.transform = `rotateY(${alpha}deg) rotateX(${-beta}deg) rotateZ(${gamma}deg)`;
    }
    onBoxDrag(event) {
        const mouseMoveVector = this.calculateRadiusVector(event.x, event.y);
        if (!mouseMoveVector) {
            return true;
        }
        if (!this.mouseDownVector) {
            return true;
        }
        event.consume(true);
        let axis, angle;
        if (event.shiftKey) {
            axis = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(0, 0, 1);
            angle = (mouseMoveVector.x - this.mouseDownVector.x) * ShiftDragOrientationSpeed;
        }
        else {
            axis = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.crossProduct(this.mouseDownVector, mouseMoveVector);
            angle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.calculateAngle(this.mouseDownVector, mouseMoveVector);
        }
        // See the comment in setBoxOrientation() for a longer explanation about
        // the CSS coordinate space, the Device Orientation coordinate space and
        // the conversions we make. |axis| and |angle| are in the CSS coordinate
        // space, while |this.originalBoxMatrix| is rotated and in the Device
        // Orientation coordinate space, which is why we swap Y and Z and invert X.
        const currentMatrix = new DOMMatrixReadOnly().rotateAxisAngle(-axis.x, axis.z, axis.y, angle).multiply(this.originalBoxMatrix);
        const eulerAngles = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(currentMatrix);
        const newOrientation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(eulerAngles.alpha, eulerAngles.beta, eulerAngles.gamma);
        this.setDeviceOrientation(newOrientation, DeviceOrientationModificationSource.UserDrag);
        this.setSelectElementLabel(this.orientationSelectElement, NonPresetOptions.Custom);
        return false;
    }
    onBoxDragStart(event) {
        if (!this.deviceOrientationOverrideEnabled) {
            return false;
        }
        this.mouseDownVector = this.calculateRadiusVector(event.x, event.y);
        this.originalBoxMatrix = this.boxMatrix;
        if (!this.mouseDownVector) {
            return false;
        }
        event.consume(true);
        return true;
    }
    calculateRadiusVector(x, y) {
        const rect = this.stageElement.getBoundingClientRect();
        const radius = Math.max(rect.width, rect.height) / 2;
        const sphereX = (x - rect.left - rect.width / 2) / radius;
        const sphereY = (y - rect.top - rect.height / 2) / radius;
        const sqrSum = sphereX * sphereX + sphereY * sphereY;
        if (sqrSum > 0.5) {
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(sphereX, sphereY, 0.5 / Math.sqrt(sqrSum));
        }
        return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(sphereX, sphereY, Math.sqrt(1 - sqrSum));
    }
    appendTouchControl() {
        const container = this.contentElement.createChild('div', 'touch-section');
        const control = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SettingsUI.createControlForSetting(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.touch'), i18nString(UIStrings.forcesTouchInsteadOfClick));
        if (control) {
            container.appendChild(control);
        }
    }
    appendIdleEmulator() {
        const container = this.contentElement.createChild('div', 'idle-section');
        const control = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SettingsUI.createControlForSetting(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.idle-detection'), i18nString(UIStrings.forcesSelectedIdleStateEmulation));
        if (control) {
            container.appendChild(control);
        }
    }
}
_SensorsView_locationSetting = new WeakMap(), _SensorsView_location = new WeakMap(), _SensorsView_locationOverrideEnabled = new WeakMap(), _SensorsView_instances = new WeakSet(), _SensorsView_locationSelectChanged = function _SensorsView_locationSelectChanged() {
    this.fieldsetElement.disabled = false;
    this.timezoneError.textContent = '';
    const value = this.locationSelectElement.options[this.locationSelectElement.selectedIndex].value;
    if (value === NonPresetOptions.NoOverride) {
        __classPrivateFieldSet(this, _SensorsView_locationOverrideEnabled, false, "f");
        this.clearFieldsetElementInputs();
        this.fieldsetElement.disabled = true;
    }
    else if (value === NonPresetOptions.Custom) {
        __classPrivateFieldSet(this, _SensorsView_locationOverrideEnabled, true, "f");
        const location = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseUserInput(this.latitudeInput.value.trim(), this.longitudeInput.value.trim(), this.timezoneInput.value.trim(), this.localeInput.value.trim());
        if (!location) {
            return;
        }
        __classPrivateFieldSet(this, _SensorsView_location, location, "f");
    }
    else if (value === NonPresetOptions.Unavailable) {
        __classPrivateFieldSet(this, _SensorsView_locationOverrideEnabled, true, "f");
        __classPrivateFieldSet(this, _SensorsView_location, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location(0, 0, '', '', true), "f");
    }
    else {
        __classPrivateFieldSet(this, _SensorsView_locationOverrideEnabled, true, "f");
        const coordinates = JSON.parse(value);
        __classPrivateFieldSet(this, _SensorsView_location, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location(coordinates.lat, coordinates.long, coordinates.timezoneId, coordinates.locale, false), "f");
        this.latitudeSetter(coordinates.lat);
        this.longitudeSetter(coordinates.long);
        this.timezoneSetter(coordinates.timezoneId);
        this.localeSetter(coordinates.locale);
    }
    this.applyLocation();
    if (value === NonPresetOptions.Custom) {
        this.latitudeInput.focus();
    }
};
var DeviceOrientationModificationSource;
(function (DeviceOrientationModificationSource) {
    DeviceOrientationModificationSource["UserInput"] = "userInput";
    DeviceOrientationModificationSource["UserDrag"] = "userDrag";
    DeviceOrientationModificationSource["ResetButton"] = "resetButton";
    DeviceOrientationModificationSource["SelectPreset"] = "selectPreset";
})(DeviceOrientationModificationSource || (DeviceOrientationModificationSource = {}));
/** {string} */
const NonPresetOptions = {
    NoOverride: 'noOverride',
    Custom: 'custom',
    Unavailable: 'unavailable',
};
class ShowActionDelegate {
    handleAction(_context, _actionId) {
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('sensors');
        return true;
    }
}
const ShiftDragOrientationSpeed = 16;


/***/ })

}]);