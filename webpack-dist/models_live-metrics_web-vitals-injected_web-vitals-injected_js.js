"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_live-metrics_web-vitals-injected_web-vitals-injected_js"],{

/***/ "./models/live-metrics/web-vitals-injected/OnEachInteraction.js":
/*!**********************************************************************!*\
  !*** ./models/live-metrics/web-vitals-injected/OnEachInteraction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onEachInteraction: () => (/* binding */ onEachInteraction)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function onEachInteraction(callback) {
    const eventObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const interactions = new Map();
        const performanceEventTimings = entries.filter((entry) => 'interactionId' in entry)
            .filter(entry => entry.interactionId);
        for (const entry of performanceEventTimings) {
            const interaction = interactions.get(entry.interactionId) || [];
            interaction.push(entry);
            interactions.set(entry.interactionId, interaction);
        }
        // Will report as a single interaction even if parts are in separate frames.
        // Consider splitting by animation frame.
        for (const [interactionId, interaction] of interactions.entries()) {
            const longestEntry = interaction.reduce((prev, curr) => prev.duration >= curr.duration ? prev : curr);
            const value = longestEntry.duration;
            const firstEntryWithTarget = interaction.find(entry => entry.target);
            callback({
                attribution: {
                    interactionTargetElement: firstEntryWithTarget?.target ?? null,
                    interactionTime: longestEntry.startTime,
                    interactionType: longestEntry.name.startsWith('key') ? 'keyboard' : 'pointer',
                    interactionId,
                },
                entries: interaction,
                value,
            });
        }
    });
    eventObserver.observe({
        type: 'first-input',
        buffered: true,
    });
    eventObserver.observe({
        type: 'event',
        durationThreshold: 0,
        buffered: true,
    });
}
//# sourceMappingURL=OnEachInteraction.js.map

/***/ }),

/***/ "./models/live-metrics/web-vitals-injected/web-vitals-injected.js":
/*!************************************************************************!*\
  !*** ./models/live-metrics/web-vitals-injected/web-vitals-injected.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/web-vitals/web-vitals.js */ "./third_party/web-vitals/web-vitals.js");
/* harmony import */ var _OnEachInteraction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnEachInteraction.js */ "./models/live-metrics/web-vitals-injected/OnEachInteraction.js");
/* harmony import */ var _spec_spec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spec/spec.js */ "./models/live-metrics/web-vitals-injected/spec/spec.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { onLCP, onCLS, onINP } = _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__.Attribution;
const { onEachInteraction } = _OnEachInteraction_js__WEBPACK_IMPORTED_MODULE_1__;
function sendEventToDevTools(event) {
    const payload = JSON.stringify(event);
    window[_spec_spec_js__WEBPACK_IMPORTED_MODULE_2__.EVENT_BINDING_NAME](payload);
}
const nodeList = [];
function establishNodeIndex(node) {
    const index = nodeList.length;
    nodeList.push(node);
    return index;
}
/**
 * The data sent over the event binding needs to be JSON serializable, so we
 * can't send DOM nodes directly. Instead we create an ID for each node (see
 * `establishNodeIndex`) that we can later use to retrieve a remote object
 * for that node.
 *
 * This function is used by `Runtime.evaluate` calls to get a remote object
 * for the specified index.
 */
