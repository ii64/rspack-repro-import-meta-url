"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_text_editor_TextEditorHistory_test_js"], {
"./ui/components/text_editor/TextEditorHistory.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _text_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text_editor.js */ "./ui/components/text_editor/text_editor.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




var Direction = _text_editor_js__WEBPACK_IMPORTED_MODULE_3__.TextEditorHistory.Direction;
function setCodeMirrorContent(editor, content) {
    editor.dispatch({
        changes: {
            from: 0,
            to: editor.state.doc.length,
            insert: content
        }
    });
    assert.strictEqual(editor.state.doc.toString(), content);
}
function setCursorPosition(editor, pos) {
    editor.dispatch({
        selection: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorSelection.cursor(pos)
    });
    assert.strictEqual(editor.state.selection.main.head, pos);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TextEditorHistory', function() {
    var history;
    var editor;
    var textEditor;
    var editorHistory;
    beforeEach(function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('history', []);
        history = new _text_editor_js__WEBPACK_IMPORTED_MODULE_3__.AutocompleteHistory.AutocompleteHistory(setting);
        textEditor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_3__.TextEditor.TextEditor();
        editor = textEditor.editor; // Triggers actual editor creation.
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(textEditor);
        editorHistory = new _text_editor_js__WEBPACK_IMPORTED_MODULE_3__.TextEditorHistory.TextEditorHistory(textEditor, history);
    });
    afterEach(function() {
        // Manually remove the text editor from the DOM. The TextEditor
        // "disconnect" callback requires a settings environment.
        textEditor.remove();
    });
    describe('moveHistory', function() {
        it('can move through the history backwards', function() {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            assert.strictEqual(editor.state.doc.toString(), 'entry 2');
        });
        it('can move through the history forwards', function() {
            history.pushHistoryItem('entry 1');
            history.pushHistoryItem('entry 2');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            editorHistory.moveHistory(1 /* Direction.FORWARD */ );
            assert.strictEqual(editor.state.doc.toString(), 'entry 2');
        });
        it('does not forget about the current input', function() {
            history.pushHistoryItem('entry 1');
            setCodeMirrorContent(editor, 'temporary content');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            editorHistory.moveHistory(1 /* Direction.FORWARD */ );
            assert.strictEqual(editor.state.doc.toString(), 'temporary content');
        });
        it('does not go backwards if the cursor is not in the first line', function() {
            history.pushHistoryItem('entry 1');
            var editorText = 'first line\nsecond line';
            setCodeMirrorContent(editor, editorText);
            setCursorPosition(editor, editorText.length);
            assert.isFalse(editorHistory.moveHistory(-1 /* Direction.BACKWARD */ ));
            assert.strictEqual(editor.state.doc.toString(), editorText);
        });
        it('does go backwards if the cursor is not in the first line, but force is specified', function() {
            history.pushHistoryItem('entry 1');
            var editorText = 'first line\nsecond line';
            setCodeMirrorContent(editor, editorText);
            setCursorPosition(editor, editorText.length);
            assert.isTrue(editorHistory.moveHistory(-1 /* Direction.BACKWARD */ , /* force */ true));
            assert.strictEqual(editor.state.doc.toString(), 'entry 1');
        });
        it('does not go forwards if the cursor is not in the last line', function() {
            history.pushHistoryItem('first line\nsecond line');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            setCursorPosition(editor, 5); // Somewhere on the first line.
            assert.isFalse(editorHistory.moveHistory(1 /* Direction.FORWARD */ ));
            assert.strictEqual(editor.state.doc.toString(), 'first line\nsecond line');
        });
        it('does go forwards if the cursor is not in the last line, but force is specified', function() {
            history.pushHistoryItem('first line\nsecond line');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            setCursorPosition(editor, 5); // Somewhere on the first line.
            assert.isTrue(editorHistory.moveHistory(1 /* Direction.FORWARD */ , /* force */ true));
            assert.strictEqual(editor.state.doc.toString(), '');
        });
        it('sets the cursor to the end of the first line when moving backwards', function() {
            history.pushHistoryItem('first line\nsecond line');
            editorHistory.moveHistory(-1 /* Direction.BACKWARD */ );
            assert.strictEqual(editor.state.selection.main.head, 10);
        });
    });
    describe('historyCompletions', function() {
        it('has no completions when there is no input and the user does not explicitly request completions', function() {
            history.pushHistoryItem('x == 5');
            var completions = editorHistory.historyCompletions(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.CompletionContext(editor.state, 0, false));
            assert.isNull(completions);
        });
        it('has completions when there is no input but the user explicitly requests completions', function() {
            history.pushHistoryItem('x == 5');
            var options = editorHistory.historyCompletions(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.CompletionContext(editor.state, 0, true)).options;
            assert.lengthOf(options, 1);
        });
        it('has no completions if the caret is not at the end of the input', function() {
            history.pushHistoryItem('x === 5');
            setCodeMirrorContent(editor, 'x =');
            var completions = editorHistory.historyCompletions(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.CompletionContext(editor.state, 1, false));
            assert.isNull(completions);
        });
        it('has matching completions', function() {
            history.pushHistoryItem('x === 5');
            history.pushHistoryItem('y < 42');
            history.pushHistoryItem('x > 10');
            setCodeMirrorContent(editor, 'x ');
            var options = editorHistory.historyCompletions(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.CompletionContext(editor.state, 2, false)).options;
            assert.lengthOf(options, 2);
            assert.strictEqual(options[0].label, 'x > 10');
            assert.strictEqual(options[1].label, 'x === 5');
        });
    });
}); //# sourceMappingURL=TextEditorHistory.test.js.map


}),

}]);