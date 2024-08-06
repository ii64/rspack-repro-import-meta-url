"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_screenshot-storage_test_js"],{

/***/ "./panels/recorder/models/screenshot-storage.test.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/models/screenshot-storage.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let instance;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ScreenshotStorage', () => {
    beforeEach(() => {
        instance = _models_js__WEBPACK_IMPORTED_MODULE_2__.ScreenshotStorage.ScreenshotStorage.instance();
        instance.clear();
    });
    it('should return null if no screenshot has been stored for the given index', () => {
        const imageData = instance.getScreenshotForSection('recording-1', 1);
        assert.isNull(imageData);
    });
    it('should return the stored image data when a screenshot has been stored for the given index', () => {
        const imageData = 'data:image/jpeg;base64,...';
        instance.storeScreenshotForSection('recording-1', 1, imageData);
        const retrievedImageData = instance.getScreenshotForSection('recording-1', 1);
        assert.strictEqual(retrievedImageData, imageData);
    });
    it('should load previous screenshots from settings', () => {
        const imageData = 'data:image/jpeg;base64,...';
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-screenshots', []);
        setting.set([{ recordingName: 'recording-1', index: 1, data: imageData }]);
        const screenshotStorage = _models_js__WEBPACK_IMPORTED_MODULE_2__.ScreenshotStorage.ScreenshotStorage.instance({ forceNew: true });
        const retrievedImageData = screenshotStorage.getScreenshotForSection('recording-1', 1);
        assert.strictEqual(retrievedImageData, imageData);
    });
    it('should sync screenshots to settings', () => {
        const imageData = 'data:image/jpeg;base64,...';
        instance.storeScreenshotForSection('recording-1', 1, imageData);
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-screenshots', []);
        const value = setting.get();
        assert.strictEqual(value.length, 1);
        assert.strictEqual(value[0].index, 1);
        assert.strictEqual(value[0].data, imageData);
    });
    it('should limit the amount of stored screenshots', () => {
        const screenshotStorage = _models_js__WEBPACK_IMPORTED_MODULE_2__.ScreenshotStorage.ScreenshotStorage.instance({
            forceNew: true,
            maxStorageSize: 2,
        });
        screenshotStorage.storeScreenshotForSection('recording-1', 1, '1');
        screenshotStorage.storeScreenshotForSection('recording-1', 2, '2');
        screenshotStorage.storeScreenshotForSection('recording-1', 3, '3');
        const imageData1 = screenshotStorage.getScreenshotForSection('recording-1', 1);
        const imageData2 = screenshotStorage.getScreenshotForSection('recording-1', 2);
        const imageData3 = screenshotStorage.getScreenshotForSection('recording-1', 3);
        assert.isNull(imageData1);
        assert.isNotNull(imageData2);
        assert.isNotNull(imageData3);
    });
    it('should drop the oldest screenshots first', () => {
        const screenshotStorage = _models_js__WEBPACK_IMPORTED_MODULE_2__.ScreenshotStorage.ScreenshotStorage.instance({
            forceNew: true,
            maxStorageSize: 2,
        });
        screenshotStorage.storeScreenshotForSection('recording-1', 1, '1');
        screenshotStorage.storeScreenshotForSection('recording-1', 2, '2');
        screenshotStorage.getScreenshotForSection('recording-1', 1);
        screenshotStorage.storeScreenshotForSection('recording-1', 3, '3');
        const imageData1 = screenshotStorage.getScreenshotForSection('recording-1', 1);
        const imageData2 = screenshotStorage.getScreenshotForSection('recording-1', 2);
        const imageData3 = screenshotStorage.getScreenshotForSection('recording-1', 3);
        assert.isNotNull(imageData1);
        assert.isNull(imageData2);
        assert.isNotNull(imageData3);
    });
    it('should namespace the screenshots by recording name', () => {
        const imageData = 'data:image/jpeg;base64,...';
        instance.storeScreenshotForSection('recording-1', 1, imageData);
        const storedImageData = instance.getScreenshotForSection('recording-2', 1);
        assert.isNull(storedImageData);
    });
    it('should delete screenshots by recording name', () => {
        const imageData = 'data:image/jpeg;base64,...';
        instance.storeScreenshotForSection('recording-1', 1, imageData);
        const storedImageData = instance.getScreenshotForSection('recording-2', 1);
        assert.isNull(storedImageData);
    });
});
//# sourceMappingURL=screenshot-storage.test.js.map

/***/ })

}]);