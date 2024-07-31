"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_ValueInterpreterDisplay_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JumpToPointerAddressEvent: () => (/* binding */ JumpToPointerAddressEvent),
/* harmony export */   ValueInterpreterDisplay: () => (/* binding */ ValueInterpreterDisplay),
/* harmony export */   ValueTypeModeChangedEvent: () => (/* binding */ ValueTypeModeChangedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './valueInterpreterDisplay.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
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
var _ValueInterpreterDisplay_instances, _ValueInterpreterDisplay_shadow, _ValueInterpreterDisplay_endianness, _ValueInterpreterDisplay_buffer, _ValueInterpreterDisplay_valueTypes, _ValueInterpreterDisplay_valueTypeModeConfig, _ValueInterpreterDisplay_memoryLength, _ValueInterpreterDisplay_render, _ValueInterpreterDisplay_showValue, _ValueInterpreterDisplay_renderPointerValue, _ValueInterpreterDisplay_onJumpToAddressClicked, _ValueInterpreterDisplay_renderNumberValues, _ValueInterpreterDisplay_renderSignedAndUnsigned, _ValueInterpreterDisplay_onValueTypeModeChange, _ValueInterpreterDisplay_parse;


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
const SORTED_VALUE_TYPES = Array.from((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.getDefaultValueTypeMapping)().keys());
class ValueTypeModeChangedEvent extends Event {
    constructor(type, mode) {
        super(ValueTypeModeChangedEvent.eventName, {
            composed: true,
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { type, mode };
    }
}
Object.defineProperty(ValueTypeModeChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'valuetypemodechanged'
});
class JumpToPointerAddressEvent extends Event {
    constructor(address) {
        super(JumpToPointerAddressEvent.eventName, {
            composed: true,
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = address;
    }
}
Object.defineProperty(JumpToPointerAddressEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'jumptopointeraddress'
});
class ValueInterpreterDisplay extends HTMLElement {
    constructor() {
        super();
        _ValueInterpreterDisplay_instances.add(this);
        _ValueInterpreterDisplay_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ValueInterpreterDisplay_endianness.set(this, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.Endianness.Little);
        _ValueInterpreterDisplay_buffer.set(this, new ArrayBuffer(0));
        _ValueInterpreterDisplay_valueTypes.set(this, new Set());
        _ValueInterpreterDisplay_valueTypeModeConfig.set(this, (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.getDefaultValueTypeMapping)());
        _ValueInterpreterDisplay_memoryLength.set(this, 0);
        __classPrivateFieldGet(this, _ValueInterpreterDisplay_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ];
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ValueInterpreterDisplay_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './valueInterpreterDisplay.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _ValueInterpreterDisplay_buffer, data.buffer, "f");
        __classPrivateFieldSet(this, _ValueInterpreterDisplay_endianness, data.endianness, "f");
        __classPrivateFieldSet(this, _ValueInterpreterDisplay_valueTypes, data.valueTypes, "f");
        __classPrivateFieldSet(this, _ValueInterpreterDisplay_memoryLength, data.memoryLength, "f");
        if (data.valueTypeModes) {
            data.valueTypeModes.forEach((mode, valueType) => {
                if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidMode)(valueType, mode)) {
                    __classPrivateFieldGet(this, _ValueInterpreterDisplay_valueTypeModeConfig, "f").set(valueType, mode);
                }
            });
        }
        __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_render).call(this);
    }
}
_ValueInterpreterDisplay_shadow = new WeakMap(), _ValueInterpreterDisplay_endianness = new WeakMap(), _ValueInterpreterDisplay_buffer = new WeakMap(), _ValueInterpreterDisplay_valueTypes = new WeakMap(), _ValueInterpreterDisplay_valueTypeModeConfig = new WeakMap(), _ValueInterpreterDisplay_memoryLength = new WeakMap(), _ValueInterpreterDisplay_instances = new WeakSet(), _ValueInterpreterDisplay_render = function _ValueInterpreterDisplay_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="value-types">
        ${SORTED_VALUE_TYPES.map(type => __classPrivateFieldGet(this, _ValueInterpreterDisplay_valueTypes, "f").has(type) ? __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_showValue).call(this, type) : '')}
      </div>
    `, __classPrivateFieldGet(this, _ValueInterpreterDisplay_shadow, "f"), { host: this });
    // clang-format on
}, _ValueInterpreterDisplay_showValue = function _ValueInterpreterDisplay_showValue(type) {
    if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.isNumber)(type)) {
        return __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_renderNumberValues).call(this, type);
    }
    if ((0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPointer)(type)) {
        return __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_renderPointerValue).call(this, type);
    }
    throw new Error(`No known way to format ${type}`);
}, _ValueInterpreterDisplay_renderPointerValue = function _ValueInterpreterDisplay_renderPointerValue(type) {
    const unsignedValue = __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_parse).call(this, { type, signed: false });
    const address = (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.getPointerAddress)(type, __classPrivateFieldGet(this, _ValueInterpreterDisplay_buffer, "f"), __classPrivateFieldGet(this, _ValueInterpreterDisplay_endianness, "f"));
    const jumpDisabled = Number.isNaN(address) || BigInt(address) >= BigInt(__classPrivateFieldGet(this, _ValueInterpreterDisplay_memoryLength, "f"));
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
                @click=${__classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_onJumpToAddressClicked).bind(this, Number(address))}>
                <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} .data=${{ iconName: 'open-externally', color: iconColor, width: '16px' }}>
                </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
              </button>`}
        </div>
      </div>
    `;
    // clang-format on
}, _ValueInterpreterDisplay_onJumpToAddressClicked = function _ValueInterpreterDisplay_onJumpToAddressClicked(address) {
    this.dispatchEvent(new JumpToPointerAddressEvent(address));
}, _ValueInterpreterDisplay_renderNumberValues = function _ValueInterpreterDisplay_renderNumberValues(type) {
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
          @change=${__classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_onValueTypeModeChange).bind(this, type)}>
            ${_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.VALUE_TYPE_MODE_LIST.filter(x => (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidMode)(type, x)).map(mode => {
        return html `
                <option value=${mode} .selected=${__classPrivateFieldGet(this, _ValueInterpreterDisplay_valueTypeModeConfig, "f").get(type) === mode}
                        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(mode).track({ click: true })}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(mode)}
                </option>`;
    })}
        </select>
      </div>
      ${__classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_renderSignedAndUnsigned).call(this, type)}
    `;
    // clang-format on
}, _ValueInterpreterDisplay_renderSignedAndUnsigned = function _ValueInterpreterDisplay_renderSignedAndUnsigned(type) {
    const unsignedValue = __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_parse).call(this, { type, signed: false });
    const signedValue = __classPrivateFieldGet(this, _ValueInterpreterDisplay_instances, "m", _ValueInterpreterDisplay_parse).call(this, { type, signed: true });
    const mode = __classPrivateFieldGet(this, _ValueInterpreterDisplay_valueTypeModeConfig, "f").get(type);
    const showSignedAndUnsigned = signedValue !== unsignedValue && mode !== _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueTypeMode.Hexadecimal && mode !== _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueTypeMode.Octal;
    const unsignedRendered = html `<span class="value-type-cell selectable-text"  title=${i18nString(UIStrings.unsignedValue)} data-value="true">${unsignedValue}</span>`;
    if (!showSignedAndUnsigned) {
        return unsignedRendered;
    }
    // Some values are too long to show in one line, we're putting them into the next line.
    const showInMultipleLines = type === _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int32 || type === _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.Int64;
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
}, _ValueInterpreterDisplay_onValueTypeModeChange = function _ValueInterpreterDisplay_onValueTypeModeChange(type, event) {
    event.preventDefault();
    const select = event.target;
    const mode = select.value;
    this.dispatchEvent(new ValueTypeModeChangedEvent(type, mode));
}, _ValueInterpreterDisplay_parse = function _ValueInterpreterDisplay_parse(data) {
    const mode = __classPrivateFieldGet(this, _ValueInterpreterDisplay_valueTypeModeConfig, "f").get(data.type);
    return (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_5__.format)({ buffer: __classPrivateFieldGet(this, _ValueInterpreterDisplay_buffer, "f"), type: data.type, endianness: __classPrivateFieldGet(this, _ValueInterpreterDisplay_endianness, "f"), signed: data.signed || false, mode });
};
Object.defineProperty(ValueInterpreterDisplay, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter-display`
});
customElements.define('devtools-linear-memory-inspector-interpreter-display', ValueInterpreterDisplay);


/***/ }),

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


/***/ })

}]);