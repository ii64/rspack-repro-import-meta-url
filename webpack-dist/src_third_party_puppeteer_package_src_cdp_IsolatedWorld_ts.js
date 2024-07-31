"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_IsolatedWorld_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Realm.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Realm.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Realm: () => (/* binding */ Realm)
/* harmony export */ });
/* harmony import */ var _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/WaitTask.js */ "./src/third_party/puppeteer/package/src/common/WaitTask.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _Realm_disposed;


/**
 * @internal
 */
class Realm {
    constructor(timeoutSettings) {
        Object.defineProperty(this, "timeoutSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "taskManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.TaskManager()
        });
        _Realm_disposed.set(this, false);
        this.timeoutSettings = timeoutSettings;
    }
    async waitForFunction(pageFunction, options = {}, ...args) {
        const { polling = 'raf', timeout = this.timeoutSettings.timeout(), root, signal, } = options;
        if (typeof polling === 'number' && polling < 0) {
            throw new Error('Cannot poll with non-positive interval');
        }
        const waitTask = new _common_WaitTask_js__WEBPACK_IMPORTED_MODULE_0__.WaitTask(this, {
            polling,
            root,
            timeout,
            signal,
        }, pageFunction, ...args);
        return await waitTask.result;
    }
    get disposed() {
        return __classPrivateFieldGet(this, _Realm_disposed, "f");
    }
    /** @internal */
    dispose() {
        __classPrivateFieldSet(this, _Realm_disposed, true, "f");
        this.taskManager.terminateAll(new Error('waitForFunction failed: frame got detached.'));
    }
    /** @internal */
    [(_Realm_disposed = new WeakMap(), _util_disposable_js__WEBPACK_IMPORTED_MODULE_1__.disposeSymbol)]() {
        this.dispose();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/IsolatedWorld.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/IsolatedWorld.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsolatedWorld: () => (/* binding */ IsolatedWorld)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_Realm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Realm.js */ "./src/third_party/puppeteer/package/src/api/Realm.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/* harmony import */ var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/src/cdp/ElementHandle.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts");
/**
 * @license
 * Copyright 2019 Google Inc.
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
var _IsolatedWorld_instances, _IsolatedWorld_context, _IsolatedWorld_emitter, _IsolatedWorld_frameOrWorker, _IsolatedWorld_onContextDisposed, _IsolatedWorld_onContextConsoleApiCalled, _IsolatedWorld_onContextBindingCalled, _IsolatedWorld_executionContext, _IsolatedWorld_waitForExecutionContext;







/**
 * @internal
 */
