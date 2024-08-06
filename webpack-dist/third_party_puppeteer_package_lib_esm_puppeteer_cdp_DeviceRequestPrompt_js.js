"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_DeviceRequestPrompt_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js":
/*!************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/DeviceRequestPrompt.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceRequestPrompt: () => (/* binding */ DeviceRequestPrompt),
/* harmony export */   DeviceRequestPromptDevice: () => (/* binding */ DeviceRequestPromptDevice),
/* harmony export */   DeviceRequestPromptManager: () => (/* binding */ DeviceRequestPromptManager)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * Device in a request prompt.
 *
 * @public
 */
class DeviceRequestPromptDevice {
    /**
     * Device id during a prompt.
     */
    id;
    /**
     * Device name as it appears in a prompt.
     */
    name;
    /**
     * @internal
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
/**
 * Device request prompts let you respond to the page requesting for a device
 * through an API like WebBluetooth.
 *
 * @remarks
 * `DeviceRequestPrompt` instances are returned via the
 * {@link Page.waitForDevicePrompt} method.
 *
 * @example
 *
 * ```ts
 * const [devicePrompt] = Promise.all([
 *   page.waitForDevicePrompt(),
 *   page.click('#connect-bluetooth'),
 * ]);
 * await devicePrompt.select(
 *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
 * );
 * ```
 *
 * @public
 */
class DeviceRequestPrompt {
    #client;
    #timeoutSettings;
    #id;
    #handled = false;
    #updateDevicesHandle = this.#updateDevices.bind(this);
    #waitForDevicePromises = new Set();
    /**
     * Current list of selectable devices.
     */
    devices = [];
    /**
     * @internal
     */
    constructor(client, timeoutSettings, firstEvent) {
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#id = firstEvent.id;
        this.#client.on('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
        this.#updateDevices(firstEvent);
    }
    #updateDevices(event) {
        if (event.id !== this.#id) {
            return;
        }
        for (const rawDevice of event.devices) {
            if (this.devices.some(device => {
                return device.id === rawDevice.id;
            })) {
                continue;
            }
            const newDevice = new DeviceRequestPromptDevice(rawDevice.id, rawDevice.name);
            this.devices.push(newDevice);
            for (const waitForDevicePromise of this.#waitForDevicePromises) {
                if (waitForDevicePromise.filter(newDevice)) {
                    waitForDevicePromise.promise.resolve(newDevice);
                }
            }
        }
    }
    /**
     * Resolve to the first device in the prompt matching a filter.
     */
    async waitForDevice(filter, options = {}) {
        for (const device of this.devices) {
            if (filter(device)) {
                return device;
            }
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        const handle = { filter, promise: deferred };
        this.#waitForDevicePromises.add(handle);
        try {
            return await deferred.valueOrThrow();
        }
        finally {
            this.#waitForDevicePromises.delete(handle);
        }
    }
    /**
     * Select a device in the prompt's list.
     */
    async select(device) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot select device through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.devices.includes(device), 'Cannot select unknown device!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.#handled, 'Cannot select DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.selectPrompt', {
            id: this.#id,
            deviceId: device.id,
        });
    }
    /**
     * Cancel the prompt.
     */
    async cancel() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot cancel prompt through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.#handled, 'Cannot cancel DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.cancelPrompt', { id: this.#id });
    }
}
/**
 * @internal
 */
class DeviceRequestPromptManager {
    #client;
    #timeoutSettings;
    #deviceRequestPrompDeferreds = new Set();
    /**
     * @internal
     */
    constructor(client, timeoutSettings) {
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#client.on('DeviceAccess.deviceRequestPrompted', event => {
            this.#onDeviceRequestPrompted(event);
        });
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
    }
    /**
     * Wait for device prompt created by an action like calling WebBluetooth's
     * requestDevice.
     */
    async waitForDevicePrompt(options = {}) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null, 'Cannot wait for device prompt through detached session!');
        const needsEnable = this.#deviceRequestPrompDeferreds.size === 0;
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#client.send('DeviceAccess.enable');
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        this.#deviceRequestPrompDeferreds.add(deferred);
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        finally {
            this.#deviceRequestPrompDeferreds.delete(deferred);
        }
    }
    /**
     * @internal
     */
    #onDeviceRequestPrompted(event) {
        if (!this.#deviceRequestPrompDeferreds.size) {
            return;
        }
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.#client !== null);
        const devicePrompt = new DeviceRequestPrompt(this.#client, this.#timeoutSettings, event);
        for (const promise of this.#deviceRequestPrompDeferreds) {
            promise.resolve(devicePrompt);
        }
        this.#deviceRequestPrompDeferreds.clear();
    }
}
//# sourceMappingURL=DeviceRequestPrompt.js.map

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