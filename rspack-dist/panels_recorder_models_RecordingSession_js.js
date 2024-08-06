"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecordingSession_js"], {
"./panels/recorder/injected/injected.generated.js?b4f9": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "5c2e39d1e29b9e58f6c0.js";

}),
"./panels/recorder/models/RecordingSession.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecordingSession: function() { return RecordingSession; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
/* harmony import */var _Schema_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SchemaUtils.js */ "./panels/recorder/models/SchemaUtils.js");
/* harmony import */var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SDKUtils.js */ "./panels/recorder/models/SDKUtils.js");
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








var formatAsJSLiteral = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.formatAsJSLiteral;
var unrelatedNavigationTypes = new Set([
    'typed',
    'address_bar',
    'auto_bookmark',
    'auto_subframe',
    'generated',
    'auto_toplevel',
    'reload',
    'keyword',
    'keyword_generated'
]);
var createShortcuts = function(descriptors) {
    var shortcuts = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = descriptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var shortcut = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = shortcut[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var key = _step1.value;
                    var shortcutBase = {
                        meta: false,
                        ctrl: false,
                        shift: false,
                        alt: false,
                        keyCode: -1
                    };
                    var _UI_KeyboardShortcut_KeyboardShortcut_keyCodeAndModifiersFromKey = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.KeyboardShortcut.keyCodeAndModifiersFromKey(key), keyCode = _UI_KeyboardShortcut_KeyboardShortcut_keyCodeAndModifiersFromKey.keyCode, modifiers = _UI_KeyboardShortcut_KeyboardShortcut_keyCodeAndModifiersFromKey.modifiers;
                    shortcutBase.keyCode = keyCode;
                    var modifiersMap = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.Modifiers;
                    shortcutBase.ctrl = Boolean(modifiers & modifiersMap.Ctrl);
                    shortcutBase.meta = Boolean(modifiers & modifiersMap.Meta);
                    shortcutBase.shift = Boolean(modifiers & modifiersMap.Shift);
                    shortcutBase.shift = Boolean(modifiers & modifiersMap.Alt);
                    if (shortcutBase.keyCode !== -1) {
                        shortcuts.push(shortcutBase);
                    }
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
    return shortcuts;
};
var evaluateInAllTargets = function() {
    var _ref = _async_to_generator(function(worldName, targets, expression) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(targets.map(function(target) {
                            return (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.evaluateInAllFrames)(worldName, target, expression);
                        }))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function evaluateInAllTargets(worldName, targets, expression) {
        return _ref.apply(this, arguments);
    };
}();
var RecorderBinding = Object.freeze({
    addStep: 'addStep',
    stopShortcut: 'stopShortcut'
});
var _target = /*#__PURE__*/ new WeakMap(), _pageAgent = /*#__PURE__*/ new WeakMap(), _targetAgent = /*#__PURE__*/ new WeakMap(), _networkManager = /*#__PURE__*/ new WeakMap(), _resourceTreeModel = /*#__PURE__*/ new WeakMap(), _targets = /*#__PURE__*/ new WeakMap(), _lastNavigationEntryIdByTarget = /*#__PURE__*/ new WeakMap(), _lastNavigationHistoryByTarget = /*#__PURE__*/ new WeakMap(), _scriptIdentifiers = /*#__PURE__*/ new WeakMap(), _runtimeEventDescriptors = /*#__PURE__*/ new WeakMap(), _childTargetEventDescriptors = /*#__PURE__*/ new WeakMap(), _mutex = /*#__PURE__*/ new WeakMap(), _userFlow = /*#__PURE__*/ new WeakMap(), _stepsPendingNavigationByTargetId = /*#__PURE__*/ new WeakMap(), _started = /*#__PURE__*/ new WeakMap(), _selectorTypesToRecord = /*#__PURE__*/ new WeakMap(), _appendInitialSteps = /*#__PURE__*/ new WeakSet(), _getDocumentTitle = /*#__PURE__*/ new WeakSet(), _appendCurrentNetworkStep = /*#__PURE__*/ new WeakSet(), _updateTimeout = /*#__PURE__*/ new WeakMap(), _updateListeners = /*#__PURE__*/ new WeakMap(), _dispatchRecordingUpdate = /*#__PURE__*/ new WeakSet(), _previousStep = /*#__PURE__*/ new WeakMap(), /**
     * Contains keys that are pressed related to a change step.
     */ _pressedChangeKeys = /*#__PURE__*/ new WeakMap(), /**
     * Shift-reduces a given step into the user flow.
     */ _appendStep = /*#__PURE__*/ new WeakSet(), _handleBeforeUnload = /*#__PURE__*/ new WeakSet(), _replaceUnloadWithNavigation = /*#__PURE__*/ new WeakSet(), _handleStopShortcutBinding = /*#__PURE__*/ new WeakSet(), _receiveBindingCalled = /*#__PURE__*/ new WeakSet(), _handleAddStepBinding = /*#__PURE__*/ new WeakSet(), _getStopShortcuts = /*#__PURE__*/ new WeakSet(), _setUpTarget = /*#__PURE__*/ new WeakMap(), _tearDownTarget = /*#__PURE__*/ new WeakMap(), _addBindings = /*#__PURE__*/ new WeakSet(), _removeBindings = /*#__PURE__*/ new WeakSet(), _injectApplicationScript = /*#__PURE__*/ new WeakSet(), _injectCleanUpScript = /*#__PURE__*/ new WeakSet(), _receiveTargetCreated = /*#__PURE__*/ new WeakSet(), _receiveTargetClosed = /*#__PURE__*/ new WeakSet(), _receiveTargetInfoChanged = /*#__PURE__*/ new WeakSet(), _handleEvent = /*#__PURE__*/ new WeakSet(), _handleTargetCreated = /*#__PURE__*/ new WeakSet(), _handleTargetClosed = /*#__PURE__*/ new WeakSet(), _handlePageNavigation = /*#__PURE__*/ new WeakSet(), _handleTargetInfoChanged = /*#__PURE__*/ new WeakSet(), _waitForDOMContentLoadedWithTimeout = /*#__PURE__*/ new WeakSet();
var RecordingSession = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(RecordingSession, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(RecordingSession);
    function RecordingSession(target, opts) {
        _class_call_check(this, RecordingSession);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _appendInitialSteps);
        _class_private_method_init(_assert_this_initialized(_this), _getDocumentTitle);
        _class_private_method_init(_assert_this_initialized(_this), _appendCurrentNetworkStep);
        _class_private_method_init(_assert_this_initialized(_this), _dispatchRecordingUpdate);
        _class_private_field_init(_assert_this_initialized(_this), _previousStep, {
            get: get_previousStep,
            set: void 0
        });
        _class_private_method_init(_assert_this_initialized(_this), _appendStep);
        _class_private_method_init(_assert_this_initialized(_this), _handleBeforeUnload);
        _class_private_method_init(_assert_this_initialized(_this), _replaceUnloadWithNavigation);
        _class_private_method_init(_assert_this_initialized(_this), _handleStopShortcutBinding);
        _class_private_method_init(_assert_this_initialized(_this), _receiveBindingCalled);
        _class_private_method_init(_assert_this_initialized(_this), _handleAddStepBinding);
        _class_private_method_init(_assert_this_initialized(_this), _getStopShortcuts);
        _class_private_method_init(_assert_this_initialized(_this), _addBindings);
        _class_private_method_init(_assert_this_initialized(_this), _removeBindings);
        _class_private_method_init(_assert_this_initialized(_this), _injectApplicationScript);
        _class_private_method_init(_assert_this_initialized(_this), _injectCleanUpScript);
        _class_private_method_init(_assert_this_initialized(_this), _receiveTargetCreated);
        _class_private_method_init(_assert_this_initialized(_this), _receiveTargetClosed);
        _class_private_method_init(_assert_this_initialized(_this), _receiveTargetInfoChanged);
        _class_private_method_init(_assert_this_initialized(_this), _handleEvent);
        _class_private_method_init(_assert_this_initialized(_this), _handleTargetCreated);
        _class_private_method_init(_assert_this_initialized(_this), _handleTargetClosed);
        _class_private_method_init(_assert_this_initialized(_this), _handlePageNavigation);
        _class_private_method_init(_assert_this_initialized(_this), _handleTargetInfoChanged);
        _class_private_method_init(_assert_this_initialized(_this), _waitForDOMContentLoadedWithTimeout);
        _class_private_field_init(_assert_this_initialized(_this), _target, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _pageAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _networkManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _resourceTreeModel, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targets, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastNavigationEntryIdByTarget, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastNavigationHistoryByTarget, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _scriptIdentifiers, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _runtimeEventDescriptors, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _childTargetEventDescriptors, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _mutex, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex()
        });
        _class_private_field_init(_assert_this_initialized(_this), _userFlow, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _stepsPendingNavigationByTargetId, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _started, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectorTypesToRecord, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _updateTimeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _updateListeners, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _pressedChangeKeys, {
            writable: true,
            value: new Set()
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _setUpTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(target) {
                    var a11yModel, childTargetManager;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_get(_this1, _targets).set(target.id(), target);
                                a11yModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilityModel.AccessibilityModel);
                                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(a11yModel);
                                return [
                                    4,
                                    a11yModel.resumeModel()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this1, _addBindings, addBindings).call(_this1, target)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this1, _injectApplicationScript, injectApplicationScript).call(_this1, target)
                                ];
                            case 3:
                                _state.sent();
                                childTargetManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager);
                                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(childTargetManager);
                                _class_private_field_get(_this1, _childTargetEventDescriptors).set(target, [
                                    childTargetManager.addEventListener("TargetCreated" /* SDK.ChildTargetManager.Events.TargetCreated */ , _class_private_method_get(_this1, _receiveTargetCreated, receiveTargetCreated).bind(_this1, target)),
                                    childTargetManager.addEventListener("TargetDestroyed" /* SDK.ChildTargetManager.Events.TargetDestroyed */ , _class_private_method_get(_this1, _receiveTargetClosed, receiveTargetClosed).bind(_this1, target)),
                                    childTargetManager.addEventListener("TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */ , _class_private_method_get(_this1, _receiveTargetInfoChanged, receiveTargetInfoChanged).bind(_this1, target))
                                ]);
                                return [
                                    4,
                                    Promise.all(childTargetManager.childTargets().map(_class_private_field_get(_this1, _setUpTarget)))
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(target) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _tearDownTarget, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(target) {
                    var descriptors;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                descriptors = _class_private_field_get(_this2, _childTargetEventDescriptors).get(target);
                                if (descriptors) {
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this2, _injectCleanUpScript, injectCleanUpScript).call(_this2, target)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_method_get(_this2, _removeBindings, removeBindings).call(_this2, target)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(target) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_set(_assert_this_initialized(_this), _target, target);
        _class_private_field_set(_assert_this_initialized(_this), _pageAgent, target.pageAgent());
        _class_private_field_set(_assert_this_initialized(_this), _targetAgent, target.targetAgent());
        _class_private_field_set(_assert_this_initialized(_this), _networkManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance());
        var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            throw new Error('ResourceTreeModel is missing for the target: ' + target.id());
        }
        _class_private_field_set(_assert_this_initialized(_this), _resourceTreeModel, resourceTreeModel);
        _class_private_field_set(_assert_this_initialized(_this), _target, target);
        _class_private_field_set(_assert_this_initialized(_this), _userFlow, {
            title: opts.title,
            selectorAttribute: opts.selectorAttribute,
            steps: []
        });
        _class_private_field_set(_assert_this_initialized(_this), _selectorTypesToRecord, opts.selectorTypesToRecord);
        return _this;
    }
    _create_class(RecordingSession, [
        {
            /**
     * @returns - A deep copy of the session's current user flow.
     */ key: "cloneUserFlow",
            value: function cloneUserFlow() {
                return structuredClone(_class_private_field_get(this, _userFlow));
            }
        },
        {
            /**
     * Overwrites the session's current user flow with the given one.
     *
     * This method will not dispatch an `recordingupdated` event.
     */ key: "overwriteUserFlow",
            value: function overwriteUserFlow(flow) {
                _class_private_field_set(this, _userFlow, structuredClone(flow));
            }
        },
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _started)) {
                                    throw new Error('The session has started');
                                }
                                _class_private_field_set(_this, _started, true);
                                _class_private_field_get(_this, _networkManager).addEventListener("ConditionsChanged" /* SDK.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged */ , _class_private_method_get(_this, _appendCurrentNetworkStep, appendCurrentNetworkStep), _this);
                                return [
                                    4,
                                    _class_private_method_get(_this, _appendInitialSteps, appendInitialSteps).call(_this)
                                ];
                            case 1:
                                _state.sent();
                                // Focus the target so that events can be captured without additional actions.
                                return [
                                    4,
                                    _class_private_field_get(_this, _pageAgent).invoke_bringToFront()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _class_private_field_get(_this, _setUpTarget).call(_this, _class_private_field_get(_this, _target))
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Wait for any remaining updates.
                                return [
                                    4,
                                    _class_private_method_get(_this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(_this)
                                ];
                            case 1:
                                _state.sent();
                                // Create a deadlock for the remaining events.
                                void _class_private_field_get(_this, _mutex).acquire();
                                return [
                                    4,
                                    Promise.all(_to_consumable_array(_class_private_field_get(_this, _targets).values()).map(_class_private_field_get(_this, _tearDownTarget)))
                                ];
                            case 2:
                                _state.sent();
                                _class_private_field_get(_this, _networkManager).removeEventListener("ConditionsChanged" /* SDK.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged */ , _class_private_method_get(_this, _appendCurrentNetworkStep, appendCurrentNetworkStep), _this);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RecordingSession;
} //# sourceMappingURL=RecordingSession.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var _allowUntrustedEvents = {
    get: get_allowUntrustedEvents,
    set: void 0
};
function appendInitialSteps() {
    return _appendInitialSteps1.apply(this, arguments);
}
function _appendInitialSteps1() {
    _appendInitialSteps1 = _async_to_generator(function() {
        var mainFrame, cssLayoutViewport, history, entry, _, _1, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Quick validation before doing anything.
                    mainFrame = _class_private_field_get(this, _resourceTreeModel).mainFrame;
                    if (!mainFrame) {
                        throw new Error('Could not find mainFrame.');
                    }
                    // Network step.
                    if (_class_private_field_get(this, _networkManager).networkConditions() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NoThrottlingConditions) {
                        _class_private_method_get(this, _appendCurrentNetworkStep, appendCurrentNetworkStep).call(this);
                    }
                    return [
                        4,
                        _class_private_field_get(this, _target).pageAgent().invoke_getLayoutMetrics()
                    ];
                case 1:
                    cssLayoutViewport = _state.sent().cssLayoutViewport;
                    _class_private_method_get(this, _appendStep, appendStep).call(this, (0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createViewportStep)(cssLayoutViewport));
                    return [
                        4,
                        _class_private_field_get(this, _resourceTreeModel).navigationHistory()
                    ];
                case 2:
                    history = _state.sent();
                    if (!history) return [
                        3,
                        3
                    ];
                    entry = history.entries[history.currentIndex];
                    _class_private_field_get(this, _lastNavigationEntryIdByTarget).set(_class_private_field_get(this, _target).id(), entry.id);
                    _class_private_field_get(this, _lastNavigationHistoryByTarget).set(_class_private_field_get(this, _target).id(), history.entries.map(function(entry) {
                        return entry.id;
                    }));
                    _class_private_field_get(this, _userFlow).steps.push({
                        type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                        url: entry.url,
                        assertedEvents: [
                            {
                                type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                                url: entry.url,
                                title: entry.title
                            }
                        ]
                    });
                    return [
                        3,
                        5
                    ];
                case 3:
                    _1 = (_ = _class_private_field_get(this, _userFlow).steps).push;
                    _tmp = {
                        type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                        url: mainFrame.url
                    };
                    _tmp1 = {
                        type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                        url: mainFrame.url
                    };
                    return [
                        4,
                        _class_private_method_get(this, _getDocumentTitle, getDocumentTitle).call(this, _class_private_field_get(this, _target))
                    ];
                case 4:
                    _1.apply(_, [
                        (_tmp.assertedEvents = [
                            (_tmp1.title = _state.sent(), _tmp1)
                        ], _tmp)
                    ]);
                    _state.label = 5;
                case 5:
                    // Commit
                    void _class_private_method_get(this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _appendInitialSteps1.apply(this, arguments);
}
function getDocumentTitle(target) {
    return _getDocumentTitle1.apply(this, arguments);
}
function _getDocumentTitle1() {
    _getDocumentTitle1 = _async_to_generator(function(target) {
        var _response_result, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        target.runtimeAgent().invoke_evaluate({
                            expression: 'document.title'
                        })
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        ((_response_result = response.result) === null || _response_result === void 0 ? void 0 : _response_result.value) || ''
                    ];
            }
        });
    });
    return _getDocumentTitle1.apply(this, arguments);
}
function appendCurrentNetworkStep() {
    var networkConditions = _class_private_field_get(this, _networkManager).networkConditions();
    _class_private_method_get(this, _appendStep, appendStep).call(this, (0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.createEmulateNetworkConditionsStep)(networkConditions));
}
function dispatchRecordingUpdate() {
    var _this = this;
    if (_class_private_field_get(this, _updateTimeout)) {
        clearTimeout(_class_private_field_get(this, _updateTimeout));
    }
    _class_private_field_set(this, _updateTimeout, setTimeout(function() {
        // Making a copy to prevent mutations of this.userFlow by event consumers.
        _this.dispatchEventToListeners("recordingupdated" /* Events.RecordingUpdated */ , structuredClone(_class_private_field_get(_this, _userFlow)));
        _class_private_field_set(_this, _updateTimeout, undefined);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _class_private_field_get(_this, _updateListeners)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var resolve = _step.value;
                resolve();
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
        _class_private_field_get(_this, _updateListeners).length = 0;
    }, 100));
    return new Promise(function(resolve) {
        _class_private_field_get(_this, _updateListeners).push(resolve);
    });
}
function get_previousStep() {
    return _class_private_field_get(this, _userFlow).steps.slice(-1)[0];
}
function appendStep(step) {
    switch(step.type){
        case 'doubleClick':
            {
                for(var j = _class_private_field_get(this, _userFlow).steps.length - 1; j > 0; j--){
                    var previousStep = _class_private_field_get(this, _userFlow).steps[j];
                    if (previousStep.type === 'click') {
                        step.selectors = previousStep.selectors;
                        _class_private_field_get(this, _userFlow).steps.splice(j, 1);
                        break;
                    }
                }
                break;
            }
        case 'change':
            {
                var previousStep1 = _class_private_field_get(this, _previousStep);
                if (!previousStep1) {
                    break;
                }
                switch(previousStep1.type){
                    // Merging changes.
                    case 'change':
                        if (!(0,_SchemaUtils_js__WEBPACK_IMPORTED_MODULE_6__.areSelectorsEqual)(step, previousStep1)) {
                            break;
                        }
                        _class_private_field_get(this, _userFlow).steps[_class_private_field_get(this, _userFlow).steps.length - 1] = step;
                        void _class_private_method_get(this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(this);
                        return;
                    // Ignore key downs resulting in inputs.
                    case 'keyDown':
                        _class_private_field_get(this, _pressedChangeKeys).add(previousStep1.key);
                        _class_private_field_get(this, _userFlow).steps.pop();
                        _class_private_method_get(this, _appendStep, appendStep).call(this, step);
                        return;
                }
                break;
            }
        case 'keyDown':
            {
                // This can happen if there are successive keydown's from a repeated key
                // for example.
                if (_class_private_field_get(this, _pressedChangeKeys).has(step.key)) {
                    return;
                }
                break;
            }
        case 'keyUp':
            {
                // Ignore key ups coming from change inputs.
                if (_class_private_field_get(this, _pressedChangeKeys).has(step.key)) {
                    _class_private_field_get(this, _pressedChangeKeys).delete(step.key);
                    return;
                }
                break;
            }
    }
    _class_private_field_get(this, _userFlow).steps.push(step);
    void _class_private_method_get(this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(this);
}
function handleBeforeUnload(context, sdkTarget) {
    var _lastStep_assertedEvents;
    var lastStep = _class_private_field_get(this, _userFlow).steps[_class_private_field_get(this, _userFlow).steps.length - 1];
    if (lastStep && !((_lastStep_assertedEvents = lastStep.assertedEvents) === null || _lastStep_assertedEvents === void 0 ? void 0 : _lastStep_assertedEvents.find(function(event) {
        return event.type === _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation;
    }))) {
        var target = context.target || 'main';
        var frameSelector = (context.frame || []).join(',');
        var lastStepTarget = lastStep.target || 'main';
        var lastStepFrameSelector = (('frame' in lastStep ? lastStep.frame : []) || []).join(',');
        if (target === lastStepTarget && frameSelector === lastStepFrameSelector) {
            lastStep.assertedEvents = [
                {
                    type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation
                }
            ];
            _class_private_field_get(this, _stepsPendingNavigationByTargetId).set(sdkTarget.id(), lastStep);
            void _class_private_method_get(this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(this);
        }
    }
}
function replaceUnloadWithNavigation(target, event) {
    var stepPendingNavigation = _class_private_field_get(this, _stepsPendingNavigationByTargetId).get(target.id());
    if (!stepPendingNavigation) {
        return;
    }
    var step = stepPendingNavigation;
    if (!step.assertedEvents) {
        return;
    }
    var navigationEvent = step.assertedEvents.find(function(event) {
        return event.type === _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation;
    });
    if (!navigationEvent || navigationEvent.url) {
        return;
    }
    navigationEvent.url = event.url;
    navigationEvent.title = event.title;
    void _class_private_method_get(this, _dispatchRecordingUpdate, dispatchRecordingUpdate).call(this);
}
function handleStopShortcutBinding(event) {
    var shortcutLength = Number(event.data.payload);
    // Look for one less step as the last one gets consumed before creating a step
    for(var index = 0; index < shortcutLength - 1; index++){
        _class_private_field_get(this, _userFlow).steps.pop();
    }
    this.dispatchEventToListeners("recordingstopped" /* Events.RecordingStopped */ , structuredClone(_class_private_field_get(this, _userFlow)));
}
function receiveBindingCalled(target, event) {
    switch(event.data.name){
        case RecorderBinding.stopShortcut:
            _class_private_method_get(this, _handleStopShortcutBinding, handleStopShortcutBinding).call(this, event);
            return;
        case RecorderBinding.addStep:
            _class_private_method_get(this, _handleAddStepBinding, handleAddStepBinding).call(this, target, event);
            return;
        default:
            return;
    }
}
function handleAddStepBinding(target, event) {
    var executionContextId = event.data.executionContextId;
    var frameId;
    var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    if (runtimeModel) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = runtimeModel.executionContexts()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var context = _step.value;
                if (context.id === executionContextId) {
                    frameId = context.frameId;
                    break;
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
    if (!frameId) {
        throw new Error('No execution context found for the binding call + ' + JSON.stringify(event.data));
    }
    var step = JSON.parse(event.data.payload);
    var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
    var frame = resourceTreeModel.frameForId(frameId);
    if (!frame) {
        throw new Error('Could not find frame.');
    }
    var context1 = (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.getTargetFrameContext)(target, frame);
    if (step.type === 'beforeUnload') {
        _class_private_method_get(this, _handleBeforeUnload, handleBeforeUnload).call(this, context1, target);
        return;
    }
    // TODO: type-safe parsing from client steps to internal step format.
    switch(step.type){
        case 'change':
            {
                _class_private_method_get(this, _appendStep, appendStep).call(this, {
                    type: 'change',
                    value: step.value,
                    selectors: step.selectors,
                    frame: context1.frame.length ? context1.frame : undefined,
                    target: context1.target
                });
                break;
            }
        case 'doubleClick':
            {
                _class_private_method_get(this, _appendStep, appendStep).call(this, {
                    type: 'doubleClick',
                    target: context1.target,
                    selectors: step.selectors,
                    offsetY: step.offsetY,
                    offsetX: step.offsetX,
                    frame: context1.frame.length ? context1.frame : undefined,
                    deviceType: step.deviceType,
                    button: step.button
                });
                break;
            }
        case 'click':
            {
                _class_private_method_get(this, _appendStep, appendStep).call(this, {
                    type: 'click',
                    target: context1.target,
                    selectors: step.selectors,
                    offsetY: step.offsetY,
                    offsetX: step.offsetX,
                    frame: context1.frame.length ? context1.frame : undefined,
                    duration: step.duration,
                    deviceType: step.deviceType,
                    button: step.button
                });
                break;
            }
        case 'keyUp':
            {
                _class_private_method_get(this, _appendStep, appendStep).call(this, {
                    type: 'keyUp',
                    key: step.key,
                    frame: context1.frame.length ? context1.frame : undefined,
                    target: context1.target
                });
                break;
            }
        case 'keyDown':
            {
                _class_private_method_get(this, _appendStep, appendStep).call(this, {
                    type: 'keyDown',
                    frame: context1.frame.length ? context1.frame : undefined,
                    target: context1.target,
                    key: step.key
                });
                break;
            }
        default:
            throw new Error('Unhandled client event');
    }
}
function getStopShortcuts() {
    var descriptors = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('chrome-recorder.start-recording').map(function(key) {
        return key.descriptors.map(function(press) {
            return press.key;
        });
    });
    return createShortcuts(descriptors);
}
function get_allowUntrustedEvents() {
    try {
        // This setting is set during the test to work around the fact that Puppeteer cannot
        // send trusted change and input events.
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().settingForTest('untrusted-recorder-events');
        return true;
    } catch (e) {}
    return false;
}
function addBindings(target) {
    return _addBindings1.apply(this, arguments);
}
function _addBindings1() {
    _addBindings1 = _async_to_generator(function(target) {
        var runtimeModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(runtimeModel);
                    _class_private_field_get(this, _runtimeEventDescriptors).set(target, [
                        runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, _class_private_method_get(this, _receiveBindingCalled, receiveBindingCalled).bind(this, target))
                    ]);
                    return [
                        4,
                        Promise.all(Object.values(RecorderBinding).map(function(name) {
                            return runtimeModel.addBinding({
                                name: name,
                                executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME
                            });
                        }))
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
        var descriptors;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(Object.values(RecorderBinding).map(function(name) {
                            return target.runtimeAgent().invoke_removeBinding({
                                name: name
                            });
                        }))
                    ];
                case 1:
                    _state.sent();
                    descriptors = _class_private_field_get(this, _runtimeEventDescriptors).get(target);
                    if (descriptors) {
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(descriptors);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _removeBindings1.apply(this, arguments);
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
                    script = "\n      ".concat(injectedScript, ";DevToolsRecorder.startRecording({getAccessibleName, getAccessibleRole}, {\n        debug: ").concat(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild, ",\n        allowUntrustedEvents: ").concat(_class_static_private_field_spec_get(RecordingSession, RecordingSession, _allowUntrustedEvents), ",\n        selectorTypesToRecord: ").concat(JSON.stringify(_class_private_field_get(this, _selectorTypesToRecord)), ",\n        selectorAttribute: ").concat(_class_private_field_get(this, _userFlow).selectorAttribute ? formatAsJSLiteral(_class_private_field_get(this, _userFlow).selectorAttribute) : undefined, ",\n        stopShortcuts: ").concat(JSON.stringify(_class_private_method_get(this, _getStopShortcuts, getStopShortcuts).call(this)), ",\n      });\n    ");
                    return [
                        4,
                        Promise.all([
                            target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({
                                source: script,
                                worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
                                includeCommandLineAPI: true
                            }),
                            (0,_SDKUtils_js__WEBPACK_IMPORTED_MODULE_7__.evaluateInAllFrames)(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script)
                        ])
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), identifier = _ref[0].identifier;
                    _class_private_field_get(this, _scriptIdentifiers).set(target.id(), identifier);
                    return [
                        2
                    ];
            }
        });
    });
    return _injectApplicationScript1.apply(this, arguments);
}
function injectCleanUpScript(target) {
    return _injectCleanUpScript1.apply(this, arguments);
}
function _injectCleanUpScript1() {
    _injectCleanUpScript1 = _async_to_generator(function(target) {
        var scriptId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scriptId = _class_private_field_get(this, _scriptIdentifiers).get(target.id());
                    if (!scriptId) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({
                            identifier: scriptId
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        evaluateInAllTargets(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, _to_consumable_array(_class_private_field_get(this, _targets).values()), 'DevToolsRecorder.stopRecording()')
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _injectCleanUpScript1.apply(this, arguments);
}
function receiveTargetCreated(target, event) {
    void _class_private_method_get(this, _handleEvent, handleEvent).call(this, {
        type: 'targetCreated',
        event: event,
        target: target
    });
}
function receiveTargetClosed(eventTarget, event) {
    // TODO(alexrudenko): target here appears to be the parent target of the target that is closed.
    // Therefore, we need to find the real target via the targets map.
    var childTarget = _class_private_field_get(this, _targets).get(event.data);
    if (childTarget) {
        void _class_private_method_get(this, _handleEvent, handleEvent).call(this, {
            type: 'targetClosed',
            event: event,
            target: childTarget
        });
    }
}
function receiveTargetInfoChanged(eventTarget, event) {
    var target = _class_private_field_get(this, _targets).get(event.data.targetId) || eventTarget;
    void _class_private_method_get(this, _handleEvent, handleEvent).call(this, {
        type: 'targetInfoChanged',
        event: event,
        target: target
    });
}
function handleEvent(event) {
    var _this = this;
    return _class_private_field_get(this, _mutex).run(/*#__PURE__*/ _async_to_generator(function() {
        var _, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        8,
                        ,
                        9
                    ]);
                    if (_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild) {
                        console.time("Processing ".concat(JSON.stringify(event)));
                    }
                    _ = event.type;
                    switch(_){
                        case 'targetClosed':
                            return [
                                3,
                                1
                            ];
                        case 'targetCreated':
                            return [
                                3,
                                3
                            ];
                        case 'targetInfoChanged':
                            return [
                                3,
                                5
                            ];
                    }
                    return [
                        3,
                        7
                    ];
                case 1:
                    return [
                        4,
                        _class_private_method_get(_this, _handleTargetClosed, handleTargetClosed).call(_this, event)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 3:
                    return [
                        4,
                        _class_private_method_get(_this, _handleTargetCreated, handleTargetCreated).call(_this, event)
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 5:
                    return [
                        4,
                        _class_private_method_get(_this, _handleTargetInfoChanged, handleTargetInfoChanged).call(_this, event)
                    ];
                case 6:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 7:
                    if (_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild) {
                        console.timeEnd("Processing ".concat(JSON.stringify(event)));
                    }
                    return [
                        3,
                        9
                    ];
                case 8:
                    err = _state.sent();
                    console.error('Error happened while processing recording events: ', err.message, err.stack);
                    return [
                        3,
                        9
                    ];
                case 9:
                    return [
                        2
                    ];
            }
        });
    }));
}
function handleTargetCreated(event) {
    return _handleTargetCreated1.apply(this, arguments);
}
function _handleTargetCreated1() {
    _handleTargetCreated1 = _async_to_generator(function(event) {
        var target;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        _class_private_field_get(this, _targetAgent).invoke_attachToTarget({
                            targetId: event.event.data.targetId,
                            flatten: true
                        })
                    ];
                case 1:
                    _state.sent();
                    target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets().find(function(t) {
                        return t.id() === event.event.data.targetId;
                    });
                    if (!target) {
                        throw new Error('Could not find target.');
                    }
                    // Generally an new target implies all other targets are not waiting for something special in their event buffers, so we flush them here.
                    return [
                        4,
                        _class_private_field_get(this, _setUpTarget).call(this, target)
                    ];
                case 2:
                    _state.sent();
                    // Emitted for e2e tests.
                    window.dispatchEvent(new Event('recorderAttachedToTarget'));
                    return [
                        2
                    ];
            }
        });
    });
    return _handleTargetCreated1.apply(this, arguments);
}
function handleTargetClosed(event) {
    return _handleTargetClosed1.apply(this, arguments);
}
function _handleTargetClosed1() {
    _handleTargetClosed1 = _async_to_generator(function(event) {
        var stepPendingNavigation;
        return _ts_generator(this, function(_state) {
            stepPendingNavigation = _class_private_field_get(this, _stepsPendingNavigationByTargetId).get(event.target.id());
            if (stepPendingNavigation) {
                delete stepPendingNavigation.assertedEvents;
                _class_private_field_get(this, _stepsPendingNavigationByTargetId).delete(event.target.id());
            }
            return [
                2
            ];
        });
    // TODO(alexrudenko): figure out how this works with sections
    // TODO(alexrudenko): Ignore close events as they only matter for popups but cause more trouble than benefits
    // const closeStep: CloseStep = {
    //   type: 'close',
    //   target: getTargetName(event.target),
    // };
    // this.appendStep(closeStep);
    });
    return _handleTargetClosed1.apply(this, arguments);
}
function handlePageNavigation(resourceTreeModel, target) {
    return _handlePageNavigation1.apply(this, arguments);
}
function _handlePageNavigation1() {
    _handlePageNavigation1 = _async_to_generator(function(resourceTreeModel, target) {
        var history, entry, prevId, lastHistory, stepPendingNavigation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        resourceTreeModel.navigationHistory()
                    ];
                case 1:
                    history = _state.sent();
                    if (!history) {
                        return [
                            2,
                            false
                        ];
                    }
                    entry = history.entries[history.currentIndex];
                    prevId = _class_private_field_get(this, _lastNavigationEntryIdByTarget).get(target.id());
                    if (prevId === entry.id) {
                        return [
                            2,
                            true
                        ];
                    }
                    _class_private_field_get(this, _lastNavigationEntryIdByTarget).set(target.id(), entry.id);
                    lastHistory = _class_private_field_get(this, _lastNavigationHistoryByTarget).get(target.id()) || [];
                    _class_private_field_get(this, _lastNavigationHistoryByTarget).set(target.id(), history.entries.map(function(entry) {
                        return entry.id;
                    }));
                    if (unrelatedNavigationTypes.has(entry.transitionType) || lastHistory.includes(entry.id)) {
                        stepPendingNavigation = _class_private_field_get(this, _stepsPendingNavigationByTargetId).get(target.id());
                        if (stepPendingNavigation) {
                            delete stepPendingNavigation.assertedEvents;
                            _class_private_field_get(this, _stepsPendingNavigationByTargetId).delete(target.id());
                        }
                        _class_private_method_get(this, _appendStep, appendStep).call(this, {
                            type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.StepType.Navigate,
                            url: entry.url,
                            assertedEvents: [
                                {
                                    type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                                    url: entry.url,
                                    title: entry.title
                                }
                            ]
                        });
                    } else {
                        _class_private_method_get(this, _replaceUnloadWithNavigation, replaceUnloadWithNavigation).call(this, target, {
                            type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                            url: entry.url,
                            title: entry.title
                        });
                    }
                    return [
                        2,
                        true
                    ];
            }
        });
    });
    return _handlePageNavigation1.apply(this, arguments);
}
function handleTargetInfoChanged(event) {
    return _handleTargetInfoChanged1.apply(this, arguments);
}
function _handleTargetInfoChanged1() {
    _handleTargetInfoChanged1 = _async_to_generator(function(event) {
        var target, resourceTreeModel, _, _1, _tmp, _tmp1, _2, _3, _tmp2, _tmp3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (event.event.data.type !== 'page' && event.event.data.type !== 'iframe') {
                        return [
                            2
                        ];
                    }
                    target = event.target;
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
                    if (!resourceTreeModel) {
                        throw new Error('ResourceTreeModel is missing in handleNavigation');
                    }
                    if (!(event.event.data.type === 'iframe')) return [
                        3,
                        2
                    ];
                    _1 = (_ = _class_private_method_get(this, _replaceUnloadWithNavigation, replaceUnloadWithNavigation)).call;
                    _tmp = [
                        this,
                        target
                    ];
                    _tmp1 = {
                        type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                        url: event.event.data.url
                    };
                    return [
                        4,
                        _class_private_method_get(this, _getDocumentTitle, getDocumentTitle).call(this, target)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        (_tmp1.title = _state.sent(), _tmp1)
                    ]));
                    return [
                        3,
                        6
                    ];
                case 2:
                    if (!(event.event.data.type === 'page')) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _handlePageNavigation, handlePageNavigation).call(this, resourceTreeModel, target)
                    ];
                case 3:
                    if (_state.sent()) {
                        return [
                            2
                        ];
                    }
                    // Needed for #getDocumentTitle to return something meaningful.
                    return [
                        4,
                        _class_private_method_get(this, _waitForDOMContentLoadedWithTimeout, waitForDOMContentLoadedWithTimeout).call(this, resourceTreeModel, 500)
                    ];
                case 4:
                    _state.sent();
                    _3 = (_2 = _class_private_method_get(this, _replaceUnloadWithNavigation, replaceUnloadWithNavigation)).call;
                    _tmp2 = [
                        this,
                        target
                    ];
                    _tmp3 = {
                        type: _Schema_js__WEBPACK_IMPORTED_MODULE_5__.AssertedEventType.Navigation,
                        url: event.event.data.url
                    };
                    return [
                        4,
                        _class_private_method_get(this, _getDocumentTitle, getDocumentTitle).call(this, target)
                    ];
                case 5:
                    _3.apply(_2, _tmp2.concat([
                        (_tmp3.title = _state.sent(), _tmp3)
                    ]));
                    _state.label = 6;
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return _handleTargetInfoChanged1.apply(this, arguments);
}
function waitForDOMContentLoadedWithTimeout(resourceTreeModel, timeout) {
    return _waitForDOMContentLoadedWithTimeout1.apply(this, arguments);
}
function _waitForDOMContentLoadedWithTimeout1() {
    _waitForDOMContentLoadedWithTimeout1 = _async_to_generator(function(resourceTreeModel, timeout) {
        var resolver, contentLoadedPromise, onDomContentLoaded;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resolver = function() {
                        return Promise.resolve();
                    };
                    contentLoadedPromise = new Promise(function(resolve) {
                        resolver = resolve;
                    });
                    onDomContentLoaded = function() {
                        resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
                        resolver();
                    };
                    resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
                    return [
                        4,
                        Promise.any([
                            contentLoadedPromise,
                            new Promise(function(resolve) {
                                return setTimeout(function() {
                                    resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.DOMContentLoaded, onDomContentLoaded);
                                    resolve();
                                }, timeout);
                            })
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _waitForDOMContentLoadedWithTimeout1.apply(this, arguments);
}


}),
"./panels/recorder/models/Schema.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssertedEventType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType; },
  SelectorType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType; },
  StepType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType; }
});
/* harmony import */var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=Schema.js.map


}),
"./panels/recorder/models/SchemaUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  areSelectorsEqual: function() { return areSelectorsEqual; },
  createEmulateNetworkConditionsStep: function() { return createEmulateNetworkConditionsStep; },
  createViewportStep: function() { return createViewportStep; },
  maxTimeout: function() { return maxTimeout; },
  minTimeout: function() { return minTimeout; },
  parse: function() { return parse; },
  parseStep: function() { return parseStep; }
});
/* harmony import */var _Schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


