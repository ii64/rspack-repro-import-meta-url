"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_AuctionWorkletsHandler_test_js"], {
"./models/trace/handlers/AuctionWorkletsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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


describe('AuctionWorkletsHandler', function() {
    beforeEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.reset();
    });
    var expectedPIDsAndTypes = [
        {
            pid: 776435,
            type: "seller" /* TraceEngine.Types.TraceEvents.AuctionWorkletType.SELLER */ 
        },
        {
            pid: 776436,
            type: "bidder" /* TraceEngine.Types.TraceEvents.AuctionWorkletType.BIDDER */ 
        },
        {
            pid: 776449,
            type: "bidder" /* TraceEngine.Types.TraceEvents.AuctionWorkletType.BIDDER */ 
        }
    ];
    it('parses and finds worklets from the metadata events', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, actualPIDsAndTypes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    assert.strictEqual(data.worklets.size, 3);
                    actualPIDsAndTypes = Array.from(data.worklets.values()).map(function(worklet) {
                        return {
                            pid: worklet.pid,
                            type: worklet.type
                        };
                    });
                    assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
                    return [
                        2
                    ];
            }
        });
    }));
    it('finds the utility thread for each worklet', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, expectedCrUtilityPIDsAndTIDs, actualUtilityPIDsAndTIDs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    expectedCrUtilityPIDsAndTIDs = [
                        {
                            pid: 776435,
                            tid: 1
                        },
                        {
                            pid: 776436,
                            tid: 1
                        },
                        {
                            pid: 776449,
                            tid: 1
                        }
                    ];
                    actualUtilityPIDsAndTIDs = Array.from(data.worklets.values()).map(function(worklet) {
                        return {
                            pid: worklet.pid,
                            tid: worklet.args.data.utilityThread.tid
                        };
                    });
                    assert.deepEqual(actualUtilityPIDsAndTIDs, expectedCrUtilityPIDsAndTIDs);
                    return [
                        2
                    ];
            }
        });
    }));
    it('finds the AuctionV8HelperThread thread for each worklet', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, expectedAuctionV8PIDsAndTIDs, actualAuctionV8PIDsAndTIDs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    expectedAuctionV8PIDsAndTIDs = [
                        {
                            pid: 776435,
                            tid: 6
                        },
                        {
                            pid: 776436,
                            tid: 6
                        },
                        {
                            pid: 776449,
                            tid: 6
                        }
                    ];
                    actualAuctionV8PIDsAndTIDs = Array.from(data.worklets.values()).map(function(worklet) {
                        return {
                            pid: worklet.pid,
                            tid: worklet.args.data.v8HelperThread.tid
                        };
                    });
                    assert.deepEqual(actualAuctionV8PIDsAndTIDs, expectedAuctionV8PIDsAndTIDs);
                    return [
                        2
                    ];
            }
        });
    }));
    it('pairs up Running and DoneWith events', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, worklet;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    assert.strictEqual(data.worklets.size, 3);
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = data.worklets.values()[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            worklet = _step1.value;
                            assert.exists(worklet.args.data.runningInProcessEvent);
                            assert.exists(worklet.args.data.doneWithProcessEvent);
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
    it('can find worklets just from the DoneWith events', /*#__PURE__*/ _async_to_generator(function() {
        var actualEvents, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, actualPIDsAndTypes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    actualEvents = _state.sent();
                    events = actualEvents.filter(function(e) {
                        // Remove all RunningWith events
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventAuctionWorkletRunningInProcess(e) === false;
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    assert.strictEqual(data.worklets.size, 3);
                    // The expected data is ordered by PID; this order is correct in the
                    // un-modified set of events but because this event removes some events, we
                    // sort the found worklets by PID to ensure that the comparison is still
                    // successful. We are not interested in the order these events come.
                    actualPIDsAndTypes = Array.from(data.worklets.values()).sort(function(a, b) {
                        return a.pid - b.pid;
                    }).map(function(worklet) {
                        return {
                            pid: worklet.pid,
                            type: worklet.type
                        };
                    });
                    assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can find worklets just from the RunningIn events', /*#__PURE__*/ _async_to_generator(function() {
        var actualEvents, events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, actualPIDsAndTypes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'fenced-frame-fledge.json.gz')
                    ];
                case 1:
                    actualEvents = _state.sent();
                    events = actualEvents.filter(function(e) {
                        // Remove all DoneWith events
                        return _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.isTraceEventAuctionWorkletDoneWithProcess(e) === false;
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.AuctionWorklets.data();
                    assert.strictEqual(data.worklets.size, 3);
                    // The expected data is ordered by PID; this order is correct in the
                    // un-modified set of events but because this event removes some events, we
                    // sort the found worklets by PID to ensure that the comparison is still
                    // successful. We are not interested in the order these events come.
                    actualPIDsAndTypes = Array.from(data.worklets.values()).sort(function(a, b) {
                        return a.pid - b.pid;
                    }).map(function(worklet) {
                        return {
                            pid: worklet.pid,
                            type: worklet.type
                        };
                    });
                    assert.deepEqual(actualPIDsAndTypes, expectedPIDsAndTypes);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=AuctionWorkletsHandler.test.js.map


}),

}]);