"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_TimeoutSettings_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutSettings: () => (/* binding */ TimeoutSettings)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const DEFAULT_TIMEOUT = 30000;
/**
 * @internal
 */
class TimeoutSettings {
    #defaultTimeout;
    #defaultNavigationTimeout;
    constructor() {
        this.#defaultTimeout = null;
        this.#defaultNavigationTimeout = null;
    }
    setDefaultTimeout(timeout) {
        this.#defaultTimeout = timeout;
    }
    setDefaultNavigationTimeout(timeout) {
        this.#defaultNavigationTimeout = timeout;
    }
    navigationTimeout() {
        if (this.#defaultNavigationTimeout !== null) {
            return this.#defaultNavigationTimeout;
        }
        if (this.#defaultTimeout !== null) {
            return this.#defaultTimeout;
        }
        return DEFAULT_TIMEOUT;
    }
    timeout() {
        if (this.#defaultTimeout !== null) {
            return this.#defaultTimeout;
        }
        return DEFAULT_TIMEOUT;
    }
}
//# sourceMappingURL=TimeoutSettings.js.map

/***/ })

}]);