"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_src_index_ts"],{

/***/ "./src/third_party/web-vitals/package/src/deprecated.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/deprecated.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds),
/* harmony export */   onFID: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID)
/* harmony export */ });
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./src/third_party/web-vitals/package/src/onFID.ts");
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

/***/ "./src/third_party/web-vitals/package/src/index.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_0__.CLSThresholds),
/* harmony export */   FCPThresholds: () => (/* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_1__.FCPThresholds),
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_5__.FIDThresholds),
/* harmony export */   INPThresholds: () => (/* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_2__.INPThresholds),
/* harmony export */   LCPThresholds: () => (/* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_3__.LCPThresholds),
/* harmony export */   TTFBThresholds: () => (/* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__.TTFBThresholds),
/* harmony export */   onCLS: () => (/* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_0__.onCLS),
/* harmony export */   onFCP: () => (/* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_1__.onFCP),
/* harmony export */   onFID: () => (/* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_5__.onFID),
/* harmony export */   onINP: () => (/* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_2__.onINP),
/* harmony export */   onLCP: () => (/* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_3__.onLCP),
/* harmony export */   onTTFB: () => (/* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__.onTTFB)
/* harmony export */ });
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onCLS.js */ "./src/third_party/web-vitals/package/src/onCLS.ts");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onFCP.js */ "./src/third_party/web-vitals/package/src/onFCP.ts");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onINP.js */ "./src/third_party/web-vitals/package/src/onINP.ts");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onLCP.js */ "./src/third_party/web-vitals/package/src/onLCP.ts");
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onTTFB.js */ "./src/third_party/web-vitals/package/src/onTTFB.ts");
/* harmony import */ var _deprecated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated.js */ "./src/third_party/web-vitals/package/src/deprecated.ts");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types.js */ "./src/third_party/web-vitals/package/src/types.ts");
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

/***/ "./src/third_party/web-vitals/package/src/lib/doubleRAF.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/doubleRAF.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doubleRAF: () => (/* binding */ doubleRAF)
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
const doubleRAF = (cb) => {
    requestAnimationFrame(() => requestAnimationFrame(() => cb()));
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/onCLS.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/onCLS.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* binding */ CLSThresholds),
/* harmony export */   onCLS: () => (/* binding */ onCLS)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/src/lib/initMetric.ts");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/src/lib/observe.ts");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./src/third_party/web-vitals/package/src/lib/doubleRAF.ts");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/onHidden.js */ "./src/third_party/web-vitals/package/src/lib/onHidden.ts");
/* harmony import */ var _lib_runOnce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/runOnce.js */ "./src/third_party/web-vitals/package/src/lib/runOnce.ts");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onFCP.js */ "./src/third_party/web-vitals/package/src/onFCP.ts");
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








/** Thresholds for CLS. See https://web.dev/articles/cls#what_is_a_good_cls_score */
const CLSThresholds = [0.1, 0.25];
/**
 * Calculates the [CLS](https://web.dev/articles/cls) value for the current page and
 * calls the `callback` function once the value is ready to be reported, along
 * with all `layout-shift` performance entries that were used in the metric
 * value calculation. The reported value is a `double` (corresponding to a
 * [layout shift score](https://web.dev/articles/cls#layout_shift_score)).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** CLS should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onCLS = (onReport, opts) => {
    // Set defaults
    opts = opts || {};
    // Start monitoring FCP so we can only report CLS if FCP is also reported.
    // Note: this is done to match the current behavior of CrUX.
    (0,_onFCP_js__WEBPACK_IMPORTED_MODULE_7__.onFCP)((0,_lib_runOnce_js__WEBPACK_IMPORTED_MODULE_6__.runOnce)(() => {
        let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__.initMetric)('CLS', 0);
        let report;
        let sessionValue = 0;
        let sessionEntries = [];
        const handleEntries = (entries) => {
            entries.forEach((entry) => {
                // Only count layout shifts without recent user input.
                if (!entry.hadRecentInput) {
                    const firstSessionEntry = sessionEntries[0];
                    const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                    // If the entry occurred less than 1 second after the previous entry
                    // and less than 5 seconds after the first entry in the session,
                    // include the entry in the current session. Otherwise, start a new
                    // session.
                    if (sessionValue &&
                        entry.startTime - lastSessionEntry.startTime < 1000 &&
                        entry.startTime - firstSessionEntry.startTime < 5000) {
                        sessionValue += entry.value;
                        sessionEntries.push(entry);
                    }
                    else {
                        sessionValue = entry.value;
                        sessionEntries = [entry];
                    }
                }
            });
            // If the current session value is larger than the current CLS value,
            // update CLS and the entries contributing to it.
            if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                report();
            }
        };
        const po = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_2__.observe)('layout-shift', handleEntries);
        if (po) {
            report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_3__.bindReporter)(onReport, metric, CLSThresholds, opts.reportAllChanges);
            (0,_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__.onHidden)(() => {
                handleEntries(po.takeRecords());
                report(true);
            });
            // Only report after a bfcache restore if the `PerformanceObserver`
            // successfully registered.
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)(() => {
                sessionValue = 0;
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__.initMetric)('CLS', 0);
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_3__.bindReporter)(onReport, metric, CLSThresholds, opts.reportAllChanges);
                (0,_lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_4__.doubleRAF)(() => report());
            });
            // Queue a task to report (if nothing else triggers a report first).
            // This allows CLS to be reported as soon as FCP fires when
            // `reportAllChanges` is true.
            setTimeout(report, 0);
        }
    }));
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/onFCP.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/onFCP.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FCPThresholds: () => (/* binding */ FCPThresholds),
/* harmony export */   onFCP: () => (/* binding */ onFCP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./src/third_party/web-vitals/package/src/lib/doubleRAF.ts");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./src/third_party/web-vitals/package/src/lib/getActivationStart.ts");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./src/third_party/web-vitals/package/src/lib/getVisibilityWatcher.ts");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/src/lib/initMetric.ts");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/src/lib/observe.ts");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./src/third_party/web-vitals/package/src/lib/whenActivated.ts");
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








