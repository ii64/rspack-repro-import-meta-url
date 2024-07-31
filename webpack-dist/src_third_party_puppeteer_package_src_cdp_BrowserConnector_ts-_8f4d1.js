"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_BrowserConnector_ts-_8f4d1"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/BrowserConnector.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/BrowserConnector.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToCdpBrowser: () => (/* binding */ _connectToCdpBrowser)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/src/cdp/Browser.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/cdp/Connection.ts");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect` with `protocol: 'cdp'`.
 *
 * @internal
 */
async function _connectToCdpBrowser(connectionTransport, url, options) {
    const { ignoreHTTPSErrors = false, defaultViewport = _common_util_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VIEWPORT, targetFilter, _isPageTarget: isPageTarget, slowMo = 0, protocolTimeout, } = options;
    const connection = new _Connection_js__WEBPACK_IMPORTED_MODULE_2__.Connection(url, connectionTransport, slowMo, protocolTimeout);
    const version = await connection.send('Browser.getVersion');
    const product = version.product.toLowerCase().includes('firefox')
        ? 'firefox'
        : 'chrome';
    const { browserContextIds } = await connection.send('Target.getBrowserContexts');
    const browser = await _Browser_js__WEBPACK_IMPORTED_MODULE_1__.CdpBrowser._create(product || 'chrome', connection, browserContextIds, ignoreHTTPSErrors, defaultViewport, undefined, () => {
        return connection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError);
    }, targetFilter, isPageTarget);
    return browser;
}


/***/ })

}]);