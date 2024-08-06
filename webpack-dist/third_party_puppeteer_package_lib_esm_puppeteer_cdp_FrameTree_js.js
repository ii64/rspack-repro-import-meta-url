"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_FrameTree_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrameTree: () => (/* binding */ FrameTree)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */
class FrameTree {
    #frames = new Map();
    // frameID -> parentFrameID
    #parentIds = new Map();
    // frameID -> childFrameIDs
    #childIds = new Map();
    #mainFrame;
    #isMainFrameStale = false;
    #waitRequests = new Map();
    getMainFrame() {
        return this.#mainFrame;
    }
    getById(frameId) {
        return this.#frames.get(frameId);
    }
    /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */
    waitForFrame(frameId) {
        const frame = this.getById(frameId);
        if (frame) {
            return Promise.resolve(frame);
        }
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
        const callbacks = this.#waitRequests.get(frameId) || new Set();
        callbacks.add(deferred);
        return deferred.valueOrThrow();
    }
    frames() {
        return Array.from(this.#frames.values());
    }
    addFrame(frame) {
        this.#frames.set(frame._id, frame);
        if (frame._parentId) {
            this.#parentIds.set(frame._id, frame._parentId);
            if (!this.#childIds.has(frame._parentId)) {
                this.#childIds.set(frame._parentId, new Set());
            }
            this.#childIds.get(frame._parentId).add(frame._id);
        }
        else if (!this.#mainFrame || this.#isMainFrameStale) {
            this.#mainFrame = frame;
            this.#isMainFrameStale = false;
        }
        this.#waitRequests.get(frame._id)?.forEach(request => {
            return request.resolve(frame);
        });
    }
    removeFrame(frame) {
        this.#frames.delete(frame._id);
        this.#parentIds.delete(frame._id);
        if (frame._parentId) {
            this.#childIds.get(frame._parentId)?.delete(frame._id);
        }
        else {
            this.#isMainFrameStale = true;
        }
    }
    childFrames(frameId) {
        const childIds = this.#childIds.get(frameId);
        if (!childIds) {
            return [];
        }
        return Array.from(childIds)
            .map(id => {
            return this.getById(id);
        })
            .filter((frame) => {
            return frame !== undefined;
        });
    }
    parentFrame(frameId) {
        const parentId = this.#parentIds.get(frameId);
        return parentId ? this.getById(parentId) : undefined;
    }
}
//# sourceMappingURL=FrameTree.js.map

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

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deferred: () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Creates and returns a deferred object along with the resolve/reject functions.
 *
 * If the deferred has not been resolved/rejected within the `timeout` period,
 * the deferred gets resolves with a timeout error. `timeout` has to be greater than 0 or
 * it is ignored.
 *
 * @internal
 */
class Deferred {
    static create(opts) {
        return new Deferred(opts);
    }
    static async race(awaitables) {
        const deferredWithTimeout = new Set();
        try {
            const promises = awaitables.map(value => {
                if (value instanceof Deferred) {
                    if (value.#timeoutId) {
                        deferredWithTimeout.add(value);
                    }
                    return value.valueOrThrow();
                }
                return value;
            });
            // eslint-disable-next-line no-restricted-syntax
            return await Promise.race(promises);
        }
        finally {
            for (const deferred of deferredWithTimeout) {
                // We need to stop the timeout else
                // Node.JS will keep running the event loop till the
                // timer executes
                deferred.reject(new Error('Timeout cleared'));
            }
        }
    }
    #isResolved = false;
    #isRejected = false;
    #value;
    // SAFETY: This is ensured by #taskPromise.
    #resolve;
    #taskPromise = new Promise(resolve => {
        this.#resolve = resolve;
    });
    #timeoutId;
    #timeoutError;
    constructor(opts) {
        if (opts && opts.timeout > 0) {
            this.#timeoutError = new _common_Errors_js__WEBPACK_IMPORTED_MODULE_0__.TimeoutError(opts.message);
            this.#timeoutId = setTimeout(() => {
                this.reject(this.#timeoutError);
            }, opts.timeout);
        }
    }
    #finish(value) {
        clearTimeout(this.#timeoutId);
        this.#value = value;
        this.#resolve();
    }
    resolve(value) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isResolved = true;
        this.#finish(value);
    }
    reject(error) {
        if (this.#isRejected || this.#isResolved) {
            return;
        }
        this.#isRejected = true;
        this.#finish(error);
    }
    resolved() {
        return this.#isResolved;
    }
    finished() {
        return this.#isResolved || this.#isRejected;
    }
    value() {
        return this.#value;
    }
    #promise;
    valueOrThrow() {
        if (!this.#promise) {
            this.#promise = (async () => {
                await this.#taskPromise;
                if (this.#isRejected) {
                    throw this.#value;
                }
                return this.#value;
            })();
        }
        return this.#promise;
    }
}
//# sourceMappingURL=Deferred.js.map

/***/ })

}]);