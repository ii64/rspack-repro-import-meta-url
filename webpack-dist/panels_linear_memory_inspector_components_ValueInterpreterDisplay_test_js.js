"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterDisplay_test_js"],{

/***/ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js":
/*!******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=LinearMemoryViewerUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.test.js":
/*!***********************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/ValueInterpreterDisplay.test.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR: () => (/* binding */ DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR)
/* harmony export */ });
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR = '[data-jump]';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('ValueInterpreterDisplay', () => {
    const combinationsForNumbers = [
        { endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */, signed: true },
        { endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */, signed: false },
        { endianness: "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */, signed: false },
        { endianness: "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */, signed: true },
    ];
    function testNumberFormatCombinations(baseData, combinations) {
        const expectedIntValue = 20;
        const expectedFloatValue = -234.03;
        for (let i = 0; i < combinations.length; ++i) {
            const { endianness, signed } = combinations[i];
            let expectedValue;
            const isLittleEndian = endianness === "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */;
            const view = new DataView(baseData.buffer);
            switch (baseData.type) {
                case "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */:
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt8(0, expectedValue) : view.setInt8(0, expectedValue);
                    break;
                case "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */:
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt16(0, expectedValue, isLittleEndian) : view.setUint16(0, expectedValue, isLittleEndian);
                    break;
                case "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */:
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt32(0, expectedValue, isLittleEndian) : view.setUint32(0, expectedValue, isLittleEndian);
                    break;
                case "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */:
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setBigInt64(0, BigInt(expectedValue), isLittleEndian) :
                        view.setBigUint64(0, BigInt(expectedValue), isLittleEndian);
                    break;
                case "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */:
                    expectedValue = expectedFloatValue;
                    view.setFloat32(0, expectedValue, isLittleEndian);
                    break;
                case "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */:
                    expectedValue = expectedFloatValue;
                    view.setFloat64(0, expectedValue, isLittleEndian);
                    break;
                case "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */:
                    expectedValue = '0x' + expectedIntValue.toString(16);
                    view.setInt32(0, expectedIntValue, isLittleEndian);
                    break;
                case "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */:
                    expectedValue = '0x' + expectedIntValue.toString(16);
                    view.setBigUint64(0, BigInt(expectedIntValue), isLittleEndian);
                    break;
                default:
                    throw new Error(`Unknown type ${baseData.type}`);
            }
            const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.format({ ...baseData, ...combinations[i] });
            assert.strictEqual(actualValue, expectedValue.toString());
        }
    }
    it('correctly formats signed/unsigned and endianness for Integer 8-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(1),
            type: "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 16-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(2),
            type: "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 32-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(4),
            type: "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 64-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(8),
            type: "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Float 32-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(4),
            type: "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Float 64-bit (decimal)', () => {
        const formatData = {
            buffer: new ArrayBuffer(8),
            type: "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Pointer 32-bit', () => {
        const formatData = {
            buffer: new ArrayBuffer(4),
            type: "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            mode: "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Pointer 64-bit', () => {
        const formatData = {
            buffer: new ArrayBuffer(8),
            type: "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
            mode: "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */,
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats floats in decimal mode', () => {
        const expectedFloat = 341.34;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatFloat(expectedFloat, "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */);
        assert.strictEqual(actualValue, '341.34');
    });
    it('correctly formats floats in scientific mode', () => {
        const expectedFloat = 341.34;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatFloat(expectedFloat, "sci" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Scientific */);
        assert.strictEqual(actualValue, '3.41e+2');
    });
    it('correctly formats integers in decimal mode', () => {
        const expectedInteger = 120;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */);
        assert.strictEqual(actualValue, '120');
    });
    it('correctly formats integers in hexadecimal mode', () => {
        const expectedInteger = 16;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */);
        assert.strictEqual(actualValue, '0x10');
    });
    it('returns N/A for negative hex numbers', () => {
        const negativeInteger = -16;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(negativeInteger, "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */);
        assert.strictEqual(actualValue, 'N/A');
    });
    it('correctly formats integers in octal mode', () => {
        const expectedInteger = 16;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */);
        assert.strictEqual(actualValue, '20');
    });
    it('returns N/A for negative octal numbers', () => {
        const expectedInteger = -16;
        const actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */);
        assert.strictEqual(actualValue, 'N/A');
    });
    it('renders pointer values in LinearMemoryInspector.ValueInterpreterDisplayUtils.ValueTypes', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 132, 172, 71, 43, 12, 12, 66];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
                "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLDivElement);
        assert.lengthOf(dataValues, 2);
        const actualValues = Array.from(dataValues).map(x => x.innerText);
        const expectedValues = ['0x47AC8401', '0x420C0C2B47AC8401'];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('renders value in selected LinearMemoryInspector.ValueInterpreterDisplayUtils.ValueTypes', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 132, 172, 71];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
                "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLSpanElement);
        assert.lengthOf(dataValues, 3);
        const actualValues = Array.from(dataValues).map(x => x.innerText);
        const expectedValues = ['33793', '-31743', '88328.01'];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('renders only unsigned values for Octal and Hexadecimal representation', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [0xC8, 0xC9, 0xCA, 0XCB];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
                "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */,
            ]),
            valueTypeModes: new Map([
                [
                    "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
                    "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */,
                ],
                [
                    "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
                    "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */,
                ],
                [
                    "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */,
                    "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */,
                ],
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLSpanElement);
        assert.lengthOf(dataValues, 4);
        const actualValues = Array.from(dataValues).map(x => x.innerText);
        const expectedValues = ['310', '0xC9C8', '3419064776', '-875902520'];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('triggers a value changed event on selecting a new mode', async () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 132, 172, 71];
        const oldMode = "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */;
        const newMode = "sci" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Scientific */;
        const mapping = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping();
        mapping.set("Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */, oldMode);
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
            ]),
            valueTypeModes: mapping,
            memoryLength: array.length,
        };
        const input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '[data-mode-settings]', HTMLSelectElement);
        assert.strictEqual(input.value, oldMode);
        input.value = newMode;
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'valuetypemodechanged');
        const changeEvent = new Event('change');
        input.dispatchEvent(changeEvent);
        const event = await eventPromise;
        assert.deepEqual(event.data, { type: "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */, mode: newMode });
    });
    it('triggers an event on jumping to an address from a 32-bit pointer', async () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 0, 0, 0];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'jumptopointeraddress');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
        const event = await eventPromise;
        assert.deepEqual(event.data, 1);
    });
    it('triggers an event on jumping to an address from a 64-bit pointer', async () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 0, 0, 0, 0, 0, 0, 0];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'jumptopointeraddress');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
        const event = await eventPromise;
        assert.deepEqual(event.data, 1);
    });
    it('renders a disabled jump-to-address button if address is invalid', () => {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [8, 0, 0, 0, 0, 0, 0, 0];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
                "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        assert.isTrue(buttons[0].disabled);
        assert.isTrue(buttons[1].disabled);
    });
    it('selects text in data-value elements if user selects it', () => {
        // To test the failing case, set .value-type user-select to `none`.
        // This is necessary as we render the component in isolation, so it doesn't
        // inherit this property from its parent.
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        const array = [1, 132, 172, 71];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */,
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */,
                "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */,
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */,
            ]),
            memoryLength: array.length,
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        const dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.selectable-text', HTMLSpanElement);
        assert.lengthOf(dataValues, 9);
        const expectedValues = [
            'Integer 8-bit',
            '1',
            'Integer 16-bit',
            '33793',
            '-31743',
            'Float 32-bit',
            '88328.01',
            'Pointer 32-bit',
            '0x47AC8401',
        ];
        // Workaround for selecting text (instead of double-clicking it).
        // We can use a range to specify an element. Range can be converted into
        // a selection. We then check if the selected text meets our expectations.
        // Continuous part of a document, independent of any visual representation.
        const range = document.createRange();
        // Represents user's highlighted text.
        const selection = document.getSelection();
        for (let i = 0; i < dataValues.length; ++i) {
            if (selection === null) {
                assert.fail('Selection is null');
            }
            // Set range around the element.
            range.selectNodeContents(dataValues[i]);
            // Remove ranges associated with selection.
            selection?.removeAllRanges();
            // Select element using range.
            selection?.addRange(range);
            const text = window.getSelection()?.toString();
            assert.strictEqual(text, expectedValues[i]);
        }
    });
});
//# sourceMappingURL=ValueInterpreterDisplay.test.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/components.js":
/*!*****************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/components.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryHighlightChipList: () => (/* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspector: () => (/* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LinearMemoryInspectorUtils: () => (/* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LinearMemoryNavigator: () => (/* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LinearMemoryViewer: () => (/* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   LinearMemoryViewerUtils: () => (/* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ValueInterpreterDisplay: () => (/* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ValueInterpreterDisplayUtils: () => (/* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ValueInterpreterSettings: () => (/* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./testing/DOMHelpers.js":
/*!*******************************!*\
  !*** ./testing/DOMHelpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertElements: () => (/* binding */ assertElements),
