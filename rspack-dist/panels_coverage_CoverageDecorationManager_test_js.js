"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageDecorationManager_test_js"], {
"./panels/coverage/CoverageDecorationManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _coverage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coverage.js */ "./panels/coverage/coverage.js");
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










var CoverageDecorationManager = _coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.CoverageDecorationManager;
/** Test helper that returns the "identity" line ranges for any given string */ function lineRangesForContent(content) {
    var ranges = [];
    var text = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.Text.Text(content);
    for(var i = 0; i < text.lineCount(); ++i){
        var line = text.lineAt(i);
        ranges.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(i, 0, i, line.length));
    }
    return ranges;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('CoverageDeocrationManager', function() {
    var target;
    var backend;
    var debuggerBinding;
    var workspace;
    var cssBinding;
    var coverageModel;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var targetManager, resourceMapping;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_6__.MockProtocolBackend();
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance({
                        forceNew: true
                    });
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
                    resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
                    debuggerBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        resourceMapping: resourceMapping,
                        targetManager: targetManager
                    });
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
                        forceNew: true,
                        debuggerWorkspaceBinding: debuggerBinding
                    });
                    cssBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
                        forceNew: true,
                        resourceMapping: resourceMapping,
                        targetManager: targetManager
                    });
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    // Since we wanna mock 'usageForRange' we stub the whole instance. Otherwise we'd use half
                    // a stub and half the real thing.
                    coverageModel = sinon.createStubInstance(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageModel.CoverageModel);
                    // Wait for the resource tree model to load; otherwise, our uiSourceCodes could be asynchronously
                    // invalidated during the test.
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getInitializedResourceTreeModel)(target)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    var URL = 'http://example.com/index.js';
    describe('usageByLine (raw)', function() {
        it('marks lines as "unknown" coverge status if no coverage info is available', /*#__PURE__*/ _async_to_generator(function() {
            var uiSourceCode, manager, usage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, {
                                url: URL,
                                content: 'function foo(a,b){return a+b;}'
                            }, null)
                        ];
                    case 1:
                        _state.sent();
                        uiSourceCode = workspace.uiSourceCodeForURL(URL);
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            uiSourceCode.requestContentData()
                        ];
                    case 2:
                        _state.sent();
                        manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
                        return [
                            4,
                            manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()))
                        ];
                    case 3:
                        usage = _state.sent();
                        assert.deepEqual(usage, [
                            undefined
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('marks lines as covered if coverage info says so', /*#__PURE__*/ _async_to_generator(function() {
            var uiSourceCode, manager, usage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, {
                                url: URL,
                                content: 'function foo(a,b){return a+b;}'
                            }, null)
                        ];
                    case 1:
                        _state.sent();
                        uiSourceCode = workspace.uiSourceCodeForURL(URL);
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            uiSourceCode.requestContentData()
                        ];
                    case 2:
                        _state.sent();
                        coverageModel.usageForRange.returns(true);
                        manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
                        return [
                            4,
                            manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()))
                        ];
                    case 3:
                        usage = _state.sent();
                        assert.deepEqual(usage, [
                            true
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('usageByLine (formatted)', function() {
        it('marks lines as covered if coverage info says so', /*#__PURE__*/ _async_to_generator(function() {
            var scriptContent, script, uiSourceCode, manager, lineRanges, usage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        scriptContent = 'function mulWithOffset(n,t,e){const f=n*t;const u=f;if(e!==undefined){const n=u+e;return n}return u}';
                        return [
                            4,
                            backend.addScript(target, {
                                url: URL,
                                content: scriptContent
                            }, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = workspace.uiSourceCodeForURL(URL);
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            uiSourceCode.requestContentData()
                        ];
                    case 2:
                        _state.sent();
                        coverageModel.usageForRange.callsFake(function(contentProvider, startOffset, endOffset) {
                            assert.strictEqual(contentProvider, script);
                            // Everything is covered except the body of the `if`.
                            return endOffset <= 70 || startOffset > 90;
                        });
                        manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
                        // clang-format off
                        // Simulate editor pretty-printing `script`.
                        lineRanges = [
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 0, 0, 30),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 30, 0, 42),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 42, 0, 52),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 52, 0, 70),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 70, 0, 82),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 82, 0, 90),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 90, 0, 91),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 91, 0, 99),
                            new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(0, 99, 0, 100)
                        ];
                        return [
                            4,
                            manager.usageByLine(uiSourceCode, lineRanges)
                        ];
                    case 3:
                        usage = _state.sent();
                        assert.deepEqual(usage, [
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            false,
                            true,
                            true
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('usageByLine (sourcemap)', function() {
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
        it('marks lines as covered if coverage info says so', /*#__PURE__*/ _async_to_generator(function() {
            var uiSourceCode, manager, usage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        uiSourceCode = workspace.uiSourceCodeForURL('file:///tmp/example.js');
                        assert.exists(uiSourceCode);
                        return [
                            4,
                            uiSourceCode.requestContentData()
                        ];
                    case 1:
                        _state.sent();
                        coverageModel.usageForRange.callsFake(function(contentProvider, startOffset, endOffset) {
                            assert.strictEqual(contentProvider, script);
                            // Everything is covered except the body of the `if`.
                            return endOffset < 70 || startOffset > 90;
                        });
                        manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
                        return [
                            4,
                            manager.usageByLine(uiSourceCode, lineRangesForContent(uiSourceCode.content()))
                        ];
                    case 2:
                        usage = _state.sent();
                        assert.deepEqual(usage, [
                            undefined,
                            true,
                            true,
                            true,
                            true,
                            false,
                            false,
                            undefined,
                            true,
                            undefined,
                            undefined
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('sets the "decorationData" on all existing UISourceCodes', function() {
        var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
            url: URL,
            mimeType: 'text/javascript'
        }).uiSourceCode;
        var manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        assert.strictEqual(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType), manager);
    });
    it('sets the "decorationData" on newly added UISourceCodes (after the manager already exists)', function() {
        var manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
            url: URL,
            mimeType: 'text/javascript'
        }).uiSourceCode;
        assert.strictEqual(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType), manager);
    });
    it('does not update the "decorationData" on newly added UISourceCodes after being disposed', function() {
        var manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
        manager.dispose();
        var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
            url: URL,
            mimeType: 'text/javascript'
        }).uiSourceCode;
        assert.isUndefined(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType));
    });
    describe('reset', function() {
        it('resets the "decorationData" on all existing UISourceCodes to "undefined"', function() {
            var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({
                url: URL,
                mimeType: 'text/javascript'
            }).uiSourceCode;
            var manager = new CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding);
            manager.reset();
            assert.isUndefined(uiSourceCode.getDecorationData(_coverage_js__WEBPACK_IMPORTED_MODULE_9__.CoverageDecorationManager.decoratorType));
        });
    });
}); //# sourceMappingURL=CoverageDecorationManager.test.js.map


}),
"./panels/coverage/coverage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageDecorationManager: function() { return /* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__; },
  CoverageListView: function() { return /* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__; },
  CoverageModel: function() { return /* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  CoverageView: function() { return /* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=coverage.js.map


}),

}]);