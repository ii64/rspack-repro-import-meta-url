"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileFlameChartDataProvider_js"], {
"./panels/profiler/ProfileFlameChartDataProvider.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OverviewCalculator: function() { return OverviewCalculator; },
  OverviewPane: function() { return OverviewPane; },
  ProfileFlameChart: function() { return ProfileFlameChart; },
  ProfileFlameChartDataProvider: function() { return ProfileFlameChartDataProvider; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/**
 * Copyright (C) 2014 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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





var colorGeneratorInstance = null;
var _font = /*#__PURE__*/ new WeakMap();
var ProfileFlameChartDataProvider = /*#__PURE__*/ function() {
    "use strict";
    function ProfileFlameChartDataProvider() {
        _class_call_check(this, ProfileFlameChartDataProvider);
        _define_property(this, "colorGeneratorInternal", void 0);
        _define_property(this, "maxStackDepthInternal", void 0);
        _define_property(this, "timelineDataInternal", void 0);
        _define_property(this, "entryNodes", void 0);
        _class_private_field_init(this, _font, {
            writable: true,
            value: void 0
        });
        _define_property(this, "boldFont", void 0);
        this.colorGeneratorInternal = ProfileFlameChartDataProvider.colorGenerator();
        this.maxStackDepthInternal = 0;
        this.timelineDataInternal = null;
        this.entryNodes = [];
        _class_private_field_set(this, _font, "".concat(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.Font.DEFAULT_FONT_SIZE, " ").concat(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.Font.getFontFamilyForCanvas()));
    }
    _create_class(ProfileFlameChartDataProvider, [
        {
            key: "minimumBoundary",
            value: function minimumBoundary() {
                throw 'Not implemented.';
            }
        },
        {
            key: "totalTime",
            value: function totalTime() {
                throw 'Not implemented.';
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, precision) {
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(value, precision);
            }
        },
        {
            key: "maxStackDepth",
            value: function maxStackDepth() {
                return this.maxStackDepthInternal;
            }
        },
        {
            key: "hasTrackConfigurationMode",
            value: function hasTrackConfigurationMode() {
                return false;
            }
        },
        {
            key: "timelineData",
            value: function timelineData() {
                return this.timelineDataInternal || this.calculateTimelineData();
            }
        },
        {
            key: "calculateTimelineData",
            value: function calculateTimelineData() {
                throw 'Not implemented.';
            }
        },
        {
            key: "prepareHighlightedEntryInfo",
            value: function prepareHighlightedEntryInfo(_entryIndex) {
                throw 'Not implemented.';
            }
        },
        {
            key: "canJumpToEntry",
            value: function canJumpToEntry(entryIndex) {
                return this.entryNodes[entryIndex].scriptId !== '0';
            }
        },
        {
            key: "entryTitle",
            value: function entryTitle(entryIndex) {
                var node = this.entryNodes[entryIndex];
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.beautifyFunctionName(node.functionName);
            }
        },
        {
            key: "entryFont",
            value: function entryFont(entryIndex) {
                var boldFont = 'bold ' + _class_private_field_get(this, _font);
                return this.entryHasDeoptReason(entryIndex) ? boldFont : _class_private_field_get(this, _font);
            }
        },
        {
            key: "entryHasDeoptReason",
            value: function entryHasDeoptReason(_entryIndex) {
                throw 'Not implemented.';
            }
        },
        {
            key: "entryColor",
            value: function entryColor(entryIndex) {
                var node = this.entryNodes[entryIndex];
                // For idle and program, we want different 'shades of gray', so we fallback to functionName as scriptId = 0
                // For rest of nodes e.g eval scripts, if url is empty then scriptId will be guaranteed to be non-zero
                return this.colorGeneratorInternal.colorForID(node.url || (node.scriptId !== '0' ? node.scriptId : node.functionName));
            }
        },
        {
            key: "decorateEntry",
            value: function decorateEntry(_entryIndex, _context, _text, _barX, _barY, _barWidth, _barHeight) {
                return false;
            }
        },
        {
            key: "forceDecoration",
            value: function forceDecoration(_entryIndex) {
                return false;
            }
        },
        {
            key: "textColor",
            value: function textColor(_entryIndex) {
                return '#333';
            }
        },
        {
            key: "entryNodesLength",
            value: function entryNodesLength() {
                return this.entryNodes.length;
            }
        }
    ], [
        {
            key: "colorGenerator",
            value: function colorGenerator() {
                if (!colorGeneratorInstance) {
                    colorGeneratorInstance = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Generator({
                        min: 30,
                        max: 330,
                        count: undefined
                    }, {
                        min: 50,
                        max: 80,
                        count: 5
                    }, {
                        min: 80,
                        max: 90,
                        count: 3
                    });
                    colorGeneratorInstance.setColorForID('(idle)', 'hsl(0, 0%, 94%)');
                    colorGeneratorInstance.setColorForID('(program)', 'hsl(0, 0%, 80%)');
                    colorGeneratorInstance.setColorForID('(garbage collector)', 'hsl(0, 0%, 80%)');
                }
                return colorGeneratorInstance;
            }
        }
    ]);
    return ProfileFlameChartDataProvider;
}();
var ProfileFlameChart = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(ProfileFlameChart, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(ProfileFlameChart);
    function ProfileFlameChart(searchableView, dataProvider) {
        _class_call_check(this, ProfileFlameChart);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "searchableView", void 0);
        _define_property(_assert_this_initialized(_this), "overviewPane", void 0);
        _define_property(_assert_this_initialized(_this), "mainPane", void 0);
        _define_property(_assert_this_initialized(_this), "entrySelected", void 0);
        _define_property(_assert_this_initialized(_this), "dataProvider", void 0);
        _define_property(_assert_this_initialized(_this), "searchResults", void 0);
        _define_property(_assert_this_initialized(_this), "searchResultIndex", -1);
        _this.element.id = 'cpu-flame-chart';
        _this.searchableView = searchableView;
        _this.overviewPane = new OverviewPane(dataProvider);
        _this.overviewPane.show(_this.element);
        _this.mainPane = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, _this.overviewPane);
        _this.mainPane.setBarHeight(15);
        _this.mainPane.setTextBaseline(4);
        _this.mainPane.setTextPadding(2);
        _this.mainPane.show(_this.element);
        _this.mainPane.addEventListener("EntrySelected" /* PerfUI.FlameChart.Events.EntrySelected */ , _this.onEntrySelected, _assert_this_initialized(_this));
        _this.mainPane.addEventListener("EntryInvoked" /* PerfUI.FlameChart.Events.EntryInvoked */ , _this.onEntryInvoked, _assert_this_initialized(_this));
        _this.entrySelected = false;
        _this.mainPane.addEventListener("CanvasFocused" /* PerfUI.FlameChart.Events.CanvasFocused */ , _this.onEntrySelected, _assert_this_initialized(_this));
        _this.overviewPane.addEventListener("WindowChanged" /* OverviewPaneEvents.WindowChanged */ , _this.onWindowChanged, _assert_this_initialized(_this));
        _this.dataProvider = dataProvider;
        _this.searchResults = [];
        return _this;
    }
    _create_class(ProfileFlameChart, [
        {
            key: "focus",
            value: function focus() {
                this.mainPane.focus();
            }
        },
        {
            key: "onWindowChanged",
            value: function onWindowChanged(event) {
                var _event_data = event.data, windowLeft = _event_data.windowTimeLeft, windowRight = _event_data.windowTimeRight;
                this.mainPane.setWindowTimes(windowLeft, windowRight, /* animate */ true);
            }
        },
        {
            key: "selectRange",
            value: function selectRange(timeLeft, timeRight) {
                this.overviewPane.selectRange(timeLeft, timeRight);
            }
        },
        {
            key: "onEntrySelected",
            value: function onEntrySelected(event) {
                if (event.data) {
                    var eventIndex = event.data;
                    this.mainPane.setSelectedEntry(eventIndex);
                    if (eventIndex === -1) {
                        this.entrySelected = false;
                    } else {
                        this.entrySelected = true;
                    }
                } else if (!this.entrySelected) {
                    this.mainPane.setSelectedEntry(0);
                    this.entrySelected = true;
                }
            }
        },
        {
            key: "onEntryInvoked",
            value: function onEntryInvoked(event) {
                this.onEntrySelected(event);
                this.dispatchEventToListeners("EntryInvoked" /* PerfUI.FlameChart.Events.EntryInvoked */ , event.data);
            }
        },
        {
            key: "update",
            value: function update() {
                this.overviewPane.update();
                this.mainPane.update();
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, _shouldJump, jumpBackwards) {
                var matcher = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.createPlainTextSearchRegex(searchConfig.query, searchConfig.caseSensitive ? '' : 'i');
                var selectedEntryIndex = this.searchResultIndex !== -1 ? this.searchResults[this.searchResultIndex] : -1;
                this.searchResults = [];
                var entriesCount = this.dataProvider.entryNodesLength();
                for(var index = 0; index < entriesCount; ++index){
                    if (this.dataProvider.entryTitle(index).match(matcher)) {
                        this.searchResults.push(index);
                    }
                }
                if (this.searchResults.length) {
                    this.searchResultIndex = this.searchResults.indexOf(selectedEntryIndex);
                    if (this.searchResultIndex === -1) {
                        this.searchResultIndex = jumpBackwards ? this.searchResults.length - 1 : 0;
                    }
                    this.mainPane.setSelectedEntry(this.searchResults[this.searchResultIndex]);
                } else {
                    this.onSearchCanceled();
                }
                this.searchableView.updateSearchMatchesCount(this.searchResults.length);
                this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
            }
        },
        {
            key: "onSearchCanceled",
            value: function onSearchCanceled() {
                this.mainPane.setSelectedEntry(-1);
                this.searchResults = [];
                this.searchResultIndex = -1;
            }
        },
        {
            key: "jumpToNextSearchResult",
            value: function jumpToNextSearchResult() {
                this.searchResultIndex = (this.searchResultIndex + 1) % this.searchResults.length;
                this.mainPane.setSelectedEntry(this.searchResults[this.searchResultIndex]);
                this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
            }
        },
        {
            key: "jumpToPreviousSearchResult",
            value: function jumpToPreviousSearchResult() {
                this.searchResultIndex = (this.searchResultIndex - 1 + this.searchResults.length) % this.searchResults.length;
                this.mainPane.setSelectedEntry(this.searchResults[this.searchResultIndex]);
                this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
            }
        },
        {
            key: "supportsCaseSensitiveSearch",
            value: function supportsCaseSensitiveSearch() {
                return true;
            }
        },
        {
            key: "supportsRegexSearch",
            value: function supportsRegexSearch() {
                return false;
            }
        }
    ]);
    return ProfileFlameChart;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox));
