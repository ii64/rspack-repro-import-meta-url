"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_breakpoints_BreakpointManager_test_js"], {
"./models/breakpoints/BreakpointManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/LanguagePluginHelpers.js */ "./testing/LanguagePluginHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/PersistenceHelpers.js */ "./testing/PersistenceHelpers.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */var _testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../testing/SourceMapHelpers.js */ "./testing/SourceMapHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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

















(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('BreakpointManager', function() {
    var uiSourceCodeFromScript = function uiSourceCodeFromScript(debuggerModel, script) {
        return _uiSourceCodeFromScript.apply(this, arguments);
    };
    var URL_HTML = 'http://site/index.html';
    var INLINE_SCRIPT_START = 41;
    var BREAKPOINT_SCRIPT_LINE = 1;
    var INLINE_BREAKPOINT_RAW_LINE = BREAKPOINT_SCRIPT_LINE + INLINE_SCRIPT_START;
    var BREAKPOINT_RESULT_COLUMN = 5;
    var inlineScriptDescription = {
        url: URL_HTML,
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: INLINE_SCRIPT_START,
        startColumn: 0,
        hasSourceURL: false,
        embedderName: URL_HTML
    };
    var URL = 'http://site/script.js';
    var scriptDescription = {
        url: URL,
        content: 'console.log(1);\nconsole.log(2);\n',
        startLine: 0,
        startColumn: 0,
        hasSourceURL: false
    };
    var DEFAULT_BREAKPOINT = [
        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true,
        false,
        "RESTORED" /* Breakpoints.BreakpointManager.BreakpointOrigin.OTHER */ 
    ];
    // For tests with source maps.
    var ORIGINAL_SCRIPT_SOURCES_CONTENT = 'function foo() {\n  console.log(\'Hello\');\n}\n';
    var COMPILED_SCRIPT_SOURCES_CONTENT = 'function foo(){console.log("Hello")}';
    var SOURCE_MAP_URL = 'https://site/script.js.map';
    var ORIGINAL_SCRIPT_SOURCE_URL = 'https://site/original-script.js';
    // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
    var sourceMapContent = JSON.stringify({
        'version': 3,
        'names': [
            'foo',
            'console',
            'log'
        ],
        'sources': [
            '/original-script.js'
        ],
        'sourcesContent': [
            ORIGINAL_SCRIPT_SOURCES_CONTENT
        ],
        'mappings': 'AAAA,SAASA,MACPC,QAAQC,IAAI,QACd'
    });
    var target;
    var backend;
    var breakpointManager;
    var debuggerWorkspaceBinding;
    var targetManager;
    var workspace;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var resourceMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
                    resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.ResourceMapping.ResourceMapping(targetManager, workspace);
                    debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        resourceMapping: resourceMapping,
                        targetManager: targetManager
                    });
                    _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.IgnoreListManager.IgnoreListManager.instance({
                        forceNew: true,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.MockProtocolBackend();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    // Wait for the resource tree model to load; otherwise, our uiSourceCodes could be asynchronously
                    // invalidated during the test.
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.getInitializedResourceTreeModel)(target)
                    ];
                case 1:
                    _state.sent();
                    breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                        forceNew: true,
                        targetManager: targetManager,
                        workspace: workspace,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    function _uiSourceCodeFromScript() {
        _uiSourceCodeFromScript = _async_to_generator(function(debuggerModel, script) {
            var rawLocation, uiLocation, _uiLocation_uiSourceCode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rawLocation = debuggerModel.createRawLocation(script, 0, 0);
                        return [
                            4,
                            breakpointManager.debuggerWorkspaceBinding.rawLocationToUILocation(rawLocation)
                        ];
                    case 1:
                        uiLocation = _state.sent();
                        return [
                            2,
                            (_uiLocation_uiSourceCode = uiLocation === null || uiLocation === void 0 ? void 0 : uiLocation.uiSourceCode) !== null && _uiLocation_uiSourceCode !== void 0 ? _uiLocation_uiSourceCode : null
                        ];
                }
            });
        });
        return _uiSourceCodeFromScript.apply(this, arguments);
    }
    describe('possibleBreakpoints', function() {
        it('correctly asks the back-end for breakable positions', /*#__PURE__*/ _async_to_generator(function() {
            var debuggerModel, script, scriptId, uiSourceCode, getPossibleBreakpoints, uiTextRange, possibleBreakpoints;
            function getPossibleBreakpointsStub(_request) {
                return {
                    locations: [
                        {
                            scriptId: scriptId,
                            lineNumber: 0,
                            columnNumber: 4
                        },
                        {
                            scriptId: scriptId,
                            lineNumber: 0,
                            columnNumber: 8
                        }
                    ],
                    getError: function getError() {
                        return undefined;
                    }
                };
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        return [
                            4,
                            backend.addScript(target, scriptDescription, null)
                        ];
                    case 1:
                        script = _state.sent();
                        scriptId = script.scriptId;
                        return [
                            4,
                            uiSourceCodeFromScript(debuggerModel, script)
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        getPossibleBreakpoints = sinon.spy(getPossibleBreakpointsStub);
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.getPossibleBreakpoints', getPossibleBreakpoints);
                        uiTextRange = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_15__.TextRange.TextRange(0, 0, 1, 0);
                        return [
                            4,
                            breakpointManager.possibleBreakpoints(uiSourceCode, uiTextRange)
                        ];
                    case 3:
                        possibleBreakpoints = _state.sent();
                        assert.lengthOf(possibleBreakpoints, 2);
                        assert.strictEqual(possibleBreakpoints[0].uiSourceCode, uiSourceCode);
                        assert.strictEqual(possibleBreakpoints[0].lineNumber, 0);
                        assert.strictEqual(possibleBreakpoints[0].columnNumber, 4);
                        assert.strictEqual(possibleBreakpoints[1].uiSourceCode, uiSourceCode);
                        assert.strictEqual(possibleBreakpoints[1].lineNumber, 0);
                        assert.strictEqual(possibleBreakpoints[1].columnNumber, 8);
                        assert.isTrue(getPossibleBreakpoints.calledOnceWith(sinon.match({
                            start: {
                                scriptId: scriptId,
                                lineNumber: 0,
                                columnNumber: 0
                            },
                            end: {
                                scriptId: scriptId,
                                lineNumber: 1,
                                columnNumber: 0
                            },
                            restrictToFunction: false
                        })));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Breakpoints', function() {
        it('are removed and kept in storage after a back-end error', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, script, uiSourceCode, breakpoint, removedSpy;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Simulates a back-end error.
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        if (!!debuggerModel.isReadyToPause()) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerIsReadyToPause)
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        return [
                            4,
                            backend.addScript(target, scriptDescription, null)
                        ];
                    case 3:
                        script = _state.sent();
                        return [
                            4,
                            uiSourceCodeFromScript(debuggerModel, script)
                        ];
                    case 4:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        // Set up the backend to respond with an error.
                        backend.setBreakpointByUrlToFail(URL, BREAKPOINT_SCRIPT_LINE);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                BREAKPOINT_SCRIPT_LINE,
                                2
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 5:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        removedSpy = sinon.spy(breakpoint, 'remove');
                        return [
                            4,
                            breakpoint.updateBreakpoint()
                        ];
                    case 6:
                        _state.sent();
                        // Breakpoint was removed and is kept in storage.
                        assert.isTrue(breakpoint.getIsRemoved());
                        assert.isTrue(removedSpy.calledWith(true));
                        return [
                            2
                        ];
                }
            });
        }));
        it('are only set if the uiSourceCode is still valid (not removed)', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, script, uiSourceCode, breakpoint, breakLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        return [
                            4,
                            backend.addScript(target, scriptDescription, null)
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            4,
                            uiSourceCodeFromScript(debuggerModel, script)
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        // Remove the project (and thus the uiSourceCode).
                        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(uiSourceCode.project());
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                BREAKPOINT_SCRIPT_LINE,
                                2
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 3:
                        breakpoint = _state.sent();
                        // We should not expect any breakpoints to be set.
                        assert.isUndefined(breakpoint);
                        breakLocations = breakpointManager.allBreakpointLocations();
                        assert.lengthOf(breakLocations, 0);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Breakpoint#backendCondition()', function() {
        var createBreakpoint = function createBreakpoint(condition, isLogpoint) {
            var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({
                url: URL,
                mimeType: 'text/javascript'
            }).uiSourceCode;
            var storageState = {
                url: URL,
                resourceTypeName: uiSourceCode.contentType().name(),
                lineNumber: 5,
                condition: condition,
                enabled: true,
                isLogpoint: isLogpoint
            };
            return new _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Breakpoint(breakpointManager, uiSourceCode, storageState, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ );
        };
        it('wraps logpoints in console.log', function() {
            var breakpoint = createBreakpoint('x', /* isLogpoint */ true);
            assert.include(breakpoint.backendCondition(), 'console.log(x)');
        });
        it('leaves conditional breakpoints alone', function() {
            var breakpoint = createBreakpoint('x === 42', /* isLogpoint */ false);
            // Split of sourceURL.
            var lines = breakpoint.backendCondition().split('\n');
            assert.strictEqual(lines[0], 'x === 42');
        });
        it('has a sourceURL for logpoints', function() {
            var breakpoint = createBreakpoint('x', /* isLogpoint */ true);
            assert.include(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('has a sourceURL for conditional breakpoints', function() {
            var breakpoint = createBreakpoint('x === 42', /* isLogpoint */ false);
            assert.include(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('has no sourceURL for normal breakpoints', function() {
            var breakpoint = createBreakpoint('', /* isLogpoint */ false);
            assert.notInclude(breakpoint.backendCondition(), '//# sourceURL=');
        });
        it('substitutes source-mapped variables', /*#__PURE__*/ _async_to_generator(function() {
            var debuggerModel, scriptInfo, sourceMapContent, sourceMapInfo, script, uiSourceCode, cdpSetBreakpointPromise, breakpoint, _ref, url, lineNumber, columnNumber, condition;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        scriptInfo = {
                            url: URL,
                            content: 'function adder(n,r){const t=n+r;return t}'
                        };
                        // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
                        sourceMapContent = JSON.stringify({
                            'version': 3,
                            'names': [
                                'adder',
                                'param1',
                                'param2',
                                'result'
                            ],
                            'sources': [
                                '/original-script.js'
                            ],
                            'sourcesContent': [
                                'function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'
                            ],
                            'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT'
                        });
                        sourceMapInfo = {
                            url: SOURCE_MAP_URL,
                            content: sourceMapContent
                        };
                        return [
                            4,
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript())
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        // Mock out "Debugger.setBreakpointByUrl and just echo back the request".
                        cdpSetBreakpointPromise = new Promise(function(res) {
                            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.clearMockConnectionResponseHandler)('Debugger.setBreakpointByUrl');
                            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', function(request) {
                                res(request);
                                return {};
                            });
                        });
                        return [
                            4,
                            breakpointManager.setBreakpoint(uiSourceCode, 1, 0, 'param1 > 0', /* enabled */ true, /* isLogpoint */ false, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ )
                        ];
                    case 3:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        return [
                            4,
                            breakpoint.updateBreakpoint()
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            cdpSetBreakpointPromise
                        ];
                    case 5:
                        _ref = _state.sent(), url = _ref.url, lineNumber = _ref.lineNumber, columnNumber = _ref.columnNumber, condition = _ref.condition;
                        assert.strictEqual(url, URL);
                        assert.strictEqual(lineNumber, 0);
                        assert.strictEqual(columnNumber, 20);
                        assert.strictEqual(condition, 'n > 0\n\n//# sourceURL=debugger://breakpoint');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('substitutes source-mapped variables for the same original script in different bundles correctly', /*#__PURE__*/ _async_to_generator(function() {
        var debuggerModel, url1, url2, scriptInfo1, scriptInfo2, sourceMapContent, sourceMapInfo, uiSourceCode, cdpSetBreakpointPromise, breakpoint, requests, req1, req2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    // Create two 'bundles' that are identical modulo variable names.
                    url1 = 'http://site/script1.js';
                    url2 = 'http://site/script2.js';
                    scriptInfo1 = {
                        url: url1,
                        content: 'function adder(n,r){const t=n+r;return t}'
                    };
                    scriptInfo2 = {
                        url: url2,
                        content: 'function adder(o,p){const t=o+p;return t}'
                    };
                    // The source map is the same for both 'bundles'.
                    // Created with `terser -m -o script.min.js --source-map "includeSources;url=script.min.js.map" original-script.js`
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'names': [
                            'adder',
                            'param1',
                            'param2',
                            'result'
                        ],
                        'sources': [
                            '/original-script.js'
                        ],
                        'sourcesContent': [
                            'function adder(param1, param2) {\n  const result = param1 + param2;\n  return result;\n}\n\n'
                        ],
                        'mappings': 'AAAA,SAASA,MAAMC,EAAQC,GACrB,MAAMC,EAASF,EAASC,EACxB,OAAOC,CACT'
                    });
                    sourceMapInfo = {
                        url: SOURCE_MAP_URL,
                        content: sourceMapContent
                    };
                    return [
                        4,
                        Promise.all([
                            backend.addScript(target, scriptInfo1, sourceMapInfo),
                            backend.addScript(target, scriptInfo2, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, /* isContentScript */ false)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    // Mock out "Debugger.setBreakpointByUrl and echo back the first two 'Debugger.setBreakpointByUrl' requests.
                    cdpSetBreakpointPromise = new Promise(function(res) {
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.clearMockConnectionResponseHandler)('Debugger.setBreakpointByUrl');
                        var requests = new Map();
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', function(request) {
                            requests.set(request.url, request);
                            if (requests.size === 2) {
                                res(requests);
                            }
                            return {};
                        });
                    });
                    return [
                        4,
                        breakpointManager.setBreakpoint(uiSourceCode, 1, 0, 'param1 > 0', /* enabled */ true, /* isLogpoint */ false, "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */ )
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    return [
                        4,
                        breakpoint.updateBreakpoint()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        cdpSetBreakpointPromise
                    ];
                case 5:
                    requests = _state.sent();
                    req1 = requests.get(url1);
                    assert.exists(req1);
                    assert.strictEqual(req1.url, url1);
                    assert.strictEqual(req1.condition, 'n > 0\n\n//# sourceURL=debugger://breakpoint');
                    req2 = requests.get(url2);
                    assert.exists(req2);
                    assert.strictEqual(req2.url, url2);
                    assert.strictEqual(req2.condition, 'o > 0\n\n//# sourceURL=debugger://breakpoint');
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows awaiting the restoration of breakpoints', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, debuggerModel, _createContentProviderUISourceCode, uiSourceCode, project, breakpoint, responder, script, modelBreakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({
                        url: URL,
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            0,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 1:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Make sure that we await all updates that are triggered by adding the model.
                    return [
                        4,
                        breakpoint.updateBreakpoint()
                    ];
                case 2:
                    _state.sent();
                    responder = backend.responderToBreakpointByUrlRequest(URL, 0);
                    return [
                        4,
                        backend.addScript(target, scriptDescription, null)
                    ];
                case 3:
                    script = _state.sent();
                    void responder({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 0,
                                columnNumber: 9
                            }
                        ]
                    });
                    // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
                    modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
                    assert.exists(modelBreakpoint);
                    // Make sure that we do not have a linked script yet.
                    assert.strictEqual(modelBreakpoint.currentState, null);
                    // Now await restoring the breakpoint.
                    // A successful restore should update the ModelBreakpoint of the DebuggerModel
                    // to reflect a state, in which we have successfully set a breakpoint (i.e. a script id
                    // is available).
                    return [
                        4,
                        breakpointManager.restoreBreakpointsForScript(script)
                    ];
                case 4:
                    _state.sent();
                    assert.isNotNull(modelBreakpoint.currentState);
                    assert.lengthOf(modelBreakpoint.currentState, 1);
                    assert.strictEqual(modelBreakpoint.currentState[0].url, URL);
                    // Clean up.
                    return [
                        4,
                        breakpoint.remove(false)
                    ];
                case 5:
                    _state.sent();
                    _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(project);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows awaiting on scheduled update in debugger', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, _breakpoint_getLastResolvedState, debuggerModel, _createContentProviderUISourceCode, uiSourceCode, project, breakpoint, responder, script, modelBreakpoint, update, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({
                        url: URL,
                        mimeType: 'text/javascript'
                    }), uiSourceCode = _createContentProviderUISourceCode.uiSourceCode, project = _createContentProviderUISourceCode.project;
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            13,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 1:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Make sure that we await all updates that are triggered by adding the model.
                    return [
                        4,
                        breakpoint.updateBreakpoint()
                    ];
                case 2:
                    _state.sent();
                    responder = backend.responderToBreakpointByUrlRequest(URL, 13);
                    return [
                        4,
                        backend.addScript(target, scriptDescription, null)
                    ];
                case 3:
                    script = _state.sent();
                    void responder({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 13,
                                columnNumber: 9
                            }
                        ]
                    });
                    // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
                    modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
                    assert.exists(modelBreakpoint);
                    assert.isNull(breakpoint.getLastResolvedState());
                    update = modelBreakpoint.scheduleUpdateInDebugger();
                    assert.isNull(breakpoint.getLastResolvedState());
                    return [
                        4,
                        update
                    ];
                case 4:
                    result = _state.sent();
                    // Make sure that no error occurred.
                    assert.isTrue(result === "OK" /* Breakpoints.BreakpointManager.DebuggerUpdateResult.OK */ );
                    assert.strictEqual((_breakpoint_getLastResolvedState = breakpoint.getLastResolvedState()) === null || _breakpoint_getLastResolvedState === void 0 ? void 0 : _breakpoint_getLastResolvedState[0].lineNumber, 13);
                    return [
                        4,
                        breakpoint.remove(false)
                    ];
                case 5:
                    _state.sent();
                    _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance().removeProject(project);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows awaiting on removal of breakpoint in debugger', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, debuggerModel, script, uiSourceCode, breakpointId, breakpoint, modelBreakpoint, removalPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    return [
                        4,
                        backend.addScript(target, scriptDescription, null)
                    ];
                case 1:
                    script = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    breakpointId = 'BREAK_ID';
                    void backend.responderToBreakpointByUrlRequest(URL, 13)({
                        breakpointId: breakpointId,
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 13,
                                columnNumber: 9
                            }
                        ]
                    });
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            13,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    return [
                        4,
                        breakpoint.updateBreakpoint()
                    ];
                case 4:
                    _state.sent();
                    // Retrieve the ModelBreakpoint that is linked to our DebuggerModel.
                    modelBreakpoint = breakpoint.modelBreakpoint(debuggerModel);
                    assert.exists(modelBreakpoint);
                    assert.exists(modelBreakpoint.currentState);
                    // Test if awaiting breakpoint.remove is actually removing the state.
                    removalPromise = backend.breakpointRemovedPromise(breakpointId);
                    return [
                        4,
                        breakpoint.remove(false)
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        removalPromise
                    ];
                case 6:
                    _state.sent();
                    assert.isNull(modelBreakpoint.currentState);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes ui source code from breakpoint even after breakpoint live location update', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, BREAKPOINT_TS_LINE, _createContentProviderUISourceCode, uiSourceCodeTs, debuggerModel, script, uiSourceCode, breakpointResponder, breakpoint, mapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    BREAKPOINT_TS_LINE = 10;
                    _createContentProviderUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createContentProviderUISourceCode)({
                        url: 'http://example.com/source.ts',
                        mimeType: 'text/typescript'
                    }), uiSourceCodeTs = _createContentProviderUISourceCode.uiSourceCode;
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    return [
                        4,
                        backend.addScript(target, scriptDescription, null)
                    ];
                case 1:
                    script = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    // Register our interest in the breakpoint request.
                    breakpointResponder = backend.responderToBreakpointByUrlRequest(URL, BREAKPOINT_SCRIPT_LINE);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            BREAKPOINT_SCRIPT_LINE,
                            2
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
                    // Concurrently, enforce update of the breakpoint in the debugger.
                    return [
                        4,
                        Promise.all([
                            breakpointResponder({
                                breakpointId: 'BREAK_ID',
                                locations: [
                                    {
                                        scriptId: script.scriptId,
                                        lineNumber: BREAKPOINT_SCRIPT_LINE,
                                        columnNumber: BREAKPOINT_RESULT_COLUMN
                                    }
                                ]
                            }),
                            breakpoint.refreshInDebugger()
                        ])
                    ];
                case 4:
                    _state.sent();
                    // Map the breakpoint location to a different file (this will internally update its live location).
                    mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_11__.createFakeScriptMapping)(debuggerModel, uiSourceCodeTs, BREAKPOINT_TS_LINE, script.scriptId);
                    _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().addSourceMapping(mapping);
                    return [
                        4,
                        breakpointManager.debuggerWorkspaceBinding.updateLocations(script)
                    ];
                case 5:
                    _state.sent();
                    // Verify that the location of the breakpoint was updated.
                    assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs).length, 1);
                    assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs)[0].breakpoint, breakpoint);
                    assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs)[0].uiLocation.lineNumber, BREAKPOINT_TS_LINE);
                    // Remove the target and verify that the UI source codes were removed from the breakpoint.
                    breakpointManager.targetManager.removeTarget(target);
                    assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                    assert.strictEqual(breakpointManager.breakpointLocationsForUISourceCode(uiSourceCodeTs).length, 0);
                    _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
                    return [
                        4,
                        breakpoint.remove(false)
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('can set breakpoints in inline scripts', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, debuggerModel, inlineScript, uiSourceCode, breakpointResponder, breakpoint, locations;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    return [
                        4,
                        backend.addScript(target, inlineScriptDescription, null)
                    ];
                case 1:
                    inlineScript = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, inlineScript)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    // Register our interest in the breakpoint request.
                    breakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            BREAKPOINT_SCRIPT_LINE,
                            2
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
                    // Concurrently, enforce update of the breakpoint in the debugger.
                    return [
                        4,
                        Promise.all([
                            breakpointResponder({
                                breakpointId: 'BREAK_ID',
                                locations: [
                                    {
                                        scriptId: inlineScript.scriptId,
                                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                        columnNumber: BREAKPOINT_RESULT_COLUMN
                                    }
                                ]
                            }),
                            breakpoint.refreshInDebugger()
                        ])
                    ];
                case 4:
                    _state.sent();
                    // Check that the breakpoint was set at the correct location?
                    locations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                    assert.strictEqual(1, locations.length);
                    assert.strictEqual(1, locations[0].uiLocation.lineNumber);
                    assert.strictEqual(5, locations[0].uiLocation.columnNumber);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can restore breakpoints in inline scripts', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, debuggerModel, inlineScript, uiSourceCode, breakpointResponder, breakpoint, reloadedDebuggerModel, reloadedBreakpointResponder, reloadedInlineScript, reloadedUiSourceCode, unboundLocations, boundLocations;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    return [
                        4,
                        backend.addScript(target, inlineScriptDescription, null)
                    ];
                case 1:
                    inlineScript = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, inlineScript)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    // Register our interest in the breakpoint request.
                    breakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            BREAKPOINT_SCRIPT_LINE,
                            2
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                        uiSourceCode
                    ]);
                    // Await the breakpoint request at the mock backend and send a CDP response once the request arrives.
                    // Concurrently, enforce update of the breakpoint in the debugger.
                    return [
                        4,
                        Promise.all([
                            breakpointResponder({
                                breakpointId: 'BREAK_ID',
                                locations: [
                                    {
                                        scriptId: inlineScript.scriptId,
                                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                        columnNumber: BREAKPOINT_RESULT_COLUMN
                                    }
                                ]
                            }),
                            breakpoint.refreshInDebugger()
                        ])
                    ];
                case 4:
                    _state.sent();
                    // Disconnect from the target. This will also unload the script.
                    breakpointManager.targetManager.removeTarget(target);
                    // Make sure the source code for the script was removed from the breakpoint.
                    assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                    // Create a new target.
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(reloadedDebuggerModel);
                    // Load the same inline script (with a different script id!) into the new target.
                    // Once the model loads the script, it wil try to restore the breakpoint. Let us make sure the backend
                    // will be ready to produce a response before adding the script.
                    reloadedBreakpointResponder = backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE);
                    return [
                        4,
                        backend.addScript(target, inlineScriptDescription, null)
                    ];
                case 5:
                    reloadedInlineScript = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(reloadedDebuggerModel, reloadedInlineScript)
                    ];
                case 6:
                    reloadedUiSourceCode = _state.sent();
                    assert.exists(reloadedUiSourceCode);
                    // Verify the breakpoint was restored at the oriignal unbound location (before the backend binds it).
                    unboundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                    assert.strictEqual(1, unboundLocations.length);
                    assert.strictEqual(1, unboundLocations[0].uiLocation.lineNumber);
                    assert.strictEqual(2, unboundLocations[0].uiLocation.columnNumber);
                    // Wait for the breakpoint request for the reloaded script and for the breakpoint update.
                    return [
                        4,
                        Promise.all([
                            reloadedBreakpointResponder({
                                breakpointId: 'RELOADED_BREAK_ID',
                                locations: [
                                    {
                                        scriptId: reloadedInlineScript.scriptId,
                                        lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                        columnNumber: BREAKPOINT_RESULT_COLUMN
                                    }
                                ]
                            }),
                            breakpoint.refreshInDebugger()
                        ])
                    ];
                case 7:
                    _state.sent();
                    // Verify the restored position.
                    boundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                    assert.strictEqual(1, boundLocations.length);
                    assert.strictEqual(1, boundLocations[0].uiLocation.lineNumber);
                    assert.strictEqual(5, boundLocations[0].uiLocation.columnNumber);
                    return [
                        2
                    ];
            }
        });
    }));
    it('eagerly restores JavaScript breakpoints in a new target', /*#__PURE__*/ _async_to_generator(function() {
        var url, lineNumber, breakpoints, breakpointSetPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Remove the default target so that we can simulate starting the debugger afresh.
                    targetManager.removeTarget(target);
                    // Set the breakpoint storage to contain a breakpoint and re-initialize
                    // the breakpoint manager from that storage. This should create a breakpoint instance
                    // in the breakpoint manager.
                    url = 'http://example.com/script.js';
                    lineNumber = 1;
                    breakpoints = [
                        {
                            url: url,
                            resourceTypeName: 'script',
                            lineNumber: lineNumber,
                            condition: '',
                            enabled: true,
                            isLogpoint: false
                        }
                    ];
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints).set(breakpoints);
                    _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                        forceNew: true,
                        targetManager: targetManager,
                        workspace: workspace,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    // Create a new target and make sure that the backend receives setBreakpointByUrl request
                    // from breakpoint manager.
                    breakpointSetPromise = backend.responderToBreakpointByUrlRequest(url, lineNumber)({
                        breakpointId: 'BREAK_ID',
                        locations: []
                    });
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)());
                    return [
                        4,
                        breakpointSetPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('eagerly restores TypeScript breakpoints in a new target', /*#__PURE__*/ _async_to_generator(function() {
        var compiledUrl, compiledLineNumber, breakpoints, breakpointSetPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Remove the default target so that we can simulate starting the debugger afresh.
                    targetManager.removeTarget(target);
                    // Set the breakpoint storage to contain a source-mapped breakpoint and re-initialize
                    // the breakpoint manager from that storage. This should create a breakpoint instance
                    // in the breakpoint manager (for the resolved location!).
                    compiledUrl = 'http://example.com/compiled.js';
                    compiledLineNumber = 2;
                    breakpoints = [
                        {
                            url: 'http://example.com/src/script.ts',
                            resourceTypeName: 'sm-script',
                            lineNumber: 1,
                            condition: '',
                            enabled: true,
                            isLogpoint: false,
                            resolvedState: [
                                {
                                    url: compiledUrl,
                                    lineNumber: compiledLineNumber,
                                    columnNumber: 0,
                                    condition: ''
                                }
                            ]
                        }
                    ];
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints).set(breakpoints);
                    _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                        forceNew: true,
                        targetManager: targetManager,
                        workspace: workspace,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    // Create a new target and make sure that the backend receives setBreakpointByUrl request
                    // from breakpoint manager.
                    breakpointSetPromise = backend.responderToBreakpointByUrlRequest(compiledUrl, compiledLineNumber)({
                        breakpointId: 'BREAK_ID',
                        locations: []
                    });
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)());
                    return [
                        4,
                        breakpointSetPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('saves generated location into storage', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, debuggerModel, breakpoints, setting, scriptInfo, sourceMapInfo, script, uiSourceCode, breakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Remove the default target so that we can simulate starting the debugger afresh.
                    targetManager.removeTarget(target);
                    // Re-create a target and breakpoint manager.
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    breakpoints = [];
                    setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints);
                    _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                        forceNew: true,
                        targetManager: targetManager,
                        workspace: workspace,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    // Add script with source map.
                    (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
                    scriptInfo = {
                        url: URL,
                        content: COMPILED_SCRIPT_SOURCES_CONTENT
                    };
                    sourceMapInfo = {
                        url: SOURCE_MAP_URL,
                        content: sourceMapContent
                    };
                    return [
                        4,
                        backend.addScript(target, scriptInfo, sourceMapInfo)
                    ];
                case 1:
                    script = _state.sent();
                    return [
                        4,
                        debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript())
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            1,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Set the breakpoint response for our upcoming request.
                    void backend.responderToBreakpointByUrlRequest(URL, 0)({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 0,
                                columnNumber: 15
                            }
                        ]
                    });
                    // Ensure the breakpoint is fully set.
                    return [
                        4,
                        breakpoint.refreshInDebugger()
                    ];
                case 4:
                    _state.sent();
                    // Check that the storage contains the resolved breakpoint location.
                    assert.lengthOf(setting.get(), 1);
                    assert.deepEqual(setting.get()[0].resolvedState, [
                        {
                            url: URL,
                            lineNumber: 0,
                            columnNumber: 15,
                            condition: ''
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('restores latest breakpoints from storage', /*#__PURE__*/ _async_to_generator(function() {
        var expectedBreakpointLines, breakpointRequestLines, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Remove the default target so that we can simulate starting the debugger afresh.
                    targetManager.removeTarget(target);
                    expectedBreakpointLines = [
                        1,
                        2
                    ];
                    breakpointRequestLines = new Promise(function(resolve, reject) {
                        var _loop = function(i) {
                            var lineNumber = i;
                            // Push the breakpoint to our mock storage. The storage will be then used
                            // to initialize the breakpoint manager.
                            breakpoints.push({
                                url: URL,
                                resourceTypeName: 'script',
                                lineNumber: lineNumber,
                                condition: '',
                                enabled: true,
                                isLogpoint: false
                            });
                            // When the mock backend receives a request for this breakpoint, it will
                            // respond and record the request. Also, once we receive the
                            void backend.responderToBreakpointByUrlRequest(URL, lineNumber)({
                                breakpointId: 'BREAK_ID',
                                locations: []
                            }).then(function() {
                                breakpointRequestLinesReceived.add(lineNumber);
                                if (breakpointRequestLinesReceived.size === expectedBreakpointLines.length) {
                                    resolve(Array.from(breakpointRequestLinesReceived).sort(function(l, r) {
                                        return l - r;
                                    }));
                                }
                            }, reject);
                        };
                        var breakpoints = [];
                        // Accumulator for breakpoint lines from setBreakpointByUrl requests.
                        var breakpointRequestLinesReceived = new Set();
                        // Create three breakpoints in the storage and register the corresponding
                        // request handler in the mock backend. The handler will resolve the promise
                        // (and thus finish up the test) once it receives two breakpoint requests.
                        // The idea is to check that the front-end requested the two latest breakpoints
                        // from the backend.
                        for(var i = 0; i < 3; i++)_loop(i);
                        // Re-create the breakpoint manager and the target.
                        var setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('breakpoints', breakpoints);
                        setting.set(breakpoints);
                        // Create the breakpoint manager, request placing on the two latest breakpoints in the backend.
                        _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                            forceNew: true,
                            targetManager: targetManager,
                            workspace: workspace,
                            debuggerWorkspaceBinding: debuggerWorkspaceBinding,
                            restoreInitialBreakpointCount: expectedBreakpointLines.length
                        });
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    });
                    _ = assert.deepEqual;
                    _1 = Array.from;
                    return [
                        4,
                        breakpointRequestLines
                    ];
                case 1:
                    _.apply(assert, [
                        _1.apply(Array, [
                            _state.sent()
                        ]),
                        expectedBreakpointLines
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('with instrumentation breakpoints turned on', function() {
        var testBreakpointMovedOnInstrumentationBreak = function testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fileSystemFileUrl, content, type) {
            return _testBreakpointMovedOnInstrumentationBreak.apply(this, arguments);
        };
        beforeEach(function() {
            var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
            var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
            breakpointManager = _breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.BreakpointManager.instance({
                forceNew: true,
                targetManager: targetManager,
                workspace: workspace,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
        });
        afterEach(function() {
            _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
        });
        function _testBreakpointMovedOnInstrumentationBreak() {
            _testBreakpointMovedOnInstrumentationBreak = _async_to_generator(function(fileSystemPath, fileSystemFileUrl, content, type) {
                var _breakpointManager, debuggerModel, _createFileSystemFileForPersistenceTests, fileSystemUiSourceCode, project, breakpointLine, resolvedBreakpointLine, script, uiSourceCode, resumeSentPromise, reloadedBoundLocations;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                            assert.exists(debuggerModel);
                            _createFileSystemFileForPersistenceTests = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({
                                fileSystemFileUrl: fileSystemFileUrl,
                                fileSystemPath: fileSystemPath,
                                type: type
                            }, scriptDescription.url, content, target), fileSystemUiSourceCode = _createFileSystemFileForPersistenceTests.uiSourceCode, project = _createFileSystemFileForPersistenceTests.project;
                            breakpointLine = 0;
                            resolvedBreakpointLine = 1;
                            // Set the breakpoint on the file system uiSourceCode.
                            return [
                                4,
                                (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                    fileSystemUiSourceCode,
                                    breakpointLine,
                                    0
                                ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                backend.addScript(target, scriptDescription, null)
                            ];
                        case 2:
                            script = _state.sent();
                            uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
                            assert.exists(uiSourceCode);
                            assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
                            // Set the breakpoint response for our upcoming request.
                            void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                                breakpointId: 'BREAK_ID',
                                locations: [
                                    {
                                        scriptId: script.scriptId,
                                        lineNumber: resolvedBreakpointLine,
                                        columnNumber: 0
                                    }
                                ]
                            });
                            // Register our interest in an outgoing 'resume', which should be sent as soon as
                            // we have set up all breakpoints during the instrumentation pause.
                            resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                            // Inform the front-end about an instrumentation break.
                            backend.dispatchDebuggerPause(script, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                            // Wait for the breakpoints to be set, and the resume to be sent.
                            return [
                                4,
                                resumeSentPromise
                            ];
                        case 3:
                            _state.sent();
                            // Verify that the network uiSourceCode has the breakpoint that we originally set
                            // on the file system uiSourceCode.
                            reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                            assert.strictEqual(1, reloadedBoundLocations.length);
                            assert.strictEqual(resolvedBreakpointLine, reloadedBoundLocations[0].uiLocation.lineNumber);
                            assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
                            project.dispose();
                            return [
                                2
                            ];
                    }
                });
            });
            return _testBreakpointMovedOnInstrumentationBreak.apply(this, arguments);
        }
        it('can restore breakpoints in scripts', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, breakpointLine, resolvedBreakpointLine, scriptInfo, script, uiSourceCode, breakpoint, boundLocations, reloadedDebuggerModel, reloadedScript, reloadedUiSourceCode, resumeSentPromise, reloadedBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        breakpointLine = 0;
                        resolvedBreakpointLine = 3;
                        // Add script.
                        scriptInfo = {
                            url: URL,
                            content: 'console.log(\'hello\')'
                        };
                        return [
                            4,
                            backend.addScript(target, scriptInfo, null)
                        ];
                    case 1:
                        script = _state.sent();
                        // Get the uiSourceCode for the source.
                        uiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                breakpointLine,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 2:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: resolvedBreakpointLine,
                                    columnNumber: 0
                                }
                            ]
                        });
                        return [
                            4,
                            breakpoint.refreshInDebugger()
                        ];
                    case 3:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            uiSourceCode
                        ]);
                        // Verify the restored position.
                        boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                        assert.strictEqual(1, boundLocations.length);
                        assert.strictEqual(resolvedBreakpointLine, boundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
                        // Disconnect from the target. This will also unload the script.
                        breakpointManager.targetManager.removeTarget(target);
                        // Make sure the source code for the script was removed from the breakpoint.
                        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                        // Remove the breakpoint.
                        return [
                            4,
                            breakpoint.remove(true)
                        ];
                    case 4:
                        _state.sent();
                        // Create a new target.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(reloadedDebuggerModel);
                        return [
                            4,
                            backend.addScript(target, scriptInfo, null)
                        ];
                    case 5:
                        reloadedScript = _state.sent();
                        // Get the uiSourceCode for the original source.
                        reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
                        assert.exists(reloadedUiSourceCode);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                            breakpointId: 'RELOADED_BREAK_ID',
                            locations: [
                                {
                                    scriptId: reloadedScript.scriptId,
                                    lineNumber: resolvedBreakpointLine,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Register our interest in an outgoing 'resume', which should be sent as soon as
                        // we have set up all breakpoints during the instrumentation pause.
                        resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                        // Inform the front-end about an instrumentation break.
                        backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                        // Wait for the breakpoints to be set, and the resume to be sent.
                        return [
                            4,
                            resumeSentPromise
                        ];
                    case 6:
                        _state.sent();
                        // Verify the restored position.
                        reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, reloadedBoundLocations.length);
                        assert.strictEqual(resolvedBreakpointLine, reloadedBoundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can restore breakpoints in a default-mapped inline scripts without sourceURL comment', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, script, uiSourceCode, breakpoint, boundLocations, reloadedDebuggerModel, reloadedScript, reloadedUiSourceCode, resumeSentPromise, reloadedBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        return [
                            4,
                            backend.addScript(target, inlineScriptDescription, null)
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForScript(script)
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Debugger);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                BREAKPOINT_SCRIPT_LINE,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 3:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                    columnNumber: 0
                                }
                            ]
                        });
                        return [
                            4,
                            breakpoint.refreshInDebugger()
                        ];
                    case 4:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            uiSourceCode
                        ]);
                        // Verify the position.
                        boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                        assert.strictEqual(1, boundLocations.length);
                        assert.strictEqual(BREAKPOINT_SCRIPT_LINE, boundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
                        // Disconnect from the target. This will also unload the script.
                        breakpointManager.targetManager.removeTarget(target);
                        // Make sure the source code for the script was removed from the breakpoint.
                        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                        // Remove the breakpoint.
                        return [
                            4,
                            breakpoint.remove(true)
                        ];
                    case 5:
                        _state.sent();
                        // Create a new target.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(reloadedDebuggerModel);
                        return [
                            4,
                            backend.addScript(target, inlineScriptDescription, null)
                        ];
                    case 6:
                        reloadedScript = _state.sent();
                        // Get the uiSourceCode for the source. This is the uiSourceCode in the DefaultScriptMapping,
                        // as we haven't registered the uiSourceCode for the html file.
                        reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
                        assert.exists(reloadedUiSourceCode);
                        assert.strictEqual(reloadedUiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Debugger);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                            breakpointId: 'RELOADED_BREAK_ID',
                            locations: [
                                {
                                    scriptId: reloadedScript.scriptId,
                                    lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Register our interest in an outgoing 'resume', which should be sent as soon as
                        // we have set up all breakpoints during the instrumentation pause.
                        resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                        // Inform the front-end about an instrumentation break.
                        backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                        // Wait for the breakpoints to be set, and the resume to be sent.
                        return [
                            4,
                            resumeSentPromise
                        ];
                    case 7:
                        _state.sent();
                        // Verify the restored position.
                        reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, reloadedBoundLocations.length);
                        assert.deepEqual(reloadedBoundLocations[0].uiLocation.uiSourceCode, reloadedUiSourceCode);
                        assert.strictEqual(BREAKPOINT_SCRIPT_LINE, reloadedBoundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can restore breakpoints in an inline script without sourceURL comment', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, script, uiSourceCode, breakpoint, boundLocations, reloadedDebuggerModel, reloadedScript, reloadedUiSourceCode, resumeSentPromise, reloadedBoundLocations;
            function dispatchDocumentOpened() {
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.dispatchEvent)(target, 'Page.documentOpened', {
                    frame: {
                        id: 'main',
                        loaderId: 'foo',
                        url: URL_HTML,
                        domainAndRegistry: 'example.com',
                        securityOrigin: 'https://example.com/',
                        mimeType: 'text/html',
                        secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
                        crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
                        gatedAPIFeatures: []
                    }
                });
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        dispatchDocumentOpened();
                        return [
                            4,
                            backend.addScript(target, inlineScriptDescription, null)
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForScript(script)
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        assert.strictEqual(uiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                INLINE_BREAKPOINT_RAW_LINE,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 3:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Set the breakpoint response for our upcoming request to set a breakpoint on the raw location.
                        void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                    columnNumber: 0
                                }
                            ]
                        });
                        return [
                            4,
                            breakpoint.refreshInDebugger()
                        ];
                    case 4:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            uiSourceCode
                        ]);
                        // Verify the position.
                        boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                        assert.strictEqual(1, boundLocations.length);
                        assert.strictEqual(INLINE_BREAKPOINT_RAW_LINE, boundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
                        // Disconnect from the target. This will also unload the script.
                        breakpointManager.targetManager.removeTarget(target);
                        // Make sure the source code for the script was removed from the breakpoint.
                        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                        // Remove the breakpoint.
                        return [
                            4,
                            breakpoint.remove(true)
                        ];
                    case 5:
                        _state.sent();
                        // Create a new target.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(reloadedDebuggerModel);
                        dispatchDocumentOpened();
                        return [
                            4,
                            backend.addScript(target, inlineScriptDescription, null)
                        ];
                    case 6:
                        reloadedScript = _state.sent();
                        // Get the uiSourceCode for the source: this should be the uiSourceCode of the actual html script.
                        reloadedUiSourceCode = debuggerWorkspaceBinding.uiSourceCodeForScript(reloadedScript);
                        assert.exists(reloadedUiSourceCode);
                        assert.strictEqual(reloadedUiSourceCode.project().type(), _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.projectTypes.Network);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL_HTML, INLINE_BREAKPOINT_RAW_LINE)({
                            breakpointId: 'RELOADED_BREAK_ID',
                            locations: [
                                {
                                    scriptId: reloadedScript.scriptId,
                                    lineNumber: INLINE_BREAKPOINT_RAW_LINE,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Register our interest in an outgoing 'resume', which should be sent as soon as
                        // we have set up all breakpoints during the instrumentation pause.
                        resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                        // Inform the front-end about an instrumentation break.
                        backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                        // Wait for the breakpoints to be set, and the resume to be sent.
                        return [
                            4,
                            resumeSentPromise
                        ];
                    case 7:
                        _state.sent();
                        // Verify the restored position.
                        reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, reloadedBoundLocations.length);
                        assert.deepEqual(reloadedBoundLocations[0].uiLocation.uiSourceCode, reloadedUiSourceCode);
                        assert.strictEqual(INLINE_BREAKPOINT_RAW_LINE, reloadedBoundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can restore breakpoints in source mapped scripts', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, debuggerModel, scriptInfo, sourceMapInfo, script, uiSourceCode, breakpoint, boundLocations, reloadedDebuggerModel, reloadedScript, reloadedUiSourceCode, unboundLocation, resumeSentPromise, reloadedBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        // Add script with source map.
                        scriptInfo = {
                            url: URL,
                            content: COMPILED_SCRIPT_SOURCES_CONTENT
                        };
                        sourceMapInfo = {
                            url: SOURCE_MAP_URL,
                            content: sourceMapContent
                        };
                        return [
                            4,
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, script.isContentScript())
                        ];
                    case 2:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                0,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 3:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, 0)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: 0,
                                    columnNumber: 9
                                }
                            ]
                        });
                        return [
                            4,
                            breakpoint.refreshInDebugger()
                        ];
                    case 4:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            uiSourceCode
                        ]);
                        // Verify the restored position.
                        boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                        assert.strictEqual(1, boundLocations.length);
                        assert.strictEqual(0, boundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(9, boundLocations[0].uiLocation.columnNumber);
                        // Disconnect from the target. This will also unload the script.
                        breakpointManager.targetManager.removeTarget(target);
                        // Make sure the source code for the script was removed from the breakpoint.
                        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                        // Remove the breakpoint.
                        return [
                            4,
                            breakpoint.remove(true)
                        ];
                    case 5:
                        _state.sent();
                        // Create a new target.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(reloadedDebuggerModel);
                        return [
                            4,
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ];
                    case 6:
                        reloadedScript = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(reloadedDebuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, reloadedScript.isContentScript())
                        ];
                    case 7:
                        reloadedUiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        unboundLocation = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, unboundLocation.length);
                        assert.strictEqual(0, unboundLocation[0].uiLocation.lineNumber);
                        assert.strictEqual(0, unboundLocation[0].uiLocation.columnNumber);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, 0)({
                            breakpointId: 'RELOADED_BREAK_ID',
                            locations: [
                                {
                                    scriptId: reloadedScript.scriptId,
                                    lineNumber: 0,
                                    columnNumber: 9
                                }
                            ]
                        });
                        // Register our interest in an outgoing 'resume', which should be sent as soon as
                        // we have set up all breakpoints during the instrumentation pause.
                        resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                        // Inform the front-end about an instrumentation break.
                        backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                        // Wait for the breakpoints to be set, and the resume to be sent.
                        return [
                            4,
                            resumeSentPromise
                        ];
                    case 8:
                        _state.sent();
                        // Verify the restored position.
                        reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, reloadedBoundLocations.length);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(9, reloadedBoundLocations[0].uiLocation.columnNumber);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can restore breakpoints in scripts with language plugins', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, pluginManager, scriptInfo, script, Plugin, debuggerModel, sourceURL, sources, uiSourceCode, breakpoint, boundLocations, reloadedDebuggerModel, reloadedScript, reloadedUiSourceCode, resumeSentPromise, reloadedBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        pluginManager = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_12__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pluginManager;
                        scriptInfo = {
                            url: URL,
                            content: ''
                        };
                        return [
                            4,
                            backend.addScript(target, scriptInfo, null)
                        ];
                    case 1:
                        script = _state.sent();
                        Plugin = /*#__PURE__*/ function(TestPlugin) {
                            "use strict";
                            _inherits(Plugin, TestPlugin);
                            var _super = _create_super(Plugin);
                            function Plugin() {
                                _class_call_check(this, Plugin);
                                return _super.call(this, 'InstrumentationBreakpoints');
                            }
                            _create_class(Plugin, [
                                {
                                    key: "handleScript",
                                    value: function handleScript(_) {
                                        return true;
                                    }
                                },
                                {
                                    key: "sourceLocationToRawLocation",
                                    value: function sourceLocationToRawLocation(sourceLocation) {
                                        return _async_to_generator(function() {
                                            var rawModuleId, columnNumber, lineNumber, sourceFileURL;
                                            return _ts_generator(this, function(_state) {
                                                rawModuleId = sourceLocation.rawModuleId, columnNumber = sourceLocation.columnNumber, lineNumber = sourceLocation.lineNumber, sourceFileURL = sourceLocation.sourceFileURL;
                                                if (lineNumber === 0 && columnNumber === 0 && sourceFileURL === 'test.cc') {
                                                    return [
                                                        2,
                                                        [
                                                            {
                                                                rawModuleId: rawModuleId,
                                                                startOffset: 0,
                                                                endOffset: 0
                                                            }
                                                        ]
                                                    ];
                                                }
                                                return [
                                                    2,
                                                    []
                                                ];
                                            });
                                        })();
                                    }
                                },
                                {
                                    key: "rawLocationToSourceLocation",
                                    value: function rawLocationToSourceLocation(rawLocation) {
                                        return _async_to_generator(function() {
                                            var sourceLocations;
                                            return _ts_generator(this, function(_state) {
                                                sourceLocations = [];
                                                if (rawLocation.codeOffset === 0) {
                                                    sourceLocations = [
                                                        {
                                                            rawModuleId: rawLocation.rawModuleId,
                                                            columnNumber: 0,
                                                            lineNumber: 0,
                                                            sourceFileURL: 'test.cc'
                                                        }
                                                    ];
                                                }
                                                return [
                                                    2,
                                                    sourceLocations
                                                ];
                                            });
                                        })();
                                    }
                                },
                                {
                                    key: "addRawModule",
                                    value: function addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
                                        return _async_to_generator(function() {
                                            return _ts_generator(this, function(_state) {
                                                return [
                                                    2,
                                                    [
                                                        'test.cc'
                                                    ]
                                                ]; // need to return something to get the script associated with the plugin.
                                            });
                                        })();
                                    }
                                }
                            ]);
                            return Plugin;
                        }(_testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_4__.TestPlugin);
                        // Create a plugin that is able to produce a mapping for our script.
                        pluginManager.addPlugin(new Plugin());
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(debuggerModel);
                        return [
                            4,
                            pluginManager.getSourcesForScript(script)
                        ];
                    case 2:
                        sources = _state.sent();
                        if (!Array.isArray(sources)) {
                            assert.fail('Sources is expected to be an array of sourceURLs');
                        } else {
                            assert.lengthOf(sources, 1);
                            sourceURL = sources[0];
                        }
                        assert.exists(sourceURL);
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForDebuggerLanguagePluginSourceURLPromise(debuggerModel, sourceURL)
                        ];
                    case 3:
                        uiSourceCode = _state.sent();
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                uiSourceCode,
                                0,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 4:
                        breakpoint = _state.sent();
                        assert.exists(breakpoint);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, 0)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: 0,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Await breakpoint updates.
                        return [
                            4,
                            breakpoint.refreshInDebugger()
                        ];
                    case 5:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            uiSourceCode
                        ]);
                        // Verify the bound position.
                        boundLocations = breakpointManager.breakpointLocationsForUISourceCode(uiSourceCode);
                        assert.strictEqual(1, boundLocations.length);
                        assert.strictEqual(0, boundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, boundLocations[0].uiLocation.columnNumber);
                        // Disconnect from the target. This will also unload the script.
                        breakpointManager.targetManager.removeTarget(target);
                        // Make sure the source code for the script was removed from the breakpoint.
                        assert.strictEqual(breakpoint.getUiSourceCodes().size, 0);
                        // Remove the breakpoint.
                        return [
                            4,
                            breakpoint.remove(true)
                        ];
                    case 6:
                        _state.sent();
                        // Create a new target.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
                        reloadedDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                        assert.exists(reloadedDebuggerModel);
                        return [
                            4,
                            backend.addScript(target, scriptInfo, null)
                        ];
                    case 7:
                        reloadedScript = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForDebuggerLanguagePluginSourceURLPromise(reloadedDebuggerModel, sourceURL)
                        ];
                    case 8:
                        reloadedUiSourceCode = _state.sent();
                        assert.exists(reloadedUiSourceCode);
                        // Set the breakpoint response for our upcoming request.
                        void backend.responderToBreakpointByUrlRequest(URL, 0)({
                            breakpointId: 'RELOADED_BREAK_ID',
                            locations: [
                                {
                                    scriptId: reloadedScript.scriptId,
                                    lineNumber: 0,
                                    columnNumber: 0
                                }
                            ]
                        });
                        // Register our interest in an outgoing 'resume', which should be sent as soon as
                        // we have set up all breakpoints during the instrumentation pause.
                        resumeSentPromise = (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.registerListenerOnOutgoingMessage)('Debugger.resume');
                        // Inform the front-end about an instrumentation break.
                        backend.dispatchDebuggerPause(reloadedScript, "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ );
                        // Wait for the breakpoints to be set, and the resume to be sent.
                        return [
                            4,
                            resumeSentPromise
                        ];
                    case 9:
                        _state.sent();
                        // Verify the restored position.
                        reloadedBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(reloadedUiSourceCode);
                        assert.strictEqual(1, reloadedBoundLocations.length);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.lineNumber);
                        assert.strictEqual(0, reloadedBoundLocations[0].uiLocation.columnNumber);
                        return [
                            2
                        ];
                }
            });
        }));
        it('can move breakpoints to network files that are set in matching file system files', /*#__PURE__*/ _async_to_generator(function() {
            var workspace, fileName, fileSystemPath, fileSystemFileUrl;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
                        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({
                            forceNew: true,
                            workspace: workspace,
                            breakpointManager: breakpointManager
                        });
                        fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
                        fileSystemPath = 'file://path/to/filesystem';
                        fileSystemFileUrl = fileSystemPath + '/' + fileName;
                        return [
                            4,
                            testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fileSystemFileUrl, scriptDescription.content)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('can move breakpoints to network files that are set in override files', /*#__PURE__*/ _async_to_generator(function() {
            var workspace, fileSystemPath, fielSystemFileUrl, type, content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance({
                            forceNew: true
                        });
                        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({
                            forceNew: true,
                            workspace: workspace,
                            breakpointManager: breakpointManager
                        });
                        _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
                            forceNew: true,
                            workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance()
                        });
                        fileSystemPath = 'file://path/to/overrides';
                        fielSystemFileUrl = fileSystemPath + '/site/script.js';
                        type = 'overrides';
                        content = '';
                        return [
                            4,
                            testBreakpointMovedOnInstrumentationBreak(fileSystemPath, fielSystemFileUrl, content, type)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('removes breakpoints that resolve to the same uiLocation as a previous breakpoint', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, _breakpointManager1, scriptInfo, script, debuggerModel, uiSourceCode, breakpoint, slidingBreakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scriptInfo = {
                        url: URL,
                        content: 'console.log(\'hello\');'
                    };
                    return [
                        4,
                        backend.addScript(target, scriptInfo, null)
                    ];
                case 1:
                    script = _state.sent();
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    // Set the breakpoint response for our upcoming requests. Both breakpoints should resolve
                    // to the same raw location in order to have a clash.
                    void backend.responderToBreakpointByUrlRequest(URL, 0)({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 0,
                                columnNumber: 0
                            }
                        ]
                    });
                    void backend.responderToBreakpointByUrlRequest(URL, 2)({
                        breakpointId: 'SLIDING_BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 0,
                                columnNumber: 0
                            }
                        ]
                    });
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            0,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    return [
                        4,
                        (_breakpointManager1 = breakpointManager).setBreakpoint.apply(_breakpointManager1, [
                            uiSourceCode,
                            2,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 4:
                    slidingBreakpoint = _state.sent();
                    assert.exists(slidingBreakpoint);
                    // Wait until both breakpoints have run their updates.
                    return [
                        4,
                        breakpoint.refreshInDebugger()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        slidingBreakpoint.refreshInDebugger()
                    ];
                case 6:
                    _state.sent();
                    // The first breakpoint is kept on a clash, the second one should be removed.
                    assert.isFalse(breakpoint.isRemoved);
                    assert.isTrue(slidingBreakpoint.isRemoved);
                    return [
                        2
                    ];
            }
        });
    }));
    it('Breakpoint does not keep file system source code alive after file system removal', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, breakpointLine, resolvedBreakpointLine, workspace, persistence, fileName, fileSystemPath, fileSystemFileUrl, _createFileSystemFileForPersistenceTests, fileSystemUiSourceCode, project, debuggerModel, bindingCreatedPromise, script, uiSourceCode, bindingRemovedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.enableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    breakpointLine = 0;
                    resolvedBreakpointLine = 1;
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
                    persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({
                        forceNew: true,
                        workspace: workspace,
                        breakpointManager: breakpointManager
                    });
                    _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
                        forceNew: true,
                        workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance()
                    });
                    // Create a file system project and source code.
                    fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
                    fileSystemPath = 'file://path/to/filesystem';
                    fileSystemFileUrl = fileSystemPath + '/' + fileName;
                    _createFileSystemFileForPersistenceTests = (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({
                        fileSystemFileUrl: fileSystemFileUrl,
                        fileSystemPath: fileSystemPath
                    }, scriptDescription.url, scriptDescription.content, target), fileSystemUiSourceCode = _createFileSystemFileForPersistenceTests.uiSourceCode, project = _createFileSystemFileForPersistenceTests.project;
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    // Add the same script via the debugger protocol.
                    bindingCreatedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingCreated);
                    return [
                        4,
                        backend.addScript(target, scriptDescription, null)
                    ];
                case 1:
                    script = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        bindingCreatedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.exists(uiSourceCode);
                    // Set the breakpoint on the (network) script.
                    void backend.responderToBreakpointByUrlRequest(URL, breakpointLine)({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: resolvedBreakpointLine,
                                columnNumber: 0
                            }
                        ]
                    });
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            breakpointLine,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 4:
                    _state.sent();
                    // Remove the file system project.
                    bindingRemovedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingRemoved);
                    project.dispose();
                    // Make sure the binding is removed.
                    return [
                        4,
                        bindingRemovedPromise
                    ];
                case 5:
                    _state.sent();
                    // After this, the breakpoint manager should not refer to the file system source code anymore, but
                    // the file system breakpoint location should be in the storage.
                    assert.isEmpty(breakpointManager.breakpointLocationsForUISourceCode(fileSystemUiSourceCode));
                    assert.strictEqual(breakpointManager.storage.breakpointItems(fileSystemUiSourceCode.url()).length, 1);
                    _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.disableForTest("instrumentation-breakpoints" /* Root.Runtime.ExperimentName.INSTRUMENTATION_BREAKPOINTS */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('Breakpoints are set only into network project', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, breakpointLine, workspace, persistence, fileName, fileSystemPath, fileSystemFileUrl, debuggerModel, bindingCreatedPromise, fileScriptDescription, script, uiSourceCode, addedBreakpoint, breakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    breakpointLine = 0;
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance();
                    persistence = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.PersistenceImpl.instance({
                        forceNew: true,
                        workspace: workspace,
                        breakpointManager: breakpointManager
                    });
                    _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.NetworkPersistenceManager.NetworkPersistenceManager.instance({
                        forceNew: true,
                        workspace: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_16__.Workspace.WorkspaceImpl.instance()
                    });
                    // Create a file system project and source code.
                    fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(scriptDescription.url);
                    fileSystemPath = 'file://path/to/filesystem';
                    fileSystemFileUrl = fileSystemPath + '/' + fileName;
                    (0,_testing_PersistenceHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createFileSystemFileForPersistenceTests)({
                        fileSystemFileUrl: fileSystemFileUrl,
                        fileSystemPath: fileSystemPath
                    }, scriptDescription.url, scriptDescription.content, target);
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    // Add the same script with the same URL via the debugger protocol.
                    bindingCreatedPromise = persistence.once(_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_14__.Persistence.Events.BindingCreated);
                    fileScriptDescription = _object_spread_props(_object_spread({}, scriptDescription), {
                        url: fileSystemFileUrl
                    });
                    return [
                        4,
                        backend.addScript(target, fileScriptDescription, null)
                    ];
                case 1:
                    script = _state.sent();
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    return [
                        4,
                        bindingCreatedPromise
                    ];
                case 3:
                    _state.sent();
                    assert.exists(uiSourceCode);
                    addedBreakpoint = null;
                    breakpointManager.addEventListener(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Events.BreakpointAdded, function(param) {
                        var breakpoint = param.data.breakpoint;
                        assert.isNull(addedBreakpoint, 'More than one breakpoint was added');
                        addedBreakpoint = breakpoint;
                    });
                    // Set the breakpoint on the (network) script.
                    void backend.responderToBreakpointByUrlRequest(fileSystemFileUrl, breakpointLine)({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 3,
                                columnNumber: 3
                            }
                        ]
                    });
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            breakpointLine,
                            undefined
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 4:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Expect that the breakpoint is only added to the network UI source code.
                    assert.strictEqual(breakpoint, addedBreakpoint);
                    assert.deepStrictEqual(Array.from(breakpoint.getUiSourceCodes()), [
                        uiSourceCode
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates a breakpoint after live editing the underlying script', /*#__PURE__*/ _async_to_generator(function() {
        var _breakpointManager, scriptInfo, script, debuggerModel, uiSourceCode, breakpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    scriptInfo = {
                        url: URL,
                        content: 'console.log(\'hello\');'
                    };
                    return [
                        4,
                        backend.addScript(target, scriptInfo, null)
                    ];
                case 1:
                    script = _state.sent();
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    void backend.responderToBreakpointByUrlRequest(URL, 0)({
                        breakpointId: 'BREAK_ID',
                        locations: [
                            {
                                scriptId: script.scriptId,
                                lineNumber: 0,
                                columnNumber: 0
                            }
                        ]
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.setScriptSource', function() {
                        return {
                            status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ 
                        };
                    });
                    return [
                        4,
                        uiSourceCodeFromScript(debuggerModel, script)
                    ];
                case 2:
                    uiSourceCode = _state.sent();
                    assert.exists(uiSourceCode);
                    return [
                        4,
                        (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                            uiSourceCode,
                            0,
                            0
                        ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                    ];
                case 3:
                    breakpoint = _state.sent();
                    assert.exists(breakpoint);
                    // Wait for the breakpoint to be set in the backend.
                    return [
                        4,
                        breakpoint.refreshInDebugger()
                    ];
                case 4:
                    _state.sent();
                    // Simulate live editing. We do this from the UISourceCode instead of the `Script`
                    // so the `ResourceScriptFile` updates the LiveLocation of the `ModelBreakpoint`
                    // (which in turn updates the UILocation on the breakpoint).
                    uiSourceCode.setWorkingCopy('\n\nconsole.log(\'hello\');');
                    uiSourceCode.commitWorkingCopy();
                    // Note that `UISourceCode` does not actually track how a breakpoint moves. This
                    // is normally done by CodeMirror + DebuggerPlugin. This means even though the
                    // console.log moves two lines down, we still try to reset the breakpoint on line 0.
                    return [
                        4,
                        backend.responderToBreakpointByUrlRequest(URL, 0)({
                            breakpointId: 'BREAK_ID',
                            locations: [
                                {
                                    scriptId: script.scriptId,
                                    lineNumber: 0,
                                    columnNumber: 0
                                }
                            ]
                        })
                    ];
                case 5:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('can correctly set breakpoints for all pre-registered targets', function() {
        var waitForBreakpointLocationsAdded = function waitForBreakpointLocationsAdded() {
            var twoBreakpointLocationsCallback;
            var twoBreakpointLocationsAddedPromise = new Promise(function(resolve) {
                twoBreakpointLocationsCallback = resolve;
            });
            breakpointManager.addEventListener(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Events.BreakpointAdded, function() {
                if (breakpointManager.allBreakpointLocations().length === 2) {
                    twoBreakpointLocationsCallback();
                }
            });
            return twoBreakpointLocationsAddedPromise;
        };
        var mainUiSourceCode;
        var workerUiSourceCode;
        var workerScript;
        var mainScript;
        var breakpoint;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, workerTarget, scriptInfo, sourceMapInfo, modelAddedStub, bp;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_SourceMapHelpers_js__WEBPACK_IMPORTED_MODULE_10__.setupPageResourceLoaderForSourceMap)(sourceMapContent);
                        // Create a worker target.
                        workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
                            name: 'worker',
                            parentTarget: target
                        });
                        // Add script with source map.
                        scriptInfo = {
                            url: URL,
                            content: COMPILED_SCRIPT_SOURCES_CONTENT
                        };
                        sourceMapInfo = {
                            url: SOURCE_MAP_URL,
                            content: sourceMapContent
                        };
                        return [
                            4,
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ];
                    case 1:
                        mainScript = _state.sent();
                        return [
                            4,
                            backend.addScript(workerTarget, scriptInfo, sourceMapInfo)
                        ];
                    case 2:
                        workerScript = _state.sent();
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(mainScript.debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, mainScript.isContentScript())
                        ];
                    case 3:
                        // Get the uiSourceCode for the original source in the main target.
                        mainUiSourceCode = _state.sent();
                        assert.exists(mainUiSourceCode);
                        return [
                            4,
                            debuggerWorkspaceBinding.uiSourceCodeForSourceMapSourceURLPromise(workerScript.debuggerModel, ORIGINAL_SCRIPT_SOURCE_URL, workerScript.isContentScript())
                        ];
                    case 4:
                        // Get the uiSourceCode for the original source in the worker target.
                        workerUiSourceCode = _state.sent();
                        assert.exists(mainUiSourceCode);
                        // Stub the 'modelAdded' function that is called in the Breakpoint prototype.
                        // The 'modelAdded' will kick off updating the debugger of each target
                        // as soon as a new breakpoint was created.
                        // By stubbing it and ignoring what should be done,
                        // we can manually call 'modelAdded' in the order that we want,
                        // and thus control which target is taken care of first.
                        modelAddedStub = sinon.stub(_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_13__.BreakpointManager.Breakpoint.prototype, 'modelAdded').callsFake(function() {});
                        return [
                            4,
                            (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                mainUiSourceCode,
                                0,
                                0
                            ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                        ];
                    case 5:
                        bp = _state.sent();
                        assert.exists(bp);
                        breakpoint = bp;
                        // Now restore the actual behavior of 'modelAdded'.
                        modelAddedStub.restore();
                        return [
                            2
                        ];
                }
            });
        }));
        it('if the target whose uiSourceCode was used for breakpoint setting is handled last', /*#__PURE__*/ _async_to_generator(function() {
            var mainBoundLocations, workerBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Handle setting breakpoint on the worker first.
                        breakpoint.modelAdded(workerScript.debuggerModel);
                        return [
                            4,
                            backend.responderToBreakpointByUrlRequest(URL, 0)({
                                breakpointId: 'WORKER_ID',
                                locations: [
                                    {
                                        scriptId: workerScript.scriptId,
                                        lineNumber: 0,
                                        columnNumber: 0
                                    }
                                ]
                            })
                        ];
                    case 1:
                        _state.sent();
                        // Handle setting breakpoint on the main target next.
                        breakpoint.modelAdded(mainScript.debuggerModel);
                        return [
                            4,
                            backend.responderToBreakpointByUrlRequest(URL, 0)({
                                breakpointId: 'MAIN_BREAK_ID',
                                locations: [
                                    {
                                        scriptId: mainScript.scriptId,
                                        lineNumber: 0,
                                        columnNumber: 0
                                    }
                                ]
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForBreakpointLocationsAdded()
                        ];
                    case 3:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            mainUiSourceCode,
                            workerUiSourceCode
                        ]);
                        mainBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(mainUiSourceCode);
                        assert.strictEqual(1, mainBoundLocations.length);
                        workerBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(workerUiSourceCode);
                        assert.strictEqual(1, workerBoundLocations.length);
                        return [
                            2
                        ];
                }
            });
        }));
        it('if the target whose uiSourceCode was used for breakpoint setting is handled first', /*#__PURE__*/ _async_to_generator(function() {
            var mainBoundLocations, workerBoundLocations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Handle setting breakpoint on the main target first.
                        breakpoint.modelAdded(mainScript.debuggerModel);
                        return [
                            4,
                            backend.responderToBreakpointByUrlRequest(URL, 0)({
                                breakpointId: 'MAIN_BREAK_ID',
                                locations: [
                                    {
                                        scriptId: mainScript.scriptId,
                                        lineNumber: 0,
                                        columnNumber: 0
                                    }
                                ]
                            })
                        ];
                    case 1:
                        _state.sent();
                        // Handle setting breakpoint on the worker next.
                        breakpoint.modelAdded(workerScript.debuggerModel);
                        return [
                            4,
                            backend.responderToBreakpointByUrlRequest(URL, 0)({
                                breakpointId: 'WORKER_ID',
                                locations: [
                                    {
                                        scriptId: workerScript.scriptId,
                                        lineNumber: 0,
                                        columnNumber: 0
                                    }
                                ]
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForBreakpointLocationsAdded()
                        ];
                    case 3:
                        _state.sent();
                        assert.deepEqual(Array.from(breakpoint.getUiSourceCodes()), [
                            mainUiSourceCode,
                            workerUiSourceCode
                        ]);
                        mainBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(mainUiSourceCode);
                        assert.strictEqual(1, mainBoundLocations.length);
                        workerBoundLocations = breakpointManager.breakpointLocationsForUISourceCode(workerUiSourceCode);
                        assert.strictEqual(1, workerBoundLocations.length);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('supports modern Web development workflows', function() {
        it('supports webpack code splitting', /*#__PURE__*/ _async_to_generator(function() {
            var _breakpointManager, sourceRoot, route1ScriptInfo, route1SourceMapInfo, _ref, firstSharedUISourceCode, route1Script, route2ScriptInfo, route2SourceMapInfo, route1SetBreakpointByUrlRequest, route2SetBreakpointByUrlRequest, _ref1, route2Script;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // This is basically the "Shared code with webpack entry point code-splitting" scenario
                        // outlined in http://go/devtools-source-identities, where two routes (`route1.ts` and
                        // `route2.ts`) share some common code (`shared.ts`), and webpack is configured to spit
                        // out a dedicated bundle for each route (`route1.js` and `route2.js`). The demo can be
                        // found at https://devtools-source-identities.glitch.me/webpack-code-split/ for further
                        // reference.
                        sourceRoot = 'webpack:///src';
                        // Load the script and source map for the first route.
                        route1ScriptInfo = {
                            url: 'http://example.com/route1.js',
                            content: 'function f(x){}\nf(1)'
                        };
                        route1SourceMapInfo = {
                            url: "".concat(route1ScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__.encodeSourceMap)([
                                '0:0 => shared.ts:0:0',
                                '1:0 => route1.ts:0:0'
                            ], sourceRoot)
                        };
                        return [
                            4,
                            Promise.all([
                                debuggerWorkspaceBinding.waitForUISourceCodeAdded("".concat(sourceRoot, "/shared.ts"), target),
                                backend.addScript(target, route1ScriptInfo, route1SourceMapInfo)
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2
                        ]), firstSharedUISourceCode = _ref[0], route1Script = _ref[1];
                        // Set a breakpoint in `shared.ts`.
                        return [
                            4,
                            Promise.all([
                                backend.responderToBreakpointByUrlRequest(route1ScriptInfo.url, 0)({
                                    breakpointId: 'ROUTE1_JS_BREAK_INITIAL_ID',
                                    locations: [
                                        {
                                            scriptId: route1Script.scriptId,
                                            lineNumber: 0,
                                            columnNumber: 0
                                        }
                                    ]
                                }),
                                (_breakpointManager = breakpointManager).setBreakpoint.apply(_breakpointManager, [
                                    firstSharedUISourceCode,
                                    0,
                                    0
                                ].concat(_to_consumable_array(DEFAULT_BREAKPOINT)))
                            ])
                        ];
                    case 2:
                        _state.sent();
                        // Now inject a second route that also references `shared.ts`, which should trigger
                        // removal of the original breakpoint in `route1.js`.
                        route2ScriptInfo = {
                            url: 'http://example.com/route2.js',
                            content: 'function f(x){}\nf(2)'
                        };
                        route2SourceMapInfo = {
                            url: "".concat(route2ScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_9__.encodeSourceMap)([
                                '0:0 => shared.ts:0:0',
                                '1:0 => route2.ts:0:0'
                            ], sourceRoot)
                        };
                        route1SetBreakpointByUrlRequest = backend.responderToBreakpointByUrlRequest(route1ScriptInfo.url, 0);
                        route2SetBreakpointByUrlRequest = backend.responderToBreakpointByUrlRequest(route2ScriptInfo.url, 0);
                        return [
                            4,
                            Promise.all([
                                backend.breakpointRemovedPromise('ROUTE1_JS_BREAK_INITIAL_ID'),
                                backend.addScript(target, route2ScriptInfo, route2SourceMapInfo)
                            ])
                        ];
                    case 3:
                        _ref1 = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2
                        ]), route2Script = _ref1[1];
                        // Now the BreakpointManager should migrate the breakpoints from the
                        // first `shared.ts` to the second `shared.ts`.
                        return [
                            4,
                            Promise.all([
                                route1SetBreakpointByUrlRequest({
                                    breakpointId: 'ROUTE1_JS_BREAK_ID',
                                    locations: [
                                        {
                                            scriptId: route1Script.scriptId,
                                            lineNumber: 0,
                                            columnNumber: 0
                                        }
                                    ]
                                }),
                                route2SetBreakpointByUrlRequest({
                                    breakpointId: 'ROUTE2_JS_BREAK_ID',
                                    locations: [
                                        {
                                            scriptId: route2Script.scriptId,
                                            lineNumber: 0,
                                            columnNumber: 0
                                        }
                                    ]
                                })
                            ])
                        ];
                    case 4:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=BreakpointManager.test.js.map


}),
"./testing/PersistenceHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFileSystemFileForPersistenceTests: function() { return createFileSystemFileForPersistenceTests; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// This helper sets up a file system and a file system uiSourceCode that can be used for
// Persistence testing. As soon as a script is added that has the given `networkScriptUrl` and the `content`,
// PersistenceImpl will try to bind the network uiSourceCode with this file system uiSourceCode.
function createFileSystemFileForPersistenceTests(fileSystemScript, networkScriptUrl, content, target) {
    // First, set up a network resource that is described by the networkScriptUrl. This resource
    // file is required for a binding to be created.
    var origin = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(networkScriptUrl);
    dispatchDocumentOpened(target, origin);
    var mimeType = 'text/javascript';
    var resource = (0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), networkScriptUrl, mimeType, content);
    // Now create the file system uiSourceCode to match the same meta data and content as the
    // created network's resource file.
    var metadata = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.UISourceCode.UISourceCodeMetadata(resource.lastModified(), resource.contentSize());
    return (0,_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createFileSystemUISourceCode)({
        url: fileSystemScript.fileSystemFileUrl,
        content: content,
        fileSystemPath: fileSystemScript.fileSystemPath,
        mimeType: mimeType,
        metadata: metadata,
        autoMapping: true,
        type: fileSystemScript.type
    });
}
function dispatchDocumentOpened(target, origin) {
    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Page.documentOpened', {
        frame: {
            id: 'main',
            loaderId: 'foo',
            url: "".concat(origin, "/index.html"),
            domainAndRegistry: 'site',
            securityOrigin: origin,
            mimeType: 'text/html',
            secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
            crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
            gatedAPIFeatures: []
        }
    });
} //# sourceMappingURL=PersistenceHelpers.js.map


}),

}]);