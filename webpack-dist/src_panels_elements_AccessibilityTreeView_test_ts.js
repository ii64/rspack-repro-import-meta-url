"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_AccessibilityTreeView_test_ts"],{

/***/ "./src/panels/elements/AccessibilityTreeView.test.ts":
/*!***********************************************************!*\
  !*** ./src/panels/elements/AccessibilityTreeView.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/tree_outline/tree_outline.js */ "./src/ui/components/tree_outline/tree_outline.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
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
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.Events.TreeUpdated, {
            root: { numChildren: () => 0, role: () => null, getFrameId: () => MAIN_FRAME_ID, id: () => 'id' },
        });
        await new Promise(resolve => queueMicrotask(resolve));
        assert.strictEqual(treeComponentDataSet.set.called, inScope);
    };
    it('updates UI on in scope update event', updatesUiOnEvent(true));
    it('does not update UI on out of scope update event', updatesUiOnEvent(false));
});


/***/ })

}]);