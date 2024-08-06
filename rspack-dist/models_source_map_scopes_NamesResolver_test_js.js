"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_source_map_scopes_NamesResolver_test_js"], {
"./models/source_map_scopes/NamesResolver.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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








(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('NameResolver', function() {
    var URL = 'file:///tmp/example.js';
    var target;
    var backend;
    beforeEach(function() {
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        var resourceMapping = new _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_4__.MockProtocolBackend();
    });
    // Given a function scope <fn-start>,<fn-end> and a nested scope <start>,<end>,
    // we expect the scope parser to return a list of identifiers of the form [{name, offset}]
    // for the nested scope. (The nested scope may be the same as the function scope.)
    //
    // For example, say we want to assert that the block scope '{let a = x, return a}'
    // in function 'function f(x) { g(x); {let a = x, return a} }'
    //   - defines and uses variable 'a' at the correct offsets, and
    //   - uses free variable 'x'.
    // Such assertions could be expressed roughly as follows:
    //
    // expect.that(
    //  scopeIdentifiers(functionScope: {start: 10, end: 45}, scope:{start: 21, end: 43}).bound)
    //   .equals([Identifier(name: a, offsets: [27, 41])]).
    // expect.that(
    //  scopeIdentifiers(functionScope: {start: 10, end: 45}, scope:{start: 21, end: 43}).free)
    //   .equals([Identifier(name: x, offsets: [31])]).
    //
    // This is not ideal because the explicit offsets are hard to read and maintain.
    // To avoid typing the exact offset we encode the offsets in a scope assertion string
    // that can be easily aligned with the source code. For example, the assertion above
    // will be written as
    // source: 'function f(x) { g(x); {let a = x, return a} }'
    // scopes: '          {            <   B   F         B> }'
    //
    // In the assertion string, '{' and '}' characters mark the positions of function
    // offset start and end, '<' and '>' mark the positions of the nested scope
    // start and end (if '<', '>' are missing then the nested scope is the function scope),
    // the character 'B', 'F' mark the positions of bound and free identifiers that
    // we expect to be returned by the scopeIdentifiers function.
    it('test helper parses identifiers from test descriptor', function() {
        var source = 'function f(x) { g(x); {let a = x, return a} }';
        var scopes = '          {           <    B   F         B> }';
        var identifiers = getIdentifiersFromScopeDescriptor(source, scopes);
        assert.deepEqual(identifiers.bound, [
            new _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.IdentifierPositions('a', [
                {
                    lineNumber: 0,
                    columnNumber: 27
                },
                {
                    lineNumber: 0,
                    columnNumber: 41
                }
            ])
        ]);
        assert.deepEqual(identifiers.free, [
            new _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.IdentifierPositions('x', [
                {
                    lineNumber: 0,
                    columnNumber: 31
                }
            ])
        ]);
    });
    var tests = [
        {
            name: 'computes identifiers for a simple function',
            source: 'function f(x) { return x }',
            scopes: '          {B           B }'
        },
        {
            name: 'computes identifiers for a function with a let local',
            source: 'function f(x) { let a = 42; return a; }',
            scopes: '          {B        B              B  }'
        },
        {
            name: 'computes identifiers for a nested scope',
            source: 'function f(x) { let outer = x; { let inner = outer; return inner } }',
            scopes: '          {                    <     BBBBB   FFFFF         BBBBB > }'
        },
        {
            name: 'computes identifiers for second nested scope',
            source: 'function f(x) { { let a = 1; } { let b = x; return b } }',
            scopes: '          {                    <     B   F         B > }'
        },
        {
            name: 'computes identifiers with nested scopes',
            source: 'function f(x) { let outer = x; { let a = outer; } { let b = x; return b } }',
            scopes: '          {B        BBBBB   B            BBBBB              B             }'
        },
        {
            name: 'computes identifiers with nested scopes, var lifting',
            source: 'function f(x) { let outer = x; { var b = x; return b } }',
            scopes: '          {B        BBBBB   B        B   B         B   }'
        },
        {
            name: 'computes identifiers with nested scopes, var lifting',
            source: 'function f(x) { let outer = x; { var b = x; return b } }',
            scopes: '          {B        BBBBB   B        B   B         B   }'
        },
        {
            name: 'computes identifiers in catch clause',
            source: 'function f(x) { try { } catch (e) { let a = e + x; } }',
            scopes: '          {                   <B            B   F  > }'
        },
        {
            name: 'computes identifiers in catch clause',
            source: 'function f(x) { try { } catch (e) { let a = e; return a; } }',
            scopes: '          {                       <     B   F         B  > }'
        },
        {
            name: 'computes identifiers in for-let',
            source: 'function f(x) { for (let i = 0; i < 10; i++) { let j = i; console.log(j)} }',
            scopes: '          {         <    B      B       B              B  FFFFFFF       > }'
        },
        {
            name: 'computes identifiers in for-let body',
            source: 'function f(x) { for (let i = 0; i < 10; i++) { let j = i; console.log(j)} }',
            scopes: '          {                                  <     B   F  FFFFFFF     B > }'
        },
        {
            name: 'computes identifiers in for-var function',
            source: 'function f(x) { for (var i = 0; i < 10; i++) { let j = i; console.log(j)} }',
            scopes: '          {B             B      B       B              B  FFFFFFF         }'
        },
        {
            name: 'computes identifiers in for-let-of',
            source: 'function f(x) { for (let i of x) { console.log(i)} }',
            scopes: '          {         <    B    F    FFFFFFF     B > }'
        },
        {
            name: 'computes identifiers in nested arrow function',
            source: 'function f(x) { return (i) => { let j = i; return j } }',
            scopes: '          {            <B           B   B         B > }'
        },
        {
            name: 'computes identifiers in arrow function',
            source: 'const f = (x) => { let i = 1; return x + i; }',
            scopes: '          {B           B             B   B  }'
        },
        {
            name: 'computes identifiers in an arrow function\'s nested scope',
            source: 'const f = (x) => { let i = 1; { let j = i + x; return j; } }',
            scopes: '          {                   <     B   F   F         B  > }'
        },
        {
            name: 'computes identifiers in an async arrow function\'s nested scope',
            source: 'const f = async (x) => { let i = 1; { let j = i + await x; return j; } }',
            scopes: '                {                   <     B   F         F         B  > }'
        },
        {
            name: 'computes identifiers in a function with yield and await',
            source: 'async function* f(x) { return yield x + await p; }',
            scopes: '                 {B                 B         F  }'
        },
        {
            name: 'computes identifiers in a function with yield*',
            source: 'function* f(x) { return yield* g(x) + 2; }',
            scopes: '           {B                  F B       }'
        }
    ];
    var dummyMapContent = JSON.stringify({
        'version': 3,
        'sources': []
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var test = _step.value;
            it(test.name, /*#__PURE__*/ _async_to_generator(function() {
                var callFrame, parsedScopeChain, scope, identifiers, _identifiers_boundVariables, boundIdentifiers, _identifiers_freeVariables, freeIdentifiers;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                backend.createCallFrame(target, {
                                    url: URL,
                                    content: test.source
                                }, test.scopes, {
                                    url: 'file:///dummy.map',
                                    content: dummyMapContent
                                })
                            ];
                        case 1:
                            callFrame = _state.sent();
                            return [
                                4,
                                _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.findScopeChainForDebuggerScope(callFrame.scopeChain()[0])
                            ];
                        case 2:
                            parsedScopeChain = _state.sent();
                            scope = parsedScopeChain.pop();
                            assert.exists(scope);
                            return [
                                4,
                                _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.scopeIdentifiers(callFrame.script, scope, parsedScopeChain)
                            ];
                        case 3:
                            identifiers = _state.sent();
                            boundIdentifiers = (_identifiers_boundVariables = identifiers === null || identifiers === void 0 ? void 0 : identifiers.boundVariables) !== null && _identifiers_boundVariables !== void 0 ? _identifiers_boundVariables : [];
                            freeIdentifiers = (_identifiers_freeVariables = identifiers === null || identifiers === void 0 ? void 0 : identifiers.freeVariables) !== null && _identifiers_freeVariables !== void 0 ? _identifiers_freeVariables : [];
                            boundIdentifiers.sort(function(l, r) {
                                return l.positions[0].lineNumber - r.positions[0].lineNumber || l.positions[0].columnNumber - r.positions[0].columnNumber;
                            });
                            freeIdentifiers.sort(function(l, r) {
                                return l.positions[0].lineNumber - r.positions[0].lineNumber || l.positions[0].columnNumber - r.positions[0].columnNumber;
                            });
                            assert.deepEqual(boundIdentifiers, getIdentifiersFromScopeDescriptor(test.source, test.scopes).bound);
                            assert.deepEqual(freeIdentifiers, getIdentifiersFromScopeDescriptor(test.source, test.scopes).free);
                            return [
                                2
                            ];
                    }
                });
            }));
        };
        for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    it('resolves name tokens merged with commas (without source map names)', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'esbuild --sourcemap=linked --minify' v0.14.31.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            'function f(par1, par2) {\n  console.log(par1, par2);\n}\nf(1, 2);\n'
                        ],
                        'mappings': 'AAAA,WAAW,EAAM,EAAM,CACrB,QAAQ,IAAI,EAAM,CAAI,CACxB,CACA,EAAE,EAAG,CAAC',
                        'names': []
                    });
                    source = "function f(o,n){console.log(o,n)}f(1,2);\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '          {                     }';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 1
                        },
                        {
                            name: 'n',
                            value: 2
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.sameDeepMembers(namesAndValues, [
                        {
                            name: 'par1',
                            value: 1
                        },
                        {
                            name: 'par2',
                            value: 2
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves name tokens merged with equals (without source map names)', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'esbuild --sourcemap=linked --minify' v0.14.31.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            'function f(n) {\n  for (let i = 0; i < n; i++) {\n    console.log("hi");\n  }\n}\nf(10);\n'
                        ],
                        'mappings': 'AAAA,WAAW,EAAG,CACZ,OAAS,GAAI,EAAG,EAAI,EAAG,IACrB,QAAQ,IAAI,IAAI,CAEpB,CACA,EAAE,EAAE',
                        'names': []
                    });
                    source = 'function f(i){for(let o=0;o<i;o++)console.log("hi")}f(10);\n//# sourceMappingURL='.concat(sourceMapUrl);
                    scopes = '          {      <                                >}';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 4
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.sameDeepMembers(namesAndValues, [
                        {
                            name: 'i',
                            value: 4
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves name tokens with source map names', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map" --toplevel' v5.7.0.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'names': [
                            'f',
                            'par1',
                            'par2',
                            'console',
                            'log'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            'function f(par1, par2) {\n  console.log(par1, par2);\n}\nf(1, 2);\n'
                        ],
                        'mappings': 'AAAA,SAASA,EAAEC,EAAMC,GACfC,QAAQC,IAAIH,EAAMC,GAEpBF,EAAE,EAAG'
                    });
                    source = "function o(o,n){console.log(o,n)}o(1,2);\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '          {                     }';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 1
                        },
                        {
                            name: 'n',
                            value: 2
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.sameDeepMembers(namesAndValues, [
                        {
                            name: 'par1',
                            value: 1
                        },
                        {
                            name: 'par2',
                            value: 2
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves names in constructors with super call', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map"' v5.7.0.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'names': [
                            'C',
                            'B',
                            'constructor',
                            'par1',
                            'super',
                            'console',
                            'log'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'mappings': 'AAAA,MAAMA,UAAUC,EACdC,YAAYC,GACVC,MAAMD,GACNE,QAAQC,IAAIH'
                    });
                    source = "class C extends B{constructor(s){super(s),console.log(s)}}\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '                             {                          }';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 's',
                            value: 42
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.sameDeepMembers(namesAndValues, [
                        {
                            name: 'par1',
                            value: 42
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves names for variables in TDZ', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map" v5.7.0.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'names': [
                            'adder',
                            'arg1',
                            'arg2',
                            'console',
                            'log',
                            'result'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            'function adder(arg1, arg2) {\n  console.log(arg1, arg2);\n  const result = arg1 + arg2;\n  return result;\n}\n'
                        ],
                        'mappings': 'AAAA,SAASA,MAAMC,EAAMC,GACnBC,QAAQC,IAAIH,EAAMC,GAClB,MAAMG,EAASJ,EAAOC,EACtB,OAAOG,CACT'
                    });
                    source = "function adder(n,o){console.log(n,o);const c=n+o;return c}\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '              {                                          }';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'n',
                            value: 42
                        },
                        {
                            name: 'o',
                            value: 5
                        },
                        {
                            name: 'c'
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.sameDeepMembers(namesAndValues, [
                        {
                            name: 'arg1',
                            value: 42
                        },
                        {
                            name: 'arg2',
                            value: 5
                        },
                        {
                            name: 'result',
                            value: undefined
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves inner scope clashing names from let -> var transpilation', /*#__PURE__*/ _async_to_generator(function() {
        var _properties_properties, sourceMapUrl, sourceMapContent, source, scopes, i, _scopes, _i, _, scopeObject, callFrame, resolvedScopeObject, properties, _properties_properties_map, namesAndValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // This tests the  behavior where the TypeScript compiler renames a variable when transforming let-variables
                    // to var-variables to avoid clash, and DevTools then (somewhat questionably) deobfuscates the var variables
                    // back to the original names in the function scope (as opposed to the original block scopes). Ideally, DevTools
                    // would do some scoping inference rather than relying on the pruned scope chain from V8.
                    sourceMapUrl = 'file:///tmp/index.js.map';
                    // The source map was obtained with 'tsc --target es5 --sourceMap --inlineSources index.ts'.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'file': 'index.js',
                        'sourceRoot': '',
                        'sources': [
                            'index.ts'
                        ],
                        'names': [],
                        'mappings': 'AAAA,SAAS,CAAC;IACR,IAAI,GAAG,GAAG,EAAE,CAAC;' + 'IACb,KAAK,IAAI,KAAG,GAAG,CAAC,EAAE,KAAG,GAAG,CAAC,EAAE,KAAG,EAAE,EAAE;' + 'QAChC,OAAO,CAAC,GAAG,CAAC,KAAG,CAAC,CAAC;KAClB;' + 'AACH,CAAC;' + 'AACD,CAAC,EAAE,CAAC',
                        'sourcesContent': [
                            'function f() {\n  let pos = 10;\n  for (let pos = 0; pos < 5; pos++) {\n    console.log(pos);\n  }\n}\nf();\n'
                        ]
                    });
                    source = [];
                    scopes = [];
                    source[0] = 'function f() {';
                    scopes[0] = '          {'; // Mark for scope start.
                    source[1] = '    var pos = 10;';
                    source[2] = '    for (var pos_1 = 0; pos_1 < 5; pos_1++) {';
                    source[3] = '        console.log(pos_1);';
                    source[4] = '    }';
                    source[5] = '}';
                    scopes[5] = '}'; // Mark for scope end.
                    source[6] = 'f();';
                    source[7] = "//# sourceMappingURL=".concat(sourceMapUrl);
                    for(i = 0; i < source.length; i++){
                        ;
                        ;
                        (_ = (_scopes = scopes)[_i = i]) !== null && _ !== void 0 ? _ : _scopes[_i] = '';
                    }
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'pos',
                            value: 10
                        },
                        {
                            name: 'pos_1',
                            value: 4
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source.join('\n')
                        }, scopes.join('\n'), {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveScopeInObject(callFrame.scopeChain()[0])
                    ];
                case 2:
                    resolvedScopeObject = _state.sent();
                    return [
                        4,
                        resolvedScopeObject.getAllProperties(false, false)
                    ];
                case 3:
                    properties = _state.sent();
                    namesAndValues = (_properties_properties_map = (_properties_properties = properties.properties) === null || _properties_properties === void 0 ? void 0 : _properties_properties.map(function(p) {
                        var _p_value;
                        return {
                            name: p.name,
                            value: (_p_value = p.value) === null || _p_value === void 0 ? void 0 : _p_value.value
                        };
                    })) !== null && _properties_properties_map !== void 0 ? _properties_properties_map : [];
                    assert.deepEqual(namesAndValues, [
                        {
                            name: 'pos',
                            value: 10
                        },
                        {
                            name: 'pos',
                            value: 4
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Function name resolving', function() {
        var callFrame;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var sourceMapUrl, sourceMapContent, source, scopes, scopeObject;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sourceMapUrl = 'file:///tmp/example.js.min.map';
                        // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map"' v5.7.0.
                        sourceMapContent = JSON.stringify({
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
                                'function unminified(par1, par2) {\n  console.log(par1, par2);\n}\n'
                            ],
                            'mappings': 'AAAA,SAASA,EAAWC,EAAMC,GACxBC,QAAQC,IAAIH,EAAMC'
                        });
                        source = "function o(o,n){console.log(o,n)}o(1,2);\n//# sourceMappingURL=".concat(sourceMapUrl);
                        scopes = '          {                     }';
                        scopeObject = backend.createSimpleRemoteObject([
                            {
                                name: 's',
                                value: 42
                            }
                        ]);
                        return [
                            4,
                            backend.createCallFrame(target, {
                                url: URL,
                                content: source
                            }, scopes, {
                                url: sourceMapUrl,
                                content: sourceMapContent
                            }, [
                                scopeObject
                            ])
                        ];
                    case 1:
                        callFrame = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('resolves function names at scope start for a debugger frame', /*#__PURE__*/ _async_to_generator(function() {
            var functionName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveDebuggerFrameFunctionName(callFrame)
                        ];
                    case 1:
                        functionName = _state.sent();
                        assert.strictEqual(functionName, 'unminified');
                        return [
                            2
                        ];
                }
            });
        }));
        it('resolves function names at scope start for a profiler frame', /*#__PURE__*/ _async_to_generator(function() {
            var scopeLocation, debuggerModel, script, scriptId, lineNumber, columnNumber, functionName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        scopeLocation = callFrame.location();
                        debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                        script = debuggerModel === null || debuggerModel === void 0 ? void 0 : debuggerModel.scripts()[0];
                        scriptId = script === null || script === void 0 ? void 0 : script.scriptId;
                        if (scriptId === undefined) {
                            assert.fail('Script id not found');
                            return [
                                2
                            ];
                        }
                        lineNumber = scopeLocation.lineNumber, columnNumber = scopeLocation.columnNumber;
                        return [
                            4,
                            script === null || script === void 0 ? void 0 : script.requestContentData()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveProfileFrameFunctionName({
                                scriptId: scriptId,
                                columnNumber: columnNumber,
                                lineNumber: lineNumber
                            }, target)
                        ];
                    case 2:
                        functionName = _state.sent();
                        assert.strictEqual(functionName, 'unminified');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Function name resolving from scopes', function() {
        it('resolves function scope name at scope start for a debugger frame', /*#__PURE__*/ _async_to_generator(function() {
            var sourceMapUrl, sourceMapContent, source, scopes, callFrame, functionName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest('use-source-map-scopes');
                        sourceMapUrl = 'file:///tmp/example.js.min.map';
                        sourceMapContent = JSON.stringify({
                            'version': 3,
                            'names': [
                                '<toplevel>',
                                '<anonymous>',
                                'log',
                                'main'
                            ],
                            'sources': [
                                'main.js'
                            ],
                            'sourcesContent': [
                                '(function () {\n  function log(m) {\n    console.log(m);\n  }\n\n  function main() {\n\t  log("hello");\n\t  log("world");\n  }\n  \n  main();\n})();'
                            ],
                            'mappings': 'CAAA,WACE,SAAS,EAAI,GACX,QAAQ,IAAI,EACd,CAEA,SAAS,IACR,EAAI,SACJ,EAAI,QACL,CAEA,GACD,EAXD',
                            'x_com_bloomberg_sourcesFunctionMappings': [
                                'AAAWK,CACAJ,CCCRE,CIAKA'
                            ]
                        });
                        source = '(function(){function o(o){console.log(o)}function n(){o("hello");o("world")}n()})();\n';
                        scopes = '                                                   {                       }';
                        return [
                            4,
                            backend.createCallFrame(target, {
                                url: URL,
                                content: source + "//# sourceMappingURL=".concat(sourceMapUrl)
                            }, scopes, {
                                url: sourceMapUrl,
                                content: sourceMapContent
                            })
                        ];
                    case 1:
                        callFrame = _state.sent();
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveDebuggerFrameFunctionName(callFrame)
                        ];
                    case 2:
                        functionName = _state.sent();
                        assert.strictEqual(functionName, 'main');
                        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.disableForTest('use-source-map-scopes');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('ignores the argument name during arrow function name resolution', /*#__PURE__*/ _async_to_generator(function() {
        var sourceMapUrl, sourceMapContent, source, scopes, scopeObject, callFrame, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceMapUrl = 'file:///tmp/example.js.min.map';
                    // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map"' v5.7.0.
                    sourceMapContent = JSON.stringify({
                        'version': 3,
                        'names': [
                            'unminified',
                            'par1',
                            'console',
                            'log'
                        ],
                        'sources': [
                            'index.js'
                        ],
                        'sourcesContent': [
                            'const unminified = par1 => {\n  console.log(par1);\n}\n'
                        ],
                        'mappings': 'AAAA,MAAMA,EAAaC,IACjBC,QAAQC,IAAIF'
                    });
                    source = "const o=o=>{console.log(o)};\n//# sourceMappingURL=".concat(sourceMapUrl);
                    scopes = '        {                 }';
                    scopeObject = backend.createSimpleRemoteObject([
                        {
                            name: 'o',
                            value: 42
                        }
                    ]);
                    return [
                        4,
                        backend.createCallFrame(target, {
                            url: URL,
                            content: source
                        }, scopes, {
                            url: sourceMapUrl,
                            content: sourceMapContent
                        }, [
                            scopeObject
                        ])
                    ];
                case 1:
                    callFrame = _state.sent();
                    _ = assert.isNull;
                    return [
                        4,
                        _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.resolveDebuggerFrameFunctionName(callFrame)
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('allVariablesAtPosition', function() {
        var script;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var originalContent, sourceMapUrl, sourceMapContent, scriptContent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        originalContent = "\nfunction mulWithOffset(param1, param2, offset) {\n  const intermediate = param1 * param2;\n  const result = intermediate;\n  if (offset !== undefined) {\n    const intermediate = result + offset;\n    return intermediate;\n  }\n  return result;\n}\n";
                        sourceMapUrl = 'file:///tmp/example.js.min.map';
                        // This was minified with 'terser -m -o example.min.js --source-map "includeSources;url=example.min.js.map"' v5.7.0.
                        sourceMapContent = JSON.stringify({
                            version: 3,
                            names: [
                                'mulWithOffset',
                                'param1',
                                'param2',
                                'offset',
                                'intermediate',
                                'result',
                                'undefined'
                            ],
                            sources: [
                                'example.js'
                            ],
                            sourcesContent: [
                                originalContent
                            ],
                            mappings: 'AACA,SAASA,cAAcC,EAAQC,EAAQC,GACrC,MAAMC,EAAeH,EAASC,EAC9B,MAAMG,EAASD,EACf,GAAID,IAAWG,UAAW,CACxB,MAAMF,EAAeC,EAASF,EAC9B,OAAOC,CACT,CACA,OAAOC,CACT'
                        });
                        scriptContent = 'function mulWithOffset(n,t,e){const f=n*t;const u=f;if(e!==undefined){const n=u+e;return n}return u}';
                        return [
                            4,
                            backend.addScript(target, {
                                url: 'file:///tmp/bundle.js',
                                content: scriptContent
                            }, {
                                url: sourceMapUrl,
                                content: sourceMapContent
                            })
                        ];
                    case 1:
                        script = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('has the right mapping on a function scope without shadowing', /*#__PURE__*/ _async_to_generator(function() {
            var location, mapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        location = script.rawLocation(0, 30); // Beginning of function scope.
                        assert.exists(location);
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.allVariablesAtPosition(location)
                        ];
                    case 1:
                        mapping = _state.sent();
                        assert.strictEqual(mapping.get('param1'), 'n');
                        assert.strictEqual(mapping.get('param2'), 't');
                        assert.strictEqual(mapping.get('offset'), 'e');
                        assert.strictEqual(mapping.get('intermediate'), 'f');
                        assert.strictEqual(mapping.get('result'), 'u');
                        return [
                            2
                        ];
                }
            });
        }));
        it('has the right mapping in a block scope with shadowing in the authored code', /*#__PURE__*/ _async_to_generator(function() {
            var location, mapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        location = script.rawLocation(0, 70); // Beginning of block scope.
                        assert.exists(location);
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.allVariablesAtPosition(location)
                        ];
                    case 1:
                        mapping = _state.sent();
                        // Block scope {intermediate} shadows function scope {intermediate}.
                        assert.strictEqual(mapping.get('intermediate'), 'n');
                        return [
                            2
                        ];
                }
            });
        }));
        it('has the right mapping in a block scope with shadowing in the compiled code', /*#__PURE__*/ _async_to_generator(function() {
            var location, mapping;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        location = script.rawLocation(0, 70); // Beginning of block scope.
                        assert.exists(location);
                        return [
                            4,
                            _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.allVariablesAtPosition(location)
                        ];
                    case 1:
                        mapping = _state.sent();
                        assert.isNull(mapping.get('param1'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
function getIdentifiersFromScopeDescriptor(source, scopeDescriptor) {
    var bound = new Map();
    var free = new Map();
    var current = 0;
    while(current < scopeDescriptor.length){
        while(current < scopeDescriptor.length){
            if (scopeDescriptor[current] === 'B' || scopeDescriptor[current] === 'F') {
                break;
            }
            current++;
        }
        if (current >= scopeDescriptor.length) {
            break;
        }
        var kind = scopeDescriptor[current];
        var start = current;
        var end = start + 1;
        while(end < scopeDescriptor.length && scopeDescriptor[end] === kind){
            end++;
        }
        if (kind === 'B') {
            addPosition(bound, start, end);
        } else {
            console.assert(kind === 'F');
            addPosition(free, start, end);
        }
        current = end + 1;
    }
    return {
        bound: _to_consumable_array(bound.values()),
        free: _to_consumable_array(free.values())
    };
    function addPosition(collection, start, end) {
        var name = source.substring(start, end);
        var id = collection.get(name);
        if (!id) {
            id = new _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.IdentifierPositions(name);
            collection.set(name, id);
        }
        id.addPosition(0, start);
    }
} //# sourceMappingURL=NamesResolver.test.js.map


}),

}]);