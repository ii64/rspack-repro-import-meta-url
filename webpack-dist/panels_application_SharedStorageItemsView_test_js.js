"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageItemsView_test_js"],{

/***/ "./panels/application/SharedStorageItemsView.test.js":
/*!***********************************************************!*\
  !*** ./panels/application/SharedStorageItemsView.test.js ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_5__]);
_application_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






var View = _application_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageItemsView;
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
class SharedStorageItemsListener {
    #dispatcher;
    #cleared = false;
    #filteredCleared = false;
    #refreshed = false;
    #deletedKeys = [];
    #editedEvents = [];
    constructor(dispatcher) {
        this.#dispatcher = dispatcher;
        this.#dispatcher.addEventListener("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */, this.#itemsCleared, this);
        this.#dispatcher.addEventListener("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */, this.#filteredItemsCleared, this);
        this.#dispatcher.addEventListener("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */, this.#itemsRefreshed, this);
        this.#dispatcher.addEventListener("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */, this.#itemDeleted, this);
        this.#dispatcher.addEventListener("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */, this.#itemEdited, this);
    }
    dispose() {
        this.#dispatcher.removeEventListener("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */, this.#itemsCleared, this);
        this.#dispatcher.removeEventListener("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */, this.#filteredItemsCleared, this);
        this.#dispatcher.removeEventListener("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */, this.#itemsRefreshed, this);
        this.#dispatcher.removeEventListener("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */, this.#itemDeleted, this);
        this.#dispatcher.removeEventListener("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */, this.#itemEdited, this);
    }
    get deletedKeys() {
        return this.#deletedKeys;
    }
    get editedEvents() {
        return this.#editedEvents;
    }
    resetRefreshed() {
        this.#refreshed = false;
    }
    #itemsCleared() {
        this.#cleared = true;
    }
    #filteredItemsCleared() {
        this.#filteredCleared = true;
    }
    #itemsRefreshed() {
        this.#refreshed = true;
    }
    #itemDeleted(event) {
        this.#deletedKeys.push(event.data.key);
    }
    #itemEdited(event) {
        this.#editedEvents.push(event.data);
    }
    async waitForItemsCleared() {
        if (!this.#cleared) {
            await this.#dispatcher.once("ItemsCleared" /* View.SharedStorageItemsDispatcher.Events.ItemsCleared */);
        }
        this.#cleared = true;
    }
    async waitForFilteredItemsCleared() {
        if (!this.#filteredCleared) {
            await this.#dispatcher.once("FilteredItemsCleared" /* View.SharedStorageItemsDispatcher.Events.FilteredItemsCleared */);
        }
        this.#filteredCleared = true;
    }
    async waitForItemsRefreshed() {
        if (!this.#refreshed) {
            await this.#dispatcher.once("ItemsRefreshed" /* View.SharedStorageItemsDispatcher.Events.ItemsRefreshed */);
        }
        this.#refreshed = true;
    }
    async waitForItemsDeletedTotal(total) {
        while (this.#deletedKeys.length < total) {
            await this.#dispatcher.once("ItemDeleted" /* View.SharedStorageItemsDispatcher.Events.ItemDeleted */);
        }
    }
    async waitForItemsEditedTotal(total) {
        while (this.#editedEvents.length < total) {
            await this.#dispatcher.once("ItemEdited" /* View.SharedStorageItemsDispatcher.Events.ItemEdited */);
        }
    }
}
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
        view.filterItem.dispatchEventToListeners("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, 'b');
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
        view.filterItem.dispatchEventToListeners("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, '');
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
//# sourceMappingURL=SharedStorageItemsView.test.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/application.js":
/*!*******************************************!*\
  !*** ./panels/application/application.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManifestView: () => (/* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ApplicationPanelSidebar: () => (/* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BackgroundServiceModel: () => (/* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   BackgroundServiceView: () => (/* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   BounceTrackingMitigationsTreeElement: () => (/* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CookieItemsView: () => (/* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   DOMStorageItemsView: () => (/* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   DOMStorageModel: () => (/* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   IndexedDBModel: () => (/* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   IndexedDBViews: () => (/* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   InterestGroupStorageModel: () => (/* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   InterestGroupStorageView: () => (/* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   InterestGroupTreeElement: () => (/* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   OpenedWindowDetailsView: () => (/* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   PreloadingTreeElement: () => (/* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   PreloadingView: () => (/* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   ReportingApiReportsView: () => (/* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   ReportingApiView: () => (/* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   ResourcesPanel: () => (/* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ServiceWorkerCacheViews: () => (/* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   ServiceWorkerUpdateCycleView: () => (/* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   ServiceWorkersView: () => (/* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__),
/* harmony export */   SharedStorageEventsView: () => (/* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   SharedStorageItemsView: () => (/* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   SharedStorageListTreeElement: () => (/* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__),
/* harmony export */   SharedStorageModel: () => (/* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__),
/* harmony export */   SharedStorageTreeElement: () => (/* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__),
/* harmony export */   StorageBucketsTreeElement: () => (/* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__),
/* harmony export */   StorageItemsView: () => (/* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__),
/* harmony export */   StorageView: () => (/* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__),
/* harmony export */   TrustTokensTreeElement: () => (/* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__)
/* harmony export */ });
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */ var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */ var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */ var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */ var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */ var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */ var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */ var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */ var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */ var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */ var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */ var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */ var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */ var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */ var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */ var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */ var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */ var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */ var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */ var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */ var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */ var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */ var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
































//# sourceMappingURL=application.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);