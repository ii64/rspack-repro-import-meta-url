"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_util_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Debug.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Debug.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2020 Google Inc.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCapturedLogs = exports.setLogCapture = exports.debug = exports.importDebug = void 0;
const environment_js_1 = __webpack_require__(/*! ../environment.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/environment.js");
/**
 * @internal
 */
let debugModule = null;
/**
 * @internal
 */
async function importDebug() {
    if (!debugModule) {
        debugModule = (await Promise.resolve().then(() => __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))).default;
    }
    return debugModule;
}
exports.importDebug = importDebug;
/**
 * A debug function that can be used in any environment.
 *
 * @remarks
 * If used in Node, it falls back to the
 * {@link https://www.npmjs.com/package/debug | debug module}. In the browser it
 * uses `console.log`.
 *
 * In Node, use the `DEBUG` environment variable to control logging:
 *
 * ```
 * DEBUG=* // logs all channels
 * DEBUG=foo // logs the `foo` channel
 * DEBUG=foo* // logs any channels starting with `foo`
 * ```
 *
 * In the browser, set `window.__PUPPETEER_DEBUG` to a string:
 *
 * ```
 * window.__PUPPETEER_DEBUG='*'; // logs all channels
 * window.__PUPPETEER_DEBUG='foo'; // logs the `foo` channel
 * window.__PUPPETEER_DEBUG='foo*'; // logs any channels starting with `foo`
 * ```
 *
 * @example
 *
 * ```
 * const log = debug('Page');
 *
 * log('new page created')
 * // logs "Page: new page created"
 * ```
 *
 * @param prefix - this will be prefixed to each log.
 * @returns a function that can be called to log to that debug channel.
 *
 * @internal
 */
const debug = (prefix) => {
    if (environment_js_1.isNode) {
        return async (...logArgs) => {
            if (captureLogs) {
                capturedLogs.push(prefix + logArgs);
            }
            (await importDebug())(prefix)(logArgs);
        };
    }
    return (...logArgs) => {
        const debugLevel = globalThis.__PUPPETEER_DEBUG;
        if (!debugLevel) {
            return;
        }
        const everythingShouldBeLogged = debugLevel === '*';
        const prefixMatchesDebugLevel = everythingShouldBeLogged ||
            /**
             * If the debug level is `foo*`, that means we match any prefix that
             * starts with `foo`. If the level is `foo`, we match only the prefix
             * `foo`.
             */
            (debugLevel.endsWith('*')
                ? prefix.startsWith(debugLevel)
                : prefix === debugLevel);
        if (!prefixMatchesDebugLevel) {
            return;
        }
        // eslint-disable-next-line no-console
        console.log(`${prefix}:`, ...logArgs);
    };
};
exports.debug = debug;
/**
 * @internal
 */
let capturedLogs = [];
/**
 * @internal
 */
let captureLogs = false;
/**
 * @internal
 */
function setLogCapture(value) {
    capturedLogs = [];
    captureLogs = value;
}
exports.setLogCapture = setLogCapture;
/**
 * @internal
 */
function getCapturedLogs() {
    return capturedLogs;
}
exports.getCapturedLogs = getCapturedLogs;
//# sourceMappingURL=Debug.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TargetCloseError = exports.UnsupportedOperation = exports.ProtocolError = exports.TimeoutError = exports.PuppeteerError = void 0;
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
exports.PuppeteerError = PuppeteerError;
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
class TimeoutError extends PuppeteerError {
}
exports.TimeoutError = TimeoutError;
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
class ProtocolError extends PuppeteerError {
    #code;
    #originalMessage = '';
    set code(code) {
        this.#code = code;
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return this.#code;
    }
    set originalMessage(originalMessage) {
        this.#originalMessage = originalMessage;
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return this.#originalMessage;
    }
}
exports.ProtocolError = ProtocolError;
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
exports.UnsupportedOperation = UnsupportedOperation;
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
exports.TargetCloseError = TargetCloseError;
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PDFOptions.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PDFOptions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paperFormats = void 0;
/**
 * @internal
 */
