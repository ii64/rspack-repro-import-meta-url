"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_CompilerScriptMapping_test_js"], {
"./models/bindings/CompilerScriptMapping.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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








(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CompilerScriptMapping', function() {
    var backend;
    var debuggerWorkspaceBinding;
    var workspace;
    beforeEach(function() {
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
        var resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_7__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_7__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        _bindings_js__WEBPACK_IMPORTED_MODULE_7__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
    });
    var waitForUISourceCodeAdded = function(url, target) {
        return debuggerWorkspaceBinding.waitForUISourceCodeAdded(url, target);
    };
    var waitForUISourceCodeRemoved = function(uiSourceCode) {
        return new Promise(function(resolve) {
            var _workspace_addEventListener = workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeRemoved, function(event) {
                if (event.data === uiSourceCode) {
                    workspace.removeEventListener(eventType, listener);
                    resolve();
                }
            }), eventType = _workspace_addEventListener.eventType, listener = _workspace_addEventListener.listener;
        });
    };
    it('creates UISourceCodes with the correct content type', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, sources, scriptInfo, sourceMapInfo;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    sources = [
                        'foo.js',
                        'bar.ts',
                        'baz.jsx'
                    ];
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/bundle.js"),
                        content: '1;\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: {
                            version: 3,
                            mappings: '',
                            sourceRoot: sourceRoot,
                            sources: sources
                        }
                    };
                    return [
                        4,
                        Promise.all(_to_consumable_array(sources.map(function(name) {
                            return waitForUISourceCodeAdded("".concat(sourceRoot, "/").concat(name), target).then(function(uiSourceCode) {
                                assert.isTrue(uiSourceCode.contentType().isFromSourceMap());
                                assert.isTrue(uiSourceCode.contentType().isScript());
                            });
                        })).concat([
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ]))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes webpack hashes from display names', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, sources, scriptInfo, sourceMapInfo, namesPromise, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    sources = [
                        'foo.js?a1b2',
                        'two%20words.ts?c3d4',
                        '?e5f6'
                    ];
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/bundle.js"),
                        content: '1;\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: {
                            version: 3,
                            mappings: '',
                            sourceRoot: sourceRoot,
                            sources: sources
                        }
                    };
                    namesPromise = Promise.all(sources.map(function(name) {
                        return waitForUISourceCodeAdded("".concat(sourceRoot, "/").concat(name), target).then(function(uiSourceCode) {
                            return uiSourceCode.name();
                        });
                    }));
                    return [
                        4,
                        backend.addScript(target, scriptInfo, sourceMapInfo)
                    ];
                case 1:
                    _state.sent();
                    _ = assert.deepEqual;
                    return [
                        4,
                        namesPromise
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        [
                            'foo.js',
                            'two words.ts',
                            '?e5f6'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates UISourceCodes with the correct media type', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo, _ref, fooUISourceCode, barUISourceCode, bazUISourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/bundle.js"),
                        content: 'foo();\nbar();\nbaz();\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:0 => foo.js:0:0',
                            '1:0 => bar.ts:0:0',
                            '2:0 => baz.jsx:0:0'
                        ], sourceRoot)
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/foo.js"), target),
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/bar.ts"), target),
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/baz.jsx"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        3
                    ]), fooUISourceCode = _ref[0], barUISourceCode = _ref[1], bazUISourceCode = _ref[2];
                    assert.strictEqual(fooUISourceCode.mimeType(), 'text/javascript');
                    assert.strictEqual(barUISourceCode.mimeType(), 'text/typescript');
                    assert.strictEqual(bazUISourceCode.mimeType(), 'text/jsx');
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates UISourceCodes with the correct content and metadata', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, sourceContent, scriptInfo, sourceMapInfo, _ref, uiSourceCode, metadata, content;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    sourceContent = 'const x = 1; console.log(x)';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/script.min.js"),
                        content: 'console.log(1);'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: {
                            version: 1,
                            mappings: '',
                            sources: [
                                'script.js'
                            ],
                            sourcesContent: [
                                sourceContent
                            ],
                            sourceRoot: sourceRoot
                        }
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), uiSourceCode = _ref[0];
                    return [
                        4,
                        uiSourceCode.requestMetadata()
                    ];
                case 2:
                    metadata = _state.sent();
                    assert.strictEqual(metadata === null || metadata === void 0 ? void 0 : metadata.contentSize, sourceContent.length);
                    return [
                        4,
                        uiSourceCode.requestContentData()
                    ];
                case 3:
                    content = _state.sent();
                    assert.instanceOf(content, _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.ContentData.ContentData);
                    assert.strictEqual(content.text, sourceContent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates separate UISourceCodes for separate targets', /*#__PURE__*/ _async_to_generator(function() {
        var mainTarget, workerTarget, sourceRoot, scriptInfo, sourceMapInfo, _ref, mainUISourceCode, mainScript, workerUISourceCode, workerScript, _i, _iter, _iter__i, script, uiSourceCode, rawLocations, _rawLocations, rawLocation, uiLocation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Create a main target and a worker child target.
                    mainTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        id: 'main',
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Frame
                    });
                    workerTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                        id: 'worker',
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker,
                        parentTarget: mainTarget
                    });
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/script.min.js"),
                        content: 'console.log(1);'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:0 => script.js:0:0'
                        ], sourceRoot)
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), mainTarget),
                            backend.addScript(mainTarget, scriptInfo, sourceMapInfo),
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), workerTarget),
                            backend.addScript(workerTarget, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        4
                    ]), mainUISourceCode = _ref[0], mainScript = _ref[1], workerUISourceCode = _ref[2], workerScript = _ref[3];
                    assert.notStrictEqual(mainUISourceCode, workerUISourceCode);
                    _i = 0, _iter = [
                        {
                            script: mainScript,
                            uiSourceCode: mainUISourceCode
                        },
                        {
                            script: workerScript,
                            uiSourceCode: workerUISourceCode
                        }
                    ];
                    _state.label = 2;
                case 2:
                    if (!(_i < _iter.length)) return [
                        3,
                        6
                    ];
                    _iter__i = _iter[_i], script = _iter__i.script, uiSourceCode = _iter__i.uiSourceCode;
                    return [
                        4,
                        debuggerWorkspaceBinding.uiLocationToRawLocations(uiSourceCode, 0, 0)
                    ];
                case 3:
                    rawLocations = _state.sent();
                    assert.lengthOf(rawLocations, 1);
                    _rawLocations = _sliced_to_array(rawLocations, 1), rawLocation = _rawLocations[0];
                    assert.strictEqual(rawLocation.script(), script);
                    return [
                        4,
                        debuggerWorkspaceBinding.rawLocationToUILocation(rawLocation)
                    ];
                case 4:
                    uiLocation = _state.sent();
                    assert.strictEqual(uiLocation.uiSourceCode, uiSourceCode);
                    _state.label = 5;
                case 5:
                    _i++;
                    return [
                        3,
                        2
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates separate UISourceCodes for content scripts', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo, regularScriptInfo, _ref, regularUISourceCode, regularScript, contentScriptInfo, _ref1, contentUISourceCode, contentScript, _i, _iter, _iter__i, script, uiSourceCode, rawLocations, _rawLocations, rawLocation, uiLocation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // By default content scripts are ignore listed, which will prevent processing the
                    // source map. We need to disable that option.
                    _bindings_js__WEBPACK_IMPORTED_MODULE_7__.IgnoreListManager.IgnoreListManager.instance().unIgnoreListContentScripts();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/script.min.js"),
                        content: 'console.log(1);'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:0 => script.js:0:0'
                        ], sourceRoot)
                    };
                    // Register `script.min.js` as regular script first.
                    regularScriptInfo = _object_spread_props(_object_spread({}, scriptInfo), {
                        isContentScript: false
                    });
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), target),
                            backend.addScript(target, regularScriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), regularUISourceCode = _ref[0], regularScript = _ref[1];
                    // Now register the same `script.min.js` as content script.
                    contentScriptInfo = _object_spread_props(_object_spread({}, scriptInfo), {
                        isContentScript: true
                    });
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), target),
                            backend.addScript(target, contentScriptInfo, sourceMapInfo)
                        ])
                    ];
                case 2:
                    _ref1 = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), contentUISourceCode = _ref1[0], contentScript = _ref1[1];
                    assert.notStrictEqual(regularUISourceCode, contentUISourceCode);
                    _i = 0, _iter = [
                        {
                            script: regularScript,
                            uiSourceCode: regularUISourceCode
                        },
                        {
                            script: contentScript,
                            uiSourceCode: contentUISourceCode
                        }
                    ];
                    _state.label = 3;
                case 3:
                    if (!(_i < _iter.length)) return [
                        3,
                        7
                    ];
                    _iter__i = _iter[_i], script = _iter__i.script, uiSourceCode = _iter__i.uiSourceCode;
                    return [
                        4,
                        debuggerWorkspaceBinding.uiLocationToRawLocations(uiSourceCode, 0, 0)
                    ];
                case 4:
                    rawLocations = _state.sent();
                    assert.lengthOf(rawLocations, 1);
                    _rawLocations = _sliced_to_array(rawLocations, 1), rawLocation = _rawLocations[0];
                    assert.strictEqual(rawLocation.script(), script);
                    return [
                        4,
                        debuggerWorkspaceBinding.rawLocationToUILocation(rawLocation)
                    ];
                case 5:
                    uiLocation = _state.sent();
                    assert.strictEqual(uiLocation.uiSourceCode, uiSourceCode);
                    _state.label = 6;
                case 6:
                    _i++;
                    return [
                        3,
                        3
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly marks known 3rdparty UISourceCodes', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/bundle.js"),
                        content: '1;\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: {
                            version: 3,
                            mappings: '',
                            sourceRoot: sourceRoot,
                            sources: [
                                'app.ts',
                                'lib.ts'
                            ],
                            ignoreList: [
                                1
                            ]
                        }
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/app.ts"), target).then(function(uiSourceCode) {
                                assert.isFalse(uiSourceCode.isKnownThirdParty(), '`app.ts` is not a known 3rdparty script');
                            }),
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/lib.ts"), target).then(function(uiSourceCode) {
                                assert.isTrue(uiSourceCode.isKnownThirdParty(), '`lib.ts` is a known 3rdparty script');
                            }),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly maps to inline <script>s with `//# sourceURL` annotations', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo, _ref, uiSourceCode, script, rawLocations, _rawLocations, rawLocation, uiLocation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/test.out.js"),
                        content: 'function f(x) {\n  console.log(x);\n}\n',
                        startLine: 4,
                        startOffset: 12,
                        hasSourceURL: true
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:0 => test.ts:0:0',
                            '1:0 => test.ts:1:0',
                            '1:2 => test.ts:1:2',
                            '2:0 => test.ts:2:0'
                        ], sourceRoot)
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/test.ts"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), uiSourceCode = _ref[0], script = _ref[1];
                    return [
                        4,
                        debuggerWorkspaceBinding.uiLocationToRawLocations(uiSourceCode, 1, 2)
                    ];
                case 2:
                    rawLocations = _state.sent();
                    assert.lengthOf(rawLocations, 1);
                    _rawLocations = _sliced_to_array(rawLocations, 1), rawLocation = _rawLocations[0];
                    assert.strictEqual(rawLocation.script(), script);
                    assert.strictEqual(rawLocation.lineNumber, 1);
                    assert.strictEqual(rawLocation.columnNumber, 2);
                    return [
                        4,
                        debuggerWorkspaceBinding.rawLocationToUILocation(rawLocation)
                    ];
                case 3:
                    uiLocation = _state.sent();
                    assert.strictEqual(uiLocation.uiSourceCode, uiSourceCode);
                    assert.strictEqual(uiLocation.lineNumber, 1);
                    assert.strictEqual(uiLocation.columnNumber, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly removes UISourceCodes when detaching a sourcemap', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo, _ref, script;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/test.out.js"),
                        content: '1\n2\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:0 => a.ts:0:0',
                            '1:0 => b.ts:1:0'
                        ], sourceRoot)
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/a.ts"), target),
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/b.ts"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        3
                    ]), script = _ref[2];
                    script.debuggerModel.sourceMapManager().detachSourceMap(script);
                    assert.isNull(workspace.uiSourceCodeForURL("".concat(sourceRoot, "/a.ts")), '`a.ts` should not be around anymore');
                    assert.isNull(workspace.uiSourceCodeForURL("".concat(sourceRoot, "/b.ts")), '`b.ts` should not be around anymore');
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly reports source-mapped lines', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, scriptInfo, sourceMapInfo, _ref, uiSourceCode, mappedLines;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/test.out.js"),
                        content: 'function f(x) {\n  console.log(x);\n}\n'
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                            '0:9 => test.ts:0:1',
                            '1:0 => test.ts:4:0',
                            '1:2 => test.ts:4:2',
                            '2:0 => test.ts:2:0'
                        ], sourceRoot)
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/test.ts"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), uiSourceCode = _ref[0];
                    return [
                        4,
                        debuggerWorkspaceBinding.getMappedLines(uiSourceCode)
                    ];
                case 2:
                    mappedLines = _state.sent();
                    assert.deepEqual(mappedLines, new Set([
                        0,
                        2,
                        4
                    ]));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('supports modern Web development workflows', function() {
        it('supports webpack code splitting', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceRoot, route1ScriptInfo, route1SourceMapInfo, _ref, route1UISourceCode, firstSharedUISourceCode, route1Script, _, _1, route2ScriptInfo, route2SourceMapInfo, _ref1, route2UISourceCode, secondSharedUISourceCode, route2Script, route1UILocation, route1Locations, _route1Locations, route1Location, _2, route2UILocation, route2Locations, _route2Locations, route2Location, _3, sharedUILocation, sharedLocations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, location, _4, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // This is basically the "Shared code with webpack entry point code-splitting" scenario
                        // outlined in http://go/devtools-source-identities, where two routes (`route1.ts` and
                        // `route2.ts`) share some common code (`shared.ts`), and webpack is configured to spit
                        // out a dedicated bundle for each route (`route1.js` and `route2.js`). The demo can be
                        // found at https://devtools-source-identities.glitch.me/webpack-code-split/ for further
                        // reference.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        sourceRoot = 'webpack:///src';
                        // Load the script and source map for the first route.
                        route1ScriptInfo = {
                            url: 'http://example.com/route1.js',
                            content: 'function f(x){}\nf(1)'
                        };
                        route1SourceMapInfo = {
                            url: "".concat(route1ScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                                '0:0 => shared.ts:0:0',
                                '1:0 => route1.ts:0:0'
                            ], sourceRoot)
                        };
                        return [
                            4,
                            Promise.all([
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/route1.ts"), target),
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/shared.ts"), target),
                                backend.addScript(target, route1ScriptInfo, route1SourceMapInfo)
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            3
                        ]), route1UISourceCode = _ref[0], firstSharedUISourceCode = _ref[1], route1Script = _ref[2];
                        // Both `route1.ts` and `shared.ts` are referred to only by `route1.js` at this point.
                        _ = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(route1UISourceCode, 0)
                        ];
                    case 2:
                        _.apply(assert, [
                            _state.sent(),
                            [
                                route1Script.debuggerModel.createRawLocation(route1Script, 1, 0)
                            ]
                        ]);
                        _1 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(firstSharedUISourceCode, 0)
                        ];
                    case 3:
                        _1.apply(assert, [
                            _state.sent(),
                            [
                                route1Script.debuggerModel.createRawLocation(route1Script, 0, 0)
                            ]
                        ]);
                        // Load the script and source map for the second route. At this point a new `shared.ts` should
                        // appear, replacing the original `shared.ts` UISourceCode.
                        route2ScriptInfo = {
                            url: 'http://example.com/route2.js',
                            content: 'function f(x){}\nf(2)'
                        };
                        route2SourceMapInfo = {
                            url: "".concat(route2ScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                                '0:0 => shared.ts:0:0',
                                '1:0 => route2.ts:0:0'
                            ], sourceRoot)
                        };
                        return [
                            4,
                            Promise.all([
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/route2.ts"), target),
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/shared.ts"), target),
                                backend.addScript(target, route2ScriptInfo, route2SourceMapInfo),
                                waitForUISourceCodeRemoved(firstSharedUISourceCode)
                            ])
                        ];
                    case 4:
                        _ref1 = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            3
                        ]), route2UISourceCode = _ref1[0], secondSharedUISourceCode = _ref1[1], route2Script = _ref1[2];
                        // Now `route1.ts` is provided exclusively by `route1.js`...
                        route1UILocation = route1UISourceCode.uiLocation(0, 0);
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(route1UILocation.uiSourceCode, route1UILocation.lineNumber, route1UILocation.columnNumber)
                        ];
                    case 5:
                        route1Locations = _state.sent();
                        assert.lengthOf(route1Locations, 1);
                        _route1Locations = _sliced_to_array(route1Locations, 1), route1Location = _route1Locations[0];
                        assert.strictEqual(route1Location.script(), route1Script);
                        _2 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(route1Location)
                        ];
                    case 6:
                        _2.apply(assert, [
                            _state.sent(),
                            route1UILocation
                        ]);
                        // ...and `route2.ts` is provided exclusively by `route2.js`...
                        route2UILocation = route2UISourceCode.uiLocation(0, 0);
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(route2UILocation.uiSourceCode, route2UILocation.lineNumber, route2UILocation.columnNumber)
                        ];
                    case 7:
                        route2Locations = _state.sent();
                        assert.lengthOf(route2Locations, 1);
                        _route2Locations = _sliced_to_array(route2Locations, 1), route2Location = _route2Locations[0];
                        assert.strictEqual(route2Location.script(), route2Script);
                        _3 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(route2Location)
                        ];
                    case 8:
                        _3.apply(assert, [
                            _state.sent(),
                            route2UILocation
                        ]);
                        // ...but `shared.ts` is provided by both `route1.js` and `route2.js`.
                        sharedUILocation = secondSharedUISourceCode.uiLocation(0, 0);
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(sharedUILocation.uiSourceCode, sharedUILocation.lineNumber, sharedUILocation.columnNumber)
                        ];
                    case 9:
                        sharedLocations = _state.sent();
                        assert.sameMembers(sharedLocations.map(function(location) {
                            return location.script();
                        }), [
                            route1Script,
                            route2Script
                        ]);
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _state.label = 10;
                    case 10:
                        _state.trys.push([
                            10,
                            15,
                            16,
                            17
                        ]);
                        _iterator = sharedLocations[Symbol.iterator]();
                        _state.label = 11;
                    case 11:
                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                            3,
                            14
                        ];
                        location = _step.value;
                        _4 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(location)
                        ];
                    case 12:
                        _4.apply(assert, [
                            _state.sent(),
                            sharedUILocation
                        ]);
                        _state.label = 13;
                    case 13:
                        _iteratorNormalCompletion = true;
                        return [
                            3,
                            11
                        ];
                    case 14:
                        return [
                            3,
                            17
                        ];
                    case 15:
                        err = _state.sent();
                        _didIteratorError = true;
                        _iteratorError = err;
                        return [
                            3,
                            17
                        ];
                    case 16:
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
                    case 17:
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports webpack hot module replacement', /*#__PURE__*/ _async_to_generator(function() {
            var target, sourceRoot, originalScriptInfo, originalSourceMapInfo, _ref, originalLibUISourceCode, originalAppUISourceCode, originalScript, _, _1, updateScriptInfo, updateSourceMapInfo, _ref1, updateAppUISourceCode, updateScript, _2, _3, uiSourceCode, _4;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // This simulates the webpack HMR machinery, where originally a `bundle.js` is served,
                        // which includes embedded authored code for `lib.js` and `app.js`, both of which map
                        // to `bundle.js`. Later an update script is sent that replaces `app.js` with a newer
                        // version, while sending the same authored code for `lib.js` (presumably because the
                        // devserver figured the file might have changed). Now the initial `app.js` should be
                        // removed and `bundle.js` will have un-mapped locations for the `app.js` part. The
                        // new `app.js` will point to the update script. `lib.js` remains unchanged.
                        //
                        // This is a generalization of https://crbug.com/1403362 and http://crbug.com/1403432,
                        // which both present special cases of the general stale mapping problem.
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        sourceRoot = 'webpack:///src';
                        // Load the original bundle.
                        originalScriptInfo = {
                            url: 'http://example.com/bundle.js',
                            content: 'const f = console.log;\nf("Hello from the original bundle");'
                        };
                        originalSourceMapInfo = {
                            url: "".concat(originalScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                                '0:0 => lib.js:0:0',
                                'lib.js: const f = console.log;',
                                '1:0 => app.js:0:0',
                                'app.js: f("Hello from the original bundle")'
                            ], sourceRoot)
                        };
                        return [
                            4,
                            Promise.all([
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/lib.js"), target),
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/app.js"), target),
                                backend.addScript(target, originalScriptInfo, originalSourceMapInfo)
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            3
                        ]), originalLibUISourceCode = _ref[0], originalAppUISourceCode = _ref[1], originalScript = _ref[2];
                        // Initially the original `bundle.js` maps to the original `app.js` and `lib.js`.
                        _ = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(originalScript.debuggerModel.createRawLocation(originalScript, 0, 0))
                        ];
                    case 2:
                        _.apply(assert, [
                            _state.sent(),
                            originalLibUISourceCode.uiLocation(0, 0)
                        ]);
                        _1 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(originalScript.debuggerModel.createRawLocation(originalScript, 1, 0))
                        ];
                    case 3:
                        _1.apply(assert, [
                            _state.sent(),
                            originalAppUISourceCode.uiLocation(0, 0)
                        ]);
                        // Inject the HMR update script.
                        updateScriptInfo = {
                            url: 'http://example.com/hot.update.1234.js',
                            content: 'f("Hello from the update");'
                        };
                        updateSourceMapInfo = {
                            url: "".concat(updateScriptInfo.url, ".map"),
                            content: (0,_testing_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_4__.encodeSourceMap)([
                                '0:0 => app.js:0:0',
                                'lib.js: const f = console.log;',
                                'app.js: f("Hello from the update")'
                            ], sourceRoot)
                        };
                        return [
                            4,
                            Promise.all([
                                waitForUISourceCodeAdded("".concat(sourceRoot, "/app.js"), target),
                                // The original `app.js` should disappear as part of the HMR update.
                                waitForUISourceCodeRemoved(originalAppUISourceCode),
                                backend.addScript(target, updateScriptInfo, updateSourceMapInfo)
                            ])
                        ];
                    case 4:
                        _ref1 = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            3
                        ]), updateAppUISourceCode = _ref1[0], updateScript = _ref1[2];
                        // Now we have a new `app.js`...
                        assert.notStrictEqual(updateAppUISourceCode, originalAppUISourceCode);
                        _2 = assert.isEmpty;
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(originalAppUISourceCode, 0, 0)
                        ];
                    case 5:
                        _2.apply(assert, [
                            _state.sent()
                        ]);
                        _3 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.uiLocationToRawLocations(updateAppUISourceCode, 0, 0)
                        ];
                    case 6:
                        _3.apply(assert, [
                            _state.sent(),
                            [
                                updateScript.debuggerModel.createRawLocation(updateScript, 0, 0)
                            ]
                        ]);
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(originalScript.debuggerModel.createRawLocation(originalScript, 1, 0))
                        ];
                    case 7:
                        uiSourceCode = _state.sent().uiSourceCode;
                        assert.notStrictEqual(uiSourceCode, originalAppUISourceCode);
                        assert.notStrictEqual(uiSourceCode, updateAppUISourceCode);
                        // ...while the `lib.js` mapping of `bundle.js` is still intact (because it
                        // was the same content).
                        _4 = assert.deepEqual;
                        return [
                            4,
                            debuggerWorkspaceBinding.rawLocationToUILocation(originalScript.debuggerModel.createRawLocation(originalScript, 0, 0))
                        ];
                    case 8:
                        _4.apply(assert, [
                            _state.sent(),
                            originalLibUISourceCode.uiLocation(0, 0)
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('assumes UTF-8 encoding for source files embedded in source maps', /*#__PURE__*/ _async_to_generator(function() {
        var target, sourceRoot, sourceContent, scriptInfo, sourceMapInfo, _ref, uiSourceCode, metadata, sourceUTF8;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    sourceRoot = 'http://example.com';
                    sourceContent = 'console.log("Ahoj světe!");';
                    scriptInfo = {
                        url: "".concat(sourceRoot, "/script.min.js"),
                        content: sourceContent
                    };
                    sourceMapInfo = {
                        url: "".concat(scriptInfo.url, ".map"),
                        content: {
                            version: 3,
                            mappings: '',
                            sources: [
                                'script.js'
                            ],
                            sourcesContent: [
                                sourceContent
                            ],
                            sourceRoot: sourceRoot
                        }
                    };
                    return [
                        4,
                        Promise.all([
                            waitForUISourceCodeAdded("".concat(sourceRoot, "/script.js"), target),
                            backend.addScript(target, scriptInfo, sourceMapInfo)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), uiSourceCode = _ref[0];
                    return [
                        4,
                        uiSourceCode.requestMetadata()
                    ];
                case 2:
                    metadata = _state.sent();
                    assert.notStrictEqual(metadata === null || metadata === void 0 ? void 0 : metadata.contentSize, sourceContent.length);
                    sourceUTF8 = new TextEncoder().encode(sourceContent);
                    assert.strictEqual(metadata === null || metadata === void 0 ? void 0 : metadata.contentSize, sourceUTF8.length);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CompilerScriptMapping.test.js.map


}),

}]);