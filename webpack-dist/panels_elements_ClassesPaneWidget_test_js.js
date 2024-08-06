"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ClassesPaneWidget_test_js"],{

/***/ "./panels/elements/ClassesPaneWidget.test.js":
/*!***************************************************!*\
  !*** ./panels/elements/ClassesPaneWidget.test.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const CLASS_NAMES = ['class-1', 'class-2', 'class-3'];
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ClassesPaneWidget', () => {
    let target;
    let view;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
    });
    afterEach(() => {
        view.detach();
    });
    const updatesUiOnEvent = (inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        view = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.ClassesPaneWidget.ClassesPaneWidget();
        view.markAsRoot();
        view.show(document.body);
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
        assert.exists(model);
        const node = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(model);
        const createCheckboxLabel = sinon.spy(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel, 'create');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, node);
        sinon.stub(node, 'enclosingElementOrSelf').returns(node);
        sinon.stub(node, 'getAttribute').withArgs('class').returns(CLASS_NAMES.join(' '));
        assert.isFalse(createCheckboxLabel.called);
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.DOMMutated, node);
        assert.strictEqual(createCheckboxLabel.callCount, inScope ? CLASS_NAMES.length : 0);
    };
    it('updates UI on in scope update event', updatesUiOnEvent(true));
    it('does not update UI on out of scope update event', updatesUiOnEvent(false));
});
//# sourceMappingURL=ClassesPaneWidget.test.js.map

/***/ })

}]);