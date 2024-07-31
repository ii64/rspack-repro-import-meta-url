"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageListTreeElement_test_ts"],{

/***/ "./src/panels/application/SharedStorageListTreeElement.test.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/application/SharedStorageListTreeElement.test.ts ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_7__]);
_application_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('SharedStorageListTreeElement', function () {
    let target;
    let sharedStorageModel;
    let treeElement;
    const TEST_ORIGIN_A = 'http://a.test';
    const TEST_ORIGIN_B = 'http://b.test';
    const TEST_ORIGIN_C = 'http://c.test';
    const EVENTS = [
        {
            accessTime: 0,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentAppend,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0', value: 'value0' },
        },
        {
            accessTime: 10,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletGet,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_A,
            params: { key: 'key0' },
        },
        {
            accessTime: 15,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletLength,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 20,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.DocumentClear,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_B,
            params: {},
        },
        {
            accessTime: 100,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletSet,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: { key: 'key0', value: 'value1', ignoreIfPresent: true },
        },
        {
            accessTime: 150,
            type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Storage.SharedStorageAccessType.WorkletRemainingBudget,
            mainFrameId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID,
            ownerOrigin: TEST_ORIGIN_C,
            params: {},
        },
    ];
    beforeEach(async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel);
    });
    it('shows view on select', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel, 'enable').resolves();
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        panel.markAsRoot();
        panel.show(document.body);
        treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageListTreeElement.SharedStorageListTreeElement(panel);
        const view = treeElement.view;
        const wasShownSpy = sinon.spy(view, 'wasShown');
        document.body.appendChild(treeElement.listItemNode);
        treeElement.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        treeElement.selectable = true;
        treeElement.select();
        assert.isTrue(wasShownSpy.calledOnce);
        panel.detach();
    });
    it('adds events', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel, 'enable').resolves();
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageListTreeElement.SharedStorageListTreeElement(panel);
        const view = treeElement.view;
        view.setDefaultIdForTesting(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID);
        for (const event of EVENTS) {
            treeElement.addEvent(event);
        }
        assert.deepEqual(view.getEventsForTesting(), EVENTS);
        panel.detach();
    });
    it('clears events upon main frame navigation', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel, 'enable').resolves();
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        treeElement = new _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageListTreeElement.SharedStorageListTreeElement(panel);
        const view = treeElement.view;
        view.setDefaultIdForTesting(_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.MAIN_FRAME_ID);
        for (const event of EVENTS) {
            treeElement.addEvent(event);
        }
        assert.deepEqual(view.getEventsForTesting(), EVENTS);
        // Events are cleared on main frame navigation.
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
        assert.deepEqual(view.getEventsForTesting(), []);
        panel.detach();
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);