"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_util_ErrorLike_js-_e7950"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProtocolErrorMessage: () => (/* binding */ createProtocolErrorMessage),
/* harmony export */   isErrnoException: () => (/* binding */ isErrnoException),
/* harmony export */   isErrorLike: () => (/* binding */ isErrorLike),
/* harmony export */   rewriteError: () => (/* binding */ rewriteError)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
function isErrorLike(obj) {
    return (typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj);
}
/**
 * @internal
 */
function isErrnoException(obj) {
    return (isErrorLike(obj) &&
        ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj));
}
/**
 * @internal
 */
function rewriteError(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage ?? error.originalMessage;
    return error;
}
/**
 * @internal
 */
function createProtocolErrorMessage(object) {
    let message = object.error.message;
    // TODO: remove the type checks when we stop connecting to BiDi with a CDP
    // client.
    if (object.error &&
        typeof object.error === 'object' &&
        'data' in object.error) {
        message += ` ${object.error.data}`;
    }
    return message;
}
//# sourceMappingURL=ErrorLike.js.map

/***/ })

}]);