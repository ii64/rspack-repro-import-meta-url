(self['webpackChunk'] = self['webpackChunk'] || []).push([["Tests_js"], {
"./Tests.js": (function () {
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
/*
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /* eslint-disable indent */ /**
 * @fileoverview This file contains small testing framework along with the
 * test suite for the frontend. These tests are a part of the continues build
 * and are executed by the devtools_browsertest.cc as a part of the
 * Interactive UI Test suite.
 * FIXME: change field naming style to use trailing underscore.
 */ (function createTestSuite(window1) {
    // 'Tests.js' is loaded as a classic script so we can't use static imports for these modules.
    /** @type {import('./core/common/common.js')} */ var Common;
    /** @type {import('./core/host/host.js')} */ var HostModule;
    /** @type {import('./core/root/root.js')} */ var Root;
    /** @type {import('./core/sdk/sdk.js')} */ var SDK;
    /** @type {import('./panels/sources/sources.js')} */ var Sources;
    /** @type {import('./panels/timeline/timeline.js')} */ var Timeline;
    /** @type {import('./ui/legacy/legacy.js')} */ var UI;
    /** @type {import('./models/workspace/workspace.js')} */ var Workspace;
    var TestSuite = /*#__PURE__*/ function() {
        "use strict";
        function TestSuite(domAutomationController) {
            _class_call_check(this, TestSuite);
            this.domAutomationController_ = domAutomationController;
            this.controlTaken_ = false;
            this.timerId_ = -1;
            this._asyncInvocationId = 0;
        }
        _create_class(TestSuite, null, [
            {
                key: "createKeyEvent",
                value: /**
     * Key event with given key identifier.
     */ function createKeyEvent(key) {
                    return new KeyboardEvent('keydown', {
                        bubbles: true,
                        cancelable: true,
                        key: key
                    });
                }
            }
        ]);
        return TestSuite;
    }();
    /**
   * Reports test failure.
   * @param {string} message Failure description.
   */ TestSuite.prototype.fail = function(message) {
        if (this.controlTaken_) {
            this.reportFailure_(message);
        } else {
            throw message;
        }
    };
    /**
   * Equals assertion tests that expected === actual.
   * @param {!Object|boolean} expected Expected object.
   * @param {!Object|boolean} actual Actual object.
   * @param {string} opt_message User message to print if the test fails.
   */ TestSuite.prototype.assertEquals = function(expected, actual, opt_message) {
        if (expected !== actual) {
            var message = 'Expected: \'' + expected + '\', but was \'' + actual + '\'';
            if (opt_message) {
                message = opt_message + '(' + message + ')';
            }
            this.fail(message);
        }
    };
    /**
   * True assertion tests that value == true.
   * @param {!Object} value Actual object.
   * @param {string} opt_message User message to print if the test fails.
   */ TestSuite.prototype.assertTrue = function(value, opt_message) {
        this.assertEquals(true, Boolean(value), opt_message);
    };
    /**
   * Takes control over execution.
   * @param {{slownessFactor:number}=} options
   */ TestSuite.prototype.takeControl = function(options) {
        var slownessFactor = _object_spread({
            slownessFactor: 1
        }, options).slownessFactor;
        this.controlTaken_ = true;
        // Set up guard timer.
        var self1 = this;
        var timeoutInSec = 20 * slownessFactor;
        this.timerId_ = setTimeout(function() {
            self1.reportFailure_("Timeout exceeded: ".concat(timeoutInSec, " sec"));
        }, timeoutInSec * 1000);
    };
    /**
   * Releases control over execution.
   */ TestSuite.prototype.releaseControl = function() {
        if (this.timerId_ !== -1) {
            clearTimeout(this.timerId_);
            this.timerId_ = -1;
        }
        this.controlTaken_ = false;
        this.reportOk_();
    };
    /**
   * Async tests use this one to report that they are completed.
   */ TestSuite.prototype.reportOk_ = function() {
        this.domAutomationController_.send('[OK]');
    };
    /**
   * Async tests use this one to report failures.
   */ TestSuite.prototype.reportFailure_ = function(error) {
        if (this.timerId_ !== -1) {
            clearTimeout(this.timerId_);
            this.timerId_ = -1;
        }
        this.domAutomationController_.send('[FAILED] ' + error);
    };
    TestSuite.prototype.setupLegacyFilesForTest = /*#__PURE__*/ _async_to_generator(function() {
        var ref, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        Promise.all([
                            self.runtime.loadLegacyModule('core/common/common.js'),
                            self.runtime.loadLegacyModule('core/host/host.js'),
                            self.runtime.loadLegacyModule('core/root/root.js'),
                            self.runtime.loadLegacyModule('core/sdk/sdk.js'),
                            self.runtime.loadLegacyModule('panels/sources/sources.js'),
                            self.runtime.loadLegacyModule('panels/timeline/timeline.js'),
                            self.runtime.loadLegacyModule('ui/legacy/legacy.js'),
                            self.runtime.loadLegacyModule('models/workspace/workspace.js')
                        ])
                    ];
                case 1:
                    ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        8
                    ]), Common = ref[0], HostModule = ref[1], Root = ref[2], SDK = ref[3], Sources = ref[4], Timeline = ref[5], UI = ref[6], Workspace = ref[7], ref;
                    // We have to map 'Host.InspectorFrontendHost' as the C++ uses it directly.
                    self.Host = {};
                    self.Host.InspectorFrontendHost = HostModule.InspectorFrontendHost.InspectorFrontendHostInstance;
                    self.Host.InspectorFrontendHostAPI = HostModule.InspectorFrontendHostAPI;
                    this.reportOk_();
                    return [
                        3,
                        3
                    ];
                case 2:
                    e = _state.sent();
                    this.reportFailure_(e);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    /**
   * Run specified test on a fresh instance of the test suite.
   * @param {Array<string>} args method name followed by its parameters.
   */ TestSuite.prototype.dispatchOnTestSuite = function() {
        var _ref = _async_to_generator(function(args) {
            var methodName, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        methodName = args.shift();
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            this[methodName].apply(this, args)
                        ];
                    case 2:
                        _state.sent();
                        if (!this.controlTaken_) {
                            this.reportOk_();
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        e = _state.sent();
                        this.reportFailure_(e);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function(args) {
            return _ref.apply(this, arguments);
        };
    }();
    /**
   * Wrap an async method with TestSuite.{takeControl(), releaseControl()}
   * and invoke TestSuite.reportOk_ upon completion.
   * @param {Array<string>} args method name followed by its parameters.
   */ TestSuite.prototype.waitForAsync = function(var_args) {
        var args = Array.prototype.slice.call(arguments);
        this.takeControl();
        args.push(this.releaseControl.bind(this));
        this.dispatchOnTestSuite(args);
    };
    /**
   * Overrides the method with specified name until it's called first time.
   * @param {!Object} receiver An object whose method to override.
   * @param {string} methodName Name of the method to override.
   * @param {!Function} override A function that should be called right after the
   *     overridden method returns.
   * @param {?boolean} opt_sticky Whether restore original method after first run
   *     or not.
   */ TestSuite.prototype.addSniffer = function(receiver, methodName, override, opt_sticky) {
        var orig = receiver[methodName];
        if (typeof orig !== 'function') {
            this.fail('Cannot find method to override: ' + methodName);
        }
        var test = this;
        receiver[methodName] = function(var_args) {
            var result;
            try {
                result = orig.apply(this, arguments);
            } finally{
                if (!opt_sticky) {
                    receiver[methodName] = orig;
                }
            }
            // In case of exception the override won't be called.
            try {
                override.apply(this, arguments);
            } catch (e) {
                test.fail('Exception in overriden method \'' + methodName + '\': ' + e);
            }
            return result;
        };
    };
    /**
   * Waits for current throttler invocations, if any.
   * @param {!Common.Throttler} throttler
   * @param {function()} callback
   */ TestSuite.prototype.waitForThrottler = function(throttler, callback) {
        var test = this;
        var scheduleShouldFail = true;
        test.addSniffer(throttler, 'schedule', onSchedule);
        function hasSomethingScheduled() {
            return throttler._isRunningProcess || throttler._process;
        }
        function checkState() {
            if (!hasSomethingScheduled()) {
                scheduleShouldFail = false;
                callback();
                return;
            }
            test.addSniffer(throttler, 'processCompletedForTests', checkState);
        }
        function onSchedule() {
            if (scheduleShouldFail) {
                test.fail('Unexpected Throttler.schedule');
            }
        }
        checkState();
    };
    /**
   * @param {string} panelName Name of the panel to show.
   */ TestSuite.prototype.showPanel = function(panelName) {
        return UI.InspectorView.InspectorView.instance().showPanel(panelName);
    };
    // UI Tests
    /**
   * Tests that scripts tab can be open and populated with inspected scripts.
   */ TestSuite.prototype.testShowScriptsTab = function() {
        var test = this;
        this.showPanel('sources').then((function() {
            // There should be at least main page script.
            this._waitUntilScriptsAreParsed([
                'debugger_test_page.html'
            ], function() {
                test.releaseControl();
            });
        }).bind(this));
        // Wait until all scripts are added to the debugger.
        this.takeControl();
    };
    /**
   * Tests that Recorder tab can be open.
   */ TestSuite.prototype.testShowRecorderTab = function() {
        var _this = this;
        this.showPanel('chrome-recorder').then(function() {
            _this.releaseControl();
        }).catch(function(err) {
            _this.fail('Loading Recorder panel failed: ' + err.message);
        });
        this.takeControl();
    };
    /**
   * Tests that scripts list contains content scripts.
   */ TestSuite.prototype.testContentScriptIsPresent = function() {
        var test = this;
        this.showPanel('sources').then(function() {
            test._waitUntilScriptsAreParsed([
                'page_with_content_script.html',
                'simple_content_script.js'
            ], function() {
                test.releaseControl();
            });
        });
        // Wait until all scripts are added to the debugger.
        this.takeControl();
    };
    /**
   * Tests that scripts are not duplicaed on Scripts tab switch.
   */ TestSuite.prototype.testNoScriptDuplicatesOnPanelSwitch = function() {
        var test = this;
        function switchToElementsTab() {
            test.showPanel('elements').then(function() {
                setTimeout(switchToScriptsTab, 0);
            });
        }
        function switchToScriptsTab() {
            test.showPanel('sources').then(function() {
                setTimeout(checkScriptsPanel, 0);
            });
        }
        function checkScriptsPanel() {
            test.assertTrue(test._scriptsAreParsed([
                'debugger_test_page.html'
            ]), 'Some scripts are missing.');
            checkNoDuplicates();
            test.releaseControl();
        }
        function checkNoDuplicates() {
            var uiSourceCodes = test.nonAnonymousUISourceCodes_();
            for(var i = 0; i < uiSourceCodes.length; i++){
                for(var j = i + 1; j < uiSourceCodes.length; j++){
                    test.assertTrue(uiSourceCodes[i].url() !== uiSourceCodes[j].url(), 'Found script duplicates: ' + test.uiSourceCodesToString_(uiSourceCodes));
                }
            }
        }
        this.showPanel('sources').then(function() {
            test._waitUntilScriptsAreParsed([
                'debugger_test_page.html'
            ], function() {
                checkNoDuplicates();
                setTimeout(switchToElementsTab, 0);
            });
        });
        // Wait until all scripts are added to the debugger.
        this.takeControl({
            slownessFactor: 10
        });
    };
    // Tests that debugger works correctly if pause event occurs when DevTools
    // frontend is being loaded.
    TestSuite.prototype.testPauseWhenLoadingDevTools = function() {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        var debuggerModel = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.model(SDK.DebuggerModel.DebuggerModel);
        if (debuggerModel.debuggerPausedDetails) {
            return;
        }
        this.showPanel('sources').then((function() {
            // Script execution can already be paused.
            this._waitForScriptPause(this.releaseControl.bind(this));
        }).bind(this));
        this.takeControl();
    };
    /**
   * Tests network size.
   */ TestSuite.prototype.testNetworkSize = function() {
        var test = this;
        function finishRequest(request, finishTime) {
            test.assertEquals(25, request.resourceSize, 'Incorrect total data length');
            test.releaseControl();
        }
        this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest);
        // Reload inspected page to sniff network events
        test.evaluateInConsole_('window.location.reload(true);', function(resultText) {});
        this.takeControl({
            slownessFactor: 10
        });
    };
    /**
   * Tests network sync size.
   */ TestSuite.prototype.testNetworkSyncSize = function() {
        var test = this;
        function finishRequest(request, finishTime) {
            test.assertEquals(25, request.resourceSize, 'Incorrect total data length');
            test.releaseControl();
        }
        this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest);
        // Send synchronous XHR to sniff network events
        test.evaluateInConsole_('let xhr = new XMLHttpRequest(); xhr.open("GET", "chunked", false); xhr.send(null);', function() {});
        this.takeControl({
            slownessFactor: 10
        });
    };
    /**
   * Tests network raw headers text.
   */ TestSuite.prototype.testNetworkRawHeadersText = function() {
        var test = this;
        function finishRequest(request, finishTime) {
            if (!request.responseHeadersText) {
                test.fail('Failure: resource does not have response headers text');
            }
            var index = request.responseHeadersText.indexOf('Date:');
            test.assertEquals(112, request.responseHeadersText.substring(index).length, 'Incorrect response headers text length');
            test.releaseControl();
        }
        this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest);
        // Reload inspected page to sniff network events
        test.evaluateInConsole_('window.location.reload(true);', function(resultText) {});
        this.takeControl({
            slownessFactor: 10
        });
    };
    /**
   * Tests network timing.
   */ TestSuite.prototype.testNetworkTiming = function() {
        var test = this;
        function finishRequest(request, finishTime) {
            // Setting relaxed expectations to reduce flakiness.
            // Server sends headers after 100ms, then sends data during another 100ms.
            // We expect these times to be measured at least as 70ms.
            test.assertTrue(request.timing.receiveHeadersEnd - request.timing.connectStart >= 70, 'Time between receiveHeadersEnd and connectStart should be >=70ms, but was ' + 'receiveHeadersEnd=' + request.timing.receiveHeadersEnd + ', connectStart=' + request.timing.connectStart + '.');
            test.assertTrue(request.responseReceivedTime - request.startTime >= 0.07, 'Time between responseReceivedTime and startTime should be >=0.07s, but was ' + 'responseReceivedTime=' + request.responseReceivedTime + ', startTime=' + request.startTime + '.');
            test.assertTrue(request.endTime - request.startTime >= 0.14, 'Time between endTime and startTime should be >=0.14s, but was ' + 'endtime=' + request.endTime + ', startTime=' + request.startTime + '.');
            test.releaseControl();
        }
        this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest);
        // Reload inspected page to sniff network events
        test.evaluateInConsole_('window.location.reload(true);', function(resultText) {});
        this.takeControl({
            slownessFactor: 10
        });
    };
    TestSuite.prototype.testPushTimes = function(url) {
        var test = this;
        var pendingRequestCount = 2;
        function finishRequest(request, finishTime) {
            test.assertTrue(typeof request.timing.pushStart === 'number' && request.timing.pushStart > 0, "pushStart is invalid: ".concat(request.timing.pushStart));
            test.assertTrue(typeof request.timing.pushEnd === 'number', "pushEnd is invalid: ".concat(request.timing.pushEnd));
            test.assertTrue(request.timing.pushStart < request.startTime, 'pushStart should be before startTime');
            if (request.url().endsWith('?pushUseNullEndTime')) {
                test.assertTrue(request.timing.pushEnd === 0, "pushEnd should be 0 but is ".concat(request.timing.pushEnd));
            } else {
                test.assertTrue(request.timing.pushStart < request.timing.pushEnd, "pushStart should be before pushEnd (".concat(request.timing.pushStart, " >= ").concat(request.timing.pushEnd, ")"));
                // The below assertion is just due to the way we generate times in the moch URLRequestJob and is not generally an invariant.
                test.assertTrue(request.timing.pushEnd < request.endTime, 'pushEnd should be before endTime');
                test.assertTrue(request.startTime < request.timing.pushEnd, 'pushEnd should be after startTime');
            }
            if (!--pendingRequestCount) {
                test.releaseControl();
            }
        }
        this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest, true);
        test.evaluateInConsole_('addImage(\'' + url + '\')', function(resultText) {});
        test.evaluateInConsole_('addImage(\'' + url + '?pushUseNullEndTime\')', function(resultText) {});
        this.takeControl();
    };
    TestSuite.prototype.testConsoleOnNavigateBack = function() {
        function filteredMessages() {
            return SDK.ConsoleModel.ConsoleModel.allMessagesUnordered().filter(function(a) {
                return a.source !== Protocol.Log.LogEntrySource.Violation;
            });
        }
        if (filteredMessages().length === 1) {
            firstConsoleMessageReceived.call(this, null);
        } else {
            SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, firstConsoleMessageReceived, this);
        }
        function firstConsoleMessageReceived(event) {
            if (event && event.data.source === Protocol.Log.LogEntrySource.Violation) {
                return;
            }
            SDK.TargetManager.TargetManager.instance().removeModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, firstConsoleMessageReceived, this);
            this.evaluateInConsole_('clickLink();', didClickLink.bind(this));
        }
        function didClickLink() {
            // Check that there are no new messages(command is not a message).
            this.assertEquals(3, filteredMessages().length);
            this.evaluateInConsole_('history.back();', didNavigateBack.bind(this));
        }
        function didNavigateBack() {
            // Make sure navigation completed and possible console messages were pushed.
            this.evaluateInConsole_('void 0;', didCompleteNavigation.bind(this));
        }
        function didCompleteNavigation() {
            this.assertEquals(7, filteredMessages().length);
            this.releaseControl();
        }
        this.takeControl();
    };
    TestSuite.prototype.testSharedWorker = function() {
        function didEvaluateInConsole(resultText) {
            this.assertEquals('2011', resultText);
            this.releaseControl();
        }
        this.evaluateInConsole_('globalVar', didEvaluateInConsole.bind(this));
        this.takeControl();
    };
    TestSuite.prototype.testPauseInSharedWorkerInitialization1 = function() {
        // Make sure the worker is loaded.
        this.takeControl();
        this._waitForTargets(1, callback.bind(this));
        function callback() {
            ProtocolClient.test.deprecatedRunAfterPendingDispatches(this.releaseControl.bind(this));
        }
    };
    TestSuite.prototype.testPauseInSharedWorkerInitialization2 = function() {
        this.takeControl();
        this._waitForTargets(1, callback.bind(this));
        function callback() {
            var debuggerModel = SDK.TargetManager.TargetManager.instance().models(SDK.DebuggerModel.DebuggerModel)[0];
            if (debuggerModel.isPaused()) {
                SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage, this);
                debuggerModel.resume();
                return;
            }
            this._waitForScriptPause(callback.bind(this));
        }
        function onConsoleMessage(event) {
            var message = event.data.messageText;
            if (message !== 'connected') {
                this.fail('Unexpected message: ' + message);
            }
            this.releaseControl();
        }
    };
    TestSuite.prototype.testSharedWorkerNetworkPanel = function() {
        var _this = this;
        this.takeControl();
        this.showPanel('network').then(function() {
            if (!document.querySelector('#network-container')) {
                _this.fail('unable to find #network-container');
            }
            _this.releaseControl();
        });
    };
    TestSuite.prototype.enableTouchEmulation = function() {
        var deviceModeModel = new Emulation.DeviceModeModel(function() {});
        deviceModeModel._target = SDK.TargetManager.TargetManager.instance().primaryPageTarget();
        deviceModeModel._applyTouch(true, true);
    };
    TestSuite.prototype.waitForDebuggerPaused = function() {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        var debuggerModel = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.model(SDK.DebuggerModel.DebuggerModel);
        if (debuggerModel.debuggerPausedDetails) {
            return;
        }
        this.takeControl();
        this._waitForScriptPause(this.releaseControl.bind(this));
    };
    TestSuite.prototype.switchToPanel = function(panelName) {
        this.showPanel(panelName).then(this.releaseControl.bind(this));
        this.takeControl();
    };
    // Regression test for crbug.com/370035.
    TestSuite.prototype.testDeviceMetricsOverrides = function() {
        function dumpPageMetrics() {
            return JSON.stringify({
                width: window1.innerWidth,
                height: window1.innerHeight,
                deviceScaleFactor: window1.devicePixelRatio
            });
        }
        var test = this;
        function testOverrides(params, metrics, callback) {
            return _testOverrides.apply(this, arguments);
        }
        function _testOverrides() {
            _testOverrides = _async_to_generator(function(params, metrics, callback) {
                var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
                function checkMetrics(consoleResult) {
                    test.assertEquals("'".concat(JSON.stringify(metrics), "'"), consoleResult, 'Wrong metrics for params: ' + JSON.stringify(params));
                    callback();
                }
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.emulationAgent().invoke_setDeviceMetricsOverride(params)
                            ];
                        case 1:
                            _state.sent();
                            test.evaluateInConsole_('(' + dumpPageMetrics.toString() + ')()', checkMetrics);
                            return [
                                2
                            ];
                    }
                });
            });
            return _testOverrides.apply(this, arguments);
        }
        function step1() {
            testOverrides({
                width: 1200,
                height: 1000,
                deviceScaleFactor: 1,
                mobile: false,
                fitWindow: true
            }, {
                width: 1200,
                height: 1000,
                deviceScaleFactor: 1
            }, step2);
        }
        function step2() {
            testOverrides({
                width: 1200,
                height: 1000,
                deviceScaleFactor: 1,
                mobile: false,
                fitWindow: false
            }, {
                width: 1200,
                height: 1000,
                deviceScaleFactor: 1
            }, step3);
        }
        function step3() {
            testOverrides({
                width: 1200,
                height: 1000,
                deviceScaleFactor: 3,
                mobile: false,
                fitWindow: true
            }, {
                width: 1200,
                height: 1000,
                deviceScaleFactor: 3
            }, step4);
        }
        function step4() {
            testOverrides({
                width: 1200,
                height: 1000,
                deviceScaleFactor: 3,
                mobile: false,
                fitWindow: false
            }, {
                width: 1200,
                height: 1000,
                deviceScaleFactor: 3
            }, finish);
        }
        function finish() {
            test.releaseControl();
        }
        test.takeControl();
        step1();
    };
    TestSuite.prototype.testDispatchKeyEventShowsAutoFill = function() {
        var test = this;
        var receivedReady = false;
        function signalToShowAutofill() {
            var _SDK_TargetManager_TargetManager_instance_primaryPageTarget, _SDK_TargetManager_TargetManager_instance_primaryPageTarget1;
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
                type: 'rawKeyDown',
                key: 'Down',
                windowsVirtualKeyCode: 40,
                nativeVirtualKeyCode: 40
            });
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget1 = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget1 === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget1.inputAgent().invoke_dispatchKeyEvent({
                type: 'keyUp',
                key: 'Down',
                windowsVirtualKeyCode: 40,
                nativeVirtualKeyCode: 40
            });
        }
        function selectTopAutoFill() {
            var _SDK_TargetManager_TargetManager_instance_primaryPageTarget, _SDK_TargetManager_TargetManager_instance_primaryPageTarget1;
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
                type: 'rawKeyDown',
                key: 'Enter',
                windowsVirtualKeyCode: 13,
                nativeVirtualKeyCode: 13
            });
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget1 = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget1 === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget1.inputAgent().invoke_dispatchKeyEvent({
                type: 'keyUp',
                key: 'Enter',
                windowsVirtualKeyCode: 13,
                nativeVirtualKeyCode: 13
            });
            test.evaluateInConsole_('document.getElementById("name").value', onResultOfInput);
        }
        function onResultOfInput(value) {
            // Console adds '' around the response.
            test.assertEquals('\'Abbf\'', value);
            test.releaseControl();
        }
        function onConsoleMessage(event) {
            var message = event.data.messageText;
            if (message === 'ready' && !receivedReady) {
                receivedReady = true;
                signalToShowAutofill();
            }
            // This log comes from the browser unittest code.
            if (message === 'didShowSuggestions') {
                selectTopAutoFill();
            }
        }
        this.takeControl({
            slownessFactor: 10
        });
        // It is possible for the ready console messagage to be already received but not handled
        // or received later. This ensures we can catch both cases.
        SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage, this);
        var messages = SDK.ConsoleModel.ConsoleModel.allMessagesUnordered();
        if (messages.length) {
            var text = messages[0].messageText;
            this.assertEquals('ready', text);
            signalToShowAutofill();
        }
    };
    TestSuite.prototype.testKeyEventUnhandled = function() {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        function onKeyEventUnhandledKeyDown(event) {
            var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
            this.assertEquals('keydown', event.data.type);
            this.assertEquals('F8', event.data.key);
            this.assertEquals(119, event.data.keyCode);
            this.assertEquals(0, event.data.modifiers);
            this.assertEquals('', event.data.code);
            Host.InspectorFrontendHost.events.removeEventListener(Host.InspectorFrontendHostAPI.Events.KeyEventUnhandled, onKeyEventUnhandledKeyDown, this);
            Host.InspectorFrontendHost.events.addEventListener(Host.InspectorFrontendHostAPI.Events.KeyEventUnhandled, onKeyEventUnhandledKeyUp, this);
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
                type: 'keyUp',
                key: 'F8',
                code: 'F8',
                windowsVirtualKeyCode: 119,
                nativeVirtualKeyCode: 119
            });
        }
        function onKeyEventUnhandledKeyUp(event) {
            this.assertEquals('keyup', event.data.type);
            this.assertEquals('F8', event.data.key);
            this.assertEquals(119, event.data.keyCode);
            this.assertEquals(0, event.data.modifiers);
            this.assertEquals('F8', event.data.code);
            this.releaseControl();
        }
        this.takeControl();
        Host.InspectorFrontendHost.events.addEventListener(Host.InspectorFrontendHostAPI.Events.KeyEventUnhandled, onKeyEventUnhandledKeyDown, this);
        (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
            type: 'rawKeyDown',
            key: 'F8',
            windowsVirtualKeyCode: 119,
            nativeVirtualKeyCode: 119
        });
    };
    // Tests that the keys that are forwarded from the browser update
    // when their shortcuts change
    TestSuite.prototype.testForwardedKeysChanged = function() {
        var _this = this;
        this.takeControl();
        this.addSniffer(UI.ShortcutRegistry.ShortcutRegistry.instance(), 'registerBindings', function() {
            var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
                type: 'rawKeyDown',
                key: 'F1',
                windowsVirtualKeyCode: 112,
                nativeVirtualKeyCode: 112
            });
        });
        this.addSniffer(UI.ShortcutRegistry.ShortcutRegistry.instance(), 'handleKey', function(key) {
            _this.assertEquals(112, key);
            _this.releaseControl();
        });
        Common.Settings.moduleSetting('active-keybind-set').set('vsCode');
    };
    TestSuite.prototype.testDispatchKeyEventDoesNotCrash = function() {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget, _SDK_TargetManager_TargetManager_instance_primaryPageTarget1;
        (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent().invoke_dispatchKeyEvent({
            type: 'rawKeyDown',
            windowsVirtualKeyCode: 0x23,
            key: 'End'
        });
        (_SDK_TargetManager_TargetManager_instance_primaryPageTarget1 = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget1 === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget1.inputAgent().invoke_dispatchKeyEvent({
            type: 'keyUp',
            windowsVirtualKeyCode: 0x23,
            key: 'End'
        });
    };
    // Check that showing the certificate viewer does not crash, crbug.com/954874
    TestSuite.prototype.testShowCertificate = function() {
        Host.InspectorFrontendHost.showCertificateViewer([
            'MIIFIDCCBAigAwIBAgIQE0TsEu6R8FUHQv+9fE7j8TANBgkqhkiG9w0BAQsF' + 'ADBUMQswCQYDVQQGEwJVUzEeMBwGA1UEChMVR29vZ2xlIFRydXN0IFNlcnZp' + 'Y2VzMSUwIwYDVQQDExxHb29nbGUgSW50ZXJuZXQgQXV0aG9yaXR5IEczMB4X' + 'DTE5MDMyNjEzNDEwMVoXDTE5MDYxODEzMjQwMFowZzELMAkGA1UEBhMCVVMx' + 'EzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDU1vdW50YWluIFZpZXcx' + 'EzARBgNVBAoMCkdvb2dsZSBMTEMxFjAUBgNVBAMMDSouYXBwc3BvdC5jb20w' + 'ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCwca7hj0kyoJVxcvyA' + 'a8zNKMIXcoPM3aU1KVe7mxZITtwC6/D/D/q4Oe8fBQLeZ3c6qR5Sr3M+611k' + 'Ab15AcGUgh1Xi0jZqERvd/5+P0aVCFJYeoLrPBzwSMZBStkoiO2CwtV8x06e' + 'X7qUz7Hvr3oeG+Ma9OUMmIebl//zHtC82mE0mCRBQAW0MWEgT5nOWey74tJR' + 'GRqUEI8ftV9grAshD5gY8kxxUoMfqrreaXVqcRF58ZPiwUJ0+SbtC5q9cJ+K' + 'MuYM4TCetEuk/WQsa+1EnSa40dhGRtZjxbwEwQAJ1vLOcIA7AVR/Ck22Uj8X' + 'UOECercjUrKdDyaAPcLp2TThAgMBAAGjggHZMIIB1TATBgNVHSUEDDAKBggr' + 'BgEFBQcDATCBrwYDVR0RBIGnMIGkgg0qLmFwcHNwb3QuY29tggsqLmEucnVu' + 'LmFwcIIVKi50aGlua3dpdGhnb29nbGUuY29tghAqLndpdGhnb29nbGUuY29t' + 'ghEqLndpdGh5b3V0dWJlLmNvbYILYXBwc3BvdC5jb22CB3J1bi5hcHCCE3Ro' + 'aW5rd2l0aGdvb2dsZS5jb22CDndpdGhnb29nbGUuY29tgg93aXRoeW91dHVi' + 'ZS5jb20waAYIKwYBBQUHAQEEXDBaMC0GCCsGAQUFBzAChiFodHRwOi8vcGtp' + 'Lmdvb2cvZ3NyMi9HVFNHSUFHMy5jcnQwKQYIKwYBBQUHMAGGHWh0dHA6Ly9v' + 'Y3NwLnBraS5nb29nL0dUU0dJQUczMB0GA1UdDgQWBBTGkpE5o0H9+Wjc05rF' + 'hNQiYDjBFjAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFHfCuFCaZ3Z2sS3C' + 'htCDoH6mfrpLMCEGA1UdIAQaMBgwDAYKKwYBBAHWeQIFAzAIBgZngQwBAgIw' + 'MQYDVR0fBCowKDAmoCSgIoYgaHR0cDovL2NybC5wa2kuZ29vZy9HVFNHSUFH' + 'My5jcmwwDQYJKoZIhvcNAQELBQADggEBALqoYGqWtJW/6obEzY+ehsgfyXb+' + 'qNIuV09wt95cRF93HlLbBlSZ/Iz8HXX44ZT1/tGAkwKnW0gDKSSab3I8U+e9' + 'LHbC9VXrgAFENzu89MNKNmK5prwv+MPA2HUQPu4Pad3qXmd4+nKc/EUjtg1d' + '/xKGK1Vn6JX3i5ly/rduowez3LxpSAJuIwseum331aQaKC2z2ri++96B8MPU' + 'KFXzvV2gVGOe3ZYqmwPaG8y38Tba+OzEh59ygl8ydJJhoI6+R3itPSy0aXUU' + 'lMvvAbfCobXD5kBRQ28ysgbDSDOPs3fraXpAKL92QUjsABs58XBz5vka4swu' + 'gg/u+ZxaKOqfIm8=',
            'MIIEXDCCA0SgAwIBAgINAeOpMBz8cgY4P5pTHTANBgkqhkiG9w0BAQsFADBM' + 'MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMK' + 'R2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAw' + 'NDJaFw0yMTEyMTUwMDAwNDJaMFQxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVH' + 'b29nbGUgVHJ1c3QgU2VydmljZXMxJTAjBgNVBAMTHEdvb2dsZSBJbnRlcm5l' + 'dCBBdXRob3JpdHkgRzMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB' + 'AQDKUkvqHv/OJGuo2nIYaNVWXQ5IWi01CXZaz6TIHLGp/lOJ+600/4hbn7vn' + '6AAB3DVzdQOts7G5pH0rJnnOFUAK71G4nzKMfHCGUksW/mona+Y2emJQ2N+a' + 'icwJKetPKRSIgAuPOB6Aahh8Hb2XO3h9RUk2T0HNouB2VzxoMXlkyW7XUR5m' + 'w6JkLHnA52XDVoRTWkNty5oCINLvGmnRsJ1zouAqYGVQMc/7sy+/EYhALrVJ' + 'EA8KbtyX+r8snwU5C1hUrwaW6MWOARa8qBpNQcWTkaIeoYvy/sGIJEmjR0vF' + 'EwHdp1cSaWIr6/4g72n7OqXwfinu7ZYW97EfoOSQJeAzAgMBAAGjggEzMIIB' + 'LzAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUF' + 'BwMCMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFHfCuFCaZ3Z2sS3C' + 'htCDoH6mfrpLMB8GA1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYuMDUG' + 'CCsGAQUFBwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdv' + 'b2cvZ3NyMjAyBgNVHR8EKzApMCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29n' + 'L2dzcjIvZ3NyMi5jcmwwPwYDVR0gBDgwNjA0BgZngQwBAgIwKjAoBggrBgEF' + 'BQcCARYcaHR0cHM6Ly9wa2kuZ29vZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0B' + 'AQsFAAOCAQEAHLeJluRT7bvs26gyAZ8so81trUISd7O45skDUmAge1cnxhG1' + 'P2cNmSxbWsoiCt2eux9LSD+PAj2LIYRFHW31/6xoic1k4tbWXkDCjir37xTT' + 'NqRAMPUyFRWSdvt+nlPqwnb8Oa2I/maSJukcxDjNSfpDh/Bd1lZNgdd/8cLd' + 'sE3+wypufJ9uXO1iQpnh9zbuFIwsIONGl1p3A8CgxkqI/UAih3JaGOqcpcda' + 'CIzkBaR9uYQ1X4k2Vg5APRLouzVy7a8IVk6wuy6pm+T7HT4LY8ibS5FEZlfA' + 'FLSW8NwsVz9SBK2Vqn1N0PIMn5xA6NZVc7o835DLAFshEWfC7TIe3g==',
            'MIIDujCCAqKgAwIBAgILBAAAAAABD4Ym5g0wDQYJKoZIhvcNAQEFBQAwTDEg' + 'MB4GA1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjIxEzARBgNVBAoTCkds' + 'b2JhbFNpZ24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDYxMjE1MDgwMDAw' + 'WhcNMjExMjE1MDgwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3Qg' + 'Q0EgLSBSMjETMBEGA1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFs' + 'U2lnbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKbPJA6+Lm8o' + 'mUVCxKs+IVSbC9N/hHD6ErPLv4dfxn+G07IwXNb9rfF73OX4YJYJkhD10FPe' + '+3t+c4isUoh7SqbKSaZeqKeMWhG8eoLrvozps6yWJQeXSpkqBy+0Hne/ig+1' + 'AnwblrjFuTosvNYSuetZfeLQBoZfXklqtTleiDTsvHgMCJiEbKjNS7SgfQx5' + 'TfC4LcshytVsW33hoCmEofnTlEnLJGKRILzdC9XZzPnqJworc5HGnRusyMvo' + '4KD0L5CLTfuwNhv2GXqF4G3yYROIXJ/gkwpRl4pazq+r1feqCapgvdzZX99y' + 'qWATXgAByUr6P6TqBwMhAo6CygPCm48CAwEAAaOBnDCBmTAOBgNVHQ8BAf8E' + 'BAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUm+IHV2ccHsBqBt5Z' + 'tJot39wZhi4wNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL2NybC5nbG9iYWxz' + 'aWduLm5ldC9yb290LXIyLmNybDAfBgNVHSMEGDAWgBSb4gdXZxwewGoG3lm0' + 'mi3f3BmGLjANBgkqhkiG9w0BAQUFAAOCAQEAmYFThxxol4aR7OBKuEQLq4Gs' + 'J0/WwbgcQ3izDJr86iw8bmEbTUsp9Z8FHSbBuOmDAGJFtqkIk7mpM0sYmsL4' + 'h4hO291xNBrBVNpGP+DTKqttVCL1OmLNIG+6KYnX3ZHu01yiPqFbQfXf5WRD' + 'LenVOavSot+3i9DAgBkcRcAtjOj4LaR0VknFBbVPFd5uRHg5h6h+u/N5GJG7' + '9G+dwfCMNYxdAfvDbbnvRG15RjF+Cv6pgsH/76tuIMRQyV+dTZsXjAzlAcmg' + 'QWpzU/qlULRuJQ/7TBj0/VLZjmmx6BEP3ojY+x1J96relc8geMJgEtslQIxq' + '/H5COEBkEveegeGTLg=='
        ]);
    };
    // Simple check to make sure network throttling is wired up
    // See crbug.com/747724
    TestSuite.prototype.testOfflineNetworkConditions = /*#__PURE__*/ _async_to_generator(function() {
        var test;
        function finishRequest(request) {
            test.assertEquals('net::ERR_INTERNET_DISCONNECTED', request.localizedFailDescription, 'Request should have failed');
            test.releaseControl();
        }
        return _ts_generator(this, function(_state) {
            test = this;
            SDK.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(SDK.NetworkManager.OfflineConditions);
            this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'finishNetworkRequest', finishRequest);
            test.takeControl();
            test.evaluateInConsole_('await fetch("/");', function(resultText) {});
            return [
                2
            ];
        });
    });
    TestSuite.prototype.testEmulateNetworkConditions = function() {
        var test = this;
        function testPreset(preset, messages, next) {
            function onConsoleMessage(event) {
                var index = messages.indexOf(event.data.messageText);
                if (index === -1) {
                    test.fail('Unexpected message: ' + event.data.messageText);
                    return;
                }
                messages.splice(index, 1);
                if (!messages.length) {
                    SDK.TargetManager.TargetManager.instance().removeModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage, this);
                    next();
                }
            }
            SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage, this);
            SDK.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(preset);
        }
        test.takeControl();
        step1();
        function step1() {
            testPreset(MobileThrottling.networkPresets[3], [
                'offline event: online = false',
                'connection change event: type = none; downlinkMax = 0; effectiveType = 4g'
            ], step2);
        }
        function step2() {
            testPreset(MobileThrottling.networkPresets[2], [
                'online event: online = true',
                'connection change event: type = cellular; downlinkMax = 0.3814697265625; effectiveType = 2g'
            ], step3);
        }
        function step3() {
            testPreset(MobileThrottling.networkPresets[1], [
                'connection change event: type = cellular; downlinkMax = 1.373291015625; effectiveType = 3g'
            ], step4);
        }
        function step4() {
            testPreset(MobileThrottling.networkPresets[0], [
                'connection change event: type = cellular; downlinkMax = 7.724761962890625; effectiveType = 4g'
            ], test.releaseControl.bind(test));
        }
    };
    TestSuite.prototype.testScreenshotRecording = function() {
        var test = this;
        function performActionsInPage(callback) {
            var count = 0;
            var div = document.createElement('div');
            div.setAttribute('style', 'left: 0px; top: 0px; width: 100px; height: 100px; position: absolute;');
            document.body.appendChild(div);
            requestAnimationFrame(frame);
            function frame() {
                var color = [
                    0,
                    0,
                    0
                ];
                color[count % 3] = 255;
                div.style.backgroundColor = 'rgb(' + color.join(',') + ')';
                if (++count > 10) {
                    requestAnimationFrame(callback);
                } else {
                    requestAnimationFrame(frame);
                }
            }
        }
        var captureFilmStripSetting = Common.Settings.Settings.instance().createSetting('timeline-capture-film-strip', false);
        captureFilmStripSetting.set(true);
        test.evaluateInConsole_(performActionsInPage.toString(), function() {});
        test.invokeAsyncWithTimeline_('performActionsInPage', onTimelineDone);
        function onTimelineDone() {
            var _Timeline_TimelinePanel_TimelinePanel_instance_performanceModel;
            captureFilmStripSetting.set(false);
            var filmStripModel = (_Timeline_TimelinePanel_TimelinePanel_instance_performanceModel = Timeline.TimelinePanel.TimelinePanel.instance().performanceModel) === null || _Timeline_TimelinePanel_TimelinePanel_instance_performanceModel === void 0 ? void 0 : _Timeline_TimelinePanel_TimelinePanel_instance_performanceModel.filmStripModel();
            var frames = filmStripModel.frames();
            test.assertTrue(frames.length > 4 && typeof frames.length === 'number');
            loadFrameImages(frames);
        }
        function loadFrameImages(frames) {
            var readyImages = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = frames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var frame = _step.value;
                    frame.imageDataPromise().then(onGotImageData);
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
            function onGotImageData(dataUri) {
                var image = new Image();
                test.assertTrue(Boolean(dataUri), 'No image data for frame');
                image.addEventListener('load', onLoad);
                image.src = dataUri;
            }
            function onLoad(event) {
                readyImages.push(event.target);
                if (readyImages.length === frames.length) {
                    validateImagesAndCompleteTest(readyImages);
                }
            }
        }
        function validateImagesAndCompleteTest(images) {
            var redCount = 0;
            var greenCount = 0;
            var blueCount = 0;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var image = _step.value;
                    test.assertTrue(image.naturalWidth > 10);
                    test.assertTrue(image.naturalHeight > 10);
                    canvas.width = image.naturalWidth;
                    canvas.height = image.naturalHeight;
                    ctx.drawImage(image, 0, 0);
                    var data = ctx.getImageData(0, 0, 1, 1);
                    var color = Array.prototype.join.call(data.data, ',');
                    if (data.data[0] > 200) {
                        redCount++;
                    } else if (data.data[1] > 200) {
                        greenCount++;
                    } else if (data.data[2] > 200) {
                        blueCount++;
                    } else {
                        test.fail('Unexpected color: ' + color);
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
            test.assertTrue(redCount && greenCount && blueCount, 'Color check failed');
            test.releaseControl();
        }
        test.takeControl();
    };
    TestSuite.prototype.testSettings = function() {
        var test = this;
        createSettings();
        test.takeControl();
        setTimeout(reset, 0);
        function createSettings() {
            var localSetting = Common.Settings.Settings.instance().createLocalSetting('local', undefined);
            localSetting.set({
                s: 'local',
                n: 1
            });
            var globalSetting = Common.Settings.Settings.instance().createSetting('global', undefined);
            globalSetting.set({
                s: 'global',
                n: 2
            });
        }
        function reset() {
            Root.Runtime.experiments.clearForTest();
            Host.InspectorFrontendHost.getPreferences(gotPreferences);
        }
        function gotPreferences(prefs) {
            Main.Main.instanceForTest.createSettings(prefs);
            var localSetting = Common.Settings.Settings.instance().createLocalSetting('local', undefined);
            test.assertEquals('object', _type_of(localSetting.get()));
            test.assertEquals('local', localSetting.get().s);
            test.assertEquals(1, localSetting.get().n);
            var globalSetting = Common.Settings.Settings.instance().createSetting('global', undefined);
            test.assertEquals('object', _type_of(globalSetting.get()));
            test.assertEquals('global', globalSetting.get().s);
            test.assertEquals(2, globalSetting.get().n);
            test.releaseControl();
        }
    };
    TestSuite.prototype.testWindowInitializedOnNavigateBack = function() {
        var test = this;
        test.takeControl();
        var messages = SDK.ConsoleModel.ConsoleModel.allMessagesUnordered();
        if (messages.length === 1) {
            checkMessages();
        } else {
            SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, checkMessages.bind(this), this);
        }
        function checkMessages() {
            var messages = SDK.ConsoleModel.ConsoleModel.allMessagesUnordered();
            test.assertEquals(1, messages.length);
            test.assertTrue(messages[0].messageText.indexOf('Uncaught') === -1);
            test.releaseControl();
        }
    };
    TestSuite.prototype.testConsoleContextNames = function() {
        var _this = this;
        var test = this;
        test.takeControl();
        this.showPanel('console').then(function() {
            return _this._waitForExecutionContexts(2, onExecutionContexts.bind(_this));
        });
        function onExecutionContexts() {
            var consoleView = Console.ConsoleView.instance();
            var selector = consoleView.consoleContextSelector;
            var values = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = selector.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var item = _step.value;
                    values.push(selector.titleFor(item));
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
            test.assertEquals('top', values[0]);
            test.assertEquals('Simple content script', values[1]);
            test.releaseControl();
        }
    };
    TestSuite.prototype.testRawHeadersWithHSTS = function(url) {
        var test = this;
        test.takeControl({
            slownessFactor: 10
        });
        SDK.TargetManager.TargetManager.instance().addModelListener(SDK.NetworkManager.NetworkManager, SDK.NetworkManager.Events.ResponseReceived, onResponseReceived);
        this.evaluateInConsole_("\n      let img = document.createElement('img');\n      img.src = \"".concat(url, '";\n      document.body.appendChild(img);\n    '), function() {});
        var count = 0;
        function onResponseReceived(event) {
            var networkRequest = event.data.request;
            if (!networkRequest.url().startsWith('http')) {
                return;
            }
            switch(++count){
                case 1:
                    test.assertEquals(301, networkRequest.statusCode);
                    test.assertEquals('Moved Permanently', networkRequest.statusText);
                    test.assertTrue(url.endsWith(networkRequest.responseHeaderValue('Location')));
                    break;
                case 2:
                    test.assertTrue(networkRequest.url().startsWith('http://'));
                    test.assertEquals(307, networkRequest.statusCode);
                    test.assertEquals('Internal Redirect', networkRequest.statusText);
                    test.assertEquals('HSTS', networkRequest.responseHeaderValue('Non-Authoritative-Reason'));
                    test.assertTrue(networkRequest.responseHeaderValue('Location').startsWith('https://'));
                    break;
                case 3:
                    test.assertTrue(networkRequest.url().startsWith('https://'));
                    test.assertTrue(networkRequest.requestHeaderValue('Referer').startsWith('http://127.0.0.1'));
                    test.assertEquals(200, networkRequest.statusCode);
                    test.assertEquals('OK', networkRequest.statusText);
                    test.assertEquals('132', networkRequest.responseHeaderValue('Content-Length'));
                    test.releaseControl();
            }
        }
    };
    TestSuite.prototype.testDOMWarnings = function() {
        var messages = SDK.ConsoleModel.ConsoleModel.allMessagesUnordered();
        this.assertEquals(1, messages.length);
        var expectedPrefix = '[DOM] Found 2 elements with non-unique id #dup:';
        this.assertTrue(messages[0].messageText.startsWith(expectedPrefix));
    };
    TestSuite.prototype.waitForTestResultsInConsole = function() {
        var messages = SDK.ConsoleModel.ConsoleModel.allMessagesUnordered();
        for(var i = 0; i < messages.length; ++i){
            var text = messages[i].messageText;
            if (text === 'PASS') {
                return;
            }
            if (/^FAIL/.test(text)) {
                this.fail(text);
            } // This will throw.
        }
        // Neither PASS nor FAIL, so wait for more messages.
        function onConsoleMessage(event) {
            var text = event.data.messageText;
            if (text === 'PASS') {
                this.releaseControl();
            } else if (/^FAIL/.test(text)) {
                this.fail(text);
            }
        }
        SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage, this);
        this.takeControl({
            slownessFactor: 10
        });
    };
    TestSuite.prototype.waitForTestResultsAsMessage = function() {
        var _this = this;
        var onMessage = function(event) {
            if (!event.data.testOutput) {
                return;
            }
            top.removeEventListener('message', onMessage);
            var text = event.data.testOutput;
            if (text === 'PASS') {
                _this.releaseControl();
            } else {
                _this.fail(text);
            }
        };
        top.addEventListener('message', onMessage);
        this.takeControl();
    };
    TestSuite.prototype._overrideMethod = function(receiver, methodName, override) {
        var original = receiver[methodName];
        if (typeof original !== 'function') {
            this.fail("TestSuite._overrideMethod: ".concat(methodName, " is not a function"));
            return;
        }
        receiver[methodName] = function() {
            var value;
            try {
                value = original.apply(receiver, arguments);
            } finally{
                receiver[methodName] = original;
            }
            override.apply(original, arguments);
            return value;
        };
    };
    TestSuite.prototype.startTimeline = function(callback) {
        var test = this;
        this.showPanel('timeline').then(function() {
            var timeline = Timeline.TimelinePanel.TimelinePanel.instance();
            test._overrideMethod(timeline, 'recordingStarted', callback);
            timeline._toggleRecording();
        });
    };
    TestSuite.prototype.stopTimeline = function(callback) {
        var timeline = Timeline.TimelinePanel.TimelinePanel.instance();
        this._overrideMethod(timeline, 'loadingComplete', callback);
        timeline._toggleRecording();
    };
    TestSuite.prototype.invokePageFunctionAsync = function(functionName, opt_args, callback_is_always_last) {
        var callback = arguments[arguments.length - 1];
        var doneMessage = "DONE: ".concat(functionName, ".").concat(++this._asyncInvocationId);
        var argsString = arguments.length < 3 ? '' : Array.prototype.slice.call(arguments, 1, -1).map(function(arg) {
            return JSON.stringify(arg);
        }).join(',') + ',';
        this.evaluateInConsole_("".concat(functionName, "(").concat(argsString, " function() { console.log('").concat(doneMessage, "'); });"), function() {});
        SDK.TargetManager.TargetManager.instance().addModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage);
        function onConsoleMessage(event) {
            var text = event.data.messageText;
            if (text === doneMessage) {
                SDK.TargetManager.TargetManager.instance().removeModelListener(SDK.ConsoleModel.ConsoleModel, SDK.ConsoleModel.Events.MessageAdded, onConsoleMessage);
                callback();
            }
        }
    };
    TestSuite.prototype.invokeAsyncWithTimeline_ = function(functionName, callback) {
        var test = this;
        this.startTimeline(onRecordingStarted);
        function onRecordingStarted() {
            test.invokePageFunctionAsync(functionName, pageActionsDone);
        }
        function pageActionsDone() {
            test.stopTimeline(callback);
        }
    };
    TestSuite.prototype.enableExperiment = function(name) {
        Root.Runtime.experiments.enableForTest(name);
    };
    TestSuite.prototype.testInspectedElementIs = function() {
        var _ref = _async_to_generator(function(nodeName) {
            var _this, Elements;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _this = this;
                        this.takeControl();
                        return [
                            4,
                            self.runtime.loadLegacyModule('panels/elements/elements.js')
                        ];
                    case 1:
                        Elements = _state.sent();
                        if (!!Elements.ElementsPanel.ElementsPanel.firstInspectElementNodeNameForTest) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            new Promise(function(f) {
                                return _this.addSniffer(Elements.ElementsPanel.ElementsPanel, 'firstInspectElementCompletedForTest', f);
                            })
                        ];
                    case 2:
                        _state.sent();
                        _state.label = 3;
                    case 3:
                        this.assertEquals(nodeName, Elements.ElementsPanel.ElementsPanel.firstInspectElementNodeNameForTest);
                        this.releaseControl();
                        return [
                            2
                        ];
                }
            });
        });
        return function(nodeName) {
            return _ref.apply(this, arguments);
        };
    }();
    TestSuite.prototype.testDisposeEmptyBrowserContext = function() {
        var _ref = _async_to_generator(function(url) {
            var _SDK_TargetManager_TargetManager_instance_rootTarget, targetAgent, browserContextId, response1, response2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        this.takeControl();
                        targetAgent = (_SDK_TargetManager_TargetManager_instance_rootTarget = SDK.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.targetAgent();
                        return [
                            4,
                            targetAgent.invoke_createBrowserContext()
                        ];
                    case 1:
                        browserContextId = _state.sent().browserContextId;
                        return [
                            4,
                            targetAgent.invoke_getBrowserContexts()
                        ];
                    case 2:
                        response1 = _state.sent();
                        this.assertEquals(response1.browserContextIds.length, 1);
                        return [
                            4,
                            targetAgent.invoke_disposeBrowserContext({
                                browserContextId: browserContextId
                            })
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            targetAgent.invoke_getBrowserContexts()
                        ];
                    case 4:
                        response2 = _state.sent();
                        this.assertEquals(response2.browserContextIds.length, 0);
                        this.releaseControl();
                        return [
                            2
                        ];
                }
            });
        });
        return function(url) {
            return _ref.apply(this, arguments);
        };
    }();
    TestSuite.prototype.testNewWindowFromBrowserContext = function() {
        var _ref = _async_to_generator(function(url) {
            var _SDK_TargetManager_TargetManager_instance_rootTarget, targetAgent, browserContextId, targetId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        this.takeControl();
                        // Create a BrowserContext.
                        targetAgent = (_SDK_TargetManager_TargetManager_instance_rootTarget = SDK.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.targetAgent();
                        return [
                            4,
                            targetAgent.invoke_createBrowserContext()
                        ];
                    case 1:
                        browserContextId = _state.sent().browserContextId;
                        return [
                            4,
                            targetAgent.invoke_createTarget({
                                url: 'data:text/html,<!DOCTYPE html>',
                                browserContextId: browserContextId,
                                newWindow: true
                            })
                        ];
                    case 2:
                        targetId = _state.sent().targetId;
                        return [
                            4,
                            targetAgent.invoke_attachToTarget({
                                targetId: targetId,
                                flatten: true
                            })
                        ];
                    case 3:
                        _state.sent();
                        // Destroy the temp profile.
                        return [
                            4,
                            targetAgent.invoke_disposeBrowserContext({
                                browserContextId: browserContextId
                            })
                        ];
                    case 4:
                        _state.sent();
                        this.releaseControl();
                        return [
                            2
                        ];
                }
            });
        });
        return function(url) {
            return _ref.apply(this, arguments);
        };
    }();
    TestSuite.prototype.testCreateBrowserContext = function() {
        var _ref = _async_to_generator(function(url) {
            var _SDK_TargetManager_TargetManager_instance_rootTarget, browserContextIds, targetAgent, target1, target2, response, _, _1, _2, _3, _4, _5, _6, _7, removedTargets;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        this.takeControl();
                        browserContextIds = [];
                        targetAgent = (_SDK_TargetManager_TargetManager_instance_rootTarget = SDK.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.targetAgent();
                        return [
                            4,
                            createIsolatedTarget(url, browserContextIds)
                        ];
                    case 1:
                        target1 = _state.sent();
                        return [
                            4,
                            createIsolatedTarget(url, browserContextIds)
                        ];
                    case 2:
                        target2 = _state.sent();
                        return [
                            4,
                            targetAgent.invoke_getBrowserContexts()
                        ];
                    case 3:
                        response = _state.sent();
                        this.assertEquals(response.browserContextIds.length, 2);
                        this.assertTrue(response.browserContextIds.includes(browserContextIds[0]));
                        this.assertTrue(response.browserContextIds.includes(browserContextIds[1]));
                        return [
                            4,
                            evalCode(target1, 'localStorage.setItem("page1", "page1")')
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            evalCode(target2, 'localStorage.setItem("page2", "page2")')
                        ];
                    case 5:
                        _state.sent();
                        _1 = (_ = this).assertEquals;
                        return [
                            4,
                            evalCode(target1, 'localStorage.getItem("page1")')
                        ];
                    case 6:
                        _1.apply(_, [
                            _state.sent(),
                            'page1'
                        ]);
                        _3 = (_2 = this).assertEquals;
                        return [
                            4,
                            evalCode(target1, 'localStorage.getItem("page2")')
                        ];
                    case 7:
                        _3.apply(_2, [
                            _state.sent(),
                            null
                        ]);
                        _5 = (_4 = this).assertEquals;
                        return [
                            4,
                            evalCode(target2, 'localStorage.getItem("page1")')
                        ];
                    case 8:
                        _5.apply(_4, [
                            _state.sent(),
                            null
                        ]);
                        _7 = (_6 = this).assertEquals;
                        return [
                            4,
                            evalCode(target2, 'localStorage.getItem("page2")')
                        ];
                    case 9:
                        _7.apply(_6, [
                            _state.sent(),
                            'page2'
                        ]);
                        removedTargets = [];
                        SDK.TargetManager.TargetManager.instance().observeTargets({
                            targetAdded: function() {},
                            targetRemoved: function(target) {
                                return removedTargets.push(target);
                            }
                        });
                        return [
                            4,
                            Promise.all([
                                disposeBrowserContext(browserContextIds[0]),
                                disposeBrowserContext(browserContextIds[1])
                            ])
                        ];
                    case 10:
                        _state.sent();
                        this.assertEquals(removedTargets.length, 2);
                        this.assertEquals(removedTargets.indexOf(target1) !== -1, true);
                        this.assertEquals(removedTargets.indexOf(target2) !== -1, true);
                        this.releaseControl();
                        return [
                            2
                        ];
                }
            });
        });
        return function(url) {
            return _ref.apply(this, arguments);
        };
    }();
    function createIsolatedTarget(url, opt_browserContextIds) {
        return _createIsolatedTarget.apply(this, arguments);
    }
    function _createIsolatedTarget() {
        _createIsolatedTarget = /**
   * @param {string} url
   * @return {!Promise<!SDK.Target.Target>}
   */ _async_to_generator(function(url, opt_browserContextIds) {
            var _SDK_TargetManager_TargetManager_instance_rootTarget, targetAgent, browserContextId, targetId, target, pageAgent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        targetAgent = (_SDK_TargetManager_TargetManager_instance_rootTarget = SDK.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.targetAgent();
                        return [
                            4,
                            targetAgent.invoke_createBrowserContext()
                        ];
                    case 1:
                        browserContextId = _state.sent().browserContextId;
                        if (opt_browserContextIds) {
                            opt_browserContextIds.push(browserContextId);
                        }
                        return [
                            4,
                            targetAgent.invoke_createTarget({
                                url: 'about:blank',
                                browserContextId: browserContextId
                            })
                        ];
                    case 2:
                        targetId = _state.sent().targetId;
                        return [
                            4,
                            targetAgent.invoke_attachToTarget({
                                targetId: targetId,
                                flatten: true
                            })
                        ];
                    case 3:
                        _state.sent();
                        target = SDK.TargetManager.TargetManager.instance().targets().find(function(target) {
                            return target.id() === targetId;
                        });
                        pageAgent = target.pageAgent();
                        return [
                            4,
                            pageAgent.invoke_enable()
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            pageAgent.invoke_navigate({
                                url: url
                            })
                        ];
                    case 5:
                        _state.sent();
                        return [
                            2,
                            target
                        ];
                }
            });
        });
        return _createIsolatedTarget.apply(this, arguments);
    }
    function disposeBrowserContext(browserContextId) {
        return _disposeBrowserContext.apply(this, arguments);
    }
    function _disposeBrowserContext() {
        _disposeBrowserContext = _async_to_generator(function(browserContextId) {
            var _SDK_TargetManager_TargetManager_instance_rootTarget, targetAgent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        targetAgent = (_SDK_TargetManager_TargetManager_instance_rootTarget = SDK.TargetManager.TargetManager.instance().rootTarget()) === null || _SDK_TargetManager_TargetManager_instance_rootTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_rootTarget.targetAgent();
                        return [
                            4,
                            targetAgent.invoke_disposeBrowserContext({
                                browserContextId: browserContextId
                            })
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _disposeBrowserContext.apply(this, arguments);
    }
    function evalCode(target, code) {
        return _evalCode.apply(this, arguments);
    }
    function _evalCode() {
        _evalCode = _async_to_generator(function(target, code) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            target.runtimeAgent().invoke_evaluate({
                                expression: code
                            })
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent().result.value
                        ];
                }
            });
        });
        return _evalCode.apply(this, arguments);
    }
    TestSuite.prototype.testInputDispatchEventsToOOPIF = /*#__PURE__*/ _async_to_generator(function() {
        var _this, _SDK_TargetManager_TargetManager_instance_primaryPageTarget, _SDK_TargetManager_TargetManager_instance_primaryPageTarget1, parentFrameOutput, childFrameOutput, inputAgent, runtimeAgent, _, _1, _tmp, _2, _3, _tmp1, _4, _5, _tmp2, _6, _7, _tmp3, _8, _9, _tmp4, _10, _11, _tmp5;
        function takeLogs(target) {
            return _takeLogs.apply(this, arguments);
        }
        function _takeLogs() {
            _takeLogs = _async_to_generator(function(target) {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                evalCode(target, "\n        (function() {\n          var result = window.logs.join(' ');\n          window.logs = [];\n          return result;\n        })()")
                            ];
                        case 1:
                            return [
                                2,
                                _state.sent()
                            ];
                    }
                });
            });
            return _takeLogs.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    this.takeControl();
                    return [
                        4,
                        new Promise(function(callback) {
                            return _this._waitForTargets(2, callback);
                        })
                    ];
                case 1:
                    _state.sent();
                    inputAgent = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.inputAgent();
                    runtimeAgent = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget1 = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget1 === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget1.runtimeAgent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mousePressed',
                            button: 'left',
                            clickCount: 1,
                            x: 10,
                            y: 10
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mouseMoved',
                            button: 'left',
                            clickCount: 1,
                            x: 10,
                            y: 20
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mouseReleased',
                            button: 'left',
                            clickCount: 1,
                            x: 10,
                            y: 20
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mousePressed',
                            button: 'left',
                            clickCount: 1,
                            x: 230,
                            y: 140
                        })
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mouseMoved',
                            button: 'left',
                            clickCount: 1,
                            x: 230,
                            y: 150
                        })
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchMouseEvent({
                            type: 'mouseReleased',
                            button: 'left',
                            clickCount: 1,
                            x: 230,
                            y: 150
                        })
                    ];
                case 7:
                    _state.sent();
                    parentFrameOutput = 'Event type: mousedown button: 0 x: 10 y: 10 Event type: mouseup button: 0 x: 10 y: 20';
                    _1 = (_ = this).assertEquals;
                    _tmp = [
                        parentFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[0])
                    ];
                case 8:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    childFrameOutput = 'Event type: mousedown button: 0 x: 30 y: 40 Event type: mouseup button: 0 x: 30 y: 50';
                    _3 = (_2 = this).assertEquals;
                    _tmp1 = [
                        childFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[1])
                    ];
                case 9:
                    _3.apply(_2, _tmp1.concat([
                        _state.sent()
                    ]));
                    return [
                        4,
                        inputAgent.invoke_dispatchKeyEvent({
                            type: 'keyDown',
                            key: 'a'
                        })
                    ];
                case 10:
                    _state.sent();
                    return [
                        4,
                        runtimeAgent.invoke_evaluate({
                            expression: 'document.querySelector(\'iframe\').focus()'
                        })
                    ];
                case 11:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchKeyEvent({
                            type: 'keyDown',
                            key: 'a'
                        })
                    ];
                case 12:
                    _state.sent();
                    parentFrameOutput = 'Event type: keydown';
                    _5 = (_4 = this).assertEquals;
                    _tmp2 = [
                        parentFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[0])
                    ];
                case 13:
                    _5.apply(_4, _tmp2.concat([
                        _state.sent()
                    ]));
                    childFrameOutput = 'Event type: keydown';
                    _7 = (_6 = this).assertEquals;
                    _tmp3 = [
                        childFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[1])
                    ];
                case 14:
                    _7.apply(_6, _tmp3.concat([
                        _state.sent()
                    ]));
                    return [
                        4,
                        inputAgent.invoke_dispatchTouchEvent({
                            type: 'touchStart',
                            touchPoints: [
                                {
                                    x: 10,
                                    y: 10
                                }
                            ]
                        })
                    ];
                case 15:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchTouchEvent({
                            type: 'touchEnd',
                            touchPoints: []
                        })
                    ];
                case 16:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchTouchEvent({
                            type: 'touchStart',
                            touchPoints: [
                                {
                                    x: 230,
                                    y: 140
                                }
                            ]
                        })
                    ];
                case 17:
                    _state.sent();
                    return [
                        4,
                        inputAgent.invoke_dispatchTouchEvent({
                            type: 'touchEnd',
                            touchPoints: []
                        })
                    ];
                case 18:
                    _state.sent();
                    parentFrameOutput = 'Event type: touchstart touch x: 10 touch y: 10';
                    _9 = (_8 = this).assertEquals;
                    _tmp4 = [
                        parentFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[0])
                    ];
                case 19:
                    _9.apply(_8, _tmp4.concat([
                        _state.sent()
                    ]));
                    childFrameOutput = 'Event type: touchstart touch x: 30 touch y: 40';
                    _11 = (_10 = this).assertEquals;
                    _tmp5 = [
                        childFrameOutput
                    ];
                    return [
                        4,
                        takeLogs(SDK.TargetManager.TargetManager.instance().targets()[1])
                    ];
                case 20:
                    _11.apply(_10, _tmp5.concat([
                        _state.sent()
                    ]));
                    this.releaseControl();
                    return [
                        2
                    ];
            }
        });
    });
    TestSuite.prototype.testLoadResourceForFrontend = function() {
        var _ref = _async_to_generator(function(baseURL, fileURL) {
            var _SDK_TargetManager_TargetManager_instance_primaryPageTarget, _SDK_TargetManager_TargetManager_instance_primaryPageTarget1, test, loggedHeaders;
            function testCase(url, headers, expectedStatus, expectedHeaders, expectedContent) {
                return new Promise(function(fulfill) {
                    var callback = function callback(success, headers, content, errorDescription) {
                        test.assertEquals(expectedStatus, errorDescription.statusCode);
                        var headersArray = [];
                        for(var name in headers){
                            var nameLower = name.toLowerCase();
                            if (loggedHeaders.has(nameLower)) {
                                headersArray.push(nameLower);
                            }
                        }
                        headersArray.sort();
                        test.assertEquals(expectedHeaders.join(', '), headersArray.join(', '));
                        test.assertEquals(expectedContent, content);
                        fulfill();
                    };
                    HostModule.ResourceLoader.load(url, headers, callback);
                });
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        test = this;
                        loggedHeaders = new Set([
                            'cache-control',
                            'pragma'
                        ]);
                        this.takeControl({
                            slownessFactor: 10
                        });
                        return [
                            4,
                            testCase(baseURL + 'non-existent.html', undefined, 404, [], '')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testCase(baseURL + 'hello.html', undefined, 200, [], '<!doctype html>\n<p>hello</p>\n')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            testCase(baseURL + 'echoheader?x-devtools-test', {
                                'x-devtools-test': 'Foo'
                            }, 200, [
                                'cache-control'
                            ], 'Foo')
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            testCase(baseURL + 'set-header?pragma:%20no-cache', undefined, 200, [
                                'pragma'
                            ], 'pragma: no-cache')
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.runtimeAgent().invoke_evaluate({
                                expression: "fetch(\"/set-cookie?devtools-test-cookie=Bar\",\n                         {credentials: 'include'})",
                                awaitPromise: true
                            })
                        ];
                    case 5:
                        _state.sent();
                        return [
                            4,
                            testCase(baseURL + 'echoheader?Cookie', undefined, 200, [
                                'cache-control'
                            ], 'devtools-test-cookie=Bar')
                        ];
                    case 6:
                        _state.sent();
                        return [
                            4,
                            (_SDK_TargetManager_TargetManager_instance_primaryPageTarget1 = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget1 === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget1.runtimeAgent().invoke_evaluate({
                                expression: "fetch(\"/set-cookie?devtools-test-cookie=same-site-cookie;SameSite=Lax\",\n                         {credentials: 'include'})",
                                awaitPromise: true
                            })
                        ];
                    case 7:
                        _state.sent();
                        return [
                            4,
                            testCase(baseURL + 'echoheader?Cookie', undefined, 200, [
                                'cache-control'
                            ], 'devtools-test-cookie=same-site-cookie')
                        ];
                    case 8:
                        _state.sent();
                        return [
                            4,
                            testCase('data:text/html,<body>hello</body>', undefined, 200, [], '<body>hello</body>')
                        ];
                    case 9:
                        _state.sent();
                        return [
                            4,
                            testCase(fileURL, undefined, 200, [], '<!DOCTYPE html>\n<html>\n<body>\nDummy page.\n</body>\n</html>\n')
                        ];
                    case 10:
                        _state.sent();
                        return [
                            4,
                            testCase(fileURL + 'thisfileshouldnotbefound', undefined, 404, [], '')
                        ];
                    case 11:
                        _state.sent();
                        this.releaseControl();
                        return [
                            2
                        ];
                }
            });
        });
        return function(baseURL, fileURL) {
            return _ref.apply(this, arguments);
        };
    }();
    TestSuite.prototype.testExtensionWebSocketUserAgentOverride = function() {
        var _ref = _async_to_generator(function(websocketPort) {
            var testUserAgent;
            function onRequestUpdated(event) {
                var request = event.data;
                if (request.resourceType() !== Common.ResourceType.resourceTypes.WebSocket) {
                    return;
                }
                if (!request.requestHeadersText()) {
                    return;
                }
                var actualUserAgent = 'no user-agent header';
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = request.requestHeaders()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, name = _step_value.name, value = _step_value.value;
                        if (name.toLowerCase() === 'user-agent') {
                            actualUserAgent = value;
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
                this.assertEquals(testUserAgent, actualUserAgent);
                this.releaseControl();
            }
            return _ts_generator(this, function(_state) {
                this.takeControl();
                testUserAgent = 'test user agent';
                SDK.NetworkManager.MultitargetNetworkManager.instance().setUserAgentOverride(testUserAgent, null);
                SDK.TargetManager.TargetManager.instance().addModelListener(SDK.NetworkManager.NetworkManager, SDK.NetworkManager.Events.RequestUpdated, onRequestUpdated.bind(this));
                this.evaluateInConsole_("new WebSocket('ws://127.0.0.1:".concat(websocketPort, "')"), function() {});
                return [
                    2
                ];
            });
        });
        return function(websocketPort) {
            return _ref.apply(this, arguments);
        };
    }();
    TestSuite.prototype.testExtensionWebSocketOfflineNetworkConditions = function() {
        var _ref = _async_to_generator(function(websocketPort) {
            var _this;
            return _ts_generator(this, function(_state) {
                _this = this;
                SDK.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(SDK.NetworkManager.OfflineConditions);
                // TODO(crbug.com/1263900): Currently we don't send loadingFailed for web sockets.
                // Update this once we do.
                this.addSniffer(SDK.NetworkManager.NetworkDispatcher.prototype, 'webSocketClosed', function() {
                    _this.releaseControl();
                });
                this.takeControl();
                this.evaluateInConsole_("new WebSocket('ws://127.0.0.1:".concat(websocketPort, "/echo-with-no-extension')"), function() {});
                return [
                    2
                ];
            });
        });
        return function(websocketPort) {
            return _ref.apply(this, arguments);
        };
    }();
    /**
   * Serializes array of uiSourceCodes to string.
   * @param {!Array.<!Workspace.UISourceCode>} uiSourceCodes
   * @return {string}
   */ TestSuite.prototype.uiSourceCodesToString_ = function(uiSourceCodes) {
        var names = [];
        for(var i = 0; i < uiSourceCodes.length; i++){
            names.push('"' + uiSourceCodes[i].url() + '"');
        }
        return names.join(',');
    };
    TestSuite.prototype.testSourceMapsFromExtension = function(extensionId) {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        this.takeControl();
        var debuggerModel = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.model(SDK.DebuggerModel.DebuggerModel);
        debuggerModel.sourceMapManager().addEventListener(SDK.SourceMapManager.Events.SourceMapAttached, this.releaseControl.bind(this));
        this.evaluateInConsole_("console.log(1) //# sourceMappingURL=chrome-extension://".concat(extensionId, "/source.map"), function() {});
    };
    TestSuite.prototype.testSourceMapsFromDevtools = function() {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        this.takeControl();
        var debuggerModel = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.model(SDK.DebuggerModel.DebuggerModel);
        debuggerModel.sourceMapManager().addEventListener(SDK.SourceMapManager.Events.SourceMapWillAttach, this.releaseControl.bind(this));
        this.evaluateInConsole_('console.log(1) //# sourceMappingURL=devtools://devtools/bundled/devtools_compatibility.js', function() {});
    };
    TestSuite.prototype.testDoesNotCrashOnSourceMapsFromUnknownScheme = function() {
        this.evaluateInConsole_('console.log(1) //# sourceMappingURL=invalid-scheme://source.map', function() {});
    };
    /**
   * Returns all loaded non anonymous uiSourceCodes.
   * @return {!Array.<!Workspace.UISourceCode>}
   */ TestSuite.prototype.nonAnonymousUISourceCodes_ = function() {
        /**
     * @param {!Workspace.UISourceCode} uiSourceCode
     */ function filterOutService(uiSourceCode) {
            return !uiSourceCode.project().isServiceProject();
        }
        var uiSourceCodes = Workspace.Workspace.WorkspaceImpl.instance().uiSourceCodes();
        return uiSourceCodes.filter(filterOutService);
    };
    /*
 * Evaluates the code in the console as if user typed it manually and invokes
 * the callback when the result message is received and added to the console.
 * @param {string} code
 * @param {function(string)} callback
 */ TestSuite.prototype.evaluateInConsole_ = function(code, callback) {
        function innerEvaluate() {
            UI.Context.Context.instance().removeFlavorChangeListener(SDK.RuntimeModel.ExecutionContext, showConsoleAndEvaluate, this);
            var consoleView = Console.ConsoleView.instance();
            consoleView.prompt.appendCommand(code);
            this.addSniffer(Console.ConsoleView.prototype, 'consoleMessageAddedForTest', (function(viewMessage) {
                callback(viewMessage.toMessageElement().deepTextContent());
            }).bind(this));
        }
        function showConsoleAndEvaluate() {
            Common.Console.Console.instance().showPromise().then(innerEvaluate.bind(this));
        }
        if (!UI.Context.Context.instance().flavor(SDK.RuntimeModel.ExecutionContext)) {
            UI.Context.Context.instance().addFlavorChangeListener(SDK.RuntimeModel.ExecutionContext, showConsoleAndEvaluate, this);
            return;
        }
        showConsoleAndEvaluate.call(this);
    };
    /**
   * Checks that all expected scripts are present in the scripts list
   * in the Scripts panel.
   * @param {!Array.<string>} expected Regular expressions describing
   *     expected script names.
   * @return {boolean} Whether all the scripts are in "scripts-files" select
   *     box
   */ TestSuite.prototype._scriptsAreParsed = function(expected) {
        var uiSourceCodes = this.nonAnonymousUISourceCodes_();
        // Check that at least all the expected scripts are present.
        var missing = expected.slice(0);
        for(var i = 0; i < uiSourceCodes.length; ++i){
            for(var j = 0; j < missing.length; ++j){
                if (uiSourceCodes[i].name().search(missing[j]) !== -1) {
                    missing.splice(j, 1);
                    break;
                }
            }
        }
        return missing.length === 0;
    };
    /**
   * Waits for script pause, checks expectations, and invokes the callback.
   * @param {function():void} callback
   */ TestSuite.prototype._waitForScriptPause = function(callback) {
        this.addSniffer(SDK.DebuggerModel.DebuggerModel.prototype, 'pausedScript', callback);
    };
    /**
   * Waits until all the scripts are parsed and invokes the callback.
   */ TestSuite.prototype._waitUntilScriptsAreParsed = function(expectedScripts, callback) {
        var test = this;
        function waitForAllScripts() {
            if (test._scriptsAreParsed(expectedScripts)) {
                callback();
            } else {
                test.addSniffer(Sources.SourcesPanel.SourcesPanel.instance().sourcesView(), 'addUISourceCode', waitForAllScripts);
            }
        }
        waitForAllScripts();
    };
    TestSuite.prototype._waitForTargets = function(n, callback) {
        checkTargets.call(this);
        function checkTargets() {
            if (SDK.TargetManager.TargetManager.instance().targets().length >= n) {
                callback.call(null);
            } else {
                this.addSniffer(SDK.TargetManager.TargetManager.prototype, 'createTarget', checkTargets.bind(this));
            }
        }
    };
    TestSuite.prototype._waitForExecutionContexts = function(n, callback) {
        var _SDK_TargetManager_TargetManager_instance_primaryPageTarget;
        var runtimeModel = (_SDK_TargetManager_TargetManager_instance_primaryPageTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget()) === null || _SDK_TargetManager_TargetManager_instance_primaryPageTarget === void 0 ? void 0 : _SDK_TargetManager_TargetManager_instance_primaryPageTarget.model(SDK.RuntimeModel.RuntimeModel);
        checkForExecutionContexts.call(this);
        function checkForExecutionContexts() {
            if (runtimeModel.executionContexts().length >= n) {
                callback.call(null);
            } else {
                this.addSniffer(SDK.RuntimeModel.RuntimeModel.prototype, 'executionContextCreated', checkForExecutionContexts.bind(this));
            }
        }
    };
    window1.uiTests = new TestSuite(window1.domAutomationController);
})(window);


}),

}]);