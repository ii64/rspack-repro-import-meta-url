"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_HeapTimelineOverview_js"], {
"./panels/profiler/HeapTimelineOverview.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapTimelineOverview: function() { return HeapTimelineOverview; },
  OverviewCalculator: function() { return OverviewCalculator; },
  Samples: function() { return Samples; },
  SmoothScale: function() { return SmoothScale; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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






var HeapTimelineOverview = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(HeapTimelineOverview, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(HeapTimelineOverview);
    function HeapTimelineOverview() {
        _class_call_check(this, HeapTimelineOverview);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "overviewCalculator", void 0);
        _define_property(_assert_this_initialized(_this), "overviewContainer", void 0);
        _define_property(_assert_this_initialized(_this), "overviewGrid", void 0);
        _define_property(_assert_this_initialized(_this), "overviewCanvas", void 0);
        _define_property(_assert_this_initialized(_this), "windowLeft", void 0);
        _define_property(_assert_this_initialized(_this), "windowRight", void 0);
        _define_property(_assert_this_initialized(_this), "yScale", void 0);
        _define_property(_assert_this_initialized(_this), "xScale", void 0);
        _define_property(_assert_this_initialized(_this), "profileSamples", void 0);
        _define_property(_assert_this_initialized(_this), "running", void 0);
        _define_property(_assert_this_initialized(_this), "updateOverviewCanvas", void 0);
        _define_property(_assert_this_initialized(_this), "updateGridTimerId", void 0);
        _define_property(_assert_this_initialized(_this), "updateTimerId", void 0);
        _define_property(_assert_this_initialized(_this), "windowWidth", void 0);
        _this.element.id = 'heap-recording-view';
        _this.element.classList.add('heap-tracking-overview');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('heap-tracking-overview')));
        _this.overviewCalculator = new OverviewCalculator();
        _this.overviewContainer = _this.element.createChild('div', 'heap-overview-container');
        _this.overviewGrid = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.OverviewGrid('heap-recording', _this.overviewCalculator);
        _this.overviewGrid.element.classList.add('fill');
        _this.overviewCanvas = _this.overviewContainer.createChild('canvas', 'heap-recording-overview-canvas');
        _this.overviewContainer.appendChild(_this.overviewGrid.element);
        _this.overviewGrid.addEventListener("WindowChanged" /* PerfUI.OverviewGrid.Events.WindowChanged */ , _this.onWindowChanged, _assert_this_initialized(_this));
        _this.windowLeft = 0.0;
        _this.windowRight = 1.0;
        _this.overviewGrid.setWindow(_this.windowLeft, _this.windowRight);
        _this.yScale = new SmoothScale();
        _this.xScale = new SmoothScale();
        _this.profileSamples = new Samples();
        return _this;
    }
    _create_class(HeapTimelineOverview, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                this.running = true;
                var drawFrame = function() {
                    _this.update();
                    if (_this.running) {
                        _this.element.window().requestAnimationFrame(drawFrame);
                    }
                };
                drawFrame();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.running = false;
            }
        },
        {
            key: "setSamples",
            value: function setSamples(samples) {
                this.profileSamples = samples;
                if (!this.running) {
                    this.update();
                }
            }
        },
        {
            key: "drawOverviewCanvas",
            value: function drawOverviewCanvas(width, height) {
                if (!this.profileSamples) {
                    return;
                }
                var profileSamples = this.profileSamples;
                var sizes = profileSamples.sizes;
                var topSizes = profileSamples.max;
                var timestamps = profileSamples.timestamps;
                var startTime = timestamps[0];
                var scaleFactor = this.xScale.nextScale(width / profileSamples.totalTime);
                var maxSize = 0;
                function aggregateAndCall(sizes, callback) {
                    var size = 0;
                    var currentX = 0;
                    for(var i = 1; i < timestamps.length; ++i){
                        var x = Math.floor((timestamps[i] - startTime) * scaleFactor);
                        if (x !== currentX) {
                            if (size) {
                                callback(currentX, size);
                            }
                            size = 0;
                            currentX = x;
                        }
                        size += sizes[i];
                    }
                    callback(currentX, size);
                }
                function maxSizeCallback(x, size) {
                    maxSize = Math.max(maxSize, size);
                }
                aggregateAndCall(sizes, maxSizeCallback);
                var yScaleFactor = this.yScale.nextScale(maxSize ? height / (maxSize * 1.1) : 0.0);
                this.overviewCanvas.width = width * window.devicePixelRatio;
                this.overviewCanvas.height = height * window.devicePixelRatio;
                this.overviewCanvas.style.width = width + 'px';
                this.overviewCanvas.style.height = height + 'px';
                var maybeContext = this.overviewCanvas.getContext('2d');
                if (!maybeContext) {
                    throw new Error('Failed to get canvas context');
                }
                var context = maybeContext;
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
                if (this.running) {
                    context.beginPath();
                    context.lineWidth = 2;
                    context.strokeStyle = 'rgba(192, 192, 192, 0.6)';
                    var currentX = (Date.now() - startTime) * scaleFactor;
                    context.moveTo(currentX, height - 1);
                    context.lineTo(currentX, 0);
                    context.stroke();
                    context.closePath();
                }
                var gridY = 0;
                var gridValue;
                var gridLabelHeight = 14;
                if (yScaleFactor) {
                    var maxGridValue = (height - gridLabelHeight) / yScaleFactor;
                    // The round value calculation is a bit tricky, because
                    // it has a form k*10^n*1024^m, where k=[1,5], n=[0..3], m is an integer,
                    // e.g. a round value 10KB is 10240 bytes.
                    gridValue = Math.pow(1024, Math.floor(Math.log(maxGridValue) / Math.log(1024)));
                    gridValue *= Math.pow(10, Math.floor(Math.log(maxGridValue / gridValue) / Math.LN10));
                    if (gridValue * 5 <= maxGridValue) {
                        gridValue *= 5;
                    }
                    gridY = Math.round(height - gridValue * yScaleFactor - 0.5) + 0.5;
                    context.beginPath();
                    context.lineWidth = 1;
                    context.strokeStyle = 'rgba(0, 0, 0, 0.2)';
                    context.moveTo(0, gridY);
                    context.lineTo(width, gridY);
                    context.stroke();
                    context.closePath();
                }
                function drawBarCallback(x, size) {
                    context.moveTo(x, height - 1);
                    context.lineTo(x, Math.round(height - size * yScaleFactor - 1));
                }
                context.beginPath();
                context.lineWidth = 2;
                context.strokeStyle = 'rgba(192, 192, 192, 0.6)';
                aggregateAndCall(topSizes, drawBarCallback);
                context.stroke();
                context.closePath();
                context.beginPath();
                context.lineWidth = 2;
                context.strokeStyle = 'rgba(0, 0, 192, 0.8)';
                aggregateAndCall(sizes, drawBarCallback);
                context.stroke();
                context.closePath();
                if (gridValue) {
                    var label = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(gridValue);
                    var labelPadding = 4;
                    var labelX = 0;
                    var labelY = gridY - 0.5;
                    var labelWidth = 2 * labelPadding + context.measureText(label).width;
                    context.beginPath();
                    context.textBaseline = 'bottom';
                    context.font = '10px ' + window.getComputedStyle(this.element, null).getPropertyValue('font-family');
                    context.fillStyle = 'rgba(255, 255, 255, 0.75)';
                    context.fillRect(labelX, labelY - gridLabelHeight, labelWidth, gridLabelHeight);
                    context.fillStyle = 'rgb(64, 64, 64)';
                    context.fillText(label, labelX + labelPadding, labelY);
                    context.fill();
                    context.closePath();
                }
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                this.updateOverviewCanvas = true;
                this.scheduleUpdate();
            }
        },
        {
            key: "onWindowChanged",
            value: function onWindowChanged() {
                if (!this.updateGridTimerId) {
                    this.updateGridTimerId = window.setTimeout(this.updateGrid.bind(this), 10);
                }
            }
        },
        {
            key: "scheduleUpdate",
            value: function scheduleUpdate() {
                if (this.updateTimerId) {
                    return;
                }
                this.updateTimerId = window.setTimeout(this.update.bind(this), 10);
            }
        },
        {
            key: "updateBoundaries",
            value: function updateBoundaries() {
                this.windowLeft = this.overviewGrid.windowLeft();
                this.windowRight = this.overviewGrid.windowRight();
                this.windowWidth = this.windowRight - this.windowLeft;
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateTimerId = null;
                if (!this.isShowing()) {
                    return;
                }
                this.updateBoundaries();
                this.overviewCalculator.updateBoundaries(this);
                this.overviewGrid.updateDividers(this.overviewCalculator);
                this.drawOverviewCanvas(this.overviewContainer.clientWidth, this.overviewContainer.clientHeight - 20);
            }
        },
        {
            key: "updateGrid",
            value: function updateGrid() {
                this.updateGridTimerId = 0;
                this.updateBoundaries();
                var ids = this.profileSamples.ids;
                if (!ids.length) {
                    return;
                }
                var timestamps = this.profileSamples.timestamps;
                var sizes = this.profileSamples.sizes;
                var startTime = timestamps[0];
                var totalTime = this.profileSamples.totalTime;
                var timeLeft = startTime + totalTime * this.windowLeft;
                var timeRight = startTime + totalTime * this.windowRight;
                var minIndex = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.lowerBound(timestamps, timeLeft, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR);
                var maxIndex = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.upperBound(timestamps, timeRight, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR);
                var size = 0;
                for(var i = minIndex; i < maxIndex; ++i){
                    size += sizes[i];
                }
                var minId = minIndex > 0 ? ids[minIndex - 1] : 0;
                var maxId = maxIndex < ids.length ? ids[maxIndex] : Infinity;
                this.dispatchEventToListeners("IdsRangeChanged" /* Events.IdsRangeChanged */ , {
                    minId: minId,
                    maxId: maxId,
                    size: size
                });
            }
        }
    ]);
    return HeapTimelineOverview;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox));
