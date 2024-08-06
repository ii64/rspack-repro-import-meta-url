"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ChromeTargetManager_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js":
/*!************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ChromeTargetManager.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeTargetManager: () => (/* binding */ ChromeTargetManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






function isPageTargetBecomingPrimary(target, newTargetInfo) {
    return Boolean(target._subtype()) && !newTargetInfo.subtype;
}
/**
 * ChromeTargetManager uses the CDP's auto-attach mechanism to intercept
 * new targets and allow the rest of Puppeteer to configure listeners while
 * the target is paused.
 *
 * @internal
 */
class ChromeTargetManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    #connection;
    /**
     * Keeps track of the following events: 'Target.targetCreated',
     * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
     *
     * A target becomes discovered when 'Target.targetCreated' is received.
     * A target is removed from this map once 'Target.targetDestroyed' is
     * received.
     *
     * `targetFilterCallback` has no effect on this map.
     */
    #discoveredTargetsByTargetId = new Map();
    /**
     * A target is added to this map once ChromeTargetManager has created
     * a Target and attached at least once to it.
     */
    #attachedTargetsByTargetId = new Map();
    /**
     * Tracks which sessions attach to which target.
     */
    #attachedTargetsBySessionId = new Map();
    /**
     * If a target was filtered out by `targetFilterCallback`, we still receive
     * events about it from CDP, but we don't forward them to the rest of Puppeteer.
     */
    #ignoredTargets = new Set();
    #targetFilterCallback;
    #targetFactory;
    #attachedToTargetListenersBySession = new WeakMap();
    #detachedFromTargetListenersBySession = new WeakMap();
    #initializeDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #targetsIdsForInit = new Set();
    #waitForInitiallyDiscoveredTargets = true;
    #discoveryFilter = [{}];
    constructor(connection, targetFactory, targetFilterCallback, waitForInitiallyDiscoveredTargets = true) {
        super();
        this.#connection = connection;
        this.#targetFilterCallback = targetFilterCallback;
        this.#targetFactory = targetFactory;
        this.#waitForInitiallyDiscoveredTargets = waitForInitiallyDiscoveredTargets;
        this.#connection.on('Target.targetCreated', this.#onTargetCreated);
        this.#connection.on('Target.targetDestroyed', this.#onTargetDestroyed);
        this.#connection.on('Target.targetInfoChanged', this.#onTargetInfoChanged);
        this.#connection.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, this.#onSessionDetached);
        this.#setupAttachmentListeners(this.#connection);
    }
    #storeExistingTargetsForInit = () => {
        if (!this.#waitForInitiallyDiscoveredTargets) {
            return;
        }
        for (const [targetId, targetInfo,] of this.#discoveredTargetsByTargetId.entries()) {
            const targetForFilter = new _Target_js__WEBPACK_IMPORTED_MODULE_5__.CdpTarget(targetInfo, undefined, undefined, this, undefined);
            // Targets from extensions and the browser that will not be
            // auto-attached. Therefore, we should not add them to
            // #targetsIdsForInit.
            const skipTarget = targetInfo.type === 'browser' ||
                targetInfo.url.startsWith('chrome-extension://');
            if ((!this.#targetFilterCallback ||
                this.#targetFilterCallback(targetForFilter)) &&
                !skipTarget) {
                this.#targetsIdsForInit.add(targetId);
            }
        }
    };
    async initialize() {
        await this.#connection.send('Target.setDiscoverTargets', {
            discover: true,
            filter: this.#discoveryFilter,
        });
        this.#storeExistingTargetsForInit();
        await this.#connection.send('Target.setAutoAttach', {
            waitForDebuggerOnStart: true,
            flatten: true,
            autoAttach: true,
            filter: [
                {
                    type: 'page',
                    exclude: true,
                },
                ...this.#discoveryFilter,
            ],
        });
        this.#finishInitializationIfReady();
        await this.#initializeDeferred.valueOrThrow();
    }
    getChildTargets(target) {
        return target._childTargets();
    }
    dispose() {
        this.#connection.off('Target.targetCreated', this.#onTargetCreated);
        this.#connection.off('Target.targetDestroyed', this.#onTargetDestroyed);
        this.#connection.off('Target.targetInfoChanged', this.#onTargetInfoChanged);
        this.#connection.off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, this.#onSessionDetached);
        this.#removeAttachmentListeners(this.#connection);
    }
    getAvailableTargets() {
        return this.#attachedTargetsByTargetId;
    }
    #setupAttachmentListeners(session) {
        const listener = (event) => {
            void this.#onAttachedToTarget(session, event);
        };
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!this.#attachedToTargetListenersBySession.has(session));
        this.#attachedToTargetListenersBySession.set(session, listener);
        session.on('Target.attachedToTarget', listener);
        const detachedListener = (event) => {
            return this.#onDetachedFromTarget(session, event);
        };
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!this.#detachedFromTargetListenersBySession.has(session));
        this.#detachedFromTargetListenersBySession.set(session, detachedListener);
        session.on('Target.detachedFromTarget', detachedListener);
    }
    #removeAttachmentListeners(session) {
        const listener = this.#attachedToTargetListenersBySession.get(session);
        if (listener) {
            session.off('Target.attachedToTarget', listener);
            this.#attachedToTargetListenersBySession.delete(session);
        }
        if (this.#detachedFromTargetListenersBySession.has(session)) {
            session.off('Target.detachedFromTarget', this.#detachedFromTargetListenersBySession.get(session));
            this.#detachedFromTargetListenersBySession.delete(session);
        }
    }
    #onSessionDetached = (session) => {
        this.#removeAttachmentListeners(session);
    };
    #onTargetCreated = async (event) => {
        this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
        this.emit("targetDiscovered" /* TargetManagerEvent.TargetDiscovered */, event.targetInfo);
        // The connection is already attached to the browser target implicitly,
        // therefore, no new CDPSession is created and we have special handling
        // here.
        if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
            if (this.#attachedTargetsByTargetId.has(event.targetInfo.targetId)) {
                return;
            }
            const target = this.#targetFactory(event.targetInfo, undefined);
            target._initialize();
            this.#attachedTargetsByTargetId.set(event.targetInfo.targetId, target);
        }
    };
    #onTargetDestroyed = (event) => {
        const targetInfo = this.#discoveredTargetsByTargetId.get(event.targetId);
        this.#discoveredTargetsByTargetId.delete(event.targetId);
        this.#finishInitializationIfReady(event.targetId);
        if (targetInfo?.type === 'service_worker' &&
            this.#attachedTargetsByTargetId.has(event.targetId)) {
            // Special case for service workers: report TargetGone event when
            // the worker is destroyed.
            const target = this.#attachedTargetsByTargetId.get(event.targetId);
            if (target) {
                this.emit("targetGone" /* TargetManagerEvent.TargetGone */, target);
                this.#attachedTargetsByTargetId.delete(event.targetId);
            }
        }
    };
    #onTargetInfoChanged = (event) => {
        this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
        if (this.#ignoredTargets.has(event.targetInfo.targetId) ||
            !this.#attachedTargetsByTargetId.has(event.targetInfo.targetId) ||
            !event.targetInfo.attached) {
            return;
        }
        const target = this.#attachedTargetsByTargetId.get(event.targetInfo.targetId);
        if (!target) {
            return;
        }
        const previousURL = target.url();
        const wasInitialized = target._initializedDeferred.value() === _Target_js__WEBPACK_IMPORTED_MODULE_5__.InitializationStatus.SUCCESS;
        if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
            const session = target?._session();
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(session, 'Target that is being activated is missing a CDPSession.');
            session.parentSession()?.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Swapped, session);
        }
        target._targetInfoChanged(event.targetInfo);
        if (wasInitialized && previousURL !== target.url()) {
            this.emit("targetChanged" /* TargetManagerEvent.TargetChanged */, {
                target,
                wasInitialized,
                previousURL,
            });
        }
    };
    #onAttachedToTarget = async (parentSession, event) => {
        const targetInfo = event.targetInfo;
        const session = this.#connection.session(event.sessionId);
        if (!session) {
            throw new Error(`Session ${event.sessionId} was not created.`);
        }
        const silentDetach = async () => {
            await session.send('Runtime.runIfWaitingForDebugger').catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
            // We don't use `session.detach()` because that dispatches all commands on
            // the connection instead of the parent session.
            await parentSession
                .send('Target.detachFromTarget', {
                sessionId: session.id(),
            })
                .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        };
        if (!this.#connection.isAutoAttached(targetInfo.targetId)) {
            return;
        }
        // Special case for service workers: being attached to service workers will
        // prevent them from ever being destroyed. Therefore, we silently detach
        // from service workers unless the connection was manually created via
        // `page.worker()`. To determine this, we use
        // `this.#connection.isAutoAttached(targetInfo.targetId)`. In the future, we
        // should determine if a target is auto-attached or not with the help of
        // CDP.
        if (targetInfo.type === 'service_worker') {
            this.#finishInitializationIfReady(targetInfo.targetId);
            await silentDetach();
            if (this.#attachedTargetsByTargetId.has(targetInfo.targetId)) {
                return;
            }
            const target = this.#targetFactory(targetInfo);
            target._initialize();
            this.#attachedTargetsByTargetId.set(targetInfo.targetId, target);
            this.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */, target);
            return;
        }
        const isExistingTarget = this.#attachedTargetsByTargetId.has(targetInfo.targetId);
        const target = isExistingTarget
            ? this.#attachedTargetsByTargetId.get(targetInfo.targetId)
            : this.#targetFactory(targetInfo, session, parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession ? parentSession : undefined);
        if (this.#targetFilterCallback && !this.#targetFilterCallback(target)) {
            this.#ignoredTargets.add(targetInfo.targetId);
            this.#finishInitializationIfReady(targetInfo.targetId);
            await silentDetach();
            return;
        }
        this.#setupAttachmentListeners(session);
        if (isExistingTarget) {
            session._setTarget(target);
            this.#attachedTargetsBySessionId.set(session.id(), this.#attachedTargetsByTargetId.get(targetInfo.targetId));
        }
        else {
            target._initialize();
            this.#attachedTargetsByTargetId.set(targetInfo.targetId, target);
            this.#attachedTargetsBySessionId.set(session.id(), target);
        }
        const parentTarget = parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession
            ? parentSession._target()
            : null;
        parentTarget?._addChildTarget(target);
        parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Ready, session);
        this.#targetsIdsForInit.delete(target._targetId);
        if (!isExistingTarget) {
            this.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */, target);
        }
        this.#finishInitializationIfReady();
        // TODO: the browser might be shutting down here. What do we do with the
        // error?
        await Promise.all([
            session.send('Target.setAutoAttach', {
                waitForDebuggerOnStart: true,
                flatten: true,
                autoAttach: true,
                filter: this.#discoveryFilter,
            }),
            session.send('Runtime.runIfWaitingForDebugger'),
        ]).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
    };
    #finishInitializationIfReady(targetId) {
        targetId !== undefined && this.#targetsIdsForInit.delete(targetId);
        if (this.#targetsIdsForInit.size === 0) {
            this.#initializeDeferred.resolve();
        }
    }
    #onDetachedFromTarget = (parentSession, event) => {
        const target = this.#attachedTargetsBySessionId.get(event.sessionId);
        this.#attachedTargetsBySessionId.delete(event.sessionId);
        if (!target) {
            return;
        }
        if (parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession) {
            parentSession._target()._removeChildTarget(target);
        }
        this.#attachedTargetsByTargetId.delete(target._targetId);
        this.emit("targetGone" /* TargetManagerEvent.TargetGone */, target);
    };
}
//# sourceMappingURL=ChromeTargetManager.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js":
/*!***********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Target.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpTarget: () => (/* binding */ CdpTarget),
/* harmony export */   DevToolsTarget: () => (/* binding */ DevToolsTarget),
/* harmony export */   InitializationStatus: () => (/* binding */ InitializationStatus),
/* harmony export */   OtherTarget: () => (/* binding */ OtherTarget),
/* harmony export */   PageTarget: () => (/* binding */ PageTarget),
/* harmony export */   WorkerTarget: () => (/* binding */ WorkerTarget)
/* harmony export */ });
/* harmony import */ var _api_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js");
/* harmony import */ var _Page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Page.js");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/WebWorker.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






