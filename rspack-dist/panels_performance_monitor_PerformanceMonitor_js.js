"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_performance_monitor_PerformanceMonitor_js"], {
"./panels/performance_monitor/PerformanceMonitor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ControlPane: function() { return ControlPane; },
  MetricIndicator: function() { return MetricIndicator; },
  PerformanceMonitorImpl: function() { return PerformanceMonitorImpl; },
  format: function() { return format; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _performanceMonitor_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./performanceMonitor.css.js */ "./panels/performance_monitor/performanceMonitor.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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









var UIStrings = {
    /**
     *@description Aria accessible name in Performance Monitor of the Performance monitor tab
     */ graphsDisplayingARealtimeViewOf: 'Graphs displaying a real-time view of performance metrics',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ paused: 'Paused',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ cpuUsage: 'CPU usage',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ jsHeapSize: 'JS heap size',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ domNodes: 'DOM Nodes',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ jsEventListeners: 'JS event listeners',
    /**
     *@description Text for documents, a type of resources
     */ documents: 'Documents',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ documentFrames: 'Document Frames',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ layoutsSec: 'Layouts / sec',
    /**
     *@description Text in Performance Monitor of the Performance monitor tab
     */ styleRecalcsSec: 'Style recalcs / sec'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/performance_monitor/PerformanceMonitor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var PerformanceMonitorImpl = /*#__PURE__*/ function(_UI_Widget_HBox) {
    "use strict";
    _inherits(PerformanceMonitorImpl, _UI_Widget_HBox);
    var _super = _create_super(PerformanceMonitorImpl);
    function PerformanceMonitorImpl() {
        var pollIntervalMs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
        _class_call_check(this, PerformanceMonitorImpl);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "metricsBuffer", void 0);
        _define_property(_assert_this_initialized(_this), "pixelsPerMs", void 0);
        _define_property(_assert_this_initialized(_this), "pollIntervalMs", void 0);
        _define_property(_assert_this_initialized(_this), "scaleHeight", void 0);
        _define_property(_assert_this_initialized(_this), "graphHeight", void 0);
        _define_property(_assert_this_initialized(_this), "gridColor", void 0);
        _define_property(_assert_this_initialized(_this), "controlPane", void 0);
        _define_property(_assert_this_initialized(_this), "canvas", void 0);
        _define_property(_assert_this_initialized(_this), "animationId", void 0);
        _define_property(_assert_this_initialized(_this), "width", void 0);
        _define_property(_assert_this_initialized(_this), "height", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "startTimestamp", void 0);
        _define_property(_assert_this_initialized(_this), "pollTimer", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.panel('performance.monitor').track({
            resize: true
        })));
        _this.contentElement.classList.add('perfmon-pane');
        _this.metricsBuffer = [];
        /** @const */ _this.pixelsPerMs = 10 / 1000;
        /** @const */ _this.pollIntervalMs = pollIntervalMs;
        /** @const */ _this.scaleHeight = 16;
        /** @const */ _this.graphHeight = 90;
        _this.gridColor = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--divider-line');
        _this.controlPane = new ControlPane(_this.contentElement);
        var chartContainer = _this.contentElement.createChild('div', 'perfmon-chart-container');
        _this.canvas = chartContainer.createChild('canvas');
        _this.canvas.tabIndex = -1;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(_this.canvas, i18nString(UIStrings.graphsDisplayingARealtimeViewOf));
        _this.contentElement.createChild('div', 'perfmon-chart-suspend-overlay fill').createChild('div').textContent = i18nString(UIStrings.paused);
        _this.controlPane.addEventListener("MetricChanged" /* Events.MetricChanged */ , _this.recalcChartHeight, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceMetricsModel.PerformanceMetricsModel, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(PerformanceMonitorImpl, [
        {
            key: "wasShown",
            value: function wasShown() {
                var _this = this;
                if (!this.model) {
                    return;
                }
                this.registerCSSFiles([
                    _performanceMonitor_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
                this.controlPane.instantiateMetricData();
                var themeSupport = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance();
                themeSupport.addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeChangeEvent.eventName, function() {
                    // instantiateMetricData sets the colors for the metrics, which we need
                    // to re-evaluate when the theme changes before re-drawing the canvas.
                    _this.controlPane.instantiateMetricData();
                    _this.draw();
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */ , this.suspendStateChanged, this);
                void this.model.enable();
                this.suspendStateChanged();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                if (!this.model) {
                    return;
                }
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().removeEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */ , this.suspendStateChanged, this);
                this.stopPolling();
                void this.model.disable();
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(model) {
                if (model.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.model = model;
                if (this.isShowing()) {
                    this.wasShown();
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(model) {
                if (this.model !== model) {
                    return;
                }
                if (this.isShowing()) {
                    this.willHide();
                }
                this.model = null;
            }
        },
        {
            key: "suspendStateChanged",
            value: function suspendStateChanged() {
                var suspended = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().allTargetsSuspended();
                if (suspended) {
                    this.stopPolling();
                } else {
                    this.startPolling();
                }
                this.contentElement.classList.toggle('suspended', suspended);
            }
        },
        {
            key: "startPolling",
            value: function startPolling() {
                var _this = this;
                this.startTimestamp = 0;
                this.pollTimer = window.setInterval(function() {
                    return _this.poll();
                }, this.pollIntervalMs);
                this.onResize();
                var animate = function() {
                    _this.draw();
                    _this.animationId = _this.contentElement.window().requestAnimationFrame(function() {
                        animate();
                    });
                };
                animate();
            }
        },
        {
            key: "stopPolling",
            value: function stopPolling() {
                window.clearInterval(this.pollTimer);
                this.contentElement.window().cancelAnimationFrame(this.animationId);
                this.metricsBuffer = [];
            }
        },
        {
            key: "poll",
            value: function poll() {
                var _this = this;
                return _async_to_generator(function() {
                    var data, timestamp, metrics, millisPerWidth, maxCount;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.model) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.model.requestMetrics()
                                ];
                            case 1:
                                data = _state.sent();
                                timestamp = data.timestamp;
                                metrics = data.metrics;
                                _this.metricsBuffer.push({
                                    timestamp: timestamp,
                                    metrics: metrics
                                });
                                millisPerWidth = _this.width / _this.pixelsPerMs;
                                // Multiply by 2 as the pollInterval has some jitter and to have some extra samples if window is resized.
                                maxCount = Math.ceil(millisPerWidth / _this.pollIntervalMs * 2);
                                if (_this.metricsBuffer.length > maxCount * 2) {
                                    _this.metricsBuffer.splice(0, _this.metricsBuffer.length - maxCount);
                                }
                                _this.controlPane.updateMetrics(metrics);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "draw",
            value: function draw() {
                var ctx = this.canvas.getContext('2d');
                ctx.save();
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                ctx.clearRect(0, 0, this.width, this.height);
                ctx.save();
                ctx.translate(0, this.scaleHeight); // Reserve space for the scale bar.
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.controlPane.charts()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chartInfo = _step.value;
                        if (!this.controlPane.isActive(chartInfo.metrics[0].name)) {
                            continue;
                        }
                        this.drawChart(ctx, chartInfo, this.graphHeight);
                        ctx.translate(0, this.graphHeight);
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
                ctx.restore();
                this.drawHorizontalGrid(ctx);
                ctx.restore();
            }
        },
        {
            key: "drawHorizontalGrid",
            value: function drawHorizontalGrid(ctx) {
                var labelDistanceSeconds = 10;
                var lightGray = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--color-background-inverted-opacity-2');
                ctx.font = '10px ' + _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.fontFamily();
                ctx.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--color-background-inverted-opacity-50');
                var currentTime = Date.now() / 1000;
                for(var sec = Math.ceil(currentTime);; --sec){
                    var x = this.width - ((currentTime - sec) * 1000 - this.pollIntervalMs) * this.pixelsPerMs;
                    if (x < -50) {
                        break;
                    }
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, this.height);
                    if (sec >= 0 && sec % labelDistanceSeconds === 0) {
                        ctx.fillText(new Date(sec * 1000).toLocaleTimeString(), x + 4, 12);
                    }
                    ctx.strokeStyle = sec % labelDistanceSeconds ? lightGray : this.gridColor;
                    ctx.stroke();
                }
            }
        },
        {
            key: "drawChart",
            value: function drawChart(ctx, chartInfo, height) {
                var _Common_Color_parse;
                ctx.save();
                ctx.rect(0, 0, this.width, height);
                ctx.clip();
                var bottomPadding = 8;
                var extraSpace = 1.05;
                var max = this.calcMax(chartInfo) * extraSpace;
                var stackedChartBaseLandscape = chartInfo.stacked ? new Map() : null;
                var paths = [];
                for(var i = chartInfo.metrics.length - 1; i >= 0; --i){
                    var metricInfo = chartInfo.metrics[i];
                    paths.push({
                        path: this.buildMetricPath(chartInfo, metricInfo, height - bottomPadding, max, i ? stackedChartBaseLandscape : null),
                        color: metricInfo.color
                    });
                }
                var backgroundColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--sys-color-cdt-base-container'))) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.asLegacyColor();
                if (backgroundColor) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = paths.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var path = _step.value;
                            var color = path.color;
                            ctx.save();
                            var parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color);
                            if (!parsedColor) {
                                continue;
                            }
                            ctx.fillStyle = backgroundColor.blendWith(parsedColor.setAlpha(0.2).asLegacyColor()).asString() || '';
                            ctx.fill(path.path);
                            ctx.strokeStyle = color;
                            ctx.lineWidth = 0.5;
                            ctx.stroke(path.path);
                            ctx.restore();
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
                ctx.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--color-background-inverted-opacity-50');
                ctx.font = "10px  ".concat(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.fontFamily());
                ctx.fillText(chartInfo.title, 8, 10);
                this.drawVerticalGrid(ctx, height - bottomPadding, max, chartInfo);
                ctx.restore();
            }
        },
        {
            key: "calcMax",
            value: function calcMax(chartInfo) {
                if (chartInfo.max) {
                    return chartInfo.max;
                }
                var width = this.width;
                var startTime = performance.now() - this.pollIntervalMs - width / this.pixelsPerMs;
                var max = -Infinity;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = chartInfo.metrics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var metricInfo = _step.value;
                        for(var i = this.metricsBuffer.length - 1; i >= 0; --i){
                            var metrics = this.metricsBuffer[i];
                            var value = metrics.metrics.get(metricInfo.name);
                            if (value !== undefined) {
                                max = Math.max(max, value);
                            }
                            if (metrics.timestamp < startTime) {
                                break;
                            }
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
                if (!this.metricsBuffer.length) {
                    return 10;
                }
                var base10 = Math.pow(10, Math.floor(Math.log10(max)));
                max = Math.ceil(max / base10 / 2) * base10 * 2;
                var alpha = 0.2;
                chartInfo.currentMax = max * alpha + (chartInfo.currentMax || max) * (1 - alpha);
                return chartInfo.currentMax;
            }
        },
        {
            key: "drawVerticalGrid",
            value: function drawVerticalGrid(ctx, height, max, info) {
                var base = Math.pow(10, Math.floor(Math.log10(max)));
                var firstDigit = Math.floor(max / base);
                if (firstDigit !== 1 && firstDigit % 2 === 1) {
                    base *= 2;
                }
                var scaleValue = Math.floor(max / base) * base;
                var span = max;
                var topPadding = 18;
                var visibleHeight = height - topPadding;
                ctx.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--color-background-inverted-opacity-50');
                ctx.strokeStyle = this.gridColor;
                ctx.beginPath();
                for(var i = 0; i < 2; ++i){
                    var y = calcY(scaleValue);
                    var labelText = MetricIndicator.formatNumber(scaleValue, info);
                    ctx.moveTo(0, y);
                    ctx.lineTo(4, y);
                    ctx.moveTo(ctx.measureText(labelText).width + 12, y);
                    ctx.lineTo(this.width, y);
                    ctx.fillText(labelText, 8, calcY(scaleValue) + 3);
                    scaleValue /= 2;
                }
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(0, height + 0.5);
                ctx.lineTo(this.width, height + 0.5);
                ctx.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().getComputedValue('--color-background-inverted-opacity-2');
                ctx.stroke();
                function calcY(value) {
                    return Math.round(height - visibleHeight * value / span) + 0.5;
                }
            }
        },
        {
            key: "buildMetricPath",
            value: function buildMetricPath(chartInfo, metricInfo, height, scaleMax, stackedChartBaseLandscape) {
                var path = new Path2D();
                var topPadding = 18;
                var visibleHeight = height - topPadding;
                if (visibleHeight < 1) {
                    return path;
                }
                var span = scaleMax;
                var metricName = metricInfo.name;
                var pixelsPerMs = this.pixelsPerMs;
                var startTime = performance.now() - this.pollIntervalMs - this.width / pixelsPerMs;
                var smooth = chartInfo.smooth;
                var x = 0;
                var lastY = 0;
                var lastX = 0;
                if (this.metricsBuffer.length) {
                    x = (this.metricsBuffer[0].timestamp - startTime) * pixelsPerMs;
                    path.moveTo(x, calcY(0));
                    path.lineTo(this.width + 5, calcY(0));
                    lastY = calcY(this.metricsBuffer[this.metricsBuffer.length - 1].metrics.get(metricName) || 0);
                    lastX = this.width + 5;
                    path.lineTo(lastX, lastY);
                }
                for(var i = this.metricsBuffer.length - 1; i >= 0; --i){
                    var metrics = this.metricsBuffer[i];
                    var timestamp = metrics.timestamp;
                    var value = metrics.metrics.get(metricName) || 0;
                    if (stackedChartBaseLandscape) {
                        value += stackedChartBaseLandscape.get(timestamp) || 0;
                        value = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(value, 0, 1);
                        stackedChartBaseLandscape.set(timestamp, value);
                    }
                    var y = calcY(value);
                    x = (timestamp - startTime) * pixelsPerMs;
                    if (smooth) {
                        var midX = (lastX + x) / 2;
                        path.bezierCurveTo(midX, lastY, midX, y, x, y);
                    } else {
                        path.lineTo(x, lastY);
                        path.lineTo(x, y);
                    }
                    lastX = x;
                    lastY = y;
                    if (timestamp < startTime) {
                        break;
                    }
                }
                return path;
                function calcY(value) {
                    return Math.round(height - visibleHeight * value / span) + 0.5;
                }
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                _get(_get_prototype_of(PerformanceMonitorImpl.prototype), "onResize", this).call(this);
                this.width = this.canvas.offsetWidth;
                this.canvas.width = Math.round(this.width * window.devicePixelRatio);
                this.recalcChartHeight();
            }
        },
        {
            key: "recalcChartHeight",
            value: function recalcChartHeight() {
                var height = this.scaleHeight;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.controlPane.charts()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chartInfo = _step.value;
                        if (this.controlPane.isActive(chartInfo.metrics[0].name)) {
                            height += this.graphHeight;
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
                this.height = Math.ceil(height * window.devicePixelRatio);
                this.canvas.height = this.height;
                this.canvas.style.height = "".concat(this.height / window.devicePixelRatio, "px");
            }
        }
    ]);
    return PerformanceMonitorImpl;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.HBox);
var ControlPane = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ControlPane, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ControlPane);
    function ControlPane(parent) {
        _class_call_check(this, ControlPane);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "element", void 0);
        _define_property(_assert_this_initialized(_this), "enabledChartsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "enabledCharts", void 0);
        _define_property(_assert_this_initialized(_this), "chartsInfo", []);
        _define_property(_assert_this_initialized(_this), "indicators", new Map());
        _this.element = parent.createChild('div', 'perfmon-control-pane');
        _this.enabledChartsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('perfmon-active-indicators2', [
            'TaskDuration',
            'JSHeapTotalSize',
            'Nodes'
        ]);
        _this.enabledCharts = new Set(_this.enabledChartsSetting.get());
        return _this;
    }
    _create_class(ControlPane, [
        {
            key: "instantiateMetricData",
            value: function instantiateMetricData() {
                var defaults = {
                    color: undefined,
                    format: undefined,
                    currentMax: undefined,
                    max: undefined,
                    smooth: undefined,
                    stacked: undefined
                };
                // Get ThemeSupport instance here just to make things a little less verbose.
                var themeSupport = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance();
                this.chartsInfo = [
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.cpuUsage),
                        metrics: [
                            {
                                name: 'TaskDuration',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-cpu-task-duration', this.element)
                            },
                            {
                                name: 'ScriptDuration',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-cpu-script-duration', this.element)
                            },
                            {
                                name: 'LayoutDuration',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-cpu-layout-duration', this.element)
                            },
                            {
                                name: 'RecalcStyleDuration',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-cpu-recalc-style-duration', this.element)
                            }
                        ],
                        format: "Percent" /* Format.Percent */ ,
                        smooth: true,
                        stacked: true,
                        color: themeSupport.getComputedValue('--override-color-perf-monitor-cpu', this.element),
                        max: 1,
                        currentMax: undefined
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.jsHeapSize),
                        metrics: [
                            {
                                name: 'JSHeapTotalSize',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-jsheap-total-size', this.element)
                            },
                            {
                                name: 'JSHeapUsedSize',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-jsheap-used-size', this.element)
                            }
                        ],
                        format: "Bytes" /* Format.Bytes */ ,
                        color: themeSupport.getComputedValue('--override-color-perf-monitor-jsheap')
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.domNodes),
                        metrics: [
                            {
                                name: 'Nodes',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-dom-nodes', this.element)
                            }
                        ]
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.jsEventListeners),
                        metrics: [
                            {
                                name: 'JSEventListeners',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-js-event-listeners', this.element)
                            }
                        ]
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.documents),
                        metrics: [
                            {
                                name: 'Documents',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-documents', this.element)
                            }
                        ]
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.documentFrames),
                        metrics: [
                            {
                                name: 'Frames',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-document-frames', this.element)
                            }
                        ]
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.layoutsSec),
                        metrics: [
                            {
                                name: 'LayoutCount',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-layout-count', this.element)
                            }
                        ]
                    }),
                    _object_spread_props(_object_spread({}, defaults), {
                        title: i18nString(UIStrings.styleRecalcsSec),
                        metrics: [
                            {
                                name: 'RecalcStyleCount',
                                color: themeSupport.getComputedValue('--override-color-perf-monitor-recalc-style-count', this.element)
                            }
                        ]
                    })
                ];
                // Clear any existing child elements.
                this.element.removeChildren();
                this.indicators = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.chartsInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var chartInfo = _step.value;
                        var chartName = chartInfo.metrics[0].name;
                        var active = this.enabledCharts.has(chartName);
                        var indicator = new MetricIndicator(this.element, chartInfo, active, this.onToggle.bind(this, chartName));
                        indicator.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle().track({
                            click: true,
                            keydown: 'Enter'
                        }).context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(chartName))));
                        this.indicators.set(chartName, indicator);
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
            key: "onToggle",
            value: function onToggle(chartName, active) {
                if (active) {
                    this.enabledCharts.add(chartName);
                } else {
                    this.enabledCharts.delete(chartName);
                }
                this.enabledChartsSetting.set(Array.from(this.enabledCharts));
                this.dispatchEventToListeners("MetricChanged" /* Events.MetricChanged */ );
            }
        },
        {
            key: "charts",
            value: function charts() {
                return this.chartsInfo;
            }
        },
        {
            key: "isActive",
            value: function isActive(metricName) {
                return this.enabledCharts.has(metricName);
            }
        },
        {
            key: "updateMetrics",
            value: function updateMetrics(metrics) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.indicators.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var name = _step.value;
                        var metric = metrics.get(name);
                        if (metric !== undefined) {
                            var indicator = this.indicators.get(name);
                            if (indicator) {
                                indicator.setValue(metric);
                            }
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
            }
        }
    ]);
    return ControlPane;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var numberFormatter;
