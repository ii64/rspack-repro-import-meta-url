"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_FirefoxTargetManager_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/FirefoxTargetManager.ts":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/FirefoxTargetManager.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirefoxTargetManager: () => (/* binding */ FirefoxTargetManager)
/* harmony export */ });
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts");
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
var _FirefoxTargetManager_instances, _FirefoxTargetManager_connection, _FirefoxTargetManager_discoveredTargetsByTargetId, _FirefoxTargetManager_availableTargetsByTargetId, _FirefoxTargetManager_availableTargetsBySessionId, _FirefoxTargetManager_targetFilterCallback, _FirefoxTargetManager_targetFactory, _FirefoxTargetManager_attachedToTargetListenersBySession, _FirefoxTargetManager_initializeDeferred, _FirefoxTargetManager_targetsIdsForInit, _FirefoxTargetManager_onSessionDetached, _FirefoxTargetManager_onTargetCreated, _FirefoxTargetManager_onTargetDestroyed, _FirefoxTargetManager_onAttachedToTarget, _FirefoxTargetManager_finishInitializationIfReady;





/**
 * FirefoxTargetManager implements target management using
 * `Target.setDiscoverTargets` without using auto-attach. It, therefore, creates
 * targets that lazily establish their CDP sessions.
 *
 * Although the approach is potentially flaky, there is no other way for Firefox
 * because Firefox's CDP implementation does not support auto-attach.
 *
 * Firefox does not support targetInfoChanged and detachedFromTarget events:
 *
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=1610855
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=1636979
 *   @internal
 */
