"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_models_js"],{

/***/ "./panels/recorder/models/ConverterIds.js":
/*!************************************************!*\
  !*** ./panels/recorder/models/ConverterIds.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=ConverterIds.js.map

/***/ }),

/***/ "./panels/recorder/models/RecorderSettings.js":
/*!****************************************************!*\
  !*** ./panels/recorder/models/RecorderSettings.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderSettings: () => (/* binding */ RecorderSettings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



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
    #selectorAttribute = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-selector-attribute', '');
    #speed = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-speed', "normal" /* PlayRecordingSpeed.Normal */);
    #replayExtension = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-extension', '');
    #selectorTypes = new Map();
    #preferredCopyFormat = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-preferred-copy-format', "json" /* ConverterIds.JSON */);
    constructor() {
        for (const selectorType of Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType)) {
            this.#selectorTypes.set(selectorType, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting(`recorder-${selectorType}-selector-enabled`, true));
        }
    }
    get selectorAttribute() {
        return this.#selectorAttribute.get();
    }
    set selectorAttribute(value) {
        this.#selectorAttribute.set(value);
    }
    get speed() {
        return this.#speed.get();
    }
    set speed(speed) {
        this.#speed.set(speed);
    }
    get replayExtension() {
        return this.#replayExtension.get();
    }
    set replayExtension(replayExtension) {
        this.#replayExtension.set(replayExtension);
    }
    get defaultTitle() {
        const now = new Date();
        return i18nString(UIStrings.defaultRecordingName, {
            DATE: now.toLocaleDateString(),
            TIME: now.toLocaleTimeString(),
        });
    }
    get defaultSelectors() {
        return Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType)
            .filter(type => this.getSelectorByType(type));
    }
    getSelectorByType(type) {
        return this.#selectorTypes.get(type)?.get();
    }
    setSelectorByType(type, value) {
        this.#selectorTypes.get(type)?.set(value);
    }
    get preferredCopyFormat() {
        return this.#preferredCopyFormat.get();
    }
    set preferredCopyFormat(value) {
        this.#preferredCopyFormat.set(value);
    }
}
//# sourceMappingURL=RecorderSettings.js.map

/***/ }),

/***/ "./panels/recorder/models/RecorderShortcutHelper.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/models/RecorderShortcutHelper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderShortcutHelper: () => (/* binding */ RecorderShortcutHelper)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class RecorderShortcutHelper {
    #abortController;
    #timeoutId = null;
    #timeout;
    constructor(timeout = 200) {
        this.#timeout = timeout;
        this.#abortController = new AbortController();
    }
    #cleanInternals() {
        this.#abortController.abort();
        if (this.#timeoutId) {
            clearTimeout(this.#timeoutId);
        }
        this.#abortController = new AbortController();
    }
    #handleCallback(callback) {
        this.#cleanInternals();
        void callback();
    }
    handleShortcut(callback) {
        this.#cleanInternals();
        document.addEventListener('keyup', event => {
            if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                this.#handleCallback(callback);
            }
        }, { signal: this.#abortController.signal });
        this.#timeoutId = setTimeout(() => this.#handleCallback(callback), this.#timeout);
    }
}
//# sourceMappingURL=RecorderShortcutHelper.js.map

/***/ }),

/***/ "./panels/recorder/models/RecordingSettings.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/models/RecordingSettings.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=RecordingSettings.js.map

/***/ }),

/***/ "./panels/recorder/models/RecordingStorage.js":
/*!****************************************************!*\
  !*** ./panels/recorder/models/RecordingStorage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecordingStorage: () => (/* binding */ RecordingStorage)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let instance = null;
