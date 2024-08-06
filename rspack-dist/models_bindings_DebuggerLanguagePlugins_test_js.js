"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_DebuggerLanguagePlugins_test_js"], {
"./models/bindings/DebuggerLanguagePlugins.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/LanguagePluginHelpers.js */ "./testing/LanguagePluginHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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







describe('DebuggerLanguagePlugins', function() {
    describe('ExtensionRemoteObject', function() {
        describe('isLinearMemoryInspectable', function() {
            it('yields false when the extension object has no linear memory address', function() {
                var callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                var extensionObject = {
                    type: 'object',
                    hasChildren: false
                };
                var plugin = new _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin('TestPlugin');
                var remoteObject = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerLanguagePlugins.ExtensionRemoteObject(callFrame, extensionObject, plugin);
                assert.isFalse(remoteObject.isLinearMemoryInspectable());
            });
            it('yields true when the extension object has a linear memory address', function() {
                var callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
                var extensionObject = {
                    type: 'object',
                    linearMemoryAddress: 42,
                    hasChildren: false
                };
                var plugin = new _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin('TestPlugin');
                var remoteObject = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerLanguagePlugins.ExtensionRemoteObject(callFrame, extensionObject, plugin);
                assert.isTrue(remoteObject.isLinearMemoryInspectable());
            });
        });
    });
    describe('DebuggerLanguagePluginManager', function() {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('getFunctionInfo', function() {
            var createAndRegisterScript = function createAndRegisterScript() {
                var debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                var scriptUrl = 'https://script-host/script.js';
                return debuggerModel.parsedScriptSource('0', scriptUrl, 0, 0, 0, 0, 0, '', null, false, undefined, false, false, 0, null, null, null, null, null, null);
            };
            var target;
            var pluginManager;
            var MISSING_DWO_FILE = 'test.dwo';
            var MISSING_DEBUG_FILES = {
                resourceUrl: MISSING_DWO_FILE,
                initiator: {
                    target: null,
                    frameId: null,
                    extensionId: 'chrome-extension-id',
                    initiatorUrl: 'chrome-extension-id'
                }
            };
            var FUNCTION_NAME = 'test';
            var Plugin = /*#__PURE__*/ function(TestPlugin) {
                "use strict";
                _inherits(Plugin, TestPlugin);
                var _super = _create_super(Plugin);
                function Plugin() {
                    _class_call_check(this, Plugin);
                    return _super.apply(this, arguments);
                }
                _create_class(Plugin, [
                    {
                        key: "getFunctionInfo",
                        value: function getFunctionInfo(_rawLocation) {
                            return Promise.resolve({
                                missingSymbolFiles: []
                            });
                        }
                    },
                    {
                        key: "handleScript",
                        value: function handleScript(_) {
                            return true;
                        }
                    },
                    {
                        key: "addRawModule",
                        value: function addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
                            return Promise.resolve([
                                'https://script-host/script.js'
                            ]);
                        }
                    }
                ]);
                return Plugin;
            }(_testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_3__.TestPlugin);
            beforeEach(function() {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
                var targetManager = target.targetManager();
                var resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
                var debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                    forceNew: true,
                    resourceMapping: resourceMapping,
                    targetManager: targetManager
                });
                pluginManager = debuggerWorkspaceBinding.pluginManager;
            });
            it('correctly processes missing debug info if available', /*#__PURE__*/ _async_to_generator(function() {
                var plugin, script, location, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            plugin = new Plugin('TestPlugin');
                            sinon.stub(plugin, 'getFunctionInfo').returns(Promise.resolve({
                                missingSymbolFiles: [
                                    MISSING_DWO_FILE
                                ]
                            }));
                            pluginManager.addPlugin(plugin);
                            script = createAndRegisterScript();
                            location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                            return [
                                4,
                                pluginManager.getFunctionInfo(script, location)
                            ];
                        case 1:
                            result = _state.sent();
                            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                            assert.deepStrictEqual(result, {
                                missingSymbolFiles: [
                                    MISSING_DEBUG_FILES
                                ]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
            it('correctly returns frames if available', /*#__PURE__*/ _async_to_generator(function() {
                var plugin, script, location, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            plugin = new Plugin('TestPlugin');
                            sinon.stub(plugin, 'getFunctionInfo').returns(Promise.resolve({
                                frames: [
                                    {
                                        name: FUNCTION_NAME
                                    }
                                ]
                            }));
                            pluginManager.addPlugin(plugin);
                            script = createAndRegisterScript();
                            location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                            return [
                                4,
                                pluginManager.getFunctionInfo(script, location)
                            ];
                        case 1:
                            result = _state.sent();
                            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                            assert.deepStrictEqual(result, {
                                frames: [
                                    {
                                        name: FUNCTION_NAME
                                    }
                                ]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
            it('correctly returns frames and missing debug info if both are available', /*#__PURE__*/ _async_to_generator(function() {
                var plugin, script, location, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            plugin = new Plugin('TestPlugin');
                            sinon.stub(plugin, 'getFunctionInfo').returns(Promise.resolve({
                                frames: [
                                    {
                                        name: FUNCTION_NAME
                                    }
                                ],
                                missingSymbolFiles: [
                                    MISSING_DWO_FILE
                                ]
                            }));
                            pluginManager.addPlugin(plugin);
                            script = createAndRegisterScript();
                            location = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location);
                            return [
                                4,
                                pluginManager.getFunctionInfo(script, location)
                            ];
                        case 1:
                            result = _state.sent();
                            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined(result);
                            assert.deepStrictEqual(result, {
                                frames: [
                                    {
                                        name: FUNCTION_NAME
                                    }
                                ],
                                missingSymbolFiles: [
                                    MISSING_DEBUG_FILES
                                ]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=DebuggerLanguagePlugins.test.js.map


}),

}]);