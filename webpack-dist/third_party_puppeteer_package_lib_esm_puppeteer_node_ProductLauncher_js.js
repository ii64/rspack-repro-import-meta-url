"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_ProductLauncher_js"],{

/***/ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js":
/*!******************************************************************!*\
  !*** ../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js ***!
  \******************************************************************/
/***/ ((module) => {



module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeWebSocketTransport: () => (/* binding */ NodeWebSocketTransport)
/* harmony export */ });
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default())(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                allowSynchronousEvents: false,
                maxPayload: 256 * 1024 * 1024, // 256Mb
                headers: {
                    'User-Agent': `Puppeteer ${_generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion}`,
                    ...headers,
                },
            });
            ws.addEventListener('open', () => {
                return resolve(new NodeWebSocketTransport(ws));
            });
            ws.addEventListener('error', reject);
        });
    }
    #ws;
    onmessage;
    onclose;
    constructor(ws) {
        this.#ws = ws;
        this.#ws.addEventListener('message', event => {
            if (this.onmessage) {
                this.onmessage.call(null, event.data);
            }
        });
        this.#ws.addEventListener('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        this.#ws.addEventListener('error', () => { });
    }
    send(message) {
        this.#ws.send(message);
    }
    close() {
        this.#ws.close();
    }
}
//# sourceMappingURL=NodeWebSocketTransport.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js":
/*!*******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipeTransport: () => (/* binding */ PipeTransport)
/* harmony export */ });
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");




/**
 * @internal
 */
class PipeTransport {
    #pipeWrite;
    #subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack();
    #isClosed = false;
    #pendingMessage = '';
    onclose;
    onmessage;
    constructor(pipeWrite, pipeRead) {
        this.#pipeWrite = pipeWrite;
        const pipeReadEmitter = this.#subscriptions.use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeReadEmitter.on('data', (buffer) => {
            return this.#dispatch(buffer);
        });
        pipeReadEmitter.on('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        pipeReadEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        const pipeWriteEmitter = this.#subscriptions.use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeWriteEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
    }
    send(message) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!this.#isClosed, '`PipeTransport` is closed.');
        this.#pipeWrite.write(message);
        this.#pipeWrite.write('\0');
    }
    #dispatch(buffer) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!this.#isClosed, '`PipeTransport` is closed.');
        let end = buffer.indexOf('\0');
        if (end === -1) {
            this.#pendingMessage += buffer.toString();
            return;
        }
        const message = this.#pendingMessage + buffer.toString(undefined, 0, end);
        if (this.onmessage) {
            this.onmessage.call(null, message);
        }
        let start = end + 1;
        end = buffer.indexOf('\0', start);
        while (end !== -1) {
            if (this.onmessage) {
                this.onmessage.call(null, buffer.toString(undefined, start, end));
            }
            start = end + 1;
            end = buffer.indexOf('\0', start);
        }
        this.#pendingMessage = buffer.toString(undefined, start);
    }
    close() {
        this.#isClosed = true;
        this.#subscriptions.dispose();
    }
}
//# sourceMappingURL=PipeTransport.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductLauncher: () => (/* binding */ ProductLauncher)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _cdp_Browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cdp/Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Browser.js");
/* harmony import */ var _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cdp/Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Connection.js");
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NodeWebSocketTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js");
/* harmony import */ var _PipeTransport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PipeTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */











/**
 * Describes a launcher - a class that is able to create and launch a browser instance.
 *
 * @public
 */
