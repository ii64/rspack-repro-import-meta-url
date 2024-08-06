"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryInspector_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryInspector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */var _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.test.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.test.js");
/* harmony import */var _LinearMemoryValueInterpreter_test_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.test.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.js");
/* harmony import */var _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.test.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.test.js");
/* harmony import */var _ValueInterpreterDisplay_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValueInterpreterDisplay.test.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.test.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/es_modules_import */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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







var NAVIGATOR_SELECTOR = 'devtools-linear-memory-inspector-navigator';
var VIEWER_SELECTOR = 'devtools-linear-memory-inspector-viewer';
var INTERPRETER_SELECTOR = 'devtools-linear-memory-inspector-interpreter';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryInspector', function() {
    var getViewer = function getViewer(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, VIEWER_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryViewer.LinearMemoryViewer);
    };
    var getNavigator = function getNavigator(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.LinearMemoryNavigator);
    };
    var getValueInterpreter = function getValueInterpreter(component) {
        return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, INTERPRETER_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.LinearMemoryValueInterpreter);
    };
    var setUpComponent = function setUpComponent() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspector.LinearMemoryInspector();
        var flexWrapper = document.createElement('div');
        flexWrapper.style.width = '500px';
        flexWrapper.style.height = '500px';
        flexWrapper.style.display = 'flex';
        flexWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(flexWrapper);
        var size = 1000;
        var memory = [];
        for(var i = 0; i < size; ++i){
            memory[i] = i;
        }
        var data = {
            memory: new Uint8Array(memory),
            address: 20,
            memoryOffset: 0,
            outerMemoryLength: memory.length,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set(_components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping().keys())
        };
        component.data = data;
        return {
            component: component,
            data: data
        };
    };
    var triggerAddressChangedEvent = function triggerAddressChangedEvent(component, address, mode) {
        var navigator = getNavigator(component);
        var changeEvent = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.AddressInputChangedEvent(address, mode);
        navigator.dispatchEvent(changeEvent);
    };
    var assertUpdatesInNavigator = function assertUpdatesInNavigator(navigator, expectedAddress, expectedTooltip) {
        var address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        var addressValue = address.value;
        assert.strictEqual(addressValue, expectedAddress);
        assert.strictEqual(address.title, expectedTooltip);
    };
    it('renders the navigator component', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        assert.isNotNull(navigator);
    });
    it('renders the viewer component', function() {
        var component = setUpComponent().component;
        var viewer = getViewer(component);
        assert.isNotNull(viewer);
    });
    it('renders the interpreter component', function() {
        var component = setUpComponent().component;
        var interpreter = getValueInterpreter(component);
        assert.isNotNull(interpreter);
    });
    it('only saves history entries if addresses differ', /*#__PURE__*/ _async_to_generator(function() {
        var _setUpComponent, component, data, navigator, buttons, _buttons, backwardButton, viewer, byteCells, byteIndices, expectedHistory, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, index, byteSelectedPromise, err, navigatorAddress, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, index1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
                    // Set the address to zero to avoid the LMI to jump around in terms of addresses
                    // before the LMI is completely rendered (it requires two rendering processes,
                    // meanwhile our test might have already started).
                    data.address = 0;
                    component.data = data;
                    navigator = getNavigator(component);
                    buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
                    _buttons = _sliced_to_array(buttons, 1), backwardButton = _buttons[0];
                    viewer = getViewer(component);
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    byteIndices = [
                        2,
                        1,
                        1,
                        2
                    ];
                    expectedHistory = [
                        2,
                        1,
                        2
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = byteIndices[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    index = _step.value;
                    byteSelectedPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(viewer, 'byteselected');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(byteCells[index]);
                    return [
                        4,
                        byteSelectedPromise
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    navigatorAddress = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = expectedHistory[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            index1 = _step1.value;
                            assert.strictEqual(parseInt(navigatorAddress.value, 16), index1);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('can navigate addresses back and forth in history', /*#__PURE__*/ _async_to_generator(function() {
        var _setUpComponent, component, address, navigator, buttons, _buttons, backwardButton, forwardButton, viewer, byteCells, visitedByteValue, historyLength, i, byteSelectedPromise, byteSelectedEvent, i1, currentByteValue, i2, currentByteValue1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setUpComponent = setUpComponent(), component = _setUpComponent.component, address = _setUpComponent.data.address;
                    navigator = getNavigator(component);
                    buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
                    _buttons = _sliced_to_array(buttons, 2), backwardButton = _buttons[0], forwardButton = _buttons[1];
                    viewer = getViewer(component);
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    visitedByteValue = [
                        address
                    ];
                    historyLength = Math.min(byteCells.length, 10);
                    i = 1;
                    _state.label = 1;
                case 1:
                    if (!(i < historyLength)) return [
                        3,
                        4
                    ];
                    byteSelectedPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(viewer, 'byteselected');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(byteCells[i]);
                    return [
                        4,
                        byteSelectedPromise
                    ];
                case 2:
                    byteSelectedEvent = _state.sent();
                    visitedByteValue.push(byteSelectedEvent.data);
                    _state.label = 3;
                case 3:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 4:
                    for(i1 = historyLength - 1; i1 >= 0; --i1){
                        currentByteValue = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
                        assert.strictEqual(parseInt(currentByteValue.innerText, 16), visitedByteValue[i1]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
                    }
                    for(i2 = 0; i2 < historyLength; ++i2){
                        currentByteValue1 = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
                        assert.strictEqual(parseInt(currentByteValue1.innerText, 16), visitedByteValue[i2]);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(forwardButton);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('can turn the page back and forth', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        var buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_PAGE_BUTTON_SELECTOR, HTMLButtonElement);
        var _buttons = _sliced_to_array(buttons, 2), backwardButton = _buttons[0], forwardButton = _buttons[1];
        var address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        var addressBefore = parseInt(address.value, 16);
        var viewer = getViewer(component);
        var bytesShown = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
        var numBytesPerPage = bytesShown.length;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(forwardButton);
        var addressAfter = parseInt(address.value, 16);
        var expectedAddressAfter = addressBefore + numBytesPerPage;
        assert.strictEqual(addressAfter, expectedAddressAfter);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(backwardButton);
        addressAfter = parseInt(address.value, 16);
        expectedAddressAfter -= numBytesPerPage;
        assert.strictEqual(addressAfter, Math.max(0, expectedAddressAfter));
    });
    it('synchronizes selected addresses in navigator and viewer', function() {
        var _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
        var navigator = getNavigator(component);
        var address = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        var viewer = getViewer(component);
        var selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
        var actualByteValue = parseInt(selectedByte.innerText, 16);
        var expectedByteValue = data.memory[parseInt(address.value, 16)];
        assert.strictEqual(actualByteValue, expectedByteValue);
    });
    it('can change endianness settings on event', function() {
        var component = setUpComponent().component;
        var interpreter = getValueInterpreter(component);
        var select = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(interpreter, _LinearMemoryValueInterpreter_test_js__WEBPACK_IMPORTED_MODULE_4__.ENDIANNESS_SELECTOR, HTMLSelectElement);
        assert.deepEqual(select.value, "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ );
        var endianSetting = "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ ;
        var event = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.EndiannessChangedEvent(endianSetting);
        interpreter.dispatchEvent(event);
        assert.deepEqual(select.value, event.data);
    });
    it('updates current address if user triggers a jumptopointeraddress event', function() {
        var _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
        data.valueTypes = new Set([
            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ 
        ]);
        data.memory = new Uint8Array([
            2,
            0,
            0,
            0
        ]);
        data.outerMemoryLength = data.memory.length;
        data.address = 0;
        data.endianness = "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ;
        component.data = data;
        var interpreter = getValueInterpreter(component);
        var display = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(interpreter, 'devtools-linear-memory-inspector-interpreter-display', _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay);
        var button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(display, _ValueInterpreterDisplay_test_js__WEBPACK_IMPORTED_MODULE_6__.DISPLAY_JUMP_TO_POINTER_BUTTON_SELECTOR, HTMLButtonElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(button);
        var navigator = getNavigator(component);
        var selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(navigator, _LinearMemoryNavigator_test_js__WEBPACK_IMPORTED_MODULE_3__.NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        var actualSelectedByte = parseInt(selectedByte.value, 16);
        var expectedSelectedByte = new DataView(data.memory.buffer).getUint32(0, true);
        assert.strictEqual(actualSelectedByte, expectedSelectedByte);
    });
    it('leaves the navigator address as inputted by user on edit event', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '2', "Edit" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Edit */ );
        assertUpdatesInNavigator(navigator, '2', 'Enter address');
    });
    it('changes navigator address (to hex) on valid user submit event', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '2', "Submitted" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Submitted */ );
        assertUpdatesInNavigator(navigator, '0x00000002', 'Enter address');
    });
    it('leaves the navigator address as inputted by user on invalid edit event', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '-2', "Edit" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Edit */ );
        assertUpdatesInNavigator(navigator, '-2', 'Address has to be a number between 0x00000000 and 0x000003E8');
    });
    it('leaves the navigator address as inputted by user on invalid submit event', function() {
        var component = setUpComponent().component;
        var navigator = getNavigator(component);
        triggerAddressChangedEvent(component, '-2', "Submitted" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Submitted */ );
        assertUpdatesInNavigator(navigator, '-2', 'Address has to be a number between 0x00000000 and 0x000003E8');
    });
    it('triggers MemoryRequestEvent on refresh', /*#__PURE__*/ _async_to_generator(function() {
        var _setUpComponent, component, data, navigator, viewer, bytes, numBytesPerPage, eventPromise, event, _event_data, start, end, address;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
                    navigator = getNavigator(component);
                    viewer = getViewer(component);
                    bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    numBytesPerPage = bytes.length;
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'memoryrequest');
                    navigator.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.RefreshRequestedEvent());
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    _event_data = event.data, start = _event_data.start, end = _event_data.end, address = _event_data.address;
                    assert.strictEqual(address, data.address);
                    assert.isAbove(end, start);
                    assert.strictEqual(numBytesPerPage, end - start);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers event on address change when byte is selected', /*#__PURE__*/ _async_to_generator(function() {
        var _setUpComponent, component, data, eventPromise, viewer, bytes, numBytesPerPage, pageNumber, addressOfFirstByte, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addresschanged');
                    viewer = getViewer(component);
                    bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(viewer, _LinearMemoryViewer_test_js__WEBPACK_IMPORTED_MODULE_5__.VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    numBytesPerPage = bytes.length;
                    pageNumber = data.address / numBytesPerPage;
                    addressOfFirstByte = pageNumber * numBytesPerPage + 1;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(bytes[1]);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.strictEqual(event.data, addressOfFirstByte);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers event on address change when data is set', /*#__PURE__*/ _async_to_generator(function() {
        var _setUpComponent, component, data, eventPromise, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addresschanged');
                    data.address = 10;
                    component.data = data;
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.strictEqual(event.data, data.address);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers event on settings changed when value type is changed', /*#__PURE__*/ _async_to_generator(function() {
        var component, interpreter, eventPromise, valueType, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent().component;
                    interpreter = getValueInterpreter(component);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
                    valueType = "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ;
                    interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.ValueTypeToggledEvent(valueType, false));
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.isTrue(event.data.valueTypes.size > 1);
                    assert.isFalse(event.data.valueTypes.has(valueType));
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers event on settings changed when value type mode is changed', /*#__PURE__*/ _async_to_generator(function() {
        var component, interpreter, eventPromise, valueType, valueTypeMode, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent().component;
                    interpreter = getValueInterpreter(component);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
                    valueType = "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ;
                    valueTypeMode = "hex" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ ;
                    interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueTypeModeChangedEvent(valueType, valueTypeMode));
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.isTrue(event.data.valueTypes.has(valueType));
                    assert.strictEqual(event.data.modes.get(valueType), valueTypeMode);
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers event on settings changed when endianness is changed', /*#__PURE__*/ _async_to_generator(function() {
        var component, interpreter, eventPromise, endianness, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent().component;
                    interpreter = getValueInterpreter(component);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'settingschanged');
                    endianness = "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ ;
                    interpreter.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.EndiannessChangedEvent(endianness));
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.strictEqual(event.data.endianness, endianness);
                    return [
                        2
                    ];
            }
        });
    }));
    it('formats a hexadecimal number', function() {
        var number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({
            number: number,
            pad: 0,
            prefix: false
        }), '17');
    });
    it('formats a hexadecimal number and adds padding', function() {
        var number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({
            number: number,
            pad: 5,
            prefix: false
        }), '00017');
    });
    it('formats a hexadecimal number and adds prefix', function() {
        var number = 23;
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.toHexString({
            number: number,
            pad: 5,
            prefix: true
        }), '0x00017');
    });
    it('can parse a valid hexadecimal address', function() {
        var address = '0xa';
        var parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, 10);
    });
    it('can parse a valid decimal address', function() {
        var address = '20';
        var parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, 20);
    });
    it('returns undefined on parsing invalid address', function() {
        var address = '20a';
        var parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, undefined);
    });
    it('returns undefined on parsing negative address', function() {
        var address = '-20';
        var parsedAddress = _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryInspectorUtils.parseAddress(address);
        assert.strictEqual(parsedAddress, undefined);
    });
}); //# sourceMappingURL=LinearMemoryInspector.test.js.map


}),
"./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ENDIANNESS_SELECTOR: function() { return ENDIANNESS_SELECTOR; }
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



