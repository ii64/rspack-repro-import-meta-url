"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_FlameChart_test_js"], {
"./ui/legacy/components/perf_ui/FlameChart.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('FlameChart', function() {
    var renderChart = function renderChart(chart) {
        var container = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
        chart.markAsRoot();
        chart.show(container);
        chart.update();
    };
    it('sorts decorations, putting candy striping before warning triangles', /*#__PURE__*/ _async_to_generator(function() {
        var decorations;
        return _ts_generator(this, function(_state) {
            decorations = [
                {
                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                },
                {
                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                }
            ];
            _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.sortDecorationsForRenderingOrder(decorations);
            assert.deepEqual(decorations, [
                {
                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10)
                },
                {
                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                }
            ]);
            return [
                2
            ];
        });
    }));
    var chartInstance = null;
    afterEach(function() {
        if (chartInstance) {
            chartInstance.detach();
        }
    });
    var defaultGroupStyle = {
        height: 17,
        padding: 4,
        collapsible: false,
        color: 'black',
        backgroundColor: 'grey',
        nestingLevel: 0,
        itemsHeight: 17
    };
    var FakeProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProvider, FakeFlameChartProvider);
        var _super = _create_super(FakeProvider);
        function FakeProvider() {
            _class_call_check(this, FakeProvider);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProvider, [
            {
                key: "entryColor",
                value: function entryColor(_entryIndex) {
                    return 'red';
                }
            },
            {
                key: "timelineData",
                value: function timelineData() {
                    return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            1,
                            1,
                            1
                        ],
                        entryStartTimes: [
                            5,
                            60,
                            80
                        ],
                        entryTotalTimes: [
                            50,
                            10,
                            10
                        ],
                        groups: [
                            {
                                name: 'Test Group',
                                startLevel: 1,
                                style: defaultGroupStyle
                            }
                        ]
                    });
                }
            }
        ]);
        return FakeProvider;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
    it('notifies the delegate when the window has changed', /*#__PURE__*/ _async_to_generator(function() {
        var provider, delegate, windowChangedSpy;
        return _ts_generator(this, function(_state) {
            provider = new FakeProvider();
            delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
            windowChangedSpy = sinon.spy(delegate, 'windowChanged');
            chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
            renderChart(chartInstance);
            chartInstance.windowChanged(0, 5, false);
            assert.isTrue(windowChangedSpy.calledWith(0, 5, false));
            return [
                2
            ];
        });
    }));
    it('notifies the delegate when the range selection has changed', /*#__PURE__*/ _async_to_generator(function() {
        var provider, delegate, updateRangeSpy;
        return _ts_generator(this, function(_state) {
            provider = new FakeProvider();
            delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
            updateRangeSpy = sinon.spy(delegate, 'updateRangeSelection');
            chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
            renderChart(chartInstance);
            chartInstance.updateRangeSelection(0, 5);
            assert.isTrue(updateRangeSpy.calledWith(0, 5));
            return [
                2
            ];
        });
    }));
    describe('setSelectedEntry', function() {
        var SetSelectedEntryTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
            "use strict";
            _inherits(SetSelectedEntryTestProvider, FakeFlameChartProvider);
            var _super = _create_super(SetSelectedEntryTestProvider);
            function SetSelectedEntryTestProvider() {
                _class_call_check(this, SetSelectedEntryTestProvider);
                return _super.apply(this, arguments);
            }
            _create_class(SetSelectedEntryTestProvider, [
                {
                    key: "entryColor",
                    value: function entryColor(_entryIndex) {
                        return 'red';
                    }
                },
                {
                    key: "timelineData",
                    value: function timelineData() {
                        return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                            entryLevels: [
                                1,
                                1,
                                1,
                                1
                            ],
                            entryStartTimes: [
                                5,
                                60,
                                80,
                                300
                            ],
                            entryTotalTimes: [
                                50,
                                10,
                                10,
                                500
                            ],
                            groups: [
                                {
                                    name: 'Test Group',
                                    startLevel: 1,
                                    style: defaultGroupStyle
                                }
                            ]
                        });
                    }
                }
            ]);
            return SetSelectedEntryTestProvider;
        }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
        it('does not change the time window if the selected entry is already revealed', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, windowChangedSpy;
            return _ts_generator(this, function(_state) {
                provider = new SetSelectedEntryTestProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                windowChangedSpy = sinon.spy(delegate, 'windowChanged');
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the window wide so lots is visible
                chartInstance.setSize(800, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                // Pick the first event which is only 50ms long and therefore should be in view already.
                chartInstance.setSelectedEntry(0);
                assert.strictEqual(windowChangedSpy.callCount, 0);
                return [
                    2
                ];
            });
        }));
        it('will change the window time to reveal the selected entry when the entry is off the right of the screen', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, windowChangedSpy;
            return _ts_generator(this, function(_state) {
                provider = new SetSelectedEntryTestProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                windowChangedSpy = sinon.spy(delegate, 'windowChanged');
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                // Ensure the event we want to select is out of the viewport by selecting the first 100ms.
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                chartInstance.setSelectedEntry(3);
                assert.isTrue(windowChangedSpy.calledOnceWithExactly(300, 400, true));
                return [
                    2
                ];
            });
        }));
        it('will change the window time to reveal the selected entry when the entry is off the left of the screen', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, windowChangedSpy;
            return _ts_generator(this, function(_state) {
                provider = new SetSelectedEntryTestProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                windowChangedSpy = sinon.spy(delegate, 'windowChanged');
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                // Ensure the event we want to select is out of the viewport by selecting the last 200ms
                chartInstance.setWindowTimes(250, 600);
                renderChart(chartInstance);
                chartInstance.setSelectedEntry(0);
                assert.isTrue(windowChangedSpy.calledOnceWithExactly(5, 355, true));
                return [
                    2
                ];
            });
        }));
    });
    describe('highlightEntry', function() {
        it('updates the chart to highlight the entry and dispatches an event', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, highlightedEventListener, entryIndexToHighlight, event;
            return _ts_generator(this, function(_state) {
                provider = new FakeProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                highlightedEventListener = sinon.stub();
                chartInstance.addEventListener("EntryHighlighted" /* PerfUI.FlameChart.Events.EntryHighlighted */ , highlightedEventListener);
                // Nothing highlighted, so the highlightElement should be hidden.
                assert.isTrue(chartInstance.highlightElement.classList.contains('hidden'));
                entryIndexToHighlight = 2;
                chartInstance.highlightEntry(entryIndexToHighlight);
                // Ensure that the highlighted div is positioned. We cannot assert exact
                // pixels due to differences in screen sizes and resolution across
                // machines, but we can ensure that they have all been set.
                assert.exists(chartInstance.highlightElement.style.height);
                assert.exists(chartInstance.highlightElement.style.top);
                assert.exists(chartInstance.highlightElement.style.left);
                assert.exists(chartInstance.highlightElement.style.width);
                // And that it is not hidden.
                assert.isFalse(chartInstance.highlightElement.classList.contains('hidden'));
                // Ensure that the event listener was called with the right index
                assert.strictEqual(highlightedEventListener.callCount, 1);
                event = highlightedEventListener.args[0][0];
                assert.strictEqual(event.data, entryIndexToHighlight);
                return [
                    2
                ];
            });
        }));
        it('does nothing if the entry is already highlighted', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, highlightedEventListener;
            return _ts_generator(this, function(_state) {
                provider = new FakeProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                highlightedEventListener = sinon.stub();
                chartInstance.addEventListener("EntryHighlighted" /* PerfUI.FlameChart.Events.EntryHighlighted */ , highlightedEventListener);
                chartInstance.highlightEntry(2);
                chartInstance.highlightEntry(2);
                // Ensure that there is only one event listener called, despite the
                // highlightEntry method being called twice, because it was called with
                // the same ID.
                assert.strictEqual(highlightedEventListener.callCount, 1);
                return [
                    2
                ];
            });
        }));
        it('does nothing if the DataProvider entryColor() method returns a falsey value', /*#__PURE__*/ _async_to_generator(function() {
            var EmptyColorProvider, provider, delegate, highlightedEventListener;
            return _ts_generator(this, function(_state) {
                EmptyColorProvider = /*#__PURE__*/ function(FakeProvider) {
                    "use strict";
                    _inherits(EmptyColorProvider, FakeProvider);
                    var _super = _create_super(EmptyColorProvider);
                    function EmptyColorProvider() {
                        _class_call_check(this, EmptyColorProvider);
                        return _super.apply(this, arguments);
                    }
                    _create_class(EmptyColorProvider, [
                        {
                            key: "entryColor",
                            value: function entryColor() {
                                return '';
                            }
                        }
                    ]);
                    return EmptyColorProvider;
                }(FakeProvider);
                provider = new EmptyColorProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                highlightedEventListener = sinon.stub();
                chartInstance.addEventListener("EntryHighlighted" /* PerfUI.FlameChart.Events.EntryHighlighted */ , highlightedEventListener);
                chartInstance.highlightEntry(2);
                // No calls because entryColor returned a false value.
                assert.strictEqual(highlightedEventListener.callCount, 0);
                return [
                    2
                ];
            });
        }));
        it('dispatches the highlight event with an ID of -1 when the highlight is hidden', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, highlightedEventListener, event;
            return _ts_generator(this, function(_state) {
                provider = new FakeProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                highlightedEventListener = sinon.stub();
                chartInstance.addEventListener("EntryHighlighted" /* PerfUI.FlameChart.Events.EntryHighlighted */ , highlightedEventListener);
                chartInstance.highlightEntry(2);
                chartInstance.hideHighlight();
                // Ensure the argument to the last event listener call was -1
                event = highlightedEventListener.args[1][0];
                assert.strictEqual(event.data, -1);
                return [
                    2
                ];
            });
        }));
    });
    describe('updateLevelPositions', function() {
        var UpdateLevelPositionsTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
            "use strict";
            _inherits(UpdateLevelPositionsTestProvider, FakeFlameChartProvider);
            var _super = _create_super(UpdateLevelPositionsTestProvider);
            function UpdateLevelPositionsTestProvider() {
                _class_call_check(this, UpdateLevelPositionsTestProvider);
                return _super.apply(this, arguments);
            }
            _create_class(UpdateLevelPositionsTestProvider, [
                {
                    key: "timelineData",
                    value: function timelineData() {
                        return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                            entryLevels: [
                                0,
                                1,
                                2
                            ],
                            entryStartTimes: [
                                5,
                                60,
                                80
                            ],
                            entryTotalTimes: [
                                50,
                                10,
                                10
                            ],
                            groups: [
                                {
                                    name: 'Test Group 0',
                                    startLevel: 0,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 1',
                                    startLevel: 1,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 2',
                                    startLevel: 2,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 1
                                    })
                                }
                            ]
                        });
                    }
                }
            ]);
            return UpdateLevelPositionsTestProvider;
        }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
        it('Calculate the level position correctly', function() {
            var provider = new UpdateLevelPositionsTestProvider();
            var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
            chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
            renderChart(chartInstance);
            // For Group 0, it is expanded (not collapsible),
            // so its offset is 17(RulerHeight + 2)
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
            // For Level 0, it is in Test Group 1, and the group is expanded (not collapsible),
            // so its offset is 17(Group offset) + 17(group header height) = 34
            assert.isTrue(chartInstance.levelIsVisible(0));
            assert.strictEqual(chartInstance.levelToOffset(0), 34);
            // For Group 1, its offset is
            // 34(level 0 offset) + 17(level 0 height) + 4(style.padding) = 55
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 55);
            // For Level 1, it is in Group 1, and the group is expanded by default,
            // so its offset is 55(Group offset) + 17(group header height) = 72
            assert.isTrue(chartInstance.levelIsVisible(1));
            assert.strictEqual(chartInstance.levelToOffset(1), 72);
            // For Group 2, it is nested in Group 1, so its offset is
            // 72(level 1 offset) + 17(level 1 is visible) + 0(no style.padding because nested) = 89
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 89);
            // For Level 2, it is in Group 2, and the group is not expanded by default (collapsible),
            // so its offset is 89(Group offset) + 17(group header) = 106
            assert.isFalse(chartInstance.levelIsVisible(2));
            assert.strictEqual(chartInstance.levelToOffset(2), 106);
            // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
            // Since Level 2 is invisible (collapsed), so this one has same offset as Level 2.
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 106);
            assert.strictEqual(chartInstance.levelToOffset(3), 106);
        });
        it('Calculate the level position correctly after hide and unhide a group without nested group', function() {
            var provider = new UpdateLevelPositionsTestProvider();
            var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
            chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
            renderChart(chartInstance);
            chartInstance.hideGroup(/* groupIndex= */ 0);
            // For Group 0, it is hidden, so its offset is 17(RulerHeight + 2)
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
            // For Level 0, it is in Test Group 1, and the group is hidden,
            // so its offset is same as group offset
            assert.isFalse(chartInstance.levelIsVisible(0));
            assert.strictEqual(chartInstance.levelToOffset(0), 17);
            // For Group 1, its offset is
            // 17(level 0 offset) + 0(level 0 is hidden) + 4(style.padding) = 21
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 21);
            // For Level 1, it is in Group 1, and the group is expanded by default,
            // so its offset is 21(Group offset) + 17(group header height) = 38
            assert.isTrue(chartInstance.levelIsVisible(1));
            assert.strictEqual(chartInstance.levelToOffset(1), 38);
            // For Group 2, it is nested in Group 1, so its offset is
            // 38(level 1 offset) + 17(level 1 is visible) + 0(no style.padding because nested) = 55
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 55);
            // For Level 2, it is in Group 2, and the group is not expanded by default (collapsible),
            // so its offset is 55(Group offset) + 17(group header) = 72
            assert.isTrue(chartInstance.levelIsVisible(1));
            assert.strictEqual(chartInstance.levelToOffset(2), 72);
            // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
            // Since Level 2 is invisible (collapsed), so this one has same offset as Level 2.
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 72);
            assert.strictEqual(chartInstance.levelToOffset(3), 72);
            // Unhide Group 0, so the offset should be same as default (see test "Calculate the level position correctly").
            chartInstance.showGroup(/* groupIndex= */ 0);
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
            assert.isTrue(chartInstance.levelIsVisible(0));
            assert.strictEqual(chartInstance.levelToOffset(0), 34);
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 55);
            assert.isTrue(chartInstance.levelIsVisible(1));
            assert.strictEqual(chartInstance.levelToOffset(1), 72);
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 89);
            assert.isFalse(chartInstance.levelIsVisible(2));
            assert.strictEqual(chartInstance.levelToOffset(2), 106);
            assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 106);
            assert.strictEqual(chartInstance.levelToOffset(3), 106);
        });
        describe('hide/unhide nested group', function() {
            var UpdateLevelPositionsWithNestedGroupTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
                "use strict";
                _inherits(UpdateLevelPositionsWithNestedGroupTestProvider, FakeFlameChartProvider);
                var _super = _create_super(UpdateLevelPositionsWithNestedGroupTestProvider);
                function UpdateLevelPositionsWithNestedGroupTestProvider() {
                    _class_call_check(this, UpdateLevelPositionsWithNestedGroupTestProvider);
                    return _super.apply(this, arguments);
                }
                _create_class(UpdateLevelPositionsWithNestedGroupTestProvider, [
                    {
                        key: "timelineData",
                        value: function timelineData() {
                            return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                                entryLevels: [
                                    0,
                                    1,
                                    2
                                ],
                                entryStartTimes: [
                                    5,
                                    60,
                                    80
                                ],
                                entryTotalTimes: [
                                    50,
                                    10,
                                    10
                                ],
                                groups: [
                                    {
                                        name: 'Test Group 0',
                                        startLevel: 0,
                                        style: defaultGroupStyle
                                    },
                                    {
                                        name: 'Test Group 1',
                                        startLevel: 1,
                                        style: defaultGroupStyle
                                    },
                                    // Make the nested group always expanded for better testing the nested case
                                    {
                                        name: 'Test Group 2',
                                        startLevel: 2,
                                        style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                            nestingLevel: 1
                                        })
                                    }
                                ]
                            });
                        }
                    }
                ]);
                return UpdateLevelPositionsWithNestedGroupTestProvider;
            }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
            it('Calculate the level position correctly after hide and unhide a group with nested group', function() {
                var provider = new UpdateLevelPositionsWithNestedGroupTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                chartInstance.hideGroup(/* groupIndex= */ 1);
                // For Group 0, it is expanded (not collapsible),
                // so its offset is 17(RulerHeight + 2)
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
                // For Level 0, it is in Test Group 1, and the group is expanded (not collapsible),
                // so its offset is 17(Group offset) + 17(group header height) = 34
                assert.isTrue(chartInstance.levelIsVisible(0));
                assert.strictEqual(chartInstance.levelToOffset(0), 34);
                // For Group 1, it is hidden, so its offset is
                // 34(level 0 offset) + 17(level 0 height) = 51
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 51);
                // For Level 1, it is in Group 1, and the group is hidden,
                // so its offset is 51(Group offset)
                assert.isFalse(chartInstance.levelIsVisible(1));
                assert.strictEqual(chartInstance.levelToOffset(1), 51);
                // For Group 2, it is nested in Group 1, so it is also hidden, so its offset is
                // 51(level 1 offset) + 0(level 1 is invisible) = 51
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 51);
                // For Level 2, it is in Group 2, and the group is hidden,
                // so its offset is 51(Group offset)
                assert.isFalse(chartInstance.levelIsVisible(2));
                assert.strictEqual(chartInstance.levelToOffset(2), 51);
                // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
                // Since Level 2 is invisible (hidden), so this one has same offset as Level 2.
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 51);
                assert.strictEqual(chartInstance.levelToOffset(3), 51);
                // Unhide Group 1, so the offset should be same as default (see test "Calculate the level position correctly").
                chartInstance.showGroup(/* groupIndex= */ 1);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
                assert.isTrue(chartInstance.levelIsVisible(0));
                assert.strictEqual(chartInstance.levelToOffset(0), 34);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 55);
                assert.isTrue(chartInstance.levelIsVisible(1));
                assert.strictEqual(chartInstance.levelToOffset(1), 72);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 89);
                // Slightly different because Group2 is not longer collapsible.
                // For Level 2, it is in Group 2, and the group is expanded,
                // so its offset is 89(Group offset) + 17(group header) = 106
                assert.isTrue(chartInstance.levelIsVisible(2));
                assert.strictEqual(chartInstance.levelToOffset(2), 106);
                // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
                // Since Level 2 is visible, so its offset is 106(Group offset) + 17(Level 2 height) = 123
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 123);
                assert.strictEqual(chartInstance.levelToOffset(3), 123);
            });
            it('Calculate the level position correctly after hide and unhide a nested group', function() {
                var provider = new UpdateLevelPositionsWithNestedGroupTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                renderChart(chartInstance);
                chartInstance.hideGroup(/* groupIndex= */ 2);
                // For Group 0, it is expanded (not collapsible),
                // so its offset is 17(RulerHeight + 2)
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
                // For Level 0, it is in Test Group 1, and the group is expanded (not collapsible),
                // so its offset is 17(Group offset) + 17(group header height) = 34
                assert.isTrue(chartInstance.levelIsVisible(0));
                assert.strictEqual(chartInstance.levelToOffset(0), 34);
                // For Group 1, it is hidden, so its offset is
                // 34(level 0 offset) + 17(level 0 height) + 4(style.padding) = 55
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 55);
                // For Level 1, it is in Group 1, and the group is expanded by default,
                // so its offset is 55(Group offset) + 17(group header height) = 72
                assert.isTrue(chartInstance.levelIsVisible(1));
                assert.strictEqual(chartInstance.levelToOffset(1), 72);
                // For Group 2, it is nested in Group 1, and it is set to hidden, so its offset is
                // 72(level 1 offset) + 17(level 1 is visible) = 89
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 89);
                // For Level 2, it is in Group 2, and the group is hidden,
                // so its offset is 51(Group offset)
                assert.isFalse(chartInstance.levelIsVisible(2));
                assert.strictEqual(chartInstance.levelToOffset(2), 89);
                // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
                // Since Level 2 is invisible (hidden), so this one has same offset as Level 2.
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 89);
                assert.strictEqual(chartInstance.levelToOffset(3), 89);
                // Unhide Group 1, so the offset should be same as default (see test "Calculate the level position correctly").
                chartInstance.showGroup(/* groupIndex= */ 2);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(0), 17);
                assert.isTrue(chartInstance.levelIsVisible(0));
                assert.strictEqual(chartInstance.levelToOffset(0), 34);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(1), 55);
                assert.isTrue(chartInstance.levelIsVisible(1));
                assert.strictEqual(chartInstance.levelToOffset(1), 72);
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(2), 89);
                // Slightly different because Group2 is not longer collapsible.
                // For Level 2, it is in Group 2, and the group is expanded,
                // so its offset is 89(Group offset) + 17(group header) = 106
                assert.isTrue(chartInstance.levelIsVisible(2));
                assert.strictEqual(chartInstance.levelToOffset(2), 106);
                // For Group 3 and Level 3, they are "fake" group and level, and are used to show then end of the flame chart.
                // Since Level 2 is visible, so its offset is 106(Group offset) + 17(Level 2 height) = 123
                assert.strictEqual(chartInstance.groupIndexToOffsetForTest(3), 123);
                assert.strictEqual(chartInstance.levelToOffset(3), 123);
            });
        });
    });
    describe('Index to/from coordinates coversion', function() {
        var IndexAndCoordinatesConversionTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
            "use strict";
            _inherits(IndexAndCoordinatesConversionTestProvider, FakeFlameChartProvider);
            var _super = _create_super(IndexAndCoordinatesConversionTestProvider);
            function IndexAndCoordinatesConversionTestProvider() {
                _class_call_check(this, IndexAndCoordinatesConversionTestProvider);
                return _super.apply(this, arguments);
            }
            _create_class(IndexAndCoordinatesConversionTestProvider, [
                {
                    key: "entryColor",
                    value: function entryColor(_entryIndex) {
                        return 'red';
                    }
                },
                {
                    key: "maxStackDepth",
                    value: function maxStackDepth() {
                        return 2;
                    }
                },
                {
                    key: "timelineData",
                    value: function timelineData() {
                        return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                            entryLevels: [
                                0,
                                0,
                                1,
                                1
                            ],
                            entryStartTimes: [
                                5,
                                60,
                                80,
                                300
                            ],
                            entryTotalTimes: [
                                50,
                                10,
                                10,
                                500
                            ],
                            groups: [
                                {
                                    name: 'Test Group',
                                    startLevel: 0,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 1',
                                    startLevel: 1,
                                    style: defaultGroupStyle
                                }
                            ]
                        });
                    }
                }
            ]);
            return IndexAndCoordinatesConversionTestProvider;
        }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
        describe('entryIndexToCoordinates', function() {
            it('returns the correct coordinates for a given entry', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                var entryIndex = 0;
                var _chartInstance_getCanvasOffset = chartInstance.getCanvasOffset(), canvasOffsetX = _chartInstance_getCanvasOffset.x, canvasOffsetY = _chartInstance_getCanvasOffset.y;
                // TODO(crbug.com/1440169): We can get all the expected values from
                // the chart's data and avoid magic numbers
                var initialXPosition = chartInstance.computePosition(timelineData.entryStartTimes[entryIndex]);
                assert.deepEqual(chartInstance.entryIndexToCoordinates(entryIndex), // For index 0, it is in level 0, so vertically there are only the ruler(17) and the
                // header of Group 0 (17) and beyond it.
                {
                    x: initialXPosition + canvasOffsetX,
                    y: 34 + canvasOffsetY + chartInstance.getScrollOffset()
                });
                // Emulate two scrolls to force a change in coordinates.
                // For index 3, it is in level 1, so vertically there are the ruler(17) and the header of Group 0 (17), the
                // level 0 (17), the padding of Group 1 (4) and the header of Group 1 (17) beyond it.
                // When select it, it will scroll the level offset(17 + 17 + 17 + 4 + 17 = 72) and its height(17), which means
                // |chartInstance.getScrollOffset()| returns 89.
                chartInstance.setSelectedEntry(3);
                assert.deepEqual(chartInstance.entryIndexToCoordinates(entryIndex), // For index 0, so we need to minus the scroll offset(68) and |chartInstance.getScrollOffset()|, so it is
                // 34 - 89 - 89 = -144.
                {
                    x: initialXPosition + canvasOffsetX,
                    y: -144 + canvasOffsetY + chartInstance.getScrollOffset()
                });
                chartInstance.setWindowTimes(250, 600);
                var finalXPosition = chartInstance.computePosition(timelineData.entryStartTimes[entryIndex]);
                // For this case, there is no vertical scroll, so it is still -144.
                assert.deepEqual(chartInstance.entryIndexToCoordinates(entryIndex), {
                    x: finalXPosition + canvasOffsetX,
                    y: -144 + canvasOffsetY + chartInstance.getScrollOffset()
                });
            });
            it('returns the correct coordinates after re-order', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                var entryIndex = 0;
                var _chartInstance_getCanvasOffset = chartInstance.getCanvasOffset(), canvasOffsetX = _chartInstance_getCanvasOffset.x, canvasOffsetY = _chartInstance_getCanvasOffset.y;
                // TODO(crbug.com/1440169): We can get all the expected values from
                // the chart's data and avoid magic numbers
                var initialXPosition = chartInstance.computePosition(timelineData.entryStartTimes[entryIndex]);
                assert.deepEqual(chartInstance.entryIndexToCoordinates(entryIndex), // For index 0, it is in level 0, so vertically there are only the ruler(17) and the
                // header of Group 0 (17) and beyond it.
                {
                    x: initialXPosition + canvasOffsetX,
                    y: 34 + canvasOffsetY + chartInstance.getScrollOffset()
                });
                chartInstance.moveGroupDown(0);
                assert.deepEqual(chartInstance.entryIndexToCoordinates(entryIndex), // Move Group 0 down. So for index 0, it is in level 1, so vertically there are the ruler(17), the header of
                // Group 1 (17), level 1(inside Group 1, 17), padding of Group 0(4), and header of Group 0 (17)beyond it.
                {
                    x: initialXPosition + canvasOffsetX,
                    y: 72 + canvasOffsetY + chartInstance.getScrollOffset()
                });
            });
        });
        describe('coordinatesToEntryIndex', function() {
            it('returns the correct entry index for given coordinates', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                var startXPosition = chartInstance.computePosition(timelineData.entryStartTimes[0]);
                var beforeStartXPosition = chartInstance.computePosition(timelineData.entryStartTimes[0] - 1);
                var endXPosition = chartInstance.computePosition(timelineData.entryStartTimes[0] + timelineData.entryTotalTimes[0]);
                var afterEndXPosition = chartInstance.computePosition(timelineData.entryStartTimes[0] + timelineData.entryTotalTimes[0] + 1);
                // For index 0, it is in level 0, so vertically there are only the ruler(17) and the
                // header of Group 0 (17) and beyond it.
                // And the height of level 0 is 17.
                // So the index 0 can be mapped from
                //   x: around startXPosition to endXPosition, the reason is x is related to zoom ratio and has some rounds
                //      during calculation.
                //   y: 34(inclusive) to 51(exclusive)
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(beforeStartXPosition + 1, 34), -1);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 34), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(endXPosition, 34), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(afterEndXPosition + 3, 34), -1);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 33), -1);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 34), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 50), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 51), -1);
            });
            it('returns the correct entry index for given coordinates after re-order', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                var startXPosition = chartInstance.computePosition(timelineData.entryStartTimes[0]);
                chartInstance.moveGroupDown(0);
                // Ro-order group will only affect the vertical offsets, so we just need to test |y|.
                // Move Group 0 down. So for index 0, it is in level 1, so vertically there are the ruler(17), the header of
                // Group 1 (17), level 1(inside Group 1, 17), padding of Group 0(4), and header of Group 0 (17)beyond it.
                // And the height of level 0 is 17.
                // So the entry 0 can be mapped from
                //   y: 72(inclusive) to 89(exclusive)
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 71), -1);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 72), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 88), 0);
                assert.strictEqual(chartInstance.coordinatesToEntryIndex(startXPosition, 89), -1);
            });
        });
        describe('coordinatesToGroupIndexAndHoverType', function() {
            it('returns the correct group index for given coordinates', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                // For group 0, vertically there are only the ruler(17) beyond it. So it starts from 17.
                // For group 1, vertically there are only the ruler(17), header of Group 0 (17), level 0(17), padding of
                // Group 1(4) and header beyond it. So it starts from 55.
                // So the group 0 can be mapped from
                //   x: any inside the view
                //   y: 17(inclusive) to 55(exclusive)
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 16), {
                    groupIndex: -1,
                    hoverType: "OUTSIDE_TRACKS" /* PerfUI.FlameChart.HoverType.OUTSIDE_TRACKS */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 50), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 55), {
                    groupIndex: 1,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
            });
            it('returns the correct group index for given coordinates after re-order', function() {
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                chartInstance.moveGroupDown(0);
                // Ro-order group will only affect the vertical offsets, so we just need to test |y|.
                // Move Group 0 down. So for group 0, vertically there are only the ruler(17), header of Group 1 (17),
                // level 1(17), padding of Group 0(4) and header beyond it. So it starts from 55.
                // And now the Group 0 is the last group, so the end of the Group 0 is 55 + header of Group 0(17) + level 0(17)
                // = 89
                // So the entry 0 can be mapped from
                //   y: 55(inclusive) to 89(exclusive)
                // Now Group 1 will be before Group 0. so (y)54 will be mapped to Group 1
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 54), {
                    groupIndex: 1,
                    hoverType: "INSIDE_TRACK" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 55), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 88), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 22, 89), {
                    groupIndex: -1,
                    hoverType: "OUTSIDE_TRACKS" /* PerfUI.FlameChart.HoverType.OUTSIDE_TRACKS */ 
                });
            });
            it('returns the correct group index and the icon type for given coordinates', function() {
                var _provider_timelineData;
                var provider = new IndexAndCoordinatesConversionTestProvider();
                var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                // Make the width narrow so that not everything fits
                chartInstance.setSize(100, 400);
                chartInstance.setWindowTimes(0, 100);
                renderChart(chartInstance);
                var timelineData = chartInstance.timelineData();
                if (!timelineData) {
                    throw new Error('Could not find timeline data');
                }
                var context = chartInstance.getCanvas().getContext('2d');
                var labelWidth = chartInstance.labelWidthForGroup(context, (_provider_timelineData = provider.timelineData()) === null || _provider_timelineData === void 0 ? void 0 : _provider_timelineData.groups[0]);
                // Start of the view
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(0, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
                // End of the title label, For title label checking, the end is included.
                var endOfTitle = /* HEADER_LEFT_PADDING */ 6 + labelWidth;
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(endOfTitle, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(endOfTitle + 1, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK */ 
                });
                chartInstance.setEditModeForTest(true);
                // Start of the view (before the first icon). Will return the track header.
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(0, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
                // First icon (Up)
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING */ 6, 17), {
                    groupIndex: 0,
                    hoverType: "TRACK_CONFIG_UP_BUTTON" /* PerfUI.FlameChart.HoverType.TRACK_CONFIG_UP_BUTTON */ 
                });
                // Second icon (Down)
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE */ 25, 17), {
                    groupIndex: 0,
                    hoverType: "TRACK_CONFIG_DOWN_BUTTON" /* PerfUI.FlameChart.HoverType.TRACK_CONFIG_DOWN_BUTTON */ 
                });
                // Third icon (Hide)
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_BUTTON_SIZE * 2 + GAP_BETWEEN_EDIT_ICONS */ 44, 17), {
                    groupIndex: 0,
                    hoverType: "TRACK_CONFIG_HIDE_BUTTON" /* PerfUI.FlameChart.HoverType.TRACK_CONFIG_HIDE_BUTTON */ 
                });
                // This is after the third icon, which is the start of the title label, so should return INSIDE_TRACK_HEADER
                assert.deepEqual(chartInstance.coordinatesToGroupIndexAndHoverType(/* HEADER_LEFT_PADDING + EDIT_MODE_TOTAL_ICON_WIDTH */ 60, 17), {
                    groupIndex: 0,
                    hoverType: "INSIDE_TRACK_HEADER" /* PerfUI.FlameChart.HoverType.INSIDE_TRACK_HEADER */ 
                });
            });
        });
    });
    describe('buildGroupTree', function() {
        var BuildGroupTreeTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
            "use strict";
            _inherits(BuildGroupTreeTestProvider, FakeFlameChartProvider);
            var _super = _create_super(BuildGroupTreeTestProvider);
            function BuildGroupTreeTestProvider() {
                _class_call_check(this, BuildGroupTreeTestProvider);
                return _super.apply(this, arguments);
            }
            _create_class(BuildGroupTreeTestProvider, [
                {
                    key: "maxStackDepth",
                    value: function maxStackDepth() {
                        return 6;
                    }
                },
                {
                    key: "timelineData",
                    value: function timelineData() {
                        return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                            entryLevels: [],
                            entryStartTimes: [],
                            entryTotalTimes: [],
                            groups: [
                                {
                                    name: 'Test Group 0',
                                    startLevel: 0,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 1',
                                    startLevel: 1,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 2',
                                    startLevel: 2,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 1
                                    })
                                },
                                {
                                    name: 'Test Group 3',
                                    startLevel: 3,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 2
                                    })
                                },
                                {
                                    name: 'Test Group 4',
                                    startLevel: 4,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 1
                                    })
                                },
                                {
                                    name: 'Test Group 5',
                                    startLevel: 5,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 0
                                    })
                                }
                            ]
                        });
                    }
                }
            ]);
            return BuildGroupTreeTestProvider;
        }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
        it('builds the group tree correctly', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, root, groupNode5, groupNode4, groupNode3, groupNode2, groupNode1, groupNode0, expectedGroupNodeRoot;
            return _ts_generator(this, function(_state) {
                provider = new BuildGroupTreeTestProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                root = chartInstance.buildGroupTree(provider.timelineData().groups);
                // The built tree should be
                //               Root
                //        /       |         \
                // Group0       Group1         Group5
                //             /      \
                //           Group2   Group4
                //             |
                //           Group3
                groupNode5 = {
                    index: 5,
                    nestingLevel: 0,
                    startLevel: 5,
                    // This is the last group, so it will use the end level of the data provider, which is
                    // returned by |dataProvider.maxStackDepth()|, and it is 3.
                    endLevel: 6,
                    children: []
                };
                groupNode4 = {
                    index: 4,
                    nestingLevel: 1,
                    startLevel: 4,
                    // The next group is 'Test Group 5', its start level is 5.
                    endLevel: 5,
                    children: []
                };
                groupNode3 = {
                    index: 3,
                    nestingLevel: 2,
                    startLevel: 3,
                    // The next group is 'Test Group 4', its start level is 4.
                    endLevel: 4,
                    children: []
                };
                groupNode2 = {
                    index: 2,
                    nestingLevel: 1,
                    startLevel: 2,
                    // The next group is 'Test Group 3', its start level is 3.
                    endLevel: 3,
                    children: [
                        groupNode3
                    ]
                };
                groupNode1 = {
                    index: 1,
                    nestingLevel: 0,
                    startLevel: 1,
                    // The next group is 'Test Group 2', its start level is 2.
                    endLevel: 2,
                    children: [
                        groupNode2,
                        groupNode4
                    ]
                };
                groupNode0 = {
                    index: 0,
                    nestingLevel: 0,
                    startLevel: 0,
                    // The next group is 'Test Group 1', its start level is 1.
                    endLevel: 1,
                    children: []
                };
                expectedGroupNodeRoot = {
                    index: -1,
                    nestingLevel: -1,
                    startLevel: 0,
                    // The next group is 'Test Group 0', its start level is 0.
                    endLevel: 0,
                    children: [
                        groupNode0,
                        groupNode1,
                        groupNode5
                    ]
                };
                assert.deepEqual(root, expectedGroupNodeRoot);
                return [
                    2
                ];
            });
        }));
    });
    describe('updateGroupTree', function() {
        var UpdateGroupTreeTestProvider = /*#__PURE__*/ function(FakeFlameChartProvider) {
            "use strict";
            _inherits(UpdateGroupTreeTestProvider, FakeFlameChartProvider);
            var _super = _create_super(UpdateGroupTreeTestProvider);
            function UpdateGroupTreeTestProvider() {
                _class_call_check(this, UpdateGroupTreeTestProvider);
                return _super.apply(this, arguments);
            }
            _create_class(UpdateGroupTreeTestProvider, [
                {
                    key: "maxStackDepth",
                    value: function maxStackDepth() {
                        return 6;
                    }
                },
                {
                    key: "timelineData",
                    value: function timelineData() {
                        return _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChartTimelineData.create({
                            entryLevels: [],
                            entryStartTimes: [],
                            entryTotalTimes: [],
                            groups: [
                                {
                                    name: 'Test Group 0',
                                    startLevel: 0,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 1',
                                    startLevel: 1,
                                    style: defaultGroupStyle
                                },
                                {
                                    name: 'Test Group 2',
                                    startLevel: 2,
                                    style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                        collapsible: true,
                                        nestingLevel: 1
                                    })
                                }
                            ]
                        });
                    }
                }
            ]);
            return UpdateGroupTreeTestProvider;
        }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.FakeFlameChartProvider);
        it('builds the group tree correctly', /*#__PURE__*/ _async_to_generator(function() {
            var provider, delegate, root, groupNode2, groupNode1, groupNode0, expectedGroupNodeRoot, newGroups;
            return _ts_generator(this, function(_state) {
                provider = new UpdateGroupTreeTestProvider();
                delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_3__.MockFlameChartDelegate();
                chartInstance = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FlameChart.FlameChart(provider, delegate);
                root = chartInstance.buildGroupTree(provider.timelineData().groups);
                // The built tree should be
                //        Root
                //      /      \
                // Group0      Group1
                //                |
                //             Group2
                groupNode2 = {
                    index: 2,
                    nestingLevel: 1,
                    startLevel: 2,
                    // The next group is 'Test Group 3', its start level is 3.
                    endLevel: 6,
                    children: []
                };
                groupNode1 = {
                    index: 1,
                    nestingLevel: 0,
                    startLevel: 1,
                    // The next group is 'Test Group 2', its start level is 2.
                    endLevel: 2,
                    children: [
                        groupNode2
                    ]
                };
                groupNode0 = {
                    index: 0,
                    nestingLevel: 0,
                    startLevel: 0,
                    // The next group is 'Test Group 1', its start level is 1.
                    endLevel: 1,
                    children: []
                };
                expectedGroupNodeRoot = {
                    index: -1,
                    nestingLevel: -1,
                    startLevel: 0,
                    // The next group is 'Test Group 0', its start level is 0.
                    endLevel: 0,
                    children: [
                        groupNode0,
                        groupNode1
                    ]
                };
                assert.deepEqual(root, expectedGroupNodeRoot);
                newGroups = [
                    {
                        name: 'Test Group 0',
                        startLevel: 0,
                        style: defaultGroupStyle
                    },
                    {
                        name: 'Test Group 1',
                        startLevel: 2,
                        style: defaultGroupStyle
                    },
                    {
                        name: 'Test Group 2',
                        startLevel: 3,
                        style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                            collapsible: true,
                            nestingLevel: 1
                        })
                    }
                ];
                chartInstance.updateGroupTree(newGroups, root);
                groupNode0.endLevel = 2;
                groupNode1.startLevel = 2;
                groupNode1.endLevel = 3;
                groupNode2.startLevel = 3;
                assert.deepEqual(root, expectedGroupNodeRoot);
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=FlameChart.test.js.map


}),

}]);