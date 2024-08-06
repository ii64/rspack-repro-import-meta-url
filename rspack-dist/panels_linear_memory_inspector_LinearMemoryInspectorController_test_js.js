"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_LinearMemoryInspectorController_test_js"], {
"./panels/linear_memory_inspector/LinearMemoryInspectorController.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */var _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear_memory_inspector.js */ "./panels/linear_memory_inspector/linear_memory_inspector.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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




var LinearMemoryInspectorController = _linear_memory_inspector_js__WEBPACK_IMPORTED_MODULE_3__.LinearMemoryInspectorController;
var ValueInterpreterDisplayUtils = _components_components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplayUtils;
var MockRemoteObject = /*#__PURE__*/ function(_SDK_RemoteObject_LocalJSONObject) {
    "use strict";
    _inherits(MockRemoteObject, _SDK_RemoteObject_LocalJSONObject);
    var _super = _create_super(MockRemoteObject);
    function MockRemoteObject(array) {
        _class_call_check(this, MockRemoteObject);
        var _this;
        _this = _super.call(this, array);
        _define_property(_assert_this_initialized(_this), "objSubtype", void 0);
        return _this;
    }
    _create_class(MockRemoteObject, [
        {
            key: "arrayBufferByteLength",
            value: function arrayBufferByteLength() {
                return this.value.byteLength;
            }
        },
        {
            key: "subtype",
            get: function get() {
                return 'arraybuffer';
            }
        }
    ]);
    return MockRemoteObject;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.LocalJSONObject);
function createWrapper(array) {
    var mockRemoteObj = new MockRemoteObject(array.buffer);
    var mockRemoteArrayBuffer = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteArrayBuffer(mockRemoteObj);
    return new LinearMemoryInspectorController.RemoteArrayBufferWrapper(mockRemoteArrayBuffer);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('LinearMemoryInspectorController', function() {
    it('throws an error on an invalid (out-of-bounds) memory range request', /*#__PURE__*/ _async_to_generator(function() {
        var array, wrapper, e, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    array = new Uint8Array([
                        2,
                        4,
                        6,
                        2,
                        4
                    ]);
                    wrapper = createWrapper(array);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 10, 20)
                    ];
                case 2:
                    _state.sent();
                    throw new Error('Function did now throw.');
                case 3:
                    e = _state.sent();
                    error = e;
                    assert.strictEqual(error.message, 'Requested range is out of bounds.');
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws an error on an invalid memory range request', /*#__PURE__*/ _async_to_generator(function() {
        var array, wrapper, e, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    array = new Uint8Array([
                        2,
                        4,
                        6,
                        2,
                        4
                    ]);
                    wrapper = createWrapper(array);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 20, 10)
                    ];
                case 2:
                    _state.sent();
                    throw new Error('Function did now throw.');
                case 3:
                    e = _state.sent();
                    error = e;
                    assert.strictEqual(error.message, 'Requested range is out of bounds.');
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    it('can pull updated data on memory range request', /*#__PURE__*/ _async_to_generator(function() {
        var array, wrapper, valuesBefore, i, changedIndex, changedValue, valuesAfter, i1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    array = new Uint8Array([
                        2,
                        4,
                        6,
                        2,
                        4
                    ]);
                    wrapper = createWrapper(array);
                    return [
                        4,
                        LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 0, array.length)
                    ];
                case 1:
                    valuesBefore = _state.sent();
                    assert.strictEqual(valuesBefore.length, array.length);
                    for(i = 0; i < array.length; ++i){
                        assert.strictEqual(valuesBefore[i], array[i]);
                    }
                    changedIndex = 0;
                    changedValue = 10;
                    array[changedIndex] = changedValue;
                    return [
                        4,
                        LinearMemoryInspectorController.LinearMemoryInspectorController.getMemoryRange(wrapper, 0, array.length)
                    ];
                case 2:
                    valuesAfter = _state.sent();
                    assert.strictEqual(valuesAfter.length, valuesBefore.length);
                    for(i1 = 0; i1 < valuesBefore.length; ++i1){
                        if (i1 === changedIndex) {
                            assert.strictEqual(valuesAfter[i1], changedValue);
                        } else {
                            assert.strictEqual(valuesAfter[i1], valuesBefore[i1]);
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('triggers saving and loading of settings on settings changed event', function() {
        var instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        var valueTypes = new Set([
            "Integer 16-bit" /* ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
            "Float 32-bit" /* ValueInterpreterDisplayUtils.ValueType.Float32 */ 
        ]);
        var valueTypeModes = new Map([
            [
                "Integer 16-bit" /* ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
                "hex" /* ValueInterpreterDisplayUtils.ValueTypeMode.Hexadecimal */ 
            ]
        ]);
        var settings = {
            valueTypes: valueTypes,
            modes: valueTypeModes,
            endianness: "Little Endian" /* ValueInterpreterDisplayUtils.Endianness.Little */ 
        };
        var defaultSettings = instance.loadSettings();
        instance.saveSettings(settings);
        assert.notDeepEqual(defaultSettings, settings);
        var actualSettings = instance.loadSettings();
        assert.deepEqual(actualSettings, settings);
    });
    it('returns undefined when error happens in evaluateExpression', /*#__PURE__*/ _async_to_generator(function() {
        var errorText, callFrame, stub, instance, expressionName, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    errorText = 'This is a test error';
                    callFrame = {
                        evaluate: function(param) {
                            var ref = _object_destructuring_empty(param);
                            return new Promise(function(resolve) {
                                resolve({
                                    error: errorText
                                });
                            });
                        }
                    };
                    stub = sinon.stub(console, 'error');
                    instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
                    expressionName = 'myCar';
                    return [
                        4,
                        instance.evaluateExpression(callFrame, expressionName)
                    ];
                case 1:
                    result = _state.sent();
                    assert.strictEqual(result, undefined);
                    assert.isTrue(stub.calledOnceWithExactly("Tried to evaluate the expression '".concat(expressionName, "' but got an error: ").concat(errorText)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns undefined when exceptionDetails is set on the result of evaluateExpression', /*#__PURE__*/ _async_to_generator(function() {
        var exceptionText, callFrame, stub, instance, expressionName, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    exceptionText = 'This is a test exception\'s detail text';
                    callFrame = {
                        evaluate: function(param) {
                            var ref = _object_destructuring_empty(param);
                            return new Promise(function(resolve) {
                                resolve({
                                    object: {
                                        type: 'object'
                                    },
                                    exceptionDetails: {
                                        text: exceptionText
                                    }
                                });
                            });
                        }
                    };
                    stub = sinon.stub(console, 'error');
                    instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
                    expressionName = 'myCar.manufacturer';
                    return [
                        4,
                        instance.evaluateExpression(callFrame, expressionName)
                    ];
                case 1:
                    result = _state.sent();
                    assert.strictEqual(result, undefined);
                    assert.isTrue(stub.calledOnceWithExactly("Tried to evaluate the expression '".concat(expressionName, "' but got an exception: ").concat(exceptionText)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns RemoteObject when no exception happens in evaluateExpression', /*#__PURE__*/ _async_to_generator(function() {
        var expectedObj, callFrame, instance, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expectedObj = {
                        type: 'object'
                    };
                    callFrame = {
                        evaluate: function(param) {
                            var ref = _object_destructuring_empty(param);
                            return new Promise(function(resolve) {
                                resolve({
                                    object: expectedObj
                                });
                            });
                        }
                    };
                    instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
                    return [
                        4,
                        instance.evaluateExpression(callFrame, 'myCar.manufacturer')
                    ];
                case 1:
                    result = _state.sent();
                    assert.deepEqual(result, expectedObj);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes the provided highlightInfo when it is stored in the Controller', function() {
        var highlightInfo = {
            startAddress: 0,
            size: 16,
            name: 'myNumbers',
            type: 'int[]'
        };
        var bufferId = 'someBufferId';
        var instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        instance.setHighlightInfo(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
        instance.removeHighlight(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), undefined);
    });
    it('does not change the stored highlight when the provided highlightInfo does not match', function() {
        var highlightInfo = {
            startAddress: 0,
            size: 16,
            name: 'myNumbers',
            type: 'int[]'
        };
        var differentHighlightInfo = {
            startAddress: 20,
            size: 50,
            name: 'myBytes',
            type: 'bool[]'
        };
        var bufferId = 'someBufferId';
        var instance = LinearMemoryInspectorController.LinearMemoryInspectorController.instance();
        instance.setHighlightInfo(bufferId, highlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
        instance.removeHighlight(bufferId, differentHighlightInfo);
        assert.deepEqual(instance.getHighlightInfo(bufferId), highlightInfo);
    });
});
describe('RemoteArrayBufferWrapper', function() {
    it('correctly wraps the remote object', /*#__PURE__*/ _async_to_generator(function() {
        var array, wrapper, extractedArray, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    array = new Uint8Array([
                        2,
                        4,
                        6,
                        2,
                        4
                    ]);
                    wrapper = createWrapper(array);
                    assert.strictEqual(wrapper.length(), array.length);
                    return [
                        4,
                        wrapper.getRange(0, 3)
                    ];
                case 1:
                    extractedArray = _state.sent();
                    assert.lengthOf(extractedArray, 3);
                    for(i = 0; i < 3; ++i){
                        assert.deepEqual(array[i], extractedArray[i]);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LinearMemoryInspectorController.test.js.map


}),
"./panels/linear_memory_inspector/linear_memory_inspector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryInspectorController: function() { return /* reexport module object */ _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LinearMemoryInspectorPane: function() { return /* reexport module object */ _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js");
/* harmony import */var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=linear_memory_inspector.js.map


}),

}]);