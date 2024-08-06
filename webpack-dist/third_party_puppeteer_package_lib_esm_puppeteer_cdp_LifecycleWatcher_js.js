"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_LifecycleWatcher_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameManagerEvent: () => (/* binding */ FrameManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var FrameManagerEvent;
(function (FrameManagerEvent) {
    FrameManagerEvent.FrameAttached = Symbol('FrameManager.FrameAttached');
    FrameManagerEvent.FrameNavigated = Symbol('FrameManager.FrameNavigated');
    FrameManagerEvent.FrameDetached = Symbol('FrameManager.FrameDetached');
    FrameManagerEvent.FrameSwapped = Symbol('FrameManager.FrameSwapped');
    FrameManagerEvent.LifecycleEvent = Symbol('FrameManager.LifecycleEvent');
    FrameManagerEvent.FrameNavigatedWithinDocument = Symbol('FrameManager.FrameNavigatedWithinDocument');
    FrameManagerEvent.ConsoleApiCalled = Symbol('FrameManager.ConsoleApiCalled');
    FrameManagerEvent.BindingCalled = Symbol('FrameManager.BindingCalled');
})(FrameManagerEvent || (FrameManagerEvent = {}));
//# sourceMappingURL=FrameManagerEvents.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/LifecycleWatcher.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LifecycleWatcher: () => (/* binding */ LifecycleWatcher)
/* harmony export */ });
/* harmony import */ var _api_Frame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */ var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */ var _common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/NetworkManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/* harmony import */ var _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */ var _FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FrameManagerEvents.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameManagerEvents.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */







const puppeteerToProtocolLifecycle = new Map([
    ['load', 'load'],
    ['domcontentloaded', 'DOMContentLoaded'],
    ['networkidle0', 'networkIdle'],
    ['networkidle2', 'networkAlmostIdle'],
]);
/**
 * @internal
 */
