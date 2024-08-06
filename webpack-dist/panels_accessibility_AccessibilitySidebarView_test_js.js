"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_AccessibilitySidebarView_test_js"],{

/***/ "./panels/accessibility/AccessibilitySidebarView.test.js":
/*!***************************************************************!*\
  !*** ./panels/accessibility/AccessibilitySidebarView.test.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _accessibility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessibility.js */ "./panels/accessibility/accessibility.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const NODE_ID = 1;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('AccessibilitySidebarView', () => {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatesUiOnEvent = (event, inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
        assert.exists(domModel);
        const accessibilityModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel);
        assert.exists(accessibilityModel);
        const requestPartialAXTree = sinon.stub(accessibilityModel, 'requestPartialAXTree');
        requestPartialAXTree.resolves();
        const node = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
        view = _accessibility_js__WEBPACK_IMPORTED_MODULE_3__.AccessibilitySidebarView.AccessibilitySidebarView.instance({ forceNew: true, throttlingTimeout: 0 });
        view.markAsRoot();
        view.show(document.body);
        view.setNode(node);
        await new Promise(resolve => setTimeout(resolve, 0));
        requestPartialAXTree.resetHistory();
        domModel.dispatchEventToListeners(event, { node });
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(requestPartialAXTree.called, inScope);
    };
    it('updates UI on in scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, true));
    it('does not update UI on out of scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, false));
    it('updates UI on in scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrRemoved, true));
    it('does not update UI on out of scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrRemoved, false));
    it('updates UI on in scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, true));
    it('does not update UI on out of scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, false));
    it('updates UI on in scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, true));
    it('does not update UI on out of scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, false));
});
//# sourceMappingURL=AccessibilitySidebarView.test.js.map

/***/ }),

/***/ "./panels/accessibility/accessibility.js":
/*!***********************************************!*\
  !*** ./panels/accessibility/accessibility.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAAttributesView: () => (/* reexport module object */ _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ARIAMetadata: () => (/* reexport module object */ _ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   AXBreadcrumbsPane: () => (/* reexport module object */ _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   AccessibilityNodeView: () => (/* reexport module object */ _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   AccessibilitySidebarView: () => (/* reexport module object */ _AccessibilitySidebarView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   AccessibilityStrings: () => (/* reexport module object */ _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   AccessibilitySubPane: () => (/* reexport module object */ _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityNodeView.js */ "./panels/accessibility/AccessibilityNodeView.js");
/* harmony import */ var _AccessibilitySidebarView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessibilitySidebarView.js */ "./panels/accessibility/AccessibilitySidebarView.js");
/* harmony import */ var _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessibilityStrings.js */ "./panels/accessibility/AccessibilityStrings.js");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
/* harmony import */ var _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ARIAAttributesView.js */ "./panels/accessibility/ARIAAttributesView.js");
/* harmony import */ var _ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ARIAMetadata.js */ "./panels/accessibility/ARIAMetadata.js");
/* harmony import */ var _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AXBreadcrumbsPane.js */ "./panels/accessibility/AXBreadcrumbsPane.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=accessibility.js.map

/***/ })

}]);