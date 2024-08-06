"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_ScreenshotStorage_js"],{

/***/ "./panels/recorder/models/ScreenshotStorage.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/models/ScreenshotStorage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenshotStorage: () => (/* binding */ ScreenshotStorage)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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
    #screenshotSettings;
    #screenshots;
    #maxStorageSize;
    constructor(maxStorageSize = DEFAULT_MAX_STORAGE_SIZE) {
        this.#screenshotSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-screenshots', []);
        this.#screenshots = this.#loadFromSettings();
        this.#maxStorageSize = maxStorageSize;
    }
    clear() {
        this.#screenshotSettings.set([]);
        this.#screenshots = new Map();
    }
    getScreenshotForSection(recordingName, index) {
        const screenshot = this.#screenshots.get(this.#calculateKey(recordingName, index));
        if (!screenshot) {
            return null;
        }
        this.#syncWithSettings(screenshot);
        return screenshot.data;
    }
    storeScreenshotForSection(recordingName, index, data) {
        const screenshot = { recordingName, index, data };
        this.#screenshots.set(this.#calculateKey(recordingName, index), screenshot);
        this.#syncWithSettings(screenshot);
    }
    deleteScreenshotsForRecording(recordingName) {
        for (const [key, entry] of this.#screenshots) {
            if (entry.recordingName === recordingName) {
                this.#screenshots.delete(key);
            }
        }
        this.#syncWithSettings();
    }
    #calculateKey(recordingName, index) {
        return `${recordingName}:${index}`;
    }
    #loadFromSettings() {
        const screenshots = new Map();
        const data = this.#screenshotSettings.get();
        for (const item of data) {
            screenshots.set(this.#calculateKey(item.recordingName, item.index), item);
        }
        return screenshots;
    }
    #syncWithSettings(modifiedScreenshot) {
        if (modifiedScreenshot) {
            const key = this.#calculateKey(modifiedScreenshot.recordingName, modifiedScreenshot.index);
            // Make sure that the modified screenshot is moved to the end of the map
            // as the JS Map remembers the original insertion order of the keys.
            this.#screenshots.delete(key);
            this.#screenshots.set(key, modifiedScreenshot);
        }
        const screenshots = [];
        let currentStorageSize = 0;
        // Take screenshots from the end of the list until the size constraint is met.
        for (const [key, screenshot] of Array
            .from(this.#screenshots.entries())
            .reverse()) {
            if (currentStorageSize < this.#maxStorageSize) {
                currentStorageSize += screenshot.data.length;
                screenshots.push(screenshot);
            }
            else {
                // Delete all screenshots that exceed the storage limit.
                this.#screenshots.delete(key);
            }
        }
        this.#screenshotSettings.set(screenshots.reverse());
    }
    static instance(opts = { forceNew: null, maxStorageSize: DEFAULT_MAX_STORAGE_SIZE }) {
        const { forceNew, maxStorageSize } = opts;
        if (!instance || forceNew) {
            instance = new ScreenshotStorage(maxStorageSize);
        }
        return instance;
    }
}
//# sourceMappingURL=ScreenshotStorage.js.map

/***/ })

}]);