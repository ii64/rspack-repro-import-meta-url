"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_node_PuppeteerNode_ts"],{

/***/ "./src/third_party/puppeteer/package/src/node/FirefoxLauncher.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/FirefoxLauncher.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirefoxLauncher: () => (/* binding */ FirefoxLauncher)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductLauncher.js */ "./src/third_party/puppeteer/package/src/node/ProductLauncher.ts");
/* harmony import */ var _util_fs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fs.js */ "./src/third_party/puppeteer/package/src/node/util/fs.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */









/**
 * @internal
 */
class FirefoxLauncher extends _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ProductLauncher {
    constructor(puppeteer) {
        super(puppeteer, 'firefox');
    }
    static getPreferences(extraPrefsFirefox, protocol) {
        return {
            ...extraPrefsFirefox,
            ...(protocol === 'webDriverBiDi'
                ? {
                    // Only enable the WebDriver BiDi protocol
                    'remote.active-protocols': 1,
                }
                : {
                    // Do not close the window when the last tab gets closed
                    'browser.tabs.closeWindowWithLastTab': false,
                    // Prevent various error message on the console
                    // jest-puppeteer asserts that no error message is emitted by the console
                    'network.cookie.cookieBehavior': 0,
                    // Temporarily force disable BFCache in parent (https://bit.ly/bug-1732263)
                    'fission.bfcacheInParent': false,
                    // Only enable the CDP protocol
                    'remote.active-protocols': 2,
                }),
            // Force all web content to use a single content process. TODO: remove
            // this once Firefox supports mouse event dispatch from the main frame
            // context. Once this happens, webContentIsolationStrategy should only
            // be set for CDP. See
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1773393
            'fission.webContentIsolationStrategy': 0,
        };
    }
    /**
     * @internal
     */
    async computeLaunchArguments(options = {}) {
        const { ignoreDefaultArgs = false, args = [], executablePath, pipe = false, extraPrefsFirefox = {}, debuggingPort = null, } = options;
        const firefoxArguments = [];
        if (!ignoreDefaultArgs) {
            firefoxArguments.push(...this.defaultArgs(options));
        }
        else if (Array.isArray(ignoreDefaultArgs)) {
            firefoxArguments.push(...this.defaultArgs(options).filter(arg => {
                return !ignoreDefaultArgs.includes(arg);
            }));
        }
        else {
            firefoxArguments.push(...args);
        }
        if (!firefoxArguments.some(argument => {
            return argument.startsWith('--remote-debugging-');
        })) {
            if (pipe) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(debuggingPort === null, 'Browser should be launched with either pipe or debugging port - not both.');
            }
            firefoxArguments.push(`--remote-debugging-port=${debuggingPort || 0}`);
        }
        let userDataDir;
        let isTempUserDataDir = true;
        // Check for the profile argument, which will always be set even
        // with a custom directory specified via the userDataDir option.
        const profileArgIndex = firefoxArguments.findIndex(arg => {
            return ['-profile', '--profile'].includes(arg);
        });
        if (profileArgIndex !== -1) {
            userDataDir = firefoxArguments[profileArgIndex + 1];
            if (!userDataDir) {
                throw new Error(`Missing value for profile command line argument`);
            }
            // When using a custom Firefox profile it needs to be populated
            // with required preferences.
            isTempUserDataDir = false;
        }
        else {
            userDataDir = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.getProfilePath());
            firefoxArguments.push('--profile');
            firefoxArguments.push(userDataDir);
        }
        await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).FIREFOX, {
            path: userDataDir,
            preferences: FirefoxLauncher.getPreferences(extraPrefsFirefox, options.protocol),
        });
        let firefoxExecutable;
        if (this.puppeteer._isPuppeteerCore || executablePath) {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(executablePath, `An \`executablePath\` must be specified for \`puppeteer-core\``);
            firefoxExecutable = executablePath;
        }
        else {
            firefoxExecutable = this.executablePath();
        }
        return {
            isTempUserDataDir,
            userDataDir,
            args: firefoxArguments,
            executablePath: firefoxExecutable,
        };
    }
    /**
     * @internal
     */
    async cleanUserDataDir(userDataDir, opts) {
        if (opts.isTemp) {
            try {
                await (0,_util_fs_js__WEBPACK_IMPORTED_MODULE_4__.rm)(userDataDir);
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                throw error;
            }
        }
        else {
            try {
                // When an existing user profile has been used remove the user
                // preferences file and restore possibly backuped preferences.
                await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'user.js'));
                const prefsBackupPath = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'prefs.js.puppeteer');
                if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsBackupPath)) {
                    const prefsPath = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir, 'prefs.js');
                    await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsPath);
                    await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(prefsBackupPath, prefsPath);
                }
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
            }
        }
    }
    executablePath() {
        // replace 'latest' placeholder with actual downloaded revision
        if (this.puppeteer.browserRevision === 'latest') {
            const cache = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.puppeteer.defaultDownloadPath);
            const installedFirefox = cache.getInstalledBrowsers().find(browser => {
                return (browser.platform === Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() &&
                    browser.browser === Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).FIREFOX);
            });
            if (installedFirefox) {
                this.actualBrowserRevision = installedFirefox.buildId;
            }
        }
        return this.resolveExecutablePath();
    }
    defaultArgs(options = {}) {
        const { devtools = false, headless = !devtools, args = [], userDataDir = null, } = options;
        const firefoxArguments = ['--no-remote'];
        switch (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
            case 'darwin':
                firefoxArguments.push('--foreground');
                break;
            case 'win32':
                firefoxArguments.push('--wait-for-browser');
                break;
        }
        if (userDataDir) {
            firefoxArguments.push('--profile');
            firefoxArguments.push(userDataDir);
        }
        if (headless) {
            firefoxArguments.push('--headless');
        }
        if (devtools) {
            firefoxArguments.push('--devtools');
        }
        if (args.every(arg => {
            return arg.startsWith('-');
        })) {
            firefoxArguments.push('about:blank');
        }
        firefoxArguments.push(...args);
        return firefoxArguments;
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/node/PuppeteerNode.ts":
/*!*********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/PuppeteerNode.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerNode: () => (/* binding */ PuppeteerNode)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_Puppeteer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Puppeteer.js */ "./src/third_party/puppeteer/package/src/common/Puppeteer.ts");
/* harmony import */ var _revisions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../revisions.js */ "./src/third_party/puppeteer/package/src/revisions.ts");
/* harmony import */ var _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChromeLauncher.js */ "./src/third_party/puppeteer/package/src/node/ChromeLauncher.ts");
/* harmony import */ var _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FirefoxLauncher.js */ "./src/third_party/puppeteer/package/src/node/FirefoxLauncher.ts");
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
var _PuppeteerNode_instances, _PuppeteerNode__launcher, _PuppeteerNode_lastLaunchedProduct, _PuppeteerNode_launcher_get;