exports.paperFormats = {
    letter: { width: 8.5, height: 11 },
    legal: { width: 8.5, height: 14 },
    tabloid: { width: 11, height: 17 },
    ledger: { width: 17, height: 11 },
    a0: { width: 33.1, height: 46.8 },
    a1: { width: 23.4, height: 33.1 },
    a2: { width: 16.54, height: 23.4 },
    a3: { width: 11.7, height: 16.54 },
    a4: { width: 8.27, height: 11.7 },
    a5: { width: 5.83, height: 8.27 },
    a6: { width: 4.13, height: 5.83 },
};
//# sourceMappingURL=PDFOptions.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @license
 * Copyright 2017 Google Inc.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterAsync = exports.fromAbortSignal = exports.fromEmitterEvent = exports.unitToPixels = exports.parsePDFOptions = exports.NETWORK_IDLE_TIME = exports.getSourceUrlComment = exports.SOURCE_URL_REGEX = exports.UTILITY_WORLD_NAME = exports.timeout = exports.validateDialogType = exports.getReadableFromProtocolStream = exports.getReadableAsBuffer = exports.importFSPromises = exports.evaluationString = exports.isDate = exports.isRegExp = exports.isPlainObject = exports.isNumber = exports.isString = exports.getSourcePuppeteerURLIfAvailable = exports.withSourcePuppeteerURLIfNone = exports.PuppeteerURL = exports.DEFAULT_VIEWPORT = exports.debugError = void 0;
const rxjs_js_1 = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./src/third_party/puppeteer/package/lib/cjs/third_party/rxjs/rxjs.js");
const version_js_1 = __webpack_require__(/*! ../generated/version.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Debug_js_1 = __webpack_require__(/*! ./Debug.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Debug.js");
const Errors_js_1 = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js");
const PDFOptions_js_1 = __webpack_require__(/*! ./PDFOptions.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PDFOptions.js");
/**
 * @internal
 */
exports.debugError = (0, Debug_js_1.debug)('puppeteer:error');
/**
 * @internal
 */
exports.DEFAULT_VIEWPORT = Object.freeze({ width: 800, height: 600 });
/**
 * @internal
 */
const SOURCE_URL = Symbol('Source URL for Puppeteer evaluation scripts');
/**
 * @internal
 */
class PuppeteerURL {
    static INTERNAL_URL = 'pptr:internal';
    static fromCallSite(functionName, site) {
        const url = new PuppeteerURL();
        url.#functionName = functionName;
        url.#siteString = site.toString();
        return url;
    }
    static parse = (url) => {
        url = url.slice('pptr:'.length);
        const [functionName = '', siteString = ''] = url.split(';');
        const puppeteerUrl = new PuppeteerURL();
        puppeteerUrl.#functionName = functionName;
        puppeteerUrl.#siteString = decodeURIComponent(siteString);
        return puppeteerUrl;
    };
    static isPuppeteerURL = (url) => {
        return url.startsWith('pptr:');
    };
    #functionName;
    #siteString;
    get functionName() {
        return this.#functionName;
    }
    get siteString() {
        return this.#siteString;
    }
    toString() {
        return `pptr:${[
            this.#functionName,
            encodeURIComponent(this.#siteString),
        ].join(';')}`;
    }
}
exports.PuppeteerURL = PuppeteerURL;
/**
 * @internal
 */
const withSourcePuppeteerURLIfNone = (functionName, object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
        return object;
    }
    const original = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => {
        // First element is the function.
        // Second element is the caller of this function.
        // Third element is the caller of the caller of this function
        // which is precisely what we want.
        return stack[2];
    };
    const site = new Error().stack;
    Error.prepareStackTrace = original;
    return Object.assign(object, {
        [SOURCE_URL]: PuppeteerURL.fromCallSite(functionName, site),
    });
};
exports.withSourcePuppeteerURLIfNone = withSourcePuppeteerURLIfNone;
/**
 * @internal
 */
const getSourcePuppeteerURLIfAvailable = (object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
        return object[SOURCE_URL];
    }
    return undefined;
};
exports.getSourcePuppeteerURLIfAvailable = getSourcePuppeteerURLIfAvailable;
/**
 * @internal
 */
const isString = (obj) => {
    return typeof obj === 'string' || obj instanceof String;
};
exports.isString = isString;
/**
 * @internal
 */
const isNumber = (obj) => {
    return typeof obj === 'number' || obj instanceof Number;
};
exports.isNumber = isNumber;
/**
 * @internal
 */
