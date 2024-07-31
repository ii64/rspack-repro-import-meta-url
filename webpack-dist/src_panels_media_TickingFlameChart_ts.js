"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_media_TickingFlameChart_ts"],{

/***/ "./src/panels/media/TickingFlameChart.ts":
/*!***********************************************!*\
  !*** ./src/panels/media/TickingFlameChart.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColdColorScheme: () => (/* binding */ ColdColorScheme),
/* harmony export */   Event: () => (/* binding */ Event),
/* harmony export */   HotColorScheme: () => (/* binding */ HotColorScheme),
/* harmony export */   TickingFlameChart: () => (/* binding */ TickingFlameChart)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TickingFlameChartHelpers.js */ "./src/panels/media/TickingFlameChartHelpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const defaultFont = '11px ' + _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.fontFamily();
function getGroupDefaultTextColor() {
    return _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--sys-color-on-surface');
}
const DefaultStyle = () => ({
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
    useDecoratorsForOverview: false,
});
const HotColorScheme = ['#ffba08', '#faa307', '#f48c06', '#e85d04', '#dc2f02', '#d00000', '#9d0208'];
const ColdColorScheme = ['#7400b8', '#6930c3', '#5e60ce', '#5390d9', '#4ea8de', '#48bfe3', '#56cfe1', '#64dfdf'];
function calculateFontColor(backgroundColor) {
    const parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(backgroundColor)?.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL);
    // Dark background needs a light font.
    if (parsedColor && parsedColor.l < 0.5) {
        return '#eee';
    }
    return '#444';
}
/**
 * Wrapper class for each event displayed on the timeline.
 */
