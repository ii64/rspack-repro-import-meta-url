"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_cdp_Page_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Target = exports.TargetType = void 0;
/**
 * @public
 */
var TargetType;
(function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
})(TargetType || (exports.TargetType = TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
class Target {
    /**
     * @internal
     */
    constructor() { }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
        return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
        return null;
    }
}
exports.Target = Target;
//# sourceMappingURL=Target.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Dialog.js":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Dialog.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CdpDialog = void 0;
const Dialog_js_1 = __webpack_require__(/*! ../api/Dialog.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Dialog.js");
/**
 * @internal
 */
class CdpDialog extends Dialog_js_1.Dialog {
    #client;
    constructor(client, type, message, defaultValue = '') {
        super(type, message, defaultValue);
        this.#client = client;
    }
    async handle(options) {
        await this.#client.send('Page.handleJavaScriptDialog', {
            accept: options.accept,
            promptText: options.text,
        });
    }
}
exports.CdpDialog = CdpDialog;
//# sourceMappingURL=Dialog.js.map

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Page.js":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Page.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CdpPage = void 0;
const rxjs_js_1 = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./src/third_party/puppeteer/package/lib/cjs/third_party/rxjs/rxjs.js");
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const Page_js_1 = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Page.js");
const ConsoleMessage_js_1 = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConsoleMessage.js");
const Errors_js_1 = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const EventEmitter_js_1 = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js");
const FileChooser_js_1 = __webpack_require__(/*! ../common/FileChooser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/FileChooser.js");
const NetworkManagerEvents_js_1 = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/NetworkManagerEvents.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
const Binding_js_1 = __webpack_require__(/*! ./Binding.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Binding.js");
const CDPSession_js_2 = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/CDPSession.js");
const Connection_js_1 = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Connection.js");
const Coverage_js_1 = __webpack_require__(/*! ./Coverage.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Coverage.js");
const Dialog_js_1 = __webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Dialog.js");
const EmulationManager_js_1 = __webpack_require__(/*! ./EmulationManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/EmulationManager.js");
const FirefoxTargetManager_js_1 = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FirefoxTargetManager.js");
const FrameManager_js_1 = __webpack_require__(/*! ./FrameManager.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManager.js");
const FrameManagerEvents_js_1 = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/FrameManagerEvents.js");
const Input_js_1 = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Input.js");
const IsolatedWorlds_js_1 = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorlds.js");
const JSHandle_js_1 = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/JSHandle.js");
const Tracing_js_1 = __webpack_require__(/*! ./Tracing.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js");
const utils_js_1 = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/utils.js");
const WebWorker_js_1 = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js");
function convertConsoleMessageLevel(method) {
    switch (method) {
        case 'warning':
            return 'warn';
        default:
            return method;
    }
}
/**
 * @internal
 */
class CdpPage extends Page_js_1.Page {
    static async _create(client, target, defaultViewport) {
        const page = new CdpPage(client, target);
        await page.#initialize();
        if (defaultViewport) {
            try {
                await page.setViewport(defaultViewport);
            }
            catch (err) {
                if ((0, ErrorLike_js_1.isErrorLike)(err) && (0, Connection_js_1.isTargetClosedError)(err)) {
                    (0, util_js_1.debugError)(err);
                }
                else {
                    throw err;
                }
            }
        }
        return page;
    }
    #closed = false;
    #targetManager;
    #primaryTargetClient;
    #primaryTarget;
    #tabTargetClient;
    #tabTarget;
    #keyboard;
    #mouse;
    #touchscreen;
    #frameManager;
    #emulationManager;
    #tracing;
    #bindings = new Map();
    #exposedFunctions = new Map();
    #coverage;
    #viewport;
    #workers = new Map();
    #fileChooserDeferreds = new Set();
    #sessionCloseDeferred = Deferred_js_1.Deferred.create();
    #serviceWorkerBypassed = false;
    #userDragInterceptionEnabled = false;
    constructor(client, target) {
        super();
        this.#primaryTargetClient = client;
        this.#tabTargetClient = client.parentSession();
        (0, assert_js_1.assert)(this.#tabTargetClient, 'Tab target session is not defined.');
        this.#tabTarget = this.#tabTargetClient._target();
        (0, assert_js_1.assert)(this.#tabTarget, 'Tab target is not defined.');
        this.#primaryTarget = target;
        this.#targetManager = target._targetManager();
        this.#keyboard = new Input_js_1.CdpKeyboard(client);
        this.#mouse = new Input_js_1.CdpMouse(client, this.#keyboard);
        this.#touchscreen = new Input_js_1.CdpTouchscreen(client, this.#keyboard);
        this.#frameManager = new FrameManager_js_1.FrameManager(client, this, this._timeoutSettings);
        this.#emulationManager = new EmulationManager_js_1.EmulationManager(client);
        this.#tracing = new Tracing_js_1.Tracing(client);
        this.#coverage = new Coverage_js_1.Coverage(client);
        this.#viewport = null;
        const frameManagerEmitter = new EventEmitter_js_1.EventEmitter(this.#frameManager);
        frameManagerEmitter.on(FrameManagerEvents_js_1.FrameManagerEvent.FrameAttached, frame => {
            this.emit("frameattached" /* PageEvent.FrameAttached */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvents_js_1.FrameManagerEvent.FrameDetached, frame => {
            this.emit("framedetached" /* PageEvent.FrameDetached */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvents_js_1.FrameManagerEvent.FrameNavigated, frame => {
            this.emit("framenavigated" /* PageEvent.FrameNavigated */, frame);
        });
        frameManagerEmitter.on(FrameManagerEvents_js_1.FrameManagerEvent.ConsoleApiCalled, ([world, event]) => {
            this.#onConsoleAPI(world, event);
        });
        frameManagerEmitter.on(FrameManagerEvents_js_1.FrameManagerEvent.BindingCalled, ([world, event]) => {
            void this.#onBindingCalled(world, event);
        });
        const networkManagerEmitter = new EventEmitter_js_1.EventEmitter(this.#frameManager.networkManager);
        networkManagerEmitter.on(NetworkManagerEvents_js_1.NetworkManagerEvent.Request, request => {
            this.emit("request" /* PageEvent.Request */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvents_js_1.NetworkManagerEvent.RequestServedFromCache, request => {
            this.emit("requestservedfromcache" /* PageEvent.RequestServedFromCache */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvents_js_1.NetworkManagerEvent.Response, response => {
            this.emit("response" /* PageEvent.Response */, response);
        });
        networkManagerEmitter.on(NetworkManagerEvents_js_1.NetworkManagerEvent.RequestFailed, request => {
            this.emit("requestfailed" /* PageEvent.RequestFailed */, request);
        });
        networkManagerEmitter.on(NetworkManagerEvents_js_1.NetworkManagerEvent.RequestFinished, request => {
            this.emit("requestfinished" /* PageEvent.RequestFinished */, request);
        });
        this.#tabTargetClient.on(CDPSession_js_1.CDPSessionEvent.Swapped, this.#onActivation.bind(this));
        this.#tabTargetClient.on(CDPSession_js_1.CDPSessionEvent.Ready, this.#onSecondaryTarget.bind(this));
        this.#targetManager.on("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
        this.#tabTarget._isClosedDeferred
            .valueOrThrow()
            .then(() => {
            this.#targetManager.off("targetGone" /* TargetManagerEvent.TargetGone */, this.#onDetachedFromTarget);
            this.emit("close" /* PageEvent.Close */, undefined);
            this.#closed = true;
        })
            .catch(util_js_1.debugError);
        this.#setupPrimaryTargetListeners();
        this.#attachExistingTargets();
    }
    #attachExistingTargets() {
        const queue = [];
        for (const childTarget of this.#targetManager.getChildTargets(this.#primaryTarget)) {
            queue.push(childTarget);
        }
        let idx = 0;
        while (idx < queue.length) {
            const next = queue[idx];
            idx++;
            const session = next._session();
            if (session) {
                this.#onAttachedToTarget(session);
            }
            for (const childTarget of this.#targetManager.getChildTargets(next)) {
                queue.push(childTarget);
            }
        }
    }
    async #onActivation(newSession) {
        this.#primaryTargetClient = newSession;
        (0, assert_js_1.assert)(this.#primaryTargetClient instanceof CDPSession_js_2.CdpCDPSession, 'CDPSession is not instance of CDPSessionImpl');
        this.#primaryTarget = this.#primaryTargetClient._target();
        (0, assert_js_1.assert)(this.#primaryTarget, 'Missing target on swap');
        this.#keyboard.updateClient(newSession);
        this.#mouse.updateClient(newSession);
        this.#touchscreen.updateClient(newSession);
        this.#emulationManager.updateClient(newSession);
        this.#tracing.updateClient(newSession);
        this.#coverage.updateClient(newSession);
        await this.#frameManager.swapFrameTree(newSession);
        this.#setupPrimaryTargetListeners();
    }
    async #onSecondaryTarget(session) {
        (0, assert_js_1.assert)(session instanceof CDPSession_js_2.CdpCDPSession);
        if (session._target()._subtype() !== 'prerender') {
            return;
        }
        this.#frameManager.registerSpeculativeSession(session).catch(util_js_1.debugError);
        this.#emulationManager
            .registerSpeculativeSession(session)
            .catch(util_js_1.debugError);
    }
    /**
     * Sets up listeners for the primary target. The primary target can change
     * during a navigation to a prerended page.
     */
    #setupPrimaryTargetListeners() {
        const clientEmitter = new EventEmitter_js_1.EventEmitter(this.#primaryTargetClient);
        clientEmitter.on(CDPSession_js_1.CDPSessionEvent.Ready, this.#onAttachedToTarget);
        clientEmitter.on(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
            this.#sessionCloseDeferred.reject(new Errors_js_1.TargetCloseError('Target closed'));
        });
        clientEmitter.on('Page.domContentEventFired', () => {
            this.emit("domcontentloaded" /* PageEvent.DOMContentLoaded */, undefined);
        });
        clientEmitter.on('Page.loadEventFired', () => {
            this.emit("load" /* PageEvent.Load */, undefined);
        });
        clientEmitter.on('Page.javascriptDialogOpening', this.#onDialog.bind(this));
        clientEmitter.on('Runtime.exceptionThrown', this.#handleException.bind(this));
        clientEmitter.on('Inspector.targetCrashed', this.#onTargetCrashed.bind(this));
        clientEmitter.on('Performance.metrics', this.#emitMetrics.bind(this));
        clientEmitter.on('Log.entryAdded', this.#onLogEntryAdded.bind(this));
        clientEmitter.on('Page.fileChooserOpened', this.#onFileChooser.bind(this));
    }
    #onDetachedFromTarget = (target) => {
        const sessionId = target._session()?.id();
        const worker = this.#workers.get(sessionId);
        if (!worker) {
            return;
        }
        this.#workers.delete(sessionId);
        this.emit("workerdestroyed" /* PageEvent.WorkerDestroyed */, worker);
    };
    #onAttachedToTarget = (session) => {
        (0, assert_js_1.assert)(session instanceof CDPSession_js_2.CdpCDPSession);
        this.#frameManager.onAttachedToTarget(session._target());
        if (session._target()._getTargetInfo().type === 'worker') {
            const worker = new WebWorker_js_1.CdpWebWorker(session, session._target().url(), session._target()._targetId, session._target().type(), this.#addConsoleMessage.bind(this), this.#handleException.bind(this));
            this.#workers.set(session.id(), worker);
            this.emit("workercreated" /* PageEvent.WorkerCreated */, worker);
        }
        session.on(CDPSession_js_1.CDPSessionEvent.Ready, this.#onAttachedToTarget);
    };
    async #initialize() {
        try {
            await Promise.all([
                this.#frameManager.initialize(this.#primaryTargetClient),
                this.#primaryTargetClient.send('Performance.enable'),
                this.#primaryTargetClient.send('Log.enable'),
            ]);
        }
        catch (err) {
            if ((0, ErrorLike_js_1.isErrorLike)(err) && (0, Connection_js_1.isTargetClosedError)(err)) {
                (0, util_js_1.debugError)(err);
            }
            else {
                throw err;
            }
        }
    }
    async #onFileChooser(event) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            if (!this.#fileChooserDeferreds.size) {
                return;
            }
            const frame = this.#frameManager.frame(event.frameId);
            (0, assert_js_1.assert)(frame, 'This should never happen.');
            // This is guaranteed to be an HTMLInputElement handle by the event.
            const handle = __addDisposableResource(env_1, (await frame.worlds[IsolatedWorlds_js_1.MAIN_WORLD].adoptBackendNode(event.backendNodeId)), false);
            const fileChooser = new FileChooser_js_1.FileChooser(handle.move(), event);
            for (const promise of this.#fileChooserDeferreds) {
                promise.resolve(fileChooser);
            }
            this.#fileChooserDeferreds.clear();
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            __disposeResources(env_1);
        }
    }
    _client() {
        return this.#primaryTargetClient;
    }
    isServiceWorkerBypassed() {
        return this.#serviceWorkerBypassed;
    }
    isDragInterceptionEnabled() {
        return this.#userDragInterceptionEnabled;
    }
    isJavaScriptEnabled() {
        return this.#emulationManager.javascriptEnabled;
    }
    async waitForFileChooser(options = {}) {
        const needsEnable = this.#fileChooserDeferreds.size === 0;
        const { timeout = this._timeoutSettings.timeout() } = options;
        const deferred = Deferred_js_1.Deferred.create({
            message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        this.#fileChooserDeferreds.add(deferred);
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#primaryTargetClient.send('Page.setInterceptFileChooserDialog', {
                enabled: true,
            });
        }
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        catch (error) {
            this.#fileChooserDeferreds.delete(deferred);
            throw error;
        }
    }
    async setGeolocation(options) {
        return await this.#emulationManager.setGeolocation(options);
    }
    target() {
        return this.#primaryTarget;
    }
    browser() {
        return this.#primaryTarget.browser();
    }
    browserContext() {
        return this.#primaryTarget.browserContext();
    }
    #onTargetCrashed() {
        this.emit("error" /* PageEvent.Error */, new Error('Page crashed!'));
    }
    #onLogEntryAdded(event) {
        const { level, text, args, source, url, lineNumber } = event.entry;
        if (args) {
            args.map(arg => {
                void (0, JSHandle_js_1.releaseObject)(this.#primaryTargetClient, arg);
            });
        }
        if (source !== 'worker') {
            this.emit("console" /* PageEvent.Console */, new ConsoleMessage_js_1.ConsoleMessage(convertConsoleMessageLevel(level), text, [], [{ url, lineNumber }]));
        }
    }
    mainFrame() {
        return this.#frameManager.mainFrame();
    }
    get keyboard() {
        return this.#keyboard;
    }
    get touchscreen() {
        return this.#touchscreen;
    }
    get coverage() {
        return this.#coverage;
    }
    get tracing() {
        return this.#tracing;
    }
    frames() {
        return this.#frameManager.frames();
    }
    workers() {
        return Array.from(this.#workers.values());
    }
    async setRequestInterception(value) {
        return await this.#frameManager.networkManager.setRequestInterception(value);
    }
    async setBypassServiceWorker(bypass) {
        this.#serviceWorkerBypassed = bypass;
        return await this.#primaryTargetClient.send('Network.setBypassServiceWorker', { bypass });
    }
    async setDragInterception(enabled) {
        this.#userDragInterceptionEnabled = enabled;
        return await this.#primaryTargetClient.send('Input.setInterceptDrags', {
            enabled,
        });
    }
    async setOfflineMode(enabled) {
        return await this.#frameManager.networkManager.setOfflineMode(enabled);
    }
    async emulateNetworkConditions(networkConditions) {
        return await this.#frameManager.networkManager.emulateNetworkConditions(networkConditions);
    }
    setDefaultNavigationTimeout(timeout) {
        this._timeoutSettings.setDefaultNavigationTimeout(timeout);
    }
    setDefaultTimeout(timeout) {
        this._timeoutSettings.setDefaultTimeout(timeout);
    }
    getDefaultTimeout() {
        return this._timeoutSettings.timeout();
    }
    async queryObjects(prototypeHandle) {
        (0, assert_js_1.assert)(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
        (0, assert_js_1.assert)(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
        const response = await this.mainFrame().client.send('Runtime.queryObjects', {
            prototypeObjectId: prototypeHandle.id,
        });
        return this.mainFrame()
            .mainRealm()
            .createCdpHandle(response.objects);
    }
    async cookies(...urls) {
        const originalCookies = (await this.#primaryTargetClient.send('Network.getCookies', {
            urls: urls.length ? urls : [this.url()],
        })).cookies;
        const unsupportedCookieAttributes = ['sourcePort'];
        const filterUnsupportedAttributes = (cookie) => {
            for (const attr of unsupportedCookieAttributes) {
                delete cookie[attr];
            }
            return cookie;
        };
        return originalCookies.map(filterUnsupportedAttributes).map(cookie => {
            return {
                ...cookie,
                // TODO: a breaking change is needed in Puppeteer types to support other
                // partition keys.
                partitionKey: cookie.partitionKey
                    ? cookie.partitionKey.topLevelSite
                    : undefined,
            };
        });
    }
    async deleteCookie(...cookies) {
        const pageURL = this.url();
        for (const cookie of cookies) {
            const item = Object.assign({}, cookie);
            if (!cookie.url && pageURL.startsWith('http')) {
                item.url = pageURL;
            }
            await this.#primaryTargetClient.send('Network.deleteCookies', item);
        }
    }
    async setCookie(...cookies) {
        const pageURL = this.url();
        const startsWithHTTP = pageURL.startsWith('http');
        const items = cookies.map(cookie => {
            const item = Object.assign({}, cookie);
            if (!item.url && startsWithHTTP) {
                item.url = pageURL;
            }
            (0, assert_js_1.assert)(item.url !== 'about:blank', `Blank page can not have cookie "${item.name}"`);
            (0, assert_js_1.assert)(!String.prototype.startsWith.call(item.url || '', 'data:'), `Data URL page can not have cookie "${item.name}"`);
            return item;
        });
        await this.deleteCookie(...items);
        if (items.length) {
            await this.#primaryTargetClient.send('Network.setCookies', {
                cookies: items.map(cookieParam => {
                    return {
                        ...cookieParam,
                        partitionKey: cookieParam.partitionKey
                            ? {
                                // TODO: a breaking change neeeded to change the partition key
                                // type in Puppeteer.
                                topLevelSite: cookieParam.partitionKey,
                                hasCrossSiteAncestor: false,
                            }
                            : undefined,
                    };
                }),
            });
        }
    }
    async exposeFunction(name, pptrFunction) {
        if (this.#bindings.has(name)) {
            throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
        }
        const source = (0, utils_js_1.pageBindingInitString)('exposedFun', name);
        let binding;
        switch (typeof pptrFunction) {
            case 'function':
                binding = new Binding_js_1.Binding(name, pptrFunction, source);
                break;
            default:
                binding = new Binding_js_1.Binding(name, pptrFunction.default, source);
                break;
        }
        this.#bindings.set(name, binding);
        const [{ identifier }] = await Promise.all([
            this.#frameManager.evaluateOnNewDocument(source),
            this.#frameManager.addExposedFunctionBinding(binding),
        ]);
        this.#exposedFunctions.set(name, identifier);
    }
    async removeExposedFunction(name) {
        const exposedFunctionId = this.#exposedFunctions.get(name);
        if (!exposedFunctionId) {
            throw new Error(`Function with name "${name}" does not exist`);
        }
        // #bindings must be updated together with #exposedFunctions.
        const binding = this.#bindings.get(name);
        this.#exposedFunctions.delete(name);
        this.#bindings.delete(name);
        await Promise.all([
            this.#frameManager.removeScriptToEvaluateOnNewDocument(exposedFunctionId),
            this.#frameManager.removeExposedFunctionBinding(binding),
        ]);
    }
    async authenticate(credentials) {
        return await this.#frameManager.networkManager.authenticate(credentials);
    }
    async setExtraHTTPHeaders(headers) {
        return await this.#frameManager.networkManager.setExtraHTTPHeaders(headers);
    }
    async setUserAgent(userAgent, userAgentMetadata) {
        return await this.#frameManager.networkManager.setUserAgent(userAgent, userAgentMetadata);
    }
    async metrics() {
        const response = await this.#primaryTargetClient.send('Performance.getMetrics');
        return this.#buildMetricsObject(response.metrics);
    }
    #emitMetrics(event) {
        this.emit("metrics" /* PageEvent.Metrics */, {
            title: event.title,
            metrics: this.#buildMetricsObject(event.metrics),
        });
    }
    #buildMetricsObject(metrics) {
        const result = {};
        for (const metric of metrics || []) {
            if (supportedMetrics.has(metric.name)) {
                result[metric.name] = metric.value;
            }
        }
        return result;
    }
    #handleException(exception) {
        this.emit("pageerror" /* PageEvent.PageError */, (0, utils_js_1.createClientError)(exception.exceptionDetails));
    }
    #onConsoleAPI(world, event) {
        const values = event.args.map(arg => {
            return world.createCdpHandle(arg);
        });
        this.#addConsoleMessage(convertConsoleMessageLevel(event.type), values, event.stackTrace);
    }
    async #onBindingCalled(world, event) {
        let payload;
        try {
            payload = JSON.parse(event.payload);
        }
        catch {
            // The binding was either called by something in the page or it was
            // called before our wrapper was initialized.
            return;
        }
        const { type, name, seq, args, isTrivial } = payload;
        if (type !== 'exposedFun') {
            return;
        }
        const context = world.context;
        if (!context) {
            return;
        }
        const binding = this.#bindings.get(name);
        await binding?.run(context, seq, args, isTrivial);
    }
    #addConsoleMessage(eventType, args, stackTrace) {
        if (!this.listenerCount("console" /* PageEvent.Console */)) {
            args.forEach(arg => {
                return arg.dispose();
            });
            return;
        }
        const textTokens = [];
        // eslint-disable-next-line max-len -- The comment is long.
        // eslint-disable-next-line rulesdir/use-using -- These are not owned by this function.
        for (const arg of args) {
            const remoteObject = arg.remoteObject();
            if (remoteObject.objectId) {
                textTokens.push(arg.toString());
            }
            else {
                textTokens.push((0, utils_js_1.valueFromRemoteObject)(remoteObject));
            }
        }
        const stackTraceLocations = [];
        if (stackTrace) {
            for (const callFrame of stackTrace.callFrames) {
                stackTraceLocations.push({
                    url: callFrame.url,
                    lineNumber: callFrame.lineNumber,
                    columnNumber: callFrame.columnNumber,
                });
            }
        }
        const message = new ConsoleMessage_js_1.ConsoleMessage(convertConsoleMessageLevel(eventType), textTokens.join(' '), args, stackTraceLocations);
        this.emit("console" /* PageEvent.Console */, message);
    }
    #onDialog(event) {
        const type = (0, util_js_1.validateDialogType)(event.type);
        const dialog = new Dialog_js_1.CdpDialog(this.#primaryTargetClient, type, event.message, event.defaultPrompt);
        this.emit("dialog" /* PageEvent.Dialog */, dialog);
    }
    async reload(options) {
        const [result] = await Promise.all([
            this.waitForNavigation({
                ...options,
                ignoreSameDocumentNavigation: true,
            }),
            this.#primaryTargetClient.send('Page.reload'),
        ]);
        return result;
    }
    async createCDPSession() {
        return await this.target().createCDPSession();
    }
    async goBack(options = {}) {
        return await this.#go(-1, options);
    }
    async goForward(options = {}) {
        return await this.#go(+1, options);
    }
    async #go(delta, options) {
        const history = await this.#primaryTargetClient.send('Page.getNavigationHistory');
        const entry = history.entries[history.currentIndex + delta];
        if (!entry) {
            return null;
        }
        const result = await Promise.all([
            this.waitForNavigation(options),
            this.#primaryTargetClient.send('Page.navigateToHistoryEntry', {
                entryId: entry.id,
            }),
        ]);
        return result[0];
    }
    async bringToFront() {
        await this.#primaryTargetClient.send('Page.bringToFront');
    }
    async setJavaScriptEnabled(enabled) {
        return await this.#emulationManager.setJavaScriptEnabled(enabled);
    }
    async setBypassCSP(enabled) {
        await this.#primaryTargetClient.send('Page.setBypassCSP', { enabled });
    }
    async emulateMediaType(type) {
        return await this.#emulationManager.emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
        return await this.#emulationManager.emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
        return await this.#emulationManager.emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
        return await this.#emulationManager.emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
        return await this.#emulationManager.emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
        return await this.#emulationManager.emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
        const needsReload = await this.#emulationManager.emulateViewport(viewport);
        this.#viewport = viewport;
        if (needsReload) {
            await this.reload();
        }
    }
    viewport() {
        return this.#viewport;
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
        const source = (0, util_js_1.evaluationString)(pageFunction, ...args);
        return await this.#frameManager.evaluateOnNewDocument(source);
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
        return await this.#frameManager.removeScriptToEvaluateOnNewDocument(identifier);
    }
    async setCacheEnabled(enabled = true) {
        await this.#frameManager.networkManager.setCacheEnabled(enabled);
    }
    async _screenshot(options) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const { fromSurface, omitBackground, optimizeForSpeed, quality, clip: userClip, type, captureBeyondViewport, } = options;
            const isFirefox = this.target()._targetManager() instanceof FirefoxTargetManager_js_1.FirefoxTargetManager;
            const stack = __addDisposableResource(env_2, new disposable_js_1.AsyncDisposableStack(), true);
            // Firefox omits background by default; it's not configurable.
            if (!isFirefox && omitBackground && (type === 'png' || type === 'webp')) {
                await this.#emulationManager.setTransparentBackgroundColor();
                stack.defer(async () => {
                    await this.#emulationManager
                        .resetDefaultBackgroundColor()
                        .catch(util_js_1.debugError);
                });
            }
            let clip = userClip;
            if (clip && !captureBeyondViewport) {
                const viewport = await this.mainFrame()
                    .isolatedRealm()
                    .evaluate(() => {
                    const { height, pageLeft: x, pageTop: y, width, } = window.visualViewport;
                    return { x, y, height, width };
                });
                clip = getIntersectionRect(clip, viewport);
            }
            // We need to do these spreads because Firefox doesn't allow unknown options.
            const { data } = await this.#primaryTargetClient.send('Page.captureScreenshot', {
                format: type,
                ...(optimizeForSpeed ? { optimizeForSpeed } : {}),
                ...(quality !== undefined ? { quality: Math.round(quality) } : {}),
                ...(clip ? { clip: { ...clip, scale: clip.scale ?? 1 } } : {}),
                ...(!fromSurface ? { fromSurface } : {}),
                captureBeyondViewport,
            });
            return data;
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            const result_1 = __disposeResources(env_2);
            if (result_1)
                await result_1;
        }
    }
    async createPDFStream(options = {}) {
        const { timeout: ms = this._timeoutSettings.timeout() } = options;
        const { landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, width: paperWidth, height: paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, tagged: generateTaggedPDF, outline: generateDocumentOutline, waitForFonts, } = (0, util_js_1.parsePDFOptions)(options);
        if (omitBackground) {
            await this.#emulationManager.setTransparentBackgroundColor();
        }
        if (waitForFonts) {
            await (0, rxjs_js_1.firstValueFrom)((0, rxjs_js_1.from)(this.mainFrame()
                .isolatedRealm()
                .evaluate(() => {
                return document.fonts.ready;
            })).pipe((0, rxjs_js_1.raceWith)((0, util_js_1.timeout)(ms))));
        }
        const printCommandPromise = this.#primaryTargetClient.send('Page.printToPDF', {
            transferMode: 'ReturnAsStream',
            landscape,
            displayHeaderFooter,
            headerTemplate,
            footerTemplate,
            printBackground,
            scale,
            paperWidth,
            paperHeight,
            marginTop: margin.top,
            marginBottom: margin.bottom,
            marginLeft: margin.left,
            marginRight: margin.right,
            pageRanges,
            preferCSSPageSize,
            generateTaggedPDF,
            generateDocumentOutline,
        });
        const result = await (0, rxjs_js_1.firstValueFrom)((0, rxjs_js_1.from)(printCommandPromise).pipe((0, rxjs_js_1.raceWith)((0, util_js_1.timeout)(ms))));
        if (omitBackground) {
            await this.#emulationManager.resetDefaultBackgroundColor();
        }
        (0, assert_js_1.assert)(result.stream, '`stream` is missing from `Page.printToPDF');
        return await (0, util_js_1.getReadableFromProtocolStream)(this.#primaryTargetClient, result.stream);
    }
    async pdf(options = {}) {
        const { path = undefined } = options;
        const readable = await this.createPDFStream(options);
        const buffer = await (0, util_js_1.getReadableAsBuffer)(readable, path);
        (0, assert_js_1.assert)(buffer, 'Could not create buffer');
        return buffer;
    }
    async close(options = { runBeforeUnload: undefined }) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
            const _guard = __addDisposableResource(env_3, await this.browserContext().waitForScreenshotOperations(), false);
            const connection = this.#primaryTargetClient.connection();
            (0, assert_js_1.assert)(connection, 'Protocol error: Connection closed. Most likely the page has been closed.');
            const runBeforeUnload = !!options.runBeforeUnload;
            if (runBeforeUnload) {
                await this.#primaryTargetClient.send('Page.close');
            }
            else {
                await connection.send('Target.closeTarget', {
                    targetId: this.#primaryTarget._targetId,
                });
                await this.#tabTarget._isClosedDeferred.valueOrThrow();
            }
        }
        catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        }
        finally {
            __disposeResources(env_3);
        }
    }
    isClosed() {
        return this.#closed;
    }
    get mouse() {
        return this.#mouse;
    }
    /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
     * );
     * ```
     */
    async waitForDevicePrompt(options = {}) {
        return await this.mainFrame().waitForDevicePrompt(options);
    }
}
exports.CdpPage = CdpPage;
const supportedMetrics = new Set([
    'Timestamp',
    'Documents',
    'Frames',
    'JSEventListeners',
    'Nodes',
    'LayoutCount',
    'RecalcStyleCount',
    'LayoutDuration',
    'RecalcStyleDuration',
    'ScriptDuration',
    'TaskDuration',
    'JSHeapUsedSize',
    'JSHeapTotalSize',
]);
/** @see https://w3c.github.io/webdriver-bidi/#rectangle-intersection */
function getIntersectionRect(clip, viewport) {
    // Note these will already be normalized.
    const x = Math.max(clip.x, viewport.x);
    const y = Math.max(clip.y, viewport.y);
    return {
        x,
        y,
        width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
        height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0),
    };
}
//# sourceMappingURL=Page.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/Tracing.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tracing = void 0;
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Deferred_js_1 = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Deferred.js");
const ErrorLike_js_1 = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/ErrorLike.js");
/**
 * The Tracing class exposes the tracing audit interface.
 * @remarks
 * You can use `tracing.start` and `tracing.stop` to create a trace file
 * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
 *
 * @example
 *
 * ```ts
 * await page.tracing.start({path: 'trace.json'});
 * await page.goto('https://www.google.com');
 * await page.tracing.stop();
 * ```
 *
 * @public
 */
class Tracing {
    #client;
    #recording = false;
    #path;
    /**
     * @internal
     */
    constructor(client) {
        this.#client = client;
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#client = client;
    }
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    async start(options = {}) {
        (0, assert_js_1.assert)(!this.#recording, 'Cannot start recording trace while already recording trace.');
        const defaultCategories = [
            '-*',
            'devtools.timeline',
            'v8.execute',
            'disabled-by-default-devtools.timeline',
            'disabled-by-default-devtools.timeline.frame',
            'toplevel',
            'blink.console',
            'blink.user_timing',
            'latencyInfo',
            'disabled-by-default-devtools.timeline.stack',
            'disabled-by-default-v8.cpu_profiler',
        ];
        const { path, screenshots = false, categories = defaultCategories } = options;
        if (screenshots) {
            categories.push('disabled-by-default-devtools.screenshot');
        }
        const excludedCategories = categories
            .filter(cat => {
            return cat.startsWith('-');
        })
            .map(cat => {
            return cat.slice(1);
        });
        const includedCategories = categories.filter(cat => {
            return !cat.startsWith('-');
        });
        this.#path = path;
        this.#recording = true;
        await this.#client.send('Tracing.start', {
            transferMode: 'ReturnAsStream',
            traceConfig: {
                excludedCategories,
                includedCategories,
            },
        });
    }
    /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */
    async stop() {
        const contentDeferred = Deferred_js_1.Deferred.create();
        this.#client.once('Tracing.tracingComplete', async (event) => {
            try {
                (0, assert_js_1.assert)(event.stream, 'Missing "stream"');
                const readable = await (0, util_js_1.getReadableFromProtocolStream)(this.#client, event.stream);
                const buffer = await (0, util_js_1.getReadableAsBuffer)(readable, this.#path);
                contentDeferred.resolve(buffer ?? undefined);
            }
            catch (error) {
                if ((0, ErrorLike_js_1.isErrorLike)(error)) {
                    contentDeferred.reject(error);
                }
                else {
                    contentDeferred.reject(new Error(`Unknown error: ${error}`));
                }
            }
        });
        await this.#client.send('Tracing.end');
        this.#recording = false;
        return await contentDeferred.valueOrThrow();
    }
}
exports.Tracing = Tracing;
//# sourceMappingURL=Tracing.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/WebWorker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CdpWebWorker = void 0;
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const Target_js_1 = __webpack_require__(/*! ../api/Target.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/Target.js");
const WebWorker_js_1 = __webpack_require__(/*! ../api/WebWorker.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/WebWorker.js");
const TimeoutSettings_js_1 = __webpack_require__(/*! ../common/TimeoutSettings.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const ExecutionContext_js_1 = __webpack_require__(/*! ./ExecutionContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/ExecutionContext.js");
const IsolatedWorld_js_1 = __webpack_require__(/*! ./IsolatedWorld.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/IsolatedWorld.js");
const JSHandle_js_1 = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/JSHandle.js");
/**
 * @internal
 */
class CdpWebWorker extends WebWorker_js_1.WebWorker {
    #world;
    #client;
    #id;
    #targetType;
    constructor(client, url, targetId, targetType, consoleAPICalled, exceptionThrown) {
        super(url);
        this.#id = targetId;
        this.#client = client;
        this.#targetType = targetType;
        this.#world = new IsolatedWorld_js_1.IsolatedWorld(this, new TimeoutSettings_js_1.TimeoutSettings());
        this.#client.once('Runtime.executionContextCreated', async (event) => {
            this.#world.setContext(new ExecutionContext_js_1.ExecutionContext(client, event.context, this.#world));
        });
        this.#world.emitter.on('consoleapicalled', async (event) => {
            try {
                return consoleAPICalled(event.type, event.args.map((object) => {
                    return new JSHandle_js_1.CdpJSHandle(this.#world, object);
                }), event.stackTrace);
            }
            catch (err) {
                (0, util_js_1.debugError)(err);
            }
        });
        this.#client.on('Runtime.exceptionThrown', exceptionThrown);
        this.#client.once(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
            this.#world.dispose();
        });
        // This might fail if the target is closed before we receive all execution contexts.
        this.#client.send('Runtime.enable').catch(util_js_1.debugError);
    }
    mainRealm() {
        return this.#world;
    }
    get client() {
        return this.#client;
    }
    async close() {
        switch (this.#targetType) {
            case Target_js_1.TargetType.SERVICE_WORKER:
            case Target_js_1.TargetType.SHARED_WORKER: {
                // For service and shared workers we need to close the target and detach to allow
                // the worker to stop.
                await this.client.connection()?.send('Target.closeTarget', {
                    targetId: this.#id,
                });
                await this.client.connection()?.send('Target.detachFromTarget', {
                    sessionId: this.client.id(),
                });
                break;
            }
            default:
                await this.evaluate(() => {
                    self.close();
                });
        }
    }
}
exports.CdpWebWorker = CdpWebWorker;
//# sourceMappingURL=WebWorker.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/FileChooser.js":
/*!***********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/FileChooser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileChooser = void 0;
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
/**
 * File choosers let you react to the page requesting for a file.
 *
 * @remarks
 * `FileChooser` instances are returned via the {@link Page.waitForFileChooser} method.
 *
 * In browsers, only one file chooser can be opened at a time.
 * All file choosers must be accepted or canceled. Not doing so will prevent
 * subsequent file choosers from appearing.
 *
 * @example
 *
 * ```ts
 * const [fileChooser] = await Promise.all([
 *   page.waitForFileChooser(),
 *   page.click('#upload-file-button'), // some button that triggers file selection
 * ]);
 * await fileChooser.accept(['/tmp/myfile.pdf']);
 * ```
 *
 * @public
 */
class FileChooser {
    #element;
    #multiple;
    #handled = false;
    /**
     * @internal
     */
    constructor(element, event) {
        this.#element = element;
        this.#multiple = event.mode !== 'selectSingle';
    }
    /**
     * Whether file chooser allow for
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
     * file selection.
     */
    isMultiple() {
        return this.#multiple;
    }
    /**
     * Accept the file chooser request with the given file paths.
     *
     * @remarks This will not validate whether the file paths exists. Also, if a
     * path is relative, then it is resolved against the
     * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
     * For locals script connecting to remote chrome environments, paths must be
     * absolute.
     */
    async accept(paths) {
        (0, assert_js_1.assert)(!this.#handled, 'Cannot accept FileChooser which is already handled!');
        this.#handled = true;
        await this.#element.uploadFile(...paths);
    }
    /**
     * Closes the file chooser without selecting any files.
     */
    async cancel() {
        (0, assert_js_1.assert)(!this.#handled, 'Cannot cancel FileChooser which is already handled!');
        this.#handled = true;
        // XXX: These events should converted to trusted events. Perhaps do this
        // in `DOM.setFileInputFiles`?
        await this.#element.evaluate(element => {
            element.dispatchEvent(new Event('cancel', { bubbles: true }));
        });
    }
}
exports.FileChooser = FileChooser;
//# sourceMappingURL=FileChooser.js.map

/***/ })

}]);