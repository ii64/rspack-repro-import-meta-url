"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageItemsView_test_ts"],{

/***/ "./src/panels/application/SharedStorageItemsView.test.ts":
/*!***************************************************************!*\
  !*** ./src/panels/application/SharedStorageItemsView.test.ts ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
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
var _SharedStorageItemsListener_instances, _SharedStorageItemsListener_dispatcher, _SharedStorageItemsListener_cleared, _SharedStorageItemsListener_filteredCleared, _SharedStorageItemsListener_refreshed, _SharedStorageItemsListener_deletedKeys, _SharedStorageItemsListener_editedEvents, _SharedStorageItemsListener_itemsCleared, _SharedStorageItemsListener_filteredItemsCleared, _SharedStorageItemsListener_itemsRefreshed, _SharedStorageItemsListener_itemDeleted, _SharedStorageItemsListener_itemEdited;






var View = _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageItemsView;
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
class SharedStorageItemsListener {
    constructor(dispatcher) {
        _SharedStorageItemsListener_instances.add(this);
        _SharedStorageItemsListener_dispatcher.set(this, void 0);
        _SharedStorageItemsListener_cleared.set(this, false);
        _SharedStorageItemsListener_filteredCleared.set(this, false);
        _SharedStorageItemsListener_refreshed.set(this, false);
        _SharedStorageItemsListener_deletedKeys.set(this, []);
        _SharedStorageItemsListener_editedEvents.set(this, []);
        __classPrivateFieldSet(this, _SharedStorageItemsListener_dispatcher, dispatcher, "f");
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(View.SharedStorageItemsDispatcher.Events.ItemsCleared, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsCleared), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_filteredItemsCleared), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(View.SharedStorageItemsDispatcher.Events.ItemsRefreshed, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsRefreshed), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(View.SharedStorageItemsDispatcher.Events.ItemDeleted, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemDeleted), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").addEventListener(View.SharedStorageItemsDispatcher.Events.ItemEdited, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemEdited), this);
    }
    dispose() {
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(View.SharedStorageItemsDispatcher.Events.ItemsCleared, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsCleared), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_filteredItemsCleared), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(View.SharedStorageItemsDispatcher.Events.ItemsRefreshed, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemsRefreshed), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(View.SharedStorageItemsDispatcher.Events.ItemDeleted, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemDeleted), this);
        __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").removeEventListener(View.SharedStorageItemsDispatcher.Events.ItemEdited, __classPrivateFieldGet(this, _SharedStorageItemsListener_instances, "m", _SharedStorageItemsListener_itemEdited), this);
    }
    get deletedKeys() {
        return __classPrivateFieldGet(this, _SharedStorageItemsListener_deletedKeys, "f");
    }
    get editedEvents() {
        return __classPrivateFieldGet(this, _SharedStorageItemsListener_editedEvents, "f");
    }
    resetRefreshed() {
        __classPrivateFieldSet(this, _SharedStorageItemsListener_refreshed, false, "f");
    }
    async waitForItemsCleared() {
        if (!__classPrivateFieldGet(this, _SharedStorageItemsListener_cleared, "f")) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(View.SharedStorageItemsDispatcher.Events.ItemsCleared);
        }
        __classPrivateFieldSet(this, _SharedStorageItemsListener_cleared, true, "f");
    }
    async waitForFilteredItemsCleared() {
        if (!__classPrivateFieldGet(this, _SharedStorageItemsListener_filteredCleared, "f")) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared);
        }
        __classPrivateFieldSet(this, _SharedStorageItemsListener_filteredCleared, true, "f");
    }
    async waitForItemsRefreshed() {
        if (!__classPrivateFieldGet(this, _SharedStorageItemsListener_refreshed, "f")) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(View.SharedStorageItemsDispatcher.Events.ItemsRefreshed);
        }
        __classPrivateFieldSet(this, _SharedStorageItemsListener_refreshed, true, "f");
    }
    async waitForItemsDeletedTotal(total) {
        while (__classPrivateFieldGet(this, _SharedStorageItemsListener_deletedKeys, "f").length < total) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(View.SharedStorageItemsDispatcher.Events.ItemDeleted);
        }
    }
    async waitForItemsEditedTotal(total) {
        while (__classPrivateFieldGet(this, _SharedStorageItemsListener_editedEvents, "f").length < total) {
            await __classPrivateFieldGet(this, _SharedStorageItemsListener_dispatcher, "f").once(View.SharedStorageItemsDispatcher.Events.ItemEdited);
        }
    }
}
_SharedStorageItemsListener_dispatcher = new WeakMap(), _SharedStorageItemsListener_cleared = new WeakMap(), _SharedStorageItemsListener_filteredCleared = new WeakMap(), _SharedStorageItemsListener_refreshed = new WeakMap(), _SharedStorageItemsListener_deletedKeys = new WeakMap(), _SharedStorageItemsListener_editedEvents = new WeakMap(), _SharedStorageItemsListener_instances = new WeakSet(), _SharedStorageItemsListener_itemsCleared = function _SharedStorageItemsListener_itemsCleared() {
    __classPrivateFieldSet(this, _SharedStorageItemsListener_cleared, true, "f");
}, _SharedStorageItemsListener_filteredItemsCleared = function _SharedStorageItemsListener_filteredItemsCleared() {
    __classPrivateFieldSet(this, _SharedStorageItemsListener_filteredCleared, true, "f");
}, _SharedStorageItemsListener_itemsRefreshed = function _SharedStorageItemsListener_itemsRefreshed() {
    __classPrivateFieldSet(this, _SharedStorageItemsListener_refreshed, true, "f");
}, _SharedStorageItemsListener_itemDeleted = function _SharedStorageItemsListener_itemDeleted(event) {
    __classPrivateFieldGet(this, _SharedStorageItemsListener_deletedKeys, "f").push(event.data.key);
}, _SharedStorageItemsListener_itemEdited = function _SharedStorageItemsListener_itemEdited(event) {
    __classPrivateFieldGet(this, _SharedStorageItemsListener_editedEvents, "f").push(event.data);
};
function selectNodeByKey(dataGrid, key) {
    for (const node of dataGrid.rootNode().children) {
        if (node?.data?.key === key) {
            node.select();
            return node;
        }
    }
    return null;
}
function getCellElementFromNodeAndColumnId(dataGrid, node, columnId) {
    const column = dataGrid.columns[columnId];
    const cellIndex = dataGrid.visibleColumnsArray.indexOf(column);
    return node.element()?.children[cellIndex] || null;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SharedStorageItemsView', function () {
    let target;
    let sharedStorageModel;
    let sharedStorage;
    const TEST_ORIGIN = 'http://a.test';
    const METADATA = {
        creationTime: 100,
        length: 3,
        remainingBudget: 2.5,
        bytesUsed: 30,
    };
    const METADATA_NO_ENTRIES = {
        creationTime: 100,
        length: 0,
        remainingBudget: 2.5,
        bytesUsed: 0,
    };
    const METADATA_2_ENTRIES = {
        creationTime: 100,
        length: 2,
        remainingBudget: 2.5,
        bytesUsed: 20,
    };
    const METADATA_4_ENTRIES = {
        creationTime: 100,
        length: 4,
        remainingBudget: 2.5,
        bytesUsed: 38,
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
    const ENTRIES_1 = [
        {
            key: 'key2',
            value: 'b',
        },
    ];
    const ENTRIES_2 = [
        {
            key: 'key1',
            value: 'a',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    const ENTRIES_KEY_EDITED_1 = [
        {
            key: 'key1',
            value: 'a',
        },
        {
            key: 'key0',
            value: 'b',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    const ENTRIES_KEY_EDITED_2 = [
        {
            key: 'key1',
            value: 'b',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    const ENTRIES_VALUE_EDITED = [
        {
            key: 'key1',
            value: 'a',
        },
        {
            key: 'key2',
            value: 'd',
        },
        {
            key: 'key3',
            value: 'c',
        },
    ];
    const ENTRIES_NEW_KEY = [
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
        {
            key: 'key4',
            value: '',
        },
    ];
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        sharedStorageModel = target.model(_application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageModel);
        assert.exists(sharedStorageModel);
        sharedStorage = new _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageModel.SharedStorageForOrigin(sharedStorageModel, TEST_ORIGIN);
        assert.strictEqual(sharedStorage.securityOrigin, TEST_ORIGIN);
    });
    it('displays metadata and entries', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        const metadataView = view.innerSplitWidget.sidebarWidget()?.contentElement.firstChild;
        assert.exists(metadataView);
        assert.isNotNull(metadataView.shadowRoot);
        await coordinator.done();
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            TEST_ORIGIN,
            (new Date(100 * 1e3)).toLocaleString(),
            '3',
            '30',
            '2.5',
        ]);
        view.detach();
    });
    it('displays metadata with placeholder message if origin is not using API', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorage, 'getMetadata').resolves(null);
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            entries: [],
            getError: () => undefined,
        });
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.strictEqual(view.getEntriesForTesting().length, 0);
        const metadataView = view.innerSplitWidget.sidebarWidget()?.contentElement.firstChild;
        assert.exists(metadataView);
        assert.isNotNull(metadataView.shadowRoot);
        await coordinator.done();
        const keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-key');
        assert.deepEqual(keys, [
            'Origin',
            'Creation Time',
            'Number of Entries',
            'Number of Bytes Used',
            'Entropy Budget for Fenced Frames',
        ]);
        const values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(metadataView.shadowRoot, 'devtools-report-value');
        assert.deepEqual(values, [
            TEST_ORIGIN,
            'Not yet created',
            '0',
            '0',
            '0',
        ]);
        view.detach();
    });
    it('has placeholder sidebar when there are no entries', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            metadata: METADATA_NO_ENTRIES,
            getError: () => undefined,
        });
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            entries: [],
            getError: () => undefined,
        });
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.notInstanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        assert.exists(view.contentElement.querySelector('.placeholder'));
        view.detach();
    });
    it('updates sidebarWidget upon receiving SelectedNode Event', async () => {
        assert.exists(sharedStorageModel);
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries')
            .withArgs({ ownerOrigin: TEST_ORIGIN })
            .resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        // Select the second row.
        assert.exists(selectNodeByKey(view.dataGrid, 'key2'));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        view.detach();
    });
    it('refreshes when "Refresh" is clicked', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise1 = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise1;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Clicking "Refresh" will cause `getMetadata()` and `getEntries()` to be called.
        itemsListener.resetRefreshed();
        const refreshedPromise2 = itemsListener.waitForItemsRefreshed();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.refreshButton.element);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await refreshedPromise2;
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        view.detach();
    });
    it('clears entries when "Delete All" is clicked', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA_NO_ENTRIES,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: [],
            getError: () => undefined,
        });
        const clearSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_clearSharedStorageEntries').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Clicking "Delete All" will cause `clear()`, `getMetadata()`, and `getEntries()` to be called.
        const clearedPromise = itemsListener.waitForItemsCleared();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteAllButton.element);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await clearedPromise;
        assert.isTrue(clearSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), []);
        view.detach();
    });
    it('clears filtered entries when "Delete All" is clicked with a filter set', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(3).resolves({
            metadata: METADATA_2_ENTRIES,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(4).resolves({
            metadata: METADATA_2_ENTRIES,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(2).resolves({
            entries: ENTRIES_2,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(3).resolves({
            entries: ENTRIES_2,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise1 = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise1;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Adding a filter to the text box will cause `getMetadata()`, and `getEntries()` to be called.
        itemsListener.resetRefreshed();
        const refreshedPromise2 = itemsListener.waitForItemsRefreshed();
        view.filterItem.dispatchEventToListeners(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarInput.Event.TextChanged, 'b');
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await refreshedPromise2;
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        // Only the filtered entries are displayed.
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_1);
        // Clicking "Delete All" will cause `deleteEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const clearedPromise = itemsListener.waitForFilteredItemsCleared();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteAllButton.element);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await clearedPromise;
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key2' }));
        assert.strictEqual(getMetadataSpy.callCount, 4);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledThrice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        // The filtered entries are cleared.
        assert.deepEqual(view.getEntriesForTesting(), []);
        // Changing the filter in the text box will cause `getMetadata()`, and `getEntries()` to be called.
        itemsListener.resetRefreshed();
        const refreshedPromise3 = itemsListener.waitForItemsRefreshed();
        view.filterItem.dispatchEventToListeners(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarInput.Event.TextChanged, '');
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await refreshedPromise3;
        assert.strictEqual(getMetadataSpy.callCount, 5);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.strictEqual(getEntriesSpy.callCount, 4);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_2);
        view.detach();
    });
    it('deletes selected entry when "Delete Selected" is clicked', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA_2_ENTRIES,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: [],
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the second row.
        assert.exists(selectNodeByKey(view.dataGrid, 'key2'));
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        // Clicking "Delete Selected" will cause `deleteEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const deletedPromise = itemsListener.waitForItemsDeletedTotal(1);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(view.deleteSelectedButton.element);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await deletedPromise;
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key2' }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), []);
        assert.deepEqual(itemsListener.deletedKeys, ['key2']);
        view.detach();
    });
    it('edits key of selected entry to a non-preexisting key', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: ENTRIES_KEY_EDITED_1,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the second row.
        const node = selectNodeByKey(view.dataGrid, 'key2');
        assert.exists(node);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        const selectedNode = node;
        view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
        const cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
        assert.exists(cellElement);
        //  Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const editedPromise = itemsListener.waitForItemsEditedTotal(1);
        cellElement.textContent = 'key0';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, { key: 'Enter' });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await editedPromise;
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key2' }));
        assert.isTrue(setEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key0', value: 'b', ignoreIfPresent: false }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_KEY_EDITED_1);
        assert.deepEqual(itemsListener.editedEvents, [
            { columnIdentifier: 'key', oldText: 'key2', newText: 'key0' },
        ]);
        view.detach();
    });
    it('edits key of selected entry to a preexisting key', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA_2_ENTRIES,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: ENTRIES_KEY_EDITED_2,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the second row.
        const node = selectNodeByKey(view.dataGrid, 'key2');
        assert.exists(node);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        const selectedNode = node;
        view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
        const cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
        assert.exists(cellElement);
        // Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const editedPromise = itemsListener.waitForItemsEditedTotal(1);
        cellElement.textContent = 'key1';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, { key: 'Enter' });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await editedPromise;
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key2' }));
        assert.isTrue(setEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key1', value: 'b', ignoreIfPresent: false }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_KEY_EDITED_2);
        assert.deepEqual(itemsListener.editedEvents, [
            { columnIdentifier: 'key', oldText: 'key2', newText: 'key1' },
        ]);
        // Verify that the preview loads.
        assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        view.detach();
    });
    it('edits value of selected entry to a new value', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: ENTRIES_VALUE_EDITED,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the second row.
        const node = selectNodeByKey(view.dataGrid, 'key2');
        assert.exists(node);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        const selectedNode = node;
        view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'value', true);
        const cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'value');
        assert.exists(cellElement);
        // Editing a value will cause `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const editedPromise = itemsListener.waitForItemsEditedTotal(1);
        cellElement.textContent = 'd';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, { key: 'Enter' });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await editedPromise;
        assert.isTrue(deleteEntrySpy.notCalled);
        assert.isTrue(setEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key2', value: 'd', ignoreIfPresent: false }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_VALUE_EDITED);
        assert.deepEqual(itemsListener.editedEvents, [
            { columnIdentifier: 'value', oldText: 'b', newText: 'd' },
        ]);
        // Verify that the preview loads.
        assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        view.detach();
    });
    it('adds an entry when the key cell of the empty data row is edited', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata');
        getMetadataSpy.onCall(0).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(1).resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        getMetadataSpy.onCall(2).resolves({
            metadata: METADATA_4_ENTRIES,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries');
        getEntriesSpy.onCall(0).resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        getEntriesSpy.onCall(1).resolves({
            entries: ENTRIES_NEW_KEY,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the empty (null) row.
        const node = selectNodeByKey(view.dataGrid, null);
        assert.exists(node);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        const selectedNode = node;
        view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
        const cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
        assert.exists(cellElement);
        // Editing a key will cause `deleteEntry()`, `setEntry()`, `getMetadata()`, and `getEntries()` to be called.
        const editedPromise = itemsListener.waitForItemsEditedTotal(1);
        cellElement.textContent = 'key4';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, { key: 'Enter' });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await editedPromise;
        assert.isTrue(deleteEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: '' }));
        assert.isTrue(setEntrySpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN, key: 'key4', value: '', ignoreIfPresent: false }));
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES_NEW_KEY);
        assert.deepEqual(itemsListener.editedEvents, [
            { columnIdentifier: 'key', oldText: '', newText: 'key4' },
        ]);
        // Verify that the preview loads.
        assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        view.detach();
    });
    it('attempting to edit key of selected entry to an empty key cancels the edit', async () => {
        assert.exists(sharedStorageModel);
        const getMetadataSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageMetadata').resolves({
            metadata: METADATA,
            getError: () => undefined,
        });
        const getEntriesSpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_getSharedStorageEntries').resolves({
            entries: ENTRIES,
            getError: () => undefined,
        });
        const deleteEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_deleteSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        const setEntrySpy = sinon.stub(sharedStorageModel.storageAgent, 'invoke_setSharedStorageEntry').resolves({
            getError: () => undefined,
        });
        // Creating will cause `getMetadata()` to be called.
        const view = await View.SharedStorageItemsView.createView(sharedStorage);
        await coordinator.done({ waitForWork: true });
        assert.isTrue(getMetadataSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        const itemsListener = new SharedStorageItemsListener(view.sharedStorageItemsDispatcher);
        const refreshedPromise1 = itemsListener.waitForItemsRefreshed();
        // Showing will cause `getMetadata()` and `getEntries()` to be called.
        view.markAsRoot();
        view.show(document.body);
        await refreshedPromise1;
        assert.isTrue(getMetadataSpy.calledTwice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledOnceWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Select the second row.
        const node = selectNodeByKey(view.dataGrid, 'key2');
        assert.exists(node);
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        const selectedNode = node;
        view.dataGrid.startEditingNextEditableColumnOfDataGridNode(selectedNode, 'key', true);
        const cellElement = getCellElementFromNodeAndColumnId(view.dataGrid, selectedNode, 'key');
        assert.exists(cellElement);
        // Editing a key with the edit canceled will cause `getMetadata()` and `getEntries()` to be called.
        itemsListener.resetRefreshed();
        const refreshedPromise2 = itemsListener.waitForItemsRefreshed();
        cellElement.textContent = '';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(cellElement, { key: 'Enter' });
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)();
        await refreshedPromise2;
        assert.isTrue(deleteEntrySpy.notCalled);
        assert.isTrue(setEntrySpy.notCalled);
        assert.isTrue(getMetadataSpy.calledThrice);
        assert.isTrue(getMetadataSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.isTrue(getEntriesSpy.calledTwice);
        assert.isTrue(getEntriesSpy.alwaysCalledWithExactly({ ownerOrigin: TEST_ORIGIN }));
        assert.deepEqual(view.getEntriesForTesting(), ENTRIES);
        // Verify that the preview loads.
        assert.instanceOf(view.outerSplitWidget.sidebarWidget(), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SearchableView.SearchableView);
        view.detach();
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);