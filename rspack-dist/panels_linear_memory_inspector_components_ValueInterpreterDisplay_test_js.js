"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterDisplay_test_js"], {
"./panels/linear_memory_inspector/components/ValueInterpreterDisplay.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR: function() { return DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR; }
});
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR = '[data-jump]';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('ValueInterpreterDisplay', function() {
    var testNumberFormatCombinations = function testNumberFormatCombinations(baseData, combinations) {
        var expectedIntValue = 20;
        var expectedFloatValue = -234.03;
        for(var i = 0; i < combinations.length; ++i){
            var _combinations_i = combinations[i], endianness = _combinations_i.endianness, signed = _combinations_i.signed;
            var expectedValue = void 0;
            var isLittleEndian = endianness === "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ;
            var view = new DataView(baseData.buffer);
            switch(baseData.type){
                case "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ :
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt8(0, expectedValue) : view.setInt8(0, expectedValue);
                    break;
                case "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ :
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt16(0, expectedValue, isLittleEndian) : view.setUint16(0, expectedValue, isLittleEndian);
                    break;
                case "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ :
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setInt32(0, expectedValue, isLittleEndian) : view.setUint32(0, expectedValue, isLittleEndian);
                    break;
                case "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */ :
                    expectedValue = signed ? -expectedIntValue : expectedIntValue;
                    signed ? view.setBigInt64(0, BigInt(expectedValue), isLittleEndian) : view.setBigUint64(0, BigInt(expectedValue), isLittleEndian);
                    break;
                case "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ :
                    expectedValue = expectedFloatValue;
                    view.setFloat32(0, expectedValue, isLittleEndian);
                    break;
                case "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ :
                    expectedValue = expectedFloatValue;
                    view.setFloat64(0, expectedValue, isLittleEndian);
                    break;
                case "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ :
                    expectedValue = '0x' + expectedIntValue.toString(16);
                    view.setInt32(0, expectedIntValue, isLittleEndian);
                    break;
                case "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ :
                    expectedValue = '0x' + expectedIntValue.toString(16);
                    view.setBigUint64(0, BigInt(expectedIntValue), isLittleEndian);
                    break;
                default:
                    throw new Error("Unknown type ".concat(baseData.type));
            }
            var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.format(_object_spread({}, baseData, combinations[i]));
            assert.strictEqual(actualValue, expectedValue.toString());
        }
    };
    var combinationsForNumbers = [
        {
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            signed: true
        },
        {
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            signed: false
        },
        {
            endianness: "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ ,
            signed: false
        },
        {
            endianness: "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ ,
            signed: true
        }
    ];
    it('correctly formats signed/unsigned and endianness for Integer 8-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(1),
            type: "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 16-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(2),
            type: "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 32-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(4),
            type: "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats signed/unsigned and endianness for Integer 64-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(8),
            type: "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Float 32-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(4),
            type: "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Float 64-bit (decimal)', function() {
        var formatData = {
            buffer: new ArrayBuffer(8),
            type: "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ,
            mode: "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Pointer 32-bit', function() {
        var formatData = {
            buffer: new ArrayBuffer(4),
            type: "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ ,
            mode: "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats endianness for Pointer 64-bit', function() {
        var formatData = {
            buffer: new ArrayBuffer(8),
            type: "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ ,
            mode: "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ 
        };
        testNumberFormatCombinations(formatData, combinationsForNumbers);
    });
    it('correctly formats floats in decimal mode', function() {
        var expectedFloat = 341.34;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatFloat(expectedFloat, "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ );
        assert.strictEqual(actualValue, '341.34');
    });
    it('correctly formats floats in scientific mode', function() {
        var expectedFloat = 341.34;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatFloat(expectedFloat, "sci" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Scientific */ );
        assert.strictEqual(actualValue, '3.41e+2');
    });
    it('correctly formats integers in decimal mode', function() {
        var expectedInteger = 120;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ );
        assert.strictEqual(actualValue, '120');
    });
    it('correctly formats integers in hexadecimal mode', function() {
        var expectedInteger = 16;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ );
        assert.strictEqual(actualValue, '0x10');
    });
    it('returns N/A for negative hex numbers', function() {
        var negativeInteger = -16;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(negativeInteger, "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ );
        assert.strictEqual(actualValue, 'N/A');
    });
    it('correctly formats integers in octal mode', function() {
        var expectedInteger = 16;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */ );
        assert.strictEqual(actualValue, '20');
    });
    it('returns N/A for negative octal numbers', function() {
        var expectedInteger = -16;
        var actualValue = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.formatInteger(expectedInteger, "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */ );
        assert.strictEqual(actualValue, 'N/A');
    });
    it('renders pointer values in LinearMemoryInspector.ValueInterpreterDisplayUtils.ValueTypes', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        var array = [
            1,
            132,
            172,
            71,
            43,
            12,
            12,
            66
        ];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ ,
                "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ 
            ]),
            memoryLength: array.length
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLDivElement);
        assert.lengthOf(dataValues, 2);
        var actualValues = Array.from(dataValues).map(function(x) {
            return x.innerText;
        });
        var expectedValues = [
            '0x47AC8401',
            '0x420C0C2B47AC8401'
        ];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('renders value in selected LinearMemoryInspector.ValueInterpreterDisplayUtils.ValueTypes', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        var array = [
            1,
            132,
            172,
            71
        ];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
                "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ 
            ]),
            memoryLength: array.length
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLSpanElement);
        assert.lengthOf(dataValues, 3);
        var actualValues = Array.from(dataValues).map(function(x) {
            return x.innerText;
        });
        var expectedValues = [
            '33793',
            '-31743',
            '88328.01'
        ];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('renders only unsigned values for Octal and Hexadecimal representation', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        var array = [
            0xC8,
            0xC9,
            0xCA,
            0XCB
        ];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
                "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ 
            ]),
            valueTypeModes: new Map([
                [
                    "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
                    "oct" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Octal */ 
                ],
                [
                    "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
                    "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ 
                ],
                [
                    "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ ,
                    "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ 
                ]
            ]),
            memoryLength: array.length
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '[data-value]', HTMLSpanElement);
        assert.lengthOf(dataValues, 4);
        var actualValues = Array.from(dataValues).map(function(x) {
            return x.innerText;
        });
        var expectedValues = [
            '310',
            '0xC9C8',
            '3419064776',
            '-875902520'
        ];
        assert.deepStrictEqual(actualValues, expectedValues);
    });
    it('triggers a value changed event on selecting a new mode', /*#__PURE__*/ _async_to_generator(function() {
        var component, array, oldMode, newMode, mapping, input, eventPromise, changeEvent, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
                    array = [
                        1,
                        132,
                        172,
                        71
                    ];
                    oldMode = "dec" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Decimal */ ;
                    newMode = "sci" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Scientific */ ;
                    mapping = _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping();
                    mapping.set("Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ , oldMode);
                    component.data = {
                        buffer: new Uint8Array(array).buffer,
                        endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
                        valueTypes: new Set([
                            "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ 
                        ]),
                        valueTypeModes: mapping,
                        memoryLength: array.length
                    };
                    input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '[data-mode-settings]', HTMLSelectElement);
                    assert.strictEqual(input.value, oldMode);
                    input.value = newMode;
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'valuetypemodechanged');
                    changeEvent = new Event('change');
                    input.dispatchEvent(changeEvent);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.data, {
                        type: "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ ,
                        mode: newMode
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on jumping to an address from a 32-bit pointer', /*#__PURE__*/ _async_to_generator(function() {
        var component, array, button, eventPromise, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
                    array = [
                        1,
                        0,
                        0,
                        0
                    ];
                    component.data = {
                        buffer: new Uint8Array(array).buffer,
                        endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
                        valueTypes: new Set([
                            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ 
                        ]),
                        memoryLength: array.length
                    };
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'jumptopointeraddress');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.data, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on jumping to an address from a 64-bit pointer', /*#__PURE__*/ _async_to_generator(function() {
        var component, array, button, eventPromise, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
                    array = [
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ];
                    component.data = {
                        buffer: new Uint8Array(array).buffer,
                        endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
                        valueTypes: new Set([
                            "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ 
                        ]),
                        memoryLength: array.length
                    };
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'jumptopointeraddress');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.data, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders a disabled jump-to-address button if address is invalid', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        var array = [
            8,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ ,
                "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ 
            ]),
            memoryLength: array.length
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        assert.isTrue(buttons[0].disabled);
        assert.isTrue(buttons[1].disabled);
    });
    it('selects text in data-value elements if user selects it', function() {
        // To test the failing case, set .value-type user-select to `none`.
        // This is necessary as we render the component in isolation, so it doesn't
        // inherit this property from its parent.
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay();
        var array = [
            1,
            132,
            172,
            71
        ];
        component.data = {
            buffer: new Uint8Array(array).buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
                "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
                "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ ,
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ 
            ]),
            memoryLength: array.length
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var dataValues = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.selectable-text', HTMLSpanElement);
        assert.lengthOf(dataValues, 9);
        var expectedValues = [
            'Integer 8-bit',
            '1',
            'Integer 16-bit',
            '33793',
            '-31743',
            'Float 32-bit',
            '88328.01',
            'Pointer 32-bit',
            '0x47AC8401'
        ];
        // Workaround for selecting text (instead of double-clicking it).
        // We can use a range to specify an element. Range can be converted into
        // a selection. We then check if the selected text meets our expectations.
        // Continuous part of a document, independent of any visual representation.
        var range = document.createRange();
        // Represents user's highlighted text.
        var selection = document.getSelection();
        for(var i = 0; i < dataValues.length; ++i){
            var _window_getSelection;
            if (selection === null) {
                assert.fail('Selection is null');
            }
            // Set range around the element.
            range.selectNodeContents(dataValues[i]);
            // Remove ranges associated with selection.
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            // Select element using range.
            selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            var text = (_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.toString();
            assert.strictEqual(text, expectedValues[i]);
        }
    });
}); //# sourceMappingURL=ValueInterpreterDisplay.test.js.map


}),

}]);