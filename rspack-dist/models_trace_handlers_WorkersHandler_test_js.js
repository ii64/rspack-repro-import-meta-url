"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_WorkersHandler_test_js"], {
"./models/trace/handlers/WorkersHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
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


describe('WorkersHandler', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.reset();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'two-workers.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.finalize()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    afterEach(function() {
        _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.reset();
    });
    it('collects the worker session ID metadata events', /*#__PURE__*/ _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
            assert.deepEqual(data.workerSessionIdEvents, [
                {
                    name: 'TracingSessionIdForWorker',
                    cat: 'disabled-by-default-devtools.timeline',
                    ph: "I" /* TraceEngine.Types.TraceEvents.Phase.INSTANT */ ,
                    tid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(37651),
                    pid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(71044),
                    s: "t" /* TraceEngine.Types.TraceEvents.TraceEventScope.THREAD */ ,
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(107351291649),
                    tts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(934),
                    args: {
                        data: {
                            frame: '372333E30ECABDA706136ED37FD9FA2B',
                            url: 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                            workerId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.WorkerId('990A76F8BED5B771144F505FF9313D06'),
                            workerThreadId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(37651)
                        }
                    }
                },
                {
                    name: 'TracingSessionIdForWorker',
                    cat: 'disabled-by-default-devtools.timeline',
                    ph: "I" /* TraceEngine.Types.TraceEvents.Phase.INSTANT */ ,
                    tid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(35351),
                    pid: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ProcessID(71044),
                    s: "t" /* TraceEngine.Types.TraceEvents.TraceEventScope.THREAD */ ,
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(107351292507),
                    tts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(817),
                    args: {
                        data: {
                            frame: '372333E30ECABDA706136ED37FD9FA2B',
                            url: 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js',
                            workerId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.WorkerId('E59E70C44C7664657CE822BB7DC54085'),
                            workerThreadId: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.TraceEvents.ThreadID(35351)
                        }
                    }
                }
            ]);
            return [
                2
            ];
        });
    }));
    it('collects thread id for workers', /*#__PURE__*/ _async_to_generator(function() {
        var data, _data_workerIdByThread_entries, _data_workerIdByThread_entries_, thread1, worker1, _data_workerIdByThread_entries_1, thread2, worker2;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
            _data_workerIdByThread_entries = _sliced_to_array(data.workerIdByThread.entries(), 2), _data_workerIdByThread_entries_ = _sliced_to_array(_data_workerIdByThread_entries[0], 2), thread1 = _data_workerIdByThread_entries_[0], worker1 = _data_workerIdByThread_entries_[1], _data_workerIdByThread_entries_1 = _sliced_to_array(_data_workerIdByThread_entries[1], 2), thread2 = _data_workerIdByThread_entries_1[0], worker2 = _data_workerIdByThread_entries_1[1];
            assert.strictEqual(thread1, 37651);
            assert.strictEqual(worker1, '990A76F8BED5B771144F505FF9313D06');
            assert.strictEqual(thread2, 35351);
            assert.strictEqual(worker2, 'E59E70C44C7664657CE822BB7DC54085');
            return [
                2
            ];
        });
    }));
    it('collects the url of workers', /*#__PURE__*/ _async_to_generator(function() {
        var data, _data_workerURLById_entries, _data_workerURLById_entries_, thread1, worker1, _data_workerURLById_entries_1, thread2, worker2;
        return _ts_generator(this, function(_state) {
            data = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Workers.data();
            _data_workerURLById_entries = _sliced_to_array(data.workerURLById.entries(), 2), _data_workerURLById_entries_ = _sliced_to_array(_data_workerURLById_entries[0], 2), thread1 = _data_workerURLById_entries_[0], worker1 = _data_workerURLById_entries_[1], _data_workerURLById_entries_1 = _sliced_to_array(_data_workerURLById_entries[1], 2), thread2 = _data_workerURLById_entries_1[0], worker2 = _data_workerURLById_entries_1[1];
            assert.strictEqual(thread1, '990A76F8BED5B771144F505FF9313D06');
            assert.strictEqual(worker1, 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js');
            assert.strictEqual(thread2, 'E59E70C44C7664657CE822BB7DC54085');
            assert.strictEqual(worker2, 'https://chromedevtools.github.io/performance-stories/two-workers/fib-worker.js');
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=WorkersHandler.test.js.map


}),

}]);