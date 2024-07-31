"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_models_ts"],{

/***/ "./src/panels/recorder/models/ConverterIds.ts":
/*!****************************************************!*\
  !*** ./src/panels/recorder/models/ConverterIds.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConverterIds: () => (/* binding */ ConverterIds)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ConverterIds;
(function (ConverterIds) {
    ConverterIds["JSON"] = "json";
    ConverterIds["Puppeteer"] = "puppeteer";
    ConverterIds["Replay"] = "@puppeteer/replay";
    ConverterIds["Lighthouse"] = "lighthouse";
})(ConverterIds || (ConverterIds = {}));


/***/ }),

/***/ "./src/panels/recorder/models/RecorderSettings.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/models/RecorderSettings.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderSettings: () => (/* binding */ RecorderSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ConverterIds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConverterIds.js */ "./src/panels/recorder/models/ConverterIds.ts");
/* harmony import */ var _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingPlayer.js */ "./src/panels/recorder/models/RecordingPlayer.ts");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RecorderSettings_selectorAttribute, _RecorderSettings_speed, _RecorderSettings_replayExtension, _RecorderSettings_selectorTypes, _RecorderSettings_preferredCopyFormat;





const UIStrings = {
    /**
     * @description This string is used to generate the default name for the create recording form in the Recording panel.
     * The format is similar to the one used by MacOS to generate names for screenshots. Both {DATE} and {TIME} are localized
     * using the current locale.
     *
     * @example {2022-08-04} DATE
     * @example {10:32:48} TIME
     */
    defaultRecordingName: 'Recording {DATE} at {TIME}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/models/RecorderSettings.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class RecorderSettings {
    constructor() {
        _RecorderSettings_selectorAttribute.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-selector-attribute', ''));
        _RecorderSettings_speed.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-speed', _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__.PlayRecordingSpeed.Normal));
        _RecorderSettings_replayExtension.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-extension', ''));
        _RecorderSettings_selectorTypes.set(this, new Map());
        _RecorderSettings_preferredCopyFormat.set(this, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-preferred-copy-format', _ConverterIds_js__WEBPACK_IMPORTED_MODULE_2__.ConverterIds.JSON));
        for (const selectorType of Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_4__.SelectorType)) {
            __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").set(selectorType, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting(`recorder-${selectorType}-selector-enabled`, true));
        }
    }
    get selectorAttribute() {
        return __classPrivateFieldGet(this, _RecorderSettings_selectorAttribute, "f").get();
    }
    set selectorAttribute(value) {
        __classPrivateFieldGet(this, _RecorderSettings_selectorAttribute, "f").set(value);
    }
    get speed() {
        return __classPrivateFieldGet(this, _RecorderSettings_speed, "f").get();
    }
    set speed(speed) {
        __classPrivateFieldGet(this, _RecorderSettings_speed, "f").set(speed);
    }
    get replayExtension() {
        return __classPrivateFieldGet(this, _RecorderSettings_replayExtension, "f").get();
    }
    set replayExtension(replayExtension) {
        __classPrivateFieldGet(this, _RecorderSettings_replayExtension, "f").set(replayExtension);
    }
    get defaultTitle() {
        const now = new Date();
        return i18nString(UIStrings.defaultRecordingName, {
            DATE: now.toLocaleDateString(),
            TIME: now.toLocaleTimeString(),
        });
    }
    get defaultSelectors() {
        return Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_4__.SelectorType)
            .filter(type => this.getSelectorByType(type));
    }
    getSelectorByType(type) {
        return __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").get(type)?.get();
    }
    setSelectorByType(type, value) {
        __classPrivateFieldGet(this, _RecorderSettings_selectorTypes, "f").get(type)?.set(value);
    }
    get preferredCopyFormat() {
        return __classPrivateFieldGet(this, _RecorderSettings_preferredCopyFormat, "f").get();
    }
    set preferredCopyFormat(value) {
        __classPrivateFieldGet(this, _RecorderSettings_preferredCopyFormat, "f").set(value);
    }
}
_RecorderSettings_selectorAttribute = new WeakMap(), _RecorderSettings_speed = new WeakMap(), _RecorderSettings_replayExtension = new WeakMap(), _RecorderSettings_selectorTypes = new WeakMap(), _RecorderSettings_preferredCopyFormat = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/models/RecorderShortcutHelper.ts":
/*!**************************************************************!*\
  !*** ./src/panels/recorder/models/RecorderShortcutHelper.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderShortcutHelper: () => (/* binding */ RecorderShortcutHelper)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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
