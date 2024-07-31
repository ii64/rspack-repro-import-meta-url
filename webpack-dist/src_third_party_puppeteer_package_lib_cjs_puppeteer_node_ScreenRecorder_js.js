"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_node_ScreenRecorder_js"],{

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/ScreenRecorder.js":
/*!************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/ScreenRecorder.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenRecorder = void 0;
const child_process_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const stream_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const debug_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const rxjs_js_1 = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./src/third_party/puppeteer/package/lib/cjs/third_party/rxjs/rxjs.js");
const CDPSession_js_1 = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/api/CDPSession.js");
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const decorators_js_1 = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/decorators.js");
const disposable_js_1 = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/disposable.js");
const CRF_VALUE = 30;
const DEFAULT_FPS = 30;
const debugFfmpeg = (0, debug_1.default)('puppeteer:ffmpeg');
/**
 * @public
 */
let ScreenRecorder = (() => {
    let _classSuper = stream_1.PassThrough;
    let _instanceExtraInitializers = [];
    let _private_writeFrame_decorators;
    let _private_writeFrame_descriptor;
    let _stop_decorators;
    return class ScreenRecorder extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, _private_writeFrame_descriptor = { value: __setFunctionName(async function (buffer) {
                    const error = await new Promise(resolve => {
                        this.#process.stdin.write(buffer, resolve);
                    });
                    if (error) {
                        console.log(`ffmpeg failed to write: ${error.message}.`);
                    }
                }, "#writeFrame") }, _private_writeFrame_decorators, { kind: "method", name: "#writeFrame", static: false, private: true, access: { has: obj => #writeFrame in obj, get: obj => obj.#writeFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _stop_decorators, { kind: "method", name: "stop", static: false, private: false, access: { has: obj => "stop" in obj, get: obj => obj.stop }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #page = __runInitializers(this, _instanceExtraInitializers);
        #process;
        #controller = new AbortController();
        #lastFrame;
        /**
         * @internal
         */
        constructor(page, width, height, { speed, scale, crop, format, path } = {}) {
            super({ allowHalfOpen: false });
            path ??= 'ffmpeg';
            // Tests if `ffmpeg` exists.
            const { error } = (0, child_process_1.spawnSync)(path);
            if (error) {
                throw error;
            }
            this.#process = (0, child_process_1.spawn)(path, 
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
                this.#getFormatArgs(format ?? 'webm'),
                // Disable bitrate.
                ['-b:v', '0'],
                // Filters to ensure the images are piped correctly.
                [
                    '-vf',
                    `${speed ? `setpts=${1 / speed}*PTS,` : ''}crop='min(${width},iw):min(${height},ih):0:0',pad=${width}:${height}:0:0${crop ? `,crop=${crop.width}:${crop.height}:${crop.x}:${crop.y}` : ''}${scale ? `,scale=iw*${scale}:-1` : ''}`,
                ],
                'pipe:1',
            ].flat(), { stdio: ['pipe', 'pipe', 'pipe'] });
            this.#process.stdout.pipe(this);
            this.#process.stderr.on('data', (data) => {
                debugFfmpeg(data.toString('utf8'));
            });
            this.#page = page;
            const { client } = this.#page.mainFrame();
            client.once(CDPSession_js_1.CDPSessionEvent.Disconnected, () => {
                void this.stop().catch(util_js_1.debugError);
            });
            this.#lastFrame = (0, rxjs_js_1.lastValueFrom)((0, util_js_1.fromEmitterEvent)(client, 'Page.screencastFrame').pipe((0, rxjs_js_1.tap)(event => {
                void client.send('Page.screencastFrameAck', {
                    sessionId: event.sessionId,
                });
            }), (0, rxjs_js_1.filter)(event => {
                return event.metadata.timestamp !== undefined;
            }), (0, rxjs_js_1.map)(event => {
                return {
                    buffer: Buffer.from(event.data, 'base64'),
                    timestamp: event.metadata.timestamp,
                };
            }), (0, rxjs_js_1.bufferCount)(2, 1), (0, rxjs_js_1.concatMap)(([{ timestamp: previousTimestamp, buffer }, { timestamp }]) => {
                return (0, rxjs_js_1.from)(Array(Math.round(DEFAULT_FPS * Math.max(timestamp - previousTimestamp, 0))).fill(buffer));
            }), (0, rxjs_js_1.map)(buffer => {
                void this.#writeFrame(buffer);
                return [buffer, performance.now()];
            }), (0, rxjs_js_1.takeUntil)((0, rxjs_js_1.fromEvent)(this.#controller.signal, 'abort'))), { defaultValue: [Buffer.from([]), performance.now()] });
        }
        #getFormatArgs(format) {
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
        }
        get #writeFrame() { return _private_writeFrame_descriptor.value; }
        /**
         * Stops the recorder.
         *
         * @public
         */
        async stop() {
            if (this.#controller.signal.aborted) {
                return;
            }
            // Stopping the screencast will flush the frames.
            await this.#page._stopScreencast().catch(util_js_1.debugError);
            this.#controller.abort();
            // Repeat the last frame for the remaining frames.
            const [buffer, timestamp] = await this.#lastFrame;
            await Promise.all(Array(Math.max(1, Math.round((DEFAULT_FPS * (performance.now() - timestamp)) / 1000)))
                .fill(buffer)
                .map(this.#writeFrame.bind(this)));
            // Close stdin to notify FFmpeg we are done.
            this.#process.stdin.end();
            await new Promise(resolve => {
                this.#process.once('close', resolve);
            });
        }
        /**
         * @internal
         */
        async [(_private_writeFrame_decorators = [(0, decorators_js_1.guarded)()], _stop_decorators = [(0, decorators_js_1.guarded)()], disposable_js_1.asyncDisposeSymbol)]() {
            await this.stop();
        }
    };
})();
exports.ScreenRecorder = ScreenRecorder;
//# sourceMappingURL=ScreenRecorder.js.map

/***/ })

}]);