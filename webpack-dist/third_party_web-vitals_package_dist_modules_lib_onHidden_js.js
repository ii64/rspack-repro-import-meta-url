"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_web-vitals_package_dist_modules_lib_onHidden_js"],{

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


/***/ })

}]);