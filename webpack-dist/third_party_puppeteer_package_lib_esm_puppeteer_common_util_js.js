"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_util_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js":
/*!*************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   getCapturedLogs: () => (/* binding */ getCapturedLogs),
/* harmony export */   importDebug: () => (/* binding */ importDebug),
/* harmony export */   setLogCapture: () => (/* binding */ setLogCapture)
/* harmony export */ });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
let debugModule = null;
/**
 * @internal
 */
async function importDebug() {
    if (!debugModule) {
        debugModule = (await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'debug'"); e.code = 'MODULE_NOT_FOUND'; throw e; })).default;
    }
    return debugModule;
}
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
    if (_environment_js__WEBPACK_IMPORTED_MODULE_0__.isNode) {
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
/**
 * @internal
 */
function getCapturedLogs() {
    return capturedLogs;
}
//# sourceMappingURL=Debug.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolError: () => (/* binding */ ProtocolError),
/* harmony export */   PuppeteerError: () => (/* binding */ PuppeteerError),
/* harmony export */   TargetCloseError: () => (/* binding */ TargetCloseError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   UnsupportedOperation: () => (/* binding */ UnsupportedOperation)
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
class TargetCloseError extends ProtocolError {
}
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PDFOptions.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/PDFOptions.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paperFormats: () => (/* binding */ paperFormats)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const paperFormats = {
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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_VIEWPORT: () => (/* binding */ DEFAULT_VIEWPORT),
/* harmony export */   NETWORK_IDLE_TIME: () => (/* binding */ NETWORK_IDLE_TIME),
/* harmony export */   PuppeteerURL: () => (/* binding */ PuppeteerURL),
/* harmony export */   SOURCE_URL_REGEX: () => (/* binding */ SOURCE_URL_REGEX),
/* harmony export */   UTILITY_WORLD_NAME: () => (/* binding */ UTILITY_WORLD_NAME),
/* harmony export */   debugError: () => (/* binding */ debugError),
/* harmony export */   evaluationString: () => (/* binding */ evaluationString),
/* harmony export */   filterAsync: () => (/* binding */ filterAsync),
/* harmony export */   fromAbortSignal: () => (/* binding */ fromAbortSignal),
/* harmony export */   fromEmitterEvent: () => (/* binding */ fromEmitterEvent),
/* harmony export */   getReadableAsBuffer: () => (/* binding */ getReadableAsBuffer),
/* harmony export */   getReadableFromProtocolStream: () => (/* binding */ getReadableFromProtocolStream),
/* harmony export */   getSourcePuppeteerURLIfAvailable: () => (/* binding */ getSourcePuppeteerURLIfAvailable),
/* harmony export */   getSourceUrlComment: () => (/* binding */ getSourceUrlComment),
/* harmony export */   importFSPromises: () => (/* binding */ importFSPromises),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   parsePDFOptions: () => (/* binding */ parsePDFOptions),
/* harmony export */   timeout: () => (/* binding */ timeout),
/* harmony export */   unitToPixels: () => (/* binding */ unitToPixels),
/* harmony export */   validateDialogType: () => (/* binding */ validateDialogType),
/* harmony export */   withSourcePuppeteerURLIfNone: () => (/* binding */ withSourcePuppeteerURLIfNone)
/* harmony export */ });
/* harmony import */ var _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/rxjs/rxjs.js */ "./third_party/puppeteer/package/lib/esm/third_party/rxjs/rxjs.js");
/* harmony import */ var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Debug.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Debug.js");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _PDFOptions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PDFOptions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/PDFOptions.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






/**
 * @internal
 */
const debugError = (0,_Debug_js__WEBPACK_IMPORTED_MODULE_3__.debug)('puppeteer:error');
/**
 * @internal
 */
const DEFAULT_VIEWPORT = Object.freeze({ width: 800, height: 600 });
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
/**
 * @internal
 */
const getSourcePuppeteerURLIfAvailable = (object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
        return object[SOURCE_URL];
    }
    return undefined;
};
/**
 * @internal
 */
