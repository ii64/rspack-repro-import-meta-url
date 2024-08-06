"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Browser_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpBrowser: () => (/* binding */ CdpBrowser)
/* harmony export */ });
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/BrowserContext.js");
/* harmony import */ var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js");
/* harmony import */ var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FirefoxTargetManager.js");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






/**
 * @internal
 */
class CdpBrowser extends _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser {
    protocol = 'cdp';
    static async _create(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true) {
        const browser = new CdpBrowser(product, connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets);
        if (ignoreHTTPSErrors) {
            await connection.send('Security.setIgnoreCertificateErrors', {
                ignore: true,
            });
        }
        await browser._attach();
        return browser;
    }
    #defaultViewport;
    #process;
    #connection;
    #closeCallback;
    #targetFilterCallback;
    #isPageTargetCallback;
    #defaultContext;
    #contexts = new Map();
    #targetManager;
    constructor(product, connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true) {
        super();
        product = product || 'chrome';
        this.#defaultViewport = defaultViewport;
        this.#process = process;
        this.#connection = connection;
        this.#closeCallback = closeCallback || (() => { });
        this.#targetFilterCallback =
            targetFilterCallback ||
                (() => {
                    return true;
                });
        this.#setIsPageTargetCallback(isPageTargetCallback);
        if (product === 'firefox') {
            this.#targetManager = new _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_4__.FirefoxTargetManager(connection, this.#createTarget, this.#targetFilterCallback);
        }
        else {
            this.#targetManager = new _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_3__.ChromeTargetManager(connection, this.#createTarget, this.#targetFilterCallback, waitForInitiallyDiscoveredTargets);
        }
        this.#defaultContext = new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(this.#connection, this);
        for (const contextId of contextIds) {
            this.#contexts.set(contextId, new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(this.#connection, this, contextId));
        }
    }
    #emitDisconnected = () => {
        this.emit("disconnected" /* BrowserEvent.Disconnected */, undefined);
    };
    async _attach() {
        this.#connection.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, this.#emitDisconnected);
        this.#targetManager.on("targetAvailable" /* TargetManagerEvent.TargetAvailable */, this.#onAttachedToTarget);
        this.#targetManager.on("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#targetManager.on("targetChanged" /* TargetManagerEvent.TargetChanged */, this.#onTargetChanged);
        this.#targetManager.on("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, this.#onTargetDiscovered);
        await this.#targetManager.initialize();
    }
    _detach() {
        this.#connection.off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, this.#emitDisconnected);
        this.#targetManager.off("targetAvailable" /* TargetManagerEvent.TargetAvailable */, this.#onAttachedToTarget);
        this.#targetManager.off("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#targetManager.off("targetChanged" /* TargetManagerEvent.TargetChanged */, this.#onTargetChanged);
        this.#targetManager.off("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, this.#onTargetDiscovered);
    }
    process() {
        return this.#process ?? null;
    }
    _targetManager() {
        return this.#targetManager;
    }
    #setIsPageTargetCallback(isPageTargetCallback) {
        this.#isPageTargetCallback =
            isPageTargetCallback ||
                ((target) => {
                    return (target.type() === 'page' ||
                        target.type() === 'background_page' ||
                        target.type() === 'webview');
                });
    }
    _getIsPageTargetCallback() {
        return this.#isPageTargetCallback;
    }
    async createBrowserContext(options = {}) {
        const { proxyServer, proxyBypassList } = options;
        const { browserContextId } = await this.#connection.send('Target.createBrowserContext', {
            proxyServer,
            proxyBypassList: proxyBypassList && proxyBypassList.join(','),
        });
        const context = new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowserContext(this.#connection, this, browserContextId);
        this.#contexts.set(browserContextId, context);
        return context;
    }
    browserContexts() {
        return [this.#defaultContext, ...Array.from(this.#contexts.values())];
    }
    defaultBrowserContext() {
        return this.#defaultContext;
    }
    async _disposeContext(contextId) {
        if (!contextId) {
            return;
        }
        await this.#connection.send('Target.disposeBrowserContext', {
            browserContextId: contextId,
        });
        this.#contexts.delete(contextId);
    }
    #createTarget = (targetInfo, session) => {
        const { browserContextId } = targetInfo;
        const context = browserContextId && this.#contexts.has(browserContextId)
            ? this.#contexts.get(browserContextId)
            : this.#defaultContext;
        if (!context) {
            throw new Error('Missing browser context');
        }
        const createSession = (isAutoAttachEmulated) => {
            return this.#connection._createSession(targetInfo, isAutoAttachEmulated);
        };
        const otherTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_5__.OtherTarget(targetInfo, session, context, this.#targetManager, createSession);
        if (targetInfo.url?.startsWith('devtools://')) {
            return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.DevToolsTarget(targetInfo, session, context, this.#targetManager, createSession, this.#defaultViewport ?? null);
        }
        if (this.#isPageTargetCallback(otherTarget)) {
            return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.PageTarget(targetInfo, session, context, this.#targetManager, createSession, this.#defaultViewport ?? null);
        }
        if (targetInfo.type === 'service_worker' ||
            targetInfo.type === 'shared_worker') {
            return new _Target_js__WEBPACK_IMPORTED_MODULE_5__.WorkerTarget(targetInfo, session, context, this.#targetManager, createSession);
        }
        return otherTarget;
    };
    #onAttachedToTarget = async (target) => {
        if (target._isTargetExposed() &&
            (await target._initializedDeferred.valueOrThrow()) ===
                _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS) {
            this.emit("targetcreated" /* BrowserEvent.TargetCreated */, target);
            target.browserContext().emit("targetcreated" /* BrowserContextEvent.TargetCreated */, target);
        }
    };
    #onDetachedFromTarget = async (target) => {
        target._initializedDeferred.resolve(_Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.ABORTED);
        target._isClosedDeferred.resolve();
        if (target._isTargetExposed() &&
            (await target._initializedDeferred.valueOrThrow()) ===
                _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS) {
            this.emit("targetdestroyed" /* BrowserEvent.TargetDestroyed */, target);
            target.browserContext().emit("targetdestroyed" /* BrowserContextEvent.TargetDestroyed */, target);
        }
    };
    #onTargetChanged = ({ target }) => {
        this.emit("targetchanged" /* BrowserEvent.TargetChanged */, target);
        target.browserContext().emit("targetchanged" /* BrowserContextEvent.TargetChanged */, target);
    };
    #onTargetDiscovered = (targetInfo) => {
        this.emit("targetdiscovered" /* BrowserEvent.TargetDiscovered */, targetInfo);
    };
    wsEndpoint() {
        return this.#connection.url();
    }
    async newPage() {
        return await this.#defaultContext.newPage();
    }
    async _createPageInContext(contextId) {
        const { targetId } = await this.#connection.send('Target.createTarget', {
            url: 'about:blank',
            browserContextId: contextId || undefined,
        });
        const target = (await this.waitForTarget(t => {
            return t._targetId === targetId;
        }));
        if (!target) {
            throw new Error(`Missing target for page (id = ${targetId})`);
        }
        const initialized = (await target._initializedDeferred.valueOrThrow()) ===
            _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
        if (!initialized) {
            throw new Error(`Failed to create target for page (id = ${targetId})`);
        }
        const page = await target.page();
        if (!page) {
            throw new Error(`Failed to create a page for context (id = ${contextId})`);
        }
        return page;
    }
    targets() {
        return Array.from(this.#targetManager.getAvailableTargets().values()).filter(target => {
            return (target._isTargetExposed() &&
                target._initializedDeferred.value() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS);
        });
    }
    target() {
        const browserTarget = this.targets().find(target => {
            return target.type() === 'browser';
        });
        if (!browserTarget) {
            throw new Error('Browser target is not found');
        }
        return browserTarget;
    }
    async version() {
        const version = await this.#getVersion();
        return version.product;
    }
    async userAgent() {
        const version = await this.#getVersion();
        return version.userAgent;
    }
    async close() {
        await this.#closeCallback.call(null);
        await this.disconnect();
    }
    disconnect() {
        this.#targetManager.dispose();
        this.#connection.dispose();
        this._detach();
        return Promise.resolve();
    }
    get connected() {
        return !this.#connection._closed;
    }
    #getVersion() {
        return this.#connection.send('Browser.getVersion');
    }
    get debugInfo() {
        return {
            pendingProtocolErrors: this.#connection.getPendingProtocolErrors(),
        };
    }
}
//# sourceMappingURL=Browser.js.map

/***/ })

}]);