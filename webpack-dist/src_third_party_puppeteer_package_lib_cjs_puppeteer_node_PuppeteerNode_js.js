"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_node_PuppeteerNode_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Puppeteer = void 0;
const BrowserConnector_js_1 = __webpack_require__(/*! ./BrowserConnector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/BrowserConnector.js");
const CustomQueryHandler_js_1 = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js");
/**
 * The main Puppeteer class.
 *
 * IMPORTANT: if you are using Puppeteer in a Node environment, you will get an
 * instance of {@link PuppeteerNode} when you import or require `puppeteer`.
 * That class extends `Puppeteer`, so has all the methods documented below as
 * well as all that are defined on {@link PuppeteerNode}.
 *
 * @public
 */
class Puppeteer {
    /**
     * Operations for {@link CustomQueryHandler | custom query handlers}. See
     * {@link CustomQueryHandlerRegistry}.
     *
     * @internal
     */
    static customQueryHandlers = CustomQueryHandler_js_1.customQueryHandlers;
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is only
     * allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```
     * puppeteer.registerCustomQueryHandler('text', { … });
     * const aHandle = await page.$('text/…');
     * ```
     *
     * @param name - The name that the custom query handler will be registered
     * under.
     * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
     * to register.
     *
     * @public
     */
    static registerCustomQueryHandler(name, queryHandler) {
        return this.customQueryHandlers.register(name, queryHandler);
    }
    /**
     * Unregisters a custom query handler for a given name.
     */
    static unregisterCustomQueryHandler(name) {
        return this.customQueryHandlers.unregister(name);
    }
    /**
     * Gets the names of all custom query handlers.
     */
    static customQueryHandlerNames() {
        return this.customQueryHandlers.names();
    }
    /**
     * Unregisters all custom query handlers.
     */
    static clearCustomQueryHandlers() {
        return this.customQueryHandlers.clear();
    }
    /**
     * @internal
     */
    _isPuppeteerCore;
    /**
     * @internal
     */
    _changedProduct = false;
    /**
     * @internal
     */
    constructor(settings) {
        this._isPuppeteerCore = settings.isPuppeteerCore;
        this.connect = this.connect.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
        return (0, BrowserConnector_js_1._connectToBrowser)(options);
    }
}
exports.Puppeteer = Puppeteer;
//# sourceMappingURL=Puppeteer.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/FirefoxLauncher.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/FirefoxLauncher.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FirefoxLauncher = void 0;
const fs_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const promises_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const os_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const path_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const browsers_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const util_js_1 = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const ProductLauncher_js_1 = __webpack_require__(/*! ./ProductLauncher.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/ProductLauncher.js");
const fs_js_1 = __webpack_require__(/*! ./util/fs.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/util/fs.js");
/**
 * @internal
 */
class FirefoxLauncher extends ProductLauncher_js_1.ProductLauncher {
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
                (0, assert_js_1.assert)(debuggingPort === null, 'Browser should be launched with either pipe or debugging port - not both.');
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
            userDataDir = await (0, promises_1.mkdtemp)(this.getProfilePath());
            firefoxArguments.push('--profile');
            firefoxArguments.push(userDataDir);
        }
        await (0, browsers_1.createProfile)(browsers_1.Browser.FIREFOX, {
            path: userDataDir,
            preferences: FirefoxLauncher.getPreferences(extraPrefsFirefox, options.protocol),
        });
        let firefoxExecutable;
        if (this.puppeteer._isPuppeteerCore || executablePath) {
            (0, assert_js_1.assert)(executablePath, `An \`executablePath\` must be specified for \`puppeteer-core\``);
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
                await (0, fs_js_1.rm)(userDataDir);
            }
            catch (error) {
                (0, util_js_1.debugError)(error);
                throw error;
            }
        }
        else {
            try {
                // When an existing user profile has been used remove the user
                // preferences file and restore possibly backuped preferences.
                await (0, promises_1.unlink)(path_1.default.join(userDataDir, 'user.js'));
                const prefsBackupPath = path_1.default.join(userDataDir, 'prefs.js.puppeteer');
                if (fs_1.default.existsSync(prefsBackupPath)) {
                    const prefsPath = path_1.default.join(userDataDir, 'prefs.js');
                    await (0, promises_1.unlink)(prefsPath);
                    await (0, promises_1.rename)(prefsBackupPath, prefsPath);
                }
            }
            catch (error) {
                (0, util_js_1.debugError)(error);
            }
        }
    }
    executablePath() {
        // replace 'latest' placeholder with actual downloaded revision
        if (this.puppeteer.browserRevision === 'latest') {
            const cache = new browsers_1.Cache(this.puppeteer.defaultDownloadPath);
            const installedFirefox = cache.getInstalledBrowsers().find(browser => {
                return (browser.platform === (0, browsers_1.detectBrowserPlatform)() &&
                    browser.browser === browsers_1.Browser.FIREFOX);
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
        switch (os_1.default.platform()) {
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
exports.FirefoxLauncher = FirefoxLauncher;
//# sourceMappingURL=FirefoxLauncher.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/PuppeteerNode.js":
/*!***********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/PuppeteerNode.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PuppeteerNode = void 0;
const browsers_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const Puppeteer_js_1 = __webpack_require__(/*! ../common/Puppeteer.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js");
const revisions_js_1 = __webpack_require__(/*! ../revisions.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/revisions.js");
const ChromeLauncher_js_1 = __webpack_require__(/*! ./ChromeLauncher.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/ChromeLauncher.js");
const FirefoxLauncher_js_1 = __webpack_require__(/*! ./FirefoxLauncher.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/FirefoxLauncher.js");
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
class PuppeteerNode extends Puppeteer_js_1.Puppeteer {
    #_launcher;
    #lastLaunchedProduct;
    /**
     * @internal
     */
    defaultBrowserRevision;
    /**
     * @internal
     */
    configuration = {};
    /**
     * @internal
     */
    constructor(settings) {
        const { configuration, ...commonSettings } = settings;
        super(commonSettings);
        if (configuration) {
            this.configuration = configuration;
        }
        switch (this.configuration.defaultProduct) {
            case 'firefox':
                this.defaultBrowserRevision = revisions_js_1.PUPPETEER_REVISIONS.firefox;
                break;
            default:
                this.configuration.defaultProduct = 'chrome';
                this.defaultBrowserRevision = revisions_js_1.PUPPETEER_REVISIONS.chrome;
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
        this.#lastLaunchedProduct = product;
        return this.#launcher.launch(options);
    }
    /**
     * @internal
     */
    get #launcher() {
        if (this.#_launcher &&
            this.#_launcher.product === this.lastLaunchedProduct) {
            return this.#_launcher;
        }
        switch (this.lastLaunchedProduct) {
            case 'chrome':
                this.defaultBrowserRevision = revisions_js_1.PUPPETEER_REVISIONS.chrome;
                this.#_launcher = new ChromeLauncher_js_1.ChromeLauncher(this);
                break;
            case 'firefox':
                this.defaultBrowserRevision = revisions_js_1.PUPPETEER_REVISIONS.firefox;
                this.#_launcher = new FirefoxLauncher_js_1.FirefoxLauncher(this);
                break;
            default:
                throw new Error(`Unknown product: ${this.#lastLaunchedProduct}`);
        }
        return this.#_launcher;
    }
    /**
     * The default executable path.
     */
    executablePath(channel) {
        return this.#launcher.executablePath(channel);
    }
    /**
     * @internal
     */
    get browserRevision() {
        return (this.#_launcher?.getActualBrowserRevision() ??
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
        return this.#lastLaunchedProduct ?? this.defaultProduct;
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
        return this.#launcher.product;
    }
    /**
     * @param options - Set of configurable options to set on the browser.
     *
     * @returns The default flags that Chromium will be launched with.
     */
    defaultArgs(options = {}) {
        return this.#launcher.defaultArgs(options);
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
        const platform = (0, browsers_1.detectBrowserPlatform)();
        if (!platform) {
            throw new Error('The current platform is not supported.');
        }
        const cacheDir = this.configuration.cacheDirectory;
        const installedBrowsers = await (0, browsers_1.getInstalledBrowsers)({
            cacheDir,
        });
        const product = this.configuration.defaultProduct;
        const puppeteerBrowsers = [
            {
                product: 'chrome',
                browser: browsers_1.Browser.CHROME,
                currentBuildId: '',
            },
            {
                product: 'firefox',
                browser: browsers_1.Browser.FIREFOX,
                currentBuildId: '',
            },
        ];
        // Resolve current buildIds.
        for (const item of puppeteerBrowsers) {
            item.currentBuildId = await (0, browsers_1.resolveBuildId)(item.browser, platform, (product === item.product
                ? this.configuration.browserRevision
                : null) || revisions_js_1.PUPPETEER_REVISIONS[item.product]);
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
            await (0, browsers_1.uninstall)({
                browser: installedBrowser.browser,
                platform,
                cacheDir,
                buildId: installedBrowser.buildId,
            });
        }
    }
}
exports.PuppeteerNode = PuppeteerNode;
//# sourceMappingURL=PuppeteerNode.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/revisions.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/revisions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PUPPETEER_REVISIONS = void 0;
/**
 * @internal
 */
exports.PUPPETEER_REVISIONS = Object.freeze({
    chrome: '127.0.6533.72',
    'chrome-headless-shell': '127.0.6533.72',
    firefox: 'latest',
});
//# sourceMappingURL=revisions.js.map

/***/ })

}]);