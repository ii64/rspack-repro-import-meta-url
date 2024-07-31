"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryViewer_test_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.test.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryViewer.test.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VIEWER_ADDRESS_SELECTOR: () => (/* binding */ VIEWER_ADDRESS_SELECTOR),
/* harmony export */   VIEWER_BYTE_CELL_SELECTOR: () => (/* binding */ VIEWER_BYTE_CELL_SELECTOR),
/* harmony export */   VIEWER_ROW_SELECTOR: () => (/* binding */ VIEWER_ROW_SELECTOR),
/* harmony export */   VIEWER_TEXT_CELL_SELECTOR: () => (/* binding */ VIEWER_TEXT_CELL_SELECTOR)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const NUM_BYTES_PER_GROUP = 4;
const VIEWER_BYTE_CELL_SELECTOR = '.byte-cell';
const VIEWER_TEXT_CELL_SELECTOR = '.text-cell';
const VIEWER_ROW_SELECTOR = '.row';
const VIEWER_ADDRESS_SELECTOR = '.address';
describe('LinearMemoryViewer', () => {
    async function setUpComponent() {
        const component = createComponent();
        const data = createComponentData();
        component.data = data;
        const event = await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize');
        const numBytesPerPage = event.data;
        assert.isAbove(numBytesPerPage, 4);
        return { component, data };
    }
    async function setUpComponentWithHighlightInfo() {
        const component = createComponent();
        const data = createComponentData();
        const highlightInfo = {
            startAddress: 2,
            size: 21, // A large enough odd number so that the highlight spans mulitple rows.
            type: 'bool[]',
        };
        const dataWithHighlightInfo = {
            ...data,
            highlightInfo: highlightInfo,
        };
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize');
        component.data = dataWithHighlightInfo;
        const event = await eventPromise;
        const numBytesPerPage = event.data;
        assert.isAbove(numBytesPerPage, 4);
        return { component, dataWithHighlightInfo };
    }
    function createComponent() {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        const flexWrapper = document.createElement('div');
        flexWrapper.style.width = '500px';
        flexWrapper.style.height = '500px';
        flexWrapper.style.display = 'flex';
        flexWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(flexWrapper);
        return component;
    }
    function createComponentData() {
        const memory = [];
        for (let i = 0; i < 1000; ++i) {
            memory.push(i);
        }
        const data = {
            memory: new Uint8Array(memory),
            address: 2,
            memoryOffset: 0,
            focus: true,
        };
        return data;
    }
    function getCellsPerRow(component, cellSelector) {
        assert.isNotNull(component.shadowRoot);
        const row = component.shadowRoot.querySelector(VIEWER_ROW_SELECTOR);
        assert.instanceOf(row, HTMLDivElement);
        const cellsPerRow = row.querySelectorAll(cellSelector);
        assert.isNotEmpty(cellsPerRow);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(cellsPerRow, HTMLSpanElement);
        return cellsPerRow;
    }
    function assertSelectedCellIsHighlighted(component, cellSelector, index) {
        assert.isNotNull(component.shadowRoot);
        const selectedCells = component.shadowRoot.querySelectorAll(cellSelector + '.selected');
        assert.lengthOf(selectedCells, 1);
        assert.instanceOf(selectedCells[0], HTMLSpanElement);
        const selectedCell = selectedCells[0];
        const allCells = getCellsPerRow(component, cellSelector);
        assert.isAtLeast(allCells.length, index);
        const cellAtAddress = allCells[index];
        assert.strictEqual(selectedCell, cellAtAddress);
    }
    async function assertEventTriggeredOnArrowNavigation(component, code, expectedAddress) {
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
        const view = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '.view', HTMLDivElement);
        view.dispatchEvent(new KeyboardEvent('keydown', { 'code': code }));
        const event = await eventPromise;
        assert.strictEqual(event.data, expectedAddress);
    }
    it('correctly renders bytes given a memory offset greater than zero', () => {
        const data = createComponentData();
        data.memoryOffset = 1;
        assert.isAbove(data.address, data.memoryOffset);
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        component.data = data;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
        const selectedValue = parseInt(selectedByte.innerText, 16);
        assert.strictEqual(selectedValue, data.memory[data.address - data.memoryOffset]);
    });
    it('triggers an event on resize', async () => {
        const data = createComponentData();
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        component.data = data;
        const thinWrapper = document.createElement('div');
        thinWrapper.style.width = '100px';
        thinWrapper.style.height = '100px';
        thinWrapper.style.display = 'flex';
        thinWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize');
        thinWrapper.style.width = '800px';
        assert.isNotNull(await eventPromise);
    });
    it('renders one address per row', async () => {
        const { component } = await setUpComponent();
        assert.isNotNull(component.shadowRoot);
        const rows = component.shadowRoot.querySelectorAll(VIEWER_ROW_SELECTOR);
        const addresses = component.shadowRoot.querySelectorAll(VIEWER_ADDRESS_SELECTOR);
        assert.isNotEmpty(rows);
        assert.strictEqual(rows.length, addresses.length);
    });
    it('renders addresses depending on the bytes per row', async () => {
        const { component, data } = await setUpComponent();
        const bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        const numBytesPerRow = bytesPerRow.length;
        assert.isNotNull(component.shadowRoot);
        const addresses = component.shadowRoot.querySelectorAll(VIEWER_ADDRESS_SELECTOR);
        assert.isNotEmpty(addresses);
        for (let i = 0, currentAddress = data.memoryOffset; i < addresses.length; currentAddress += numBytesPerRow, ++i) {
            const addressElement = addresses[i];
            assert.instanceOf(addressElement, HTMLSpanElement);
            const hex = currentAddress.toString(16).toUpperCase().padStart(8, '0');
            assert.strictEqual(addressElement.innerText, hex);
        }
    });
    it('renders unsplittable byte group', () => {
        const thinWrapper = document.createElement('div');
        thinWrapper.style.width = '10px';
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        component.data = createComponentData();
        thinWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
        const bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        assert.strictEqual(bytesPerRow.length, NUM_BYTES_PER_GROUP);
    });
    it('renders byte values corresponding to memory set', async () => {
        const { component, data } = await setUpComponent();
        assert.isNotNull(component.shadowRoot);
        const bytes = component.shadowRoot.querySelectorAll(VIEWER_BYTE_CELL_SELECTOR);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(bytes, HTMLSpanElement);
        const memory = data.memory;
        const bytesPerPage = bytes.length;
        const memoryStartAddress = Math.floor(data.address / bytesPerPage) * bytesPerPage;
        assert.isAtMost(bytes.length, memory.length);
        for (let i = 0; i < bytes.length; ++i) {
            const hex = memory[memoryStartAddress + i].toString(16).toUpperCase().padStart(2, '0');
            assert.strictEqual(bytes[i].innerText, hex);
        }
    });
    it('triggers an event on selecting a byte value', async () => {
        const { component, data } = await setUpComponent();
        assert.isNotNull(component.shadowRoot);
        const byte = component.shadowRoot.querySelector(VIEWER_BYTE_CELL_SELECTOR);
        assert.instanceOf(byte, HTMLSpanElement);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
        byte.click();
        const { data: address } = await eventPromise;
        assert.strictEqual(address, data.memoryOffset);
    });
    it('renders as many ascii values as byte values in a row', async () => {
        const { component } = await setUpComponent();
        const bytes = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        const ascii = getCellsPerRow(component, VIEWER_TEXT_CELL_SELECTOR);
        assert.strictEqual(bytes.length, ascii.length);
    });
    it('renders ascii values corresponding to bytes', async () => {
        const { component } = await setUpComponent();
        assert.isNotNull(component.shadowRoot);
        const asciiValues = component.shadowRoot.querySelectorAll(VIEWER_TEXT_CELL_SELECTOR);
        const byteValues = component.shadowRoot.querySelectorAll(VIEWER_BYTE_CELL_SELECTOR);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(asciiValues, HTMLSpanElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(byteValues, HTMLSpanElement);
        assert.strictEqual(byteValues.length, asciiValues.length);
        const smallestPrintableAscii = 20;
        const largestPrintableAscii = 127;
        for (let i = 0; i < byteValues.length; ++i) {
            const byteValue = parseInt(byteValues[i].innerText, 16);
            const asciiText = asciiValues[i].innerText;
            if (byteValue < smallestPrintableAscii || byteValue > largestPrintableAscii) {
                assert.strictEqual(asciiText, '.');
            }
            else {
                assert.strictEqual(asciiText, String.fromCharCode(byteValue).trim());
            }
        }
    });
    it('triggers an event on selecting an ascii value', async () => {
        const { component, data } = await setUpComponent();
        assert.isNotNull(component.shadowRoot);
        const asciiCell = component.shadowRoot.querySelector(VIEWER_TEXT_CELL_SELECTOR);
        assert.instanceOf(asciiCell, HTMLSpanElement);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
        asciiCell.click();
        const { data: address } = await eventPromise;
        assert.strictEqual(address, data.memoryOffset);
    });
    it('highlights selected byte value on setting an address', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        const memory = new Uint8Array([2, 3, 5, 3]);
        const address = 2;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            memory,
            address,
            memoryOffset: 0,
            focus: true,
        };
        assertSelectedCellIsHighlighted(component, VIEWER_BYTE_CELL_SELECTOR, address);
        assertSelectedCellIsHighlighted(component, VIEWER_TEXT_CELL_SELECTOR, address);
        assertSelectedCellIsHighlighted(component, VIEWER_ADDRESS_SELECTOR, 0);
    });
    it('triggers an event on arrow down', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const expectedAddress = addressBefore - 1;
        await assertEventTriggeredOnArrowNavigation(component, 'ArrowLeft', expectedAddress);
    });
    it('triggers an event on arrow right', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const expectedAddress = addressBefore + 1;
        await assertEventTriggeredOnArrowNavigation(component, 'ArrowRight', expectedAddress);
    });
    it('triggers an event on arrow down', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        const numBytesPerRow = bytesPerRow.length;
        const expectedAddress = addressBefore + numBytesPerRow;
        await assertEventTriggeredOnArrowNavigation(component, 'ArrowDown', expectedAddress);
    });
    it('triggers an event on arrow up', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        const numBytesPerRow = bytesPerRow.length;
        const expectedAddress = addressBefore - numBytesPerRow;
        await assertEventTriggeredOnArrowNavigation(component, 'ArrowUp', expectedAddress);
    });
    it('triggers an event on page down', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const numBytesPerPage = bytes.length;
        const expectedAddress = addressBefore + numBytesPerPage;
        await assertEventTriggeredOnArrowNavigation(component, 'PageDown', expectedAddress);
    });
    it('triggers an event on page down', async () => {
        const { component, data } = await setUpComponent();
        const addressBefore = data.address;
        const bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const numBytesPerPage = bytes.length;
        const expectedAddress = addressBefore - numBytesPerPage;
        await assertEventTriggeredOnArrowNavigation(component, 'PageUp', expectedAddress);
    });
    it('does not highlight any bytes when no highlight info set', async () => {
        const { component } = await setUpComponent();
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
        const textCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.text-cell.highlight-area', HTMLSpanElement);
        assert.strictEqual(byteCells.length, 0);
        assert.strictEqual(textCells.length, 0);
    });
    it('highlights correct number of bytes when highlight info set', async () => {
        const { component, dataWithHighlightInfo } = await setUpComponentWithHighlightInfo();
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
        const textCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.text-cell.highlight-area', HTMLSpanElement);
        assert.strictEqual(byteCells.length, dataWithHighlightInfo.highlightInfo.size);
        assert.strictEqual(textCells.length, dataWithHighlightInfo.highlightInfo.size);
    });
    it('highlights byte cells at correct positions when highlight info set', async () => {
        const { component, dataWithHighlightInfo } = await setUpComponentWithHighlightInfo();
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
        for (let i = 0; i < byteCells.length; ++i) {
            const selectedValue = parseInt(byteCells[i].innerText, 16);
            const index = dataWithHighlightInfo.highlightInfo.startAddress - dataWithHighlightInfo.memoryOffset + i;
            assert.strictEqual(selectedValue, dataWithHighlightInfo.memory[index]);
        }
    });
    it('focuses highlighted byte cells when focusedMemoryHighlight provided', async () => {
        const { component, dataWithHighlightInfo } = await setUpComponentWithHighlightInfo();
        const dataWithFocusedMemoryHighlight = {
            ...dataWithHighlightInfo,
            focusedMemoryHighlight: dataWithHighlightInfo.highlightInfo,
        };
        component.data = dataWithFocusedMemoryHighlight;
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.focused', HTMLSpanElement);
        for (let i = 0; i < byteCells.length; ++i) {
            const selectedValue = parseInt(byteCells[i].innerText, 16);
            const index = dataWithHighlightInfo.highlightInfo.startAddress - dataWithHighlightInfo.memoryOffset + i;
            assert.strictEqual(selectedValue, dataWithHighlightInfo.memory[index]);
        }
    });
    it('does not focus highlighted byte cells when no focusedMemoryHighlight provided', async () => {
        const { component, dataWithHighlightInfo } = await setUpComponentWithHighlightInfo();
        const dataWithFocusedMemoryHighlight = {
            ...dataWithHighlightInfo,
            focusedMemoryHighlight: dataWithHighlightInfo.highlightInfo,
        };
        component.data = dataWithFocusedMemoryHighlight;
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.focused', HTMLSpanElement);
        assert.isEmpty(byteCells);
    });
});


/***/ })

}]);