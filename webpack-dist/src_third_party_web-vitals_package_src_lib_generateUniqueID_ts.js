"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_web-vitals_package_src_lib_generateUniqueID_ts"],{

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


/***/ })

}]);