"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_SamplesHandler_test_js"], {
"./models/trace/handlers/SamplesHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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




function handleEventsFromTraceFile(context, name) {
    return _handleEventsFromTraceFile.apply(this, arguments);
}
function _handleEventsFromTraceFile() {
    _handleEventsFromTraceFile = _async_to_generator(function(context, name) {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.rawEvents(context, name)
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Meta.initialize();
                    _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Meta.handleEvent(event);
                            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.handleEvent(event);
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
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.finalize()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.data()
                    ];
            }
        });
    });
    return _handleEventsFromTraceFile.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('SamplesHandler', function() {
    var _this = this;
    var _this1 = this;
    it('finds all the profiles in a real world recording', /*#__PURE__*/ _async_to_generator(function() {
        var data, threadId, firstProcessId, secondProcessId, thirdProcessId, profilesFirstProcess, profilesSecondProcess, profilesThirdProcess;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        handleEventsFromTraceFile(_this1, 'multiple-navigations-with-iframes.json.gz')
                    ];
                case 1:
                    data = _state.sent();
                    // The same thread id is shared across profiles in the profiled
                    // processes.
                    threadId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
                    firstProcessId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(2236123);
                    secondProcessId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(2154214);
                    thirdProcessId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(2236084);
                    assert.strictEqual(data.profilesInProcess.size, 3);
                    profilesFirstProcess = data.profilesInProcess.get(firstProcessId);
                    assert.strictEqual(profilesFirstProcess === null || profilesFirstProcess === void 0 ? void 0 : profilesFirstProcess.size, 1);
                    assert.exists(profilesFirstProcess === null || profilesFirstProcess === void 0 ? void 0 : profilesFirstProcess.get(threadId));
                    profilesSecondProcess = data.profilesInProcess.get(secondProcessId);
                    assert.strictEqual(profilesSecondProcess === null || profilesSecondProcess === void 0 ? void 0 : profilesSecondProcess.size, 1);
                    assert.exists(profilesSecondProcess === null || profilesSecondProcess === void 0 ? void 0 : profilesSecondProcess.get(threadId));
                    profilesThirdProcess = data.profilesInProcess.get(thirdProcessId);
                    assert.strictEqual(profilesThirdProcess === null || profilesThirdProcess === void 0 ? void 0 : profilesThirdProcess.size, 1);
                    assert.exists(profilesThirdProcess === null || profilesThirdProcess === void 0 ? void 0 : profilesThirdProcess.get(threadId));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('profile calls building', function() {
        var makeProfileChunkEvent = function makeProfileChunkEvent(nodes, samples, timeDeltas, ts) {
            return {
                cat: '',
                name: 'ProfileChunk',
                ph: "P" /* TraceModel.Types.TraceEvents.Phase.SAMPLE */ ,
                pid: pid,
                tid: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(0),
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(ts),
                id: id,
                args: {
                    data: {
                        cpuProfile: {
                            samples: samples.map(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.CallFrameID),
                            nodes: nodes.map(function(node) {
                                return _object_spread_props(_object_spread({}, node), {
                                    callFrame: {
                                        functionName: '',
                                        scriptId: 0,
                                        columnNumber: 0,
                                        lineNumber: 0,
                                        url: ''
                                    },
                                    id: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.CallFrameID(node.id)
                                });
                            })
                        },
                        timeDeltas: timeDeltas.map(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds)
                    }
                }
            };
        };
        var pid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(0);
        var id = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProfileID('0');
        var tid = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
        it('can build profile calls from a CPU profile coming from tracing', /*#__PURE__*/ _async_to_generator(function() {
            var _data_profilesInProcess_get_get, _data_profilesInProcess_get, _data_profilesInProcess_get_get1, _data_profilesInProcess_get1, A, B, C, D, E, root, mockProfileEvent, mockTimeDeltas, mockSamples, mockChunks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, calls, tree, expectedResult, allNodes, callsTestData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        A = 0;
                        B = 1;
                        C = 2;
                        D = 3;
                        E = 4;
                        root = 9;
                        mockProfileEvent = {
                            name: 'Profile',
                            id: id,
                            args: {
                                data: {
                                    startTime: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0)
                                }
                            },
                            cat: '',
                            pid: pid,
                            tid: tid,
                            ts: _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.Timing.MicroSeconds(0),
                            ph: "P" /* TraceModel.Types.TraceEvents.Phase.SAMPLE */ 
                        };
                        /**
             * +------------> (sample at time)
             * |A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A| |E|E|E|E|E|E|
             * | |B|B|B|B|B|B| |D|D|D|D|D|D| | | | | | | | | | |
             * | | |C|C|C|C| | | | | | | | | | | | | | | | | | |
             * |
             * V (stack trace depth)
             */ mockTimeDeltas = [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23
                        ];
                        mockSamples = [
                            A,
                            B,
                            C,
                            C,
                            C,
                            C,
                            B,
                            A,
                            D,
                            D,
                            D,
                            D,
                            D,
                            D,
                            A,
                            A,
                            A,
                            E,
                            E,
                            E,
                            E,
                            E,
                            E
                        ];
                        /*
             *   A   E
             *  / \
             * B   D
             * |
             * C
             */ mockChunks = [
                            makeProfileChunkEvent([
                                {
                                    id: root,
                                    children: [
                                        A,
                                        E
                                    ]
                                }
                            ], [], [], 0),
                            makeProfileChunkEvent([
                                {
                                    id: A,
                                    children: [
                                        B,
                                        D
                                    ]
                                },
                                {
                                    id: B,
                                    children: [
                                        C
                                    ]
                                },
                                {
                                    id: C,
                                    children: []
                                }
                            ], mockSamples, mockTimeDeltas, 0),
                            makeProfileChunkEvent([
                                {
                                    id: D,
                                    children: []
                                }
                            ], [], [], 0),
                            makeProfileChunkEvent([
                                {
                                    id: E,
                                    children: []
                                }
                            ], [], [], 0)
                        ];
                        _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.initialize();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = [
                                mockProfileEvent
                            ].concat(_to_consumable_array(mockChunks))[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.handleEvent(event);
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
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.data();
                        calls = (_data_profilesInProcess_get = data.profilesInProcess.get(pid)) === null || _data_profilesInProcess_get === void 0 ? void 0 : (_data_profilesInProcess_get_get = _data_profilesInProcess_get.get(tid)) === null || _data_profilesInProcess_get_get === void 0 ? void 0 : _data_profilesInProcess_get_get.profileCalls;
                        tree = (_data_profilesInProcess_get1 = data.profilesInProcess.get(pid)) === null || _data_profilesInProcess_get1 === void 0 ? void 0 : (_data_profilesInProcess_get_get1 = _data_profilesInProcess_get1.get(tid)) === null || _data_profilesInProcess_get_get1 === void 0 ? void 0 : _data_profilesInProcess_get_get1.profileTree;
                        expectedResult = [
                            {
                                id: A,
                                ts: 0,
                                dur: 154,
                                selfTime: 58,
                                children: [
                                    B,
                                    D
                                ]
                            },
                            {
                                id: B,
                                ts: 1,
                                dur: 27,
                                selfTime: 9,
                                children: [
                                    C
                                ]
                            },
                            {
                                id: C,
                                ts: 3,
                                dur: 18,
                                selfTime: 18,
                                children: []
                            },
                            {
                                id: D,
                                ts: 36,
                                dur: 69,
                                selfTime: 69,
                                children: []
                            },
                            {
                                id: E,
                                ts: 154,
                                dur: 117,
                                selfTime: 117,
                                children: []
                            }
                        ];
                        assert.exists(tree === null || tree === void 0 ? void 0 : tree.roots);
                        if (!(tree === null || tree === void 0 ? void 0 : tree.roots)) {
                            // This shouldn't happen, but add this if check to pass ts check.
                            return [
                                2
                            ];
                        }
                        allNodes = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllNodes)(tree === null || tree === void 0 ? void 0 : tree.roots);
                        callsTestData = calls === null || calls === void 0 ? void 0 : calls.map(function(c) {
                            var node = allNodes.find(function(node) {
                                return node.id === c.nodeId;
                            });
                            var children = (node === null || node === void 0 ? void 0 : node.children) || [];
                            return {
                                id: c.nodeId,
                                dur: Math.round(c.dur || 0),
                                ts: c.ts,
                                selfTime: Math.round(c.selfTime || 0),
                                children: _to_consumable_array(children).map(function(child) {
                                    return child.id;
                                }) || []
                            };
                        });
                        assert.deepEqual(callsTestData, expectedResult);
                        return [
                            2
                        ];
                }
            });
        }));
        var _this1 = _this;
        it('can build profile calls from a CPU profile coming from a real world trace', /*#__PURE__*/ _async_to_generator(function() {
            var _profilesFirstProcess_get, _profilesFirstProcess_get1, data, threadId, firstProcessId, profilesFirstProcess, calls, tree, expectedResult, allNodes, callsTestData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            handleEventsFromTraceFile(_this1, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        data = _state.sent();
                        threadId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ThreadID(1);
                        firstProcessId = _trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.ProcessID(2236123);
                        profilesFirstProcess = data.profilesInProcess.get(firstProcessId);
                        calls = profilesFirstProcess === null || profilesFirstProcess === void 0 ? void 0 : (_profilesFirstProcess_get = profilesFirstProcess.get(threadId)) === null || _profilesFirstProcess_get === void 0 ? void 0 : _profilesFirstProcess_get.profileCalls.slice(0, 5);
                        tree = profilesFirstProcess === null || profilesFirstProcess === void 0 ? void 0 : (_profilesFirstProcess_get1 = profilesFirstProcess.get(threadId)) === null || _profilesFirstProcess_get1 === void 0 ? void 0 : _profilesFirstProcess_get1.profileTree;
                        expectedResult = [
                            {
                                'id': 2,
                                'dur': 392,
                                'ts': 643496962681,
                                'selfTime': 392,
                                'children': []
                            },
                            {
                                'id': 3,
                                'dur': 682,
                                'ts': 643496963073,
                                'selfTime': 0,
                                'children': [
                                    4
                                ]
                            },
                            {
                                'id': 4,
                                'dur': 682,
                                'ts': 643496963073,
                                'selfTime': 160,
                                'children': [
                                    5
                                ]
                            },
                            {
                                'id': 5,
                                'dur': 522,
                                'ts': 643496963233,
                                'selfTime': 178,
                                'children': [
                                    6,
                                    7
                                ]
                            },
                            {
                                'id': 6,
                                'dur': 175,
                                'ts': 643496963411,
                                'selfTime': 175,
                                'children': []
                            }
                        ];
                        assert.exists(tree === null || tree === void 0 ? void 0 : tree.roots);
                        if (!(tree === null || tree === void 0 ? void 0 : tree.roots)) {
                            // This shouldn't happen, but add this if check to pass ts check.
                            return [
                                2
                            ];
                        }
                        allNodes = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getAllNodes)(tree === null || tree === void 0 ? void 0 : tree.roots);
                        callsTestData = calls === null || calls === void 0 ? void 0 : calls.map(function(c) {
                            var node = allNodes.find(function(node) {
                                return node.id === c.nodeId;
                            });
                            var children = (node === null || node === void 0 ? void 0 : node.children) || [];
                            return {
                                id: c.nodeId,
                                dur: Math.round(c.dur || 0),
                                ts: c.ts,
                                selfTime: Math.round(c.selfTime || 0),
                                children: _to_consumable_array(children).map(function(child) {
                                    return child.id;
                                }) || []
                            };
                        });
                        assert.deepEqual(callsTestData, expectedResult);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('CPU Profile building', function() {
        var _this1 = _this;
        it('generates a CPU profile from a trace file', /*#__PURE__*/ _async_to_generator(function() {
            var _cpuProfile_samples, _cpuProfile_samples1, _cpuProfile_timeDeltas, _cpuProfile_samples2, _cpuProfile_lines, data, profileById, cpuProfileData, cpuProfile;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            handleEventsFromTraceFile(_this1, 'recursive-blocking-js.json.gz')
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.profilesInProcess.size, 1);
                        profileById = data.profilesInProcess.values().next().value;
                        assert.strictEqual(profileById.size, 1);
                        cpuProfileData = profileById.values().next().value;
                        cpuProfile = cpuProfileData.rawProfile;
                        assert.deepEqual(Object.keys(cpuProfile), [
                            'startTime',
                            'endTime',
                            'nodes',
                            'samples',
                            'timeDeltas',
                            'lines'
                        ]);
                        assert.strictEqual(cpuProfile.nodes.length, 153);
                        assert.strictEqual(cpuProfile.startTime, 287510826176);
                        assert.strictEqual(cpuProfile.endTime, 287510847633);
                        assert.strictEqual((_cpuProfile_samples = cpuProfile.samples) === null || _cpuProfile_samples === void 0 ? void 0 : _cpuProfile_samples.length, 39471);
                        assert.strictEqual((_cpuProfile_samples1 = cpuProfile.samples) === null || _cpuProfile_samples1 === void 0 ? void 0 : _cpuProfile_samples1.length, (_cpuProfile_timeDeltas = cpuProfile.timeDeltas) === null || _cpuProfile_timeDeltas === void 0 ? void 0 : _cpuProfile_timeDeltas.length);
                        assert.strictEqual((_cpuProfile_samples2 = cpuProfile.samples) === null || _cpuProfile_samples2 === void 0 ? void 0 : _cpuProfile_samples2.length, (_cpuProfile_lines = cpuProfile.lines) === null || _cpuProfile_lines === void 0 ? void 0 : _cpuProfile_lines.length);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('CPU Profile parsing', function() {
        var _this1 = _this;
        it('generates a parsed CPU profile from a trace file', /*#__PURE__*/ _async_to_generator(function() {
            var _parsedProfile_nodes, _parsedProfile_nodes1, _parsedProfile_nodes2, _parsedProfile_gcNode, _parsedProfile_programNode, _parsedProfile_samples, data, profileById, cpuProfileData, parsedProfile, nodesWithZeroLineNumber, nodesWithZeroColumnNumber;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            handleEventsFromTraceFile(_this1, 'recursive-blocking-js.json.gz')
                        ];
                    case 1:
                        data = _state.sent();
                        assert.strictEqual(data.profilesInProcess.size, 1);
                        profileById = data.profilesInProcess.values().next().value;
                        assert.strictEqual(profileById.size, 1);
                        cpuProfileData = profileById.values().next().value;
                        parsedProfile = cpuProfileData.parsedProfile;
                        assert.strictEqual((_parsedProfile_nodes = parsedProfile.nodes()) === null || _parsedProfile_nodes === void 0 ? void 0 : _parsedProfile_nodes.length, 153);
                        // Ensure that we correctly maintain a lineNumber/columnNumber of 0 and don't fall back to -1 because 0 is falsey.
                        nodesWithZeroLineNumber = ((_parsedProfile_nodes1 = parsedProfile.nodes()) === null || _parsedProfile_nodes1 === void 0 ? void 0 : _parsedProfile_nodes1.filter(function(node) {
                            return node.lineNumber === 0;
                        })) || [];
                        assert.lengthOf(nodesWithZeroLineNumber, 15);
                        nodesWithZeroColumnNumber = ((_parsedProfile_nodes2 = parsedProfile.nodes()) === null || _parsedProfile_nodes2 === void 0 ? void 0 : _parsedProfile_nodes2.filter(function(node) {
                            return node.columnNumber === 0;
                        })) || [];
                        assert.lengthOf(nodesWithZeroColumnNumber, 12);
                        assert.strictEqual((_parsedProfile_gcNode = parsedProfile.gcNode) === null || _parsedProfile_gcNode === void 0 ? void 0 : _parsedProfile_gcNode.id, 36);
                        assert.strictEqual((_parsedProfile_programNode = parsedProfile.programNode) === null || _parsedProfile_programNode === void 0 ? void 0 : _parsedProfile_programNode.id, 2);
                        assert.strictEqual(parsedProfile.profileStartTime, 287510835.138);
                        assert.strictEqual(parsedProfile.profileEndTime, 287515908.9025441);
                        assert.strictEqual(parsedProfile.maxDepth, 14);
                        assert.strictEqual((_parsedProfile_samples = parsedProfile.samples) === null || _parsedProfile_samples === void 0 ? void 0 : _parsedProfile_samples.length, 39471);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('getProfileCallFunctionName', function() {
        var getProfileEventAndNode = // Find an event from the trace that represents some work. The use of
        // this specific call frame event is not for any real reason.
        function getProfileEventAndNode(traceData) {
            var mainThread = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getMainThread)(traceData.Renderer);
            var foundNode = null;
            var foundEntry = null;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = mainThread.entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    if (_trace_js__WEBPACK_IMPORTED_MODULE_3__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'performConcurrentWorkOnRoot') {
                        var _traceData_Samples_profilesInProcess_get;
                        var profile = (_traceData_Samples_profilesInProcess_get = traceData.Samples.profilesInProcess.get(entry.pid)) === null || _traceData_Samples_profilesInProcess_get === void 0 ? void 0 : _traceData_Samples_profilesInProcess_get.get(entry.tid);
                        var node = profile === null || profile === void 0 ? void 0 : profile.parsedProfile.nodeById(entry.nodeId);
                        if (node) {
                            foundNode = node;
                        }
                        foundEntry = entry;
                        break;
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
            if (!foundNode) {
                throw new Error('Could not find CPU Profile node.');
            }
            if (!foundEntry) {
                throw new Error('Could not find expected entry.');
            }
            return {
                entry: foundEntry,
                profileNode: foundNode
            };
        };
        it('falls back to the call frame name if the ProfileNode name is empty', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _getProfileEventAndNode, entry, profileNode, originalProfileNodeName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _getProfileEventAndNode = getProfileEventAndNode(traceData), entry = _getProfileEventAndNode.entry, profileNode = _getProfileEventAndNode.profileNode;
                        // Store and then reset this: we are doing this to test the fallback to
                        // the entry callFrame.functionName property. After the assertion we
                        // reset this to avoid impacting other tests.
                        originalProfileNodeName = profileNode.functionName;
                        profileNode.setFunctionName('');
                        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.getProfileCallFunctionName(traceData.Samples, entry), 'performConcurrentWorkOnRoot');
                        // St
                        profileNode.setFunctionName(originalProfileNodeName);
                        return [
                            2
                        ];
                }
            });
        }));
        it('uses the profile name if it has been set', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, _getProfileEventAndNode, entry, profileNode, originalProfileNodeName;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'react-hello-world.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        _getProfileEventAndNode = getProfileEventAndNode(traceData), entry = _getProfileEventAndNode.entry, profileNode = _getProfileEventAndNode.profileNode;
                        // Store and then reset this: we are doing this to test the fallback to
                        // the entry callFrame.functionName property. After the assertion we
                        // reset this to avoid impacting other tests.
                        originalProfileNodeName = profileNode.functionName;
                        profileNode.setFunctionName('testing-profile-name');
                        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_3__.Handlers.ModelHandlers.Samples.getProfileCallFunctionName(traceData.Samples, entry), 'testing-profile-name');
                        profileNode.setFunctionName(originalProfileNodeName);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=SamplesHandler.test.js.map


}),

}]);