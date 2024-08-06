"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_NetworkManagerEvents_js-_954c0"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManagerEvent: () => (/* binding */ NetworkManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var NetworkManagerEvent;
(function (NetworkManagerEvent) {
    NetworkManagerEvent.Request = Symbol('NetworkManager.Request');
    NetworkManagerEvent.RequestServedFromCache = Symbol('NetworkManager.RequestServedFromCache');
    NetworkManagerEvent.Response = Symbol('NetworkManager.Response');
    NetworkManagerEvent.RequestFailed = Symbol('NetworkManager.RequestFailed');
    NetworkManagerEvent.RequestFinished = Symbol('NetworkManager.RequestFinished');
})(NetworkManagerEvent || (NetworkManagerEvent = {}));
//# sourceMappingURL=NetworkManagerEvents.js.map

/***/ })

}]);