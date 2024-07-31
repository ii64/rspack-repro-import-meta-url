"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_src_onFID_ts"],{

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

/***/ "./src/third_party/web-vitals/package/src/lib/getVisibilityWatcher.ts":
/*!****************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/getVisibilityWatcher.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVisibilityWatcher: () => (/* binding */ getVisibilityWatcher)
/* harmony export */ });
/* harmony import */ var _bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
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

/***/ "./src/third_party/web-vitals/package/src/lib/observe.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/observe.ts ***!
  \***************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/lib/onHidden.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/onHidden.ts ***!
  \****************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/lib/polyfills/firstInputPolyfill.ts":
/*!************************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/polyfills/firstInputPolyfill.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstInputPolyfill: () => (/* binding */ firstInputPolyfill),
/* harmony export */   resetFirstInputPolyfill: () => (/* binding */ resetFirstInputPolyfill)
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
let firstInputEvent;
let firstInputDelay;
let firstInputTimeStamp;
let callbacks;
const listenerOpts = { passive: true, capture: true };
const startTimeStamp = new Date();
/**
 * Accepts a callback to be invoked once the first input delay and event
 * are known.
 */
const firstInputPolyfill = (onFirstInput) => {
    callbacks.push(onFirstInput);
    reportFirstInputDelayIfRecordedAndValid();
};
const resetFirstInputPolyfill = () => {
    callbacks = [];
    firstInputDelay = -1;
    firstInputEvent = null;
    eachEventType(addEventListener);
};
/**
 * Records the first input delay and event, so subsequent events can be
 * ignored. All added event listeners are then removed.
 */
const recordFirstInputDelay = (delay, event) => {
    if (!firstInputEvent) {
        firstInputEvent = event;
        firstInputDelay = delay;
        firstInputTimeStamp = new Date();
        eachEventType(removeEventListener);
        reportFirstInputDelayIfRecordedAndValid();
    }
};
/**
 * Reports the first input delay and event (if they're recorded and valid)
 * by running the array of callback functions.
 */
const reportFirstInputDelayIfRecordedAndValid = () => {
    // In some cases the recorded delay is clearly wrong, e.g. it's negative
    // or it's larger than the delta between now and initialization.
    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
    // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
    if (firstInputDelay >= 0 &&
        // @ts-ignore (subtracting two dates always returns a number)
        firstInputDelay < firstInputTimeStamp - startTimeStamp) {
        const entry = {
            entryType: 'first-input',
            name: firstInputEvent.type,
            target: firstInputEvent.target,
            cancelable: firstInputEvent.cancelable,
            startTime: firstInputEvent.timeStamp,
            processingStart: firstInputEvent.timeStamp + firstInputDelay,
        };
        callbacks.forEach(function (callback) {
            callback(entry);
        });
        callbacks = [];
    }
};
/**
 * Handles pointer down events, which are a special case.
 * Pointer events can trigger main or compositor thread behavior.
 * We differentiate these cases based on whether or not we see a
 * 'pointercancel' event, which are fired when we scroll. If we're scrolling
 * we don't need to report input delay since FID excludes scrolling and
 * pinch/zooming.
 */
const onPointerDown = (delay, event) => {
    /**
     * Responds to 'pointerup' events and records a delay. If a pointer up event
     * is the next event after a pointerdown event, then it's not a scroll or
     * a pinch/zoom.
     */
    const onPointerUp = () => {
        recordFirstInputDelay(delay, event);
        removePointerEventListeners();
    };
    /**
     * Responds to 'pointercancel' events and removes pointer listeners.
     * If a 'pointercancel' is the next event to fire after a pointerdown event,
     * it means this is a scroll or pinch/zoom interaction.
     */
    const onPointerCancel = () => {
        removePointerEventListeners();
    };
    /**
     * Removes added pointer event listeners.
     */
    const removePointerEventListeners = () => {
        removeEventListener('pointerup', onPointerUp, listenerOpts);
        removeEventListener('pointercancel', onPointerCancel, listenerOpts);
    };
    addEventListener('pointerup', onPointerUp, listenerOpts);
    addEventListener('pointercancel', onPointerCancel, listenerOpts);
};
/**
 * Handles all input events and records the time between when the event
 * was received by the operating system and when it's JavaScript listeners
 * were able to run.
 */
