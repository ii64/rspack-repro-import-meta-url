"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_MediaQueryInspector_test_ts"],{

/***/ "./src/panels/emulation/MediaQueryInspector.test.ts":
/*!**********************************************************!*\
  !*** ./src/panels/emulation/MediaQueryInspector.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _emulation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emulation.js */ "./src/panels/emulation/emulation.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('MediaQueryInspector', () => {
    let target;
    let throttler;
    let inspector;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
    });
    afterEach(() => {
        inspector.detach();
    });
    it('redners media queries', async () => {
        inspector = new _emulation_js__WEBPACK_IMPORTED_MODULE_6__.MediaQueryInspector.MediaQueryInspector(() => 42, (_) => { }, throttler);
        inspector.markAsRoot();
        inspector.show(document.body);
        assert.strictEqual(inspector.contentElement.querySelectorAll('.media-inspector-marker').length, 0);
        const cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const CSS_MEDIA = {
            text: 'foo',
            source: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSMediaSource.MediaRule,
            mediaList: [{ expressions: [{ value: 42, computedLength: 42, unit: 'UNIT', feature: 'max-width' }], active: true }],
        };
        sinon.stub(cssModel, 'getMediaQueries').resolves([new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMedia.CSSMedia(cssModel, CSS_MEDIA)]);
        const workScheduled = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(sinon.stub(throttler, 'schedule'));
        cssModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetAdded, {});
        const [work] = await workScheduled;
        await work();
        assert.strictEqual(inspector.contentElement.querySelectorAll('.media-inspector-marker').length, 1);
    });
});


/***/ }),

/***/ "./src/panels/emulation/emulation.ts":
/*!*******************************************!*\
  !*** ./src/panels/emulation/emulation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedApp: () => (/* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DeviceModeToolbar: () => (/* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   DeviceModeView: () => (/* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   DeviceModeWrapper: () => (/* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   InspectedPagePlaceholder: () => (/* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   MediaQueryInspector: () => (/* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./src/panels/emulation/AdvancedApp.ts");
/* harmony import */ var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./src/panels/emulation/InspectedPagePlaceholder.ts");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./src/panels/emulation/MediaQueryInspector.ts");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./src/panels/emulation/DeviceModeToolbar.ts");
/* harmony import */ var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./src/panels/emulation/DeviceModeView.ts");
/* harmony import */ var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./src/panels/emulation/DeviceModeWrapper.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
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


/***/ })

}]);