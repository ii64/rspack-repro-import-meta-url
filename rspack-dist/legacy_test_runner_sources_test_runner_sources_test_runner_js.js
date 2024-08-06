"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_sources_test_runner_sources_test_runner_js"], {
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
"./legacy_test_runner/sources_test_runner/LiveEditTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commitSource: function() { return commitSource; },
  replaceInSource: function() { return replaceInSource; },
  undoSourceEditing: function() { return undoSourceEditing; }
});
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var replaceInSource = function replaceInSource(sourceFrame, string, replacement) {
    sourceFrame.textEditor.setReadOnly(false);
    for(var i = 0; i < sourceFrame.textEditor.linesCount; ++i){
        var line = sourceFrame.textEditor.line(i);
        var column = line.indexOf(string);
        if (column === -1) {
            continue;
        }
        var range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(i, column, i, column + string.length);
        sourceFrame.textEditor.editRange(range, replacement);
        break;
    }
};
var commitSource = function commitSource(sourceFrame) {
    sourceFrame.commitEditing();
};
var undoSourceEditing = function undoSourceEditing(sourceFrame) {
    sourceFrame.textEditor.undo();
};


}),
"./legacy_test_runner/sources_test_runner/SearchTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dumpSearchMatches: function() { return dumpSearchMatches; },
  dumpSearchResults: function() { return dumpSearchResults; },
  replaceAndDumpChange: function() { return replaceAndDumpChange; },
  runSearchAndDumpResults: function() { return runSearchAndDumpResults; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpSearchResults = function dumpSearchResults(searchResults) {
    function comparator(a, b) {
        a.url.localeCompare(b.url);
    }
    searchResults.sort(comparator);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search results: ');
    for(var i = 0; i < searchResults.length; i++){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('url: ' + searchResults[i].url.replace(/VM\d+/, 'VMXX') + ', matchesCount: ' + searchResults[i].matchesCount);
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};
var dumpSearchMatches = function dumpSearchMatches(searchMatches) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search matches: ');
    for(var i = 0; i < searchMatches.length; i++){
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('lineNumber: ' + searchMatches[i].lineNumber + ', line: \'' + searchMatches[i].lineContent + '\'');
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('');
};
var runSearchAndDumpResults = function runSearchAndDumpResults(scope, searchConfig, callback) {
    var searchResults = [];
    var progress = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress();
    scope.performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback);
    function searchResultCallback(searchResult) {
        searchResults.push(searchResult);
    }
    function searchFinishedCallback() {
        function comparator(searchResultA, searchResultB) {
            var aUrl = searchResultA.uiSourceCode.url();
            var bUrl = searchResultB.uiSourceCode.url();
            return aUrl > bUrl ? 1 : bUrl > aUrl ? -1 : 0;
        }
        searchResults.sort(comparator);
        for(var i = 0; i < searchResults.length; ++i){
            var searchResult = searchResults[i];
            var uiSourceCode = searchResult.uiSourceCode;
            var searchMatches = searchResult.searchMatches;
            if (!searchMatches.length) {
                continue;
            }
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Search result #' + (i + 1) + ': uiSourceCode.url = ' + uiSourceCode.url().replace(/VM\d+/, 'VMXX'));
            for(var j = 0; j < searchMatches.length; ++j){
                var lineNumber = searchMatches[j].lineNumber;
                var lineContent = searchMatches[j].lineContent;
                _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('  search match #' + (j + 1) + ': lineNumber = ' + lineNumber + ', lineContent = \'' + lineContent + '\'');
            }
        }
        callback();
    }
};
var replaceAndDumpChange = function replaceAndDumpChange(sourceFrame, searchConfig, replacement, replaceAll) {
    var modifiers = [];
    if (searchConfig.isRegex) {
        modifiers.push('regex');
    }
    if (searchConfig.caseSensitive) {
        modifiers.push('caseSensitive');
    }
    if (replaceAll) {
        modifiers.push('replaceAll');
    }
    var modifiersString = modifiers.length ? ' (' + modifiers.join(', ') + ')' : '';
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Running replace test for /' + searchConfig.query + '/' + replacement + '/ ' + modifiersString + ':');
    var editor = sourceFrame.textEditor;
    var oldLines = [];
    for(var i = 0; i < editor.linesCount; ++i){
        oldLines.push(editor.line(i));
    }
    var searchableView = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__.SourcesPanel.SourcesPanel.instance().sourcesView().searchableView();
    searchableView.showSearchField();
    searchableView.caseSensitiveButton.setToggled(searchConfig.caseSensitive);
    searchableView.regexButton.setToggled(searchConfig.isRegex);
    searchableView.searchInputElement.value = searchConfig.query;
    searchableView.replaceToggleButton.setToggled(true);
    searchableView.updateSecondRowVisibility();
    searchableView.replaceInputElement.value = replacement;
    searchableView.performSearch(true, true);
    if (replaceAll) {
        searchableView.replaceAll();
    } else {
        searchableView.replace();
    }
    var newLines = [];
    for(var i1 = 0; i1 < editor.linesCount; ++i1){
        newLines.push(editor.line(i1));
    }
    for(var i2 = 0; i2 < newLines.length; ++i2){
        if (oldLines[i2] === newLines[i2]) {
            continue;
        }
        var oldLine = oldLines[i2];
        var newLine = newLines[i2];
        var prefixLength = 0;
        for(var j = 0; j < oldLine.length && j < newLine.length && newLine[j] === oldLine[j]; ++j){
            ++prefixLength;
        }
        var postfixLength = 0;
        for(var j1 = 0; j1 < oldLine.length && j1 < newLine.length && newLine[newLine.length - j1 - 1] === oldLine[oldLine.length - j1 - 1]; ++j1){
            ++postfixLength;
        }
        var prefix = oldLine.substring(0, prefixLength);
        var removed = oldLine.substring(prefixLength, oldLine.length - postfixLength);
        var added = newLine.substring(prefixLength, newLine.length - postfixLength);
        var postfix = oldLine.substring(oldLine.length - postfixLength);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('  - ' + prefix + '#' + removed + '#' + added + '#' + postfix);
    }
};
_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.deprecatedInitAsync("\n  if (window.GCController)\n    GCController.collect();\n");


}),
"./legacy_test_runner/sources_test_runner/SourcesTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addScriptUISourceCode: function() { return addScriptUISourceCode; },
  dumpNavigatorView: function() { return dumpNavigatorView; },
  dumpNavigatorViewInAllModes: function() { return dumpNavigatorViewInAllModes; },
  dumpNavigatorViewInMode: function() { return dumpNavigatorViewInMode; },
  dumpSwatchPositions: function() { return dumpSwatchPositions; }
});
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}


