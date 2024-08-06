"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_FrameManager_test_js"],{

/***/ "./core/sdk/FrameManager.test.js":
/*!***************************************!*\
  !*** ./core/sdk/FrameManager.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class MockResourceTreeModel extends _common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    targetId;
    constructor(id) {
        super();
        this.targetId = id;
    }
    target() {
        return {
            id: () => this.targetId,
            parentTarget: () => null,
        };
    }
}
class MockResourceTreeFrame {
    targetId;
    id;
    getCreationStackTraceData = () => { };
    constructor(frameId, targetId) {
        this.id = frameId;
        this.targetId = targetId;
    }
    resourceTreeModel = () => ({
        target: () => ({
            id: () => this.targetId,
        }),
    });
    isMainFrame = () => true;
    isOutermostFrame = () => true;
    setCreationStackTrace = () => { };
    getAdScriptId = () => null;
    setAdScriptId = () => { };
    getDebuggerId = () => null;
    setDebuggerId = () => { };
}
function mockFrameToObjectForAssertion(mockFrame) {
    return {
        targetId: mockFrame.targetId,
        id: mockFrame.id,
    };
}
const fakeScriptId = '1';
describe('FrameManager', () => {
    function attachMockModel(frameManager, targetId) {
        const mockModel = new MockResourceTreeModel(targetId);
        frameManager.modelAdded(mockModel);
        return mockModel;
    }
    function addMockFrame(model, frameId) {
        const targetId = model.target().id();
        const mockFrame = new MockResourceTreeFrame(frameId, targetId);
        model.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, mockFrame);
        return mockFrame;
    }
    function setupEventSink(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    frameManager, events) {
        const dispatchedEvents = [];
        for (const event of events) {
            frameManager.addEventListener(event, e => dispatchedEvents.push({ type: event || '', data: e.data }));
        }
        return dispatchedEvents;
    }
    const frameId = 'frame-id';
    const parentFrameId = 'parent-frame-id';
    const childFrameId = 'child-frame-id';
    const targetId = 'target-id';
    const parentTargetId = 'parent-frame-id';
    const childTargetId = 'child-frame-id';
    it('collects frames from a ResourceTreeModel', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const dispatchedEvents = setupEventSink(frameManager, ["FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */]);
        const mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, frameId);
        const frameIds = dispatchedEvents.map(event => event.data.frame.id);
        assert.deepStrictEqual(frameIds, [frameId]);
        const frameFromId = frameManager.getFrame(frameId);
        assert.strictEqual(frameFromId?.id, frameId);
    });
    it('handles attachment and detachment of frames', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const dispatchedEvents = setupEventSink(frameManager, ["FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */, "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */]);
        const mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, parentFrameId);
        const mockChildFrame = addMockFrame(mockModel, childFrameId);
        mockModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, { frame: mockChildFrame, isSwap: false });
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: targetId,
            id: parentFrameId,
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: targetId,
            id: childFrameId,
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[2].data, { frameId: childFrameId });
        let frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId?.id, parentFrameId);
        assert.strictEqual(frameFromId?.resourceTreeModel().target().id(), targetId);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId, null);
    });
    it('handles removal of target', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const dispatchedEvents = setupEventSink(frameManager, ["FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */, "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */]);
        const mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, parentFrameId);
        addMockFrame(mockModel, childFrameId);
        frameManager.modelRemoved(mockModel);
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: targetId,
            id: parentFrameId,
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: targetId,
            id: childFrameId,
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[2].data, { frameId: parentFrameId });
        assert.strictEqual(dispatchedEvents[3].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[3].data, { frameId: childFrameId });
        let frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId, null);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId, null);
    });
    it('handles a frame transferring to a different target', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const dispatchedEvents = setupEventSink(frameManager, ["FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */, "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */]);
        const mockParentModel = attachMockModel(frameManager, parentTargetId);
        addMockFrame(mockParentModel, parentFrameId);
        const mockChildModel = attachMockModel(frameManager, childTargetId);
        const mockChildFrameParentTarget = addMockFrame(mockParentModel, childFrameId);
        addMockFrame(mockChildModel, childFrameId);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, { frame: mockChildFrameParentTarget, isSwap: true });
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: parentTargetId,
            id: parentFrameId,
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: parentTargetId,
            id: childFrameId,
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[2].data.frame), {
            targetId: childTargetId,
            id: childFrameId,
        });
        let frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId?.id, parentFrameId);
        assert.strictEqual(frameFromId?.resourceTreeModel().target().id(), parentTargetId);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId?.id, childFrameId);
        assert.strictEqual(frameFromId?.resourceTreeModel().target().id(), childTargetId);
    });
    it('transfers frame creation stack traces during OOPIF transfer (case 1)', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const mockParentModel = attachMockModel(frameManager, parentTargetId);
        const mockChildModel = attachMockModel(frameManager, childTargetId);
        const trace = {
            callFrames: [
                {
                    functionName: 'function1',
                    url: 'http://www.example.com/script1.js',
                    lineNumber: 15,
                    columnNumber: 10,
                    scriptId: fakeScriptId,
                },
                {
                    functionName: 'function2',
                    url: 'http://www.example.com/script2.js',
                    lineNumber: 20,
                    columnNumber: 5,
                    scriptId: fakeScriptId,
                },
            ],
        };
        // step 1) frame added to existing target
        const frameOldTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockParentModel, null, frameId, null, trace);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameOldTarget);
        // step 2) frame added to new target
        const frameNewTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockChildModel, null, frameId, null, null);
        mockChildModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameNewTarget);
        // step 3) frame removed from existing target
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, { frame: frameOldTarget, isSwap: true });
        const frame = frameManager.getFrame(frameId);
        const { creationStackTrace, creationStackTraceTarget } = frame.getCreationStackTraceData();
        assert.deepEqual(creationStackTrace, trace);
        assert.strictEqual(creationStackTraceTarget.id(), parentTargetId);
    });
    it('transfers frame creation stack traces during OOPIF transfer (case 2)', () => {
        const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        const mockParentModel = attachMockModel(frameManager, parentTargetId);
        const mockChildModel = attachMockModel(frameManager, childTargetId);
        const trace = {
            callFrames: [
                {
                    functionName: 'function1',
                    url: 'http://www.example.com/script1.js',
                    lineNumber: 15,
                    columnNumber: 10,
                    scriptId: fakeScriptId,
                },
                {
                    functionName: 'function2',
                    url: 'http://www.example.com/script2.js',
                    lineNumber: 20,
                    columnNumber: 5,
                    scriptId: fakeScriptId,
                },
            ],
        };
        // step 1) frame added to existing target
        const frameOldTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockParentModel, null, frameId, null, trace);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameOldTarget);
        // step 2) frame removed from existing target
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, { frame: frameOldTarget, isSwap: true });
        // step 3) frame added to new target
        const frameNewTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockChildModel, null, frameId, null, null);
        mockChildModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameNewTarget);
        const frame = frameManager.getFrame(frameId);
        const { creationStackTrace, creationStackTraceTarget } = frame.getCreationStackTraceData();
        assert.deepEqual(creationStackTrace, trace);
        assert.strictEqual(creationStackTraceTarget.id(), parentTargetId);
    });
    describe('getOutermostFrame', () => {
        it('returns null when no frames are attached', () => {
            const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
            assert.isNull(frameManager.getOutermostFrame());
        });
        it('returns the top main frame', () => {
            const frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
            const mockModel = attachMockModel(frameManager, targetId);
            addMockFrame(mockModel, frameId);
            assert.strictEqual(frameManager.getOutermostFrame()?.id, frameId);
        });
    });
});
//# sourceMappingURL=FrameManager.test.js.map

/***/ })

}]);