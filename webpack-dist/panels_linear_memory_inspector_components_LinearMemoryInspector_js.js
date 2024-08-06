"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_LinearMemoryInspector_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js":
/*!************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteMemoryHighlightEvent: () => (/* binding */ DeleteMemoryHighlightEvent),
/* harmony export */   JumpToHighlightedMemoryEvent: () => (/* binding */ JumpToHighlightedMemoryEvent),
/* harmony export */   LinearMemoryHighlightChipList: () => (/* binding */ LinearMemoryHighlightChipList)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryHighlightChipList.css.js */ "./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    static eventName = 'deletememoryhighlight';
    data;
    constructor(highlightInfo) {
        super(DeleteMemoryHighlightEvent.eventName, { bubbles: true, composed: true });
        this.data = highlightInfo;
    }
}
class JumpToHighlightedMemoryEvent extends Event {
    static eventName = 'jumptohighlightedmemory';
    data;
    constructor(address) {
        super(JumpToHighlightedMemoryEvent.eventName);
        this.data = address;
    }
}
class LinearMemoryHighlightChipList extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-highlight-chip-list`;
    #shadow = this.attachShadow({ mode: 'open' });
    #highlightedAreas = [];
    #focusedMemoryHighlight;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    set data(data) {
        this.#highlightedAreas = data.highlightInfos;
        this.#focusedMemoryHighlight = data.focusedMemoryHighlight;
        this.#render();
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        const chips = [];
        for (const highlightInfo of this.#highlightedAreas) {
            chips.push(this.#createChip(highlightInfo));
        }
        const result = html `
            <div class="highlight-chip-list">
              ${chips}
            </div>
        `;
        render(result, this.#shadow, { host: this });
        // clang-format on
    }
    #createChip(highlightInfo) {
        const expressionName = highlightInfo.name || '<anonymous>';
        const expressionType = highlightInfo.type;
        const isFocused = highlightInfo === this.#focusedMemoryHighlight;
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
            @click=${() => this.#onJumpToHighlightClick(highlightInfo.startAddress)}>
          <span class="source-code">
            <span class="value">${expressionName}</span><span class="separator">: </span><span>${expressionType}</span>
          </span>
        </button>
        <div class="delete-highlight-container">
          <button class="delete-highlight-button" title=${i18nString(UIStrings.deleteHighlight)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.delete-highlight').track({ click: true })}
              @click=${() => this.#onDeleteHighlightClick(highlightInfo)}>
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
    }
    #onJumpToHighlightClick(startAddress) {
        this.dispatchEvent(new JumpToHighlightedMemoryEvent(startAddress));
    }
    #onDeleteHighlightClick(highlight) {
        this.dispatchEvent(new DeleteMemoryHighlightEvent(highlight));
    }
}
customElements.define('devtools-linear-memory-highlight-chip-list', LinearMemoryHighlightChipList);
//# sourceMappingURL=LinearMemoryHighlightChipList.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js":
/*!****************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryInspector.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressChangedEvent: () => (/* binding */ AddressChangedEvent),
/* harmony export */   LinearMemoryInspector: () => (/* binding */ LinearMemoryInspector),
/* harmony export */   MemoryRequestEvent: () => (/* binding */ MemoryRequestEvent),
/* harmony export */   SettingsChangedEvent: () => (/* binding */ SettingsChangedEvent)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _linearMemoryInspector_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linearMemoryInspector.css.js */ "./panels/linear_memory_inspector/components/linearMemoryInspector.css.js");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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
    static eventName = 'memoryrequest';
    data;
    constructor(start, end, address) {
        super(MemoryRequestEvent.eventName);
        this.data = { start, end, address };
    }
}
class AddressChangedEvent extends Event {
    static eventName = 'addresschanged';
    data;
    constructor(address) {
        super(AddressChangedEvent.eventName);
        this.data = address;
    }
}
class SettingsChangedEvent extends Event {
    static eventName = 'settingschanged';
    data;
    constructor(settings) {
        super(SettingsChangedEvent.eventName);
        this.data = settings;
    }
}
class AddressHistoryEntry {
    #address = 0;
    #callback;
    constructor(address, callback) {
        if (address < 0) {
            throw new Error('Address should be a greater or equal to zero');
        }
        this.#address = address;
        this.#callback = callback;
    }
    valid() {
        return true;
    }
    reveal() {
        this.#callback(this.#address);
    }
}
class LinearMemoryInspector extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-inspector-inspector`;
    #shadow = this.attachShadow({ mode: 'open' });
    #history = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.SimpleHistoryManager.SimpleHistoryManager(10);
    #memory = new Uint8Array();
    #memoryOffset = 0;
    #outerMemoryLength = 0;
    #address = -1;
    #highlightInfo;
    #currentNavigatorMode = "Submitted" /* Mode.Submitted */;
    #currentNavigatorAddressLine = `${this.#address}`;
    #numBytesPerPage = 4;
    #valueTypeModes = (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.getDefaultValueTypeMapping)();
    #valueTypes = new Set(this.#valueTypeModes.keys());
    #endianness = "Little Endian" /* Endianness.Little */;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryInspector_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
        this.#memory = data.memory;
        this.#memoryOffset = data.memoryOffset;
        this.#outerMemoryLength = data.outerMemoryLength;
        this.#valueTypeModes = data.valueTypeModes || this.#valueTypeModes;
        this.#valueTypes = data.valueTypes || this.#valueTypes;
        this.#endianness = data.endianness || this.#endianness;
        this.#highlightInfo = data.highlightInfo;
        this.#setAddress(data.address);
        this.#render();
    }
    #render() {
        const { start, end } = this.#getPageRangeForAddress(this.#address, this.#numBytesPerPage);
        const navigatorAddressToShow = this.#currentNavigatorMode === "Submitted" /* Mode.Submitted */ ? (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(this.#address) :
            this.#currentNavigatorAddressLine;
        const navigatorAddressIsValid = this.#isValidAddress(navigatorAddressToShow);
        const invalidAddressMsg = i18nString(UIStrings.addressHasToBeANumberBetweenSAnd, { PH1: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(0), PH2: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(this.#outerMemoryLength) });
        const errorMsg = navigatorAddressIsValid ? undefined : invalidAddressMsg;
        const canGoBackInHistory = this.#history.canRollback();
        const canGoForwardInHistory = this.#history.canRollover();
        const highlightedMemoryAreas = this.#highlightInfo ? [this.#highlightInfo] : [];
        const focusedMemoryHighlight = this.#getSmallestEnclosingMemoryHighlight(highlightedMemoryAreas, this.#address);
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="view">
        <${_LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName}
          .data=${{ address: navigatorAddressToShow, valid: navigatorAddressIsValid, mode: this.#currentNavigatorMode, error: errorMsg, canGoBackInHistory, canGoForwardInHistory }}
          @refreshrequested=${this.#onRefreshRequest}
          @addressinputchanged=${this.#onAddressChange}
          @pagenavigation=${this.#navigatePage}
          @historynavigation=${this.#navigateHistory}></${_LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName}>
          <${_LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName}
          .data=${{ highlightInfos: highlightedMemoryAreas, focusedMemoryHighlight: focusedMemoryHighlight }}
          @jumptohighlightedmemory=${this.#onJumpToAddress}>
          </${_LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName}>
        <${_LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName}
          .data=${{
            memory: this.#memory.slice(start - this.#memoryOffset, end - this.#memoryOffset),
            address: this.#address, memoryOffset: start,
            focus: this.#currentNavigatorMode === "Submitted" /* Mode.Submitted */,
            highlightInfo: this.#highlightInfo,
            focusedMemoryHighlight: focusedMemoryHighlight
        }}
          @byteselected=${this.#onByteSelected}
          @resize=${this.#resize}>
        </${_LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName}>
      </div>
      <div class="value-interpreter">
        <${_LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName}
          .data=${{
            value: this.#memory.slice(this.#address - this.#memoryOffset, this.#address + _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.VALUE_INTEPRETER_MAX_NUM_BYTES).buffer,
            valueTypes: this.#valueTypes,
            valueTypeModes: this.#valueTypeModes,
            endianness: this.#endianness,
            memoryLength: this.#outerMemoryLength
        }}
          @valuetypetoggled=${this.#onValueTypeToggled}
          @valuetypemodechanged=${this.#onValueTypeModeChanged}
          @endiannesschanged=${this.#onEndiannessChanged}
          @jumptopointeraddress=${this.#onJumpToAddress}
          >
        </${_LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName}/>
      </div>
      `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
    #onJumpToAddress(e) {
        // Stop event from bubbling up, since no element further up needs the event.
        e.stopPropagation();
        this.#currentNavigatorMode = "Submitted" /* Mode.Submitted */;
        const addressInRange = Math.max(0, Math.min(e.data, this.#outerMemoryLength - 1));
        this.#jumpToAddress(addressInRange);
    }
    #onRefreshRequest() {
        const { start, end } = this.#getPageRangeForAddress(this.#address, this.#numBytesPerPage);
        this.dispatchEvent(new MemoryRequestEvent(start, end, this.#address));
    }
    #onByteSelected(e) {
        this.#currentNavigatorMode = "Submitted" /* Mode.Submitted */;
        const addressInRange = Math.max(0, Math.min(e.data, this.#outerMemoryLength - 1));
        this.#jumpToAddress(addressInRange);
    }
    #createSettings() {
        return { valueTypes: this.#valueTypes, modes: this.#valueTypeModes, endianness: this.#endianness };
    }
    #onEndiannessChanged(e) {
        this.#endianness = e.data;
        this.dispatchEvent(new SettingsChangedEvent(this.#createSettings()));
        this.#render();
    }
    #isValidAddress(address) {
        const newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
        return newAddress !== undefined && newAddress >= 0 && newAddress < this.#outerMemoryLength;
    }
    #onAddressChange(e) {
        const { address, mode } = e.data;
        const isValid = this.#isValidAddress(address);
        const newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
        this.#currentNavigatorAddressLine = address;
        if (newAddress !== undefined && isValid) {
            this.#currentNavigatorMode = mode;
            this.#jumpToAddress(newAddress);
            return;
        }
        if (mode === "Submitted" /* Mode.Submitted */ && !isValid) {
            this.#currentNavigatorMode = "InvalidSubmit" /* Mode.InvalidSubmit */;
        }
        else {
            this.#currentNavigatorMode = "Edit" /* Mode.Edit */;
        }
        this.#render();
    }
    #onValueTypeToggled(e) {
        const { type, checked } = e.data;
        if (checked) {
            this.#valueTypes.add(type);
        }
        else {
            this.#valueTypes.delete(type);
        }
        this.dispatchEvent(new SettingsChangedEvent(this.#createSettings()));
        this.#render();
    }
    #onValueTypeModeChanged(e) {
        e.stopImmediatePropagation();
        const { type, mode } = e.data;
        this.#valueTypeModes.set(type, mode);
        this.dispatchEvent(new SettingsChangedEvent(this.#createSettings()));
        this.#render();
    }
    #navigateHistory(e) {
        return e.data === "Forward" /* Navigation.Forward */ ? this.#history.rollover() : this.#history.rollback();
    }
    #navigatePage(e) {
        const newAddress = e.data === "Forward" /* Navigation.Forward */ ? this.#address + this.#numBytesPerPage : this.#address - this.#numBytesPerPage;
        const addressInRange = Math.max(0, Math.min(newAddress, this.#outerMemoryLength - 1));
        this.#jumpToAddress(addressInRange);
    }
    #jumpToAddress(address) {
        if (address < 0 || address >= this.#outerMemoryLength) {
            console.warn(`Specified address is out of bounds: ${address}`);
            return;
        }
        this.#setAddress(address);
        this.#update();
    }
    #getPageRangeForAddress(address, numBytesPerPage) {
        const pageNumber = Math.floor(address / numBytesPerPage);
        const pageStartAddress = pageNumber * numBytesPerPage;
        const pageEndAddress = Math.min(pageStartAddress + numBytesPerPage, this.#outerMemoryLength);
        return { start: pageStartAddress, end: pageEndAddress };
    }
    #resize(event) {
        this.#numBytesPerPage = event.data;
        this.#update();
    }
    #update() {
        const { start, end } = this.#getPageRangeForAddress(this.#address, this.#numBytesPerPage);
        if (start < this.#memoryOffset || end > this.#memoryOffset + this.#memory.length) {
            this.dispatchEvent(new MemoryRequestEvent(start, end, this.#address));
        }
        else {
            this.#render();
        }
    }
    #setAddress(address) {
        // If we are already showing the address that is requested, no need to act upon it.
        if (this.#address === address) {
            return;
        }
        const historyEntry = new AddressHistoryEntry(address, () => this.#jumpToAddress(address));
        this.#history.push(historyEntry);
        this.#address = address;
        this.dispatchEvent(new AddressChangedEvent(this.#address));
    }
    // Returns the highlightInfo with the smallest size property that encloses the provided address.
    // If there are multiple smallest enclosing highlights, we pick the one appearing the earliest in highlightedMemoryAreas.
    // If no such highlightInfo exists, it returns undefined.
    //
    // Selecting the smallest enclosing memory highlight is a heuristic that aims to pick the
    // most specific highlight given a provided address. This way, objects contained in other objects are
    // potentially still accessible.
    #getSmallestEnclosingMemoryHighlight(highlightedMemoryAreas, address) {
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
    }
}
customElements.define('devtools-linear-memory-inspector-inspector', LinearMemoryInspector);
//# sourceMappingURL=LinearMemoryInspector.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js":
/*!****************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryNavigator.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressInputChangedEvent: () => (/* binding */ AddressInputChangedEvent),
/* harmony export */   HistoryNavigationEvent: () => (/* binding */ HistoryNavigationEvent),
/* harmony export */   LinearMemoryNavigator: () => (/* binding */ LinearMemoryNavigator),
/* harmony export */   PageNavigationEvent: () => (/* binding */ PageNavigationEvent),
/* harmony export */   RefreshRequestedEvent: () => (/* binding */ RefreshRequestedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryNavigator.css.js */ "./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over a valid memory address (e.g. 0x0) in the address line in the Linear memory inspector.
     */
    enterAddress: 'Enter address',
    /**
     *@description Tooltip text that appears when hovering over the button to go back in history in the Linear Memory Navigator
     */
    goBackInAddressHistory: 'Go back in address history',
    /**
     *@description Tooltip text that appears when hovering over the button to go forward in history in the Linear Memory Navigator
     */
    goForwardInAddressHistory: 'Go forward in address history',
    /**
     *@description Tooltip text that appears when hovering over the page back icon in the Linear Memory Navigator
     */
    previousPage: 'Previous page',
    /**
     *@description Tooltip text that appears when hovering over the next page icon in the Linear Memory Navigator
     */
    nextPage: 'Next page',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryNavigator.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
class AddressInputChangedEvent extends Event {
    static eventName = 'addressinputchanged';
    data;
    constructor(address, mode) {
        super(AddressInputChangedEvent.eventName);
        this.data = { address, mode };
    }
}
class PageNavigationEvent extends Event {
    static eventName = 'pagenavigation';
    data;
    constructor(navigation) {
        super(PageNavigationEvent.eventName, {});
        this.data = navigation;
    }
}
class HistoryNavigationEvent extends Event {
    static eventName = 'historynavigation';
    data;
    constructor(navigation) {
        super(HistoryNavigationEvent.eventName, {});
        this.data = navigation;
    }
}
class RefreshRequestedEvent extends Event {
    static eventName = 'refreshrequested';
    constructor() {
        super(RefreshRequestedEvent.eventName, {});
    }
}
class LinearMemoryNavigator extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-inspector-navigator`;
    #shadow = this.attachShadow({ mode: 'open' });
    #address = '0';
    #error = undefined;
    #valid = true;
    #canGoBackInHistory = false;
    #canGoForwardInHistory = false;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_linearMemoryNavigator_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }
    set data(data) {
        this.#address = data.address;
        this.#error = data.error;
        this.#valid = data.valid;
        this.#canGoBackInHistory = data.canGoBackInHistory;
        this.#canGoForwardInHistory = data.canGoForwardInHistory;
        this.#render();
        const addressInput = this.#shadow.querySelector('.address-input');
        if (addressInput) {
            if (data.mode === "Submitted" /* Mode.Submitted */) {
                addressInput.blur();
            }
            else if (data.mode === "InvalidSubmit" /* Mode.InvalidSubmit */) {
                addressInput.select();
            }
        }
    }
    #render() {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        const result = html `
      <div class="navigator">
        <div class="navigator-item">
          ${this.#createButton({ icon: 'undo', title: i18nString(UIStrings.goBackInAddressHistory),
            event: new HistoryNavigationEvent("Backward" /* Navigation.Backward */), enabled: this.#canGoBackInHistory,
            jslogContext: 'linear-memory-inspector.history-back' })}
          ${this.#createButton({ icon: 'redo', title: i18nString(UIStrings.goForwardInAddressHistory),
            event: new HistoryNavigationEvent("Forward" /* Navigation.Forward */), enabled: this.#canGoForwardInHistory,
            jslogContext: 'linear-memory-inspector.history-forward' })}
        </div>
        <div class="navigator-item">
          ${this.#createButton({ icon: 'chevron-left', title: i18nString(UIStrings.previousPage),
            event: new PageNavigationEvent("Backward" /* Navigation.Backward */), enabled: true,
            jslogContext: 'linear-memory-inspector.previous-page' })}
          ${this.#createAddressInput()}
          ${this.#createButton({ icon: 'chevron-right', title: i18nString(UIStrings.nextPage),
            event: new PageNavigationEvent("Forward" /* Navigation.Forward */), enabled: true,
            jslogContext: 'linear-memory-inspector.next-page' })}
        </div>
        ${this.#createButton({ icon: 'refresh', title: i18nString(UIStrings.refresh),
            event: new RefreshRequestedEvent(), enabled: true,
            jslogContext: 'linear-memory-inspector.refresh' })}
      </div>
      `;
        render(result, this.#shadow, { host: this });
        // clang-format on
    }
    #createAddressInput() {
        const classMap = {
            'address-input': true,
            invalid: !this.#valid,
        };
        return html `
      <input class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap)} data-input="true" .value=${this.#address}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField('linear-memory-inspector.address').track({
            change: true,
        })}
        title=${this.#valid ? i18nString(UIStrings.enterAddress) : this.#error} @change=${this.#onAddressChange.bind(this, "Submitted" /* Mode.Submitted */)} @input=${this.#onAddressChange.bind(this, "Edit" /* Mode.Edit */)}/>`;
    }
    #onAddressChange(mode, event) {
        const addressInput = event.target;
        this.dispatchEvent(new AddressInputChangedEvent(addressInput.value, mode));
    }
    #createButton(data) {
        return html `
      <button class="navigator-button" ?disabled=${!data.enabled}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action().track({ click: true, keydown: 'Enter' }).context(data.jslogContext)}
        data-button=${data.event.type} title=${data.title}
        @click=${this.dispatchEvent.bind(this, data.event)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name=${data.icon}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
      </button>`;
    }
}
customElements.define('devtools-linear-memory-inspector-navigator', LinearMemoryNavigator);
//# sourceMappingURL=LinearMemoryNavigator.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js":
/*!****************************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js ***!
  \****************************************************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.highlight-chip-list {
  min-height: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  margin: 8px 0;
  gap: 8px;
  row-gap: 6px;
}

.highlight-chip {
  background: var(--sys-color-cdt-base-container);
  border: 1px solid var(--sys-color-divider);
  height: 18px;
  border-radius: 4px;
  flex: 0 0 auto;
  max-width: 250px;
  position: relative;
  padding: 0 6px;
}

.highlight-chip:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.delete-highlight-container {
  display: none;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  width: 24px;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button {
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-highlight-button:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  border-radius: 50%;
}

.jump-to-highlight-button {
  cursor: pointer;
  padding: 0;
  border: none;
  background: none;
  height: 100%;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.delete-highlight-button devtools-icon {
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.source-code {
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--sys-color-on-surface);
}

.value {
  color: var(--sys-color-token-tag);
}

.separator {
  white-space: pre;
  flex-shrink: 0;
}

.highlight-chip.focused {
  outline: 2px solid var(--sys-color-state-focus-ring);
  outline-offset: 2px;
}

.highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(241 243 244) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

.highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(231 241 253) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip:hover > .delete-highlight-container {
  display: flex;
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(41 42 45) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

:host-context(.theme-with-dark-background) .highlight-chip.focused:hover > .delete-highlight-container {
  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */
  background: linear-gradient(90deg, transparent 0%, rgb(48 55 68) 25%); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=linearMemoryHighlightChipList.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryInspector.css.js":
