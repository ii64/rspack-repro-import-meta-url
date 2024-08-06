"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_layers_LayersPanel_test_js"],{

/***/ "./panels/layers/LayersPanel.test.js":
/*!*******************************************!*\
  !*** ./panels/layers/LayersPanel.test.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _layers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers.js */ "./panels/layers/layers.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LayersPanel', () => {
    let target;
    let prerenderTarget;
    beforeEach(async () => {
        const actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance({ forceNew: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ShortcutRegistry.ShortcutRegistry.instance({ forceNew: true, actionRegistry: actionRegistryInstance });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
    });
    it('udpates 3d view when layer painted', async () => {
        const panel = _layers_js__WEBPACK_IMPORTED_MODULE_4__.LayersPanel.LayersPanel.instance({ forceNew: true });
        const layerTreeModel = target.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
        assert.exists(layerTreeModel);
        const updateLayerSnapshot = sinon.stub(panel.layers3DView, 'updateLayerSnapshot');
        const LAYER = { id: () => 'TEST_LAYER' };
        layerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER);
        assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER));
    });
    it('can handle scope switches', async () => {
        const panel = _layers_js__WEBPACK_IMPORTED_MODULE_4__.LayersPanel.LayersPanel.instance({ forceNew: true });
        const primaryLayerTreeModel = target.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
        assert.exists(primaryLayerTreeModel);
        const prerenderLayerTreeModel = prerenderTarget.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
        assert.exists(prerenderLayerTreeModel);
        const updateLayerSnapshot = sinon.stub(panel.layers3DView, 'updateLayerSnapshot');
        const LAYER_1 = { id: () => 'TEST_LAYER_1' };
        const LAYER_2 = { id: () => 'TEST_LAYER_2' };
        primaryLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_1);
        prerenderLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_2);
        assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER_1));
        updateLayerSnapshot.reset();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        primaryLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_1);
        prerenderLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_2);
        assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER_2));
    });
});
//# sourceMappingURL=LayersPanel.test.js.map

/***/ }),

/***/ "./panels/layers/layers.js":
/*!*********************************!*\
  !*** ./panels/layers/layers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerPaintProfilerView: () => (/* reexport module object */ _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LayerTreeModel: () => (/* reexport module object */ _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LayersPanel: () => (/* reexport module object */ _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./panels/layers/LayerPaintProfilerView.js");
/* harmony import */ var _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayersPanel.js */ "./panels/layers/LayersPanel.js");
/* harmony import */ var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./panels/layers/LayerTreeModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=layers.js.map

/***/ })

}]);