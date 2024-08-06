"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_DebuggerTestRunner_js"], {
"./legacy_test_runner/sources_test_runner/DebuggerTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  captureStackTrace: function() { return captureStackTrace; },
  captureStackTraceIntoString: function() { return captureStackTraceIntoString; },
  checkRawLocation: function() { return checkRawLocation; },
  checkUILocation: function() { return checkUILocation; },
  completeDebuggerTest: function() { return completeDebuggerTest; },
  createNewBreakpoint: function() { return createNewBreakpoint; },
  debuggerPlugin: function() { return debuggerPlugin; },
  dumpScopeVariablesSidebarPane: function() { return dumpScopeVariablesSidebarPane; },
  dumpSectionsWithIndent: function() { return dumpSectionsWithIndent; },
  dumpSourceFrameContents: function() { return dumpSourceFrameContents; },
  evaluateOnCurrentCallFrame: function() { return evaluateOnCurrentCallFrame; },
  expandProperties: function() { return expandProperties; },
  expandProperty: function() { return expandProperty; },
  expandScopeVariablesSidebarPane: function() { return expandScopeVariablesSidebarPane; },
  findChildPropertyTreeElement: function() { return findChildPropertyTreeElement; },
  pausedScript: function() { return pausedScript; },
  queryScripts: function() { return queryScripts; },
  removeBreakpoint: function() { return removeBreakpoint; },
  resumeExecution: function() { return resumeExecution; },
  resumedScript: function() { return resumedScript; },
  runAsyncCallStacksTest: function() { return runAsyncCallStacksTest; },
  runDebuggerTestSuite: function() { return runDebuggerTestSuite; },
  runTestFunction: function() { return runTestFunction; },
  runTestFunctionAndWaitUntilPaused: function() { return runTestFunctionAndWaitUntilPaused; },
  runTestFunctionAndWaitUntilPausedPromise: function() { return runTestFunctionAndWaitUntilPausedPromise; },
  scopeChainSections: function() { return scopeChainSections; },
  selectThread: function() { return selectThread; },
  setBreakpoint: function() { return setBreakpoint; },
  setEventListenerBreakpoint: function() { return setEventListenerBreakpoint; },
  setQuiet: function() { return setQuiet; },
  showScriptSource: function() { return showScriptSource; },
  showScriptSourcePromise: function() { return showScriptSourcePromise; },
  showUISourceCode: function() { return showUISourceCode; },
  showUISourceCodePromise: function() { return showUISourceCodePromise; },
  startDebuggerTest: function() { return startDebuggerTest; },
  startDebuggerTestPromise: function() { return startDebuggerTestPromise; },
  stepInto: function() { return stepInto; },
  stepIntoAsync: function() { return stepIntoAsync; },
  stepOut: function() { return stepOut; },
  stepOver: function() { return stepOver; },
  toggleBreakpoint: function() { return toggleBreakpoint; },
  togglePause: function() { return togglePause; },
  waitForExecutionContextInTarget: function() { return waitForExecutionContextInTarget; },
  waitForScriptSource: function() { return waitForScriptSource; },
  waitUntilPaused: function() { return waitUntilPaused; },
  waitUntilPausedAndDumpStackAndResume: function() { return waitUntilPausedAndDumpStackAndResume; },
  waitUntilPausedAndPerformSteppingActions: function() { return waitUntilPausedAndPerformSteppingActions; },
  waitUntilPausedNextTime: function() { return waitUntilPausedNextTime; },
  waitUntilPausedPromise: function() { return waitUntilPausedPromise; },
  waitUntilResumed: function() { return waitUntilResumed; },
  waitUntilResumedPromise: function() { return waitUntilResumedPromise; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_browser_debugger_browser_debugger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/browser_debugger/browser_debugger.js */ "./panels/browser_debugger/browser_debugger.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
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








var quiet;
var startDebuggerTest = function() {
    var _ref = _async_to_generator(function(callback, q) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    console.assert(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.debuggerEnabled(), 'Debugger has to be enabled');
                    if (q !== undefined) {
                        quiet = q;
                    }
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.showPanel('sources')
                    ];
                case 1:
                    _state.sent();
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel.prototype, 'pausedScript', pausedScript, true);
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel.prototype, 'resumedScript', resumedScript, true);
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback)();
                    return [
                        2
                    ];
            }
        });
    });
    return function startDebuggerTest(callback, q) {
        return _ref.apply(this, arguments);
    };
}();
var startDebuggerTestPromise = function startDebuggerTestPromise(quiet) {
    var cb;
    var p = new Promise(function(fullfill) {
        cb = fullfill;
    });
    startDebuggerTest(cb, quiet);
    return p;
};
var completeDebuggerTest = function completeDebuggerTest() {
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('breakpoints-active').set(true);
    resumeExecution(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.completeTest.bind(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner));
};
window.addEventListener('unhandledrejection', function(e) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('FAIL: Uncaught exception in promise: ' + e + ' ' + e.stack);
    completeDebuggerTest();
});
var runDebuggerTestSuite = function runDebuggerTestSuite(testSuite) {
    var testSuiteTests = testSuite.slice();
    function runner() {
        if (!testSuiteTests.length) {
            completeDebuggerTest();
            return;
        }
        var nextTest = testSuiteTests.shift();
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Running: ' + /function\s([^(]*)/.exec(nextTest)[1]);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(nextTest)(runner, runner);
    }
    startDebuggerTest(runner);
};
var runTestFunction = function runTestFunction() {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.evaluateInPageAnonymously('scheduleTestFunction()');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Set timer for test function.');
};
var runTestFunctionAndWaitUntilPaused = function runTestFunctionAndWaitUntilPaused(callback) {
    runTestFunction();
    waitUntilPaused(callback);
};
var runTestFunctionAndWaitUntilPausedPromise = function runTestFunctionAndWaitUntilPausedPromise() {
    return new Promise(runTestFunctionAndWaitUntilPaused);
};
var runAsyncCallStacksTest = function runAsyncCallStacksTest(totalDebuggerStatements, maxAsyncCallStackDepth) {
    var defaultMaxAsyncCallStackDepth = 32;
    setQuiet(true);
    startDebuggerTest(step1);
    function step1() {
        return _step1.apply(this, arguments);
    }
    function _step1() {
        _step1 = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.DebuggerAgent.setAsyncCallStackDepth(maxAsyncCallStackDepth || defaultMaxAsyncCallStackDepth)
                        ];
                    case 1:
                        _state.sent();
                        runTestFunctionAndWaitUntilPaused(didPause);
                        return [
                            2
                        ];
                }
            });
        });
        return _step1.apply(this, arguments);
    }
    var step = 0;
    var callStacksOutput = [];
    function didPause(callFrames, reason, breakpointIds, asyncStackTrace) {
        return _didPause.apply(this, arguments);
    }
    function _didPause() {
        _didPause = _async_to_generator(function(callFrames, reason, breakpointIds, asyncStackTrace) {
            var _;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        ++step;
                        _ = callStacksOutput.push;
                        return [
                            4,
                            captureStackTraceIntoString(callFrames, asyncStackTrace)
                        ];
                    case 1:
                        _.apply(callStacksOutput, [
                            _state.sent() + '\n'
                        ]);
                        if (step < totalDebuggerStatements) {
                            resumeExecution(waitUntilPaused.bind(undefined, didPause));
                        } else {
                            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Captured call stacks in no particular order:');
                            callStacksOutput.sort();
                            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResults(callStacksOutput);
                            completeDebuggerTest();
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return _didPause.apply(this, arguments);
    }
};
var waitUntilPausedCallback;
var waitUntilResumedCallback;
var pausedScriptArguments;
var waitUntilPausedNextTime = function waitUntilPausedNextTime(callback) {
    waitUntilPausedCallback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
};
var waitUntilPaused = function waitUntilPaused(callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
    if (pausedScriptArguments) {
        callback.apply(callback, pausedScriptArguments);
    } else {
        waitUntilPausedCallback = callback;
    }
};
var waitUntilPausedPromise = function waitUntilPausedPromise() {
    return new Promise(function(resolve) {
        return waitUntilPaused(resolve);
    });
};
var waitUntilResumed = function waitUntilResumed(callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
    if (!pausedScriptArguments) {
        callback();
    } else {
        waitUntilResumedCallback = callback;
    }
};
var waitUntilResumedPromise = function waitUntilResumedPromise() {
    return new Promise(function(resolve) {
        return waitUntilResumed(resolve);
    });
};
var resumeExecution = function resumeExecution(callback) {
    if (_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().paused()) {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().togglePause();
    }
    waitUntilResumed(callback);
};
var waitUntilPausedAndDumpStackAndResume = function waitUntilPausedAndDumpStackAndResume(callback, options) {
    waitUntilPaused(paused);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.prototype, 'updateDebuggerButtonsAndStatusForTest', setStatus);
    var caption;
    var callFrames;
    var asyncStackTrace;
    function setStatus() {
        var statusElement = this.element.querySelector('.paused-message');
        caption = statusElement.deepTextContent();
        if (callFrames) {
            step1();
        }
    }
    function paused(frames, reason, breakpointIds, async) {
        return _paused.apply(this, arguments);
    }
    function _paused() {
        _paused = _async_to_generator(function(frames, reason, breakpointIds, async) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        callFrames = frames;
                        asyncStackTrace = async;
                        if (!(typeof caption === 'string')) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            step1()
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        return [
                            2
                        ];
                }
            });
        });
        return _paused.apply(this, arguments);
    }
    function step1() {
        return _step1.apply(this, arguments);
    }
    function _step1() {
        _step1 = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            captureStackTrace(callFrames, asyncStackTrace, options)
                        ];
                    case 1:
                        _state.sent();
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.clearSpecificInfoFromStackFrames(caption));
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(step2);
                        return [
                            2
                        ];
                }
            });
        });
        return _step1.apply(this, arguments);
    }
    function step2() {
        resumeExecution(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback));
    }
};
var stepOver = function stepOver() {
    queueMicrotask(function() {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepOver();
    });
};
var stepInto = function stepInto() {
    queueMicrotask(function() {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepInto();
    });
};
var stepIntoAsync = function stepIntoAsync() {
    queueMicrotask(function() {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepIntoAsync();
    });
};
var stepOut = function stepOut() {
    queueMicrotask(function() {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepOut();
    });
};
var togglePause = function togglePause() {
    queueMicrotask(function() {
        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().togglePause();
    });
};
var waitUntilPausedAndPerformSteppingActions = function waitUntilPausedAndPerformSteppingActions(actions, callback) {
    callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
    waitUntilPaused(didPause);
    function didPause(callFrames, reason, breakpointIds, asyncStackTrace) {
        return _didPause.apply(this, arguments);
    }
    function _didPause() {
        _didPause = _async_to_generator(function(callFrames, reason, breakpointIds, asyncStackTrace) {
            var action;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        action = actions.shift();
                        if (!(action === 'Print')) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            captureStackTrace(callFrames, asyncStackTrace)
                        ];
                    case 1:
                        _state.sent();
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('');
                        while(action === 'Print'){
                            action = actions.shift();
                        }
                        _state.label = 2;
                    case 2:
                        if (!action) {
                            callback();
                            return [
                                2
                            ];
                        }
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Executing ' + action + '...');
                        switch(action){
                            case 'StepInto':
                                stepInto();
                                break;
                            case 'StepOver':
                                stepOver();
                                break;
                            case 'StepOut':
                                stepOut();
                                break;
                            case 'Resume':
                                togglePause();
                                break;
                            default:
                                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('FAIL: Unknown action: ' + action);
                                callback();
                                return [
                                    2
                                ];
                        }
                        waitUntilResumed(actions.length ? waitUntilPaused.bind(undefined, didPause) : callback);
                        return [
                            2
                        ];
                }
            });
        });
        return _didPause.apply(this, arguments);
    }
};
var captureStackTrace = function() {
    var _ref = _async_to_generator(function(callFrames, asyncStackTrace, options) {
        var _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult;
                    return [
                        4,
                        captureStackTraceIntoString(callFrames, asyncStackTrace, options)
                    ];
                case 1:
                    _.apply(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    });
    return function captureStackTrace(callFrames, asyncStackTrace, options) {
        return _ref.apply(this, arguments);
    };
}();
var captureStackTraceIntoString = function() {
    var _ref = _async_to_generator(function(callFrames, asyncStackTrace, options) {
        var results, printed;
        function printCallFrames(callFrames, locationFunction, returnValueFunction) {
            return _printCallFrames.apply(this, arguments);
        }
        function _printCallFrames() {
            _printCallFrames = _async_to_generator(function(callFrames, locationFunction, returnValueFunction) {
                var printed, i, frame, location, script, uiLocation, isFramework, url, lineNumber, s, remainingFrames;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            printed = 0;
                            i = 0;
                            _state.label = 1;
                        case 1:
                            if (!(i < callFrames.length)) return [
                                3,
                                4
                            ];
                            frame = callFrames[i];
                            location = locationFunction.call(frame);
                            script = location.script();
                            return [
                                4,
                                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location)
                            ];
                        case 2:
                            uiLocation = _state.sent();
                            isFramework = uiLocation ? _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(uiLocation.uiSourceCode.url()) : false;
                            if (options.dropFrameworkCallFrames && isFramework) {
                                return [
                                    3,
                                    3
                                ];
                            }
                            url = void 0;
                            lineNumber = void 0;
                            if (uiLocation && uiLocation.uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Debugger) {
                                url = uiLocation.uiSourceCode.name();
                                lineNumber = uiLocation.lineNumber + 1;
                            } else {
                                url = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceUtils.displayNameForURL(script.sourceURL);
                                lineNumber = location.lineNumber + 1;
                            }
                            s = (isFramework ? '  * ' : '    ') + printed++ + ') ' + frame.functionName + ' (' + url + (options.dropLineNumbers ? '' : ':' + lineNumber) + ')';
                            s = s.replace(/scheduleTestFunction.+$/, 'scheduleTestFunction <omitted>');
                            results.push(s);
                            if (options.printReturnValue && returnValueFunction && returnValueFunction.call(frame)) {
                                results.push('       <return>: ' + returnValueFunction.call(frame).description);
                            }
                            if (frame.functionName === 'scheduleTestFunction') {
                                remainingFrames = callFrames.length - 1 - i;
                                if (remainingFrames) {
                                    results.push('    <... skipped remaining frames ...>');
                                }
                                return [
                                    3,
                                    4
                                ];
                            }
                            _state.label = 3;
                        case 3:
                            i++;
                            return [
                                3,
                                1
                            ];
                        case 4:
                            return [
                                2,
                                printed
                            ];
                    }
                });
            });
            return _printCallFrames.apply(this, arguments);
        }
        function runtimeCallFramePosition() {
            return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel, this.scriptId, this.lineNumber, this.columnNumber);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    results = [];
                    options = options || {};
                    results.push('Call stack:');
                    return [
                        4,
                        printCallFrames(callFrames, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.prototype.location, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.prototype.returnValue)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (!asyncStackTrace) return [
                        3,
                        4
                    ];
                    results.push('    [' + (asyncStackTrace.description || 'Async Call') + ']');
                    return [
                        4,
                        printCallFrames(asyncStackTrace.callFrames, runtimeCallFramePosition)
                    ];
                case 3:
                    printed = _state.sent();
                    if (!printed) {
                        results.pop();
                    }
                    asyncStackTrace = asyncStackTrace.parent;
                    return [
                        3,
                        2
                    ];
                case 4:
                    return [
                        2,
                        results.join('\n')
                    ];
            }
        });
    });
    return function captureStackTraceIntoString(callFrames, asyncStackTrace, options) {
        return _ref.apply(this, arguments);
    };
}();
var dumpSourceFrameContents = function dumpSourceFrameContents(sourceFrame) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('==Source frame contents start==');
    var baseDoc = sourceFrame.baseDoc;
    for(var i = 1; i <= baseDoc.lines; ++i){
        var text = baseDoc.line(i).text;
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(text);
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('==Source frame contents end==');
};
var pausedScript = function pausedScript(callFrames, reason, auxData, breakpointIds, asyncStackTrace) {
    if (!quiet) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Script execution paused.');
    }
    var debuggerModel = this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
    pausedScriptArguments = [
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.fromPayloadArray(debuggerModel, callFrames),
        reason,
        breakpointIds,
        asyncStackTrace,
        auxData
    ];
    if (waitUntilPausedCallback) {
        var callback = waitUntilPausedCallback;
        waitUntilPausedCallback = null;
        setTimeout(function() {
            return callback.apply(callback, pausedScriptArguments);
        });
    }
};
var resumedScript = function resumedScript() {
    if (!quiet) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Script execution resumed.');
    }
    pausedScriptArguments = null;
    if (waitUntilResumedCallback) {
        var callback = waitUntilResumedCallback;
        waitUntilResumedCallback = null;
        callback();
    }
};
var showUISourceCode = function showUISourceCode(uiSourceCode, callback) {
    var panel = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance();
    panel.showUISourceCode(uiSourceCode);
    var sourceFrame = panel.visibleView;
    if (sourceFrame.loaded) {
        callback(sourceFrame);
    } else {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(sourceFrame, 'setContent', callback && callback.bind(null, sourceFrame));
    }
};
var showUISourceCodePromise = function showUISourceCodePromise(uiSourceCode) {
    var fulfill;
    var promise = new Promise(function(x) {
        fulfill = x;
    });
    showUISourceCode(uiSourceCode, fulfill);
    return promise;
};
var showScriptSource = function showScriptSource(scriptName, callback) {
    waitForScriptSource(scriptName, onScriptSource);
    function onScriptSource(uiSourceCode) {
        showUISourceCode(uiSourceCode, callback);
    }
};
var showScriptSourcePromise = function showScriptSourcePromise(scriptName) {
    return new Promise(function(resolve) {
        return showScriptSource(scriptName, resolve);
    });
};
var waitForScriptSource = function waitForScriptSource1(scriptName, callback, contentType) {
    var panel = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance();
    var uiSourceCodes = panel.workspace.uiSourceCodes();
    for(var i = 0; i < uiSourceCodes.length; ++i){
        if (uiSourceCodes[i].project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Service) {
            continue;
        }
        if (uiSourceCodes[i].name() === scriptName && (uiSourceCodes[i].contentType() === contentType || contentType === undefined)) {
            callback(uiSourceCodes[i]);
            return;
        }
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.SourcesView.prototype, 'addUISourceCode', waitForScriptSource.bind(undefined, scriptName, callback, contentType));
};
var setBreakpoint = function() {
    var _ref = _async_to_generator(function(sourceFrame, lineNumber, condition, enabled) {
        var plugin, bp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    plugin = debuggerPlugin(sourceFrame);
                    if (!!plugin.muted) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        plugin.setBreakpoint(lineNumber, 0, condition, enabled)
                    ];
                case 1:
                    bp = _state.sent();
                    return [
                        4,
                        bp.refreshInDebugger()
                    ];
                case 2:
                    _state.sent(); // Make sure the breakpoint is really set
                    _state.label = 3;
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function setBreakpoint(sourceFrame, lineNumber, condition, enabled) {
        return _ref.apply(this, arguments);
    };
}();
var removeBreakpoint = function removeBreakpoint(sourceFrame, lineNumber) {
    var plugin = debuggerPlugin(sourceFrame);
    var breakpointLocations = plugin.breakpointManager.allBreakpointLocations();
    var breakpointLocation = breakpointLocations.find(function(breakpointLocation) {
        return breakpointLocation.uiLocation.uiSourceCode === sourceFrame.uiSourceCode() && breakpointLocation.uiLocation.lineNumber === lineNumber;
    });
    breakpointLocation.breakpoint.remove();
};
var createNewBreakpoint = function() {
    var _ref = _async_to_generator(function(sourceFrame, lineNumber, condition, enabled) {
        var plugin, promise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    plugin = debuggerPlugin(sourceFrame);
                    promise = new Promise(function(resolve) {
                        return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(plugin.__proto__, 'breakpointWasSetForTest', resolve);
                    });
                    return [
                        4,
                        plugin.createNewBreakpoint(lineNumber, condition, enabled)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        promise
                    ];
            }
        });
    });
    return function createNewBreakpoint(sourceFrame, lineNumber, condition, enabled) {
        return _ref.apply(this, arguments);
    };
}();
var toggleBreakpoint = function() {
    var _ref = _async_to_generator(function(sourceFrame, lineNumber, disableOnly) {
        var plugin;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    plugin = debuggerPlugin(sourceFrame);
                    if (!!plugin.muted) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        plugin.toggleBreakpoint(lineNumber, disableOnly)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return function toggleBreakpoint(sourceFrame, lineNumber, disableOnly) {
        return _ref.apply(this, arguments);
    };
}();
var dumpScopeVariablesSidebarPane = function dumpScopeVariablesSidebarPane() {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Scope variables sidebar pane:');
    var sections = scopeChainSections();
    dumpSectionsWithIndent(sections, 0);
};
var dumpSectionsWithIndent = function dumpSectionsWithIndent1(treeElements, depth) {
    if (!treeElements || treeElements.length === 0) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = treeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var treeElement = _step.value;
            var textContent = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.textContentWithLineBreaks(treeElement.listItemElement);
            var text = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.clearSpecificInfoFromStackFrames(textContent);
            if (text.length > 0) {
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('    '.repeat(depth) + text);
            }
            if (!treeElement.expanded && depth === 0) {
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('    <section collapsed>');
            }
            dumpSectionsWithIndent(treeElement.children(), depth + 1);
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
};
var scopeChainSections = function scopeChainSections() {
    return _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.ScopeChainSidebarPane.ScopeChainSidebarPane.instance().treeOutline.rootElement().children();
};
var expandScopeVariablesSidebarPane = function expandScopeVariablesSidebarPane(callback) {
    var sections = scopeChainSections();
    for(var i = 0; i < sections.length - 1; ++i){
        sections[i].expand();
    }
    setTimeout(function() {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
    }, 1000);
};
var expandProperties = function expandProperties(properties, callback) {
    var index = 0;
    function expandNextPath() {
        if (index === properties.length) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback)();
            return;
        }
        var parentTreeElement = properties[index++];
        var path = properties[index++];
        expandProperty(parentTreeElement, path, 0, expandNextPath);
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(expandNextPath);
};
var expandProperty = function expandProperty1(parentTreeElement, path, pathIndex, callback) {
    if (pathIndex === path.length) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Expanded property: ' + path.join('.'));
        callback();
        return;
    }
    var name = path[pathIndex++];
    var propertyTreeElement = findChildPropertyTreeElement(parentTreeElement, name);
    if (!propertyTreeElement) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Failed to expand property: ' + path.slice(0, pathIndex).join('.'));
        completeDebuggerTest();
        return;
    }
    propertyTreeElement.expand();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(expandProperty.bind(undefined, propertyTreeElement, path, pathIndex, callback));
};
var findChildPropertyTreeElement = function findChildPropertyTreeElement(parent, childName) {
    var children = parent.children();
    for(var i = 0; i < children.length; i++){
        var treeElement = children[i];
        var property = treeElement.property;
        if (property.name === childName) {
            return treeElement;
        }
    }
};
var setQuiet = function setQuiet(q) {
    quiet = q;
};
var queryScripts = function queryScripts(filter) {
    var scripts = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.scripts();
    return filter ? scripts.filter(filter) : scripts;
};
var checkRawLocation = function checkRawLocation(script, lineNumber, columnNumber, location) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(script.scriptId, location.scriptId, 'Incorrect scriptId');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(lineNumber, location.lineNumber, 'Incorrect lineNumber');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(columnNumber, location.columnNumber, 'Incorrect columnNumber');
};
var checkUILocation = function checkUILocation(uiSourceCode, lineNumber, columnNumber, location) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(uiSourceCode, location.uiSourceCode, 'Incorrect uiSourceCode, expected \'' + (uiSourceCode ? uiSourceCode.url() : null) + '\',' + ' but got \'' + (location.uiSourceCode ? location.uiSourceCode.url() : null) + '\'');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(lineNumber, location.lineNumber, 'Incorrect lineNumber, expected \'' + lineNumber + '\', but got \'' + location.lineNumber + '\'');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(columnNumber, location.columnNumber, 'Incorrect columnNumber, expected \'' + columnNumber + '\', but got \'' + location.columnNumber + '\'');
};
var waitForExecutionContextInTarget = function waitForExecutionContextInTarget(target, callback) {
    var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
    if (runtimeModel.executionContexts().length) {
        callback(runtimeModel.executionContexts()[0]);
        return;
    }
    runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextCreated, contextCreated);
    function contextCreated() {
        runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextCreated, contextCreated);
        callback(runtimeModel.executionContexts()[0]);
    }
};
var selectThread = function selectThread(target) {
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, target);
};
var evaluateOnCurrentCallFrame = function evaluateOnCurrentCallFrame(code) {
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.evaluateOnSelectedCallFrame({
        expression: code,
        objectGroup: 'console'
    });
};
var debuggerPlugin = function debuggerPlugin(sourceFrame) {
    return sourceFrame.plugins.find(function(plugin) {
        return _instanceof(plugin, _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPlugin.DebuggerPlugin);
    });
};
var setEventListenerBreakpoint = function setEventListenerBreakpoint(id, enabled, targetName) {
    var pane = _panels_browser_debugger_browser_debugger_js__WEBPACK_IMPORTED_MODULE_4__.EventListenerBreakpointsSidebarPane.EventListenerBreakpointsSidebarPane.instance();
    var auxData = {
        'eventName': id
    };
    if (targetName) {
        auxData.targetName = targetName;
    }
    var breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(auxData);
    if (!breakpoint) {
        breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(auxData);
    }
    if (breakpoint.enabled() !== enabled) {
        pane.breakpoints.get(breakpoint).checkbox.checked = enabled;
        pane.breakpointCheckboxClicked(breakpoint);
    }
};
_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedInitAsync("\n  function scheduleTestFunction() {\n    setTimeout(testFunction, 0);\n  }\n");


}),

}]);