const isPlainObject = (obj) => {
    return typeof obj === 'object' && obj?.constructor === Object;
};
exports.isPlainObject = isPlainObject;
/**
 * @internal
 */
const isRegExp = (obj) => {
    return typeof obj === 'object' && obj?.constructor === RegExp;
};
exports.isRegExp = isRegExp;
/**
 * @internal
 */
const isDate = (obj) => {
    return typeof obj === 'object' && obj?.constructor === Date;
};
exports.isDate = isDate;
/**
 * @internal
 */
function evaluationString(fun, ...args) {
    if ((0, exports.isString)(fun)) {
        (0, assert_js_1.assert)(args.length === 0, 'Cannot evaluate a string with arguments');
        return fun;
    }
    function serializeArgument(arg) {
        if (Object.is(arg, undefined)) {
            return 'undefined';
        }
        return JSON.stringify(arg);
    }
    return `(${fun})(${args.map(serializeArgument).join(',')})`;
}
exports.evaluationString = evaluationString;
/**
 * @internal
 */
let fs = null;
/**
 * @internal
 */
async function importFSPromises() {
    if (!fs) {
        try {
            fs = await Promise.resolve().then(() => __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))));
        }
        catch (error) {
            if (error instanceof TypeError) {
                throw new Error('Cannot write to a path outside of a Node-like environment.');
            }
            throw error;
        }
    }
    return fs;
}
exports.importFSPromises = importFSPromises;
/**
 * @internal
 */
async function getReadableAsBuffer(readable, path) {
    const buffers = [];
    const reader = readable.getReader();
    if (path) {
        const fs = await importFSPromises();
        const fileHandle = await fs.open(path, 'w+');
        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    break;
                }
                buffers.push(value);
                await fileHandle.writeFile(value);
            }
        }
        finally {
            await fileHandle.close();
        }
    }
    else {
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            buffers.push(value);
        }
    }
    try {
        return Buffer.concat(buffers);
    }
    catch (error) {
        (0, exports.debugError)(error);
        return null;
    }
}
exports.getReadableAsBuffer = getReadableAsBuffer;
/**
 * @internal
 */
/**
 * @internal
 */
async function getReadableFromProtocolStream(client, handle) {
    return new ReadableStream({
        async pull(controller) {
            function getUnit8Array(data, isBase64) {
                if (isBase64) {
                    return Uint8Array.from(atob(data), m => {
                        return m.codePointAt(0);
                    });
                }
                const encoder = new TextEncoder();
                return encoder.encode(data);
            }
            const { data, base64Encoded, eof } = await client.send('IO.read', {
                handle,
            });
            controller.enqueue(getUnit8Array(data, base64Encoded ?? false));
            if (eof) {
                await client.send('IO.close', { handle });
                controller.close();
            }
        },
    });
}
exports.getReadableFromProtocolStream = getReadableFromProtocolStream;
/**
 * @internal
 */
function validateDialogType(type) {
    let dialogType = null;
    const validDialogTypes = new Set([
        'alert',
        'confirm',
        'prompt',
        'beforeunload',
    ]);
    if (validDialogTypes.has(type)) {
        dialogType = type;
    }
    (0, assert_js_1.assert)(dialogType, `Unknown javascript dialog type: ${type}`);
    return dialogType;
}
exports.validateDialogType = validateDialogType;
/**
 * @internal
 */
function timeout(ms, cause) {
    return ms === 0
        ? rxjs_js_1.NEVER
        : (0, rxjs_js_1.timer)(ms).pipe((0, rxjs_js_1.map)(() => {
            throw new Errors_js_1.TimeoutError(`Timed out after waiting ${ms}ms`, { cause });
        }));
}
exports.timeout = timeout;
/**
 * @internal
 */
exports.UTILITY_WORLD_NAME = '__puppeteer_utility_world__' + version_js_1.packageVersion;
/**
 * @internal
 */
exports.SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
/**
 * @internal
 */
function getSourceUrlComment(url) {
    return `//# sourceURL=${url}`;
}
exports.getSourceUrlComment = getSourceUrlComment;
/**
 * @internal
 */
exports.NETWORK_IDLE_TIME = 500;
/**
 * @internal
 */
