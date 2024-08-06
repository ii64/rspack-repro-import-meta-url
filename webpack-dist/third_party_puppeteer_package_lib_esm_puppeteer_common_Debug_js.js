"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_Debug_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js":
/*!*************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   getCapturedLogs: () => (/* binding */ getCapturedLogs),
/* harmony export */   importDebug: () => (/* binding */ importDebug),
/* harmony export */   setLogCapture: () => (/* binding */ setLogCapture)
/* harmony export */ });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
let debugModule = null;
/**
 * @internal
 */
async function importDebug() {
    if (!debugModule) {
        debugModule = (await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; })).default;
    }
    return debugModule;
}
/**
 * A debug function that can be used in any environment.
 *
 * @remarks
 * If used in Node, it falls back to the
 * {@link https://www.npmjs.com/package/debug | debug module}. In the browser it
 * uses `console.log`.
 *
 * In Node, use the `DEBUG` environment variable to control logging:
 *
 * ```
 * DEBUG=* // logs all channels
 * DEBUG=foo // logs the `foo` channel
 * DEBUG=foo* // logs any channels starting with `foo`
 * ```
 *
 * In the browser, set `window.__PUPPETEER_DEBUG` to a string:
 *
 * ```
 * window.__PUPPETEER_DEBUG='*'; // logs all channels
 * window.__PUPPETEER_DEBUG='foo'; // logs the `foo` channel
 * window.__PUPPETEER_DEBUG='foo*'; // logs any channels starting with `foo`
 * ```
 *
 * @example
 *
 * ```
 * const log = debug('Page');
 *
 * log('new page created')
 * // logs "Page: new page created"
 * ```
 *
 * @param prefix - this will be prefixed to each log.
 * @returns a function that can be called to log to that debug channel.
 *
 * @internal
 */
const debug = (prefix) => {
    if (_environment_js__WEBPACK_IMPORTED_MODULE_0__.isNode) {
        return async (...logArgs) => {
            if (captureLogs) {
                capturedLogs.push(prefix + logArgs);
            }
            (await importDebug())(prefix)(logArgs);
        };
    }
    return (...logArgs) => {
        const debugLevel = globalThis.__PUPPETEER_DEBUG;
        if (!debugLevel) {
            return;
        }
        const everythingShouldBeLogged = debugLevel === '*';
        const prefixMatchesDebugLevel = everythingShouldBeLogged ||
            /**
             * If the debug level is `foo*`, that means we match any prefix that
             * starts with `foo`. If the level is `foo`, we match only the prefix
             * `foo`.
             */
            (debugLevel.endsWith('*')
                ? prefix.startsWith(debugLevel)
                : prefix === debugLevel);
        if (!prefixMatchesDebugLevel) {
            return;
        }
        // eslint-disable-next-line no-console
        console.log(`${prefix}:`, ...logArgs);
    };
};
/**
 * @internal
 */
let capturedLogs = [];
/**
 * @internal
 */
let captureLogs = false;
/**
 * @internal
 */
function setLogCapture(value) {
    capturedLogs = [];
    captureLogs = value;
}
/**
 * @internal
 */
function getCapturedLogs() {
    return capturedLogs;
}
//# sourceMappingURL=Debug.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/environment.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNode: () => (/* binding */ isNode)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const isNode = !!(typeof process !== 'undefined' && process.version);
//# sourceMappingURL=environment.js.map

/***/ })

}]);