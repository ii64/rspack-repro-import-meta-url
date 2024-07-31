"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_src_attribution_deprecated_ts"],{

/***/ "./src/third_party/web-vitals/package/src/attribution/deprecated.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/attribution/deprecated.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_1__.FIDThresholds),
/* harmony export */   onFID: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID)
/* harmony export */ });
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./src/third_party/web-vitals/package/src/attribution/onFID.ts");
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../onFID.js */ "./src/third_party/web-vitals/package/src/onFID.ts");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./src/third_party/web-vitals/package/src/types.ts");
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

/***/ "./src/third_party/web-vitals/package/src/attribution/onFID.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/attribution/onFID.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onFID: () => (/* binding */ onFID)
/* harmony export */ });
/* harmony import */ var _lib_getLoadState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/getLoadState.js */ "./src/third_party/web-vitals/package/src/lib/getLoadState.ts");
/* harmony import */ var _lib_getSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getSelector.js */ "./src/third_party/web-vitals/package/src/lib/getSelector.ts");
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../onFID.js */ "./src/third_party/web-vitals/package/src/onFID.ts");
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

/***/ "./src/third_party/web-vitals/package/src/lib/getLoadState.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/getLoadState.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoadState: () => (/* binding */ getLoadState)
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

/***/ "./src/third_party/web-vitals/package/src/lib/getSelector.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/src/lib/getSelector.ts ***!
  \*******************************************************************/
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