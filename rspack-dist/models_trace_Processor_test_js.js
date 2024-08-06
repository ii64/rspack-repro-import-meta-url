"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_Processor_test_js"], {
"./models/trace/Processor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace/trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TraceProcessor', function() {
    it('can use a trace processor', /*#__PURE__*/ _async_to_generator(function() {
        var processor, file, thrown, e, promise, e1, e2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    processor = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor.createWithAllHandlers();
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                    ];
                case 1:
                    file = _state.sent();
                    // Check parsing after instantiation.
                    assert.isNull(processor.traceParsedData);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(processor.traceParsedData);
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    e = _state.sent();
                    thrown = e;
                    return [
                        3,
                        6
                    ];
                case 6:
                    assert.strictEqual(thrown === null || thrown === void 0 ? void 0 : thrown.message, 'Trace processor can\'t start parsing when not idle. Current state: FINISHED_PARSING');
                    // Check parsing after reset.
                    processor.reset();
                    assert.isNull(processor.traceParsedData);
                    assert.isNull(processor.insights);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 7:
                    _state.sent();
                    assert.isNotNull(processor.traceParsedData);
                    assert.isNotNull(processor.insights);
                    // Cleanup.
                    processor.reset();
                    _state.label = 8;
                case 8:
                    _state.trys.push([
                        8,
                        10,
                        11,
                        13
                    ]);
                    promise = processor.parse(file);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 9:
                    _state.sent();
                    return [
                        3,
                        13
                    ];
                case 10:
                    e1 = _state.sent();
                    thrown = e1;
                    return [
                        3,
                        13
                    ];
                case 11:
                    // Cleanup.
                    return [
                        4,
                        promise
                    ];
                case 12:
                    _state.sent();
                    processor.reset();
                    return [
                        7
                    ];
                case 13:
                    assert.strictEqual(thrown === null || thrown === void 0 ? void 0 : thrown.message, 'Trace processor can\'t start parsing when not idle. Current state: PARSING');
                    // Check if data is null immediately after resetting.
                    assert.isNull(processor.traceParsedData);
                    assert.isNull(processor.insights);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 14:
                    _state.sent();
                    assert.isNotNull(processor.traceParsedData);
                    assert.isNotNull(processor.insights);
                    processor.reset();
                    assert.isNull(processor.traceParsedData);
                    assert.isNull(processor.insights);
                    _state.label = 15;
                case 15:
                    _state.trys.push([
                        15,
                        16,
                        17,
                        19
                    ]);
                    promise = processor.parse(file);
                    processor.reset();
                    return [
                        3,
                        19
                    ];
                case 16:
                    e2 = _state.sent();
                    thrown = e2;
                    return [
                        3,
                        19
                    ];
                case 17:
                    // Cleanup.
                    return [
                        4,
                        promise
                    ];
                case 18:
                    _state.sent();
                    processor.reset();
                    return [
                        7
                    ];
                case 19:
                    assert.strictEqual(thrown === null || thrown === void 0 ? void 0 : thrown.message, 'Trace processor can\'t reset while parsing.');
                    // Check parsing after resetting while parsing.
                    assert.isNull(processor.traceParsedData);
                    assert.isNull(processor.insights);
                    return [
                        4,
                        processor.parse(file)
                    ];
                case 20:
                    _state.sent();
                    assert.isNotNull(processor.traceParsedData);
                    assert.isNotNull(processor.insights);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can be given a subset of handlers to run and will run just those along with the meta handler', /*#__PURE__*/ _async_to_generator(function() {
        var processor, events;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    processor = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor({
                        Animations: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Animations
                    });
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'animation.json.gz')
                    ];
                case 1:
                    events = _state.sent();
                    return [
                        4,
                        processor.parse(events)
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(processor.traceParsedData);
                    assert.deepEqual(Object.keys(processor.traceParsedData || {}), [
                        'Meta',
                        'Animations'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not error if the user does not enable the Meta handler when it is a dependency', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.doesNotThrow(function() {
                new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor({
                    // Screenshots handler depends on Meta handler, so this is invalid.
                    // However, the Processor automatically ensures the Meta handler is
                    // enabled, so this should not cause an error.
                    Screenshots: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Screenshots
                });
            });
            return [
                2
            ];
        });
    }));
    it('errors if the user does not provide the right handler dependencies', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.throws(function() {
                new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor({
                    Renderer: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Renderer
                });
            }, /Required handler Samples not provided/);
            return [
                2
            ];
        });
    }));
    it('emits periodic trace updates', /*#__PURE__*/ _async_to_generator(function() {
        var processor, updateEventCount, rawEvents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    processor = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor({
                        Renderer: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Renderer,
                        Samples: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Samples,
                        AuctionWorklets: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.AuctionWorklets
                    }, _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Configuration.defaults());
                    updateEventCount = 0;
                    processor.addEventListener(_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceParseProgressEvent.eventName, function() {
                        updateEventCount++;
                    });
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'web-dev-outermost-frames.json.gz')
                    ];
                case 1:
                    rawEvents = _state.sent();
                    // This trace has 106,110 events. At default of 50k chunks we should see 2 updates
                    return [
                        4,
                        processor.parse(rawEvents).then(function() {
                            assert.strictEqual(updateEventCount, 2);
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('handler sorting', function() {
        var fillHandlers = function fillHandlers(handlersDeps) {
            var handlers = {};
            for(var handler in handlersDeps){
                handlers[handler] = _object_spread({}, baseHandler, handlersDeps[handler]);
            }
            return handlers;
        };
        var baseHandler = {
            data: function data() {},
            handleEvent: function handleEvent() {},
            reset: function reset() {}
        };
        it('sorts handlers satisfying their dependencies 1', function() {
            var handlersDeps = {
                'Meta': {},
                'GPU': {
                    deps: function deps() {
                        return [
                            'Meta'
                        ];
                    }
                },
                'LayoutShifts': {
                    deps: function deps() {
                        return [
                            'GPU'
                        ];
                    }
                },
                'NetworkRequests': {
                    deps: function deps() {
                        return [
                            'LayoutShifts'
                        ];
                    }
                },
                'PageLoadMetrics': {
                    deps: function deps() {
                        return [
                            'Renderer',
                            'GPU'
                        ];
                    }
                },
                'Renderer': {
                    deps: function deps() {
                        return [
                            'Screenshots'
                        ];
                    }
                },
                'Screenshots': {
                    deps: function deps() {
                        return [
                            'NetworkRequests',
                            'LayoutShifts'
                        ];
                    }
                }
            };
            var handlers = fillHandlers(handlersDeps);
            var expectedOrder = [
                'Meta',
                'GPU',
                'LayoutShifts',
                'NetworkRequests',
                'Screenshots',
                'Renderer',
                'PageLoadMetrics'
            ];
            assert.deepEqual(_to_consumable_array(_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.sortHandlers(handlers).keys()), expectedOrder);
        });
        it('sorts handlers satisfying their dependencies 2', function() {
            var handlersDeps = {
                'GPU': {
                    deps: function deps() {
                        return [
                            'LayoutShifts',
                            'NetworkRequests'
                        ];
                    }
                },
                'LayoutShifts': {
                    deps: function deps() {
                        return [
                            'NetworkRequests'
                        ];
                    }
                },
                'NetworkRequests': {}
            };
            var handlers = fillHandlers(handlersDeps);
            var expectedOrder = [
                'NetworkRequests',
                'LayoutShifts',
                'GPU'
            ];
            assert.deepEqual(_to_consumable_array(_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.sortHandlers(handlers).keys()), expectedOrder);
        });
        it('throws an error when a dependency cycle is present among handlers', function() {
            var handlersDeps = {
                'Meta': {},
                'GPU': {
                    deps: function deps() {
                        return [
                            'Meta'
                        ];
                    }
                },
                'LayoutShifts': {
                    deps: function deps() {
                        return [
                            'GPU',
                            'Renderer'
                        ];
                    }
                },
                'NetworkRequests': {
                    deps: function deps() {
                        return [
                            'LayoutShifts'
                        ];
                    }
                },
                'Renderer': {
                    deps: function deps() {
                        return [
                            'NetworkRequests'
                        ];
                    }
                }
            };
            var handlers = fillHandlers(handlersDeps);
            var cyclePath = 'LayoutShifts->Renderer->NetworkRequests->LayoutShifts';
            assert.throws(function() {
                return _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.sortHandlers(handlers);
            }, "Found dependency cycle in trace event handlers: ".concat(cyclePath));
        });
    });
    describe('insights', function() {
        it('returns no insights if no navigations', /*#__PURE__*/ _async_to_generator(function() {
            var processor, file;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        processor = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor.createWithAllHandlers();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'basic.json.gz')
                        ];
                    case 1:
                        file = _state.sent();
                        return [
                            4,
                            processor.parse(file)
                        ];
                    case 2:
                        _state.sent();
                        if (!processor.insights) {
                            throw new Error('No insights');
                        }
                        assert.strictEqual(processor.insights.size, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('captures errors thrown by insights', /*#__PURE__*/ _async_to_generator(function() {
            var processor, file, insights;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sinon.stub(_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor, 'getEnabledInsightRunners').callsFake(function() {
                            return {
                                RenderBlocking: {
                                    generateInsight: function() {
                                        throw new Error('forced error');
                                    },
                                    deps: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Insights.InsightRunners.RenderBlocking.deps
                                }
                            };
                        });
                        processor = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor.createWithAllHandlers();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'load-simple.json.gz')
                        ];
                    case 1:
                        file = _state.sent();
                        return [
                            4,
                            processor.parse(file)
                        ];
                    case 2:
                        _state.sent();
                        if (!processor.insights) {
                            throw new Error('No insights');
                        }
                        insights = Array.from(processor.insights.values());
                        assert.strictEqual(insights.length, 1);
                        assert(_instanceof(insights[0].RenderBlocking, Error), 'RenderBlocking did not throw an error');
                        assert.strictEqual(insights[0].RenderBlocking.message, 'forced error');
                        return [
                            2
                        ];
                }
            });
        }));
        it('skips insights that are missing one or more dependencies', /*#__PURE__*/ _async_to_generator(function() {
            var processor, file, insights;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        processor = new _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor({
                            Animations: _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Handlers.ModelHandlers.Animations
                        });
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'load-simple.json.gz')
                        ];
                    case 1:
                        file = _state.sent();
                        return [
                            4,
                            processor.parse(file)
                        ];
                    case 2:
                        _state.sent();
                        if (!processor.insights) {
                            throw new Error('No insights');
                        }
                        insights = Array.from(processor.insights.values());
                        assert.strictEqual(processor.insights.size, 1);
                        assert.isUndefined(insights[0].RenderBlocking);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns insights for a navigation', /*#__PURE__*/ _async_to_generator(function() {
            var processor, file, insights;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        processor = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor.createWithAllHandlers();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'load-simple.json.gz')
                        ];
                    case 1:
                        file = _state.sent();
                        return [
                            4,
                            processor.parse(file)
                        ];
                    case 2:
                        _state.sent();
                        if (!processor.insights) {
                            throw new Error('No insights');
                        }
                        insights = Array.from(processor.insights.values());
                        assert.strictEqual(insights.length, 1);
                        if (_instanceof(insights[0].RenderBlocking, Error)) {
                            throw new Error('RenderBlocking threw an error');
                        }
                        assert.strictEqual(insights[0].RenderBlocking.renderBlockingRequests.length, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns insights for multiple navigations', /*#__PURE__*/ _async_to_generator(function() {
            var processor, file, insights;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        processor = _trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.Processor.TraceProcessor.createWithAllHandlers();
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.rawEvents(this, 'multiple-navigations.json.gz')
                        ];
                    case 1:
                        file = _state.sent();
                        return [
                            4,
                            processor.parse(file)
                        ];
                    case 2:
                        _state.sent();
                        if (!processor.insights) {
                            throw new Error('No insights');
                        }
                        insights = Array.from(processor.insights.values());
                        assert.strictEqual(insights.length, 3);
                        if (_instanceof(insights[0].RenderBlocking, Error)) {
                            throw new Error('RenderBlocking threw an error');
                        }
                        if (_instanceof(insights[1].RenderBlocking, Error)) {
                            throw new Error('RenderBlocking threw an error');
                        }
                        if (_instanceof(insights[2].RenderBlocking, Error)) {
                            throw new Error('RenderBlocking threw an error');
                        }
                        assert.strictEqual(insights[0].RenderBlocking.renderBlockingRequests.length, 0);
                        assert.strictEqual(insights[1].RenderBlocking.renderBlockingRequests.length, 0);
                        assert.strictEqual(insights[2].RenderBlocking.renderBlockingRequests.length, 1);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Processor.test.js.map


}),

}]);