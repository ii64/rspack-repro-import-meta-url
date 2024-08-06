"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryViewer_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryViewer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  VIEWER_ADDRESS_SELECTOR: function() { return VIEWER_ADDRESS_SELECTOR; },
  VIEWER_BYTE_CELL_SELECTOR: function() { return VIEWER_BYTE_CELL_SELECTOR; },
  VIEWER_ROW_SELECTOR: function() { return VIEWER_ROW_SELECTOR; },
  VIEWER_TEXT_CELL_SELECTOR: function() { return VIEWER_TEXT_CELL_SELECTOR; }
});
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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


var NUM_BYTES_PER_GROUP = 4;
var VIEWER_BYTE_CELL_SELECTOR = '.byte-cell';
var VIEWER_TEXT_CELL_SELECTOR = '.text-cell';
var VIEWER_ROW_SELECTOR = '.row';
var VIEWER_ADDRESS_SELECTOR = '.address';
describe('LinearMemoryViewer', function() {
    var setUpComponent = function setUpComponent() {
        return _setUpComponent.apply(this, arguments);
    };
    var setUpComponentWithHighlightInfo = function setUpComponentWithHighlightInfo() {
        return _setUpComponentWithHighlightInfo.apply(this, arguments);
    };
    var createComponent = function createComponent() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        var flexWrapper = document.createElement('div');
        flexWrapper.style.width = '500px';
        flexWrapper.style.height = '500px';
        flexWrapper.style.display = 'flex';
        flexWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(flexWrapper);
        return component;
    };
    var createComponentData = function createComponentData() {
        var memory = [];
        for(var i = 0; i < 1000; ++i){
            memory.push(i);
        }
        var data = {
            memory: new Uint8Array(memory),
            address: 2,
            memoryOffset: 0,
            focus: true
        };
        return data;
    };
    var getCellsPerRow = function getCellsPerRow(component, cellSelector) {
        assert.isNotNull(component.shadowRoot);
        var row = component.shadowRoot.querySelector(VIEWER_ROW_SELECTOR);
        assert.instanceOf(row, HTMLDivElement);
        var cellsPerRow = row.querySelectorAll(cellSelector);
        assert.isNotEmpty(cellsPerRow);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(cellsPerRow, HTMLSpanElement);
        return cellsPerRow;
    };
    var assertSelectedCellIsHighlighted = function assertSelectedCellIsHighlighted(component, cellSelector, index) {
        assert.isNotNull(component.shadowRoot);
        var selectedCells = component.shadowRoot.querySelectorAll(cellSelector + '.selected');
        assert.lengthOf(selectedCells, 1);
        assert.instanceOf(selectedCells[0], HTMLSpanElement);
        var selectedCell = selectedCells[0];
        var allCells = getCellsPerRow(component, cellSelector);
        assert.isAtLeast(allCells.length, index);
        var cellAtAddress = allCells[index];
        assert.strictEqual(selectedCell, cellAtAddress);
    };
    var assertEventTriggeredOnArrowNavigation = function assertEventTriggeredOnArrowNavigation(component, code, expectedAddress) {
        return _assertEventTriggeredOnArrowNavigation.apply(this, arguments);
    };
    function _setUpComponent() {
        _setUpComponent = _async_to_generator(function() {
            var component, data, event, numBytesPerPage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = createComponent();
                        data = createComponentData();
                        component.data = data;
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize')
                        ];
                    case 1:
                        event = _state.sent();
                        numBytesPerPage = event.data;
                        assert.isAbove(numBytesPerPage, 4);
                        return [
                            2,
                            {
                                component: component,
                                data: data
                            }
                        ];
                }
            });
        });
        return _setUpComponent.apply(this, arguments);
    }
    function _setUpComponentWithHighlightInfo() {
        _setUpComponentWithHighlightInfo = _async_to_generator(function() {
            var component, data, highlightInfo, dataWithHighlightInfo, eventPromise, event, numBytesPerPage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        component = createComponent();
                        data = createComponentData();
                        highlightInfo = {
                            startAddress: 2,
                            size: 21,
                            type: 'bool[]'
                        };
                        dataWithHighlightInfo = _object_spread_props(_object_spread({}, data), {
                            highlightInfo: highlightInfo
                        });
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize');
                        component.data = dataWithHighlightInfo;
                        return [
                            4,
                            eventPromise
                        ];
                    case 1:
                        event = _state.sent();
                        numBytesPerPage = event.data;
                        assert.isAbove(numBytesPerPage, 4);
                        return [
                            2,
                            {
                                component: component,
                                dataWithHighlightInfo: dataWithHighlightInfo
                            }
                        ];
                }
            });
        });
        return _setUpComponentWithHighlightInfo.apply(this, arguments);
    }
    function _assertEventTriggeredOnArrowNavigation() {
        _assertEventTriggeredOnArrowNavigation = _async_to_generator(function(component, code, expectedAddress) {
            var eventPromise, view, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
                        view = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '.view', HTMLDivElement);
                        view.dispatchEvent(new KeyboardEvent('keydown', {
                            'code': code
                        }));
                        return [
                            4,
                            eventPromise
                        ];
                    case 1:
                        event = _state.sent();
                        assert.strictEqual(event.data, expectedAddress);
                        return [
                            2
                        ];
                }
            });
        });
        return _assertEventTriggeredOnArrowNavigation.apply(this, arguments);
    }
    it('correctly renders bytes given a memory offset greater than zero', function() {
        var data = createComponentData();
        data.memoryOffset = 1;
        assert.isAbove(data.address, data.memoryOffset);
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        component.data = data;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var selectedByte = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR + '.selected', HTMLSpanElement);
        var selectedValue = parseInt(selectedByte.innerText, 16);
        assert.strictEqual(selectedValue, data.memory[data.address - data.memoryOffset]);
    });
    it('triggers an event on resize', /*#__PURE__*/ _async_to_generator(function() {
        var data, component, thinWrapper, eventPromise, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = createComponentData();
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
                    component.data = data;
                    thinWrapper = document.createElement('div');
                    thinWrapper.style.width = '100px';
                    thinWrapper.style.height = '100px';
                    thinWrapper.style.display = 'flex';
                    thinWrapper.appendChild(component);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'resize');
                    thinWrapper.style.width = '800px';
                    _ = assert.isNotNull;
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders one address per row', /*#__PURE__*/ _async_to_generator(function() {
        var component, rows, addresses;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll(VIEWER_ROW_SELECTOR);
                    addresses = component.shadowRoot.querySelectorAll(VIEWER_ADDRESS_SELECTOR);
                    assert.isNotEmpty(rows);
                    assert.strictEqual(rows.length, addresses.length);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders addresses depending on the bytes per row', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, bytesPerRow, numBytesPerRow, addresses, i, currentAddress, addressElement, hex;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
                    numBytesPerRow = bytesPerRow.length;
                    assert.isNotNull(component.shadowRoot);
                    addresses = component.shadowRoot.querySelectorAll(VIEWER_ADDRESS_SELECTOR);
                    assert.isNotEmpty(addresses);
                    for(i = 0, currentAddress = data.memoryOffset; i < addresses.length; currentAddress += numBytesPerRow, ++i){
                        addressElement = addresses[i];
                        assert.instanceOf(addressElement, HTMLSpanElement);
                        hex = currentAddress.toString(16).toUpperCase().padStart(8, '0');
                        assert.strictEqual(addressElement.innerText, hex);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders unsplittable byte group', function() {
        var thinWrapper = document.createElement('div');
        thinWrapper.style.width = '10px';
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        component.data = createComponentData();
        thinWrapper.appendChild(component);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
        var bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
        assert.strictEqual(bytesPerRow.length, NUM_BYTES_PER_GROUP);
    });
    it('renders byte values corresponding to memory set', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, bytes, memory, bytesPerPage, memoryStartAddress, i, hex;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    bytes = component.shadowRoot.querySelectorAll(VIEWER_BYTE_CELL_SELECTOR);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(bytes, HTMLSpanElement);
                    memory = data.memory;
                    bytesPerPage = bytes.length;
                    memoryStartAddress = Math.floor(data.address / bytesPerPage) * bytesPerPage;
                    assert.isAtMost(bytes.length, memory.length);
                    for(i = 0; i < bytes.length; ++i){
                        hex = memory[memoryStartAddress + i].toString(16).toUpperCase().padStart(2, '0');
                        assert.strictEqual(bytes[i].innerText, hex);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on selecting a byte value', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, byte, eventPromise, _ref1, address;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    byte = component.shadowRoot.querySelector(VIEWER_BYTE_CELL_SELECTOR);
                    assert.instanceOf(byte, HTMLSpanElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
                    byte.click();
                    return [
                        4,
                        eventPromise
                    ];
                case 2:
                    _ref1 = _state.sent(), address = _ref1.data;
                    assert.strictEqual(address, data.memoryOffset);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders as many ascii values as byte values in a row', /*#__PURE__*/ _async_to_generator(function() {
        var component, bytes, ascii;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    component = _state.sent().component;
                    bytes = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
                    ascii = getCellsPerRow(component, VIEWER_TEXT_CELL_SELECTOR);
                    assert.strictEqual(bytes.length, ascii.length);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders ascii values corresponding to bytes', /*#__PURE__*/ _async_to_generator(function() {
        var component, asciiValues, byteValues, smallestPrintableAscii, largestPrintableAscii, i, byteValue, asciiText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    asciiValues = component.shadowRoot.querySelectorAll(VIEWER_TEXT_CELL_SELECTOR);
                    byteValues = component.shadowRoot.querySelectorAll(VIEWER_BYTE_CELL_SELECTOR);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(asciiValues, HTMLSpanElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(byteValues, HTMLSpanElement);
                    assert.strictEqual(byteValues.length, asciiValues.length);
                    smallestPrintableAscii = 20;
                    largestPrintableAscii = 127;
                    for(i = 0; i < byteValues.length; ++i){
                        byteValue = parseInt(byteValues[i].innerText, 16);
                        asciiText = asciiValues[i].innerText;
                        if (byteValue < smallestPrintableAscii || byteValue > largestPrintableAscii) {
                            assert.strictEqual(asciiText, '.');
                        } else {
                            assert.strictEqual(asciiText, String.fromCharCode(byteValue).trim());
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on selecting an ascii value', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, asciiCell, eventPromise, _ref1, address;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    assert.isNotNull(component.shadowRoot);
                    asciiCell = component.shadowRoot.querySelector(VIEWER_TEXT_CELL_SELECTOR);
                    assert.instanceOf(asciiCell, HTMLSpanElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'byteselected');
                    asciiCell.click();
                    return [
                        4,
                        eventPromise
                    ];
                case 2:
                    _ref1 = _state.sent(), address = _ref1.data;
                    assert.strictEqual(address, data.memoryOffset);
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights selected byte value on setting an address', function() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_1__.LinearMemoryViewer.LinearMemoryViewer();
        var memory = new Uint8Array([
            2,
            3,
            5,
            3
        ]);
        var address = 2;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            memory: memory,
            address: address,
            memoryOffset: 0,
            focus: true
        };
        assertSelectedCellIsHighlighted(component, VIEWER_BYTE_CELL_SELECTOR, address);
        assertSelectedCellIsHighlighted(component, VIEWER_TEXT_CELL_SELECTOR, address);
        assertSelectedCellIsHighlighted(component, VIEWER_ADDRESS_SELECTOR, 0);
    });
    it('triggers an event on arrow down', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    expectedAddress = addressBefore - 1;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'ArrowLeft', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on arrow right', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    expectedAddress = addressBefore + 1;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'ArrowRight', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on arrow down', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, bytesPerRow, numBytesPerRow, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
                    numBytesPerRow = bytesPerRow.length;
                    expectedAddress = addressBefore + numBytesPerRow;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'ArrowDown', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on arrow up', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, bytesPerRow, numBytesPerRow, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    bytesPerRow = getCellsPerRow(component, VIEWER_BYTE_CELL_SELECTOR);
                    numBytesPerRow = bytesPerRow.length;
                    expectedAddress = addressBefore - numBytesPerRow;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'ArrowUp', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on page down', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, bytes, numBytesPerPage, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    numBytesPerPage = bytes.length;
                    expectedAddress = addressBefore + numBytesPerPage;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'PageDown', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers an event on page down', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, data, addressBefore, bytes, numBytesPerPage, expectedAddress;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, data = _ref.data;
                    addressBefore = data.address;
                    bytes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, VIEWER_BYTE_CELL_SELECTOR, HTMLSpanElement);
                    numBytesPerPage = bytes.length;
                    expectedAddress = addressBefore - numBytesPerPage;
                    return [
                        4,
                        assertEventTriggeredOnArrowNavigation(component, 'PageUp', expectedAddress)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not highlight any bytes when no highlight info set', /*#__PURE__*/ _async_to_generator(function() {
        var component, byteCells, textCells;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponent()
                    ];
                case 1:
                    component = _state.sent().component;
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
                    textCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.text-cell.highlight-area', HTMLSpanElement);
                    assert.strictEqual(byteCells.length, 0);
                    assert.strictEqual(textCells.length, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights correct number of bytes when highlight info set', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, dataWithHighlightInfo, byteCells, textCells;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponentWithHighlightInfo()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, dataWithHighlightInfo = _ref.dataWithHighlightInfo;
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
                    textCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.text-cell.highlight-area', HTMLSpanElement);
                    assert.strictEqual(byteCells.length, dataWithHighlightInfo.highlightInfo.size);
                    assert.strictEqual(textCells.length, dataWithHighlightInfo.highlightInfo.size);
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights byte cells at correct positions when highlight info set', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, dataWithHighlightInfo, byteCells, i, selectedValue, index;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponentWithHighlightInfo()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, dataWithHighlightInfo = _ref.dataWithHighlightInfo;
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.highlight-area', HTMLSpanElement);
                    for(i = 0; i < byteCells.length; ++i){
                        selectedValue = parseInt(byteCells[i].innerText, 16);
                        index = dataWithHighlightInfo.highlightInfo.startAddress - dataWithHighlightInfo.memoryOffset + i;
                        assert.strictEqual(selectedValue, dataWithHighlightInfo.memory[index]);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('focuses highlighted byte cells when focusedMemoryHighlight provided', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, dataWithHighlightInfo, dataWithFocusedMemoryHighlight, byteCells, i, selectedValue, index;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponentWithHighlightInfo()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, dataWithHighlightInfo = _ref.dataWithHighlightInfo;
                    dataWithFocusedMemoryHighlight = _object_spread_props(_object_spread({}, dataWithHighlightInfo), {
                        focusedMemoryHighlight: dataWithHighlightInfo.highlightInfo
                    });
                    component.data = dataWithFocusedMemoryHighlight;
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.focused', HTMLSpanElement);
                    for(i = 0; i < byteCells.length; ++i){
                        selectedValue = parseInt(byteCells[i].innerText, 16);
                        index = dataWithHighlightInfo.highlightInfo.startAddress - dataWithHighlightInfo.memoryOffset + i;
                        assert.strictEqual(selectedValue, dataWithHighlightInfo.memory[index]);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not focus highlighted byte cells when no focusedMemoryHighlight provided', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, dataWithHighlightInfo, dataWithFocusedMemoryHighlight, byteCells;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setUpComponentWithHighlightInfo()
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, dataWithHighlightInfo = _ref.dataWithHighlightInfo;
                    dataWithFocusedMemoryHighlight = _object_spread_props(_object_spread({}, dataWithHighlightInfo), {
                        focusedMemoryHighlight: dataWithHighlightInfo.highlightInfo
                    });
                    component.data = dataWithFocusedMemoryHighlight;
                    byteCells = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, '.byte-cell.focused', HTMLSpanElement);
                    assert.isEmpty(byteCells);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LinearMemoryViewer.test.js.map


}),
"./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LinearMemoryViewerUtils.js.map


}),
"./panels/linear_memory_inspector/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryHighlightChipList: function() { return /* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__; },
  LinearMemoryInspector: function() { return /* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__; },
  LinearMemoryInspectorUtils: function() { return /* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__; },
  LinearMemoryNavigator: function() { return /* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__; },
  LinearMemoryValueInterpreter: function() { return /* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__; },
  LinearMemoryViewer: function() { return /* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__; },
  LinearMemoryViewerUtils: function() { return /* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__; },
  ValueInterpreterDisplay: function() { return /* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__; },
  ValueInterpreterDisplayUtils: function() { return /* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__; },
  ValueInterpreterSettings: function() { return /* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__; }
});
/* harmony import */var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










 //# sourceMappingURL=components.js.map


}),

}]);