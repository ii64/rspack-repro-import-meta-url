"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_node_ScreenRecorder_ts"],{

/***/ "./src/third_party/puppeteer/package/src/node/ScreenRecorder.ts":
/*!**********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/ScreenRecorder.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenRecorder: () => (/* binding */ ScreenRecorder)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/src/api/CDPSession.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/src/util/disposable.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
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
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
var __classPrivateFieldIn = (undefined && undefined.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};








const CRF_VALUE = 30;
const DEFAULT_FPS = 30;
const debugFfmpeg = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('puppeteer:ffmpeg');
/**
 * @public
 */
let ScreenRecorder = (() => {
    var _ScreenRecorder_instances, _a, _ScreenRecorder_page, _ScreenRecorder_process, _ScreenRecorder_controller, _ScreenRecorder_lastFrame, _ScreenRecorder_getFormatArgs, _ScreenRecorder_writeFrame_get;
    let _classSuper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    let _instanceExtraInitializers = [];
    let _private_writeFrame_decorators;
    let _private_writeFrame_descriptor;
    let _stop_decorators;
    return _a = class ScreenRecorder extends _classSuper {
            /**
             * @internal
             */
            constructor(page, width, height, { speed, scale, crop, format, path } = {}) {
                super({ allowHalfOpen: false });
                _ScreenRecorder_instances.add(this);
                _ScreenRecorder_page.set(this, __runInitializers(this, _instanceExtraInitializers));
                _ScreenRecorder_process.set(this, void 0);
                _ScreenRecorder_controller.set(this, new AbortController());
                _ScreenRecorder_lastFrame.set(this, void 0);
                path ?? (path = 'ffmpeg');
                // Tests if `ffmpeg` exists.
                const { error } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path);
                if (error) {
                    throw error;
                }
                __classPrivateFieldSet(this, _ScreenRecorder_process, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, 
                // See https://trac.ffmpeg.org/wiki/Encode/VP9 for more information on flags.
                [
                    ['-loglevel', 'error'],
                    // Reduces general buffering.
                    ['-avioflags', 'direct'],
                    // Reduces initial buffering while analyzing input fps and other stats.
                    [
                        '-fpsprobesize',
                        '0',
                        '-probesize',
                        '32',
                        '-analyzeduration',
                        '0',
                        '-fflags',
                        'nobuffer',
                    ],
                    // Forces input to be read from standard input, and forces png input
                    // image format.
                    ['-f', 'image2pipe', '-c:v', 'png', '-i', 'pipe:0'],
                    // Overwrite output and no audio.
                    ['-y', '-an'],
                    // This drastically reduces stalling when cpu is overbooked. By default
                    // VP9 tries to use all available threads?
                    ['-threads', '1'],
                    // Specifies the frame rate we are giving ffmpeg.
                    ['-framerate', `${DEFAULT_FPS}`],
                    // Specifies the encoding and format we are using.
                    __classPrivateFieldGet(this, _ScreenRecorder_instances, "m", _ScreenRecorder_getFormatArgs).call(this, format ?? 'webm'),
                    // Disable bitrate.
                    ['-b:v', '0'],
                    // Filters to ensure the images are piped correctly.
                    [
                        '-vf',
                        `${speed ? `setpts=${1 / speed}*PTS,` : ''}crop='min(${width},iw):min(${height},ih):0:0',pad=${width}:${height}:0:0${crop ? `,crop=${crop.width}:${crop.height}:${crop.x}:${crop.y}` : ''}${scale ? `,scale=iw*${scale}:-1` : ''}`,
                    ],
                    'pipe:1',
                ].flat(), { stdio: ['pipe', 'pipe', 'pipe'] }), "f");
                __classPrivateFieldGet(this, _ScreenRecorder_process, "f").stdout.pipe(this);
                __classPrivateFieldGet(this, _ScreenRecorder_process, "f").stderr.on('data', (data) => {
                    debugFfmpeg(data.toString('utf8'));
                });
                __classPrivateFieldSet(this, _ScreenRecorder_page, page, "f");
                const { client } = __classPrivateFieldGet(this, _ScreenRecorder_page, "f").mainFrame();
                client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_1__.CDPSessionEvent.Disconnected, () => {
                    void this.stop().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
                });
                __classPrivateFieldSet(this, _ScreenRecorder_lastFrame, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,_common_util_js__WEBPACK_IMPORTED_MODULE_2__.fromEmitterEvent)(client, 'Page.screencastFrame').pipe(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event => {
                    void client.send('Page.screencastFrameAck', {
                        sessionId: event.sessionId,
                    });
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event => {
                    return event.metadata.timestamp !== undefined;
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(event => {
                    return {
                        buffer: Buffer.from(event.data, 'base64'),
                        timestamp: event.metadata.timestamp,
                    };
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(2, 1), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(([{ timestamp: previousTimestamp, buffer }, { timestamp }]) => {
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Array(Math.round(DEFAULT_FPS * Math.max(timestamp - previousTimestamp, 0))).fill(buffer));
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(buffer => {
                    void __classPrivateFieldGet(this, _ScreenRecorder_instances, "a", _ScreenRecorder_writeFrame_get).call(this, buffer);
                    return [buffer, performance.now()];
                }), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/rxjs/rxjs.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(__classPrivateFieldGet(this, _ScreenRecorder_controller, "f").signal, 'abort'))), { defaultValue: [Buffer.from([]), performance.now()] }), "f");
            }
            /**
             * Stops the recorder.
             *
             * @public
             */
            async stop() {
                if (__classPrivateFieldGet(this, _ScreenRecorder_controller, "f").signal.aborted) {
                    return;
                }
                // Stopping the screencast will flush the frames.
                await __classPrivateFieldGet(this, _ScreenRecorder_page, "f")._stopScreencast().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_2__.debugError);
                __classPrivateFieldGet(this, _ScreenRecorder_controller, "f").abort();
                // Repeat the last frame for the remaining frames.
                const [buffer, timestamp] = await __classPrivateFieldGet(this, _ScreenRecorder_lastFrame, "f");
                await Promise.all(Array(Math.max(1, Math.round((DEFAULT_FPS * (performance.now() - timestamp)) / 1000)))
                    .fill(buffer)
                    .map(__classPrivateFieldGet(this, _ScreenRecorder_instances, "a", _ScreenRecorder_writeFrame_get).bind(this)));
                // Close stdin to notify FFmpeg we are done.
                __classPrivateFieldGet(this, _ScreenRecorder_process, "f").stdin.end();
                await new Promise(resolve => {
                    __classPrivateFieldGet(this, _ScreenRecorder_process, "f").once('close', resolve);
                });
            }
            /**
             * @internal
             */
            async [(_ScreenRecorder_page = new WeakMap(), _ScreenRecorder_process = new WeakMap(), _ScreenRecorder_controller = new WeakMap(), _ScreenRecorder_lastFrame = new WeakMap(), _ScreenRecorder_instances = new WeakSet(), _ScreenRecorder_getFormatArgs = function _ScreenRecorder_getFormatArgs(format) {
                switch (format) {
                    case 'webm':
                        return [
                            // Sets the codec to use.
                            ['-c:v', 'vp9'],
                            // Sets the format
                            ['-f', 'webm'],
                            // Sets the quality. Lower the better.
                            ['-crf', `${CRF_VALUE}`],
                            // Sets the quality and how efficient the compression will be.
                            ['-deadline', 'realtime', '-cpu-used', '8'],
                        ].flat();
                    case 'gif':
                        return [
                            // Sets the frame rate and uses a custom palette generated from the
                            // input.
                            [
                                '-vf',
                                'fps=5,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse',
                            ],
                            // Sets the format
                            ['-f', 'gif'],
                        ].flat();
                }
            }, _ScreenRecorder_writeFrame_get = function _ScreenRecorder_writeFrame_get() { return _private_writeFrame_descriptor.value; }, _private_writeFrame_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.guarded)()], _stop_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_3__.guarded)()], _util_disposable_js__WEBPACK_IMPORTED_MODULE_4__.asyncDisposeSymbol)]() {
                await this.stop();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(_a, _private_writeFrame_descriptor = { value: __setFunctionName(async function (buffer) {
                    const error = await new Promise(resolve => {
                        __classPrivateFieldGet(this, _ScreenRecorder_process, "f").stdin.write(buffer, resolve);
                    });
                    if (error) {
                        console.log(`ffmpeg failed to write: ${error.message}.`);
                    }
                }, "#writeFrame") }, _private_writeFrame_decorators, { kind: "method", name: "#writeFrame", static: false, private: true, access: { has: obj => __classPrivateFieldIn(_ScreenRecorder_instances, obj), get: obj => __classPrivateFieldGet(obj, _ScreenRecorder_instances, "a", _ScreenRecorder_writeFrame_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _stop_decorators, { kind: "method", name: "stop", static: false, private: false, access: { has: obj => "stop" in obj, get: obj => obj.stop }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ })

}]);