"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_bidi_util_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BidiDeserializer: () => (/* binding */ BidiDeserializer)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class BidiDeserializer {
    static deserialize(result) {
        if (!result) {
            (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)('Service did not produce a result.');
            return undefined;
        }
        switch (result.type) {
            case 'array':
                return result.value?.map(value => {
                    return this.deserialize(value);
                });
            case 'set':
                return result.value?.reduce((acc, value) => {
                    return acc.add(this.deserialize(value));
                }, new Set());
            case 'object':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = this.#deserializeTuple(tuple);
                    acc[key] = value;
                    return acc;
                }, {});
            case 'map':
                return result.value?.reduce((acc, tuple) => {
                    const { key, value } = this.#deserializeTuple(tuple);
                    return acc.set(key, value);
                }, new Map());
            case 'promise':
                return {};
            case 'regexp':
                return new RegExp(result.value.pattern, result.value.flags);
            case 'date':
                return new Date(result.value);
            case 'undefined':
                return undefined;
            case 'null':
                return null;
            case 'number':
                return this.#deserializeNumber(result.value);
            case 'bigint':
                return BigInt(result.value);
            case 'boolean':
                return Boolean(result.value);
            case 'string':
                return result.value;
        }
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)(`Deserialization of type ${result.type} not supported.`);
        return undefined;
    }
    static #deserializeNumber(value) {
        switch (value) {
            case '-0':
                return -0;
            case 'NaN':
                return NaN;
            case 'Infinity':
                return Infinity;
            case '-Infinity':
                return -Infinity;
            default:
                return value;
        }
    }
    static #deserializeTuple([serializedKey, serializedValue]) {
        const key = typeof serializedKey === 'string'
            ? serializedKey
            : this.deserialize(serializedKey);
        const value = this.deserialize(serializedValue);
        return { key, value };
    }
}
//# sourceMappingURL=Deserializer.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/util.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEvaluationError: () => (/* binding */ createEvaluationError),
/* harmony export */   rewriteNavigationError: () => (/* binding */ rewriteNavigationError)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deserializer.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/bidi/Deserializer.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
function createEvaluationError(details) {
    if (details.exception.type !== 'error') {
        return _Deserializer_js__WEBPACK_IMPORTED_MODULE_2__.BidiDeserializer.deserialize(details.exception);
    }
    const [name = '', ...parts] = details.text.split(': ');
    const message = parts.join(': ');
    const error = new Error(message);
    error.name = name;
    // The first line is this function which we ignore.
    const stackLines = [];
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        for (const frame of details.stackTrace.callFrames.reverse()) {
            if (_common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.isPuppeteerURL(frame.url) &&
                frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.INTERNAL_URL) {
                const url = _common_util_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerURL.parse(frame.url);
                stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
            }
            else {
                stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
            }
            if (stackLines.length >= Error.stackTraceLimit) {
                break;
            }
        }
    }
    error.stack = [details.text, ...stackLines].join('\n');
    return error;
}
/**
 * @internal
 */
function rewriteNavigationError(message, ms) {
    return error => {
        if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolError) {
            error.message += ` at ${message}`;
        }
        else if (error instanceof _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError) {
            error.message = `Navigation timeout of ${ms} ms exceeded`;
        }
        throw error;
    };
}
//# sourceMappingURL=util.js.map

/***/ })

}]);