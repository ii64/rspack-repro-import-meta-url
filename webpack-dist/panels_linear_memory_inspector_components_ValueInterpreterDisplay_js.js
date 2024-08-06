"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterDisplay_js"],{

/***/ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js":
/*!******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JumpToPointerAddressEvent: () => (/* binding */ JumpToPointerAddressEvent),
/* harmony export */   ValueInterpreterDisplay: () => (/* binding */ ValueInterpreterDisplay),
/* harmony export */   ValueTypeModeChangedEvent: () => (/* binding */ ValueTypeModeChangedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _valueInterpreterDisplay_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valueInterpreterDisplay.css.js */ "./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// eslint-disable-next-line rulesdir/es_modules_import





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an unsigned interpretation of the memory under the Value Interpreter
     */
    unsignedValue: '`Unsigned` value',
    /**
     *@description Tooltip text that appears when hovering over the element to change value type modes of under the Value Interpreter. Value type modes
     *             are different ways of viewing a certain value, e.g.: 10 (decimal) can be 0xa in hexadecimal mode, or 12 in octal mode.
     */
    changeValueTypeMode: 'Change mode',
    /**
     *@description Tooltip text that appears when hovering over a signed interpretation of the memory under the Value Interpreter
     */
    signedValue: '`Signed` value',
    /**
     *@description Tooltip text that appears when hovering over a 'jump-to-address' button that is next to a pointer (32-bit or 64-bit) under the Value Interpreter
     */
    jumpToPointer: 'Jump to address',
    /**
     *@description Tooltip text that appears when hovering over a 'jump-to-address' button that is next to a pointer (32-bit or 64-bit) with an invalid address under the Value Interpreter.
     */
    addressOutOfRange: 'Address out of memory range',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const SORTED_VALUE_TYPES = Array.from((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultValueTypeMapping)().keys());
class ValueTypeModeChangedEvent extends Event {
    static eventName = 'valuetypemodechanged';
    data;
    constructor(type, mode) {
        super(ValueTypeModeChangedEvent.eventName, {
            composed: true,
        });
        this.data = { type, mode };
    }
}
class JumpToPointerAddressEvent extends Event {
    static eventName = 'jumptopointeraddress';
    data;
    constructor(address) {
        super(JumpToPointerAddressEvent.eventName, {
            composed: true,
        });
        this.data = address;
    }
}
class ValueInterpreterDisplay extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter-display`;
    #shadow = this.attachShadow({ mode: 'open' });
    #endianness = "Little Endian" /* Endianness.Little */;
    #buffer = new ArrayBuffer(0);
    #valueTypes = new Set();
    #valueTypeModeConfig = (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultValueTypeMapping)();
    #memoryLength = 0;
    constructor() {
        super();
        this.#shadow.adoptedStyleSheets = [
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        ];
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_valueInterpreterDisplay_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
    }
    set data(data) {
        this.#buffer = data.buffer;
        this.#endianness = data.endianness;
        this.#valueTypes = data.valueTypes;
        this.#memoryLength = data.memoryLength;
        if (data.valueTypeModes) {
            data.valueTypeModes.forEach((mode, valueType) => {
                if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isValidMode)(valueType, mode)) {
                    this.#valueTypeModeConfig.set(valueType, mode);
                }
            });
        }
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="value-types">
        ${SORTED_VALUE_TYPES.map(type => this.#valueTypes.has(type) ? this.#showValue(type) : '')}
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #showValue(type) {
        if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isNumber)(type)) {
            return this.#renderNumberValues(type);
        }
        if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isPointer)(type)) {
            return this.#renderPointerValue(type);
        }
        throw new Error(`No known way to format ${type}`);
    }
    #renderPointerValue(type) {
        const unsignedValue = this.#parse({ type, signed: false });
        const address = (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.getPointerAddress)(type, this.#buffer, this.#endianness);
        const jumpDisabled = Number.isNaN(address) || BigInt(address) >= BigInt(this.#memoryLength);
        const buttonTitle = jumpDisabled ? i18nString(UIStrings.addressOutOfRange) : i18nString(UIStrings.jumpToPointer);
        const iconColor = jumpDisabled ? 'var(--icon-default)' : 'var(--icon-link)';
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
      <span class="value-type-cell-no-mode value-type-cell selectable-text">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(type)}</span>
      <div class="value-type-cell">
        <div class="value-type-value-with-link" data-value="true">
        <span class="selectable-text">${unsignedValue}</span>
          ${html `
              <button class="jump-to-button" data-jump="true" title=${buttonTitle} ?disabled=${jumpDisabled}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('linear-memory-inspector.jump-to-address').track({ click: true })}
                @click=${this.#onJumpToAddressClicked.bind(this, Number(address))}>
                <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} .data=${{ iconName: 'open-externally', color: iconColor, width: '16px' }}>
                </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
              </button>`}
        </div>
      </div>
    `;
        // clang-format on
    }
    #onJumpToAddressClicked(address) {
        this.dispatchEvent(new JumpToPointerAddressEvent(address));
    }
    #renderNumberValues(type) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `
      <span class="value-type-cell selectable-text">${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(type)}</span>
      <div>
        <select title=${i18nString(UIStrings.changeValueTypeMode)}
          data-mode-settings="true"
          class="chrome-select"
          style="border: none; background-color: transparent; cursor: pointer; color: var(--sys-color-token-subtle);"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.dropDown('linear-memory-inspector.value-type-mode').track({ change: true })}
          @change=${this.#onValueTypeModeChange.bind(this, type)}>
            ${_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.VALUE_TYPE_MODE_LIST.filter(x => (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.isValidMode)(type, x)).map(mode => {
            return html `
                <option value=${mode} .selected=${this.#valueTypeModeConfig.get(type) === mode}
                        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(mode).track({ click: true })}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(mode)}
                </option>`;
        })}
        </select>
      </div>
      ${this.#renderSignedAndUnsigned(type)}
    `;
        // clang-format on
    }
    #renderSignedAndUnsigned(type) {
        const unsignedValue = this.#parse({ type, signed: false });
        const signedValue = this.#parse({ type, signed: true });
        const mode = this.#valueTypeModeConfig.get(type);
        const showSignedAndUnsigned = signedValue !== unsignedValue && mode !== "hex" /* ValueTypeMode.Hexadecimal */ && mode !== "oct" /* ValueTypeMode.Octal */;
        const unsignedRendered = html `<span class="value-type-cell selectable-text"  title=${i18nString(UIStrings.unsignedValue)} data-value="true">${unsignedValue}</span>`;
        if (!showSignedAndUnsigned) {
            return unsignedRendered;
        }
        // Some values are too long to show in one line, we're putting them into the next line.
        const showInMultipleLines = type === "Integer 32-bit" /* ValueType.Int32 */ || type === "Integer 64-bit" /* ValueType.Int64 */;
        const signedRendered = html `<span class="selectable-text" data-value="true" title=${i18nString(UIStrings.signedValue)}>${signedValue}</span>`;
        if (showInMultipleLines) {
            return html `
        <div class="value-type-cell">
          ${unsignedRendered}
          ${signedRendered}
        </div>
        `;
        }
        return html `
      <div class="value-type-cell" style="flex-direction: row;">
        ${unsignedRendered}
        <span class="signed-divider"></span>
        ${signedRendered}
      </div>
    `;
    }
    #onValueTypeModeChange(type, event) {
        event.preventDefault();
        const select = event.target;
        const mode = select.value;
        this.dispatchEvent(new ValueTypeModeChangedEvent(type, mode));
    }
    #parse(data) {
        const mode = this.#valueTypeModeConfig.get(data.type);
        return (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_6__.format)({ buffer: this.#buffer, type: data.type, endianness: this.#endianness, signed: data.signed || false, mode });
    }
}
customElements.define('devtools-linear-memory-inspector-interpreter-display', ValueInterpreterDisplay);
//# sourceMappingURL=ValueInterpreterDisplay.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js":
/*!***********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VALUE_INTEPRETER_MAX_NUM_BYTES: () => (/* binding */ VALUE_INTEPRETER_MAX_NUM_BYTES),
/* harmony export */   VALUE_TYPE_MODE_LIST: () => (/* binding */ VALUE_TYPE_MODE_LIST),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatFloat: () => (/* binding */ formatFloat),
/* harmony export */   formatInteger: () => (/* binding */ formatInteger),
/* harmony export */   getDefaultValueTypeMapping: () => (/* binding */ getDefaultValueTypeMapping),
/* harmony export */   getPointerAddress: () => (/* binding */ getPointerAddress),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isPointer: () => (/* binding */ isPointer),
/* harmony export */   isValidMode: () => (/* binding */ isValidMode),
/* harmony export */   valueTypeToLocalizedString: () => (/* binding */ valueTypeToLocalizedString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description Text that is shown in the LinearMemoryInspector if a value could not be correctly formatted
     *             for the requested mode (e.g. we do not floats to be represented as hexadecimal numbers).
     *             Abbreviation stands for 'not applicable'.
     */
    notApplicable: 'N/A',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const VALUE_INTEPRETER_MAX_NUM_BYTES = 8;
function getDefaultValueTypeMapping() {
    return new Map(DEFAULT_MODE_MAPPING);
}
const DEFAULT_MODE_MAPPING = new Map([
    ["Integer 8-bit" /* ValueType.Int8 */, "dec" /* ValueTypeMode.Decimal */],
    ["Integer 16-bit" /* ValueType.Int16 */, "dec" /* ValueTypeMode.Decimal */],
    ["Integer 32-bit" /* ValueType.Int32 */, "dec" /* ValueTypeMode.Decimal */],
    ["Integer 64-bit" /* ValueType.Int64 */, "dec" /* ValueTypeMode.Decimal */],
    ["Float 32-bit" /* ValueType.Float32 */, "dec" /* ValueTypeMode.Decimal */],
    ["Float 64-bit" /* ValueType.Float64 */, "dec" /* ValueTypeMode.Decimal */],
    ["Pointer 32-bit" /* ValueType.Pointer32 */, "hex" /* ValueTypeMode.Hexadecimal */],
    ["Pointer 64-bit" /* ValueType.Pointer64 */, "hex" /* ValueTypeMode.Hexadecimal */],
]);
const VALUE_TYPE_MODE_LIST = [
    "dec" /* ValueTypeMode.Decimal */,
    "hex" /* ValueTypeMode.Hexadecimal */,
    "oct" /* ValueTypeMode.Octal */,
    "sci" /* ValueTypeMode.Scientific */,
];
function valueTypeToLocalizedString(valueType) {
    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(valueType);
}
function isValidMode(type, mode) {
    switch (type) {
        case "Integer 8-bit" /* ValueType.Int8 */:
        case "Integer 16-bit" /* ValueType.Int16 */:
        case "Integer 32-bit" /* ValueType.Int32 */:
        case "Integer 64-bit" /* ValueType.Int64 */:
            return mode === "dec" /* ValueTypeMode.Decimal */ || mode === "hex" /* ValueTypeMode.Hexadecimal */ || mode === "oct" /* ValueTypeMode.Octal */;
        case "Float 32-bit" /* ValueType.Float32 */:
        case "Float 64-bit" /* ValueType.Float64 */:
            return mode === "sci" /* ValueTypeMode.Scientific */ || mode === "dec" /* ValueTypeMode.Decimal */;
        case "Pointer 32-bit" /* ValueType.Pointer32 */: // fallthrough
        case "Pointer 64-bit" /* ValueType.Pointer64 */:
            return mode === "hex" /* ValueTypeMode.Hexadecimal */;
        default:
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNever(type, `Unknown value type: ${type}`);
    }
}
function isNumber(type) {
    switch (type) {
        case "Integer 8-bit" /* ValueType.Int8 */:
        case "Integer 16-bit" /* ValueType.Int16 */:
        case "Integer 32-bit" /* ValueType.Int32 */:
        case "Integer 64-bit" /* ValueType.Int64 */:
        case "Float 32-bit" /* ValueType.Float32 */:
        case "Float 64-bit" /* ValueType.Float64 */:
            return true;
        default:
            return false;
    }
}
function getPointerAddress(type, buffer, endianness) {
    if (!isPointer(type)) {
        console.error(`Requesting address of a non-pointer type: ${type}.\n`);
        return NaN;
    }
    try {
        const dataView = new DataView(buffer);
        const isLittleEndian = endianness === "Little Endian" /* Endianness.Little */;
        return type === "Pointer 32-bit" /* ValueType.Pointer32 */ ? dataView.getUint32(0, isLittleEndian) :
            dataView.getBigUint64(0, isLittleEndian);
    }
    catch (e) {
        return NaN;
    }
}
function isPointer(type) {
    return type === "Pointer 32-bit" /* ValueType.Pointer32 */ || type === "Pointer 64-bit" /* ValueType.Pointer64 */;
}
function format(formatData) {
    if (!formatData.mode) {
        console.error(`No known way of showing value for ${formatData.type}`);
        return i18nString(UIStrings.notApplicable);
    }
    const valueView = new DataView(formatData.buffer);
    const isLittleEndian = formatData.endianness === "Little Endian" /* Endianness.Little */;
    let value;
    try {
        switch (formatData.type) {
            case "Integer 8-bit" /* ValueType.Int8 */:
                value = formatData.signed ? valueView.getInt8(0) : valueView.getUint8(0);
                return formatInteger(value, formatData.mode);
            case "Integer 16-bit" /* ValueType.Int16 */:
                value = formatData.signed ? valueView.getInt16(0, isLittleEndian) : valueView.getUint16(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Integer 32-bit" /* ValueType.Int32 */:
                value = formatData.signed ? valueView.getInt32(0, isLittleEndian) : valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Integer 64-bit" /* ValueType.Int64 */:
                value =
                    formatData.signed ? valueView.getBigInt64(0, isLittleEndian) : valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case "Float 32-bit" /* ValueType.Float32 */:
                value = valueView.getFloat32(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case "Float 64-bit" /* ValueType.Float64 */:
                value = valueView.getFloat64(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case "Pointer 32-bit" /* ValueType.Pointer32 */:
                value = valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, "hex" /* ValueTypeMode.Hexadecimal */);
            case "Pointer 64-bit" /* ValueType.Pointer64 */:
                value = valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, "hex" /* ValueTypeMode.Hexadecimal */);
            default:
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNever(formatData.type, `Unknown value type: ${formatData.type}`);
        }
    }
    catch (e) {
        return i18nString(UIStrings.notApplicable);
    }
}
function formatFloat(value, mode) {
    switch (mode) {
        case "dec" /* ValueTypeMode.Decimal */:
            return value.toFixed(2).toString();
        case "sci" /* ValueTypeMode.Scientific */:
            return value.toExponential(2).toString();
        default:
            throw new Error(`Unknown mode for floats: ${mode}.`);
    }
}
function formatInteger(value, mode) {
    switch (mode) {
        case "dec" /* ValueTypeMode.Decimal */:
            return value.toString();
        case "hex" /* ValueTypeMode.Hexadecimal */:
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return '0x' + value.toString(16).toUpperCase();
        case "oct" /* ValueTypeMode.Octal */:
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return value.toString(8);
        default:
            throw new Error(`Unknown mode for integers: ${mode}.`);
    }
}
//# sourceMappingURL=ValueInterpreterDisplayUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js":
/*!**********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/valueInterpreterDisplay.css.js ***!
  \**********************************************************************************/
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

.value-types {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 4px 24px;
  min-height: 24px;
  overflow: hidden;
  padding: 2px 12px;
  align-items: baseline;
  justify-content: start;
}

.value-type-cell {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 24px;
}

.value-type-value-with-link {
  display: flex;
  align-items: center;
}

.value-type-cell-no-mode {
  grid-column: 1 / 3;
}

.jump-to-button {
  display: flex;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--sys-color-cdt-base-container);
}

.signed-divider {
  width: 1px;
  height: 15px;
  background-color: var(--sys-color-divider);
  margin: 0 4px;
}

.selectable-text {
  user-select: text;
}

.selectable-text::selection {
  background-color: var(--sys-color-tonal-container);
}

/*# sourceURL=valueInterpreterDisplay.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);