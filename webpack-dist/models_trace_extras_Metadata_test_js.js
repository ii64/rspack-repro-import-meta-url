"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_extras_Metadata_test_js"],{

/***/ "./models/trace/extras/Metadata.test.js":
/*!**********************************************!*\
  !*** ./models/trace/extras/Metadata.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('Trace Metadata', () => {
    it('returns the associated metadata', async () => {
        const cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({ forceNew: true });
        sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(true);
        sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency').returns(Promise.resolve(1));
        sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({ forceNew: true });
        sinon.stub(networkManager, 'networkConditions').returns({
            title: 'Slow 3G',
            download: 1,
            upload: 1,
            latency: 1,
        });
        const metadata = await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false);
        assert.deepEqual(metadata, {
            source: 'DevTools',
            startTime: undefined,
            cpuThrottling: 2,
            networkThrottling: 'Slow 3G',
            dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */,
            hardwareConcurrency: 1,
        });
    });
    it('calls the title function if the network condition title is a function', async () => {
        const cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({ forceNew: true });
        sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(true);
        sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency').returns(Promise.resolve(1));
        sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({ forceNew: true });
        sinon.stub(networkManager, 'networkConditions').returns({
            title: () => 'Slow 3G',
            download: 1,
            upload: 1,
            latency: 1,
        });
        const metadata = await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false);
        assert.deepEqual(metadata, {
            source: 'DevTools',
            startTime: undefined,
            cpuThrottling: 2,
            networkThrottling: 'Slow 3G',
            dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */,
            hardwareConcurrency: 1,
        });
    });
    it('does not return hardware concurrency if the manager has no target', async () => {
        const cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({ forceNew: true });
        sinon.stub(cpuThrottlingManager, 'hasPrimaryPageTargetSet').returns(false);
        const getHardwareConcurrencyStub = sinon.stub(cpuThrottlingManager, 'getHardwareConcurrency');
        sinon.stub(cpuThrottlingManager, 'cpuThrottlingRate').returns(2);
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.MultitargetNetworkManager.instance({ forceNew: true });
        sinon.stub(networkManager, 'networkConditions').returns({
            title: () => 'Slow 3G',
            download: 1,
            upload: 1,
            latency: 1,
        });
        const metadata = await _trace_js__WEBPACK_IMPORTED_MODULE_2__.Extras.Metadata.forNewRecording(/* isCpuProfile= */ false);
        assert.deepEqual(metadata, {
            source: 'DevTools',
            startTime: undefined,
            cpuThrottling: 2,
            networkThrottling: 'Slow 3G',
            dataOrigin: "TraceEvents" /* TraceEngine.Types.File.DataOrigin.TraceEvents */,
            hardwareConcurrency: undefined,
        });
        assert.strictEqual(getHardwareConcurrencyStub.callCount, 0);
    });
});
//# sourceMappingURL=Metadata.test.js.map

/***/ })

}]);