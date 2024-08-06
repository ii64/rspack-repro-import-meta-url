"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_TickingFlameChartHelpers_js"], {
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