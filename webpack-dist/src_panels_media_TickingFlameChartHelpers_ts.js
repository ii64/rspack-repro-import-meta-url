"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_media_TickingFlameChartHelpers_ts"],{

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