/**
 * @param {!Sources.NavigatorView.NavigatorView} navigatorView
 * @param {boolean=} dumpIcons
 */ var dumpNavigatorView = function dumpNavigatorView(navigatorView, dumpIcons) {
    dumpNavigatorTreeOutline(navigatorView.scriptsTree);
    /**
   * @param {string} prefix
   * @param {!UI.TreeElement} treeElement
   */ function dumpNavigatorTreeElement(prefix, treeElement) {
        var titleText = '';
        if (treeElement.leadingIconsElement && dumpIcons) {
            var icons = treeElement.leadingIconsElement.querySelectorAll('[is=ui-icon]');
            icons = Array.prototype.slice.call(icons);
            var iconTypes = icons.map(function(icon) {
                return icon.iconType;
            });
            if (iconTypes.length) {
                titleText = titleText + '[' + iconTypes.join(', ') + '] ';
            }
        }
        titleText += treeElement.title;
        if (treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystem || treeElement.nodeType === _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.NavigatorView.Types.FileSystemFolder) {
            var hasMappedFiles = treeElement.listItemElement.classList.contains('has-mapped-files');
            if (!hasMappedFiles) {
                titleText += ' [dimmed]';
            }
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(prefix + titleText);
        treeElement.expand();
        var children = treeElement.children();
        for(var i = 0; i < children.length; ++i){
            dumpNavigatorTreeElement(prefix + '  ', children[i]);
        }
    }
    /**
   * @param {!UI.TreeOutline} treeOutline
   */ function dumpNavigatorTreeOutline(treeOutline) {
        var children = treeOutline.rootElement().children();
        for(var i = 0; i < children.length; ++i){
            dumpNavigatorTreeElement('', children[i]);
        }
    }
};
/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 */ var dumpNavigatorViewInAllModes = function dumpNavigatorViewInAllModes(view) {
    [
        'frame',
        'frame/domain',
        'frame/domain/folder',
        'domain',
        'domain/folder'
    ].forEach(dumpNavigatorViewInMode.bind(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner, view));
};
/**
 * @param {!Sources.NavigatorView.NavigatorView} view
 * @param {string} mode
 */ var dumpNavigatorViewInMode = function dumpNavigatorViewInMode(view, mode) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult(_instanceof(view, _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_0__.SourcesNavigator.NetworkNavigatorView) ? 'Sources:' : 'Content Scripts:');
    view.groupByFrame = mode.includes('frame');
    view.groupByDomain = mode.includes('domain');
    view.groupByFolder = mode.includes('folder');
    view.resetForTest();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('-------- Setting mode: [' + mode + ']');
    dumpNavigatorView(view);
};
/**
 * @param {string} url
 * @param {string} content
 * @param {boolean=} isContentScript
 * @param {number=} worldId
 * @return {!Promise}
 */ var addScriptUISourceCode = function addScriptUISourceCode(url, content, isContentScript, worldId) {
    content += '\n//# sourceURL=' + url;
    if (isContentScript) {
        content = "testRunner.evaluateScriptInIsolatedWorld(".concat(worldId, ", `").concat(content, "`)");
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.evaluateInPageAnonymously(content);
    return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.waitForUISourceCode(url);
};
var dumpSwatchPositions = function dumpSwatchPositions(sourceFrame, bookmarkType) {
    var textEditor = sourceFrame.textEditor;
    var markers = textEditor.bookmarks(textEditor.fullRange(), bookmarkType);
    for(var i = 0; i < markers.length; i++){
        var position = markers[i].position();
        var swatch = markers[i].marker.widgetNode.firstChild;
        var text = swatch.textContent;
        if (swatch.localName === 'devtools-color-swatch') {
            text = swatch.color.asString(swatch.format);
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_1__.TestRunner.addResult('Line ' + position.startLine + ', Column ' + position.startColumn + ': ' + text);
    }
};


}),
"./legacy_test_runner/sources_test_runner/sources_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SourcesTestRunner: function() { return SourcesTestRunner; }
});
/* harmony import */var _AutocompleteTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutocompleteTestRunner.js */ "./legacy_test_runner/sources_test_runner/AutocompleteTestRunner.js");
/* harmony import */var _DebuggerTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebuggerTestRunner.js */ "./legacy_test_runner/sources_test_runner/DebuggerTestRunner.js");
/* harmony import */var _EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorTestRunner.js */ "./legacy_test_runner/sources_test_runner/EditorTestRunner.js");
/* harmony import */var _LiveEditTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveEditTestRunner.js */ "./legacy_test_runner/sources_test_runner/LiveEditTestRunner.js");
/* harmony import */var _SearchTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchTestRunner.js */ "./legacy_test_runner/sources_test_runner/SearchTestRunner.js");
/* harmony import */var _SourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesTestRunner.js */ "./legacy_test_runner/sources_test_runner/SourcesTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






var SourcesTestRunner = _object_spread({}, _SourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_5__, _DebuggerTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _LiveEditTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _SearchTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _EditorTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _AutocompleteTestRunner_js__WEBPACK_IMPORTED_MODULE_0__);


}),

}]);