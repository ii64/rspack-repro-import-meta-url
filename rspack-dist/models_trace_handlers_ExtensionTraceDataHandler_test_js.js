"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_ExtensionTraceDataHandler_test_js"], {
"./models/trace/handlers/ExtensionTraceDataHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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

describe('ExtensionTraceDataHandler', function() {
    var extensionHandlerOutput;
    var idCounter = 0;
    function makeTimingEventWithExtensionData(param) {
        var name = param.name, tsMicro = param.ts, detail = param.detail, durMicro = param.dur;
        var isMark = durMicro === undefined;
        var currentId = idCounter++;
        var traceEventBase = {
            cat: 'blink.user_timing',
            pid: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.ProcessID(2017),
            tid: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.ThreadID(259),
            id2: {
                local: "".concat(currentId)
            }
        };
        var stringDetail = JSON.stringify(detail);
        var args = isMark ? {
            data: {
                detail: stringDetail
            }
        } : {
            detail: stringDetail
        };
        var firstEvent = _object_spread({
            args: args,
            name: name,
            ph: isMark ? "I" /* TraceModel.Types.TraceEvents.Phase.INSTANT */  : "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ ,
            ts: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(tsMicro)
        }, traceEventBase);
        if (isMark) {
            return [
                firstEvent
            ];
        }
        return [
            firstEvent,
            _object_spread_props(_object_spread({
                name: name
            }, traceEventBase), {
                ts: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(tsMicro + (durMicro || 0)),
                ph: "e" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_END */ 
            })
        ];
    }
    function createTraceExtensionDataFromTestInput(extensionData) {
        return _createTraceExtensionDataFromTestInput.apply(this, arguments);
    }
    function _createTraceExtensionDataFromTestInput() {
        _createTraceExtensionDataFromTestInput = _async_to_generator(function(extensionData) {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        events = extensionData.flatMap(makeTimingEventWithExtensionData).sort(function(e1, e2) {
                            return e1.ts - e2.ts;
                        });
                        _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.UserTimings.reset();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.UserTimings.finalize()
                        ];
                    case 1:
                        _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.ExtensionTraceData.reset();
                        // ExtensionTraceData handler doesn't need to handle events since
                        // it only consumes the output of the user timings handler.
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.ExtensionTraceData.finalize()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            _trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.ExtensionTraceData.data()
                        ];
                }
            });
        });
        return _createTraceExtensionDataFromTestInput.apply(this, arguments);
    }
    function createTraceExtensionDataExample() {
        var extensionData = [
            {
                detail: {
                    devtools: {
                        color: 'error',
                        dataType: 'marker',
                        properties: [
                            [
                                'Description',
                                'This marks the start of a task'
                            ]
                        ],
                        tooltipText: 'A mark'
                    }
                },
                name: 'A custom mark',
                ts: 100
            },
            // Marker with invalid dataType
            {
                detail: {
                    devtools: {
                        color: 'error',
                        dataType: 'invalid-marker'
                    }
                },
                name: 'A custom mark',
                ts: 100
            },
            {
                detail: {
                    devtools: {
                        dataType: 'track-entry',
                        track: 'An Extension Track',
                        properties: [
                            [
                                'Description',
                                'Something'
                            ]
                        ]
                    }
                },
                name: 'An extension measurement',
                ts: 100,
                dur: 100
            },
            // Track entry with no explicit dataType (should be accepted)
            {
                detail: {
                    devtools: {
                        track: 'An Extension Track',
                        color: 'tertiary'
                    }
                },
                name: 'An extension measurement',
                ts: 105,
                dur: 50
            },
            // Track entry with no explicit color (should be accepted)
            {
                detail: {
                    devtools: {
                        dataType: 'track-entry',
                        track: 'Another Extension Track',
                        properties: [
                            [
                                'Description',
                                'Something'
                            ],
                            [
                                'Tip',
                                'A tip to improve this'
                            ]
                        ],
                        tooltipText: 'A hint if needed'
                    }
                },
                name: 'An extension measurement',
                ts: 100,
                dur: 100
            },
            // Track entry with invalid data type (should be ignored).
            {
                detail: {
                    devtools: {
                        dataType: 'invalid-type',
                        track: 'Another Extension Track'
                    }
                },
                name: 'An extension measurement',
                ts: 105,
                dur: 50
            },
            // Track entry with no track value (should be ignored).
            {
                detail: {
                    devtools: {
                        dataType: 'track-entry'
                    }
                },
                name: 'An extension measurement',
                ts: 105,
                dur: 50
            }
        ];
        return createTraceExtensionDataFromTestInput(extensionData);
    }
    describe('track data parsing from user timings that use the extension API', function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createTraceExtensionDataExample()
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('creates tracks', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                assert.lengthOf(extensionHandlerOutput.extensionTrackData, 2);
                return [
                    2
                ];
            });
        }));
        it('parses track data correctly', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                assert.lengthOf(extensionHandlerOutput.extensionTrackData[0].entriesByTrack['An Extension Track'], 2);
                assert.strictEqual(extensionHandlerOutput.extensionTrackData[0].name, 'An Extension Track');
                assert.lengthOf(extensionHandlerOutput.extensionTrackData[1].entriesByTrack['Another Extension Track'], 1);
                assert.strictEqual(extensionHandlerOutput.extensionTrackData[1].name, 'Another Extension Track');
                return [
                    2
                ];
            });
        }));
        it('gets data from individual entries', /*#__PURE__*/ _async_to_generator(function() {
            var _extensionHandlerOutput_extensionTrackData__entriesByTrack_AnotherExtensionTrack__args, tooltipText, track, properties;
            return _ts_generator(this, function(_state) {
                _extensionHandlerOutput_extensionTrackData__entriesByTrack_AnotherExtensionTrack__args = extensionHandlerOutput.extensionTrackData[1].entriesByTrack['Another Extension Track'][0].args, tooltipText = _extensionHandlerOutput_extensionTrackData__entriesByTrack_AnotherExtensionTrack__args.tooltipText, track = _extensionHandlerOutput_extensionTrackData__entriesByTrack_AnotherExtensionTrack__args.track, properties = _extensionHandlerOutput_extensionTrackData__entriesByTrack_AnotherExtensionTrack__args.properties;
                assert.strictEqual(tooltipText, 'A hint if needed');
                assert.strictEqual(track, 'Another Extension Track');
                assert.strictEqual(JSON.stringify(properties), '[["Description","Something"],["Tip","A tip to improve this"]]');
                return [
                    2
                ];
            });
        }));
        it('discards track data without a corresponding track field', /*#__PURE__*/ _async_to_generator(function() {
            var allTrackEntries, validTrackEntries;
            return _ts_generator(this, function(_state) {
                // The test example contains a track entry without a track field.
                // Ensure it is discarded.
                allTrackEntries = extensionHandlerOutput.extensionTrackData.map(function(track) {
                    return Object.values(track.entriesByTrack);
                }).flat(2);
                validTrackEntries = allTrackEntries.filter(function(entry) {
                    return entry.args.track;
                });
                assert.lengthOf(validTrackEntries, allTrackEntries.length);
                return [
                    2
                ];
            });
        }));
        it('discards track data without a valid dataType field', /*#__PURE__*/ _async_to_generator(function() {
            var allTrackEntries, validTrackEntries;
            return _ts_generator(this, function(_state) {
                // The test example contains extension data with an invalid dataType
                // value.
                // Ensure it is discarded.
                allTrackEntries = extensionHandlerOutput.extensionTrackData.map(function(track) {
                    return Object.values(track.entriesByTrack);
                }).flat(2);
                validTrackEntries = allTrackEntries.filter(function(entry) {
                    return entry.args.dataType === 'track-entry' || entry.args.dataType === undefined;
                });
                assert.lengthOf(validTrackEntries, allTrackEntries.length);
                return [
                    2
                ];
            });
        }));
    });
    describe('Timeline markers from user timings that use the extension API', function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createTraceExtensionDataExample()
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('parses marker data correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _extensionHandlerOutput_extensionMarkers__args, tooltipText, properties;
            return _ts_generator(this, function(_state) {
                assert.lengthOf(extensionHandlerOutput.extensionMarkers, 1);
                assert.strictEqual(extensionHandlerOutput.extensionMarkers[0].name, 'A custom mark');
                _extensionHandlerOutput_extensionMarkers__args = extensionHandlerOutput.extensionMarkers[0].args, tooltipText = _extensionHandlerOutput_extensionMarkers__args.tooltipText, properties = _extensionHandlerOutput_extensionMarkers__args.properties;
                assert.strictEqual(tooltipText, 'A mark');
                assert.strictEqual(JSON.stringify(properties), '[["Description","This marks the start of a task"]]');
                return [
                    2
                ];
            });
        }));
        it('discards markers whose details are not valid stringified JSON', /*#__PURE__*/ _async_to_generator(function() {
            var performanceMarkEvent;
            return _ts_generator(this, function(_state) {
                performanceMarkEvent = {
                    args: {
                        data: {
                            detail: 'this-is-not-json'
                        }
                    },
                    name: 'test-perf-mark',
                    cat: 'blink.user_timing',
                    ph: "I" /* TraceModel.Types.TraceEvents.Phase.INSTANT */ ,
                    pid: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.ProcessID(1),
                    tid: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.ThreadID(1),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(100)
                };
                assert.isNull(_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.ModelHandlers.ExtensionTraceData.extensionDataInTiming(performanceMarkEvent));
                return [
                    2
                ];
            });
        }));
        it('discards markers without a valid dataType field', /*#__PURE__*/ _async_to_generator(function() {
            var allMarkers, validTrackEntries;
            return _ts_generator(this, function(_state) {
                // The test example contains extension data with an invalid dataType
                // value.
                // Ensure it is discarded.
                allMarkers = extensionHandlerOutput.extensionMarkers;
                validTrackEntries = allMarkers.filter(function(entry) {
                    return entry.args.dataType === 'marker';
                });
                assert.lengthOf(validTrackEntries, allMarkers.length);
                return [
                    2
                ];
            });
        }));
    });
    describe('Data filtering', function() {
        it('extracts the extension data from a timing\'s detail when present', /*#__PURE__*/ _async_to_generator(function() {
            var extensionData, extensionHandlerOutput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionData = [
                            {
                                detail: {
                                    devtools: {
                                        color: 'error',
                                        dataType: 'marker',
                                        properties: [
                                            [
                                                'Description',
                                                'This marks the start of a task'
                                            ]
                                        ],
                                        tooltipText: 'A mark'
                                    }
                                },
                                name: 'A custom mark',
                                ts: 100
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionData)
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.strictEqual(extensionHandlerOutput.extensionMarkers.length, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('ignores a timing if its detail does not contain a devtools object', /*#__PURE__*/ _async_to_generator(function() {
            var extensionData, extensionHandlerOutput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionData = [
                            {
                                detail: {},
                                name: 'A custom mark',
                                ts: 100
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionData)
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.strictEqual(extensionHandlerOutput.extensionMarkers.length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('ignores a timing if its detail contains a devtools object w/o valid extension data', /*#__PURE__*/ _async_to_generator(function() {
            var extensionData, extensionHandlerOutput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionData = [
                            {
                                // Invalid data type
                                detail: {
                                    devtools: {
                                        color: 'error',
                                        dataType: 'invalid'
                                    }
                                },
                                name: 'A custom mark',
                                ts: 100
                            },
                            {
                                detail: {
                                    devtools: {
                                        // Defaulted to track-entry but no trackName provided
                                        color: 'error'
                                    }
                                },
                                name: 'A measurement',
                                ts: 100
                            },
                            {
                                detail: {
                                    devtools: {
                                        // track-entry w/o trackName provided
                                        dataType: 'track-entry'
                                    }
                                },
                                name: 'A measurement',
                                ts: 100
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionData)
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.strictEqual(extensionHandlerOutput.extensionMarkers.length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('ignores a timing if its detail contains a devtools with a track group but no track name', /*#__PURE__*/ _async_to_generator(function() {
            var extensionData, extensionHandlerOutput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionData = [
                            {
                                // Invalid data type
                                detail: {
                                    devtools: {
                                        trackGroup: 'Track group'
                                    }
                                },
                                name: 'A measurement',
                                ts: 100,
                                dur: 100
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionData)
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.strictEqual(extensionHandlerOutput.extensionMarkers.length, 0);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Track groups', function() {
        it('builds extension track data for grouped tracks correctly', /*#__PURE__*/ _async_to_generator(function() {
            var extensionDevToolsObjects, extensionHandlerOutput, firstTrackData, secondTrackData, thirdTrackData, fourthTrackData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionDevToolsObjects = [
                            // Track group 1
                            {
                                dataType: 'track-entry',
                                trackGroup: 'Group 1',
                                track: 'Track 1'
                            },
                            {
                                dataType: 'track-entry',
                                trackGroup: 'Group 1',
                                track: 'Track 1'
                            },
                            {
                                dataType: 'track-entry',
                                trackGroup: 'Group 1',
                                track: 'Track 2'
                            },
                            {
                                dataType: 'track-entry',
                                trackGroup: 'Group 1',
                                track: 'Track 3'
                            },
                            // Track group 2
                            {
                                dataType: 'track-entry',
                                trackGroup: 'Group 2',
                                track: 'Track 1'
                            },
                            // Un grouped tracks
                            {
                                dataType: 'track-entry',
                                track: 'Ungrouped Track 1'
                            },
                            {
                                dataType: 'track-entry',
                                track: 'Ungrouped Track 2'
                            },
                            {
                                dataType: 'track-entry',
                                track: 'Ungrouped Track 2'
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionDevToolsObjects.map(function(devtools) {
                                return {
                                    detail: {
                                        devtools: devtools
                                    },
                                    name: 'A measurement',
                                    ts: 100,
                                    dur: 100
                                };
                            }))
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.strictEqual(extensionHandlerOutput.extensionTrackData.length, 4);
                        firstTrackData = extensionHandlerOutput.extensionTrackData[0];
                        assert.strictEqual(firstTrackData.name, 'Group 1');
                        assert.strictEqual(firstTrackData.isTrackGroup, true);
                        assert.deepEqual(Object.keys(firstTrackData.entriesByTrack), [
                            'Track 1',
                            'Track 2',
                            'Track 3'
                        ]);
                        assert.deepEqual(Object.values(firstTrackData.entriesByTrack).map(function(entries) {
                            return entries.length;
                        }), [
                            2,
                            1,
                            1
                        ]);
                        secondTrackData = extensionHandlerOutput.extensionTrackData[1];
                        assert.strictEqual(secondTrackData.name, 'Group 2');
                        assert.strictEqual(secondTrackData.isTrackGroup, true);
                        assert.deepEqual(Object.keys(secondTrackData.entriesByTrack), [
                            'Track 1'
                        ]);
                        assert.deepEqual(Object.values(secondTrackData.entriesByTrack).map(function(entries) {
                            return entries.length;
                        }), [
                            1
                        ]);
                        thirdTrackData = extensionHandlerOutput.extensionTrackData[2];
                        assert.strictEqual(thirdTrackData.name, 'Ungrouped Track 1');
                        assert.deepEqual(Object.keys(thirdTrackData.entriesByTrack), [
                            'Ungrouped Track 1'
                        ]);
                        assert.deepEqual(Object.values(thirdTrackData.entriesByTrack).map(function(entries) {
                            return entries.length;
                        }), [
                            1
                        ]);
                        fourthTrackData = extensionHandlerOutput.extensionTrackData[3];
                        assert.strictEqual(fourthTrackData.name, 'Ungrouped Track 2');
                        assert.deepEqual(Object.keys(fourthTrackData.entriesByTrack), [
                            'Ungrouped Track 2'
                        ]);
                        assert.deepEqual(Object.values(fourthTrackData.entriesByTrack).map(function(entries) {
                            return entries.length;
                        }), [
                            2
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('calculates self time sub track by sub track', /*#__PURE__*/ _async_to_generator(function() {
            var extensionDevToolsObjects, extensionHandlerOutput, trackGroupData, testDataTrack1, testDataTrack2, ungroupedTrackData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extensionDevToolsObjects = [
                            // Track group 1
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        trackGroup: 'Group 1',
                                        track: 'Track 1'
                                    }
                                },
                                name: 'Measurement 1',
                                ts: 0,
                                dur: 100
                            },
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        trackGroup: 'Group 1',
                                        track: 'Track 1'
                                    }
                                },
                                name: 'Measurement 2',
                                ts: 0,
                                dur: 20
                            },
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        trackGroup: 'Group 1',
                                        track: 'Track 1'
                                    }
                                },
                                name: 'Measurement 3',
                                ts: 60,
                                dur: 40
                            },
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        trackGroup: 'Group 1',
                                        track: 'Track 1'
                                    }
                                },
                                name: 'Measurement 4',
                                ts: 70,
                                dur: 10
                            },
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        trackGroup: 'Group 1',
                                        track: 'Track 2'
                                    }
                                },
                                name: 'Measurement 5',
                                ts: 0,
                                dur: 200
                            },
                            // Standalone track
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        track: 'Ungrouped Track'
                                    }
                                },
                                name: 'Measurement 6',
                                ts: 0,
                                dur: 100
                            },
                            {
                                detail: {
                                    devtools: {
                                        dataType: 'track-entry',
                                        track: 'Ungrouped Track'
                                    }
                                },
                                name: 'Measurement 7',
                                ts: 50,
                                dur: 50
                            }
                        ];
                        return [
                            4,
                            createTraceExtensionDataFromTestInput(extensionDevToolsObjects)
                        ];
                    case 1:
                        extensionHandlerOutput = _state.sent();
                        assert.lengthOf(extensionHandlerOutput.extensionTrackData, 2);
                        trackGroupData = extensionHandlerOutput.extensionTrackData[0];
                        testDataTrack1 = trackGroupData.entriesByTrack['Track 1'].map(function(entry) {
                            return {
                                name: entry.name,
                                selfTime: entry.selfTime
                            };
                        });
                        assert.deepEqual(testDataTrack1, [
                            {
                                name: 'Measurement 1',
                                selfTime: 40
                            },
                            {
                                name: 'Measurement 2',
                                selfTime: 20
                            },
                            {
                                name: 'Measurement 3',
                                selfTime: 30
                            },
                            {
                                name: 'Measurement 4',
                                selfTime: 10
                            }
                        ]);
                        testDataTrack2 = trackGroupData.entriesByTrack['Track 2'].map(function(entry) {
                            return {
                                name: entry.name,
                                selfTime: entry.selfTime
                            };
                        });
                        assert.deepEqual(testDataTrack2, [
                            {
                                name: 'Measurement 5',
                                selfTime: 200
                            }
                        ]);
                        ungroupedTrackData = extensionHandlerOutput.extensionTrackData[1].entriesByTrack['Ungrouped Track'].map(function(entry) {
                            return {
                                name: entry.name,
                                selfTime: entry.selfTime
                            };
                        });
                        assert.deepEqual(ungroupedTrackData, [
                            {
                                name: 'Measurement 6',
                                selfTime: 50
                            },
                            {
                                name: 'Measurement 7',
                                selfTime: 50
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ExtensionTraceDataHandler.test.js.map


}),

}]);