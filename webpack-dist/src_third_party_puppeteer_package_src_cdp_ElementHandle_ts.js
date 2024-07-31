"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_ElementHandle_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/ElementHandle.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/ElementHandle.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpElementHandle: () => (/* binding */ CdpElementHandle)
/* harmony export */ });
/* harmony import */ var _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ElementHandle.js */ "./src/third_party/puppeteer/package/src/api/ElementHandle.ts");
/* harmony import */ var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/src/util/AsyncIterableUtil.ts");
/* harmony import */ var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./src/third_party/puppeteer/package/src/util/decorators.ts");
/* harmony import */ var _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JSHandle.js */ "./src/third_party/puppeteer/package/src/cdp/JSHandle.ts");
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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
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
    var _CdpElementHandle_instances, _a, _CdpElementHandle_frameManager_get;
    var _b, _c;
    let _classSuper = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle;
    let _instanceExtraInitializers = [];
    let _contentFrame_decorators;
    let _scrollIntoView_decorators;
    let _uploadFile_decorators;
    let _autofill_decorators;
    return _a = class CdpElementHandle extends _classSuper {
            constructor(world, remoteObject) {
                super(new _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__.CdpJSHandle(world, remoteObject));
                _CdpElementHandle_instances.add(this);
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
                return __classPrivateFieldGet(this, _CdpElementHandle_instances, "a", _CdpElementHandle_frameManager_get).frame(nodeInfo.node.frameId);
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
        },
        _CdpElementHandle_instances = new WeakSet(),
        _CdpElementHandle_frameManager_get = function _CdpElementHandle_frameManager_get() {
            return this.frame._frameManager;
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _contentFrame_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()];
            _scrollIntoView_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(), (_b = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_b)];
            _uploadFile_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(), (_c = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_c)];
            _autofill_decorators = [(0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()];
            __esDecorate(_a, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: obj => "contentFrame" in obj, get: obj => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: obj => "scrollIntoView" in obj, get: obj => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _uploadFile_decorators, { kind: "method", name: "uploadFile", static: false, private: false, access: { has: obj => "uploadFile" in obj, get: obj => obj.uploadFile }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: obj => "autofill" in obj, get: obj => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();



/***/ })

}]);