/**
 * Extends the main {@link Puppeteer} class with Node specific behaviour for
 * fetching and downloading browsers.
 *
 * If you're using Puppeteer in a Node environment, this is the class you'll get
 * when you run `require('puppeteer')` (or the equivalent ES `import`).
 *
 * @remarks
 * The most common method to use is {@link PuppeteerNode.launch | launch}, which
 * is used to launch and connect to a new browser instance.
 *
 * See {@link Puppeteer | the main Puppeteer class} for methods common to all
 * environments, such as {@link Puppeteer.connect}.
 *
 * @example
 * The following is a typical example of using Puppeteer to drive automation:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('https://www.google.com');
 *   // other actions...
 *   await browser.close();
 * })();
 * ```
 *
 * Once you have created a `page` you have access to a large API to interact
 * with the page, navigate, or find certain elements in that page.
 * The {@link Page | `page` documentation} lists all the available methods.
 *
 * @public
 */
class PuppeteerNode extends _common_Puppeteer_js__WEBPACK_IMPORTED_MODULE_1__.Puppeteer {
    /**
     * @internal
     */
    constructor(settings) {
        const { configuration, ...commonSettings } = settings;
        super(commonSettings);
        _PuppeteerNode_instances.add(this);
        _PuppeteerNode__launcher.set(this, void 0);
        _PuppeteerNode_lastLaunchedProduct.set(this, void 0);
        /**
         * @internal
         */
        Object.defineProperty(this, "defaultBrowserRevision", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * @internal
         */
        Object.defineProperty(this, "configuration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        if (configuration) {
            this.configuration = configuration;
        }
        switch (this.configuration.defaultProduct) {
            case 'firefox':
                this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.firefox;
                break;
            default:
                this.configuration.defaultProduct = 'chrome';
                this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.chrome;
                break;
        }
        this.connect = this.connect.bind(this);
        this.launch = this.launch.bind(this);
        this.executablePath = this.executablePath.bind(this);
        this.defaultArgs = this.defaultArgs.bind(this);
        this.trimCache = this.trimCache.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
        return super.connect(options);
    }
    /**
     * Launches a browser instance with given arguments and options when
     * specified.
     *
     * When using with `puppeteer-core`,
     * {@link LaunchOptions.executablePath | options.executablePath} or
     * {@link LaunchOptions.channel | options.channel} must be provided.
     *
     * @example
     * You can use {@link LaunchOptions.ignoreDefaultArgs | options.ignoreDefaultArgs}
     * to filter out `--mute-audio` from default arguments:
     *
     * ```ts
     * const browser = await puppeteer.launch({
     *   ignoreDefaultArgs: ['--mute-audio'],
     * });
     * ```
     *
     * @remarks
     * Puppeteer can also be used to control the Chrome browser, but it works best
     * with the version of Chrome for Testing downloaded by default.
     * There is no guarantee it will work with any other version. If Google Chrome
     * (rather than Chrome for Testing) is preferred, a
     * {@link https://www.google.com/chrome/browser/canary.html | Chrome Canary}
     * or
     * {@link https://www.chromium.org/getting-involved/dev-channel | Dev Channel}
     * build is suggested. See
     * {@link https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/ | this article}
     * for a description of the differences between Chromium and Chrome.
     * {@link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md | This article}
     * describes some differences for Linux users. See
     * {@link https://developer.chrome.com/blog/chrome-for-testing/ | this doc} for the description
     * of Chrome for Testing.
     *
     * @param options - Options to configure launching behavior.
     */
    launch(options = {}) {
        const { product = this.defaultProduct } = options;
        __classPrivateFieldSet(this, _PuppeteerNode_lastLaunchedProduct, product, "f");
        return __classPrivateFieldGet(this, _PuppeteerNode_instances, "a", _PuppeteerNode_launcher_get).launch(options);
    }
    /**
     * The default executable path.
     */
    executablePath(channel) {
        return __classPrivateFieldGet(this, _PuppeteerNode_instances, "a", _PuppeteerNode_launcher_get).executablePath(channel);
    }
    /**
     * @internal
     */
    get browserRevision() {
        return (__classPrivateFieldGet(this, _PuppeteerNode__launcher, "f")?.getActualBrowserRevision() ??
            this.configuration.browserRevision ??
            this.defaultBrowserRevision);
    }
    /**
     * The default download path for puppeteer. For puppeteer-core, this
     * code should never be called as it is never defined.
     *
     * @internal
     */
    get defaultDownloadPath() {
        return this.configuration.cacheDirectory;
    }
    /**
     * The name of the browser that was last launched.
     */
    get lastLaunchedProduct() {
        return __classPrivateFieldGet(this, _PuppeteerNode_lastLaunchedProduct, "f") ?? this.defaultProduct;
    }
    /**
     * The name of the browser that will be launched by default. For
     * `puppeteer`, this is influenced by your configuration. Otherwise, it's
     * `chrome`.
     */
    get defaultProduct() {
        return this.configuration.defaultProduct ?? 'chrome';
    }
    /**
     * @deprecated Do not use as this field as it does not take into account
     * multiple browsers of different types. Use
     * {@link PuppeteerNode.defaultProduct | defaultProduct} or
     * {@link PuppeteerNode.lastLaunchedProduct | lastLaunchedProduct}.
     *
     * @returns The name of the browser that is under automation.
     */
    get product() {
        return __classPrivateFieldGet(this, _PuppeteerNode_instances, "a", _PuppeteerNode_launcher_get).product;
    }
    /**
     * @param options - Set of configurable options to set on the browser.
     *
     * @returns The default flags that Chromium will be launched with.
     */
    defaultArgs(options = {}) {
        return __classPrivateFieldGet(this, _PuppeteerNode_instances, "a", _PuppeteerNode_launcher_get).defaultArgs(options);
    }
    /**
     * Removes all non-current Firefox and Chrome binaries in the cache directory
     * identified by the provided Puppeteer configuration. The current browser
     * version is determined by resolving PUPPETEER_REVISIONS from Puppeteer
     * unless `configuration.browserRevision` is provided.
     *
     * @remarks
     *
     * Note that the method does not check if any other Puppeteer versions
     * installed on the host that use the same cache directory require the
     * non-current binaries.
     *
     * @public
     */
    async trimCache() {
        const platform = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        if (!platform) {
            throw new Error('The current platform is not supported.');
        }
        const cacheDir = this.configuration.cacheDirectory;
        const installedBrowsers = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            cacheDir,
        });
        const product = this.configuration.defaultProduct;
        const puppeteerBrowsers = [
            {
                product: 'chrome',
                browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CHROME,
                currentBuildId: '',
            },
            {
                product: 'firefox',
                browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).FIREFOX,
                currentBuildId: '',
            },
        ];
        // Resolve current buildIds.
        for (const item of puppeteerBrowsers) {
            item.currentBuildId = await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item.browser, platform, (product === item.product
                ? this.configuration.browserRevision
                : null) || _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS[item.product]);
        }
        const currentBrowserBuilds = new Set(puppeteerBrowsers.map(browser => {
            return `${browser.browser}_${browser.currentBuildId}`;
        }));
        const currentBrowsers = new Set(puppeteerBrowsers.map(browser => {
            return browser.browser;
        }));
        for (const installedBrowser of installedBrowsers) {
            // Don't uninstall browsers that are not managed by Puppeteer yet.
            if (!currentBrowsers.has(installedBrowser.browser)) {
                continue;
            }
            // Keep the browser build used by the current Puppeteer installation.
            if (currentBrowserBuilds.has(`${installedBrowser.browser}_${installedBrowser.buildId}`)) {
                continue;
            }
            await Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                browser: installedBrowser.browser,
                platform,
                cacheDir,
                buildId: installedBrowser.buildId,
            });
        }
    }
}
_PuppeteerNode__launcher = new WeakMap(), _PuppeteerNode_lastLaunchedProduct = new WeakMap(), _PuppeteerNode_instances = new WeakSet(), _PuppeteerNode_launcher_get = function _PuppeteerNode_launcher_get() {
    if (__classPrivateFieldGet(this, _PuppeteerNode__launcher, "f") &&
        __classPrivateFieldGet(this, _PuppeteerNode__launcher, "f").product === this.lastLaunchedProduct) {
        return __classPrivateFieldGet(this, _PuppeteerNode__launcher, "f");
    }
    switch (this.lastLaunchedProduct) {
        case 'chrome':
            this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.chrome;
            __classPrivateFieldSet(this, _PuppeteerNode__launcher, new _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ChromeLauncher(this), "f");
            break;
        case 'firefox':
            this.defaultBrowserRevision = _revisions_js__WEBPACK_IMPORTED_MODULE_2__.PUPPETEER_REVISIONS.firefox;
            __classPrivateFieldSet(this, _PuppeteerNode__launcher, new _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_4__.FirefoxLauncher(this), "f");
            break;
        default:
            throw new Error(`Unknown product: ${__classPrivateFieldGet(this, _PuppeteerNode_lastLaunchedProduct, "f")}`);
    }
    return __classPrivateFieldGet(this, _PuppeteerNode__launcher, "f");
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/revisions.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/revisions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PUPPETEER_REVISIONS: () => (/* binding */ PUPPETEER_REVISIONS)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const PUPPETEER_REVISIONS = Object.freeze({
    chrome: '127.0.6533.72',
    'chrome-headless-shell': '127.0.6533.72',
    firefox: 'latest',
});


/***/ })

}]);