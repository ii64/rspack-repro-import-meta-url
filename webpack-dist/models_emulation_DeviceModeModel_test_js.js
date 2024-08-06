"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_emulation_DeviceModeModel_test_js"],{

/***/ "./models/emulation/DeviceModeModel.test.js":
/*!**************************************************!*\
  !*** ./models/emulation/DeviceModeModel.test.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emulation/emulation.js */ "./models/emulation/emulation.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





describe('Insets', () => {
    it('can be instantiated without issues', () => {
        const insets = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Insets(1, 2, 3, 4);
        assert.strictEqual(insets.left, 1, 'left value was not set correctly');
        assert.strictEqual(insets.top, 2, 'top value was not set correctly');
        assert.strictEqual(insets.right, 3, 'right value was not set correctly');
        assert.strictEqual(insets.bottom, 4, 'bottom value was not set correctly');
    });
    it('is able to check if it is equal to another Insets', () => {
        const insets1 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Insets(1, 2, 3, 4);
        const insets2 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Insets(5, 6, 7, 7);
        const insets3 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Insets(1, 2, 3, 4);
        const result1 = insets1.isEqual(insets2);
        const result2 = insets1.isEqual(insets3);
        assert.isFalse(result1, 'insets2 was considered equal');
        assert.isTrue(result2, 'insets3 was not considered equal');
    });
});
describe('Rect', () => {
    it('can be instantiated without issues', () => {
        const rect = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        assert.strictEqual(rect.left, 1, 'left value was not set correctly');
        assert.strictEqual(rect.top, 2, 'top value was not set correctly');
        assert.strictEqual(rect.width, 3, 'width value was not set correctly');
        assert.strictEqual(rect.height, 4, 'height value was not set correctly');
    });
    it('is able to check if it is equal to another Rect', () => {
        const rect1 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        const rect2 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(5, 6, 7, 7);
        const rect3 = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        const result1 = rect1.isEqual(rect2);
        const result2 = rect1.isEqual(rect3);
        assert.isFalse(result1, 'rect2 was considered equal');
        assert.isTrue(result2, 'rect3 was not considered equal');
    });
    it('is able to be scaled to a certain value', () => {
        const rect = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        const resultRect = rect.scale(2);
        assert.strictEqual(resultRect.left, 2, 'left value was not set correctly');
        assert.strictEqual(resultRect.top, 4, 'top value was not set correctly');
        assert.strictEqual(resultRect.width, 6, 'width value was not set correctly');
        assert.strictEqual(resultRect.height, 8, 'height value was not set correctly');
    });
    it('is able to return a rectangle relative to an origin', () => {
        const rect = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(5, 6, 7, 8);
        const origin = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        const result = rect.relativeTo(origin);
        assert.strictEqual(result.left, 4, 'left value was not set correctly');
        assert.strictEqual(result.top, 4, 'top value was not set correctly');
        assert.strictEqual(result.width, 7, 'width value was not set correctly');
        assert.strictEqual(result.height, 8, 'height value was not set correctly');
    });
    it('is able to return a rectangle rebased to an origin', () => {
        const rect = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(5, 6, 7, 8);
        const origin = new _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Rect(1, 2, 3, 4);
        const result = rect.rebaseTo(origin);
        assert.strictEqual(result.left, 6, 'left value was not set correctly');
        assert.strictEqual(result.top, 8, 'top value was not set correctly');
        assert.strictEqual(result.width, 7, 'width value was not set correctly');
        assert.strictEqual(result.height, 8, 'height value was not set correctly');
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('DeviceModeModel', () => {
    let target;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    it('shows hinge on main frame resize', () => {
        _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance({ forceNew: true });
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        const setShowHinge = sinon.spy(target.overlayAgent(), 'invoke_setShowHinge');
        resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameResized);
        assert.isTrue(setShowHinge.calledOnce);
    });
    it('shows hinge on main frame navigation', () => {
        _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance({ forceNew: true });
        const setShowHinge = sinon.spy(target.overlayAgent(), 'invoke_setShowHinge');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
        assert.isTrue(setShowHinge.calledOnce);
    });
});
//# sourceMappingURL=DeviceModeModel.test.js.map

/***/ })

}]);