/** Thresholds for FCP. See https://web.dev/articles/fcp#what_is_a_good_fcp_score */
const FCPThresholds = [1800, 3000];
/**
 * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
 * calls the `callback` function once the value is ready, along with the
 * relevant `paint` performance entry used to determine the value. The reported
 * value is a `DOMHighResTimeStamp`.
 */
const onFCP = (onReport, opts) => {
    // Set defaults
    opts = opts || {};
    (0,_lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_7__.whenActivated)(() => {
        const visibilityWatcher = (0,_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__.getVisibilityWatcher)();
        let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__.initMetric)('FCP');
        let report;
        const handleEntries = (entries) => {
            entries.forEach((entry) => {
                if (entry.name === 'first-contentful-paint') {
                    po.disconnect();
                    // Only report if the page wasn't hidden prior to the first paint.
                    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                        // The activationStart reference is used because FCP should be
                        // relative to page activation rather than navigation start if the
                        // page was prerendered. But in cases where `activationStart` occurs
                        // after the FCP, this time should be clamped at 0.
                        metric.value = Math.max(entry.startTime - (0,_lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__.getActivationStart)(), 0);
                        metric.entries.push(entry);
                        report(true);
                    }
                }
            });
        };
        const po = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_6__.observe)('paint', handleEntries);
        if (po) {
            report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, FCPThresholds, opts.reportAllChanges);
            // Only report after a bfcache restore if the `PerformanceObserver`
            // successfully registered or the `paint` entry exists.
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)((event) => {
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__.initMetric)('FCP');
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, FCPThresholds, opts.reportAllChanges);
                (0,_lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__.doubleRAF)(() => {
                    metric.value = performance.now() - event.timeStamp;
                    report(true);
                });
            });
        }
    });
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/onLCP.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/onLCP.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LCPThresholds: () => (/* binding */ LCPThresholds),
/* harmony export */   onLCP: () => (/* binding */ onLCP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./src/third_party/web-vitals/package/src/lib/doubleRAF.ts");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./src/third_party/web-vitals/package/src/lib/getActivationStart.ts");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./src/third_party/web-vitals/package/src/lib/getVisibilityWatcher.ts");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/src/lib/initMetric.ts");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/src/lib/observe.ts");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/onHidden.js */ "./src/third_party/web-vitals/package/src/lib/onHidden.ts");
/* harmony import */ var _lib_runOnce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/runOnce.js */ "./src/third_party/web-vitals/package/src/lib/runOnce.ts");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./src/third_party/web-vitals/package/src/lib/whenActivated.ts");
/* harmony import */ var _lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/whenIdle.js */ "./src/third_party/web-vitals/package/src/lib/whenIdle.ts");
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


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/types.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/base.js */ "./src/third_party/web-vitals/package/src/types/base.ts");
/* harmony import */ var _types_polyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/polyfills.js */ "./src/third_party/web-vitals/package/src/types/polyfills.ts");
/* harmony import */ var _types_cls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/cls.js */ "./src/third_party/web-vitals/package/src/types/cls.ts");
/* harmony import */ var _types_fcp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/fcp.js */ "./src/third_party/web-vitals/package/src/types/fcp.ts");
/* harmony import */ var _types_fid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/fid.js */ "./src/third_party/web-vitals/package/src/types/fid.ts");
/* harmony import */ var _types_inp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/inp.js */ "./src/third_party/web-vitals/package/src/types/inp.ts");
/* harmony import */ var _types_lcp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/lcp.js */ "./src/third_party/web-vitals/package/src/types/lcp.ts");
/* harmony import */ var _types_ttfb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ttfb.js */ "./src/third_party/web-vitals/package/src/types/ttfb.ts");
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

/***/ "./src/third_party/web-vitals/package/src/types/base.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/base.ts ***!
  \**************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/cls.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/cls.ts ***!
  \*************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/fcp.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/fcp.ts ***!
  \*************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/fid.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/fid.ts ***!
  \*************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/inp.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/inp.ts ***!
  \*************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/lcp.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/lcp.ts ***!
  \*************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/types/polyfills.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/polyfills.ts ***!
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

/***/ "./src/third_party/web-vitals/package/src/types/ttfb.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/types/ttfb.ts ***!
  \**************************************************************/
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