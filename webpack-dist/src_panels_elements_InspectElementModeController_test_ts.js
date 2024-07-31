"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_InspectElementModeController_test_ts"],{

/***/ "./src/panels/elements/InspectElementModeController.test.ts":
/*!******************************************************************!*\
  !*** ./src/panels/elements/InspectElementModeController.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const NODE_ID = 1;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('InspectElementModeController', () => {
    let inScopeTarget;
    let inScopeSubTarget;
    let outOfScopeTarget;
    let outOfScopeSubTarget;
    let modeController;
    function onModeToggle(target) {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel);
        return model.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.Events.InspectModeWillBeToggled);
    }
    function failOnModeToggle(target) {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel);
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.Events.InspectModeWillBeToggled, () => assert.fail('Unexected mode toggle on out of scope target'));
    }
    beforeEach(() => {
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.setMockResourceTree)(false);
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.registerNoopActions)(['elements.toggle-element-search']);
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        inScopeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
        inScopeSubTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: inScopeTarget });
        outOfScopeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
        outOfScopeSubTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: outOfScopeTarget });
        failOnModeToggle(outOfScopeTarget);
        failOnModeToggle(outOfScopeSubTarget);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScopeTarget);
        modeController = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.InspectElementModeController.InspectElementModeController();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: { nodeId: NODE_ID } }));
    });
    it('synchronises mode for in scope models', async () => {
        for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().targets()) {
            assert.isFalse(Boolean(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel)?.inspectModeEnabled()));
        }
        modeController.toggleInspectMode();
        await Promise.all([onModeToggle(inScopeTarget), onModeToggle(inScopeSubTarget)]);
        const anotherInScopeSubTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: inScopeTarget });
        await onModeToggle(anotherInScopeSubTarget);
        const anotherOutOfScopeSubTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: inScopeTarget });
        failOnModeToggle(anotherOutOfScopeSubTarget);
        let expectToggle = false;
        const modeToggles = Promise.all([inScopeTarget, inScopeSubTarget, anotherInScopeSubTarget].map(t => onModeToggle(t).then(() => {
            assert.isTrue(expectToggle);
        })));
        outOfScopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel)
            ?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.Events.ExitedInspectMode);
        await new Promise(resolve => queueMicrotask(resolve));
        expectToggle = true;
        inScopeTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel)
            ?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.Events.ExitedInspectMode);
        await modeToggles;
    });
});


/***/ })

}]);