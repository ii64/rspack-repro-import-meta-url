"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_ConsoleModel_test_js"],{

/***/ "./core/sdk/ConsoleModel.test.js":
/*!***************************************!*\
  !*** ./core/sdk/ConsoleModel.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ConsoleMessage', () => {
    const scriptId1 = '1';
    const scriptId2 = '2';
    function newMessage({ source = _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.FrontendMessageSource.ConsoleAPI, message = 'Message', url, scriptId, executionContextId, stackTrace, }) {
        return new _sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleMessage(null, source, null, message, { url, executionContextId, scriptId, stackTrace });
    }
    it('compares using message', () => {
        const a = newMessage({});
        const b = newMessage({});
        const c = newMessage({ message: 'DifferentMessage' });
        assert.isTrue(a.isEqual(b));
        assert.isFalse(b.isEqual(c));
        assert.isFalse(c.isEqual(a));
        assert.isTrue(c.isEqual(c));
    });
    it('compares using source', () => {
        const a = newMessage({});
        const b = newMessage({});
        const c = newMessage({ source: _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.FrontendMessageSource.CSS });
        assert.isTrue(a.isEqual(b));
        assert.isFalse(b.isEqual(c));
        assert.isFalse(c.isEqual(a));
    });
    it('compares using url', () => {
        const a = newMessage({});
        const b = newMessage({ url: 'http://a.b/c' });
        const c = newMessage({ url: 'http://a.b/c' });
        const d = newMessage({ url: 'http://a.b/d' });
        assert.isFalse(a.isEqual(b));
        assert.isTrue(b.isEqual(c));
        assert.isFalse(c.isEqual(d));
        assert.isFalse(d.isEqual(a));
    });
    it('compares using execution context and script id', () => {
        const a = newMessage({});
        const b = newMessage({ executionContextId: 5, scriptId: scriptId1 });
        const c = newMessage({ executionContextId: 5, scriptId: scriptId1 });
        const d = newMessage({ executionContextId: 6, scriptId: scriptId1 });
        const e = newMessage({ executionContextId: 5, scriptId: scriptId2 });
        assert.isFalse(a.isEqual(b));
        assert.isFalse(b.isEqual(a));
        assert.isTrue(b.isEqual(c));
        assert.isFalse(c.isEqual(d));
        assert.isFalse(c.isEqual(e));
    });
    it('compares using script ids in stack traces', () => {
        const functionName = 'foo';
        const url = 'http://localhost/foo.js';
        const lineNumber = 1;
        const columnNumber = 1;
        const a = newMessage({ stackTrace: { callFrames: [{ functionName, scriptId: scriptId1, url, lineNumber, columnNumber }] } });
        const b = newMessage({ stackTrace: { callFrames: [{ functionName, scriptId: scriptId2, url, lineNumber, columnNumber }] } });
        assert.isFalse(a.isEqual(b));
    });
    it('logs a message on main frame navigation', async () => {
        _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(true);
        const consoleLog = sinon.spy(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.Console.instance(), 'log');
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: mainFrameTarget });
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(subframeTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget));
        assert.isTrue(consoleLog.notCalled);
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(mainFrameTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget));
        assert.isTrue(consoleLog.calledOnce);
        assert.isTrue(consoleLog.calledOnceWith(`Navigated to ${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FRAME_URL}`));
    });
    it('logs a message on main frame navigation via bfcache', async () => {
        _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(true);
        const consoleLog = sinon.spy(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Console.Console.instance(), 'log');
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: mainFrameTarget });
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(subframeTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(subframeTarget), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */);
        assert.isTrue(consoleLog.notCalled);
        await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getInitializedResourceTreeModel)(mainFrameTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(mainFrameTarget), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */);
        assert.isTrue(consoleLog.calledOnce);
        assert.isTrue(consoleLog.calledOnceWith(`Navigation to ${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.FRAME_URL} was restored from back/forward cache (see https://web.dev/bfcache/)`));
    });
    it('discards duplicate console messages with identical timestamps', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame });
        const runtimeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        const resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
        assert.exists(resourceTreeModel);
        const consoleModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel);
        assert.exists(consoleModel);
        const addMessage = sinon.spy(consoleModel, 'addMessage');
        resourceTreeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
        const consoleAPICall = {
            type: "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */,
            args: [{ type: "string" /* Protocol.Runtime.RemoteObjectType.String */, value: 'log me' }],
            executionContextId: 1,
            timestamp: 123456.789,
        };
        runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, consoleAPICall);
        assert.isTrue(addMessage.calledOnce);
        assert.isTrue(addMessage.calledOnceWith(sinon.match({ messageText: 'log me' })));
        runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, consoleAPICall);
        assert.isTrue(addMessage.calledOnce);
        runtimeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.Events.ConsoleAPICalled, { ...consoleAPICall, timestamp: 123457.000 });
        assert.isTrue(addMessage.calledTwice);
        assert.isTrue(addMessage.secondCall.calledWith(sinon.match({ messageText: 'log me' })));
    });
    it('clears when main frame global object cleared', async () => {
        _common_common_js__WEBPACK_IMPORTED_MODULE_3__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(false);
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Tab });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: tabTarget });
        const subframeTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({ type: _sdk_js__WEBPACK_IMPORTED_MODULE_4__.Target.Type.Frame, parentTarget: mainFrameTarget });
        const clearGlobalObjectOnTarget = (target) => {
            const resourceTreeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.ResourceTreeModel);
            assert.exists(resourceTreeModel);
            resourceTreeModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ResourceTreeModel.Events.CachedResourcesLoaded, resourceTreeModel);
            const debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel);
            assert.exists(debuggerModel);
            debuggerModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.GlobalObjectCleared, debuggerModel);
        };
        let consoleClearEventsTabTarget = 0;
        let consoleClearEventsMainFrameTarget = 0;
        let consoleClearEventsSubframeTarget = 0;
        tabTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)
            ?.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, () => ++consoleClearEventsTabTarget);
        mainFrameTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)
            ?.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, () => ++consoleClearEventsMainFrameTarget);
        subframeTarget.model(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.ConsoleModel)
            ?.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleModel.Events.ConsoleCleared, () => ++consoleClearEventsSubframeTarget);
        clearGlobalObjectOnTarget(subframeTarget);
        assert.strictEqual(consoleClearEventsTabTarget, 0);
        assert.strictEqual(consoleClearEventsMainFrameTarget, 0);
        assert.strictEqual(consoleClearEventsSubframeTarget, 0);
        clearGlobalObjectOnTarget(mainFrameTarget);
        assert.strictEqual(consoleClearEventsTabTarget, 0);
        assert.strictEqual(consoleClearEventsMainFrameTarget, 1);
        assert.strictEqual(consoleClearEventsSubframeTarget, 0);
    });
});
//# sourceMappingURL=ConsoleModel.test.js.map

/***/ })

}]);