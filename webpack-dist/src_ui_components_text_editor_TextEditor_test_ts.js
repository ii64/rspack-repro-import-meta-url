"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_text_editor_TextEditor_test_ts"],{

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
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


/***/ }),

/***/ "./src/testing/LanguagePluginHelpers.ts":
/*!**********************************************!*\
  !*** ./src/testing/LanguagePluginHelpers.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestPlugin: () => (/* binding */ TestPlugin)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TestPlugin {
    constructor(name) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
    }
    handleScript(_script) {
        return false;
    }
    createPageResourceLoadInitiator() {
        const extensionId = 'chrome-extension-id';
        return {
            target: null,
            frameId: null,
            extensionId,
            initiatorUrl: extensionId,
        };
    }
    async evaluate(_expression, _context, _stopId) {
        return null;
    }
    async getProperties(_objectId) {
        return [];
    }
    async releaseObject(_objectId) {
    }
    async addRawModule(_rawModuleId, _symbolsURL, _rawModule) {
        return [];
    }
    async sourceLocationToRawLocation(_sourceLocation) {
        return [];
    }
    async rawLocationToSourceLocation(_rawLocation) {
        return [];
    }
    async getScopeInfo(type) {
        return { type, typeName: type };
    }
    async listVariablesInScope(_rawLocation) {
        return [];
    }
    async removeRawModule(_rawModuleId) {
    }
    async getFunctionInfo(_rawLocation) {
        return { frames: [] };
    }
    async getInlinedFunctionRanges(_rawLocation) {
        return [];
    }
    async getInlinedCalleesRanges(_rawLocation) {
        return [];
    }
    async getMappedLines(_rawModuleId, _sourceFileURL) {
        return undefined;
    }
}


/***/ }),

/***/ "./src/testing/MockExecutionContext.ts":
/*!*********************************************!*\
  !*** ./src/testing/MockExecutionContext.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockExecutionContext: () => (/* binding */ MockExecutionContext)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class MockExecutionContext extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext {
    constructor(target) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(runtimeModel);
        super(runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    async evaluate(options, userGesture, _awaitPromise) {
        assert.isTrue(userGesture);
        return { error: 'test' };
    }
}


/***/ }),

/***/ "./src/ui/components/text_editor/TextEditor.test.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/text_editor/TextEditor.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/LanguagePluginHelpers.js */ "./src/testing/LanguagePluginHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../testing/MockExecutionContext.js */ "./src/testing/MockExecutionContext.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text_editor.js */ "./src/ui/components/text_editor/text_editor.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













