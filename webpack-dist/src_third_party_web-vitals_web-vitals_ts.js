"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_web-vitals_ts"],{

/***/ "./src/third_party/web-vitals/web-vitals.ts":
/*!**************************************************!*\
  !*** ./src/third_party/web-vitals/web-vitals.ts ***!
  \**************************************************/
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
/* harmony import */ var _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/modules/index.js */ "./src/third_party/web-vitals/package/dist/modules/index.js");
/* harmony import */ var _package_dist_modules_attribution_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/dist/modules/attribution/index.js */ "./src/third_party/web-vitals/package/dist/modules/attribution/index.js");
/* harmony import */ var _package_dist_modules_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/dist/modules/lib/bfcache.js */ "./src/third_party/web-vitals/package/dist/modules/lib/bfcache.js");





/***/ }),

/***/ "./src/third_party/web-vitals/package/dist/modules/deprecated.js":
/*!***********************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/deprecated.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIDThresholds: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds),
/* harmony export */   onFID: () => (/* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID)
/* harmony export */ });
/* harmony import */ var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./src/third_party/web-vitals/package/dist/modules/onFID.js");
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

/***/ "./src/third_party/web-vitals/package/dist/modules/index.js":
/*!******************************************************************!*\
  !*** ./src/third_party/web-vitals/package/dist/modules/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _onCLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onCLS.js */ "./src/third_party/web-vitals/package/dist/modules/onCLS.js");
/* harmony import */ var _onFCP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onFCP.js */ "./src/third_party/web-vitals/package/dist/modules/onFCP.js");
/* harmony import */ var _onINP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onINP.js */ "./src/third_party/web-vitals/package/dist/modules/onINP.js");
/* harmony import */ var _onLCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onLCP.js */ "./src/third_party/web-vitals/package/dist/modules/onLCP.js");
/* harmony import */ var _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onTTFB.js */ "./src/third_party/web-vitals/package/dist/modules/onTTFB.js");
/* harmony import */ var _deprecated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated.js */ "./src/third_party/web-vitals/package/dist/modules/deprecated.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types.js */ "./src/third_party/web-vitals/package/dist/modules/types.js");
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









/***/ })

}]);