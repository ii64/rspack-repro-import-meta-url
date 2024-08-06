"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_web-vitals_package_dist_modules_attribution_onINP_js"],{

/***/ "./third_party/web-vitals/package/dist/modules/attribution/onINP.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/attribution/onINP.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interactionTargetMap: () => (/* binding */ interactionTargetMap),
/* harmony export */   onINP: () => (/* binding */ onINP)
/* harmony export */ });
/* harmony import */ var _lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getLoadState.js */ "./third_party/web-vitals/package/dist/modules/lib/getLoadState.js");
/* harmony import */ var _lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getSelector.js */ "./third_party/web-vitals/package/dist/modules/lib/getSelector.js");
/* harmony import */ var _lib_interactions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/interactions.js */ "./third_party/web-vitals/package/dist/modules/lib/interactions.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/observe.js */ "./third_party/web-vitals/package/dist/modules/lib/observe.js");
/* harmony import */ var _lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/whenIdle.js */ "./third_party/web-vitals/package/dist/modules/lib/whenIdle.js");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../onINP.js */ "./third_party/web-vitals/package/dist/modules/onINP.js");
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






// The maximum number of previous frames for which data is kept.
// Storing data about previous frames is necessary to handle cases where event
// and LoAF entries are dispatched out of order, and so a buffer of previous
// frame data is needed to determine various bits of INP attribution once all
// the frame-related data has come in.
// In most cases this out-of-order data is only off by a frame or two, so
// keeping the most recent 50 should be more than sufficient.
const MAX_PREVIOUS_FRAMES = 50;
// A PerformanceObserver, observing new `long-animation-frame` entries.
// If this variable is defined it means the browser supports LoAF.
let loafObserver;
// A list of LoAF entries that have been dispatched and could potentially
// intersect with the INP candidate interaction. Note that periodically this
// list is cleaned up and entries that are known to not match INP are removed.
let pendingLoAFs = [];
// An array of groups of all the event timing entries that occurred within a
// particular frame. Note that periodically this array is cleaned up and entries
// that are known to not match INP are removed.
let pendingEntriesGroups = [];
// The `processingEnd` time of most recently-processed event, chronologically.
let latestProcessingEnd;
// A WeakMap to look up the event-timing-entries group of a given entry.
// Note that this only maps from "important" entries: either the first input or
// those with an `interactionId`.
const entryToEntriesGroupMap = new WeakMap();
// A mapping of interactionIds to the target Node.
const interactionTargetMap = new Map();
// A reference to the idle task used to clean up entries from the above
// variables. If the value is -1 it means no task is queue, and if it's
// greater than -1 the value corresponds to the idle callback handle.
let idleHandle = -1;
/**
 * Adds new LoAF entries to the `pendingLoAFs` list.
 */
const handleLoAFEntries = (entries) => {
    pendingLoAFs = pendingLoAFs.concat(entries);
    queueCleanup();
};
// Get a reference to the interaction target element in case it's removed
// from the DOM later.
const saveInteractionTarget = (entry) => {
    if (entry.interactionId &&
        entry.target &&
        !interactionTargetMap.has(entry.interactionId)) {
        interactionTargetMap.set(entry.interactionId, entry.target);
    }
};
/**
 * Groups entries that were presented within the same animation frame by
 * a common `renderTime`. This function works by referencing
 * `pendingEntriesGroups` and using an existing render time if one is found
 * (otherwise creating a new one). This function also adds all interaction
 * entries to an `entryToRenderTimeMap` WeakMap so that the "grouped" entries
 * can be looked up later.
 */
