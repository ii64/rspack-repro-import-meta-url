"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_LinearMemoryValueInterpreter_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js":
/*!***********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndiannessChangedEvent: () => (/* binding */ EndiannessChangedEvent),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* binding */ LinearMemoryValueInterpreter),
/* harmony export */   ValueTypeToggledEvent: () => (/* binding */ ValueTypeToggledEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _linearMemoryValueInterpreter_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linearMemoryValueInterpreter.css.js */ "./panels/linear_memory_inspector/components/linearMemoryValueInterpreter.css.js");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over the gear button to open and close settings in the Linear memory inspector. These settings
     *             allow the user to change the value type to view, such as 32-bit Integer, or 32-bit Float.
     */
    toggleValueTypeSettings: 'Toggle value type settings',
    /**
     *@description Tooltip text that appears when hovering over the 'Little Endian' or 'Big Endian' setting in the Linear memory inspector.
     */
    changeEndianness: 'Change `Endianness`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
class EndiannessChangedEvent extends Event {
    static eventName = 'endiannesschanged';
    data;
    constructor(endianness) {
        super(EndiannessChangedEvent.eventName);
        this.data = endianness;
    }
}
class ValueTypeToggledEvent extends Event {
    static eventName = 'valuetypetoggled';
    data;
    constructor(type, checked) {
        super(ValueTypeToggledEvent.eventName);
        this.data = { type, checked };
    }
}
class LinearMemoryValueInterpreter extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter`;
    #shadow = this.attachShadow({ mode: 'open' });
    #endianness = "Little Endian" /* Endianness.Little */;
    #buffer = new ArrayBuffer(0);
    #valueTypes = new Set();
    #valueTypeModeConfig = new Map();
    #memoryLength = 0;
    #showSettings = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryValueInterpreter_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    set data(data) {
        this.#endianness = data.endianness;
        this.#buffer = data.value;
        this.#valueTypes = data.valueTypes;
        this.#valueTypeModeConfig = data.valueTypeModes || new Map();
        this.#memoryLength = data.memoryLength;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="value-interpreter">
        <div class="settings-toolbar">
          ${this.#renderEndiannessSetting()}
          <button data-settings="true" class="settings-toolbar-button ${this.#showSettings ? 'active' : ''}"
              title=${i18nString(UIStrings.toggleValueTypeSettings)} @click=${this.#onSettingsToggle}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggleSubpane('linear-memory-inspector.toggle-value-settings').track({ click: true })}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name=${this.#showSettings ? 'gear-filled' : 'gear'}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
          </button>
        </div>
        <span class="divider"></span>
        <div>
          ${this.#showSettings ?
            html `
              <${_ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__.ValueInterpreterSettings.litTagName}
                .data=${{ valueTypes: this.#valueTypes }}
                @typetoggle=${this.#onTypeToggle}>
              </${_ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_7__.ValueInterpreterSettings.litTagName}>` :
            html `
              <${_ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName}
                .data=${{
                buffer: this.#buffer,
                valueTypes: this.#valueTypes,
                endianness: this.#endianness,
                valueTypeModes: this.#valueTypeModeConfig,
                memoryLength: this.#memoryLength,
            }}>
              </${_ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName}>`}
        </div>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #onEndiannessChange(event) {
        event.preventDefault();
        const select = event.target;
        const endianness = select.value;
        this.dispatchEvent(new EndiannessChangedEvent(endianness));
    }
    #renderEndiannessSetting() {
        const onEnumSettingChange = this.#onEndiannessChange.bind(this);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
    <label data-endianness-setting="true" title=${i18nString(UIStrings.changeEndianness)}>
      <select class="chrome-select"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.dropDown('linear-memory-inspector.endianess').track({ change: true })}
        style="border: none; background-color: transparent; cursor: pointer;"
        data-endianness="true" @change=${onEnumSettingChange}>
        ${["Little Endian" /* Endianness.Little */, "Big Endian" /* Endianness.Big */].map(endianness => {
            return html `<option value=${endianness} .selected=${this.#endianness === endianness}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(endianness)).track({ click: true })}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(endianness)}</option>`;
        })}
      </select>
    </label>
    `;
        // clang-format on
    }
    #onSettingsToggle() {
        this.#showSettings = !this.#showSettings;
        this.#render();
    }
    #onTypeToggle(e) {
        this.dispatchEvent(new ValueTypeToggledEvent(e.data.type, e.data.checked));
    }
}
customElements.define('devtools-linear-memory-inspector-interpreter', LinearMemoryValueInterpreter);
//# sourceMappingURL=LinearMemoryValueInterpreter.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js":
/*!*******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/ValueInterpreterSettings.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeToggleEvent: () => (/* binding */ TypeToggleEvent),
/* harmony export */   ValueInterpreterSettings: () => (/* binding */ ValueInterpreterSettings)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */ var _valueInterpreterSettings_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./valueInterpreterSettings.css.js */ "./panels/linear_memory_inspector/components/valueInterpreterSettings.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const UIStrings = {
    /**
     *@description Name of a group of selectable value types that do not fall under integer and floating point value types, e.g. Pointer32. The group appears name appears under the Value Interpreter Settings.
     */
    otherGroup: 'Other',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterSettings.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const GROUP_TO_TYPES = new Map([
    ["Integer" /* ValueTypeGroup.Integer */, ["Integer 8-bit" /* ValueType.Int8 */, "Integer 16-bit" /* ValueType.Int16 */, "Integer 32-bit" /* ValueType.Int32 */, "Integer 64-bit" /* ValueType.Int64 */]],
    ["Floating point" /* ValueTypeGroup.Float */, ["Float 32-bit" /* ValueType.Float32 */, "Float 64-bit" /* ValueType.Float64 */]],
    ["Other" /* ValueTypeGroup.Other */, ["Pointer 32-bit" /* ValueType.Pointer32 */, "Pointer 64-bit" /* ValueType.Pointer64 */]],
]);
function valueTypeGroupToLocalizedString(group) {
    if (group === "Other" /* ValueTypeGroup.Other */) {
        return i18nString(UIStrings.otherGroup);
    }
    // The remaining group type names should not be localized.
    return group;
}
class TypeToggleEvent extends Event {
    static eventName = 'typetoggle';
    data;
    constructor(type, checked) {
        super(TypeToggleEvent.eventName);
        this.data = { type, checked };
    }
}
class ValueInterpreterSettings extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter-settings`;
    #shadow = this.attachShadow({ mode: 'open' });
    #valueTypes = new Set();
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, _valueInterpreterSettings_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
    }
    set data(data) {
        this.#valueTypes = data.valueTypes;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="settings" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('settings')}>
       ${[...GROUP_TO_TYPES.keys()].map(group => {
            return html `
          <div class="value-types-selection">
            <span class="group">${valueTypeGroupToLocalizedString(group)}</span>
            ${this.#plotTypeSelections(group)}
          </div>
        `;
        })}
      </div>
      `, this.#shadow, { host: this });
    }
    #plotTypeSelections(group) {
        const types = GROUP_TO_TYPES.get(group);
        if (!types) {
            throw new Error(`Unknown group ${group}`);
        }
        return html `
      ${types.map(type => {
            return html `
          <label class="type-label" title=${(0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type)}>
            <input data-input="true" type="checkbox" .checked=${this.#valueTypes.has(type)} @change=${(e) => this.#onTypeToggle(type, e)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle().track({ change: true }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(type))}>
            <span data-title="true">${(0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type)}</span>
          </label>
     `;
        })}`;
    }
    #onTypeToggle(type, event) {
        const checkbox = event.target;
        this.dispatchEvent(new TypeToggleEvent(type, checkbox.checked));
    }
}
customElements.define('devtools-linear-memory-inspector-interpreter-settings', ValueInterpreterSettings);
//# sourceMappingURL=ValueInterpreterSettings.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryValueInterpreter.css.js":
/*!***************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryValueInterpreter.css.js ***!
  \***************************************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
}

.value-interpreter {
  border: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
  overflow: hidden;
  width: 400px;
}

.settings-toolbar {
  min-height: 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
}

.settings-toolbar-button {
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  background-color: transparent;
}

.settings-toolbar-button.active devtools-icon {
  color: var(--icon-toggled);
}

.divider {
  display: block;
  height: 1px;
  margin-bottom: 12px;
  background-color: var(--sys-color-divider);
}

/*# sourceURL=linearMemoryValueInterpreter.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/linear_memory_inspector/components/valueInterpreterSettings.css.js":
/*!***********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/valueInterpreterSettings.css.js ***!
  \***********************************************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  flex: auto;
  display: flex;
  min-height: 20px;
}

.settings {
  display: flex;
  flex-wrap: wrap;
  margin: 0 12px 12px;
  column-gap: 45px;
  row-gap: 15px;
}

.value-types-selection {
  display: flex;
  flex-direction: column;
}

.group {
  font-weight: bold;
  margin-bottom: 11px;
}

.type-label {
  white-space: nowrap;
}

.group + .type-label {
  margin-top: 5px;
}

.type-label input {
  margin: 0 6px 0 0;
  padding: 0;
}

.type-label + .type-label {
  margin-top: 6px;
}

/*# sourceURL=valueInterpreterSettings.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);