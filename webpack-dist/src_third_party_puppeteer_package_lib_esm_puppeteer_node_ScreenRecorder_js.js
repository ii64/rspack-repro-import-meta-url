"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_node_ScreenRecorder_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/node/ScreenRecorder.js":
/*!************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/node/ScreenRecorder.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenRecorder: () => (/* binding */ ScreenRecorder)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./src/third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/CDPSession.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
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








const CRF_VALUE = 30;
const DEFAULT_FPS = 30;
const debugFfmpeg = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('puppeteer:ffmpeg');
/**
 * @public
 */
let ScreenRecorder = (() => {
    let _classSuper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
            const { error } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path);
            if (error) {
                throw error;
            }
            this.#process = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, 
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
            client.once(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent.Disconnected, () => {
                void this.stop().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
            });
            this.#lastFrame = (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)((0,_common_util_js__WEBPACK_IMPORTED_MODULE_3__.fromEmitterEvent)(client, 'Page.screencastFrame').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
                void client.send('Page.screencastFrameAck', {
                    sessionId: event.sessionId,
                });
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.filter)(event => {
                return event.metadata.timestamp !== undefined;
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(event => {
                return {
                    buffer: Buffer.from(event.data, 'base64'),
                    timestamp: event.metadata.timestamp,
                };
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.bufferCount)(2, 1), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.concatMap)(([{ timestamp: previousTimestamp, buffer }, { timestamp }]) => {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(Array(Math.round(DEFAULT_FPS * Math.max(timestamp - previousTimestamp, 0))).fill(buffer));
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(buffer => {
                void this.#writeFrame(buffer);
                return [buffer, performance.now()];
            }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.takeUntil)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.#controller.signal, 'abort'))), { defaultValue: [Buffer.from([]), performance.now()] });
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
            await this.#page._stopScreencast().catch(_common_util_js__WEBPACK_IMPORTED_MODULE_3__.debugError);
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
        async [(_private_writeFrame_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.guarded)()], _stop_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.guarded)()], _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.asyncDisposeSymbol)]() {
            await this.stop();
        }
    };
})();

//# sourceMappingURL=ScreenRecorder.js.map

/***/ })

}]);