const groupEntriesByRenderTime = (entry) => {
    const renderTime = entry.startTime + entry.duration;
    let group;
    latestProcessingEnd = Math.max(latestProcessingEnd, entry.processingEnd);
    // Iterate over all previous render times in reverse order to find a match.
    // Go in reverse since the most likely match will be at the end.
    for (let i = pendingEntriesGroups.length - 1; i >= 0; i--) {
        const potentialGroup = pendingEntriesGroups[i];
        // If a group's render time is within 8ms of the entry's render time,
        // assume they were part of the same frame and add it to the group.
        if (Math.abs(renderTime - potentialGroup.renderTime) <= 8) {
            group = potentialGroup;
            group.startTime = Math.min(entry.startTime, group.startTime);
            group.processingStart = Math.min(entry.processingStart, group.processingStart);
            group.processingEnd = Math.max(entry.processingEnd, group.processingEnd);
            group.entries.push(entry);
            break;
        }
    }
    // If there was no matching group, assume this is a new frame.
    if (!group) {
        group = {
            startTime: entry.startTime,
            processingStart: entry.processingStart,
            processingEnd: entry.processingEnd,
            renderTime,
            entries: [entry],
        };
        pendingEntriesGroups.push(group);
    }
    // Store the grouped render time for this entry for reference later.
    if (entry.interactionId || entry.entryType === 'first-input') {
        entryToEntriesGroupMap.set(entry, group);
    }
    queueCleanup();
};
const queueCleanup = () => {
    // Queue cleanup of entries that are not part of any INP candidates.
    if (idleHandle < 0) {
        idleHandle = (0,_lib_whenIdle_js__WEBPACK_IMPORTED_MODULE_4__.whenIdle)(cleanupEntries);
    }
};
const cleanupEntries = () => {
    // Delete any stored interaction target elements if they're not part of one
    // of the 10 longest interactions.
    if (interactionTargetMap.size > 10) {
        interactionTargetMap.forEach((_, key) => {
            if (!_lib_interactions_js__WEBPACK_IMPORTED_MODULE_2__.longestInteractionMap.has(key)) {
                interactionTargetMap.delete(key);
            }
        });
    }
    // Keep all render times that are part of a pending INP candidate or
    // that occurred within the 50 most recently-dispatched groups of events.
    const longestInteractionGroups = _lib_interactions_js__WEBPACK_IMPORTED_MODULE_2__.longestInteractionList.map((i) => {
        return entryToEntriesGroupMap.get(i.entries[0]);
    });
    const minIndex = pendingEntriesGroups.length - MAX_PREVIOUS_FRAMES;
    pendingEntriesGroups = pendingEntriesGroups.filter((group, index) => {
        if (index >= minIndex)
            return true;
        return longestInteractionGroups.includes(group);
    });
    // Keep all pending LoAF entries that either:
    // 1) intersect with entries in the newly cleaned up `pendingEntriesGroups`
    // 2) occur after the most recently-processed event entry.
    const loafsToKeep = new Set();
    for (let i = 0; i < pendingEntriesGroups.length; i++) {
        const group = pendingEntriesGroups[i];
        getIntersectingLoAFs(group.startTime, group.processingEnd).forEach((loaf) => {
            loafsToKeep.add(loaf);
        });
    }
    for (let i = 0; i < MAX_PREVIOUS_FRAMES; i++) {
        // Look at pending LoAF in reverse order so the most recent are first.
        const loaf = pendingLoAFs[pendingLoAFs.length - 1 - i];
        // If we reach LoAFs that overlap with event processing,
        // we can assume all previous ones have already been handled.
        if (!loaf || loaf.startTime < latestProcessingEnd)
            break;
        loafsToKeep.add(loaf);
    }
    pendingLoAFs = Array.from(loafsToKeep);
    // Reset the idle callback handle so it can be queued again.
    idleHandle = -1;
};
_lib_interactions_js__WEBPACK_IMPORTED_MODULE_2__.entryPreProcessingCallbacks.push(saveInteractionTarget, groupEntriesByRenderTime);
const getIntersectingLoAFs = (start, end) => {
    const intersectingLoAFs = [];
    for (let i = 0, loaf; (loaf = pendingLoAFs[i]); i++) {
        // If the LoAF ends before the given start time, ignore it.
        if (loaf.startTime + loaf.duration < start)
            continue;
        // If the LoAF starts after the given end time, ignore it and all
        // subsequent pending LoAFs (because they're in time order).
        if (loaf.startTime > end)
            break;
        // Still here? If so this LoAF intersects with the interaction.
        intersectingLoAFs.push(loaf);
    }
    return intersectingLoAFs;
};
const attributeINP = (metric) => {
    const firstEntry = metric.entries[0];
    const group = entryToEntriesGroupMap.get(firstEntry);
    const processingStart = firstEntry.processingStart;
    const processingEnd = group.processingEnd;
    // Sort the entries in processing time order.
    const processedEventEntries = group.entries.sort((a, b) => {
        return a.processingStart - b.processingStart;
    });
    const longAnimationFrameEntries = getIntersectingLoAFs(firstEntry.startTime, processingEnd);
    // The first interaction entry may not have a target defined, so use the
    // first one found in the entry list.
    // TODO: when the following bug is fixed just use `firstInteractionEntry`.
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1367329
    // As a fallback, also check the interactionTargetMap (to account for
    // cases where the element is removed from the DOM before reporting happens).
    const firstEntryWithTarget = metric.entries.find((entry) => entry.target);
    const interactionTargetElement = (firstEntryWithTarget && firstEntryWithTarget.target) ||
        interactionTargetMap.get(firstEntry.interactionId);
    // Since entry durations are rounded to the nearest 8ms, we need to clamp
    // the `nextPaintTime` value to be higher than the `processingEnd` or
    // end time of any LoAF entry.
    const nextPaintTimeCandidates = [
        firstEntry.startTime + firstEntry.duration,
        processingEnd,
    ].concat(longAnimationFrameEntries.map((loaf) => loaf.startTime + loaf.duration));
    const nextPaintTime = Math.max.apply(Math, nextPaintTimeCandidates);
    const attribution = {
        interactionTarget: (0,_lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__.getSelector)(interactionTargetElement),
        interactionTargetElement: interactionTargetElement,
        interactionType: firstEntry.name.startsWith('key') ? 'keyboard' : 'pointer',
        interactionTime: firstEntry.startTime,
        nextPaintTime: nextPaintTime,
        processedEventEntries: processedEventEntries,
        longAnimationFrameEntries: longAnimationFrameEntries,
        inputDelay: processingStart - firstEntry.startTime,
        processingDuration: processingEnd - processingStart,
        presentationDelay: Math.max(nextPaintTime - processingEnd, 0),
        loadState: (0,_lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__.getLoadState)(firstEntry.startTime),
    };
    // Use Object.assign to set property to keep tsc happy.
    const metricWithAttribution = Object.assign(metric, { attribution });
    return metricWithAttribution;
};
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
    if (!loafObserver) {
        loafObserver = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_3__.observe)('long-animation-frame', handleLoAFEntries);
    }
    (0,_onINP_js__WEBPACK_IMPORTED_MODULE_5__.onINP)((metric) => {
        const metricWithAttribution = attributeINP(metric);
        onReport(metricWithAttribution);
    }, opts);
};


/***/ })

}]);