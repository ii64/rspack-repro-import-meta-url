"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_recording-storage_test_ts"],{

/***/ "./src/panels/recorder/models/recording-storage.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/recorder/models/recording-storage.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('RecordingStorage', () => {
    var _MockIdGenerator_id;
    beforeEach(() => {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    after(() => {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    class MockIdGenerator {
        constructor() {
            _MockIdGenerator_id.set(this, 1);
        }
        next() {
            var _a;
            const result = `recording_${__classPrivateFieldGet(this, _MockIdGenerator_id, "f")}`;
            __classPrivateFieldSet(this, _MockIdGenerator_id, (_a = __classPrivateFieldGet(this, _MockIdGenerator_id, "f"), _a++, _a), "f");
            return result;
        }
    }
    _MockIdGenerator_id = new WeakMap();
    it('should create and retrieve recordings', async () => {
        const storage = _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance();
        storage.setIdGeneratorForTest(new MockIdGenerator());
        const flow1 = { title: 'Test1', steps: [] };
        const flow2 = { title: 'Test2', steps: [] };
        const flow3 = { title: 'Test3', steps: [] };
        assert.deepEqual(await storage.saveRecording(flow1), {
            storageName: 'recording_1',
            flow: flow1,
        });
        assert.deepEqual(await storage.saveRecording(flow2), {
            storageName: 'recording_2',
            flow: flow2,
        });
        assert.deepEqual(await storage.getRecordings(), [
            { storageName: 'recording_1', flow: flow1 },
            { storageName: 'recording_2', flow: flow2 },
        ]);
        assert.deepEqual(await storage.getRecording('recording_2'), {
            storageName: 'recording_2',
            flow: flow2,
        });
        assert.deepEqual(await storage.getRecording('recording_3'), undefined);
        assert.deepEqual(await storage.updateRecording('recording_2', flow3), {
            storageName: 'recording_2',
            flow: flow3,
        });
        assert.deepEqual(await storage.getRecording('recording_2'), {
            storageName: 'recording_2',
            flow: flow3,
        });
        await storage.deleteRecording('recording_2');
        assert.deepEqual(await storage.getRecordings(), [
            { storageName: 'recording_1', flow: flow1 },
        ]);
    });
});


/***/ })

}]);