"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_console_ConsoleContextSelector_test_js"],{

/***/ "./panels/console/ConsoleContextSelector.test.js":
/*!*******************************************************!*\
  !*** ./panels/console/ConsoleContextSelector.test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _console_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ConsoleContextSelector', () => {
    let target;
    let subtarget;
    let targetContext;
    let subtargetContext;
    let selector;
    beforeEach(() => {
        selector = new _console_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleContextSelector.ConsoleContextSelector();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        subtarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: target });
        targetContext = createExecutionContext(target);
        subtargetContext = createExecutionContext(subtarget);
    });
    let id = 0;
    function createExecutionContext(target) {
        ++id;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
            context: {
                id,
                origin: 'http://example.com',
                name: `c${id}`,
                uniqueId: `c${id}`,
                auxData: {
                    frameId: 'f2',
                },
            },
        });
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        const executionContext = runtimeModel.executionContext(id);
        assert.exists(executionContext);
        return executionContext;
    }
    const tests = (inScope) => () => {
        beforeEach(() => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        });
        it('creates drop-down with console context', () => {
            assert.deepEqual([...selector.items], inScope ? [targetContext, subtargetContext] : []);
            const subtarget2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: target });
            const subtarget2Context = createExecutionContext(subtarget2);
            assert.deepEqual([...selector.items], inScope ? [targetContext, subtargetContext, subtarget2Context] : []);
            const subtarget2Context2 = createExecutionContext(subtarget2);
            assert.deepEqual([...selector.items], inScope ? [targetContext, subtargetContext, subtarget2Context, subtarget2Context2] : []);
            subtarget2.dispose('');
            assert.deepEqual([...selector.items], inScope ? [targetContext, subtargetContext] : []);
        });
        it('updates selected target when UI context flavor changes', () => {
            assert.strictEqual(selector.toolbarItem().element.title, 'JavaScript context: Not selected');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, targetContext);
            assert.strictEqual(selector.toolbarItem().element.title, `JavaScript context: ${inScope ? 'c' + targetContext.id : 'Not selected'}`);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, subtargetContext);
            assert.strictEqual(selector.toolbarItem().element.title, `JavaScript context: ${inScope ? 'c' + subtargetContext.id : 'Not selected'}`);
        });
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
    it('updates UI context flavor on selection', () => {
        selector.itemSelected(targetContext);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext), targetContext);
        selector.itemSelected(subtargetContext);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext), subtargetContext);
    });
});
//# sourceMappingURL=ConsoleContextSelector.test.js.map

/***/ })

}]);