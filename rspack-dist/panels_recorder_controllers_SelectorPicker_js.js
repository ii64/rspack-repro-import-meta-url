"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_controllers_SelectorPicker_js"], {
"./panels/recorder/controllers/SelectorPicker.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestSelectorAttributeEvent: function() { return RequestSelectorAttributeEvent; },
  SelectorPickedEvent: function() { return SelectorPickedEvent; },
  SelectorPicker: function() { return SelectorPicker; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
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
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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





var BINDING_NAME = 'captureSelectors';
var SelectorPickedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SelectorPickedEvent, Event1);
    var _super = _create_super(SelectorPickedEvent);
    function SelectorPickedEvent(data) {
        _class_call_check(this, SelectorPickedEvent);
        var _this;
        _this = _super.call(this, SelectorPickedEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = data;
        return _this;
    }
    return SelectorPickedEvent;
}(_wrap_native_super(Event));
_define_property(SelectorPickedEvent, "eventName", 'selectorpicked');
var RequestSelectorAttributeEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RequestSelectorAttributeEvent, Event1);
    var _super = _create_super(RequestSelectorAttributeEvent);
    function RequestSelectorAttributeEvent(send) {
        _class_call_check(this, RequestSelectorAttributeEvent);
        var _this;
        _this = _super.call(this, RequestSelectorAttributeEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "send", void 0);
        _this.send = send;
        return _this;
    }
    return RequestSelectorAttributeEvent;
}(_wrap_native_super(Event));
_define_property(RequestSelectorAttributeEvent, "eventName", 'requestselectorattribute');
var _element = /*#__PURE__*/ new WeakMap(), _selectorAttribute = /*#__PURE__*/ new WeakMap(), _activeMutex = /*#__PURE__*/ new WeakMap(), _targetMutexes = /*#__PURE__*/ new WeakMap(), _handleBindingCalledEvent = /*#__PURE__*/ new WeakMap(), _scriptIdentifier = /*#__PURE__*/ new WeakMap(), _injectApplicationScript = /*#__PURE__*/ new WeakSet(), _injectCleanupScript = /*#__PURE__*/ new WeakSet(), _addBindings = /*#__PURE__*/ new WeakSet(), _removeBindings = /*#__PURE__*/ new WeakSet();
var SelectorPicker = /*#__PURE__*/ function() {
    "use strict";
    function SelectorPicker(element) {
        var _this = this;
        _class_call_check(this, SelectorPicker);
        _class_private_method_init(this, _injectApplicationScript);
        _class_private_method_init(this, _injectCleanupScript);
        _class_private_method_init(this, _addBindings);
        _class_private_method_init(this, _removeBindings);
        _class_private_field_init(this, _element, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _selectorAttribute, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _activeMutex, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex()
        });
        _define_property(this, "active", false);
        _define_property(this, "start", function() {
            var _this1 = _this;
            return _class_private_field_get(_this, _activeMutex).run(/*#__PURE__*/ _async_to_generator(function() {
                var _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (_this1.active) {
                                return [
                                    2
                                ];
                            }
                            _this1.active = true;
                            _tmp = [
                                _this1,
                                _selectorAttribute
                            ];
                            return [
                                4,
                                new Promise(function(resolve, reject) {
                                    var timeout = setTimeout(reject, 1000);
                                    _class_private_field_get(_this1, _element).dispatchEvent(new RequestSelectorAttributeEvent(function(attribute) {
                                        clearTimeout(timeout);
                                        resolve(attribute);
                                    }));
                                })
                            ];
                        case 1:
                            _class_private_field_set.apply(void 0, _tmp.concat([
                                _state.sent()
                            ]));
                            _class_static_private_field_spec_get(SelectorPicker, SelectorPicker, _targetManager).observeTargets(_this1);
                            _class_private_field_get(_this1, _element).requestUpdate();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        _define_property(this, "stop", function() {
            var _this1 = _this;
            return _class_private_field_get(_this, _activeMutex).run(/*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    if (!_this1.active) {
                        return [
                            2
                        ];
                    }
                    _this1.active = false;
                    _class_static_private_field_spec_get(SelectorPicker, SelectorPicker, _targetManager).unobserveTargets(_this1);
                    _class_static_private_field_spec_get(SelectorPicker, SelectorPicker, _targetManager).targets().map(_this1.targetRemoved.bind(_this1));
                    _class_private_field_set(_this1, _selectorAttribute, undefined);
                    _class_private_field_get(_this1, _element).requestUpdate();
                    return [
                        2
                    ];
                });
            }));
        });
        _define_property(this, "toggle", function() {
            if (!_this.active) {
                return _this.start();
            }
            return _this.stop();
        });
        _class_private_field_init(this, _targetMutexes, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _handleBindingCalledEvent, {
            writable: true,
            value: function(event) {
                if (event.data.name !== BINDING_NAME) {
                    return;
                }
                var contextId = event.data.executionContextId;
                var frames = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets();
                var contextTarget = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findTargetByExecutionContext(frames, contextId);
                var frameId = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findFrameIdByExecutionContext(frames, contextId);
                if (!contextTarget || !frameId) {
                    throw new Error("No execution context found for the binding call + ".concat(JSON.stringify(event.data)));
                }
                var model = contextTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
                if (!model) {
                    throw new Error("ResourceTreeModel instance is missing for the target: ".concat(contextTarget.id()));
                }
                var frame = model.frameForId(frameId);
                if (!frame) {
                    throw new Error('Frame is not found');
                }
                _class_private_field_get(_this, _element).dispatchEvent(new SelectorPickedEvent(_object_spread({}, JSON.parse(event.data.payload), _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.getTargetFrameContext(contextTarget, frame))));
                void _this.stop();
            }
        });
        _class_private_field_init(this, _scriptIdentifier, {
            writable: true,
            value: new Map()
        });
        _class_private_field_set(this, _element, element);
    }
    _create_class(SelectorPicker, [
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
                    return;
                }
                var mutex = _class_private_field_get(this, _targetMutexes).get(target);
                if (!mutex) {
                    mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
                    _class_private_field_get(this, _targetMutexes).set(target, mutex);
                }
                var _this = this;
                void mutex.run(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_method_get(_this, _addBindings, addBindings).call(_this, target)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this, _injectApplicationScript, injectApplicationScript).call(_this, target)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }));
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                var mutex = _class_private_field_get(this, _targetMutexes).get(target);
                if (!mutex) {
                    return;
                }
                var _this = this;
                void mutex.run(/*#__PURE__*/ _async_to_generator(function() {
                    var e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _class_private_method_get(_this, _injectCleanupScript, injectCleanupScript).call(_this, target)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this, _removeBindings, removeBindings).call(_this, target)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e = _state.sent();
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
            }
        }
    ]);
    return SelectorPicker;
} //# sourceMappingURL=SelectorPicker.js.map
();
var _targetManager = {
    get: get_targetManager,
    set: void 0
};
function get_targetManager() {
    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
}
function injectApplicationScript(target) {
    return _injectApplicationScript1.apply(this, arguments);
}
function _injectApplicationScript1() {
    _injectApplicationScript1 = _async_to_generator(function(target) {
        var injectedScript, script, _ref, identifier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get()
                    ];
                case 1:
                    injectedScript = _state.sent();
                    script = "".concat(injectedScript, ";DevToolsRecorder.startSelectorPicker({getAccessibleName, getAccessibleRole}, ").concat(JSON.stringify(_class_private_field_get(this, _selectorAttribute) ? _class_private_field_get(this, _selectorAttribute) : undefined), ", ").concat(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild, ")");
                    return [
                        4,
                        Promise.all([
                            target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({
                                source: script,
                                worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
                                includeCommandLineAPI: true
                            }),
                            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script)
                        ])
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), identifier = _ref[0].identifier;
                    _class_private_field_get(this, _scriptIdentifier).set(target, identifier);
                    return [
                        2
                    ];
            }
        });
    });
    return _injectApplicationScript1.apply(this, arguments);
}
function injectCleanupScript(target) {
    return _injectCleanupScript1.apply(this, arguments);
}
function _injectCleanupScript1() {
    _injectCleanupScript1 = _async_to_generator(function(target) {
        var identifier, script;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    identifier = _class_private_field_get(this, _scriptIdentifier).get(target);
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(identifier);
                    _class_private_field_get(this, _scriptIdentifier).delete(target);
                    return [
                        4,
                        target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({
                            identifier: identifier
                        })
                    ];
                case 1:
                    _state.sent();
                    script = 'DevToolsRecorder.stopSelectorPicker()';
                    return [
                        4,
                        _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _injectCleanupScript1.apply(this, arguments);
}
function addBindings(target) {
    return _addBindings1.apply(this, arguments);
}
function _addBindings1() {
    _addBindings1 = _async_to_generator(function(target) {
        var model;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
                    model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, _class_private_field_get(this, _handleBindingCalledEvent));
                    return [
                        4,
                        model.addBinding({
                            name: BINDING_NAME,
                            executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _addBindings1.apply(this, arguments);
}
function removeBindings(target) {
    return _removeBindings1.apply(this, arguments);
}
function _removeBindings1() {
    _removeBindings1 = _async_to_generator(function(target) {
        var model;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        target.runtimeAgent().invoke_removeBinding({
                            name: BINDING_NAME
                        })
                    ];
                case 1:
                    _state.sent();
                    model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
                    model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, _class_private_field_get(this, _handleBindingCalledEvent));
                    return [
                        2
                    ];
            }
        });
    });
    return _removeBindings1.apply(this, arguments);
}


}),

}]);