"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryInspector_test_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryInspector.test.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryInspector.test.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
/* harmony import */ var _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.test.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.test.ts");
/* harmony import */ var _LinearMemoryValueInterpreter_test_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.test.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.ts");
/* harmony import */ var _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.test.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.test.ts");
/* harmony import */ var _ValueInterpreterDisplay_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplay.test.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.test.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */







const NAVIGATOR_SELECTOR = 'devtools-linear-memory-inspector-navigator';
const VIEWER_SELECTOR = 'devtools-linear-memory-inspector-viewer';
const INTERPRETER_SELECTOR = 'devtools-linear-memory-inspector-interpreter';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryInspector', () => {
    function getViewer(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, VIEWER_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryViewer.LinearMemoryViewer);
    }
    function getNavigator(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.LinearMemoryNavigator);
    }
    function getValueInterpreter(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, INTERPRETER_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.LinearMemoryValueInterpreter);
    }
    function setUpComponent() {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspector.LinearMemoryInspector();
        const flexWrapper = document.createElement('div');
        flexWrapper.style.width = '500px';
        flexWrapper.style.height = '500px';
        flexWrapper.style.display = 'flex';
        flexWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(flexWrapper);
        const size = 1000;
        const memory = [];
        for (let i = 0; i < size; ++i) {
            memory[i] = i;
        }
        const data = {
            memory: new Uint8Array(memory),
            address: 20,
            memoryOffset: 0,
            outerMemoryLength: memory.length,
            endianness: _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little,
            valueTypes: new Set(_components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping().keys()),
        };
        component.data = data;
        return { component, data };
    }
    function triggerAddressChangedEvent(component, address, mode) {
        const navigator = getNavigator(component);
        const changeEvent = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.AddressInputChangedEvent(address, mode);
        navigator.dispatchEvent(changeEvent);
    }
    function assertUpdatesInNavigator(navigator, expectedAddress, expectedTooltip) {
        const address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        const addressValue = address.value;
        assert.strictEqual(addressValue, expectedAddress);
        assert.strictEqual(address.title, expectedTooltip);
    }
    it('renders the navigator component', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        assert.isNotNull(navigator);
    });
    it('renders the viewer component', () => {
        const { component } = setUpComponent();
        const viewer = getViewer(component);
        assert.isNotNull(viewer);
    });
    it('renders the interpreter component', () => {
        const { component } = setUpComponent();
        const interpreter = getValueInterpreter(component);
        assert.isNotNull(interpreter);
    });
    it('only saves history entries if addresses differ', async () => {
        const { component, data } = setUpComponent();
        // Set the address to zero to avoid the LMI to jump around in terms of addresses
        // before the LMI is completely rendered (it requires two rendering processes,
        // meanwhile our test might have already started).
        data.address = 0;
        component.data = data;
        const navigator = getNavigator(component);
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        const [backwardButton] = buttons;
        const viewer = getViewer(component);
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const byteIndices = [2, 1, 1, 2];
        const expectedHistory = [2, 1, 2];
        for (const index of byteIndices) {
            const byteSelectedPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(viewer, 'byteselected');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(byteCells[index]);
            await byteSelectedPromise;
        }
        const navigatorAddress = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        for (const index of expectedHistory) {
            assert.strictEqual(parseInt(navigatorAddress.value, 16), index);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
        }
    });
    it('can navigate addresses back and forth in history', async () => {
        const { component, data: { address } } = setUpComponent();
        const navigator = getNavigator(component);
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        const [backwardButton, forwardButton] = buttons;
        const viewer = getViewer(component);
        const byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const visitedByteValue = [address];
        const historyLength = Math.min(byteCells.length, 10);
        for (let i = 1; i < historyLength; ++i) {
            const byteSelectedPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(viewer, 'byteselected');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(byteCells[i]);
            const byteSelectedEvent = await byteSelectedPromise;
            visitedByteValue.push(byteSelectedEvent.data);
        }
        for (let i = historyLength - 1; i >= 0; --i) {
            const currentByteValue = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
            assert.strictEqual(parseInt(currentByteValue.innerText, 16), visitedByteValue[i]);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
        }
        for (let i = 0; i < historyLength; ++i) {
            const currentByteValue = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
            assert.strictEqual(parseInt(currentByteValue.innerText, 16), visitedByteValue[i]);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(forwardButton);
        }
    });
    it('can turn the page back and forth', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_PAGE_BUTTON_SELECTOR, HTMLButtonElement);
        const [backwardButton, forwardButton] = buttons;
        const address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        const addressBefore = parseInt(address.value, 16);
        const viewer = getViewer(component);
        const bytesShown = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const numBytesPerPage = bytesShown.length;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(forwardButton);
        let addressAfter = parseInt(address.value, 16);
        let expectedAddressAfter = addressBefore + numBytesPerPage;
        assert.strictEqual(addressAfter, expectedAddressAfter);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
        addressAfter = parseInt(address.value, 16);
        expectedAddressAfter -= numBytesPerPage;
        assert.strictEqual(addressAfter, Math.max(0, expectedAddressAfter));
    });
    it('synchronizes selected addresses in navigator and viewer', () => {
        const { component, data } = setUpComponent();
        const navigator = getNavigator(component);
        const address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        const viewer = getViewer(component);
        const selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
        const actualByteValue = parseInt(selectedByte.innerText, 16);
        const expectedByteValue = data.memory[parseInt(address.value, 16)];
        assert.strictEqual(actualByteValue, expectedByteValue);
    });
    it('can change endianness settings on event', () => {
        const { component } = setUpComponent();
        const interpreter = getValueInterpreter(component);
        const select = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(interpreter, _LinearMemoryValueInterpreter_test_js__WEBPACK_IMPORTED_MODULE_4__.ENDIANNESS_SELECTOR, HTMLSelectElement);
        assert.deepEqual(select.value, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little);
        const endianSetting = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Big;
        const event = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.EndiannessChangedEvent(endianSetting);
        interpreter.dispatchEvent(event);
        assert.deepEqual(select.value, event.data);
    });
    it('updates current address if user triggers a jumptopointeraddress event', () => {
        const { component, data } = setUpComponent();
        data.valueTypes = new Set([_components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueType.Pointer32]);
        data.memory = new Uint8Array([2, 0, 0, 0]);
        data.outerMemoryLength = data.memory.length;
        data.address = 0;
        data.endianness = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little;
        component.data = data;
        const interpreter = getValueInterpreter(component);
        const display = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(interpreter, 'devtools-linear-memory-inspector-interpreter-display', _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay);
        const button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(display, _ValueInterpreterDisplay_test_js__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
        const navigator = getNavigator(component);
        const selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        const actualSelectedByte = parseInt(selectedByte.value, 16);
        const expectedSelectedByte = new DataView(data.memory.buffer).getUint32(0, true);
        assert.strictEqual(actualSelectedByte, expectedSelectedByte);
    });
    it('leaves the navigator address as inputted by user on edit event', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '2', _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Edit);
        assertUpdatesInNavigator(navigator, '2', 'Enter address');
    });
    it('changes navigator address (to hex) on valid user submit event', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '2', _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted);
        assertUpdatesInNavigator(navigator, '0x00000002', 'Enter address');
    });
    it('leaves the navigator address as inputted by user on invalid edit event', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '-2', _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Edit);
        assertUpdatesInNavigator(navigator, '-2', 'Address has to be a number between 0x00000000 and 0x000003E8');
    });
    it('leaves the navigator address as inputted by user on invalid submit event', () => {
        const { component } = setUpComponent();
        const navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '-2', _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted);
        assertUpdatesInNavigator(navigator, '-2', 'Address has to be a number between 0x00000000 and 0x000003E8');
    });
    it('triggers MemoryRequestEvent on refresh', async () => {
        const { component, data } = setUpComponent();
        const navigator = getNavigator(component);
        const viewer = getViewer(component);
        const bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const numBytesPerPage = bytes.length;
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'memoryrequest');
        navigator.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.RefreshRequestedEvent());
        const event = await eventPromise;
        const { start, end, address } = event.data;
        assert.strictEqual(address, data.address);
        assert.isAbove(end, start);
        assert.strictEqual(numBytesPerPage, end - start);
    });
    it('triggers event on address change when byte is selected', async () => {
        const { component, data } = setUpComponent();
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addresschanged');
        const viewer = getViewer(component);
        const bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        const numBytesPerPage = bytes.length;
        const pageNumber = data.address / numBytesPerPage;
        const addressOfFirstByte = pageNumber * numBytesPerPage + 1;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(bytes[1]);
        const event = await eventPromise;
        assert.strictEqual(event.data, addressOfFirstByte);
    });
    it('triggers event on address change when data is set', async () => {
        const { component, data } = setUpComponent();
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addresschanged');
        data.address = 10;
        component.data = data;
        const event = await eventPromise;
        assert.strictEqual(event.data, data.address);
    });
    it('triggers event on settings changed when value type is changed', async () => {
        const { component } = setUpComponent();
        const interpreter = getValueInterpreter(component);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
        const valueType = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueType.Int16;
        interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.ValueTypeToggledEvent(valueType, false));
        const event = await eventPromise;
        assert.isTrue(event.data.valueTypes.size > 1);
        assert.isFalse(event.data.valueTypes.has(valueType));
    });
    it('triggers event on settings changed when value type mode is changed', async () => {
        const { component } = setUpComponent();
        const interpreter = getValueInterpreter(component);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
        const valueType = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueType.Int16;
        const valueTypeMode = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal;
        interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueTypeModeChangedEvent(valueType, valueTypeMode));
        const event = await eventPromise;
        assert.isTrue(event.data.valueTypes.has(valueType));
        assert.strictEqual(event.data.modes.get(valueType), valueTypeMode);
    });
    it('triggers event on settings changed when endianness is changed', async () => {
        const { component } = setUpComponent();
        const interpreter = getValueInterpreter(component);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
        const endianness = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Big;
        interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.EndiannessChangedEvent(endianness));
        const event = await eventPromise;
        assert.strictEqual(event.data.endianness, endianness);
    });
    it('formats a hexadecimal number', () => {
        const number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({ number, pad: 0, prefix: false }), '17');
    });
    it('formats a hexadecimal number and adds padding', () => {
        const number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({ number, pad: 5, prefix: false }), '00017');
    });
    it('formats a hexadecimal number and adds prefix', () => {
        const number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({ number, pad: 5, prefix: true }), '0x00017');
    });
    it('can parse a valid hexadecimal address', () => {
        const address = '0xa';
        const parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, 10);
    });
    it('can parse a valid decimal address', () => {
        const address = '20';
        const parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, 20);
    });
    it('returns undefined on parsing invalid address', () => {
        const address = '20a';
        const parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, undefined);
    });
    it('returns undefined on parsing negative address', () => {
        const address = '-20';
        const parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, undefined);
    });
});


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.test.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.test.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAVIGATOR_ADDRESS_SELECTOR: () => (/* binding */ NAVIGATOR_ADDRESS_SELECTOR),
/* harmony export */   NAVIGATOR_HISTORY_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_HISTORY_BUTTON_SELECTOR),
/* harmony export */   NAVIGATOR_PAGE_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_PAGE_BUTTON_SELECTOR),
/* harmony export */   NAVIGATOR_REFRESH_BUTTON_SELECTOR: () => (/* binding */ NAVIGATOR_REFRESH_BUTTON_SELECTOR)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const NAVIGATOR_ADDRESS_SELECTOR = '[data-input]';
const NAVIGATOR_PAGE_BUTTON_SELECTOR = '[data-button=pagenavigation]';
const NAVIGATOR_HISTORY_BUTTON_SELECTOR = '[data-button=historynavigation]';
const NAVIGATOR_REFRESH_BUTTON_SELECTOR = '[data-button=refreshrequested]';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryNavigator', () => {
    let component;
    beforeEach(renderNavigator);
    function renderNavigator() {
        component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.LinearMemoryNavigator();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            address: '20',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: true,
            canGoForwardInHistory: true,
        };
    }
    async function assertNavigationEvents(eventType) {
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const pageNavigationButtons = shadowRoot.querySelectorAll(`[data-button=${eventType}]`);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(pageNavigationButtons, HTMLButtonElement);
        assert.lengthOf(pageNavigationButtons, 2);
        const navigation = [];
        for (const button of pageNavigationButtons) {
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, eventType);
            button.click();
            const event = await eventPromise;
            navigation.push(event.data);
        }
        assert.deepEqual(navigation, [
            _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Navigation.Backward,
            _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Navigation.Forward,
        ]);
    }
    it('renders navigator address', () => {
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '20');
    });
    it('re-renders address on address change', () => {
        component.data = {
            address: '16',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '16');
    });
    it('sends event when clicking on refresh', async () => {
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'refreshrequested');
        const shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        const refreshButton = shadowRoot.querySelector(NAVIGATOR_REFRESH_BUTTON_SELECTOR);
        assert.instanceOf(refreshButton, HTMLButtonElement);
        refreshButton.click();
        assert.isNotNull(await eventPromise);
    });
    it('sends events when clicking previous and next page', async () => {
        await assertNavigationEvents('historynavigation');
    });
    it('sends events when clicking undo and redo', async () => {
        await assertNavigationEvents('pagenavigation');
    });
    it('disables the previous and next page buttons if specified as not navigatable', () => {
        component.data = {
            address: '0',
            valid: true,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Submitted,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const historyBack = buttons[0];
        const historyForward = buttons[1];
        assert.isTrue(historyBack.disabled);
        assert.isTrue(historyForward.disabled);
    });
    it('shows tooltip on hovering over address', () => {
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, 'Enter address');
    });
    it('shows tooltip with error and selects all text on submitting invalid address input', () => {
        const error = 'Address is invalid';
        const invalidAddress = '60';
        component.data = {
            address: invalidAddress,
            valid: false,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.InvalidSubmit,
            error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
        assert.isNotNull(input.selectionStart);
        assert.isNotNull(input.selectionEnd);
        if (input.selectionEnd !== null && input.selectionStart !== null) {
            const selectionLength = input.selectionEnd - input.selectionStart;
            assert.strictEqual(selectionLength, invalidAddress.length);
        }
    });
    it('shows tooltip with invalid address on hovering over address', () => {
        const error = 'Address is invalid';
        component.data = {
            address: '60',
            valid: false,
            mode: _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.Mode.Edit,
            error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false,
        };
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
    });
    it('shows tooltip on page navigation buttons', () => {
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_PAGE_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const pageBack = buttons[0];
        const pageForward = buttons[1];
        assert.strictEqual(pageBack.title, 'Previous page');
        assert.strictEqual(pageForward.title, 'Next page');
    });
    it('shows tooltip on history navigation buttons', () => {
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        const historyBack = buttons[0];
        const historyForward = buttons[1];
        assert.strictEqual(historyBack.title, 'Go back in address history');
        assert.strictEqual(historyForward.title, 'Go forward in address history');
    });
    it('shows tooltip on refresh button', () => {
        const refreshButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_REFRESH_BUTTON_SELECTOR, HTMLButtonElement);
        assert.strictEqual(refreshButton.title, 'Refresh');
    });
});


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.ts":
/*!********************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENDIANNESS_SELECTOR: () => (/* binding */ ENDIANNESS_SELECTOR)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const DISPLAY_SELECTOR = 'devtools-linear-memory-inspector-interpreter-display';
const SETTINGS_SELECTOR = 'devtools-linear-memory-inspector-interpreter-settings';
const TOOLBAR_SELECTOR = '.settings-toolbar';
const ENDIANNESS_SELECTOR = '[data-endianness]';
function assertSettingsRenders(component) {
    const settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
    assert.isNotNull(settings);
}
function assertDisplayRenders(component) {
    const display = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay);
    assert.isNotNull(display);
}
function clickSettingsButton(component) {
    const settingsButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '[data-settings]', HTMLButtonElement);
    settingsButton.click();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryValueInterpreter', () => {
    function setUpComponent() {
        const buffer = new Uint8Array([34, 234, 12, 3]).buffer;
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.LinearMemoryValueInterpreter();
        component.data = {
            value: buffer,
            endianness: _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little,
            valueTypes: new Set([_components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueType.Int8]),
            memoryLength: buffer.byteLength,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        return component;
    }
    it('renders the settings toolbar', () => {
        const component = setUpComponent();
        const settingsToolbar = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, TOOLBAR_SELECTOR, HTMLDivElement);
        assert.isNotNull(settingsToolbar);
    });
    it('renders value display as default', () => {
        const component = setUpComponent();
        assertDisplayRenders(component);
    });
    it('switches between value display and value settings', () => {
        const component = setUpComponent();
        assertDisplayRenders(component);
        clickSettingsButton(component);
        assertSettingsRenders(component);
    });
    it('listens on TypeToggleEvents', async () => {
        const component = setUpComponent();
        clickSettingsButton(component);
        const settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'valuetypetoggled');
        const expectedType = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.ValueType.Float64;
        const expectedChecked = true;
        const typeToggleEvent = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.TypeToggleEvent(expectedType, expectedChecked);
        settings.dispatchEvent(typeToggleEvent);
        const event = await eventPromise;
        assert.strictEqual(event.data.type, expectedType);
        assert.strictEqual(event.data.checked, expectedChecked);
    });
    it('renders the endianness options', () => {
        const component = setUpComponent();
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
        assert.deepEqual(input.value, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little);
        const options = input.querySelectorAll('option');
        const endiannessSettings = Array.from(options).map(option => option.value);
        assert.deepEqual(endiannessSettings, [
            _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little,
            _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Big,
        ]);
    });
    it('triggers an event on changing endianness', async () => {
        const component = setUpComponent();
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'endiannesschanged');
        const changeEvent = new Event('change');
        input.dispatchEvent(changeEvent);
        const event = await eventPromise;
        assert.deepEqual(event.data, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.Endianness.Little);
    });
});


/***/ })

}]);