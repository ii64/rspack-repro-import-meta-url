"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_inspector_main_OutermostTargetSelector_test_js"], {
"./entrypoints/inspector_main/OutermostTargetSelector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _inspector_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector_main.js */ "./entrypoints/inspector_main/inspector_main.js");
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('OutermostTargetSelector', function() {
    var tabTarget;
    var primaryTarget;
    var prerenderTarget;
    var selector;
    beforeEach(function() {
        tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab,
            url: 'http://example.com/',
            name: 'tab'
        });
        primaryTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget,
            url: 'http://example.com/',
            name: 'primary'
        });
        prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender',
            url: 'http://example.com/prerender1',
            name: 'prerender1'
        });
        selector = _inspector_main_js__WEBPACK_IMPORTED_MODULE_4__.OutermostTargetSelector.OutermostTargetSelector.instance({
            forceNew: true
        });
    });
    it('creates drop-down with outermost targets', function() {
        assert.deepEqual(_to_consumable_array(selector.listItems), [
            primaryTarget,
            prerenderTarget
        ]);
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: primaryTarget
        });
        assert.deepEqual(_to_consumable_array(selector.listItems), [
            primaryTarget,
            prerenderTarget
        ]);
        var prerenderTarget2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender',
            url: 'http://example.com/prerender2'
        });
        assert.deepEqual(_to_consumable_array(selector.listItems), [
            primaryTarget,
            prerenderTarget,
            prerenderTarget2
        ]);
        prerenderTarget.dispose('');
        assert.deepEqual(_to_consumable_array(selector.listItems), [
            primaryTarget,
            prerenderTarget2
        ]);
    });
    it('hides when only one target is present', function() {
        assert.isTrue(selector.item().visible());
        prerenderTarget.dispose('');
        assert.isFalse(selector.item().visible());
    });
    it('updates selected target when UI context flavor changes', function() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target, primaryTarget);
        assert.strictEqual(selector.item().element.title, 'Page: primary');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target, prerenderTarget);
        assert.strictEqual(selector.item().element.title, 'Page: prerender1');
    });
    it('updates when name changes', function() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target, prerenderTarget);
        assert.strictEqual(selector.item().element.title, 'Page: prerender1');
        prerenderTarget.setName('prerender3');
        assert.strictEqual(selector.item().element.title, 'Page: prerender3');
    });
    it('updates UI context flavor on selection', function() {
        selector.itemSelected(primaryTarget);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target), primaryTarget);
        selector.itemSelected(prerenderTarget);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target), prerenderTarget);
    });
    it('does not change UI context flavor within the same page', function() {
        var subtarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: primaryTarget
        });
        selector.itemSelected(primaryTarget);
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target), primaryTarget);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target, subtarget);
        assert.strictEqual(selector.item().element.title, 'Page: primary');
        assert.strictEqual(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Target), subtarget);
    });
}); //# sourceMappingURL=OutermostTargetSelector.test.js.map


}),
"./entrypoints/inspector_main/inspector_main.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectorMain: function() { return /* reexport module object */ _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__; },
  OutermostTargetSelector: function() { return /* reexport module object */ _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__; },
  RenderingOptions: function() { return /* reexport module object */ _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingOptions.js */ "./entrypoints/inspector_main/RenderingOptions.js");
/* harmony import */var _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorMain.js */ "./entrypoints/inspector_main/InspectorMain.js");
/* harmony import */var _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutermostTargetSelector.js */ "./entrypoints/inspector_main/OutermostTargetSelector.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





 //# sourceMappingURL=inspector_main.js.map


}),

}]);