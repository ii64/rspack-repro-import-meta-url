"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_node_app_NodeMain_js"], {
"./entrypoints/node_app/NodeMain.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeChildTargetManager: function() { return NodeChildTargetManager; },
  NodeConnection: function() { return NodeConnection; },
  NodeMainImpl: function() { return NodeMainImpl; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
     *@description Text that refers to the main target
     */ main: 'Main',
    /**
     *@description Text in Node Main of the Sources panel when debugging a Node.js app
     *@example {example.com} PH1
     */ nodejsS: 'Node.js: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/node_app/NodeMain.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var nodeMainImplInstance;
var NodeMainImpl = /*#__PURE__*/ function() {
    "use strict";
    function NodeMainImpl() {
        _class_call_check(this, NodeMainImpl);
    }
    _create_class(NodeMainImpl, [
        {
            key: "run",
            value: function run() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.ConnectToNodeJSFromFrontend);
                        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Connections.initMainConnection(/*#__PURE__*/ _async_to_generator(function() {
                            var target;
                            return _ts_generator(this, function(_state) {
                                target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().createTarget('main', i18nString(UIStrings.main), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Browser, null);
                                target.setInspectedURL('Node.js');
                                return [
                                    2
                                ];
                            });
                        }), _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!nodeMainImplInstance || forceNew) {
                    nodeMainImplInstance = new NodeMainImpl();
                }
                return nodeMainImplInstance;
            }
        }
    ]);
    return NodeMainImpl;
}();
var _targetManager = /*#__PURE__*/ new WeakMap(), _parentTarget = /*#__PURE__*/ new WeakMap(), _targetAgent = /*#__PURE__*/ new WeakMap(), _childTargets = /*#__PURE__*/ new WeakMap(), _childConnections = /*#__PURE__*/ new WeakMap(), _devicesDiscoveryConfigChanged = /*#__PURE__*/ new WeakSet();
var NodeChildTargetManager = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(NodeChildTargetManager, _SDK_SDKModel_SDKModel);
    var _super = _create_super(NodeChildTargetManager);
    function NodeChildTargetManager(parentTarget) {
        _class_call_check(this, NodeChildTargetManager);
        var _this;
        _this = _super.call(this, parentTarget);
        _class_private_method_init(_assert_this_initialized(_this), _devicesDiscoveryConfigChanged);
        _class_private_field_init(_assert_this_initialized(_this), _targetManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _parentTarget, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetAgent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _childTargets, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _childConnections, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _targetManager, parentTarget.targetManager());
        _class_private_field_set(_assert_this_initialized(_this), _parentTarget, parentTarget);
        _class_private_field_set(_assert_this_initialized(_this), _targetAgent, parentTarget.targetAgent());
        _class_private_field_set(_assert_this_initialized(_this), _childTargets, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _childConnections, new Map());
        parentTarget.registerTargetDispatcher(_assert_this_initialized(_this));
        void _class_private_field_get(_this, _targetAgent).invoke_setDiscoverTargets({
            discover: true
        });
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, _class_private_method_get(_assert_this_initialized(_this), _devicesDiscoveryConfigChanged, devicesDiscoveryConfigChanged), _assert_this_initialized(_this));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
        return _this;
    }
    _create_class(NodeChildTargetManager, [
        {
            key: "dispose",
            value: function dispose() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, _class_private_method_get(this, _devicesDiscoveryConfigChanged, devicesDiscoveryConfigChanged), this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _childTargets).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var sessionId = _step.value;
                        this.detachedFromTarget({
                            sessionId: sessionId
                        });
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
            key: "targetCreated",
            value: function targetCreated(param) {
                var targetInfo = param.targetInfo;
                if (targetInfo.type === 'node' && !targetInfo.attached) {
                    void _class_private_field_get(this, _targetAgent).invoke_attachToTarget({
                        targetId: targetInfo.targetId,
                        flatten: false
                    });
                }
            }
        },
        {
            key: "targetInfoChanged",
            value: function targetInfoChanged(_event) {}
        },
        {
            key: "targetDestroyed",
            value: function targetDestroyed(_event) {}
        },
        {
            key: "attachedToTarget",
            value: function attachedToTarget(param) {
                var sessionId = param.sessionId, targetInfo = param.targetInfo;
                var name = i18nString(UIStrings.nodejsS, {
                    PH1: targetInfo.url
                });
                var connection = new NodeConnection(_class_private_field_get(this, _targetAgent), sessionId);
                _class_private_field_get(this, _childConnections).set(sessionId, connection);
                var target = _class_private_field_get(this, _targetManager).createTarget(targetInfo.targetId, name, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Node, _class_private_field_get(this, _parentTarget), undefined, undefined, connection);
                _class_private_field_get(this, _childTargets).set(sessionId, target);
                void target.runtimeAgent().invoke_runIfWaitingForDebugger();
            }
        },
        {
            key: "detachedFromTarget",
            value: function detachedFromTarget(param) {
                var sessionId = param.sessionId;
                var childTarget = _class_private_field_get(this, _childTargets).get(sessionId);
                if (childTarget) {
                    childTarget.dispose('target terminated');
                }
                _class_private_field_get(this, _childTargets).delete(sessionId);
                _class_private_field_get(this, _childConnections).delete(sessionId);
            }
        },
        {
            key: "receivedMessageFromTarget",
            value: function receivedMessageFromTarget(param) {
                var sessionId = param.sessionId, message = param.message;
                var connection = _class_private_field_get(this, _childConnections).get(sessionId);
                var onMessage = connection ? connection.onMessage : null;
                if (onMessage) {
                    onMessage.call(null, message);
                }
            }
        },
        {
            key: "targetCrashed",
            value: function targetCrashed(_event) {}
        }
    ]);
    return NodeChildTargetManager;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SDKModel.SDKModel);