class IsolatedWorld extends _api_Realm_js__WEBPACK_IMPORTED_MODULE_1__.Realm {
    constructor(frameOrWorker, timeoutSettings) {
        super(timeoutSettings);
        _IsolatedWorld_instances.add(this);
        _IsolatedWorld_context.set(this, void 0);
        _IsolatedWorld_emitter.set(this, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_2__.EventEmitter());
        _IsolatedWorld_frameOrWorker.set(this, void 0);
        __classPrivateFieldSet(this, _IsolatedWorld_frameOrWorker, frameOrWorker, "f");
    }
    get environment() {
        return __classPrivateFieldGet(this, _IsolatedWorld_frameOrWorker, "f");
    }
    get client() {
        return __classPrivateFieldGet(this, _IsolatedWorld_frameOrWorker, "f").client;
    }
    get emitter() {
        return __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f");
    }
    setContext(context) {
        __classPrivateFieldGet(this, _IsolatedWorld_context, "f")?.[_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
        context.once('disposed', __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_onContextDisposed).bind(this));
        context.on('consoleapicalled', __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_onContextConsoleApiCalled).bind(this));
        context.on('bindingcalled', __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_onContextBindingCalled).bind(this));
        __classPrivateFieldSet(this, _IsolatedWorld_context, context, "f");
        __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f").emit('context', context);
        void this.taskManager.rerunAll();
    }
    hasContext() {
        return !!__classPrivateFieldGet(this, _IsolatedWorld_context, "f");
    }
    get context() {
        return __classPrivateFieldGet(this, _IsolatedWorld_context, "f");
    }
    async evaluateHandle(pageFunction, ...args) {
        pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
        // This code needs to schedule evaluateHandle call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_executionContext).call(this);
        if (!context) {
            context = await __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_waitForExecutionContext).call(this);
        }
        return await context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        pageFunction = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
        // This code needs to schedule evaluate call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_executionContext).call(this);
        if (!context) {
            context = await __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_waitForExecutionContext).call(this);
        }
        return await context.evaluate(pageFunction, ...args);
    }
    async adoptBackendNode(backendNodeId) {
        // This code needs to schedule resolveNode call synchroniously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_executionContext).call(this);
        if (!context) {
            context = await __classPrivateFieldGet(this, _IsolatedWorld_instances, "m", _IsolatedWorld_waitForExecutionContext).call(this);
        }
        const { object } = await this.client.send('DOM.resolveNode', {
            backendNodeId: backendNodeId,
            executionContextId: context.id,
        });
        return this.createCdpHandle(object);
    }
    async adoptHandle(handle) {
        if (handle.realm === this) {
            // If the context has already adopted this handle, clone it so downstream
            // disposal doesn't become an issue.
            return (await handle.evaluateHandle(value => {
                return value;
            }));
        }
        const nodeInfo = await this.client.send('DOM.describeNode', {
            objectId: handle.id,
        });
        return (await this.adoptBackendNode(nodeInfo.node.backendNodeId));
    }
    async transferHandle(handle) {
        if (handle.realm === this) {
            return handle;
        }
        // Implies it's a primitive value, probably.
        if (handle.remoteObject().objectId === undefined) {
            return handle;
        }
        const info = await this.client.send('DOM.describeNode', {
            objectId: handle.remoteObject().objectId,
        });
        const newHandle = (await this.adoptBackendNode(info.node.backendNodeId));
        await handle.dispose();
        return newHandle;
    }
    /**
     * @internal
     */
    createCdpHandle(remoteObject) {
        if (remoteObject.subtype === 'node') {
            return new _ElementHandle_js__WEBPACK_IMPORTED_MODULE_5__.CdpElementHandle(this, remoteObject);
        }
        return new _JSHandle_js__WEBPACK_IMPORTED_MODULE_6__.CdpJSHandle(this, remoteObject);
    }
    [(_IsolatedWorld_context = new WeakMap(), _IsolatedWorld_emitter = new WeakMap(), _IsolatedWorld_frameOrWorker = new WeakMap(), _IsolatedWorld_instances = new WeakSet(), _IsolatedWorld_onContextDisposed = function _IsolatedWorld_onContextDisposed() {
        __classPrivateFieldSet(this, _IsolatedWorld_context, undefined, "f");
        if ('clearDocumentHandle' in __classPrivateFieldGet(this, _IsolatedWorld_frameOrWorker, "f")) {
            __classPrivateFieldGet(this, _IsolatedWorld_frameOrWorker, "f").clearDocumentHandle();
        }
    }, _IsolatedWorld_onContextConsoleApiCalled = function _IsolatedWorld_onContextConsoleApiCalled(event) {
        __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f").emit('consoleapicalled', event);
    }, _IsolatedWorld_onContextBindingCalled = function _IsolatedWorld_onContextBindingCalled(event) {
        __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f").emit('bindingcalled', event);
    }, _IsolatedWorld_executionContext = function _IsolatedWorld_executionContext() {
        if (this.disposed) {
            throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
        }
        return __classPrivateFieldGet(this, _IsolatedWorld_context, "f");
    }, _IsolatedWorld_waitForExecutionContext = 
    /**
     * Waits for the next context to be set on the isolated world.
     */
    async function _IsolatedWorld_waitForExecutionContext() {
        const result = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(__classPrivateFieldGet(this, _IsolatedWorld_emitter, "f"), 'context').pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(__classPrivateFieldGet(this, _IsolatedWorld_emitter, "f"), 'disposed').pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(() => {
            // The message has to match the CDP message expected by the WaitTask class.
            throw new Error('Execution context was destroyed');
        })), (0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.timeout)(this.timeoutSettings.timeout()))));
        return result;
    }, _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol)]() {
        __classPrivateFieldGet(this, _IsolatedWorld_context, "f")?.[_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
        __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f").emit('disposed', undefined);
        super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.disposeSymbol]();
        __classPrivateFieldGet(this, _IsolatedWorld_emitter, "f").removeAllListeners();
    }
}


/***/ })

}]);