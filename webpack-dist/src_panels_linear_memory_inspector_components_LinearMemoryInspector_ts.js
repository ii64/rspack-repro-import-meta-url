"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryInspector_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts":
/*!****************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteMemoryHighlightEvent: () => (/* binding */ DeleteMemoryHighlightEvent),
/* harmony export */   JumpToHighlightedMemoryEvent: () => (/* binding */ JumpToHighlightedMemoryEvent),
/* harmony export */   LinearMemoryHighlightChipList: () => (/* binding */ LinearMemoryHighlightChipList)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryHighlightChipList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
var _LinearMemoryHighlightChipList_instances, _LinearMemoryHighlightChipList_shadow, _LinearMemoryHighlightChipList_highlightedAreas, _LinearMemoryHighlightChipList_focusedMemoryHighlight, _LinearMemoryHighlightChipList_render, _LinearMemoryHighlightChipList_createChip, _LinearMemoryHighlightChipList_onJumpToHighlightClick, _LinearMemoryHighlightChipList_onDeleteHighlightClick;





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's button in the Linear Memory Highlight Chip List.
    Clicking the button changes the displayed slice of computer memory in the Linear Memory inspector to contain the inspected variable's bytes.
     */
    jumpToAddress: 'Jump to this memory',
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's delete button in the Linear Memory Highlight Chip List.
     Clicking the delete button stops highlighting the variable's memory in the Linear Memory inspector.
     'Memory' is a slice of bytes in the computer memory.
     */
    deleteHighlight: 'Stop highlighting this memory',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class DeleteMemoryHighlightEvent extends Event {
    constructor(highlightInfo) {
        super(DeleteMemoryHighlightEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = highlightInfo;
    }
}
Object.defineProperty(DeleteMemoryHighlightEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'deletememoryhighlight'
});
class JumpToHighlightedMemoryEvent extends Event {
    constructor(address) {
        super(JumpToHighlightedMemoryEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = address;
    }
}
Object.defineProperty(JumpToHighlightedMemoryEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'jumptohighlightedmemory'
});
class LinearMemoryHighlightChipList extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryHighlightChipList_instances.add(this);
        _LinearMemoryHighlightChipList_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryHighlightChipList_highlightedAreas.set(this, []);
        _LinearMemoryHighlightChipList_focusedMemoryHighlight.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryHighlightChipList.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _LinearMemoryHighlightChipList_highlightedAreas, data.highlightInfos, "f");
        __classPrivateFieldSet(this, _LinearMemoryHighlightChipList_focusedMemoryHighlight, data.focusedMemoryHighlight, "f");
        __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_render).call(this);
    }
}
_LinearMemoryHighlightChipList_shadow = new WeakMap(), _LinearMemoryHighlightChipList_highlightedAreas = new WeakMap(), _LinearMemoryHighlightChipList_focusedMemoryHighlight = new WeakMap(), _LinearMemoryHighlightChipList_instances = new WeakSet(), _LinearMemoryHighlightChipList_render = function _LinearMemoryHighlightChipList_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    const chips = [];
    for (const highlightInfo of __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_highlightedAreas, "f")) {
        chips.push(__classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_createChip).call(this, highlightInfo));
    }
    const result = html `
            <div class="highlight-chip-list">
              ${chips}
            </div>
        `;
    render(result, __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_shadow, "f"), { host: this });
    // clang-format on
}, _LinearMemoryHighlightChipList_createChip = function _LinearMemoryHighlightChipList_createChip(highlightInfo) {
    const expressionName = highlightInfo.name || '<anonymous>';
    const expressionType = highlightInfo.type;
    const isFocused = highlightInfo === __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_focusedMemoryHighlight, "f");
    const classMap = {
        focused: isFocused,
        'highlight-chip': true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap)}>
        <button class="jump-to-highlight-button" title=${i18nString(UIStrings.jumpToAddress)}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.jump-to-highlight').track({ click: true })}
            @click=${() => __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_onJumpToHighlightClick).call(this, highlightInfo.startAddress)}>
          <span class="source-code">
            <span class="value">${expressionName}</span><span class="separator">: </span><span>${expressionType}</span>
          </span>
        </button>
        <div class="delete-highlight-container">
          <button class="delete-highlight-button" title=${i18nString(UIStrings.deleteHighlight)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.delete-highlight').track({ click: true })}
              @click=${() => __classPrivateFieldGet(this, _LinearMemoryHighlightChipList_instances, "m", _LinearMemoryHighlightChipList_onDeleteHighlightClick).call(this, highlightInfo)}>
            <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} .data=${{
        iconName: 'cross',
        color: 'var(--icon-default-hover)',
        width: '16px',
    }}>
            </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
          </button>
        </div>
      </div>
    `;
    // clang-format off
}, _LinearMemoryHighlightChipList_onJumpToHighlightClick = function _LinearMemoryHighlightChipList_onJumpToHighlightClick(startAddress) {
    this.dispatchEvent(new JumpToHighlightedMemoryEvent(startAddress));
}, _LinearMemoryHighlightChipList_onDeleteHighlightClick = function _LinearMemoryHighlightChipList_onDeleteHighlightClick(highlight) {
    this.dispatchEvent(new DeleteMemoryHighlightEvent(highlight));
};
Object.defineProperty(LinearMemoryHighlightChipList, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-highlight-chip-list`
});
customElements.define('devtools-linear-memory-highlight-chip-list', LinearMemoryHighlightChipList);


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryInspector.ts":
/*!********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryInspector.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressChangedEvent: () => (/* binding */ AddressChangedEvent),
/* harmony export */   LinearMemoryInspector: () => (/* binding */ LinearMemoryInspector),
/* harmony export */   MemoryRequestEvent: () => (/* binding */ MemoryRequestEvent),
/* harmony export */   SettingsChangedEvent: () => (/* binding */ SettingsChangedEvent)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryInspector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.ts");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts");
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.ts");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _AddressHistoryEntry_address, _AddressHistoryEntry_callback, _LinearMemoryInspector_instances, _LinearMemoryInspector_shadow, _LinearMemoryInspector_history, _LinearMemoryInspector_memory, _LinearMemoryInspector_memoryOffset, _LinearMemoryInspector_outerMemoryLength, _LinearMemoryInspector_address, _LinearMemoryInspector_highlightInfo, _LinearMemoryInspector_currentNavigatorMode, _LinearMemoryInspector_currentNavigatorAddressLine, _LinearMemoryInspector_numBytesPerPage, _LinearMemoryInspector_valueTypeModes, _LinearMemoryInspector_valueTypes, _LinearMemoryInspector_endianness, _LinearMemoryInspector_render, _LinearMemoryInspector_onJumpToAddress, _LinearMemoryInspector_onRefreshRequest, _LinearMemoryInspector_onByteSelected, _LinearMemoryInspector_createSettings, _LinearMemoryInspector_onEndiannessChanged, _LinearMemoryInspector_isValidAddress, _LinearMemoryInspector_onAddressChange, _LinearMemoryInspector_onValueTypeToggled, _LinearMemoryInspector_onValueTypeModeChanged, _LinearMemoryInspector_navigateHistory, _LinearMemoryInspector_navigatePage, _LinearMemoryInspector_jumpToAddress, _LinearMemoryInspector_getPageRangeForAddress, _LinearMemoryInspector_resize, _LinearMemoryInspector_update, _LinearMemoryInspector_setAddress, _LinearMemoryInspector_getSmallestEnclosingMemoryHighlight;




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;