class LifecycleWatcher {
    #expectedLifecycle;
    #frame;
    #timeout;
    #navigationRequest = null;
    #subscriptions = new _util_disposable_js__WEBPACK_IMPORTED_MODULE_5__.DisposableStack();
    #initialLoaderId;
    #terminationDeferred;
    #sameDocumentNavigationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #lifecycleDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #newDocumentNavigationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
    #hasSameDocumentNavigation;
    #swapped;
    #navigationResponseReceived;
    constructor(networkManager, frame, waitUntil, timeout) {
        if (Array.isArray(waitUntil)) {
            waitUntil = waitUntil.slice();
        }
        else if (typeof waitUntil === 'string') {
            waitUntil = [waitUntil];
        }
        this.#initialLoaderId = frame._loaderId;
        this.#expectedLifecycle = waitUntil.map(value => {
            const protocolEvent = puppeteerToProtocolLifecycle.get(value);
            (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(protocolEvent, 'Unknown value for options.waitUntil: ' + value);
            return protocolEvent;
        });
        this.#frame = frame;
        this.#timeout = timeout;
        const frameManagerEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame._frameManager));
        frameManagerEmitter.on(_FrameManagerEvents_js__WEBPACK_IMPORTED_MODULE_6__.FrameManagerEvent.LifecycleEvent, this.#checkLifecycleComplete.bind(this));
        const frameEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(frame));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigatedWithinDocument, this.#navigatedWithinDocument.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameNavigated, this.#navigated.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwapped, this.#frameSwapped.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameSwappedByActivation, this.#frameSwapped.bind(this));
        frameEmitter.on(_api_Frame_js__WEBPACK_IMPORTED_MODULE_0__.FrameEvent.FrameDetached, this.#onFrameDetached.bind(this));
        const networkManagerEmitter = this.#subscriptions.use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(networkManager));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Request, this.#onRequest.bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.Response, this.#onResponse.bind(this));
        networkManagerEmitter.on(_common_NetworkManagerEvents_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManagerEvent.RequestFailed, this.#onRequestFailed.bind(this));
        this.#terminationDeferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create({
            timeout: this.#timeout,
            message: `Navigation timeout of ${this.#timeout} ms exceeded`,
        });
        this.#checkLifecycleComplete();
    }
    #onRequest(request) {
        if (request.frame() !== this.#frame || !request.isNavigationRequest()) {
            return;
        }
        this.#navigationRequest = request;
        // Resolve previous navigation response in case there are multiple
        // navigation requests reported by the backend. This generally should not
        // happen by it looks like it's possible.
        this.#navigationResponseReceived?.resolve();
        this.#navigationResponseReceived = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_4__.Deferred.create();
        if (request.response() !== null) {
            this.#navigationResponseReceived?.resolve();
        }
    }
    #onRequestFailed(request) {
        if (this.#navigationRequest?.id !== request.id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onResponse(response) {
        if (this.#navigationRequest?.id !== response.request().id) {
            return;
        }
        this.#navigationResponseReceived?.resolve();
    }
    #onFrameDetached(frame) {
        if (this.#frame === frame) {
            this.#terminationDeferred.resolve(new Error('Navigating frame was detached'));
            return;
        }
        this.#checkLifecycleComplete();
    }
    async navigationResponse() {
        // Continue with a possibly null response.
        await this.#navigationResponseReceived?.valueOrThrow();
        return this.#navigationRequest ? this.#navigationRequest.response() : null;
    }
    sameDocumentNavigationPromise() {
        return this.#sameDocumentNavigationDeferred.valueOrThrow();
    }
    newDocumentNavigationPromise() {
        return this.#newDocumentNavigationDeferred.valueOrThrow();
    }
    lifecyclePromise() {
        return this.#lifecycleDeferred.valueOrThrow();
    }
    terminationPromise() {
        return this.#terminationDeferred.valueOrThrow();
    }
    #navigatedWithinDocument() {
        this.#hasSameDocumentNavigation = true;
        this.#checkLifecycleComplete();
    }
    #navigated(navigationType) {
        if (navigationType === 'BackForwardCacheRestore') {
            return this.#frameSwapped();
        }
        this.#checkLifecycleComplete();
    }
    #frameSwapped() {
        this.#swapped = true;
        this.#checkLifecycleComplete();
    }
    #checkLifecycleComplete() {
        // We expect navigation to commit.
        if (!checkLifecycle(this.#frame, this.#expectedLifecycle)) {
            return;
        }
        this.#lifecycleDeferred.resolve();
        if (this.#hasSameDocumentNavigation) {
            this.#sameDocumentNavigationDeferred.resolve(undefined);
        }
        if (this.#swapped || this.#frame._loaderId !== this.#initialLoaderId) {
            this.#newDocumentNavigationDeferred.resolve(undefined);
        }
        function checkLifecycle(frame, expectedLifecycle) {
            for (const event of expectedLifecycle) {
                if (!frame._lifecycleEvents.has(event)) {
                    return false;
                }
            }
            // TODO(#1): Its possible we don't need this check
            // CDP provided the correct order for Loading Events
            // And NetworkIdle is a global state
            // Consider removing
            for (const child of frame.childFrames()) {
                if (child._hasStartedLoading &&
                    !checkLifecycle(child, expectedLifecycle)) {
                    return false;
                }
            }
            return true;
        }
    }
    dispose() {
        this.#subscriptions.dispose();
        this.#terminationDeferred.resolve(new Error('LifecycleWatcher disposed'));
    }
}
//# sourceMappingURL=LifecycleWatcher.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/common/NetworkManagerEvents.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkManagerEvent: () => (/* binding */ NetworkManagerEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
var NetworkManagerEvent;
(function (NetworkManagerEvent) {
    NetworkManagerEvent.Request = Symbol('NetworkManager.Request');
    NetworkManagerEvent.RequestServedFromCache = Symbol('NetworkManager.RequestServedFromCache');
    NetworkManagerEvent.Response = Symbol('NetworkManager.Response');
    NetworkManagerEvent.RequestFailed = Symbol('NetworkManager.RequestFailed');
    NetworkManagerEvent.RequestFinished = Symbol('NetworkManager.RequestFinished');
})(NetworkManagerEvent || (NetworkManagerEvent = {}));
//# sourceMappingURL=NetworkManagerEvents.js.map

/***/ })

}]);