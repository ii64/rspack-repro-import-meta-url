"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ElementsTreeElementHighlighter_test_js"],{

/***/ "./panels/elements/ElementsTreeElementHighlighter.test.js":
/*!****************************************************************!*\
  !*** ./panels/elements/ElementsTreeElementHighlighter.test.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ElementsTreeElementHighlighter', () => {
    let target;
    let treeOutline;
    let throttler;
    let throttlerSchedule;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        treeOutline = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline();
        treeOutline.wireToDOMModel(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel));
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        throttlerSchedule = sinon.stub(throttler, 'schedule');
        throttlerSchedule.resolves();
    });
    const highlightsNodeOnRequestEvent = (inScope) => () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        new _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeElementHighlighter.ElementsTreeElementHighlighter(treeOutline, throttler);
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
        assert.exists(model);
        const node = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel));
        const treeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeElement.ElementsTreeElement(node, /* isClosingTag=*/ true);
        sinon.stub(treeOutline, 'createTreeElementFor').withArgs(node).returns(treeElement);
        const treeOutlineSetHoverEffect = sinon.spy(treeOutline, 'setHoverEffect');
        const treeElementReveal = sinon.spy(treeElement, 'reveal');
        model.dispatchEventToListeners("HighlightNodeRequested" /* SDK.OverlayModel.Events.HighlightNodeRequested */, node);
        assert.strictEqual(throttlerSchedule.calledOnce, inScope);
        if (inScope) {
            throttlerSchedule.firstCall.firstArg();
            assert.isTrue(treeOutlineSetHoverEffect.calledOnce);
            assert.isTrue(treeElementReveal.called);
        }
    };
    it('highlights node on in scope request event', highlightsNodeOnRequestEvent(true));
    it('highlights node on out of scope request event', highlightsNodeOnRequestEvent(false));
});
//# sourceMappingURL=ElementsTreeElementHighlighter.test.js.map

/***/ })

}]);