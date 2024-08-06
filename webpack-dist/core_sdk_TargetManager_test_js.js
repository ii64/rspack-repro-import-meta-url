"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_TargetManager_test_js"],{

/***/ "./core/sdk/TargetManager.test.js":
/*!****************************************!*\
  !*** ./core/sdk/TargetManager.test.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../host/host.js */ "./core/host/host.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('TargetManager', () => {
    let targetManager;
    beforeEach(() => {
        targetManager = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance();
    });
    function resourceTreeModel(target) {
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(model);
        return model;
    }
    it('allows observing targets', () => {
        const observer = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Observer());
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.observeTargets(observer);
        assert.isTrue(observer.targetAdded.calledOnceWith(target1));
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        assert.isTrue(observer.targetAdded.calledTwice);
        assert.isTrue(observer.targetAdded.calledWith(target2));
        target2.dispose('YOLO!');
        assert.isTrue(observer.targetRemoved.calledOnceWith(target2));
        targetManager.unobserveTargets(observer);
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        assert.isTrue(observer.targetAdded.calledTwice);
    });
    it('allows observing models', () => {
        const observer = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.observeModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, observer);
        assert.isTrue(observer.modelAdded.calledOnceWith(resourceTreeModel(target1)));
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        assert.isTrue(observer.modelAdded.calledTwice);
        assert.isTrue(observer.modelAdded.calledWith(resourceTreeModel(target2)));
        target2.dispose('YOLO!');
        assert.isTrue(observer.modelRemoved.calledOnceWith(resourceTreeModel(target2)));
        targetManager.unobserveModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, observer);
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        assert.isTrue(observer.modelAdded.calledTwice);
    });
    it('allows listening to models', () => {
        const WillReloadPage = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.WillReloadPage;
        const thisObject = {};
        const listener = sinon.spy();
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.addModelListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, WillReloadPage, listener, thisObject);
        resourceTreeModel(target1).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledOnce);
        assert.isTrue(listener.calledOn(thisObject));
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        resourceTreeModel(target2).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledTwice);
        assert.isTrue(listener.calledOn(thisObject));
        targetManager.removeModelListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, WillReloadPage, listener, thisObject);
        resourceTreeModel(target1).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledTwice);
    });
    it('allows observing targets in scope', () => {
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.setScopeTarget(target1);
        const observer = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Observer());
        targetManager.observeTargets(observer, { scoped: true });
        assert.isTrue(observer.targetAdded.calledOnceWith(target1));
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: target2 });
        assert.isTrue(observer.targetAdded.calledOnceWith(target1));
        const subtarget1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: target1 });
        assert.isTrue(observer.targetAdded.calledTwice);
        assert.isTrue(observer.targetAdded.calledWith(subtarget1));
    });
    it('allows observing models in scope', () => {
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.setScopeTarget(target1);
        const observer = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        targetManager.observeModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, observer, { scoped: true });
        assert.isTrue(observer.modelAdded.calledOnceWith(resourceTreeModel(target1)));
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: target2 });
        assert.isTrue(observer.modelAdded.calledOnce);
        const subtarget1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: target1 });
        assert.isTrue(observer.modelAdded.calledTwice);
        assert.isTrue(observer.modelAdded.calledWith(resourceTreeModel(subtarget1)));
    });
    it('calls second observers even if the first is changing the scope', () => {
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.setScopeTarget(target1);
        const observer1 = sinon.stub(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        observer1.modelRemoved.callsFake(() => targetManager.setScopeTarget(target2));
        const observer2 = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        targetManager.observeModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, observer1, { scoped: true });
        targetManager.observeModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.RuntimeModel, observer2, { scoped: true });
        target1.dispose('YOLO!');
        assert.isTrue(observer1.modelRemoved.calledOnce);
        assert.isTrue(observer2.modelRemoved.calledOnce);
    });
    it('allows listening to models in scope', () => {
        const WillReloadPage = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.WillReloadPage;
        const listener = sinon.spy();
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.setScopeTarget(target1);
        const thisObject = {};
        targetManager.addModelListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, WillReloadPage, listener, thisObject, { scoped: true });
        resourceTreeModel(target1).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledOnce);
        assert.isTrue(listener.calledOn(thisObject));
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        resourceTreeModel(target2).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledOnce);
        const subtarget1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ parentTarget: target1 });
        resourceTreeModel(subtarget1).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledTwice);
        targetManager.setScopeTarget(target2);
        resourceTreeModel(target1).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledTwice);
        resourceTreeModel(target2).dispatchEventToListeners(WillReloadPage);
        assert.isTrue(listener.calledThrice);
    });
    it('can transition between scopes', () => {
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const target2 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const targetObserver = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Observer());
        const modelObserver = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        const scopeChangeListener = sinon.spy();
        targetManager.observeTargets(targetObserver, { scoped: true });
        targetManager.observeModels(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel, modelObserver, { scoped: true });
        targetManager.addScopeChangeListener(scopeChangeListener);
        assert.isTrue(targetObserver.targetAdded.calledOnceWith(target1));
        assert.isTrue(modelObserver.modelAdded.calledOnce);
        assert.isFalse(targetObserver.targetRemoved.called);
        assert.isFalse(modelObserver.modelRemoved.called);
        assert.isFalse(scopeChangeListener.called);
        targetObserver.targetAdded.resetHistory();
        modelObserver.modelAdded.resetHistory();
        targetManager.setScopeTarget(target2);
        assert.isTrue(targetObserver.targetRemoved.calledOnceWith(target1));
        assert.isTrue(modelObserver.modelRemoved.calledOnce);
        assert.isTrue(targetObserver.targetAdded.calledOnceWith(target2));
        assert.isTrue(modelObserver.modelAdded.calledOnce);
        assert.isTrue(targetObserver.targetAdded.calledAfter(targetObserver.targetRemoved));
        assert.isTrue(modelObserver.modelAdded.calledAfter(modelObserver.modelRemoved));
        assert.isTrue(scopeChangeListener.called);
        targetObserver.targetAdded.resetHistory();
        targetObserver.targetRemoved.resetHistory();
        modelObserver.modelAdded.resetHistory();
        modelObserver.modelRemoved.resetHistory();
        scopeChangeListener.resetHistory();
        targetManager.setScopeTarget(null);
        assert.isFalse(targetObserver.targetAdded.called);
        assert.isFalse(modelObserver.modelAdded.calledOnce);
        assert.isTrue(targetObserver.targetRemoved.calledOnceWith(target1));
        assert.isTrue(modelObserver.modelRemoved.called);
        assert.isTrue(scopeChangeListener.called);
        targetObserver.targetAdded.resetHistory();
        targetObserver.targetRemoved.resetHistory();
        modelObserver.modelAdded.resetHistory();
        modelObserver.modelRemoved.resetHistory();
        scopeChangeListener.resetHistory();
        const target3 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        assert.isFalse(targetObserver.targetAdded.called);
        assert.isFalse(modelObserver.modelAdded.called);
        assert.isFalse(scopeChangeListener.called);
        targetManager.setScopeTarget(target3);
        assert.isTrue(targetObserver.targetAdded.called);
        assert.isTrue(modelObserver.modelAdded.called);
        assert.isTrue(scopeChangeListener.called);
    });
    it('short-cicuits setting the same scope target', () => {
        const target1 = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        targetManager.setScopeTarget(target1);
        const targetObserver = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Observer());
        const modelObserver = sinon.spy(new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.SDKModelObserver());
        targetObserver.targetAdded.resetHistory();
        targetObserver.targetRemoved.resetHistory();
        modelObserver.modelAdded.resetHistory();
        modelObserver.modelRemoved.resetHistory();
        targetManager.setScopeTarget(target1);
        assert.isFalse(targetObserver.targetAdded.called);
        assert.isFalse(modelObserver.modelAdded.called);
        assert.isFalse(targetObserver.targetRemoved.called);
        assert.isFalse(modelObserver.modelRemoved.called);
    });
    it('notifies about inspected URL change', () => {
        const targets = [(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)(), (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)()];
        const inspectedURLChangedHostApi = sinon.spy(_host_host_js__WEBPACK_IMPORTED_MODULE_2__.InspectorFrontendHost.InspectorFrontendHostInstance, 'inspectedURLChanged');
        const inspectedURLChangedEventListener = sinon.spy();
        targetManager.addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */, inspectedURLChangedEventListener);
        targetManager.setScopeTarget(null);
        assert.isTrue(inspectedURLChangedHostApi.notCalled && inspectedURLChangedEventListener.notCalled);
        targets.forEach(t => t.setInspectedURL(`https://a.com/${t.id()}`));
        assert.isTrue(inspectedURLChangedHostApi.notCalled && inspectedURLChangedEventListener.notCalled);
        targetManager.setScopeTarget(targets[0]);
        assert.isTrue(inspectedURLChangedHostApi.calledOnce && inspectedURLChangedEventListener.calledOnce);
        assert.strictEqual(inspectedURLChangedHostApi.lastCall.firstArg, `https://a.com/${targets[0].id()}`);
        assert.strictEqual(inspectedURLChangedEventListener.lastCall.firstArg.data, targets[0]);
        targetManager.setScopeTarget(targets[0]);
        assert.isTrue(inspectedURLChangedHostApi.calledOnce && inspectedURLChangedEventListener.calledOnce);
        targets.forEach(t => t.setInspectedURL(`https://b.com/${t.id()}`));
        assert.isTrue(inspectedURLChangedHostApi.calledTwice && inspectedURLChangedEventListener.calledTwice);
        assert.strictEqual(inspectedURLChangedHostApi.lastCall.firstArg, `https://b.com/${targets[0].id()}`);
        assert.strictEqual(inspectedURLChangedEventListener.lastCall.firstArg.data, targets[0]);
        targetManager.setScopeTarget(targets[1]);
        assert.isTrue(inspectedURLChangedHostApi.calledThrice && inspectedURLChangedEventListener.calledThrice);
        assert.strictEqual(inspectedURLChangedHostApi.lastCall.firstArg, `https://b.com/${targets[1].id()}`);
        assert.strictEqual(inspectedURLChangedEventListener.lastCall.firstArg.data, targets[1]);
        targets.forEach(t => t.setInspectedURL(`https://c.com/${t.id()}`));
        assert.strictEqual(inspectedURLChangedHostApi.callCount, 4);
        assert.strictEqual(inspectedURLChangedEventListener.callCount, 4);
        assert.strictEqual(inspectedURLChangedHostApi.lastCall.firstArg, `https://c.com/${targets[1].id()}`);
        assert.strictEqual(inspectedURLChangedEventListener.lastCall.firstArg.data, targets[1]);
    });
});
//# sourceMappingURL=TargetManager.test.js.map

/***/ })

}]);