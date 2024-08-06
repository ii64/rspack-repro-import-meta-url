"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_performance_panel_flamechart_js"], {
"./ui/components/docs/performance_panel/flamechart.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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





await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_4__.ComponentServerSetup.setup();
var defaultGroupStyle = {
    height: 17,
    padding: 4,
    collapsible: false,
    color: 'black',
    backgroundColor: 'grey',
    nestingLevel: 0,
    itemsHeight: 17
};
/**
 * Render a basic flame chart with 3 events on the same level
 **/ function renderBasicExample() {
    var FakeProviderWithBasicEvents = /*#__PURE__*/ function(_TraceHelpers_FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProviderWithBasicEvents, _TraceHelpers_FakeFlameChartProvider);
        var _super = _create_super(FakeProviderWithBasicEvents);
        function FakeProviderWithBasicEvents() {
            _class_call_check(this, FakeProviderWithBasicEvents);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProviderWithBasicEvents, [
            {
                key: "timelineData",
                value: function timelineData() {
                    return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            0,
                            0,
                            0,
                            1,
                            1,
                            1,
                            2,
                            2,
                            2
                        ],
                        entryStartTimes: [
                            5,
                            60,
                            80,
                            5,
                            60,
                            80,
                            5,
                            60,
                            80
                        ],
                        entryTotalTimes: [
                            50,
                            10,
                            10,
                            50,
                            10,
                            10,
                            50,
                            10,
                            10
                        ],
                        groups: [
                            {
                                name: 'Test Group 0',
                                startLevel: 0,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true
                                })
                            },
                            {
                                name: 'Test Group 1',
                                startLevel: 1,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'red',
                                    backgroundColor: 'green'
                                })
                            },
                            {
                                name: 'Test Group 2',
                                startLevel: 2,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'blue',
                                    backgroundColor: 'yellow'
                                })
                            }
                        ]
                    });
                }
            }
        ]);
        return FakeProviderWithBasicEvents;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider);
    var container = document.querySelector('div#basic');
    if (!container) {
        throw new Error('No container');
    }
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var dataProvider = new FakeProviderWithBasicEvents();
    var flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with main thread long events to stripe and a warning triangle.
 **/ function renderLongTaskExample() {
    var FakeProviderWithLongTasksForStriping = /*#__PURE__*/ function(_TraceHelpers_FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProviderWithLongTasksForStriping, _TraceHelpers_FakeFlameChartProvider);
        var _super = _create_super(FakeProviderWithLongTasksForStriping);
        function FakeProviderWithLongTasksForStriping() {
            _class_call_check(this, FakeProviderWithLongTasksForStriping);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProviderWithLongTasksForStriping, [
            {
                key: "timelineData",
                value: function timelineData() {
                    return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            0,
                            0,
                            0,
                            1,
                            1,
                            1,
                            1,
                            2,
                            2,
                            2,
                            2
                        ],
                        entryStartTimes: [
                            5,
                            55,
                            70,
                            5,
                            30,
                            55,
                            75,
                            5,
                            10,
                            15,
                            20
                        ],
                        entryTotalTimes: [
                            45,
                            10,
                            20,
                            20,
                            20,
                            5,
                            15,
                            4,
                            4,
                            4,
                            4
                        ],
                        entryDecorations: [
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(25000)
                                },
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ],
                            [
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                },
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ],
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(15000)
                                }
                            ],
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000)
                                },
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(10000)
                                },
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                },
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                },
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ],
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000)
                                },
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [
                                {
                                    type: "CANDY" /* PerfUI.FlameChart.FlameChartDecorationType.CANDY */ ,
                                    startAtTime: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds(1000)
                                },
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                },
                                {
                                    type: "WARNING_TRIANGLE" /* PerfUI.FlameChart.FlameChartDecorationType.WARNING_TRIANGLE */ 
                                }
                            ]
                        ],
                        groups: [
                            {
                                name: 'Testing Candy Stripe, warning triangles and hidden descendants arrow decorations',
                                startLevel: 0,
                                style: defaultGroupStyle
                            }
                        ]
                    });
                }
            }
        ]);
        return FakeProviderWithLongTasksForStriping;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider);
    var container = document.querySelector('div#long-task');
    if (!container) {
        throw new Error('No container');
    }
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var dataProvider = new FakeProviderWithLongTasksForStriping();
    var flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with nested track.
 **/ function renderNestedExample() {
    var FakeProviderWithNestedGroup = /*#__PURE__*/ function(_TraceHelpers_FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProviderWithNestedGroup, _TraceHelpers_FakeFlameChartProvider);
        var _super = _create_super(FakeProviderWithNestedGroup);
        function FakeProviderWithNestedGroup() {
            _class_call_check(this, FakeProviderWithNestedGroup);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProviderWithNestedGroup, [
            {
                key: "timelineData",
                value: function timelineData() {
                    return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            0,
                            1,
                            2
                        ],
                        entryStartTimes: [
                            5,
                            5,
                            5
                        ],
                        entryTotalTimes: [
                            50,
                            50,
                            50
                        ],
                        groups: [
                            {
                                name: 'Test Group 0',
                                startLevel: 0,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true
                                })
                            },
                            {
                                name: 'Test Nested Group 1',
                                startLevel: 0,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'red',
                                    backgroundColor: 'green'
                                })
                            },
                            {
                                name: 'Test Group 2',
                                startLevel: 2,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'blue',
                                    backgroundColor: 'yellow'
                                })
                            }
                        ]
                    });
                }
            }
        ]);
        return FakeProviderWithNestedGroup;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider);
    var container = document.querySelector('div#nested');
    if (!container) {
        throw new Error('No container');
    }
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var dataProvider = new FakeProviderWithNestedGroup();
    var flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
