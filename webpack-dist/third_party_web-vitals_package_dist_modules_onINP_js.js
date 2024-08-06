"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_web-vitals_package_dist_modules_onINP_js"],{

/***/ "./third_party/web-vitals/package/dist/modules/lib/interactions.js":
/*!*************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/interactions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DURATION_THRESHOLD: () => (/* binding */ DEFAULT_DURATION_THRESHOLD),
/* harmony export */   entryPreProcessingCallbacks: () => (/* binding */ entryPreProcessingCallbacks),
/* harmony export */   estimateP98LongestInteraction: () => (/* binding */ estimateP98LongestInteraction),
/* harmony export */   longestInteractionList: () => (/* binding */ longestInteractionList),
/* harmony export */   longestInteractionMap: () => (/* binding */ longestInteractionMap),
/* harmony export */   processInteractionEntry: () => (/* binding */ processInteractionEntry),
/* harmony export */   resetInteractions: () => (/* binding */ resetInteractions)
/* harmony export */ });
/* harmony import */ var _polyfills_interactionCountPolyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/interactionCountPolyfill.js */ "./third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js");
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

// A list of longest interactions on the page (by latency) sorted so the
// longest one is first. The list is at most MAX_INTERACTIONS_TO_CONSIDER long.
const longestInteractionList = [];
// A mapping of longest interactions by their interaction ID.
// This is used for faster lookup.
const longestInteractionMap = new Map();
// The default `durationThreshold` used across this library for observing
// `event` entries via PerformanceObserver.
const DEFAULT_DURATION_THRESHOLD = 40;
// Used to store the interaction count after a bfcache restore, since p98
// interaction latencies should only consider the current navigation.
let prevInteractionCount = 0;
/**
 * Returns the interaction count since the last bfcache restore (or for the
 * full page lifecycle if there were no bfcache restores).
 */
const getInteractionCountForNavigation = () => {
    return (0,_polyfills_interactionCountPolyfill_js__WEBPACK_IMPORTED_MODULE_0__.getInteractionCount)() - prevInteractionCount;
};
const resetInteractions = () => {
    prevInteractionCount = 0;
    longestInteractionList.length = 0;
    longestInteractionMap.clear();
};
/**
 * Returns the estimated p98 longest interaction based on the stored
 * interaction candidates and the interaction count for the current page.
 */
const estimateP98LongestInteraction = () => {
    const candidateInteractionIndex = Math.min(longestInteractionList.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
    return longestInteractionList[candidateInteractionIndex];
};
// To prevent unnecessary memory usage on pages with lots of interactions,
// store at most 10 of the longest interactions to consider as INP candidates.
const MAX_INTERACTIONS_TO_CONSIDER = 10;
/**
 * A list of callback functions to run before each entry is processed.
 * Exposing this list allows the attribution build to hook into the
 * entry processing pipeline.
 */
const entryPreProcessingCallbacks = [];
/**
 * Takes a performance entry and adds it to the list of worst interactions
 * if its duration is long enough to make it among the worst. If the
 * entry is part of an existing interaction, it is merged and the latency
 * and entries list is updated as needed.
 */
const processInteractionEntry = (entry) => {
    entryPreProcessingCallbacks.forEach((cb) => cb(entry));
    // Skip further processing for entries that cannot be INP candidates.
    if (!(entry.interactionId || entry.entryType === 'first-input'))
        return;
    // The least-long of the 10 longest interactions.
    const minLongestInteraction = longestInteractionList[longestInteractionList.length - 1];
    const existingInteraction = longestInteractionMap.get(entry.interactionId);
    // Only process the entry if it's possibly one of the ten longest,
    // or if it's part of an existing interaction.
    if (existingInteraction ||
        longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER ||
        entry.duration > minLongestInteraction.latency) {
        // If the interaction already exists, update it. Otherwise create one.
        if (existingInteraction) {
            // If the new entry has a longer duration, replace the old entries,
            // otherwise add to the array.
            if (entry.duration > existingInteraction.latency) {
                existingInteraction.entries = [entry];
                existingInteraction.latency = entry.duration;
            }
            else if (entry.duration === existingInteraction.latency &&
                entry.startTime === existingInteraction.entries[0].startTime) {
                existingInteraction.entries.push(entry);
            }
        }
        else {
            const interaction = {
                id: entry.interactionId,
                latency: entry.duration,
                entries: [entry],
            };
            longestInteractionMap.set(interaction.id, interaction);
            longestInteractionList.push(interaction);
        }
        // Sort the entries by latency (descending) and keep only the top ten.
        longestInteractionList.sort((a, b) => b.latency - a.latency);
        if (longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
            longestInteractionList
                .splice(MAX_INTERACTIONS_TO_CONSIDER)
                .forEach((i) => longestInteractionMap.delete(i.id));
        }
    }
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js":
/*!***********************************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInteractionCount: () => (/* binding */ getInteractionCount),
/* harmony export */   initInteractionCountPolyfill: () => (/* binding */ initInteractionCountPolyfill)
/* harmony export */ });
/* harmony import */ var _observe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observe.js */ "./third_party/web-vitals/package/dist/modules/lib/observe.js");
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

