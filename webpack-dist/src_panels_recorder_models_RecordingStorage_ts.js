"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_RecordingStorage_ts"],{

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


/***/ })

}]);