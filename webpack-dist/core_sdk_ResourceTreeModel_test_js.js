"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_ResourceTreeModel_test_js"],{

/***/ "./core/sdk/ResourceTreeModel.test.js":
/*!********************************************!*\
  !*** ./core/sdk/ResourceTreeModel.test.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ResourceTreeModel', () => {
    it('calls clearRequests on reloadPage', async () => {
        const resourceTreeModel = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)());
        const clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
        resourceTreeModel.reloadPage();
        assert.isTrue(clearRequests.calledOnce, 'Not called just once');
    });
    it('calls clearRequests on top frame navigated', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
        assert.isTrue(clearRequests.calledOnce, 'Not called just once');
    });
    it('does not call clearRequests on non-top frame navigated', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)(await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.addChildFrame)(target));
        assert.isTrue(clearRequests.notCalled, 'Called unexpctedly');
    });
    it('added frame has storageKey when navigated', async () => {
        const testKey = 'test-storage-key';
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.isEmpty(resourceTreeModel.frames());
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', () => ({ storageKey: testKey }));
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
        const frames = resourceTreeModel.frames();
        assert.lengthOf(frames, 1);
        const addedFrame = frames[0];
        const key = await addedFrame.getStorageKey(false);
        assert.strictEqual(key, testKey);
    });
    it('storage key gets updated when frame tree changes', async () => {
        const testKey = 'test-storage-key';
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.isEmpty(resourceTreeModel?.frames());
        const manager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
        assert.exists(manager);
        const storageKeyAddedPromise = new Promise(resolve => {
            manager.addEventListener("StorageKeyAdded" /* SDK.StorageKeyManager.Events.StorageKeyAdded */, () => {
                resolve();
            });
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', () => ({ storageKey: testKey }));
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
        await storageKeyAddedPromise;
        assert.strictEqual(resourceTreeModel?.frames().length, 1);
        const mainStorageKeyChangedPromise = new Promise(resolve => {
            manager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */, () => {
                resolve();
            });
        });
        const storageKeyRemovedPromise = new Promise(resolve => {
            manager.addEventListener("StorageKeyRemoved" /* SDK.StorageKeyManager.Events.StorageKeyRemoved */, () => {
                resolve();
            });
        });
        resourceTreeModel?.frameDetached('main', false);
        assert.isEmpty(resourceTreeModel?.frames());
        await Promise.all([mainStorageKeyChangedPromise, storageKeyRemovedPromise]);
    });
    function getResourceTreeModel(target) {
        const resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        return resourceTreeModel;
    }
    it('calls reloads only top frames', () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: mainFrameTarget });
        const reloadMainFramePage = sinon.spy(getResourceTreeModel(mainFrameTarget), 'reloadPage');
        const reloadSubframePage = sinon.spy(getResourceTreeModel(subframeTarget), 'reloadPage');
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel.reloadAllPages();
        assert.isTrue(reloadMainFramePage.calledOnce);
        assert.isTrue(reloadSubframePage.notCalled);
    });
    it('tags reloads with the targets loaderId', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const resourceTreeModel = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(target);
        const reload = sinon.spy(target.pageAgent(), 'invoke_reload');
        assert.isNotNull(resourceTreeModel.mainFrame);
        resourceTreeModel.reloadPage();
        assert.isTrue(reload.calledOnce);
        assert.deepStrictEqual(reload.args[0], [{ ignoreCache: undefined, loaderId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.LOADER_ID, scriptToEvaluateOnLoad: undefined }]);
    });
    it('identifies not top frame', async () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: mainFrameTarget });
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), { parentId: 'parentId' });
        assert.isTrue(getResourceTreeModel(mainFrameTarget).mainFrame.isOutermostFrame());
        assert.isFalse(getResourceTreeModel(subframeTarget).mainFrame.isOutermostFrame());
    });
    it('emits PrimaryPageChanged event upon prerender activation', async () => {
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ChildTargetManager.ChildTargetManager.install();
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab });
        const childTargetManager = tabTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ChildTargetManager.ChildTargetManager);
        assert.exists(childTargetManager);
        const targetId = 'target_id';
        const targetInfo = {
            targetId,
            type: 'page',
            title: 'title',
            url: 'http://example.com/prerendered.html',
            attached: true,
            canAccessOpener: false,
            subtype: 'prerender',
        };
        childTargetManager.targetCreated({ targetInfo });
        await childTargetManager.attachedToTarget({ sessionId: 'session_id', targetInfo, waitingForDebugger: false });
        const prerenderTarget = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targetById(targetId);
        assert.exists(prerenderTarget);
        const resourceTreeModel = prerenderTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        const primaryPageChangedEvents = [];
        resourceTreeModel.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, event => primaryPageChangedEvents.push(event.data));
        const frame = resourceTreeModel.frameAttached('frame_id', null);
        childTargetManager.targetInfoChanged({ targetInfo: { ...targetInfo, subtype: undefined } });
        assert.strictEqual(primaryPageChangedEvents.length, 1);
        assert.strictEqual(primaryPageChangedEvents[0].frame, frame);
        assert.strictEqual(primaryPageChangedEvents[0].type, "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */);
    });
    it('emits PrimaryPageChanged event only upon navigation of the primary frame', async () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: mainFrameTarget });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        const primaryPageChangedEvents = [];
        [getResourceTreeModel(mainFrameTarget), getResourceTreeModel(subframeTarget), getResourceTreeModel(prerenderTarget)]
            .forEach(resourceTreeModel => {
            resourceTreeModel.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, event => primaryPageChangedEvents.push(event.data));
        });
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
        assert.strictEqual(primaryPageChangedEvents.length, 1);
        assert.strictEqual(primaryPageChangedEvents[0].frame.id, 'main');
        assert.strictEqual(primaryPageChangedEvents[0].type, "Navigation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Navigation */);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), { parentId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_FRAME_ID, id: 'child' });
        assert.strictEqual(primaryPageChangedEvents.length, 1);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(prerenderTarget));
        assert.strictEqual(primaryPageChangedEvents.length, 1);
    });
    it('rebuilds the resource tree upon bfcache-navigation', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const frameManager = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance();
        const removedFromFrameManagerSpy = sinon.spy(frameManager, 'modelRemoved');
        const addedToFrameManagerSpy = sinon.spy(frameManager, 'modelAdded');
        const resourceTreeModel = getResourceTreeModel(target);
        await resourceTreeModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded);
        const cachedResourcesLoaded = resourceTreeModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded);
        const processPendingEventsSpy = sinon.spy(resourceTreeModel, 'processPendingEvents');
        const initialFrame = resourceTreeModel.frames()[0];
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */);
        await cachedResourcesLoaded;
        assert.isTrue(removedFromFrameManagerSpy.calledOnce);
        assert.isTrue(addedToFrameManagerSpy.calledOnce);
        assert.isTrue(processPendingEventsSpy.calledTwice);
        const frameAfterNav = resourceTreeModel.frames()[0];
        assert.strictEqual(initialFrame, frameAfterNav, 'Instead of keeping the existing frame, a new frame was created upon bfcache-navigation');
    });
});
//# sourceMappingURL=ResourceTreeModel.test.js.map

/***/ })

}]);