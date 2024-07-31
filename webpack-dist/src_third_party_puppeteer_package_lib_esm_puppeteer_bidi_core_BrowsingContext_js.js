"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_BrowsingContext_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/BrowsingContext.js":
/*!******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/BrowsingContext.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowsingContext: () => (/* binding */ BrowsingContext)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js");
/* harmony import */ var _Realm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Realm.js");
/* harmony import */ var _Request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Request.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js");
/* harmony import */ var _UserPrompt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserPrompt.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserPrompt.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};







/**
 * @internal
 */
let BrowsingContext = (() => {
    var _a;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _activate_decorators;
    let _captureScreenshot_decorators;
    let _close_decorators;
    let _traverseHistory_decorators;
    let _navigate_decorators;
    let _reload_decorators;
    let _setCacheBehavior_decorators;
    let _print_decorators;
    let _handleUserPrompt_decorators;
    let _setViewport_decorators;
    let _performActions_decorators;
    let _releaseActions_decorators;
    let _createWindowRealm_decorators;
    let _addPreloadScript_decorators;
    let _addIntercept_decorators;
    let _removePreloadScript_decorators;
    let _getCookies_decorators;
    let _setCookie_decorators;
    let _setFiles_decorators;
    let _subscribe_decorators;
    let _addInterception_decorators;
    let _deleteCookie_decorators;
    let _locateNodes_decorators;
    return class BrowsingContext extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _deleteCookie_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            _locateNodes_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                    // SAFETY: Disposal implies this exists.
                    return context.#reason;
                })];
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: obj => "activate" in obj, get: obj => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: obj => "captureScreenshot" in obj, get: obj => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: obj => "traverseHistory" in obj, get: obj => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: obj => "navigate" in obj, get: obj => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: obj => "reload" in obj, get: obj => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setCacheBehavior_decorators, { kind: "method", name: "setCacheBehavior", static: false, private: false, access: { has: obj => "setCacheBehavior" in obj, get: obj => obj.setCacheBehavior }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: obj => "print" in obj, get: obj => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: obj => "handleUserPrompt" in obj, get: obj => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: obj => "setViewport" in obj, get: obj => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: obj => "performActions" in obj, get: obj => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: obj => "releaseActions" in obj, get: obj => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: obj => "createWindowRealm" in obj, get: obj => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: obj => "addPreloadScript" in obj, get: obj => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: obj => "addIntercept" in obj, get: obj => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: obj => "removePreloadScript" in obj, get: obj => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: obj => "getCookies" in obj, get: obj => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: obj => "setCookie" in obj, get: obj => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: obj => "setFiles" in obj, get: obj => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: obj => "subscribe" in obj, get: obj => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: obj => "addInterception" in obj, get: obj => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: obj => "deleteCookie" in obj, get: obj => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: obj => "locateNodes" in obj, get: obj => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(userContext, parent, id, url, originalOpener) {
            const browsingContext = new BrowsingContext(userContext, parent, id, url, originalOpener);
            browsingContext.#initialize();
            return browsingContext;
        }
        #navigation = __runInitializers(this, _instanceExtraInitializers);
        #reason;
        #url;
        #children = new Map();
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        #realms = new Map();
        #requests = new Map();
        defaultRealm;
        id;
        parent;
        userContext;
        originalOpener;
        constructor(context, parent, id, url, originalOpener) {
            super();
            this.#url = url;
            this.id = id;
            this.parent = parent;
            this.userContext = context;
            this.originalOpener = originalOpener;
            this.defaultRealm = this.#createWindowRealm();
        }
        #initialize() {
            const userContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.userContext));
            userContextEmitter.once('closed', ({ reason }) => {
                this.dispose(`Browsing context already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#session));
            sessionEmitter.on('browsingContext.contextCreated', info => {
                if (info.parent !== this.id) {
                    return;
                }
                const browsingContext = BrowsingContext.from(this.userContext, this, info.context, info.url, info.originalOpener);
                this.#children.set(info.context, browsingContext);
                const browsingContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(browsingContext));
                browsingContextEmitter.once('closed', () => {
                    browsingContextEmitter.removeAllListeners();
                    this.#children.delete(browsingContext.id);
                });
                this.emit('browsingcontext', { browsingContext });
            });
            sessionEmitter.on('browsingContext.contextDestroyed', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.dispose('Browsing context already closed.');
            });
            sessionEmitter.on('browsingContext.domContentLoaded', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('DOMContentLoaded', undefined);
            });
            sessionEmitter.on('browsingContext.load', info => {
                if (info.context !== this.id) {
                    return;
                }
                this.#url = info.url;
                this.emit('load', undefined);
            });
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.id) {
                    return;
                }
                // Note: we should not update this.#url at this point since the context
                // has not finished navigating to the info.url yet.
                for (const [id, request] of this.#requests) {
                    if (request.disposed) {
                        this.#requests.delete(id);
                    }
                }
                // If the navigation hasn't finished, then this is nested navigation. The
                // current navigation will handle this.
                if (this.#navigation !== undefined && !this.#navigation.disposed) {
                    return;
                }
                // Note the navigation ID is null for this event.
                this.#navigation = _Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation.from(this);
                const navigationEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#navigation));
                for (const eventName of ['fragment', 'failed', 'aborted']) {
                    navigationEmitter.once(eventName, ({ url }) => {
                        navigationEmitter[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                        this.#url = url;
                    });
                }
                this.emit('navigation', { navigation: this.#navigation });
            });
            sessionEmitter.on('network.beforeRequestSent', event => {
                if (event.context !== this.id) {
                    return;
                }
                if (this.#requests.has(event.request.request)) {
                    // Means the request is a redirect. This is handled in Request.
                    // Or an Auth event was issued
                    return;
                }
                const request = _Request_js__WEBPACK_IMPORTED_MODULE_5__.Request.from(this, event);
                this.#requests.set(request.id, request);
                this.emit('request', { request });
            });
            sessionEmitter.on('log.entryAdded', entry => {
                if (entry.source.context !== this.id) {
                    return;
                }
                this.emit('log', { entry });
            });
            sessionEmitter.on('browsingContext.userPromptOpened', info => {
                if (info.context !== this.id) {
                    return;
                }
                const userPrompt = _UserPrompt_js__WEBPACK_IMPORTED_MODULE_6__.UserPrompt.from(this, info);
                this.emit('userprompt', { userPrompt });
            });
        }
        get #session() {
            return this.userContext.browser.session;
        }
        get children() {
            return this.#children.values();
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get realms() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias -- Required
            const self = this;
            return (function* () {
                yield self.defaultRealm;
                yield* self.#realms.values();
            })();
        }
        get top() {
            let context = this;
            for (let { parent } = context; parent; { parent } = context) {
                context = parent;
            }
            return context;
        }
        get url() {
            return this.#url;
        }
        #createWindowRealm(sandbox) {
            const realm = _Realm_js__WEBPACK_IMPORTED_MODULE_4__.WindowRealm.from(this, sandbox);
            realm.on('worker', realm => {
                this.emit('worker', { realm });
            });
            return realm;
        }
        dispose(reason) {
            this.#reason = reason;
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        async activate() {
            await this.#session.send('browsingContext.activate', {
                context: this.id,
            });
        }
        async captureScreenshot(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.captureScreenshot', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async close(promptUnload) {
            await Promise.all([...this.#children.values()].map(async (child) => {
                await child.close(promptUnload);
            }));
            await this.#session.send('browsingContext.close', {
                context: this.id,
                promptUnload,
            });
        }
        async traverseHistory(delta) {
            await this.#session.send('browsingContext.traverseHistory', {
                context: this.id,
                delta,
            });
        }
        async navigate(url, wait) {
            await this.#session.send('browsingContext.navigate', {
                context: this.id,
                url,
                wait,
            });
        }
        async reload(options = {}) {
            await this.#session.send('browsingContext.reload', {
                context: this.id,
                ...options,
            });
        }
        async setCacheBehavior(cacheBehavior) {
            // @ts-expect-error not in BiDi types yet.
            await this.#session.send('network.setCacheBehavior', {
                contexts: [this.id],
                cacheBehavior,
            });
        }
        async print(options = {}) {
            const { result: { data }, } = await this.#session.send('browsingContext.print', {
                context: this.id,
                ...options,
            });
            return data;
        }
        async handleUserPrompt(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                context: this.id,
                ...options,
            });
        }
        async setViewport(options = {}) {
            await this.#session.send('browsingContext.setViewport', {
                context: this.id,
                ...options,
            });
        }
        async performActions(actions) {
            await this.#session.send('input.performActions', {
                context: this.id,
                actions,
            });
        }
        async releaseActions() {
            await this.#session.send('input.releaseActions', {
                context: this.id,
            });
        }
        createWindowRealm(sandbox) {
            return this.#createWindowRealm(sandbox);
        }
        async addPreloadScript(functionDeclaration, options = {}) {
            return await this.userContext.browser.addPreloadScript(functionDeclaration, {
                ...options,
                contexts: [this],
            });
        }
        async addIntercept(options) {
            const { result: { intercept }, } = await this.userContext.browser.session.send('network.addIntercept', {
                ...options,
                contexts: [this.id],
            });
            return intercept;
        }
        async removePreloadScript(script) {
            await this.userContext.browser.removePreloadScript(script);
        }
        async getCookies(options = {}) {
            const { result: { cookies }, } = await this.#session.send('storage.getCookies', {
                ...options,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
            return cookies;
        }
        async setCookie(cookie) {
            await this.#session.send('storage.setCookie', {
                cookie,
                partition: {
                    type: 'context',
                    context: this.id,
                },
            });
        }
        async setFiles(element, files) {
            await this.#session.send('input.setFiles', {
                context: this.id,
                element,
                files,
            });
        }
        async subscribe(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        async addInterception(events) {
            await this.#session.subscribe(events, [this.id]);
        }
        [(_dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _activate_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _captureScreenshot_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _close_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _traverseHistory_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _navigate_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _reload_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCacheBehavior_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _print_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _handleUserPrompt_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setViewport_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _performActions_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _releaseActions_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _createWindowRealm_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addPreloadScript_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addIntercept_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _removePreloadScript_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _getCookies_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setCookie_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _setFiles_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _subscribe_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _addInterception_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(context => {
                // SAFETY: Disposal implies this exists.
                return context.#reason;
            })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#reason ??=
                'Browsing context already closed, probably because the user context closed.';
            this.emit('closed', { reason: this.#reason });
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        async deleteCookie(...cookieFilters) {
            await Promise.all(cookieFilters.map(async (filter) => {
                await this.#session.send('storage.deleteCookies', {
                    filter: filter,
                    partition: {
                        type: 'context',
                        context: this.id,
                    },
                });
            }));
        }
        async locateNodes(locator, startNodes) {
            // TODO: add other locateNodes options if needed.
            const result = await this.#session.send('browsingContext.locateNodes', {
                context: this.id,
                locator,
                startNodes: startNodes.length ? startNodes : undefined,
            });
            return result.result.nodes;
        }
    };
})();

//# sourceMappingURL=BrowsingContext.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};



/**
 * @internal
 */
let Navigation = (() => {
    var _a;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    return class Navigation extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(context) {
            const navigation = new Navigation(context);
            navigation.#initialize();
            return navigation;
        }
        #request = __runInitializers(this, _instanceExtraInitializers);
        #navigation;
        #browsingContext;
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        #id;
        constructor(context) {
            super();
            this.#browsingContext = context;
        }
        #initialize() {
            const browsingContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#browsingContext));
            browsingContextEmitter.once('closed', () => {
                this.emit('failed', {
                    url: this.#browsingContext.url,
                    timestamp: new Date(),
                });
                this.dispose();
            });
            browsingContextEmitter.on('request', ({ request }) => {
                if (request.navigation === undefined ||
                    // If a request with a navigation ID comes in, then the navigation ID is
                    // for this navigation.
                    !this.#matches(request.navigation)) {
                    return;
                }
                this.#request = request;
                this.emit('request', request);
                const requestEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#request));
                requestEmitter.on('redirect', request => {
                    this.#request = request;
                });
            });
            const sessionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#session));
            sessionEmitter.on('browsingContext.navigationStarted', info => {
                if (info.context !== this.#browsingContext.id ||
                    this.#navigation !== undefined) {
                    return;
                }
                this.#navigation = Navigation.from(this.#browsingContext);
            });
            for (const eventName of [
                'browsingContext.domContentLoaded',
                'browsingContext.load',
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        info.navigation === null ||
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.dispose();
                });
            }
            for (const [eventName, event] of [
                ['browsingContext.fragmentNavigated', 'fragment'],
                ['browsingContext.navigationFailed', 'failed'],
                ['browsingContext.navigationAborted', 'aborted'],
            ]) {
                sessionEmitter.on(eventName, info => {
                    if (info.context !== this.#browsingContext.id ||
                        // Note we don't check if `navigation` is null since `null` means the
                        // fragment navigated.
                        !this.#matches(info.navigation)) {
                        return;
                    }
                    this.emit(event, {
                        url: info.url,
                        timestamp: new Date(info.timestamp),
                    });
                    this.dispose();
                });
            }
        }
        #matches(navigation) {
            if (this.#navigation !== undefined && !this.#navigation.disposed) {
                return false;
            }
            if (this.#id === undefined) {
                this.#id = navigation;
                return true;
            }
            return this.#id === navigation;
        }
        get #session() {
            return this.#browsingContext.userContext.browser.session;
        }
        get disposed() {
            return this.#disposables.disposed;
        }
        get request() {
            return this.#request;
        }
        get navigation() {
            return this.#navigation;
        }
        dispose() {
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        [(_dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
    };
})();

//# sourceMappingURL=Navigation.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Request: () => (/* binding */ Request)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};



/**
 * @internal
 */
let Request = (() => {
    var _a;
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    return class Request extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browsingContext, event) {
            const request = new Request(browsingContext, event);
            request.#initialize();
            return request;
        }
        #error = __runInitializers(this, _instanceExtraInitializers);
        #redirect;
        #response;
        #browsingContext;
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        #event;
        constructor(browsingContext, event) {
            super();
            this.#browsingContext = browsingContext;
            this.#event = event;
        }
        #initialize() {
            const browsingContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#browsingContext));
            browsingContextEmitter.once('closed', ({ reason }) => {
                this.#error = reason;
                this.emit('error', this.#error);
                this.dispose();
            });
            const sessionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#session));
            sessionEmitter.on('network.beforeRequestSent', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    event.redirectCount !== this.#event.redirectCount + 1) {
                    return;
                }
                this.#redirect = Request.from(this.#browsingContext, event);
                this.emit('redirect', this.#redirect);
                this.dispose();
            });
            sessionEmitter.on('network.authRequired', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    // Don't try to authenticate for events that are not blocked
                    !event.isBlocked) {
                    return;
                }
                this.emit('authenticate', undefined);
            });
            sessionEmitter.on('network.fetchError', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    this.#event.redirectCount !== event.redirectCount) {
                    return;
                }
                this.#error = event.errorText;
                this.emit('error', this.#error);
                this.dispose();
            });
            sessionEmitter.on('network.responseCompleted', event => {
                if (event.context !== this.#browsingContext.id ||
                    event.request.request !== this.id ||
                    this.#event.redirectCount !== event.redirectCount) {
                    return;
                }
                this.#response = event.response;
                this.emit('success', this.#response);
                // In case this is a redirect.
                if (this.#response.status >= 300 && this.#response.status < 400) {
                    return;
                }
                this.dispose();
            });
        }
        get #session() {
            return this.#browsingContext.userContext.browser.session;
        }
        get disposed() {
            return this.#disposables.disposed;
        }
        get error() {
            return this.#error;
        }
        get headers() {
            return this.#event.request.headers;
        }
        get id() {
            return this.#event.request.request;
        }
        get initiator() {
            return this.#event.initiator;
        }
        get method() {
            return this.#event.request.method;
        }
        get navigation() {
            return this.#event.navigation ?? undefined;
        }
        get redirect() {
            return this.#redirect;
        }
        get lastRedirect() {
            let redirect = this.#redirect;
            while (redirect) {
                if (redirect && !redirect.#redirect) {
                    return redirect;
                }
                redirect = redirect.#redirect;
            }
            return redirect;
        }
        get response() {
            return this.#response;
        }
        get url() {
            return this.#event.request.url;
        }
        get isBlocked() {
            return this.#event.isBlocked;
        }
        get resourceType() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:resourceType'] ?? undefined;
        }
        get postData() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:postData'] ?? undefined;
        }
        get hasPostData() {
            // @ts-expect-error non-standard attribute.
            return this.#event.request['goog:hasPostData'] ?? false;
        }
        async continueRequest({ url, method, headers, cookies, body, }) {
            await this.#session.send('network.continueRequest', {
                request: this.id,
                url,
                method,
                headers,
                body,
                cookies,
            });
        }
        async failRequest() {
            await this.#session.send('network.failRequest', {
                request: this.id,
            });
        }
        async provideResponse({ statusCode, reasonPhrase, headers, body, }) {
            await this.#session.send('network.provideResponse', {
                request: this.id,
                statusCode,
                reasonPhrase,
                headers,
                body,
            });
        }
        async continueWithAuth(parameters) {
            if (parameters.action === 'provideCredentials') {
                await this.#session.send('network.continueWithAuth', {
                    request: this.id,
                    action: parameters.action,
                    credentials: parameters.credentials,
                });
            }
            else {
                await this.#session.send('network.continueWithAuth', {
                    request: this.id,
                    action: parameters.action,
                });
            }
        }
        dispose() {
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        [(_dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
    };
})();

//# sourceMappingURL=Request.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserPrompt.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserPrompt.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPrompt: () => (/* binding */ UserPrompt)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};



/**
 * @internal
 */
let UserPrompt = (() => {
    let _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _handle_decorators;
    return class UserPrompt extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: obj => "handle" in obj, get: obj => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browsingContext, info) {
            const userPrompt = new UserPrompt(browsingContext, info);
            userPrompt.#initialize();
            return userPrompt;
        }
        #reason = __runInitializers(this, _instanceExtraInitializers);
        #result;
        #disposables = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack();
        browsingContext;
        info;
        constructor(context, info) {
            super();
            this.browsingContext = context;
            this.info = info;
        }
        #initialize() {
            const browserContextEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.browsingContext));
            browserContextEmitter.once('closed', ({ reason }) => {
                this.dispose(`User prompt already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.#session));
            sessionEmitter.on('browsingContext.userPromptClosed', parameters => {
                if (parameters.context !== this.browsingContext.id) {
                    return;
                }
                this.#result = parameters;
                this.emit('handled', parameters);
                this.dispose('User prompt already handled.');
            });
        }
        get #session() {
            return this.browsingContext.userContext.browser.session;
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get handled() {
            if (this.info.handler === "accept" /* Bidi.Session.UserPromptHandlerType.Accept */ ||
                this.info.handler === "dismiss" /* Bidi.Session.UserPromptHandlerType.Dismiss */) {
                return true;
            }
            return this.#result !== undefined;
        }
        get result() {
            return this.#result;
        }
        dispose(reason) {
            this.#reason = reason;
            this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
        async handle(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                ...options,
                context: this.info.context,
            });
            // SAFETY: `handled` is triggered before the above promise resolved.
            return this.#result;
        }
        [(_dispose_decorators = [_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed], _handle_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(prompt => {
                // SAFETY: Disposal implies this exists.
                return prompt.#reason;
            })], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol)]() {
            this.#reason ??=
                'User prompt already closed, probably because the associated browsing context was destroyed.';
            this.emit('closed', { reason: this.#reason });
            this.#disposables.dispose();
            super[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
        }
    };
})();

//# sourceMappingURL=UserPrompt.js.map

/***/ })

}]);