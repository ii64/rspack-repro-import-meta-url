"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_console_ConsoleView_test_js"],{

/***/ "./panels/console/ConsoleView.test.js":
/*!********************************************!*\
  !*** ./panels/console/ConsoleView.test.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/FileManagerHelpers.js */ "./testing/FileManagerHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _console_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./console.js */ "./panels/console/console.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__.describeWithMockConnection)('ConsoleView', () => {
    let consoleView;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.registerNoopActions)(['console.clear', 'console.clear.history', 'console.create-pin']);
        consoleView = _console_js__WEBPACK_IMPORTED_MODULE_10__.ConsoleView.ConsoleView.instance({ forceNew: true, viewportThrottlerTimeout: 0 });
    });
    afterEach(() => {
        consoleView.detach();
    });
    it('adds a title to every checkbox label in the settings view', async () => {
        const consoleSettingsCheckboxes = consoleView.element.querySelector('.toolbar')?.shadowRoot?.querySelectorAll('.toolbar-item.checkbox');
        if (!consoleSettingsCheckboxes) {
            assert.fail('No checkbox found in console settings');
            return;
        }
        for (const checkbox of consoleSettingsCheckboxes) {
            assert.isTrue(checkbox.shadowRoot?.querySelector('.dt-checkbox-text')?.hasAttribute('title'));
        }
        // This test transitively schedules a task which may cause errors if the task
        // is run without the environments set in this test. Thus wait for its completion
        // before proceding to the next test.
        await consoleView.getScheduledRefreshPromiseForTest();
    });
    function createConsoleMessage(target, message, type = "log" /* Protocol.Runtime.ConsoleAPICalledEventType.Log */) {
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleMessage(target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel), "javascript" /* Protocol.Log.LogEntrySource.Javascript */, null, message, { type });
    }
    it('can save to file', async () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)({ parentTarget: tabTarget });
        const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
        assert.exists(consoleModel);
        consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
        consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
        const messagesElement = consoleView.element.querySelector('#console-messages');
        assert.exists(messagesElement);
        const contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getContextMenuForElement)(messagesElement);
        const saveAsItem = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_4__.findMenuItemWithLabel)(contextMenu.saveSection(), 'Save as...');
        assert.exists(saveAsItem);
        const TIMESTAMP = 42;
        const URL_HOST = 'example.com';
        sinon.stub(Date, 'now').returns(TIMESTAMP);
        target.setInspectedURL(`http://${URL_HOST}/foo`);
        const FILENAME = `${URL_HOST}-${TIMESTAMP}.log`;
        const fileManager = (0,_testing_FileManagerHelpers_js__WEBPACK_IMPORTED_MODULE_8__.stubFileManager)();
        const fileManagerCloseCall = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(fileManager.close);
        contextMenu.invokeHandler(saveAsItem.id());
        assert.isTrue(fileManager.save.calledOnceWith(FILENAME, '', true, false));
        await fileManagerCloseCall;
        assert.isTrue(fileManager.append.calledOnceWith(FILENAME, sinon.match('message 1\nmessage 2\n')));
    });
    async function getConsoleMessages() {
        const messagesElement = consoleView.element.querySelector('#console-messages');
        assert.exists(messagesElement);
        await new Promise(resolve => setTimeout(resolve, 0));
        return [...messagesElement.querySelectorAll('.console-message-text')].map(e => e.innerText);
    }
    const messageTests = (inScope) => () => {
        let target;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            consoleView.markAsRoot();
            consoleView.show(document.body);
        });
        it('adds messages', async () => {
            const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
            assert.exists(consoleModel);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
            consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
            consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
            const messages = await getConsoleMessages();
            assert.deepEqual(messages, inScope ? ['message 1', 'message 2'] : []);
        });
        it('prints results', async () => {
            const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
            assert.exists(consoleModel);
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
            assert.exists(runtimeModel);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
            consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.CommandEvaluated, {
                result: new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, undefined, 'number', undefined, 42),
                commandMessage: createConsoleMessage(target, '[ultimateQuestionOfLife, theUniverse, everything].join()'),
            });
            const messages = await getConsoleMessages();
            assert.deepEqual(messages, inScope ? ['42'] : []);
        });
    };
    describe('in scope', messageTests(true));
    describe('out of scope', messageTests(false));
    const handlesSwitchingScope = (preserveLog) => async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(preserveLog);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        consoleView.markAsRoot();
        consoleView.show(document.body);
        const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
        assert.exists(consoleModel);
        consoleModel.addMessage(createConsoleMessage(target, 'message 1'));
        consoleModel.addMessage(createConsoleMessage(target, 'message 2'));
        const anotherConsoleModel = anotherTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
        assert.exists(anotherConsoleModel);
        anotherConsoleModel.addMessage(createConsoleMessage(anotherTarget, 'message 3'));
        assert.deepEqual(await getConsoleMessages(), ['message 1', 'message 2']);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
        assert.deepEqual(await getConsoleMessages(), preserveLog ? ['message 1', 'message 2', 'message 3'] : ['message 3']);
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('preserve-console-log').set(false);
    };
    it('replaces messages when switching scope with preserve log off', handlesSwitchingScope(false));
    it('appends messages when switching scope with preserve log on', handlesSwitchingScope(true));
    describe('self-XSS warning', () => {
        let target;
        beforeEach(() => {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
            consoleView.markAsRoot();
            consoleView.show(document.body);
        });
        it('shows', async () => {
            const dt = new DataTransfer();
            dt.setData('text/plain', 'foo');
            const messagesElement = consoleView.element.querySelector('#console-messages');
            assert.instanceOf(messagesElement, HTMLElement);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchPasteEvent)(messagesElement, { clipboardData: dt, bubbles: true });
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().messages()[0].text, 'Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and hit Enter to allow pasting.');
        });
        it('is turned off when console history reaches a length of 5', async () => {
            const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
            assert.exists(consoleModel);
            const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
            assert.exists(runtimeModel);
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel.requestClearMessages();
            const selfXssWarningDisabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, "Synced" /* Common.Settings.SettingStorageType.Synced */);
            for (let i = 0; i < 5; i++) {
                assert.isFalse(selfXssWarningDisabledSetting.get());
                consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.MessageAdded, createConsoleMessage(target, String(i), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.FrontendMessageType.Command));
            }
            assert.isTrue(selfXssWarningDisabledSetting.get());
        });
        it('is not shown when disabled via command line', () => {
            const stub = sinon.stub(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime, 'queryParam');
            stub.withArgs('disableSelfXssWarnings').returns('true');
            const dt = new DataTransfer();
            dt.setData('text/plain', 'foo');
            const messagesElement = consoleView.element.querySelector('#console-messages');
            assert.instanceOf(messagesElement, HTMLElement);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchPasteEvent)(messagesElement, { clipboardData: dt, bubbles: true });
            assert.strictEqual(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().messages().length, 0);
            stub.restore();
        });
    });
    it('appends commands to the history right away', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().setScopeTarget(target);
        consoleView.markAsRoot();
        consoleView.show(document.body);
        const consoleModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.ConsoleModel);
        assert.exists(consoleModel);
        const consoleHistorySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-history', []);
        consoleModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.Events.MessageAdded, createConsoleMessage(target, 'await new Promise(() => ())', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleModel.FrontendMessageType.Command));
        assert.deepStrictEqual(consoleHistorySetting.get(), ['await new Promise(() => ())']);
    });
    it('keeps updating the issue counter when re-attached after detaching', async () => {
        consoleView.markAsRoot();
        const spy = sinon.spy(consoleView, 'issuesCountUpdatedForTest');
        const issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.IssuesManager.IssuesManager.instance();
        issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */);
        assert.isTrue(spy.calledOnce);
        // Pauses updating the issue counter
        consoleView.onDetach();
        issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */);
        assert.isTrue(spy.calledOnce);
        // Continues updating the issue counter
        consoleView.show(document.body);
        issuesManager.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */);
        assert.isTrue(spy.calledTwice);
    });
});
//# sourceMappingURL=ConsoleView.test.js.map

