"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_InitiatorsHandler_test_js"], {
"./models/trace/handlers/InitiatorsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


describe('InitiatorsHandler', function() {
    beforeEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.reset();
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.initialize();
    });
    it('for an UpdateLayoutTree event it sets the initiator to the previous ScheduledStyleRecalculation event', /*#__PURE__*/ _async_to_generator(function() {
        var _updateLayoutTreeEvent_args_beginData, _updateLayoutTreeEvent_args_beginData1, _initiator_args_data, _initiator_args, traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, updateLayoutTreeEvent, initiator;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    updateLayoutTreeEvent = traceEvents.find(function(event) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) && event.ts === 122411039965;
                    });
                    if (!updateLayoutTreeEvent || !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventUpdateLayoutTree(updateLayoutTreeEvent)) {
                        throw new Error('Could not find layout tree event.');
                    }
                    initiator = data.eventToInitiator.get(updateLayoutTreeEvent);
                    if (!initiator) {
                        throw new Error('Did not find expected initiator for updateLayoutTreeEvent');
                    }
                    assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(initiator));
                    assert.strictEqual((_updateLayoutTreeEvent_args_beginData = updateLayoutTreeEvent.args.beginData) === null || _updateLayoutTreeEvent_args_beginData === void 0 ? void 0 : _updateLayoutTreeEvent_args_beginData.frame, '25D2F12F1818C70B5BD4325CC9ACD8FF');
                    assert.strictEqual((_updateLayoutTreeEvent_args_beginData1 = updateLayoutTreeEvent.args.beginData) === null || _updateLayoutTreeEvent_args_beginData1 === void 0 ? void 0 : _updateLayoutTreeEvent_args_beginData1.frame, (_initiator_args = initiator.args) === null || _initiator_args === void 0 ? void 0 : (_initiator_args_data = _initiator_args.data) === null || _initiator_args_data === void 0 ? void 0 : _initiator_args_data.frame);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a Layout event it sets the initiator to the last InvalidateLayout event on that frame', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, layoutEvent, initiator;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    layoutEvent = traceEvents.find(function(event) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(event) && event.ts === 122411039994;
                    });
                    if (!layoutEvent || !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(layoutEvent)) {
                        throw new Error('Could not find layout event.');
                    }
                    initiator = data.eventToInitiator.get(layoutEvent);
                    if (!initiator) {
                        throw new Error('Did not find expected initiator for LayoutEvent');
                    }
                    assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventInvalidateLayout(initiator));
                    assert.strictEqual(initiator.ts, 122411036517);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a Layout event it sets the initiator to the last ScheduledStyleRecalculation if it occurred before the InvalidateLayout event', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, layoutEvent, initiator;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    layoutEvent = traceEvents.find(function(event) {
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(event) && event.ts === 122411054960;
                    });
                    if (!layoutEvent || !_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventLayout(layoutEvent)) {
                        throw new Error('Could not find layout event.');
                    }
                    initiator = data.eventToInitiator.get(layoutEvent);
                    if (!initiator) {
                        throw new Error('Did not find expected initiator for LayoutEvent');
                    }
                    assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventScheduleStyleRecalculation(initiator));
                    assert.strictEqual(initiator.ts, 122411054482);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a FireAnimationFrame event it sets the initiator to the RequestAnimationFrame event', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, fireAnimationFrameEvent, requestAnimationFrameEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    fireAnimationFrameEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventFireAnimationFrame);
                    if (!fireAnimationFrameEvent) {
                        throw new Error('Could not find FireAnimationFrame event');
                    }
                    requestAnimationFrameEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventRequestAnimationFrame);
                    if (!requestAnimationFrameEvent) {
                        throw new Error('Could not find RequestAnimationFrame event');
                    }
                    assert.strictEqual(data.eventToInitiator.get(fireAnimationFrameEvent), requestAnimationFrameEvent);
                    assert.deepEqual(data.initiatorToEvents.get(requestAnimationFrameEvent), [
                        fireAnimationFrameEvent
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a TimerFire event sets the initiator to the TimerInstall', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, timerFireEvent, timerInstallEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    timerFireEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventTimerFire);
                    if (!timerFireEvent) {
                        throw new Error('Could not find TimerFire event');
                    }
                    timerInstallEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventTimerInstall);
                    if (!timerInstallEvent) {
                        throw new Error('Could not find TimerInstall event');
                    }
                    assert.strictEqual(data.eventToInitiator.get(timerFireEvent), timerInstallEvent);
                    assert.deepEqual(data.initiatorToEvents.get(timerInstallEvent), [
                        timerFireEvent
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a FireIdleCallback event sets the initiator to the RequestIdleCallback', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, fireIdleCallbackEvent, requestIdleCallbackEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'timer-initiators.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    fireIdleCallbackEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventFireIdleCallback);
                    if (!fireIdleCallbackEvent) {
                        throw new Error('Could not find FireIdleCallback event');
                    }
                    requestIdleCallbackEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventRequestIdleCallback);
                    if (!requestIdleCallbackEvent) {
                        throw new Error('Could not find RequestIdleCallback event');
                    }
                    assert.strictEqual(data.eventToInitiator.get(fireIdleCallbackEvent), requestIdleCallbackEvent);
                    assert.deepEqual(data.initiatorToEvents.get(requestIdleCallbackEvent), [
                        fireIdleCallbackEvent
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a WebSocketSendHandshakeRequest the initiator is the WebSocketCreate event', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, webSocketCreateEvent, webSocketSendHandshakeRequestEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-sockets.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    webSocketCreateEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketCreate);
                    if (!webSocketCreateEvent) {
                        throw new Error('Could not fnd WebSocketCreateEvent');
                    }
                    webSocketSendHandshakeRequestEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
                    if (!webSocketSendHandshakeRequestEvent) {
                        throw new Error('Could not find WebSocketSendHandshakeRequest');
                    }
                    assert.strictEqual(data.eventToInitiator.get(webSocketSendHandshakeRequestEvent), webSocketCreateEvent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a WebSocketReceiveHandshakeResponse the initiator is the WebSocketCreate event', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, webSocketCreateEvent, webSocketReceieveHandshakeResponseEvent, webSocketSendHandshakeRequestEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'web-sockets.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    webSocketCreateEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketCreate);
                    if (!webSocketCreateEvent) {
                        throw new Error('Could not fnd WebSocketCreateEvent');
                    }
                    webSocketReceieveHandshakeResponseEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketReceiveHandshakeResponse);
                    if (!webSocketReceieveHandshakeResponseEvent) {
                        throw new Error('Could not find WebSocketReceiveHandshakeResponse event');
                    }
                    webSocketSendHandshakeRequestEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventWebSocketSendHandshakeRequest);
                    if (!webSocketSendHandshakeRequestEvent) {
                        throw new Error('Could not find WebSocketSendHandshakeRequest');
                    }
                    assert.strictEqual(data.eventToInitiator.get(webSocketReceieveHandshakeResponseEvent), webSocketCreateEvent);
                    assert.deepEqual(data.initiatorToEvents.get(webSocketCreateEvent), [
                        webSocketSendHandshakeRequestEvent,
                        webSocketReceieveHandshakeResponseEvent
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('for a PostMessage Handler event the initiator is the PostMessage Dispatch event', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, schedulePostMessageEvent, handlePostMessageEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'postmessage-initiators.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Initiators.data();
                    schedulePostMessageEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventSchedulePostMessage);
                    if (!schedulePostMessageEvent) {
                        throw new Error('Could not find schedulePostMessageEvent event');
                    }
                    handlePostMessageEvent = traceEvents.find(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventHandlePostMessage);
                    if (!handlePostMessageEvent) {
                        throw new Error('Could not find handlePostMessageEvent event');
                    }
                    assert.strictEqual(data.eventToInitiator.get(handlePostMessageEvent), schedulePostMessageEvent);
                    assert.deepEqual(data.initiatorToEvents.get(schedulePostMessageEvent), [
                        handlePostMessageEvent
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=InitiatorsHandler.test.js.map


}),

}]);