var percentFormatter;
var MetricIndicator = /*#__PURE__*/ function() {
    "use strict";
    function MetricIndicator(parent, info, active, onToggle) {
        var _this = this;
        _class_call_check(this, MetricIndicator);
        _define_property(this, "info", void 0);
        _define_property(this, "element", void 0);
        _define_property(this, "swatchElement", void 0);
        _define_property(this, "valueElement", void 0);
        _define_property(this, "color", void 0);
        this.color = info.color || info.metrics[0].color;
        this.info = info;
        this.element = parent.createChild('div', 'perfmon-indicator');
        var chartName = info.metrics[0].name;
        this.swatchElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(info.title, active, undefined, chartName);
        this.element.appendChild(this.swatchElement);
        this.swatchElement.checkboxElement.addEventListener('change', function() {
            onToggle(_this.swatchElement.checkboxElement.checked);
            _this.element.classList.toggle('active');
        });
        this.valueElement = this.element.createChild('div', 'perfmon-indicator-value');
        this.valueElement.style.color = this.color;
        this.element.classList.toggle('active', active);
    }
    _create_class(MetricIndicator, [
        {
            key: "setValue",
            value: function setValue(value) {
                this.valueElement.textContent = MetricIndicator.formatNumber(value, this.info);
            }
        }
    ], [
        {
            key: "formatNumber",
            value: function formatNumber(value, info) {
                if (!numberFormatter) {
                    numberFormatter = new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: 1
                    });
                    percentFormatter = new Intl.NumberFormat('en-US', {
                        maximumFractionDigits: 1,
                        style: 'percent'
                    });
                }
                switch(info.format){
                    case "Percent" /* Format.Percent */ :
                        return percentFormatter.format(value);
                    case "Bytes" /* Format.Bytes */ :
                        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(value);
                    default:
                        return numberFormatter.format(value);
                }
            }
        }
    ]);
    return MetricIndicator;
}();
var format = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1
}); //# sourceMappingURL=PerformanceMonitor.js.map


}),
"./panels/performance_monitor/performanceMonitor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.perfmon-pane {\n  overflow: hidden;\n\n  --override-color-perf-monitor-cpu: var(--sys-color-yellow-bright);\n  --override-color-perf-monitor-cpu-task-duration: var(--sys-color-neutral-bright);\n  --override-color-perf-monitor-cpu-script-duration: var(--sys-color-yellow-bright);\n  --override-color-perf-monitor-cpu-layout-duration: var(--sys-color-purple);\n  --override-color-perf-monitor-cpu-recalc-style-duration: var(--sys-color-purple-bright);\n  --override-color-perf-monitor-jsheap: var(--sys-color-purple-bright);\n  --override-color-perf-monitor-jsheap-total-size: var(--ref-palette-purple70);\n  --override-color-perf-monitor-jsheap-used-size: var(--sys-color-purple-bright);\n  --override-color-perf-monitor-dom-nodes: var(--sys-color-green);\n  --override-color-perf-monitor-js-event-listeners: var(--ref-palette-green80);\n  --override-color-perf-monitor-documents: var(--sys-color-blue);\n  --override-color-perf-monitor-document-frames: var(--sys-color-cyan-bright);\n  --override-color-perf-monitor-layout-count: var(--sys-color-pink-bright);\n  --override-color-perf-monitor-recalc-style-count: var(--sys-color-pink);\n}\n\n:host-context(.theme-with-dark-background) .perfmon-pane {\n  --override-color-perf-monitor-jsheap-total-size: var(--ref-palette-purple50);\n  --override-color-perf-monitor-js-event-listeners: var(--ref-palette-green50);\n}\n\n.perfmon-pane.suspended {\n  opacity: 40%;\n  pointer-events: none;\n}\n\n.perfmon-pane .perfmon-chart-suspend-overlay {\n  display: none;\n  font-size: 26px;\n  align-items: center;\n  justify-content: center;\n}\n\n.perfmon-pane.suspended .perfmon-chart-suspend-overlay {\n  display: flex;\n}\n\n.perfmon-control-pane {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.perfmon-chart-container {\n  display: flex;\n  flex: 1 1;\n  border-left: 1px solid var(--sys-color-divider);\n  overflow-y: auto;\n}\n\n.perfmon-chart-container canvas {\n  width: 100%;\n}\n\n.perfmon-indicator {\n  padding: 3px 9px;\n  margin: -1px 0;\n  display: flex;\n  flex-shrink: 0;\n  width: 210px;\n}\n\n.perfmon-indicator span {\n  flex: 0 0 135px;\n}\n\n.perfmon-indicator-value {\n  flex: 0 0 55px;\n  text-align: right;\n  overflow: visible;\n}\n\n.perfmon-indicator:not(.active) .perfmon-indicator-value {\n  opacity: 0%;\n}\n\n/*# sourceURL=performanceMonitor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);