"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_ConsoleContextSelector_test_js"], {
"./panels/console/ConsoleContextSelector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _console_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ConsoleContextSelector', function() {
    var createExecutionContext = function createExecutionContext(target) {
        ++id;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
            context: {
                id: id,
                origin: 'http://example.com',
                name: "c".concat(id),
                uniqueId: "c".concat(id),
                auxData: {
                    frameId: 'f2'
                }
            }
        });
        var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        var executionContext = runtimeModel.executionContext(id);
        assert.exists(executionContext);
        return executionContext;
    };
    var target;
    var subtarget;
    var targetContext;
    var subtargetContext;
    var selector;
    beforeEach(function() {
        selector = new _console_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleContextSelector.ConsoleContextSelector();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        subtarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: target
        });
        targetContext = createExecutionContext(target);
        subtargetContext = createExecutionContext(subtarget);
    });
    var id = 0;
    var tests = function(inScope) {
        return function() {
            beforeEach(function() {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            });
            it('creates drop-down with console context', function() {
                assert.deepEqual(_to_consumable_array(selector.items), inScope ? [
                    targetContext,
                    subtargetContext
                ] : []);
                var subtarget2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                    parentTarget: target
                });
                var subtarget2Context = createExecutionContext(subtarget2);
                assert.deepEqual(_to_consumable_array(selector.items), inScope ? [
                    targetContext,
                    subtargetContext,
                    subtarget2Context
                ] : []);
                var subtarget2Context2 = createExecutionContext(subtarget2);
                assert.deepEqual(_to_consumable_array(selector.items), inScope ? [
                    targetContext,
                    subtargetContext,
                    subtarget2Context,
                    subtarget2Context2
                ] : []);
                subtarget2.dispose('');
                assert.deepEqual(_to_consumable_array(selector.items), inScope ? [
                    targetContext,
                    subtargetContext
                ] : []);
            });
            it('updates selected target when UI context flavor changes', function() {
                assert.strictEqual(selector.toolbarItem().element.title, 'JavaScript context: Not selected');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, targetContext);
                assert.strictEqual(selector.toolbarItem().element.title, "JavaScript context: ".concat(inScope ? 'c' + targetContext.id : 'Not selected'));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, subtargetContext);
                assert.strictEqual(selector.toolbarItem().element.title, "JavaScript context: ".concat(inScope ? 'c' + subtargetContext.id : 'Not selected'));
            });
        };
    };
    describe('in scope', tests(true));
    describe('out of scope', tests(false));
    it('updates UI context flavor on selection', function() {
        selector.itemSelected(targetContext);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext), targetContext);
        selector.itemSelected(subtargetContext);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext), subtargetContext);
    });
}); //# sourceMappingURL=ConsoleContextSelector.test.js.map


}),

}]);