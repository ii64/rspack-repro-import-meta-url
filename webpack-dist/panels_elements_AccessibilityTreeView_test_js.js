"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_AccessibilityTreeView_test_js"],{

/***/ "./panels/elements/AccessibilityTreeView.test.js":
/*!*******************************************************!*\
  !*** ./panels/elements/AccessibilityTreeView.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const MAIN_FRAME_ID = 'MAIN_FRAME_ID';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('AccessibilityTreeView', () => {
    let target;
    let toggleButoon;
    let treeComponent;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        toggleButoon = document.createElement('div');
        treeComponent = new _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline();
    });
    const updatesUiOnEvent = (inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        new _elements_js__WEBPACK_IMPORTED_MODULE_4__.AccessibilityTreeView.AccessibilityTreeView(toggleButoon, treeComponent);
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel);
        const treeComponentDataSet = sinon.spy(treeComponent, 'data', ['set']);
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance(), 'getOutermostFrame').returns({
            id: MAIN_FRAME_ID,
        });
        model.dispatchEventToListeners("TreeUpdated" /* SDK.AccessibilityModel.Events.TreeUpdated */, {
            root: { numChildren: () => 0, role: () => null, getFrameId: () => MAIN_FRAME_ID, id: () => 'id' },
        });
        await new Promise(resolve => queueMicrotask(resolve));
        assert.strictEqual(treeComponentDataSet.set.called, inScope);
    };
    it('updates UI on in scope update event', updatesUiOnEvent(true));
    it('does not update UI on out of scope update event', updatesUiOnEvent(false));
});
//# sourceMappingURL=AccessibilityTreeView.test.js.map

/***/ })

}]);