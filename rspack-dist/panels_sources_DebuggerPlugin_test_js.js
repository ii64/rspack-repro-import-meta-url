"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_DebuggerPlugin_test_js"], {
"./panels/sources/DebuggerPlugin.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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










(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('Inline variable view scope helpers', function() {
    var toOffsetWithSourceMap = function toOffsetWithSourceMap(sourceMap, location) {
        return _toOffsetWithSourceMap.apply(this, arguments);
    };
    var toOffset = function toOffset(source, location) {
        return _toOffset.apply(this, arguments);
    };
    var URL = 'file:///tmp/example.js';
    var target;
    var backend;
    beforeEach(function() {
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.MockProtocolBackend();
    });
    function _toOffsetWithSourceMap() {
        _toOffsetWithSourceMap = _async_to_generator(function(sourceMap, location) {
            var entry, content, text;
            return _ts_generator(this, function(_state) {
                if (!location || !sourceMap) {
                    return [
                        2,
                        null
                    ];
                }
                entry = sourceMap.findEntry(location.lineNumber, location.columnNumber);
                if (!entry || !entry.sourceURL) {
                    return [
                        2,
                        null
                    ];
                }
                content = sourceMap.embeddedContentByURL(entry.sourceURL);
                if (!content) {
                    return [
                        2,
                        null
                    ];
                }
                text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(content);
                return [
                    2,
                    text.offsetFromPosition(entry.sourceLineNumber, entry.sourceColumnNumber)
                ];
            });
        });
        return _toOffsetWithSourceMap.apply(this, arguments);
    }
    function _toOffset() {
        _toOffset = _async_to_generator(function(source, location) {
            var text;
            return _ts_generator(this, function(_state) {
                if (!location || !source) {
                    return [
                        2,
                        null
                    ];
                }
                text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(source);
                return [
                    2,
                    text.offsetFromPosition(location.lineNumber, location.columnNumber)
                ];
            });
        });
        return _toOffset.apply(this, arguments);
    }
    it('can resolve single scope mappings with source map', /*#__PURE__*/ _async_to_generator(function() {
        var _scopeMappings__variableMap_get, _scopeMappings__variableMap_get1, sourceMapUrl, source, scopes, originalSource, originalScopes, expectedOffsets, sourceMapContent, sourceMapJson, scopeObject, callFrame, sourceMap, scopeMappings, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This example was minified with terser v5.7.0 with following command.
                    // 'terser index.js -m --toplevel -o example.min.js --source-map "url=example.min.js.map,includeSources"'
                    source = "function o(o,n){console.log(o,n)}o(1,2);\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '          {                     }';
                    // The original scopes below have to match with how the source map translates the scope, so it
                    // does not align perfectly with the source language scopes. In principle, this test could only
                    // assert that the tests are approximately correct; currently, we assert an exact match.
                    originalSource = 'function unminified(par1, par2) {\n  console.log(par1, par2);\n}\nunminified(1, 2);\n';
                    originalScopes = '         {                       \n                          \n }';
                    expectedOffsets = (0,_testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.parseScopeChain)(originalScopes);
                    sourceMapContent = {
                        'version': 3,
                        'names': [
                            'unminified',
                            'par1',
                            'par2',
                            'console',
                            'log'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            originalSource
                        ],
                        'mappings': 'AAAA,SAASA,EAAWC,EAAMC,GACxBC,QAAQC,IAAIH,EAAMC,EACpB,CACAF,EAAW,EAAG'
                    };
                    sourceMapJson = JSON.stringify(sourceMapContent);
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 42
                        },
                        {
                            name: 'n',
                            value: 1
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapJson
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        callFrame.debuggerModel.sourceMapManager().sourceMapForClientPromise(callFrame.script)
                    ];
                case 2:
                    sourceMap = _state.sent();
                    return [
                        4,
                        _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computeScopeMappings(callFrame, function(l) {
                            return toOffsetWithSourceMap(sourceMap, l);
                        })
                    ];
                case 3:
                    scopeMappings = _state.sent();
                    text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(originalSource);
                    assert.strictEqual(scopeMappings.length, 1);
                    assert.strictEqual(scopeMappings[0].scopeStart, text.offsetFromPosition(expectedOffsets[0].startLine, expectedOffsets[0].startColumn));
                    assert.strictEqual(scopeMappings[0].scopeEnd, text.offsetFromPosition(expectedOffsets[0].endLine, expectedOffsets[0].endColumn));
                    assert.strictEqual((_scopeMappings__variableMap_get = scopeMappings[0].variableMap.get('par1')) === null || _scopeMappings__variableMap_get === void 0 ? void 0 : _scopeMappings__variableMap_get.value, 42);
                    assert.strictEqual((_scopeMappings__variableMap_get1 = scopeMappings[0].variableMap.get('par2')) === null || _scopeMappings__variableMap_get1 === void 0 ? void 0 : _scopeMappings__variableMap_get1.value, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can resolve nested scope mappings with source map', /*#__PURE__*/ _async_to_generator(function() {
        var _scopeMappings__variableMap_get, _scopeMappings__variableMap_get1, _scopeMappings__variableMap_get2, sourceMapUrl, source, scopes, originalSource, originalScopes, expectedOffsets, sourceMapContent, sourceMapJson, functionScopeObject, forScopeObject, callFrame, sourceMap, scopeMappings, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This example was minified with terser v5.7.0 with following command.
                    // 'terser index.js -m --toplevel -o example.min.js --source-map "url=example.min.js.map,includeSources"'
                    source = "function o(o){const n=console.log.bind(console);for(let c=0;c<o;c++)n(c)}o(10);\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '          {                                        <                   >}                          ';
                    originalSource = 'function f(n) {\n  const c = console.log.bind(console);\n  for (let i = 0; i < n; i++) c(i);\n}\nf(10);\n';
                    originalScopes = '         {     \n                                      \n  <                                >\n }';
                    expectedOffsets = (0,_testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.parseScopeChain)(originalScopes);
                    sourceMapContent = {
                        'version': 3,
                        'names': [
                            'f',
                            'n',
                            'c',
                            'console',
                            'log',
                            'bind',
                            'i'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            originalSource
                        ],
                        'mappings': 'AAAA,SAASA,EAAEC,GACT,MAAMC,EAAIC,QAAQC,IAAIC,KAAKF,SAC3B,IAAK,IAAIG,EAAI,EAAGA,EAAIL,EAAGK,IAAKJ,EAAEI,EAChC,CACAN,EAAE'
                    };
                    sourceMapJson = JSON.stringify(sourceMapContent);
                    functionScopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 10
                        },
                        {
                            name: 'n',
                            value: 1234
                        }
                    ]);
                    forScopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'c',
                            value: 5
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapJson
                        }, [
                            forScopeObject,
                            functionScopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        callFrame.debuggerModel.sourceMapManager().sourceMapForClientPromise(callFrame.script)
                    ];
                case 2:
                    sourceMap = _state.sent();
                    return [
                        4,
                        _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computeScopeMappings(callFrame, function(l) {
                            return toOffsetWithSourceMap(sourceMap, l);
                        })
                    ];
                case 3:
                    scopeMappings = _state.sent();
                    text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(originalSource);
                    assert.strictEqual(scopeMappings.length, 2);
                    assert.strictEqual(scopeMappings[0].scopeStart, text.offsetFromPosition(expectedOffsets[0].startLine, expectedOffsets[0].startColumn));
                    assert.strictEqual(scopeMappings[0].scopeEnd, text.offsetFromPosition(expectedOffsets[0].endLine, expectedOffsets[0].endColumn));
                    assert.strictEqual((_scopeMappings__variableMap_get = scopeMappings[0].variableMap.get('i')) === null || _scopeMappings__variableMap_get === void 0 ? void 0 : _scopeMappings__variableMap_get.value, 5);
                    assert.strictEqual(scopeMappings[0].variableMap.size, 1);
                    assert.strictEqual(scopeMappings[1].scopeStart, text.offsetFromPosition(expectedOffsets[1].startLine, expectedOffsets[1].startColumn));
                    assert.strictEqual(scopeMappings[1].scopeEnd, text.offsetFromPosition(expectedOffsets[1].endLine, expectedOffsets[1].endColumn));
                    assert.strictEqual((_scopeMappings__variableMap_get1 = scopeMappings[1].variableMap.get('n')) === null || _scopeMappings__variableMap_get1 === void 0 ? void 0 : _scopeMappings__variableMap_get1.value, 10);
                    assert.strictEqual((_scopeMappings__variableMap_get2 = scopeMappings[1].variableMap.get('c')) === null || _scopeMappings__variableMap_get2 === void 0 ? void 0 : _scopeMappings__variableMap_get2.value, 1234);
                    assert.strictEqual(scopeMappings[1].variableMap.size, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can resolve simple scope mappings', /*#__PURE__*/ _async_to_generator(function() {
        var _scopeMappings__variableMap_get, source, scopes, expectedOffsets, functionScopeObject, callFrame, scopeMappings;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    source = 'function f(a) { debugger } f(1)';
                    scopes = '          {              }';
                    expectedOffsets = (0,_testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.parseScopeChain)(scopes);
                    functionScopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'a',
                            value: 1
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, null, [
                            functionScopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computeScopeMappings(callFrame, function(l) {
                            return toOffset(source, l);
                        })
                    ];
                case 2:
                    scopeMappings = _state.sent();
                    assert.strictEqual(scopeMappings.length, 1);
                    assert.strictEqual(scopeMappings[0].scopeStart, expectedOffsets[0].startColumn);
                    assert.strictEqual(scopeMappings[0].scopeEnd, expectedOffsets[0].endColumn);
                    assert.strictEqual((_scopeMappings__variableMap_get = scopeMappings[0].variableMap.get('a')) === null || _scopeMappings__variableMap_get === void 0 ? void 0 : _scopeMappings__variableMap_get.value, 1);
                    assert.strictEqual(scopeMappings[0].variableMap.size, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can resolve nested scope mappings for block with no variables', /*#__PURE__*/ _async_to_generator(function() {
        var _scopeMappings__variableMap_get, source, scopes, expectedOffsets, functionScopeObject, blockScopeObject, callFrame, scopeMappings;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    source = 'function f() { let a = 1; { debugger } } f()';
                    scopes = '          {               <          > }';
                    expectedOffsets = (0,_testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.parseScopeChain)(scopes);
                    functionScopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'a',
                            value: 1
                        }
                    ]);
                    blockScopeObject = backend.createSimpleRemoteObject([]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, null, [
                            blockScopeObject,
                            functionScopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computeScopeMappings(callFrame, function(l) {
                            return toOffset(source, l);
                        })
                    ];
                case 2:
                    scopeMappings = _state.sent();
                    assert.strictEqual(scopeMappings.length, 2);
                    assert.strictEqual(scopeMappings[0].scopeStart, expectedOffsets[0].startColumn);
                    assert.strictEqual(scopeMappings[0].scopeEnd, expectedOffsets[0].endColumn);
                    assert.strictEqual(scopeMappings[0].variableMap.size, 0);
                    assert.strictEqual(scopeMappings[1].scopeStart, expectedOffsets[1].startColumn);
                    assert.strictEqual(scopeMappings[1].scopeEnd, expectedOffsets[1].endColumn);
                    assert.strictEqual((_scopeMappings__variableMap_get = scopeMappings[1].variableMap.get('a')) === null || _scopeMappings__variableMap_get === void 0 ? void 0 : _scopeMappings__variableMap_get.value, 1);
                    assert.strictEqual(scopeMappings[1].variableMap.size, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can resolve nested scope mappings for function with no variables', /*#__PURE__*/ _async_to_generator(function() {
        var _scopeMappings__variableMap_get, source, scopes, expectedOffsets, functionScopeObject, blockScopeObject, callFrame, scopeMappings;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    source = 'function f() { console.log("Hi"); { let a = 1; debugger } } f()';
                    scopes = '          {                       <                     > }';
                    expectedOffsets = (0,_testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.parseScopeChain)(scopes);
                    functionScopeObject = backend.createSimpleRemoteObject([]);
                    blockScopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'a',
                            value: 1
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, null, [
                            blockScopeObject,
                            functionScopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computeScopeMappings(callFrame, function(l) {
                            return toOffset(source, l);
                        })
                    ];
                case 2:
                    scopeMappings = _state.sent();
                    assert.strictEqual(scopeMappings.length, 2);
                    assert.strictEqual(scopeMappings[0].scopeStart, expectedOffsets[0].startColumn);
                    assert.strictEqual(scopeMappings[0].scopeEnd, expectedOffsets[0].endColumn);
                    assert.strictEqual(scopeMappings[0].variableMap.size, 1);
                    assert.strictEqual((_scopeMappings__variableMap_get = scopeMappings[0].variableMap.get('a')) === null || _scopeMappings__variableMap_get === void 0 ? void 0 : _scopeMappings__variableMap_get.value, 1);
                    assert.strictEqual(scopeMappings[1].scopeStart, expectedOffsets[1].startColumn);
                    assert.strictEqual(scopeMappings[1].scopeEnd, expectedOffsets[1].endColumn);
                    assert.strictEqual(scopeMappings[1].variableMap.size, 0);
                    return [
                        2
                    ];
            }
        });
    }));
});
function makeState(doc) {
    var extensions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
        doc: doc,
        extensions: [
            extensions,
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_8__.Config.baseConfiguration(doc),
            _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_8__.Config.autocompletion.instance()
        ]
    });
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('Inline variable view parser', function() {
    it('parses simple identifier', function() {
        var state = makeState('c', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 0, 1, 1);
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 0,
                id: 'c'
            }
        ]);
    });
    it('parses simple function', function() {
        var code = "function f(o) {\n      let a = 1;\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            }
        ]);
    });
    it('parses patterns', function() {
        var code = "function f(o) {\n      let {x: a, y: [b, c]} = {x: o, y: [1, 2]};\n      console.log(a + b + c);\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 30,
                id: 'a'
            },
            {
                line: 1,
                from: 37,
                id: 'b'
            },
            {
                line: 1,
                from: 40,
                id: 'c'
            },
            {
                line: 1,
                from: 50,
                id: 'o'
            },
            {
                line: 2,
                from: 71,
                id: 'console'
            },
            {
                line: 2,
                from: 83,
                id: 'a'
            },
            {
                line: 2,
                from: 87,
                id: 'b'
            },
            {
                line: 2,
                from: 91,
                id: 'c'
            }
        ]);
    });
    it('parses function with nested block', function() {
        var code = "function f(o) {\n      let a = 1;\n      {\n        let a = 2;\n        debugger;\n      }\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            },
            {
                line: 3,
                from: 53,
                id: 'a'
            }
        ]);
    });
    it('parses function variable, ignores shadowing let in sibling block', function() {
        var code = "function f(o) {\n      let a = 1;\n      {\n        let a = 2;\n        console.log(a);\n      }\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            },
            {
                line: 4,
                from: 68,
                id: 'console'
            }
        ]);
    });
    it('parses function variable, ignores shadowing const in sibling block', function() {
        var code = "function f(o) {\n      let a = 1;\n      {\n        const a = 2;\n        console.log(a);\n      }\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            },
            {
                line: 4,
                from: 70,
                id: 'console'
            }
        ]);
    });
    it('parses function variable, ignores shadowing typed const in sibling block', function() {
        var code = "function f(o) {\n      let a: number = 1;\n      {\n        const a: number = 2;\n        console.log(a);\n      }\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            },
            {
                line: 4,
                from: 86,
                id: 'console'
            }
        ]);
    });
    it('parses function variable, reports all vars', function() {
        var code = "function f(o) {\n      var a = 1;\n      {\n        var a = 2;\n        console.log(a);\n      }\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 0,
                from: 11,
                id: 'o'
            },
            {
                line: 1,
                from: 26,
                id: 'a'
            },
            {
                line: 3,
                from: 53,
                id: 'a'
            },
            {
                line: 4,
                from: 68,
                id: 'console'
            },
            {
                line: 4,
                from: 80,
                id: 'a'
            }
        ]);
    });
    it('parses function variable, handles shadowing in doubly nested scopes', function() {
        var code = "function f() {\n      let a = 1;\n      let b = 2;\n      let c = 3;\n      {\n        let b;\n        {\n          const c = 4;\n          b = 5;\n          console.log(c);\n        }\n        console.log(c);\n      }\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 1,
                from: 25,
                id: 'a'
            },
            {
                line: 2,
                from: 42,
                id: 'b'
            },
            {
                line: 3,
                from: 59,
                id: 'c'
            },
            {
                line: 9,
                from: 149,
                id: 'console'
            },
            {
                line: 11,
                from: 183,
                id: 'console'
            },
            {
                line: 11,
                from: 195,
                id: 'c'
            }
        ]);
    });
    it('parses function variable, handles shadowing with object pattern', function() {
        var code = "function f() {\n      let a = 1;\n      {\n        let {x: b, y: a} = {x: 1, y: 2};\n        console.log(a + b);\n      }\n      console.log(a);\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 1,
                from: 25,
                id: 'a'
            },
            {
                line: 4,
                from: 89,
                id: 'console'
            },
            {
                line: 6,
                from: 123,
                id: 'console'
            },
            {
                line: 6,
                from: 135,
                id: 'a'
            }
        ]);
    });
    it('parses function variable, handles shadowing with array pattern', function() {
        var code = "function f() {\n      let a = 1;\n      {\n        const [b, a] = [1, 2];\n        console.log(a + b);\n      }\n      console.log(a);\n      debugger;\n    }";
        var state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascriptLanguage);
        var variables = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableNamesByLine(state, 10, code.length, code.indexOf('debugger'));
        assert.deepEqual(variables, [
            {
                line: 1,
                from: 25,
                id: 'a'
            },
            {
                line: 4,
                from: 79,
                id: 'console'
            },
            {
                line: 6,
                from: 113,
                id: 'console'
            },
            {
                line: 6,
                from: 125,
                id: 'a'
            }
        ]);
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('Inline variable view scope value resolution', function() {
    it('resolves single variable in single scope', function() {
        var _valuesByLine_get, _valuesByLine_get_get, _valuesByLine_get1;
        var value42 = {
            type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
            value: 42
        };
        var scopeMappings = [
            {
                scopeStart: 0,
                scopeEnd: 10,
                variableMap: new Map([
                    [
                        'a',
                        value42
                    ]
                ])
            }
        ];
        var variableNames = [
            {
                line: 3,
                from: 5,
                id: 'a'
            }
        ];
        var valuesByLine = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableValuesByLine(scopeMappings, variableNames);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : valuesByLine.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get = valuesByLine.get(3)) === null || _valuesByLine_get === void 0 ? void 0 : _valuesByLine_get.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get1 = valuesByLine.get(3)) === null || _valuesByLine_get1 === void 0 ? void 0 : (_valuesByLine_get_get = _valuesByLine_get1.get('a')) === null || _valuesByLine_get_get === void 0 ? void 0 : _valuesByLine_get_get.value, 42);
    });
    it('resolves shadowed variables', function() {
        var _valuesByLine_get, _valuesByLine_get_get, _valuesByLine_get1, _valuesByLine_get2, _valuesByLine_get_get1, _valuesByLine_get3, _valuesByLine_get4, _valuesByLine_get_get2, _valuesByLine_get5;
        var value1 = {
            type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
            value: 1
        };
        var value2 = {
            type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
            value: 2
        };
        var scopeMappings = [
            {
                scopeStart: 10,
                scopeEnd: 20,
                variableMap: new Map([
                    [
                        'a',
                        value1
                    ]
                ])
            },
            {
                scopeStart: 0,
                scopeEnd: 30,
                variableMap: new Map([
                    [
                        'a',
                        value2
                    ]
                ])
            }
        ];
        var variableNames = [
            {
                line: 0,
                from: 5,
                id: 'a'
            },
            {
                line: 10,
                from: 15,
                id: 'a'
            },
            {
                line: 20,
                from: 25,
                id: 'a'
            },
            {
                line: 30,
                from: 35,
                id: 'a'
            }
        ];
        var valuesByLine = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableValuesByLine(scopeMappings, variableNames);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : valuesByLine.size, 3);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get = valuesByLine.get(0)) === null || _valuesByLine_get === void 0 ? void 0 : _valuesByLine_get.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get1 = valuesByLine.get(0)) === null || _valuesByLine_get1 === void 0 ? void 0 : (_valuesByLine_get_get = _valuesByLine_get1.get('a')) === null || _valuesByLine_get_get === void 0 ? void 0 : _valuesByLine_get_get.value, 2);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get2 = valuesByLine.get(10)) === null || _valuesByLine_get2 === void 0 ? void 0 : _valuesByLine_get2.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get3 = valuesByLine.get(10)) === null || _valuesByLine_get3 === void 0 ? void 0 : (_valuesByLine_get_get1 = _valuesByLine_get3.get('a')) === null || _valuesByLine_get_get1 === void 0 ? void 0 : _valuesByLine_get_get1.value, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get4 = valuesByLine.get(20)) === null || _valuesByLine_get4 === void 0 ? void 0 : _valuesByLine_get4.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get5 = valuesByLine.get(20)) === null || _valuesByLine_get5 === void 0 ? void 0 : (_valuesByLine_get_get2 = _valuesByLine_get5.get('a')) === null || _valuesByLine_get_get2 === void 0 ? void 0 : _valuesByLine_get_get2.value, 2);
    });
    it('resolves multiple variables on the same line', function() {
        var _valuesByLine_get, _valuesByLine_get_get, _valuesByLine_get1, _valuesByLine_get_get1, _valuesByLine_get2;
        var value1 = {
            type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
            value: 1
        };
        var value2 = {
            type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
            value: 2
        };
        var scopeMappings = [
            {
                scopeStart: 10,
                scopeEnd: 20,
                variableMap: new Map([
                    [
                        'a',
                        value1
                    ],
                    [
                        'b',
                        value2
                    ]
                ])
            }
        ];
        var variableNames = [
            {
                line: 10,
                from: 11,
                id: 'a'
            },
            {
                line: 10,
                from: 13,
                id: 'b'
            },
            {
                line: 10,
                from: 15,
                id: 'a'
            }
        ];
        var valuesByLine = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.getVariableValuesByLine(scopeMappings, variableNames);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : valuesByLine.size, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get = valuesByLine.get(10)) === null || _valuesByLine_get === void 0 ? void 0 : _valuesByLine_get.size, 2);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get1 = valuesByLine.get(10)) === null || _valuesByLine_get1 === void 0 ? void 0 : (_valuesByLine_get_get = _valuesByLine_get1.get('a')) === null || _valuesByLine_get_get === void 0 ? void 0 : _valuesByLine_get_get.value, 1);
        assert.strictEqual(valuesByLine === null || valuesByLine === void 0 ? void 0 : (_valuesByLine_get2 = valuesByLine.get(10)) === null || _valuesByLine_get2 === void 0 ? void 0 : (_valuesByLine_get_get1 = _valuesByLine_get2.get('b')) === null || _valuesByLine_get_get1 === void 0 ? void 0 : _valuesByLine_get_get1.value, 2);
    });
});
describe('DebuggerPlugin', function() {
    describe('computePopoverHighlightRange', function() {
        var computePopoverHighlightRange = _sources_js__WEBPACK_IMPORTED_MODULE_9__.DebuggerPlugin.computePopoverHighlightRange;
        it('correctly returns highlight range depending on cursor position and selection', function() {
            var doc = 'Hello World!';
            var selection = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorSelection.create([
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorSelection.range(2, 5)
            ]);
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                doc: doc,
                selection: selection
            });
            assert.isNull(computePopoverHighlightRange(state, 'text/plain', 0));
            assert.deepInclude(computePopoverHighlightRange(state, 'text/plain', 2), {
                from: 2,
                to: 5
            });
            assert.deepInclude(computePopoverHighlightRange(state, 'text/plain', 5), {
                from: 2,
                to: 5
            });
            assert.isNull(computePopoverHighlightRange(state, 'text/plain', 10));
            assert.isNull(computePopoverHighlightRange(state, 'text/plain', doc.length - 1));
        });
        describe('in JavaScript files', function() {
            var extensions = [
                _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.javascript()
            ];
            it('correctly returns highlight range for member assignments', function() {
                var doc = 'obj.foo = 42;';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', 0), {
                    from: 0,
                    to: 3
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', 4), {
                    from: 0,
                    to: 7
                });
            });
            it('correctly returns highlight range for member assignments involving `this`', function() {
                var doc = 'this.x = bar;';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', 0), {
                    from: 0,
                    to: 4
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', 5), {
                    from: 0,
                    to: 6
                });
            });
            it('correctly reports function calls as potentially side-effecting', function() {
                var doc = 'getRandomCoffee().name';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('getRandomCoffee')), {
                    containsSideEffects: false
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.lastIndexOf('.')), {
                    containsSideEffects: true
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('name')), {
                    containsSideEffects: true
                });
            });
            it('correctly reports method calls as potentially side-effecting', function() {
                var doc = 'utils.getRandomCoffee().name';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('utils')), {
                    containsSideEffects: false
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('getRandomCoffee')), {
                    containsSideEffects: false
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.lastIndexOf('.')), {
                    containsSideEffects: true
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('name')), {
                    containsSideEffects: true
                });
            });
            it('correctly reports function calls in property accesses as potentially side-effecting', function() {
                var doc = 'bar[foo()]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('bar')), {
                    containsSideEffects: false,
                    from: 0,
                    to: 'bar'.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correct reports postfix increments in property accesses as potentially side-effecting', function() {
                var doc = 'a[i++]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correctly reports postfix decrements in property accesses as potentially side-effecting', function() {
                var doc = 'a[i--]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correctly reports prefix increments in property accesses as potentially side-effecting', function() {
                var doc = 'array[++index]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correctly reports prefix decrements in property accesses as potentially side-effecting', function() {
                var doc = 'array[--index]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correctly reports assignment expressions in property accesses as potentially side-effecting', function() {
                var doc = 'array[index *= 5]';
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf('[')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
                assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', doc.indexOf(']')), {
                    containsSideEffects: true,
                    from: 0,
                    to: doc.length
                });
            });
            it('correctly reports potential side-effects within a larger script', function() {
                var doc = "var a = new Array();\nvar i = 0;\na[i++];\na[i--];\na[++i];\na[--i];\na[i *= 5];\na[foo()];";
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                for(var offset = 0; (offset = doc.indexOf('a[', offset) + 1) !== 0;){
                    assert.deepInclude(computePopoverHighlightRange(state, 'text/javascript', offset), {
                        containsSideEffects: true
                    });
                }
            });
        });
        describe('in HTML files', function() {
            it('correctly returns highlight range for variables in inline <script>s', function() {
                var doc = '<!DOCTYPE html>\n<script type="text/javascript">\nglobalThis.foo = bar + baz;\n</script>';
                var extensions = [
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.html.html()
                ];
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                for(var _i = 0, _iter = [
                    'bar',
                    'baz'
                ]; _i < _iter.length; _i++){
                    var name = _iter[_i];
                    var from = doc.indexOf(name);
                    var to = from + name.length;
                    assert.deepInclude(computePopoverHighlightRange(state, 'text/html', from), {
                        from: from,
                        to: to
                    }, "did not correct highlight '".concat(name, "'"));
                }
            });
            it('correctly returns highlight range for variables in inline event handlers', function() {
                var doc = '<!DOCTYPE html>\n<button onclick="foo(bar, baz)">Click me!</button>';
                var extensions = [
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.html.html()
                ];
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                for(var _i = 0, _iter = [
                    'foo',
                    'bar',
                    'baz'
                ]; _i < _iter.length; _i++){
                    var name = _iter[_i];
                    var from = doc.indexOf(name);
                    var to = from + name.length;
                    assert.deepInclude(computePopoverHighlightRange(state, 'text/html', from), {
                        from: from,
                        to: to
                    }, "did not correct highlight '".concat(name, "'"));
                }
            });
        });
        describe('in TSX files', function() {
            it('correctly returns highlight range for field accesses', function() {
                var doc = "function foo(obj: any): number {\n  return obj.x + obj.y;\n}";
                var extensions = [
                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.javascript.tsxLanguage
                ];
                var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorState.create({
                    doc: doc,
                    extensions: extensions
                });
                for(var _i = 0, _iter = [
                    'x',
                    'y'
                ]; _i < _iter.length; _i++){
                    var name = _iter[_i];
                    var pos = doc.lastIndexOf(name);
                    var from = pos - 4;
                    var to = pos + name.length;
                    assert.deepInclude(computePopoverHighlightRange(state, 'text/typescript-jsx', pos), {
                        from: from,
                        to: to
                    }, "did not correct highlight '".concat(name, "'"));
                }
            });
        });
    });
}); //# sourceMappingURL=DebuggerPlugin.test.js.map


}),

}]);