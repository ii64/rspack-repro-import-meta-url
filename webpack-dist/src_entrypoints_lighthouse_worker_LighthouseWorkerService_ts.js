"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_lighthouse_worker_LighthouseWorkerService_ts"],{

/***/ "./src/entrypoints/lighthouse_worker/LighthouseWorkerService.ts":
/*!**********************************************************************!*\
  !*** ./src/entrypoints/lighthouse_worker/LighthouseWorkerService.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puppeteer/puppeteer.js */ "./src/services/puppeteer/puppeteer.ts");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function disableLoggingForTest() {
    console.log = () => undefined; // eslint-disable-line no-console
}
/**
 * ConnectionProxy is a SDK interface, but the implementation has no knowledge it's a parallelConnection.
 * The CDP traffic is smuggled back and forth by the system described in LighthouseProtocolService
 */
class ConnectionProxy {
    constructor(sessionId) {
        Object.defineProperty(this, "sessionId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onDisconnect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sessionId = sessionId;
        this.onMessage = null;
        this.onDisconnect = null;
    }
    setOnMessage(onMessage) {
        this.onMessage = onMessage;
    }
    setOnDisconnect(onDisconnect) {
        this.onDisconnect = onDisconnect;
    }
    getOnDisconnect() {
        return this.onDisconnect;
    }
    getSessionId() {
        return this.sessionId;
    }
    sendRawMessage(message) {
        notifyFrontendViaWorkerMessage('sendProtocolMessage', { message });
    }
    async disconnect() {
        this.onDisconnect?.('force disconnect');
        this.onDisconnect = null;
        this.onMessage = null;
    }
}
let cdpConnection;
let endTimespan;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function invokeLH(action, args) {
    if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('isUnderTest')) {
        disableLoggingForTest();
        args.flags.maxWaitForLoad = 2 * 1000;
    }
    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
    self.listenForStatus(message => {
        notifyFrontendViaWorkerMessage('statusUpdate', { message: message[1] });
    });
    let puppeteerHandle;
    try {
        // For timespan we only need to perform setup on startTimespan.
        // Config, flags, locale, etc. should be stored in the closure of endTimespan.
        if (action === 'endTimespan') {
            if (!endTimespan) {
                throw new Error('Cannot end a timespan before starting one');
            }
            const result = await endTimespan();
            endTimespan = undefined;
            return result;
        }
        const locale = await fetchLocaleData(args.locales);
        const flags = args.flags;
        flags.logLevel = flags.logLevel || 'info';
        flags.channel = 'devtools';
        flags.locale = locale;
        // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
        const config = args.config || self.createConfig(args.categoryIDs, flags.formFactor);
        const url = args.url;
        const { rootTargetId, mainSessionId } = args;
        cdpConnection = new ConnectionProxy(mainSessionId);
        puppeteerHandle =
            await _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerConnection.PuppeteerConnectionHelper.connectPuppeteerToConnectionViaTab({
                connection: cdpConnection,
                rootTargetId,
                // Lighthouse can only audit normal pages.
                isPageTargetCallback: targetInfo => targetInfo.type === 'page',
            });
        const { page } = puppeteerHandle;
        if (!page) {
            throw new Error('Could not create page handle for the target page');
        }
        if (action === 'snapshot') {
            // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
            return await self.snapshot(page, { config, flags });
        }
        if (action === 'startTimespan') {
            // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
            const timespan = await self.startTimespan(page, { config, flags });
            endTimespan = timespan.endTimespan;
            return;
        }
        // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
        return await self.navigation(page, url, { config, flags });
    }
    catch (err) {
        return ({
            fatal: true,
            message: err.message,
            stack: err.stack,
        });
    }
    finally {
        // endTimespan will need to use the same connection as startTimespan.
        if (action !== 'startTimespan') {
            await puppeteerHandle?.browser.disconnect();
        }
    }
}
/**
 * Finds a locale supported by Lighthouse from the user's system locales.
 * If no matching locale is found, or if fetching locale data fails, this function returns nothing
 * and Lighthouse will use `en-US` by default.
 */
async function fetchLocaleData(locales) {
    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
    const locale = self.lookupLocale(locales);
    // If the locale is en-US, no need to fetch locale data.
    if (locale === 'en-US' || locale === 'en') {
        return;
    }
    // Try to load the locale data.
    try {
        const remoteBase = _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase();
        let localeUrl;
        if (remoteBase && remoteBase.base) {
            localeUrl = `${remoteBase.base}third_party/lighthouse/locales/${locale}.json`;
        }
        else {
            localeUrl = new URL(`../../third_party/lighthouse/locales/${locale}.json`, "file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/entrypoints/lighthouse_worker/LighthouseWorkerService.ts").toString();
        }
        const timeoutPromise = new Promise((resolve, reject) => setTimeout(() => reject(new Error('timed out fetching locale')), 5000));
        const localeData = await Promise.race([timeoutPromise, fetch(localeUrl).then(result => result.json())]);
        // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
        self.registerLocaleData(locale, localeData);
        return locale;
    }
    catch (err) {
        console.error(err);
    }
    return;
}
/**
 * `notifyFrontendViaWorkerMessage` and `onFrontendMessage` work with the FE's ProtocolService.
 *
 * onFrontendMessage takes action-wrapped messages and either invoking lighthouse or delivering it CDP traffic.
 * notifyFrontendViaWorkerMessage posts action-wrapped messages to the FE.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function notifyFrontendViaWorkerMessage(action, args) {
    self.postMessage({ action, args });
}
async function onFrontendMessage(event) {
    const messageFromFrontend = event.data;
    switch (messageFromFrontend.action) {
        case 'startTimespan':
        case 'endTimespan':
        case 'snapshot':
        case 'navigation': {
            const result = await invokeLH(messageFromFrontend.action, messageFromFrontend.args);
            if (result && typeof result === 'object') {
                // Report isn't used upstream.
                if ('report' in result) {
                    delete result.report;
                }
                // Logger PerformanceTiming objects cannot be cloned by this worker's `postMessage` function.
                if ('artifacts' in result) {
                    // @ts-expect-error
                    result.artifacts.Timing = JSON.parse(JSON.stringify(result.artifacts.Timing));
                }
            }
            self.postMessage({ id: messageFromFrontend.id, result });
            break;
        }
        case 'dispatchProtocolMessage': {
            cdpConnection?.onMessage?.(messageFromFrontend.args.message);
            break;
        }
        default: {
            throw new Error(`Unknown event: ${event.data}`);
        }
    }
}
self.onmessage = onFrontendMessage;
// Make lighthouse and traceviewer happy.
// @ts-ignore https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global = self;
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.isVinn = true;
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document = {};
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document.documentElement = {};
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document.documentElement.style = {
    WebkitAppearance: 'WebkitAppearance',
};


/***/ }),

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

/***/ "./src/services/puppeteer/puppeteer.ts":
/*!*********************************************!*\
  !*** ./src/services/puppeteer/puppeteer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConnection: () => (/* reexport module object */ _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuppeteerConnection.js */ "./src/services/puppeteer/PuppeteerConnection.ts");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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