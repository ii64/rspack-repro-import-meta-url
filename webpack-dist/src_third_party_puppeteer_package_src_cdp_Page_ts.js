"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Page_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Dialog.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Dialog.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
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
var _Dialog_type, _Dialog_message, _Dialog_defaultValue;

/**
 * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
 *
 * @remarks
 *
 * @example
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   page.on('dialog', async dialog => {
 *     console.log(dialog.message());
 *     await dialog.dismiss();
 *     await browser.close();
 *   });
 *   page.evaluate(() => alert('1'));
 * })();
 * ```
 *
 * @public
 */
class Dialog {
    /**
     * @internal
     */
    constructor(type, message, defaultValue = '') {
        _Dialog_type.set(this, void 0);
        _Dialog_message.set(this, void 0);
        _Dialog_defaultValue.set(this, void 0);
        /**
         * @internal
         */
        Object.defineProperty(this, "handled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        __classPrivateFieldSet(this, _Dialog_type, type, "f");
        __classPrivateFieldSet(this, _Dialog_message, message, "f");
        __classPrivateFieldSet(this, _Dialog_defaultValue, defaultValue, "f");
    }
    /**
     * The type of the dialog.
     */
    type() {
        return __classPrivateFieldGet(this, _Dialog_type, "f");
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
        return __classPrivateFieldGet(this, _Dialog_message, "f");
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
        return __classPrivateFieldGet(this, _Dialog_defaultValue, "f");
    }
    /**
     * A promise that resolves when the dialog has been accepted.
     *
     * @param promptText - optional text that will be entered in the dialog
     * prompt. Has no effect if the dialog's type is not `prompt`.
     *
     */
    async accept(promptText) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot accept dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: true,
            text: promptText,
        });
    }
    /**
     * A promise which will resolve once the dialog has been dismissed
     */
    async dismiss() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.handled, 'Cannot dismiss dialog which is already handled!');
        this.handled = true;
        await this.handle({
            accept: false,
        });
    }
}
_Dialog_type = new WeakMap(), _Dialog_message = new WeakMap(), _Dialog_defaultValue = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/Dialog.ts":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Dialog.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpDialog: () => (/* binding */ CdpDialog)
/* harmony export */ });
/* harmony import */ var _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Dialog.js */ "./src/third_party/puppeteer/package/src/api/Dialog.ts");
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
var _CdpDialog_client;

/**
 * @internal
 */
