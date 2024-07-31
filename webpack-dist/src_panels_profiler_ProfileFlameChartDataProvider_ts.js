"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_ProfileFlameChartDataProvider_ts"],{

/***/ "./src/panels/profiler/ProfileFlameChartDataProvider.ts":
/*!**************************************************************!*\
  !*** ./src/panels/profiler/ProfileFlameChartDataProvider.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewCalculator: () => (/* binding */ OverviewCalculator),
/* harmony export */   OverviewPane: () => (/* binding */ OverviewPane),
/* harmony export */   OverviewPaneEvents: () => (/* binding */ OverviewPaneEvents),
/* harmony export */   ProfileFlameChart: () => (/* binding */ ProfileFlameChart),
/* harmony export */   ProfileFlameChartDataProvider: () => (/* binding */ ProfileFlameChartDataProvider)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProfileFlameChartDataProvider_font;





let colorGeneratorInstance = null;
class ProfileFlameChartDataProvider {
    constructor() {
        Object.defineProperty(this, "colorGeneratorInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maxStackDepthInternal", {
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
        Object.defineProperty(this, "entryNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ProfileFlameChartDataProvider_font.set(this, void 0);
        Object.defineProperty(this, "boldFont", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.colorGeneratorInternal = ProfileFlameChartDataProvider.colorGenerator();
        this.maxStackDepthInternal = 0;
        this.timelineDataInternal = null;
        this.entryNodes = [];
        __classPrivateFieldSet(this, _ProfileFlameChartDataProvider_font, `${_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.Font.DEFAULT_FONT_SIZE} ${_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.Font.getFontFamilyForCanvas()}`, "f");
    }
    static colorGenerator() {
        if (!colorGeneratorInstance) {
            colorGeneratorInstance = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Generator({ min: 30, max: 330, count: undefined }, { min: 50, max: 80, count: 5 }, { min: 80, max: 90, count: 3 });
            colorGeneratorInstance.setColorForID('(idle)', 'hsl(0, 0%, 94%)');
            colorGeneratorInstance.setColorForID('(program)', 'hsl(0, 0%, 80%)');
            colorGeneratorInstance.setColorForID('(garbage collector)', 'hsl(0, 0%, 80%)');
        }
        return colorGeneratorInstance;
    }
    minimumBoundary() {
        throw 'Not implemented.';
    }
    totalTime() {
        throw 'Not implemented.';
    }
    formatValue(value, precision) {
        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.preciseMillisToString(value, precision);
    }
    maxStackDepth() {
        return this.maxStackDepthInternal;
    }
    hasTrackConfigurationMode() {
        return false;
    }
    timelineData() {
        return this.timelineDataInternal || this.calculateTimelineData();
    }
    calculateTimelineData() {
        throw 'Not implemented.';
    }
    prepareHighlightedEntryInfo(_entryIndex) {
        throw 'Not implemented.';
    }
    canJumpToEntry(entryIndex) {
        return this.entryNodes[entryIndex].scriptId !== '0';
    }
    entryTitle(entryIndex) {
        const node = this.entryNodes[entryIndex];
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.beautifyFunctionName(node.functionName);
    }
    entryFont(entryIndex) {
        const boldFont = 'bold ' + __classPrivateFieldGet(this, _ProfileFlameChartDataProvider_font, "f");
        return this.entryHasDeoptReason(entryIndex) ? boldFont : __classPrivateFieldGet(this, _ProfileFlameChartDataProvider_font, "f");
    }
    entryHasDeoptReason(_entryIndex) {
        throw 'Not implemented.';
    }
    entryColor(entryIndex) {
        const node = this.entryNodes[entryIndex];
        // For idle and program, we want different 'shades of gray', so we fallback to functionName as scriptId = 0
        // For rest of nodes e.g eval scripts, if url is empty then scriptId will be guaranteed to be non-zero
        return this.colorGeneratorInternal.colorForID(node.url || (node.scriptId !== '0' ? node.scriptId : node.functionName));
    }
    decorateEntry(_entryIndex, _context, _text, _barX, _barY, _barWidth, _barHeight) {
        return false;
    }
    forceDecoration(_entryIndex) {
        return false;
    }
    textColor(_entryIndex) {
        return '#333';
    }
    entryNodesLength() {
        return this.entryNodes.length;
    }
}
_ProfileFlameChartDataProvider_font = new WeakMap();
class ProfileFlameChart extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox) {
    constructor(searchableView, dataProvider) {
        super();
        Object.defineProperty(this, "searchableView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "entrySelected", {
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
        Object.defineProperty(this, "searchResults", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "searchResultIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        this.element.id = 'cpu-flame-chart';
        this.searchableView = searchableView;
        this.overviewPane = new OverviewPane(dataProvider);
        this.overviewPane.show(this.element);
        this.mainPane = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.FlameChart(dataProvider, this.overviewPane);
        this.mainPane.setBarHeight(15);
        this.mainPane.setTextBaseline(4);
        this.mainPane.setTextPadding(2);
        this.mainPane.show(this.element);
        this.mainPane.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.Events.EntrySelected, this.onEntrySelected, this);
        this.mainPane.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.Events.EntryInvoked, this.onEntryInvoked, this);
        this.entrySelected = false;
        this.mainPane.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.Events.CanvasFocused, this.onEntrySelected, this);
        this.overviewPane.addEventListener(OverviewPaneEvents.WindowChanged, this.onWindowChanged, this);
        this.dataProvider = dataProvider;
        this.searchResults = [];
    }
    focus() {
        this.mainPane.focus();
    }
    onWindowChanged(event) {
        const { windowTimeLeft: windowLeft, windowTimeRight: windowRight } = event.data;
        this.mainPane.setWindowTimes(windowLeft, windowRight, /* animate */ true);
    }
    selectRange(timeLeft, timeRight) {
        this.overviewPane.selectRange(timeLeft, timeRight);
    }
    onEntrySelected(event) {
        if (event.data) {
            const eventIndex = event.data;
            this.mainPane.setSelectedEntry(eventIndex);
            if (eventIndex === -1) {
                this.entrySelected = false;
            }
            else {
                this.entrySelected = true;
            }
        }
        else if (!this.entrySelected) {
            this.mainPane.setSelectedEntry(0);
            this.entrySelected = true;
        }
    }
    onEntryInvoked(event) {
        this.onEntrySelected(event);
        this.dispatchEventToListeners(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.Events.EntryInvoked, event.data);
    }
    update() {
        this.overviewPane.update();
        this.mainPane.update();
    }
    performSearch(searchConfig, _shouldJump, jumpBackwards) {
        const matcher = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.createPlainTextSearchRegex(searchConfig.query, searchConfig.caseSensitive ? '' : 'i');
        const selectedEntryIndex = this.searchResultIndex !== -1 ? this.searchResults[this.searchResultIndex] : -1;
        this.searchResults = [];
        const entriesCount = this.dataProvider.entryNodesLength();
        for (let index = 0; index < entriesCount; ++index) {
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
        }
        else {
            this.onSearchCanceled();
        }
        this.searchableView.updateSearchMatchesCount(this.searchResults.length);
        this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
    }
    onSearchCanceled() {
        this.mainPane.setSelectedEntry(-1);
        this.searchResults = [];
        this.searchResultIndex = -1;
    }
    jumpToNextSearchResult() {
        this.searchResultIndex = (this.searchResultIndex + 1) % this.searchResults.length;
        this.mainPane.setSelectedEntry(this.searchResults[this.searchResultIndex]);
        this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
    }
    jumpToPreviousSearchResult() {
        this.searchResultIndex = (this.searchResultIndex - 1 + this.searchResults.length) % this.searchResults.length;
        this.mainPane.setSelectedEntry(this.searchResults[this.searchResultIndex]);
        this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
    }
    supportsCaseSensitiveSearch() {
        return true;
    }
    supportsRegexSearch() {
        return false;
    }
}
class OverviewCalculator {
    constructor(formatter) {
        Object.defineProperty(this, "formatter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "minimumBoundaries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "maximumBoundaries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xScaleFactor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.formatter = formatter;
    }
    updateBoundaries(overviewPane) {
        this.minimumBoundaries = overviewPane.dataProvider.minimumBoundary();
        const totalTime = overviewPane.dataProvider.totalTime();
        this.maximumBoundaries = this.minimumBoundaries + totalTime;
        this.xScaleFactor = overviewPane.overviewContainer.clientWidth / totalTime;
    }
    computePosition(time) {
        return (time - this.minimumBoundaries) * this.xScaleFactor;
    }
    formatValue(value, precision) {
        return this.formatter(value - this.minimumBoundaries, precision);
    }
    maximumBoundary() {
        return this.maximumBoundaries;
    }
    minimumBoundary() {
        return this.minimumBoundaries;
    }
    zeroTime() {
        return this.minimumBoundaries;
    }
    boundarySpan() {
        return this.maximumBoundaries - this.minimumBoundaries;
    }
}
class OverviewPane extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox) {
    constructor(dataProvider) {
        super();
        Object.defineProperty(this, "overviewContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewCalculator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewCanvas", {
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
        Object.defineProperty(this, "windowTimeLeft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "windowTimeRight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateTimerId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('cpu-profile-flame-chart-overview-pane');
        this.overviewContainer = this.element.createChild('div', 'cpu-profile-flame-chart-overview-container');
        this.overviewCalculator = new OverviewCalculator(dataProvider.formatValue);
        this.overviewGrid = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.OverviewGrid('cpu-profile-flame-chart', this.overviewCalculator);
        this.overviewGrid.element.classList.add('fill');
        this.overviewCanvas =
            this.overviewContainer.createChild('canvas', 'cpu-profile-flame-chart-overview-canvas');
        this.overviewContainer.appendChild(this.overviewGrid.element);
        this.dataProvider = dataProvider;
        this.overviewGrid.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.Events.WindowChangedWithPosition, this.onWindowChanged, this);
    }
    windowChanged(windowStartTime, windowEndTime) {
        this.selectRange(windowStartTime, windowEndTime);
    }
    updateRangeSelection(_startTime, _endTime) {
    }
    updateSelectedGroup(_flameChart, _group) {
    }
    selectRange(timeLeft, timeRight) {
        const startTime = this.dataProvider.minimumBoundary();
        const totalTime = this.dataProvider.totalTime();
        this.overviewGrid.setWindow((timeLeft - startTime) / totalTime, (timeRight - startTime) / totalTime);
    }
    onWindowChanged(event) {
        const windowPosition = { windowTimeLeft: event.data.rawStartValue, windowTimeRight: event.data.rawEndValue };
        this.windowTimeLeft = windowPosition.windowTimeLeft;
        this.windowTimeRight = windowPosition.windowTimeRight;
        this.dispatchEventToListeners(OverviewPaneEvents.WindowChanged, windowPosition);
    }
    timelineData() {
        return this.dataProvider.timelineData();
    }
    onResize() {
        this.scheduleUpdate();
    }
    scheduleUpdate() {
        if (this.updateTimerId) {
            return;
        }
        this.updateTimerId = this.element.window().requestAnimationFrame(this.update.bind(this));
    }
    update() {
        this.updateTimerId = 0;
        const timelineData = this.timelineData();
        if (!timelineData) {
            return;
        }
        this.resetCanvas(this.overviewContainer.clientWidth, this.overviewContainer.clientHeight - _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.FlameChart.RulerHeight);
        this.overviewCalculator.updateBoundaries(this);
        this.overviewGrid.updateDividers(this.overviewCalculator);
        this.drawOverviewCanvas();
    }
    drawOverviewCanvas() {
        const canvasWidth = this.overviewCanvas.width;
        const canvasHeight = this.overviewCanvas.height;
        const drawData = this.calculateDrawData(canvasWidth);
        const context = this.overviewCanvas.getContext('2d');
        if (!context) {
            throw new Error('Failed to get canvas context');
        }
        const ratio = window.devicePixelRatio;
        const offsetFromBottom = ratio;
        const lineWidth = 1;
        const yScaleFactor = canvasHeight / (this.dataProvider.maxStackDepth() * 1.1);
        context.lineWidth = lineWidth;
        context.translate(0.5, 0.5);
        context.strokeStyle = 'rgba(20,0,0,0.4)';
        context.fillStyle = 'rgba(214,225,254,0.8)';
        context.moveTo(-lineWidth, canvasHeight + lineWidth);
        context.lineTo(-lineWidth, Math.round(canvasHeight - drawData[0] * yScaleFactor - offsetFromBottom));
        let value = 0;
        for (let x = 0; x < canvasWidth; ++x) {
            value = Math.round(canvasHeight - drawData[x] * yScaleFactor - offsetFromBottom);
            context.lineTo(x, value);
        }
        context.lineTo(canvasWidth + lineWidth, value);
        context.lineTo(canvasWidth + lineWidth, canvasHeight + lineWidth);
        context.fill();
        context.stroke();
        context.closePath();
    }
    calculateDrawData(width) {
        const dataProvider = this.dataProvider;
        const timelineData = this.timelineData();
        const entryStartTimes = timelineData.entryStartTimes;
        const entryTotalTimes = timelineData.entryTotalTimes;
        const entryLevels = timelineData.entryLevels;
        const length = entryStartTimes.length;
        const minimumBoundary = this.dataProvider.minimumBoundary();
        const drawData = new Uint8Array(width);
        const scaleFactor = width / dataProvider.totalTime();
        for (let entryIndex = 0; entryIndex < length; ++entryIndex) {
            const start = Math.floor((entryStartTimes[entryIndex] - minimumBoundary) * scaleFactor);
            const finish = Math.floor((entryStartTimes[entryIndex] - minimumBoundary + entryTotalTimes[entryIndex]) * scaleFactor);
            for (let x = start; x <= finish; ++x) {
                drawData[x] = Math.max(drawData[x], entryLevels[entryIndex] + 1);
            }
        }
        return drawData;
    }
    resetCanvas(width, height) {
        const ratio = window.devicePixelRatio;
        this.overviewCanvas.width = width * ratio;
        this.overviewCanvas.height = height * ratio;
        this.overviewCanvas.style.width = width + 'px';
        this.overviewCanvas.style.height = height + 'px';
    }
}
var OverviewPaneEvents;
(function (OverviewPaneEvents) {
    OverviewPaneEvents["WindowChanged"] = "WindowChanged";
})(OverviewPaneEvents || (OverviewPaneEvents = {}));


/***/ })

}]);