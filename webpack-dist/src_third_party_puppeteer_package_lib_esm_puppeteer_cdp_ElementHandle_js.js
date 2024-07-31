"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_cdp_ElementHandle_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js":
/*!**********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpElementHandle: () => (/* binding */ CdpElementHandle)
/* harmony export */ });
/* harmony import */ var _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ElementHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandle.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};






const NON_ELEMENT_NODE_ROLES = new Set(['StaticText', 'InlineTextBox']);
/**
 * The CdpElementHandle extends ElementHandle now to keep compatibility
 * with `instanceof` because of that we need to have methods for
 * CdpJSHandle to in this implementation as well.
 *
 * @internal
 */
let CdpElementHandle = (() => {
    var _a, _b;
    let _classSuper = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle;
    let _instanceExtraInitializers = [];
    let _contentFrame_decorators;
    let _scrollIntoView_decorators;
    let _uploadFile_decorators;
    let _autofill_decorators;
    return class CdpElementHandle extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _contentFrame_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()];
            _scrollIntoView_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(), (_a = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_a)];
            _uploadFile_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(), (_b = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_b)];
            _autofill_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()];
            __esDecorate(this, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: obj => "contentFrame" in obj, get: obj => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: obj => "scrollIntoView" in obj, get: obj => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _uploadFile_decorators, { kind: "method", name: "uploadFile", static: false, private: false, access: { has: obj => "uploadFile" in obj, get: obj => obj.uploadFile }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: obj => "autofill" in obj, get: obj => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        constructor(world, remoteObject) {
            super(new _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__.CdpJSHandle(world, remoteObject));
            __runInitializers(this, _instanceExtraInitializers);
        }
        get realm() {
            return this.handle.realm;
        }
        get client() {
            return this.handle.client;
        }
        remoteObject() {
            return this.handle.remoteObject();
        }
        get #frameManager() {
            return this.frame._frameManager;
        }
        get frame() {
            return this.realm.environment;
        }
        async contentFrame() {
            const nodeInfo = await this.client.send('DOM.describeNode', {
                objectId: this.id,
            });
            if (typeof nodeInfo.node.frameId !== 'string') {
                return null;
            }
            return this.#frameManager.frame(nodeInfo.node.frameId);
        }
        async scrollIntoView() {
            await this.assertConnectedElement();
            try {
                await this.client.send('DOM.scrollIntoViewIfNeeded', {
                    objectId: this.id,
                });
            }
            catch (error) {
                (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                // Fallback to Element.scrollIntoView if DOM.scrollIntoViewIfNeeded is not supported
                await super.scrollIntoView();
            }
        }
        async uploadFile(...filePaths) {
            const isMultiple = await this.evaluate(element => {
                return element.multiple;
            });
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(filePaths.length <= 1 || isMultiple, 'Multiple file uploads only work with <input type=file multiple>');
            // Locate all files and confirm that they exist.
            let path;
            try {
                path = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
            }
            catch (error) {
                if (error instanceof TypeError) {
                    throw new Error(`JSHandle#uploadFile can only be used in Node-like environments.`);
                }
                throw error;
            }
            const files = filePaths.map(filePath => {
                if (path.win32.isAbsolute(filePath) || path.posix.isAbsolute(filePath)) {
                    return filePath;
                }
                else {
                    return path.resolve(filePath);
                }
            });
            /**
             * The zero-length array is a special case, it seems that
             * DOM.setFileInputFiles does not actually update the files in that case, so
             * the solution is to eval the element value to a new FileList directly.
             */
            if (files.length === 0) {
                // XXX: These events should converted to trusted events. Perhaps do this
                // in `DOM.setFileInputFiles`?
                await this.evaluate(element => {
                    element.files = new DataTransfer().files;
                    // Dispatch events for this case because it should behave akin to a user action.
                    element.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                });
                return;
            }
            const { node: { backendNodeId }, } = await this.client.send('DOM.describeNode', {
                objectId: this.id,
            });
            await this.client.send('DOM.setFileInputFiles', {
                objectId: this.id,
                files,
                backendNodeId,
            });
        }
        async autofill(data) {
            const nodeInfo = await this.client.send('DOM.describeNode', {
                objectId: this.handle.id,
            });
            const fieldId = nodeInfo.node.backendNodeId;
            const frameId = this.frame._id;
            await this.client.send('Autofill.trigger', {
                fieldId,
                frameId,
                card: data.creditCard,
            });
        }
        async *queryAXTree(name, role) {
            const { nodes } = await this.client.send('Accessibility.queryAXTree', {
                objectId: this.id,
                accessibleName: name,
                role,
            });
            const results = nodes.filter(node => {
                if (node.ignored) {
                    return false;
                }
                if (!node.role) {
                    return false;
                }
                if (NON_ELEMENT_NODE_ROLES.has(node.role.value)) {
                    return false;
                }
                return true;
            });
            return yield* _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__.AsyncIterableUtil.map(results, node => {
                return this.realm.adoptBackendNode(node.backendDOMNodeId);
            });
        }
    };
})();

//# sourceMappingURL=ElementHandle.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpJSHandle: () => (/* binding */ CdpJSHandle),
/* harmony export */   releaseObject: () => (/* binding */ releaseObject)
/* harmony export */ });
/* harmony import */ var _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/JSHandle.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class CdpJSHandle extends _api_JSHandle_js__WEBPACK_IMPORTED_MODULE_0__.JSHandle {
    #disposed = false;
    #remoteObject;
    #world;
    constructor(world, remoteObject) {
        super();
        this.#world = world;
        this.#remoteObject = remoteObject;
    }
    get disposed() {
        return this.#disposed;
    }
    get realm() {
        return this.#world;
    }
    get client() {
        return this.realm.environment.client;
    }
    async jsonValue() {
        if (!this.#remoteObject.objectId) {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.valueFromRemoteObject)(this.#remoteObject);
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
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        await releaseObject(this.client, this.#remoteObject);
    }
    toString() {
        if (!this.#remoteObject.objectId) {
            return 'JSHandle:' + (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.valueFromRemoteObject)(this.#remoteObject);
        }
        const type = this.#remoteObject.subtype || this.#remoteObject.type;
        return 'JSHandle@' + type;
    }
    get id() {
        return this.#remoteObject.objectId;
    }
    remoteObject() {
        return this.#remoteObject;
    }
    async getProperties() {
        // We use Runtime.getProperties rather than iterative version for
        // improved performance as it allows getting everything at once.
        const response = await this.client.send('Runtime.getProperties', {
            objectId: this.#remoteObject.objectId,
            ownProperties: true,
        });
        const result = new Map();
        for (const property of response.result) {
            if (!property.enumerable || !property.value) {
                continue;
            }
            result.set(property.name, this.#world.createCdpHandle(property.value));
        }
        return result;
    }
}
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
//# sourceMappingURL=JSHandle.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/utils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDP_BINDING_PREFIX: () => (/* binding */ CDP_BINDING_PREFIX),
/* harmony export */   addPageBinding: () => (/* binding */ addPageBinding),
/* harmony export */   createClientError: () => (/* binding */ createClientError),
/* harmony export */   createEvaluationError: () => (/* binding */ createEvaluationError),
/* harmony export */   pageBindingInitString: () => (/* binding */ pageBindingInitString),
/* harmony export */   valueFromRemoteObject: () => (/* binding */ valueFromRemoteObject)
/* harmony export */ });
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
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
            callPuppeteer.args ??= new Map();
            callPuppeteer.callbacks ??= new Map();
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
//# sourceMappingURL=utils.js.map

/***/ })

}]);