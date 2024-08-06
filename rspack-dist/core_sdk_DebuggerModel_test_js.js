"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_DebuggerModel_test_js"], {
"./core/sdk/DebuggerModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockScopeChain.js */ "./testing/MockScopeChain.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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







var SCRIPT_ID_ONE = '1';
var SCRIPT_ID_TWO = '2';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('DebuggerModel', function() {
    describe('breakpoint activation', function() {
        beforeEach(function() {
            // Dummy handlers for unblocking target suspension.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setAsyncCallStackDepth', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.disable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.disable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('CSS.disable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.disable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowGridOverlays', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowFlexOverlays', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowScrollSnapOverlays', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowContainerQueryOverlays', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowIsolatedElements', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.setShowViewportSizeOnResize', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Target.setAutoAttach', function() {
                return {};
            });
            // Dummy handlers for unblocking target resumption.
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.enable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setPauseOnExceptions', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.enable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Overlay.enable', function() {
                return {};
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('CSS.enable', function() {
                return {};
            });
        });
        it('deactivates breakpoints on construction with inactive breakpoints', /*#__PURE__*/ _async_to_generator(function() {
            var breakpointsDeactivated;
            return _ts_generator(this, function(_state) {
                breakpointsDeactivated = false;
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', function(request) {
                    if (request.active === false) {
                        breakpointsDeactivated = true;
                    }
                    return {};
                });
                _common_common_js__WEBPACK_IMPORTED_MODULE_5__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
                (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                assert.isTrue(breakpointsDeactivated);
                return [
                    2
                ];
            });
        }));
        it('deactivates breakpoints for suspended target', /*#__PURE__*/ _async_to_generator(function() {
            var breakpointsDeactivated, target;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        breakpointsDeactivated = false;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', function(request) {
                            if (request.active === false) {
                                breakpointsDeactivated = true;
                            }
                            return {};
                        });
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                        return [
                            4,
                            target.suspend()
                        ];
                    case 1:
                        _state.sent();
                        // Deactivate breakpoints while suspended.
                        _common_common_js__WEBPACK_IMPORTED_MODULE_5__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
                        // Verify that the backend received the message.
                        assert.isTrue(breakpointsDeactivated);
                        // Resume and verify that the setBreakpointsActive(false) is called again when the target resumes.
                        // This is only needed for older backends (before crbug.com/1357046 is fixed).
                        breakpointsDeactivated = false;
                        return [
                            4,
                            target.resume()
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(breakpointsDeactivated);
                        return [
                            2
                        ];
                }
            });
        }));
        it('activates breakpoints for suspended target', /*#__PURE__*/ _async_to_generator(function() {
            var breakpointsDeactivated, breakpointsActivated, target;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        breakpointsDeactivated = false;
                        breakpointsActivated = false;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setBreakpointsActive', function(request) {
                            if (request.active) {
                                breakpointsActivated = true;
                            } else {
                                breakpointsDeactivated = true;
                            }
                            return {};
                        });
                        // Deactivate breakpoints befroe the target is created.
                        _common_common_js__WEBPACK_IMPORTED_MODULE_5__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(false);
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                        assert.isTrue(breakpointsDeactivated);
                        return [
                            4,
                            target.suspend()
                        ];
                    case 1:
                        _state.sent();
                        // Activate breakpoints while suspended.
                        _common_common_js__WEBPACK_IMPORTED_MODULE_5__.Settings.Settings.instance().moduleSetting('breakpoints-active').set(true);
                        // Verify that the backend received the message.
                        assert.isTrue(breakpointsActivated);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('createRawLocationFromURL', function() {
        it('yields correct location in the presence of multiple scripts with the same URL', /*#__PURE__*/ _async_to_generator(function() {
            var _debuggerModel_createRawLocationByURL, _debuggerModel_createRawLocationByURL1, target, debuggerModel, url;
            return _ts_generator(this, function(_state) {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.DebuggerModel);
                url = 'http://localhost/index.html';
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                    scriptId: SCRIPT_ID_ONE,
                    url: url,
                    startLine: 0,
                    startColumn: 0,
                    endLine: 1,
                    endColumn: 10,
                    executionContextId: 1,
                    hash: '',
                    isLiveEdit: false,
                    sourceMapURL: undefined,
                    hasSourceURL: false,
                    length: 10
                });
                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                    scriptId: SCRIPT_ID_TWO,
                    url: url,
                    startLine: 20,
                    startColumn: 0,
                    endLine: 21,
                    endColumn: 10,
                    executionContextId: 1,
                    hash: '',
                    isLiveEdit: false,
                    sourceMapURL: undefined,
                    hasSourceURL: false,
                    length: 10
                });
                assert.strictEqual(debuggerModel === null || debuggerModel === void 0 ? void 0 : (_debuggerModel_createRawLocationByURL = debuggerModel.createRawLocationByURL(url, 0)) === null || _debuggerModel_createRawLocationByURL === void 0 ? void 0 : _debuggerModel_createRawLocationByURL.scriptId, SCRIPT_ID_ONE);
                assert.strictEqual(debuggerModel === null || debuggerModel === void 0 ? void 0 : (_debuggerModel_createRawLocationByURL1 = debuggerModel.createRawLocationByURL(url, 20, 1)) === null || _debuggerModel_createRawLocationByURL1 === void 0 ? void 0 : _debuggerModel_createRawLocationByURL1.scriptId, SCRIPT_ID_TWO);
                assert.strictEqual(debuggerModel === null || debuggerModel === void 0 ? void 0 : debuggerModel.createRawLocationByURL(url, 5, 5), null);
                return [
                    2
                ];
            });
        }));
    });
    var breakpointId1 = 'fs.js:1';
    var breakpointId2 = 'unsupported';
    describe('setBreakpointByURL', function() {
        it('correctly sets only a single breakpoint in Node.js internal scripts', /*#__PURE__*/ _async_to_generator(function() {
            var target, model, breakpointId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', function(param) {
                            var url = param.url;
                            if (url === 'fs.js') {
                                return {
                                    breakpointId: breakpointId1,
                                    locations: [],
                                    getError: function getError() {
                                        return undefined;
                                    }
                                };
                            }
                            return {
                                breakpointId: breakpointId2,
                                locations: [],
                                getError: function getError() {
                                    return undefined;
                                }
                            };
                        });
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                        target.markAsNodeJSForTest();
                        model = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.DebuggerModel(target);
                        return [
                            4,
                            model.setBreakpointByURL('fs.js', 1)
                        ];
                    case 1:
                        breakpointId = _state.sent().breakpointId;
                        assert.strictEqual(breakpointId, breakpointId1);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('scriptsForSourceURL', function() {
        it('returns the latest script at the front of the result for scripts with the same URL', function() {
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
            var url = 'http://localhost/index.html';
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_ONE,
                url: url,
                startLine: 0,
                startColumn: 0,
                endLine: 1,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: SCRIPT_ID_TWO,
                url: url,
                startLine: 20,
                startColumn: 0,
                endLine: 21,
                endColumn: 10,
                executionContextId: 1,
                hash: '',
                isLiveEdit: false,
                sourceMapURL: undefined,
                hasSourceURL: false,
                length: 10
            });
            var debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.DebuggerModel);
            var scripts = (debuggerModel === null || debuggerModel === void 0 ? void 0 : debuggerModel.scriptsForSourceURL(url)) || [];
            assert.strictEqual(scripts[0].scriptId, SCRIPT_ID_TWO);
            assert.strictEqual(scripts[1].scriptId, SCRIPT_ID_ONE);
        });
    });
    describe('Scope', function() {
        it('Scope.typeName covers every enum value', /*#__PURE__*/ _async_to_generator(function() {
            var target, debuggerModel, scriptUrl, script, scopeTypes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, scopeType, payload, callFrame, scope;
            return _ts_generator(this, function(_state) {
                target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
                debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.DebuggerModel);
                scriptUrl = 'https://script-host/script.js';
                script = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.Script.Script(debuggerModel, SCRIPT_ID_ONE, scriptUrl, 0, 0, 0, 0, 0, '', false, false, undefined, false, 0, null, null, null, null, null, null);
                scopeTypes = [
                    "global" /* Protocol.Debugger.ScopeType.Global */ ,
                    "local" /* Protocol.Debugger.ScopeType.Local */ ,
                    "with" /* Protocol.Debugger.ScopeType.With */ ,
                    "closure" /* Protocol.Debugger.ScopeType.Closure */ ,
                    "catch" /* Protocol.Debugger.ScopeType.Catch */ ,
                    "block" /* Protocol.Debugger.ScopeType.Block */ ,
                    "script" /* Protocol.Debugger.ScopeType.Script */ ,
                    "eval" /* Protocol.Debugger.ScopeType.Eval */ ,
                    "module" /* Protocol.Debugger.ScopeType.Module */ ,
                    "wasm-expression-stack" /* Protocol.Debugger.ScopeType.WasmExpressionStack */ 
                ];
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(_iterator = scopeTypes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        scopeType = _step.value;
                        payload = {
                            callFrameId: '0',
                            functionName: 'test',
                            functionLocation: undefined,
                            location: {
                                scriptId: SCRIPT_ID_ONE,
                                lineNumber: 0,
                                columnNumber: 0
                            },
                            url: 'test-url',
                            scopeChain: [
                                {
                                    type: scopeType,
                                    object: {
                                        type: 'object'
                                    }
                                }
                            ],
                            this: {
                                type: 'object'
                            },
                            returnValue: undefined,
                            canBeRestarted: false
                        };
                        callFrame = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.CallFrame(debuggerModel, script, payload, 0);
                        scope = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.Scope(callFrame, 0);
                        assert.notEqual('', scope.typeName());
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
                return [
                    2
                ];
            });
        }));
    });
    describe('pause', function() {
        var target;
        var backend;
        var debuggerWorkspaceBinding;
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                id: 'main',
                name: 'main',
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_6__.Target.Type.Frame
            });
            var targetManager = target.targetManager();
            var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
            var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.ResourceMapping.ResourceMapping(targetManager, workspace);
            debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                forceNew: false,
                resourceMapping: resourceMapping,
                targetManager: targetManager
            });
            backend = new _testing_MockScopeChain_js__WEBPACK_IMPORTED_MODULE_4__.MockProtocolBackend();
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_0__.IgnoreListManager.IgnoreListManager.instance({
                forceNew: false,
                debuggerWorkspaceBinding: debuggerWorkspaceBinding
            });
        });
        it('with empty call frame list will invoke plain step-into', /*#__PURE__*/ _async_to_generator(function() {
            var stepIntoRequestPromise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stepIntoRequestPromise = new Promise(function(resolve) {
                            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.stepInto', function() {
                                resolve();
                                return {};
                            });
                        });
                        backend.dispatchDebuggerPauseWithNoCallFrames(target, "other" /* Protocol.Debugger.PausedEventReason.Other */ );
                        return [
                            4,
                            stepIntoRequestPromise
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
});
describe('DebuggerModel', function() {
    describe('sortAndMergeRanges', function() {
        var createRange = function createRange(scriptId, startLine, startColumn, endLine, endColumn) {
            return {
                scriptId: scriptId,
                start: {
                    lineNumber: startLine,
                    columnNumber: startColumn
                },
                end: {
                    lineNumber: endLine,
                    columnNumber: endColumn
                }
            };
        };
        var sortAndMerge = function sortAndMerge(locationRange) {
            return _sdk_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerModel.sortAndMergeRanges(locationRange.concat());
        };
        var assertIsMaximallyMerged = function assertIsMaximallyMerged(locationRange) {
            for(var i = 1; i < locationRange.length; ++i){
                var prev = locationRange[i - 1];
                var curr = locationRange[i];
                assert.isTrue(prev.scriptId <= curr.scriptId);
                if (prev.scriptId === curr.scriptId) {
                    assert.isTrue(prev.end.lineNumber <= curr.start.lineNumber);
                    if (prev.end.lineNumber === curr.start.lineNumber) {
                        assert.isTrue(prev.end.columnNumber <= curr.start.columnNumber);
                    }
                }
            }
        };
        it('can be reduced if equal', function() {
            var testRange = createRange(SCRIPT_ID_ONE, 0, 3, 3, 3);
            var locationRangesToBeReduced = [
                testRange,
                testRange
            ];
            var reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, [
                testRange
            ]);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (multiple ranges)', function() {
            var locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 3, 3, 3),
                createRange(SCRIPT_ID_ONE, 5, 3, 10, 10),
                createRange(SCRIPT_ID_TWO, 5, 4, 10, 10)
            ];
            var locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 10, 10),
                locationRangesToBeReduced[3]
            ];
            var reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (same start, different end)', function() {
            var locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 5, 3, 3)
            ];
            var locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3)
            ];
            var reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (different start, same end)', function() {
            var locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3),
                createRange(SCRIPT_ID_ONE, 0, 5, 5, 3)
            ];
            var locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3)
            ];
            var reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
        it('can be reduced if overlapping (start == other.end)', function() {
            var locationRangesToBeReduced = [
                createRange(SCRIPT_ID_ONE, 0, 3, 5, 3),
                createRange(SCRIPT_ID_ONE, 5, 3, 10, 3)
            ];
            var locationRangesExpected = [
                createRange(SCRIPT_ID_ONE, 0, 3, 10, 3)
            ];
            var reduced = sortAndMerge(locationRangesToBeReduced);
            assert.deepEqual(reduced, locationRangesExpected);
            assertIsMaximallyMerged(reduced);
        });
    });
}); //# sourceMappingURL=DebuggerModel.test.js.map


}),

}]);