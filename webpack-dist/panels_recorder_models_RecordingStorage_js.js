"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecordingStorage_js"],{

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

/***/ })

}]);