"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_TaskQueue_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/TaskQueue.js":
/*!*****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/TaskQueue.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskQueue: () => (/* binding */ TaskQueue)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
class TaskQueue {
    #chain;
    constructor() {
        this.#chain = Promise.resolve();
    }
    postTask(task) {
        const result = this.#chain.then(task);
        this.#chain = result.then(() => {
            return undefined;
        }, () => {
            return undefined;
        });
        return result;
    }
}
//# sourceMappingURL=TaskQueue.js.map

/***/ })

}]);