"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_ScreenshotStorage_ts"],{

/***/ "./src/panels/recorder/models/ScreenshotStorage.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/models/ScreenshotStorage.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenshotStorage: () => (/* binding */ ScreenshotStorage)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _ScreenshotStorage_instances, _ScreenshotStorage_screenshotSettings, _ScreenshotStorage_screenshots, _ScreenshotStorage_maxStorageSize, _ScreenshotStorage_calculateKey, _ScreenshotStorage_loadFromSettings, _ScreenshotStorage_syncWithSettings;

let instance = null;
// Default size of storage
const DEFAULT_MAX_STORAGE_SIZE = 50 * 1024 * 1024;
/**
 * This class stores the screenshots taken for a specific recording
 * in a settings object. The total storage size is limited to 50 MB
 * by default and the least recently accessed screenshots will be
 * deleted first.
 */
class ScreenshotStorage {
    constructor(maxStorageSize = DEFAULT_MAX_STORAGE_SIZE) {
        _ScreenshotStorage_instances.add(this);
        _ScreenshotStorage_screenshotSettings.set(this, void 0);
        _ScreenshotStorage_screenshots.set(this, void 0);
        _ScreenshotStorage_maxStorageSize.set(this, void 0);
        __classPrivateFieldSet(this, _ScreenshotStorage_screenshotSettings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-screenshots', []), "f");
        __classPrivateFieldSet(this, _ScreenshotStorage_screenshots, __classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_loadFromSettings).call(this), "f");
        __classPrivateFieldSet(this, _ScreenshotStorage_maxStorageSize, maxStorageSize, "f");
    }
    clear() {
        __classPrivateFieldGet(this, _ScreenshotStorage_screenshotSettings, "f").set([]);
        __classPrivateFieldSet(this, _ScreenshotStorage_screenshots, new Map(), "f");
    }
    getScreenshotForSection(recordingName, index) {
        const screenshot = __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").get(__classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_calculateKey).call(this, recordingName, index));
        if (!screenshot) {
            return null;
        }
        __classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_syncWithSettings).call(this, screenshot);
        return screenshot.data;
    }
    storeScreenshotForSection(recordingName, index, data) {
        const screenshot = { recordingName, index, data };
        __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").set(__classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_calculateKey).call(this, recordingName, index), screenshot);
        __classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_syncWithSettings).call(this, screenshot);
    }
    deleteScreenshotsForRecording(recordingName) {
        for (const [key, entry] of __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f")) {
            if (entry.recordingName === recordingName) {
                __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").delete(key);
            }
        }
        __classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_syncWithSettings).call(this);
    }
    static instance(opts = { forceNew: null, maxStorageSize: DEFAULT_MAX_STORAGE_SIZE }) {
        const { forceNew, maxStorageSize } = opts;
        if (!instance || forceNew) {
            instance = new ScreenshotStorage(maxStorageSize);
        }
        return instance;
    }
}
_ScreenshotStorage_screenshotSettings = new WeakMap(), _ScreenshotStorage_screenshots = new WeakMap(), _ScreenshotStorage_maxStorageSize = new WeakMap(), _ScreenshotStorage_instances = new WeakSet(), _ScreenshotStorage_calculateKey = function _ScreenshotStorage_calculateKey(recordingName, index) {
    return `${recordingName}:${index}`;
}, _ScreenshotStorage_loadFromSettings = function _ScreenshotStorage_loadFromSettings() {
    const screenshots = new Map();
    const data = __classPrivateFieldGet(this, _ScreenshotStorage_screenshotSettings, "f").get();
    for (const item of data) {
        screenshots.set(__classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_calculateKey).call(this, item.recordingName, item.index), item);
    }
    return screenshots;
}, _ScreenshotStorage_syncWithSettings = function _ScreenshotStorage_syncWithSettings(modifiedScreenshot) {
    if (modifiedScreenshot) {
        const key = __classPrivateFieldGet(this, _ScreenshotStorage_instances, "m", _ScreenshotStorage_calculateKey).call(this, modifiedScreenshot.recordingName, modifiedScreenshot.index);
        // Make sure that the modified screenshot is moved to the end of the map
        // as the JS Map remembers the original insertion order of the keys.
        __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").delete(key);
        __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").set(key, modifiedScreenshot);
    }
    const screenshots = [];
    let currentStorageSize = 0;
    // Take screenshots from the end of the list until the size constraint is met.
    for (const [key, screenshot] of Array
        .from(__classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").entries())
        .reverse()) {
        if (currentStorageSize < __classPrivateFieldGet(this, _ScreenshotStorage_maxStorageSize, "f")) {
            currentStorageSize += screenshot.data.length;
            screenshots.push(screenshot);
        }
        else {
            // Delete all screenshots that exceed the storage limit.
            __classPrivateFieldGet(this, _ScreenshotStorage_screenshots, "f").delete(key);
        }
    }
    __classPrivateFieldGet(this, _ScreenshotStorage_screenshotSettings, "f").set(screenshots.reverse());
};


/***/ })

}]);