"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_web-vitals_package_dist_modules_attribution_onLCP_js"],{

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

/***/ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js":
/*!********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/bfcache.js ***!
  \********************************************************************/
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/bindReporter.js":
/*!*************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/bindReporter.js ***!
  \*************************************************************************/
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/doubleRAF.js":
/*!**********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/doubleRAF.js ***!
  \**********************************************************************/
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/generateUniqueID.js":
/*!*****************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/generateUniqueID.js ***!
  \*****************************************************************************/
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js":
/*!*******************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActivationStart: () => (/* binding */ getActivationStart)
/* harmony export */ });
/* harmony import */ var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js":
/*!*******************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js ***!
  \*******************************************************************************/
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/getSelector.js":
/*!************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/getSelector.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./third_party/web-vitals/package/dist/modules/lib/getVisibilityWatcher.js":
/*!*********************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/getVisibilityWatcher.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVisibilityWatcher: () => (/* binding */ getVisibilityWatcher)
/* harmony export */ });
/* harmony import */ var _bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
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

let firstHiddenTime = -1;
const initHiddenTime = () => {
    // If the document is hidden when this code runs, assume it was always
    // hidden and the page was loaded in the background, with the one exception
    // that visibility state is always 'hidden' during prerendering, so we have
    // to ignore that case until prerendering finishes (see: `prerenderingchange`
    // event logic below).
    return document.visibilityState === 'hidden' && !document.prerendering
        ? 0
        : Infinity;
};
const onVisibilityUpdate = (event) => {
    // If the document is 'hidden' and no previous hidden timestamp has been
    // set, update it based on the current event data.
    if (document.visibilityState === 'hidden' && firstHiddenTime > -1) {
        // If the event is a 'visibilitychange' event, it means the page was
        // visible prior to this change, so the event timestamp is the first
        // hidden time.
        // However, if the event is not a 'visibilitychange' event, then it must
        // be a 'prerenderingchange' event, and the fact that the document is
        // still 'hidden' from the above check means the tab was activated
        // in a background state and so has always been hidden.
        firstHiddenTime = event.type === 'visibilitychange' ? event.timeStamp : 0;
        // Remove all listeners now that a `firstHiddenTime` value has been set.
        removeChangeListeners();
    }
};
const addChangeListeners = () => {
    addEventListener('visibilitychange', onVisibilityUpdate, true);
    // IMPORTANT: when a page is prerendering, its `visibilityState` is
    // 'hidden', so in order to account for cases where this module checks for
    // visibility during prerendering, an additional check after prerendering
    // completes is also required.
    addEventListener('prerenderingchange', onVisibilityUpdate, true);
};
const removeChangeListeners = () => {
    removeEventListener('visibilitychange', onVisibilityUpdate, true);
    removeEventListener('prerenderingchange', onVisibilityUpdate, true);
};
const getVisibilityWatcher = () => {
    if (firstHiddenTime < 0) {
        // If the document is hidden when this code runs, assume it was hidden
        // since navigation start. This isn't a perfect heuristic, but it's the
        // best we can do until an API is available to support querying past
        // visibilityState.
        firstHiddenTime = initHiddenTime();
        addChangeListeners();
        // Reset the time on bfcache restores.
        (0,_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)(() => {
            // Schedule a task in order to track the `visibilityState` once it's
            // had an opportunity to change to visible in all browsers.
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1133363
            setTimeout(() => {
                firstHiddenTime = initHiddenTime();
                addChangeListeners();
            }, 0);
        });
    }
    return {
        get firstHiddenTime() {
            return firstHiddenTime;
        },
    };
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/lib/initMetric.js":
/*!***********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/initMetric.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMetric: () => (/* binding */ initMetric)
/* harmony export */ });
/* harmony import */ var _bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */ var _generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUniqueID.js */ "./third_party/web-vitals/package/dist/modules/lib/generateUniqueID.js");
/* harmony import */ var _getActivationStart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getActivationStart.js */ "./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js");
/* harmony import */ var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
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

/***/ "./third_party/web-vitals/package/dist/modules/lib/observe.js":
/*!********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/observe.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./third_party/web-vitals/package/dist/modules/lib/onHidden.js":
/*!*********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/onHidden.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onHidden: () => (/* binding */ onHidden)
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
const onHidden = (cb) => {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            cb();
        }
    });
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/lib/runOnce.js":
/*!********************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/runOnce.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runOnce: () => (/* binding */ runOnce)
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
const runOnce = (cb) => {
    let called = false;
    return () => {
        if (!called) {
            cb();
            called = true;
        }
    };
};


/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/lib/whenActivated.js":
/*!**************************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/lib/whenActivated.js ***!
  \**************************************************************************/
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


/***/ })

}]);