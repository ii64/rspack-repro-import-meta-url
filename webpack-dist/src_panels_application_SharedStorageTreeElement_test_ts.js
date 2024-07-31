"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageTreeElement_test_ts"],{

/***/ "./src/panels/application/SharedStorageTreeElement.test.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/application/SharedStorageTreeElement.test.ts ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_7__]);
_application_js__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SharedStorageItemsListener_instances, _SharedStorageItemsListener_dispatcher, _SharedStorageItemsListener_refreshed, _SharedStorageItemsListener_itemsRefreshed;








class SharedStorageItemsListener {
    constructor(dispatcher) {
        _SharedStorageItemsListener_instances.add(this);
        _SharedStorageItemsListener_dispatcher.set(this, void 0);
        _SharedStorageItemsListener_refreshed.set(this, false);
        __classPrivateFieldSet(this, _SharedStorageItemsListener_dispatcher, dispatcher, "f");
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageItemsView.SharedStorageItemsDispatcher.Events.ItemsRefreshed, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsRefreshed), this);
    }
    dispose() {
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageItemsView.SharedStorageItemsDispatcher.Events.ItemsRefreshed, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsRefreshed), this);
    }
    async waitForItemsRefreshed() {
        if (!__classPrivateFieldGet(this, _SharedStorageItemsListener_refreshed, "f")) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageItemsView.SharedStorageItemsDispatcher.Events.ItemsRefreshed);
        }
        __classPrivateFieldSet(this, _SharedStorageItemsListener_refreshed, false, "f");
    }
}
_SharedStorageItemsListener_dispatcher = new WeakMap(), _SharedStorageItemsListener_refreshed = new WeakMap(), _SharedStorageItemsListener_instances = new WeakSet(), _SharedStorageItemsListener_itemsRefreshed = function _SharedStorageItemsListener_itemsRefreshed() {
    __classPrivateFieldSet(this, _SharedStorageItemsListener_refreshed, true, "f");
};
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('SharedStorageTreeElement', function () {
    let target;
    let sharedStorageModel;
    let sharedStorage;
    let treeElement;
    const METADATA = {
        creationTime: 100,
        length: 3,
        remainingBudget: 2.5,
        bytesUsed: 30,
    };
    const ENTRIES = [
        {
            key: 'key1',
            value: 'a',
        },
        {
            key: 'key2',
            value: 'b',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    beforeEach(async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register(_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.ExperimentName.PRELOADING_STATUS_PANEL, '', false);
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageModel);
        sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.SECURITY_ORIGIN);
        assert.strictEqual(sharedStorage.securityOrigin, _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.SECURITY_ORIGIN);
    });
    it('shows view on select', async () => {
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageTracking').resolves({
            getError: () => undefined,
        });
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        const panel = _application_js__WEBPACK_IMPORTED_MODULE_7__.ResourcesPanel.ResourcesPanel.instance({ forceNew: true });
        panel.markAsRoot();
        panel.show(document.body);
        treeElement =
            await _application_js__WEBPACK_IMPORTED_MODULE_7__.SharedStorageTreeElement.SharedStorageTreeElement.createElement(panel, sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.SECURITY_ORIGIN }));
        const { view } = treeElement;
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        document.body.appendChild(treeElement.listItemNode);
        treeElement.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        treeElement.selectable = true;
        treeElement.select();
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.SECURITY_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.SECURITY_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        panel.detach();
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);