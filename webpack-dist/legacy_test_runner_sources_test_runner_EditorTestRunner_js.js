(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_sources_test_runner_EditorTestRunner_js"],{

/***/ "./legacy_test_runner/sources_test_runner/EditorTestRunner.js":
/*!********************************************************************!*\
  !*** ./legacy_test_runner/sources_test_runner/EditorTestRunner.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTestEditor: () => (/* binding */ createTestEditor),
/* harmony export */   dumpSelectionStats: () => (/* binding */ dumpSelectionStats),
/* harmony export */   dumpTextWithSelection: () => (/* binding */ dumpTextWithSelection),
/* harmony export */   fakeKeyEvent: () => (/* binding */ fakeKeyEvent),
/* harmony export */   setLineSelections: () => (/* binding */ setLineSelections),
/* harmony export */   typeIn: () => (/* binding */ typeIn)
/* harmony export */ });
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const createTestEditor = function(clientHeight, textEditorDelegate) {
  const textEditor =
      new SourceFrame.SourcesTextEditor(textEditorDelegate || new SourceFrame.SourcesTextEditorDelegate());
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

  const lines = text.split('\n');
  selections.sort(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange.comparator);

  for (let i = selections.length - 1; i >= 0; --i) {
    let selection = selections[i];
    selection = selection.normalize();
    const endCursorChar = (selection.isEmpty() ? '|' : '<');
    lines[selection.endLine] = lineWithCursor(lines[selection.endLine], selection.endColumn, endCursorChar);

    if (!selection.isEmpty()) {
      lines[selection.startLine] = lineWithCursor(lines[selection.startLine], selection.startColumn, '>');
    }
  }

  return lines.join('\n');
}

const dumpTextWithSelection = function(textEditor, dumpWhiteSpaces) {
  let text = textWithSelection(textEditor.text(), textEditor.selections());

  if (dumpWhiteSpaces) {
    text = text.replace(/ /g, '.');
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(text);
};

const setLineSelections = function(editor, selections) {
  const coords = [];

  for (let i = 0; i < selections.length; ++i) {
    const selection = selections[i];

    if (typeof selection.column === 'number') {
      selection.from = selection.column;
      selection.to = selection.column;
    }

    coords.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextRange.TextRange(selection.line, selection.from, selection.line, selection.to));
  }

  editor.setSelections(coords);
};

const typeIn = function(editor, typeText, callback) {
  callback = callback || new Function();
  const noop = new Function();

  for (let charIndex = 0; charIndex < typeText.length; ++charIndex) {
    const iterationCallback = (charIndex + 1 === typeText.length ? callback : noop);

    switch (typeText[charIndex]) {
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

const eventCodes = {
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

  const event = {
    _handled: false,
    type: eventType,
    keyCode: code,
    charCode: charCode,
    preventDefault: eventPreventDefault,
    stopPropagation: function() {},
    target: editor.codeMirror().display.input.textarea
  };

  if (modifiers) {
    for (let i = 0; i < modifiers.length; ++i) {
      event[modifiers[i]] = true;
    }
  }

  return event;
}

function fakeCodeMirrorKeyEvent(editor, eventType, code, charCode, modifiers) {
  const event = createCodeMirrorFakeEvent(editor, eventType, code, charCode, modifiers);

  switch (eventType) {
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
  const input = editor.codeMirror().display.input;
  const value = input.textarea.value;
  const newValue =
      value.substring(0, input.textarea.selectionStart) + character + value.substring(input.textarea.selectionEnd);
  const caretPosition = input.textarea.selectionStart + character.length;
  input.textarea.value = newValue;
  input.textarea.setSelectionRange(caretPosition, caretPosition);
  input.poll();
}

const fakeKeyEvent = function(editor, originalCode, modifiers, callback) {
  modifiers = modifiers || [];
  let code;
  let charCode;

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

  const inputReadPromise = new Promise(x => editor.codeMirror().on('inputRead', x));
  fakeCodeMirrorInputEvent(editor, originalCode);
  fakeCodeMirrorKeyEvent(editor, 'keyup', code, charCode, modifiers);
  inputReadPromise.then(callback);
};

const dumpSelectionStats = function(textEditor) {
  const listHashMap = {};
  const sortedKeys = [];
  const selections = textEditor.selections();

  for (let i = 0; i < selections.length; ++i) {
    const selection = selections[i];
    const text = textEditor.text(selection);

    if (!listHashMap[text]) {
      listHashMap[text] = 1;
      sortedKeys.push(text);
    } else {
      ++listHashMap[text];
    }
  }

  for (let i = 0; i < sortedKeys.length; ++i) {
    let keyName = sortedKeys[i];

    if (!keyName.length) {
      keyName = '<Empty string>';
    } else {
      keyName = '\'' + keyName + '\'';
    }

    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult(keyName + ': ' + listHashMap[sortedKeys[i]]);
  }
};


/***/ }),

/***/ "./legacy_test_runner/test_runner/test_runner.js":
/*!*******************************************************!*\
  !*** ./legacy_test_runner/test_runner/test_runner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.




/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
    self.TestRunner.BrowserAgent = target.browserAgent();
    self.TestRunner.CSSAgent = target.cssAgent();
    self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
    self.TestRunner.DOMAgent = target.domAgent();
    self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
    self.TestRunner.DebuggerAgent = target.debuggerAgent();
    self.TestRunner.EmulationAgent = target.emulationAgent();
    self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
    self.TestRunner.InputAgent = target.inputAgent();
    self.TestRunner.InspectorAgent = target.inspectorAgent();
    self.TestRunner.NetworkAgent = target.networkAgent();
    self.TestRunner.OverlayAgent = target.overlayAgent();
    self.TestRunner.PageAgent = target.pageAgent();
    self.TestRunner.ProfilerAgent = target.profilerAgent();
    self.TestRunner.RuntimeAgent = target.runtimeAgent();
    self.TestRunner.TargetAgent = target.targetAgent();
    self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
    self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
    self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
    self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
    self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
    self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
    self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
    self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
    self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
    self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
    self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
    self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
    self.TestRunner.mainTarget = target;
}
async function _executeTestScript() {
    const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
    if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
        /* eslint-disable no-console */
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
        /* eslint-enable no-console */
        // Auto-start unit tests
        self.test = async function () {
            await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
        };
        return;
    }
    try {
        await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    }
    catch (err) {
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
    }
}
/** @type {boolean} */
let _startedTest = false;
/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetAdded(target) {
        if (target.id() === 'main' && target.type() === 'frame' ||
            target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
            _setupTestHelpers(target);
            if (_startedTest) {
                return;
            }
            _startedTest = true;
            _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
        }
    }
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetRemoved(target) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());
const globalTestRunner = self.TestRunner;

//# sourceMappingURL=test_runner.js.map

/***/ }),

/***/ "./legacy_test_runner/test_runner lazy recursive":
/*!***************************************************************!*\
  !*** ./legacy_test_runner/test_runner/ lazy namespace object ***!
  \***************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);