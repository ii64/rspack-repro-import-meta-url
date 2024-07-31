"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_console_ConsolePrompt_test_ts"],{

/***/ "./src/panels/console/ConsolePrompt.test.ts":
/*!**************************************************!*\
  !*** ./src/panels/console/ConsolePrompt.test.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _console_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./console.js */ "./src/panels/console/console.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ConsoleContextSelector', () => {
    let target;
    let consolePrompt;
    let keyBinding;
    let evaluateOnTarget;
    let editor;
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.registerNoopActions)(['console.clear', 'console.clear.history', 'console.create-pin']);
        const keymapOf = sinon.spy(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.keymap, 'of');
        consolePrompt = new _console_js__WEBPACK_IMPORTED_MODULE_6__.ConsolePrompt.ConsolePrompt();
        assert.isTrue(keymapOf.called);
        keyBinding = keymapOf.firstCall.firstArg;
        const editorContainer = consolePrompt.element.querySelector('.console-prompt-editor-container');
        editor = editorContainer.firstElementChild;
        editor.state = { doc: 'foo', selection: { main: { head: 42 } } };
        editor.dispatch = () => { };
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const targetContext = createExecutionContext(target);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, targetContext);
        evaluateOnTarget = sinon.stub(target.runtimeAgent(), 'invoke_evaluate');
    });
    let id = 0;
    function createExecutionContext(target) {
        ++id;
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Runtime.executionContextCreated', {
            context: {
                id,
                origin: 'http://example.com',
                name: `c${id}`,
                uniqueId: `c${id}`,
                auxData: {
                    frameId: 'f2',
                },
            },
        });
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        assert.exists(runtimeModel);
        const executionContext = runtimeModel.executionContext(id);
        assert.exists(executionContext);
        return executionContext;
    }
    function compileScriptResponse(exception) {
        const exceptionDetails = exception ? { exception: { description: exception } } : undefined;
        return { exceptionDetails, getError: () => { } };
    }
    it('evaluates on enter', async () => {
        const enterBinding = keyBinding.find(b => b.key === 'Enter');
        sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
        enterBinding.run({});
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(evaluateOnTarget.called);
    });
    it('allows user to enable pasting by typing \'allow pasting\'', async () => {
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingStorageType.Synced);
        assert.isFalse(setting.get());
        const enterBinding = keyBinding.find(b => b.key === 'Enter');
        sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
        consolePrompt.showSelfXssWarning();
        enterBinding.run({});
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(setting.get());
        consolePrompt.showSelfXssWarning();
        editor.state = { doc: 'allow pasting', selection: { main: { head: 42 } } };
        enterBinding.run({});
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(setting.get());
    });
    it('does not evaluate incomplete expression', async () => {
        const enterBinding = keyBinding.find(b => b.key === 'Enter');
        sinon.stub(target.runtimeAgent(), 'invoke_compileScript')
            .resolves(compileScriptResponse('SyntaxError: Unexpected end of input'));
        enterBinding.run({});
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(evaluateOnTarget.called);
    });
    it('evaluate incomplete expression if forced', async () => {
        const ctrlEnterBinding = keyBinding.find(b => b.key === 'Ctrl-Enter');
        sinon.stub(target.runtimeAgent(), 'invoke_compileScript')
            .resolves(compileScriptResponse('SyntaxError: Unexpected end of input'));
        ctrlEnterBinding.run({});
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(evaluateOnTarget.called);
    });
    it('does not evaluate if the current context has changed', async () => {
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const anotherTargetContext = createExecutionContext(target);
        const evaluateOnAnotherTarget = sinon.stub(anotherTarget.runtimeAgent(), 'invoke_evaluate');
        const enterBinding = keyBinding.find(b => b.key === 'Enter');
        sinon.stub(target.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
        sinon.stub(anotherTarget.runtimeAgent(), 'invoke_compileScript').resolves(compileScriptResponse());
        enterBinding.run({});
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, anotherTargetContext);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(evaluateOnAnotherTarget.called);
        assert.isFalse(evaluateOnTarget.called);
    });
});


/***/ })

}]);