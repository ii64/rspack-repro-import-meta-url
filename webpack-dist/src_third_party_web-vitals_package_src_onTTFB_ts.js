"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_src_onTTFB_ts"],{

/***/ "./src/third_party/web-vitals/package/src/lib/bfcache.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/bfcache.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBFCacheRestoreTime: () => (/* binding */ getBFCacheRestoreTime),
/* harmony export */   onBFCacheRestore: () => (/* binding */ onBFCacheRestore)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let bfcacheRestoreTime = -1;
const getBFCacheRestoreTime = () => bfcacheRestoreTime;
const onBFCacheRestore = (cb) => {
    addEventListener('pageshow', (event) => {
        if (event.persisted) {
            bfcacheRestoreTime = event.timeStamp;
            cb(event);
        }
    }, true);
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/bindReporter.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindReporter: () => (/* binding */ bindReporter)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getRating = (value, thresholds) => {
    if (value > thresholds[1]) {
        return 'poor';
    }
    if (value > thresholds[0]) {
        return 'needs-improvement';
    }
    return 'good';
};
const bindReporter = (callback, metric, thresholds, reportAllChanges) => {
    let prevValue;
    let delta;
    return (forceReport) => {
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                delta = metric.value - (prevValue || 0);
                // Report the metric if there's a non-zero delta or if no previous
                // value exists (which can happen in the case of the document becoming
                // hidden when the metric value is 0).
                // See: https://github.com/GoogleChrome/web-vitals/issues/14
                if (delta || prevValue === undefined) {
                    prevValue = metric.value;
                    metric.delta = delta;
                    metric.rating = getRating(metric.value, thresholds);
                    callback(metric);
                }
            }
        }
    };
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/generateUniqueID.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/generateUniqueID.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueID: () => (/* binding */ generateUniqueID)
/* harmony export */ });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
const generateUniqueID = () => {
    return `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/getActivationStart.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/getActivationStart.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActivationStart: () => (/* binding */ getActivationStart)
/* harmony export */ });
/* harmony import */ var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./src/third_party/web-vitals/package/src/lib/getNavigationEntry.ts");
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getActivationStart = () => {
    const navEntry = (0,_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__.getNavigationEntry)();
    return (navEntry && navEntry.activationStart) || 0;
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/getNavigationEntry.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/getNavigationEntry.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNavigationEntry: () => (/* binding */ getNavigationEntry)
/* harmony export */ });
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getNavigationEntry = () => {
    const navigationEntry = self.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType('navigation')[0];
    // Check to ensure the `responseStart` property is present and valid.
    // In some cases no value is reported by the browser (for
    // privacy/security reasons), and in other cases (bugs) the value is
    // negative or is larger than the current page time. Ignore these cases:
    // https://github.com/GoogleChrome/web-vitals/issues/137
    // https://github.com/GoogleChrome/web-vitals/issues/162
    // https://github.com/GoogleChrome/web-vitals/issues/275
    if (navigationEntry &&
        navigationEntry.responseStart > 0 &&
        navigationEntry.responseStart < performance.now()) {
        return navigationEntry;
    }
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/initMetric.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/initMetric.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMetric: () => (/* binding */ initMetric)
/* harmony export */ });
/* harmony import */ var _bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUniqueID.js */ "./src/third_party/web-vitals/package/src/lib/generateUniqueID.ts");
/* harmony import */ var _getActivationStart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getActivationStart.js */ "./src/third_party/web-vitals/package/src/lib/getActivationStart.ts");
/* harmony import */ var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./src/third_party/web-vitals/package/src/lib/getNavigationEntry.ts");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const initMetric = (name, value) => {
    const navEntry = (0,_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__.getNavigationEntry)();
    let navigationType = 'navigate';
    if ((0,_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.getBFCacheRestoreTime)() >= 0) {
        navigationType = 'back-forward-cache';
    }
    else if (navEntry) {
        if (document.prerendering || (0,_getActivationStart_js__WEBPACK_IMPORTED_MODULE_2__.getActivationStart)() > 0) {
            navigationType = 'prerender';
        }
        else if (document.wasDiscarded) {
            navigationType = 'restore';
        }
        else if (navEntry.type) {
            navigationType = navEntry.type.replace(/_/g, '-');
        }
    }
    // Use `entries` type specific for the metric.
    const entries = [];
    return {
        name,
        value: typeof value === 'undefined' ? -1 : value,
        rating: 'good', // If needed, will be updated when reported. `const` to keep the type from widening to `string`.
        delta: 0,
        entries,
        id: (0,_generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__.generateUniqueID)(),
        navigationType,
    };
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/whenActivated.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/whenActivated.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   whenActivated: () => (/* binding */ whenActivated)
/* harmony export */ });
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const whenActivated = (callback) => {
    if (document.prerendering) {
        addEventListener('prerenderingchange', () => callback(), true);
    }
    else {
        callback();
    }
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/onTTFB.ts":
/*!**********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/onTTFB.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTFBThresholds: () => (/* binding */ TTFBThresholds),
/* harmony export */   onTTFB: () => (/* binding */ onTTFB)
/* harmony export */ });
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/src/lib/initMetric.ts");
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getNavigationEntry.js */ "./src/third_party/web-vitals/package/src/lib/getNavigationEntry.ts");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./src/third_party/web-vitals/package/src/lib/getActivationStart.ts");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./src/third_party/web-vitals/package/src/lib/whenActivated.ts");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/** Thresholds for TTFB. See https://web.dev/articles/ttfb#what_is_a_good_ttfb_score */
const TTFBThresholds = [800, 1800];
/**
 * Runs in the next task after the page is done loading and/or prerendering.
 * @param callback
 */
const whenReady = (callback) => {
    if (document.prerendering) {
        (0,_lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_5__.whenActivated)(() => whenReady(callback));
    }
    else if (document.readyState !== 'complete') {
        addEventListener('load', () => whenReady(callback), true);
    }
    else {
        // Queue a task so the callback runs after `loadEventEnd`.
        setTimeout(callback, 0);
    }
};
/**
 * Calculates the [TTFB](https://web.dev/articles/ttfb) value for the
 * current page and calls the `callback` function once the page has loaded,
 * along with the relevant `navigation` performance entry used to determine the
 * value. The reported value is a `DOMHighResTimeStamp`.
 *
 * Note, this function waits until after the page is loaded to call `callback`
 * in order to ensure all properties of the `navigation` entry are populated.
 * This is useful if you want to report on other metrics exposed by the
 * [Navigation Timing API](https://w3c.github.io/navigation-timing/). For
 * example, the TTFB metric starts from the page's [time
 * origin](https://www.w3.org/TR/hr-time-2/#sec-time-origin), which means it
 * includes time spent on DNS lookup, connection negotiation, network latency,
 * and server processing time.
 */
const onTTFB = (onReport, opts) => {
    // Set defaults
    opts = opts || {};
    let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__.initMetric)('TTFB');
    let report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__.bindReporter)(onReport, metric, TTFBThresholds, opts.reportAllChanges);
    whenReady(() => {
        const navigationEntry = (0,_lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__.getNavigationEntry)();
        if (navigationEntry) {
            // The activationStart reference is used because TTFB should be
            // relative to page activation rather than navigation start if the
            // page was prerendered. But in cases where `activationStart` occurs
            // after the first byte is received, this time should be clamped at 0.
            metric.value = Math.max(navigationEntry.responseStart - (0,_lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_4__.getActivationStart)(), 0);
            metric.entries = [navigationEntry];
            report(true);
            // Only report TTFB after bfcache restores if a `navigation` entry
            // was reported for the initial load.
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__.onBFCacheRestore)(() => {
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__.initMetric)('TTFB', 0);
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__.bindReporter)(onReport, metric, TTFBThresholds, opts.reportAllChanges);
                report(true);
            });
        }
    });
};


/***/ })

}]);