/*!********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryInspector.css.js ***!
  \********************************************************************************/
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

.view {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  padding: 9px 12px 9px 7px;
}

devtools-linear-memory-inspector-viewer {
  justify-content: center;
}

devtools-linear-memory-inspector-navigator + devtools-linear-memory-inspector-viewer {
  margin-top: 12px;
}

.value-interpreter {
  display: flex;
}

/*# sourceURL=linearMemoryInspector.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js":
/*!********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryNavigator.css.js ***!
  \********************************************************************************/
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

.navigator {
  min-height: 24px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  background-color: var(--sys-color-cdt-base-container);
  color: var(--sys-color-on-surface);
}

.navigator-item {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}

.address-input {
  text-align: center;
  outline: none;
  color: var(--sys-color-on-surface);
  border: 1px solid var(--sys-color-neutral-outline);
  background: transparent;
}

.address-input.invalid {
  color: var(--sys-color-error);
}

.navigator-button {
  display: flex;
  width: 20px;
  height: 20px;
  background: transparent;
  overflow: hidden;
  border: none;
  padding: 0;
  outline: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navigator-button:disabled devtools-icon {
  opacity: 50%;
}

.navigator-button:enabled:hover devtools-icon {
  color: var(--icon-default-hover);
}

.navigator-button:enabled:focus devtools-icon {
  color: var(--icon-default-hover);
}

/*# sourceURL=linearMemoryNavigator.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);