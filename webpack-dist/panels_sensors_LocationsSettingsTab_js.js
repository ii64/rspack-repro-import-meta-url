"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sensors_LocationsSettingsTab_js"],{

/***/ "./panels/sensors/LocationsSettingsTab.js":
/*!************************************************!*\
  !*** ./panels/sensors/LocationsSettingsTab.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationsSettingsTab: () => (/* binding */ LocationsSettingsTab)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationsSettingsTab.css.js */ "./panels/sensors/locationsSettingsTab.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Title in the Locations Settings Tab, where custom geographic locations that the user
     *has entered are stored.
     */
    customLocations: 'Custom locations',
    /**
     *@description Label for the name of a geographic location that the user has entered.
     */
    locationName: 'Location name',
    /**
     *@description Abbreviation of latitude in Locations Settings Tab of the Device Toolbar
     */
    lat: 'Lat',
    /**
     *@description Abbreviation of longitude in Locations Settings Tab of the Device Toolbar
     */
    long: 'Long',
    /**
     *@description Text in Sensors View of the Device Toolbar
     */
    timezoneId: 'Timezone ID',
    /**
     *@description Label for text input for the locale of a particular location.
     */
    locale: 'Locale',
    /**
     *@description Label for text input for the latitude of a GPS position.
     */
    latitude: 'Latitude',
    /**
     *@description Label for text input for the longitude of a GPS position.
     */
    longitude: 'Longitude',
    /**
     *@description Error message in the Locations settings pane that declares the location name input must not be empty
     */
    locationNameCannotBeEmpty: 'Location name cannot be empty',
    /**
     *@description Error message in the Locations settings pane that declares the maximum length of the location name
     *@example {50} PH1
     */
    locationNameMustBeLessThanS: 'Location name must be less than {PH1} characters',
    /**
     *@description Error message in the Locations settings pane that declares that the value for the latitude input must be a number
     */
    latitudeMustBeANumber: 'Latitude must be a number',
    /**
     *@description Error message in the Locations settings pane that declares the minimum value for the latitude input
     *@example {-90} PH1
     */
    latitudeMustBeGreaterThanOrEqual: 'Latitude must be greater than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares the maximum value for the latitude input
     *@example {90} PH1
     */
    latitudeMustBeLessThanOrEqualToS: 'Latitude must be less than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares that the value for the longitude input must be a number
     */
    longitudeMustBeANumber: 'Longitude must be a number',
    /**
     *@description Error message in the Locations settings pane that declares the minimum value for the longitude input
     *@example {-180} PH1
     */
    longitudeMustBeGreaterThanOr: 'Longitude must be greater than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares the maximum value for the longitude input
     *@example {180} PH1
     */
    longitudeMustBeLessThanOrEqualTo: 'Longitude must be less than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares timezone ID input invalid
     */
    timezoneIdMustContainAlphabetic: 'Timezone ID must contain alphabetic characters',
    /**
     *@description Error message in the Locations settings pane that declares locale input invalid
     */
    localeMustContainAlphabetic: 'Locale must contain alphabetic characters',
    /**
     *@description Text of add locations button in Locations Settings Tab of the Device Toolbar
     */
    addLocation: 'Add location...',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sensors/LocationsSettingsTab.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class LocationsSettingsTab extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    list;
    customSetting;
    editor;
    constructor() {
        super(true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('emulation-locations')}`);
        this.contentElement.createChild('div', 'header').textContent = i18nString(UIStrings.customLocations);
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.addLocation), this.addButtonClicked.bind(this), { className: 'add-locations-button', jslogContext: 'emulation.add-location' });
        this.contentElement.appendChild(addButton);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.ListWidget(this, undefined, true);
        this.list.element.classList.add('locations-list');
        this.list.show(this.contentElement);
        this.customSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.locations');
        const list = this.customSetting.get().map(location => replaceLocationTitles(location, this.customSetting.defaultValue));
        function replaceLocationTitles(location, defaultValues) {
            // This check is done for locations that might had been cached wrongly due to crbug.com/1171670.
            // Each of the default values would have been stored without a title if the user had added a new location
            // while the bug was present in the application. This means that getting the setting's default value with the `get`
            // method would return the default locations without a title. To cope with this, the setting values are
            // preemptively checked and corrected so that any default value mistakenly stored without a title is replaced
            // with the corresponding declared value in the pre-registered setting.
            if (!location.title) {
                const replacement = defaultValues.find(defaultLocation => defaultLocation.lat === location.lat && defaultLocation.long === location.long &&
                    defaultLocation.timezoneId === location.timezoneId && defaultLocation.locale === location.locale);
                if (!replacement) {
                    console.error('Could not determine a location setting title');
                }
                else {
                    return replacement;
                }
            }
            return location;
        }
        this.customSetting.set(list);
        this.customSetting.addChangeListener(this.locationsUpdated, this);
        this.setDefaultFocusedElement(addButton);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
        this.list.registerCSSFiles([_locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
        this.locationsUpdated();
    }
    locationsUpdated() {
        this.list.clear();
        const conditions = this.customSetting.get();
        for (const condition of conditions) {
            this.list.appendItem(condition, true);
        }
        this.list.appendSeparator();
    }
    addButtonClicked() {
        this.list.addNewItem(this.customSetting.get().length, { title: '', lat: 0, long: 0, timezoneId: '', locale: '' });
    }
    renderItem(location, _editable) {
        const element = document.createElement('div');
        element.role = 'row';
        element.classList.add('locations-list-item');
        const title = element.createChild('div', 'locations-list-text locations-list-title');
        title.role = 'cell';
        const titleText = title.createChild('div', 'locations-list-title-text');
        titleText.textContent = location.title;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip.Tooltip.install(titleText, location.title);
        element.createChild('div', 'locations-list-separator');
        const lat = element.createChild('div', 'locations-list-text');
        lat.textContent = String(location.lat);
        lat.role = 'cell';
        element.createChild('div', 'locations-list-separator');
        const long = element.createChild('div', 'locations-list-text');
        long.textContent = String(location.long);
        long.role = 'cell';
        element.createChild('div', 'locations-list-separator');
        const timezoneId = element.createChild('div', 'locations-list-text');
        timezoneId.textContent = location.timezoneId;
        timezoneId.role = 'cell';
        element.createChild('div', 'locations-list-separator');
        const locale = element.createChild('div', 'locations-list-text');
        locale.textContent = location.locale;
        locale.role = 'cell';
        return element;
    }
    removeItemRequested(item, index) {
        const list = this.customSetting.get();
        list.splice(index, 1);
        this.customSetting.set(list);
    }
    commitEdit(location, editor, isNew) {
        location.title = editor.control('title').value.trim();
        const lat = editor.control('lat').value.trim();
        location.lat = lat ? parseFloat(lat) : 0;
        const long = editor.control('long').value.trim();
        location.long = long ? parseFloat(long) : 0;
        const timezoneId = editor.control('timezone-id').value.trim();
        location.timezoneId = timezoneId;
        const locale = editor.control('locale').value.trim();
        location.locale = locale;
        const list = this.customSetting.get();
        if (isNew) {
            list.push(location);
        }
        this.customSetting.set(list);
    }
    beginEdit(location) {
        const editor = this.createEditor();
        editor.control('title').value = location.title;
        editor.control('lat').value = String(location.lat);
        editor.control('long').value = String(location.long);
        editor.control('timezone-id').value = location.timezoneId;
        editor.control('locale').value = location.locale;
        return editor;
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor();
        this.editor = editor;
        const content = editor.contentElement();
        const titles = content.createChild('div', 'locations-edit-row');
        titles.createChild('div', 'locations-list-text locations-list-title').textContent =
            i18nString(UIStrings.locationName);
        titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.lat);
        titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.long);
        titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.timezoneId);
        titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.locale);
        const fields = content.createChild('div', 'locations-edit-row');
        fields.createChild('div', 'locations-list-text locations-list-title locations-input-container')
            .appendChild(editor.createInput('title', 'text', i18nString(UIStrings.locationName), titleValidator));
        fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        let cell = fields.createChild('div', 'locations-list-text locations-input-container');
        cell.appendChild(editor.createInput('lat', 'text', i18nString(UIStrings.latitude), latValidator));
        fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        cell = fields.createChild('div', 'locations-list-text locations-list-text-longitude locations-input-container');
        cell.appendChild(editor.createInput('long', 'text', i18nString(UIStrings.longitude), longValidator));
        fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        cell = fields.createChild('div', 'locations-list-text locations-input-container');
        cell.appendChild(editor.createInput('timezone-id', 'text', i18nString(UIStrings.timezoneId), timezoneIdValidator));
        fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
        cell = fields.createChild('div', 'locations-list-text locations-input-container');
        cell.appendChild(editor.createInput('locale', 'text', i18nString(UIStrings.locale), localeValidator));
        return editor;
        function titleValidator(item, index, input) {
            const maxLength = 50;
            const value = input.value.trim();
            let errorMessage;
            if (!value.length) {
                errorMessage = i18nString(UIStrings.locationNameCannotBeEmpty);
            }
            else if (value.length > maxLength) {
                errorMessage = i18nString(UIStrings.locationNameMustBeLessThanS, { PH1: maxLength });
            }
            if (errorMessage) {
                return { valid: false, errorMessage };
            }
            return { valid: true, errorMessage: undefined };
        }
        function latValidator(item, index, input) {
            const minLat = -90;
            const maxLat = 90;
            const value = input.value.trim();
            const parsedValue = Number(value);
            if (!value) {
                return { valid: true, errorMessage: undefined };
            }
            let errorMessage;
            if (Number.isNaN(parsedValue)) {
                errorMessage = i18nString(UIStrings.latitudeMustBeANumber);
            }
            else if (parseFloat(value) < minLat) {
                errorMessage = i18nString(UIStrings.latitudeMustBeGreaterThanOrEqual, { PH1: minLat });
            }
            else if (parseFloat(value) > maxLat) {
                errorMessage = i18nString(UIStrings.latitudeMustBeLessThanOrEqualToS, { PH1: maxLat });
            }
            if (errorMessage) {
                return { valid: false, errorMessage };
            }
            return { valid: true, errorMessage: undefined };
        }
        function longValidator(item, index, input) {
            const minLong = -180;
            const maxLong = 180;
            const value = input.value.trim();
            const parsedValue = Number(value);
            if (!value) {
                return { valid: true, errorMessage: undefined };
            }
            let errorMessage;
            if (Number.isNaN(parsedValue)) {
                errorMessage = i18nString(UIStrings.longitudeMustBeANumber);
            }
            else if (parseFloat(value) < minLong) {
                errorMessage = i18nString(UIStrings.longitudeMustBeGreaterThanOr, { PH1: minLong });
            }
            else if (parseFloat(value) > maxLong) {
                errorMessage = i18nString(UIStrings.longitudeMustBeLessThanOrEqualTo, { PH1: maxLong });
            }
            if (errorMessage) {
                return { valid: false, errorMessage };
            }
            return { valid: true, errorMessage: undefined };
        }
        function timezoneIdValidator(item, index, input) {
            const value = input.value.trim();
            // Chromium uses ICU's timezone implementation, which is very
            // liberal in what it accepts. ICU does not simply use an allowlist
            // but instead tries to make sense of the input, even for
            // weird-looking timezone IDs. There's not much point in validating
            // the input other than checking if it contains at least one
            // alphabetic character. The empty string resets the override,
            // and is accepted as well.
            if (value === '' || /[a-zA-Z]/.test(value)) {
                return { valid: true, errorMessage: undefined };
            }
            const errorMessage = i18nString(UIStrings.timezoneIdMustContainAlphabetic);
            return { valid: false, errorMessage };
        }
        function localeValidator(item, index, input) {
            const value = input.value.trim();
            // Similarly to timezone IDs, there's not much point in validating
            // input locales other than checking if it contains at least two
            // alphabetic characters.
            // https://unicode.org/reports/tr35/#Unicode_language_identifier
            // The empty string resets the override, and is accepted as
            // well.
            if (value === '' || /[a-zA-Z]{2}/.test(value)) {
                return { valid: true, errorMessage: undefined };
            }
            const errorMessage = i18nString(UIStrings.localeMustContainAlphabetic);
            return { valid: false, errorMessage };
        }
    }
}
//# sourceMappingURL=LocationsSettingsTab.js.map

/***/ }),

/***/ "./panels/sensors/locationsSettingsTab.css.js":
/*!****************************************************!*\
  !*** ./panels/sensors/locationsSettingsTab.css.js ***!
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

:host {
  overflow: hidden;
}

.header {
  padding: 0 0 6px;
  border-bottom: 1px solid var(--sys-color-divider);
  font-size: 18px;
  font-weight: normal;
  flex: none;
}

.add-locations-button {
  flex: none;
  margin: 10px 5px;
  min-width: 140px;
  align-self: flex-start;
}

.locations-list {
  max-width: 600px;
  min-width: 340px;
  flex: auto;
}

.locations-list-item {
  padding: 3px 6px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  flex: auto 1 1;
}

.locations-list-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-basis: 170px;
  user-select: none;
  color: var(--sys-color-on-surface);
  position: relative;
  overflow: hidden;
}

.locations-list-title {
  text-align: start;
}

.locations-list-title-text {
  overflow: hidden;
  flex: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.locations-list-separator {
  flex: 0 0 1px;
  background-color: var(--sys-color-divider);
  height: 30px;
  margin: 0 4px;
}

.locations-list-separator-invisible {
  visibility: hidden;
  height: 100% !important; /* stylelint-disable-line declaration-no-important */
}

.locations-edit-row {
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
}

.locations-edit-row input {
  width: 100%;
  text-align: inherit;
}

.locations-input-container {
  padding: 1px;
}

/*# sourceURL=locationsSettingsTab.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);