class FirefoxTargetManager extends _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {
    constructor(connection, targetFactory, targetFilterCallback) {
        super();
        _FirefoxTargetManager_instances.add(this);
        _FirefoxTargetManager_connection.set(this, void 0);
        /**
         * Keeps track of the following events: 'Target.targetCreated',
         * 'Target.targetDestroyed'.
         *
         * A target becomes discovered when 'Target.targetCreated' is received.
         * A target is removed from this map once 'Target.targetDestroyed' is
         * received.
         *
         * `targetFilterCallback` has no effect on this map.
         */
        _FirefoxTargetManager_discoveredTargetsByTargetId.set(this, new Map());
        /**
         * Keeps track of targets that were created via 'Target.targetCreated'
         * and which one are not filtered out by `targetFilterCallback`.
         *
         * The target is removed from here once it's been destroyed.
         */
        _FirefoxTargetManager_availableTargetsByTargetId.set(this, new Map());
        /**
         * Tracks which sessions attach to which target.
         */
        _FirefoxTargetManager_availableTargetsBySessionId.set(this, new Map());
        _FirefoxTargetManager_targetFilterCallback.set(this, void 0);
        _FirefoxTargetManager_targetFactory.set(this, void 0);
        _FirefoxTargetManager_attachedToTargetListenersBySession.set(this, new WeakMap());
        _FirefoxTargetManager_initializeDeferred.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_3__.Deferred.create());
        _FirefoxTargetManager_targetsIdsForInit.set(this, new Set());
        _FirefoxTargetManager_onSessionDetached.set(this, (session) => {
            this.removeSessionListeners(session);
            __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsBySessionId, "f").delete(session.id());
        });
        _FirefoxTargetManager_onTargetCreated.set(this, async (event) => {
            if (__classPrivateFieldGet(this, _FirefoxTargetManager_discoveredTargetsByTargetId, "f").has(event.targetInfo.targetId)) {
                return;
            }
            __classPrivateFieldGet(this, _FirefoxTargetManager_discoveredTargetsByTargetId, "f").set(event.targetInfo.targetId, event.targetInfo);
            if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
                const target = __classPrivateFieldGet(this, _FirefoxTargetManager_targetFactory, "f").call(this, event.targetInfo, undefined);
                target._initialize();
                __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").set(event.targetInfo.targetId, target);
                __classPrivateFieldGet(this, _FirefoxTargetManager_instances, "m", _FirefoxTargetManager_finishInitializationIfReady).call(this, target._targetId);
                return;
            }
            const target = __classPrivateFieldGet(this, _FirefoxTargetManager_targetFactory, "f").call(this, event.targetInfo, undefined);
            if (__classPrivateFieldGet(this, _FirefoxTargetManager_targetFilterCallback, "f") && !__classPrivateFieldGet(this, _FirefoxTargetManager_targetFilterCallback, "f").call(this, target)) {
                __classPrivateFieldGet(this, _FirefoxTargetManager_instances, "m", _FirefoxTargetManager_finishInitializationIfReady).call(this, event.targetInfo.targetId);
                return;
            }
            target._initialize();
            __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").set(event.targetInfo.targetId, target);
            this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_4__.TargetManagerEvent.TargetAvailable, target);
            __classPrivateFieldGet(this, _FirefoxTargetManager_instances, "m", _FirefoxTargetManager_finishInitializationIfReady).call(this, target._targetId);
        });
        _FirefoxTargetManager_onTargetDestroyed.set(this, (event) => {
            __classPrivateFieldGet(this, _FirefoxTargetManager_discoveredTargetsByTargetId, "f").delete(event.targetId);
            __classPrivateFieldGet(this, _FirefoxTargetManager_instances, "m", _FirefoxTargetManager_finishInitializationIfReady).call(this, event.targetId);
            const target = __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").get(event.targetId);
            if (target) {
                this.emit(_TargetManager_js__WEBPACK_IMPORTED_MODULE_4__.TargetManagerEvent.TargetGone, target);
                __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").delete(event.targetId);
            }
        });
        _FirefoxTargetManager_onAttachedToTarget.set(this, async (parentSession, event) => {
            const targetInfo = event.targetInfo;
            const session = __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").session(event.sessionId);
            if (!session) {
                throw new Error(`Session ${event.sessionId} was not created.`);
            }
            const target = __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").get(targetInfo.targetId);
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(target, `Target ${targetInfo.targetId} is missing`);
            session._setTarget(target);
            this.setupAttachmentListeners(session);
            __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsBySessionId, "f").set(session.id(), __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f").get(targetInfo.targetId));
            parentSession.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Ready, session);
        });
        __classPrivateFieldSet(this, _FirefoxTargetManager_connection, connection, "f");
        __classPrivateFieldSet(this, _FirefoxTargetManager_targetFilterCallback, targetFilterCallback, "f");
        __classPrivateFieldSet(this, _FirefoxTargetManager_targetFactory, targetFactory, "f");
        __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").on('Target.targetCreated', __classPrivateFieldGet(this, _FirefoxTargetManager_onTargetCreated, "f"));
        __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").on('Target.targetDestroyed', __classPrivateFieldGet(this, _FirefoxTargetManager_onTargetDestroyed, "f"));
        __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.SessionDetached, __classPrivateFieldGet(this, _FirefoxTargetManager_onSessionDetached, "f"));
        this.setupAttachmentListeners(__classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f"));
    }
    setupAttachmentListeners(session) {
        const listener = (event) => {
            return __classPrivateFieldGet(this, _FirefoxTargetManager_onAttachedToTarget, "f").call(this, session, event);
        };
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!__classPrivateFieldGet(this, _FirefoxTargetManager_attachedToTargetListenersBySession, "f").has(session));
        __classPrivateFieldGet(this, _FirefoxTargetManager_attachedToTargetListenersBySession, "f").set(session, listener);
        session.on('Target.attachedToTarget', listener);
    }
    removeSessionListeners(session) {
        if (__classPrivateFieldGet(this, _FirefoxTargetManager_attachedToTargetListenersBySession, "f").has(session)) {
            session.off('Target.attachedToTarget', __classPrivateFieldGet(this, _FirefoxTargetManager_attachedToTargetListenersBySession, "f").get(session));
            __classPrivateFieldGet(this, _FirefoxTargetManager_attachedToTargetListenersBySession, "f").delete(session);
        }
    }
    getAvailableTargets() {
        return __classPrivateFieldGet(this, _FirefoxTargetManager_availableTargetsByTargetId, "f");
    }
    getChildTargets(_target) {
        return new Set();
    }
    dispose() {
        __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").off('Target.targetCreated', __classPrivateFieldGet(this, _FirefoxTargetManager_onTargetCreated, "f"));
        __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").off('Target.targetDestroyed', __classPrivateFieldGet(this, _FirefoxTargetManager_onTargetDestroyed, "f"));
    }
    async initialize() {
        await __classPrivateFieldGet(this, _FirefoxTargetManager_connection, "f").send('Target.setDiscoverTargets', {
            discover: true,
            filter: [{}],
        });
        __classPrivateFieldSet(this, _FirefoxTargetManager_targetsIdsForInit, new Set(__classPrivateFieldGet(this, _FirefoxTargetManager_discoveredTargetsByTargetId, "f").keys()), "f");
        await __classPrivateFieldGet(this, _FirefoxTargetManager_initializeDeferred, "f").valueOrThrow();
    }
}
_FirefoxTargetManager_connection = new WeakMap(), _FirefoxTargetManager_discoveredTargetsByTargetId = new WeakMap(), _FirefoxTargetManager_availableTargetsByTargetId = new WeakMap(), _FirefoxTargetManager_availableTargetsBySessionId = new WeakMap(), _FirefoxTargetManager_targetFilterCallback = new WeakMap(), _FirefoxTargetManager_targetFactory = new WeakMap(), _FirefoxTargetManager_attachedToTargetListenersBySession = new WeakMap(), _FirefoxTargetManager_initializeDeferred = new WeakMap(), _FirefoxTargetManager_targetsIdsForInit = new WeakMap(), _FirefoxTargetManager_onSessionDetached = new WeakMap(), _FirefoxTargetManager_onTargetCreated = new WeakMap(), _FirefoxTargetManager_onTargetDestroyed = new WeakMap(), _FirefoxTargetManager_onAttachedToTarget = new WeakMap(), _FirefoxTargetManager_instances = new WeakSet(), _FirefoxTargetManager_finishInitializationIfReady = function _FirefoxTargetManager_finishInitializationIfReady(targetId) {
    __classPrivateFieldGet(this, _FirefoxTargetManager_targetsIdsForInit, "f").delete(targetId);
    if (__classPrivateFieldGet(this, _FirefoxTargetManager_targetsIdsForInit, "f").size === 0) {
        __classPrivateFieldGet(this, _FirefoxTargetManager_initializeDeferred, "f").resolve();
    }
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/TargetManager.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TargetManagerEvent: () => (/* binding */ TargetManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
var TargetManagerEvent;
(function (TargetManagerEvent) {
    TargetManagerEvent["TargetDiscovered"] = "targetDiscovered";
    TargetManagerEvent["TargetAvailable"] = "targetAvailable";
    TargetManagerEvent["TargetGone"] = "targetGone";
    /**
     * Emitted after a target has been initialized and whenever its URL changes.
     */
    TargetManagerEvent["TargetChanged"] = "targetChanged";
})(TargetManagerEvent || (TargetManagerEvent = {}));


/***/ })

}]);