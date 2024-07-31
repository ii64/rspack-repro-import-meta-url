"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryValueInterpreter_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts":
/*!***************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EndiannessChangedEvent: () => (/* binding */ EndiannessChangedEvent),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* binding */ LinearMemoryValueInterpreter),
/* harmony export */   ValueTypeToggledEvent: () => (/* binding */ ValueTypeToggledEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryValueInterpreter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterSettings.ts");
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
var _LinearMemoryValueInterpreter_instances, _LinearMemoryValueInterpreter_shadow, _LinearMemoryValueInterpreter_endianness, _LinearMemoryValueInterpreter_buffer, _LinearMemoryValueInterpreter_valueTypes, _LinearMemoryValueInterpreter_valueTypeModeConfig, _LinearMemoryValueInterpreter_memoryLength, _LinearMemoryValueInterpreter_showSettings, _LinearMemoryValueInterpreter_render, _LinearMemoryValueInterpreter_onEndiannessChange, _LinearMemoryValueInterpreter_renderEndiannessSetting, _LinearMemoryValueInterpreter_onSettingsToggle, _LinearMemoryValueInterpreter_onTypeToggle;









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
    constructor(endianness) {
        super(EndiannessChangedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = endianness;
    }
}
Object.defineProperty(EndiannessChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'endiannesschanged'
});
class ValueTypeToggledEvent extends Event {
    constructor(type, checked) {
        super(ValueTypeToggledEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { type, checked };
    }
}
Object.defineProperty(ValueTypeToggledEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'valuetypetoggled'
});
class LinearMemoryValueInterpreter extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryValueInterpreter_instances.add(this);
        _LinearMemoryValueInterpreter_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryValueInterpreter_endianness.set(this, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_7__.Endianness.Little);
        _LinearMemoryValueInterpreter_buffer.set(this, new ArrayBuffer(0));
        _LinearMemoryValueInterpreter_valueTypes.set(this, new Set());
        _LinearMemoryValueInterpreter_valueTypeModeConfig.set(this, new Map());
        _LinearMemoryValueInterpreter_memoryLength.set(this, 0);
        _LinearMemoryValueInterpreter_showSettings.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryValueInterpreter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_endianness, data.endianness, "f");
        __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_buffer, data.value, "f");
        __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_valueTypes, data.valueTypes, "f");
        __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_valueTypeModeConfig, data.valueTypeModes || new Map(), "f");
        __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_memoryLength, data.memoryLength, "f");
        __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_render).call(this);
    }
}
_LinearMemoryValueInterpreter_shadow = new WeakMap(), _LinearMemoryValueInterpreter_endianness = new WeakMap(), _LinearMemoryValueInterpreter_buffer = new WeakMap(), _LinearMemoryValueInterpreter_valueTypes = new WeakMap(), _LinearMemoryValueInterpreter_valueTypeModeConfig = new WeakMap(), _LinearMemoryValueInterpreter_memoryLength = new WeakMap(), _LinearMemoryValueInterpreter_showSettings = new WeakMap(), _LinearMemoryValueInterpreter_instances = new WeakSet(), _LinearMemoryValueInterpreter_render = function _LinearMemoryValueInterpreter_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="value-interpreter">
        <div class="settings-toolbar">
          ${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_renderEndiannessSetting).call(this)}
          <button data-settings="true" class="settings-toolbar-button ${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_showSettings, "f") ? 'active' : ''}"
              title=${i18nString(UIStrings.toggleValueTypeSettings)} @click=${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_onSettingsToggle)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggleSubpane('linear-memory-inspector.toggle-value-settings').track({ click: true })}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName} name=${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_showSettings, "f") ? 'gear-filled' : 'gear'}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName}>
          </button>
        </div>
        <span class="divider"></span>
        <div>
          ${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_showSettings, "f") ?
        html `
              <${_ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_8__.ValueInterpreterSettings.litTagName}
                .data=${{ valueTypes: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_valueTypes, "f") }}
                @typetoggle=${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_onTypeToggle)}>
              </${_ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_8__.ValueInterpreterSettings.litTagName}>` :
        html `
              <${_ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName}
                .data=${{
            buffer: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_buffer, "f"),
            valueTypes: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_valueTypes, "f"),
            endianness: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_endianness, "f"),
            valueTypeModes: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_valueTypeModeConfig, "f"),
            memoryLength: __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_memoryLength, "f"),
        }}>
              </${_ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_6__.ValueInterpreterDisplay.litTagName}>`}
        </div>
      </div>
    `, __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_shadow, "f"), { host: this });
    // clang-format on
}, _LinearMemoryValueInterpreter_onEndiannessChange = function _LinearMemoryValueInterpreter_onEndiannessChange(event) {
    event.preventDefault();
    const select = event.target;
    const endianness = select.value;
    this.dispatchEvent(new EndiannessChangedEvent(endianness));
}, _LinearMemoryValueInterpreter_renderEndiannessSetting = function _LinearMemoryValueInterpreter_renderEndiannessSetting() {
    const onEnumSettingChange = __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_onEndiannessChange).bind(this);
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
    <label data-endianness-setting="true" title=${i18nString(UIStrings.changeEndianness)}>
      <select class="chrome-select"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.dropDown('linear-memory-inspector.endianess').track({ change: true })}
        style="border: none; background-color: transparent; cursor: pointer;"
        data-endianness="true" @change=${onEnumSettingChange}>
        ${[_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_7__.Endianness.Little, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_7__.Endianness.Big].map(endianness => {
        return html `<option value=${endianness} .selected=${__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_endianness, "f") === endianness}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(endianness)).track({ click: true })}>${_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString(endianness)}</option>`;
    })}
      </select>
    </label>
    `;
    // clang-format on
}, _LinearMemoryValueInterpreter_onSettingsToggle = function _LinearMemoryValueInterpreter_onSettingsToggle() {
    __classPrivateFieldSet(this, _LinearMemoryValueInterpreter_showSettings, !__classPrivateFieldGet(this, _LinearMemoryValueInterpreter_showSettings, "f"), "f");
    __classPrivateFieldGet(this, _LinearMemoryValueInterpreter_instances, "m", _LinearMemoryValueInterpreter_render).call(this);
}, _LinearMemoryValueInterpreter_onTypeToggle = function _LinearMemoryValueInterpreter_onTypeToggle(e) {
    this.dispatchEvent(new ValueTypeToggledEvent(e.data.type, e.data.checked));
};
Object.defineProperty(LinearMemoryValueInterpreter, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-linear-memory-inspector-interpreter`
});
customElements.define('devtools-linear-memory-inspector-interpreter', LinearMemoryValueInterpreter);


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