class CdpDialog extends _api_Dialog_js__WEBPACK_IMPORTED_MODULE_0__.Dialog {
    constructor(client, type, message, defaultValue = '') {
        super(type, message, defaultValue);
        _CdpDialog_client.set(this, void 0);
        __classPrivateFieldSet(this, _CdpDialog_client, client, "f");
    }
    async handle(options) {
        await __classPrivateFieldGet(this, _CdpDialog_client, "f").send('Page.handleJavaScriptDialog', {
            accept: options.accept,
            promptText: options.text,
        });
    }
}
_CdpDialog_client = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/Page.ts":
/*!***********************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpPage: () => (/* binding */ CdpPage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ConsoleMessage.js */ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_FileChooser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/FileChooser.js */ "./src/third_party/puppeteer/package/src/common/FileChooser.ts");
/* harmony import */ var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/src/common/NetworkManagerEvents.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _Binding_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Binding.js */ "./src/third_party/puppeteer/package/src/cdp/Binding.ts");
/* harmony import */ var _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CDPSession.js */ "./src/third_party/puppeteer/package/src/cdp/CDPSession.ts");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/src/cdp/Connection.ts");
/* harmony import */ var _Coverage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Coverage.js */ "./src/third_party/puppeteer/package/src/cdp/Coverage.ts");
/* harmony import */ var _Dialog_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Dialog.js */ "./src/third_party/puppeteer/package/src/cdp/Dialog.ts");
/* harmony import */ var _EmulationManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EmulationManager.js */ "./src/third_party/puppeteer/package/src/cdp/EmulationManager.ts");
/* harmony import */ var _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FirefoxTargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/FirefoxTargetManager.ts");
/* harmony import */ var _FrameManager_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FrameManager.js */ "./src/third_party/puppeteer/package/src/cdp/FrameManager.ts");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./src/third_party/puppeteer/package/src/cdp/FrameManagerEvents.ts");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/src/cdp/Input.ts");
/* harmony import */ var _IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IsolatedWorlds.js */ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorlds.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts");
/* harmony import */ var _TargetManager_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TargetManager.js */ "./src/third_party/puppeteer/package/src/cdp/TargetManager.ts");
/* harmony import */ var _Tracing_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Tracing.js */ "./src/third_party/puppeteer/package/src/cdp/Tracing.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/src/cdp/utils.ts");
/* harmony import */ var _WebWorker_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WebWorker.js */ "./src/third_party/puppeteer/package/src/cdp/WebWorker.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __addDisposableResource = (undefined && undefined.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (undefined && undefined.__disposeResources) || (function (SuppressedError) {
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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CdpPage_instances, _CdpPage_closed, _CdpPage_targetManager, _CdpPage_primaryTargetClient, _CdpPage_primaryTarget, _CdpPage_tabTargetClient, _CdpPage_tabTarget, _CdpPage_keyboard, _CdpPage_mouse, _CdpPage_touchscreen, _CdpPage_frameManager, _CdpPage_emulationManager, _CdpPage_tracing, _CdpPage_bindings, _CdpPage_exposedFunctions, _CdpPage_coverage, _CdpPage_viewport, _CdpPage_workers, _CdpPage_fileChooserDeferreds, _CdpPage_sessionCloseDeferred, _CdpPage_serviceWorkerBypassed, _CdpPage_userDragInterceptionEnabled, _CdpPage_attachExistingTargets, _CdpPage_onActivation, _CdpPage_onSecondaryTarget, _CdpPage_setupPrimaryTargetListeners, _CdpPage_onDetachedFromTarget, _CdpPage_onAttachedToTarget, _CdpPage_initialize, _CdpPage_onFileChooser, _CdpPage_onTargetCrashed, _CdpPage_onLogEntryAdded, _CdpPage_emitMetrics, _CdpPage_buildMetricsObject, _CdpPage_handleException, _CdpPage_onConsoleAPI, _CdpPage_onBindingCalled, _CdpPage_addConsoleMessage, _CdpPage_onDialog, _CdpPage_go;





























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
class CdpPage extends _api_Page_js__WEBPACK_IMPORTED_MODULE_2__.Page {
    static async _create(client, target, defaultViewport) {
        const page = new CdpPage(client, target);
        await __classPrivateFieldGet(page, _CdpPage_instances, "m", _CdpPage_initialize).call(page);
        if (defaultViewport) {
            try {
                await page.setViewport(defaultViewport);
            }
            catch (err) {
                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__.isErrorLike)(err) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_15__.isTargetClosedError)(err)) {
                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError)(err);
                }
                else {
                    throw err;
                }
            }
        }
        return page;
    }
    constructor(client, target) {
        super();
        _CdpPage_instances.add(this);
        _CdpPage_closed.set(this, false);
        _CdpPage_targetManager.set(this, void 0);
        _CdpPage_primaryTargetClient.set(this, void 0);
        _CdpPage_primaryTarget.set(this, void 0);
        _CdpPage_tabTargetClient.set(this, void 0);
        _CdpPage_tabTarget.set(this, void 0);
        _CdpPage_keyboard.set(this, void 0);
        _CdpPage_mouse.set(this, void 0);
        _CdpPage_touchscreen.set(this, void 0);
        _CdpPage_frameManager.set(this, void 0);
        _CdpPage_emulationManager.set(this, void 0);
        _CdpPage_tracing.set(this, void 0);
        _CdpPage_bindings.set(this, new Map());
        _CdpPage_exposedFunctions.set(this, new Map());
        _CdpPage_coverage.set(this, void 0);
        _CdpPage_viewport.set(this, void 0);
        _CdpPage_workers.set(this, new Map());
        _CdpPage_fileChooserDeferreds.set(this, new Set());
        _CdpPage_sessionCloseDeferred.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__.Deferred.create());
        _CdpPage_serviceWorkerBypassed.set(this, false);
        _CdpPage_userDragInterceptionEnabled.set(this, false);
        _CdpPage_onDetachedFromTarget.set(this, (target) => {
            const sessionId = target._session()?.id();
            const worker = __classPrivateFieldGet(this, _CdpPage_workers, "f").get(sessionId);
            if (!worker) {
                return;
            }
            __classPrivateFieldGet(this, _CdpPage_workers, "f").delete(sessionId);
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.WorkerDestroyed, worker);
        });
        _CdpPage_onAttachedToTarget.set(this, (session) => {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(session instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession);
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").onAttachedToTarget(session._target());
            if (session._target()._getTargetInfo().type === 'worker') {
                const worker = new _WebWorker_js__WEBPACK_IMPORTED_MODULE_28__.CdpWebWorker(session, session._target().url(), session._target()._targetId, session._target().type(), __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_addConsoleMessage).bind(this), __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_handleException).bind(this));
                __classPrivateFieldGet(this, _CdpPage_workers, "f").set(session.id(), worker);
                this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.WorkerCreated, worker);
            }
            session.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, __classPrivateFieldGet(this, _CdpPage_onAttachedToTarget, "f"));
        });
        __classPrivateFieldSet(this, _CdpPage_primaryTargetClient, client, "f");
        __classPrivateFieldSet(this, _CdpPage_tabTargetClient, client.parentSession(), "f");
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(__classPrivateFieldGet(this, _CdpPage_tabTargetClient, "f"), 'Tab target session is not defined.');
        __classPrivateFieldSet(this, _CdpPage_tabTarget, __classPrivateFieldGet(this, _CdpPage_tabTargetClient, "f")._target(), "f");
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(__classPrivateFieldGet(this, _CdpPage_tabTarget, "f"), 'Tab target is not defined.');
        __classPrivateFieldSet(this, _CdpPage_primaryTarget, target, "f");
        __classPrivateFieldSet(this, _CdpPage_targetManager, target._targetManager(), "f");
        __classPrivateFieldSet(this, _CdpPage_keyboard, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpKeyboard(client), "f");
        __classPrivateFieldSet(this, _CdpPage_mouse, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpMouse(client, __classPrivateFieldGet(this, _CdpPage_keyboard, "f")), "f");
        __classPrivateFieldSet(this, _CdpPage_touchscreen, new _Input_js__WEBPACK_IMPORTED_MODULE_22__.CdpTouchscreen(client, __classPrivateFieldGet(this, _CdpPage_keyboard, "f")), "f");
        __classPrivateFieldSet(this, _CdpPage_frameManager, new _FrameManager_js__WEBPACK_IMPORTED_MODULE_20__.FrameManager(client, this, this._timeoutSettings), "f");
        __classPrivateFieldSet(this, _CdpPage_emulationManager, new _EmulationManager_js__WEBPACK_IMPORTED_MODULE_18__.EmulationManager(client), "f");
        __classPrivateFieldSet(this, _CdpPage_tracing, new _Tracing_js__WEBPACK_IMPORTED_MODULE_26__.Tracing(client), "f");
        __classPrivateFieldSet(this, _CdpPage_coverage, new _Coverage_js__WEBPACK_IMPORTED_MODULE_16__.Coverage(client), "f");
        __classPrivateFieldSet(this, _CdpPage_viewport, null, "f");
        const frameManagerEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(__classPrivateFieldGet(this, _CdpPage_frameManager, "f"));
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameAttached, frame => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameAttached, frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameDetached, frame => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameDetached, frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.FrameNavigated, frame => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.FrameNavigated, frame);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.ConsoleApiCalled, ([world, event]) => {
            __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onConsoleAPI).call(this, world, event);
        });
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_21__.FrameManagerEvent.BindingCalled, ([world, event]) => {
            void __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onBindingCalled).call(this, world, event);
        });
        const networkManagerEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(__classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager);
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.Request, request => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Request, request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestServedFromCache, request => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.RequestServedFromCache, request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.Response, response => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Response, response);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestFailed, request => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.RequestFailed, request);
        });
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_7__.NetworkManagerEvent.RequestFinished, request => {
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.RequestFinished, request);
        });
        __classPrivateFieldGet(this, _CdpPage_tabTargetClient, "f").on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Swapped, __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onActivation).bind(this));
        __classPrivateFieldGet(this, _CdpPage_tabTargetClient, "f").on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onSecondaryTarget).bind(this));
        __classPrivateFieldGet(this, _CdpPage_targetManager, "f").on(_TargetManager_js__WEBPACK_IMPORTED_MODULE_25__.TargetManagerEvent.TargetGone, __classPrivateFieldGet(this, _CdpPage_onDetachedFromTarget, "f"));
        __classPrivateFieldGet(this, _CdpPage_tabTarget, "f")._isClosedDeferred
            .valueOrThrow()
            .then(() => {
            __classPrivateFieldGet(this, _CdpPage_targetManager, "f").off(_TargetManager_js__WEBPACK_IMPORTED_MODULE_25__.TargetManagerEvent.TargetGone, __classPrivateFieldGet(this, _CdpPage_onDetachedFromTarget, "f"));
            this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Close, undefined);
            __classPrivateFieldSet(this, _CdpPage_closed, true, "f");
        })
            .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
        __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_setupPrimaryTargetListeners).call(this);
        __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_attachExistingTargets).call(this);
    }
    _client() {
        return __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f");
    }
    isServiceWorkerBypassed() {
        return __classPrivateFieldGet(this, _CdpPage_serviceWorkerBypassed, "f");
    }
    isDragInterceptionEnabled() {
        return __classPrivateFieldGet(this, _CdpPage_userDragInterceptionEnabled, "f");
    }
    isJavaScriptEnabled() {
        return __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").javascriptEnabled;
    }
    async waitForFileChooser(options = {}) {
        const needsEnable = __classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f").size === 0;
        const { timeout = this._timeoutSettings.timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_10__.Deferred.create({
            message: `Waiting for \`FileChooser\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        __classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f").add(deferred);
        let enablePromise;
        if (needsEnable) {
            enablePromise = __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.setInterceptFileChooserDialog', {
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
            __classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f").delete(deferred);
            throw error;
        }
    }
    async setGeolocation(options) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").setGeolocation(options);
    }
    target() {
        return __classPrivateFieldGet(this, _CdpPage_primaryTarget, "f");
    }
    browser() {
        return __classPrivateFieldGet(this, _CdpPage_primaryTarget, "f").browser();
    }
    browserContext() {
        return __classPrivateFieldGet(this, _CdpPage_primaryTarget, "f").browserContext();
    }
    mainFrame() {
        return __classPrivateFieldGet(this, _CdpPage_frameManager, "f").mainFrame();
    }
    get keyboard() {
        return __classPrivateFieldGet(this, _CdpPage_keyboard, "f");
    }
    get touchscreen() {
        return __classPrivateFieldGet(this, _CdpPage_touchscreen, "f");
    }
    get coverage() {
        return __classPrivateFieldGet(this, _CdpPage_coverage, "f");
    }
    get tracing() {
        return __classPrivateFieldGet(this, _CdpPage_tracing, "f");
    }
    frames() {
        return __classPrivateFieldGet(this, _CdpPage_frameManager, "f").frames();
    }
    workers() {
        return Array.from(__classPrivateFieldGet(this, _CdpPage_workers, "f").values());
    }
    async setRequestInterception(value) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.setRequestInterception(value);
    }
    async setBypassServiceWorker(bypass) {
        __classPrivateFieldSet(this, _CdpPage_serviceWorkerBypassed, bypass, "f");
        return await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Network.setBypassServiceWorker', { bypass });
    }
    async setDragInterception(enabled) {
        __classPrivateFieldSet(this, _CdpPage_userDragInterceptionEnabled, enabled, "f");
        return await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Input.setInterceptDrags', {
            enabled,
        });
    }
    async setOfflineMode(enabled) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.setOfflineMode(enabled);
    }
    async emulateNetworkConditions(networkConditions) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.emulateNetworkConditions(networkConditions);
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
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
        const response = await this.mainFrame().client.send('Runtime.queryObjects', {
            prototypeObjectId: prototypeHandle.id,
        });
        return this.mainFrame()
            .mainRealm()
            .createCdpHandle(response.objects);
    }
    async cookies(...urls) {
        const originalCookies = (await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Network.getCookies', {
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
            await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Network.deleteCookies', item);
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
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(item.url !== 'about:blank', `Blank page can not have cookie "${item.name}"`);
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(!String.prototype.startsWith.call(item.url || '', 'data:'), `Data URL page can not have cookie "${item.name}"`);
            return item;
        });
        await this.deleteCookie(...items);
        if (items.length) {
            await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Network.setCookies', {
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
        if (__classPrivateFieldGet(this, _CdpPage_bindings, "f").has(name)) {
            throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
        }
        const source = (0,_utils_js__WEBPACK_IMPORTED_MODULE_27__.pageBindingInitString)('exposedFun', name);
        let binding;
        switch (typeof pptrFunction) {
            case 'function':
                binding = new _Binding_js__WEBPACK_IMPORTED_MODULE_13__.Binding(name, pptrFunction, source);
                break;
            default:
                binding = new _Binding_js__WEBPACK_IMPORTED_MODULE_13__.Binding(name, pptrFunction.default, source);
                break;
        }
        __classPrivateFieldGet(this, _CdpPage_bindings, "f").set(name, binding);
        const [{ identifier }] = await Promise.all([
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").evaluateOnNewDocument(source),
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").addExposedFunctionBinding(binding),
        ]);
        __classPrivateFieldGet(this, _CdpPage_exposedFunctions, "f").set(name, identifier);
    }
    async removeExposedFunction(name) {
        const exposedFunctionId = __classPrivateFieldGet(this, _CdpPage_exposedFunctions, "f").get(name);
        if (!exposedFunctionId) {
            throw new Error(`Function with name "${name}" does not exist`);
        }
        // #bindings must be updated together with #exposedFunctions.
        const binding = __classPrivateFieldGet(this, _CdpPage_bindings, "f").get(name);
        __classPrivateFieldGet(this, _CdpPage_exposedFunctions, "f").delete(name);
        __classPrivateFieldGet(this, _CdpPage_bindings, "f").delete(name);
        await Promise.all([
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").removeScriptToEvaluateOnNewDocument(exposedFunctionId),
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").removeExposedFunctionBinding(binding),
        ]);
    }
    async authenticate(credentials) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.authenticate(credentials);
    }
    async setExtraHTTPHeaders(headers) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.setExtraHTTPHeaders(headers);
    }
    async setUserAgent(userAgent, userAgentMetadata) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.setUserAgent(userAgent, userAgentMetadata);
    }
    async metrics() {
        const response = await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Performance.getMetrics');
        return __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_buildMetricsObject).call(this, response.metrics);
    }
    async reload(options) {
        const [result] = await Promise.all([
            this.waitForNavigation({
                ...options,
                ignoreSameDocumentNavigation: true,
            }),
            __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.reload'),
        ]);
        return result;
    }
    async createCDPSession() {
        return await this.target().createCDPSession();
    }
    async goBack(options = {}) {
        return await __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_go).call(this, -1, options);
    }
    async goForward(options = {}) {
        return await __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_go).call(this, +1, options);
    }
    async bringToFront() {
        await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.bringToFront');
    }
    async setJavaScriptEnabled(enabled) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").setJavaScriptEnabled(enabled);
    }
    async setBypassCSP(enabled) {
        await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.setBypassCSP', { enabled });
    }
    async emulateMediaType(type) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
        return await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
        const needsReload = await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").emulateViewport(viewport);
        __classPrivateFieldSet(this, _CdpPage_viewport, viewport, "f");
        if (needsReload) {
            await this.reload();
        }
    }
    viewport() {
        return __classPrivateFieldGet(this, _CdpPage_viewport, "f");
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
        const source = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.evaluationString)(pageFunction, ...args);
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").evaluateOnNewDocument(source);
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
        return await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").removeScriptToEvaluateOnNewDocument(identifier);
    }
    async setCacheEnabled(enabled = true) {
        await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").networkManager.setCacheEnabled(enabled);
    }
    async _screenshot(options) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
            const { fromSurface, omitBackground, optimizeForSpeed, quality, clip: userClip, type, captureBeyondViewport, } = options;
            const isFirefox = this.target()._targetManager() instanceof _FirefoxTargetManager_js__WEBPACK_IMPORTED_MODULE_19__.FirefoxTargetManager;
            const stack = __addDisposableResource(env_1, new _util_disposable_js__WEBPACK_IMPORTED_MODULE_11__.AsyncDisposableStack(), true);
            // Firefox omits background by default; it's not configurable.
            if (!isFirefox && omitBackground && (type === 'png' || type === 'webp')) {
                await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").setTransparentBackgroundColor();
                stack.defer(async () => {
                    await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f")
                        .resetDefaultBackgroundColor()
                        .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
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
            const { data } = await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.captureScreenshot', {
                format: type,
                ...(optimizeForSpeed ? { optimizeForSpeed } : {}),
                ...(quality !== undefined ? { quality: Math.round(quality) } : {}),
                ...(clip ? { clip: { ...clip, scale: clip.scale ?? 1 } } : {}),
                ...(!fromSurface ? { fromSurface } : {}),
                captureBeyondViewport,
            });
            return data;
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            const result_1 = __disposeResources(env_1);
            if (result_1)
                await result_1;
        }
    }
    async createPDFStream(options = {}) {
        const { timeout: ms = this._timeoutSettings.timeout() } = options;
        const { landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, width: paperWidth, height: paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, tagged: generateTaggedPDF, outline: generateDocumentOutline, waitForFonts, } = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.parsePDFOptions)(options);
        if (omitBackground) {
            await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").setTransparentBackgroundColor();
        }
        if (waitForFonts) {
            await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.mainFrame()
                .isolatedRealm()
                .evaluate(() => {
                return document.fonts.ready;
            })).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.timeout)(ms))));
        }
        const printCommandPromise = __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.printToPDF', {
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
        const result = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(printCommandPromise).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.timeout)(ms))));
        if (omitBackground) {
            await __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").resetDefaultBackgroundColor();
        }
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(result.stream, '`stream` is missing from `Page.printToPDF');
        return await (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.getReadableFromProtocolStream)(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f"), result.stream);
    }
    async pdf(options = {}) {
        const { path = undefined } = options;
        const readable = await this.createPDFStream(options);
        const buffer = await (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.getReadableAsBuffer)(readable, path);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(buffer, 'Could not create buffer');
        return buffer;
    }
    async close(options = { runBeforeUnload: undefined }) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
            const _guard = __addDisposableResource(env_2, await this.browserContext().waitForScreenshotOperations(), false);
            const connection = __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").connection();
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(connection, 'Protocol error: Connection closed. Most likely the page has been closed.');
            const runBeforeUnload = !!options.runBeforeUnload;
            if (runBeforeUnload) {
                await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.close');
            }
            else {
                await connection.send('Target.closeTarget', {
                    targetId: __classPrivateFieldGet(this, _CdpPage_primaryTarget, "f")._targetId,
                });
                await __classPrivateFieldGet(this, _CdpPage_tabTarget, "f")._isClosedDeferred.valueOrThrow();
            }
        }
        catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        }
        finally {
            __disposeResources(env_2);
        }
    }
    isClosed() {
        return __classPrivateFieldGet(this, _CdpPage_closed, "f");
    }
    get mouse() {
        return __classPrivateFieldGet(this, _CdpPage_mouse, "f");
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
_CdpPage_closed = new WeakMap(), _CdpPage_targetManager = new WeakMap(), _CdpPage_primaryTargetClient = new WeakMap(), _CdpPage_primaryTarget = new WeakMap(), _CdpPage_tabTargetClient = new WeakMap(), _CdpPage_tabTarget = new WeakMap(), _CdpPage_keyboard = new WeakMap(), _CdpPage_mouse = new WeakMap(), _CdpPage_touchscreen = new WeakMap(), _CdpPage_frameManager = new WeakMap(), _CdpPage_emulationManager = new WeakMap(), _CdpPage_tracing = new WeakMap(), _CdpPage_bindings = new WeakMap(), _CdpPage_exposedFunctions = new WeakMap(), _CdpPage_coverage = new WeakMap(), _CdpPage_viewport = new WeakMap(), _CdpPage_workers = new WeakMap(), _CdpPage_fileChooserDeferreds = new WeakMap(), _CdpPage_sessionCloseDeferred = new WeakMap(), _CdpPage_serviceWorkerBypassed = new WeakMap(), _CdpPage_userDragInterceptionEnabled = new WeakMap(), _CdpPage_onDetachedFromTarget = new WeakMap(), _CdpPage_onAttachedToTarget = new WeakMap(), _CdpPage_instances = new WeakSet(), _CdpPage_attachExistingTargets = function _CdpPage_attachExistingTargets() {
    const queue = [];
    for (const childTarget of __classPrivateFieldGet(this, _CdpPage_targetManager, "f").getChildTargets(__classPrivateFieldGet(this, _CdpPage_primaryTarget, "f"))) {
        queue.push(childTarget);
    }
    let idx = 0;
    while (idx < queue.length) {
        const next = queue[idx];
        idx++;
        const session = next._session();
        if (session) {
            __classPrivateFieldGet(this, _CdpPage_onAttachedToTarget, "f").call(this, session);
        }
        for (const childTarget of __classPrivateFieldGet(this, _CdpPage_targetManager, "f").getChildTargets(next)) {
            queue.push(childTarget);
        }
    }
}, _CdpPage_onActivation = async function _CdpPage_onActivation(newSession) {
    __classPrivateFieldSet(this, _CdpPage_primaryTargetClient, newSession, "f");
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f") instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession, 'CDPSession is not instance of CDPSessionImpl');
    __classPrivateFieldSet(this, _CdpPage_primaryTarget, __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f")._target(), "f");
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(__classPrivateFieldGet(this, _CdpPage_primaryTarget, "f"), 'Missing target on swap');
    __classPrivateFieldGet(this, _CdpPage_keyboard, "f").updateClient(newSession);
    __classPrivateFieldGet(this, _CdpPage_mouse, "f").updateClient(newSession);
    __classPrivateFieldGet(this, _CdpPage_touchscreen, "f").updateClient(newSession);
    __classPrivateFieldGet(this, _CdpPage_emulationManager, "f").updateClient(newSession);
    __classPrivateFieldGet(this, _CdpPage_tracing, "f").updateClient(newSession);
    __classPrivateFieldGet(this, _CdpPage_coverage, "f").updateClient(newSession);
    await __classPrivateFieldGet(this, _CdpPage_frameManager, "f").swapFrameTree(newSession);
    __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_setupPrimaryTargetListeners).call(this);
}, _CdpPage_onSecondaryTarget = async function _CdpPage_onSecondaryTarget(session) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(session instanceof _CDPSession_js__WEBPACK_IMPORTED_MODULE_14__.CdpCDPSession);
    if (session._target()._subtype() !== 'prerender') {
        return;
    }
    __classPrivateFieldGet(this, _CdpPage_frameManager, "f").registerSpeculativeSession(session).catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
    __classPrivateFieldGet(this, _CdpPage_emulationManager, "f")
        .registerSpeculativeSession(session)
        .catch(_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError);
}, _CdpPage_setupPrimaryTargetListeners = function _CdpPage_setupPrimaryTargetListeners() {
    const clientEmitter = new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f"));
    clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Ready, __classPrivateFieldGet(this, _CdpPage_onAttachedToTarget, "f"));
    clientEmitter.on(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, () => {
        __classPrivateFieldGet(this, _CdpPage_sessionCloseDeferred, "f").reject(new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TargetCloseError('Target closed'));
    });
    clientEmitter.on('Page.domContentEventFired', () => {
        this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.DOMContentLoaded, undefined);
    });
    clientEmitter.on('Page.loadEventFired', () => {
        this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Load, undefined);
    });
    clientEmitter.on('Page.javascriptDialogOpening', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onDialog).bind(this));
    clientEmitter.on('Runtime.exceptionThrown', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_handleException).bind(this));
    clientEmitter.on('Inspector.targetCrashed', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onTargetCrashed).bind(this));
    clientEmitter.on('Performance.metrics', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_emitMetrics).bind(this));
    clientEmitter.on('Log.entryAdded', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onLogEntryAdded).bind(this));
    clientEmitter.on('Page.fileChooserOpened', __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_onFileChooser).bind(this));
}, _CdpPage_initialize = async function _CdpPage_initialize() {
    try {
        await Promise.all([
            __classPrivateFieldGet(this, _CdpPage_frameManager, "f").initialize(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f")),
            __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Performance.enable'),
            __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Log.enable'),
        ]);
    }
    catch (err) {
        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_12__.isErrorLike)(err) && (0,_Connection_js__WEBPACK_IMPORTED_MODULE_15__.isTargetClosedError)(err)) {
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.debugError)(err);
        }
        else {
            throw err;
        }
    }
}, _CdpPage_onFileChooser = async function _CdpPage_onFileChooser(event) {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
        if (!__classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f").size) {
            return;
        }
        const frame = __classPrivateFieldGet(this, _CdpPage_frameManager, "f").frame(event.frameId);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_9__.assert)(frame, 'This should never happen.');
        // This is guaranteed to be an HTMLInputElement handle by the event.
        const handle = __addDisposableResource(env_3, (await frame.worlds[_IsolatedWorlds_js__WEBPACK_IMPORTED_MODULE_23__.MAIN_WORLD].adoptBackendNode(event.backendNodeId)), false);
        const fileChooser = new _common_FileChooser_js__WEBPACK_IMPORTED_MODULE_6__.FileChooser(handle.move(), event);
        for (const promise of __classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f")) {
            promise.resolve(fileChooser);
        }
        __classPrivateFieldGet(this, _CdpPage_fileChooserDeferreds, "f").clear();
    }
    catch (e_3) {
        env_3.error = e_3;
        env_3.hasError = true;
    }
    finally {
        __disposeResources(env_3);
    }
}, _CdpPage_onTargetCrashed = function _CdpPage_onTargetCrashed() {
    this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Error, new Error('Page crashed!'));
}, _CdpPage_onLogEntryAdded = function _CdpPage_onLogEntryAdded(event) {
    const { level, text, args, source, url, lineNumber } = event.entry;
    if (args) {
        args.map(arg => {
            void (0,_JSHandle_js__WEBPACK_IMPORTED_MODULE_24__.releaseObject)(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f"), arg);
        });
    }
    if (source !== 'worker') {
        this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Console, new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(convertConsoleMessageLevel(level), text, [], [{ url, lineNumber }]));
    }
}, _CdpPage_emitMetrics = function _CdpPage_emitMetrics(event) {
    this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Metrics, {
        title: event.title,
        metrics: __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_buildMetricsObject).call(this, event.metrics),
    });
}, _CdpPage_buildMetricsObject = function _CdpPage_buildMetricsObject(metrics) {
    const result = {};
    for (const metric of metrics || []) {
        if (supportedMetrics.has(metric.name)) {
            result[metric.name] = metric.value;
        }
    }
    return result;
}, _CdpPage_handleException = function _CdpPage_handleException(exception) {
    this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.PageError, (0,_utils_js__WEBPACK_IMPORTED_MODULE_27__.createClientError)(exception.exceptionDetails));
}, _CdpPage_onConsoleAPI = function _CdpPage_onConsoleAPI(world, event) {
    const values = event.args.map(arg => {
        return world.createCdpHandle(arg);
    });
    __classPrivateFieldGet(this, _CdpPage_instances, "m", _CdpPage_addConsoleMessage).call(this, convertConsoleMessageLevel(event.type), values, event.stackTrace);
}, _CdpPage_onBindingCalled = async function _CdpPage_onBindingCalled(world, event) {
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
    const binding = __classPrivateFieldGet(this, _CdpPage_bindings, "f").get(name);
    await binding?.run(context, seq, args, isTrivial);
}, _CdpPage_addConsoleMessage = function _CdpPage_addConsoleMessage(eventType, args, stackTrace) {
    if (!this.listenerCount(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Console)) {
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
            textTokens.push((0,_utils_js__WEBPACK_IMPORTED_MODULE_27__.valueFromRemoteObject)(remoteObject));
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
    const message = new _common_ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleMessage(convertConsoleMessageLevel(eventType), textTokens.join(' '), args, stackTraceLocations);
    this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Console, message);
}, _CdpPage_onDialog = function _CdpPage_onDialog(event) {
    const type = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_8__.validateDialogType)(event.type);
    const dialog = new _Dialog_js__WEBPACK_IMPORTED_MODULE_17__.CdpDialog(__classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f"), type, event.message, event.defaultPrompt);
    this.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_2__.PageEvent.Dialog, dialog);
}, _CdpPage_go = async function _CdpPage_go(delta, options) {
    const history = await __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.getNavigationHistory');
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
        return null;
    }
    const result = await Promise.all([
        this.waitForNavigation(options),
        __classPrivateFieldGet(this, _CdpPage_primaryTargetClient, "f").send('Page.navigateToHistoryEntry', {
            entryId: entry.id,
        }),
    ]);
    return result[0];
};
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/Tracing.ts":
/*!**************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Tracing.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tracing: () => (/* binding */ Tracing)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
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
var _Tracing_client, _Tracing_recording, _Tracing_path;




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
    /**
     * @internal
     */
    constructor(client) {
        _Tracing_client.set(this, void 0);
        _Tracing_recording.set(this, false);
        _Tracing_path.set(this, void 0);
        __classPrivateFieldSet(this, _Tracing_client, client, "f");
    }
    /**
     * @internal
     */
    updateClient(client) {
        __classPrivateFieldSet(this, _Tracing_client, client, "f");
    }
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    async start(options = {}) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!__classPrivateFieldGet(this, _Tracing_recording, "f"), 'Cannot start recording trace while already recording trace.');
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
        __classPrivateFieldSet(this, _Tracing_path, path, "f");
        __classPrivateFieldSet(this, _Tracing_recording, true, "f");
        await __classPrivateFieldGet(this, _Tracing_client, "f").send('Tracing.start', {
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
        const contentDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred.create();
        __classPrivateFieldGet(this, _Tracing_client, "f").once('Tracing.tracingComplete', async (event) => {
            try {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(event.stream, 'Missing "stream"');
                const readable = await (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.getReadableFromProtocolStream)(__classPrivateFieldGet(this, _Tracing_client, "f"), event.stream);
                const buffer = await (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.getReadableAsBuffer)(readable, __classPrivateFieldGet(this, _Tracing_path, "f"));
                contentDeferred.resolve(buffer ?? undefined);
            }
            catch (error) {
                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_3__.isErrorLike)(error)) {
                    contentDeferred.reject(error);
                }
                else {
                    contentDeferred.reject(new Error(`Unknown error: ${error}`));
                }
            }
        });
        await __classPrivateFieldGet(this, _Tracing_client, "f").send('Tracing.end');
        __classPrivateFieldSet(this, _Tracing_recording, false, "f");
        return await contentDeferred.valueOrThrow();
    }
}
_Tracing_client = new WeakMap(), _Tracing_recording = new WeakMap(), _Tracing_path = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleMessage: () => (/* binding */ ConsoleMessage)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var _ConsoleMessage_type, _ConsoleMessage_text, _ConsoleMessage_args, _ConsoleMessage_stackTraceLocations;
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
class ConsoleMessage {
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations) {
        _ConsoleMessage_type.set(this, void 0);
        _ConsoleMessage_text.set(this, void 0);
        _ConsoleMessage_args.set(this, void 0);
        _ConsoleMessage_stackTraceLocations.set(this, void 0);
        __classPrivateFieldSet(this, _ConsoleMessage_type, type, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_text, text, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_args, args, "f");
        __classPrivateFieldSet(this, _ConsoleMessage_stackTraceLocations, stackTraceLocations, "f");
    }
    /**
     * The type of the console message.
     */
    type() {
        return __classPrivateFieldGet(this, _ConsoleMessage_type, "f");
    }
    /**
     * The text of the console message.
     */
    text() {
        return __classPrivateFieldGet(this, _ConsoleMessage_text, "f");
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
        return __classPrivateFieldGet(this, _ConsoleMessage_args, "f");
    }
    /**
     * The location of the console message.
     */
    location() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f")[0] ?? {};
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
        return __classPrivateFieldGet(this, _ConsoleMessage_stackTraceLocations, "f");
    }
}
_ConsoleMessage_type = new WeakMap(), _ConsoleMessage_text = new WeakMap(), _ConsoleMessage_args = new WeakMap(), _ConsoleMessage_stackTraceLocations = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/FileChooser.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/FileChooser.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileChooser: () => (/* binding */ FileChooser)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/**
 * @license
 * Copyright 2020 Google Inc.
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
var _FileChooser_element, _FileChooser_multiple, _FileChooser_handled;

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
    /**
     * @internal
     */
    constructor(element, event) {
        _FileChooser_element.set(this, void 0);
        _FileChooser_multiple.set(this, void 0);
        _FileChooser_handled.set(this, false);
        __classPrivateFieldSet(this, _FileChooser_element, element, "f");
        __classPrivateFieldSet(this, _FileChooser_multiple, event.mode !== 'selectSingle', "f");
    }
    /**
     * Whether file chooser allow for
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
     * file selection.
     */
    isMultiple() {
        return __classPrivateFieldGet(this, _FileChooser_multiple, "f");
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
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!__classPrivateFieldGet(this, _FileChooser_handled, "f"), 'Cannot accept FileChooser which is already handled!');
        __classPrivateFieldSet(this, _FileChooser_handled, true, "f");
        await __classPrivateFieldGet(this, _FileChooser_element, "f").uploadFile(...paths);
    }
    /**
     * Closes the file chooser without selecting any files.
     */
    async cancel() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!__classPrivateFieldGet(this, _FileChooser_handled, "f"), 'Cannot cancel FileChooser which is already handled!');
        __classPrivateFieldSet(this, _FileChooser_handled, true, "f");
        // XXX: These events should converted to trusted events. Perhaps do this
        // in `DOM.setFileInputFiles`?
        await __classPrivateFieldGet(this, _FileChooser_element, "f").evaluate(element => {
            element.dispatchEvent(new Event('cancel', { bubbles: true }));
        });
    }
}
_FileChooser_element = new WeakMap(), _FileChooser_multiple = new WeakMap(), _FileChooser_handled = new WeakMap();


/***/ })

}]);