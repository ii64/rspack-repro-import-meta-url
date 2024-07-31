"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_bidi_Page_ts"],{

/***/ "./src/third_party/puppeteer/package/src/bidi/Page.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/bidi/Page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiPage: () => (/* binding */ BidiPage)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Page.js */ "./src/third_party/puppeteer/package/src/api/Page.ts");
/* harmony import */ var _cdp_Coverage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Coverage.js */ "./src/third_party/puppeteer/package/src/cdp/Coverage.ts");
/* harmony import */ var _cdp_EmulationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdp/EmulationManager.js */ "./src/third_party/puppeteer/package/src/cdp/EmulationManager.ts");
/* harmony import */ var _cdp_Tracing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cdp/Tracing.js */ "./src/third_party/puppeteer/package/src/cdp/Tracing.ts");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./src/third_party/puppeteer/package/src/util/ErrorLike.ts");
/* harmony import */ var _Frame_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/src/bidi/Frame.ts");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/src/bidi/Input.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/bidi/util.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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















/**
 * Implements Page using WebDriver BiDi.
 *
 * @internal
 */
let BidiPage = (() => {
    var _BidiPage_instances, _a, _BidiPage_browserContext, _BidiPage_frame, _BidiPage_viewport, _BidiPage_workers, _BidiPage_cdpEmulationManager, _BidiPage_emulatedNetworkConditions, _BidiPage_initialize, _BidiPage_userAgentInterception, _BidiPage_userAgentPreloadScript, _BidiPage_userInterception, _BidiPage_extraHeadersInterception, _BidiPage_authInterception, _BidiPage_toggleInterception, _BidiPage_applyNetworkConditions, _BidiPage_go, _BidiPage_trustedEmitter_accessor_storage;
    let _classSuper = _api_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page;
    let _trustedEmitter_decorators;
    let _trustedEmitter_initializers = [];
    let _trustedEmitter_extraInitializers = [];
    return _a = class BidiPage extends _classSuper {
            static from(browserContext, browsingContext) {
                const page = new _a(browserContext, browsingContext);
                __classPrivateFieldGet(page, _BidiPage_instances, "m", _BidiPage_initialize).call(page);
                return page;
            }
            get trustedEmitter() { return __classPrivateFieldGet(this, _BidiPage_trustedEmitter_accessor_storage, "f"); }
            set trustedEmitter(value) { __classPrivateFieldSet(this, _BidiPage_trustedEmitter_accessor_storage, value, "f"); }
            _client() {
                return __classPrivateFieldGet(this, _BidiPage_frame, "f").client;
            }
            constructor(browserContext, browsingContext) {
                super();
                _BidiPage_instances.add(this);
                _BidiPage_trustedEmitter_accessor_storage.set(this, __runInitializers(this, _trustedEmitter_initializers, new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_6__.EventEmitter()));
                _BidiPage_browserContext.set(this, __runInitializers(this, _trustedEmitter_extraInitializers));
                _BidiPage_frame.set(this, void 0);
                _BidiPage_viewport.set(this, null);
                _BidiPage_workers.set(this, new Set());
                Object.defineProperty(this, "keyboard", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "mouse", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "touchscreen", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "tracing", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                Object.defineProperty(this, "coverage", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: void 0
                });
                _BidiPage_cdpEmulationManager.set(this, void 0);
                _BidiPage_emulatedNetworkConditions.set(this, void 0);
                /**
                 * @internal
                 */
                Object.defineProperty(this, "_userAgentHeaders", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: {}
                });
                _BidiPage_userAgentInterception.set(this, void 0);
                _BidiPage_userAgentPreloadScript.set(this, void 0);
                _BidiPage_userInterception.set(this, void 0);
                /**
                 * @internal
                 */
                Object.defineProperty(this, "_extraHTTPHeaders", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: {}
                });
                _BidiPage_extraHeadersInterception.set(this, void 0);
                /**
                 * @internal
                 */
                Object.defineProperty(this, "_credentials", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                _BidiPage_authInterception.set(this, void 0);
                __classPrivateFieldSet(this, _BidiPage_browserContext, browserContext, "f");
                __classPrivateFieldSet(this, _BidiPage_frame, _Frame_js__WEBPACK_IMPORTED_MODULE_11__.BidiFrame.from(this, browsingContext), "f");
                __classPrivateFieldSet(this, _BidiPage_cdpEmulationManager, new _cdp_EmulationManager_js__WEBPACK_IMPORTED_MODULE_3__.EmulationManager(__classPrivateFieldGet(this, _BidiPage_frame, "f").client), "f");
                this.tracing = new _cdp_Tracing_js__WEBPACK_IMPORTED_MODULE_4__.Tracing(__classPrivateFieldGet(this, _BidiPage_frame, "f").client);
                this.coverage = new _cdp_Coverage_js__WEBPACK_IMPORTED_MODULE_2__.Coverage(__classPrivateFieldGet(this, _BidiPage_frame, "f").client);
                this.keyboard = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiKeyboard(this);
                this.mouse = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiMouse(this);
                this.touchscreen = new _Input_js__WEBPACK_IMPORTED_MODULE_12__.BidiTouchscreen(this);
            }
            async setUserAgent(userAgent, userAgentMetadata) {
                if (!__classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().cdpSupported && userAgentMetadata) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation('Current Browser does not support `userAgentMetadata`');
                }
                else if (__classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().cdpSupported &&
                    userAgentMetadata) {
                    return await this._client().send('Network.setUserAgentOverride', {
                        userAgent: userAgent,
                        userAgentMetadata: userAgentMetadata,
                    });
                }
                const enable = userAgent !== '';
                userAgent = userAgent ?? (await __classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().userAgent());
                this._userAgentHeaders = enable
                    ? {
                        'User-Agent': userAgent,
                    }
                    : {};
                __classPrivateFieldSet(this, _BidiPage_userAgentInterception, await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_toggleInterception).call(this, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).InterceptPhase.BeforeRequestSent], __classPrivateFieldGet(this, _BidiPage_userAgentInterception, "f"), enable), "f");
                const changeUserAgent = (userAgent) => {
                    Object.defineProperty(navigator, 'userAgent', {
                        value: userAgent,
                    });
                };
                const frames = [__classPrivateFieldGet(this, _BidiPage_frame, "f")];
                for (const frame of frames) {
                    frames.push(...frame.childFrames());
                }
                if (__classPrivateFieldGet(this, _BidiPage_userAgentPreloadScript, "f")) {
                    await this.removeScriptToEvaluateOnNewDocument(__classPrivateFieldGet(this, _BidiPage_userAgentPreloadScript, "f"));
                }
                const [evaluateToken] = await Promise.all([
                    enable
                        ? this.evaluateOnNewDocument(changeUserAgent, userAgent)
                        : undefined,
                    // When we disable the UserAgent we want to
                    // evaluate the original value in all Browsing Contexts
                    frames.map(frame => {
                        return frame.evaluate(changeUserAgent, userAgent);
                    }),
                ]);
                __classPrivateFieldSet(this, _BidiPage_userAgentPreloadScript, evaluateToken?.identifier, "f");
            }
            async setBypassCSP(enabled) {
                // TODO: handle CDP-specific cases such as mprach.
                await this._client().send('Page.setBypassCSP', { enabled });
            }
            async queryObjects(prototypeHandle) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(!prototypeHandle.disposed, 'Prototype JSHandle is disposed!');
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(prototypeHandle.id, 'Prototype JSHandle must not be referencing primitive value');
                const response = await __classPrivateFieldGet(this, _BidiPage_frame, "f").client.send('Runtime.queryObjects', {
                    prototypeObjectId: prototypeHandle.id,
                });
                return __classPrivateFieldGet(this, _BidiPage_frame, "f").mainRealm().createHandle({
                    type: 'array',
                    handle: response.objects.objectId,
                });
            }
            browser() {
                return this.browserContext().browser();
            }
            browserContext() {
                return __classPrivateFieldGet(this, _BidiPage_browserContext, "f");
            }
            mainFrame() {
                return __classPrivateFieldGet(this, _BidiPage_frame, "f");
            }
            async focusedFrame() {
                const env_1 = { stack: [], error: void 0, hasError: false };
                try {
                    const handle = __addDisposableResource(env_1, (await this.mainFrame()
                        .isolatedRealm()
                        .evaluateHandle(() => {
                        let win = window;
                        while (win.document.activeElement instanceof win.HTMLIFrameElement ||
                            win.document.activeElement instanceof win.HTMLFrameElement) {
                            if (win.document.activeElement.contentWindow === null) {
                                break;
                            }
                            win = win.document.activeElement.contentWindow;
                        }
                        return win;
                    })), false);
                    const value = handle.remoteValue();
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(value.type === 'window');
                    const frame = this.frames().find(frame => {
                        return frame._id === value.value.context;
                    });
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(frame);
                    return frame;
                }
                catch (e_1) {
                    env_1.error = e_1;
                    env_1.hasError = true;
                }
                finally {
                    __disposeResources(env_1);
                }
            }
            frames() {
                const frames = [__classPrivateFieldGet(this, _BidiPage_frame, "f")];
                for (const frame of frames) {
                    frames.push(...frame.childFrames());
                }
                return frames;
            }
            isClosed() {
                return __classPrivateFieldGet(this, _BidiPage_frame, "f").detached;
            }
            async close(options) {
                const env_2 = { stack: [], error: void 0, hasError: false };
                try {
                    const _guard = __addDisposableResource(env_2, await __classPrivateFieldGet(this, _BidiPage_browserContext, "f").waitForScreenshotOperations(), false);
                    try {
                        await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.close(options?.runBeforeUnload);
                    }
                    catch {
                        return;
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
            async reload(options = {}) {
                const [response] = await Promise.all([
                    __classPrivateFieldGet(this, _BidiPage_frame, "f").waitForNavigation(options),
                    __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.reload(),
                ]).catch((0,_util_js__WEBPACK_IMPORTED_MODULE_13__.rewriteNavigationError)(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
                return response;
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
            isJavaScriptEnabled() {
                return __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").javascriptEnabled;
            }
            async setGeolocation(options) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").setGeolocation(options);
            }
            async setJavaScriptEnabled(enabled) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").setJavaScriptEnabled(enabled);
            }
            async emulateMediaType(type) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateMediaType(type);
            }
            async emulateCPUThrottling(factor) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateCPUThrottling(factor);
            }
            async emulateMediaFeatures(features) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateMediaFeatures(features);
            }
            async emulateTimezone(timezoneId) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateTimezone(timezoneId);
            }
            async emulateIdleState(overrides) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateIdleState(overrides);
            }
            async emulateVisionDeficiency(type) {
                return await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateVisionDeficiency(type);
            }
            async setViewport(viewport) {
                if (!this.browser().cdpSupported) {
                    await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.setViewport({
                        viewport: viewport?.width && viewport?.height
                            ? {
                                width: viewport.width,
                                height: viewport.height,
                            }
                            : null,
                        devicePixelRatio: viewport?.deviceScaleFactor
                            ? viewport.deviceScaleFactor
                            : null,
                    });
                    __classPrivateFieldSet(this, _BidiPage_viewport, viewport, "f");
                    return;
                }
                const needsReload = await __classPrivateFieldGet(this, _BidiPage_cdpEmulationManager, "f").emulateViewport(viewport);
                __classPrivateFieldSet(this, _BidiPage_viewport, viewport, "f");
                if (needsReload) {
                    await this.reload();
                }
            }
            viewport() {
                return __classPrivateFieldGet(this, _BidiPage_viewport, "f");
            }
            async pdf(options = {}) {
                const { timeout: ms = this._timeoutSettings.timeout(), path = undefined } = options;
                const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize, } = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.parsePDFOptions)(options, 'cm');
                const pageRanges = ranges ? ranges.split(', ') : [];
                await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.mainFrame()
                    .isolatedRealm()
                    .evaluate(() => {
                    return document.fonts.ready;
                })).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.timeout)(ms))));
                const data = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(__classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.print({
                    background,
                    margin,
                    orientation: landscape ? 'landscape' : 'portrait',
                    page: {
                        width,
                        height,
                    },
                    pageRanges,
                    scale,
                    shrinkToFit: !preferCSSPageSize,
                })).pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.timeout)(ms))));
                const buffer = Buffer.from(data, 'base64');
                await this._maybeWriteBufferToFile(path, buffer);
                return buffer;
            }
            async createPDFStream(options) {
                const buffer = await this.pdf(options);
                return new ReadableStream({
                    start(controller) {
                        controller.enqueue(buffer);
                        controller.close();
                    },
                });
            }
            async _screenshot(options) {
                const { clip, type, captureBeyondViewport, quality } = options;
                if (options.omitBackground !== undefined && options.omitBackground) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
                }
                if (options.optimizeForSpeed !== undefined && options.optimizeForSpeed) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
                }
                if (options.fromSurface !== undefined && !options.fromSurface) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
                }
                if (clip !== undefined && clip.scale !== undefined && clip.scale !== 1) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
                }
                let box;
                if (clip) {
                    if (captureBeyondViewport) {
                        box = clip;
                    }
                    else {
                        // The clip is always with respect to the document coordinates, so we
                        // need to convert this to viewport coordinates when we aren't capturing
                        // beyond the viewport.
                        const [pageLeft, pageTop] = await this.evaluate(() => {
                            if (!window.visualViewport) {
                                throw new Error('window.visualViewport is not supported.');
                            }
                            return [
                                window.visualViewport.pageLeft,
                                window.visualViewport.pageTop,
                            ];
                        });
                        box = {
                            ...clip,
                            x: clip.x - pageLeft,
                            y: clip.y - pageTop,
                        };
                    }
                }
                const data = await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.captureScreenshot({
                    origin: captureBeyondViewport ? 'document' : 'viewport',
                    format: {
                        type: `image/${type}`,
                        ...(quality !== undefined ? { quality: quality / 100 } : {}),
                    },
                    ...(box ? { clip: { type: 'box', ...box } } : {}),
                });
                return data;
            }
            async createCDPSession() {
                return await __classPrivateFieldGet(this, _BidiPage_frame, "f").createCDPSession();
            }
            async bringToFront() {
                await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.activate();
            }
            async evaluateOnNewDocument(pageFunction, ...args) {
                const expression = evaluationExpression(pageFunction, ...args);
                const script = await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.addPreloadScript(expression);
                return { identifier: script };
            }
            async removeScriptToEvaluateOnNewDocument(id) {
                await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.removePreloadScript(id);
            }
            async exposeFunction(name, pptrFunction) {
                return await this.mainFrame().exposeFunction(name, 'default' in pptrFunction ? pptrFunction.default : pptrFunction);
            }
            isDragInterceptionEnabled() {
                return false;
            }
            async setCacheEnabled(enabled) {
                if (!__classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().cdpSupported) {
                    await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.setCacheBehavior(enabled ? 'default' : 'bypass');
                    return;
                }
                // TODO: handle CDP-specific cases such as mprach.
                await this._client().send('Network.setCacheDisabled', {
                    cacheDisabled: !enabled,
                });
            }
            async cookies(...urls) {
                const normalizedUrls = (urls.length ? urls : [this.url()]).map(url => {
                    return new URL(url);
                });
                const cookies = await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.getCookies();
                return cookies
                    .map(cookie => {
                    return bidiToPuppeteerCookie(cookie);
                })
                    .filter(cookie => {
                    return normalizedUrls.some(url => {
                        return testUrlMatchCookie(cookie, url);
                    });
                });
            }
            isServiceWorkerBypassed() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            target() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            waitForFileChooser() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            workers() {
                return [...__classPrivateFieldGet(this, _BidiPage_workers, "f")];
            }
            async setRequestInterception(enable) {
                __classPrivateFieldSet(this, _BidiPage_userInterception, await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_toggleInterception).call(this, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).InterceptPhase.BeforeRequestSent], __classPrivateFieldGet(this, _BidiPage_userInterception, "f"), enable), "f");
            }
            async setExtraHTTPHeaders(headers) {
                const extraHTTPHeaders = {};
                for (const [key, value] of Object.entries(headers)) {
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.isString)(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
                    extraHTTPHeaders[key.toLowerCase()] = value;
                }
                this._extraHTTPHeaders = extraHTTPHeaders;
                __classPrivateFieldSet(this, _BidiPage_extraHeadersInterception, await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_toggleInterception).call(this, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).InterceptPhase.BeforeRequestSent], __classPrivateFieldGet(this, _BidiPage_extraHeadersInterception, "f"), Boolean(Object.keys(this._extraHTTPHeaders).length)), "f");
            }
            async authenticate(credentials) {
                __classPrivateFieldSet(this, _BidiPage_authInterception, await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_toggleInterception).call(this, [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).InterceptPhase.AuthRequired], __classPrivateFieldGet(this, _BidiPage_authInterception, "f"), Boolean(credentials)), "f");
                this._credentials = credentials;
            }
            setDragInterception() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            setBypassServiceWorker() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            async setOfflineMode(enabled) {
                if (!__classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
                if (!__classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f")) {
                    __classPrivateFieldSet(this, _BidiPage_emulatedNetworkConditions, {
                        offline: false,
                        upload: -1,
                        download: -1,
                        latency: 0,
                    }, "f");
                }
                __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").offline = enabled;
                return await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_applyNetworkConditions).call(this);
            }
            async emulateNetworkConditions(networkConditions) {
                if (!__classPrivateFieldGet(this, _BidiPage_browserContext, "f").browser().cdpSupported) {
                    throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
                }
                if (!__classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f")) {
                    __classPrivateFieldSet(this, _BidiPage_emulatedNetworkConditions, {
                        offline: false,
                        upload: -1,
                        download: -1,
                        latency: 0,
                    }, "f");
                }
                __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").upload = networkConditions
                    ? networkConditions.upload
                    : -1;
                __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").download = networkConditions
                    ? networkConditions.download
                    : -1;
                __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").latency = networkConditions
                    ? networkConditions.latency
                    : 0;
                return await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_applyNetworkConditions).call(this);
            }
            async setCookie(...cookies) {
                const pageURL = this.url();
                const pageUrlStartsWithHTTP = pageURL.startsWith('http');
                for (const cookie of cookies) {
                    let cookieUrl = cookie.url || '';
                    if (!cookieUrl && pageUrlStartsWithHTTP) {
                        cookieUrl = pageURL;
                    }
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(cookieUrl !== 'about:blank', `Blank page can not have cookie "${cookie.name}"`);
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(!String.prototype.startsWith.call(cookieUrl || '', 'data:'), `Data URL page can not have cookie "${cookie.name}"`);
                    const normalizedUrl = URL.canParse(cookieUrl)
                        ? new URL(cookieUrl)
                        : undefined;
                    const domain = cookie.domain ?? normalizedUrl?.hostname;
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(domain !== undefined, `At least one of the url and domain needs to be specified`);
                    const bidiCookie = {
                        domain: domain,
                        name: cookie.name,
                        value: {
                            type: 'string',
                            value: cookie.value,
                        },
                        ...(cookie.path !== undefined ? { path: cookie.path } : {}),
                        ...(cookie.httpOnly !== undefined ? { httpOnly: cookie.httpOnly } : {}),
                        ...(cookie.secure !== undefined ? { secure: cookie.secure } : {}),
                        ...(cookie.sameSite !== undefined
                            ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) }
                            : {}),
                        ...(cookie.expires !== undefined ? { expiry: cookie.expires } : {}),
                        // Chrome-specific properties.
                        ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, 'sameParty', 'sourceScheme', 'priority', 'url'),
                    };
                    if (cookie.partitionKey !== undefined) {
                        await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
                    }
                    else {
                        await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.setCookie(bidiCookie);
                    }
                }
            }
            async deleteCookie(...cookies) {
                await Promise.all(cookies.map(async (deleteCookieRequest) => {
                    const cookieUrl = deleteCookieRequest.url ?? this.url();
                    const normalizedUrl = URL.canParse(cookieUrl)
                        ? new URL(cookieUrl)
                        : undefined;
                    const domain = deleteCookieRequest.domain ?? normalizedUrl?.hostname;
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(domain !== undefined, `At least one of the url and domain needs to be specified`);
                    const filter = {
                        domain: domain,
                        name: deleteCookieRequest.name,
                        ...(deleteCookieRequest.path !== undefined
                            ? { path: deleteCookieRequest.path }
                            : {}),
                    };
                    await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.deleteCookie(filter);
                }));
            }
            async removeExposedFunction(name) {
                await __classPrivateFieldGet(this, _BidiPage_frame, "f").removeExposedFunction(name);
            }
            metrics() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
            async goBack(options = {}) {
                return await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_go).call(this, -1, options);
            }
            async goForward(options = {}) {
                return await __classPrivateFieldGet(this, _BidiPage_instances, "m", _BidiPage_go).call(this, 1, options);
            }
            waitForDevicePrompt() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_5__.UnsupportedOperation();
            }
        },
        _BidiPage_browserContext = new WeakMap(),
        _BidiPage_frame = new WeakMap(),
        _BidiPage_viewport = new WeakMap(),
        _BidiPage_workers = new WeakMap(),
        _BidiPage_cdpEmulationManager = new WeakMap(),
        _BidiPage_emulatedNetworkConditions = new WeakMap(),
        _BidiPage_userAgentInterception = new WeakMap(),
        _BidiPage_userAgentPreloadScript = new WeakMap(),
        _BidiPage_userInterception = new WeakMap(),
        _BidiPage_extraHeadersInterception = new WeakMap(),
        _BidiPage_authInterception = new WeakMap(),
        _BidiPage_instances = new WeakSet(),
        _BidiPage_trustedEmitter_accessor_storage = new WeakMap(),
        _BidiPage_initialize = function _BidiPage_initialize() {
            __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.on('closed', () => {
                this.trustedEmitter.emit(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.Close, undefined);
                this.trustedEmitter.removeAllListeners();
            });
            this.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.WorkerCreated, worker => {
                __classPrivateFieldGet(this, _BidiPage_workers, "f").add(worker);
            });
            this.trustedEmitter.on(_api_Page_js__WEBPACK_IMPORTED_MODULE_1__.PageEvent.WorkerDestroyed, worker => {
                __classPrivateFieldGet(this, _BidiPage_workers, "f").delete(worker);
            });
        },
        _BidiPage_toggleInterception = async function _BidiPage_toggleInterception(phases, interception, expected) {
            if (expected && !interception) {
                return await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.addIntercept({
                    phases,
                });
            }
            else if (!expected && interception) {
                await __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.userContext.browser.removeIntercept(interception);
                return;
            }
            return interception;
        },
        _BidiPage_applyNetworkConditions = async function _BidiPage_applyNetworkConditions() {
            if (!__classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f")) {
                return;
            }
            await this._client().send('Network.emulateNetworkConditions', {
                offline: __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").offline,
                latency: __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").latency,
                uploadThroughput: __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").upload,
                downloadThroughput: __classPrivateFieldGet(this, _BidiPage_emulatedNetworkConditions, "f").download,
            });
        },
        _BidiPage_go = async function _BidiPage_go(delta, options) {
            try {
                const [response] = await Promise.all([
                    this.waitForNavigation(options),
                    __classPrivateFieldGet(this, _BidiPage_frame, "f").browsingContext.traverseHistory(delta),
                ]);
                return response;
            }
            catch (error) {
                // TODO: waitForNavigation should be cancelled if an error happens.
                if ((0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_10__.isErrorLike)(error)) {
                    if (error.message.includes('no such history entry')) {
                        return null;
                    }
                }
                throw error;
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _trustedEmitter_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_9__.bubble)()];
            __esDecorate(_a, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: obj => "trustedEmitter" in obj, get: obj => obj.trustedEmitter, set: (obj, value) => { obj.trustedEmitter = value; } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();

function evaluationExpression(fun, ...args) {
    return `() => {${(0,_common_util_js__WEBPACK_IMPORTED_MODULE_7__.evaluationString)(fun, ...args)}}`;
}
/**
 * Check domains match.
 * According to cookies spec, this check should match subdomains as well, but CDP
 * implementation does not do that, so this method matches only the exact domains, not
 * what is written in the spec:
 * https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3
 */
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
    const cookieDomain = cookie.domain.toLowerCase();
    const urlHostname = normalizedUrl.hostname.toLowerCase();
    return cookieDomain === urlHostname;
}
/**
 * Check paths match.
 * Spec: https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4
 */
