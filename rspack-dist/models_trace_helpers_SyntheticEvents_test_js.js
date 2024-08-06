"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_helpers_SyntheticEvents_test_js"], {
"./models/trace/helpers/SyntheticEvents.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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


describe('SyntheticEvents', function() {
    beforeEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.reset();
    });
    afterEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.reset();
    });
    describe('Initialization', function() {
        it('does not throw when invoking getActiveManager after executing the trace engine', /*#__PURE__*/ _async_to_generator(function() {
            var events;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.fixtureContents(this, 'basic.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.executeTraceEngineOnFileContents(events)
                        ];
                    case 2:
                        _state.sent();
                        assert.doesNotThrow(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.getActiveManager);
                        return [
                            2
                        ];
                }
            });
        }));
        it('always returns the manager for the most recent trace and re-uses managers for the same set of input events', /*#__PURE__*/ _async_to_generator(function() {
            var trace1, trace2, events1, events2, manager1, manager2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.fixtureContents(this, 'basic.json.gz')
                        ];
                    case 1:
                        trace1 = _state.sent();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.fixtureContents(this, 'basic-stack.json.gz')
                        ];
                    case 2:
                        trace2 = _state.sent();
                        events1 = Array.isArray(trace1) ? trace1 : trace1.traceEvents;
                        events2 = Array.isArray(trace2) ? trace2 : trace2.traceEvents;
                        manager1 = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(events1);
                        manager2 = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(events2);
                        // Manager2 is active as it was the last one to be initialized
                        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.getActiveManager(), manager2);
                        // Now re-init with events1 (should use the existing manager from the cache)
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(events1);
                        // Now manager1 is active
                        assert.strictEqual(_trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.getActiveManager(), manager1);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('SyntheticBasedEvent registration', function() {
        it('stores synthetic based events at the same index as their corresponding raw event in the source array', /*#__PURE__*/ _async_to_generator(function() {
            var contents, rawEvents, traceData, allSyntheticEvents, syntheticEventsManager, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, syntheticEvent, rawEventIndex, allSyntheticEventsInManagerCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.fixtureContents(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        contents = _state.sent();
                        rawEvents = 'traceEvents' in contents ? contents.traceEvents : contents;
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.executeTraceEngineOnFileContents(rawEvents)
                        ];
                    case 2:
                        traceData = _state.sent().traceData;
                        allSyntheticEvents = _to_consumable_array(traceData.Animations.animations).concat(_to_consumable_array(traceData.NetworkRequests.byTime), _to_consumable_array(traceData.Screenshots));
                        syntheticEventsManager = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Helpers.SyntheticEvents.SyntheticEventsManager.getActiveManager();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = allSyntheticEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                syntheticEvent = _step.value;
                                rawEventIndex = rawEvents.indexOf(syntheticEvent.rawSourceEvent);
                                // Test synthetic events are stored in the correct position.
                                assert.strictEqual(syntheticEventsManager.syntheticEventForRawEventIndex(rawEventIndex), syntheticEvent);
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
                        allSyntheticEventsInManagerCount = syntheticEventsManager.getSyntheticTraceEvents().reduce(function(count, event) {
                            return event !== undefined ? count + 1 : 0;
                        }, 0);
                        // Test synthetic events are stored only once.
                        assert.strictEqual(allSyntheticEventsInManagerCount, allSyntheticEvents.length);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=SyntheticEvents.test.js.map


}),

}]);