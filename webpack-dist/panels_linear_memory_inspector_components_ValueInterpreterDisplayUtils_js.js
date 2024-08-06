"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterDisplayUtils_js"],{

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

/***/ })

}]);