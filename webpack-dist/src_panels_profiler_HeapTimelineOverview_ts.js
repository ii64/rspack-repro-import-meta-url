"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_HeapTimelineOverview_ts"],{

/***/ "./src/panels/profiler/HeapTimelineOverview.ts":
/*!*****************************************************!*\
  !*** ./src/panels/profiler/HeapTimelineOverview.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   HeapTimelineOverview: () => (/* binding */ HeapTimelineOverview),
/* harmony export */   OverviewCalculator: () => (/* binding */ OverviewCalculator),
/* harmony export */   Samples: () => (/* binding */ Samples),
/* harmony export */   SmoothScale: () => (/* binding */ SmoothScale)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./src/ui/legacy/components/perf_ui/perf_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class HeapTimelineOverview extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox) {
    constructor() {
        super();
        Object.defineProperty(this, "overviewCalculator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overviewContainer", {
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
        Object.defineProperty(this, "windowLeft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "windowRight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "yScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "profileSamples", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "running", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateOverviewCanvas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateGridTimerId", {
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
        Object.defineProperty(this, "windowWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.id = 'heap-recording-view';
        this.element.classList.add('heap-tracking-overview');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('heap-tracking-overview')}`);
        this.overviewCalculator = new OverviewCalculator();
        this.overviewContainer = this.element.createChild('div', 'heap-overview-container');
        this.overviewGrid = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.OverviewGrid('heap-recording', this.overviewCalculator);
        this.overviewGrid.element.classList.add('fill');
        this.overviewCanvas =
            this.overviewContainer.createChild('canvas', 'heap-recording-overview-canvas');
        this.overviewContainer.appendChild(this.overviewGrid.element);
        this.overviewGrid.addEventListener(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.OverviewGrid.Events.WindowChanged, this.onWindowChanged, this);
        this.windowLeft = 0.0;
        this.windowRight = 1.0;
        this.overviewGrid.setWindow(this.windowLeft, this.windowRight);
        this.yScale = new SmoothScale();
        this.xScale = new SmoothScale();
        this.profileSamples = new Samples();
    }
    start() {
        this.running = true;
        const drawFrame = () => {
            this.update();
            if (this.running) {
                this.element.window().requestAnimationFrame(drawFrame);
            }
        };
        drawFrame();
    }
    stop() {
        this.running = false;
    }
    setSamples(samples) {
        this.profileSamples = samples;
        if (!this.running) {
            this.update();
        }
    }
    drawOverviewCanvas(width, height) {
        if (!this.profileSamples) {
            return;
        }
        const profileSamples = this.profileSamples;
        const sizes = profileSamples.sizes;
        const topSizes = profileSamples.max;
        const timestamps = profileSamples.timestamps;
        const startTime = timestamps[0];
        const scaleFactor = this.xScale.nextScale(width / profileSamples.totalTime);
        let maxSize = 0;
        function aggregateAndCall(sizes, callback) {
            let size = 0;
            let currentX = 0;
            for (let i = 1; i < timestamps.length; ++i) {
                const x = Math.floor((timestamps[i] - startTime) * scaleFactor);
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
        const yScaleFactor = this.yScale.nextScale(maxSize ? height / (maxSize * 1.1) : 0.0);
        this.overviewCanvas.width = width * window.devicePixelRatio;
        this.overviewCanvas.height = height * window.devicePixelRatio;
        this.overviewCanvas.style.width = width + 'px';
        this.overviewCanvas.style.height = height + 'px';
        const maybeContext = this.overviewCanvas.getContext('2d');
        if (!maybeContext) {
            throw new Error('Failed to get canvas context');
        }
        const context = maybeContext;
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (this.running) {
            context.beginPath();
            context.lineWidth = 2;
            context.strokeStyle = 'rgba(192, 192, 192, 0.6)';
            const currentX = (Date.now() - startTime) * scaleFactor;
            context.moveTo(currentX, height - 1);
            context.lineTo(currentX, 0);
            context.stroke();
            context.closePath();
        }
        let gridY = 0;
        let gridValue;
        const gridLabelHeight = 14;
        if (yScaleFactor) {
            const maxGridValue = (height - gridLabelHeight) / yScaleFactor;
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
            const label = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(gridValue);
            const labelPadding = 4;
            const labelX = 0;
            const labelY = gridY - 0.5;
            const labelWidth = 2 * labelPadding + context.measureText(label).width;
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
    onResize() {
        this.updateOverviewCanvas = true;
        this.scheduleUpdate();
    }
    onWindowChanged() {
        if (!this.updateGridTimerId) {
            this.updateGridTimerId = window.setTimeout(this.updateGrid.bind(this), 10);
        }
    }
    scheduleUpdate() {
        if (this.updateTimerId) {
            return;
        }
        this.updateTimerId = window.setTimeout(this.update.bind(this), 10);
    }
    updateBoundaries() {
        this.windowLeft = this.overviewGrid.windowLeft();
        this.windowRight = this.overviewGrid.windowRight();
        this.windowWidth = this.windowRight - this.windowLeft;
    }
    update() {
        this.updateTimerId = null;
        if (!this.isShowing()) {
            return;
        }
        this.updateBoundaries();
        this.overviewCalculator.updateBoundaries(this);
        this.overviewGrid.updateDividers(this.overviewCalculator);
        this.drawOverviewCanvas(this.overviewContainer.clientWidth, this.overviewContainer.clientHeight - 20);
    }
    updateGrid() {
        this.updateGridTimerId = 0;
        this.updateBoundaries();
        const ids = this.profileSamples.ids;
        if (!ids.length) {
            return;
        }
        const timestamps = this.profileSamples.timestamps;
        const sizes = this.profileSamples.sizes;
        const startTime = timestamps[0];
        const totalTime = this.profileSamples.totalTime;
        const timeLeft = startTime + totalTime * this.windowLeft;
        const timeRight = startTime + totalTime * this.windowRight;
        const minIndex = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.lowerBound(timestamps, timeLeft, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR);
        const maxIndex = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.upperBound(timestamps, timeRight, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.ArrayUtilities.DEFAULT_COMPARATOR);
        let size = 0;
        for (let i = minIndex; i < maxIndex; ++i) {
            size += sizes[i];
        }
        const minId = minIndex > 0 ? ids[minIndex - 1] : 0;
        const maxId = maxIndex < ids.length ? ids[maxIndex] : Infinity;
        this.dispatchEventToListeners(Events.IdsRangeChanged, { minId, maxId, size });
    }
}
var Events;
(function (Events) {
    Events["IdsRangeChanged"] = "IdsRangeChanged";
})(Events || (Events = {}));
class SmoothScale {
    constructor() {
        Object.defineProperty(this, "lastUpdate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentScale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lastUpdate = 0;
        this.currentScale = 0.0;
    }
    nextScale(target) {
        target = target || this.currentScale;
        if (this.currentScale) {
            const now = Date.now();
            const timeDeltaMs = now - this.lastUpdate;
            this.lastUpdate = now;
            const maxChangePerSec = 20;
            const maxChangePerDelta = Math.pow(maxChangePerSec, timeDeltaMs / 1000);
            const scaleChange = target / this.currentScale;
            this.currentScale *= _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(scaleChange, 1 / maxChangePerDelta, maxChangePerDelta);
        }
        else {
            this.currentScale = target;
        }
        return this.currentScale;
    }
}
class Samples {
    constructor() {
        Object.defineProperty(this, "sizes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "timestamps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "max", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sizes = [];
        this.ids = [];
        this.timestamps = [];
        this.max = [];
        this.totalTime = 30000;
    }
}
class OverviewCalculator {
    constructor() {
        Object.defineProperty(this, "maximumBoundaries", {
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
        Object.defineProperty(this, "xScaleFactor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maximumBoundaries = 0;
        this.minimumBoundaries = 0;
        this.xScaleFactor = 0;
    }
    updateBoundaries(chart) {
        this.minimumBoundaries = 0;
        this.maximumBoundaries = chart.profileSamples.totalTime;
        this.xScaleFactor = chart.overviewContainer.clientWidth / this.maximumBoundaries;
    }
    computePosition(time) {
        return (time - this.minimumBoundaries) * this.xScaleFactor;
    }
    formatValue(value, precision) {
        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(value / 1000, Boolean(precision));
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


/***/ })

}]);