"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_dist_modules_attribution_onCLS_js"],{

/***/ "./src/third_party/web-vitals/package/dist/modules/attribution/onCLS.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/attribution/onCLS.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onCLS: () => (/* binding */ onCLS)
/* harmony export */ });
/* harmony import */ var _lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getLoadState.js */ "./src/third_party/web-vitals/package/dist/modules/lib/getLoadState.js");
/* harmony import */ var _lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getSelector.js */ "./src/third_party/web-vitals/package/dist/modules/lib/getSelector.js");
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../onCLS.js */ "./src/third_party/web-vitals/package/dist/modules/onCLS.js");
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



const getLargestLayoutShiftEntry = (entries) => {
    return entries.reduce((a, b) => (a && a.value > b.value ? a : b));
};
const getLargestLayoutShiftSource = (sources) => {
    return sources.find((s) => s.node && s.node.nodeType === 1) || sources[0];
};
const attributeCLS = (metric) => {
    // Use an empty object if no other attribution has been set.
    let attribution = {};
    if (metric.entries.length) {
        const largestEntry = getLargestLayoutShiftEntry(metric.entries);
        if (largestEntry && largestEntry.sources && largestEntry.sources.length) {
            const largestSource = getLargestLayoutShiftSource(largestEntry.sources);
            if (largestSource) {
                attribution = {
                    largestShiftTarget: (0,_lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__.getSelector)(largestSource.node),
                    largestShiftTime: largestEntry.startTime,
                    largestShiftValue: largestEntry.value,
                    largestShiftSource: largestSource,
                    largestShiftEntry: largestEntry,
                    loadState: (0,_lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__.getLoadState)(largestEntry.startTime),
                };
            }
        }
    }
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
};
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
    (0,_onCLS_js__WEBPACK_IMPORTED_MODULE_2__.onCLS)((metric) => {
        const metricWithAttribution = attributeCLS(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/doubleRAF.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/doubleRAF.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/getLoadState.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/getLoadState.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoadState: () => (/* binding */ getLoadState)
/* harmony export */ });
/* harmony import */ var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./src/third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
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

const getLoadState = (timestamp) => {
    if (document.readyState === 'loading') {
        // If the `readyState` is 'loading' there's no need to look at timestamps
        // since the timestamp has to be the current time or earlier.
        return 'loading';
    }
    else {
        const navigationEntry = (0,_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__.getNavigationEntry)();
        if (navigationEntry) {
            if (timestamp < navigationEntry.domInteractive) {
                return 'loading';
            }
            else if (navigationEntry.domContentLoadedEventStart === 0 ||
                timestamp < navigationEntry.domContentLoadedEventStart) {
                // If the `domContentLoadedEventStart` timestamp has not yet been
                // set, or if the given timestamp is less than that value.
                return 'dom-interactive';
            }
            else if (navigationEntry.domComplete === 0 ||
                timestamp < navigationEntry.domComplete) {
                // If the `domComplete` timestamp has not yet been
                // set, or if the given timestamp is less than that value.
                return 'dom-content-loaded';
            }
        }
    }
    // If any of the above fail, default to loaded. This could really only
    // happy if the browser doesn't support the performance timeline, which
    // most likely means this code would never run anyway.
    return 'complete';
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/getSelector.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/getSelector.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelector: () => (/* binding */ getSelector)
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
const getName = (node) => {
    const name = node.nodeName;
    return node.nodeType === 1
        ? name.toLowerCase()
        : name.toUpperCase().replace(/^#/, '');
};
const getSelector = (node, maxLen) => {
    let sel = '';
    try {
        while (node && node.nodeType !== 9) {
            const el = node;
            const part = el.id
                ? '#' + el.id
                : getName(el) +
                    (el.classList &&
                        el.classList.value &&
                        el.classList.value.trim() &&
                        el.classList.value.trim().length
                        ? '.' + el.classList.value.trim().replace(/\s+/g, '.')
                        : '');
            if (sel.length + part.length > (maxLen || 100) - 1)
                return sel || part;
            sel = sel ? part + '>' + sel : part;
            if (el.id)
                break;
            node = el.parentNode;
        }
    }
    catch (err) {
        // Do nothing...
    }
    return sel;
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/dist/modules/onCLS.js":
/*!******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/onCLS.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLSThresholds: () => (/* binding */ CLSThresholds),
/* harmony export */   onCLS: () => (/* binding */ onCLS)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/dist/modules/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/dist/modules/lib/observe.js");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/dist/modules/lib/bindReporter.js");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./src/third_party/web-vitals/package/dist/modules/lib/doubleRAF.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/onHidden.js */ "./src/third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */ var _lib_runOnce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/runOnce.js */ "./src/third_party/web-vitals/package/dist/modules/lib/runOnce.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onFCP.js */ "./src/third_party/web-vitals/package/dist/modules/onFCP.js");
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

/***/ "./src/third_party/web-vitals/package/dist/modules/onFCP.js":
/*!******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/onFCP.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FCPThresholds: () => (/* binding */ FCPThresholds),
/* harmony export */   onFCP: () => (/* binding */ onFCP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/dist/modules/lib/bindReporter.js");
/* harmony import */ var _lib_doubleRAF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/doubleRAF.js */ "./src/third_party/web-vitals/package/dist/modules/lib/doubleRAF.js");
/* harmony import */ var _lib_getActivationStart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getActivationStart.js */ "./src/third_party/web-vitals/package/dist/modules/lib/getActivationStart.js");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./src/third_party/web-vitals/package/dist/modules/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/dist/modules/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/dist/modules/lib/observe.js");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./src/third_party/web-vitals/package/dist/modules/lib/whenActivated.js");
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


/***/ })

}]);