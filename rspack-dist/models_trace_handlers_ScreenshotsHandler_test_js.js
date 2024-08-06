"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_ScreenshotsHandler_test_js"], {
"./models/trace/handlers/ScreenshotsHandler.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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



describe('ScreenshotsHandler', function() {
    var baseEvent = _object_spread_props(_object_spread({}, _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_0__.defaultTraceEvent), {
        name: 'Screenshot',
        // Ensure that the screenshots are held against the pid & tid values
        // that match the Browser process and CrBrowserMain in defaultTraceEvents.
        pid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ProcessID(8017),
        tid: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.ThreadID(775),
        ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
        args: {},
        cat: 'test',
        ph: "O" /* TraceModel.Types.TraceEvents.Phase.OBJECT_SNAPSHOT */ 
    });
    var baseEvents;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            // The screenshot handler requires the meta handler because it needs
            // to know the browser process and thread IDs. Here, then, we reset
            // and later we will pass events to the meta handler, otherwise the
            // screenshots handler will fail.
            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.reset();
            return [
                2
            ];
        });
    }));
    describe('frames', function() {
        it('obtains them if present', /*#__PURE__*/ _async_to_generator(function() {
            var defaultTraceEvents, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                        ];
                    case 1:
                        defaultTraceEvents = _state.sent();
                        baseEvents = _to_consumable_array(defaultTraceEvents).concat([
                            _object_spread_props(_object_spread({}, baseEvent), {
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(100)
                            }),
                            _object_spread_props(_object_spread({}, baseEvent), {
                                ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(200)
                            })
                        ]);
                        _trace_js__WEBPACK_IMPORTED_MODULE_2__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(baseEvents);
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = baseEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
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
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize()
                        ];
                    case 3:
                        _state.sent();
                        data = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
                        assert.strictEqual(data.length, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('presentation timestamps', function() {
        var getMsDifferences = function getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents) {
            return syntheticScreenshotEvents.map(function(synEvent, i) {
                var origEvent = originalScreenshotEvents.at(i);
                var msDifference = (synEvent.ts - origEvent.ts) / 1000;
                return msDifference;
            });
        };
        it('are corrected if frame sequence number is present', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, syntheticScreenshotEvents, originalScreenshotEvents, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, oEvent, msDifferences;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'about-blank-first.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
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
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize()
                        ];
                    case 3:
                        _state.sent();
                        syntheticScreenshotEvents = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
                        originalScreenshotEvents = events.filter(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventScreenshot);
                        assert.strictEqual(syntheticScreenshotEvents.length, originalScreenshotEvents.length);
                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(_iterator1 = originalScreenshotEvents[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                oEvent = _step1.value;
                                assert.notStrictEqual(oEvent.id, '0x1'); // The id (frame sequence) shouldn't be the old default of 1.
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
                        msDifferences = getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents);
                        // These values indicate all the screenshots true timings are a tad more to the left.
                        assert.deepStrictEqual(msDifferences, [
                            -13.079,
                            -16.381,
                            -12.503,
                            -5.405,
                            -14.108,
                            -14.661,
                            -11.944,
                            -14.322,
                            -3.532,
                            -15.821,
                            0.254,
                            -32.22,
                            -15.156,
                            -13.219,
                            -14.464,
                            -16.135,
                            -16.501,
                            -33.165,
                            -15.71,
                            -32.39,
                            -32.445,
                            -30.512
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('remain the same with older traces', /*#__PURE__*/ _async_to_generator(function() {
            var events, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event, syntheticScreenshotEvents, originalScreenshotEvents, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, oEvent, msDifferences;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        events = _state.sent();
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = events[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Meta.handleEvent(event);
                                _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.handleEvent(event);
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
                        return [
                            4,
                            _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.finalize()
                        ];
                    case 3:
                        _state.sent();
                        syntheticScreenshotEvents = _trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots.data();
                        originalScreenshotEvents = events.filter(_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.TraceEvents.isTraceEventScreenshot);
                        assert.strictEqual(syntheticScreenshotEvents.length, originalScreenshotEvents.length);
                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(_iterator1 = originalScreenshotEvents[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                oEvent = _step1.value;
                                assert.strictEqual(oEvent.id, '0x1'); // The ids here aren't the new frame sequence, but the hardcoded 1.
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
                        msDifferences = getMsDifferences(syntheticScreenshotEvents, originalScreenshotEvents);
                        // No adjustment made.
                        assert.deepStrictEqual(msDifferences, [
                            0,
                            0,
                            0,
                            0,
                            0
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ScreenshotsHandler.test.js.map


}),

}]);