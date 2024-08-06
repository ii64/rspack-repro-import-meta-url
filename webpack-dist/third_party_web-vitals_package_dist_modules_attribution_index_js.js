"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_web-vitals_package_dist_modules_attribution_index_js"],{

/***/ "./third_party/web-vitals/package/dist/modules/attribution/deprecated.js":
/*!*******************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/deprecated.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_1__.FIDThresholds),
/* harmony export */   onFID: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID)
/* harmony export */ });
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./third_party/web-vitals/package/dist/modules/attribution/onFID.js");
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onFID.js */ "./third_party/web-vitals/package/dist/modules/onFID.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./third_party/web-vitals/package/dist/modules/types.js");
/*
 * Copyright 2024 Google LLC
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





/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/attribution/index.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_5__.CLSThresholds),
/* harmony export */   FCPThresholds: () => (/* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_6__.FCPThresholds),
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_10__.FIDThresholds),
/* harmony export */   INPThresholds: () => (/* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_7__.INPThresholds),
/* harmony export */   LCPThresholds: () => (/* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_8__.LCPThresholds),
/* harmony export */   TTFBThresholds: () => (/* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_9__.TTFBThresholds),
/* harmony export */   onCLS: () => (/* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_0__.onCLS),
/* harmony export */   onFCP: () => (/* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_1__.onFCP),
/* harmony export */   onFID: () => (/* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_10__.onFID),
/* harmony export */   onINP: () => (/* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_2__.onINP),
/* harmony export */   onLCP: () => (/* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_3__.onLCP),
/* harmony export */   onTTFB: () => (/* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__.onTTFB)
/* harmony export */ });
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onCLS.js */ "./third_party/web-vitals/package/dist/modules/attribution/onCLS.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onFCP.js */ "./third_party/web-vitals/package/dist/modules/attribution/onFCP.js");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onINP.js */ "./third_party/web-vitals/package/dist/modules/attribution/onINP.js");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onLCP.js */ "./third_party/web-vitals/package/dist/modules/attribution/onLCP.js");
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onTTFB.js */ "./third_party/web-vitals/package/dist/modules/attribution/onTTFB.js");
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onCLS.js */ "./third_party/web-vitals/package/dist/modules/onCLS.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../onFCP.js */ "./third_party/web-vitals/package/dist/modules/onFCP.js");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../onINP.js */ "./third_party/web-vitals/package/dist/modules/onINP.js");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../onLCP.js */ "./third_party/web-vitals/package/dist/modules/onLCP.js");
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../onTTFB.js */ "./third_party/web-vitals/package/dist/modules/onTTFB.js");
/* harmony import */ var _deprecated_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deprecated.js */ "./third_party/web-vitals/package/dist/modules/attribution/deprecated.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types.js */ "./third_party/web-vitals/package/dist/modules/types.js");
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














/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/attribution/onFCP.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/onFCP.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onFCP: () => (/* binding */ onFCP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getLoadState.js */ "./third_party/web-vitals/package/dist/modules/lib/getLoadState.js");
/* harmony import */ var _lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../onFCP.js */ "./third_party/web-vitals/package/dist/modules/onFCP.js");
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




const attributeFCP = (metric) => {
    // Use a default object if no other attribution has been set.
    let attribution = {
        timeToFirstByte: 0,
        firstByteToFCP: metric.value,
        loadState: (0,_lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_1__.getLoadState)((0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.getBFCacheRestoreTime)()),
    };
    if (metric.entries.length) {
        const navigationEntry = (0,_lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_2__.getNavigationEntry)();
        const fcpEntry = metric.entries[metric.entries.length - 1];
        if (navigationEntry) {
            const activationStart = navigationEntry.activationStart || 0;
            const ttfb = Math.max(0, navigationEntry.responseStart - activationStart);
            attribution = {
                timeToFirstByte: ttfb,
                firstByteToFCP: metric.value - ttfb,
                loadState: (0,_lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_1__.getLoadState)(metric.entries[0].startTime),
                navigationEntry,
                fcpEntry,
            };
        }
    }
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
};
/**
 * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `paint` performance entry used to determine the value. The reported
 * value is a `DOMHighResTimeStamp`.
 */
const onFCP = (onReport, opts) => {
    (0,_onFCP_js__WEBPACK_IMPORTED_MODULE_3__.onFCP)((metric) => {
        const metricWithAttribution = attributeFCP(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/attribution/onFID.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/onFID.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onFID: () => (/* binding */ onFID)
/* harmony export */ });
/* harmony import */ var _lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getLoadState.js */ "./third_party/web-vitals/package/dist/modules/lib/getLoadState.js");
/* harmony import */ var _lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getSelector.js */ "./third_party/web-vitals/package/dist/modules/lib/getSelector.js");
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../onFID.js */ "./third_party/web-vitals/package/dist/modules/onFID.js");
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



const attributeFID = (metric) => {
    const fidEntry = metric.entries[0];
    const attribution = {
        eventTarget: (0,_lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__.getSelector)(fidEntry.target),
        eventType: fidEntry.name,
        eventTime: fidEntry.startTime,
        eventEntry: fidEntry,
        loadState: (0,_lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__.getLoadState)(fidEntry.startTime),
    };
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
};
/**
 * Calculates the [FID](https://web.dev/articles/fid) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `first-input` performance entry used to determine the value. The
 * reported value is a `DOMHighResTimeStamp`.
 *
 * _**Important:** since FID is only reported after the user interacts with the
 * page, it's possible that it will not be reported for some page loads._
 */
const onFID = (onReport, opts) => {
    (0,_onFID_js__WEBPACK_IMPORTED_MODULE_2__.onFID)((metric) => {
        const metricWithAttribution = attributeFID(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/attribution/onLCP.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/onLCP.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onLCP: () => (/* binding */ onLCP)
/* harmony export */ });
/* harmony import */ var _lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
/* harmony import */ var _lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getSelector.js */ "./third_party/web-vitals/package/dist/modules/lib/getSelector.js");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../onLCP.js */ "./third_party/web-vitals/package/dist/modules/onLCP.js");
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



const attributeLCP = (metric) => {
    // Use a default object if no other attribution has been set.
    let attribution = {
        timeToFirstByte: 0,
        resourceLoadDelay: 0,
        resourceLoadDuration: 0,
        elementRenderDelay: metric.value,
    };
    if (metric.entries.length) {
        const navigationEntry = (0,_lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__.getNavigationEntry)();
        if (navigationEntry) {
            const activationStart = navigationEntry.activationStart || 0;
            const lcpEntry = metric.entries[metric.entries.length - 1];
            const lcpResourceEntry = lcpEntry.url &&
                performance
                    .getEntriesByType('resource')
                    .filter((e) => e.name === lcpEntry.url)[0];
            const ttfb = Math.max(0, navigationEntry.responseStart - activationStart);
            const lcpRequestStart = Math.max(ttfb, 
            // Prefer `requestStart` (if TOA is set), otherwise use `startTime`.
            lcpResourceEntry
                ? (lcpResourceEntry.requestStart || lcpResourceEntry.startTime) -
                    activationStart
                : 0);
            const lcpResponseEnd = Math.max(lcpRequestStart, lcpResourceEntry ? lcpResourceEntry.responseEnd - activationStart : 0);
            const lcpRenderTime = Math.max(lcpResponseEnd, lcpEntry.startTime - activationStart);
            attribution = {
                element: (0,_lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__.getSelector)(lcpEntry.element),
                timeToFirstByte: ttfb,
                resourceLoadDelay: lcpRequestStart - ttfb,
                resourceLoadDuration: lcpResponseEnd - lcpRequestStart,
                elementRenderDelay: lcpRenderTime - lcpResponseEnd,
                navigationEntry,
                lcpEntry,
            };
            // Only attribution the URL and resource entry if they exist.
            if (lcpEntry.url) {
                attribution.url = lcpEntry.url;
            }
            if (lcpResourceEntry) {
                attribution.lcpResourceEntry = lcpResourceEntry;
            }
        }
    }
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
};
/**
 * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called any time a new `largest-contentful-paint`
 * performance entry is dispatched, or once the final value of the metric has
 * been determined.
 */
const onLCP = (onReport, opts) => {
    (0,_onLCP_js__WEBPACK_IMPORTED_MODULE_2__.onLCP)((metric) => {
        const metricWithAttribution = attributeLCP(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/attribution/onTTFB.js":
/*!***************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/onTTFB.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onTTFB: () => (/* binding */ onTTFB)
/* harmony export */ });
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../onTTFB.js */ "./third_party/web-vitals/package/dist/modules/onTTFB.js");
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

const attributeTTFB = (metric) => {
    // Use a default object if no other attribution has been set.
    let attribution = {
        waitingDuration: 0,
        cacheDuration: 0,
        dnsDuration: 0,
        connectionDuration: 0,
        requestDuration: 0,
    };
    if (metric.entries.length) {
        const navigationEntry = metric.entries[0];
        const activationStart = navigationEntry.activationStart || 0;
        // Measure from workerStart or fetchStart so any service worker startup
        // time is included in cacheDuration (which also includes other sw time
        // anyway, that cannot be accurately split out cross-browser).
        const waitEnd = Math.max((navigationEntry.workerStart || navigationEntry.fetchStart) -
            activationStart, 0);
        const dnsStart = Math.max(navigationEntry.domainLookupStart - activationStart, 0);
        const connectStart = Math.max(navigationEntry.connectStart - activationStart, 0);
        const connectEnd = Math.max(navigationEntry.connectEnd - activationStart, 0);
        attribution = {
            waitingDuration: waitEnd,
            cacheDuration: dnsStart - waitEnd,
            // dnsEnd usually equals connectStart but use connectStart over dnsEnd
            // for dnsDuration in case there ever is a gap.
            dnsDuration: connectStart - dnsStart,
            connectionDuration: connectEnd - connectStart,
            // There is often a gap between connectEnd and requestStart. Attribute
            // that to requestDuration so connectionDuration remains 0 for
            // service worker controlled requests were connectStart and connectEnd
            // are the same.
            requestDuration: metric.value - connectEnd,
            navigationEntry: navigationEntry,
        };
    }
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
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
    (0,_onTTFB_js__WEBPACK_IMPORTED_MODULE_0__.onTTFB)((metric) => {
        const metricWithAttribution = attributeTTFB(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/onLCP.js":
/*!**************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/onLCP.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCPThresholds: () => (/* binding */ LCPThresholds),
/* harmony export */   onLCP: () => (/* binding */ onLCP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./third_party/web-vitals/package/dist/modules/lib/bindReporter.js");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./third_party/web-vitals/package/dist/modules/lib/doubleRAF.js");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./third_party/web-vitals/package/dist/modules/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/initMetric.js */ "./third_party/web-vitals/package/dist/modules/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/observe.js */ "./third_party/web-vitals/package/dist/modules/lib/observe.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/onHidden.js */ "./third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */ var _lib_runOnce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/runOnce.js */ "./third_party/web-vitals/package/dist/modules/lib/runOnce.js");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./third_party/web-vitals/package/dist/modules/lib/whenActivated.js");
/* harmony import */ var _lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/whenIdle.js */ "./third_party/web-vitals/package/dist/modules/lib/whenIdle.js");
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











/** Thresholds for LCP. See https://web.dev/articles/lcp#what_is_a_good_lcp_score */
const LCPThresholds = [2500, 4000];
const reportedMetricIDs = {};
/**
 * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
 * calls the `callback` function once the value is ready (along with the
 * relevant `largest-contentful-paint` performance entry used to determine the
 * value). The reported value is a `DOMHighResTimeStamp`.
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called any time a new `largest-contentful-paint`
 * performance entry is dispatched, or once the final value of the metric has
 * been determined.
 */
const onLCP = (onReport, opts) => {
    // Set defaults
    opts = opts || {};
    (0,_lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_9__.whenActivated)(() => {
        const visibilityWatcher = (0,_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__.getVisibilityWatcher)();
        let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__.initMetric)('LCP');
        let report;
        const handleEntries = (entries) => {
            // If reportAllChanges is set then call this function for each entry,
            // otherwise only consider the last one.
            if (!opts.reportAllChanges) {
                entries = entries.slice(-1);
            }
            entries.forEach((entry) => {
                // Only report if the page wasn't hidden prior to LCP.
                if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                    // The startTime attribute returns the value of the renderTime if it is
                    // not 0, and the value of the loadTime otherwise. The activationStart
                    // reference is used because LCP should be relative to page activation
                    // rather than navigation start if the page was prerendered. But in cases
                    // where `activationStart` occurs after the LCP, this time should be
                    // clamped at 0.
                    metric.value = Math.max(entry.startTime - (0,_lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__.getActivationStart)(), 0);
                    metric.entries = [entry];
                    report();
                }
            });
        };
        const po = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_6__.observe)('largest-contentful-paint', handleEntries);
        if (po) {
            report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, LCPThresholds, opts.reportAllChanges);
            const stopListening = (0,_lib_runOnce_js__WEBPACK_IMPORTED_MODULE_8__.runOnce)(() => {
                if (!reportedMetricIDs[metric.id]) {
                    handleEntries(po.takeRecords());
                    po.disconnect();
                    reportedMetricIDs[metric.id] = true;
                    report(true);
                }
            });
            // Stop listening after input. Note: while scrolling is an input that
            // stops LCP observation, it's unreliable since it can be programmatically
            // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
            ['keydown', 'click'].forEach((type) => {
                // Wrap in a setTimeout so the callback is run in a separate task
                // to avoid extending the keyboard/click handler to reduce INP impact
                // https://github.com/GoogleChrome/web-vitals/issues/383
                addEventListener(type, () => (0,_lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_10__.whenIdle)(stopListening), true);
            });
            (0,_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_7__.onHidden)(stopListening);
            // Only report after a bfcache restore if the `PerformanceObserver`
            // successfully registered.
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)((event) => {
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__.initMetric)('LCP');
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, LCPThresholds, opts.reportAllChanges);
                (0,_lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__.doubleRAF)(() => {
                    metric.value = performance.now() - event.timeStamp;
                    reportedMetricIDs[metric.id] = true;
                    report(true);
                });
            });
        }
    });
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/onTTFB.js":
/*!***************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/onTTFB.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTFBThresholds: () => (/* binding */ TTFBThresholds),
/* harmony export */   onTTFB: () => (/* binding */ onTTFB)
/* harmony export */ });
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./third_party/web-vitals/package/dist/modules/lib/bindReporter.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric.js */ "./third_party/web-vitals/package/dist/modules/lib/initMetric.js");
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./third_party/web-vitals/package/dist/modules/lib/whenActivated.js");
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


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types.js":
/*!**************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/base.js */ "./third_party/web-vitals/package/dist/modules/types/base.js");
/* harmony import */ var _types_polyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/polyfills.js */ "./third_party/web-vitals/package/dist/modules/types/polyfills.js");
/* harmony import */ var _types_cls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/cls.js */ "./third_party/web-vitals/package/dist/modules/types/cls.js");
/* harmony import */ var _types_fcp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/fcp.js */ "./third_party/web-vitals/package/dist/modules/types/fcp.js");
/* harmony import */ var _types_fid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/fid.js */ "./third_party/web-vitals/package/dist/modules/types/fid.js");
/* harmony import */ var _types_inp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/inp.js */ "./third_party/web-vitals/package/dist/modules/types/inp.js");
/* harmony import */ var _types_lcp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/lcp.js */ "./third_party/web-vitals/package/dist/modules/types/lcp.js");
/* harmony import */ var _types_ttfb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ttfb.js */ "./third_party/web-vitals/package/dist/modules/types/ttfb.js");
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










/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/base.js":
/*!*******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/base.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/cls.js":
/*!******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/cls.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/fcp.js":
/*!******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/fcp.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/fid.js":
/*!******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/fid.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/inp.js":
/*!******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/inp.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/lcp.js":
/*!******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/lcp.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/polyfills.js":
/*!************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/polyfills.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/types/ttfb.js":
/*!*******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/types/ttfb.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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



/***/ })

}]);