/**
 * @internal
 */
var InitializationStatus;
(function (InitializationStatus) {
    InitializationStatus["SUCCESS"] = "success";
    InitializationStatus["ABORTED"] = "aborted";
})(InitializationStatus || (InitializationStatus = {}));
/**
 * @internal
 */
class CdpTarget extends _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.Target {
    #browserContext;
    #session;
    #targetInfo;
    #targetManager;
    #sessionFactory;
    #childTargets = new Set();
    _initializedDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
    _isClosedDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
    _targetId;
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
        super();
        this.#session = session;
        this.#targetManager = targetManager;
        this.#targetInfo = targetInfo;
        this.#browserContext = browserContext;
        this._targetId = targetInfo.targetId;
        this.#sessionFactory = sessionFactory;
        if (this.#session && this.#session instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_3__.CdpCDPSession) {
            this.#session._setTarget(this);
        }
    }
    async asPage() {
        const session = this._session();
        if (!session) {
            return await this.createCDPSession().then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, this, null);
            });
        }
        return await _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(session, this, null);
    }
    _subtype() {
        return this.#targetInfo.subtype;
    }
    _session() {
        return this.#session;
    }
    _addChildTarget(target) {
        this.#childTargets.add(target);
    }
    _removeChildTarget(target) {
        this.#childTargets.delete(target);
    }
    _childTargets() {
        return this.#childTargets;
    }
    _sessionFactory() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory;
    }
    createCDPSession() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory(false).then(session => {
            session._setTarget(this);
            return session;
        });
    }
    url() {
        return this.#targetInfo.url;
    }
    type() {
        const type = this.#targetInfo.type;
        switch (type) {
            case 'page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.PAGE;
            case 'background_page':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BACKGROUND_PAGE;
            case 'service_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SERVICE_WORKER;
            case 'shared_worker':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.SHARED_WORKER;
            case 'browser':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.BROWSER;
            case 'webview':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.WEBVIEW;
            case 'tab':
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB;
            default:
                return _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.OTHER;
        }
    }
    _targetManager() {
        if (!this.#targetManager) {
            throw new Error('targetManager is not initialized');
        }
        return this.#targetManager;
    }
    _getTargetInfo() {
        return this.#targetInfo;
    }
    browser() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext.browser();
    }
    browserContext() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext;
    }
    opener() {
        const { openerId } = this.#targetInfo;
        if (!openerId) {
            return;
        }
        return this.browser()
            .targets()
            .find(target => {
            return target._targetId === openerId;
        });
    }
    _targetInfoChanged(targetInfo) {
        this.#targetInfo = targetInfo;
        this._checkIfInitialized();
    }
    _initialize() {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
        return this.type() !== _api_Target_js__WEBPACK_IMPORTED_MODULE_0__.TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
        if (!this._initializedDeferred.resolved()) {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
/**
 * @internal
 */
class PageTarget extends CdpTarget {
    #defaultViewport;
    pagePromise;
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
        super(targetInfo, session, browserContext, targetManager, sessionFactory);
        this.#defaultViewport = defaultViewport ?? undefined;
    }
    _initialize() {
        this._initializedDeferred
            .valueOrThrow()
            .then(async (result) => {
            if (result === InitializationStatus.ABORTED) {
                return;
            }
            const opener = this.opener();
            if (!(opener instanceof PageTarget)) {
                return;
            }
            if (!opener || !opener.pagePromise || this.type() !== 'page') {
                return true;
            }
            const openerPage = await opener.pagePromise;
            if (!openerPage.listenerCount("popup" /* PageEvent.Popup */)) {
                return true;
            }
            const popupPage = await this.page();
            openerPage.emit("popup" /* PageEvent.Popup */, popupPage);
            return true;
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        this._checkIfInitialized();
    }
    async page() {
        if (!this.pagePromise) {
            const session = this._session();
            this.pagePromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return _Page_js__WEBPACK_IMPORTED_MODULE_4__.CdpPage._create(client, this, this.#defaultViewport ?? null);
            });
        }
        return (await this.pagePromise) ?? null;
    }
    _checkIfInitialized() {
        if (this._initializedDeferred.resolved()) {
            return;
        }
        if (this._getTargetInfo().url !== '') {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
/**
 * @internal
 */
class DevToolsTarget extends PageTarget {
}
/**
 * @internal
 */
class WorkerTarget extends CdpTarget {
    #workerPromise;
    async worker() {
        if (!this.#workerPromise) {
            const session = this._session();
            // TODO(einbinder): Make workers send their console logs.
            this.#workerPromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return new _WebWorker_js__WEBPACK_IMPORTED_MODULE_5__.CdpWebWorker(client, this._getTargetInfo().url, this._targetId, this.type(), () => { } /* consoleAPICalled */, () => { } /* exceptionThrown */);
            });
        }
        return await this.#workerPromise;
    }
}
/**
 * @internal
 */
class OtherTarget extends CdpTarget {
}
//# sourceMappingURL=Target.js.map

/***/ })

}]);