var SmoothScale = /*#__PURE__*/ function() {
    "use strict";
    function SmoothScale() {
        _class_call_check(this, SmoothScale);
        _define_property(this, "lastUpdate", void 0);
        _define_property(this, "currentScale", void 0);
        this.lastUpdate = 0;
        this.currentScale = 0.0;
    }
    _create_class(SmoothScale, [
        {
            key: "nextScale",
            value: function nextScale(target) {
                target = target || this.currentScale;
                if (this.currentScale) {
                    var now = Date.now();
                    var timeDeltaMs = now - this.lastUpdate;
                    this.lastUpdate = now;
                    var maxChangePerSec = 20;
                    var maxChangePerDelta = Math.pow(maxChangePerSec, timeDeltaMs / 1000);
                    var scaleChange = target / this.currentScale;
                    this.currentScale *= _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(scaleChange, 1 / maxChangePerDelta, maxChangePerDelta);
                } else {
                    this.currentScale = target;
                }
                return this.currentScale;
            }
        }
    ]);
    return SmoothScale;
}();
var Samples = function Samples() {
    "use strict";
    _class_call_check(this, Samples);
    _define_property(this, "sizes", void 0);
    _define_property(this, "ids", void 0);
    _define_property(this, "timestamps", void 0);
    _define_property(this, "max", void 0);
    _define_property(this, "totalTime", void 0);
    this.sizes = [];
    this.ids = [];
    this.timestamps = [];
    this.max = [];
    this.totalTime = 30000;
};
var OverviewCalculator = /*#__PURE__*/ function() {
    "use strict";
    function OverviewCalculator() {
        _class_call_check(this, OverviewCalculator);
        _define_property(this, "maximumBoundaries", void 0);
        _define_property(this, "minimumBoundaries", void 0);
        _define_property(this, "xScaleFactor", void 0);
        this.maximumBoundaries = 0;
        this.minimumBoundaries = 0;
        this.xScaleFactor = 0;
    }
    _create_class(OverviewCalculator, [
        {
            key: "updateBoundaries",
            value: function updateBoundaries(chart) {
                this.minimumBoundaries = 0;
                this.maximumBoundaries = chart.profileSamples.totalTime;
                this.xScaleFactor = chart.overviewContainer.clientWidth / this.maximumBoundaries;
            }
        },
        {
            key: "computePosition",
            value: function computePosition(time) {
                return (time - this.minimumBoundaries) * this.xScaleFactor;
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, precision) {
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(value / 1000, Boolean(precision));
            }
        },
        {
            key: "maximumBoundary",
            value: function maximumBoundary() {
                return this.maximumBoundaries;
            }
        },
        {
            key: "minimumBoundary",
            value: function minimumBoundary() {
                return this.minimumBoundaries;
            }
        },
        {
            key: "zeroTime",
            value: function zeroTime() {
                return this.minimumBoundaries;
            }
        },
        {
            key: "boundarySpan",
            value: function boundarySpan() {
                return this.maximumBoundaries - this.minimumBoundaries;
            }
        }
    ]);
    return OverviewCalculator;
} //# sourceMappingURL=HeapTimelineOverview.js.map
();


}),

}]);