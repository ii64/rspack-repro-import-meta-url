"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_LinearMemoryViewer_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js":
/*!*********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js ***!
  \*********************************************************************************/
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
//# sourceMappingURL=LinearMemoryInspectorUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js":
/*!*************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryViewer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteSelectedEvent: () => (/* binding */ ByteSelectedEvent),
/* harmony export */   LinearMemoryViewer: () => (/* binding */ LinearMemoryViewer),
/* harmony export */   ResizeEvent: () => (/* binding */ ResizeEvent)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _linearMemoryViewer_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linearMemoryViewer.css.js */ "./panels/linear_memory_inspector/components/linearMemoryViewer.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class ByteSelectedEvent extends Event {
    static eventName = 'byteselected';
    data;
    constructor(address) {
        super(ByteSelectedEvent.eventName);
        this.data = address;
    }
}
class ResizeEvent extends Event {
    static eventName = 'resize';
    data;
    constructor(numBytesPerPage) {
        super(ResizeEvent.eventName);
        this.data = numBytesPerPage;
    }
}
const BYTE_GROUP_MARGIN = 8;
const BYTE_GROUP_SIZE = 4;
class LinearMemoryViewer extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-linear-memory-inspector-viewer`;
    #shadow = this.attachShadow({ mode: 'open' });
    #resizeObserver = new ResizeObserver(() => this.#resize());
    #isObservingResize = false;
    #memory = new Uint8Array();
    #address = 0;
    #memoryOffset = 0;
    #highlightInfo;
    #focusedMemoryHighlight;
    #numRows = 1;
    #numBytesInRow = BYTE_GROUP_SIZE;
    #focusOnByte = true;
    #lastKeyUpdateSent = undefined;
    set data(data) {
        if (data.address < data.memoryOffset || data.address > data.memoryOffset + data.memory.length || data.address < 0) {
            throw new Error('Address is out of bounds.');
        }
        if (data.memoryOffset < 0) {
            throw new Error('Memory offset has to be greater or equal to zero.');
        }
        this.#memory = data.memory;
        this.#address = data.address;
        this.#highlightInfo = data.highlightInfo;
        this.#focusedMemoryHighlight = data.focusedMemoryHighlight;
        this.#memoryOffset = data.memoryOffset;
        this.#focusOnByte = data.focus;
        this.#update();
    }
    connectedCallback() {
        this.style.setProperty('--byte-group-margin', `${BYTE_GROUP_MARGIN}px`);
        this.#shadow.adoptedStyleSheets = [_linearMemoryViewer_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
    }
    disconnectedCallback() {
        this.#isObservingResize = false;
        this.#resizeObserver.disconnect();
    }
    #update() {
        this.#updateDimensions();
        this.#render();
        this.#focusOnView();
        this.#engageResizeObserver();
    }
    #focusOnView() {
        if (this.#focusOnByte) {
            const view = this.#shadow.querySelector('.view');
            if (view) {
                view.focus();
            }
        }
    }
    #resize() {
        this.#update();
        this.dispatchEvent(new ResizeEvent(this.#numBytesInRow * this.#numRows));
    }
    /** Recomputes the number of rows and (byte) columns that fit into the current view. */
    #updateDimensions() {
        if (this.clientWidth === 0 || this.clientHeight === 0 || !this.shadowRoot) {
            this.#numBytesInRow = BYTE_GROUP_SIZE;
            this.#numRows = 1;
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
            this.#numBytesInRow = BYTE_GROUP_SIZE;
            this.#numRows = 1;
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
            this.#numBytesInRow = BYTE_GROUP_SIZE;
            this.#numRows = 1;
            return;
        }
        this.#numBytesInRow = Math.floor(widthToFill / groupWidth) * BYTE_GROUP_SIZE;
        this.#numRows = Math.floor(this.clientHeight / rowElement.clientHeight);
    }
    #engageResizeObserver() {
        if (!this.#resizeObserver || this.#isObservingResize) {
            return;
        }
        this.#resizeObserver.observe(this);
        this.#isObservingResize = true;
    }
    #render() {
        const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section()
            .track({ keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|PageUp|PageDown' })
            .context('linear-memory-inspector.viewer');
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      <div class="view" tabindex="0" @keydown=${this.#onKeyDown} jslog=${jslog}>
        ${this.#renderView()}
      </div>
      `, this.#shadow, { host: this });
    }
    #onKeyDown(event) {
        const keyboardEvent = event;
        let newAddress = undefined;
        if (keyboardEvent.code === 'ArrowUp') {
            newAddress = this.#address - this.#numBytesInRow;
        }
        else if (keyboardEvent.code === 'ArrowDown') {
            newAddress = this.#address + this.#numBytesInRow;
        }
        else if (keyboardEvent.code === 'ArrowLeft') {
            newAddress = this.#address - 1;
        }
        else if (keyboardEvent.code === 'ArrowRight') {
            newAddress = this.#address + 1;
        }
        else if (keyboardEvent.code === 'PageUp') {
            newAddress = this.#address - this.#numBytesInRow * this.#numRows;
        }
        else if (keyboardEvent.code === 'PageDown') {
            newAddress = this.#address + this.#numBytesInRow * this.#numRows;
        }
        if (newAddress !== undefined && newAddress !== this.#lastKeyUpdateSent) {
            this.#lastKeyUpdateSent = newAddress;
            this.dispatchEvent(new ByteSelectedEvent(newAddress));
        }
    }
    #renderView() {
        const itemTemplates = [];
        for (let i = 0; i < this.#numRows; ++i) {
            itemTemplates.push(this.#renderRow(i));
        }
        return html `${itemTemplates}`;
    }
    #renderRow(row) {
        const { startIndex, endIndex } = { startIndex: row * this.#numBytesInRow, endIndex: (row + 1) * this.#numBytesInRow };
        const classMap = {
            address: true,
            selected: Math.floor((this.#address - this.#memoryOffset) / this.#numBytesInRow) === row,
        };
        return html `
    <div class="row">
      <span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)}>${(0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({ number: startIndex + this.#memoryOffset, pad: 8, prefix: false })}</span>
      <span class="divider"></span>
      ${this.#renderByteValues(startIndex, endIndex)}
      <span class="divider"></span>
      ${this.#renderCharacterValues(startIndex, endIndex)}
    </div>
    `;
    }
    #renderByteValues(startIndex, endIndex) {
        const cells = [];
        for (let i = startIndex; i < endIndex; ++i) {
            const actualIndex = i + this.#memoryOffset;
            // Add margin after each group of bytes of size byteGroupSize.
            const addMargin = i !== startIndex && (i - startIndex) % BYTE_GROUP_SIZE === 0;
            const selected = i === this.#address - this.#memoryOffset;
            const shouldBeHighlighted = this.#shouldBeHighlighted(actualIndex);
            const focusedMemoryArea = this.#isFocusedArea(actualIndex);
            const classMap = {
                'cell': true,
                'byte-cell': true,
                'byte-group-margin': addMargin,
                selected,
                'highlight-area': shouldBeHighlighted,
                'focused-area': focusedMemoryArea,
            };
            const isSelectableCell = i < this.#memory.length;
            const byteValue = isSelectableCell ? html `${(0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({ number: this.#memory[i], pad: 2, prefix: false })}` : '';
            const onSelectedByte = isSelectableCell ? this.#onSelectedByte.bind(this, actualIndex) : '';
            const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.byte-cell').track({ click: true });
            cells.push(html `<span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)} @click=${onSelectedByte} jslog=${jslog}>${byteValue}</span>`);
        }
        return html `${cells}`;
    }
    #renderCharacterValues(startIndex, endIndex) {
        const cells = [];
        for (let i = startIndex; i < endIndex; ++i) {
            const actualIndex = i + this.#memoryOffset;
            const shouldBeHighlighted = this.#shouldBeHighlighted(actualIndex);
            const focusedMemoryArea = this.#isFocusedArea(actualIndex);
            const classMap = {
                'cell': true,
                'text-cell': true,
                selected: this.#address - this.#memoryOffset === i,
                'highlight-area': shouldBeHighlighted,
                'focused-area': focusedMemoryArea,
            };
            const isSelectableCell = i < this.#memory.length;
            const value = isSelectableCell ? html `${this.#toAscii(this.#memory[i])}` : '';
            const onSelectedByte = isSelectableCell ? this.#onSelectedByte.bind(this, i + this.#memoryOffset) : '';
            const jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.text-cell').track({ click: true });
            cells.push(html `<span class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap)} @click=${onSelectedByte} jslog=${jslog}>${value}</span>`);
        }
        return html `${cells}`;
    }
    #toAscii(byte) {
        if (byte >= 20 && byte <= 0x7F) {
            return String.fromCharCode(byte);
        }
        return '.';
    }
    #onSelectedByte(index) {
        this.dispatchEvent(new ByteSelectedEvent(index));
    }
    #shouldBeHighlighted(index) {
        if (this.#highlightInfo === undefined) {
            return false;
        }
        return this.#highlightInfo.startAddress <= index
            && index < this.#highlightInfo.startAddress + this.#highlightInfo.size;
    }
    #isFocusedArea(index) {
        if (!this.#focusedMemoryHighlight) {
            return false;
        }
        return this.#focusedMemoryHighlight.startAddress <= index
            && index < this.#focusedMemoryHighlight.startAddress + this.#focusedMemoryHighlight.size;
    }
}
customElements.define('devtools-linear-memory-inspector-viewer', LinearMemoryViewer);
//# sourceMappingURL=LinearMemoryViewer.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/linearMemoryViewer.css.js":
/*!*****************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/linearMemoryViewer.css.js ***!
  \*****************************************************************************/
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

.view {
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  background: var(--sys-color-cdt-base-container);
  outline: none;
}

.row {
  display: flex;
  height: 20px;
  align-items: center;
}

.cell {
  text-align: center;
  border: 1px solid transparent;
  border-radius: 2px;

  &.focused-area {
    background-color: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }

  &.selected {
    border-color: var(--sys-color-state-focus-ring);
    color: var(--sys-color-on-tonal-container);
    background-color: var(--sys-color-state-focus-select);
  }
}

.byte-cell {
  min-width: 21px;
  color: var(--sys-color-on-surface);
}

.byte-group-margin {
  margin-left: var(--byte-group-margin);
}

.text-cell {
  min-width: 14px;
  color: var(--sys-color-on-surface-subtle);
}

.address {
  color: var(--sys-color-state-disabled);
}

.address.selected {
  font-weight: bold;
  color: var(--sys-color-on-surface);
}

.divider {
  width: 1px;
  height: inherit;
  background-color: var(--sys-color-divider);
  margin: 0 4px;
}

.highlight-area {
  background-color: var(--sys-color-surface-variant);
}

/*# sourceURL=linearMemoryViewer.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);