"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_recording-storage_test_js"],{

/***/ "./panels/recorder/models/recording-storage.test.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/models/recording-storage.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('RecordingStorage', () => {
    beforeEach(() => {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    after(() => {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    class MockIdGenerator {
        #id = 1;
        next() {
            const result = `recording_${this.#id}`;
            this.#id++;
            return result;
        }
    }
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
//# sourceMappingURL=recording-storage.test.js.map

/***/ })

}]);