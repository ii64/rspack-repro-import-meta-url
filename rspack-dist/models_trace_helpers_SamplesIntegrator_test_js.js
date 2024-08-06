"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_helpers_SamplesIntegrator_test_js"], {
"./models/trace/helpers/SamplesIntegrator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/cpu_profile/cpu_profile.js */ "./models/cpu_profile/cpu_profile.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('SamplesIntegrator', function() {
    var scriptId = 'Peperoni';
    var url = '';
    var lineNumber = -1;
    var columnNumber = -1;
    var pid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProcessID(0);
    var tid = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ThreadID(0);
    // Profile contains the following samples:
    // |a||a||a||a|
    //       |b||b|
    var basicCDPProfile = {
        startTime: 0,
        endTime: 3000,
        nodes: [
            {
                id: 1,
                hitCount: 0,
                callFrame: {
                    functionName: '(root)',
                    scriptId: scriptId,
                    url: url,
                    lineNumber: lineNumber,
                    columnNumber: columnNumber
                },
                children: [
                    2,
                    3
                ]
            },
            {
                id: 2,
                callFrame: {
                    functionName: 'a',
                    scriptId: scriptId,
                    url: url,
                    lineNumber: lineNumber,
                    columnNumber: columnNumber
                },
                children: [
                    3
                ]
            },
            {
                id: 3,
                callFrame: {
                    functionName: 'b',
                    scriptId: scriptId,
                    url: url,
                    lineNumber: lineNumber,
                    columnNumber: columnNumber
                }
            }
        ],
        samples: [
            2,
            2,
            3,
            3
        ],
        timeDeltas: new Array(4).fill(100)
    };
    var parsedBasicProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(basicCDPProfile);
    var PROFILE_ID = _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.TraceEvents.ProfileID('fake-profile-id');
    describe('callsFromProfileSamples', function() {
        it('generates empty profile calls from a profile with samples', function() {
            var _basicCDPProfile_samples;
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            var calls = integrator.callsFromProfileSamples();
            assert.strictEqual(calls.length, (_basicCDPProfile_samples = basicCDPProfile.samples) === null || _basicCDPProfile_samples === void 0 ? void 0 : _basicCDPProfile_samples.length);
            var currentTimestamp = 0;
            assert.deepEqual(calls.map(function(c) {
                return c.callFrame.functionName;
            }), [
                'a',
                'a',
                'b',
                'b'
            ]);
            for(var i = 0; i < calls.length; i++){
                var _basicCDPProfile_timeDeltas;
                var call = calls[i];
                currentTimestamp += ((_basicCDPProfile_timeDeltas = basicCDPProfile.timeDeltas) === null || _basicCDPProfile_timeDeltas === void 0 ? void 0 : _basicCDPProfile_timeDeltas[i]) || 0;
                assert.strictEqual(call.dur, 0);
                assert.strictEqual(call.dur, 0);
                assert.strictEqual(call.ts, currentTimestamp);
                // Ensure each ProfileCall has been "linked" to the Profile and the
                // sample.
                assert.strictEqual(call.profileId, PROFILE_ID);
                assert.strictEqual(call.sampleIndex, i);
                assert.isDefined(call.nodeId);
            }
        });
        it('generates JSSamples from samples under debug mode', function() {
            var config = _object_spread({}, _trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.Configuration.defaults());
            config.debugMode = true;
            assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_4__.Types.Configuration.defaults().debugMode, false, 'Default config should not be mutable');
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid, config);
            integrator.callsFromProfileSamples();
            var jsSampleEvents = integrator.jsSampleEvents;
            assert.strictEqual(jsSampleEvents[0].ts, 100);
            assert.strictEqual(jsSampleEvents[1].ts, 200);
            assert.strictEqual(jsSampleEvents[2].ts, 300);
            assert.strictEqual(jsSampleEvents[3].ts, 400);
            assert.strictEqual(jsSampleEvents[0].dur, 0);
            assert.strictEqual(jsSampleEvents[1].dur, 0);
            assert.strictEqual(jsSampleEvents[2].dur, 0);
            assert.strictEqual(jsSampleEvents[3].dur, 0);
            assert.deepStrictEqual(jsSampleEvents[0].args.data.stackTrace.map(function(f) {
                return f.functionName;
            }), [
                'a'
            ]);
            assert.deepStrictEqual(jsSampleEvents[1].args.data.stackTrace.map(function(f) {
                return f.functionName;
            }), [
                'a'
            ]);
            assert.deepStrictEqual(jsSampleEvents[2].args.data.stackTrace.map(function(f) {
                return f.functionName;
            }), [
                'a',
                'b'
            ]);
            assert.deepStrictEqual(jsSampleEvents[3].args.data.stackTrace.map(function(f) {
                return f.functionName;
            }), [
                'a',
                'b'
            ]);
        });
    });
    describe('buildProfileCalls', function() {
        it('generates profile calls using trace events and JS samples from a trace file', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, samplesData, _samplesData_profilesInProcess_entries, _samplesData_profilesInProcess_entries_, pid, profileByThread, _profileByThread_entries, _profileByThread_entries_, tid, cpuProfileData, parsedProfile, samplesIntegrator, traceEvents, constructedCalls;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'recursive-blocking-js.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        samplesData = traceData.Samples;
                        assert.strictEqual(samplesData.profilesInProcess.size, 1);
                        _samplesData_profilesInProcess_entries = _sliced_to_array(samplesData.profilesInProcess.entries(), 1), _samplesData_profilesInProcess_entries_ = _sliced_to_array(_samplesData_profilesInProcess_entries[0], 2), pid = _samplesData_profilesInProcess_entries_[0], profileByThread = _samplesData_profilesInProcess_entries_[1];
                        _profileByThread_entries = _sliced_to_array(profileByThread.entries(), 1), _profileByThread_entries_ = _sliced_to_array(_profileByThread_entries[0], 2), tid = _profileByThread_entries_[0], cpuProfileData = _profileByThread_entries_[1];
                        parsedProfile = cpuProfileData.parsedProfile;
                        samplesIntegrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
                        traceEvents = traceData.Renderer.allTraceEntries.filter(function(event) {
                            return event.pid === pid && event.tid === tid;
                        });
                        if (!traceEvents) {
                            throw new Error('Trace events were unexpectedly not found.');
                        }
                        constructedCalls = samplesIntegrator.buildProfileCalls(traceEvents);
                        assert.strictEqual(constructedCalls.length, 5131);
                        return [
                            2
                        ];
                }
            });
        }));
        it('creates JS profile calls with a top-level V8 invocation', function() {
            // After integrating with trace events, the flame chart
            // should look like:
            // |----Trace Event----|
            //           |----a----|
            //                 |-b-|
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            var callEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("FunctionCall" /* TraceModel.Types.TraceEvents.KnownEventName.FunctionCall */ , 0, 500);
            var traceEvents = [
                callEvent
            ];
            var constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 400);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        it('creates JS frame events without a top-level V8 invocation', function() {
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedBasicProfile, PROFILE_ID, pid, tid);
            var traceEvents = [];
            var constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 300);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 100);
        });
        it('creates JS frame events for mixed with/without top-level events', function() {
            // Profile contains the following samples:
            // |a|a|b|b|
            var cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: {
                            functionName: '(root)',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        },
                        children: [
                            2,
                            3
                        ]
                    },
                    {
                        id: 2,
                        callFrame: {
                            functionName: 'a',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }
                    },
                    {
                        id: 3,
                        callFrame: {
                            functionName: 'b',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }
                    }
                ],
                samples: [
                    2,
                    2,
                    3,
                    3
                ],
                timeDeltas: new Array(4).fill(100)
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //  |----a----| |--Trace Event--|
            //              |-------b-------|
            var parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            var callEvent = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("FunctionCall" /* TraceModel.Types.TraceEvents.KnownEventName.FunctionCall */ , 250, 250);
            var traceEvents = [
                callEvent
            ];
            var constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 150);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        // EvaluateScript and FunctionCall are two obvious "invocation events", but there are others (and sometimes none)
        // We must ensure we get reasonable JSFrames even when the invocation events are unexpected.
        it('creates JS frame events with v8.run trace event as parent', function() {
            // Profile contains the following samples:
            // |a|a|b|b|
            var cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: {
                            functionName: '(root)',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        },
                        children: [
                            2,
                            3
                        ]
                    },
                    {
                        id: 2,
                        callFrame: {
                            functionName: 'a',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }
                    },
                    {
                        id: 3,
                        callFrame: {
                            functionName: 'b',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }
                    }
                ],
                samples: [
                    2,
                    2,
                    3,
                    3
                ],
                timeDeltas: new Array(4).fill(100)
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //   |----------------EvaluateScript-----------------|
            //       |-----------------v8.run--------------------|
            //        |--V8.ParseFuntion--||---a---||-----b------|
            var parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            var evaluateScript = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("EvaluateScript" /* TraceModel.Types.TraceEvents.KnownEventName.EvaluateScript */ , 0, 500);
            var v8Run = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('v8.run', 10, 490);
            var parseFunction = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)('V8.ParseFunction', 12, 1);
            var traceEvents = [
                evaluateScript,
                v8Run,
                parseFunction
            ];
            var constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 2);
            assert.strictEqual(constructedCalls[0].callFrame.functionName, 'a');
            assert.strictEqual(constructedCalls[0].ts, 100);
            assert.strictEqual(constructedCalls[0].dur, 200);
            assert.strictEqual(constructedCalls[1].callFrame.functionName, 'b');
            assert.strictEqual(constructedCalls[1].ts, 300);
            assert.strictEqual(constructedCalls[1].dur, 200);
        });
        it('restarts the call frame stack when a new top level event is encountered', function() {
            // Profile contains the following samples:
            // |a||a||a||a|
            //       |b||b|
            var cdpProfile = {
                startTime: 0,
                endTime: 3000,
                nodes: [
                    {
                        id: 1,
                        hitCount: 0,
                        callFrame: {
                            functionName: '(root)',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        },
                        children: [
                            2,
                            3
                        ]
                    },
                    {
                        id: 2,
                        callFrame: {
                            functionName: 'a',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        },
                        children: [
                            3
                        ]
                    },
                    {
                        id: 3,
                        callFrame: {
                            functionName: 'b',
                            scriptId: scriptId,
                            url: url,
                            lineNumber: lineNumber,
                            columnNumber: columnNumber
                        }
                    }
                ],
                samples: [
                    2,
                    2,
                    3,
                    3
                ],
                timeDeltas: new Array(4).fill(20)
            };
            // After integrating with trace events, the flame chart
            // should look like:
            //   |-------------------------RunTask------------------------|
            //   |----------------------EvaluateScript--------------------|
            //              |--------a-------||------RunMicroTasks------|
            //                                |-----------a------------|
            //                                |-----------b------------|
            var runTask = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("RunTask" /* TraceModel.Types.TraceEvents.KnownEventName.RunTask */ , 0, 100);
            var evaluateScript = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("EvaluateScript" /* TraceModel.Types.TraceEvents.KnownEventName.EvaluateScript */ , 0, 100);
            var runMicroTasks = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.makeCompleteEvent)("RunMicrotasks" /* TraceModel.Types.TraceEvents.KnownEventName.RunMicrotasks */ , 50, 100);
            var traceEvents = [
                runTask,
                evaluateScript,
                runMicroTasks
            ];
            var parsedProfile = new _models_cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_0__.CPUProfileDataModel.CPUProfileDataModel(cdpProfile);
            var integrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
            var constructedCalls = integrator.buildProfileCalls(traceEvents);
            assert.strictEqual(constructedCalls.length, 3);
            var framesForFunctionA = constructedCalls.filter(function(c) {
                return c.callFrame.functionName === 'a';
            });
            assert.strictEqual(framesForFunctionA.length, 2);
            var expectedATimestamp = 20;
            assert.strictEqual(framesForFunctionA[0].ts, 20);
            // First frame for function A should be finished when the
            // RunMicrotasks event started.
            assert.strictEqual(framesForFunctionA[0].dur, runMicroTasks.ts - expectedATimestamp);
            var expectedBTimestamp = 60;
            assert.strictEqual(framesForFunctionA[1].ts, expectedBTimestamp);
            assert.strictEqual(framesForFunctionA[1].dur, runMicroTasks.ts + (runMicroTasks.dur || 0) - expectedBTimestamp);
        });
        it('skips samples from (program), (idle), (root) and (garbage collector) nodes', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, samplesData, _samplesData_profilesInProcess_entries, _samplesData_profilesInProcess_entries_, pid, profileByThread, _profileByThread_entries, _profileByThread_entries_, tid, cpuProfileData, parsedProfile, samplesIntegrator, traceEvents, rootNode, programNode, idleNode, gcNode, constructedCalls, filteredNodes;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'recursive-blocking-js.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        samplesData = traceData.Samples;
                        assert.strictEqual(samplesData.profilesInProcess.size, 1);
                        _samplesData_profilesInProcess_entries = _sliced_to_array(samplesData.profilesInProcess.entries(), 1), _samplesData_profilesInProcess_entries_ = _sliced_to_array(_samplesData_profilesInProcess_entries[0], 2), pid = _samplesData_profilesInProcess_entries_[0], profileByThread = _samplesData_profilesInProcess_entries_[1];
                        _profileByThread_entries = _sliced_to_array(profileByThread.entries(), 1), _profileByThread_entries_ = _sliced_to_array(_profileByThread_entries[0], 2), tid = _profileByThread_entries_[0], cpuProfileData = _profileByThread_entries_[1];
                        parsedProfile = cpuProfileData.parsedProfile;
                        samplesIntegrator = new _trace_js__WEBPACK_IMPORTED_MODULE_4__.Helpers.SamplesIntegrator.SamplesIntegrator(parsedProfile, PROFILE_ID, pid, tid);
                        traceEvents = traceData.Renderer.allTraceEntries.filter(function(event) {
                            return event.pid === pid && event.tid === tid;
                        });
                        if (!traceEvents) {
                            throw new Error('Trace events were unexpectedly not found.');
                        }
                        rootNode = parsedProfile.root;
                        programNode = parsedProfile.programNode;
                        idleNode = parsedProfile.idleNode;
                        gcNode = parsedProfile.gcNode;
                        if (programNode === undefined || idleNode === undefined || gcNode === undefined) {
                            throw new Error('Could not find program, idle or gc node');
                        }
                        constructedCalls = samplesIntegrator.buildProfileCalls(traceEvents);
                        filteredNodes = constructedCalls.filter(function(c) {
                            return c.nodeId === rootNode.id || c.nodeId === idleNode.id || c.nodeId === programNode.id || c.nodeId === gcNode.id;
                        });
                        assert.strictEqual(filteredNodes.length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=SamplesIntegrator.test.js.map


}),

}]);