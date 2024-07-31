"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_FirefoxTargetManager_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CDPSession = exports.CDPSessionEvent = void 0;
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
/**
 * Events that the CDPSession class emits.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function (CDPSessionEvent) {
    /** @internal */
    CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */
    CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */
    CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (exports.CDPSessionEvent = CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */
class CDPSession extends EventEmitter_js_1.EventEmitter {
    /**
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
        return undefined;
    }
}
exports.CDPSession = CDPSession;
//# sourceMappingURL=CDPSession.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FirefoxTargetManager.js":
/*!*****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FirefoxTargetManager.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FirefoxTargetManager = void 0;
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
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
class FirefoxTargetManager extends EventEmitter_js_1.EventEmitter {
    #connection;
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
    #discoveredTargetsByTargetId = new Map();
    /**
     * Keeps track of targets that were created via 'Target.targetCreated'
     * and which one are not filtered out by `targetFilterCallback`.
     *
     * The target is removed from here once it's been destroyed.
     */
    #availableTargetsByTargetId = new Map();
    /**
     * Tracks which sessions attach to which target.
     */
    #availableTargetsBySessionId = new Map();
    #targetFilterCallback;
    #targetFactory;
    #attachedToTargetListenersBySession = new WeakMap();
    #initializeDeferred = Deferred_js_1.Deferred.create();
    #targetsIdsForInit = new Set();
    constructor(connection, targetFactory, targetFilterCallback) {
        super();
        this.#connection = connection;
        this.#targetFilterCallback = targetFilterCallback;
        this.#targetFactory = targetFactory;
        this.#connection.on('Target.targetCreated', this.#onTargetCreated);
        this.#connection.on('Target.targetDestroyed', this.#onTargetDestroyed);
        this.#connection.on(CDPSession_js_1.CDPSessionEvent.SessionDetached, this.#onSessionDetached);
        this.setupAttachmentListeners(this.#connection);
    }
    setupAttachmentListeners(session) {
        const listener = (event) => {
            return this.#onAttachedToTarget(session, event);
        };
        (0, assert_js_1.assert)(!this.#attachedToTargetListenersBySession.has(session));
        this.#attachedToTargetListenersBySession.set(session, listener);
        session.on('Target.attachedToTarget', listener);
    }
    #onSessionDetached = (session) => {
        this.removeSessionListeners(session);
        this.#availableTargetsBySessionId.delete(session.id());
    };
    removeSessionListeners(session) {
        if (this.#attachedToTargetListenersBySession.has(session)) {
            session.off('Target.attachedToTarget', this.#attachedToTargetListenersBySession.get(session));
            this.#attachedToTargetListenersBySession.delete(session);
        }
    }
    getAvailableTargets() {
        return this.#availableTargetsByTargetId;
    }
    getChildTargets(_target) {
        return new Set();
    }
    dispose() {
        this.#connection.off('Target.targetCreated', this.#onTargetCreated);
        this.#connection.off('Target.targetDestroyed', this.#onTargetDestroyed);
    }
    async initialize() {
        await this.#connection.send('Target.setDiscoverTargets', {
            discover: true,
            filter: [{}],
        });
        this.#targetsIdsForInit = new Set(this.#discoveredTargetsByTargetId.keys());
        await this.#initializeDeferred.valueOrThrow();
    }
    #onTargetCreated = async (event) => {
        if (this.#discoveredTargetsByTargetId.has(event.targetInfo.targetId)) {
            return;
        }
        this.#discoveredTargetsByTargetId.set(event.targetInfo.targetId, event.targetInfo);
        if (event.targetInfo.type === 'browser' && event.targetInfo.attached) {
            const target = this.#targetFactory(event.targetInfo, undefined);
            target._initialize();
            this.#availableTargetsByTargetId.set(event.targetInfo.targetId, target);
            this.#finishInitializationIfReady(target._targetId);
            return;
        }
        const target = this.#targetFactory(event.targetInfo, undefined);
        if (this.#targetFilterCallback && !this.#targetFilterCallback(target)) {
            this.#finishInitializationIfReady(event.targetInfo.targetId);
            return;
        }
        target._initialize();
        this.#availableTargetsByTargetId.set(event.targetInfo.targetId, target);
        this.emit("targetAvailable" /* TargetManagerEvent.TargetAvailable */, target);
        this.#finishInitializationIfReady(target._targetId);
    };
    #onTargetDestroyed = (event) => {
        this.#discoveredTargetsByTargetId.delete(event.targetId);
        this.#finishInitializationIfReady(event.targetId);
        const target = this.#availableTargetsByTargetId.get(event.targetId);
        if (target) {
            this.emit("targetGone" /* TargetManagerEvent.TargetGone */, target);
            this.#availableTargetsByTargetId.delete(event.targetId);
        }
    };
    #onAttachedToTarget = async (parentSession, event) => {
        const targetInfo = event.targetInfo;
        const session = this.#connection.session(event.sessionId);
        if (!session) {
            throw new Error(`Session ${event.sessionId} was not created.`);
        }
        const target = this.#availableTargetsByTargetId.get(targetInfo.targetId);
        (0, assert_js_1.assert)(target, `Target ${targetInfo.targetId} is missing`);
        session._setTarget(target);
        this.setupAttachmentListeners(session);
        this.#availableTargetsBySessionId.set(session.id(), this.#availableTargetsByTargetId.get(targetInfo.targetId));
        parentSession.emit(CDPSession_js_1.CDPSessionEvent.Ready, session);
    };
    #finishInitializationIfReady(targetId) {
        this.#targetsIdsForInit.delete(targetId);
        if (this.#targetsIdsForInit.size === 0) {
            this.#initializeDeferred.resolve();
        }
    }
}
exports.FirefoxTargetManager = FirefoxTargetManager;
//# sourceMappingURL=FirefoxTargetManager.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TargetCloseError = exports.UnsupportedOperation = exports.ProtocolError = exports.TimeoutError = exports.PuppeteerError = void 0;
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
exports.PuppeteerError = PuppeteerError;
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
class TimeoutError extends PuppeteerError {
}
exports.TimeoutError = TimeoutError;
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    #code;
    #originalMessage = '';
    set code(code) {
        this.#code = code;
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return this.#code;
    }
    set originalMessage(originalMessage) {
        this.#originalMessage = originalMessage;
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return this.#originalMessage;
    }
}
exports.ProtocolError = ProtocolError;
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
exports.UnsupportedOperation = UnsupportedOperation;
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
exports.TargetCloseError = TargetCloseError;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deferred = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */
class Deferred {
    static create(opts) {
        return new Deferred(opts);
    }
    static async race(awaitables) {
        const deferredWithTimeout = new Set();
        try {
            const promises = awaitables.map(value => {
                if (value instanceof Deferred) {
                    if (value.#timeoutId) {
                        deferredWithTimeout.add(value);
                    }
                    return value.valueOrThrow();
                }
                return value;
            });
            // eslint-disable-next-line no-restricted-syntax
            return await Promise.race(promises);
        }
        finally {
            for (const deferred of deferredWithTimeout) {
                // We need to stop the timeout else
                // Node.JS will keep running the event loop till the
                // timer executes
                deferred.reject(new Error('Timeout cleared'));
            }
        }
    }
    #isResolved = false;
    #isRejected = false;
    #value;
    // SAFETY: This is ensured by #taskPromise.
    #resolve;
    #taskPromise = new Promise(resolve => {
        this.#resolve = resolve;
    });
    #timeoutId;
    #timeoutError;
    constructor(opts) {
        if (opts && opts.timeout > 0) {
            this.#timeoutError = new Errors_js_1.TimeoutError(opts.message);
            this.#timeoutId = setTimeout(() => {
                this.reject(this.#timeoutError);
            }, opts.timeout);
        }
    }
    #finish(value) {
        clearTimeout(this.#timeoutId);
        this.#value = value;
        this.#resolve();
    }
    resolve(value) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isResolved = true;
        this.#finish(value);
    }
    reject(error) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isRejected = true;
        this.#finish(error);
    }
    resolved() {
        return this.#isResolved;
    }
    finished() {
        return this.#isResolved || this.#isRejected;
    }
    value() {
        return this.#value;
    }
    #promise;
    valueOrThrow() {
        if (!this.#promise) {
            this.#promise = (async () => {
                await this.#taskPromise;
                if (this.#isRejected) {
                    throw this.#value;
                }
                return this.#value;
            })();
        }
        return this.#promise;
    }
}
exports.Deferred = Deferred;
//# sourceMappingURL=Deferred.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
exports.assert = assert;
//# sourceMappingURL=assert.js.map

/***/ })

}]);