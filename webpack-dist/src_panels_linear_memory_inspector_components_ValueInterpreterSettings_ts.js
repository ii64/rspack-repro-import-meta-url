"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_ValueInterpreterSettings_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts":
/*!***************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Endianness: () => (/* binding */ Endianness),
/* harmony export */   VALUE_INTEPRETER_MAX_NUM_BYTES: () => (/* binding */ VALUE_INTEPRETER_MAX_NUM_BYTES),
/* harmony export */   VALUE_TYPE_MODE_LIST: () => (/* binding */ VALUE_TYPE_MODE_LIST),
/* harmony export */   ValueType: () => (/* binding */ ValueType),
/* harmony export */   ValueTypeMode: () => (/* binding */ ValueTypeMode),
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
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
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
var ValueType;
(function (ValueType) {
    ValueType["Int8"] = "Integer 8-bit";
    ValueType["Int16"] = "Integer 16-bit";
    ValueType["Int32"] = "Integer 32-bit";
    ValueType["Int64"] = "Integer 64-bit";
    ValueType["Float32"] = "Float 32-bit";
    ValueType["Float64"] = "Float 64-bit";
    ValueType["Pointer32"] = "Pointer 32-bit";
    ValueType["Pointer64"] = "Pointer 64-bit";
})(ValueType || (ValueType = {}));
var Endianness;
(function (Endianness) {
    Endianness["Little"] = "Little Endian";
    Endianness["Big"] = "Big Endian";
})(Endianness || (Endianness = {}));
var ValueTypeMode;
(function (ValueTypeMode) {
    ValueTypeMode["Decimal"] = "dec";
    ValueTypeMode["Hexadecimal"] = "hex";
    ValueTypeMode["Octal"] = "oct";
    ValueTypeMode["Scientific"] = "sci";
})(ValueTypeMode || (ValueTypeMode = {}));
function getDefaultValueTypeMapping() {
    return new Map(DEFAULT_MODE_MAPPING);
}
const DEFAULT_MODE_MAPPING = new Map([
    [ValueType.Int8, ValueTypeMode.Decimal],
    [ValueType.Int16, ValueTypeMode.Decimal],
    [ValueType.Int32, ValueTypeMode.Decimal],
    [ValueType.Int64, ValueTypeMode.Decimal],
    [ValueType.Float32, ValueTypeMode.Decimal],
    [ValueType.Float64, ValueTypeMode.Decimal],
    [ValueType.Pointer32, ValueTypeMode.Hexadecimal],
    [ValueType.Pointer64, ValueTypeMode.Hexadecimal],
]);
const VALUE_TYPE_MODE_LIST = [
    ValueTypeMode.Decimal,
    ValueTypeMode.Hexadecimal,
    ValueTypeMode.Octal,
    ValueTypeMode.Scientific,
];
function valueTypeToLocalizedString(valueType) {
    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(valueType);
}
function isValidMode(type, mode) {
    switch (type) {
        case ValueType.Int8:
        case ValueType.Int16:
        case ValueType.Int32:
        case ValueType.Int64:
            return mode === ValueTypeMode.Decimal || mode === ValueTypeMode.Hexadecimal || mode === ValueTypeMode.Octal;
        case ValueType.Float32:
        case ValueType.Float64:
            return mode === ValueTypeMode.Scientific || mode === ValueTypeMode.Decimal;
        case ValueType.Pointer32: // fallthrough
        case ValueType.Pointer64:
            return mode === ValueTypeMode.Hexadecimal;
        default:
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNever(type, `Unknown value type: ${type}`);
    }
}
function isNumber(type) {
    switch (type) {
        case ValueType.Int8:
        case ValueType.Int16:
        case ValueType.Int32:
        case ValueType.Int64:
        case ValueType.Float32:
        case ValueType.Float64:
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
        const isLittleEndian = endianness === Endianness.Little;
        return type === ValueType.Pointer32 ? dataView.getUint32(0, isLittleEndian) :
            dataView.getBigUint64(0, isLittleEndian);
    }
    catch (e) {
        return NaN;
    }
}
function isPointer(type) {
    return type === ValueType.Pointer32 || type === ValueType.Pointer64;
}
function format(formatData) {
    if (!formatData.mode) {
        console.error(`No known way of showing value for ${formatData.type}`);
        return i18nString(UIStrings.notApplicable);
    }
    const valueView = new DataView(formatData.buffer);
    const isLittleEndian = formatData.endianness === Endianness.Little;
    let value;
    try {
        switch (formatData.type) {
            case ValueType.Int8:
                value = formatData.signed ? valueView.getInt8(0) : valueView.getUint8(0);
                return formatInteger(value, formatData.mode);
            case ValueType.Int16:
                value = formatData.signed ? valueView.getInt16(0, isLittleEndian) : valueView.getUint16(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case ValueType.Int32:
                value = formatData.signed ? valueView.getInt32(0, isLittleEndian) : valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case ValueType.Int64:
                value =
                    formatData.signed ? valueView.getBigInt64(0, isLittleEndian) : valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, formatData.mode);
            case ValueType.Float32:
                value = valueView.getFloat32(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case ValueType.Float64:
                value = valueView.getFloat64(0, isLittleEndian);
                return formatFloat(value, formatData.mode);
            case ValueType.Pointer32:
                value = valueView.getUint32(0, isLittleEndian);
                return formatInteger(value, ValueTypeMode.Hexadecimal);
            case ValueType.Pointer64:
                value = valueView.getBigUint64(0, isLittleEndian);
                return formatInteger(value, ValueTypeMode.Hexadecimal);
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
        case ValueTypeMode.Decimal:
            return value.toFixed(2).toString();
        case ValueTypeMode.Scientific:
            return value.toExponential(2).toString();
        default:
            throw new Error(`Unknown mode for floats: ${mode}.`);
    }
}
function formatInteger(value, mode) {
    switch (mode) {
        case ValueTypeMode.Decimal:
            return value.toString();
        case ValueTypeMode.Hexadecimal:
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return '0x' + value.toString(16).toUpperCase();
        case ValueTypeMode.Octal:
            if (value < 0) {
                return i18nString(UIStrings.notApplicable);
            }
            return value.toString(8);
        default:
            throw new Error(`Unknown mode for integers: ${mode}.`);
    }
}


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/ValueInterpreterSettings.ts":
/*!***********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/ValueInterpreterSettings.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeToggleEvent: () => (/* binding */ TypeToggleEvent),
/* harmony export */   ValueInterpreterSettings: () => (/* binding */ ValueInterpreterSettings)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './valueInterpreterSettings.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ValueInterpreterSettings_instances, _ValueInterpreterSettings_shadow, _ValueInterpreterSettings_valueTypes, _ValueInterpreterSettings_render, _ValueInterpreterSettings_plotTypeSelections, _ValueInterpreterSettings_onTypeToggle;







const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const UIStrings = {
    /**
     *@description Name of a group of selectable value types that do not fall under integer and floating point value types, e.g. Pointer32. The group appears name appears under the Value Interpreter Settings.
     */
    otherGroup: 'Other',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/ValueInterpreterSettings.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ValueTypeGroup;
(function (ValueTypeGroup) {
    ValueTypeGroup["Integer"] = "Integer";
    ValueTypeGroup["Float"] = "Floating point";
    ValueTypeGroup["Other"] = "Other";
})(ValueTypeGroup || (ValueTypeGroup = {}));
const GROUP_TO_TYPES = new Map([
    [ValueTypeGroup.Integer, [_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int8, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int16, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int32, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int64]],
    [ValueTypeGroup.Float, [_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Float32, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Float64]],
    [ValueTypeGroup.Other, [_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Pointer32, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Pointer64]],
]);
function valueTypeGroupToLocalizedString(group) {
    if (group === ValueTypeGroup.Other) {
        return i18nString(UIStrings.otherGroup);
    }
    // The remaining group type names should not be localized.
    return group;
}
class TypeToggleEvent extends Event {
    constructor(type, checked) {
        super(TypeToggleEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { type, checked };
    }
}
Object.defineProperty(TypeToggleEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'typetoggle'
});
class ValueInterpreterSettings extends HTMLElement {
    constructor() {
        super(...arguments);
        _ValueInterpreterSettings_instances.add(this);
        _ValueInterpreterSettings_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ValueInterpreterSettings_valueTypes.set(this, new Set());
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ValueInterpreterSettings_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_2__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './valueInterpreterSettings.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _ValueInterpreterSettings_valueTypes, data.valueTypes, "f");
        __classPrivateFieldGet(this, _ValueInterpreterSettings_instances, "m", _ValueInterpreterSettings_render).call(this);
    }
}
_ValueInterpreterSettings_shadow = new WeakMap(), _ValueInterpreterSettings_valueTypes = new WeakMap(), _ValueInterpreterSettings_instances = new WeakSet(), _ValueInterpreterSettings_render = function _ValueInterpreterSettings_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="settings" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('settings')}>
       ${[...GROUP_TO_TYPES.keys()].map(group => {
        return html `
          <div class="value-types-selection">
            <span class="group">${valueTypeGroupToLocalizedString(group)}</span>
            ${__classPrivateFieldGet(this, _ValueInterpreterSettings_instances, "m", _ValueInterpreterSettings_plotTypeSelections).call(this, group)}
          </div>
        `;
    })}
      </div>
      `, __classPrivateFieldGet(this, _ValueInterpreterSettings_shadow, "f"), { host: this });
}, _ValueInterpreterSettings_plotTypeSelections = function _ValueInterpreterSettings_plotTypeSelections(group) {
    const types = GROUP_TO_TYPES.get(group);
    if (!types) {
        throw new Error(`Unknown group ${group}`);
    }
    return html `
      ${types.map(type => {
        return html `
          <label class="type-label" title=${(0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type)}>
            <input data-input="true" type="checkbox" .checked=${__classPrivateFieldGet(this, _ValueInterpreterSettings_valueTypes, "f").has(type)} @change=${(e) => __classPrivateFieldGet(this, _ValueInterpreterSettings_instances, "m", _ValueInterpreterSettings_onTypeToggle).call(this, type, e)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle().track({ change: true }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(type))}>
            <span data-title="true">${(0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueTypeToLocalizedString)(type)}</span>
          </label>
     `;
    })}`;
}, _ValueInterpreterSettings_onTypeToggle = function _ValueInterpreterSettings_onTypeToggle(type, event) {
    const checkbox = event.target;
    this.dispatchEvent(new TypeToggleEvent(type, checkbox.checked));
};
Object.defineProperty(ValueInterpreterSettings, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter-settings`
});
customElements.define('devtools-linear-memory-inspector-interpreter-settings', ValueInterpreterSettings);


/***/ })

}]);