/* harmony export */   assertNodeTextContent: () => (/* binding */ assertNodeTextContent),
/* harmony export */   dispatchClickEvent: () => (/* binding */ dispatchClickEvent),
/* harmony export */   dispatchCopyEvent: () => (/* binding */ dispatchCopyEvent),
/* harmony export */   dispatchFocusEvent: () => (/* binding */ dispatchFocusEvent),
/* harmony export */   dispatchFocusOutEvent: () => (/* binding */ dispatchFocusOutEvent),
/* harmony export */   dispatchInputEvent: () => (/* binding */ dispatchInputEvent),
/* harmony export */   dispatchKeyDownEvent: () => (/* binding */ dispatchKeyDownEvent),
/* harmony export */   dispatchMouseLeaveEvent: () => (/* binding */ dispatchMouseLeaveEvent),
/* harmony export */   dispatchMouseMoveEvent: () => (/* binding */ dispatchMouseMoveEvent),
/* harmony export */   dispatchMouseOutEvent: () => (/* binding */ dispatchMouseOutEvent),
/* harmony export */   dispatchMouseOverEvent: () => (/* binding */ dispatchMouseOverEvent),
/* harmony export */   dispatchMouseUpEvent: () => (/* binding */ dispatchMouseUpEvent),
/* harmony export */   dispatchPasteEvent: () => (/* binding */ dispatchPasteEvent),
/* harmony export */   doubleRaf: () => (/* binding */ doubleRaf),
/* harmony export */   getCleanTextContentFromElements: () => (/* binding */ getCleanTextContentFromElements),
/* harmony export */   getElementWithinComponent: () => (/* binding */ getElementWithinComponent),
/* harmony export */   getElementsWithinComponent: () => (/* binding */ getElementsWithinComponent),
/* harmony export */   getEventPromise: () => (/* binding */ getEventPromise),
/* harmony export */   querySelectorErrorOnMissing: () => (/* binding */ querySelectorErrorOnMissing),
/* harmony export */   raf: () => (/* binding */ raf),
/* harmony export */   renderElementIntoDOM: () => (/* binding */ renderElementIntoDOM),
/* harmony export */   resetTestDOM: () => (/* binding */ resetTestDOM),
/* harmony export */   stripLitHtmlCommentNodes: () => (/* binding */ stripLitHtmlCommentNodes),
/* harmony export */   waitForScrollLeft: () => (/* binding */ waitForScrollLeft)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const TEST_CONTAINER_ID = '__devtools-test-container-id';
/**
 * Renders a given element into the DOM. By default it will error if it finds an element already rendered but this can be controlled via the options.
 **/
