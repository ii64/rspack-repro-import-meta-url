"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_common_BrowserConnector_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserConnector.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserConnector.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToBiDiBrowser: () => (/* binding */ _connectToBiDiBrowser)
/* harmony export */ });
/* harmony import */ var _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/Connection.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */
async function _connectToBiDiBrowser(connectionTransport, url, options) {
    const { ignoreHTTPSErrors = false, defaultViewport = _common_util_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VIEWPORT } = options;
    const { bidiConnection, cdpConnection, closeCallback } = await getBiDiConnection(connectionTransport, url, options);
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const bidiBrowser = await BiDi.BidiBrowser.create({
        connection: bidiConnection,
        cdpConnection,
        closeCallback,
        process: undefined,
        defaultViewport: defaultViewport,
        ignoreHTTPSErrors: ignoreHTTPSErrors,
    });
    return bidiBrowser;
}
/**
 * Returns a BiDiConnection established to the endpoint specified by the options and a
 * callback closing the browser. Callback depends on whether the connection is pure BiDi
 * or BiDi over CDP.
 * The method tries to connect to the browser using pure BiDi protocol, and falls back
 * to BiDi over CDP.
 */
async function getBiDiConnection(connectionTransport, url, options) {
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const { ignoreHTTPSErrors = false, slowMo = 0, protocolTimeout } = options;
    // Try pure BiDi first.
    const pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, slowMo, protocolTimeout);
    try {
        const result = await pureBidiConnection.send('session.status', {});
        if ('type' in result && result.type === 'success') {
            // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
            return {
                bidiConnection: pureBidiConnection,
                closeCallback: async () => {
                    await pureBidiConnection.send('browser.close', {}).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
                },
            };
        }
    }
    catch (e) {
        if (!(e instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.ProtocolError)) {
            // Unexpected exception not related to BiDi / CDP. Rethrow.
            throw e;
        }
    }
    // Unbind the connection to avoid memory leaks.
    pureBidiConnection.unbind();
    // Fall back to CDP over BiDi reusing the WS connection.
    const cdpConnection = new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_0__.Connection(url, connectionTransport, slowMo, protocolTimeout);
    const version = await cdpConnection.send('Browser.getVersion');
    if (version.product.toLowerCase().includes('firefox')) {
        throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
    }
    const bidiOverCdpConnection = await BiDi.connectBidiOverCdp(cdpConnection, {
        acceptInsecureCerts: ignoreHTTPSErrors,
    });
    return {
        cdpConnection,
        bidiConnection: bidiOverCdpConnection,
        closeCallback: async () => {
            // In case of BiDi over CDP, we need to close browser via CDP.
            await cdpConnection.send('Browser.close').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        },
    };
}
//# sourceMappingURL=BrowserConnector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToCdpBrowser: () => (/* binding */ _connectToCdpBrowser)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _Browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
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
//# sourceMappingURL=BrowserConnector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserConnector.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserConnector.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _connectToBrowser: () => (/* binding */ _connectToBrowser)
/* harmony export */ });
/* harmony import */ var _bidi_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bidi/BrowserConnector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/BrowserConnector.js");
/* harmony import */ var _cdp_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cdp/BrowserConnector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserConnector.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/environment.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





const getWebSocketTransportClass = async () => {
    return _environment_js__WEBPACK_IMPORTED_MODULE_2__.isNode
        ? (await __webpack_require__.e(/*! import() */ "src_third_party_puppeteer_package_lib_esm_puppeteer_node_NodeWebSocketTransport_js-_247b1").then(__webpack_require__.bind(__webpack_require__, /*! ../node/NodeWebSocketTransport.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js"))).NodeWebSocketTransport
        : (await __webpack_require__.e(/*! import() */ "src_third_party_puppeteer_package_lib_esm_puppeteer_common_BrowserWebSocketTransport_js").then(__webpack_require__.bind(__webpack_require__, /*! ../common/BrowserWebSocketTransport.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserWebSocketTransport.js")))
            .BrowserWebSocketTransport;
};
/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect`. This method attaches Puppeteer to an existing browser instance.
 *
 * @internal
 */
async function _connectToBrowser(options) {
    const { connectionTransport, endpointUrl } = await getConnectionTransport(options);
    if (options.protocol === 'webDriverBiDi') {
        const bidiBrowser = await (0,_bidi_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__._connectToBiDiBrowser)(connectionTransport, endpointUrl, options);
        return bidiBrowser;
    }
    else {
        const cdpBrowser = await (0,_cdp_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_1__._connectToCdpBrowser)(connectionTransport, endpointUrl, options);
        return cdpBrowser;
    }
}
/**
 * Establishes a websocket connection by given options and returns both transport and
 * endpoint url the transport is connected to.
 */
async function getConnectionTransport(options) {
    const { browserWSEndpoint, browserURL, transport, headers = {} } = options;
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(Number(!!browserWSEndpoint) + Number(!!browserURL) + Number(!!transport) ===
        1, 'Exactly one of browserWSEndpoint, browserURL or transport must be passed to puppeteer.connect');
    if (transport) {
        return { connectionTransport: transport, endpointUrl: '' };
    }
    else if (browserWSEndpoint) {
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
        return {
            connectionTransport: connectionTransport,
            endpointUrl: browserWSEndpoint,
        };
    }
    else if (browserURL) {
        const connectionURL = await getWSEndpoint(browserURL);
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(connectionURL);
        return {
            connectionTransport: connectionTransport,
            endpointUrl: connectionURL,
        };
    }
    throw new Error('Invalid connection options');
}
async function getWSEndpoint(browserURL) {
    const endpointURL = new URL('/json/version', browserURL);
    try {
        const result = await globalThis.fetch(endpointURL.toString(), {
            method: 'GET',
        });
        if (!result.ok) {
            throw new Error(`HTTP ${result.statusText}`);
        }
        const data = await result.json();
        return data.webSocketDebuggerUrl;
    }
    catch (error) {
        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.isErrorLike)(error)) {
            error.message =
                `Failed to fetch browser webSocket URL from ${endpointURL}: ` +
                    error.message;
        }
        throw error;
    }
}
//# sourceMappingURL=BrowserConnector.js.map

/***/ })

}]);