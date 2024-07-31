"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_node_ChromeLauncher_ts"],{

/***/ "./src/third_party/puppeteer/package/src/node/ChromeLauncher.ts":
/*!**********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/ChromeLauncher.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChromeLauncher: () => (/* binding */ ChromeLauncher),
/* harmony export */   getFeatures: () => (/* binding */ getFeatures),
/* harmony export */   removeMatchingFlags: () => (/* binding */ removeMatchingFlags)
/* harmony export */ });
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
class ChromeLauncher extends _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_3__.ProductLauncher {
    constructor(puppeteer) {
        super(puppeteer, 'chrome');
    }
    launch(options = {}) {
        if (this.puppeteer.configuration.logLevel === 'warn' &&
            process.platform === 'darwin' &&
            process.arch === 'x64') {
            const cpus = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            if (cpus[0]?.model.includes('Apple')) {
                console.warn([
                    '\x1B[1m\x1B[43m\x1B[30m',
                    'Degraded performance warning:\x1B[0m\x1B[33m',
                    'Launching Chrome on Mac Silicon (arm64) from an x64 Node installation results in',
                    'Rosetta translating the Chrome binary, even if Chrome is already arm64. This would',
                    'result in huge performance issues. To resolve this, you must run Puppeteer with',
                    'a version of Node built for arm64.',
                ].join('\n  '));
            }
        }
        return super.launch(options);
    }
    /**
     * @internal
     */
    async computeLaunchArguments(options = {}) {
        const { ignoreDefaultArgs = false, args = [], pipe = false, debuggingPort, channel, executablePath, } = options;
        const chromeArguments = [];
        if (!ignoreDefaultArgs) {
            chromeArguments.push(...this.defaultArgs(options));
        }
        else if (Array.isArray(ignoreDefaultArgs)) {
            chromeArguments.push(...this.defaultArgs(options).filter(arg => {
                return !ignoreDefaultArgs.includes(arg);
            }));
        }
        else {
            chromeArguments.push(...args);
        }
        if (!chromeArguments.some(argument => {
            return argument.startsWith('--remote-debugging-');
        })) {
            if (pipe) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!debuggingPort, 'Browser should be launched with either pipe or debugging port - not both.');
                chromeArguments.push('--remote-debugging-pipe');
            }
            else {
                chromeArguments.push(`--remote-debugging-port=${debuggingPort || 0}`);
            }
        }
        let isTempUserDataDir = false;
        // Check for the user data dir argument, which will always be set even
        // with a custom directory specified via the userDataDir option.
        let userDataDirIndex = chromeArguments.findIndex(arg => {
            return arg.startsWith('--user-data-dir');
        });
        if (userDataDirIndex < 0) {
            isTempUserDataDir = true;
            chromeArguments.push(`--user-data-dir=${await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.getProfilePath())}`);
            userDataDirIndex = chromeArguments.length - 1;
        }
        const userDataDir = chromeArguments[userDataDirIndex].split('=', 2)[1];
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(typeof userDataDir === 'string', '`--user-data-dir` is malformed');
        let chromeExecutable = executablePath;
        if (!chromeExecutable) {
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(channel || !this.puppeteer._isPuppeteerCore, `An \`executablePath\` or \`channel\` must be specified for \`puppeteer-core\``);
            chromeExecutable = this.executablePath(channel, options.headless ?? true);
        }
        return {
            executablePath: chromeExecutable,
            args: chromeArguments,
            isTempUserDataDir,
            userDataDir,
        };
    }
    /**
     * @internal
     */
    async cleanUserDataDir(path, opts) {
        if (opts.isTemp) {
            try {
                await (0,_util_fs_js__WEBPACK_IMPORTED_MODULE_4__.rm)(path);
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                throw error;
            }
        }
    }
    defaultArgs(options = {}) {
        // See https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md
        const userDisabledFeatures = getFeatures('--disable-features', options.args);
        if (options.args && userDisabledFeatures.length > 0) {
            removeMatchingFlags(options.args, '--disable-features');
        }
        const turnOnExperimentalFeaturesForTesting = process.env['PUPPETEER_TEST_EXPERIMENTAL_CHROME_FEATURES'] === 'true';
        // Merge default disabled features with user-provided ones, if any.
        const disabledFeatures = [
            'Translate',
            // AcceptCHFrame disabled because of crbug.com/1348106.
            'AcceptCHFrame',
            'MediaRouter',
            'OptimizationHints',
            ...(turnOnExperimentalFeaturesForTesting
                ? []
                : [
                    // https://crbug.com/1492053
                    'ProcessPerSiteUpToMainFrameThreshold',
                    // https://github.com/puppeteer/puppeteer/issues/10715
                    'IsolateSandboxedIframes',
                ]),
            ...userDisabledFeatures,
        ].filter(feature => {
            return feature !== '';
        });
        const userEnabledFeatures = getFeatures('--enable-features', options.args);
        if (options.args && userEnabledFeatures.length > 0) {
            removeMatchingFlags(options.args, '--enable-features');
        }
        // Merge default enabled features with user-provided ones, if any.
        const enabledFeatures = [
            'PdfOopif',
            // Add features to enable by default here.
            ...userEnabledFeatures,
        ].filter(feature => {
            return feature !== '';
        });
        const chromeArguments = [
            '--allow-pre-commit-input',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-extensions-with-background-pages',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--disable-hang-monitor',
            '--disable-infobars',
            '--disable-ipc-flooding-protection',
            '--disable-popup-blocking',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-search-engine-choice-screen',
            '--disable-sync',
            '--enable-automation',
            '--export-tagged-pdf',
            '--generate-pdf-document-outline',
            '--force-color-profile=srgb',
            '--metrics-recording-only',
            '--no-first-run',
            '--password-store=basic',
            '--use-mock-keychain',
            `--disable-features=${disabledFeatures.join(',')}`,
            `--enable-features=${enabledFeatures.join(',')}`,
        ].filter(arg => {
            return arg !== '';
        });
        const { devtools = false, headless = !devtools, args = [], userDataDir, } = options;
        if (userDataDir) {
            chromeArguments.push(`--user-data-dir=${Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userDataDir)}`);
        }
        if (devtools) {
            chromeArguments.push('--auto-open-devtools-for-tabs');
        }
        if (headless) {
            chromeArguments.push(headless === 'shell' ? '--headless' : '--headless=new', '--hide-scrollbars', '--mute-audio');
        }
        if (args.every(arg => {
            return arg.startsWith('-');
        })) {
            chromeArguments.push('about:blank');
        }
        chromeArguments.push(...args);
        return chromeArguments;
    }
    executablePath(channel, headless) {
        if (channel) {
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                browser: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CHROME,
                channel: convertPuppeteerChannelToBrowsersChannel(channel),
            });
        }
        else {
            return this.resolveExecutablePath(headless);
        }
    }
}
function convertPuppeteerChannelToBrowsersChannel(channel) {
    switch (channel) {
        case 'chrome':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).STABLE;
        case 'chrome-dev':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).DEV;
        case 'chrome-beta':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).BETA;
        case 'chrome-canary':
            return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@puppeteer/browsers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CANARY;
    }
}
/**
 * Extracts all features from the given command-line flag
 * (e.g. `--enable-features`, `--enable-features=`).
 *
 * Example input:
 * ["--enable-features=NetworkService,NetworkServiceInProcess", "--enable-features=Foo"]
 *
 * Example output:
 * ["NetworkService", "NetworkServiceInProcess", "Foo"]
 *
 * @internal
 */
function getFeatures(flag, options = []) {
    return options
        .filter(s => {
        return s.startsWith(flag.endsWith('=') ? flag : `${flag}=`);
    })
        .map(s => {
        return s.split(new RegExp(`${flag}=\\s*`))[1]?.trim();
    })
        .filter(s => {
        return s;
    });
}
/**
 * Removes all elements in-place from the given string array
 * that match the given command-line flag.
 *
 * @internal
 */
function removeMatchingFlags(array, flag) {
    const regex = new RegExp(`^${flag}=.*`);
    let i = 0;
    while (i < array.length) {
        if (regex.test(array[i])) {
            array.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return array;
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/node/util/fs.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/node/util/fs.ts ***!
  \***************************************************************/
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


/***/ })

}]);