var _RecorderShortcutHelper_instances, _RecorderShortcutHelper_abortController, _RecorderShortcutHelper_timeoutId, _RecorderShortcutHelper_timeout, _RecorderShortcutHelper_cleanInternals, _RecorderShortcutHelper_handleCallback;

class RecorderShortcutHelper {
    constructor(timeout = 200) {
        _RecorderShortcutHelper_instances.add(this);
        _RecorderShortcutHelper_abortController.set(this, void 0);
        _RecorderShortcutHelper_timeoutId.set(this, null);
        _RecorderShortcutHelper_timeout.set(this, void 0);
        __classPrivateFieldSet(this, _RecorderShortcutHelper_timeout, timeout, "f");
        __classPrivateFieldSet(this, _RecorderShortcutHelper_abortController, new AbortController(), "f");
    }
    handleShortcut(callback) {
        __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_cleanInternals).call(this);
        document.addEventListener('keyup', event => {
            if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_handleCallback).call(this, callback);
            }
        }, { signal: __classPrivateFieldGet(this, _RecorderShortcutHelper_abortController, "f").signal });
        __classPrivateFieldSet(this, _RecorderShortcutHelper_timeoutId, setTimeout(() => __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_handleCallback).call(this, callback), __classPrivateFieldGet(this, _RecorderShortcutHelper_timeout, "f")), "f");
    }
}
_RecorderShortcutHelper_abortController = new WeakMap(), _RecorderShortcutHelper_timeoutId = new WeakMap(), _RecorderShortcutHelper_timeout = new WeakMap(), _RecorderShortcutHelper_instances = new WeakSet(), _RecorderShortcutHelper_cleanInternals = function _RecorderShortcutHelper_cleanInternals() {
    __classPrivateFieldGet(this, _RecorderShortcutHelper_abortController, "f").abort();
    if (__classPrivateFieldGet(this, _RecorderShortcutHelper_timeoutId, "f")) {
        clearTimeout(__classPrivateFieldGet(this, _RecorderShortcutHelper_timeoutId, "f"));
    }
    __classPrivateFieldSet(this, _RecorderShortcutHelper_abortController, new AbortController(), "f");
}, _RecorderShortcutHelper_handleCallback = function _RecorderShortcutHelper_handleCallback(callback) {
    __classPrivateFieldGet(this, _RecorderShortcutHelper_instances, "m", _RecorderShortcutHelper_cleanInternals).call(this);
    void callback();
};


/***/ }),

/***/ "./src/panels/recorder/models/RecordingSettings.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/models/RecordingSettings.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/recorder/models/RecordingStorage.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/models/RecordingStorage.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingStorage: () => (/* binding */ RecordingStorage)
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
var _RecordingStorage_recordingsSetting, _RecordingStorage_mutex, _RecordingStorage_idGenerator;