var DISPLAY_SELECTOR = 'devtools-linear-memory-inspector-interpreter-display';
var SETTINGS_SELECTOR = 'devtools-linear-memory-inspector-interpreter-settings';
var TOOLBAR_SELECTOR = '.settings-toolbar';
var ENDIANNESS_SELECTOR = '[data-endianness]';
function assertSettingsRenders(component) {
    var settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
    assert.isNotNull(settings);
}
function assertDisplayRenders(component) {
    var display = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay);
    assert.isNotNull(display);
}
function clickSettingsButton(component) {
    var settingsButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '[data-settings]', HTMLButtonElement);
    settingsButton.click();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryValueInterpreter', function() {
    var setUpComponent = function setUpComponent() {
        var buffer = new Uint8Array([
            34,
            234,
            12,
            3
        ]).buffer;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.LinearMemoryValueInterpreter();
        component.data = {
            value: buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ 
            ]),
            memoryLength: buffer.byteLength
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        return component;
    };
    it('renders the settings toolbar', function() {
        var component = setUpComponent();
        var settingsToolbar = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, TOOLBAR_SELECTOR, HTMLDivElement);
        assert.isNotNull(settingsToolbar);
    });
    it('renders value display as default', function() {
        var component = setUpComponent();
        assertDisplayRenders(component);
    });
    it('switches between value display and value settings', function() {
        var component = setUpComponent();
        assertDisplayRenders(component);
        clickSettingsButton(component);
        assertSettingsRenders(component);
    });
    it('listens on TypeToggleEvents', /*#__PURE__*/ _async_to_generator(function() {
        var component, settings, eventPromise, expectedType, expectedChecked, typeToggleEvent, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent();
                    clickSettingsButton(component);
                    settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'valuetypetoggled');
                    expectedType = "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ;
                    expectedChecked = true;
                    typeToggleEvent = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.TypeToggleEvent(expectedType, expectedChecked);
                    settings.dispatchEvent(typeToggleEvent);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.strictEqual(event.data.type, expectedType);
                    assert.strictEqual(event.data.checked, expectedChecked);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders the endianness options', function() {
        var component = setUpComponent();
        var input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
        assert.deepEqual(input.value, "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ );
        var options = input.querySelectorAll('option');
        var endiannessSettings = Array.from(options).map(function(option) {
            return option.value;
        });
        assert.deepEqual(endiannessSettings, [
            "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ 
        ]);
    });
    it('triggers an event on changing endianness', /*#__PURE__*/ _async_to_generator(function() {
        var component, input, eventPromise, changeEvent, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent();
                    input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'endiannesschanged');
                    changeEvent = new Event('change');
                    input.dispatchEvent(changeEvent);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.data, "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ );
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LinearMemoryValueInterpreter.test.js.map


}),

}]);