"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_bidi_bidi_js-src_third_party_puppeteer_pa-e66278"],{

/***/ "./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js ***!
  \*****************************************************************/
/***/ ((module) => {



module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/bidi.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BidiOverCdp.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BidiOverCdp.js"), exports);
__exportStar(__webpack_require__(/*! ./Browser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Browser.js"), exports);
__exportStar(__webpack_require__(/*! ./BrowserContext.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/BrowserContext.js"), exports);
__exportStar(__webpack_require__(/*! ./Connection.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Connection.js"), exports);
__exportStar(__webpack_require__(/*! ./ElementHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/ElementHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./Frame.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Frame.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPRequest.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/HTTPRequest.js"), exports);
__exportStar(__webpack_require__(/*! ./HTTPResponse.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/HTTPResponse.js"), exports);
__exportStar(__webpack_require__(/*! ./Input.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Input.js"), exports);
__exportStar(__webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/JSHandle.js"), exports);
__exportStar(__webpack_require__(/*! ./Page.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Page.js"), exports);
__exportStar(__webpack_require__(/*! ./Realm.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/bidi/Realm.js"), exports);
//# sourceMappingURL=bidi.js.map

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

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/NodeWebSocketTransport.js":
/*!********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/NodeWebSocketTransport.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeWebSocketTransport = void 0;
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const ws_1 = __importDefault(__webpack_require__(/*! ws */ "./node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js"));
const version_js_1 = __webpack_require__(/*! ../generated/version.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js");
/**
 * @internal
 */
class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new ws_1.default(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                allowSynchronousEvents: false,
                maxPayload: 256 * 1024 * 1024, // 256Mb
                headers: {
                    'User-Agent': `Puppeteer ${version_js_1.packageVersion}`,
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
exports.NodeWebSocketTransport = NodeWebSocketTransport;
//# sourceMappingURL=NodeWebSocketTransport.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/util/fs.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/node/util/fs.js ***!
  \*****************************************************************************/
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
exports.rmSync = exports.rm = void 0;
const fs_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const rmOptions = {
    force: true,
    recursive: true,
    maxRetries: 5,
};
/**
 * @internal
 */
async function rm(path) {
    await fs_1.default.promises.rm(path, rmOptions);
}
exports.rm = rm;
/**
 * @internal
 */
function rmSync(path) {
    fs_1.default.rmSync(path, rmOptions);
}
exports.rmSync = rmSync;
//# sourceMappingURL=fs.js.map

/***/ })

}]);