const isString = (obj) => {
    return typeof obj === 'string' || obj instanceof String;
};
/**
 * @internal
 */
const isNumber = (obj) => {
    return typeof obj === 'number' || obj instanceof Number;
};
/**
 * @internal
 */
const isPlainObject = (obj) => {
    return typeof obj === 'object' && obj?.constructor === Object;
};
/**
 * @internal
 */
const isRegExp = (obj) => {
    return typeof obj === 'object' && obj?.constructor === RegExp;
};
/**
 * @internal
 */
const isDate = (obj) => {
    return typeof obj === 'object' && obj?.constructor === Date;
};
/**
 * @internal
 */
function evaluationString(fun, ...args) {
    if (isString(fun)) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(args.length === 0, 'Cannot evaluate a string with arguments');
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
            fs = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'fs/promises'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
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
        debugError(error);
        return null;
    }
}
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
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(dialogType, `Unknown javascript dialog type: ${type}`);
    return dialogType;
}
/**
 * @internal
 */
function timeout(ms, cause) {
    return ms === 0
        ? _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.NEVER
        : (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.timer)(ms).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => {
            throw new _Errors_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError(`Timed out after waiting ${ms}ms`, { cause });
        }));
}
/**
 * @internal
 */
const UTILITY_WORLD_NAME = '__puppeteer_utility_world__' + _generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion;
/**
 * @internal
 */
const SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
/**
 * @internal
 */
function getSourceUrlComment(url) {
    return `//# sourceURL=${url}`;
}
/**
 * @internal
 */
const NETWORK_IDLE_TIME = 500;
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
        const format = _PDFOptions_js__WEBPACK_IMPORTED_MODULE_5__.paperFormats[options.format.toLowerCase()];
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(format, 'Unknown paper format: ' + options.format);
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
/**
 * @internal
 */
const unitToPixels = {
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
    if (isNumber(parameter)) {
        // Treat numbers as pixel values to be aligned with phantom's paperSize.
        pixels = parameter;
    }
    else if (isString(parameter)) {
        const text = parameter;
        let unit = text.substring(text.length - 2).toLowerCase();
        let valueText = '';
        if (unit in unitToPixels) {
            valueText = text.substring(0, text.length - 2);
        }
        else {
            // In case of unknown unit try to parse the whole parameter as number of pixels.
            // This is consistent with phantom's paperSize behavior.
            unit = 'px';
            valueText = text;
        }
        const value = Number(valueText);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!isNaN(value), 'Failed to parse parameter value: ' + text);
        pixels = value * unitToPixels[unit];
    }
    else {
        throw new Error('page.pdf() Cannot handle parameter type: ' + typeof parameter);
    }
    return pixels / unitToPixels[lengthUnit];
}
/**
 * @internal
 */
function fromEmitterEvent(emitter, eventName) {
    return new _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
        const listener = (event) => {
            subscriber.next(event);
        };
        emitter.on(eventName, listener);
        return () => {
            emitter.off(eventName, listener);
        };
    });
}
/**
 * @internal
 */
function fromAbortSignal(signal, cause) {
    return signal
        ? (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(signal, 'abort').pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => {
            if (signal.reason instanceof Error) {
                signal.reason.cause = cause;
                throw signal.reason;
            }
            throw new Error(signal.reason, { cause });
        }))
        : _third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.NEVER;
}
/**
 * @internal
 */
function filterAsync(predicate) {
    return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.mergeMap)((value) => {
        return (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.from)(Promise.resolve(predicate(value))).pipe((0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.filter)(isMatch => {
            return isMatch;
        }), (0,_third_party_rxjs_rxjs_js__WEBPACK_IMPORTED_MODULE_0__.map)(() => {
            return value;
        }));
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/environment.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/environment.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNode: () => (/* binding */ isNode)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const isNode = !!(typeof process !== 'undefined' && process.version);
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js":
/*!******************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packageVersion: () => (/* binding */ packageVersion)
/* harmony export */ });
/**
 * @internal
 */
const packageVersion = '22.14.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
//# sourceMappingURL=assert.js.map

/***/ })

}]);