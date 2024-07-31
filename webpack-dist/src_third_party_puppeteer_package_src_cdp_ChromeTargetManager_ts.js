"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_ChromeTargetManager_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/ChromeTargetManager.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/ChromeTargetManager.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeTargetManager: () => (/* binding */ ChromeTargetManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _Target_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Target.js */ "./src/third_party/puppeteer/package/src/cdp/Target.ts");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
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
var _ChromeTargetManager_instances, _ChromeTargetManager_connection, _ChromeTargetManager_discoveredTargetsByTargetId, _ChromeTargetManager_attachedTargetsByTargetId, _ChromeTargetManager_attachedTargetsBySessionId, _ChromeTargetManager_ignoredTargets, _ChromeTargetManager_targetFilterCallback, _ChromeTargetManager_targetFactory, _ChromeTargetManager_attachedToTargetListenersBySession, _ChromeTargetManager_detachedFromTargetListenersBySession, _ChromeTargetManager_initializeDeferred, _ChromeTargetManager_targetsIdsForInit, _ChromeTargetManager_waitForInitiallyDiscoveredTargets, _ChromeTargetManager_discoveryFilter, _ChromeTargetManager_storeExistingTargetsForInit, _ChromeTargetManager_setupAttachmentListeners, _ChromeTargetManager_removeAttachmentListeners, _ChromeTargetManager_onSessionDetached, _ChromeTargetManager_onTargetCreated, _ChromeTargetManager_onTargetDestroyed, _ChromeTargetManager_onTargetInfoChanged, _ChromeTargetManager_onAttachedToTarget, _ChromeTargetManager_finishInitializationIfReady, _ChromeTargetManager_onDetachedFromTarget;







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
    constructor(connection, targetFactory, targetFilterCallback, waitForInitiallyDiscoveredTargets = true) {
        super();
        _ChromeTargetManager_instances.add(this);
        _ChromeTargetManager_connection.set(this, void 0);
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
        _ChromeTargetManager_discoveredTargetsByTargetId.set(this, new Map());
        /**
         * A target is added to this map once ChromeTargetManager has created
         * a Target and attached at least once to it.
         */
        _ChromeTargetManager_attachedTargetsByTargetId.set(this, new Map());
        /**
         * Tracks which sessions attach to which target.
         */
        _ChromeTargetManager_attachedTargetsBySessionId.set(this, new Map());
        /**
         * If a target was filtered out by `targetFilterCallback`, we still receive
         * events about it from CDP, but we don't forward them to the rest of Puppeteer.
         */
        _ChromeTargetManager_ignoredTargets.set(this, new Set());
        _ChromeTargetManager_targetFilterCallback.set(this, void 0);
        _ChromeTargetManager_targetFactory.set(this, void 0);
        _ChromeTargetManager_attachedToTargetListenersBySession.set(this, new WeakMap());
        _ChromeTargetManager_detachedFromTargetListenersBySession.set(this, new WeakMap());
        _ChromeTargetManager_initializeDeferred.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create());
        _ChromeTargetManager_targetsIdsForInit.set(this, new Set());
        _ChromeTargetManager_waitForInitiallyDiscoveredTargets.set(this, true);
        _ChromeTargetManager_discoveryFilter.set(this, [{}]);
        _ChromeTargetManager_storeExistingTargetsForInit.set(this, () => {
            if (!__classPrivateFieldGet(this, _ChromeTargetManager_waitForInitiallyDiscoveredTargets, "f")) {
                return;
            }
            for (const [targetId, targetInfo,] of __classPrivateFieldGet(this, _ChromeTargetManager_discoveredTargetsByTargetId, "f").entries()) {
                const targetForFilter = new _Target_js__WEBPACK_IMPORTED_MODULE_5__.CdpTarget(targetInfo, undefined, undefined, this, undefined);
                // Targets from extensions and the browser that will not be
                // auto-attached. Therefore, we should not add them to
                // #targetsIdsForInit.
                const skipTarget = targetInfo.type === 'browser' ||
                    targetInfo.url.startsWith('chrome-extension://');
                if ((!__classPrivateFieldGet(this, _ChromeTargetManager_targetFilterCallback, "f") ||
                    __classPrivateFieldGet(this, _ChromeTargetManager_targetFilterCallback, "f").call(this, targetForFilter)) &&
                    !skipTarget) {
                    __classPrivateFieldGet(this, _ChromeTargetManager_targetsIdsForInit, "f").add(targetId);
                }
            }
        });
        _ChromeTargetManager_onSessionDetached.set(this, (session) => {
            __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_removeAttachmentListeners).call(this, session);
        });
        _ChromeTargetManager_onTargetCreated.set(this, async (event) => {
            __classPrivateFieldGet(this, _ChromeTargetManager_discoveredTargetsByTargetId, "f").set(event.targetInfo.targetId, event.targetInfo);
            this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetDiscovered, event.targetInfo);
            // The connection is already attached to the browser target implicitly,
            // therefore, no new CDPSession is created and we have special handling
            // here.
            if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
                if (__classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").has(event.targetInfo.targetId)) {
                    return;
                }
                const target = __classPrivateFieldGet(this, _ChromeTargetManager_targetFactory, "f").call(this, event.targetInfo, undefined);
                target._initialize();
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").set(event.targetInfo.targetId, target);
            }
        });
        _ChromeTargetManager_onTargetDestroyed.set(this, (event) => {
            const targetInfo = __classPrivateFieldGet(this, _ChromeTargetManager_discoveredTargetsByTargetId, "f").get(event.targetId);
            __classPrivateFieldGet(this, _ChromeTargetManager_discoveredTargetsByTargetId, "f").delete(event.targetId);
            __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_finishInitializationIfReady).call(this, event.targetId);
            if (targetInfo?.type === 'service_worker' &&
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").has(event.targetId)) {
                // Special case for service workers: report TargetGone event when
                // the worker is destroyed.
                const target = __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").get(event.targetId);
                if (target) {
                    this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetGone, target);
                    __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").delete(event.targetId);
                }
            }
        });
        _ChromeTargetManager_onTargetInfoChanged.set(this, (event) => {
            __classPrivateFieldGet(this, _ChromeTargetManager_discoveredTargetsByTargetId, "f").set(event.targetInfo.targetId, event.targetInfo);
            if (__classPrivateFieldGet(this, _ChromeTargetManager_ignoredTargets, "f").has(event.targetInfo.targetId) ||
                !__classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").has(event.targetInfo.targetId) ||
                !event.targetInfo.attached) {
                return;
            }
            const target = __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").get(event.targetInfo.targetId);
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
                this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetChanged, {
                    target,
                    wasInitialized,
                    previousURL,
                });
            }
        });
        _ChromeTargetManager_onAttachedToTarget.set(this, async (parentSession, event) => {
            const targetInfo = event.targetInfo;
            const session = __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").session(event.sessionId);
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
            if (!__classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").isAutoAttached(targetInfo.targetId)) {
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
                __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_finishInitializationIfReady).call(this, targetInfo.targetId);
                await silentDetach();
                if (__classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").has(targetInfo.targetId)) {
                    return;
                }
                const target = __classPrivateFieldGet(this, _ChromeTargetManager_targetFactory, "f").call(this, targetInfo);
                target._initialize();
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").set(targetInfo.targetId, target);
                this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetAvailable, target);
                return;
            }
            const isExistingTarget = __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").has(targetInfo.targetId);
            const target = isExistingTarget
                ? __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").get(targetInfo.targetId)
                : __classPrivateFieldGet(this, _ChromeTargetManager_targetFactory, "f").call(this, targetInfo, session, parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession ? parentSession : undefined);
            if (__classPrivateFieldGet(this, _ChromeTargetManager_targetFilterCallback, "f") && !__classPrivateFieldGet(this, _ChromeTargetManager_targetFilterCallback, "f").call(this, target)) {
                __classPrivateFieldGet(this, _ChromeTargetManager_ignoredTargets, "f").add(targetInfo.targetId);
                __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_finishInitializationIfReady).call(this, targetInfo.targetId);
                await silentDetach();
                return;
            }
            __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_setupAttachmentListeners).call(this, session);
            if (isExistingTarget) {
                session._setTarget(target);
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsBySessionId, "f").set(session.id(), __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").get(targetInfo.targetId));
            }
            else {
                target._initialize();
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").set(targetInfo.targetId, target);
                __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsBySessionId, "f").set(session.id(), target);
            }
            const parentTarget = parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession
                ? parentSession._target()
                : null;
            parentTarget?._addChildTarget(target);
            parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Ready, session);
            __classPrivateFieldGet(this, _ChromeTargetManager_targetsIdsForInit, "f").delete(target._targetId);
            if (!isExistingTarget) {
                this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetAvailable, target);
            }
            __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_finishInitializationIfReady).call(this);
            // TODO: the browser might be shutting down here. What do we do with the
            // error?
            await Promise.all([
                session.send('Target.setAutoAttach', {
                    waitForDebuggerOnStart: true,
                    flatten: true,
                    autoAttach: true,
                    filter: __classPrivateFieldGet(this, _ChromeTargetManager_discoveryFilter, "f"),
                }),
                session.send('Runtime.runIfWaitingForDebugger'),
            ]).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
        });
        _ChromeTargetManager_onDetachedFromTarget.set(this, (parentSession, event) => {
            const target = __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsBySessionId, "f").get(event.sessionId);
            __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsBySessionId, "f").delete(event.sessionId);
            if (!target) {
                return;
            }
            if (parentSession instanceof _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession) {
                parentSession._target()._removeChildTarget(target);
            }
            __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f").delete(target._targetId);
            this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_6__.TargetManagerEvent.TargetGone, target);
        });
        __classPrivateFieldSet(this, _ChromeTargetManager_connection, connection, "f");
        __classPrivateFieldSet(this, _ChromeTargetManager_targetFilterCallback, targetFilterCallback, "f");
        __classPrivateFieldSet(this, _ChromeTargetManager_targetFactory, targetFactory, "f");
        __classPrivateFieldSet(this, _ChromeTargetManager_waitForInitiallyDiscoveredTargets, waitForInitiallyDiscoveredTargets, "f");
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").on('Target.targetCreated', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetCreated, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").on('Target.targetDestroyed', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetDestroyed, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").on('Target.targetInfoChanged', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetInfoChanged, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, __classPrivateFieldGet(this, _ChromeTargetManager_onSessionDetached, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_setupAttachmentListeners).call(this, __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f"));
    }
    async initialize() {
        await __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").send('Target.setDiscoverTargets', {
            discover: true,
            filter: __classPrivateFieldGet(this, _ChromeTargetManager_discoveryFilter, "f"),
        });
        __classPrivateFieldGet(this, _ChromeTargetManager_storeExistingTargetsForInit, "f").call(this);
        await __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").send('Target.setAutoAttach', {
            waitForDebuggerOnStart: true,
            flatten: true,
            autoAttach: true,
            filter: [
                {
                    type: 'page',
                    exclude: true,
                },
                ...__classPrivateFieldGet(this, _ChromeTargetManager_discoveryFilter, "f"),
            ],
        });
        __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_finishInitializationIfReady).call(this);
        await __classPrivateFieldGet(this, _ChromeTargetManager_initializeDeferred, "f").valueOrThrow();
    }
    getChildTargets(target) {
        return target._childTargets();
    }
    dispose() {
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").off('Target.targetCreated', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetCreated, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").off('Target.targetDestroyed', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetDestroyed, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").off('Target.targetInfoChanged', __classPrivateFieldGet(this, _ChromeTargetManager_onTargetInfoChanged, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f").off(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, __classPrivateFieldGet(this, _ChromeTargetManager_onSessionDetached, "f"));
        __classPrivateFieldGet(this, _ChromeTargetManager_instances, "m", _ChromeTargetManager_removeAttachmentListeners).call(this, __classPrivateFieldGet(this, _ChromeTargetManager_connection, "f"));
    }
    getAvailableTargets() {
        return __classPrivateFieldGet(this, _ChromeTargetManager_attachedTargetsByTargetId, "f");
    }
}
_ChromeTargetManager_connection = new WeakMap(), _ChromeTargetManager_discoveredTargetsByTargetId = new WeakMap(), _ChromeTargetManager_attachedTargetsByTargetId = new WeakMap(), _ChromeTargetManager_attachedTargetsBySessionId = new WeakMap(), _ChromeTargetManager_ignoredTargets = new WeakMap(), _ChromeTargetManager_targetFilterCallback = new WeakMap(), _ChromeTargetManager_targetFactory = new WeakMap(), _ChromeTargetManager_attachedToTargetListenersBySession = new WeakMap(), _ChromeTargetManager_detachedFromTargetListenersBySession = new WeakMap(), _ChromeTargetManager_initializeDeferred = new WeakMap(), _ChromeTargetManager_targetsIdsForInit = new WeakMap(), _ChromeTargetManager_waitForInitiallyDiscoveredTargets = new WeakMap(), _ChromeTargetManager_discoveryFilter = new WeakMap(), _ChromeTargetManager_storeExistingTargetsForInit = new WeakMap(), _ChromeTargetManager_onSessionDetached = new WeakMap(), _ChromeTargetManager_onTargetCreated = new WeakMap(), _ChromeTargetManager_onTargetDestroyed = new WeakMap(), _ChromeTargetManager_onTargetInfoChanged = new WeakMap(), _ChromeTargetManager_onAttachedToTarget = new WeakMap(), _ChromeTargetManager_onDetachedFromTarget = new WeakMap(), _ChromeTargetManager_instances = new WeakSet(), _ChromeTargetManager_setupAttachmentListeners = function _ChromeTargetManager_setupAttachmentListeners(session) {
    const listener = (event) => {
        void __classPrivateFieldGet(this, _ChromeTargetManager_onAttachedToTarget, "f").call(this, session, event);
    };
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!__classPrivateFieldGet(this, _ChromeTargetManager_attachedToTargetListenersBySession, "f").has(session));
    __classPrivateFieldGet(this, _ChromeTargetManager_attachedToTargetListenersBySession, "f").set(session, listener);
    session.on('Target.attachedToTarget', listener);
    const detachedListener = (event) => {
        return __classPrivateFieldGet(this, _ChromeTargetManager_onDetachedFromTarget, "f").call(this, session, event);
    };
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!__classPrivateFieldGet(this, _ChromeTargetManager_detachedFromTargetListenersBySession, "f").has(session));
    __classPrivateFieldGet(this, _ChromeTargetManager_detachedFromTargetListenersBySession, "f").set(session, detachedListener);
    session.on('Target.detachedFromTarget', detachedListener);
}, _ChromeTargetManager_removeAttachmentListeners = function _ChromeTargetManager_removeAttachmentListeners(session) {
    const listener = __classPrivateFieldGet(this, _ChromeTargetManager_attachedToTargetListenersBySession, "f").get(session);
    if (listener) {
        session.off('Target.attachedToTarget', listener);
        __classPrivateFieldGet(this, _ChromeTargetManager_attachedToTargetListenersBySession, "f").delete(session);
    }
    if (__classPrivateFieldGet(this, _ChromeTargetManager_detachedFromTargetListenersBySession, "f").has(session)) {
        session.off('Target.detachedFromTarget', __classPrivateFieldGet(this, _ChromeTargetManager_detachedFromTargetListenersBySession, "f").get(session));
        __classPrivateFieldGet(this, _ChromeTargetManager_detachedFromTargetListenersBySession, "f").delete(session);
    }
}, _ChromeTargetManager_finishInitializationIfReady = function _ChromeTargetManager_finishInitializationIfReady(targetId) {
    targetId !== undefined && __classPrivateFieldGet(this, _ChromeTargetManager_targetsIdsForInit, "f").delete(targetId);
    if (__classPrivateFieldGet(this, _ChromeTargetManager_targetsIdsForInit, "f").size === 0) {
        __classPrivateFieldGet(this, _ChromeTargetManager_initializeDeferred, "f").resolve();
    }
};


/***/ })

}]);