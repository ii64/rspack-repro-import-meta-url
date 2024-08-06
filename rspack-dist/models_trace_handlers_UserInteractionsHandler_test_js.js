"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_UserInteractionsHandler_test_js"], {
"./models/trace/handlers/UserInteractionsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


function processTrace(context, path) {
    return _processTrace.apply(this, arguments);
}
function _processTrace() {
    _processTrace = _async_to_generator(function(context, path) {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(context, path)
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize()
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _processTrace.apply(this, arguments);
}
beforeEach(function() {
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
});
describe('UserInteractionsHandler', function() {
    var _this = this;
    function makeFakeInteraction(type, options) {
        var event = {
            name: 'EventTiming',
            type: type,
            ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.startTime),
            dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.endTime - options.startTime),
            processingStart: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.processingStart || 0),
            processingEnd: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(options.processingEnd || 0),
            interactionId: options.interactionId
        };
        return event;
    }
    describe('error handling', function() {
        it('throws if not initialized', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
                        // Finalize the handler by calling data and then finalize on it.
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize()
                        ];
                    case 2:
                        _state.sent();
                        assert.throws(function() {
                            var fakeEvent = {};
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(fakeEvent);
                        }, 'Handler is not initialized');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('returns all user interactions', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, clicks;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
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
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    clicks = data.allEvents.filter(function(event) {
                        if (!event.args.data) {
                            return false;
                        }
                        return event.args.data.type === 'click';
                    });
                    assert.strictEqual(data.allEvents.length, 58);
                    assert.strictEqual(clicks.length, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this1 = this;
    it('returns all interaction events', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this1, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    // There are three inct interactions:
                    // pointerdown on the button (start of the click)
                    // pointerup & click on the button (end of the click)
                    assert.strictEqual(data.interactionEvents.length, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds microsecond processingStart and processingEnd times to the synthetic event', /*#__PURE__*/ _async_to_generator(function() {
        var data, oneSecondInteraction;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    oneSecondInteraction = Array.from(data.interactionEvents).find(function(entry) {
                        return entry.dur === 979974 && entry.type === 'click';
                    });
                    if (!oneSecondInteraction) {
                        throw new Error('Could not find interaction');
                    }
                    assert.strictEqual(oneSecondInteraction.processingStart, 141251950944);
                    assert.strictEqual(oneSecondInteraction.processingEnd, 141252927944);
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds the INP phases to the interaction', /*#__PURE__*/ _async_to_generator(function() {
        var data, oneSecondInteraction;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(this, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    oneSecondInteraction = Array.from(data.interactionEvents).find(function(entry) {
                        return entry.dur === 979974 && entry.type === 'click';
                    });
                    if (!oneSecondInteraction) {
                        throw new Error('Could not find interaction');
                    }
                    // These numbers do seem suspciously round: that is because they are from
                    // converted millisecond values and this is expected.
                    assert.strictEqual(oneSecondInteraction.inputDelay, 1000);
                    assert.strictEqual(oneSecondInteraction.mainThreadHandling, 977000);
                    assert.strictEqual(oneSecondInteraction.presentationDelay, 1974);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this2 = this;
    it('identifies the longest interaction', /*#__PURE__*/ _async_to_generator(function() {
        var data, expectedLongestEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this2, 'slow-interaction-keydown.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    assert.lengthOf(data.interactionEvents, 5);
                    expectedLongestEvent = data.interactionEvents.find(function(event) {
                        return event.type === 'keydown' && event.interactionId === 7378;
                    });
                    assert.strictEqual(data.longestInteractionEvent, expectedLongestEvent);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this3 = this;
    it('returns a set of all interactions that exceed the threshold', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this3, 'one-second-interaction.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    // There are two long interactions: the pointerup, and the click.
                    assert.strictEqual(data.interactionsOverThreshold.size, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this4 = this;
    it('does not include interactions below the threshold', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this4, 'slow-interaction-keydown.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    // All the interactions in this trace are < 200ms
                    assert.strictEqual(data.interactionsOverThreshold.size, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this5 = this;
    it('sets the `dur` key on each event by finding the begin and end events and subtracting the ts', /*#__PURE__*/ _async_to_generator(function() {
        var data, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, syntheticEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this5, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = data.interactionEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            syntheticEvent = _step.value;
                            assert.strictEqual(syntheticEvent.dur, syntheticEvent.args.data.endEvent.ts - syntheticEvent.args.data.beginEvent.ts);
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
            }
        });
    }));
    var _this6 = this;
    it('gets the right interaction IDs for each interaction', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this6, 'slow-interaction-button-click.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    assert.deepEqual(data.interactionEvents.map(function(i) {
                        return i.interactionId;
                    }), [
                        // pointerdown, pointerup and click are all from the same interaction
                        1540,
                        1540,
                        1540
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this7 = this;
    it('gets the right interaction IDs for a keypress interaction', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this7, 'slow-interaction-keydown.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    assert.deepEqual(data.interactionEvents.map(function(i) {
                        return i.interactionId;
                    }), [
                        // pointerdown from clicking on the input
                        7371,
                        // pointerup from clicking on the input
                        7371,
                        // click from clicking on the input
                        7371,
                        // keydown from typing character
                        7378,
                        // keyup from typing character
                        7378
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    var _this8 = this;
    it('detects correct events for a click and keydown interaction', /*#__PURE__*/ _async_to_generator(function() {
        var data, foundInteractions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        processTrace(_this8, 'slow-interaction-keydown.json.gz')
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                    foundInteractions = data.allEvents.filter(function(e) {
                        return e.args.data && e.args.data.duration > 1 && e.args.data.interactionId;
                    });
                    // We expect there to be 3 interactions:
                    // User clicks on input:
                    // 1.pointerdown, 2. pointerup, 3. click
                    // User types into input:
                    // 4. keydown, 5. keyup
                    assert.deepEqual(foundInteractions.map(function(event) {
                        var _event_args_data;
                        return (_event_args_data = event.args.data) === null || _event_args_data === void 0 ? void 0 : _event_args_data.type;
                    }), [
                        'pointerdown',
                        'pointerup',
                        'click',
                        'keydown',
                        'keyup'
                    ]);
                    assert.deepEqual(foundInteractions.map(function(e) {
                        var _e_args_data;
                        return (_e_args_data = e.args.data) === null || _e_args_data === void 0 ? void 0 : _e_args_data.interactionId;
                    }), [
                        // The first three events relate to the click, so they have the same InteractionID
                        7371,
                        7371,
                        7371,
                        // The final two relate to the keypress, so they have the same InteractionID
                        7378,
                        7378
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('finds all interaction events with a duration and interactionId', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, timings;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    events = [
                        {
                            cat: 'devtools.timeline',
                            ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ ,
                            pid: 1537729,
                            tid: 1,
                            id: '1234',
                            ts: 10,
                            dur: 500,
                            scope: 'scope',
                            name: 'EventTiming',
                            args: {
                                data: {
                                    'duration': 16,
                                    'interactionId': 9700,
                                    'nodeId': 0,
                                    'processingEnd': 993,
                                    'processingStart': 993,
                                    'timeStamp': 985,
                                    'type': 'pointerdown'
                                }
                            }
                        },
                        // Has an interactionId of 0, so should NOT be included.
                        {
                            cat: 'devtools.timeline',
                            ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ ,
                            pid: 1537729,
                            tid: 1,
                            id: '1234',
                            ts: 10,
                            dur: 500,
                            scope: 'scope',
                            name: 'EventTiming',
                            args: {
                                data: {
                                    'duration': 16,
                                    'interactionId': 0,
                                    'nodeId': 0,
                                    'processingEnd': 993,
                                    'processingStart': 993,
                                    'timeStamp': 985,
                                    'type': 'pointerdown'
                                }
                            }
                        },
                        // Has an duration of 0, so should NOT be included.
                        {
                            cat: 'devtools.timeline',
                            ph: "b" /* TraceModel.Types.TraceEvents.Phase.ASYNC_NESTABLE_START */ ,
                            pid: 1537729,
                            tid: 1,
                            id: '1234',
                            ts: 10,
                            dur: 500,
                            scope: 'scope',
                            name: 'EventTiming',
                            args: {
                                data: {
                                    'duration': 0,
                                    'interactionId': 0,
                                    'nodeId': 0,
                                    'processingEnd': 993,
                                    'processingStart': 993,
                                    'timeStamp': 985,
                                    'type': 'pointerdown'
                                }
                            }
                        }
                    ];
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.reset();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.finalize()
                    ];
                case 2:
                    _state.sent();
                    timings = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data().allEvents;
                    assert.lengthOf(timings, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('collapsing nested interactions', function() {
        var removeNestedInteractions = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.removeNestedInteractions;
        it('removes interactions that have the same end time but are not the first event in that block', function() {
            /**
             * ========A=============
             *   ===========B========
             *   ===========C========
             *         =====D========
             */ var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('pointerdown', {
                startTime: 2,
                endTime: 10,
                interactionId: 2
            });
            var eventC = makeFakeInteraction('pointerdown', {
                startTime: 4,
                endTime: 10,
                interactionId: 3
            });
            var eventD = makeFakeInteraction('pointerdown', {
                startTime: 6,
                endTime: 10,
                interactionId: 4
            });
            var result = removeNestedInteractions([
                eventA,
                eventB,
                eventC,
                eventD
            ]);
            assert.deepEqual(result, [
                eventA
            ]);
        });
        it('prefers the event with the longer processing start/end if the events have the same ts and dur', function() {
            // Here we would expect eventA to be used; these events both have the
            // same interactionId, the same start/end, but different processing
            // start/end. In this situation we want to use the one with the largest
            // processing range, as that is more likely accurate to the situation. We
            // see in traces that other events will have processingStart and
            // processingEnd set to the same value, which does not provide much
            // insight compared to picking the event that does have more information
            // and accurate processing numbers.
            var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1,
                processingStart: 1,
                processingEnd: 8
            });
            var eventB = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1,
                processingStart: 6,
                processingEnd: 6
            });
            var result = removeNestedInteractions([
                eventA,
                eventB
            ]);
            assert.deepEqual(result, [
                eventA
            ]);
        });
        it('only collapses events of the same type', function() {
            /**
             * Here we should collapse B, because A is bigger and of the same type.
             * Similarly, we should collapse D, because C is bigger and of the same type.
             * But C should remain visible, because it is a pointer event, not a key event,
             * and therefore does not get collapsed into A.
             * ========A=[keydown]====
             *   =======B=[keyup]=====
             *    ====C=[pointerdown]=
             *         =D=[pointerup]=
             */ var eventA = makeFakeInteraction('keydown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('keyup', {
                startTime: 2,
                endTime: 10,
                interactionId: 2
            });
            var eventC = makeFakeInteraction('pointerdown', {
                startTime: 4,
                endTime: 10,
                interactionId: 3
            });
            var eventD = makeFakeInteraction('pointerup', {
                startTime: 6,
                endTime: 10,
                interactionId: 4
            });
            var result = removeNestedInteractions([
                eventA,
                eventB,
                eventC,
                eventD
            ]);
            assert.deepEqual(result, [
                eventA,
                eventC
            ]);
        });
        it('does not remove interactions that overlap but have a different end time', function() {
            /**
             * ========A=============
             *   ===========B========
             *   ===========C========
             *         =====D================
             */ var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('pointerdown', {
                startTime: 2,
                endTime: 10,
                interactionId: 2
            });
            var eventC = makeFakeInteraction('pointerdown', {
                startTime: 4,
                endTime: 10,
                interactionId: 3
            });
            var eventD = makeFakeInteraction('pointerdown', {
                startTime: 6,
                endTime: 20,
                interactionId: 4
            });
            var result = removeNestedInteractions([
                eventA,
                eventB,
                eventC,
                eventD
            ]);
            assert.deepEqual(result, [
                eventA,
                eventD
            ]);
        });
        it('does not remove interactions with an unexpected type', function() {
            /**
             * =====A=[pointerdown]=====
             *   ===========B=[unknown]=
             */ var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 10,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('unknown', {
                startTime: 2,
                endTime: 10,
                interactionId: 2
            });
            var result = removeNestedInteractions([
                eventA,
                eventB
            ]);
            assert.deepEqual(result, [
                eventA,
                eventB
            ]);
        });
        it('correctly identifies nested events when their parent overlaps with multiple events', function() {
            /**
             * Here although it does not look like it on first glance, C is nested
             * within B and should therefore be hidden. Similarly, D is nested within A and
             * so should be hidden.
             *
             * ========A====== ======C====
             *   ===========B=============
             *   ======D======
             */ var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 5,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('pointerdown', {
                startTime: 2,
                endTime: 20,
                interactionId: 2
            });
            var eventC = makeFakeInteraction('pointerdown', {
                startTime: 10,
                endTime: 20,
                interactionId: 3
            });
            var eventD = makeFakeInteraction('pointerdown', {
                startTime: 2,
                endTime: 5,
                interactionId: 3
            });
            var result = removeNestedInteractions([
                eventA,
                eventB,
                eventC,
                eventD
            ]);
            assert.deepEqual(result, [
                eventA,
                eventB
            ]);
        });
        it('returns the events in timestamp order', function() {
            /**
             * None of the events below overlap at all, this test makes sure that the order of events does not change.
             */ var eventA = makeFakeInteraction('pointerdown', {
                startTime: 0,
                endTime: 5,
                interactionId: 1
            });
            var eventB = makeFakeInteraction('pointerdown', {
                startTime: 10,
                endTime: 20,
                interactionId: 2
            });
            var eventC = makeFakeInteraction('pointerdown', {
                startTime: 30,
                endTime: 40,
                interactionId: 3
            });
            var eventD = makeFakeInteraction('pointerdown', {
                startTime: 50,
                endTime: 60,
                interactionId: 4
            });
            var result = removeNestedInteractions([
                eventA,
                eventB,
                eventC,
                eventD
            ]);
            assert.deepEqual(result, [
                eventA,
                eventB,
                eventC,
                eventD
            ]);
        });
        var _this1 = _this;
        it('can remove nested interactions in a real trace', /*#__PURE__*/ _async_to_generator(function() {
            var data, visibleEventInteractionIds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            processTrace(_this1, 'nested-interactions.json.gz')
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.data();
                        visibleEventInteractionIds = data.interactionEventsWithNoNesting.map(function(event) {
                            return "".concat(event.type, ":").concat(event.interactionId);
                        });
                        // Note: it is very hard to explain in comments all these assertions, so
                        // it is highly recommended that you load the trace file above into
                        // DevTools to look at the timeline whilst working on this test.
                        /**
             * This is a block of events with identical end times, so only the
             * first should be kept:
             * =====[keydown 3579]====
             *    ==[keydown 3558]====
             *       =[keyup 3558]====
             **/ assert.isTrue(visibleEventInteractionIds.includes('keydown:3579'));
                        assert.isFalse(visibleEventInteractionIds.includes('keydown:3558'));
                        assert.isFalse(visibleEventInteractionIds.includes('keyup:3558'));
                        /** This is a slightly offset block of events:
             * ====[keydown 3572]=====
             *    =[keydown 3565]=====
             *          ====[keydown 3586]========
             * In this test we want to make sure that 3565 is collapsed, but the
             * others are not.
             **/ assert.isTrue(visibleEventInteractionIds.includes('keydown:3572'));
                        assert.isTrue(visibleEventInteractionIds.includes('keydown:3586'));
                        assert.isFalse(visibleEventInteractionIds.includes('keydown:3565'));
                        /** This is a block of events that have offset overlaps:
             * ====[keydown 3614]=====  =====[keydown 3621]======
             *       =====[keydown 3628]=========================
             * In this test we want to make sure that 3621 is collapsed as it fits
             * iwthin 3628, but 3614 is not collapsed.
             **/ assert.isTrue(visibleEventInteractionIds.includes('keydown:3614'));
                        assert.isTrue(visibleEventInteractionIds.includes('keydown:3628'));
                        assert.isFalse(visibleEventInteractionIds.includes('keydown:3621'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('gets the correct score classification for Interaction to Next Paint event', function() {
        var eventA = makeFakeInteraction('pointerdown', {
            startTime: 0,
            endTime: 10000,
            interactionId: 1
        });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventA.dur), "good" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.GOOD */ );
        var eventB = makeFakeInteraction('pointerdown', {
            startTime: 0,
            endTime: 250000,
            interactionId: 1
        });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventB.dur), "ok" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.OK */ );
        var eventC = makeFakeInteraction('pointerdown', {
            startTime: 0,
            endTime: 1000000,
            interactionId: 1
        });
        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.UserInteractions.scoreClassificationForInteractionToNextPaint(eventC.dur), "bad" /* TraceModel.Handlers.ModelHandlers.PageLoadMetrics.ScoreClassification.BAD */ );
    });
}); //# sourceMappingURL=UserInteractionsHandler.test.js.map


}),

}]);