class ProductLauncher {
    #product;
    /**
     * @internal
     */
    puppeteer;
    /**
     * @internal
     */
    actualBrowserRevision;
    /**
     * @internal
     */
    constructor(puppeteer, product) {
        this.puppeteer = puppeteer;
        this.#product = product;
    }
    get product() {
        return this.#product;
    }
    async launch(options = {}) {
        const { dumpio = false, env = process.env, handleSIGINT = true, handleSIGTERM = true, handleSIGHUP = true, ignoreHTTPSErrors = false, defaultViewport = _common_util_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_VIEWPORT, slowMo = 0, timeout = 30000, waitForInitialPage = true, protocolTimeout, protocol, } = options;
        const launchArgs = await this.computeLaunchArguments(options);
        if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(launchArgs.executablePath)) {
            throw new Error(`Browser was not found at the configured executablePath (${launchArgs.executablePath})`);
        }
        const usePipe = launchArgs.args.includes('--remote-debugging-pipe');
        const onProcessExit = async () => {
            await this.cleanUserDataDir(launchArgs.userDataDir, {
                isTemp: launchArgs.isTempUserDataDir,
            });
        };
        if (this.#product === 'firefox' &&
            protocol !== 'webDriverBiDi' &&
            this.puppeteer.configuration.logLevel === 'warn') {
            console.warn(`Chrome DevTools Protocol (CDP) support for Firefox is deprecated in Puppeteer ` +
                `and it will be eventually removed. ` +
                `Use WebDriver BiDi instead (see https://pptr.dev/webdriver-bidi#get-started).`);
        }
        const browserProcess = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            executablePath: launchArgs.executablePath,
            args: launchArgs.args,
            handleSIGHUP,
            handleSIGTERM,
            handleSIGINT,
            dumpio,
            env,
            pipe: usePipe,
            onExit: onProcessExit,
        });
        let browser;
        let cdpConnection;
        let closing = false;
        const browserCloseCallback = async () => {
            if (closing) {
                return;
            }
            closing = true;
            await this.closeBrowser(browserProcess, cdpConnection);
        };
        try {
            if (this.#product === 'firefox' && protocol === 'webDriverBiDi') {
                browser = await this.createBiDiBrowser(browserProcess, browserCloseCallback, {
                    timeout,
                    protocolTimeout,
                    slowMo,
                    defaultViewport,
                    ignoreHTTPSErrors,
                });
            }
            else {
                if (usePipe) {
                    cdpConnection = await this.createCdpPipeConnection(browserProcess, {
                        timeout,
                        protocolTimeout,
                        slowMo,
                    });
                }
                else {
                    cdpConnection = await this.createCdpSocketConnection(browserProcess, {
                        timeout,
                        protocolTimeout,
                        slowMo,
                    });
                }
                if (protocol === 'webDriverBiDi') {
                    browser = await this.createBiDiOverCdpBrowser(browserProcess, cdpConnection, browserCloseCallback, {
                        defaultViewport,
                        ignoreHTTPSErrors,
                    });
                }
                else {
                    browser = await _cdp_Browser_js__WEBPACK_IMPORTED_MODULE_2__.CdpBrowser._create(this.product, cdpConnection, [], ignoreHTTPSErrors, defaultViewport, browserProcess.nodeProcess, browserCloseCallback, options.targetFilter);
                }
            }
        }
        catch (error) {
            void browserCloseCallback();
            if (error instanceof Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError(error.message);
            }
            throw error;
        }
        if (waitForInitialPage) {
            await this.waitForPageTarget(browser, timeout);
        }
        return browser;
    }
    /**
     * Set only for Firefox, after the launcher resolves the `latest` revision to
     * the actual revision.
     * @internal
     */
    getActualBrowserRevision() {
        return this.actualBrowserRevision;
    }
    /**
     * @internal
     */
    async closeBrowser(browserProcess, cdpConnection) {
        if (cdpConnection) {
            // Attempt to close the browser gracefully
            try {
                await cdpConnection.closeBrowser();
                await browserProcess.hasClosed();
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_5__.debugError)(error);
                await browserProcess.close();
            }
        }
        else {
            // Wait for a possible graceful shutdown.
            await (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.race)((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(browserProcess.hasClosed()), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.timer)(5000).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.map)(() => {
                return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_1__.from)(browserProcess.close());
            }))));
        }
    }
    /**
     * @internal
     */
    async waitForPageTarget(browser, timeout) {
        try {
            await browser.waitForTarget(t => {
                return t.type() === 'page';
            }, { timeout });
        }
        catch (error) {
            await browser.close();
            throw error;
        }
    }
    /**
     * @internal
     */
    async createCdpSocketConnection(browserProcess, opts) {
        const browserWSEndpoint = await browserProcess.waitForLineOutput(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), opts.timeout);
        const transport = await _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__.NodeWebSocketTransport.create(browserWSEndpoint);
        return new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__.Connection(browserWSEndpoint, transport, opts.slowMo, opts.protocolTimeout);
    }
    /**
     * @internal
     */
    async createCdpPipeConnection(browserProcess, opts) {
        // stdio was assigned during start(), and the 'pipe' option there adds the
        // 4th and 5th items to stdio array
        const { 3: pipeWrite, 4: pipeRead } = browserProcess.nodeProcess.stdio;
        const transport = new _PipeTransport_js__WEBPACK_IMPORTED_MODULE_7__.PipeTransport(pipeWrite, pipeRead);
        return new _cdp_Connection_js__WEBPACK_IMPORTED_MODULE_3__.Connection('', transport, opts.slowMo, opts.protocolTimeout);
    }
    /**
     * @internal
     */
    async createBiDiOverCdpBrowser(browserProcess, connection, closeCallback, opts) {
        const BiDi = await import(/* webpackIgnore: true */ '../bidi/bidi.js');
        const bidiConnection = await BiDi.connectBidiOverCdp(connection, {
            acceptInsecureCerts: opts.ignoreHTTPSErrors ?? false,
        });
        return await BiDi.BidiBrowser.create({
            connection: bidiConnection,
            cdpConnection: connection,
            closeCallback,
            process: browserProcess.nodeProcess,
            defaultViewport: opts.defaultViewport,
            ignoreHTTPSErrors: opts.ignoreHTTPSErrors,
        });
    }
    /**
     * @internal
     */
    async createBiDiBrowser(browserProcess, closeCallback, opts) {
        const browserWSEndpoint = (await browserProcess.waitForLineOutput(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), opts.timeout)) + '/session';
        const transport = await _NodeWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_6__.NodeWebSocketTransport.create(browserWSEndpoint);
        const BiDi = await import(/* webpackIgnore: true */ '../bidi/bidi.js');
        const bidiConnection = new BiDi.BidiConnection(browserWSEndpoint, transport, opts.slowMo, opts.protocolTimeout);
        return await BiDi.BidiBrowser.create({
            connection: bidiConnection,
            closeCallback,
            process: browserProcess.nodeProcess,
            defaultViewport: opts.defaultViewport,
            ignoreHTTPSErrors: opts.ignoreHTTPSErrors,
        });
    }
    /**
     * @internal
     */
    getProfilePath() {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.puppeteer.configuration.temporaryDirectory ?? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), `puppeteer_dev_${this.product}_profile-`);
    }
    /**
     * @internal
     */
    resolveExecutablePath(headless) {
        let executablePath = this.puppeteer.configuration.executablePath;
        if (executablePath) {
            if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(executablePath)) {
                throw new Error(`Tried to find the browser at the configured path (${executablePath}), but no executable was found.`);
            }
            return executablePath;
        }
        function productToBrowser(product, headless) {
            switch (product) {
                case 'chrome':
                    if (headless === 'shell') {
                        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CHROMEHEADLESSSHELL;
                    }
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CHROME;
                case 'firefox':
                    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).FIREFOX;
            }
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CHROME;
        }
        executablePath = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            cacheDir: this.puppeteer.defaultDownloadPath,
            browser: productToBrowser(this.product, headless),
            buildId: this.puppeteer.browserRevision,
        });
        if (!Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(executablePath)) {
            if (this.puppeteer.configuration.browserRevision) {
                throw new Error(`Tried to find the browser at the configured path (${executablePath}) for revision ${this.puppeteer.browserRevision}, but no executable was found.`);
            }
            switch (this.product) {
                case 'chrome':
                    throw new Error(`Could not find Chrome (ver. ${this.puppeteer.browserRevision}). This can occur if either\n` +
                        ' 1. you did not perform an installation before running the script (e.g. `npx puppeteer browsers install chrome`) or\n' +
                        ` 2. your cache path is incorrectly configured (which is: ${this.puppeteer.configuration.cacheDirectory}).\n` +
                        'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
                case 'firefox':
                    throw new Error(`Could not find Firefox (rev. ${this.puppeteer.browserRevision}). This can occur if either\n` +
                        ' 1. you did not perform an installation for Firefox before running the script (e.g. `npx puppeteer browsers install firefox`) or\n' +
                        ` 2. your cache path is incorrectly configured (which is: ${this.puppeteer.configuration.cacheDirectory}).\n` +
                        'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
            }
        }
        return executablePath;
    }
}
//# sourceMappingURL=ProductLauncher.js.map

/***/ })

}]);