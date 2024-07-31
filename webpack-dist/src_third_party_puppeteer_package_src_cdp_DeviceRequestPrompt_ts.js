"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_DeviceRequestPrompt_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/DeviceRequestPrompt.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/DeviceRequestPrompt.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceRequestPrompt: () => (/* binding */ DeviceRequestPrompt),
/* harmony export */   DeviceRequestPromptDevice: () => (/* binding */ DeviceRequestPromptDevice),
/* harmony export */   DeviceRequestPromptManager: () => (/* binding */ DeviceRequestPromptManager)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
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
var _DeviceRequestPrompt_instances, _DeviceRequestPrompt_client, _DeviceRequestPrompt_timeoutSettings, _DeviceRequestPrompt_id, _DeviceRequestPrompt_handled, _DeviceRequestPrompt_updateDevicesHandle, _DeviceRequestPrompt_waitForDevicePromises, _DeviceRequestPrompt_updateDevices, _DeviceRequestPromptManager_instances, _DeviceRequestPromptManager_client, _DeviceRequestPromptManager_timeoutSettings, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, _DeviceRequestPromptManager_onDeviceRequestPrompted;


/**
 * Device in a request prompt.
 *
 * @public
 */
class DeviceRequestPromptDevice {
    /**
     * @internal
     */
    constructor(id, name) {
        /**
         * Device id during a prompt.
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Device name as it appears in a prompt.
         */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    /**
     * @internal
     */
    constructor(client, timeoutSettings, firstEvent) {
        _DeviceRequestPrompt_instances.add(this);
        _DeviceRequestPrompt_client.set(this, void 0);
        _DeviceRequestPrompt_timeoutSettings.set(this, void 0);
        _DeviceRequestPrompt_id.set(this, void 0);
        _DeviceRequestPrompt_handled.set(this, false);
        _DeviceRequestPrompt_updateDevicesHandle.set(this, __classPrivateFieldGet(this, _DeviceRequestPrompt_instances, "m", _DeviceRequestPrompt_updateDevices).bind(this));
        _DeviceRequestPrompt_waitForDevicePromises.set(this, new Set());
        /**
         * Current list of selectable devices.
         */
        Object.defineProperty(this, "devices", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        __classPrivateFieldSet(this, _DeviceRequestPrompt_client, client, "f");
        __classPrivateFieldSet(this, _DeviceRequestPrompt_timeoutSettings, timeoutSettings, "f");
        __classPrivateFieldSet(this, _DeviceRequestPrompt_id, firstEvent.id, "f");
        __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").on('DeviceAccess.deviceRequestPrompted', __classPrivateFieldGet(this, _DeviceRequestPrompt_updateDevicesHandle, "f"));
        __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").on('Target.detachedFromTarget', () => {
            __classPrivateFieldSet(this, _DeviceRequestPrompt_client, null, "f");
        });
        __classPrivateFieldGet(this, _DeviceRequestPrompt_instances, "m", _DeviceRequestPrompt_updateDevices).call(this, firstEvent);
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
        const { timeout = __classPrivateFieldGet(this, _DeviceRequestPrompt_timeoutSettings, "f").timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        const handle = { filter, promise: deferred };
        __classPrivateFieldGet(this, _DeviceRequestPrompt_waitForDevicePromises, "f").add(handle);
        try {
            return await deferred.valueOrThrow();
        }
        finally {
            __classPrivateFieldGet(this, _DeviceRequestPrompt_waitForDevicePromises, "f").delete(handle);
        }
    }
    /**
     * Select a device in the prompt's list.
     */
    async select(device) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f") !== null, 'Cannot select device through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(this.devices.includes(device), 'Cannot select unknown device!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!__classPrivateFieldGet(this, _DeviceRequestPrompt_handled, "f"), 'Cannot select DeviceRequestPrompt which is already handled!');
        __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").off('DeviceAccess.deviceRequestPrompted', __classPrivateFieldGet(this, _DeviceRequestPrompt_updateDevicesHandle, "f"));
        __classPrivateFieldSet(this, _DeviceRequestPrompt_handled, true, "f");
        return await __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").send('DeviceAccess.selectPrompt', {
            id: __classPrivateFieldGet(this, _DeviceRequestPrompt_id, "f"),
            deviceId: device.id,
        });
    }
    /**
     * Cancel the prompt.
     */
    async cancel() {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f") !== null, 'Cannot cancel prompt through detached session!');
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!__classPrivateFieldGet(this, _DeviceRequestPrompt_handled, "f"), 'Cannot cancel DeviceRequestPrompt which is already handled!');
        __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").off('DeviceAccess.deviceRequestPrompted', __classPrivateFieldGet(this, _DeviceRequestPrompt_updateDevicesHandle, "f"));
        __classPrivateFieldSet(this, _DeviceRequestPrompt_handled, true, "f");
        return await __classPrivateFieldGet(this, _DeviceRequestPrompt_client, "f").send('DeviceAccess.cancelPrompt', { id: __classPrivateFieldGet(this, _DeviceRequestPrompt_id, "f") });
    }
}
_DeviceRequestPrompt_client = new WeakMap(), _DeviceRequestPrompt_timeoutSettings = new WeakMap(), _DeviceRequestPrompt_id = new WeakMap(), _DeviceRequestPrompt_handled = new WeakMap(), _DeviceRequestPrompt_updateDevicesHandle = new WeakMap(), _DeviceRequestPrompt_waitForDevicePromises = new WeakMap(), _DeviceRequestPrompt_instances = new WeakSet(), _DeviceRequestPrompt_updateDevices = function _DeviceRequestPrompt_updateDevices(event) {
    if (event.id !== __classPrivateFieldGet(this, _DeviceRequestPrompt_id, "f")) {
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
        for (const waitForDevicePromise of __classPrivateFieldGet(this, _DeviceRequestPrompt_waitForDevicePromises, "f")) {
            if (waitForDevicePromise.filter(newDevice)) {
                waitForDevicePromise.promise.resolve(newDevice);
            }
        }
    }
};
/**
 * @internal
 */
