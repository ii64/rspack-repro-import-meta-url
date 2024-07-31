"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_common_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Configuration.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Configuration.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Configuration.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectOptions.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectOptions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ConnectOptions.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectionTransport.js":
/*!*******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectionTransport.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ConnectionTransport.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Cookie.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Cookie.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Cookie.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Product.js":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Product.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Product.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Puppeteer = void 0;
const BrowserConnector_js_1 = __webpack_require__(/*! ./BrowserConnector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/BrowserConnector.js");
const CustomQueryHandler_js_1 = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js");
/**
 * The main Puppeteer class.
 *
 * IMPORTANT: if you are using Puppeteer in a Node environment, you will get an
 * instance of {@link PuppeteerNode} when you import or require `puppeteer`.
 * That class extends `Puppeteer`, so has all the methods documented below as
 * well as all that are defined on {@link PuppeteerNode}.
 *
 * @public
 */
class Puppeteer {
    /**
     * Operations for {@link CustomQueryHandler | custom query handlers}. See
     * {@link CustomQueryHandlerRegistry}.
     *
     * @internal
     */
    static customQueryHandlers = CustomQueryHandler_js_1.customQueryHandlers;
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is only
     * allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```
     * puppeteer.registerCustomQueryHandler('text', { … });
     * const aHandle = await page.$('text/…');
     * ```
     *
     * @param name - The name that the custom query handler will be registered
     * under.
     * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
     * to register.
     *
     * @public
     */
    static registerCustomQueryHandler(name, queryHandler) {
        return this.customQueryHandlers.register(name, queryHandler);
    }
    /**
     * Unregisters a custom query handler for a given name.
     */
    static unregisterCustomQueryHandler(name) {
        return this.customQueryHandlers.unregister(name);
    }
    /**
     * Gets the names of all custom query handlers.
     */
    static customQueryHandlerNames() {
        return this.customQueryHandlers.names();
    }
    /**
     * Unregisters all custom query handlers.
     */
    static clearCustomQueryHandlers() {
        return this.customQueryHandlers.clear();
    }
    /**
     * @internal
     */
    _isPuppeteerCore;
    /**
     * @internal
     */
    _changedProduct = false;
    /**
     * @internal
     */
    constructor(settings) {
        this._isPuppeteerCore = settings.isPuppeteerCore;
        this.connect = this.connect.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
        return (0, BrowserConnector_js_1._connectToBrowser)(options);
    }
}
exports.Puppeteer = Puppeteer;
//# sourceMappingURL=Puppeteer.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TaskQueue.js":
/*!*********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TaskQueue.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskQueue = void 0;
/**
 * @internal
 */
class TaskQueue {
    #chain;
    constructor() {
        this.#chain = Promise.resolve();
    }
    postTask(task) {
        const result = this.#chain.then(task);
        this.#chain = result.then(() => {
            return undefined;
        }, () => {
            return undefined;
        });
        return result;
    }
}
exports.TaskQueue = TaskQueue;
//# sourceMappingURL=TaskQueue.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Viewport.js":
/*!********************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Viewport.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Viewport.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/common.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/common.js ***!
  \******************************************************************************/
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
__exportStar(__webpack_require__(/*! ./BrowserWebSocketTransport.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/BrowserWebSocketTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./CallbackRegistry.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CallbackRegistry.js"), exports);
__exportStar(__webpack_require__(/*! ./Configuration.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Configuration.js"), exports);
__exportStar(__webpack_require__(/*! ./ConnectionTransport.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectionTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./ConnectOptions.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConnectOptions.js"), exports);
__exportStar(__webpack_require__(/*! ./ConsoleMessage.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ConsoleMessage.js"), exports);
__exportStar(__webpack_require__(/*! ./Cookie.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Cookie.js"), exports);
__exportStar(__webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./Debug.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Debug.js"), exports);
__exportStar(__webpack_require__(/*! ./Device.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Device.js"), exports);
__exportStar(__webpack_require__(/*! ./Errors.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Errors.js"), exports);
__exportStar(__webpack_require__(/*! ./EventEmitter.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/EventEmitter.js"), exports);
__exportStar(__webpack_require__(/*! ./FileChooser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/FileChooser.js"), exports);
__exportStar(__webpack_require__(/*! ./GetQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/GetQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./HandleIterator.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/HandleIterator.js"), exports);
__exportStar(__webpack_require__(/*! ./LazyArg.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/LazyArg.js"), exports);
__exportStar(__webpack_require__(/*! ./NetworkManagerEvents.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/NetworkManagerEvents.js"), exports);
__exportStar(__webpack_require__(/*! ./PDFOptions.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PDFOptions.js"), exports);
__exportStar(__webpack_require__(/*! ./PierceQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PierceQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./PQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./Product.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Product.js"), exports);
__exportStar(__webpack_require__(/*! ./PSelectorParser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PSelectorParser.js"), exports);
__exportStar(__webpack_require__(/*! ./Puppeteer.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Puppeteer.js"), exports);
__exportStar(__webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./ScriptInjector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js"), exports);
__exportStar(__webpack_require__(/*! ./SecurityDetails.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/SecurityDetails.js"), exports);
__exportStar(__webpack_require__(/*! ./TaskQueue.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TaskQueue.js"), exports);
__exportStar(__webpack_require__(/*! ./TextQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TextQueryHandler.js"), exports);
__exportStar(__webpack_require__(/*! ./TimeoutSettings.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TimeoutSettings.js"), exports);
__exportStar(__webpack_require__(/*! ./types.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/types.js"), exports);
__exportStar(__webpack_require__(/*! ./USKeyboardLayout.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/USKeyboardLayout.js"), exports);
__exportStar(__webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/util.js"), exports);
__exportStar(__webpack_require__(/*! ./Viewport.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/Viewport.js"), exports);
__exportStar(__webpack_require__(/*! ./WaitTask.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/WaitTask.js"), exports);
__exportStar(__webpack_require__(/*! ./XPathQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/XPathQueryHandler.js"), exports);
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/types.js":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/types.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ })

}]);