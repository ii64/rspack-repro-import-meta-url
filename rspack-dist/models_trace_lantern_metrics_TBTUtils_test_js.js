"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_metrics_TBTUtils_test_js"], {
"./models/trace/lantern/metrics/TBTUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TBTUtils.js */ "./models/trace/lantern/metrics/TBTUtils.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// TODO(crbug.com/348449529): refactor to proper devtools module
// eslint-disable-next-line rulesdir/es_modules_import

describe('TotalBlockingTime utils', function() {
    it('reports 0 when no task is longer than 50ms', function() {
        var events = [
            {
                start: 1000,
                end: 1050,
                duration: 50
            },
            {
                start: 2000,
                end: 2010,
                duration: 10
            }
        ];
        var fcpTimeMs = 500;
        var interactiveTimeMs = 4000;
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)(events, fcpTimeMs, interactiveTimeMs)).to.equal(0);
    });
    it('only looks at tasks within FCP and TTI', function() {
        var events = [
            {
                start: 1000,
                end: 1060,
                duration: 60
            },
            {
                start: 2000,
                end: 2100,
                duration: 100
            },
            {
                start: 2300,
                end: 2450,
                duration: 150
            },
            {
                start: 2600,
                end: 2800,
                duration: 200
            }
        ];
        var fcpTimeMs = 1500;
        var interactiveTimeMs = 2500;
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)(events, fcpTimeMs, interactiveTimeMs)).to.equal(150);
    });
    it('clips before finding blocking regions', function() {
        var fcpTimeMs = 150;
        var interactiveTimeMs = 300;
        var events = [
            // The clipping is done first, so the task becomes [150, 200] after clipping and contributes
            // 0ms of blocking time. This is in contrast to first calculating the blocking region ([100,
            // 200]) and then clipping at FCP (150ms), which yields 50ms blocking time.
            {
                start: 50,
                end: 200,
                duration: 150
            },
            // Similarly, the task is first clipped above to be [240, 300], and then contributes 10ms
            // blocking time.
            {
                start: 240,
                end: 460,
                duration: 120
            }
        ];
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)(events, fcpTimeMs, interactiveTimeMs)).to.equal(10); // 0ms + 10ms.
    });
    // TTI can happen in the middle of a task, for example, if TTI is at FMP which occurs as part
    // of a larger task, or in the lantern case where we use estimate TTI using a different graph
    // from the one used to estimate TBT.
    it('clips properly if TTI falls in the middle of a task', function() {
        var fcpTimeMs = 1000;
        var interactiveTimeMs = 2000;
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 1951,
                end: 2100,
                duration: 149
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(0); // Duration after clipping is 49, which is < 50.
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 1950,
                end: 2100,
                duration: 150
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(0); // Duration after clipping is 50, so time after 50ms is 0ms.
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 1949,
                end: 2100,
                duration: 151
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(1); // Duration after clipping is 51, so time after 50ms is 1ms.
    });
    it('clips properly if FCP falls in the middle of a task', function() {
        var fcpTimeMs = 1000;
        var interactiveTimeMs = 2000;
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 900,
                end: 1049,
                duration: 149
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(0); // Duration after clipping is 49, which is < 50.
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 900,
                end: 1050,
                duration: 150
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(0); // Duration after clipping is 50, so time after 50ms is 0ms.
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)([
            {
                start: 900,
                end: 1051,
                duration: 151
            }
        ], fcpTimeMs, interactiveTimeMs)).to.equal(1); // Duration after clipping is 51, so time after 50ms is 1ms.
    });
    // This can happen in the lantern metric case, where we use the optimistic
    // TTI and pessimistic FCP.
    it('returns 0 if interactiveTime is earlier than FCP', function() {
        var fcpTimeMs = 2050;
        var interactiveTimeMs = 1050;
        var events = [
            {
                start: 500,
                end: 3000,
                duration: 2500
            }
        ];
        expect((0,_TBTUtils_js__WEBPACK_IMPORTED_MODULE_0__.calculateSumOfBlockingTime)(events, fcpTimeMs, interactiveTimeMs)).to.equal(0);
    });
}); //# sourceMappingURL=TBTUtils.test.js.map


}),

}]);