class DeviceRequestPromptManager {
    /**
     * @internal
     */
    constructor(client, timeoutSettings) {
        _DeviceRequestPromptManager_instances.add(this);
        _DeviceRequestPromptManager_client.set(this, void 0);
        _DeviceRequestPromptManager_timeoutSettings.set(this, void 0);
        _DeviceRequestPromptManager_deviceRequestPrompDeferreds.set(this, new Set());
        __classPrivateFieldSet(this, _DeviceRequestPromptManager_client, client, "f");
        __classPrivateFieldSet(this, _DeviceRequestPromptManager_timeoutSettings, timeoutSettings, "f");
        __classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f").on('DeviceAccess.deviceRequestPrompted', event => {
            __classPrivateFieldGet(this, _DeviceRequestPromptManager_instances, "m", _DeviceRequestPromptManager_onDeviceRequestPrompted).call(this, event);
        });
        __classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f").on('Target.detachedFromTarget', () => {
            __classPrivateFieldSet(this, _DeviceRequestPromptManager_client, null, "f");
        });
    }
    /**
     * Wait for device prompt created by an action like calling WebBluetooth's
     * requestDevice.
     */
    async waitForDevicePrompt(options = {}) {
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f") !== null, 'Cannot wait for device prompt through detached session!');
        const needsEnable = __classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f").size === 0;
        let enablePromise;
        if (needsEnable) {
            enablePromise = __classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f").send('DeviceAccess.enable');
        }
        const { timeout = __classPrivateFieldGet(this, _DeviceRequestPromptManager_timeoutSettings, "f").timeout() } = options;
        const deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred.create({
            message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        __classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f").add(deferred);
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        finally {
            __classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f").delete(deferred);
        }
    }
}
_DeviceRequestPromptManager_client = new WeakMap(), _DeviceRequestPromptManager_timeoutSettings = new WeakMap(), _DeviceRequestPromptManager_deviceRequestPrompDeferreds = new WeakMap(), _DeviceRequestPromptManager_instances = new WeakSet(), _DeviceRequestPromptManager_onDeviceRequestPrompted = function _DeviceRequestPromptManager_onDeviceRequestPrompted(event) {
    if (!__classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f").size) {
        return;
    }
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(__classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f") !== null);
    const devicePrompt = new DeviceRequestPrompt(__classPrivateFieldGet(this, _DeviceRequestPromptManager_client, "f"), __classPrivateFieldGet(this, _DeviceRequestPromptManager_timeoutSettings, "f"), event);
    for (const promise of __classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f")) {
        promise.resolve(devicePrompt);
    }
    __classPrivateFieldGet(this, _DeviceRequestPromptManager_deviceRequestPrompDeferreds, "f").clear();
};


/***/ })

}]);