function devicesDiscoveryConfigChanged(param) {
    var config = param.data;
    var locations = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = config.networkDiscoveryConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var address = _step.value;
            var parts = address.split(':');
            var port = parseInt(parts[1], 10);
            if (parts[0] && port) {
                locations.push({
                    host: parts[0],
                    port: port
                });
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
    void _class_private_field_get(this, _targetAgent).invoke_setRemoteLocations({
        locations: locations
    });
}
var _targetAgent1 = /*#__PURE__*/ new WeakMap(), _sessionId = /*#__PURE__*/ new WeakMap(), _onDisconnect = /*#__PURE__*/ new WeakMap();
var NodeConnection = /*#__PURE__*/ function() {
    "use strict";
    function NodeConnection(targetAgent, sessionId) {
        _class_call_check(this, NodeConnection);
        _class_private_field_init(this, _targetAgent1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sessionId, {
            writable: true,
            value: void 0
        });
        _define_property(this, "onMessage", void 0);
        _class_private_field_init(this, _onDisconnect, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _targetAgent1, targetAgent);
        _class_private_field_set(this, _sessionId, sessionId);
        this.onMessage = null;
        _class_private_field_set(this, _onDisconnect, null);
    }
    _create_class(NodeConnection, [
        {
            key: "setOnMessage",
            value: function setOnMessage(onMessage) {
                this.onMessage = onMessage;
            }
        },
        {
            key: "setOnDisconnect",
            value: function setOnDisconnect(onDisconnect) {
                _class_private_field_set(this, _onDisconnect, onDisconnect);
            }
        },
        {
            key: "sendRawMessage",
            value: function sendRawMessage(message) {
                void _class_private_field_get(this, _targetAgent1).invoke_sendMessageToTarget({
                    message: message,
                    sessionId: _class_private_field_get(this, _sessionId)
                });
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this, _onDisconnect)) {
                                    _class_private_field_get(_this, _onDisconnect).call(null, 'force disconnect');
                                }
                                _class_private_field_set(_this, _onDisconnect, null);
                                _this.onMessage = null;
                                return [
                                    4,
                                    _class_private_field_get(_this, _targetAgent1).invoke_detachFromTarget({
                                        sessionId: _class_private_field_get(_this, _sessionId)
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return NodeConnection;
}();
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SDKModel.SDKModel.register(NodeChildTargetManager, {
    capabilities: 32 /* SDK.Target.Capability.Target */ ,
    autostart: true
}); //# sourceMappingURL=NodeMain.js.map


}),

}]);