"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_WaitTask_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/WaitTask.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/WaitTask.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskManager: () => (/* binding */ TaskManager),
/* harmony export */   WaitTask: () => (/* binding */ WaitTask)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/src/util/Function.ts");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/src/common/LazyArg.ts");
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
var _WaitTask_world, _WaitTask_polling, _WaitTask_root, _WaitTask_fn, _WaitTask_args, _WaitTask_timeout, _WaitTask_timeoutError, _WaitTask_result, _WaitTask_poller, _WaitTask_signal, _WaitTask_reruns, _TaskManager_tasks;





/**
 * @internal
 */
class WaitTask {
    constructor(world, options, fn, ...args) {
        _WaitTask_world.set(this, void 0);
        _WaitTask_polling.set(this, void 0);
        _WaitTask_root.set(this, void 0);
        _WaitTask_fn.set(this, void 0);
        _WaitTask_args.set(this, void 0);
        _WaitTask_timeout.set(this, void 0);
        _WaitTask_timeoutError.set(this, void 0);
        _WaitTask_result.set(this, _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create());
        _WaitTask_poller.set(this, void 0);
        _WaitTask_signal.set(this, void 0);
        _WaitTask_reruns.set(this, []);
        __classPrivateFieldSet(this, _WaitTask_world, world, "f");
        __classPrivateFieldSet(this, _WaitTask_polling, options.polling, "f");
        __classPrivateFieldSet(this, _WaitTask_root, options.root, "f");
        __classPrivateFieldSet(this, _WaitTask_signal, options.signal, "f");
        __classPrivateFieldGet(this, _WaitTask_signal, "f")?.addEventListener('abort', () => {
            void this.terminate(__classPrivateFieldGet(this, _WaitTask_signal, "f")?.reason);
        }, {
            once: true,
        });
        switch (typeof fn) {
            case 'string':
                __classPrivateFieldSet(this, _WaitTask_fn, `() => {return (${fn});}`, "f");
                break;
            default:
                __classPrivateFieldSet(this, _WaitTask_fn, (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_2__.stringifyFunction)(fn), "f");
                break;
        }
        __classPrivateFieldSet(this, _WaitTask_args, args, "f");
        __classPrivateFieldGet(this, _WaitTask_world, "f").taskManager.add(this);
        if (options.timeout) {
            __classPrivateFieldSet(this, _WaitTask_timeoutError, new _Errors_js__WEBPACK_IMPORTED_MODULE_3__.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`), "f");
            __classPrivateFieldSet(this, _WaitTask_timeout, setTimeout(() => {
                void this.terminate(__classPrivateFieldGet(this, _WaitTask_timeoutError, "f"));
            }, options.timeout), "f");
        }
        void this.rerun();
    }
    get result() {
        return __classPrivateFieldGet(this, _WaitTask_result, "f").valueOrThrow();
    }
    async rerun() {
        for (const prev of __classPrivateFieldGet(this, _WaitTask_reruns, "f")) {
            prev.abort();
        }
        __classPrivateFieldGet(this, _WaitTask_reruns, "f").length = 0;
        const controller = new AbortController();
        __classPrivateFieldGet(this, _WaitTask_reruns, "f").push(controller);
        try {
            switch (__classPrivateFieldGet(this, _WaitTask_polling, "f")) {
                case 'raf':
                    __classPrivateFieldSet(this, _WaitTask_poller, await __classPrivateFieldGet(this, _WaitTask_world, "f").evaluateHandle(({ RAFPoller, createFunction }, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new RAFPoller(() => {
                            return fun(...args);
                        });
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), __classPrivateFieldGet(this, _WaitTask_fn, "f"), ...__classPrivateFieldGet(this, _WaitTask_args, "f")), "f");
                    break;
                case 'mutation':
                    __classPrivateFieldSet(this, _WaitTask_poller, await __classPrivateFieldGet(this, _WaitTask_world, "f").evaluateHandle(({ MutationPoller, createFunction }, root, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new MutationPoller(() => {
                            return fun(...args);
                        }, root || document);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), __classPrivateFieldGet(this, _WaitTask_root, "f"), __classPrivateFieldGet(this, _WaitTask_fn, "f"), ...__classPrivateFieldGet(this, _WaitTask_args, "f")), "f");
                    break;
                default:
                    __classPrivateFieldSet(this, _WaitTask_poller, await __classPrivateFieldGet(this, _WaitTask_world, "f").evaluateHandle(({ IntervalPoller, createFunction }, ms, fn, ...args) => {
                        const fun = createFunction(fn);
                        return new IntervalPoller(() => {
                            return fun(...args);
                        }, ms);
                    }, _LazyArg_js__WEBPACK_IMPORTED_MODULE_4__.LazyArg.create(context => {
                        return context.puppeteerUtil;
                    }), __classPrivateFieldGet(this, _WaitTask_polling, "f"), __classPrivateFieldGet(this, _WaitTask_fn, "f"), ...__classPrivateFieldGet(this, _WaitTask_args, "f")), "f");
                    break;
            }
            await __classPrivateFieldGet(this, _WaitTask_poller, "f").evaluate(poller => {
                void poller.start();
            });
            const result = await __classPrivateFieldGet(this, _WaitTask_poller, "f").evaluateHandle(poller => {
                return poller.result();
            });
            __classPrivateFieldGet(this, _WaitTask_result, "f").resolve(result);
            await this.terminate();
        }
        catch (error) {
            if (controller.signal.aborted) {
                return;
            }
            const badError = this.getBadError(error);
            if (badError) {
                await this.terminate(badError);
            }
        }
    }
    async terminate(error) {
        __classPrivateFieldGet(this, _WaitTask_world, "f").taskManager.delete(this);
        clearTimeout(__classPrivateFieldGet(this, _WaitTask_timeout, "f"));
        if (error && !__classPrivateFieldGet(this, _WaitTask_result, "f").finished()) {
            __classPrivateFieldGet(this, _WaitTask_result, "f").reject(error);
        }
        if (__classPrivateFieldGet(this, _WaitTask_poller, "f")) {
            try {
                await __classPrivateFieldGet(this, _WaitTask_poller, "f").evaluateHandle(async (poller) => {
                    await poller.stop();
                });
                if (__classPrivateFieldGet(this, _WaitTask_poller, "f")) {
                    await __classPrivateFieldGet(this, _WaitTask_poller, "f").dispose();
                    __classPrivateFieldSet(this, _WaitTask_poller, undefined, "f");
                }
            }
            catch {
                // Ignore errors since they most likely come from low-level cleanup.
            }
        }
    }
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error) {
        if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_1__.isErrorLike)(error)) {
            // When frame is detached the task should have been terminated by the IsolatedWorld.
            // This can fail if we were adding this task while the frame was detached,
            // so we terminate here instead.
            if (error.message.includes('Execution context is not available in detached frame')) {
                return new Error('Waiting failed: Frame detached');
            }
            // When the page is navigated, the promise is rejected.
            // We will try again in the new execution context.
            if (error.message.includes('Execution context was destroyed')) {
                return;
            }
            // We could have tried to evaluate in a context which was already
            // destroyed.
            if (error.message.includes('Cannot find context with specified id')) {
                return;
            }
            // Errors coming from WebDriver BiDi. TODO: Adjust messages after
            // https://github.com/w3c/webdriver-bidi/issues/540 is resolved.
            if (error.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
                return;
            }
            return error;
        }
        return new Error('WaitTask failed with an error', {
            cause: error,
        });
    }
}
_WaitTask_world = new WeakMap(), _WaitTask_polling = new WeakMap(), _WaitTask_root = new WeakMap(), _WaitTask_fn = new WeakMap(), _WaitTask_args = new WeakMap(), _WaitTask_timeout = new WeakMap(), _WaitTask_timeoutError = new WeakMap(), _WaitTask_result = new WeakMap(), _WaitTask_poller = new WeakMap(), _WaitTask_signal = new WeakMap(), _WaitTask_reruns = new WeakMap();
/**
 * @internal
 */
class TaskManager {
    constructor() {
        _TaskManager_tasks.set(this, new Set());
    }
    add(task) {
        __classPrivateFieldGet(this, _TaskManager_tasks, "f").add(task);
    }
    delete(task) {
        __classPrivateFieldGet(this, _TaskManager_tasks, "f").delete(task);
    }
    terminateAll(error) {
        for (const task of __classPrivateFieldGet(this, _TaskManager_tasks, "f")) {
            void task.terminate(error);
        }
        __classPrivateFieldGet(this, _TaskManager_tasks, "f").clear();
    }
    async rerunAll() {
        await Promise.all([...__classPrivateFieldGet(this, _TaskManager_tasks, "f")].map(task => {
            return task.rerun();
        }));
    }
}
_TaskManager_tasks = new WeakMap();


/***/ })

}]);