/***/ }),

/***/ "./testing/ContextMenuHelpers.js":
/*!***************************************!*\
  !*** ./testing/ContextMenuHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMenuItemWithLabel: () => (/* binding */ findMenuItemWithLabel),
/* harmony export */   getContextMenuForElement: () => (/* binding */ getContextMenuForElement),
/* harmony export */   getMenuForShiftClick: () => (/* binding */ getMenuForShiftClick),
/* harmony export */   getMenuForToolbarButton: () => (/* binding */ getMenuForToolbarButton),
/* harmony export */   getMenuItemLabels: () => (/* binding */ getMenuItemLabels)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    const sandbox = sinon.createSandbox();
    const contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(() => {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find((item) => item.buildDescriptor().label === label);
}
function getMenuItemLabels(section) {
    return section.items.map((item) => item.buildDescriptor().label);
}
function getContextMenuForElement(element, target) {
    return getMenu(() => {
        const event = new MouseEvent('contextmenu', { bubbles: true });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(() => {
        element.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
    });
}
//# sourceMappingURL=ContextMenuHelpers.js.map

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ }),

/***/ "./testing/FileManagerHelpers.js":
/*!***************************************!*\
  !*** ./testing/FileManagerHelpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stubFileManager: () => (/* binding */ stubFileManager)
/* harmony export */ });
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function stubFileManager() {
    const fileManager = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_0__.FileManager.FileManager.instance();
    sinon.stub(fileManager, 'save').callsFake(async (file, _2, _3) => ({ fileSystemPath: file }));
    sinon.stub(fileManager, 'append').callsFake(file => {
        fileManager.dispatchEventToListeners("AppendedToURL" /* Workspace.FileManager.Events.AppendedToURL */, file);
    });
    sinon.stub(fileManager, 'close');
    return fileManager;
}
//# sourceMappingURL=FileManagerHelpers.js.map

/***/ })

}]);