const renderElementIntoDOM = (element, renderOptions = {}) => {
    const container = document.getElementById(TEST_CONTAINER_ID);
    if (!container) {
        throw new Error(`renderElementIntoDOM expects to find ${TEST_CONTAINER_ID}`);
    }
    const allowMultipleChildren = Boolean(renderOptions.allowMultipleChildren);
    if (container.childNodes.length !== 0 && !allowMultipleChildren) {
        throw new Error(`renderElementIntoDOM expects the container to be empty ${container.innerHTML}`);
    }
    container.appendChild(element);
    return element;
};
function removeChildren(node) {
    while (true) {
        const { firstChild } = node;
        if (firstChild === null) {
            break;
        }
        const widget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.Widget.get(firstChild);
        if (widget) {
            // Child is a widget, so we have to use the Widget system to remove it from the DOM.
            widget.detach();
            continue;
        }
        // For regular children, recursively remove their children, since some of them
        // might be widgets, and only afterwards remove the child from the current node.
        removeChildren(firstChild);
        node.removeChild(firstChild);
    }
}
/**
 * Completely cleans out the test DOM to ensure it's empty for the next test run.
 * This is run automatically between tests - you should not be manually calling this yourself.
 **/
const resetTestDOM = () => {
    const previousContainer = document.getElementById(TEST_CONTAINER_ID);
    if (previousContainer) {
        removeChildren(previousContainer);
        previousContainer.remove();
    }
    const newContainer = document.createElement('div');
    newContainer.id = TEST_CONTAINER_ID;
    document.body.appendChild(newContainer);
};
/**
 * Asserts that all emenents of `nodeList` are at least of type `T`.
 */
