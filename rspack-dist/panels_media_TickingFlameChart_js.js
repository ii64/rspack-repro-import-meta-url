"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_TickingFlameChart_js"], {
"./panels/media/TickingFlameChart.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ColdColorScheme: function() { return ColdColorScheme; },
  Event: function() { return Event; },
  HotColorScheme: function() { return HotColorScheme; },
  TickingFlameChart: function() { return TickingFlameChart; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TickingFlameChartHelpers.js */ "./panels/media/TickingFlameChartHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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






var defaultFont = '11px ' + _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.fontFamily();
function getGroupDefaultTextColor() {
    return _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--sys-color-on-surface');
}
var DefaultStyle = function() {
    return {
        height: 20,
        padding: 2,
        collapsible: false,
        font: defaultFont,
        color: getGroupDefaultTextColor(),
        backgroundColor: 'rgba(100 0 0 / 10%)',
        nestingLevel: 0,
        itemsHeight: 20,
        shareHeaderLine: false,
        useFirstLineForOverview: false,
        useDecoratorsForOverview: false
    };
};
var HotColorScheme = [
    '#ffba08',
    '#faa307',
    '#f48c06',
    '#e85d04',
    '#dc2f02',
    '#d00000',
    '#9d0208'
];
var ColdColorScheme = [
    '#7400b8',
    '#6930c3',
    '#5e60ce',
    '#5390d9',
    '#4ea8de',
    '#48bfe3',
    '#56cfe1',
    '#64dfdf'
];
function calculateFontColor(backgroundColor) {
    var _Common_Color_parse;
    var parsedColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(backgroundColor)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.as("hsl" /* Common.Color.Format.HSL */ );
    // Dark background needs a light font.
    if (parsedColor && parsedColor.l < 0.5) {
        return '#eee';
    }
    return '#444';
}
/**
 * Wrapper class for each event displayed on the timeline.
 */ var Event = /*#__PURE__*/ function() {
    "use strict";
    function Event(timelineData, eventHandlers) {
        var eventProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            color: undefined,
            duration: undefined,
            hoverData: {},
            level: 0,
            name: '',
            startTime: 0
        };
        _class_call_check(this, Event);
        _define_property(this, "timelineData", void 0);
        _define_property(this, "setLive", void 0);
        _define_property(this, "setComplete", void 0);
        _define_property(this, "updateMaxTime", void 0);
        _define_property(this, "selfIndex", void 0);
        _define_property(this, "liveInternal", void 0);
        _define_property(this, "title", void 0);
        _define_property(this, "colorInternal", void 0);
        _define_property(this, "fontColorInternal", void 0);
        _define_property(this, "hoverData", void 0);
        // These allow the event to privately change it's own data in the timeline.
        this.timelineData = timelineData;
        this.setLive = eventHandlers.setLive;
        this.setComplete = eventHandlers.setComplete;
        this.updateMaxTime = eventHandlers.updateMaxTime;
        // This is the index in the timelineData arrays we should be writing to.
        this.selfIndex = this.timelineData.entryLevels.length;
        this.liveInternal = false;
        // Can't use the dict||or||default syntax, since NaN is a valid expected duration.
        var duration = eventProperties['duration'] === undefined ? 0 : eventProperties['duration'];
        this.timelineData.entryLevels.push(eventProperties['level'] || 0);
        this.timelineData.entryStartTimes.push(eventProperties['startTime'] || 0);
        this.timelineData.entryTotalTimes.push(duration); // May initially push -1
        // If -1 was pushed, we need to update it. The set end time method helps with this.
        if (duration === -1) {
            this.endTime = -1;
        }
        this.title = eventProperties['name'] || '';
        this.colorInternal = eventProperties['color'] || HotColorScheme[0];
        this.fontColorInternal = calculateFontColor(this.colorInternal);
        this.hoverData = eventProperties['hoverData'] || {};
    }
    _create_class(Event, [
        {
            /**
     * Render hovertext into the |htmlElement|
     */ key: "decorate",
            value: function decorate(htmlElement) {
                htmlElement.createChild('span').textContent = "Name: ".concat(this.title);
                htmlElement.createChild('br');
                var startTimeReadable = (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(this.startTime, 2);
                if (this.liveInternal) {
                    htmlElement.createChild('span').textContent = "Duration: ".concat(startTimeReadable, " - LIVE!");
                } else if (!isNaN(this.duration)) {
                    var durationReadable = (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(this.duration + this.startTime, 2);
                    htmlElement.createChild('span').textContent = "Duration: ".concat(startTimeReadable, " - ").concat(durationReadable);
                } else {
                    htmlElement.createChild('span').textContent = "Time: ".concat(startTimeReadable);
                }
            }
        },
        {
            key: "endTime",
            set: /**
     * set an event to be "live" where it's ended time is always the chart maximum
     * or to be a fixed time.
     * @param {number} time
     */ function set(time) {
                // Setting end time to -1 signals that an event becomes live
                if (time === -1) {
                    this.timelineData.entryTotalTimes[this.selfIndex] = this.setLive(this.selfIndex);
                    this.liveInternal = true;
                } else {
                    this.liveInternal = false;
                    var duration = time - this.timelineData.entryStartTimes[this.selfIndex];
                    this.timelineData.entryTotalTimes[this.selfIndex] = duration;
                    this.setComplete(this.selfIndex);
                    this.updateMaxTime(time);
                }
            }
        },
        {
            key: "id",
            get: function get() {
                return this.selfIndex;
            }
        },
        {
            key: "level",
            set: function set(level) {
                this.timelineData.entryLevels[this.selfIndex] = level;
            }
        },
        {
            key: "color",
            get: function get() {
                return this.colorInternal;
            },
            set: function set(color) {
                this.colorInternal = color;
                this.fontColorInternal = calculateFontColor(this.colorInternal);
            }
        },
        {
            key: "fontColor",
            get: function get() {
                return this.fontColorInternal;
            }
        },
        {
            key: "startTime",
            get: function get() {
                // Round it
                return this.timelineData.entryStartTimes[this.selfIndex];
            }
        },
        {
            key: "duration",
            get: function get() {
                return this.timelineData.entryTotalTimes[this.selfIndex];
            }
        },
        {
            key: "live",
            get: function get() {
                return this.liveInternal;
            }
        }
    ]);
    return Event;
}();
var TickingFlameChart = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(TickingFlameChart, _UI_Widget_VBox);
    var _super = _create_super(TickingFlameChart);
    function TickingFlameChart() {
        _class_call_check(this, TickingFlameChart);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "intervalTimer", void 0);
        _define_property(_assert_this_initialized(_this), "lastTimestamp", void 0);
        _define_property(_assert_this_initialized(_this), "canTickInternal", void 0);
        _define_property(_assert_this_initialized(_this), "ticking", void 0);
        _define_property(_assert_this_initialized(_this), "isShown", void 0);
        _define_property(_assert_this_initialized(_this), "bounds", void 0);
        _define_property(_assert_this_initialized(_this), "dataProvider", void 0);
        _define_property(_assert_this_initialized(_this), "delegate", void 0);
        _define_property(_assert_this_initialized(_this), "chartGroupExpansionSetting", void 0);
        _define_property(_assert_this_initialized(_this), "chart", void 0);
        _define_property(_assert_this_initialized(_this), "stoppedPermanently", void 0);
        // set to update once per second _while the tab is active_
        _this.intervalTimer = 0;
        _this.lastTimestamp = 0;
        _this.canTickInternal = true;
        _this.ticking = false;
        _this.isShown = false;
        // The max bounds for scroll-out.
        _this.bounds = new _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.Bounds(0, 1000, 30000, 1000);
        // Create the data provider with the initial max bounds,
        // as well as a function to attempt bounds updating everywhere.
        _this.dataProvider = new TickingFlameChartDataProvider(_this.bounds, _this.updateMaxTime.bind(_assert_this_initialized(_this)));
        // Delegate doesn't do much for now.
        _this.delegate = new TickingFlameChartDelegate();
        // Chart settings.
        _this.chartGroupExpansionSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('media-flame-chart-group-expansion', {});
        // Create the chart.
        _this.chart = // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
        // @ts-expect-error
        new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.FlameChart.FlameChart(_this.dataProvider, _this.delegate, _this.chartGroupExpansionSetting);
        // TODO: needs to have support in the delegate for supporting this.
        _this.chart.disableRangeSelection();
        // Scrolling should change the current bounds, and repaint the chart.
        _this.chart.bindCanvasEvent('wheel', function(e) {
            _this.onScroll(e);
        });
        // Add the chart.
        _this.chart.show(_this.contentElement);
        return _this;
    }
    _create_class(TickingFlameChart, [
        {
            /**
     * Add a marker with |properties| at |time|.
     */ key: "addMarker",
            value: function addMarker(properties) {
                properties['duration'] = NaN;
                this.startEvent(properties);
            }
        },
        {
            /**
     * Create an event which will be set to live by default.
     */ key: "startEvent",
            value: function startEvent(properties) {
                // Make sure that an unspecified event gets live duration.
                // Have to check for undefined, since NaN is allowed but evaluates to false.
                if (properties['duration'] === undefined) {
                    properties['duration'] = -1;
                }
                var time = properties['startTime'] || 0;
                // Event has to be created before the updateMaxTime call.
                var event = this.dataProvider.startEvent(properties);
                this.updateMaxTime(time);
                return event;
            }
        },
        {
            /**
     * Add a group with |name| that can contain |depth| different tracks.
     */ key: "addGroup",
            value: function addGroup(name, depth) {
                this.dataProvider.addGroup(name, depth);
            }
        },
        {
            key: "updateMaxTime",
            value: function updateMaxTime(time) {
                if (this.bounds.pushMaxAtLeastTo(time)) {
                    this.updateRender();
                }
            }
        },
        {
            key: "onScroll",
            value: function onScroll(e) {
                // TODO: is this a good divisor? does it account for high presicision scroll wheels?
                // low precisision scroll wheels?
                var scrollTickCount = Math.round(e.deltaY / 50);
                var scrollPositionRatio = e.offsetX / e.srcElement.clientWidth;
                if (scrollTickCount > 0) {
                    this.bounds.zoomOut(scrollTickCount, scrollPositionRatio);
                } else {
                    this.bounds.zoomIn(-scrollTickCount, scrollPositionRatio);
                }
                this.updateRender();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.isShown = false;
                if (this.ticking) {
                    this.stop();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.isShown = true;
                if (this.canTickInternal && !this.ticking) {
                    this.start();
                }
            }
        },
        {
            key: "canTick",
            set: function set(allowed) {
                this.canTickInternal = allowed;
                if (this.ticking && !allowed) {
                    this.stop();
                }
                if (!this.ticking && this.isShown && allowed) {
                    this.start();
                }
            }
        },
        {
            key: "start",
            value: function start() {
                if (this.lastTimestamp === 0) {
                    this.lastTimestamp = Date.now();
                }
                if (this.intervalTimer !== 0 || this.stoppedPermanently) {
                    return;
                }
                // 16 ms is roughly 60 fps.
                this.intervalTimer = window.setInterval(this.updateRender.bind(this), 16);
                this.ticking = true;
            }
        },
        {
            key: "stop",
            value: function stop() {
                var permanently = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                window.clearInterval(this.intervalTimer);
                this.intervalTimer = 0;
                if (permanently) {
                    this.stoppedPermanently = true;
                }
                this.ticking = false;
            }
        },
        {
            key: "updateRender",
            value: function updateRender() {
                if (this.ticking) {
                    var currentTimestamp = Date.now();
                    var duration = currentTimestamp - this.lastTimestamp;
                    this.lastTimestamp = currentTimestamp;
                    this.bounds.addMax(duration);
                }
                this.dataProvider.updateMaxTime(this.bounds);
                this.chart.setWindowTimes(this.bounds.low, this.bounds.high, true);
                this.chart.scheduleUpdate();
            }
        }
    ]);
    return TickingFlameChart;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
/**
 * Doesn't do much right now, but can be used in the future for selecting events.
 */ var TickingFlameChartDelegate = /*#__PURE__*/ function() {
    "use strict";
    function TickingFlameChartDelegate() {
        _class_call_check(this, TickingFlameChartDelegate);
    }
    _create_class(TickingFlameChartDelegate, [
        {
            key: "windowChanged",
            value: function windowChanged(_windowStartTime, _windowEndTime, _animate) {}
        },
        {
            key: "updateRangeSelection",
            value: function updateRangeSelection(_startTime, _endTime) {}
        },
        {
            key: "updateSelectedGroup",
            value: function updateSelectedGroup(_flameChart, _group) {}
        }
    ]);
    return TickingFlameChartDelegate;
}();
var TickingFlameChartDataProvider = /*#__PURE__*/ function() {
    "use strict";
    function TickingFlameChartDataProvider(initialBounds, updateMaxTime) {
        _class_call_check(this, TickingFlameChartDataProvider);
        _define_property(this, "updateMaxTimeHandle", void 0);
        _define_property(this, "bounds", void 0);
        _define_property(this, "liveEvents", void 0);
        _define_property(this, "eventMap", void 0);
        _define_property(this, "timelineDataInternal", void 0);
        _define_property(this, "maxLevel", void 0);
        // do _not_ call this method from within this class - only for passing to events.
        this.updateMaxTimeHandle = updateMaxTime;
        this.bounds = initialBounds;
        // All the events which should have their time updated when the chart ticks.
        this.liveEvents = new Set();
        // All events.
        // Map<Event>
        this.eventMap = new Map();
        // Contains the numerical indicies. This is passed as a reference to the events
        // so that they can update it when they change.
        this.timelineDataInternal = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.FlameChart.FlameChartTimelineData.createEmpty();
        // The current sum of all group heights.
        this.maxLevel = 0;
    }
    _create_class(TickingFlameChartDataProvider, [
        {
            key: "hasTrackConfigurationMode",
            value: function hasTrackConfigurationMode() {
                return false;
            }
        },
        {
            /**
     * Add a group with |name| that can contain |depth| different tracks.
     */ key: "addGroup",
            value: function addGroup(name, depth) {
                if (this.timelineDataInternal.groups) {
                    var newGroup = {
                        name: name,
                        startLevel: this.maxLevel,
                        expanded: true,
                        selectable: false,
                        style: DefaultStyle(),
                        track: null
                    };
                    this.timelineDataInternal.groups.push(newGroup);
                    _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeChangeEvent.eventName, function() {
                        newGroup.style.color = getGroupDefaultTextColor();
                    });
                }
                this.maxLevel += depth;
            }
        },
        {
            /**
     * Create an event which will be set to live by default.
     */ key: "startEvent",
            value: function startEvent(properties) {
                properties['level'] = properties['level'] || 0;
                if (properties['level'] > this.maxLevel) {
                    throw "level ".concat(properties['level'], " is above the maximum allowed of ").concat(this.maxLevel);
                }
                var event = new Event(this.timelineDataInternal, {
                    setLive: this.setLive.bind(this),
                    setComplete: this.setComplete.bind(this),
                    updateMaxTime: this.updateMaxTimeHandle
                }, properties);
                this.eventMap.set(event.id, event);
                return event;
            }
        },
        {
            key: "setLive",
            value: function setLive(index) {
                this.liveEvents.add(index);
                return this.bounds.max;
            }
        },
        {
            key: "setComplete",
            value: function setComplete(index) {
                this.liveEvents.delete(index);
            }
        },
        {
            key: "updateMaxTime",
            value: function updateMaxTime(bounds) {
                this.bounds = bounds;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.liveEvents.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var eventID = _step.value;
                        // force recalculation of all live events.
                        this.eventMap.get(eventID[0]).endTime = -1;
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
            }
        },
        {
            key: "maxStackDepth",
            value: function maxStackDepth() {
                return this.maxLevel + 1;
            }
        },
        {
            key: "timelineData",
            value: function timelineData() {
                return this.timelineDataInternal;
            }
        },
        {
            /** time in milliseconds
     */ key: "minimumBoundary",
            value: function minimumBoundary() {
                return this.bounds.low;
            }
        },
        {
            key: "totalTime",
            value: function totalTime() {
                return this.bounds.high;
            }
        },
        {
            key: "entryColor",
            value: function entryColor(index) {
                return this.eventMap.get(index).color;
            }
        },
        {
            key: "textColor",
            value: function textColor(index) {
                return this.eventMap.get(index).fontColor;
            }
        },
        {
            key: "entryTitle",
            value: function entryTitle(index) {
                return this.eventMap.get(index).title;
            }
        },
        {
            key: "entryFont",
            value: function entryFont(_index) {
                return defaultFont;
            }
        },
        {
            key: "decorateEntry",
            value: function decorateEntry(_index, _context, _text, _barX, _barY, _barWidth, _barHeight, _unclippedBarX, _timeToPixelRatio) {
                return false;
            }
        },
        {
            key: "forceDecoration",
            value: function forceDecoration(_index) {
                return false;
            }
        },
        {
            key: "prepareHighlightedEntryInfo",
            value: function prepareHighlightedEntryInfo(index) {
                var element = document.createElement('div');
                this.eventMap.get(index).decorate(element);
                return element;
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, _precision) {
                // value is always [0, X] so we need to add lower bound
                value += Math.round(this.bounds.low);
                // Magic numbers of pre-calculated logorithms.
                // we want to show additional decimals at the time when two adjacent labels
                // would otherwise show the same number. At 3840 pixels wide, that cutoff
                // happens to be about 30 seconds for one decimal and 2.8 for two decimals.
                if (this.bounds.range < 2800) {
                    return (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(value, 2);
                }
                if (this.bounds.range < 30000) {
                    return (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(value, 1);
                }
                return (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(value, 0);
            }
        },
        {
            key: "canJumpToEntry",
            value: function canJumpToEntry(_entryIndex) {
                return false;
            }
        }
    ]);
    return TickingFlameChartDataProvider;
} //# sourceMappingURL=TickingFlameChart.js.map
();


}),
"./panels/media/TickingFlameChartHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Bounds: function() { return Bounds; },
  formatMillisecondsToSeconds: function() { return formatMillisecondsToSeconds; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function formatMillisecondsToSeconds(ms, decimalPlaces) {
    var roundPower = Math.pow(10, 3 - decimalPlaces);
    var denominatorPower = Math.pow(10, Math.max(0, decimalPlaces));
    return "".concat(Math.round(ms / roundPower) / denominatorPower, " s");
}
/**
 * Manage the bounding box properties for the ticking flame chart.
 * kept in a separate file for unit testing.
 */ var Bounds = /*#__PURE__*/ function() {
    "use strict";
    function Bounds(initialLow, initialHigh, maxRange, minRange) {
        _class_call_check(this, Bounds);
        _define_property(this, "minInternal", void 0);
        _define_property(this, "maxInternal", void 0);
        _define_property(this, "lowInternal", void 0);
        _define_property(this, "highInternal", void 0);
        _define_property(this, "maxRange", void 0);
        _define_property(this, "minRange", void 0);
        this.minInternal = initialLow;
        this.maxInternal = initialHigh;
        this.lowInternal = this.minInternal;
        this.highInternal = this.maxInternal;
        this.maxRange = maxRange;
        this.minRange = minRange;
    }
    _create_class(Bounds, [
        {
            key: "low",
            get: function get() {
                return this.lowInternal;
            }
        },
        {
            key: "high",
            get: function get() {
                return this.highInternal;
            }
        },
        {
            key: "min",
            get: function get() {
                return this.minInternal;
            }
        },
        {
            key: "max",
            get: function get() {
                return this.maxInternal;
            }
        },
        {
            key: "range",
            get: function get() {
                return this.highInternal - this.lowInternal;
            }
        },
        {
            key: "reassertBounds",
            value: function reassertBounds() {
                var needsAdjustment = true;
                while(needsAdjustment){
                    needsAdjustment = false;
                    if (this.range < this.minRange) {
                        needsAdjustment = true;
                        var delta = (this.minRange - this.range) / 2;
                        this.highInternal += delta;
                        this.lowInternal -= delta;
                    }
                    if (this.lowInternal < this.minInternal) {
                        needsAdjustment = true;
                        this.lowInternal = this.minInternal;
                    }
                    if (this.highInternal > this.maxInternal) {
                        needsAdjustment = true;
                        this.highInternal = this.maxInternal;
                    }
                }
            }
        },
        {
            /**
     * zoom out |amount| ticks at position [0, 1] along the current range of the timeline.
     */ key: "zoomOut",
            value: function zoomOut(amount, position) {
                var range = this.highInternal - this.lowInternal;
                var growSize = range * Math.pow(1.1, amount) - range;
                var lowEnd = growSize * position;
                var highEnd = growSize - lowEnd;
                this.lowInternal -= lowEnd;
                this.highInternal += highEnd;
                this.reassertBounds();
            }
        },
        {
            /**
     * zoom in |amount| ticks at position [0, 1] along the current range of the timeline.
     */ key: "zoomIn",
            value: function zoomIn(amount, position) {
                var range = this.highInternal - this.lowInternal;
                if (this.range <= this.minRange) {
                    return;
                }
                var shrinkSize = range - range / Math.pow(1.1, amount);
                var lowEnd = shrinkSize * position;
                var highEnd = shrinkSize - lowEnd;
                this.lowInternal += lowEnd;
                this.highInternal -= highEnd;
                this.reassertBounds();
            }
        },
        {
            /**
     * Add Xms to the max value, and scroll the timeline forward if the end is in sight.
     */ key: "addMax",
            value: function addMax(amount) {
                var range = this.highInternal - this.lowInternal;
                var isAtHighEnd = this.highInternal === this.maxInternal;
                var isZoomedOut = this.lowInternal === this.minInternal || range >= this.maxRange;
                this.maxInternal += amount;
                if (isAtHighEnd && isZoomedOut) {
                    this.highInternal = this.maxInternal;
                }
                this.reassertBounds();
            }
        },
        {
            /**
     * Attempt to push the maximum time up to |time| ms.
     */ key: "pushMaxAtLeastTo",
            value: function pushMaxAtLeastTo(time) {
                if (this.maxInternal < time) {
                    this.addMax(time - this.maxInternal);
                    return true;
                }
                return false;
            }
        }
    ]);
    return Bounds;
} //# sourceMappingURL=TickingFlameChartHelpers.js.map
();


}),

}]);