function testUrlMatchCookiePath(cookie, normalizedUrl) {
    const uriPath = normalizedUrl.pathname;
    const cookiePath = cookie.path;
    if (uriPath === cookiePath) {
        // The cookie-path and the request-path are identical.
        return true;
    }
    if (uriPath.startsWith(cookiePath)) {
        // The cookie-path is a prefix of the request-path.
        if (cookiePath.endsWith('/')) {
            // The last character of the cookie-path is %x2F ("/").
            return true;
        }
        if (uriPath[cookiePath.length] === '/') {
            // The first character of the request-path that is not included in the cookie-path
            // is a %x2F ("/") character.
            return true;
        }
    }
    return false;
}
/**
 * Checks the cookie matches the URL according to the spec:
 */
function testUrlMatchCookie(cookie, url) {
    const normalizedUrl = new URL(url);
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_8__.assert)(cookie !== undefined);
    if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
        return false;
    }
    return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie) {
    return {
        name: bidiCookie.name,
        // Presents binary value as base64 string.
        value: bidiCookie.value.value,
        domain: bidiCookie.domain,
        path: bidiCookie.path,
        size: bidiCookie.size,
        httpOnly: bidiCookie.httpOnly,
        secure: bidiCookie.secure,
        sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
        expires: bidiCookie.expiry ?? -1,
        session: bidiCookie.expiry === undefined || bidiCookie.expiry <= 0,
        // Extending with CDP-specific properties with `goog:` prefix.
        ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, 'sameParty', 'sourceScheme', 'partitionKey', 'partitionKeyOpaque', 'priority'),
    };
}
const CDP_SPECIFIC_PREFIX = 'goog:';
/**
 * Gets CDP-specific properties from the BiDi cookie and returns them as a new object.
 */
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== undefined) {
            result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
        }
    }
    return result;
}
/**
 * Gets CDP-specific properties from the cookie, adds CDP-specific prefixes and returns
 * them as a new object which can be used in BiDi.
 */
function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
    const result = {};
    for (const property of propertyNames) {
        if (cookieParam[property] !== undefined) {
            result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
        }
    }
    return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
    return sameSite === 'strict' ? 'Strict' : sameSite === 'lax' ? 'Lax' : 'None';
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
    return sameSite === 'Strict'
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SameSite.Strict
        : sameSite === 'Lax'
            ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SameSite.Lax
            : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chromium-bidi/lib/cjs/protocol/protocol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SameSite.None;
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


/***/ })

}]);