function assertElements(nodeList, elementClass) {
    nodeList.forEach(e => assert.instanceOf(e, elementClass));
}
function getElementWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const element = component.shadowRoot.querySelector(selector);
    assert.instanceOf(element, elementClass);
    return element;
}
function getElementsWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const elements = component.shadowRoot.querySelectorAll(selector);
    assertElements(elements, elementClass);
    return elements;
}
/* Waits for the given element to have a scrollLeft property of at least desiredScrollLeft */
function waitForScrollLeft(element, desiredScrollLeft) {
    let lastScrollLeft = -1;
    let scrollLeftTimeout = null;
    const timeBetweenPolls = 50;
    return new Promise(resolve => {
        const pollForScrollLeft = () => {
            const newScrollLeft = element.scrollLeft;
            // If we get the same scroll value twice in a row, and it's at least what
            // we want, we're done!
            if (lastScrollLeft === newScrollLeft && newScrollLeft >= desiredScrollLeft) {
                if (scrollLeftTimeout) {
                    window.clearTimeout(scrollLeftTimeout);
                }
                resolve();
                return;
            }
            lastScrollLeft = newScrollLeft;
            scrollLeftTimeout = window.setTimeout(pollForScrollLeft, timeBetweenPolls);
        };
        window.setTimeout(pollForScrollLeft, timeBetweenPolls);
    });
}
/**
 * Dispatches a mouse click event.
 */
function dispatchClickEvent(element, options = {}) {
    const clickEvent = new MouseEvent('click', options);
    element.dispatchEvent(clickEvent);
}
function dispatchMouseUpEvent(element, options = {}) {
    const clickEvent = new MouseEvent('mouseup', options);
    element.dispatchEvent(clickEvent);
}
function dispatchFocusEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focus', options);
    element.dispatchEvent(focusEvent);
}
function dispatchFocusOutEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focusout', options);
    element.dispatchEvent(focusEvent);
}
/**
 * Dispatches a keydown event. Errors if the event was not dispatched successfully.
 */
function dispatchKeyDownEvent(element, options = {}) {
    const clickEvent = new KeyboardEvent('keydown', options);
    const success = element.dispatchEvent(clickEvent);
    if (!success) {
        assert.fail('Failed to trigger keydown event successfully.');
    }
}
function dispatchInputEvent(element, options = {}) {
    const inputEvent = new InputEvent('input', options);
    element.dispatchEvent(inputEvent);
}
/**
 * Dispatches a mouse over event.
 */
function dispatchMouseOverEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseover', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse out event.
 */
function dispatchMouseOutEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseout', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse move event.
 */
function dispatchMouseMoveEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mousemove', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse leave event.
 */
function dispatchMouseLeaveEvent(element, options = {}) {
    const leaveEvent = new MouseEvent('mouseleave', options);
    element.dispatchEvent(leaveEvent);
}
/**
 * Dispatches a clipboard copy event.
 */
function dispatchCopyEvent(element, options = {}) {
    const copyEvent = new ClipboardEvent('copy', options);
    element.dispatchEvent(copyEvent);
}
/**
 * Dispatches a clipboard paste event.
 */
function dispatchPasteEvent(element, options = {}) {
    const pasteEvent = new ClipboardEvent('paste', options);
    element.dispatchEvent(pasteEvent);
}
/**
 * Listens to an event of an element and returns a Promise that resolves to the
 * specified event type.
 */
function getEventPromise(element, eventName) {
    return new Promise(resolve => {
        element.addEventListener(eventName, (event) => {
            resolve(event);
        }, { once: true });
    });
}
async function doubleRaf() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}
async function raf() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}
/**
 * It's useful to use innerHTML in the tests to have full confidence in the
 * renderer output, but LitHtml uses comment nodes to split dynamic from
 * static parts of a template, and we don't want our tests full of noise
 * from those.
 */
function stripLitHtmlCommentNodes(text) {
    /**
     * LitHtml comments take the form of:
     * <!--?lit$1234?--> or:
     * <!--?-->
     * And this regex matches both.
     */
    return text.replaceAll(/<!--\?(lit\$[0-9]+\$)?-->/g, '');
}
/**
 * Returns an array of textContents.
 * Multiple consecutive newLine and space characters are removed.
 */
function getCleanTextContentFromElements(el, selector) {
    const elements = Array.from(el.querySelectorAll(selector));
    return elements.map(element => {
        return element.textContent ? element.textContent.trim().replace(/[ \n]{2,}/g, '') : '';
    });
}
function assertNodeTextContent(component, expectedContent) {
    assert.isNotNull(component.shadowRoot);
    const content = Array.from(component.shadowRoot.querySelectorAll('span')).map(span => span.textContent).join('');
    assert.strictEqual(content, expectedContent);
}
function querySelectorErrorOnMissing(parent, selector) {
    const elem = parent.querySelector(selector);
    if (!elem) {
        throw new Error(`Expected element with selector ${selector} not found.`);
    }
    return elem;
}
//# sourceMappingURL=DOMHelpers.js.map

/***/ })

}]);