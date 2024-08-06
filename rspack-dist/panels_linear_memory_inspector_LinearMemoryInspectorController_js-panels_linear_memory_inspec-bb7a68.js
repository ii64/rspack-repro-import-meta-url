"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_LinearMemoryInspectorController_js-panels_linear_memory_inspec-bb7a68"], {
"./panels/linear_memory_inspector/LinearMemoryInspectorController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryInspectorController: function() { return LinearMemoryInspectorController; },
  RemoteArrayBufferWrapper: function() { return RemoteArrayBufferWrapper; },
  isDWARFMemoryObject: function() { return isDWARFMemoryObject; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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







var UIStrings = {
    /**
     *@description Error message that shows up in the console if a buffer to be opened in the linear memory inspector cannot be found.
     */ couldNotOpenLinearMemory: 'Could not open linear memory inspector: failed locating buffer.',
    /**
     *@description A context menu item in the Scope View of the Sources Panel
     */ revealInMemoryInspectorPanel: 'Reveal in Memory inspector panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/LinearMemoryInspectorController.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var LINEAR_MEMORY_INSPECTOR_OBJECT_GROUP = 'linear-memory-inspector';
var MEMORY_TRANSFER_MIN_CHUNK_SIZE = 1000;
var controllerInstance;
var _remoteArrayBuffer = /*#__PURE__*/ new WeakMap();
var RemoteArrayBufferWrapper = /*#__PURE__*/ function() {
    "use strict";
    function RemoteArrayBufferWrapper(arrayBuffer) {
        _class_call_check(this, RemoteArrayBufferWrapper);
        _class_private_field_init(this, _remoteArrayBuffer, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _remoteArrayBuffer, arrayBuffer);
    }
    _create_class(RemoteArrayBufferWrapper, [
        {
            key: "length",
            value: function length() {
                return _class_private_field_get(this, _remoteArrayBuffer).byteLength();
            }
        },
        {
            key: "getRange",
            value: function getRange(start, end) {
                var _this = this;
                return _async_to_generator(function() {
                    var newEnd, array;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                newEnd = Math.min(end, _this.length());
                                if (start < 0 || start > newEnd) {
                                    console.error("Requesting invalid range of memory: (".concat(start, ", ").concat(end, ")"));
                                    return [
                                        2,
                                        new Uint8Array(0)
                                    ];
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _remoteArrayBuffer).bytes(start, newEnd)
                                ];
                            case 1:
                                array = _state.sent();
                                return [
                                    2,
                                    new Uint8Array(array)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RemoteArrayBufferWrapper;
}();
function getBufferFromObject(obj) {
    return _getBufferFromObject.apply(this, arguments);
}
function _getBufferFromObject() {
    _getBufferFromObject = _async_to_generator(function(obj) {
        var response, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        obj.runtimeModel().agent.invoke_callFunctionOn({
                            objectId: obj.objectId,
                            functionDeclaration: 'function() { return this instanceof ArrayBuffer || (typeof SharedArrayBuffer !== \'undefined\' && this instanceof SharedArrayBuffer) ? this : this.buffer; }',
                            silent: true,
                            // Set object group in order to bind the object lifetime to the linear memory inspector.
                            objectGroup: LINEAR_MEMORY_INSPECTOR_OBJECT_GROUP
                        })
                    ];
                case 1:
                    response = _state.sent();
                    error = response.getError();
                    if (error) {
                        throw new Error("Remote object representing ArrayBuffer could not be retrieved: ".concat(error));
                    }
                    obj = obj.runtimeModel().createRemoteObject(response.result);
                    return [
                        2,
                        new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteArrayBuffer(obj)
                    ];
            }
        });
    });
    return _getBufferFromObject.apply(this, arguments);
}
function isDWARFMemoryObject(obj) {
    if (_instanceof(obj, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject)) {
        return obj.linearMemoryAddress !== undefined;
    }
    return false;
}
var _paneInstance = /*#__PURE__*/ new WeakMap(), _bufferIdToRemoteObject = /*#__PURE__*/ new WeakMap(), _bufferIdToHighlightInfo = /*#__PURE__*/ new WeakMap(), _settings = /*#__PURE__*/ new WeakMap(), _resetHighlightInfo = /*#__PURE__*/ new WeakSet(), _onDebuggerPause = /*#__PURE__*/ new WeakSet(), _onGlobalObjectClear = /*#__PURE__*/ new WeakSet(), _viewClosed = /*#__PURE__*/ new WeakSet(), _pointToSameMemoryObject = /*#__PURE__*/ new WeakSet();
var LinearMemoryInspectorController = /*#__PURE__*/ function(_SDK_TargetManager_SDKModelObserver) {
    "use strict";
    _inherits(LinearMemoryInspectorController, _SDK_TargetManager_SDKModelObserver);
    var _super = _create_super(LinearMemoryInspectorController);
    function LinearMemoryInspectorController() {
        _class_call_check(this, LinearMemoryInspectorController);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _resetHighlightInfo);
        _class_private_method_init(_assert_this_initialized(_this), _onDebuggerPause);
        _class_private_method_init(_assert_this_initialized(_this), _onGlobalObjectClear);
        _class_private_method_init(_assert_this_initialized(_this), _viewClosed);
        _class_private_method_init(_assert_this_initialized(_this), _pointToSameMemoryObject);
        _class_private_field_init(_assert_this_initialized(_this), _paneInstance, {
            writable: true,
            value: _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryInspectorPane.instance()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bufferIdToRemoteObject, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bufferIdToHighlightInfo, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _settings, {
            writable: true,
            value: void 0
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.GlobalObjectCleared, _class_private_method_get(_assert_this_initialized(_this), _onGlobalObjectClear, onGlobalObjectClear), _assert_this_initialized(_this));
        _class_private_field_get(_this, _paneInstance).addEventListener("ViewClosed" /* LmiEvents.ViewClosed */ , _class_private_method_get(_this, _viewClosed, viewClosed).bind(_assert_this_initialized(_this)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, _class_private_method_get(_assert_this_initialized(_this), _onDebuggerPause, onDebuggerPause), _assert_this_initialized(_this));
        var defaultValueTypeModes = _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping();
        var defaultSettings = {
            valueTypes: Array.from(defaultValueTypeModes.keys()),
            valueTypeModes: Array.from(defaultValueTypeModes),
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ 
        };
        _class_private_field_set(_assert_this_initialized(_this), _settings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lmi-interpreter-settings', defaultSettings));
        return _this;
    }
    _create_class(LinearMemoryInspectorController, [
        {
            key: "evaluateExpression",
            value: function evaluateExpression(callFrame, expressionName) {
                return _async_to_generator(function() {
                    var _result_exceptionDetails, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    callFrame.evaluate({
                                        expression: expressionName
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                if ('error' in result) {
                                    console.error("Tried to evaluate the expression '".concat(expressionName, "' but got an error: ").concat(result.error));
                                    return [
                                        2,
                                        undefined
                                    ];
                                }
                                if ('exceptionDetails' in result && (result === null || result === void 0 ? void 0 : (_result_exceptionDetails = result.exceptionDetails) === null || _result_exceptionDetails === void 0 ? void 0 : _result_exceptionDetails.text)) {
                                    console.error("Tried to evaluate the expression '".concat(expressionName, "' but got an exception: ").concat(result.exceptionDetails.text));
                                    return [
                                        2,
                                        undefined
                                    ];
                                }
                                return [
                                    2,
                                    result.object
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "saveSettings",
            value: function saveSettings(data) {
                var valueTypes = Array.from(data.valueTypes);
                var modes = _to_consumable_array(data.modes);
                _class_private_field_get(this, _settings).set({
                    valueTypes: valueTypes,
                    valueTypeModes: modes,
                    endianness: data.endianness
                });
            }
        },
        {
            key: "loadSettings",
            value: function loadSettings() {
                var settings = _class_private_field_get(this, _settings).get();
                return {
                    valueTypes: new Set(settings.valueTypes),
                    modes: new Map(settings.valueTypeModes),
                    endianness: settings.endianness
                };
            }
        },
        {
            key: "getHighlightInfo",
            value: function getHighlightInfo(bufferId) {
                return _class_private_field_get(this, _bufferIdToHighlightInfo).get(bufferId);
            }
        },
        {
            key: "removeHighlight",
            value: function removeHighlight(bufferId, highlightInfo) {
                var currentHighlight = this.getHighlightInfo(bufferId);
                if (currentHighlight === highlightInfo) {
                    _class_private_field_get(this, _bufferIdToHighlightInfo).delete(bufferId);
                }
            }
        },
        {
            key: "setHighlightInfo",
            value: function setHighlightInfo(bufferId, highlightInfo) {
                _class_private_field_get(this, _bufferIdToHighlightInfo).set(bufferId, highlightInfo);
            }
        },
        {
            key: "reveal",
            value: function reveal(param, omitFocus) {
                var object = param.object, expression = param.expression;
                var _this = this;
                return _async_to_generator(function() {
                    var _idProperty_value, response, memoryObject, memoryAddress, buffer, internalProperties, idProperty, id, memoryProperty, memory, highlightInfo, title, arrayBufferWrapper;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    LinearMemoryInspectorController.retrieveDWARFMemoryObjectAndAddress(object)
                                ];
                            case 1:
                                response = _state.sent();
                                memoryObject = object;
                                memoryAddress = undefined;
                                if (response !== undefined) {
                                    memoryAddress = response.address;
                                    memoryObject = response.obj;
                                }
                                return [
                                    4,
                                    getBufferFromObject(memoryObject)
                                ];
                            case 2:
                                buffer = _state.sent();
                                return [
                                    4,
                                    buffer.object().getOwnProperties(false)
                                ];
                            case 3:
                                internalProperties = _state.sent().internalProperties;
                                idProperty = internalProperties === null || internalProperties === void 0 ? void 0 : internalProperties.find(function(param) {
                                    var name = param.name;
                                    return name === '[[ArrayBufferData]]';
                                });
                                id = idProperty === null || idProperty === void 0 ? void 0 : (_idProperty_value = idProperty.value) === null || _idProperty_value === void 0 ? void 0 : _idProperty_value.value;
                                if (!id) {
                                    throw new Error('Unable to find backing store id for array buffer');
                                }
                                memoryProperty = internalProperties === null || internalProperties === void 0 ? void 0 : internalProperties.find(function(param) {
                                    var name = param.name;
                                    return name === '[[WebAssemblyMemory]]';
                                });
                                memory = memoryProperty === null || memoryProperty === void 0 ? void 0 : memoryProperty.value;
                                highlightInfo = LinearMemoryInspectorController.extractHighlightInfo(object, expression);
                                if (highlightInfo) {
                                    _this.setHighlightInfo(id, highlightInfo);
                                } else {
                                    _class_private_method_get(_this, _resetHighlightInfo, resetHighlightInfo).call(_this, id);
                                }
                                if (_class_private_field_get(_this, _bufferIdToRemoteObject).has(id)) {
                                    _class_private_field_get(_this, _paneInstance).reveal(id, memoryAddress);
                                    void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('linear-memory-inspector', omitFocus);
                                    return [
                                        2
                                    ];
                                }
                                title = String(memory ? memory.description : buffer.object().description);
                                _class_private_field_get(_this, _bufferIdToRemoteObject).set(id, buffer.object());
                                arrayBufferWrapper = new RemoteArrayBufferWrapper(buffer);
                                _class_private_field_get(_this, _paneInstance).create(id, title, arrayBufferWrapper, memoryAddress);
                                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('linear-memory-inspector', omitFocus);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(_event, contextMenu, target) {
                var _target_property_value;
                if ((_target_property_value = target.property.value) === null || _target_property_value === void 0 ? void 0 : _target_property_value.isLinearMemoryInspectable()) {
                    var expression = target.path();
                    var object = target.property.value;
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.revealInMemoryInspectorPanel), this.reveal.bind(this, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.LinearMemoryInspectable(object, expression)), {
                        jslogContext: 'reveal-in-memory-inspector'
                    });
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(model) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _bufferIdToRemoteObject)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), bufferId = _step_value[0], remoteObject = _step_value[1];
                        if (model === remoteObject.runtimeModel()) {
                            _class_private_field_get(this, _bufferIdToRemoteObject).delete(bufferId);
                            _class_private_method_get(this, _resetHighlightInfo, resetHighlightInfo).call(this, bufferId);
                            _class_private_field_get(this, _paneInstance).close(bufferId);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "updateHighlightedMemory",
            value: function updateHighlightedMemory(bufferId, callFrame) {
                var _this = this;
                return _async_to_generator(function() {
                    var oldHighlightInfo, expressionName, obj, newHighlightInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                oldHighlightInfo = _this.getHighlightInfo(bufferId);
                                expressionName = oldHighlightInfo === null || oldHighlightInfo === void 0 ? void 0 : oldHighlightInfo.name;
                                if (!oldHighlightInfo || !expressionName) {
                                    _class_private_method_get(_this, _resetHighlightInfo, resetHighlightInfo).call(_this, bufferId);
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.evaluateExpression(callFrame, expressionName)
                                ];
                            case 1:
                                obj = _state.sent();
                                if (!obj) {
                                    _class_private_method_get(_this, _resetHighlightInfo, resetHighlightInfo).call(_this, bufferId);
                                    return [
                                        2
                                    ];
                                }
                                newHighlightInfo = LinearMemoryInspectorController.extractHighlightInfo(obj, expressionName);
                                if (!newHighlightInfo || !_class_private_method_get(_this, _pointToSameMemoryObject, pointToSameMemoryObject).call(_this, newHighlightInfo, oldHighlightInfo)) {
                                    _class_private_method_get(_this, _resetHighlightInfo, resetHighlightInfo).call(_this, bufferId);
                                } else {
                                    _this.setHighlightInfo(bufferId, newHighlightInfo);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (controllerInstance) {
                    return controllerInstance;
                }
                controllerInstance = new LinearMemoryInspectorController();
                return controllerInstance;
            }
        },
        {
            key: "getMemoryForAddress",
            value: function getMemoryForAddress(memoryWrapper, address) {
                return _async_to_generator(function() {
                    var memoryChunkStart, memoryChunkEnd, memory;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Provide a chunk of memory that covers the address to show and some before and after
                                // as 1. the address shown is not necessarily at the beginning of a page and
                                // 2. to allow for fewer memory requests.
                                memoryChunkStart = Math.max(0, address - MEMORY_TRANSFER_MIN_CHUNK_SIZE / 2);
                                memoryChunkEnd = memoryChunkStart + MEMORY_TRANSFER_MIN_CHUNK_SIZE;
                                return [
                                    4,
                                    memoryWrapper.getRange(memoryChunkStart, memoryChunkEnd)
                                ];
                            case 1:
                                memory = _state.sent();
                                return [
                                    2,
                                    {
                                        memory: memory,
                                        offset: memoryChunkStart
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getMemoryRange",
            value: function getMemoryRange(memoryWrapper, start, end) {
                return _async_to_generator(function() {
                    var chunkEnd;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Check that the requested start is within bounds.
                                // If the requested end is larger than the actual
                                // memory, it will be automatically capped when
                                // requesting the range.
                                if (start < 0 || start > end || start >= memoryWrapper.length()) {
                                    throw new Error('Requested range is out of bounds.');
                                }
                                chunkEnd = Math.max(end, start + MEMORY_TRANSFER_MIN_CHUNK_SIZE);
                                return [
                                    4,
                                    memoryWrapper.getRange(start, chunkEnd)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "retrieveDWARFMemoryObjectAndAddress",
            value: function retrieveDWARFMemoryObjectAndAddress(obj) {
                return _async_to_generator(function() {
                    var valueNode, address, callFrame, response, error, runtimeModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_instanceof(obj, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject)) {
                                    return [
                                        2,
                                        undefined
                                    ];
                                }
                                valueNode = obj;
                                address = obj.linearMemoryAddress;
                                if (address === undefined) {
                                    return [
                                        2,
                                        undefined
                                    ];
                                }
                                callFrame = valueNode.callFrame;
                                return [
                                    4,
                                    obj.debuggerModel().agent.invoke_evaluateOnCallFrame({
                                        callFrameId: callFrame.id,
                                        expression: 'memories[0]'
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                error = response.getError();
                                if (error) {
                                    console.error(error);
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.couldNotOpenLinearMemory));
                                }
                                runtimeModel = obj.debuggerModel().runtimeModel();
                                return [
                                    2,
                                    {
                                        obj: runtimeModel.createRemoteObject(response.result),
                                        address: address
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "extractObjectSize",
            value: // This function returns the size of the source language value represented by the ValueNode or ExtensionRemoteObject.
            // If the value is a pointer, the function returns the size of the pointed-to value. If the pointed-to value is also a
            // pointer, it returns the size of the pointer (usually 4 bytes). This is the convention taken by the DWARF extension.
            // > double x = 42.0;
            // > double *ptr = &x;
            // > double **dblptr = &ptr;
            //
            // retrieveObjectSize(ptr_ValueNode) -> 8, the size of a double
            // retrieveObjectSize(dblptr_ValueNode) -> 4, the size of a pointer
            function extractObjectSize(obj) {
                var _obj_linearMemorySize;
                return (_obj_linearMemorySize = obj.linearMemorySize) !== null && _obj_linearMemorySize !== void 0 ? _obj_linearMemorySize : 0;
            }
        },
        {
            key: "extractObjectTypeDescription",
            value: // The object type description corresponds to the type of the highlighted memory
            // that the user sees in the memory inspector. For pointers, we highlight the pointed to object.
            //
            // Example: The variable `x` has the type `int *`. Assume that `x` points to the value 3.
            // -> The memory inspector will jump to the address where 3 is stored.
            // -> The memory inspector will highlight the bytes that represent the 3.
            // -> The object type description of what we show will thus be `int` and not `int *`.
            function extractObjectTypeDescription(obj) {
                var objType = obj.description;
                if (!objType) {
                    return '';
                }
                var lastChar = objType.charAt(objType.length - 1);
                var secondToLastChar = objType.charAt(objType.length - 2);
                var isPointerType = lastChar === '*' || lastChar === '&';
                var isOneLevelPointer = secondToLastChar === ' ';
                if (!isPointerType) {
                    return objType;
                }
                if (isOneLevelPointer) {
                    // For example, 'int *'and 'int &' become 'int'.
                    return objType.slice(0, objType.length - 2);
                }
                // For example, 'int **' becomes 'int *'.
                return objType.slice(0, objType.length - 1);
            }
        },
        {
            key: "extractObjectName",
            value: // When inspecting a pointer variable, we indicate that we display the pointed-to object in the viewer
            // by prepending an asterisk to the pointer expression's name (mimicking C++ dereferencing).
            // If the object isn't a pointer, we return the expression unchanged.
            //
            // Examples:
            // (int *) myNumber -> (int) *myNumber
            // (int[]) numbers -> (int[]) numbers
            function extractObjectName(obj, expression) {
                var _obj_description;
                var lastChar = (_obj_description = obj.description) === null || _obj_description === void 0 ? void 0 : _obj_description.charAt(obj.description.length - 1);
                var isPointerType = lastChar === '*';
                if (isPointerType) {
                    return '*' + expression;
                }
                return expression;
            }
        },
        {
            key: "extractHighlightInfo",
            value: function extractHighlightInfo(obj, expression) {
                if (!_instanceof(obj, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject)) {
                    return undefined;
                }
                var _obj_linearMemoryAddress;
                var startAddress = (_obj_linearMemoryAddress = obj.linearMemoryAddress) !== null && _obj_linearMemoryAddress !== void 0 ? _obj_linearMemoryAddress : 0;
                var highlightInfo;
                try {
                    highlightInfo = {
                        startAddress: startAddress,
                        size: LinearMemoryInspectorController.extractObjectSize(obj),
                        name: expression ? LinearMemoryInspectorController.extractObjectName(obj, expression) : expression,
                        type: LinearMemoryInspectorController.extractObjectTypeDescription(obj)
                    };
                } catch (err) {
                    highlightInfo = undefined;
                }
                return highlightInfo;
            }
        }
    ]);
    return LinearMemoryInspectorController;
} //# sourceMappingURL=LinearMemoryInspectorController.js.map
(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.SDKModelObserver);
function resetHighlightInfo(bufferId) {
    _class_private_field_get(this, _bufferIdToHighlightInfo).delete(bufferId);
}
function onDebuggerPause(event) {
    var _this = this;
    var debuggerModel = event.data;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _this1, _loop = function() {
            var _step_value = _sliced_to_array(_step.value, 2), bufferId = _step_value[0], remoteObject = _step_value[1];
            if (debuggerModel.runtimeModel() === remoteObject.runtimeModel()) {
                var _debuggerModel_debuggerPausedDetails;
                var topCallFrame = (_debuggerModel_debuggerPausedDetails = debuggerModel.debuggerPausedDetails()) === null || _debuggerModel_debuggerPausedDetails === void 0 ? void 0 : _debuggerModel_debuggerPausedDetails.callFrames[0];
                if (topCallFrame) {
                    void _this1.updateHighlightedMemory(bufferId, topCallFrame)// Need to call refreshView in the callback to trigger re-render.
                    .then(function() {
                        return _class_private_field_get(_this, _paneInstance).refreshView(bufferId);
                    });
                } else {
                    _class_private_method_get(_this1, _resetHighlightInfo, resetHighlightInfo).call(_this1, bufferId);
                    _class_private_field_get(_this1, _paneInstance).refreshView(bufferId);
                }
            }
        };
        for(var _iterator = _class_private_field_get(this, _bufferIdToRemoteObject)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this1 = this, _loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function onGlobalObjectClear(event) {
    this.modelRemoved(event.data.runtimeModel());
}
function viewClosed(param) {
    var bufferId = param.data;
    var remoteObj = _class_private_field_get(this, _bufferIdToRemoteObject).get(bufferId);
    if (remoteObj) {
        remoteObj.release();
    }
    _class_private_field_get(this, _bufferIdToRemoteObject).delete(bufferId);
    _class_private_method_get(this, _resetHighlightInfo, resetHighlightInfo).call(this, bufferId);
}
function pointToSameMemoryObject(highlightInfoA, highlightInfoB) {
    return highlightInfoA.type === highlightInfoB.type && highlightInfoA.startAddress === highlightInfoB.startAddress;
}


}),
"./panels/linear_memory_inspector/LinearMemoryInspectorPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryInspectorPane: function() { return LinearMemoryInspectorPane; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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






var UIStrings = {
    /**
     *@description Label in the Linear Memory inspector tool that serves as a placeholder if no inspections are open (i.e. nothing to see here).
     *             Inspection hereby refers to viewing, navigating and understanding the memory through this tool.
     */ noOpenInspections: 'No open inspections'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/LinearMemoryInspectorPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var inspectorInstance;
var _tabbedPane = /*#__PURE__*/ new WeakMap(), _tabView = /*#__PURE__*/ new WeakSet(), _tabClosed = /*#__PURE__*/ new WeakSet();
var LinearMemoryInspectorPane = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(LinearMemoryInspectorPane, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(LinearMemoryInspectorPane);
    function LinearMemoryInspectorPane() {
        _class_call_check(this, LinearMemoryInspectorPane);
        var _this;
        _this = _super.call(this, false);
        _class_private_method_init(_assert_this_initialized(_this), _tabView);
        _class_private_method_init(_assert_this_initialized(_this), _tabClosed);
        _class_private_field_init(_assert_this_initialized(_this), _tabbedPane, {
            writable: true,
            value: void 0
        });
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.panel('linear-memory-inspector').track({
            resize: true
        })));
        var placeholder = document.createElement('div');
        placeholder.textContent = i18nString(UIStrings.noOpenInspections);
        placeholder.style.display = 'flex';
        _class_private_field_set(_assert_this_initialized(_this), _tabbedPane, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.TabbedPane());
        _class_private_field_get(_this, _tabbedPane).setPlaceholderElement(placeholder);
        _class_private_field_get(_this, _tabbedPane).setCloseableTabs(true);
        _class_private_field_get(_this, _tabbedPane).setAllowTabReorder(true, true);
        _class_private_field_get(_this, _tabbedPane).addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.Events.TabClosed, _class_private_method_get(_assert_this_initialized(_this), _tabClosed, tabClosed), _assert_this_initialized(_this));
        _class_private_field_get(_this, _tabbedPane).show(_this.contentElement);
        _class_private_field_get(_this, _tabbedPane).headerElement().setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar().track({
            keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space'
        })));
        return _this;
    }
    _create_class(LinearMemoryInspectorPane, [
        {
            key: "create",
            value: function create(tabId, title, arrayWrapper, address) {
                var inspectorView = new LinearMemoryInspectorView(arrayWrapper, address, tabId);
                _class_private_field_get(this, _tabbedPane).appendTab(tabId, title, inspectorView, undefined, false, true);
                _class_private_field_get(this, _tabbedPane).selectTab(tabId);
            }
        },
        {
            key: "close",
            value: function close(tabId) {
                _class_private_field_get(this, _tabbedPane).closeTab(tabId, false);
            }
        },
        {
            key: "reveal",
            value: function reveal(tabId, address) {
                var view = _class_private_method_get(this, _tabView, tabView).call(this, tabId);
                if (address !== undefined) {
                    view.updateAddress(address);
                }
                this.refreshView(tabId);
                _class_private_field_get(this, _tabbedPane).selectTab(tabId);
            }
        },
        {
            key: "refreshView",
            value: function refreshView(tabId) {
                var view = _class_private_method_get(this, _tabView, tabView).call(this, tabId);
                view.refreshData();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!inspectorInstance) {
                    inspectorInstance = new LinearMemoryInspectorPane();
                }
                return inspectorInstance;
            }
        }
    ]);
    return LinearMemoryInspectorPane;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox));
function tabView(tabId) {
    var view = _class_private_field_get(this, _tabbedPane).tabView(tabId);
    if (view === null) {
        throw new Error("No linear memory inspector view for the given tab id: ".concat(tabId));
    }
    return view;
}
function tabClosed(event) {
    var tabId = event.data.tabId;
    this.dispatchEventToListeners("ViewClosed" /* Events.ViewClosed */ , tabId);
}
var _memoryWrapper = /*#__PURE__*/ new WeakMap(), _address = /*#__PURE__*/ new WeakMap(), _tabId = /*#__PURE__*/ new WeakMap(), _inspector = /*#__PURE__*/ new WeakMap(), _memoryRequested = /*#__PURE__*/ new WeakSet(), _getHighlightInfo = /*#__PURE__*/ new WeakSet();
var LinearMemoryInspectorView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(LinearMemoryInspectorView, _UI_Widget_VBox);
    var _super = _create_super(LinearMemoryInspectorView);
    function LinearMemoryInspectorView(memoryWrapper) {
        var address = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, tabId = arguments.length > 2 ? arguments[2] : void 0;
        _class_call_check(this, LinearMemoryInspectorView);
        var _this;
        _this = _super.call(this, false);
        _class_private_method_init(_assert_this_initialized(_this), _memoryRequested);
        _class_private_method_init(_assert_this_initialized(_this), _getHighlightInfo);
        _class_private_field_init(_assert_this_initialized(_this), _memoryWrapper, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _address, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _tabId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _inspector, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "firstTimeOpen", void 0);
        if (address < 0 || address >= memoryWrapper.length()) {
            throw new Error('Requested address is out of bounds.');
        }
        _class_private_field_set(_assert_this_initialized(_this), _memoryWrapper, memoryWrapper);
        _class_private_field_set(_assert_this_initialized(_this), _address, address);
        _class_private_field_set(_assert_this_initialized(_this), _tabId, tabId);
        _class_private_field_set(_assert_this_initialized(_this), _inspector, new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.LinearMemoryInspector());
        _class_private_field_get(_this, _inspector).addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.MemoryRequestEvent.eventName, function(event) {
            _class_private_method_get(_this, _memoryRequested, memoryRequested).call(_assert_this_initialized(_this), event);
        });
        _class_private_field_get(_this, _inspector).addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.AddressChangedEvent.eventName, function(event) {
            _this.updateAddress(event.data);
        });
        _class_private_field_get(_this, _inspector).addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.SettingsChangedEvent.eventName, function(event) {
            // Stop event from bubbling up, since no element further up needs the event.
            event.stopPropagation();
            _this.saveSettings(event.data);
        });
        _class_private_field_get(_this, _inspector).addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryHighlightChipList.DeleteMemoryHighlightEvent.eventName, function(event) {
            _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().removeHighlight(_class_private_field_get(_assert_this_initialized(_this), _tabId), event.data);
            _this.refreshData();
        });
        _this.contentElement.appendChild(_class_private_field_get(_assert_this_initialized(_this), _inspector));
        _this.firstTimeOpen = true;
        return _this;
    }
    _create_class(LinearMemoryInspectorView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.refreshData();
            }
        },
        {
            key: "saveSettings",
            value: function saveSettings(settings) {
                _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().saveSettings(settings);
            }
        },
        {
            key: "updateAddress",
            value: function updateAddress(address) {
                if (address < 0 || address >= _class_private_field_get(this, _memoryWrapper).length()) {
                    throw new Error('Requested address is out of bounds.');
                }
                _class_private_field_set(this, _address, address);
            }
        },
        {
            key: "refreshData",
            value: function refreshData() {
                var _this = this;
                void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryForAddress(_class_private_field_get(this, _memoryWrapper), _class_private_field_get(this, _address)).then(function(param) {
                    var memory = param.memory, offset = param.offset;
                    var valueTypes;
                    var valueTypeModes;
                    var endianness;
                    if (_this.firstTimeOpen) {
                        var settings = _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().loadSettings();
                        valueTypes = settings.valueTypes;
                        valueTypeModes = settings.modes;
                        endianness = settings.endianness;
                        _this.firstTimeOpen = false;
                    }
                    _class_private_field_get(_this, _inspector).data = {
                        memory: memory,
                        address: _class_private_field_get(_this, _address),
                        memoryOffset: offset,
                        outerMemoryLength: _class_private_field_get(_this, _memoryWrapper).length(),
                        valueTypes: valueTypes,
                        valueTypeModes: valueTypeModes,
                        endianness: endianness,
                        highlightInfo: _class_private_method_get(_this, _getHighlightInfo, getHighlightInfo).call(_this)
                    };
                });
            }
        }
    ]);
    return LinearMemoryInspectorView;
} //# sourceMappingURL=LinearMemoryInspectorPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);
function memoryRequested(event) {
    var _this = this;
    var _event_data = event.data, start = _event_data.start, end = _event_data.end, address = _event_data.address;
    if (address < start || address >= end) {
        throw new Error('Requested address is out of bounds.');
    }
    void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryRange(_class_private_field_get(this, _memoryWrapper), start, end).then(function(memory) {
        _class_private_field_get(_this, _inspector).data = {
            memory: memory,
            address: address,
            memoryOffset: start,
            outerMemoryLength: _class_private_field_get(_this, _memoryWrapper).length(),
            highlightInfo: _class_private_method_get(_this, _getHighlightInfo, getHighlightInfo).call(_this)
        };
    });
}
function getHighlightInfo() {
    var highlightInfo = _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().getHighlightInfo(_class_private_field_get(this, _tabId));
    if (highlightInfo !== undefined) {
        if (highlightInfo.startAddress < 0 || highlightInfo.startAddress >= _class_private_field_get(this, _memoryWrapper).length()) {
            throw new Error('HighlightInfo start address is out of bounds.');
        }
        if (highlightInfo.size <= 0) {
            throw new Error('Highlight size must be a positive number.');
        }
    }
    return highlightInfo;
}


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