let interactionCountEstimate = 0;
let minKnownInteractionId = Infinity;
let maxKnownInteractionId = 0;
const updateEstimate = (entries) => {
    entries.forEach((e) => {
        if (e.interactionId) {
            minKnownInteractionId = Math.min(minKnownInteractionId, e.interactionId);
            maxKnownInteractionId = Math.max(maxKnownInteractionId, e.interactionId);
            interactionCountEstimate = maxKnownInteractionId
                ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1
                : 0;
        }
    });
};
let po;
/**
 * Returns the `interactionCount` value using the native API (if available)
 * or the polyfill estimate in this module.
 */
const getInteractionCount = () => {
    return po ? interactionCountEstimate : performance.interactionCount || 0;
};
/**
 * Feature detects native support or initializes the polyfill if needed.
 */
const initInteractionCountPolyfill = () => {
    if ('interactionCount' in performance || po)
        return;
    po = (0,_observe_js__WEBPACK_IMPORTED_MODULE_0__.observe)('event', updateEstimate, {
        type: 'event',
        buffered: true,
        durationThreshold: 0,
    });
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/lib/whenIdle.js":
/*!*********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/whenIdle.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   whenIdle: () => (/* binding */ whenIdle)
/* harmony export */ });
/* harmony import */ var _onHidden_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onHidden.js */ "./third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */ var _runOnce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runOnce.js */ "./third_party/web-vitals/package/dist/modules/lib/runOnce.js");
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


/**
 * Runs the passed callback during the next idle period, or immediately
 * if the browser's visibility state is (or becomes) hidden.
 */
const whenIdle = (cb) => {
    const rIC = self.requestIdleCallback || self.setTimeout;
    let handle = -1;
    cb = (0,_runOnce_js__WEBPACK_IMPORTED_MODULE_1__.runOnce)(cb);
    // If the document is hidden, run the callback immediately, otherwise
    // race an idle callback with the next `visibilitychange` event.
    if (document.visibilityState === 'hidden') {
        cb();
    }
    else {
        handle = rIC(cb);
        (0,_onHidden_js__WEBPACK_IMPORTED_MODULE_0__.onHidden)(cb);
    }
    return handle;
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/onINP.js":
/*!**************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/onINP.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INPThresholds: () => (/* binding */ INPThresholds),
/* harmony export */   onINP: () => (/* binding */ onINP)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./third_party/web-vitals/package/dist/modules/lib/bindReporter.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/initMetric.js */ "./third_party/web-vitals/package/dist/modules/lib/initMetric.js");
/* harmony import */ var _lib_interactions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/interactions.js */ "./third_party/web-vitals/package/dist/modules/lib/interactions.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/observe.js */ "./third_party/web-vitals/package/dist/modules/lib/observe.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/onHidden.js */ "./third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */ var _lib_polyfills_interactionCountPolyfill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/polyfills/interactionCountPolyfill.js */ "./third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./third_party/web-vitals/package/dist/modules/lib/whenActivated.js");
/* harmony import */ var _lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/whenIdle.js */ "./third_party/web-vitals/package/dist/modules/lib/whenIdle.js");
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









