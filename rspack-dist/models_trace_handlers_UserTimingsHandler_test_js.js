"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_UserTimingsHandler_test_js"], {
"./models/trace/handlers/UserTimingsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


describe('UserTimingsHandler', function() {
    var timingsData;
    describe('performance timings', function() {
        function getTimingsDataFromEvents(events) {
            return _getTimingsDataFromEvents.apply(this, arguments);
        }
        function _getTimingsDataFromEvents() {
            _getTimingsDataFromEvents = _async_to_generator(function(events) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.reset();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.finalize()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2,
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.data()
                            ];
                    }
                });
            });
            return _getTimingsDataFromEvents.apply(this, arguments);
        }
        before(/*#__PURE__*/ _async_to_generator(function() {
            var events;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'user-timings.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        return [
                            4,
                            getTimingsDataFromEvents(events)
                        ];
                    case 2:
                        timingsData = _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        describe('performance.measure events parsing', function() {
            it('parses the start and end events and returns a list of blocks', /*#__PURE__*/ _async_to_generator(function() {
                var i;
                return _ts_generator(this, function(_state) {
                    assert.lengthOf(timingsData.performanceMeasures, 3);
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.extractId(timingsData.performanceMeasures[0]), 'blink.user_timing:0x9072211:first measure');
                    assert.strictEqual(timingsData.performanceMeasures[0].name, 'first measure');
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.extractId(timingsData.performanceMeasures[1]), 'blink.user_timing:0x6ece31c8:second measure');
                    assert.strictEqual(timingsData.performanceMeasures[1].name, 'second measure');
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.extractId(timingsData.performanceMeasures[2]), 'blink.user_timing:0x10c31982:third measure');
                    assert.strictEqual(timingsData.performanceMeasures[2].name, 'third measure');
                    // Ensure we assign begin + end the right way round by making sure the
                    // beginEvent is the ASYNC_NESTABLE_START and the endEvent is the
                    // ASYNC_NESTABLE_END.
                    for(i = 0; i < timingsData.performanceMeasures.length; i++){
                        assert.strictEqual(timingsData.performanceMeasures[i].args.data.beginEvent.ph, "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ );
                        assert.strictEqual(timingsData.performanceMeasures[i].args.data.endEvent.ph, "e" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_END */ );
                    }
                    return [
                        2
                    ];
                });
            }));
            it('sorts the blocks to ensure they are in time order', /*#__PURE__*/ _async_to_generator(function() {
                var events, reversed, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'user-timings.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.reset();
                            // Reverse the array so that the events are in the wrong order.
                            // This _shouldn't_ ever happen in a real trace, but it's best for us to
                            // sort the blocks once we've parsed them just in case.
                            reversed = events.slice().reverse();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = reversed[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.finalize()
                            ];
                        case 2:
                            _state.sent();
                            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.data();
                            assert.lengthOf(data.performanceMeasures, 3);
                            assert.isTrue(data.performanceMeasures[0].ts <= data.performanceMeasures[1].ts);
                            assert.isTrue(data.performanceMeasures[1].ts <= data.performanceMeasures[2].ts);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('calculates the duration correctly from the begin/end event timestamps', /*#__PURE__*/ _async_to_generator(function() {
                var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, timing;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'user-timings.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.reset();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.finalize()
                            ];
                        case 2:
                            _state.sent();
                            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.data();
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(_iterator1 = data.performanceMeasures[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    timing = _step1.value;
                                    // Ensure for each timing pair we've set the dur correctly.
                                    assert.strictEqual(timing.dur, timing.args.data.endEvent.ts - timing.args.data.beginEvent.ts);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            return [
                                2
                            ];
                    }
                });
            }));
            it('correctly extracts nested timings in the correct order', /*#__PURE__*/ _async_to_generator(function() {
                var events, complexTimingsData, userTimingEventNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'user-timings-complex.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            return [
                                4,
                                getTimingsDataFromEvents(events)
                            ];
                        case 2:
                            complexTimingsData = _state.sent();
                            userTimingEventNames = [];
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = complexTimingsData.performanceMeasures[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    // This trace has multiple user timings events, in this instance we only care about the ones that include 'nested' in the name.
                                    if (event.name.includes('nested')) {
                                        userTimingEventNames.push(event.name);
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
                            assert.deepEqual(userTimingEventNames, [
                                'nested-a',
                                'nested-b',
                                'nested-c',
                                'nested-d'
                            ]);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('correctly orders measures when one measure encapsulates the others', /*#__PURE__*/ _async_to_generator(function() {
                var events, complexTimingsData, userTimingEventNames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'user-timings-complex.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            return [
                                4,
                                getTimingsDataFromEvents(events)
                            ];
                        case 2:
                            complexTimingsData = _state.sent();
                            userTimingEventNames = [];
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = complexTimingsData.performanceMeasures[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    // This trace has multiple user timings events, in this instance we only care about the ones that start with 'duration'
                                    if (event.name.startsWith('duration')) {
                                        userTimingEventNames.push(event.name);
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
                            assert.deepEqual(userTimingEventNames, [
                                'durationTimeTotal',
                                'durationTime1',
                                'durationTime2'
                            ]);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('performance.mark events parsing', function() {
            it('parses performance mark events correctly', function() {
                assert.lengthOf(timingsData.performanceMarks, 2);
                assert.strictEqual(timingsData.performanceMarks[0].name, 'mark1');
                assert.strictEqual(timingsData.performanceMarks[1].name, 'mark3');
            });
        });
    });
    describe('console timings', function() {
        before(/*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timings-track.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.reset();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.finalize()
                        ];
                    case 2:
                        _state.sent();
                        timingsData = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.data();
                        return [
                            2
                        ];
                }
            });
        }));
        describe('console.time events parsing', function() {
            it('parses the start and end events and returns a list of blocks', /*#__PURE__*/ _async_to_generator(function() {
                var i;
                return _ts_generator(this, function(_state) {
                    assert.lengthOf(timingsData.consoleTimings, 3);
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.extractId(timingsData.consoleTimings[0]), 'blink.console:0x12c00282160:first console time');
                    assert.strictEqual(timingsData.consoleTimings[0].name, 'first console time');
                    assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.Trace.extractId(timingsData.consoleTimings[1]), 'blink.console:0x12c00282160:second console time');
                    assert.strictEqual(timingsData.consoleTimings[1].name, 'second console time');
                    // Ensure we assign begin + end the right way round by making sure the
                    // beginEvent is the ASYNC_NESTABLE_START and the endEvent is the
                    // ASYNC_NESTABLE_END.
                    for(i = 0; i < timingsData.consoleTimings.length; i++){
                        assert.strictEqual(timingsData.consoleTimings[i].args.data.beginEvent.ph, "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ );
                        assert.strictEqual(timingsData.consoleTimings[i].args.data.endEvent.ph, "e" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_END */ );
                    }
                    return [
                        2
                    ];
                });
            }));
            it('sorts the blocks to ensure they are in time order', /*#__PURE__*/ _async_to_generator(function() {
                var events, reversed, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timings-track.json.gz')
                            ];
                        case 1:
                            events = _state.sent();
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.reset();
                            // Reverse the array so that the events are in the wrong order.
                            // This _shouldn't_ ever happen in a real trace, but it's best for us to
                            // sort the blocks once we've parsed them just in case.
                            reversed = events.slice().reverse();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = reversed[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.handleEvent(event);
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
                                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.finalize()
                            ];
                        case 2:
                            _state.sent();
                            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserTimings.data();
                            assert.lengthOf(data.consoleTimings, 3);
                            assert.isTrue(data.consoleTimings[0].ts <= data.consoleTimings[1].ts);
                            assert.isTrue(data.consoleTimings[1].ts <= data.consoleTimings[2].ts);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('calculates the duration correctly from the begin/end event timestamps', /*#__PURE__*/ _async_to_generator(function() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, consoleTiming;
                return _ts_generator(this, function(_state) {
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = timingsData.consoleTimings[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            consoleTiming = _step.value;
                            // Ensure for each timing pair we've set the dur correctly.
                            assert.strictEqual(consoleTiming.dur, consoleTiming.args.data.endEvent.ts - consoleTiming.args.data.beginEvent.ts);
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
        describe('console.timestamp events parsing', function() {
            it('parses performance mark events correctly', function() {
                assert.lengthOf(timingsData.timestampEvents, 3);
                assert.strictEqual(timingsData.timestampEvents[0].args.data.message, 'a timestamp');
                assert.strictEqual(timingsData.timestampEvents[1].args.data.message, 'another timestamp');
                assert.strictEqual(timingsData.timestampEvents[2].args.data.message, 'yet another timestamp');
            });
        });
    });
}); //# sourceMappingURL=UserTimingsHandler.test.js.map


}),

}]);