const onInput = (event) => {
    // Only count cancelable events, which should trigger behavior
    // important to the user.
    if (event.cancelable) {
        // In some browsers `event.timeStamp` returns a `DOMTimeStamp` value
        // (epoch time) instead of the newer `DOMHighResTimeStamp`
        // (document-origin time). To check for that we assume any timestamp
        // greater than 1 trillion is a `DOMTimeStamp`, and compare it using
        // the `Date` object rather than `performance.now()`.
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
        const isEpochTime = event.timeStamp > 1e12;
        const now = isEpochTime ? new Date() : performance.now();
        // Input delay is the delta between when the system received the event
        // (e.g. event.timeStamp) and when it could run the callback (e.g. `now`).
        const delay = now - event.timeStamp;
        if (event.type == 'pointerdown') {
            onPointerDown(delay, event);
        }
        else {
            recordFirstInputDelay(delay, event);
        }
    }
};
/**
 * Invokes the passed callback const for =  each event type with t =>he
 * `onInput` const and =  `listenerOpts =>`.
 */
const eachEventType = (callback) => {
    const eventTypes = ['mousedown', 'keydown', 'touchstart', 'pointerdown'];
    eventTypes.forEach((type) => callback(type, onInput, listenerOpts));
};


/***/ }),

/***/ "./src/third_party/web-vitals/package/src/lib/runOnce.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/runOnce.ts ***!
  \***************************************************************/
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

/***/ "./src/third_party/web-vitals/package/src/onFID.ts":
/*!*********************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/onFID.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* binding */ FIDThresholds),
/* harmony export */   onFID: () => (/* binding */ onFID)
/* harmony export */ });
/* harmony import */ var _lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bfcache.js */ "./src/third_party/web-vitals/package/src/lib/bfcache.ts");
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./src/third_party/web-vitals/package/src/lib/bindReporter.ts");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./src/third_party/web-vitals/package/src/lib/getVisibilityWatcher.ts");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/initMetric.js */ "./src/third_party/web-vitals/package/src/lib/initMetric.ts");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/observe.js */ "./src/third_party/web-vitals/package/src/lib/observe.ts");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/onHidden.js */ "./src/third_party/web-vitals/package/src/lib/onHidden.ts");
/* harmony import */ var _lib_polyfills_firstInputPolyfill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/polyfills/firstInputPolyfill.js */ "./src/third_party/web-vitals/package/src/lib/polyfills/firstInputPolyfill.ts");
/* harmony import */ var _lib_runOnce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/runOnce.js */ "./src/third_party/web-vitals/package/src/lib/runOnce.ts");
/* harmony import */ var _lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/whenActivated.js */ "./src/third_party/web-vitals/package/src/lib/whenActivated.ts");
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









/** Thresholds for FID. See https://web.dev/articles/fid#what_is_a_good_fid_score */
const FIDThresholds = [100, 300];
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
    // Set defaults
    opts = opts || {};
    (0,_lib_whenActivated_js__WEBPACK_IMPORTED_MODULE_8__.whenActivated)(() => {
        const visibilityWatcher = (0,_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_2__.getVisibilityWatcher)();
        let metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_3__.initMetric)('FID');
        let report;
        const handleEntry = (entry) => {
            // Only report if the page wasn't hidden prior to the first input.
            if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                metric.value = entry.processingStart - entry.startTime;
                metric.entries.push(entry);
                report(true);
            }
        };
        const handleEntries = (entries) => {
            entries.forEach(handleEntry);
        };
        const po = (0,_lib_observe_js__WEBPACK_IMPORTED_MODULE_4__.observe)('first-input', handleEntries);
        report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, FIDThresholds, opts.reportAllChanges);
        if (po) {
            (0,_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_5__.onHidden)((0,_lib_runOnce_js__WEBPACK_IMPORTED_MODULE_7__.runOnce)(() => {
                handleEntries(po.takeRecords());
                po.disconnect();
            }));
            (0,_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore)(() => {
                metric = (0,_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_3__.initMetric)('FID');
                report = (0,_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_1__.bindReporter)(onReport, metric, FIDThresholds, opts.reportAllChanges);
                // Browsers don't re-emit FID on bfcache restore so fake it until you make it
                (0,_lib_polyfills_firstInputPolyfill_js__WEBPACK_IMPORTED_MODULE_6__.resetFirstInputPolyfill)();
                (0,_lib_polyfills_firstInputPolyfill_js__WEBPACK_IMPORTED_MODULE_6__.firstInputPolyfill)(handleEntry);
            });
        }
    });
};


/***/ })

}]);