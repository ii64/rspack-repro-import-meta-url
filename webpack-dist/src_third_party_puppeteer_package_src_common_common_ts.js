"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_common_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/BrowserWebSocketTransport.ts":
/*!***********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/BrowserWebSocketTransport.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserWebSocketTransport: () => (/* binding */ BrowserWebSocketTransport)
/* harmony export */ });
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
var _BrowserWebSocketTransport_ws;
/**
 * @internal
 */
class BrowserWebSocketTransport {
    static create(url) {
        return new Promise((resolve, reject) => {
            const ws = new WebSocket(url);
            ws.addEventListener('open', () => {
                return resolve(new BrowserWebSocketTransport(ws));
            });
            ws.addEventListener('error', reject);
        });
    }
    constructor(ws) {
        _BrowserWebSocketTransport_ws.set(this, void 0);
        Object.defineProperty(this, "onmessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onclose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _BrowserWebSocketTransport_ws, ws, "f");
        __classPrivateFieldGet(this, _BrowserWebSocketTransport_ws, "f").addEventListener('message', event => {
            if (this.onmessage) {
                this.onmessage.call(null, event.data);
            }
        });
        __classPrivateFieldGet(this, _BrowserWebSocketTransport_ws, "f").addEventListener('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        __classPrivateFieldGet(this, _BrowserWebSocketTransport_ws, "f").addEventListener('error', () => { });
    }
    send(message) {
        __classPrivateFieldGet(this, _BrowserWebSocketTransport_ws, "f").send(message);
    }
    close() {
        __classPrivateFieldGet(this, _BrowserWebSocketTransport_ws, "f").close();
    }
}
_BrowserWebSocketTransport_ws = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Configuration.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Configuration.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/ConnectOptions.ts":
/*!************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/ConnectOptions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/ConnectionTransport.ts":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/ConnectionTransport.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Cookie.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Cookie.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Product.ts":
/*!*****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Product.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/TaskQueue.ts":
/*!*******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/TaskQueue.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskQueue: () => (/* binding */ TaskQueue)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
var _TaskQueue_chain;
/**
 * @internal
 */
class TaskQueue {
    constructor() {
        _TaskQueue_chain.set(this, void 0);
        __classPrivateFieldSet(this, _TaskQueue_chain, Promise.resolve(), "f");
    }
    postTask(task) {
        const result = __classPrivateFieldGet(this, _TaskQueue_chain, "f").then(task);
        __classPrivateFieldSet(this, _TaskQueue_chain, result.then(() => {
            return undefined;
        }, () => {
            return undefined;
        }), "f");
        return result;
    }
}
_TaskQueue_chain = new WeakMap();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/Viewport.ts":
/*!******************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/Viewport.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/common.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/common.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserWebSocketTransport: () => (/* reexport safe */ _BrowserWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_0__.BrowserWebSocketTransport),
/* harmony export */   Callback: () => (/* reexport safe */ _CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.Callback),
/* harmony export */   CallbackRegistry: () => (/* reexport safe */ _CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry),
/* harmony export */   ConsoleMessage: () => (/* reexport safe */ _ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_5__.ConsoleMessage),
/* harmony export */   CustomQueryHandlerRegistry: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.CustomQueryHandlerRegistry),
/* harmony export */   DEFAULT_VIEWPORT: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.DEFAULT_VIEWPORT),
/* harmony export */   EventEmitter: () => (/* reexport safe */ _EventEmitter_js__WEBPACK_IMPORTED_MODULE_11__.EventEmitter),
/* harmony export */   FileChooser: () => (/* reexport safe */ _FileChooser_js__WEBPACK_IMPORTED_MODULE_12__.FileChooser),
/* harmony export */   KnownDevices: () => (/* reexport safe */ _Device_js__WEBPACK_IMPORTED_MODULE_9__.KnownDevices),
/* harmony export */   LazyArg: () => (/* reexport safe */ _LazyArg_js__WEBPACK_IMPORTED_MODULE_15__.LazyArg),
/* harmony export */   NETWORK_IDLE_TIME: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.NETWORK_IDLE_TIME),
/* harmony export */   NetworkManagerEvent: () => (/* reexport safe */ _NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_16__.NetworkManagerEvent),
/* harmony export */   PQueryHandler: () => (/* reexport safe */ _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_19__.PQueryHandler),
/* harmony export */   PierceQueryHandler: () => (/* reexport safe */ _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_18__.PierceQueryHandler),
/* harmony export */   PollingOptions: () => (/* reexport safe */ _QueryHandler_js__WEBPACK_IMPORTED_MODULE_23__.PollingOptions),
/* harmony export */   ProtocolError: () => (/* reexport safe */ _Errors_js__WEBPACK_IMPORTED_MODULE_10__.ProtocolError),
/* harmony export */   Puppeteer: () => (/* reexport safe */ _Puppeteer_js__WEBPACK_IMPORTED_MODULE_22__.Puppeteer),
/* harmony export */   PuppeteerError: () => (/* reexport safe */ _Errors_js__WEBPACK_IMPORTED_MODULE_10__.PuppeteerError),
/* harmony export */   PuppeteerURL: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.PuppeteerURL),
/* harmony export */   QueryHandler: () => (/* reexport safe */ _QueryHandler_js__WEBPACK_IMPORTED_MODULE_23__.QueryHandler),
/* harmony export */   SOURCE_URL_REGEX: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.SOURCE_URL_REGEX),
/* harmony export */   ScriptInjector: () => (/* reexport safe */ _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_24__.ScriptInjector),
/* harmony export */   SecurityDetails: () => (/* reexport safe */ _SecurityDetails_js__WEBPACK_IMPORTED_MODULE_25__.SecurityDetails),
/* harmony export */   TargetCloseError: () => (/* reexport safe */ _Errors_js__WEBPACK_IMPORTED_MODULE_10__.TargetCloseError),
/* harmony export */   TaskManager: () => (/* reexport safe */ _WaitTask_js__WEBPACK_IMPORTED_MODULE_33__.TaskManager),
/* harmony export */   TaskQueue: () => (/* reexport safe */ _TaskQueue_js__WEBPACK_IMPORTED_MODULE_26__.TaskQueue),
/* harmony export */   TextQueryHandler: () => (/* reexport safe */ _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_27__.TextQueryHandler),
/* harmony export */   TimeoutError: () => (/* reexport safe */ _Errors_js__WEBPACK_IMPORTED_MODULE_10__.TimeoutError),
/* harmony export */   TimeoutSettings: () => (/* reexport safe */ _TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_28__.TimeoutSettings),
/* harmony export */   UTILITY_WORLD_NAME: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.UTILITY_WORLD_NAME),
/* harmony export */   UnsupportedOperation: () => (/* reexport safe */ _Errors_js__WEBPACK_IMPORTED_MODULE_10__.UnsupportedOperation),
/* harmony export */   WaitTask: () => (/* reexport safe */ _WaitTask_js__WEBPACK_IMPORTED_MODULE_33__.WaitTask),
/* harmony export */   XPathQueryHandler: () => (/* reexport safe */ _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_34__.XPathQueryHandler),
/* harmony export */   _keyDefinitions: () => (/* reexport safe */ _USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_30__._keyDefinitions),
/* harmony export */   clearCustomQueryHandlers: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.clearCustomQueryHandlers),
/* harmony export */   createIncrementalIdGenerator: () => (/* reexport safe */ _CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.createIncrementalIdGenerator),
/* harmony export */   customQueryHandlerNames: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.customQueryHandlerNames),
/* harmony export */   customQueryHandlers: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.customQueryHandlers),
/* harmony export */   debug: () => (/* reexport safe */ _Debug_js__WEBPACK_IMPORTED_MODULE_8__.debug),
/* harmony export */   debugError: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.debugError),
/* harmony export */   evaluationString: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.evaluationString),
/* harmony export */   filterAsync: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.filterAsync),
/* harmony export */   fromAbortSignal: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.fromAbortSignal),
/* harmony export */   fromEmitterEvent: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.fromEmitterEvent),
/* harmony export */   getCapturedLogs: () => (/* reexport safe */ _Debug_js__WEBPACK_IMPORTED_MODULE_8__.getCapturedLogs),
/* harmony export */   getQueryHandlerAndSelector: () => (/* reexport safe */ _GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_13__.getQueryHandlerAndSelector),
/* harmony export */   getReadableAsBuffer: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.getReadableAsBuffer),
/* harmony export */   getReadableFromProtocolStream: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.getReadableFromProtocolStream),
/* harmony export */   getSourcePuppeteerURLIfAvailable: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.getSourcePuppeteerURLIfAvailable),
/* harmony export */   getSourceUrlComment: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.getSourceUrlComment),
/* harmony export */   importDebug: () => (/* reexport safe */ _Debug_js__WEBPACK_IMPORTED_MODULE_8__.importDebug),
/* harmony export */   importFSPromises: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.importFSPromises),
/* harmony export */   isDate: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.isDate),
/* harmony export */   isNumber: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.isNumber),
/* harmony export */   isPlainObject: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.isPlainObject),
/* harmony export */   isRegExp: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.isRegExp),
/* harmony export */   isString: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.isString),
/* harmony export */   paperFormats: () => (/* reexport safe */ _PDFOptions_js__WEBPACK_IMPORTED_MODULE_17__.paperFormats),
/* harmony export */   parsePDFOptions: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.parsePDFOptions),
/* harmony export */   parsePSelectors: () => (/* reexport safe */ _PSelectorParser_js__WEBPACK_IMPORTED_MODULE_21__.parsePSelectors),
/* harmony export */   registerCustomQueryHandler: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.registerCustomQueryHandler),
/* harmony export */   scriptInjector: () => (/* reexport safe */ _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_24__.scriptInjector),
/* harmony export */   setLogCapture: () => (/* reexport safe */ _Debug_js__WEBPACK_IMPORTED_MODULE_8__.setLogCapture),
/* harmony export */   timeout: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.timeout),
/* harmony export */   transposeIterableHandle: () => (/* reexport safe */ _HandleIterator_js__WEBPACK_IMPORTED_MODULE_14__.transposeIterableHandle),
/* harmony export */   unitToPixels: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.unitToPixels),
/* harmony export */   unregisterCustomQueryHandler: () => (/* reexport safe */ _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.unregisterCustomQueryHandler),
/* harmony export */   validateDialogType: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.validateDialogType),
/* harmony export */   withSourcePuppeteerURLIfNone: () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_31__.withSourcePuppeteerURLIfNone)
/* harmony export */ });
/* harmony import */ var _BrowserWebSocketTransport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserWebSocketTransport.js */ "./src/third_party/puppeteer/package/src/common/BrowserWebSocketTransport.ts");
/* harmony import */ var _CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallbackRegistry.js */ "./src/third_party/puppeteer/package/src/common/CallbackRegistry.ts");
/* harmony import */ var _Configuration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Configuration.js */ "./src/third_party/puppeteer/package/src/common/Configuration.ts");
/* harmony import */ var _ConnectionTransport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectionTransport.js */ "./src/third_party/puppeteer/package/src/common/ConnectionTransport.ts");
/* harmony import */ var _ConnectOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConnectOptions.js */ "./src/third_party/puppeteer/package/src/common/ConnectOptions.ts");
/* harmony import */ var _ConsoleMessage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConsoleMessage.js */ "./src/third_party/puppeteer/package/src/common/ConsoleMessage.ts");
/* harmony import */ var _Cookie_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cookie.js */ "./src/third_party/puppeteer/package/src/common/Cookie.ts");
/* harmony import */ var _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/CustomQueryHandler.ts");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Debug.js */ "./src/third_party/puppeteer/package/src/common/Debug.ts");
/* harmony import */ var _Device_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Device.js */ "./src/third_party/puppeteer/package/src/common/Device.ts");
/* harmony import */ var _Errors_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/src/common/Errors.ts");
/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EventEmitter.js */ "./src/third_party/puppeteer/package/src/common/EventEmitter.ts");
/* harmony import */ var _FileChooser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FileChooser.js */ "./src/third_party/puppeteer/package/src/common/FileChooser.ts");
/* harmony import */ var _GetQueryHandler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GetQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/GetQueryHandler.ts");
/* harmony import */ var _HandleIterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HandleIterator.js */ "./src/third_party/puppeteer/package/src/common/HandleIterator.ts");
/* harmony import */ var _LazyArg_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/src/common/LazyArg.ts");
/* harmony import */ var _NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/src/common/NetworkManagerEvents.ts");
/* harmony import */ var _PDFOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PDFOptions.js */ "./src/third_party/puppeteer/package/src/common/PDFOptions.ts");
/* harmony import */ var _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PierceQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/PierceQueryHandler.ts");
/* harmony import */ var _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/PQueryHandler.ts");
/* harmony import */ var _Product_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Product.js */ "./src/third_party/puppeteer/package/src/common/Product.ts");
/* harmony import */ var _PSelectorParser_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PSelectorParser.js */ "./src/third_party/puppeteer/package/src/common/PSelectorParser.ts");
/* harmony import */ var _Puppeteer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Puppeteer.js */ "./src/third_party/puppeteer/package/src/common/Puppeteer.ts");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/* harmony import */ var _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ScriptInjector.js */ "./src/third_party/puppeteer/package/src/common/ScriptInjector.ts");
/* harmony import */ var _SecurityDetails_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SecurityDetails.js */ "./src/third_party/puppeteer/package/src/common/SecurityDetails.ts");
/* harmony import */ var _TaskQueue_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./TaskQueue.js */ "./src/third_party/puppeteer/package/src/common/TaskQueue.ts");
/* harmony import */ var _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TextQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/TextQueryHandler.ts");
/* harmony import */ var _TimeoutSettings_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./TimeoutSettings.js */ "./src/third_party/puppeteer/package/src/common/TimeoutSettings.ts");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./types.js */ "./src/third_party/puppeteer/package/src/common/types.ts");
/* harmony import */ var _USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./USKeyboardLayout.js */ "./src/third_party/puppeteer/package/src/common/USKeyboardLayout.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/common/util.ts");
/* harmony import */ var _Viewport_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Viewport.js */ "./src/third_party/puppeteer/package/src/common/Viewport.ts");
/* harmony import */ var _WaitTask_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./WaitTask.js */ "./src/third_party/puppeteer/package/src/common/WaitTask.ts");
/* harmony import */ var _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./XPathQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/XPathQueryHandler.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */





































/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/types.ts":
/*!***************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ })

}]);