function makeState(doc, extensions = []) {
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorState.create({
        doc,
        extensions: [
            extensions,
            _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(doc),
            _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.autocompletion.instance(),
        ],
    });
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('TextEditor', () => {
    describe('component', () => {
        it('has a state property', () => {
            const editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('one'));
            assert.strictEqual(editor.state.doc.toString(), 'one');
            editor.state = makeState('two');
            assert.strictEqual(editor.state.doc.toString(), 'two');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.editor.state.doc.toString(), 'two');
            editor.editor.dispatch({ changes: { from: 3, insert: '!' } });
            editor.remove();
            assert.strictEqual(editor.editor.state.doc.toString(), 'two!');
        });
        it('sets an aria-label attribute', () => {
            const editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState(''));
            assert.strictEqual(editor.editor.contentDOM.getAttribute('aria-label'), 'Code editor');
        });
        it('can highlight whitespace', () => {
            const editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('line1  \n  line2( )\n\tline3  ', _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.showWhitespace.instance()));
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace, .cm-highlightedSpaces').length, 0);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('all');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedSpaces').length, 4);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedTab').length, 1);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('trailing');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedSpaces').length, 0);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace').length, 2);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('none');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace, .cm-highlightedSpaces').length, 0);
            editor.remove();
        });
        it('should restore scroll to the same position after reconnecting to DOM when it is scrollable', async () => {
            const editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('line1\nline2\nline3\nline4\nline5\nline6andthisisalonglinesothatwehaveenoughspacetoscrollhorizontally', [_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorView.theme({ '&.cm-editor': { height: '50px', width: '50px' }, '.cm-scroller': { overflow: 'auto' } })]));
            const scrollEventHandledToSaveScrollPositionForTest = sinon.stub(editor, 'scrollEventHandledToSaveScrollPositionForTest');
            const waitForFirstScrollPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__.expectCall)(scrollEventHandledToSaveScrollPositionForTest);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            editor.editor.dispatch({
                effects: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorView.scrollIntoView(0, {
                    x: 'start',
                    xMargin: -20,
                    y: 'start',
                    yMargin: -20,
                }),
            });
            await waitForFirstScrollPromise;
            const scrollTopBeforeRemove = editor.editor.scrollDOM.scrollTop;
            const scrollLeftBeforeRemove = editor.editor.scrollDOM.scrollLeft;
            const waitForSecondScrollPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__.expectCall)(scrollEventHandledToSaveScrollPositionForTest);
            editor.remove();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            await waitForSecondScrollPromise;
            const scrollTopAfterReconnect = editor.editor.scrollDOM.scrollTop;
            const scrollLeftAfterReconnect = editor.editor.scrollDOM.scrollLeft;
            assert.strictEqual(scrollTopBeforeRemove, scrollTopAfterReconnect);
            assert.strictEqual(scrollLeftBeforeRemove, scrollLeftAfterReconnect);
        });
    });
    describe('configuration', () => {
        it('can detect line separators', () => {
            assert.strictEqual(makeState('one\r\ntwo\r\nthree').lineBreak, '\r\n');
            assert.strictEqual(makeState('one\ntwo\nthree').lineBreak, '\n');
            assert.strictEqual(makeState('one\r\ntwo\nthree').lineBreak, '\n');
        });
        it('handles dynamic reconfiguration', () => {
            const editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState(''));
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.state.facet(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.indentUnit), '    ');
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('\t');
            assert.strictEqual(editor.state.facet(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.indentUnit), '\t');
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('    ');
        });
        it('does not treat dashes as word chars in CSS', () => {
            const state = makeState('.some-selector {}', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.css.cssLanguage);
            const { from, to } = state.wordAt(1);
            assert.strictEqual(state.sliceDoc(from, to), 'some');
        });
    });
    describe('autocompletion', () => {
        it('can complete builtins and keywords', async () => {
            const state = makeState('c', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
            const result = await _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.javascriptCompletionSource(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.CompletionContext(state, 1, false));
            assert.isNotNull(result);
            const completions = result ? result.options : [];
            assert.isTrue(completions.some(o => o.label === 'clear'));
            assert.isTrue(completions.some(o => o.label === 'continue'));
        });
        async function testQueryType(code, pos, type, range = '', related) {
            const state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
            const query = _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.getQueryType(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.syntaxTree(state), pos, state.doc);
            if (type === undefined) {
                assert.isNull(query);
            }
            else {
                assert.isNotNull(query);
                if (query) {
                    assert.strictEqual(query.type, type);
                    assert.strictEqual(code.slice(query.from ?? pos, pos), range);
                    assert.strictEqual(query.relatedNode && code.slice(query.relatedNode.from, query.relatedNode.to), related);
                }
            }
        }
        it('recognizes expression queries', async () => {
            await testQueryType('foo', 3, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression, 'foo');
            await testQueryType('foo ', 4, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression, '');
            await testQueryType('let', 3, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression, 'let');
        });
        it('recognizes propery name queries', async () => {
            await testQueryType('foo.bar', 7, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, 'bar', 'foo.bar');
            await testQueryType('foo.', 4, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, '', 'foo.');
            await testQueryType('if (foo.', 8, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, '', 'foo.');
            await testQueryType('new foo.bar().', 14, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, '', 'new foo.bar().');
            await testQueryType('foo?.', 5, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, '', 'foo?.');
            await testQueryType('foo?.b', 6, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyName, 'b', 'foo?.b');
        });
        it('recognizes property expression queries', async () => {
            await testQueryType('foo[', 4, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyExpression, '', 'foo[');
            await testQueryType('foo["ba', 7, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PropertyExpression, '"ba', 'foo["ba');
        });
        describe('potential map key retrievals', () => {
            it('recognizes potential maps', async () => {
                await testQueryType('foo.get(', 8, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PotentiallyRetrievingFromMap, '', 'foo');
                await testQueryType('foo\n.get(', 9, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.PotentiallyRetrievingFromMap, '', 'foo');
            });
            it('leaves other expressions as-is', async () => {
                await testQueryType('foo.method(', 11, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression);
                await testQueryType('5 + (', 5, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression);
                await testQueryType('functionCall(', 13, _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.QueryType.Expression);
            });
        });
        it('does not complete in inappropriate places', async () => {
            await testQueryType('"foo bar"', 4);
            await testQueryType('x["foo" + "bar', 14);
            await testQueryType('// comment', 10);
        });
    });
    it('dispatching a transaction from a saved editor reference should not throw an error', () => {
        const textEditor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('one'));
        const editorViewA = textEditor.editor;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(textEditor);
        // textEditor.editor references to EditorView A.
        textEditor.dispatch({ changes: { from: 0, insert: 'a' } });
        // `disconnectedCallback` removed `textEditor.#activeEditor`
        // so reaching to `textEditor.editor` will create a new EditorView after this.
        textEditor.remove();
        // EditorView B is created from the previous state
        // and EditorView B's state is diverged from previous state after this transaction.
        textEditor.dispatch({ changes: { from: 0, insert: 'b' } });
        // directly dispatching from Editor A now calls `textEditor.editor.update`
        // which references to EditorView B that has a different state.
        assert.doesNotThrow(() => editorViewA.dispatch({ changes: { from: 3, insert: '!' } }));
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('TextEditor autocompletion', () => {
    it('does not complete on language plugin frames', async () => {
        const executionContext = new _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_9__.MockExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)());
        const { debuggerModel } = executionContext;
        _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, executionContext);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const { pluginManager } = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({ forceNew: true, targetManager, resourceMapping });
        const testScript = debuggerModel.parsedScriptSource('1', 'script://1', 0, 0, 0, 0, executionContext.id, '', undefined, false, undefined, false, false, 0, null, null, null, null, null, null);
        const payload = {
            callFrameId: '0',
            functionName: 'test',
            functionLocation: undefined,
            location: {
                scriptId: testScript.scriptId,
                lineNumber: 0,
                columnNumber: 0,
            },
            url: 'test-url',
            scopeChain: [],
            this: { type: 'object' },
            returnValue: undefined,
            canBeRestarted: false,
        };
        const callframe = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame(debuggerModel, testScript, payload);
        executionContext.debuggerModel.setSelectedCallFrame(callframe);
        pluginManager.addPlugin(new class extends _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_7__.TestPlugin {
            constructor() {
                super('TextEditorTestPlugin');
            }
            handleScript(script) {
                return script === testScript;
            }
        }());
        const state = makeState('c', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
        const result = await _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.javascriptCompletionSource(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.CompletionContext(state, 1, false));
        assert.isNull(result);
    });
});


/***/ })

}]);