/** Thresholds for INP. See https://web.dev/articles/inp#what_is_a_good_inp_score */
const INPThresholds = [200, 500];
/**
 * Calculates the [INP](https://web.dev/articles/inp) value for the current
 * page and calls the `callback` function once the value is ready, along with
 * the `event` performance entries reported for that interaction. The reported
 * value is a `DOMHighResTimeStamp`.
 *
 * A custom `durationThreshold` configuration option can optionally be passed to
 * control what `event-timing` entries are considered for INP reporting. The
 * default threshold is `40`, which means INP scores of less than 40 are
 * reported as 0. Note that this will not affect your 75th percentile INP value
 * unless that value is also less than 40 (well below the recommended
 * [good](https://web.dev/articles/inp#what_is_a_good_inp_score) threshold).
 *
 * If the `reportAllChanges` configuration option is set to `true`, the
 * `callback` function will be called as soon as the value is initially
 * determined as well as any time the value changes throughout the page
 * lifespan.
 *
 * _**Important:** INP should be continually monitored for changes throughout
 * the entire lifespan of a page—including if the user returns to the page after
 * it's been hidden/backgrounded. However, since browsers often [will not fire
 * additional callbacks once the user has backgrounded a
 * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
 * `callback` is always called when the page's visibility state changes to
 * hidden. As a result, the `callback` function might be called multiple times
 * during the same page load._
 */
const onINP = (onReport, opts) => {
    // Return if the browser doesn't support all APIs needed to measure INP.
    if (!('PerformanceEventTiming' in self &&
        'interactionId' in PerformanceEventTiming.prototype)) {
        return;
    }
    // Set defaults
    opts = opts || {};
    (0,_lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_7__.whenActivated)(() => {
        // TODO(philipwalton): remove once the polyfill is no longer needed.
        (0,_lib_polyfills_interactionCountPolyfill_js__WEBPACK_IMPORTED_MODULE_6__.initInteractionCountPolyfill)();
        let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__.initMetric)('INP');
        let report;
        const handleEntries = (entries) => {
            // Queue the `handleEntries()` callback in the next idle task.
            // This is needed to increase the chances that all event entries that
            // occurred between the user interaction and the next paint
            // have been dispatched. Note: there is currently an experiment
            // running in Chrome (EventTimingKeypressAndCompositionInteractionId)
            // 123+ that if rolled out fully may make this no longer necessary.
            (0,_lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_8__.whenIdle)(() => {
                entries.forEach(_lib_interactions_js__WEBPACK_IMPORTED_MODULE_3__.processInteractionEntry);
                const inp = (0,_lib_interactions_js__WEBPACK_IMPORTED_MODULE_3__.estimateP98LongestInteraction)();
                if (inp && inp.latency !== metric.value) {
                    metric.value = inp.latency;
                    metric.entries = inp.entries;
                    report();
                }
            });
        };
        const po = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_4__.observe)('event', handleEntries, {
            // Event Timing entries have their durations rounded to the nearest 8ms,
            // so a duration of 40ms would be any event that spans 2.5 or more frames
            // at 60Hz. This threshold is chosen to strike a balance between usefulness
            // and performance. Running this callback for any interaction that spans
            // just one or two frames is likely not worth the insight that could be
            // gained.
            durationThreshold: opts.durationThreshold ?? _lib_interactions_js__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DURATION_THRESHOLD,
        });
        report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, INPThresholds, opts.reportAllChanges);
        if (po) {
            // Also observe entries of type `first-input`. This is useful in cases
            // where the first interaction is less than the `durationThreshold`.
            po.observe({ type: 'first-input', buffered: true });
            (0,_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__.onHidden)(() => {
                handleEntries(po.takeRecords());
                report(true);
            });
            // Only report after a bfcache restore if the `PerformanceObserver`
            // successfully registered.
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)(() => {
                (0,_lib_interactions_js__WEBPACK_IMPORTED_MODULE_3__.resetInteractions)();
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__.initMetric)('INP');
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, INPThresholds, opts.reportAllChanges);
            });
        }
    });
};


/***/ })

}]);