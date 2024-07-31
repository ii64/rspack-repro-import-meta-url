"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryViewer_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DECIMAL_REGEXP: () => (/* binding */ DECIMAL_REGEXP),
/* harmony export */   HEXADECIMAL_REGEXP: () => (/* binding */ HEXADECIMAL_REGEXP),
/* harmony export */   formatAddress: () => (/* binding */ formatAddress),
/* harmony export */   parseAddress: () => (/* binding */ parseAddress),
/* harmony export */   toHexString: () => (/* binding */ toHexString)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HEXADECIMAL_REGEXP = /^0x[a-fA-F0-9]+$/;
const DECIMAL_REGEXP = /^0$|[1-9]\d*$/;
function toHexString(data) {
    const hex = data.number.toString(16).padStart(data.pad, '0');
    const upperHex = hex.toUpperCase();
    return data.prefix ? '0x' + upperHex : upperHex;
}
function formatAddress(address) {
    return toHexString({ number: address, pad: 8, prefix: true });
}
function parseAddress(address) {
    const hexMatch = address.match(HEXADECIMAL_REGEXP);
    const decMatch = address.match(DECIMAL_REGEXP);
    let newAddress = undefined;
    if (hexMatch && hexMatch[0].length === address.length) {
        newAddress = parseInt(address, 16);
    }
    else if (decMatch && decMatch[0].length === address.length) {
        newAddress = parseInt(address, 10);
    }
    return newAddress;
}


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryViewer.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteSelectedEvent: () => (/* binding */ ByteSelectedEvent),
/* harmony export */   LinearMemoryViewer: () => (/* binding */ LinearMemoryViewer),
/* harmony export */   ResizeEvent: () => (/* binding */ ResizeEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryViewer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _LinearMemoryViewer_instances, _LinearMemoryViewer_shadow, _LinearMemoryViewer_resizeObserver, _LinearMemoryViewer_isObservingResize, _LinearMemoryViewer_memory, _LinearMemoryViewer_address, _LinearMemoryViewer_memoryOffset, _LinearMemoryViewer_highlightInfo, _LinearMemoryViewer_focusedMemoryHighlight, _LinearMemoryViewer_numRows, _LinearMemoryViewer_numBytesInRow, _LinearMemoryViewer_focusOnByte, _LinearMemoryViewer_lastKeyUpdateSent, _LinearMemoryViewer_update, _LinearMemoryViewer_focusOnView, _LinearMemoryViewer_resize, _LinearMemoryViewer_updateDimensions, _LinearMemoryViewer_engageResizeObserver, _LinearMemoryViewer_render, _LinearMemoryViewer_onKeyDown, _LinearMemoryViewer_renderView, _LinearMemoryViewer_renderRow, _LinearMemoryViewer_renderByteValues, _LinearMemoryViewer_renderCharacterValues, _LinearMemoryViewer_toAscii, _LinearMemoryViewer_onSelectedByte, _LinearMemoryViewer_shouldBeHighlighted, _LinearMemoryViewer_isFocusedArea;




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class ByteSelectedEvent extends Event {
    constructor(address) {
        super(ByteSelectedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = address;
    }
}
Object.defineProperty(ByteSelectedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'byteselected'
});
class ResizeEvent extends Event {
    constructor(numBytesPerPage) {
        super(ResizeEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = numBytesPerPage;
    }
}
Object.defineProperty(ResizeEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'resize'
});
const BYTE_GROUP_MARGIN = 8;
const BYTE_GROUP_SIZE = 4;
class LinearMemoryViewer extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryViewer_instances.add(this);
        _LinearMemoryViewer_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryViewer_resizeObserver.set(this, new ResizeObserver(() => __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_resize).call(this)));
        _LinearMemoryViewer_isObservingResize.set(this, false);
        _LinearMemoryViewer_memory.set(this, new Uint8Array());
        _LinearMemoryViewer_address.set(this, 0);
        _LinearMemoryViewer_memoryOffset.set(this, 0);
        _LinearMemoryViewer_highlightInfo.set(this, void 0);
        _LinearMemoryViewer_focusedMemoryHighlight.set(this, void 0);
        _LinearMemoryViewer_numRows.set(this, 1);
        _LinearMemoryViewer_numBytesInRow.set(this, BYTE_GROUP_SIZE);
        _LinearMemoryViewer_focusOnByte.set(this, true);
        _LinearMemoryViewer_lastKeyUpdateSent.set(this, undefined);
    }
    set data(data) {
        if (data.address < data.memoryOffset || data.address > data.memoryOffset + data.memory.length || data.address < 0) {
            throw new Error('Address is out of bounds.');
        }
        if (data.memoryOffset < 0) {
            throw new Error('Memory offset has to be greater or equal to zero.');
        }
        __classPrivateFieldSet(this, _LinearMemoryViewer_memory, data.memory, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_address, data.address, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_highlightInfo, data.highlightInfo, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_focusedMemoryHighlight, data.focusedMemoryHighlight, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_memoryOffset, data.memoryOffset, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_focusOnByte, data.focus, "f");
        __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_update).call(this);
    }
    connectedCallback() {
        this.style.setProperty('--byte-group-margin', `${BYTE_GROUP_MARGIN}px`);
        __classPrivateFieldGet(this, _LinearMemoryViewer_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryViewer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    disconnectedCallback() {
        __classPrivateFieldSet(this, _LinearMemoryViewer_isObservingResize, false, "f");
        __classPrivateFieldGet(this, _LinearMemoryViewer_resizeObserver, "f").disconnect();
    }
}
_LinearMemoryViewer_shadow = new WeakMap(), _LinearMemoryViewer_resizeObserver = new WeakMap(), _LinearMemoryViewer_isObservingResize = new WeakMap(), _LinearMemoryViewer_memory = new WeakMap(), _LinearMemoryViewer_address = new WeakMap(), _LinearMemoryViewer_memoryOffset = new WeakMap(), _LinearMemoryViewer_highlightInfo = new WeakMap(), _LinearMemoryViewer_focusedMemoryHighlight = new WeakMap(), _LinearMemoryViewer_numRows = new WeakMap(), _LinearMemoryViewer_numBytesInRow = new WeakMap(), _LinearMemoryViewer_focusOnByte = new WeakMap(), _LinearMemoryViewer_lastKeyUpdateSent = new WeakMap(), _LinearMemoryViewer_instances = new WeakSet(), _LinearMemoryViewer_update = function _LinearMemoryViewer_update() {
    __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_updateDimensions).call(this);
    __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_render).call(this);
    __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_focusOnView).call(this);
    __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_engageResizeObserver).call(this);
}, _LinearMemoryViewer_focusOnView = function _LinearMemoryViewer_focusOnView() {
    if (__classPrivateFieldGet(this, _LinearMemoryViewer_focusOnByte, "f")) {
        const view = __classPrivateFieldGet(this, _LinearMemoryViewer_shadow, "f").querySelector('.view');
        if (view) {
            view.focus();
        }
    }
}, _LinearMemoryViewer_resize = function _LinearMemoryViewer_resize() {
    __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_update).call(this);
    this.dispatchEvent(new ResizeEvent(__classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f") * __classPrivateFieldGet(this, _LinearMemoryViewer_numRows, "f")));
}, _LinearMemoryViewer_updateDimensions = function _LinearMemoryViewer_updateDimensions() {
    if (this.clientWidth === 0 || this.clientHeight === 0 || !this.shadowRoot) {
        __classPrivateFieldSet(this, _LinearMemoryViewer_numBytesInRow, BYTE_GROUP_SIZE, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_numRows, 1, "f");
        return;
    }
    // We initially just plot one row with one byte group (here: byte group size of 4).
    // Depending on that initially plotted row we can determine how many rows and
    // bytes per row we can fit.
    // >    0000000 | b0 b1 b2 b4 | a0 a1 a2 a3    <
    //      ^-------^ ^-^           ^-^
    //          |     byteCellWidth textCellWidth
    //          |
    //     addressTextAndDividerWidth
    //  ^--^   +     ^----------------------------^
    //      widthToFill
    const firstByteCell = this.shadowRoot.querySelector('.byte-cell');
    const textCell = this.shadowRoot.querySelector('.text-cell');
    const divider = this.shadowRoot.querySelector('.divider');
    const rowElement = this.shadowRoot.querySelector('.row');
    const addressText = this.shadowRoot.querySelector('.address');
    if (!firstByteCell || !textCell || !divider || !rowElement || !addressText) {
        __classPrivateFieldSet(this, _LinearMemoryViewer_numBytesInRow, BYTE_GROUP_SIZE, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_numRows, 1, "f");
        return;
    }
    // Calculate the width required for each (unsplittable) group of bytes.
    const byteCellWidth = firstByteCell.getBoundingClientRect().width;
    const textCellWidth = textCell.getBoundingClientRect().width;
    const groupWidth = BYTE_GROUP_SIZE * (byteCellWidth + textCellWidth) + BYTE_GROUP_MARGIN;
    // Calculate the width to fill.
    const dividerWidth = divider.getBoundingClientRect().width;
    const addressTextAndDividerWidth = firstByteCell.getBoundingClientRect().left - addressText.getBoundingClientRect().left;
    // this.clientWidth is rounded, while the other values are not. Subtract 1 to make
    // sure that we correctly calculate the widths.
    const widthToFill = this.clientWidth - 1 - addressTextAndDividerWidth - dividerWidth;
    if (widthToFill < groupWidth) {
        __classPrivateFieldSet(this, _LinearMemoryViewer_numBytesInRow, BYTE_GROUP_SIZE, "f");
        __classPrivateFieldSet(this, _LinearMemoryViewer_numRows, 1, "f");
        return;
    }
    __classPrivateFieldSet(this, _LinearMemoryViewer_numBytesInRow, Math.floor(widthToFill / groupWidth) * BYTE_GROUP_SIZE, "f");
    __classPrivateFieldSet(this, _LinearMemoryViewer_numRows, Math.floor(this.clientHeight / rowElement.clientHeight), "f");
}, _LinearMemoryViewer_engageResizeObserver = function _LinearMemoryViewer_engageResizeObserver() {
    if (!__classPrivateFieldGet(this, _LinearMemoryViewer_resizeObserver, "f") || __classPrivateFieldGet(this, _LinearMemoryViewer_isObservingResize, "f")) {
        return;
    }
    __classPrivateFieldGet(this, _LinearMemoryViewer_resizeObserver, "f").observe(this);
    __classPrivateFieldSet(this, _LinearMemoryViewer_isObservingResize, true, "f");
}, _LinearMemoryViewer_render = function _LinearMemoryViewer_render() {
    const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section()
        .track({ keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|PageUp|PageDown' })
        .context('linear-memory-inspector.viewer');
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      <div class="view" tabindex="0" @keydown=${__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_onKeyDown)} jslog=${jslog}>
        ${__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_renderView).call(this)}
      </div>
      `, __classPrivateFieldGet(this, _LinearMemoryViewer_shadow, "f"), { host: this });
}, _LinearMemoryViewer_onKeyDown = function _LinearMemoryViewer_onKeyDown(event) {
    const keyboardEvent = event;
    let newAddress = undefined;
    if (keyboardEvent.code === 'ArrowUp') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f");
    }
    else if (keyboardEvent.code === 'ArrowDown') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") + __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f");
    }
    else if (keyboardEvent.code === 'ArrowLeft') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - 1;
    }
    else if (keyboardEvent.code === 'ArrowRight') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") + 1;
    }
    else if (keyboardEvent.code === 'PageUp') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f") * __classPrivateFieldGet(this, _LinearMemoryViewer_numRows, "f");
    }
    else if (keyboardEvent.code === 'PageDown') {
        newAddress = __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") + __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f") * __classPrivateFieldGet(this, _LinearMemoryViewer_numRows, "f");
    }
    if (newAddress !== undefined && newAddress !== __classPrivateFieldGet(this, _LinearMemoryViewer_lastKeyUpdateSent, "f")) {
        __classPrivateFieldSet(this, _LinearMemoryViewer_lastKeyUpdateSent, newAddress, "f");
        this.dispatchEvent(new ByteSelectedEvent(newAddress));
    }
}, _LinearMemoryViewer_renderView = function _LinearMemoryViewer_renderView() {
    const itemTemplates = [];
    for (let i = 0; i < __classPrivateFieldGet(this, _LinearMemoryViewer_numRows, "f"); ++i) {
        itemTemplates.push(__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_renderRow).call(this, i));
    }
    return html `${itemTemplates}`;
}, _LinearMemoryViewer_renderRow = function _LinearMemoryViewer_renderRow(row) {
    const { startIndex, endIndex } = { startIndex: row * __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f"), endIndex: (row + 1) * __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f") };
    const classMap = {
        address: true,
        selected: Math.floor((__classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f")) / __classPrivateFieldGet(this, _LinearMemoryViewer_numBytesInRow, "f")) === row,
    };
    return html `
    <div class="row">
      <span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)}>${(0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({ number: startIndex + __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f"), pad: 8, prefix: false })}</span>
      <span class="divider"></span>
      ${__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_renderByteValues).call(this, startIndex, endIndex)}
      <span class="divider"></span>
      ${__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_renderCharacterValues).call(this, startIndex, endIndex)}
    </div>
    `;
}, _LinearMemoryViewer_renderByteValues = function _LinearMemoryViewer_renderByteValues(startIndex, endIndex) {
    const cells = [];
    for (let i = startIndex; i < endIndex; ++i) {
        const actualIndex = i + __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f");
        // Add margin after each group of bytes of size byteGroupSize.
        const addMargin = i !== startIndex && (i - startIndex) % BYTE_GROUP_SIZE === 0;
        const selected = i === __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f");
        const shouldBeHighlighted = __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_shouldBeHighlighted).call(this, actualIndex);
        const focusedMemoryArea = __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_isFocusedArea).call(this, actualIndex);
        const classMap = {
            'cell': true,
            'byte-cell': true,
            'byte-group-margin': addMargin,
            selected,
            'highlight-area': shouldBeHighlighted,
            'focused-area': focusedMemoryArea,
        };
        const isSelectableCell = i < __classPrivateFieldGet(this, _LinearMemoryViewer_memory, "f").length;
        const byteValue = isSelectableCell ? html `${(0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({ number: __classPrivateFieldGet(this, _LinearMemoryViewer_memory, "f")[i], pad: 2, prefix: false })}` : '';
        const onSelectedByte = isSelectableCell ? __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_onSelectedByte).bind(this, actualIndex) : '';
        const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.byte-cell').track({ click: true });
        cells.push(html `<span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)} @click=${onSelectedByte} jslog=${jslog}>${byteValue}</span>`);
    }
    return html `${cells}`;
}, _LinearMemoryViewer_renderCharacterValues = function _LinearMemoryViewer_renderCharacterValues(startIndex, endIndex) {
    const cells = [];
    for (let i = startIndex; i < endIndex; ++i) {
        const actualIndex = i + __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f");
        const shouldBeHighlighted = __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_shouldBeHighlighted).call(this, actualIndex);
        const focusedMemoryArea = __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_isFocusedArea).call(this, actualIndex);
        const classMap = {
            'cell': true,
            'text-cell': true,
            selected: __classPrivateFieldGet(this, _LinearMemoryViewer_address, "f") - __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f") === i,
            'highlight-area': shouldBeHighlighted,
            'focused-area': focusedMemoryArea,
        };
        const isSelectableCell = i < __classPrivateFieldGet(this, _LinearMemoryViewer_memory, "f").length;
        const value = isSelectableCell ? html `${__classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_toAscii).call(this, __classPrivateFieldGet(this, _LinearMemoryViewer_memory, "f")[i])}` : '';
        const onSelectedByte = isSelectableCell ? __classPrivateFieldGet(this, _LinearMemoryViewer_instances, "m", _LinearMemoryViewer_onSelectedByte).bind(this, i + __classPrivateFieldGet(this, _LinearMemoryViewer_memoryOffset, "f")) : '';
        const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.text-cell').track({ click: true });
        cells.push(html `<span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)} @click=${onSelectedByte} jslog=${jslog}>${value}</span>`);
    }
    return html `${cells}`;
}, _LinearMemoryViewer_toAscii = function _LinearMemoryViewer_toAscii(byte) {
    if (byte >= 20 && byte <= 0x7F) {
        return String.fromCharCode(byte);
    }
    return '.';
}, _LinearMemoryViewer_onSelectedByte = function _LinearMemoryViewer_onSelectedByte(index) {
    this.dispatchEvent(new ByteSelectedEvent(index));
}, _LinearMemoryViewer_shouldBeHighlighted = function _LinearMemoryViewer_shouldBeHighlighted(index) {
    if (__classPrivateFieldGet(this, _LinearMemoryViewer_highlightInfo, "f") === undefined) {
        return false;
    }
    return __classPrivateFieldGet(this, _LinearMemoryViewer_highlightInfo, "f").startAddress <= index
        && index < __classPrivateFieldGet(this, _LinearMemoryViewer_highlightInfo, "f").startAddress + __classPrivateFieldGet(this, _LinearMemoryViewer_highlightInfo, "f").size;
}, _LinearMemoryViewer_isFocusedArea = function _LinearMemoryViewer_isFocusedArea(index) {
    if (!__classPrivateFieldGet(this, _LinearMemoryViewer_focusedMemoryHighlight, "f")) {
        return false;
    }
    return __classPrivateFieldGet(this, _LinearMemoryViewer_focusedMemoryHighlight, "f").startAddress <= index
        && index < __classPrivateFieldGet(this, _LinearMemoryViewer_focusedMemoryHighlight, "f").startAddress + __classPrivateFieldGet(this, _LinearMemoryViewer_focusedMemoryHighlight, "f").size;
};
Object.defineProperty(LinearMemoryViewer, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-linear-memory-inspector-viewer`
});
customElements.define('devtools-linear-memory-inspector-viewer', LinearMemoryViewer);


/***/ })

}]);