"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_LinearMemoryInspectorController_test_ts"],{

/***/ "./src/panels/linear_memory_inspector/LinearMemoryInspectorController.test.ts":
/*!************************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/LinearMemoryInspectorController.test.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
/* harmony import */ var _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear_memory_inspector.js */ "./src/panels/linear_memory_inspector/linear_memory_inspector.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const { LinearMemoryInspectorController } = _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_3__;
const { ValueInterpreterDisplayUtils } = _components_components_js__WEBPACK_IMPORTED_MODULE_2__;
class MockRemoteObject extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.LocalJSONObject {
    constructor(array) {
        super(array);
        Object.defineProperty(this, "objSubtype", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    arrayBufferByteLength() {
        return this.value.byteLength;
    }
    get subtype() {
        return 'arraybuffer';
    }
}
function createWrapper(array) {
    const mockRemoteObj = new MockRemoteObject(array.buffer);
    const mockRemoteArrayBuffer = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteArrayBuffer(mockRemoteObj);
    return new LinearMemoryInspectorController.RemoteArrayBufferWrapper(mockRemoteArrayBuffer);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('LinearMemoryInspectorController', () => {
    it('throws an error on an invalid (out-of-bounds) memory range request', async () => {
        const array = new Uint8Array([2, 4, 6, 2, 4]);
        const wrapper = createWrapper(array);
        try {
            await LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 10, 20);
            throw new Error('Function did now throw.');
        }
        catch (e) {
            const error = e;
            assert.strictEqual(error.message, 'Requested range is out of bounds.');
        }
    });
    it('throws an error on an invalid memory range request', async () => {
        const array = new Uint8Array([2, 4, 6, 2, 4]);
        const wrapper = createWrapper(array);
        try {
            await LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 20, 10);
            throw new Error('Function did now throw.');
        }
        catch (e) {
            const error = e;
            assert.strictEqual(error.message, 'Requested range is out of bounds.');
        }
    });
    it('can pull updated data on memory range request', async () => {
        const array = new Uint8Array([2, 4, 6, 2, 4]);
        const wrapper = createWrapper(array);
        const valuesBefore = await LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 0, array.length);
        assert.strictEqual(valuesBefore.length, array.length);
        for (let i = 0; i < array.length; ++i) {
            assert.strictEqual(valuesBefore[i], array[i]);
        }
        const changedIndex = 0;
        const changedValue = 10;
        array[changedIndex] = changedValue;
        const valuesAfter = await LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 0, array.length);
        assert.strictEqual(valuesAfter.length, valuesBefore.length);
        for (let i = 0; i < valuesBefore.length; ++i) {
            if (i === changedIndex) {
                assert.strictEqual(valuesAfter[i], changedValue);
            }
            else {
                assert.strictEqual(valuesAfter[i], valuesBefore[i]);
            }
        }
    });
    it('triggers saving and loading of settings on settings changed event', () => {
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        const valueTypes = new Set([ValueInterpreterDisplayUtils.ValueType.Int16, ValueInterpreterDisplayUtils.ValueType.Float32]);
        const valueTypeModes = new Map([[ValueInterpreterDisplayUtils.ValueType.Int16, ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal]]);
        const settings = {
            valueTypes,
            modes: valueTypeModes,
            endianness: ValueInterpreterDisplayUtils.Endianness.Little,
        };
        const defaultSettings = instance.loadSettings();
        instance.saveSettings(settings);
        assert.notDeepEqual(defaultSettings, settings);
        const actualSettings = instance.loadSettings();
        assert.deepEqual(actualSettings, settings);
    });
    it('returns undefined when error happens in evaluateExpression', async () => {
        const errorText = 'This is a test error';
        const callFrame = {
            evaluate: ({}) => {
                return new Promise(resolve => {
                    resolve({ error: errorText });
                });
            },
        };
        const stub = sinon.stub(console, 'error');
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        const expressionName = 'myCar';
        const result = await instance.evaluateExpression(callFrame, expressionName);
        assert.strictEqual(result, undefined);
        assert.isTrue(stub.calledOnceWithExactly(`Tried to evaluate the expression '${expressionName}' but got an error: ${errorText}`));
    });
    it('returns undefined when exceptionDetails is set on the result of evaluateExpression', async () => {
        const exceptionText = 'This is a test exception\'s detail text';
        const callFrame = {
            evaluate: ({}) => {
                return new Promise(resolve => {
                    resolve({
                        object: { type: 'object' },
                        exceptionDetails: { text: exceptionText },
                    });
                });
            },
        };
        const stub = sinon.stub(console, 'error');
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        const expressionName = 'myCar.manufacturer';
        const result = await instance.evaluateExpression(callFrame, expressionName);
        assert.strictEqual(result, undefined);
        assert.isTrue(stub.calledOnceWithExactly(`Tried to evaluate the expression '${expressionName}' but got an exception: ${exceptionText}`));
    });
    it('returns RemoteObject when no exception happens in evaluateExpression', async () => {
        const expectedObj = { type: 'object' };
        const callFrame = {
            evaluate: ({}) => {
                return new Promise(resolve => {
                    resolve({
                        object: expectedObj,
                    });
                });
            },
        };
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        const result = await instance.evaluateExpression(callFrame, 'myCar.manufacturer');
        assert.deepEqual(result, expectedObj);
    });
    it('removes the provided highlightInfo when it is stored in the Controller', () => {
        const highlightInfo = { startAddress: 0, size: 16, name: 'myNumbers', type: 'int[]' };
        const bufferId = 'someBufferId';
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        instance.setHighlightInfo(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
        instance.removeHighlight(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), undefined);
    });
    it('does not change the stored highlight when the provided highlightInfo does not match', () => {
        const highlightInfo = { startAddress: 0, size: 16, name: 'myNumbers', type: 'int[]' };
        const differentHighlightInfo = { startAddress: 20, size: 50, name: 'myBytes', type: 'bool[]' };
        const bufferId = 'someBufferId';
        const instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        instance.setHighlightInfo(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
        instance.removeHighlight(bufferId, differentHighlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
    });
});
describe('RemoteArrayBufferWrapper', () => {
    it('correctly wraps the remote object', async () => {
        const array = new Uint8Array([2, 4, 6, 2, 4]);
        const wrapper = createWrapper(array);
        assert.strictEqual(wrapper.length(), array.length);
        const extractedArray = await wrapper.getRange(0, 3);
        assert.lengthOf(extractedArray, 3);
        for (let i = 0; i < 3; ++i) {
            assert.deepEqual(array[i], extractedArray[i]);
        }
    });
});


/***/ }),

/***/ "./src/panels/linear_memory_inspector/linear_memory_inspector.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/linear_memory_inspector.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryInspectorController: () => (/* reexport module object */ _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspectorPane: () => (/* reexport module object */ _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./src/panels/linear_memory_inspector/LinearMemoryInspectorController.ts");
/* harmony import */ var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./src/panels/linear_memory_inspector/LinearMemoryInspectorPane.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);