const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an invalid address in the address line in the Linear memory inspector
     *@example {0x00000000} PH1
     *@example {0x00400000} PH2
     */
    addressHasToBeANumberBetweenSAnd: 'Address has to be a number between {PH1} and {PH2}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryInspector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class MemoryRequestEvent extends Event {
    constructor(start, end, address) {
        super(MemoryRequestEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { start, end, address };
    }
}
Object.defineProperty(MemoryRequestEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'memoryrequest'
});
class AddressChangedEvent extends Event {
    constructor(address) {
        super(AddressChangedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = address;
    }
}
Object.defineProperty(AddressChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'addresschanged'
});
class SettingsChangedEvent extends Event {
    constructor(settings) {
        super(SettingsChangedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = settings;
    }
}
Object.defineProperty(SettingsChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'settingschanged'
});
class AddressHistoryEntry {
    constructor(address, callback) {
        _AddressHistoryEntry_address.set(this, 0);
        _AddressHistoryEntry_callback.set(this, void 0);
        if (address < 0) {
            throw new Error('Address should be a greater or equal to zero');
        }
        __classPrivateFieldSet(this, _AddressHistoryEntry_address, address, "f");
        __classPrivateFieldSet(this, _AddressHistoryEntry_callback, callback, "f");
    }
    valid() {
        return true;
    }
    reveal() {
        __classPrivateFieldGet(this, _AddressHistoryEntry_callback, "f").call(this, __classPrivateFieldGet(this, _AddressHistoryEntry_address, "f"));
    }
}
_AddressHistoryEntry_address = new WeakMap(), _AddressHistoryEntry_callback = new WeakMap();
class LinearMemoryInspector extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryInspector_instances.add(this);
        _LinearMemoryInspector_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryInspector_history.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.SimpleHistoryManager.SimpleHistoryManager(10));
        _LinearMemoryInspector_memory.set(this, new Uint8Array());
        _LinearMemoryInspector_memoryOffset.set(this, 0);
        _LinearMemoryInspector_outerMemoryLength.set(this, 0);
        _LinearMemoryInspector_address.set(this, -1);
        _LinearMemoryInspector_highlightInfo.set(this, void 0);
        _LinearMemoryInspector_currentNavigatorMode.set(this, _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted);
        _LinearMemoryInspector_currentNavigatorAddressLine.set(this, `${__classPrivateFieldGet(this, _LinearMemoryInspector_address, "f")}`);
        _LinearMemoryInspector_numBytesPerPage.set(this, 4);
        _LinearMemoryInspector_valueTypeModes.set(this, (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.getDefaultValueTypeMapping)());
        _LinearMemoryInspector_valueTypes.set(this, new Set(__classPrivateFieldGet(this, _LinearMemoryInspector_valueTypeModes, "f").keys()));
        _LinearMemoryInspector_endianness.set(this, _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.Endianness.Little);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _LinearMemoryInspector_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryInspector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        if (data.address < data.memoryOffset || data.address > data.memoryOffset + data.memory.length || data.address < 0) {
            throw new Error('Address is out of bounds.');
        }
        if (data.memoryOffset < 0) {
            throw new Error('Memory offset has to be greater or equal to zero.');
        }
        if (data.highlightInfo) {
            if (data.highlightInfo.size < 0) {
                throw new Error('Object size has to be greater than or equal to zero');
            }
            if (data.highlightInfo.startAddress < 0 || data.highlightInfo.startAddress >= data.outerMemoryLength) {
                throw new Error('Object start address is out of bounds.');
            }
        }
        __classPrivateFieldSet(this, _LinearMemoryInspector_memory, data.memory, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_memoryOffset, data.memoryOffset, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_outerMemoryLength, data.outerMemoryLength, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_valueTypeModes, data.valueTypeModes || __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypeModes, "f"), "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_valueTypes, data.valueTypes || __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypes, "f"), "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_endianness, data.endianness || __classPrivateFieldGet(this, _LinearMemoryInspector_endianness, "f"), "f");
        __classPrivateFieldSet(this, _LinearMemoryInspector_highlightInfo, data.highlightInfo, "f");
        __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_setAddress).call(this, data.address);
        __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
    }
}
_LinearMemoryInspector_shadow = new WeakMap(), _LinearMemoryInspector_history = new WeakMap(), _LinearMemoryInspector_memory = new WeakMap(), _LinearMemoryInspector_memoryOffset = new WeakMap(), _LinearMemoryInspector_outerMemoryLength = new WeakMap(), _LinearMemoryInspector_address = new WeakMap(), _LinearMemoryInspector_highlightInfo = new WeakMap(), _LinearMemoryInspector_currentNavigatorMode = new WeakMap(), _LinearMemoryInspector_currentNavigatorAddressLine = new WeakMap(), _LinearMemoryInspector_numBytesPerPage = new WeakMap(), _LinearMemoryInspector_valueTypeModes = new WeakMap(), _LinearMemoryInspector_valueTypes = new WeakMap(), _LinearMemoryInspector_endianness = new WeakMap(), _LinearMemoryInspector_instances = new WeakSet(), _LinearMemoryInspector_render = function _LinearMemoryInspector_render() {
    const { start, end } = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_getPageRangeForAddress).call(this, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f"), __classPrivateFieldGet(this, _LinearMemoryInspector_numBytesPerPage, "f"));
    const navigatorAddressToShow = __classPrivateFieldGet(this, _LinearMemoryInspector_currentNavigatorMode, "f") === _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted ? (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(__classPrivateFieldGet(this, _LinearMemoryInspector_address, "f")) :
        __classPrivateFieldGet(this, _LinearMemoryInspector_currentNavigatorAddressLine, "f");
    const navigatorAddressIsValid = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_isValidAddress).call(this, navigatorAddressToShow);
    const invalidAddressMsg = i18nString(UIStrings.addressHasToBeANumberBetweenSAnd, { PH1: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(0), PH2: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(__classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f")) });
    const errorMsg = navigatorAddressIsValid ? undefined : invalidAddressMsg;
    const canGoBackInHistory = __classPrivateFieldGet(this, _LinearMemoryInspector_history, "f").canRollback();
    const canGoForwardInHistory = __classPrivateFieldGet(this, _LinearMemoryInspector_history, "f").canRollover();
    const highlightedMemoryAreas = __classPrivateFieldGet(this, _LinearMemoryInspector_highlightInfo, "f") ? [__classPrivateFieldGet(this, _LinearMemoryInspector_highlightInfo, "f")] : [];
    const focusedMemoryHighlight = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_getSmallestEnclosingMemoryHighlight).call(this, highlightedMemoryAreas, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f"));
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="view">
        <${_LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName}
          .data=${{ address: navigatorAddressToShow, valid: navigatorAddressIsValid, mode: __classPrivateFieldGet(this, _LinearMemoryInspector_currentNavigatorMode, "f"), error: errorMsg, canGoBackInHistory, canGoForwardInHistory }}
          @refreshrequested=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onRefreshRequest)}
          @addressinputchanged=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onAddressChange)}
          @pagenavigation=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_navigatePage)}
          @historynavigation=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_navigateHistory)}></${_LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName}>
          <${_LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName}
          .data=${{ highlightInfos: highlightedMemoryAreas, focusedMemoryHighlight: focusedMemoryHighlight }}
          @jumptohighlightedmemory=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onJumpToAddress)}>
          </${_LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName}>
        <${_LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName}
          .data=${{
        memory: __classPrivateFieldGet(this, _LinearMemoryInspector_memory, "f").slice(start - __classPrivateFieldGet(this, _LinearMemoryInspector_memoryOffset, "f"), end - __classPrivateFieldGet(this, _LinearMemoryInspector_memoryOffset, "f")),
        address: __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f"), memoryOffset: start,
        focus: __classPrivateFieldGet(this, _LinearMemoryInspector_currentNavigatorMode, "f") === _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted,
        highlightInfo: __classPrivateFieldGet(this, _LinearMemoryInspector_highlightInfo, "f"),
        focusedMemoryHighlight: focusedMemoryHighlight
    }}
          @byteselected=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onByteSelected)}
          @resize=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_resize)}>
        </${_LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName}>
      </div>
      <div class="value-interpreter">
        <${_LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName}
          .data=${{
        value: __classPrivateFieldGet(this, _LinearMemoryInspector_memory, "f").slice(__classPrivateFieldGet(this, _LinearMemoryInspector_address, "f") - __classPrivateFieldGet(this, _LinearMemoryInspector_memoryOffset, "f"), __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f") + _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.VALUE_INTEPRETER_MAX_NUM_BYTES).buffer,
        valueTypes: __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypes, "f"),
        valueTypeModes: __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypeModes, "f"),
        endianness: __classPrivateFieldGet(this, _LinearMemoryInspector_endianness, "f"),
        memoryLength: __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f")
    }}
          @valuetypetoggled=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onValueTypeToggled)}
          @valuetypemodechanged=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onValueTypeModeChanged)}
          @endiannesschanged=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onEndiannessChanged)}
          @jumptopointeraddress=${__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_onJumpToAddress)}
          >
        </${_LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName}/>
      </div>
      `, __classPrivateFieldGet(this, _LinearMemoryInspector_shadow, "f"), {
        host: this,
    });
    // clang-format on
}, _LinearMemoryInspector_onJumpToAddress = function _LinearMemoryInspector_onJumpToAddress(e) {
    // Stop event from bubbling up, since no element further up needs the event.
    e.stopPropagation();
    __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorMode, _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted, "f");
    const addressInRange = Math.max(0, Math.min(e.data, __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f") - 1));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_jumpToAddress).call(this, addressInRange);
}, _LinearMemoryInspector_onRefreshRequest = function _LinearMemoryInspector_onRefreshRequest() {
    const { start, end } = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_getPageRangeForAddress).call(this, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f"), __classPrivateFieldGet(this, _LinearMemoryInspector_numBytesPerPage, "f"));
    this.dispatchEvent(new MemoryRequestEvent(start, end, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f")));
}, _LinearMemoryInspector_onByteSelected = function _LinearMemoryInspector_onByteSelected(e) {
    __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorMode, _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted, "f");
    const addressInRange = Math.max(0, Math.min(e.data, __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f") - 1));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_jumpToAddress).call(this, addressInRange);
}, _LinearMemoryInspector_createSettings = function _LinearMemoryInspector_createSettings() {
    return { valueTypes: __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypes, "f"), modes: __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypeModes, "f"), endianness: __classPrivateFieldGet(this, _LinearMemoryInspector_endianness, "f") };
}, _LinearMemoryInspector_onEndiannessChanged = function _LinearMemoryInspector_onEndiannessChanged(e) {
    __classPrivateFieldSet(this, _LinearMemoryInspector_endianness, e.data, "f");
    this.dispatchEvent(new SettingsChangedEvent(__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_createSettings).call(this)));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
}, _LinearMemoryInspector_isValidAddress = function _LinearMemoryInspector_isValidAddress(address) {
    const newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
    return newAddress !== undefined && newAddress >= 0 && newAddress < __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f");
}, _LinearMemoryInspector_onAddressChange = function _LinearMemoryInspector_onAddressChange(e) {
    const { address, mode } = e.data;
    const isValid = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_isValidAddress).call(this, address);
    const newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
    __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorAddressLine, address, "f");
    if (newAddress !== undefined && isValid) {
        __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorMode, mode, "f");
        __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_jumpToAddress).call(this, newAddress);
        return;
    }
    if (mode === _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Submitted && !isValid) {
        __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorMode, _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.InvalidSubmit, "f");
    }
    else {
        __classPrivateFieldSet(this, _LinearMemoryInspector_currentNavigatorMode, _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Mode.Edit, "f");
    }
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
}, _LinearMemoryInspector_onValueTypeToggled = function _LinearMemoryInspector_onValueTypeToggled(e) {
    const { type, checked } = e.data;
    if (checked) {
        __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypes, "f").add(type);
    }
    else {
        __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypes, "f").delete(type);
    }
    this.dispatchEvent(new SettingsChangedEvent(__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_createSettings).call(this)));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
}, _LinearMemoryInspector_onValueTypeModeChanged = function _LinearMemoryInspector_onValueTypeModeChanged(e) {
    e.stopImmediatePropagation();
    const { type, mode } = e.data;
    __classPrivateFieldGet(this, _LinearMemoryInspector_valueTypeModes, "f").set(type, mode);
    this.dispatchEvent(new SettingsChangedEvent(__classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_createSettings).call(this)));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
}, _LinearMemoryInspector_navigateHistory = function _LinearMemoryInspector_navigateHistory(e) {
    return e.data === _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Navigation.Forward ? __classPrivateFieldGet(this, _LinearMemoryInspector_history, "f").rollover() : __classPrivateFieldGet(this, _LinearMemoryInspector_history, "f").rollback();
}, _LinearMemoryInspector_navigatePage = function _LinearMemoryInspector_navigatePage(e) {
    const newAddress = e.data === _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.Navigation.Forward ? __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f") + __classPrivateFieldGet(this, _LinearMemoryInspector_numBytesPerPage, "f") : __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f") - __classPrivateFieldGet(this, _LinearMemoryInspector_numBytesPerPage, "f");
    const addressInRange = Math.max(0, Math.min(newAddress, __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f") - 1));
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_jumpToAddress).call(this, addressInRange);
}, _LinearMemoryInspector_jumpToAddress = function _LinearMemoryInspector_jumpToAddress(address) {
    if (address < 0 || address >= __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f")) {
        console.warn(`Specified address is out of bounds: ${address}`);
        return;
    }
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_setAddress).call(this, address);
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_update).call(this);
}, _LinearMemoryInspector_getPageRangeForAddress = function _LinearMemoryInspector_getPageRangeForAddress(address, numBytesPerPage) {
    const pageNumber = Math.floor(address / numBytesPerPage);
    const pageStartAddress = pageNumber * numBytesPerPage;
    const pageEndAddress = Math.min(pageStartAddress + numBytesPerPage, __classPrivateFieldGet(this, _LinearMemoryInspector_outerMemoryLength, "f"));
    return { start: pageStartAddress, end: pageEndAddress };
}, _LinearMemoryInspector_resize = function _LinearMemoryInspector_resize(event) {
    __classPrivateFieldSet(this, _LinearMemoryInspector_numBytesPerPage, event.data, "f");
    __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_update).call(this);
}, _LinearMemoryInspector_update = function _LinearMemoryInspector_update() {
    const { start, end } = __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_getPageRangeForAddress).call(this, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f"), __classPrivateFieldGet(this, _LinearMemoryInspector_numBytesPerPage, "f"));
    if (start < __classPrivateFieldGet(this, _LinearMemoryInspector_memoryOffset, "f") || end > __classPrivateFieldGet(this, _LinearMemoryInspector_memoryOffset, "f") + __classPrivateFieldGet(this, _LinearMemoryInspector_memory, "f").length) {
        this.dispatchEvent(new MemoryRequestEvent(start, end, __classPrivateFieldGet(this, _LinearMemoryInspector_address, "f")));
    }
    else {
        __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_render).call(this);
    }
}, _LinearMemoryInspector_setAddress = function _LinearMemoryInspector_setAddress(address) {
    // If we are already showing the address that is requested, no need to act upon it.
    if (__classPrivateFieldGet(this, _LinearMemoryInspector_address, "f") === address) {
        return;
    }
    const historyEntry = new AddressHistoryEntry(address, () => __classPrivateFieldGet(this, _LinearMemoryInspector_instances, "m", _LinearMemoryInspector_jumpToAddress).call(this, address));
    __classPrivateFieldGet(this, _LinearMemoryInspector_history, "f").push(historyEntry);
    __classPrivateFieldSet(this, _LinearMemoryInspector_address, address, "f");
    this.dispatchEvent(new AddressChangedEvent(__classPrivateFieldGet(this, _LinearMemoryInspector_address, "f")));
}, _LinearMemoryInspector_getSmallestEnclosingMemoryHighlight = function _LinearMemoryInspector_getSmallestEnclosingMemoryHighlight(highlightedMemoryAreas, address) {
    let smallestEnclosingHighlight;
    for (const highlightedMemory of highlightedMemoryAreas) {
        if (highlightedMemory.startAddress <= address &&
            address < highlightedMemory.startAddress + highlightedMemory.size) {
            if (!smallestEnclosingHighlight) {
                smallestEnclosingHighlight = highlightedMemory;
            }
            else if (highlightedMemory.size < smallestEnclosingHighlight.size) {
                smallestEnclosingHighlight = highlightedMemory;
            }
        }
    }
    return smallestEnclosingHighlight;
};
Object.defineProperty(LinearMemoryInspector, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-inspector-inspector`
});
customElements.define('devtools-linear-memory-inspector-inspector', LinearMemoryInspector);


/***/ })

}]);