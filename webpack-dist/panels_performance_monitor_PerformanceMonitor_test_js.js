"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_performance_monitor_PerformanceMonitor_test_js"],{

/***/ "./panels/performance_monitor/PerformanceMonitor.test.js":
/*!***************************************************************!*\
  !*** ./panels/performance_monitor/PerformanceMonitor.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _performance_monitor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance_monitor.js */ "./panels/performance_monitor/performance_monitor.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('PerformanceMonitor', () => {
    let target;
    let performanceMonitor;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    afterEach(() => {
        performanceMonitor.detach();
    });
    it('updates metrics', async () => {
        const getMetrics = sinon.stub(target.performanceAgent(), 'invoke_getMetrics');
        performanceMonitor = new _performance_monitor_js__WEBPACK_IMPORTED_MODULE_4__.PerformanceMonitor.PerformanceMonitorImpl(0);
        performanceMonitor.markAsRoot();
        performanceMonitor.show(document.body);
        assert.isFalse([...performanceMonitor.contentElement.querySelectorAll('.perfmon-indicator-value')].some(e => e.textContent));
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCall)(getMetrics, { fakeFn: () => Promise.resolve({ metrics: [{ name: 'LayoutCount', value: 42 }] }) });
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCall)(getMetrics, { fakeFn: () => Promise.resolve({ metrics: [{ name: 'LayoutCount', value: 84 }] }) });
        assert.isTrue([...performanceMonitor.contentElement.querySelectorAll('.perfmon-indicator-value')].some(e => e.textContent));
    });
});
//# sourceMappingURL=PerformanceMonitor.test.js.map

/***/ }),

/***/ "./panels/performance_monitor/performance_monitor.js":
/*!***********************************************************!*\
  !*** ./panels/performance_monitor/performance_monitor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerformanceMonitor: () => (/* reexport module object */ _PerformanceMonitor_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _PerformanceMonitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceMonitor.js */ "./panels/performance_monitor/PerformanceMonitor.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=performance_monitor.js.map

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ })

}]);