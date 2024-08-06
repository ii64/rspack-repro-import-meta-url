"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["services_puppeteer_PuppeteerConnection_js"],{

/***/ "./services/puppeteer/PuppeteerConnection.js":
/*!***************************************************!*\
  !*** ./services/puppeteer/PuppeteerConnection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnectionHelper: () => (/* binding */ PuppeteerConnectionHelper)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/puppeteer/puppeteer.js */ "./third_party/puppeteer/puppeteer.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class Transport {
    #connection;
    constructor(connection) {
        this.#connection = connection;
    }
    send(data) {
        this.#connection.sendRawMessage(data);
    }
    close() {
        void this.#connection.disconnect();
    }
    set onmessage(cb) {
        this.#connection.setOnMessage((message) => {
            const data = (message);
            if (!data.sessionId) {
                return;
            }
            return cb(JSON.stringify({
                ...data,
                // Puppeteer is expecting to use the default session, but we give it a non-default session in #connection.
                // Replace that sessionId with undefined so Puppeteer treats it as default.
                sessionId: data.sessionId === this.#connection.getSessionId() ? undefined : data.sessionId,
            }));
        });
    }
    set onclose(cb) {
        const prev = this.#connection.getOnDisconnect();
        this.#connection.setOnDisconnect(reason => {
            if (prev) {
                prev(reason);
            }
            if (cb) {
                cb();
            }
        });
    }
}
class PuppeteerConnection extends _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__.Connection {
    async onMessage(message) {
        const msgObj = JSON.parse(message);
        if (msgObj.sessionId && !this._sessions.has(msgObj.sessionId)) {
            return;
        }
        void super.onMessage(message);
    }
}
class PuppeteerConnectionHelper {
    static async connectPuppeteerToConnectionViaTab(options) {
        const { connection, rootTargetId, isPageTargetCallback } = options;
        // Pass an empty message handler because it will be overwritten by puppeteer anyways.
        const transport = new Transport(connection);
        // url is an empty string in this case parallel to:
        // https://github.com/puppeteer/puppeteer/blob/f63a123ecef86693e6457b07437a96f108f3e3c5/src/common/BrowserConnector.ts#L72
        const puppeteerConnection = new PuppeteerConnection('', transport);
        const browserPromise = _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__.Browser._create('chrome', puppeteerConnection, [] /* contextIds */, false /* ignoreHTTPSErrors */, undefined /* defaultViewport */, undefined /* process */, undefined /* closeCallback */, undefined, target => isPageTargetCallback(target._getTargetInfo()), false /* waitForInitiallyDiscoveredTargets */);
        const [, browser] = await Promise.all([
            puppeteerConnection._createSession({ targetId: rootTargetId }, /* emulateAutoAttach= */ true),
            browserPromise,
        ]);
        await browser.waitForTarget(t => t.type() === 'page');
        const pages = await browser.pages();
        return { page: pages[0], browser, puppeteerConnection };
    }
}
//# sourceMappingURL=PuppeteerConnection.js.map

/***/ }),

/***/ "./third_party/puppeteer/puppeteer.js":
/*!********************************************!*\
  !*** ./third_party/puppeteer/puppeteer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__.CdpBrowser),
/* harmony export */   Connection: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__.Connection),
/* harmony export */   ElementHandle: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__.CdpElementHandle),
/* harmony export */   Frame: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__.CdpFrame),
/* harmony export */   Page: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage),
/* harmony export */   Target: () => (/* reexport safe */ _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__.CdpTarget)
/* harmony export */ });
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=puppeteer.js.map

/***/ })

}]);