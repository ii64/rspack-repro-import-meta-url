"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Browser_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/Browser.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Browser.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpBrowser: () => (/* binding */ CdpBrowser)
/* harmony export */ });
/* harmony import */ var _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Browser.js */ "./src/third_party/puppeteer/package/src/api/Browser.ts");
/* harmony import */ var _api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/BrowserContext.js */ "./src/third_party/puppeteer/package/src/api/BrowserContext.ts");
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/src/cdp/BrowserContext.ts");
/* harmony import */ var _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChromeTargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/ChromeTargetManager.ts");
/* harmony import */ var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/FirefoxTargetManager.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/cdp/Target.ts");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _CdpBrowser_instances, _CdpBrowser_defaultViewport, _CdpBrowser_process, _CdpBrowser_connection, _CdpBrowser_closeCallback, _CdpBrowser_targetFilterCallback, _CdpBrowser_isPageTargetCallback, _CdpBrowser_defaultContext, _CdpBrowser_contexts, _CdpBrowser_targetManager, _CdpBrowser_emitDisconnected, _CdpBrowser_setIsPageTargetCallback, _CdpBrowser_createTarget, _CdpBrowser_onAttachedToTarget, _CdpBrowser_onDetachedFromTarget, _CdpBrowser_onTargetChanged, _CdpBrowser_onTargetDiscovered, _CdpBrowser_getVersion;








/**
 * @internal
 */