class UUIDGenerator {
    next() {
        // @ts-ignore
        return crypto.randomUUID();
    }
}
class RecordingStorage {
    #recordingsSetting;
    #mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    #idGenerator = new UUIDGenerator();
    constructor() {
        this.#recordingsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-recordings-ng', []);
    }
    clearForTest() {
        this.#recordingsSetting.set([]);
        this.#idGenerator = new UUIDGenerator();
    }
    setIdGeneratorForTest(idGenerator) {
        this.#idGenerator = idGenerator;
    }
    async saveRecording(flow) {
        const release = await this.#mutex.acquire();
        try {
            const recordings = await this.#recordingsSetting.forceGet();
            const storageName = this.#idGenerator.next();
            const recording = { storageName, flow };
            recordings.push(recording);
            this.#recordingsSetting.set(recordings);
            return recording;
        }
        finally {
            release();
        }
    }
    async updateRecording(storageName, flow) {
        const release = await this.#mutex.acquire();
        try {
            const recordings = await this.#recordingsSetting.forceGet();
            const recording = recordings.find(recording => recording.storageName === storageName);
            if (!recording) {
                throw new Error('No recording is found during updateRecording');
            }
            recording.flow = flow;
            this.#recordingsSetting.set(recordings);
            return recording;
        }
        finally {
            release();
        }
    }
    async deleteRecording(storageName) {
        const release = await this.#mutex.acquire();
        try {
            const recordings = await this.#recordingsSetting.forceGet();
            this.#recordingsSetting.set(recordings.filter(recording => recording.storageName !== storageName));
        }
        finally {
            release();
        }
    }
    getRecording(storageName) {
        const recordings = this.#recordingsSetting.get();
        return recordings.find(recording => recording.storageName === storageName);
    }
    getRecordings() {
        return this.#recordingsSetting.get();
    }
    static instance() {
        if (!instance) {
            instance = new RecordingStorage();
        }
        return instance;
    }
}
//# sourceMappingURL=RecordingStorage.js.map

/***/ }),

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

/***/ }),

/***/ "./panels/recorder/models/ScreenshotUtils.js":
/*!***************************************************!*\
  !*** ./panels/recorder/models/ScreenshotUtils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resizeScreenshot: () => (/* binding */ resizeScreenshot),
/* harmony export */   takeScreenshot: () => (/* binding */ takeScreenshot)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
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
//# sourceMappingURL=ScreenshotUtils.js.map

/***/ }),

/***/ "./panels/recorder/models/Section.js":
/*!*******************************************!*\
  !*** ./panels/recorder/models/Section.js ***!
  \*******************************************/
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
//# sourceMappingURL=Section.js.map

/***/ }),

/***/ "./panels/recorder/models/Tooltip.js":
/*!*******************************************!*\
  !*** ./panels/recorder/models/Tooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTooltipForActions: () => (/* binding */ getTooltipForActions)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
//# sourceMappingURL=Tooltip.js.map

/***/ }),

/***/ "./panels/recorder/models/models.js":
/*!******************************************!*\
  !*** ./panels/recorder/models/models.js ***!
  \******************************************/
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
/* harmony import */ var _ConverterIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConverterIds.js */ "./panels/recorder/models/ConverterIds.js");
/* harmony import */ var _RecorderSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderSettings.js */ "./panels/recorder/models/RecorderSettings.js");
/* harmony import */ var _RecorderShortcutHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderShortcutHelper.js */ "./panels/recorder/models/RecorderShortcutHelper.js");
/* harmony import */ var _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingPlayer.js */ "./panels/recorder/models/RecordingPlayer.js");
/* harmony import */ var _RecordingSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecordingSession.js */ "./panels/recorder/models/RecordingSession.js");
/* harmony import */ var _RecordingSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RecordingSettings.js */ "./panels/recorder/models/RecordingSettings.js");
/* harmony import */ var _RecordingStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecordingStorage.js */ "./panels/recorder/models/RecordingStorage.js");
/* harmony import */ var _Schema_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */ var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SchemaUtils.js */ "./panels/recorder/models/SchemaUtils.js");
/* harmony import */ var _ScreenshotStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScreenshotStorage.js */ "./panels/recorder/models/ScreenshotStorage.js");
/* harmony import */ var _ScreenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScreenshotUtils.js */ "./panels/recorder/models/ScreenshotUtils.js");
/* harmony import */ var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDKUtils.js */ "./panels/recorder/models/SDKUtils.js");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Section.js */ "./panels/recorder/models/Section.js");
/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip.js */ "./panels/recorder/models/Tooltip.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















//# sourceMappingURL=models.js.map

/***/ })

}]);