"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ResourceTreeModel_test_js"], {
"./core/sdk/ResourceTreeModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ResourceTreeModel', function() {
    var getResourceTreeModel = function getResourceTreeModel(target) {
        var resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        return resourceTreeModel;
    };
    it('calls clearRequests on reloadPage', /*#__PURE__*/ _async_to_generator(function() {
        var resourceTreeModel, clearRequests;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)())
                    ];
                case 1:
                    resourceTreeModel = _state.sent();
                    clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
                    resourceTreeModel.reloadPage();
                    assert.isTrue(clearRequests.calledOnce, 'Not called just once');
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls clearRequests on top frame navigated', function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        var clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
        assert.isTrue(clearRequests.calledOnce, 'Not called just once');
    });
    it('does not call clearRequests on non-top frame navigated', /*#__PURE__*/ _async_to_generator(function() {
        var target, clearRequests;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    clearRequests = sinon.stub(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager.prototype, 'clearRequests');
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.addChildFrame)(target)
                    ];
                case 1:
                    _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate.apply(void 0, [
                        _state.sent()
                    ]);
                    assert.isTrue(clearRequests.notCalled, 'Called unexpctedly');
                    return [
                        2
                    ];
            }
        });
    }));
    it('added frame has storageKey when navigated', /*#__PURE__*/ _async_to_generator(function() {
        var testKey, target, resourceTreeModel, frames, addedFrame, key;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    testKey = 'test-storage-key';
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                    assert.isEmpty(resourceTreeModel.frames());
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', function() {
                        return {
                            storageKey: testKey
                        };
                    });
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
                    frames = resourceTreeModel.frames();
                    assert.lengthOf(frames, 1);
                    addedFrame = frames[0];
                    return [
                        4,
                        addedFrame.getStorageKey(false)
                    ];
                case 1:
                    key = _state.sent();
                    assert.strictEqual(key, testKey);
                    return [
                        2
                    ];
            }
        });
    }));
    it('storage key gets updated when frame tree changes', /*#__PURE__*/ _async_to_generator(function() {
        var testKey, target, resourceTreeModel, manager, storageKeyAddedPromise, mainStorageKeyChangedPromise, storageKeyRemovedPromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    testKey = 'test-storage-key';
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                    assert.isEmpty(resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.frames());
                    manager = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
                    assert.exists(manager);
                    storageKeyAddedPromise = new Promise(function(resolve) {
                        manager.addEventListener("StorageKeyAdded" /* SDK.StorageKeyManager.Events.StorageKeyAdded */ , function() {
                            resolve();
                        });
                    });
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', function() {
                        return {
                            storageKey: testKey
                        };
                    });
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
                    return [
                        4,
                        storageKeyAddedPromise
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.frames().length, 1);
                    mainStorageKeyChangedPromise = new Promise(function(resolve) {
                        manager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */ , function() {
                            resolve();
                        });
                    });
                    storageKeyRemovedPromise = new Promise(function(resolve) {
                        manager.addEventListener("StorageKeyRemoved" /* SDK.StorageKeyManager.Events.StorageKeyRemoved */ , function() {
                            resolve();
                        });
                    });
                    resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.frameDetached('main', false);
                    assert.isEmpty(resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.frames());
                    return [
                        4,
                        Promise.all([
                            mainStorageKeyChangedPromise,
                            storageKeyRemovedPromise
                        ])
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls reloads only top frames', function() {
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
            type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab
        });
        var mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
            parentTarget: tabTarget
        });
        var subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
            parentTarget: mainFrameTarget
        });
        var reloadMainFramePage = sinon.spy(getResourceTreeModel(mainFrameTarget), 'reloadPage');
        var reloadSubframePage = sinon.spy(getResourceTreeModel(subframeTarget), 'reloadPage');
        _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel.reloadAllPages();
        assert.isTrue(reloadMainFramePage.calledOnce);
        assert.isTrue(reloadSubframePage.notCalled);
    });
    it('tags reloads with the targets loaderId', /*#__PURE__*/ _async_to_generator(function() {
        var target, resourceTreeModel, reload;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    return [
                        4,
                        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(target)
                    ];
                case 1:
                    resourceTreeModel = _state.sent();
                    reload = sinon.spy(target.pageAgent(), 'invoke_reload');
                    assert.isNotNull(resourceTreeModel.mainFrame);
                    resourceTreeModel.reloadPage();
                    assert.isTrue(reload.calledOnce);
                    assert.deepStrictEqual(reload.args[0], [
                        {
                            ignoreCache: undefined,
                            loaderId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.LOADER_ID,
                            scriptToEvaluateOnLoad: undefined
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('identifies not top frame', /*#__PURE__*/ _async_to_generator(function() {
        var tabTarget, mainFrameTarget, subframeTarget;
        return _ts_generator(this, function(_state) {
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab
            });
            mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                parentTarget: tabTarget
            });
            subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                parentTarget: mainFrameTarget
            });
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), {
                parentId: 'parentId'
            });
            assert.isTrue(getResourceTreeModel(mainFrameTarget).mainFrame.isOutermostFrame());
            assert.isFalse(getResourceTreeModel(subframeTarget).mainFrame.isOutermostFrame());
            return [
                2
            ];
        });
    }));
    it('emits PrimaryPageChanged event upon prerender activation', /*#__PURE__*/ _async_to_generator(function() {
        var tabTarget, childTargetManager, targetId, targetInfo, prerenderTarget, resourceTreeModel, primaryPageChangedEvents, frame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _sdk_js__WEBPACK_IMPORTED_MODULE_3__.ChildTargetManager.ChildTargetManager.install();
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                        type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab
                    });
                    childTargetManager = tabTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ChildTargetManager.ChildTargetManager);
                    assert.exists(childTargetManager);
                    targetId = 'target_id';
                    targetInfo = {
                        targetId: targetId,
                        type: 'page',
                        title: 'title',
                        url: 'http://example.com/prerendered.html',
                        attached: true,
                        canAccessOpener: false,
                        subtype: 'prerender'
                    };
                    childTargetManager.targetCreated({
                        targetInfo: targetInfo
                    });
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: 'session_id',
                            targetInfo: targetInfo,
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    prerenderTarget = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targetById(targetId);
                    assert.exists(prerenderTarget);
                    resourceTreeModel = prerenderTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    primaryPageChangedEvents = [];
                    resourceTreeModel.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, function(event) {
                        return primaryPageChangedEvents.push(event.data);
                    });
                    frame = resourceTreeModel.frameAttached('frame_id', null);
                    childTargetManager.targetInfoChanged({
                        targetInfo: _object_spread_props(_object_spread({}, targetInfo), {
                            subtype: undefined
                        })
                    });
                    assert.strictEqual(primaryPageChangedEvents.length, 1);
                    assert.strictEqual(primaryPageChangedEvents[0].frame, frame);
                    assert.strictEqual(primaryPageChangedEvents[0].type, "Activation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Activation */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('emits PrimaryPageChanged event only upon navigation of the primary frame', /*#__PURE__*/ _async_to_generator(function() {
        var tabTarget, mainFrameTarget, subframeTarget, prerenderTarget, primaryPageChangedEvents;
        return _ts_generator(this, function(_state) {
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                type: _sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Type.Tab
            });
            mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                parentTarget: tabTarget
            });
            subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                parentTarget: mainFrameTarget
            });
            prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
                parentTarget: tabTarget,
                subtype: 'prerender'
            });
            primaryPageChangedEvents = [];
            [
                getResourceTreeModel(mainFrameTarget),
                getResourceTreeModel(subframeTarget),
                getResourceTreeModel(prerenderTarget)
            ].forEach(function(resourceTreeModel) {
                resourceTreeModel.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.PrimaryPageChanged, function(event) {
                    return primaryPageChangedEvents.push(event.data);
                });
            });
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
            assert.strictEqual(primaryPageChangedEvents.length, 1);
            assert.strictEqual(primaryPageChangedEvents[0].frame.id, 'main');
            assert.strictEqual(primaryPageChangedEvents[0].type, "Navigation" /* SDK.ResourceTreeModel.PrimaryPageChangeType.Navigation */ );
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), {
                parentId: _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.MAIN_FRAME_ID,
                id: 'child'
            });
            assert.strictEqual(primaryPageChangedEvents.length, 1);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(prerenderTarget));
            assert.strictEqual(primaryPageChangedEvents.length, 1);
            return [
                2
            ];
        });
    }));
    it('rebuilds the resource tree upon bfcache-navigation', /*#__PURE__*/ _async_to_generator(function() {
        var target, frameManager, removedFromFrameManagerSpy, addedToFrameManagerSpy, resourceTreeModel, cachedResourcesLoaded, processPendingEventsSpy, initialFrame, frameAfterNav;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    frameManager = _sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance();
                    removedFromFrameManagerSpy = sinon.spy(frameManager, 'modelRemoved');
                    addedToFrameManagerSpy = sinon.spy(frameManager, 'modelAdded');
                    resourceTreeModel = getResourceTreeModel(target);
                    return [
                        4,
                        resourceTreeModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded)
                    ];
                case 1:
                    _state.sent();
                    cachedResourcesLoaded = resourceTreeModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.CachedResourcesLoaded);
                    processPendingEventsSpy = sinon.spy(resourceTreeModel, 'processPendingEvents');
                    initialFrame = resourceTreeModel.frames()[0];
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */ );
                    return [
                        4,
                        cachedResourcesLoaded
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(removedFromFrameManagerSpy.calledOnce);
                    assert.isTrue(addedToFrameManagerSpy.calledOnce);
                    assert.isTrue(processPendingEventsSpy.calledTwice);
                    frameAfterNav = resourceTreeModel.frames()[0];
                    assert.strictEqual(initialFrame, frameAfterNav, 'Instead of keeping the existing frame, a new frame was created upon bfcache-navigation');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ResourceTreeModel.test.js.map


}),

}]);