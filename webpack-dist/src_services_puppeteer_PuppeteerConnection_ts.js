"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_services_puppeteer_PuppeteerConnection_ts"],{

/***/ "./src/services/puppeteer/PuppeteerConnection.ts":
/*!*******************************************************!*\
  !*** ./src/services/puppeteer/PuppeteerConnection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnectionHelper: () => (/* binding */ PuppeteerConnectionHelper)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/puppeteer/puppeteer.js */ "./src/third_party/puppeteer/puppeteer.ts");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Transport_connection;

class Transport {
    constructor(connection) {
        _Transport_connection.set(this, void 0);
        __classPrivateFieldSet(this, _Transport_connection, connection, "f");
    }
    send(data) {
        __classPrivateFieldGet(this, _Transport_connection, "f").sendRawMessage(data);
    }
    close() {
        void __classPrivateFieldGet(this, _Transport_connection, "f").disconnect();
    }
    set onmessage(cb) {
        __classPrivateFieldGet(this, _Transport_connection, "f").setOnMessage((message) => {
            const data = (message);
            if (!data.sessionId) {
                return;
            }
            return cb(JSON.stringify({
                ...data,
                // Puppeteer is expecting to use the default session, but we give it a non-default session in #connection.
                // Replace that sessionId with undefined so Puppeteer treats it as default.
                sessionId: data.sessionId === __classPrivateFieldGet(this, _Transport_connection, "f").getSessionId() ? undefined : data.sessionId,
            }));
        });
    }
    set onclose(cb) {
        const prev = __classPrivateFieldGet(this, _Transport_connection, "f").getOnDisconnect();
        __classPrivateFieldGet(this, _Transport_connection, "f").setOnDisconnect(reason => {
            if (prev) {
                prev(reason);
            }
            if (cb) {
                cb();
            }
        });
    }
}
_Transport_connection = new WeakMap();
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


/***/ }),

/***/ "./src/third_party/puppeteer/puppeteer.ts":
/*!************************************************!*\
  !*** ./src/third_party/puppeteer/puppeteer.ts ***!
  \************************************************/
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
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Browser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Connection.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Frame.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Frame.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_ElementHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/ElementHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Page.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _package_lib_esm_puppeteer_cdp_Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package/lib/esm/puppeteer/cdp/Target.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);