window.getNodeForIndex = (index) => {
    return nodeList[index];
};
function inIframe() {
    try {
        return window.self !== window.top;
    }
    catch {
        return true;
    }
}
function initialize() {
    // `Page.addScriptToEvaluateOnNewDocument` will create a script that runs
    // in all frames. We only want metrics from the main frame so the filter
    // has to be here.
    if (inIframe()) {
        return;
    }
    sendEventToDevTools({ name: 'reset' });
    // We want to treat bfcache navigations like a standard navigations, so emit
    // a reset event when bfcache is restored.
    //
    // Metric functions will also re-emit their values using this listener's callback.
    // To ensure this event is fired before those values are emitted, register this
    // callback before any others.
    _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore(() => {
        sendEventToDevTools({ name: 'reset' });
    });
    onLCP(metric => {
        const event = {
            name: 'LCP',
            value: metric.value,
        };
        const element = metric.attribution.lcpEntry?.element;
        if (element) {
            event.nodeIndex = establishNodeIndex(element);
        }
        sendEventToDevTools(event);
    }, { reportAllChanges: true });
    onCLS(metric => {
        const event = {
            name: 'CLS',
            value: metric.value,
        };
        sendEventToDevTools(event);
    }, { reportAllChanges: true });
    onINP(metric => {
        const event = {
            name: 'INP',
            value: metric.value,
            interactionType: metric.attribution.interactionType,
        };
        const element = metric.attribution.interactionTargetElement;
        if (element) {
            event.nodeIndex = establishNodeIndex(element);
        }
        sendEventToDevTools(event);
    }, { reportAllChanges: true });
    onEachInteraction(interaction => {
        const event = {
            name: 'Interaction',
            duration: interaction.value,
            interactionId: interaction.attribution.interactionId,
            interactionType: interaction.attribution.interactionType,
        };
        const node = interaction.attribution.interactionTargetElement;
        if (node) {
            event.nodeIndex = establishNodeIndex(node);
        }
        sendEventToDevTools(event);
    });
}
initialize();
//# sourceMappingURL=web-vitals-injected.js.map

/***/ }),

/***/ "./third_party/web-vitals/package/dist/modules/deprecated.js":
/*!*******************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/deprecated.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds),
/* harmony export */   onFID: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID)
/* harmony export */ });
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./third_party/web-vitals/package/dist/modules/onFID.js");
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

/***/ "./third_party/web-vitals/package/dist/modules/index.js":
/*!**************************************************************!*\
  !*** ./third_party/web-vitals/package/dist/modules/index.js ***!
  \**************************************************************/
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
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onCLS.js */ "./third_party/web-vitals/package/dist/modules/onCLS.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onFCP.js */ "./third_party/web-vitals/package/dist/modules/onFCP.js");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onINP.js */ "./third_party/web-vitals/package/dist/modules/onINP.js");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onLCP.js */ "./third_party/web-vitals/package/dist/modules/onLCP.js");
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onTTFB.js */ "./third_party/web-vitals/package/dist/modules/onTTFB.js");
/* harmony import */ var _deprecated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated.js */ "./third_party/web-vitals/package/dist/modules/deprecated.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types.js */ "./third_party/web-vitals/package/dist/modules/types.js");
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

/***/ "./third_party/web-vitals/web-vitals.js":
/*!**********************************************!*\
  !*** ./third_party/web-vitals/web-vitals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attribution: () => (/* reexport module object */ _package_dist_modules_attribution_index_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CLSThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.CLSThresholds),
/* harmony export */   FCPThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.FCPThresholds),
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds),
/* harmony export */   INPThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.INPThresholds),
/* harmony export */   LCPThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.LCPThresholds),
/* harmony export */   TTFBThresholds: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.TTFBThresholds),
/* harmony export */   onBFCacheRestore: () => (/* reexport safe */ _package_dist_modules_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__.onBFCacheRestore),
/* harmony export */   onCLS: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onCLS),
/* harmony export */   onFCP: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onFCP),
/* harmony export */   onFID: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onFID),
/* harmony export */   onINP: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onINP),
/* harmony export */   onLCP: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onLCP),
/* harmony export */   onTTFB: () => (/* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onTTFB)
/* harmony export */ });
/* harmony import */ var _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/modules/index.js */ "./third_party/web-vitals/package/dist/modules/index.js");
/* harmony import */ var _package_dist_modules_attribution_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/dist/modules/attribution/index.js */ "./third_party/web-vitals/package/dist/modules/attribution/index.js");
/* harmony import */ var _package_dist_modules_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/dist/modules/lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");



//# sourceMappingURL=web-vitals.js.map

/***/ })

}]);