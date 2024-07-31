"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_dist_modules_lib_whenIdle_js"],{

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/onHidden.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/onHidden.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/runOnce.js":
/*!************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/runOnce.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/third_party/web-vitals/package/dist/modules/lib/whenIdle.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/lib/whenIdle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   whenIdle: () => (/* binding */ whenIdle)
/* harmony export */ });
/* harmony import */ var _onHidden_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onHidden.js */ "./src/third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */ var _runOnce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runOnce.js */ "./src/third_party/web-vitals/package/dist/modules/lib/runOnce.js");
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


/***/ })

}]);