function createViewportStep(viewport) {
    return {
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.SetViewport,
        width: viewport.clientWidth,
        height: viewport.clientHeight,
        // TODO read real parameters here
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    };
}
function createEmulateNetworkConditionsStep(conditions) {
    return _object_spread({
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.EmulateNetworkConditions
    }, conditions);
}
function areSelectorsEqual(stepA, stepB) {
    if ('selectors' in stepA && 'selectors' in stepB) {
        return JSON.stringify(stepA.selectors) === JSON.stringify(stepB.selectors);
    }
    return !('selectors' in stepA) && !('selectors' in stepB);
}
var minTimeout = 1;
var maxTimeout = 30000;
var parse = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parse;
var parseStep = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parseStep; //# sourceMappingURL=SchemaUtils.js.map


}),
"./panels/recorder/util/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEVTOOLS_RECORDER_WORLD_NAME: function() { return DEVTOOLS_RECORDER_WORLD_NAME; },
  InjectedScript: function() { return InjectedScript; },
  SharedObject: function() { return /* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__; },
  isDebugBuild: function() { return isDebugBuild; }
});
/* harmony import */var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./panels/recorder/util/SharedObject.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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

// Setting this to `true` enables extra logging for the injected scripts.
var isDebugBuild = false;
var DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
var InjectedScript = /*#__PURE__*/ function() {
    "use strict";
    function InjectedScript() {
        _class_call_check(this, InjectedScript);
    }
    _create_class(InjectedScript, null, [
        {
            key: "get",
            value: function get() {
                var _this = this;
                return _async_to_generator(function() {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)) return [
                                    3,
                                    2
                                ];
                                _tmp = [
                                    _this,
                                    InjectedScript,
                                    _injectedScript
                                ];
                                return [
                                    4,
                                    fetch(new URL(/* asset import */__webpack_require__(/*! ../injected/injected.generated.js */ "./panels/recorder/injected/injected.generated.js?b4f9"), __webpack_require__.b))
                                ];
                            case 1:
                                _class_static_private_field_spec_set.apply(void 0, _tmp.concat([
                                    _state.sent().text()
                                ]));
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return InjectedScript;
}();
var _injectedScript = {
    writable: true,
    value: void 0
};
 //# sourceMappingURL=util.js.map


}),
"./third_party/puppeteer-replay/puppeteer-replay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssertedEventType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType; },
  JSONStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension; },
  LighthouseRunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseRunnerExtension; },
  LighthouseStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension; },
  PuppeteerReplayStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension; },
  PuppeteerRunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerExtension; },
  PuppeteerRunnerOwningBrowserExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerOwningBrowserExtension; },
  PuppeteerStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerStringifyExtension; },
  Runner: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Runner; },
  RunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.RunnerExtension; },
  Schema: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Schema; },
  SelectorType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType; },
  StepType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StepType; },
  StringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StringifyExtension; },
  assertAllStepTypesAreHandled: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.assertAllStepTypesAreHandled; },
  createRunner: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.createRunner; },
  formatAsJSLiteral: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatAsJSLiteral; },
  formatJSONAsJS: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatJSONAsJS; },
  getSelectorType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.getSelectorType; },
  maxTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.maxTimeout; },
  minTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.minTimeout; },
  mouseButtonMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.mouseButtonMap; },
  parse: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parse; },
  parseSourceMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap; },
  parseStep: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseStep; },
  pointerDeviceTypes: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.pointerDeviceTypes; },
  selectorToPElementSelector: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.selectorToPElementSelector; },
  stringify: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringify; },
  stringifyStep: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep; },
  stripSourceMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap; },
  typeableInputTypes: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.typeableInputTypes; },
  validTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.validTimeout; }
});
/* harmony import */var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=puppeteer-replay.js.map


}),

}]);