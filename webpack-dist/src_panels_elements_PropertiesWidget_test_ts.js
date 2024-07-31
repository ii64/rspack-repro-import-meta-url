"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PropertiesWidget_test_ts"],{

/***/ "./src/panels/elements/PropertiesWidget.test.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/PropertiesWidget.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const NODE_ID = 1;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('PropertiesWidget', () => {
    let target;
    let view;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', () => ({ root: { nodeId: NODE_ID } }));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getNodesForSubtreeByStyle', () => ({ nodeIds: [] }));
    });
    afterEach(() => {
        view.detach();
    });
    const updatesUiOnEvent = (event, inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
        assert.exists(model);
        const node = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(model);
        sinon.stub(node, 'resolveToObject').withArgs('properties-sidebar-pane').resolves({
            getAllProperties: () => ({}),
            getOwnProperties: () => ({}),
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, node);
        view = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.PropertiesWidget.PropertiesWidget(0);
        view.markAsRoot();
        view.show(document.body);
        await new Promise(resolve => setTimeout(resolve, 0));
        const populateWithProperties = sinon.spy(_ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_3__.ObjectPropertiesSection.ObjectPropertyTreeElement, 'populateWithProperties');
        model.dispatchEventToListeners(event, ...[node]);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(populateWithProperties.called, inScope);
    };
    it('updates UI on in scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, true));
    it('does not update UI on out of scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, false));
    it('updates UI on in scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrRemoved, true));
    it('does not update UI on out of scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, false));
    it('updates UI on in scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, true));
    it('does not update UI on out of scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, false));
    it('updates UI on in scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, true));
    it('does not update UI on out of scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, false));
});


/***/ })

}]);