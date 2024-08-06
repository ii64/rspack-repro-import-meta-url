"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_AutocompleteTestRunner_js"], {
"./legacy_test_runner/sources_test_runner/AutocompleteTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dumpSuggestions: function() { return dumpSuggestions; }
});
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorTestRunner.js */ "./legacy_test_runner/sources_test_runner/EditorTestRunner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpSuggestions = function dumpSuggestions(textEditor, lines) {
    var resolve;
    var promise = new Promise(function(fulfill) {
        resolve = fulfill;
    });
    var lineNumber = -1;
    var columnNumber;
    for(var i = 0; i < lines.length; ++i){
        columnNumber = lines[i].indexOf('|');
        if (columnNumber !== -1) {
            lineNumber = i;
            break;
        }
    }
    if (lineNumber === -1) {
        throw new Error('Test case is invalid: cursor position is not marked with \'|\' symbol.');
    }
    textEditor.setText(lines.join('\n').replace('|', ''));
    textEditor.setSelection(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange.createFromLocation(lineNumber, columnNumber));
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addSniffer(TextEditor.TextEditorAutocompleteController.prototype, 'onSuggestionsShownForTest', suggestionsShown);
    textEditor.autocompleteController.autocomplete();
    function suggestionsShown(words) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('========= Selection In Editor =========');
        (0,_EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__.dumpTextWithSelection)(textEditor);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('======= Autocomplete Suggestions =======');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('[' + words.map(function(item) {
            return item.text;
        }).join(', ') + ']');
        resolve();
    }
    return promise;
};


}),
"./legacy_test_runner/sources_test_runner/EditorTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createTestEditor: function() { return createTestEditor; },
  dumpSelectionStats: function() { return dumpSelectionStats; },
  dumpTextWithSelection: function() { return dumpTextWithSelection; },
  fakeKeyEvent: function() { return fakeKeyEvent; },
  setLineSelections: function() { return setLineSelections; },
  typeIn: function() { return typeIn; }
});
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var createTestEditor = function createTestEditor(clientHeight, textEditorDelegate) {
    var textEditor = new SourceFrame.SourcesTextEditor(textEditorDelegate || new SourceFrame.SourcesTextEditorDelegate());
    clientHeight = clientHeight || 100;
    textEditor.element.style.height = clientHeight + 'px';
    textEditor.element.style.flex = 'none';
    textEditor.show(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().element);
    return textEditor;
};
function textWithSelection(text, selections) {
    if (!selections.length) {
        return text;
    }
    function lineWithCursor(line, column, cursorChar) {
        return line.substring(0, column) + cursorChar + line.substring(column);
    }
    var lines = text.split('\n');
    selections.sort(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange.comparator);
    for(var i = selections.length - 1; i >= 0; --i){
        var selection = selections[i];
        selection = selection.normalize();
        var endCursorChar = selection.isEmpty() ? '|' : '<';
        lines[selection.endLine] = lineWithCursor(lines[selection.endLine], selection.endColumn, endCursorChar);
        if (!selection.isEmpty()) {
            lines[selection.startLine] = lineWithCursor(lines[selection.startLine], selection.startColumn, '>');
        }
    }
    return lines.join('\n');
}
var dumpTextWithSelection = function dumpTextWithSelection(textEditor, dumpWhiteSpaces) {
    var text = textWithSelection(textEditor.text(), textEditor.selections());
    if (dumpWhiteSpaces) {
        text = text.replace(/ /g, '.');
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(text);
};
var setLineSelections = function setLineSelections(editor, selections) {
    var coords = [];
    for(var i = 0; i < selections.length; ++i){
        var selection = selections[i];
        if (typeof selection.column === 'number') {
            selection.from = selection.column;
            selection.to = selection.column;
        }
        coords.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(selection.line, selection.from, selection.line, selection.to));
    }
    editor.setSelections(coords);
};
var typeIn = function typeIn(editor, typeText, callback) {
    callback = callback || new Function();
    var noop = new Function();
    for(var charIndex = 0; charIndex < typeText.length; ++charIndex){
        var iterationCallback = charIndex + 1 === typeText.length ? callback : noop;
        switch(typeText[charIndex]){
            case '\n':
                fakeKeyEvent(editor, 'Enter', null, iterationCallback);
                break;
            case 'L':
                fakeKeyEvent(editor, 'ArrowLeft', null, iterationCallback);
                break;
            case 'R':
                fakeKeyEvent(editor, 'ArrowRight', null, iterationCallback);
                break;
            case 'U':
                fakeKeyEvent(editor, 'ArrowUp', null, iterationCallback);
                break;
            case 'D':
                fakeKeyEvent(editor, 'ArrowDown', null, iterationCallback);
                break;
            default:
                fakeKeyEvent(editor, typeText[charIndex], null, iterationCallback);
        }
    }
};
var eventCodes = {
    Enter: 13,
    Home: 36,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40
};
function createCodeMirrorFakeEvent(editor, eventType, code, charCode, modifiers) {
    function eventPreventDefault() {
        this.handled = true;
    }
    var event = {
        _handled: false,
        type: eventType,
        keyCode: code,
        charCode: charCode,
        preventDefault: eventPreventDefault,
        stopPropagation: function stopPropagation() {},
        target: editor.codeMirror().display.input.textarea
    };
    if (modifiers) {
        for(var i = 0; i < modifiers.length; ++i){
            event[modifiers[i]] = true;
        }
    }
    return event;
}
function fakeCodeMirrorKeyEvent(editor, eventType, code, charCode, modifiers) {
    var event = createCodeMirrorFakeEvent(editor, eventType, code, charCode, modifiers);
    switch(eventType){
        case 'keydown':
            editor.codeMirror().triggerOnKeyDown(event);
            break;
        case 'keypress':
            editor.codeMirror().triggerOnKeyPress(event);
            break;
        case 'keyup':
            editor.codeMirror().triggerOnKeyUp(event);
            break;
        default:
            throw new Error('Unknown KeyEvent type');
    }
    return event.handled;
}
function fakeCodeMirrorInputEvent(editor, character) {
    if (typeof character !== 'string') {
        return;
    }
    var input = editor.codeMirror().display.input;
    var value = input.textarea.value;
    var newValue = value.substring(0, input.textarea.selectionStart) + character + value.substring(input.textarea.selectionEnd);
    var caretPosition = input.textarea.selectionStart + character.length;
    input.textarea.value = newValue;
    input.textarea.setSelectionRange(caretPosition, caretPosition);
    input.poll();
}
var fakeKeyEvent = function fakeKeyEvent(editor, originalCode, modifiers, callback) {
    modifiers = modifiers || [];
    var code;
    var charCode;
    if (originalCode === '\'') {
        code = 222;
        charCode = 0;
    } else if (originalCode === '"') {
        code = 222;
        modifiers.push('shiftKey');
        charCode = 34;
    } else if (originalCode === '(') {
        code = '9'.charCodeAt(0);
        modifiers.push('shiftKey');
        charCode = originalCode.charCodeAt(0);
    }
    code = code || eventCodes[originalCode] || originalCode;
    if (typeof code === 'string') {
        code = code.charCodeAt(0);
    }
    if (fakeCodeMirrorKeyEvent(editor, 'keydown', code, charCode, modifiers)) {
        callback();
        return;
    }
    if (fakeCodeMirrorKeyEvent(editor, 'keypress', code, charCode, modifiers)) {
        callback();
        return;
    }
    var inputReadPromise = new Promise(function(x) {
        return editor.codeMirror().on('inputRead', x);
    });
    fakeCodeMirrorInputEvent(editor, originalCode);
    fakeCodeMirrorKeyEvent(editor, 'keyup', code, charCode, modifiers);
    inputReadPromise.then(callback);
};
var dumpSelectionStats = function dumpSelectionStats(textEditor) {
    var listHashMap = {};
    var sortedKeys = [];
    var selections = textEditor.selections();
    for(var i = 0; i < selections.length; ++i){
        var selection = selections[i];
        var text = textEditor.text(selection);
        if (!listHashMap[text]) {
            listHashMap[text] = 1;
            sortedKeys.push(text);
        } else {
            ++listHashMap[text];
        }
    }
    for(var i1 = 0; i1 < sortedKeys.length; ++i1){
        var keyName = sortedKeys[i1];
        if (!keyName.length) {
            keyName = '<Empty string>';
        } else {
            keyName = '\'' + keyName + '\'';
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(keyName + ': ' + listHashMap[sortedKeys[i1]]);
    }
};


}),

}]);