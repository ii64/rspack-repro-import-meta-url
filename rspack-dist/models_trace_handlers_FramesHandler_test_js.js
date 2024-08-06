"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_FramesHandler_test_js"], {
"./models/trace/handlers/FramesHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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



function processTrace(events) {
    return _processTrace.apply(this, arguments);
}
function _processTrace() {
    _processTrace = _async_to_generator(function(events) {
        var handlersInOrder, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, handlerName, handler, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, event, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handlerName1, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, handlerName2, handler1, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // The FramesHandler depends on a few other handlers, so we run all of them as part of these tests.
                    handlersInOrder = [
                        'Meta',
                        'Samples',
                        'AuctionWorklets',
                        'Renderer',
                        'LayerTree',
                        'Frames'
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = handlersInOrder[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            handlerName = _step.value;
                            handler = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers[handlerName];
                            handler.reset();
                            if ('initialize' in handler) {
                                handler.initialize();
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
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = events[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            event = _step1.value;
                            _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                            try {
                                for(_iterator2 = handlersInOrder[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                    handlerName1 = _step2.value;
                                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers[handlerName1].handleEvent(event);
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                        _iterator2.return();
                                    }
                                } finally{
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
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
                    _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator3 = handlersInOrder[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done)) return [
                        3,
                        5
                    ];
                    handlerName2 = _step3.value;
                    handler1 = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers[handlerName2];
                    if (!('finalize' in handler1)) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        handler1.finalize()
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion3 = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
    return _processTrace.apply(this, arguments);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__.describeWithMockConnection)('FramesHandler', function() {
    it('can parse out a trace and return the frames', /*#__PURE__*/ _async_to_generator(function() {
        var rawEvents, parsedFrames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    rawEvents = _state.sent();
                    return [
                        4,
                        processTrace(rawEvents)
                    ];
                case 2:
                    _state.sent();
                    parsedFrames = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.data().frames;
                    assert.lengthOf(parsedFrames, 18);
                    // Assert a couple of frames to check the data, including one that is partial and was dropped.
                    assert.strictEqual(parsedFrames[0].startTime, 122411104714);
                    assert.strictEqual(parsedFrames[0].duration, 37847);
                    assert.isFalse(parsedFrames[0].isPartial);
                    assert.isFalse(parsedFrames[0].isPartial);
                    assert.strictEqual(parsedFrames[2].startTime, 122411159244);
                    assert.strictEqual(parsedFrames[2].duration, 16683);
                    assert.isTrue(parsedFrames[2].isPartial);
                    assert.isTrue(parsedFrames[2].dropped);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can create LayerPaintEvents from Paint and snapshot events', /*#__PURE__*/ _async_to_generator(function() {
        var rawEvents, parsedFrames, frameWithPaints;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Advanced instrumentation trace file is large: allow the bots more time
                    // to process it.
                    this.timeout(20000);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-with-advanced-instrumentation.json.gz')
                    ];
                case 1:
                    rawEvents = _state.sent();
                    return [
                        4,
                        processTrace(rawEvents)
                    ];
                case 2:
                    _state.sent();
                    parsedFrames = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.data().frames;
                    assert.lengthOf(parsedFrames, 25);
                    frameWithPaints = parsedFrames.at(2);
                    if (!frameWithPaints) {
                        throw new Error('Could not find frame at index 2');
                    }
                    // Check we have the right one.
                    assert.strictEqual(frameWithPaints.seqId, 1127448);
                    assert.lengthOf(frameWithPaints.paints, 7);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can return frames within a given window', /*#__PURE__*/ _async_to_generator(function() {
        var rawEvents, parsedFrames, startTime, endTime, framesWithinWindow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    rawEvents = _state.sent();
                    return [
                        4,
                        processTrace(rawEvents)
                    ];
                case 2:
                    _state.sent();
                    parsedFrames = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.data().frames;
                    assert.lengthOf(parsedFrames, 18);
                    startTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(parsedFrames[0].startTime);
                    endTime = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(parsedFrames[3].endTime);
                    framesWithinWindow = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.framesWithinWindow(parsedFrames, startTime, endTime);
                    assert.deepEqual(framesWithinWindow, [
                        parsedFrames[0],
                        parsedFrames[1],
                        parsedFrames[2],
                        parsedFrames[3]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
describe('FramesHandler', function() {
    it('visualizes zero frames when no BeginFrames are added', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(100);
        assert.isEmpty(framesToVisualize);
    });
    it('visualizes zero frames when no BeginFrame in queue matches DrawFrame', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        beginFrameQueue.addFrameIfNotExists(100, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000), false, false);
        beginFrameQueue.addFrameIfNotExists(101, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016), false, false);
        beginFrameQueue.addFrameIfNotExists(102, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032), false, false);
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(103);
        assert.isEmpty(framesToVisualize);
    });
    it('ignores BeginFrames without corresponding DrawFrames', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        beginFrameQueue.addFrameIfNotExists(100, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000), false, false);
        beginFrameQueue.addFrameIfNotExists(101, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016), false, false);
        beginFrameQueue.addFrameIfNotExists(102, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032), false, false);
        beginFrameQueue.addFrameIfNotExists(103, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048)), false, false);
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(102);
        // Visualized frame: 102 (non-dropped).
        // The other frames that are neither drawn nor dropped (100, 101) are
        // excluded from visualization.
        assert.lengthOf(framesToVisualize, 1);
        assert.isFalse(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 102);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032));
    });
    it('visualizes dropped BeginFrames before a presented frame', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        beginFrameQueue.addFrameIfNotExists(100, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000), false, false);
        beginFrameQueue.addFrameIfNotExists(101, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016), true, false);
        beginFrameQueue.addFrameIfNotExists(102, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032), false, false);
        beginFrameQueue.addFrameIfNotExists(103, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048), true, false);
        beginFrameQueue.addFrameIfNotExists(104, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000064), false, false);
        beginFrameQueue.addFrameIfNotExists(105, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080), false, false);
        beginFrameQueue.addFrameIfNotExists(106, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000096), false, false);
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(105);
        // Visualized frames: 101 (dropped), 103 (dropped) and 105 (non-dropped).
        // The other frames that are neither drawn nor dropped (100, 102 and 104)
        // are excluded from visualization.
        assert.lengthOf(framesToVisualize, 3);
        assert.isTrue(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 101);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016));
        assert.isTrue(framesToVisualize[1].isDropped);
        assert.strictEqual(framesToVisualize[1].seqId, 103);
        assert.strictEqual(framesToVisualize[1].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048));
        assert.isFalse(framesToVisualize[2].isDropped);
        assert.strictEqual(framesToVisualize[2].seqId, 105);
        assert.strictEqual(framesToVisualize[2].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080));
    });
    it('changes dropped status of specified frames via setDropped()', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        beginFrameQueue.addFrameIfNotExists(100, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000), false, false);
        beginFrameQueue.setDropped(100, true);
        beginFrameQueue.addFrameIfNotExists(101, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016), true, false);
        beginFrameQueue.addFrameIfNotExists(102, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032), false, false);
        beginFrameQueue.addFrameIfNotExists(103, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048), true, false);
        beginFrameQueue.addFrameIfNotExists(104, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000064), false, false);
        beginFrameQueue.addFrameIfNotExists(105, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080), false, false);
        beginFrameQueue.addFrameIfNotExists(106, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000096), true, false);
        beginFrameQueue.setDropped(101, false);
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(105);
        // Visualized frames: 100 (dropped), 103 (dropped) and 105 (non-dropped).
        // The other frames that are neither drawn nor dropped (101, 102 and 104)
        // are excluded from visualization.
        assert.lengthOf(framesToVisualize, 3);
        assert.isTrue(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 100);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000));
        assert.isTrue(framesToVisualize[1].isDropped);
        assert.strictEqual(framesToVisualize[1].seqId, 103);
        assert.strictEqual(framesToVisualize[1].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048));
        assert.isFalse(framesToVisualize[2].isDropped);
        assert.strictEqual(framesToVisualize[2].seqId, 105);
        assert.strictEqual(framesToVisualize[2].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080));
    });
    it('pops processed frames out of the queue', function() {
        var beginFrameQueue = new _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Frames.TimelineFrameBeginFrameQueue();
        beginFrameQueue.addFrameIfNotExists(100, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000), true, false);
        beginFrameQueue.addFrameIfNotExists(101, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000016), false, false);
        beginFrameQueue.addFrameIfNotExists(102, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032), false, false);
        beginFrameQueue.addFrameIfNotExists(103, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048), true, false);
        beginFrameQueue.addFrameIfNotExists(104, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000064), false, false);
        beginFrameQueue.addFrameIfNotExists(105, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080), true, false);
        beginFrameQueue.addFrameIfNotExists(106, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000096), true, false);
        // Pop frame 100, 101 (not visualized) and 102 from queue.
        var framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(102);
        assert.lengthOf(framesToVisualize, 2);
        assert.isTrue(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 100);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000000));
        assert.isFalse(framesToVisualize[1].isDropped);
        assert.strictEqual(framesToVisualize[1].seqId, 102);
        assert.strictEqual(framesToVisualize[1].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000032));
        // Pop frame 103, 104 (not visualized) and 105 from queue
        framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(105);
        assert.lengthOf(framesToVisualize, 2);
        assert.isTrue(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 103);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000048));
        assert.isTrue(framesToVisualize[1].isDropped);
        assert.strictEqual(framesToVisualize[1].seqId, 105);
        assert.strictEqual(framesToVisualize[1].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000080));
        // Pop frame 106 from queue
        framesToVisualize = beginFrameQueue.processPendingBeginFramesOnDrawFrame(106);
        assert.lengthOf(framesToVisualize, 1);
        assert.isTrue(framesToVisualize[0].isDropped);
        assert.strictEqual(framesToVisualize[0].seqId, 106);
        assert.strictEqual(framesToVisualize[0].startTime, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000096));
    });
}); //# sourceMappingURL=FramesHandler.test.js.map


}),

}]);