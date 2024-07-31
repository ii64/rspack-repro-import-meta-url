"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_JSHandle_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/JSHandle.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpJSHandle: () => (/* binding */ CdpJSHandle),
/* harmony export */   releaseObject: () => (/* binding */ releaseObject)
/* harmony export */ });
/* harmony import */ var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./src/third_party/puppeteer/package/src/api/JSHandle.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/src/cdp/utils.ts");
/**
 * @license
 * Copyright 2019 Google Inc.
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
var _CdpJSHandle_disposed, _CdpJSHandle_remoteObject, _CdpJSHandle_world;



/**
 * @internal
 */
class CdpJSHandle extends _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle {
    constructor(world, remoteObject) {
        super();
        _CdpJSHandle_disposed.set(this, false);
        _CdpJSHandle_remoteObject.set(this, void 0);
        _CdpJSHandle_world.set(this, void 0);
        __classPrivateFieldSet(this, _CdpJSHandle_world, world, "f");
        __classPrivateFieldSet(this, _CdpJSHandle_remoteObject, remoteObject, "f");
    }
    get disposed() {
        return __classPrivateFieldGet(this, _CdpJSHandle_disposed, "f");
    }
    get realm() {
        return __classPrivateFieldGet(this, _CdpJSHandle_world, "f");
    }
    get client() {
        return this.realm.environment.client;
    }
    async jsonValue() {
        if (!__classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").objectId) {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.valueFromRemoteObject)(__classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f"));
        }
        const value = await this.evaluate(object => {
            return object;
        });
        if (value === undefined) {
            throw new Error('Could not serialize referenced object');
        }
        return value;
    }
    /**
     * Either `null` or the handle itself if the handle is an
     * instance of {@link ElementHandle}.
     */
    asElement() {
        return null;
    }
    async dispose() {
        if (__classPrivateFieldGet(this, _CdpJSHandle_disposed, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _CdpJSHandle_disposed, true, "f");
        await releaseObject(this.client, __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f"));
    }
    toString() {
        if (!__classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").objectId) {
            return 'JSHandle:' + (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.valueFromRemoteObject)(__classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f"));
        }
        const type = __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").subtype || __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").type;
        return 'JSHandle@' + type;
    }
    get id() {
        return __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").objectId;
    }
    remoteObject() {
        return __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f");
    }
    async getProperties() {
        // We use Runtime.getProperties rather than iterative version for
        // improved performance as it allows getting everything at once.
        const response = await this.client.send('Runtime.getProperties', {
            objectId: __classPrivateFieldGet(this, _CdpJSHandle_remoteObject, "f").objectId,
            ownProperties: true,
        });
        const result = new Map();
        for (const property of response.result) {
            if (!property.enumerable || !property.value) {
                continue;
            }
            result.set(property.name, __classPrivateFieldGet(this, _CdpJSHandle_world, "f").createCdpHandle(property.value));
        }
        return result;
    }
}
_CdpJSHandle_disposed = new WeakMap(), _CdpJSHandle_remoteObject = new WeakMap(), _CdpJSHandle_world = new WeakMap();
/**
 * @internal
 */
async function releaseObject(client, remoteObject) {
    if (!remoteObject.objectId) {
        return;
    }
    await client
        .send('Runtime.releaseObject', { objectId: remoteObject.objectId })
        .catch(error => {
        // Exceptions might happen in case of a page been navigated or closed.
        // Swallow these since they are harmless and we don't leak anything in this case.
        (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
    });
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/utils.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/utils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDP_BINDING_PREFIX: () => (/* binding */ CDP_BINDING_PREFIX),
/* harmony export */   addPageBinding: () => (/* binding */ addPageBinding),
/* harmony export */   createClientError: () => (/* binding */ createClientError),
/* harmony export */   createEvaluationError: () => (/* binding */ createEvaluationError),
/* harmony export */   pageBindingInitString: () => (/* binding */ pageBindingInitString),
/* harmony export */   valueFromRemoteObject: () => (/* binding */ valueFromRemoteObject)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * @internal
 */
function createEvaluationError(details) {
    let name;
    let message;
    if (!details.exception) {
        name = 'Error';
        message = details.text;
    }
    else if ((details.exception.type !== 'object' ||
        details.exception.subtype !== 'error') &&
        !details.exception.objectId) {
        return valueFromRemoteObject(details.exception);
    }
    else {
        const detail = getErrorDetails(details);
        name = detail.name;
        message = detail.message;
    }
    const messageHeight = message.split('\n').length;
    const error = new Error(message);
    error.name = name;
    const stackLines = error.stack.split('\n');
    const messageLines = stackLines.splice(0, messageHeight);
    // The first line is this function which we ignore.
    stackLines.shift();
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
        for (const frame of details.stackTrace.callFrames.reverse()) {
            if (_common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.isPuppeteerURL(frame.url) &&
                frame.url !== _common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.INTERNAL_URL) {
                const url = _common_util_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerURL.parse(frame.url);
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
    error.stack = [...messageLines, ...stackLines].join('\n');
    return error;
}
const getErrorDetails = (details) => {
    let name = '';
    let message;
    const lines = details.exception?.description?.split('\n    at ') ?? [];
    const size = Math.min(details.stackTrace?.callFrames.length ?? 0, lines.length - 1);
    lines.splice(-size, size);
    if (details.exception?.className) {
        name = details.exception.className;
    }
    message = lines.join('\n');
    if (name && message.startsWith(`${name}: `)) {
        message = message.slice(name.length + 2);
    }
    return { message, name };
};
/**
 * @internal
 */
function createClientError(details) {
    let name;
    let message;
    if (!details.exception) {
        name = 'Error';
        message = details.text;
    }
    else if ((details.exception.type !== 'object' ||
        details.exception.subtype !== 'error') &&
        !details.exception.objectId) {
        return valueFromRemoteObject(details.exception);
    }
    else {
        const detail = getErrorDetails(details);
        name = detail.name;
        message = detail.message;
    }
    const error = new Error(message);
    error.name = name;
    const messageHeight = error.message.split('\n').length;
    const messageLines = error.stack.split('\n').splice(0, messageHeight);
    const stackLines = [];
    if (details.stackTrace) {
        for (const frame of details.stackTrace.callFrames) {
            // Note we need to add `1` because the values are 0-indexed.
            stackLines.push(`    at ${frame.functionName || '<anonymous>'} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
            if (stackLines.length >= Error.stackTraceLimit) {
                break;
            }
        }
    }
    error.stack = [...messageLines, ...stackLines].join('\n');
    return error;
}
/**
 * @internal
 */
function valueFromRemoteObject(remoteObject) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!remoteObject.objectId, 'Cannot extract value when objectId is given');
    if (remoteObject.unserializableValue) {
        if (remoteObject.type === 'bigint') {
            return BigInt(remoteObject.unserializableValue.replace('n', ''));
        }
        switch (remoteObject.unserializableValue) {
            case '-0':
                return -0;
            case 'NaN':
                return NaN;
            case 'Infinity':
                return Infinity;
            case '-Infinity':
                return -Infinity;
            default:
                throw new Error('Unsupported unserializable value: ' +
                    remoteObject.unserializableValue);
        }
    }
    return remoteObject.value;
}
/**
 * @internal
 */
function addPageBinding(type, name, prefix) {
    // Depending on the frame loading state either Runtime.evaluate or
    // Page.addScriptToEvaluateOnNewDocument might succeed. Let's check that we
    // don't re-wrap Puppeteer's binding.
    // @ts-expect-error: In a different context.
    if (globalThis[name]) {
        return;
    }
    // We replace the CDP binding with a Puppeteer binding.
    Object.assign(globalThis, {
        [name](...args) {
            // This is the Puppeteer binding.
            // @ts-expect-error: In a different context.
            const callPuppeteer = globalThis[name];
            callPuppeteer.args ?? (callPuppeteer.args = new Map());
            callPuppeteer.callbacks ?? (callPuppeteer.callbacks = new Map());
            const seq = (callPuppeteer.lastSeq ?? 0) + 1;
            callPuppeteer.lastSeq = seq;
            callPuppeteer.args.set(seq, args);
            // @ts-expect-error: In a different context.
            // Needs to be the same as CDP_BINDING_PREFIX.
            globalThis[prefix + name](JSON.stringify({
                type,
                name,
                seq,
                args,
                isTrivial: !args.some(value => {
                    return value instanceof Node;
                }),
            }));
            return new Promise((resolve, reject) => {
                callPuppeteer.callbacks.set(seq, {
                    resolve(value) {
                        callPuppeteer.args.delete(seq);
                        resolve(value);
                    },
                    reject(value) {
                        callPuppeteer.args.delete(seq);
                        reject(value);
                    },
                });
            });
        },
    });
}
/**
 * @internal
 */
const CDP_BINDING_PREFIX = 'puppeteer_';
/**
 * @internal
 */
function pageBindingInitString(type, name) {
    return (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.evaluationString)(addPageBinding, type, name, CDP_BINDING_PREFIX);
}


/***/ })

}]);