let instance = null;
class UUIDGenerator {
    next() {
        // @ts-ignore
        return crypto.randomUUID();
    }
}
class RecordingStorage {
    constructor() {
        _RecordingStorage_recordingsSetting.set(this, void 0);
        _RecordingStorage_mutex.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex());
        _RecordingStorage_idGenerator.set(this, new UUIDGenerator());
        __classPrivateFieldSet(this, _RecordingStorage_recordingsSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-recordings-ng', []), "f");
    }
    clearForTest() {
        __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").set([]);
        __classPrivateFieldSet(this, _RecordingStorage_idGenerator, new UUIDGenerator(), "f");
    }
    setIdGeneratorForTest(idGenerator) {
        __classPrivateFieldSet(this, _RecordingStorage_idGenerator, idGenerator, "f");
    }
    async saveRecording(flow) {
        const release = await __classPrivateFieldGet(this, _RecordingStorage_mutex, "f").acquire();
        try {
            const recordings = await __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").forceGet();
            const storageName = __classPrivateFieldGet(this, _RecordingStorage_idGenerator, "f").next();
            const recording = { storageName, flow };
            recordings.push(recording);
            __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").set(recordings);
            return recording;
        }
        finally {
            release();
        }
    }
    async updateRecording(storageName, flow) {
        const release = await __classPrivateFieldGet(this, _RecordingStorage_mutex, "f").acquire();
        try {
            const recordings = await __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").forceGet();
            const recording = recordings.find(recording => recording.storageName === storageName);
            if (!recording) {
                throw new Error('No recording is found during updateRecording');
            }
            recording.flow = flow;
            __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").set(recordings);
            return recording;
        }
        finally {
            release();
        }
    }
    async deleteRecording(storageName) {
        const release = await __classPrivateFieldGet(this, _RecordingStorage_mutex, "f").acquire();
        try {
            const recordings = await __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").forceGet();
            __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").set(recordings.filter(recording => recording.storageName !== storageName));
        }
        finally {
            release();
        }
    }
    getRecording(storageName) {
        const recordings = __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").get();
        return recordings.find(recording => recording.storageName === storageName);
    }
    getRecordings() {
        return __classPrivateFieldGet(this, _RecordingStorage_recordingsSetting, "f").get();
    }
    static instance() {
        if (!instance) {
            instance = new RecordingStorage();
        }
        return instance;
    }
}
_RecordingStorage_recordingsSetting = new WeakMap(), _RecordingStorage_mutex = new WeakMap(), _RecordingStorage_idGenerator = new WeakMap();


/***/ }),

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


/***/ }),

/***/ "./src/panels/recorder/models/ScreenshotUtils.ts":
/*!*******************************************************!*\
  !*** ./src/panels/recorder/models/ScreenshotUtils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeScreenshot: () => (/* binding */ resizeScreenshot),
/* harmony export */   takeScreenshot: () => (/* binding */ takeScreenshot)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const SCREENSHOT_WIDTH = 160; // px
const SCREENSHOT_MAX_HEIGHT = 240; // px
async function captureScreenshot() {
    const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
    if (!mainTarget) {
        throw new Error('Could not find main target');
    }
    const { data } = await mainTarget.pageAgent().invoke_captureScreenshot({});
    if (!data) {
        // 1x1 px empty image.
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
    return ('data:image/png;base64,' + data);
}
async function resizeScreenshot(data) {
    const img = new Image();
    const promise = new Promise(resolve => {
        img.onload = resolve;
    });
    img.src = data;
    await promise;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Could not create context.');
    }
    const aspectRatio = img.width / img.height;
    canvas.width = SCREENSHOT_WIDTH;
    canvas.height = Math.min(SCREENSHOT_MAX_HEIGHT, SCREENSHOT_WIDTH / aspectRatio);
    const bitmap = await createImageBitmap(img, {
        resizeWidth: SCREENSHOT_WIDTH,
        resizeQuality: 'high',
    });
    context.drawImage(bitmap, 0, 0);
    return canvas.toDataURL('image/png');
}
async function takeScreenshot() {
    const data = await captureScreenshot();
    return await resizeScreenshot(data);
}


/***/ }),