class Event {
    constructor(timelineData, eventHandlers, eventProperties = { color: undefined, duration: undefined, hoverData: {}, level: 0, name: '', startTime: 0 }) {
        Object.defineProperty(this, "timelineData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setLive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setComplete", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateMaxTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selfIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "colorInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontColorInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hoverData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // These allow the event to privately change it's own data in the timeline.
        this.timelineData = timelineData;
        this.setLive = eventHandlers.setLive;
        this.setComplete = eventHandlers.setComplete;
        this.updateMaxTime = eventHandlers.updateMaxTime;
        // This is the index in the timelineData arrays we should be writing to.
        this.selfIndex = this.timelineData.entryLevels.length;
        this.liveInternal = false;
        // Can't use the dict||or||default syntax, since NaN is a valid expected duration.
        const duration = eventProperties['duration'] === undefined ? 0 : eventProperties['duration'];
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
    /**
     * Render hovertext into the |htmlElement|
     */
    decorate(htmlElement) {
        htmlElement.createChild('span').textContent = `Name: ${this.title}`;
        htmlElement.createChild('br');
        const startTimeReadable = (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(this.startTime, 2);
        if (this.liveInternal) {
            htmlElement.createChild('span').textContent = `Duration: ${startTimeReadable} - LIVE!`;
        }
        else if (!isNaN(this.duration)) {
            const durationReadable = (0,_TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.formatMillisecondsToSeconds)(this.duration + this.startTime, 2);
            htmlElement.createChild('span').textContent = `Duration: ${startTimeReadable} - ${durationReadable}`;
        }
        else {
            htmlElement.createChild('span').textContent = `Time: ${startTimeReadable}`;
        }
    }
    /**
     * set an event to be "live" where it's ended time is always the chart maximum
     * or to be a fixed time.
     * @param {number} time
     */
    set endTime(time) {
        // Setting end time to -1 signals that an event becomes live
        if (time === -1) {
            this.timelineData.entryTotalTimes[this.selfIndex] = this.setLive(this.selfIndex);
            this.liveInternal = true;
        }
        else {
            this.liveInternal = false;
            const duration = time - this.timelineData.entryStartTimes[this.selfIndex];
            this.timelineData.entryTotalTimes[this.selfIndex] = duration;
            this.setComplete(this.selfIndex);
            this.updateMaxTime(time);
        }
    }
    get id() {
        return this.selfIndex;
    }
    set level(level) {
        this.timelineData.entryLevels[this.selfIndex] = level;
    }
    set color(color) {
        this.colorInternal = color;
        this.fontColorInternal = calculateFontColor(this.colorInternal);
    }
    get color() {
        return this.colorInternal;
    }
    get fontColor() {
        return this.fontColorInternal;
    }
    get startTime() {
        // Round it
        return this.timelineData.entryStartTimes[this.selfIndex];
    }
    get duration() {
        return this.timelineData.entryTotalTimes[this.selfIndex];
    }
    get live() {
        return this.liveInternal;
    }
}
class TickingFlameChart extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "intervalTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastTimestamp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "canTickInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ticking", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isShown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bounds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "delegate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chartGroupExpansionSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stoppedPermanently", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // set to update once per second _while the tab is active_
        this.intervalTimer = 0;
        this.lastTimestamp = 0;
        this.canTickInternal = true;
        this.ticking = false;
        this.isShown = false;
        // The max bounds for scroll-out.
        this.bounds = new _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_5__.Bounds(0, 1000, 30000, 1000);
        // Create the data provider with the initial max bounds,
        // as well as a function to attempt bounds updating everywhere.
        this.dataProvider = new TickingFlameChartDataProvider(this.bounds, this.updateMaxTime.bind(this));
        // Delegate doesn't do much for now.
        this.delegate = new TickingFlameChartDelegate();
        // Chart settings.
        this.chartGroupExpansionSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('media-flame-chart-group-expansion', {});
        // Create the chart.
        this.chart =
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration
            // @ts-expect-error
            new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.FlameChart.FlameChart(this.dataProvider, this.delegate, this.chartGroupExpansionSetting);
        // TODO: needs to have support in the delegate for supporting this.
        this.chart.disableRangeSelection();
        // Scrolling should change the current bounds, and repaint the chart.
        this.chart.bindCanvasEvent('wheel', e => {
            this.onScroll(e);
        });
        // Add the chart.
        this.chart.show(this.contentElement);
    }
    /**
     * Add a marker with |properties| at |time|.
     */
    addMarker(properties) {
        properties['duration'] = NaN;
        this.startEvent(properties);
    }
    /**
     * Create an event which will be set to live by default.
     */
    startEvent(properties) {
        // Make sure that an unspecified event gets live duration.
        // Have to check for undefined, since NaN is allowed but evaluates to false.
        if (properties['duration'] === undefined) {
            properties['duration'] = -1;
        }
        const time = properties['startTime'] || 0;
        // Event has to be created before the updateMaxTime call.
        const event = this.dataProvider.startEvent(properties);
        this.updateMaxTime(time);
        return event;
    }
    /**
     * Add a group with |name| that can contain |depth| different tracks.
     */
    addGroup(name, depth) {
        this.dataProvider.addGroup(name, depth);
    }
    updateMaxTime(time) {
        if (this.bounds.pushMaxAtLeastTo(time)) {
            this.updateRender();
        }
    }
    onScroll(e) {
        // TODO: is this a good divisor? does it account for high presicision scroll wheels?
        // low precisision scroll wheels?
        const scrollTickCount = Math.round(e.deltaY / 50);
        const scrollPositionRatio = e.offsetX / e.srcElement.clientWidth;
        if (scrollTickCount > 0) {
            this.bounds.zoomOut(scrollTickCount, scrollPositionRatio);
        }
        else {
            this.bounds.zoomIn(-scrollTickCount, scrollPositionRatio);
        }
        this.updateRender();
    }
    willHide() {
        this.isShown = false;
        if (this.ticking) {
            this.stop();
        }
    }
    wasShown() {
        this.isShown = true;
        if (this.canTickInternal && !this.ticking) {
            this.start();
        }
    }
    set canTick(allowed) {
        this.canTickInternal = allowed;
        if (this.ticking && !allowed) {
            this.stop();
        }
        if (!this.ticking && this.isShown && allowed) {
            this.start();
        }
    }
    start() {
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
    stop(permanently = false) {
        window.clearInterval(this.intervalTimer);
        this.intervalTimer = 0;
        if (permanently) {
            this.stoppedPermanently = true;
        }
        this.ticking = false;
    }
    updateRender() {
        if (this.ticking) {
            const currentTimestamp = Date.now();
            const duration = currentTimestamp - this.lastTimestamp;
            this.lastTimestamp = currentTimestamp;
            this.bounds.addMax(duration);
        }
        this.dataProvider.updateMaxTime(this.bounds);
        this.chart.setWindowTimes(this.bounds.low, this.bounds.high, true);
        this.chart.scheduleUpdate();
    }
}
/**
 * Doesn't do much right now, but can be used in the future for selecting events.
 */
class TickingFlameChartDelegate {
    constructor() {
    }
    windowChanged(_windowStartTime, _windowEndTime, _animate) {
    }
    updateRangeSelection(_startTime, _endTime) {
    }
    updateSelectedGroup(_flameChart, _group) {
    }
}
class TickingFlameChartDataProvider {
    constructor(initialBounds, updateMaxTime) {
        Object.defineProperty(this, "updateMaxTimeHandle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bounds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "liveEvents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timelineDataInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxLevel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    hasTrackConfigurationMode() {
        return false;
    }
    /**
     * Add a group with |name| that can contain |depth| different tracks.
     */
    addGroup(name, depth) {
        if (this.timelineDataInternal.groups) {
            const newGroup = {
                name: name,
                startLevel: this.maxLevel,
                expanded: true,
                selectable: false,
                style: DefaultStyle(),
                track: null,
            };
            this.timelineDataInternal.groups.push(newGroup);
            _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeChangeEvent.eventName, () => {
                newGroup.style.color = getGroupDefaultTextColor();
            });
        }
        this.maxLevel += depth;
    }
    /**
     * Create an event which will be set to live by default.
     */
    startEvent(properties) {
        properties['level'] = properties['level'] || 0;
        if (properties['level'] > this.maxLevel) {
            throw `level ${properties['level']} is above the maximum allowed of ${this.maxLevel}`;
        }
        const event = new Event(this.timelineDataInternal, {
            setLive: this.setLive.bind(this),
            setComplete: this.setComplete.bind(this),
            updateMaxTime: this.updateMaxTimeHandle,
        }, properties);
        this.eventMap.set(event.id, event);
        return event;
    }
    setLive(index) {
        this.liveEvents.add(index);
        return this.bounds.max;
    }
    setComplete(index) {
        this.liveEvents.delete(index);
    }
    updateMaxTime(bounds) {
        this.bounds = bounds;
        for (const eventID of this.liveEvents.entries()) {
            // force recalculation of all live events.
            this.eventMap.get(eventID[0]).endTime = -1;
        }
    }
    maxStackDepth() {
        return this.maxLevel + 1;
    }
    timelineData() {
        return this.timelineDataInternal;
    }
    /** time in milliseconds
     */
    minimumBoundary() {
        return this.bounds.low;
    }
    totalTime() {
        return this.bounds.high;
    }
    entryColor(index) {
        return this.eventMap.get(index).color;
    }
    textColor(index) {
        return this.eventMap.get(index).fontColor;
    }
    entryTitle(index) {
        return this.eventMap.get(index).title;
    }
    entryFont(_index) {
        return defaultFont;
    }
    decorateEntry(_index, _context, _text, _barX, _barY, _barWidth, _barHeight, _unclippedBarX, _timeToPixelRatio) {
        return false;
    }
    forceDecoration(_index) {
        return false;
    }
    prepareHighlightedEntryInfo(index) {
        const element = document.createElement('div');
        this.eventMap.get(index).decorate(element);
        return element;
    }
    formatValue(value, _precision) {
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
    canJumpToEntry(_entryIndex) {
        return false;
    }
}


/***/ }),

/***/ "./src/panels/media/TickingFlameChartHelpers.ts":
/*!******************************************************!*\
  !*** ./src/panels/media/TickingFlameChartHelpers.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounds: () => (/* binding */ Bounds),
/* harmony export */   formatMillisecondsToSeconds: () => (/* binding */ formatMillisecondsToSeconds)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function formatMillisecondsToSeconds(ms, decimalPlaces) {
    const roundPower = Math.pow(10, 3 - decimalPlaces);
    const denominatorPower = Math.pow(10, Math.max(0, decimalPlaces));
    return `${Math.round(ms / roundPower) / denominatorPower} s`;
}
/**
 * Manage the bounding box properties for the ticking flame chart.
 * kept in a separate file for unit testing.
 */
class Bounds {
    constructor(initialLow, initialHigh, maxRange, minRange) {
        Object.defineProperty(this, "minInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lowInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "highInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "minRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.minInternal = initialLow;
        this.maxInternal = initialHigh;
        this.lowInternal = this.minInternal;
        this.highInternal = this.maxInternal;
        this.maxRange = maxRange;
        this.minRange = minRange;
    }
    get low() {
        return this.lowInternal;
    }
    get high() {
        return this.highInternal;
    }
    get min() {
        return this.minInternal;
    }
    get max() {
        return this.maxInternal;
    }
    get range() {
        return this.highInternal - this.lowInternal;
    }
    reassertBounds() {
        let needsAdjustment = true;
        while (needsAdjustment) {
            needsAdjustment = false;
            if (this.range < this.minRange) {
                needsAdjustment = true;
                const delta = (this.minRange - this.range) / 2;
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
    /**
     * zoom out |amount| ticks at position [0, 1] along the current range of the timeline.
     */
    zoomOut(amount, position) {
        const range = this.highInternal - this.lowInternal;
        const growSize = range * Math.pow(1.1, amount) - range;
        const lowEnd = growSize * position;
        const highEnd = growSize - lowEnd;
        this.lowInternal -= lowEnd;
        this.highInternal += highEnd;
        this.reassertBounds();
    }
    /**
     * zoom in |amount| ticks at position [0, 1] along the current range of the timeline.
     */
    zoomIn(amount, position) {
        const range = this.highInternal - this.lowInternal;
        if (this.range <= this.minRange) {
            return;
        }
        const shrinkSize = range - range / Math.pow(1.1, amount);
        const lowEnd = shrinkSize * position;
        const highEnd = shrinkSize - lowEnd;
        this.lowInternal += lowEnd;
        this.highInternal -= highEnd;
        this.reassertBounds();
    }
    /**
     * Add Xms to the max value, and scroll the timeline forward if the end is in sight.
     */
    addMax(amount) {
        const range = this.highInternal - this.lowInternal;
        const isAtHighEnd = this.highInternal === this.maxInternal;
        const isZoomedOut = this.lowInternal === this.minInternal || range >= this.maxRange;
        this.maxInternal += amount;
        if (isAtHighEnd && isZoomedOut) {
            this.highInternal = this.maxInternal;
        }
        this.reassertBounds();
    }
    /**
     * Attempt to push the maximum time up to |time| ms.
     */
    pushMaxAtLeastTo(time) {
        if (this.maxInternal < time) {
            this.addMax(time - this.maxInternal);
            return true;
        }
        return false;
    }
}


/***/ })

}]);