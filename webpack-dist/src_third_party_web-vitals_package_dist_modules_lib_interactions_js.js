"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_dist_modules_lib_interactions_js"],{

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/interactions.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/interactions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _polyfills_interactionCountPolyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/interactionCountPolyfill.js */ "./src/third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js");
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

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/observe.js":
/*!************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/observe.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observe: () => (/* binding */ observe)
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
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
const observe = (type, callback, opts) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
            const po = new PerformanceObserver((list) => {
                // Delay by a microtask to workaround a bug in Safari where the
                // callback is invoked immediately, rather than in a separate task.
                // See: https://github.com/GoogleChrome/web-vitals/issues/277
                Promise.resolve().then(() => {
                    callback(list.getEntries());
                });
            });
            po.observe(Object.assign({
                type,
                buffered: true,
            }, opts || {}));
            return po;
        }
    }
    catch (e) {
        // Do nothing.
    }
    return;
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js":
/*!***************************************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/polyfills/interactionCountPolyfill.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInteractionCount: () => (/* binding */ getInteractionCount),
/* harmony export */   initInteractionCountPolyfill: () => (/* binding */ initInteractionCountPolyfill)
/* harmony export */ });
/* harmony import */ var _observe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observe.js */ "./src/third_party/web-vitals/package/dist/modules/lib/observe.js");
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


/***/ })

}]);