function parsePDFOptions(options = {}, lengthUnit = 'in') {
    const defaults = {
        scale: 1,
        displayHeaderFooter: false,
        headerTemplate: '',
        footerTemplate: '',
        printBackground: false,
        landscape: false,
        pageRanges: '',
        preferCSSPageSize: false,
        omitBackground: false,
        outline: false,
        tagged: true,
        waitForFonts: true,
    };
    let width = 8.5;
    let height = 11;
    if (options.format) {
        const format = PDFOptions_js_1.paperFormats[options.format.toLowerCase()];
        (0, assert_js_1.assert)(format, 'Unknown paper format: ' + options.format);
        width = format.width;
        height = format.height;
    }
    else {
        width = convertPrintParameterToInches(options.width, lengthUnit) ?? width;
        height =
            convertPrintParameterToInches(options.height, lengthUnit) ?? height;
    }
    const margin = {
        top: convertPrintParameterToInches(options.margin?.top, lengthUnit) || 0,
        left: convertPrintParameterToInches(options.margin?.left, lengthUnit) || 0,
        bottom: convertPrintParameterToInches(options.margin?.bottom, lengthUnit) || 0,
        right: convertPrintParameterToInches(options.margin?.right, lengthUnit) || 0,
    };
    // Quirk https://bugs.chromium.org/p/chromium/issues/detail?id=840455#c44
    if (options.outline) {
        options.tagged = true;
    }
    return {
        ...defaults,
        ...options,
        width,
        height,
        margin,
    };
}
exports.parsePDFOptions = parsePDFOptions;
/**
 * @internal
 */
exports.unitToPixels = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78,
};
function convertPrintParameterToInches(parameter, lengthUnit = 'in') {
    if (typeof parameter === 'undefined') {
        return undefined;
    }
    let pixels;
    if ((0, exports.isNumber)(parameter)) {
        // Treat numbers as pixel values to be aligned with phantom's paperSize.
        pixels = parameter;
    }
    else if ((0, exports.isString)(parameter)) {
        const text = parameter;
        let unit = text.substring(text.length - 2).toLowerCase();
        let valueText = '';
        if (unit in exports.unitToPixels) {
            valueText = text.substring(0, text.length - 2);
        }
        else {
            // In case of unknown unit try to parse the whole parameter as number of pixels.
            // This is consistent with phantom's paperSize behavior.
            unit = 'px';
            valueText = text;
        }
        const value = Number(valueText);
        (0, assert_js_1.assert)(!isNaN(value), 'Failed to parse parameter value: ' + text);
        pixels = value * exports.unitToPixels[unit];
    }
    else {
        throw new Error('page.pdf() Cannot handle parameter type: ' + typeof parameter);
    }
    return pixels / exports.unitToPixels[lengthUnit];
}
/**
 * @internal
 */
function fromEmitterEvent(emitter, eventName) {
    return new rxjs_js_1.Observable(subscriber => {
        const listener = (event) => {
            subscriber.next(event);
        };
        emitter.on(eventName, listener);
        return () => {
            emitter.off(eventName, listener);
        };
    });
}
exports.fromEmitterEvent = fromEmitterEvent;
/**
 * @internal
 */
function fromAbortSignal(signal, cause) {
    return signal
        ? (0, rxjs_js_1.fromEvent)(signal, 'abort').pipe((0, rxjs_js_1.map)(() => {
            if (signal.reason instanceof Error) {
                signal.reason.cause = cause;
                throw signal.reason;
            }
            throw new Error(signal.reason, { cause });
        }))
        : rxjs_js_1.NEVER;
}
exports.fromAbortSignal = fromAbortSignal;
/**
 * @internal
 */
function filterAsync(predicate) {
    return (0, rxjs_js_1.mergeMap)((value) => {
        return (0, rxjs_js_1.from)(Promise.resolve(predicate(value))).pipe((0, rxjs_js_1.filter)(isMatch => {
            return isMatch;
        }), (0, rxjs_js_1.map)(() => {
            return value;
        }));
    });
}
exports.filterAsync = filterAsync;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/environment.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/environment.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNode = void 0;
/**
 * @internal
 */
exports.isNode = !!(typeof process !== 'undefined' && process.version);
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/version.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packageVersion = void 0;
/**
 * @internal
 */
exports.packageVersion = '22.14.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assert = void 0;
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
exports.assert = assert;
//# sourceMappingURL=assert.js.map

/***/ })

}]);