/**
 * Render a flame chart with nested case and buttons to hide/unhide and reorder
 * tracks
 **/ function renderTrackCustomizationExample() {
    var FakeProviderWithBasicEvents = /*#__PURE__*/ function(_TraceHelpers_FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProviderWithBasicEvents, _TraceHelpers_FakeFlameChartProvider);
        var _super = _create_super(FakeProviderWithBasicEvents);
        function FakeProviderWithBasicEvents() {
            _class_call_check(this, FakeProviderWithBasicEvents);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProviderWithBasicEvents, [
            {
                key: "timelineData",
                value: function timelineData() {
                    return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            0,
                            0,
                            1,
                            1,
                            2,
                            2,
                            3,
                            3
                        ],
                        entryStartTimes: [
                            5,
                            60,
                            5,
                            60,
                            5,
                            60
                        ],
                        entryTotalTimes: [
                            50,
                            10,
                            50,
                            10,
                            50,
                            10
                        ],
                        groups: [
                            {
                                name: 'Test Group 0',
                                startLevel: 0,
                                expanded: true,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true
                                })
                            },
                            {
                                name: 'Test Group 1',
                                startLevel: 1,
                                expanded: true,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'red',
                                    backgroundColor: 'green'
                                })
                            },
                            {
                                name: 'Test Group 2',
                                startLevel: 2,
                                expanded: true,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    collapsible: true,
                                    color: 'blue',
                                    backgroundColor: 'yellow'
                                })
                            },
                            {
                                name: 'Test Group 3',
                                startLevel: 2,
                                expanded: true,
                                style: _object_spread_props(_object_spread({}, defaultGroupStyle), {
                                    nestingLevel: 1
                                })
                            }
                        ]
                    });
                }
            }
        ]);
        return FakeProviderWithBasicEvents;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider);
    var container = document.querySelector('div#track-customization');
    if (!container) {
        throw new Error('No container');
    }
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var dataProvider = new FakeProviderWithBasicEvents();
    var flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
    var indexInput = document.querySelector('#indexOfTrack');
    var buttonHide = document.querySelector('#hide');
    buttonHide === null || buttonHide === void 0 ? void 0 : buttonHide.addEventListener('click', function() {
        var index = Number(indexInput.value);
        flameChart.hideGroup(index);
    });
    var buttonUnhide = document.querySelector('#unhide');
    buttonUnhide === null || buttonUnhide === void 0 ? void 0 : buttonUnhide.addEventListener('click', function() {
        var index = Number(indexInput.value);
        flameChart.showGroup(index);
    });
    var buttonForMoveUp = document.querySelector('#testForMoveUp');
    buttonForMoveUp === null || buttonForMoveUp === void 0 ? void 0 : buttonForMoveUp.addEventListener('click', function() {
        var index = Number(indexInput.value);
        flameChart.moveGroupUp(index);
    });
    var buttonForMoveDown = document.querySelector('#testForMoveDown');
    buttonForMoveDown === null || buttonForMoveDown === void 0 ? void 0 : buttonForMoveDown.addEventListener('click', function() {
        var index = Number(indexInput.value);
        flameChart.moveGroupDown(index);
    });
}
/**
 * Render a flame chart with event initiators of different sizes.
 * Some initiator and initiated events are hidden.
 **/ function renderInitiatorsExample() {
    var FakeProviderWithVariousTasksForInitiators = /*#__PURE__*/ function(_TraceHelpers_FakeFlameChartProvider) {
        "use strict";
        _inherits(FakeProviderWithVariousTasksForInitiators, _TraceHelpers_FakeFlameChartProvider);
        var _super = _create_super(FakeProviderWithVariousTasksForInitiators);
        function FakeProviderWithVariousTasksForInitiators() {
            _class_call_check(this, FakeProviderWithVariousTasksForInitiators);
            return _super.apply(this, arguments);
        }
        _create_class(FakeProviderWithVariousTasksForInitiators, [
            {
                key: "timelineData",
                value: function timelineData() {
                    return _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChartTimelineData.create({
                        entryLevels: [
                            0,
                            1,
                            2,
                            0,
                            1,
                            2,
                            0,
                            1,
                            2,
                            0,
                            1,
                            2,
                            0,
                            1,
                            2,
                            3
                        ],
                        entryStartTimes: [
                            5,
                            5,
                            5,
                            15,
                            15,
                            15,
                            40,
                            40,
                            40,
                            55.4,
                            55.4,
                            55.4,
                            80,
                            80,
                            80,
                            17
                        ],
                        entryTotalTimes: [
                            6,
                            6,
                            6,
                            5,
                            5,
                            20,
                            15,
                            15,
                            15,
                            2,
                            2,
                            2,
                            10,
                            10,
                            10,
                            10
                        ],
                        entryDecorations: [
                            [],
                            [],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [],
                            [],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ],
                            [
                                {
                                    type: "HIDDEN_DESCENDANTS_ARROW" /* PerfUI.FlameChart.FlameChartDecorationType.HIDDEN_DESCENDANTS_ARROW */ 
                                }
                            ]
                        ],
                        initiatorsData: [
                            {
                                initiatorIndex: 2,
                                eventIndex: 3,
                                isInitiatorHidden: true
                            },
                            {
                                initiatorIndex: 1,
                                eventIndex: 13
                            },
                            {
                                initiatorIndex: 3,
                                eventIndex: 6
                            },
                            {
                                initiatorIndex: 3,
                                eventIndex: 8,
                                isEntryHidden: true
                            },
                            {
                                initiatorIndex: 6,
                                eventIndex: 11
                            },
                            {
                                initiatorIndex: 11,
                                eventIndex: 12,
                                isInitiatorHidden: true,
                                isEntryHidden: true
                            },
                            {
                                initiatorIndex: 5,
                                eventIndex: 15
                            }
                        ],
                        groups: [
                            {
                                name: 'Testing initiators',
                                startLevel: 0,
                                style: defaultGroupStyle
                            }
                        ]
                    });
                }
            },
            {
                key: "maxStackDepth",
                value: function maxStackDepth() {
                    return 4;
                }
            }
        ]);
        return FakeProviderWithVariousTasksForInitiators;
    }(_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FakeFlameChartProvider);
    var container = document.querySelector('div#initiators');
    if (!container) {
        throw new Error('No container');
    }
    var delegate = new _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MockFlameChartDelegate();
    var dataProvider = new FakeProviderWithVariousTasksForInitiators();
    var flameChart = new _legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, delegate);
    flameChart.markAsRoot();
    flameChart.setSelectedEntry(14);
    flameChart.setWindowTimes(0, 100);
    flameChart.show(container);
    flameChart.update();
}
renderBasicExample();
renderLongTaskExample();
renderNestedExample();
renderTrackCustomizationExample();
renderInitiatorsExample(); //# sourceMappingURL=flamechart.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);