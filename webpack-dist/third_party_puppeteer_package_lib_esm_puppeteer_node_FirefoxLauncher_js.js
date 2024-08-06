"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_FirefoxLauncher_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/FirefoxLauncher.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/FirefoxLauncher.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js");
/* harmony import */ var _util_fs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fs.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/util/fs.js");
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
//# sourceMappingURL=FirefoxLauncher.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/node/util/fs.js":
/*!*************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/node/util/fs.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rm: () => (/* binding */ rm),
/* harmony export */   rmSync: () => (/* binding */ rmSync)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

const rmOptions = {
    force: true,
    recursive: true,
    maxRetries: 5,
};
/**
 * @internal
 */
async function rm(path) {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).rm(path, rmOptions);
}
/**
 * @internal
 */
function rmSync(path) {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, rmOptions);
}
//# sourceMappingURL=fs.js.map

/***/ })

}]);