class CdpBrowser extends _api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser {
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
    constructor(product, connection, contextIds, defaultViewport, process, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true) {
        super();
        _CdpBrowser_instances.add(this);
        Object.defineProperty(this, "protocol", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'cdp'
        });
        _CdpBrowser_defaultViewport.set(this, void 0);
        _CdpBrowser_process.set(this, void 0);
        _CdpBrowser_connection.set(this, void 0);
        _CdpBrowser_closeCallback.set(this, void 0);
        _CdpBrowser_targetFilterCallback.set(this, void 0);
        _CdpBrowser_isPageTargetCallback.set(this, void 0);
        _CdpBrowser_defaultContext.set(this, void 0);
        _CdpBrowser_contexts.set(this, new Map());
        _CdpBrowser_targetManager.set(this, void 0);
        _CdpBrowser_emitDisconnected.set(this, () => {
            this.emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent.Disconnected, undefined);
        });
        _CdpBrowser_createTarget.set(this, (targetInfo, session) => {
            const { browserContextId } = targetInfo;
            const context = browserContextId && __classPrivateFieldGet(this, _CdpBrowser_contexts, "f").has(browserContextId)
                ? __classPrivateFieldGet(this, _CdpBrowser_contexts, "f").get(browserContextId)
                : __classPrivateFieldGet(this, _CdpBrowser_defaultContext, "f");
            if (!context) {
                throw new Error('Missing browser context');
            }
            const createSession = (isAutoAttachEmulated) => {
                return __classPrivateFieldGet(this, _CdpBrowser_connection, "f")._createSession(targetInfo, isAutoAttachEmulated);
            };
            const otherTarget = new _Target_js__WEBPACK_IMPORTED_MODULE_6__.OtherTarget(targetInfo, session, context, __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f"), createSession);
            if (targetInfo.url?.startsWith('devtools://')) {
                return new _Target_js__WEBPACK_IMPORTED_MODULE_6__.DevToolsTarget(targetInfo, session, context, __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f"), createSession, __classPrivateFieldGet(this, _CdpBrowser_defaultViewport, "f") ?? null);
            }
            if (__classPrivateFieldGet(this, _CdpBrowser_isPageTargetCallback, "f").call(this, otherTarget)) {
                return new _Target_js__WEBPACK_IMPORTED_MODULE_6__.PageTarget(targetInfo, session, context, __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f"), createSession, __classPrivateFieldGet(this, _CdpBrowser_defaultViewport, "f") ?? null);
            }
            if (targetInfo.type === 'service_worker' ||
                targetInfo.type === 'shared_worker') {
                return new _Target_js__WEBPACK_IMPORTED_MODULE_6__.WorkerTarget(targetInfo, session, context, __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f"), createSession);
            }
            return otherTarget;
        });
        _CdpBrowser_onAttachedToTarget.set(this, async (target) => {
            if (target._isTargetExposed() &&
                (await target._initializedDeferred.valueOrThrow()) ===
                    _Target_js__WEBPACK_IMPORTED_MODULE_6__.InitializationStatus.SUCCESS) {
                this.emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent.TargetCreated, target);
                target.browserContext().emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContextEvent.TargetCreated, target);
            }
        });
        _CdpBrowser_onDetachedFromTarget.set(this, async (target) => {
            target._initializedDeferred.resolve(_Target_js__WEBPACK_IMPORTED_MODULE_6__.InitializationStatus.ABORTED);
            target._isClosedDeferred.resolve();
            if (target._isTargetExposed() &&
                (await target._initializedDeferred.valueOrThrow()) ===
                    _Target_js__WEBPACK_IMPORTED_MODULE_6__.InitializationStatus.SUCCESS) {
                this.emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent.TargetDestroyed, target);
                target.browserContext().emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContextEvent.TargetDestroyed, target);
            }
        });
        _CdpBrowser_onTargetChanged.set(this, ({ target }) => {
            this.emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent.TargetChanged, target);
            target.browserContext().emit(_api_BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContextEvent.TargetChanged, target);
        });
        _CdpBrowser_onTargetDiscovered.set(this, (targetInfo) => {
            this.emit(_api_Browser_js__WEBPACK_IMPORTED_MODULE_0__.BrowserEvent.TargetDiscovered, targetInfo);
        });
        product = product || 'chrome';
        __classPrivateFieldSet(this, _CdpBrowser_defaultViewport, defaultViewport, "f");
        __classPrivateFieldSet(this, _CdpBrowser_process, process, "f");
        __classPrivateFieldSet(this, _CdpBrowser_connection, connection, "f");
        __classPrivateFieldSet(this, _CdpBrowser_closeCallback, closeCallback || (() => { }), "f");
        __classPrivateFieldSet(this, _CdpBrowser_targetFilterCallback, targetFilterCallback ||
            (() => {
                return true;
            }), "f");
        __classPrivateFieldGet(this, _CdpBrowser_instances, "m", _CdpBrowser_setIsPageTargetCallback).call(this, isPageTargetCallback);
        if (product === 'firefox') {
            __classPrivateFieldSet(this, _CdpBrowser_targetManager, new _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_5__.FirefoxTargetManager(connection, __classPrivateFieldGet(this, _CdpBrowser_createTarget, "f"), __classPrivateFieldGet(this, _CdpBrowser_targetFilterCallback, "f")), "f");
        }
        else {
            __classPrivateFieldSet(this, _CdpBrowser_targetManager, new _ChromeTargetManager_js__WEBPACK_IMPORTED_MODULE_4__.ChromeTargetManager(connection, __classPrivateFieldGet(this, _CdpBrowser_createTarget, "f"), __classPrivateFieldGet(this, _CdpBrowser_targetFilterCallback, "f"), waitForInitiallyDiscoveredTargets), "f");
        }
        __classPrivateFieldSet(this, _CdpBrowser_defaultContext, new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_3__.CdpBrowserContext(__classPrivateFieldGet(this, _CdpBrowser_connection, "f"), this), "f");
        for (const contextId of contextIds) {
            __classPrivateFieldGet(this, _CdpBrowser_contexts, "f").set(contextId, new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_3__.CdpBrowserContext(__classPrivateFieldGet(this, _CdpBrowser_connection, "f"), this, contextId));
        }
    }
    async _attach() {
        __classPrivateFieldGet(this, _CdpBrowser_connection, "f").on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent.Disconnected, __classPrivateFieldGet(this, _CdpBrowser_emitDisconnected, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").on(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetAvailable, __classPrivateFieldGet(this, _CdpBrowser_onAttachedToTarget, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").on(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetGone, __classPrivateFieldGet(this, _CdpBrowser_onDetachedFromTarget, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").on(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetChanged, __classPrivateFieldGet(this, _CdpBrowser_onTargetChanged, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").on(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetDiscovered, __classPrivateFieldGet(this, _CdpBrowser_onTargetDiscovered, "f"));
        await __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").initialize();
    }
    _detach() {
        __classPrivateFieldGet(this, _CdpBrowser_connection, "f").off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent.Disconnected, __classPrivateFieldGet(this, _CdpBrowser_emitDisconnected, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").off(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetAvailable, __classPrivateFieldGet(this, _CdpBrowser_onAttachedToTarget, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").off(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetGone, __classPrivateFieldGet(this, _CdpBrowser_onDetachedFromTarget, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").off(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetChanged, __classPrivateFieldGet(this, _CdpBrowser_onTargetChanged, "f"));
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").off(_TargetManager_js__WEBPACK_IMPORTED_MODULE_7__.TargetManagerEvent.TargetDiscovered, __classPrivateFieldGet(this, _CdpBrowser_onTargetDiscovered, "f"));
    }
    process() {
        return __classPrivateFieldGet(this, _CdpBrowser_process, "f") ?? null;
    }
    _targetManager() {
        return __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f");
    }
    _getIsPageTargetCallback() {
        return __classPrivateFieldGet(this, _CdpBrowser_isPageTargetCallback, "f");
    }
    async createBrowserContext(options = {}) {
        const { proxyServer, proxyBypassList } = options;
        const { browserContextId } = await __classPrivateFieldGet(this, _CdpBrowser_connection, "f").send('Target.createBrowserContext', {
            proxyServer,
            proxyBypassList: proxyBypassList && proxyBypassList.join(','),
        });
        const context = new _BrowserContext_js__WEBPACK_IMPORTED_MODULE_3__.CdpBrowserContext(__classPrivateFieldGet(this, _CdpBrowser_connection, "f"), this, browserContextId);
        __classPrivateFieldGet(this, _CdpBrowser_contexts, "f").set(browserContextId, context);
        return context;
    }
    browserContexts() {
        return [__classPrivateFieldGet(this, _CdpBrowser_defaultContext, "f"), ...Array.from(__classPrivateFieldGet(this, _CdpBrowser_contexts, "f").values())];
    }
    defaultBrowserContext() {
        return __classPrivateFieldGet(this, _CdpBrowser_defaultContext, "f");
    }
    async _disposeContext(contextId) {
        if (!contextId) {
            return;
        }
        await __classPrivateFieldGet(this, _CdpBrowser_connection, "f").send('Target.disposeBrowserContext', {
            browserContextId: contextId,
        });
        __classPrivateFieldGet(this, _CdpBrowser_contexts, "f").delete(contextId);
    }
    wsEndpoint() {
        return __classPrivateFieldGet(this, _CdpBrowser_connection, "f").url();
    }
    async newPage() {
        return await __classPrivateFieldGet(this, _CdpBrowser_defaultContext, "f").newPage();
    }
    async _createPageInContext(contextId) {
        const { targetId } = await __classPrivateFieldGet(this, _CdpBrowser_connection, "f").send('Target.createTarget', {
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
            _Target_js__WEBPACK_IMPORTED_MODULE_6__.InitializationStatus.SUCCESS;
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
        return Array.from(__classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").getAvailableTargets().values()).filter(target => {
            return (target._isTargetExposed() &&
                target._initializedDeferred.value() === _Target_js__WEBPACK_IMPORTED_MODULE_6__.InitializationStatus.SUCCESS);
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
        const version = await __classPrivateFieldGet(this, _CdpBrowser_instances, "m", _CdpBrowser_getVersion).call(this);
        return version.product;
    }
    async userAgent() {
        const version = await __classPrivateFieldGet(this, _CdpBrowser_instances, "m", _CdpBrowser_getVersion).call(this);
        return version.userAgent;
    }
    async close() {
        await __classPrivateFieldGet(this, _CdpBrowser_closeCallback, "f").call(null);
        await this.disconnect();
    }
    disconnect() {
        __classPrivateFieldGet(this, _CdpBrowser_targetManager, "f").dispose();
        __classPrivateFieldGet(this, _CdpBrowser_connection, "f").dispose();
        this._detach();
        return Promise.resolve();
    }
    get connected() {
        return !__classPrivateFieldGet(this, _CdpBrowser_connection, "f")._closed;
    }
    get debugInfo() {
        return {
            pendingProtocolErrors: __classPrivateFieldGet(this, _CdpBrowser_connection, "f").getPendingProtocolErrors(),
        };
    }
}
_CdpBrowser_defaultViewport = new WeakMap(), _CdpBrowser_process = new WeakMap(), _CdpBrowser_connection = new WeakMap(), _CdpBrowser_closeCallback = new WeakMap(), _CdpBrowser_targetFilterCallback = new WeakMap(), _CdpBrowser_isPageTargetCallback = new WeakMap(), _CdpBrowser_defaultContext = new WeakMap(), _CdpBrowser_contexts = new WeakMap(), _CdpBrowser_targetManager = new WeakMap(), _CdpBrowser_emitDisconnected = new WeakMap(), _CdpBrowser_createTarget = new WeakMap(), _CdpBrowser_onAttachedToTarget = new WeakMap(), _CdpBrowser_onDetachedFromTarget = new WeakMap(), _CdpBrowser_onTargetChanged = new WeakMap(), _CdpBrowser_onTargetDiscovered = new WeakMap(), _CdpBrowser_instances = new WeakSet(), _CdpBrowser_setIsPageTargetCallback = function _CdpBrowser_setIsPageTargetCallback(isPageTargetCallback) {
    __classPrivateFieldSet(this, _CdpBrowser_isPageTargetCallback, isPageTargetCallback ||
        ((target) => {
            return (target.type() === 'page' ||
                target.type() === 'background_page' ||
                target.type() === 'webview');
        }), "f");
}, _CdpBrowser_getVersion = function _CdpBrowser_getVersion() {
    return __classPrivateFieldGet(this, _CdpBrowser_connection, "f").send('Browser.getVersion');
};


/***/ })

}]);