var OverviewCalculator = /*#__PURE__*/ function() {
    "use strict";
    function OverviewCalculator(formatter) {
        _class_call_check(this, OverviewCalculator);
        _define_property(this, "formatter", void 0);
        _define_property(this, "minimumBoundaries", void 0);
        _define_property(this, "maximumBoundaries", void 0);
        _define_property(this, "xScaleFactor", void 0);
        this.formatter = formatter;
    }
    _create_class(OverviewCalculator, [
        {
            key: "updateBoundaries",
            value: function updateBoundaries(overviewPane) {
                this.minimumBoundaries = overviewPane.dataProvider.minimumBoundary();
                var totalTime = overviewPane.dataProvider.totalTime();
                this.maximumBoundaries = this.minimumBoundaries + totalTime;
                this.xScaleFactor = overviewPane.overviewContainer.clientWidth / totalTime;
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
                return this.formatter(value - this.minimumBoundaries, precision);
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
}();
var OverviewPane = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(OverviewPane, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(OverviewPane);
    function OverviewPane(dataProvider) {
        _class_call_check(this, OverviewPane);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "overviewContainer", void 0);
        _define_property(_assert_this_initialized(_this), "overviewCalculator", void 0);
        _define_property(_assert_this_initialized(_this), "overviewGrid", void 0);
        _define_property(_assert_this_initialized(_this), "overviewCanvas", void 0);
        _define_property(_assert_this_initialized(_this), "dataProvider", void 0);
        _define_property(_assert_this_initialized(_this), "windowTimeLeft", void 0);
        _define_property(_assert_this_initialized(_this), "windowTimeRight", void 0);
        _define_property(_assert_this_initialized(_this), "updateTimerId", void 0);
        _this.element.classList.add('cpu-profile-flame-chart-overview-pane');
        _this.overviewContainer = _this.element.createChild('div', 'cpu-profile-flame-chart-overview-container');
        _this.overviewCalculator = new OverviewCalculator(dataProvider.formatValue);
        _this.overviewGrid = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.OverviewGrid('cpu-profile-flame-chart', _this.overviewCalculator);
        _this.overviewGrid.element.classList.add('fill');
        _this.overviewCanvas = _this.overviewContainer.createChild('canvas', 'cpu-profile-flame-chart-overview-canvas');
        _this.overviewContainer.appendChild(_this.overviewGrid.element);
        _this.dataProvider = dataProvider;
        _this.overviewGrid.addEventListener("WindowChangedWithPosition" /* PerfUI.OverviewGrid.Events.WindowChangedWithPosition */ , _this.onWindowChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(OverviewPane, [
        {
            key: "windowChanged",
            value: function windowChanged(windowStartTime, windowEndTime) {
                this.selectRange(windowStartTime, windowEndTime);
            }
        },
        {
            key: "updateRangeSelection",
            value: function updateRangeSelection(_startTime, _endTime) {}
        },
        {
            key: "updateSelectedGroup",
            value: function updateSelectedGroup(_flameChart, _group) {}
        },
        {
            key: "selectRange",
            value: function selectRange(timeLeft, timeRight) {
                var startTime = this.dataProvider.minimumBoundary();
                var totalTime = this.dataProvider.totalTime();
                this.overviewGrid.setWindow((timeLeft - startTime) / totalTime, (timeRight - startTime) / totalTime);
            }
        },
        {
            key: "onWindowChanged",
            value: function onWindowChanged(event) {
                var windowPosition = {
                    windowTimeLeft: event.data.rawStartValue,
                    windowTimeRight: event.data.rawEndValue
                };
                this.windowTimeLeft = windowPosition.windowTimeLeft;
                this.windowTimeRight = windowPosition.windowTimeRight;
                this.dispatchEventToListeners("WindowChanged" /* OverviewPaneEvents.WindowChanged */ , windowPosition);
            }
        },
        {
            key: "timelineData",
            value: function timelineData() {
                return this.dataProvider.timelineData();
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                this.scheduleUpdate();
            }
        },
        {
            key: "scheduleUpdate",
            value: function scheduleUpdate() {
                if (this.updateTimerId) {
                    return;
                }
                this.updateTimerId = this.element.window().requestAnimationFrame(this.update.bind(this));
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateTimerId = 0;
                var timelineData = this.timelineData();
                if (!timelineData) {
                    return;
                }
                this.resetCanvas(this.overviewContainer.clientWidth, this.overviewContainer.clientHeight - _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.RulerHeight);
                this.overviewCalculator.updateBoundaries(this);
                this.overviewGrid.updateDividers(this.overviewCalculator);
                this.drawOverviewCanvas();
            }
        },
        {
            key: "drawOverviewCanvas",
            value: function drawOverviewCanvas() {
                var canvasWidth = this.overviewCanvas.width;
                var canvasHeight = this.overviewCanvas.height;
                var drawData = this.calculateDrawData(canvasWidth);
                var context = this.overviewCanvas.getContext('2d');
                if (!context) {
                    throw new Error('Failed to get canvas context');
                }
                var ratio = window.devicePixelRatio;
                var offsetFromBottom = ratio;
                var lineWidth = 1;
                var yScaleFactor = canvasHeight / (this.dataProvider.maxStackDepth() * 1.1);
                context.lineWidth = lineWidth;
                context.translate(0.5, 0.5);
                context.strokeStyle = 'rgba(20,0,0,0.4)';
                context.fillStyle = 'rgba(214,225,254,0.8)';
                context.moveTo(-lineWidth, canvasHeight + lineWidth);
                context.lineTo(-lineWidth, Math.round(canvasHeight - drawData[0] * yScaleFactor - offsetFromBottom));
                var value = 0;
                for(var x = 0; x < canvasWidth; ++x){
                    value = Math.round(canvasHeight - drawData[x] * yScaleFactor - offsetFromBottom);
                    context.lineTo(x, value);
                }
                context.lineTo(canvasWidth + lineWidth, value);
                context.lineTo(canvasWidth + lineWidth, canvasHeight + lineWidth);
                context.fill();
                context.stroke();
                context.closePath();
            }
        },
        {
            key: "calculateDrawData",
            value: function calculateDrawData(width) {
                var dataProvider = this.dataProvider;
                var timelineData = this.timelineData();
                var entryStartTimes = timelineData.entryStartTimes;
                var entryTotalTimes = timelineData.entryTotalTimes;
                var entryLevels = timelineData.entryLevels;
                var length = entryStartTimes.length;
                var minimumBoundary = this.dataProvider.minimumBoundary();
                var drawData = new Uint8Array(width);
                var scaleFactor = width / dataProvider.totalTime();
                for(var entryIndex = 0; entryIndex < length; ++entryIndex){
                    var start = Math.floor((entryStartTimes[entryIndex] - minimumBoundary) * scaleFactor);
                    var finish = Math.floor((entryStartTimes[entryIndex] - minimumBoundary + entryTotalTimes[entryIndex]) * scaleFactor);
                    for(var x = start; x <= finish; ++x){
                        drawData[x] = Math.max(drawData[x], entryLevels[entryIndex] + 1);
                    }
                }
                return drawData;
            }
        },
        {
            key: "resetCanvas",
            value: function resetCanvas(width, height) {
                var ratio = window.devicePixelRatio;
                this.overviewCanvas.width = width * ratio;
                this.overviewCanvas.height = height * ratio;
                this.overviewCanvas.style.width = width + 'px';
                this.overviewCanvas.style.height = height + 'px';
            }
        }
    ]);
    return OverviewPane;
} //# sourceMappingURL=ProfileFlameChartDataProvider.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox));


}),

}]);