"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_Initiators_test_js"], {
"./panels/timeline/Initiators.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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



describe('Initiators', function() {
    it('returns the initiator data', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, timerFireEvent, timerInstallEvent, initiatorData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'set-timeout-long-task.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    timerFireEvent = Array.from(traceData.Initiators.eventToInitiator.keys()).find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventTimerFire);
                    assert.exists(timerFireEvent);
                    timerInstallEvent = traceData.Initiators.eventToInitiator.get(timerFireEvent);
                    assert.exists(timerInstallEvent);
                    initiatorData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerFireEvent, [], []);
                    assert.deepEqual(initiatorData, [
                        {
                            event: timerFireEvent,
                            initiator: timerInstallEvent
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the initiator data for network requests', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, event, initiator, initiatorData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'network-requests-initiators.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find the network request to test, it is initiated by `youtube.com`.
                    event = traceData.NetworkRequests.byTime.find(function(event) {
                        return event.ts === 1491680762420;
                    });
                    assert.exists(event);
                    // Find the `youtube.com` network request.
                    initiator = traceData.NetworkRequests.byTime.find(function(event) {
                        return event.ts === 1491680629144;
                    });
                    assert.exists(initiator);
                    initiatorData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDrawForNetwork(traceData, event);
                    assert.deepEqual(initiatorData, [
                        {
                            event: event,
                            initiator: initiator
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can walk up the tree to find the first parent with an initiator', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, fibonacciCall, timerFireEvent, timerInstallEvent, initiatorsData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'set-timeout-long-task.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find any of the fibonnaci() calls; they have a parent
                    // event (TimerFire) that has an initiator.
                    fibonacciCall = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                    });
                    assert.exists(fibonacciCall);
                    timerFireEvent = Array.from(traceData.Initiators.eventToInitiator.keys()).find(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isTraceEventTimerFire);
                    assert.exists(timerFireEvent);
                    timerInstallEvent = traceData.Initiators.eventToInitiator.get(timerFireEvent);
                    assert.exists(timerInstallEvent);
                    // Find the initator data but starting at the fibonacci()
                    // call.
                    initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
                    assert.deepEqual(initiatorsData, [
                        {
                            event: timerFireEvent,
                            initiator: timerInstallEvent
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('will walk back through the initiators to find the entire chain', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, fibonacciCall, initiatorsData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, initiatorData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find any of the fibonnaci() calls; they have a parent
                    // event (TimerFire) that has an initiator.
                    fibonacciCall = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                    });
                    assert.exists(fibonacciCall);
                    // Find the initators data but starting at the fibonacci()
                    // call. We expect to find two initiatorData objects here:
                    // 1. fibonacci() ===> TimerFire caused by TimerInstall
                    // 2. The TimerInstall from (1), caused by a prior TimerInstall.
                    initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
                    assert.lengthOf(initiatorsData, 2);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = initiatorsData[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            initiatorData = _step.value;
                            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
                            assert.strictEqual(initiatorData.event.name, "TimerFire" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerFire */ );
                            assert.strictEqual(initiatorData.initiator.name, "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ );
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
    it('will walk forward to find the events initiated by the selected entry', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, timerInstall, initatorsData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, initatorData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find any of the InstallTimer calls; they initiate other events.
                    timerInstall = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return entry.name === "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ ;
                    });
                    assert.exists(timerInstall);
                    // Find the initatorData objects starting at the TimerInstall
                    // call. We expect to find one initatorData here:
                    // TimerFire that was initiated by the entry we found - TimerInstall
                    initatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerInstall, [], []);
                    assert.lengthOf(initatorsData, 1);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = initatorsData[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            initatorData = _step.value;
                            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
                            assert.strictEqual(initatorData.event.name, "TimerFire" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerFire */ );
                            assert.strictEqual(initatorData.initiator.name, "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ );
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
    it('will return the closest expandable ancestor as an initiator in a pair if the initiator itself is hidden', /*#__PURE__*/ _async_to_generator(function() {
        var _traceData_Renderer_entryToNode_get, traceData, timerInstall, timerInstallParent, initiatorsData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, initiatorData;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find any of the InstallTimer calls; they initiate other events.
                    timerInstall = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return entry.name === "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ ;
                    });
                    assert.exists(timerInstall);
                    // Get the parent of InstallTimer to add to the expandable events array.
                    // When we add TimerInstall to hidden entries list, it will be the closest expandable parent and the initiator should point to it.
                    timerInstallParent = (_traceData_Renderer_entryToNode_get = traceData.Renderer.entryToNode.get(timerInstall)) === null || _traceData_Renderer_entryToNode_get === void 0 ? void 0 : _traceData_Renderer_entryToNode_get.parent;
                    assert.exists(timerInstallParent);
                    // Find the initatorData objects starting at the TimerInstall
                    // call. We expect to find one initatorData here:
                    // TimerFire that was initiated by the entry we found - Parent of TimerInstall because TimerInstall is hidden
                    initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, timerInstall, [
                        timerInstall
                    ], [
                        timerInstallParent === null || timerInstallParent === void 0 ? void 0 : timerInstallParent.entry
                    ]);
                    assert.lengthOf(initiatorsData, 1);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
                        for(_iterator = initiatorsData[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            initiatorData = _step.value;
                            assert.strictEqual(initiatorData.event.name, "TimerFire" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerFire */ );
                            assert.strictEqual(initiatorData.initiator, timerInstallParent.entry);
                            // Ensure the expandable entry is marked as hidden
                            assert.strictEqual(initiatorData.isInitiatorHidden, true);
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
    it('will return the closest expandable ancestor as an initiated event in a pair if the event itself is hidden', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, fibonacciCall, initiatorsData, timerFireParents, initiatedEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, initiatorData, _traceData_Renderer_entryToNode_get_parent, _traceData_Renderer_entryToNode_get, parentEvent, i, initiatorData1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'nested-initiators.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    // Find any of the fibonnaci() calls; they have a parent
                    // event (TimerFire) that has an initiator.
                    fibonacciCall = traceData.Renderer.allTraceEntries.find(function(entry) {
                        return _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.TraceEvents.isProfileCall(entry) && entry.callFrame.functionName === 'fibonacci';
                    });
                    assert.exists(fibonacciCall);
                    // Find the initatorData objects but starting at the fibonacci()
                    // call. We expect to find two initiatorData objects here:
                    // 1. fibonacci() ===> TimerFire caused by TimerInstall
                    // 2. The TimerInstall from (1), caused by a prior TimerInstall.
                    initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, [], []);
                    assert.lengthOf(initiatorsData, 2);
                    // Save the parents of initiated events and the events themselves to get initiators again with those as expandable and hidden
                    timerFireParents = [];
                    initiatedEvents = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = initiatorsData[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            initiatorData = _step.value;
                            ;
                            // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
                            assert.strictEqual(initiatorData.event.name, "TimerFire" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerFire */ );
                            assert.strictEqual(initiatorData.initiator.name, "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ );
                            parentEvent = (_traceData_Renderer_entryToNode_get = traceData.Renderer.entryToNode.get(initiatorData.event)) === null || _traceData_Renderer_entryToNode_get === void 0 ? void 0 : (_traceData_Renderer_entryToNode_get_parent = _traceData_Renderer_entryToNode_get.parent) === null || _traceData_Renderer_entryToNode_get_parent === void 0 ? void 0 : _traceData_Renderer_entryToNode_get_parent.entry;
                            if (parentEvent) {
                                timerFireParents.push(parentEvent);
                                initiatedEvents.push(initiatorData.event);
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
                    // Get initiatorData object again, now with the previously initiated events hidden and parents marked as expandable
                    initiatorsData = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.Initiators.initiatorsDataToDraw(traceData, fibonacciCall, initiatedEvents, timerFireParents);
                    // The length should not change, just the inititated events.
                    assert.lengthOf(initiatorsData, 2);
                    for(i = 0; i < initiatorsData.length; i++){
                        initiatorData1 = initiatorsData[i];
                        // Ensure each initiatorData object has TimerInstall>TimerFire event to initiator.
                        assert.strictEqual(initiatorData1.event, timerFireParents[i]);
                        assert.strictEqual(initiatorData1.initiator.name, "TimerInstall" /* TraceEngine.Types.TraceEvents.KnownEventName.TimerInstall */ );
                        // Ensure the expandable entry is marked as hidden
                        assert.strictEqual(initiatorData1.isEntryHidden, true);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=Initiators.test.js.map


}),

}]);