/***/ "./src/panels/recorder/models/Section.ts":
/*!***********************************************!*\
  !*** ./src/panels/recorder/models/Section.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSections: () => (/* binding */ buildSections)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function startNewSection(step) {
    const navigationEvent = step.assertedEvents?.find(event => event.type === 'navigation');
    if (step.type === 'navigate') {
        return {
            title: navigationEvent?.title || '',
            url: step.url,
            steps: [],
            causingStep: step,
        };
    }
    if (navigationEvent) {
        return {
            title: navigationEvent.title || '',
            url: navigationEvent.url || '',
            steps: [],
        };
    }
    return null;
}
function buildSections(steps) {
    let currentSection = null;
    const sections = [];
    for (const step of steps) {
        if (currentSection) {
            currentSection.steps.push(step);
        }
        else if (step.type === 'navigate') {
            currentSection = startNewSection(step);
            continue;
        }
        else {
            currentSection = { title: 'Current page', url: '', steps: [step] };
        }
        const nextSection = startNewSection(step);
        if (nextSection) {
            if (currentSection) {
                sections.push(currentSection);
            }
            currentSection = nextSection;
        }
    }
    if (currentSection && (!sections.length || currentSection.steps.length)) {
        sections.push(currentSection);
    }
    return sections;
}


/***/ }),

/***/ "./src/panels/recorder/models/Tooltip.ts":
/*!***********************************************!*\
  !*** ./src/panels/recorder/models/Tooltip.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTooltipForActions: () => (/* binding */ getTooltipForActions)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getTooltipForActions(translation, action) {
    let title = translation;
    const shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
    for (const shortcut of shortcuts) {
        title += ` - ${shortcut.title()}`;
    }
    return title;
}


/***/ }),

/***/ "./src/panels/recorder/models/models.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/models/models.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConverterIds: () => (/* reexport module object */ _ConverterIds_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   RecorderSettings: () => (/* reexport module object */ _RecorderSettings_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RecorderShortcutHelper: () => (/* reexport module object */ _RecorderShortcutHelper_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RecordingPlayer: () => (/* reexport module object */ _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   RecordingSession: () => (/* reexport module object */ _RecordingSession_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   RecordingSettings: () => (/* reexport module object */ _RecordingSettings_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   RecordingStorage: () => (/* reexport module object */ _RecordingStorage_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   SDKUtils: () => (/* reexport module object */ _SDKUtils_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   Schema: () => (/* reexport module object */ _Schema_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   SchemaUtils: () => (/* reexport module object */ _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ScreenshotStorage: () => (/* reexport module object */ _ScreenshotStorage_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   ScreenshotUtils: () => (/* reexport module object */ _ScreenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   Section: () => (/* reexport module object */ _Section_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   Tooltip: () => (/* reexport module object */ _Tooltip_js__WEBPACK_IMPORTED_MODULE_13__)
/* harmony export */ });
/* harmony import */ var _ConverterIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConverterIds.js */ "./src/panels/recorder/models/ConverterIds.ts");
/* harmony import */ var _RecorderSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderSettings.js */ "./src/panels/recorder/models/RecorderSettings.ts");
/* harmony import */ var _RecorderShortcutHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderShortcutHelper.js */ "./src/panels/recorder/models/RecorderShortcutHelper.ts");
/* harmony import */ var _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingPlayer.js */ "./src/panels/recorder/models/RecordingPlayer.ts");
/* harmony import */ var _RecordingSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecordingSession.js */ "./src/panels/recorder/models/RecordingSession.ts");
/* harmony import */ var _RecordingSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RecordingSettings.js */ "./src/panels/recorder/models/RecordingSettings.ts");
/* harmony import */ var _RecordingStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecordingStorage.js */ "./src/panels/recorder/models/RecordingStorage.ts");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Schema.js */ "./src/panels/recorder/models/Schema.ts");
/* harmony import */ var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SchemaUtils.js */ "./src/panels/recorder/models/SchemaUtils.ts");
/* harmony import */ var _ScreenshotStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScreenshotStorage.js */ "./src/panels/recorder/models/ScreenshotStorage.ts");
/* harmony import */ var _ScreenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScreenshotUtils.js */ "./src/panels/recorder/models/ScreenshotUtils.ts");
/* harmony import */ var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDKUtils.js */ "./src/panels/recorder/models/SDKUtils.ts");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Section.js */ "./src/panels/recorder/models/Section.ts");
/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip.js */ "./src/panels/recorder/models/Tooltip.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















/***/ })

}]);