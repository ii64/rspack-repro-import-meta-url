"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_MetaHandler_test_js"], {
"./models/trace/handlers/MetaHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



describe('MetaHandler', function() {
    var baseEvents;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var defaultTraceEvents, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    defaultTraceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    baseEvents = _to_consumable_array(defaultTraceEvents).concat([
                        _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                            args: {
                                data: {
                                    isLoadingMainFrame: true,
                                    isOutermostMainFrame: true,
                                    documentLoaderURL: 'test1',
                                    navigationId: 'navigation-1'
                                },
                                frame: '3E1717BE677B75D0536E292E00D6A34A'
                            },
                            pid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(23456),
                            tid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775),
                            ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(100),
                            name: 'navigationStart'
                        }),
                        _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                            // Should be ignored based on empty documentLoaderURL
                            args: {
                                data: {
                                    isLoadingMainFrame: true,
                                    isOutermostMainFrame: true,
                                    documentLoaderURL: '',
                                    navigationId: 'navigation-2'
                                }
                            },
                            pid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(23456),
                            tid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775),
                            ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(800),
                            name: 'navigationStart'
                        }),
                        _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
                            args: {
                                data: {
                                    isLoadingMainFrame: true,
                                    isOutermostMainFrame: true,
                                    documentLoaderURL: 'test3',
                                    navigationId: 'navigation-3'
                                }
                            },
                            pid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(23456),
                            tid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775),
                            ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(1000),
                            name: 'navigationStart'
                        })
                    ]);
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('error handling', function() {
        it('throws if data is called before finalize', function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = baseEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var event = _step.value;
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
            assert.throws(function() {
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
            }, 'Handler is not finalized');
        });
        it('throws if initialize is called without a reset', function() {
            // Due to the beforeEach the handler is already initialized, so calling
            // it a second time should throw an error.
            assert.throws(function() {
                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
            }, 'Handler was not reset');
        });
    });
    describe('browser process ID', function() {
        it('obtains the PID if present', /*#__PURE__*/ _async_to_generator(function() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.browserProcessId, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(8017));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('browser thread ID', function() {
        it('obtains the TID if present', /*#__PURE__*/ _async_to_generator(function() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.browserThreadId, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('renderer process ID', function() {
        it('obtains the PID if present', /*#__PURE__*/ _async_to_generator(function() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.topLevelRendererIds.size, 1);
                        assert.deepStrictEqual(_to_consumable_array(data.topLevelRendererIds), [
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(8051)
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('navigations', function() {
        it('obtains them if present', /*#__PURE__*/ _async_to_generator(function() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, firstNavigation;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        // navigation-2 is discarded because it has no URL.
                        // navigation-3 doesn't have a frame id so it is discarded as well.
                        assert.strictEqual(data.navigationsByFrameId.size, 1);
                        assert.strictEqual(data.navigationsByNavigationId.size, 1);
                        firstNavigation = data.navigationsByNavigationId.get('navigation-1');
                        if (!(firstNavigation === null || firstNavigation === void 0 ? void 0 : firstNavigation.args.data)) {
                            assert.fail('Navigation data was expected in trace events');
                            return [
                                2
                            ];
                        }
                        assert.strictEqual(firstNavigation.args.data.documentLoaderURL, 'test1');
                        return [
                            2
                        ];
                }
            });
        }));
        it('provides a list of main frame only navigations', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, allNavigationsCount;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'multiple-navigations-with-iframes.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        allNavigationsCount = data.navigationsByNavigationId.size;
                        assert.isTrue(data.mainFrameNavigations.length < allNavigationsCount);
                        assert.isTrue(data.mainFrameNavigations.every(function(event) {
                            return event.args.frame === data.mainFrameId;
                        }));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('frames', function() {
        it('finds the main frame ID', /*#__PURE__*/ _async_to_generator(function() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 1:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.mainFrameId, '3E1717BE677B75D0536E292E00D6A34A');
                        return [
                            2
                        ];
                }
            });
        }));
        it('finds the main frame ID for a trace that started with a page reload', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'reload-and-trace-page.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.mainFrameId, '1D148CB660D1F96ED70D78DC6A53267B');
                        return [
                            2
                        ];
                }
            });
        }));
        it('tracks the frames for found processes', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, _data_frameByProcessId_entries, _data_frameByProcessId_entries_, processId, framesInProcess, _framesInProcess_values, url;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'reload-and-trace-page.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.strictEqual(data.frameByProcessId.size, 1);
                        _data_frameByProcessId_entries = _sliced_to_array(data.frameByProcessId.entries(), 1), _data_frameByProcessId_entries_ = _sliced_to_array(_data_frameByProcessId_entries[0], 2), processId = _data_frameByProcessId_entries_[0], framesInProcess = _data_frameByProcessId_entries_[1];
                        assert.strictEqual(processId, 3581385);
                        assert.strictEqual(framesInProcess.size, 1);
                        _framesInProcess_values = _sliced_to_array(framesInProcess.values(), 1), url = _framesInProcess_values[0].url;
                        assert.strictEqual(url, 'https://example.com/');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('finding GPU thread and main frame', function() {
        it('finds the GPU process and GPU Thread', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, _TraceModel_Handlers_ModelHandlers_Meta_data, gpuProcessId, gpuThreadId;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'threejs-gpu.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                        ];
                    case 2:
                        _state.sent();
                        _TraceModel_Handlers_ModelHandlers_Meta_data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data(), gpuProcessId = _TraceModel_Handlers_ModelHandlers_Meta_data.gpuProcessId, gpuThreadId = _TraceModel_Handlers_ModelHandlers_Meta_data.gpuThreadId;
                        assert.strictEqual(gpuProcessId, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(3581327));
                        assert.strictEqual(gpuThreadId, _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(3581327));
                        return [
                            2
                        ];
                }
            });
        }));
        it('handles traces that do not have a GPU thread and returns undefined for the thread ID', /*#__PURE__*/ _async_to_generator(function() {
            var traceEventsWithNoGPUThread, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'forced-layouts-and-no-gpu.json.gz')
                        ];
                    case 1:
                        traceEventsWithNoGPUThread = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = traceEventsWithNoGPUThread[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        assert.doesNotThrow(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        }));
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                        assert.isUndefined(data.gpuThreadId);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('obtains renderer process IDs when there are no navigations', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, rendererProcesses, windowMinTime;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'threejs-gpu.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 4:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.deepStrictEqual(_to_consumable_array(data.topLevelRendererIds), [
                        3601132
                    ]);
                    rendererProcesses = data.rendererProcessesByFrame.get(data.mainFrameId);
                    if (!rendererProcesses) {
                        assert.fail('No renderer processes found');
                        return [
                            2
                        ];
                    }
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.keys()), [
                        3601132
                    ]);
                    windowMinTime = 1143381875846;
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.values()), [
                        [
                            {
                                'frame': {
                                    'frame': '1D148CB660D1F96ED70D78DC6A53267B',
                                    'name': '',
                                    'processId': 3601132,
                                    'url': 'https://threejs.org/examples/'
                                },
                                'window': {
                                    'min': windowMinTime,
                                    'max': data.traceBounds.max,
                                    'range': data.traceBounds.max - windowMinTime
                                }
                            }
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles multiple renderers from navigations', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, rendererProcesses, windowMinTime;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'multiple-top-level-renderers.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 4:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.deepStrictEqual(_to_consumable_array(data.topLevelRendererIds), [
                        78450,
                        78473,
                        79194
                    ]);
                    rendererProcesses = data.rendererProcessesByFrame.get(data.mainFrameId);
                    if (!rendererProcesses) {
                        assert.fail('No renderer processes found');
                        return [
                            2
                        ];
                    }
                    windowMinTime = 3550807444741;
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.keys()), [
                        78450,
                        78473,
                        79194
                    ]);
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.values()), [
                        [
                            {
                                'frame': {
                                    'frame': 'E70A9327100EBD78F1C03582BBBE8E5F',
                                    'name': '',
                                    'processId': 78450,
                                    'url': 'http://127.0.0.1:8081/'
                                },
                                'window': {
                                    'min': 3550803491779,
                                    'max': 3550805534872,
                                    'range': 2043093
                                }
                            }
                        ],
                        [
                            {
                                'frame': {
                                    'frame': 'E70A9327100EBD78F1C03582BBBE8E5F',
                                    'name': '',
                                    'processId': 78473,
                                    'url': 'http://localhost:8080/'
                                },
                                'window': {
                                    'min': 3550805534873,
                                    'max': 3550807444740,
                                    'range': 1909867
                                }
                            }
                        ],
                        [
                            {
                                'frame': {
                                    'frame': 'E70A9327100EBD78F1C03582BBBE8E5F',
                                    'name': '',
                                    'processId': 79194,
                                    'url': 'https://www.google.com/'
                                },
                                'window': {
                                    'min': windowMinTime,
                                    'max': data.traceBounds.max,
                                    'range': data.traceBounds.max - windowMinTime
                                }
                            }
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles multiple renderers from navigations where a process handled multiple URLs ', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, rendererProcesses;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'simple-js-program.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 4:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.deepStrictEqual(_to_consumable_array(data.topLevelRendererIds), [
                        2080
                    ]);
                    rendererProcesses = data.rendererProcessesByFrame.get(data.mainFrameId);
                    if (!rendererProcesses) {
                        assert.fail('No renderer processes found');
                        return [
                            2
                        ];
                    }
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.keys()), [
                        2080
                    ]);
                    assert.deepStrictEqual(_to_consumable_array(rendererProcesses === null || rendererProcesses === void 0 ? void 0 : rendererProcesses.values()), [
                        [
                            {
                                'frame': {
                                    'frame': '1F729458403A23CF1D8D246095129AC4',
                                    'name': '',
                                    'processId': 2080,
                                    'url': 'about:blank'
                                },
                                'window': {
                                    'min': 251126654355,
                                    'max': 251126663397,
                                    'range': 9042
                                }
                            },
                            {
                                'frame': {
                                    'frame': '1F729458403A23CF1D8D246095129AC4',
                                    'name': '',
                                    'processId': 2080,
                                    'url': 'https://www.google.com'
                                },
                                'window': {
                                    'min': 251126663398,
                                    'max': 251128073034,
                                    'range': 1409636
                                }
                            }
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('calculates trace bounds correctly', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, _data_traceBounds, max, min, range, expectedMin, expectedMax;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    traceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 4:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    _data_traceBounds = data.traceBounds, max = _data_traceBounds.max, min = _data_traceBounds.min, range = _data_traceBounds.range;
                    expectedMin = 50442438975;
                    expectedMax = 50442438976;
                    assert.strictEqual(min, expectedMin, 'Min calculated incorrectly');
                    assert.strictEqual(max, expectedMax, 'Max calculated incorrectly');
                    assert.strictEqual(range, expectedMax - expectedMin, 'Range calculated incorrectly');
                    return [
                        2
                    ];
            }
        });
    }));
    it('calculates the min trace bound correctly if no TracingStartedInBrowser event is found', /*#__PURE__*/ _async_to_generator(function() {
        var baseEvents, traceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, expectedMin;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    baseEvents = _state.sent();
                    // We are about to mutate these events, so copy them to avoid mutating the
                    // cached events from the TraceLoader.
                    traceEvents = baseEvents.slice().filter(function(event) {
                        // Delete the tracing started in browser event to force the min bounds to
                        // be calculated based on the event with the smallest timestamp.
                        return event.name !== 'TracingStartedInBrowser';
                    });
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    expectedMin = 50442438976;
                    assert.strictEqual(data.traceBounds.min, expectedMin, 'Min calculated incorrectly');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores ::UMA Events', /*#__PURE__*/ _async_to_generator(function() {
        var traceEvents, error, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, _data_traceBounds, max, min, range, expectedMin, expectedMax;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev.json.gz')
                    ];
                case 1:
                    // This file contains UMA events which need to be ignored.
                    traceEvents = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    assert.fail(error);
                    return [
                        2
                    ];
                case 3:
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
                    _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = traceEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 4:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    _data_traceBounds = data.traceBounds, max = _data_traceBounds.max, min = _data_traceBounds.min, range = _data_traceBounds.range;
                    expectedMin = 1020034823047;
                    expectedMax = 1020036087961;
                    assert.strictEqual(min, expectedMin, 'Min calculated incorrectly');
                    assert.strictEqual(max, expectedMax, 'Max calculated incorrectly');
                    assert.strictEqual(range, expectedMax - expectedMin, 'Range calculated incorrectly');
                    return [
                        2
                    ];
            }
        });
    }));
    it('collects all thread metadata in all processes', /*#__PURE__*/ _async_to_generator(function() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, collected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 1:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    collected = _to_consumable_array(data.threadsInProcess.values()).map(function(threadInProcess) {
                        return _to_consumable_array(threadInProcess.values());
                    });
                    expect(collected.map(function(process) {
                        return process.map(function(thread) {
                            return thread.args.name;
                        });
                    })).to.deep.equal([
                        [
                            'swapper',
                            'VizCompositorThread',
                            'ThreadPoolServiceThread',
                            'ThreadPoolBackgroundWorker',
                            'GpuWatchdog',
                            'ThreadPoolForegroundWorker'
                        ],
                        [
                            'CrBrowserMain',
                            'Chrome_IOThread',
                            'ThreadPoolServiceThread',
                            'Chrome_DevToolsADBThread',
                            'ThreadPoolForegroundWorker'
                        ],
                        [
                            'CrRendererMain',
                            'Compositor',
                            'Chrome_ChildIOThread',
                            'ThreadPoolServiceThread',
                            'ThreadPoolForegroundWorker'
                        ],
                        [
                            'CrRendererMain',
                            'Compositor',
                            'Chrome_ChildIOThread',
                            'ThreadPoolServiceThread',
                            'ThreadPoolForegroundWorker'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle edge cases where there are multiple navigations with the same ID', /*#__PURE__*/ _async_to_generator(function() {
        var events;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'multiple-navigations-same-id.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    assert.doesNotThrow(function() {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('marks a generic trace as generic', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'generic-about-tracing.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data().traceIsGeneric);
                    return [
                        2
                    ];
            }
        });
    }));
    it('marks a web trace as being not generic', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data().traceIsGeneric);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets the main frame URL from the TracingStartedInBrowser event', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.strictEqual(data.mainFrameURL, 'https://web.dev/');
                    return [
                        2
                    ];
            }
        });
    }));
    it('will alter the main frame URL based on the first main frame navigation', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-initial-url.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.strictEqual(data.mainFrameURL, 'https://web.dev/articles/inp');
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns a list of processes and process_name events', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data, pidsToNames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-initial-url.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    pidsToNames = Array.from(data.processNames.entries(), function(param) {
                        var _param = _sliced_to_array(param, 2), pid = _param[0], event = _param[1];
                        return [
                            pid,
                            event.args.name
                        ];
                    });
                    assert.deepEqual(pidsToNames, [
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(37605),
                            'Browser'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(48544),
                            'Renderer'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(37613),
                            'GPU Process'
                        ],
                        [
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(48531),
                            'Renderer'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not set a frame as a main frame if it has no URL.', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'wrong-main-frame-bug.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.strictEqual(data.mainFrameId, 'D1731088F5DE299149240DF9E6025291');
                    return [
                        2
                    ];
            }
        });
    }));
    it('will use isOutermostMainFrame to determine the main frame from the TracingStartedInBrowser event if it is present', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-outermost-frames.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    assert.strictEqual(data.mainFrameId, '881522AC20B813B0C0E99E27CEBAB951');
                    return [
                        2
                    ];
            }
        });
    }));
    it('will use isInPrimaryPage along with isOutermostMainFrame to identify the main frame from TracingStartedInBrowser', /*#__PURE__*/ _async_to_generator(function() {
        var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'primary-page-frame.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            event = _step.value;
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
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
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.finalize()
                    ];
                case 2:
                    _state.sent();
                    data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.data();
                    // If you look at the trace, this is the frame that is both:
                    // isInPrimaryPage === true
                    // isOutermostMainFrame == true
                    //
                    // The other frames have isOutermostMainFrame == true (as they are pre-rendered pages)
                    // But they are not in the primary page.
                    assert.strictEqual(data.mainFrameId, '07B7D55F5BE0ADB8AAD6502F2D3859FF');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=MetaHandler.test.js.map


}),

}]);