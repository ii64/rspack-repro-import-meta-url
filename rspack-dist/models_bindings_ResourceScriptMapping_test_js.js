"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_ResourceScriptMapping_test_js"], {
"./models/bindings/ResourceScriptMapping.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
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







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceScriptMapping', function() {
    var url = 'http://localhost/example.js';
    var target;
    var backend;
    var resourceScriptMapping;
    var contentWithSourceUrl = 'console.log("Hi!");\n  debugger;\n  console.log("There!");\n//# sourceURL=test.js';
    var contentWithoutSourceUrl = 'console.log("Hi!");\n  debugger;\n  console.log("There!");';
    beforeEach(function() {
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        var resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
        var debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({
            forceNew: true,
            debuggerWorkspaceBinding: debuggerWorkspaceBinding
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_3__.MockProtocolBackend();
        resourceScriptMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceScriptMapping.ResourceScriptMapping(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel), workspace, debuggerWorkspaceBinding);
    });
    describe('uiLocationRangeToRawLocationRanges', function() {
        it('maps UI location ranges on first line in scripts without sourceURL', /*#__PURE__*/ _async_to_generator(function() {
            var script, uiSourceCode, rawLocationRanges;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, {
                                content: contentWithoutSourceUrl,
                                url: url,
                                hasSourceURL: false
                            }, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 1, 0, 4));
                        assert.exists(rawLocationRanges);
                        assert.lengthOf(rawLocationRanges, 1);
                        assert.strictEqual(rawLocationRanges[0].start.lineNumber, 0);
                        assert.strictEqual(rawLocationRanges[0].start.columnNumber, 1);
                        assert.strictEqual(rawLocationRanges[0].end.lineNumber, 0);
                        assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps UI location ranges in inline scripts without sourceURL', /*#__PURE__*/ _async_to_generator(function() {
            var script, uiSourceCode, rawLocationRanges;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, {
                                content: contentWithoutSourceUrl,
                                url: url,
                                hasSourceURL: false
                            }, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(1, 2, 2, 4));
                        assert.exists(rawLocationRanges);
                        assert.lengthOf(rawLocationRanges, 1);
                        assert.strictEqual(rawLocationRanges[0].start.lineNumber, 1);
                        assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
                        assert.strictEqual(rawLocationRanges[0].end.lineNumber, 2);
                        assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
                        return [
                            2
                        ];
                }
            });
        }));
        it('maps UI locations in inline scripts with sourceURL', /*#__PURE__*/ _async_to_generator(function() {
            var script, uiSourceCode, rawLocationRanges;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            backend.addScript(target, {
                                content: contentWithSourceUrl,
                                url: url,
                                hasSourceURL: true
                            }, null)
                        ];
                    case 1:
                        script = _state.sent();
                        uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
                        assert.exists(uiSourceCode);
                        rawLocationRanges = resourceScriptMapping.uiLocationRangeToRawLocationRanges(uiSourceCode, new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(4, 2, 4, 4));
                        assert.exists(rawLocationRanges);
                        assert.lengthOf(rawLocationRanges, 1);
                        assert.strictEqual(rawLocationRanges[0].start.lineNumber, 4);
                        assert.strictEqual(rawLocationRanges[0].start.columnNumber, 2);
                        assert.strictEqual(rawLocationRanges[0].end.lineNumber, 4);
                        assert.strictEqual(rawLocationRanges[0].end.columnNumber, 4);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('does not create a mapping UISourceCode for conditional breakpoint scripts', /*#__PURE__*/ _async_to_generator(function() {
        var content, script, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    content = 'x === 5\n\n//# sourceURL=debugger://breakpoint';
                    return [
                        4,
                        backend.addScript(target, {
                            content: content,
                            url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.COND_BREAKPOINT_SOURCE_URL,
                            hasSourceURL: true
                        }, null)
                    ];
                case 1:
                    script = _state.sent();
                    assert.isTrue(script.isBreakpointCondition);
                    uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
                    assert.isNull(uiSourceCode);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not create a mapping UISourceCode for logpoint scripts', /*#__PURE__*/ _async_to_generator(function() {
        var content, script, uiSourceCode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    content = 'console.log(x)\n\n//# sourceURL=debugger://logpoint';
                    return [
                        4,
                        backend.addScript(target, {
                            content: content,
                            url: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.LOGPOINT_SOURCE_URL,
                            hasSourceURL: true
                        }, null)
                    ];
                case 1:
                    script = _state.sent();
                    assert.isTrue(script.isBreakpointCondition);
                    uiSourceCode = resourceScriptMapping.uiSourceCodeForScript(script);
                    assert.isNull(uiSourceCode);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ResourceScriptMapping.test.js.map


}),

}]);